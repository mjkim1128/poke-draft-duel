// 여정 기록: 처음으로 돌아간 횟수와 걸린 시간을 모아 최종 보스의 진입 대사에 넣는다
import { beginJourneyRun, recordJourneyReset, finishJourney, loadJourney, startJourneyClock, splitDuration, journeyLines } from "./journey";

// consumeInterruptedRun은 페이지를 열 때 한 번만 도는 함수라서, 모듈을 새로 불러와서 시험한다
function freshModule() {
    let mod;
    jest.isolateModules(() => {
        mod = require("./journey");
    });
    return mod;
}

beforeEach(() => {
    window.localStorage.clear();
    jest.useFakeTimers();
});
afterEach(() => {
    Object.defineProperty(document, "visibilityState", { value: "visible", configurable: true });
    jest.useRealTimers();
});

describe("패배한 횟수", () => {
    test("시작하기 전에는 세지 않는다", () => {
        recordJourneyReset();
        expect(loadJourney().resets).toBe(0);
    });
    test("판을 시작한 뒤의 패배와 항복은 하나씩 센다", () => {
        beginJourneyRun(true);
        recordJourneyReset();
        beginJourneyRun(true);
        recordJourneyReset();
        expect(loadJourney().resets).toBe(2);
    });
    test("진행 중인 일반 모드에서 새로고침하면 진행이 사라지니 패배로 센다", () => {
        beginJourneyRun(true);
        const next = freshModule(); // 새로고침한 뒤 페이지를 다시 연 것
        next.consumeInterruptedRun();
        expect(loadJourney().resets).toBe(1);
        next.consumeInterruptedRun(); // 한 번만 센다
        expect(loadJourney().resets).toBe(1);
    });
    test("이미 패배해서 타이틀로 돌아와 있던 상태에서 새로고침하면 세지 않는다", () => {
        beginJourneyRun(true);
        recordJourneyReset();
        freshModule().consumeInterruptedRun();
        expect(loadJourney().resets).toBe(1);
    });
    test("이지 모드는 새로고침해도 진행이 저장되어 있으니 세지 않는다", () => {
        beginJourneyRun(false);
        freshModule().consumeInterruptedRun();
        expect(loadJourney().resets).toBe(0);
    });
    test("시작한 적이 없으면 새로고침해도 세지 않는다", () => {
        freshModule().consumeInterruptedRun();
        expect(loadJourney().resets).toBe(0);
    });
});

describe("걸린 시간", () => {
    test("여정이 시작되기 전에는 흐르지 않는다", () => {
        const stop = startJourneyClock();
        jest.advanceTimersByTime(10000);
        stop();
        expect(loadJourney().ms).toBe(0);
    });
    test("여정이 시작된 뒤로 화면이 보이는 동안 흐른다", () => {
        beginJourneyRun(true);
        const stop = startJourneyClock();
        jest.advanceTimersByTime(10000);
        stop();
        expect(loadJourney().ms).toBeGreaterThanOrEqual(9000);
        expect(loadJourney().ms).toBeLessThanOrEqual(10000);
    });
    test("다른 탭에 가 있는 동안은 세지 않는다", () => {
        beginJourneyRun(true);
        const stop = startJourneyClock();
        Object.defineProperty(document, "visibilityState", { value: "hidden", configurable: true });
        jest.advanceTimersByTime(10000);
        stop();
        expect(loadJourney().ms).toBe(0);
    });
    test("패배해도 시간은 이어서 센다", () => {
        beginJourneyRun(true);
        const stop = startJourneyClock();
        jest.advanceTimersByTime(5000);
        recordJourneyReset();
        jest.advanceTimersByTime(5000);
        stop();
        expect(loadJourney().ms).toBeGreaterThanOrEqual(9000);
    });
});

describe("끝나면 지운다", () => {
    test("최종 보스를 이기면 기록이 사라지고, 그 뒤의 패배는 세지 않는다 (엔드리스 모드)", () => {
        beginJourneyRun(true);
        recordJourneyReset();
        finishJourney();
        expect(loadJourney()).toEqual({ started: false, active: false, resets: 0, ms: 0 });
        recordJourneyReset();
        expect(loadJourney().resets).toBe(0);
    });
    test("망가진 기록은 비어 있는 것으로 본다", () => {
        window.localStorage.setItem("battlefactory-journey", "{broken");
        expect(loadJourney().resets).toBe(0);
        window.localStorage.setItem("battlefactory-journey", JSON.stringify({ started: true, active: false, resets: -3, ms: 5 }));
        expect(loadJourney().started).toBe(false);
    });
});

describe("진입 대사", () => {
    test("시간을 시, 분, 초로 나눈다", () => {
        expect(splitDuration(0)).toEqual({ hours: 0, minutes: 0, seconds: 0 });
        expect(splitDuration((2 * 3600 + 5 * 60 + 9) * 1000 + 999)).toEqual({ hours: 2, minutes: 5, seconds: 9 });
        expect(splitDuration(-5)).toEqual({ hours: 0, minutes: 0, seconds: 0 });
    });
    test("한국어: 횟수와 시간이 첫 줄에 들어간다", () => {
        const lines = journeyLines(true, { started: true, active: false, resets: 7, ms: (1 * 3600 + 23 * 60 + 45) * 1000 });
        expect(lines[0]).toBe("7회, 1시간 23분 45초.");
        expect(lines[1]).toBe("너가 게임을 시작해서 나에게 도달하기까지 패배한 횟수와 걸린 시간이야.");
        expect(lines[2]).toBe("그렇다고 봐주지 않아. 부디 나가떨어지지 않길 바랄게.");
    });
    test("영어: 1번이면 time, 여러 번이면 times", () => {
        expect(journeyLines(false, { resets: 1, ms: 0 })[0]).toBe("1 time, 0h 0m 0s.");
        expect(journeyLines(false, { resets: 3, ms: 61000 })[0]).toBe("3 times, 0h 1m 1s.");
    });
});
