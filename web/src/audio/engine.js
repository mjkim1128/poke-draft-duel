// 8비트 곡을 WebAudio로 연주하는 엔진: 사각파/삼각파로 가락을 내고, 잡음으로 북을 낸다.
// 연주 시각을 미리(0.3초 앞까지) 예약해 두는 방식이라 화면이 잠깐 느려져도 박자가 흔들리지 않는다.
import { parseDrums, parseNotes } from "./notes";

const LOOKAHEAD = 0.3; // 이만큼 앞의 음까지 미리 예약한다 (초)
const TICK_MS = 50; // 예약을 확인하는 간격

// 곡 데이터 -> { stepSeconds, steps, byStep: Map<칸, [소리...]> }
export function compileSong(song) {
    const stepSeconds = 60 / song.bpm / 4;
    let steps = 0;
    const channels = song.channels.map((ch) => {
        const parsed = parseNotes(ch.notes);
        steps = Math.max(steps, parsed.steps);
        return { ch, parsed };
    });
    const byStep = new Map();
    const add = (step, item) => {
        if (!byStep.has(step)) byStep.set(step, []);
        byStep.get(step).push(item);
    };
    for (const { ch, parsed } of channels) {
        for (const e of parsed.events) add(e.step, { type: "note", wave: ch.wave, vol: ch.vol, freq: e.freq, length: e.length });
    }
    if (song.drums) {
        for (const e of parseDrums(song.drums.pattern, steps)) add(e.step, { type: "drum", kind: e.kind, vol: song.drums.vol });
    }
    return { stepSeconds, steps, byStep, loop: song.loop };
}

export class Chiptune {
    constructor(ctx, destination) {
        this.ctx = ctx;
        this.out = destination;
        this.waves = {};
        this.noise = null;
        this.timer = null;
        this.stopNodes = [];
    }

    pulseWave(duty) {
        const key = "p" + duty;
        if (!this.waves[key]) {
            const n = 32;
            const real = new Float32Array(n);
            const imag = new Float32Array(n);
            for (let i = 1; i < n; i++) imag[i] = (2 / (i * Math.PI)) * Math.sin(i * Math.PI * duty);
            this.waves[key] = this.ctx.createPeriodicWave(real, imag);
        }
        return this.waves[key];
    }

    noiseBuffer() {
        if (!this.noise) {
            const length = Math.floor(this.ctx.sampleRate * 0.5);
            const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
            this.noise = buffer;
        }
        return this.noise;
    }

    note(item, time, seconds) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        if (item.wave === "square") osc.setPeriodicWave(this.pulseWave(0.5));
        else if (item.wave === "pulse25") osc.setPeriodicWave(this.pulseWave(0.25));
        else osc.type = "triangle";
        osc.frequency.setValueAtTime(item.freq, time);
        // 음이 시작할 때 딸깍 소리가 나지 않게 아주 짧게 키우고, 끝에서 부드럽게 줄인다
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(item.vol, time + 0.005);
        gain.gain.setValueAtTime(item.vol, time + Math.max(seconds * 0.8, 0.01));
        gain.gain.linearRampToValueAtTime(0, time + Math.max(seconds * 0.98, 0.02));
        osc.connect(gain);
        gain.connect(this.out);
        osc.start(time);
        osc.stop(time + seconds + 0.02);
    }

    drum(item, time) {
        const { ctx } = this;
        const gain = ctx.createGain();
        gain.connect(this.out);
        if (item.kind === "k") {
            const osc = ctx.createOscillator();
            osc.type = "triangle";
            osc.frequency.setValueAtTime(160, time);
            osc.frequency.exponentialRampToValueAtTime(45, time + 0.1);
            gain.gain.setValueAtTime(item.vol * 1.6, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.14);
            osc.connect(gain);
            osc.start(time);
            osc.stop(time + 0.16);
            return;
        }
        const src = ctx.createBufferSource();
        src.buffer = this.noiseBuffer();
        const filter = ctx.createBiquadFilter();
        filter.type = item.kind === "h" ? "highpass" : "bandpass";
        filter.frequency.value = item.kind === "h" ? 7000 : 1800;
        const decay = item.kind === "h" ? 0.04 : 0.12;
        gain.gain.setValueAtTime(item.vol * (item.kind === "h" ? 0.5 : 1), time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + decay);
        src.connect(filter);
        filter.connect(gain);
        src.start(time);
        src.stop(time + decay + 0.02);
    }

    // 곡을 처음부터 연주한다. onEnd: 반복하지 않는 곡이 끝났을 때 한 번 불린다.
    play(song, onEnd) {
        this.stop();
        const compiled = compileSong(song);
        let step = 0;
        let stepTime = this.ctx.currentTime + 0.08;
        let ended = false;
        const tick = () => {
            while (stepTime < this.ctx.currentTime + LOOKAHEAD) {
                for (const item of compiled.byStep.get(step) || []) {
                    if (item.type === "note") this.note(item, stepTime, item.length * compiled.stepSeconds);
                    else this.drum(item, stepTime);
                }
                step++;
                stepTime += compiled.stepSeconds;
                if (step >= compiled.steps) {
                    if (compiled.loop) step = 0;
                    else {
                        // 마지막 음이 다 울린 뒤에 끝났다고 알린다
                        if (!ended) {
                            ended = true;
                            const wait = Math.max(0, (stepTime - this.ctx.currentTime) * 1000) + 100;
                            this.endTimer = setTimeout(() => onEnd && onEnd(), wait);
                        }
                        clearInterval(this.timer);
                        this.timer = null;
                        return;
                    }
                }
            }
        };
        tick();
        if (!ended) this.timer = setInterval(tick, TICK_MS);
    }

    // 타이머 없이 곡 전체를 한꺼번에 예약한다 (소리를 파일로 만들어 확인할 때 쓴다). 끝나는 시각을 돌려준다.
    scheduleAll(song, startTime = 0, repeat = 1) {
        const compiled = compileSong(song);
        for (let r = 0; r < repeat; r++) {
            for (let step = 0; step < compiled.steps; step++) {
                const time = startTime + (r * compiled.steps + step) * compiled.stepSeconds;
                for (const item of compiled.byStep.get(step) || []) {
                    if (item.type === "note") this.note(item, time, item.length * compiled.stepSeconds);
                    else this.drum(item, time);
                }
            }
        }
        return startTime + repeat * compiled.steps * compiled.stepSeconds;
    }

    stop() {
        if (this.timer) clearInterval(this.timer);
        this.timer = null;
        if (this.endTimer) clearTimeout(this.endTimer);
        this.endTimer = null;
    }
}
