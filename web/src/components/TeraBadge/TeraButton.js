// 테라스탈 버튼: Deluxe Battle Kit의 타입별 버튼 그림 위에 글자를 얹는다. 기술을 고르기 전에 눌러서 켜고 끈다.
import React from "react";
import { teraButtonUrl } from "animations/teraEffect";

export function TeraButton({ type, on, onClick }) {
    return (
        <button type="button" className={"tera-button" + (on ? " on" : "")} aria-pressed={on} style={{ backgroundImage: `url(${teraButtonUrl(type)})` }} onClick={onClick}>
            {on ? "발동 예정" : "테라스탈"}
        </button>
    );
}
