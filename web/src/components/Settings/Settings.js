import "./Settings.css";
import React, { useState } from "react";
import { getLang, setLang } from "shared/lang";

// 오른쪽 위 톱니바퀴 버튼과, 누르면 열리는 설정창 (지금은 언어 선택만 있다)
export function Settings() {
    const [open, setOpen] = useState(false);
    const lang = getLang();

    return (
        <>
            <button className="settings-gear" aria-label="설정 / Settings" onClick={() => setOpen(true)}>
                ⚙
            </button>
            {open && (
                <div className="settings-overlay" onClick={() => setOpen(false)}>
                    <div
                        className="settings-card"
                        role="dialog"
                        aria-modal="true"
                        aria-label="설정 / Settings"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="settings-title">설정 / Settings</h2>
                        <p className="settings-label">언어 / Language</p>
                        <div className="settings-options">
                            {[
                                ["ko", "한국어"],
                                ["en", "English"],
                            ].map(([code, label]) => (
                                <button
                                    key={code}
                                    className={"settings-option" + (lang === code ? " active" : "")}
                                    aria-pressed={lang === code}
                                    onClick={() => setLang(code)}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                        <p className="settings-note">
                            포켓몬·기술 이름과 전투 로그에 적용됩니다. 이미 나온 로그는 그대로 두고, 이후 로그부터 바뀝니다.
                            <br />
                            Applies to names and the battle log. Lines already shown stay as they are.
                        </p>
                        <button className="settings-close" onClick={() => setOpen(false)}>
                            닫기 / Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
