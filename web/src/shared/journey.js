// 여정 기록: 게임을 시작해서 최종 보스에게 도달하기까지 "패배한 횟수"와 "걸린 시간"을 브라우저(localStorage)에 모아 두었다가
// 최종 보스를 만날 때 보스의 대사에 넣는다. 최종 보스를 이기면 기록을 지우고, 다음 여정은 처음부터 센다.
//
// - 패배한 횟수: 일반 모드의 패배와 항복(처음으로 돌아간다), 이지 모드의 항복(층 수가 초기화된다), 그리고 일반 모드의 진행 중에 새로고침하거나 창을 닫은 경우(진행이 사라진다).
//   (이지 모드는 층 수와 파티가 저장되므로 새로고침해도, 져도 처음으로 돌아가지 않아서 세지 않는다)
// - 걸린 시간: 첫 게임을 시작한 뒤로 이 게임이 화면에 보이는 동안의 시간. 다른 탭에 가 있거나 창을 닫아 둔 시간은 세지 않는다.
const KEY = "battlefactory-journey";
const TICK_MS = 1000;
const MAX_TICK_MS = 5000; // 컴퓨터가 잠들었다 깨어나도 한 번에 이만큼만 더한다

const empty = () => ({ started: false, active: false, resets: 0, ms: 0 });

const valid = (data) =>
    !!data &&
    typeof data.started === "boolean" &&
    typeof data.active === "boolean" &&
    Number.isInteger(data.resets) &&
    data.resets >= 0 &&
    Number.isFinite(data.ms) &&
    data.ms >= 0;

export function loadJourney() {
    try {
        const data = JSON.parse(window.localStorage.getItem(KEY));
        return valid(data) ? data : empty();
    } catch (e) {
        return empty();
    }
}

function save(data) {
    try {
        window.localStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {
        // 저장하지 못해도 이번 방문에서는 계속 할 수 있다 (기록만 남지 않는다)
    }
}

// 새 판을 시작한다. interruptible: 새로고침하면 처음으로 돌아가는 판인가 (일반 모드: true, 이지 모드: false)
export function beginJourneyRun(interruptible) {
    const data = loadJourney();
    save({ ...data, started: true, active: !!interruptible });
}

// 패배했다 (패배, 항복: 처음으로 돌아간다). 여정이 시작되지 않았거나 이미 끝났으면(엔드리스 모드 등) 세지 않는다.
export function recordJourneyReset() {
    const data = loadJourney();
    if (!data.started) return;
    save({ ...data, resets: data.resets + 1, active: false });
}

// 페이지를 열 때 한 번: 지난 방문이 진행 중인 판에서 끝났다면(새로고침, 창 닫기) 진행이 사라졌으니 그것도 패배로 센다.
let interruptedChecked = false;
export function consumeInterruptedRun() {
    if (interruptedChecked) return;
    interruptedChecked = true;
    const data = loadJourney();
    if (data.started && data.active) save({ ...data, resets: data.resets + 1, active: false });
}

// 플레이 시험용: 기록을 이 값으로 만든다 (devjump.js)
export function seedJourney(resets, ms) {
    save({ started: true, active: false, resets: resets || 0, ms: ms || 0 });
}

// 최종 보스를 이겼다: 기록을 지운다
export function finishJourney() {
    try {
        window.localStorage.removeItem(KEY);
    } catch (e) {
        // 지우지 못해도 어쩔 수 없다
    }
}

// 시간을 센다. 여정이 시작된 뒤로 화면이 보이는 동안만 더한다. 반환값은 멈추는 함수.
export function startJourneyClock() {
    let last = Date.now();
    const timer = setInterval(() => {
        const now = Date.now();
        const delta = Math.min(now - last, MAX_TICK_MS);
        last = now;
        if (typeof document !== "undefined" && document.visibilityState === "hidden") return;
        const data = loadJourney();
        if (data.started) save({ ...data, ms: data.ms + delta });
    }, TICK_MS);
    return () => clearInterval(timer);
}

// 밀리초 -> { hours, minutes, seconds }
export function splitDuration(ms) {
    const total = Math.floor(Math.max(0, ms) / 1000);
    return { hours: Math.floor(total / 3600), minutes: Math.floor((total % 3600) / 60), seconds: total % 60 };
}

// 최종 보스의 진입 대사: 패배한 횟수와 걸린 시간
export function journeyLines(ko, data = loadJourney()) {
    const { hours, minutes, seconds } = splitDuration(data.ms);
    if (ko) {
        return [
            `${data.resets}회, ${hours}시간 ${minutes}분 ${seconds}초.`,
            "너가 게임을 시작해서 나에게 도달하기까지 패배한 횟수와 걸린 시간이야.",
            "그렇다고 봐주지 않아. 부디 나가떨어지지 않길 바랄게.",
        ];
    }
    return [
        `${data.resets} ${data.resets === 1 ? "time" : "times"}, ${hours}h ${minutes}m ${seconds}s.`,
        "That's how many times you lost, and how long it took you to reach me since you began.",
        "I won't go easy on you. I hope you don't fall.",
    ];
}
