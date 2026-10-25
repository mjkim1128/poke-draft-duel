// 배틀 로그의 줄을 보고, 포켓몬 위에서 재생할 상태이상/능력치 변화 연출을 알아낸다.
// 연출 이름은 web/public/pbanim의 이름이다 (burn, poison, toxic, paralysis, sleep, frozen, confusion, drowsy, stat-up, stat-down).
// 줄은 영어 원문이어야 한다 (한글로 바꾸기 전의 줄).

const STATUS_START = {
    burn: "burn",
    paralysis: "paralysis",
    poison: "poison",
    toxic: "toxic",
    sleep: "sleep",
    freeze: "frozen",
};

// [포켓몬 이름 뒤에 오는 말의 시작, 연출 이름]
const AFTER_NAME = [
    [" is hurt by its burn!", "burn"],
    [" is hurt by poison!", "poison"],
    [" is fast asleep.", "sleep"],
    [" is frozen solid!", "frozen"],
    [" is paralyzed! It can't move!", "paralysis"],
    [" became confused!", "confusion"],
    [" is confused! It hurt itself in its confusion!", "confusion"],
    [" grew drowsy!", "drowsy"],
];

// lines: 한 박자에 나온 줄들, names: { player, opponent } 지금 나와 있는 두 포켓몬의 이름
// 반환: [{ name, side }] (같은 연출이 같은 쪽에서 겹치면 한 번만)
export function statusAnimsOf(lines, names) {
    const found = [];
    const add = (name, side) => {
        if (!found.some((f) => f.name === name && f.side === side)) found.push({ name, side });
    };
    for (const line of lines) {
        for (const side of ["player", "opponent"]) {
            const who = names[side];
            if (!who || !line.startsWith(who)) continue;
            const rest = line.slice(who.length);
            const afflicted = /^ is now afflicted with (\w+)!$/.exec(rest);
            if (afflicted && STATUS_START[afflicted[1]]) add(STATUS_START[afflicted[1]], side);
            const stat = /^ had it's .+ (raised|lowered)!$/.exec(rest);
            if (stat) add(stat[1] === "raised" ? "stat-up" : "stat-down", side);
            for (const [text, anim] of AFTER_NAME) if (rest === text) add(anim, side);
        }
    }
    return found;
}
