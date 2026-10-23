// 직접 만든 8비트 곡들. 모두 이 프로젝트를 위해 새로 쓴 가락이라 저작권 걱정이 없다.
// 한 곡은 bpm, 반복 여부, 소리 채널(가락, 화음, 베이스), 북 패턴으로 이루어진다. 길이 단위는 16분음표 한 칸.

const rep = (text, n) => new Array(n).fill(text).join(" ");
// 화음의 세 음을 가운데 음이 한 번 더 나오게 16분음표로 풀어서 친다 (한 마디 = 4묶음)
const arp16 = ([a, b, c], groups) => rep(`${a}:1 ${b}:1 ${c}:1 ${b}:1`, groups);
// 8분음표로 풀어서 치기 (한 마디 = 2묶음)
const arp8 = ([a, b, c], groups) => rep(`${a}:2 ${b}:2 ${c}:2 ${b}:2`, groups);
// 베이스: 으뜸음을 8분음표로 두드리다 한 옥타브 위를 섞는다
const pump = (low, high) => `${low}:2 ${low}:2 ${high}:2 ${low}:2 ${low}:2 ${low}:2 ${high}:2 ${low}:2`;
// 베이스: 으뜸음과 5도를 4분음표로 (5도는 화음의 세 번째 음 한 옥타브 아래)
const walk = (chord) => {
    const fifth = chord.arp[2].replace(/\d/, (d) => String(Number(d) - 1));
    return `${chord.low}:4 ${fifth}:4 ${chord.low}:4 ${fifth}:4`;
};

const CH = {
    Am: { arp: ["A3", "C4", "E4"], low: "A2", high: "A3" },
    F: { arp: ["F3", "A3", "C4"], low: "F2", high: "F3" },
    G: { arp: ["G3", "B3", "D4"], low: "G2", high: "G3" },
    E: { arp: ["E3", "G#3", "B3"], low: "E2", high: "E3" },
    Dm: { arp: ["D4", "F4", "A4"], low: "D2", high: "D3" },
    Bb: { arp: ["Bb3", "D4", "F4"], low: "Bb2", high: "Bb3" },
    A: { arp: ["A3", "C#4", "E4"], low: "A2", high: "A3" },
    Gm: { arp: ["G3", "Bb3", "D4"], low: "G2", high: "G3" },
    C: { arp: ["C4", "E4", "G4"], low: "C3", high: "C4" },
};

// 한 마디를 두 화음이 반씩 나누는 경우("F+G"처럼 +로 이은 이름)는 화음마다 절반씩 친다
const half = (name) => (name.indexOf("+") >= 0 ? name.split("+") : null);
const barArp16 = (name) => {
    const two = half(name);
    return two ? arp16(CH[two[0]].arp, 2) + " " + arp16(CH[two[1]].arp, 2) : arp16(CH[name].arp, 4);
};
const barArp8 = (name) => {
    const two = half(name);
    return two ? arp8(CH[two[0]].arp, 1) + " " + arp8(CH[two[1]].arp, 1) : arp8(CH[name].arp, 2);
};
const barPump = (name) => {
    const two = half(name);
    if (!two) return pump(CH[name].low, CH[name].high);
    const [a, b] = two.map((n) => CH[n]);
    return `${a.low}:2 ${a.low}:2 ${a.high}:2 ${a.low}:2 ${b.low}:2 ${b.low}:2 ${b.high}:2 ${b.low}:2`;
};
const barWalk = (name) => {
    const two = half(name);
    if (!two) return walk(CH[name]);
    const [a, b] = two.map((n) => CH[n]);
    return `${a.low}:4 ${a.high}:4 ${b.low}:4 ${b.high}:4`;
};

// ---- 일반 배틀: 가 단조, 빠르고 힘찬 곡
const battleChords = ["Am", "Am", "F", "G", "Am", "Am", "F+G", "E"];
const battle = {
    bpm: 150,
    loop: true,
    channels: [
        {
            wave: "pulse25",
            vol: 0.17,
            notes: [
                "A4:2 C5:2 E5:2 C5:2 A4:2 C5:2 E5:4",
                "D5:2 C5:2 B4:2 C5:2 A4:8",
                "C5:2 F5:2 A5:2 F5:2 C5:2 F5:2 A5:4",
                "B4:2 D5:2 G5:2 D5:2 B4:4 D5:2 B4:2",
                "A4:2 C5:2 E5:2 A5:2 G5:2 E5:2 C5:2 E5:2",
                "F5:2 E5:2 D5:2 C5:2 B4:4 E5:4",
                "A5:4 G5:2 F5:2 G5:4 F5:2 D5:2",
                "E5:2 G#5:2 B5:2 G#5:2 E5:4 B4:4",
            ].join(" "),
        },
        { wave: "square", vol: 0.08, notes: battleChords.map(barArp16).join(" ") },
        { wave: "triangle", vol: 0.24, notes: battleChords.map(barPump).join(" ") },
    ],
    drums: { vol: 0.16, pattern: "k.h.s.h.k.k.s.h." },
};

// ---- 보스 배틀: 라 단조, 더 빠르고 긴박한 곡
const bossChords = ["Dm", "Dm", "Bb", "A", "Dm", "Gm", "A", "A"];
const boss = {
    bpm: 172,
    loop: true,
    channels: [
        {
            wave: "pulse25",
            vol: 0.17,
            notes: [
                "D5:2 F5:2 A5:2 F5:2 D5:2 F5:2 A5:2 D6:2",
                "C6:2 A5:2 F5:2 A5:2 G5:4 F5:4",
                "Bb4:2 D5:2 F5:2 D5:2 Bb4:2 D5:2 F5:4",
                "A4:2 C#5:2 E5:2 A5:2 G5:2 E5:2 C#5:4",
                "D5:2 F5:2 A5:2 F5:2 E5:2 D5:2 C5:2 D5:2",
                "G4:2 Bb4:2 D5:2 G5:2 F5:2 D5:2 Bb4:4",
                "A4:2 C#5:2 E5:2 A5:2 C#6:4 B5:2 A5:2",
                "E5:4 F5:4 E5:4 C#5:2 A4:2",
            ].join(" "),
        },
        { wave: "square", vol: 0.08, notes: bossChords.map(barArp16).join(" ") },
        { wave: "triangle", vol: 0.24, notes: bossChords.map(barPump).join(" ") },
    ],
    drums: { vol: 0.17, pattern: "k.hhs.hkk.hhs.hk" },
};

// ---- 타이틀: 다 장조, 느긋하고 모험이 시작되는 느낌
const titleChords = ["C", "G", "Am", "F", "C", "G", "F", "G"];
const title = {
    bpm: 108,
    loop: true,
    channels: [
        {
            wave: "square",
            vol: 0.15,
            notes: [
                "E5:4 G5:4 C6:4 G5:4",
                "D5:4 G5:4 B5:4 G5:4",
                "C5:4 E5:4 A5:4 E5:4",
                "A4:4 C5:4 F5:4 A5:4",
                "G5:6 E5:2 C5:4 E5:4",
                "B5:6 G5:2 D5:4 G5:4",
                "A5:4 F5:4 C5:4 A4:4",
                "B4:4 D5:4 G5:6 _:2",
            ].join(" "),
        },
        { wave: "pulse25", vol: 0.07, notes: titleChords.map(barArp8).join(" ") },
        { wave: "triangle", vol: 0.22, notes: titleChords.map(barWalk).join(" ") },
    ],
    drums: { vol: 0.09, pattern: "k.h.h.h.s.h.h.h." },
};

// ---- 팀 선출: 바 장조, 가볍고 생각하기 좋은 곡
const selectChords = ["F", "Dm", "Bb", "C", "F", "Dm", "Bb+C", "C"];
const select = {
    bpm: 120,
    loop: true,
    channels: [
        {
            wave: "square",
            vol: 0.15,
            notes: [
                "A4:2 C5:2 F5:2 C5:2 A4:2 C5:2 F5:4",
                "D5:2 F5:2 A5:2 F5:2 D5:2 F5:2 A5:4",
                "D5:2 F5:2 Bb5:2 F5:2 D5:2 F5:2 Bb5:4",
                "E5:2 G5:2 C6:2 G5:2 E5:2 G5:2 C6:4",
                "C6:2 A5:2 F5:2 A5:2 C6:4 A5:4",
                "A5:2 F5:2 D5:2 F5:2 A5:4 F5:4",
                "Bb5:4 A5:4 G5:4 E5:4",
                "C6:8 G5:4 E5:4",
            ].join(" "),
        },
        { wave: "pulse25", vol: 0.07, notes: selectChords.map(barArp8).join(" ") },
        { wave: "triangle", vol: 0.22, notes: selectChords.map(barWalk).join(" ") },
    ],
    drums: { vol: 0.08, pattern: "k...s...k...s..." },
};

// ---- 승리 / 패배: 한 번만 연주하는 짧은 곡
const win = {
    bpm: 150,
    loop: false,
    channels: [
        { wave: "square", vol: 0.17, notes: "G4:2 C5:2 E5:2 G5:6 E5:2 G5:2 C6:10 _:8" },
        { wave: "pulse25", vol: 0.09, notes: "C4:2 E4:2 G4:2 C5:6 G4:2 C5:2 E5:10 _:8" },
        { wave: "triangle", vol: 0.24, notes: "C3:6 G2:2 C3:6 G3:2 C3:18" },
    ],
    drums: { vol: 0.12, pattern: "k.h.s.h.k.h.s.hk" },
};

const lose = {
    bpm: 84,
    loop: false,
    channels: [
        { wave: "square", vol: 0.16, notes: "E5:4 D5:4 C5:4 B4:4 A4:16 _:4" },
        { wave: "pulse25", vol: 0.08, notes: "C5:4 B4:4 A4:4 G#4:4 E4:16 _:4" },
        { wave: "triangle", vol: 0.24, notes: "A2:16 A2:16 A2:4" },
    ],
    drums: null,
};

export const SONGS = { title, select, battle, boss, win, lose };
