// 기술 효과(애니메이션)를 켜고 끄는 설정. 설정창에서 바꾸고 localStorage에 저장한다.
const KEY = "battlefactory-fx";

export function isFxEnabled() {
    try {
        return window.localStorage.getItem(KEY) !== "off";
    } catch (e) {
        return true;
    }
}

export function setFxEnabled(on) {
    try {
        window.localStorage.setItem(KEY, on ? "on" : "off");
    } catch (e) {
        // 저장하지 못해도 이번 접속에서는 쓸 수 있게 둔다
    }
}
