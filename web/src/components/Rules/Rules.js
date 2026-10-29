import "./Rules.css";
import React, { useEffect, useState } from "react";
import { isKorean } from "shared/lang";
import { rulePages } from "shared/rules";

// 시작 화면의 "규칙 설명" 창: 스크롤 대신 "이전 / 다음" 버튼으로 쪽을 넘긴다.
export function Rules(props) {
    const ko = isKorean();
    const pages = rulePages(ko);
    const [index, setIndex] = useState(0);
    const last = index === pages.length - 1;
    const page = pages[index];

    /// ← → 키로도 넘기고, Esc로 닫는다
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
            else if (e.key === "ArrowRight") setIndex((i) => Math.min(pages.length - 1, i + 1));
            else if (e.key === "Escape") props.onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="rules-overlay" onClick={props.onClose}>
            <div className="rules-card" role="dialog" aria-modal="true" aria-label={ko ? "규칙 설명" : "How to play"} onClick={(e) => e.stopPropagation()}>
                <p className="rules-step">
                    {index + 1} / {pages.length}
                </p>
                <h2 className="rules-title">{page.title}</h2>
                <div className="rules-body">
                    {page.paragraphs.map((text, i) => (
                        <p key={i} className="rules-paragraph">
                            {text}
                        </p>
                    ))}
                </div>
                <div className="rules-nav">
                    <button className="rules-button" disabled={index === 0} onClick={() => setIndex(index - 1)}>
                        {ko ? "◀ 이전" : "◀ Back"}
                    </button>
                    {last ? (
                        <button className="rules-button rules-primary" autoFocus onClick={props.onClose}>
                            {ko ? "닫기" : "Close"}
                        </button>
                    ) : (
                        <button className="rules-button rules-primary" autoFocus onClick={() => setIndex(index + 1)}>
                            {ko ? "다음 ▶" : "Next ▶"}
                        </button>
                    )}
                </div>
                {!last && (
                    <button className="rules-close" onClick={props.onClose}>
                        {ko ? "닫기" : "Close"}
                    </button>
                )}
            </div>
        </div>
    );
}
