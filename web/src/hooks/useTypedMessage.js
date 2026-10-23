import { wait } from "shared";
import { useEffect, useState } from "react";

export const useTypedMessage = (message) => {
    // 입력된 글자가 어느 메시지의 것인지 함께 저장한다. 메시지가 바뀐 첫 화면에서 옛 글자가
    // 한 프레임 비쳤다가 지워지는 일이 없도록, 다른 메시지의 글자는 보여 주지 않는다.
    const [typed, setTyped] = useState({ message: "", text: "" });

    useEffect(() => {
        setTyped({ message, text: "" });

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

                    setTyped({ message, text: visibleMessage });
                }
            })();
        }

        return () => {
            cancelled = true;
        };
    }, [message]);

    return typed.message === message ? typed.text : "";
};
