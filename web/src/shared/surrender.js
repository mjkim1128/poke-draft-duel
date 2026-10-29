// 항복 버튼은 설정창에 있고, 항복 처리는 판이 진행 중인 화면(전투 화면, 또는 선출/교환/보스 화면을 가진 Home)이 한다. 둘을 이어 주는 작은 연결 고리.
// 판이 진행 중일 때(시작 화면과 클리어 화면이 아닐 때)만 항복할 수 있다.
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
