import React from "react";
import { createRoot } from "react-dom/client";
import { useTypedMessage } from "hooks";

function Probe({ message }) {
    return <span id="typed">{useTypedMessage(message)}</span>;
}

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 안내창의 글자는 한 글자씩 나타난다. 메시지가 도중에 바뀌면(안내창을 눌러 건너뛸 때 등) 옛 메시지의
// 타이핑은 멈추고 새 메시지만 처음부터 나타나야 한다. 둘이 번갈아 덮어쓰면 글자가 깜빡이고 버벅인다.
// 두 타이머의 시점이 어긋나야 겹침이 드러나고, act 안에서는 화면 갱신이 모아져서 도중 글자를 볼 수 없다.
// 그래서 가짜 시계도 act도 쓰지 않고 실제 시간으로 지켜본다.
test("a new message replaces the one being typed, without the old one leaking back in", async () => {
    global.IS_REACT_ACT_ENVIRONMENT = false;
    const host = document.createElement("div");
    document.body.appendChild(host);
    const root = createRoot(host);
    const OLD = "A".repeat(40);
    const NEW = "B".repeat(40);

    root.render(<Probe message={OLD} />);
    await pause(57); // the old message is a few letters in
    expect(host.textContent).toMatch(/^A+$/);

    root.render(<Probe message={NEW} />);
    const seen = [];
    const sampler = setInterval(() => seen.push(host.textContent), 3);
    await pause(700);
    clearInterval(sampler);

    const leaked = seen.filter((text) => text.includes("A"));
    expect(leaked).toEqual([]);
    expect(host.textContent).toBe(NEW);

    root.unmount();
    host.remove();
});
