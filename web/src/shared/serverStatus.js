// 서버(Render 무료 플랜)는 15분 동안 요청이 없으면 잠들고, 다시 깨어나는 데 몇 분이 걸린다.
// 이 파일은 그 상황을 견디기 위한 세 가지를 담고 있다.
//   1) fetchWithRetry   서버가 깨어나는 동안 요청이 실패하면 다시 시도한다 (게임이 로딩에서 멈추지 않게)
//   2) subscribeServerStatus   요청이 오래 걸리거나 끝내 실패하면 화면(App)이 안내 문구를 띄울 수 있게 알려 준다
//   3) startKeepAlive   게임 화면이 열려 있는 동안 서버가 잠들지 않도록 가벼운 요청을 보낸다

const SLOW_AFTER_MS = Number(process.env.REACT_APP_SLOW_AFTER_MS) || 5000; // 이만큼 걸리면 "서버를 깨우는 중" 안내
const RETRY_DELAY_MS = 3000; // 실패한 뒤 다시 시도하기까지 기다리는 시간
const RETRY_LIMIT_MS = Number(process.env.REACT_APP_RETRY_LIMIT_MS) || 4 * 60 * 1000; // 이 시간이 지나면 포기
const KEEPALIVE_MS = Number(process.env.REACT_APP_KEEPALIVE_MS) || 10 * 60 * 1000; // 잠드는 기준(15분)보다 짧게

let slowRequests = 0; // 지금 오래 걸리고 있는 요청 수
let failed = false; // 재시도를 모두 해 보고도 실패했는지
const listeners = new Set();

function currentState() {
    if (failed) return "failed";
    if (slowRequests > 0) return "waking";
    return "ok";
}

function notify() {
    const state = currentState();
    listeners.forEach((listener) => listener(state));
}

// 화면이 서버 상태("ok" | "waking" | "failed")를 받아 볼 수 있게 한다. 반환값은 구독 해제 함수.
export function subscribeServerStatus(listener) {
    listeners.add(listener);
    listener(currentState());
    return () => listeners.delete(listener);
}

// 우리 API가 보내는 진짜 응답인지 판단한다. 우리 서버는 JSON이나 일반 텍스트로 답하고,
// 5xx를 보내지 않는다. 서버가 깨어나는 중에는 호스팅이 로딩 페이지(HTML)나 5xx를 돌려줄 수 있다.
function isRealApiResponse(res) {
    const type = res.headers.get("content-type") || "";
    if (type.includes("text/html")) return false;
    if (res.status >= 500) return false;
    return true;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchWithRetry(url) {
    const started = Date.now();
    let counted = false;
    const slowTimer = setTimeout(() => {
        counted = true;
        slowRequests++;
        notify();
    }, SLOW_AFTER_MS);

    try {
        while (true) {
            try {
                const res = await fetch(url);
                if (isRealApiResponse(res)) {
                    if (failed) {
                        failed = false;
                        notify();
                    }
                    return res;
                }
            } catch (e) {
                // 네트워크 오류: 서버가 아직 떠 있지 않다. 아래에서 다시 시도한다.
            }
            if (Date.now() - started > RETRY_LIMIT_MS) {
                failed = true;
                notify();
                throw new Error(`Server did not respond in time: ${url}`);
            }
            await sleep(RETRY_DELAY_MS);
        }
    } finally {
        clearTimeout(slowTimer);
        if (counted) {
            slowRequests--;
            notify();
        }
    }
}

// 게임 화면이 보이는 동안 주기적으로 가벼운 요청(/api/ping)을 보내 서버가 잠들지 않게 한다.
// 탭이 숨겨져 있으면 보내지 않고, 다시 보이게 되는 순간 한 번 보내서 (잠들었다면) 서버를 미리 깨운다.
// 이 요청은 재시도하지 않는다. 실패해도 게임에는 영향이 없다.
export function startKeepAlive() {
    if (process.env.REACT_APP_LOCAL_DATA === "1") return () => {}; // 다운로드 버전은 깨울 서버가 없다
    const ping = () => {
        fetch("/api/ping").catch(() => {});
    };
    const timer = setInterval(() => {
        if (document.visibilityState === "visible") ping();
    }, KEEPALIVE_MS);
    const onVisible = () => {
        if (document.visibilityState === "visible") ping();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
        clearInterval(timer);
        document.removeEventListener("visibilitychange", onVisible);
    };
}
