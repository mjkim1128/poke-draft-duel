import { wait } from "shared";
import { useEffect, useState } from "react";

export const useTypedMessage = (message) => {
    const [typedMessage, setTypedMessage] = useState("");

    useEffect(() => {
        setTypedMessage("");

        // 메시지가 바뀌거나 화면에서 사라지면 이 타이핑은 멈춘다. 멈추지 않으면 옛 메시지의 반복이
        // 새 메시지와 번갈아 글자를 덮어써서 깜빡이고 버벅인다.
        let cancelled = false;

        if (message.length) {
            (async () => {
                let visibleMessage = "";
                for (let i = 0; i < message.length; i++) {
                    await wait(10);
                    if (cancelled) return;

                    visibleMessage = visibleMessage + message[i];

                    setTypedMessage(visibleMessage);
                }
            })();
        }

        return () => {
            cancelled = true;
        };
    }, [message]);

    return typedMessage;
};
