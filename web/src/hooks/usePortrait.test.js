import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { usePortrait } from "hooks";

// 창이 세로로 길어지거나 가로로 넓어지면 따라서 바뀌어야 한다
function setViewport(width, height) {
    window.matchMedia = (query) => ({
        // 화면 비율이 1:1 이하이거나, 폭이 640px 이하이면 참 (usePortrait의 쿼리와 같은 조건)
        matches: height >= width || width <= 640,
        media: query,
        addEventListener: () => {},
        removeEventListener: () => {},
    });
    window.dispatchEvent(new Event("resize"));
}

function Probe() {
    return <span id="probe">{usePortrait() ? "portrait" : "landscape"}</span>;
}

test("follows the window between portrait and landscape", () => {
    global.IS_REACT_ACT_ENVIRONMENT = true;
    setViewport(1280, 800);
    const host = document.createElement("div");
    document.body.appendChild(host);
    const root = createRoot(host);
    act(() => root.render(<Probe />));
    expect(host.textContent).toBe("landscape");

    act(() => setViewport(500, 900));
    expect(host.textContent).toBe("portrait");

    act(() => setViewport(1280, 800));
    expect(host.textContent).toBe("landscape");

    act(() => root.unmount());
    host.remove();
});
