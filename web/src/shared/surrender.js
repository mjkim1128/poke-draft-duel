// 항복 버튼은 설정창에 있고, 항복 처리는 전투 화면이 한다. 둘을 이어 주는 작은 연결 고리.
// 전투 화면이 열려 있는 동안만 항복할 수 있다.
let handler = null;
const listeners = new Set();

export function setSurrenderHandler(fn) {
    handler = fn;
    listeners.forEach((l) => l(handler !== null));
}

export function canSurrender() {
    return handler !== null;
}

export function surrenderNow() {
    if (handler) handler();
}

// 항복할 수 있는지가 바뀔 때마다 알려 준다. 반환값은 구독 해제 함수.
export function onSurrenderChange(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}
