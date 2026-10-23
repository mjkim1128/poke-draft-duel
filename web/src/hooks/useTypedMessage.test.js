import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { useTypedMessage } from "hooks";
import { wait } from "shared";

// 타이핑 사이의 대기(wait)를 직접 하나씩 풀어 주는 방식으로 시간을 조종한다. 실제 시간에 기대면
// 컴퓨터가 바쁠 때 결과가 달라져서 시험이 흔들린다.
jest.mock("shared", () => ({ wait: jest.fn() }));

const pending = [];
beforeEach(() => {
    pending.length = 0;
    wait.mockImplementation(() => new Promise((resolve) => pending.push(resolve)));
});

// 가장 먼저 시작된 대기를 끝내고, 그 뒤에 이어지는 화면 갱신까지 처리한다
const tick = async () => {
    const resolve = pending.shift();
    await act(async () => resolve());
};

function Probe({ message }) {
    return <span id="typed">{useTypedMessage(message)}</span>;
}

function mount(message) {
    global.IS_REACT_ACT_ENVIRONMENT = true;
    const host = document.createElement("div");
    document.body.appendChild(host);
    const root = createRoot(host);
    return { host, root, render: (m) => act(async () => root.render(<Probe message={m} />)) };
}

test("types the message one letter at a time", async () => {
    const { host, root, render } = mount();
    await render("ABC");
    expect(host.textContent).toBe("");
    await tick();
    expect(host.textContent).toBe("A");
    await tick();
    expect(host.textContent).toBe("AB");
    await tick();
    expect(host.textContent).toBe("ABC");
    await act(async () => root.unmount());
    host.remove();
});

// 메시지가 도중에 바뀌면(안내창을 눌러 건너뛸 때 등) 옛 메시지의 타이핑은 멈추고 새 메시지만
// 처음부터 나타나야 한다. 멈추지 않으면 둘이 번갈아 글자를 덮어써서 깜빡이고 버벅인다.
test("a new message replaces the one being typed, and the old typing stops", async () => {
    const { host, root, render } = mount();
    await render("AAAA");
    await tick();
    expect(host.textContent).toBe("A");

    await render("BBBB");
    expect(host.textContent).toBe(""); // 옛 글자가 남아 있지 않다

    // 옛 메시지의 대기가 끝나도 아무것도 바뀌지 않아야 한다 (옛 코드는 여기서 "AA"를 써 넣었다)
    await tick();
    expect(host.textContent).toBe("");

    await tick();
    expect(host.textContent).toBe("B");
    await tick();
    await tick();
    await tick();
    expect(host.textContent).toBe("BBBB");
    await act(async () => root.unmount());
    host.remove();
});

test("an unmounted message stops typing", async () => {
    const { host, root, render } = mount();
    await render("AAAA");
    await tick();
    await act(async () => root.unmount());
    // 화면에서 사라진 뒤 대기가 끝나도 오류 없이 조용히 끝난다
    const resolve = pending.shift();
    await expect(Promise.resolve().then(() => resolve())).resolves.toBeUndefined();
    host.remove();
});
