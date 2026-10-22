import React, { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./FloatingPopup.css";

const MARGIN = 8; // 화면 가장자리와 정보창 사이 최소 간격
const GAP = 6; // 기준 요소와 정보창 사이 간격

// 마우스를 올렸을 때 나오는 정보창. 화면(body) 맨 위층에 따로 그리고 위치를 계산해서,
// 부모의 overflow(잘림)나 transform 때문에 잘리거나 화면 밖으로 나가지 않게 한다.
// 기준 요소의 위쪽에 놓고, 위에 자리가 모자라면 아래쪽에, 좌우로 넘치면 화면 안으로 밀어 넣는다.
export function FloatingPopup({ anchorRef, visible, children }) {
    const popupRef = useRef(null);
    const [pos, setPos] = useState(null);

    // 보일 때, 내용(children)이 바뀔 때 다시 계산하되, 값이 달라졌을 때만 상태를 바꾼다.
    // children은 그릴 때마다 새로 만들어지므로 사실상 매번 계산하고, 값이 같으면 멈춘다.
    useLayoutEffect(() => {
        if (!visible) {
            if (pos !== null) setPos(null);
            return;
        }
        const anchor = anchorRef.current;
        const popup = popupRef.current;
        if (!anchor || !popup) return;
        const a = anchor.getBoundingClientRect();
        const p = popup.getBoundingClientRect();
        const viewWidth = document.documentElement.clientWidth;
        const viewHeight = window.innerHeight;

        let left = a.left + a.width / 2 - p.width / 2;
        left = Math.min(Math.max(left, MARGIN), Math.max(MARGIN, viewWidth - p.width - MARGIN));
        let top = a.top - p.height - GAP;
        if (top < MARGIN) top = a.bottom + GAP;
        top = Math.min(Math.max(top, MARGIN), Math.max(MARGIN, viewHeight - p.height - MARGIN));

        if (!pos || pos.left !== left || pos.top !== top) setPos({ left, top });
    }, [visible, anchorRef, pos, children]);

    if (!visible) return null;
    return createPortal(
        <div
            ref={popupRef}
            className="floating-popup"
            style={{ left: pos ? pos.left : 0, top: pos ? pos.top : 0, visibility: pos ? "visible" : "hidden" }}
        >
            {children}
        </div>,
        document.body
    );
}
