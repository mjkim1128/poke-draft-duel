// 배경음악 관리: 화면에 맞는 곡을 고르고, 켜기/끄기와 음량 설정을 기억한다.
//   playSong("battle")   곡을 반복 재생 (같은 곡이 이미 나오고 있으면 그대로 둔다)
//   playJingle("win")    짧은 곡을 한 번만 재생
// 브라우저는 사용자가 화면을 한 번 누르기 전에는 소리를 못 내게 막는다. 그래서 곡을 요청해 두고,
// 첫 터치가 들어오면 그때 연주를 시작한다.
import { Chiptune } from "./engine";
import { SONGS } from "./songs";

// 음악 파일을 쓰는 곡. 화면에 들어올 때마다 아래 파일 중 하나를 골라(방금 나온 것은 피해서) 반복 재생한다.
// 파일은 public/bgm/ 에 있다. 파일을 못 불러오면 songs.js의 8비트 곡이 대신 나온다.
// 타이틀, 승리, 패배는 파일 없이 8비트 곡을 그대로 쓴다.
const BGM_BASE = (typeof process !== "undefined" && process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "") + "/bgm/";
export const FILE_SONGS = {
    select: ["select1.mp3", "select2.mp3"], // 포켓몬 선출, 교체 화면
    battle: ["battle1.mp3", "battle2.mp3"], // 일반 배틀
    boss: ["boss1.mp3", "boss2.mp3"], // 네임드 보스 배틀
};
const lastPicked = {}; // 곡 이름 -> 방금 고른 파일

// 두 개 이상이면 방금 나온 것을 빼고 무작위로 하나 고른다
export function pickFile(id, random = Math.random) {
    const files = FILE_SONGS[id];
    if (!files) return null;
    const choices = files.length > 1 ? files.filter((f) => f !== lastPicked[id]) : files;
    const file = choices[Math.floor(random() * choices.length)];
    lastPicked[id] = file;
    return file;
}

const KEY = "battlefactory-bgm";
const DEFAULT_STATE = { on: true, volume: 0.5 };

let state = null;
let ctx = null;
let master = null;
let current = null; // { id, gain, tune }
let wanted = null; // { id, jingle }

function loadState() {
    try {
        const saved = JSON.parse(window.localStorage.getItem(KEY));
        if (saved && typeof saved.on === "boolean" && typeof saved.volume === "number") return saved;
    } catch (e) {
        // 저장소를 못 쓰는 환경이면 기본값
    }
    return { ...DEFAULT_STATE };
}

function saveState() {
    try {
        window.localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
        // 저장하지 못해도 이번 접속에서는 그대로 쓴다
    }
}

export function getBgmState() {
    if (!state) state = loadState();
    return { ...state };
}

function ensureContext() {
    if (ctx) return ctx;
    const AudioContextClass = typeof window !== "undefined" && (window.AudioContext || window.webkitAudioContext);
    if (!AudioContextClass) return null;
    ctx = new AudioContextClass();
    master = ctx.createGain();
    master.gain.value = getBgmState().volume;
    // 여러 소리가 겹쳐도 찢어지지 않게 한다
    const limiter = ctx.createDynamicsCompressor();
    master.connect(limiter);
    limiter.connect(ctx.destination);
    return ctx;
}

function fadeOutCurrent() {
    if (!current) return;
    const old = current;
    current = null;
    if (old.tune) old.tune.stop();
    old.gain.gain.setTargetAtTime(0, ctx.currentTime, 0.08);
    setTimeout(() => old.gain.disconnect(), 600);
}

function start() {
    const song = SONGS[wanted.id];
    if (!song) return;
    fadeOutCurrent();
    const gain = ctx.createGain();
    gain.connect(master);
    const mine = { id: wanted.id, gain, tune: null };
    current = mine;
    const loop = !wanted.jingle;
    const playSynth = () => {
        const tune = new Chiptune(ctx, gain);
        mine.tune = tune;
        tune.play(song, () => {
            // 한 번만 연주하는 곡이 끝나면 조용히 둔다
            if (current === mine) {
                current = null;
                gain.disconnect();
            }
        });
    };
    const file = pickFile(mine.id);
    if (!file) return playSynth();
    // 파일은 통째로 풀어서 올려 두지 않고, 재생하면서 불러온다 (3분짜리 곡이 메모리를 많이 쓰지 않게)
    const audio = new Audio(BGM_BASE + file);
    audio.loop = loop;
    audio.preload = "auto";
    const source = ctx.createMediaElementSource(audio);
    source.connect(gain);
    mine.tune = {
        stop() {
            // 소리가 서서히 작아지는 동안 둔 뒤에 멈춘다
            setTimeout(() => {
                audio.pause();
                audio.removeAttribute("src");
                audio.load();
                source.disconnect();
            }, 700);
        },
    };
    // 파일을 못 불러오면 8비트 곡으로 대신한다
    audio.addEventListener("error", () => {
        if (current === mine) {
            mine.tune.stop();
            playSynth();
        }
    });
    audio.play().catch(() => {
        if (current === mine) playSynth();
    });
}

function apply() {
    if (!getBgmState().on || !wanted) {
        if (ctx) fadeOutCurrent();
        return;
    }
    if (!ensureContext()) return;
    if (ctx.state !== "running") return; // 첫 터치를 기다린다 (unlock이 다시 부른다)
    if (current && current.id === wanted.id) return;
    start();
}

// 첫 터치(또는 키 입력)에서 소리를 열고, 기다리던 곡을 시작한다
function unlock() {
    if (!getBgmState().on || !ensureContext()) return;
    ctx.resume()
        .then(() => {
            if (ctx.state === "running") apply();
        })
        .catch(() => {});
}

export function playSong(id) {
    wanted = { id, jingle: false };
    apply();
}

export function playJingle(id) {
    wanted = { id, jingle: true };
    // 효과 곡은 같은 이름이라도 새로 시작한다
    if (current && current.id === id) fadeOutCurrent();
    apply();
}

export function setBgmEnabled(on) {
    state = { ...getBgmState(), on };
    saveState();
    if (on) {
        unlock(); // 설정창에서 누른 것이라 소리를 열 수 있다
        apply();
    } else if (ctx) {
        fadeOutCurrent();
    }
}

export function setBgmVolume(volume) {
    state = { ...getBgmState(), volume };
    saveState();
    if (master) master.gain.setTargetAtTime(volume, ctx.currentTime, 0.05);
}

if (typeof document !== "undefined") {
    const once = () => {
        unlock();
        if (ctx && ctx.state === "running") {
            document.removeEventListener("pointerdown", once);
            document.removeEventListener("keydown", once);
        }
    };
    document.addEventListener("pointerdown", once, { passive: true });
    document.addEventListener("keydown", once);
    // 탭을 가리면 소리를 멈추고, 돌아오면 이어서 낸다
    document.addEventListener("visibilitychange", () => {
        if (!ctx) return;
        if (document.hidden) ctx.suspend().catch(() => {});
        else if (getBgmState().on) ctx.resume().catch(() => {});
    });
}

export const __test = { SONGS };
