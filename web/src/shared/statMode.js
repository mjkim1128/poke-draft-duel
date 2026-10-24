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

export function setNormalizedStats(on) {
    try {
        window.localStorage.setItem(KEY, on ? "600" : "original");
    } catch (e) {
        // 저장하지 못해도 이번 접속에서는 쓸 수 있게 둔다
    }
}
