import { useTypedMessage } from "hooks";
import React, { useEffect, useRef } from "react";

export function BattleAnnouncer(props) {
    let message = "";
    if (props.text !== undefined) {
        for (let i = 0; i < props.text.length; i++) {
            if (i > 0) message = message + " ";
            message = message + props.text[i];
        }
    }
    let typedMessage = useTypedMessage(message);

    /// A long message is taller than the message box: keep the newest letters in view while it types.
    const ref = useRef(null);
    useEffect(() => {
        const box = ref.current && ref.current.closest(".bp-announcer");
        if (box) box.scrollTop = box.scrollHeight;
    }, [typedMessage]);

    return (
        <div ref={ref}>
            <div>{typedMessage}</div>
        </div>
    );
}
