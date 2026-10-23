import "./Settings.css";
import React, { useState } from "react";
import { getLang, setLang } from "shared/lang";
import { isFxEnabled, setFxEnabled } from "animations/fxSetting";
import { getBgmState, setBgmEnabled, setBgmVolume } from "audio/bgm";

// 오른쪽 위 톱니바퀴 버튼과, 누르면 열리는 설정창 (지금은 언어 선택만 있다)
export function Settings() {
    const [open, setOpen] = useState(false);
    const lang = getLang();
    const [fxOn, setFxOn] = useState(isFxEnabled());
    const [bgm, setBgm] = useState(getBgmState());

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
                        <p className="settings-label settings-label-gap">배경음악 / Music</p>
                        <div className="settings-options">
                            {[
                                [true, "켜기 / On"],
                                [false, "끄기 / Off"],
                            ].map(([value, label]) => (
                                <button
                                    key={String(value)}
                                    className={"settings-option" + (bgm.on === value ? " active" : "")}
                                    aria-pressed={bgm.on === value}
                                    onClick={() => {
                                        setBgmEnabled(value);
                                        setBgm(getBgmState());
                                    }}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                        <input
                            className="settings-volume"
                            type="range"
                            min="0"
                            max="100"
                            value={Math.round(bgm.volume * 100)}
                            aria-label="음량 / Volume"
                            disabled={!bgm.on}
                            onChange={(e) => {
                                setBgmVolume(Number(e.target.value) / 100);
                                setBgm(getBgmState());
                            }}
                        />
                        <p className="settings-label settings-label-gap">기술 효과 / Move effects</p>
                        <div className="settings-options">
                            {[
                                [true, "켜기 / On"],
                                [false, "끄기 / Off"],
                            ].map(([value, label]) => (
                                <button
                                    key={String(value)}
                                    className={"settings-option" + (fxOn === value ? " active" : "")}
                                    aria-pressed={fxOn === value}
                                    onClick={() => {
                                        setFxEnabled(value);
                                        setFxOn(value);
                                    }}
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
