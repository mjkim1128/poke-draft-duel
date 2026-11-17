// 능력치 모드: 포켓몬의 종족값을 원본 그대로 쓸지, 여섯 능력치의 합을 600으로 맞춰서 쓸지.
// 설정창에서 바꾸고 localStorage에 저장한다. 기본은 원본이다.
//   "original"  원본 종족값 (기본)
//   "600"       합계 600 보정: 약한 포켓몬은 올라가고 강한 포켓몬은 내려가서 모두 비슷한 수준이 된다
const KEY = "battlefactory-stat-mode";

export function isNormalizedStats() {
    try {
        return window.localStorage.getItem(KEY) === "600";
    } catch (e) {
        return false;
    }
}

// 여섯 능력치(HP, 공격, 방어, 특공, 특방, 스피드)를 비율은 그대로 두고 합이 600이 되게 맞춘다
export function normalizeStatsTo600(raw) {
    const total = raw.reduce((sum, v) => sum + v, 0);
    return raw.map((v) => Math.floor((v * 600) / total));
}

export function setNormalizedStats(on) {
    try {
        window.localStorage.setItem(KEY, on ? "600" : "original");
    } catch (e) {
        // 저장하지 못해도 이번 접속에서는 쓸 수 있게 둔다
    }
}
