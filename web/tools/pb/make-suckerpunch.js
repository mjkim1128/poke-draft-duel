// 기습(sucker-punch) 연출 고치기.
// 원래 연출(Gen 9 Move Animation Project)은 맞는 쪽이 쓴 쪽으로 걸어오고 쓴 쪽은 사라지는 모양이라,
// 내가 기습을 쓰면 상대가 내 쪽으로 다가오는 것처럼 보인다. 쓴 쪽이 맞는 쪽으로 달려가 때리고 돌아오는 모양으로 바꾼다.
// 타격 효과(스프라이트 시트 조각)와 효과음 타이밍은 그대로 두고, 포켓몬 그림 조각(-1, -2번)과 효과 위치만 다시 만든다.
//
// 사용법 (web/에서): node tools/pb/make-suckerpunch.js
// 이 스크립트가 만든 파일은 tools/pb/overrides/m_suckerpunch.json에 두고, convert-pb-anims.py가 변환 끝에 public에 덮어쓴다.
const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "..", "..", "public", "pbanim", "a", "m_suckerpunch.json");
const target = path.join(__dirname, "overrides", "m_suckerpunch.json");
const original = JSON.parse(fs.readFileSync(fs.existsSync(target) ? target : source, "utf8"));

const USER = [128, 224];
const FOE = [384, 96];
const HIT = [330, 112]; // 쓴 쪽이 때릴 때 서 있는 자리 (맞는 쪽 바로 앞)
const lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => t * t * (3 - 2 * t);
// [x, y, 조각 번호, 가로 확대, 세로 확대, 각도, 좌우 반전, 합성, 투명도, 우선순위, 기준]
const pokemon = (index, x, y) => [Math.round(x), Math.round(y), index, 100, 100, 0, 0, 0, 255, 1, 3];

const userAt = (i) => {
    if (i < 4) return [USER[0] - 4 * i, USER[1] + 2 * i]; // 몸을 뒤로 젖힌다
    if (i < 14) {
        const t = ease((i - 4) / 9);
        return [lerp(USER[0] - 12, HIT[0], t), lerp(USER[1] + 6, HIT[1], t)]; // 달려간다
    }
    if (i < 20) return [HIT[0] + (i === 15 || i === 16 ? 8 : 0), HIT[1]]; // 때린다
    const t = ease((i - 19) / 5);
    return [lerp(HIT[0], USER[0], t), lerp(HIT[1], USER[1], t)]; // 돌아온다
};
const foeAt = (i) => {
    const shove = { 16: 12, 17: 12, 18: 20, 19: 20, 20: 12, 21: 4 }[i] || 0; // 맞고 밀려난다
    return [FOE[0] + shove, FOE[1] - shove / 2];
};

const frames = original.f.map((frame, i) => {
    const effects = frame
        .filter((cel) => cel[2] >= 0)
        .map((cel) => [FOE[0] - 14, FOE[1] + 12, ...cel.slice(2)]); // 효과를 맞는 쪽 몸에 맞춘다
    return [pokemon(-1, ...userAt(i)), pokemon(-2, ...foeAt(i)), ...effects];
});

fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, JSON.stringify({ ...original, f: frames }));
fs.copyFileSync(target, source);
console.log("frames", frames.length, "->", target);
