// 악보 글자 -> 연주할 음 목록.
//   "C5:2 E5:2 _:4"  한 음은 "음이름옥타브:길이", 쉼표는 "_:길이". 길이의 단위는 16분음표 한 칸.
//   음이름: C D E F G A B, 반음 올림은 #, 내림은 b (C#4, Bb3)
const SEMITONE = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const TOKEN = /^(?:_|([A-G])([#b]?)(\d)):(\d+)$/;

export function noteFrequency(name) {
    const m = /^([A-G])([#b]?)(\d)$/.exec(name);
    if (!m) throw new Error("알 수 없는 음: " + name);
    const midi = (Number(m[3]) + 1) * 12 + SEMITONE[m[1]] + (m[2] === "#" ? 1 : m[2] === "b" ? -1 : 0);
    return 440 * Math.pow(2, (midi - 69) / 12);
}

// 반환: { events: [{ step, length, freq }], steps: 전체 길이 }
export function parseNotes(text) {
    const events = [];
    let step = 0;
    for (const token of text.trim().split(/\s+/)) {
        const m = TOKEN.exec(token);
        if (!m) throw new Error("악보에 잘못된 글자가 있습니다: " + token);
        const length = Number(m[4]);
        if (m[1]) events.push({ step, length, freq: noteFrequency(m[1] + m[2] + m[3]) });
        step += length;
    }
    return { events, steps: step };
}

// 북 패턴: 한 글자가 한 칸. k 큰북, s 작은북, h 하이햇, . 쉼
export function parseDrums(pattern, totalSteps) {
    const events = [];
    for (let step = 0; step < totalSteps; step++) {
        const c = pattern[step % pattern.length];
        if (c === "k" || c === "s" || c === "h") events.push({ step, kind: c });
    }
    return events;
}
