// 개발 서버에서만: /?teraDemo=1 로 테라스탈 발동 연출을 미리 본다 (운영 빌드에는 들어가지 않는다)
import React, { useEffect, useRef, useState } from "react";
import { CurrentPokemon } from "components/CurrentPokemon";
import { getPokemonById } from "shared/processjson";
import { playTeraAnim, TERA_TYPES, TERA_COLORS, teraIconStyle, teraButtonStyle, prefetchTeraAssets } from "animations/teraEffect";
import { terastallize } from "shared/turn";
import { revertTera, teraTypeOf } from "shared/tera";
import { getAbility } from "shared/abilities";
import { getBaseStats } from "shared/randompokemon";
import { SPRITE_BASE } from "shared/spritebase";
import "components/Battle/Battle.css";

// ---- 오거폰 4종 확인용: 게임과 같은 terastallize()를 그대로 불러서 모습, 타입, 능력치 변화를 본다 ----
const stat = (n, v) => ({ base_stat: v, stat: { name: n } });
const OGERPON_STATS = [stat("hp", 80), stat("attack", 120), stat("defense", 84), stat("special-attack", 60), stat("special-defense", 96), stat("speed", 110)];
const MASKS = [
    { id: 1017, name: "ogerpon", label: "벽록의 가면", second: null, ability: "defiant", item: null },
    { id: 10273, name: "ogerpon-wellspring-mask", label: "우물의 가면", second: "water", ability: "water-absorb", item: "wellspring-mask" },
    { id: 10274, name: "ogerpon-hearthflame-mask", label: "화덕의 가면", second: "fire", ability: "mold-breaker", item: "hearthflame-mask" },
    { id: 10275, name: "ogerpon-cornerstone-mask", label: "주춧돌의 가면", second: "rock", ability: "sturdy", item: "cornerstone-mask" },
];
const spriteOf = (id) => ({ front_default: SPRITE_BASE + id + ".png", back_default: SPRITE_BASE + "back/" + id + ".png" });
function makeOgerpon(mask) {
    return {
        name: mask.name,
        korean_name: "오거폰(" + mask.label + ")",
        english_name: "Ogerpon",
        types: [{ slot: 1, type: { name: "grass" } }, ...(mask.second ? [{ slot: 2, type: { name: mask.second } }] : [])],
        base_stats: getBaseStats({ stats: OGERPON_STATS }),
        hp: [300, 300],
        stat_levels: Array(7).fill(0),
        status: null,
        confusion: null,
        moveset: [],
        item: mask.item ? { name: mask.item } : null,
        ability: getAbility(mask.ability),
        sprites: spriteOf(mask.id),
    };
}
const STAT_LABEL = ["공격", "방어", "특공", "특방", "스피드"];

const dress = (p) => ({ ...p, hp: [200, 200], stat_levels: Array(7).fill(0), status: null, confusion: null, moveset: [], item: null });

export function TeraDemo() {
    const params = new URLSearchParams(window.location.search);
    const [type, setType] = useState(params.get("type") || "fire");
    const [side, setSide] = useState(params.get("side") || "opponent");
    const [mons, setMons] = useState(null);
    const fieldRef = useRef(null);
    const run = useRef(null);

    useEffect(() => {
        prefetchTeraAssets(TERA_TYPES);
        // API가 없는 정적 서버에서도 열리도록, 못 불러오면 그림 주소만 있는 임시 포켓몬을 쓴다
        const stub = (id, name) => ({ id, name, korean_name: name, types: [{ slot: 1, type: { name: "normal" } }], base_stats: [80, 80, 80, 80, 80, 80], sprites: spriteOf(id) });
        const load = (id, name) => (params.get("api") ? getPokemonById(id).catch(() => stub(id, name)) : Promise.resolve(stub(id, name)));
        Promise.all([load(Number(params.get("foe") || 6), "charizard"), load(Number(params.get("me") || 130), "gyarados")]).then(([foe, me]) => setMons({ foe: dress(foe), me: dress(me) }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /// ---- 오거폰 패널 ----
    const ogFieldRef = useRef(null);
    const ogOnly = !!params.get("ogonly"); // 화면 캡처용: 오거폰 필드만 보여 준다 (?ogonly=1&og=0~3&ogtera=1)
    const [maskIndex, setMaskIndex] = useState(Number(params.get("og") || 0));
    const [og, setOg] = useState(null); // { foe, me } 같은 가면의 오거폰 두 마리 (상대, 내 쪽)
    const [ogLog, setOgLog] = useState([]);
    const [, bump] = useState(0);
    useEffect(() => {
        resetOgerpon(maskIndex);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [maskIndex]);
    const ogFx = useRef([]);
    const ogFxTimer = useRef(null);
    function stopOgFx() {
        clearTimeout(ogFxTimer.current);
        ogFx.current.forEach((f) => f.cancel());
        ogFx.current = [];
    }
    useEffect(() => {
        if (!ogOnly || !params.get("ogtera") || !og) return undefined;
        const timer = setTimeout(ogTera, 600);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ogOnly, og && og.foe.name]);
    function resetOgerpon(index) {
        stopOgFx();
        setOg({ foe: makeOgerpon(MASKS[index]), me: makeOgerpon(MASKS[index]) });
        setOgLog([]);
    }
    function ogTera() {
        if (!og || og.foe.terastallized) return;
        try {
            const log = [];
            for (const [mon, other] of [[og.foe, og.me], [og.me, og.foe]]) {
                terastallize([mon], [other], log);
            }
            bump((n) => n + 1);
            setOgLog(log);
            stopOgFx();
            // 게임과 같다: 연출은 그 장면이 끝나면 걷히고, 이후에는 CurrentPokemon이 입히는 테라스탈 모습만 남는다
            const fx = [playTeraAnim(ogFieldRef.current, "opponent", og.foe.teraType), playTeraAnim(ogFieldRef.current, "player", og.me.teraType)].filter(Boolean);
            ogFx.current = fx;
            const wait = Math.max(0, ...fx.map((f) => f.duration)) + 300;
            ogFxTimer.current = setTimeout(stopOgFx, wait);
        } catch (e) {
            setOgLog(["오류: " + e.message]);
        }
    }
    function ogRevert() {
        if (!og) return;
        stopOgFx();
        revertTera(og.foe);
        revertTera(og.me);
        og.foe.ability = getAbility(MASKS[maskIndex].ability);
        og.me.ability = getAbility(MASKS[maskIndex].ability);
        og.foe.stat_levels = Array(7).fill(0);
        og.me.stat_levels = Array(7).fill(0);
        bump((n) => n + 1);
        setOgLog([]);
    }

    function play() {
        if (run.current) {
            run.current.cancel();
            run.current.look();
        }
        run.current = playTeraAnim(fieldRef.current, side, type, { manual: !!params.get("manual") });
        window.__tera = run.current; // 화면 확인용 (?manual=1일 때 seek(ms)로 순간을 골라 본다)
    }
    useEffect(() => {
        if (mons && params.get("auto")) setTimeout(play, 500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mons]);

    if (!mons) return <p style={{ padding: 20 }}>불러오는 중...</p>;
    return (
        <div style={{ maxWidth: 560, margin: "0 auto", padding: 12 }}>
            {ogOnly && <style>{".og-hide{display:none !important}"}</style>}
            <div className={ogOnly ? "og-hide" : ""}>
            <h3 style={{ margin: "4px 0" }}>테라스탈 연출 미리보기</h3>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
                {TERA_TYPES.map((t) => (
                    <button key={t} onClick={() => setType(t)} title={t} style={{ border: t === type ? "2px solid #000" : "2px solid transparent", background: "none", padding: 0, cursor: "pointer" }}>
                        <div style={teraIconStyle(t, 28)} />
                    </button>
                ))}
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                <select value={side} onChange={(e) => setSide(e.target.value)}>
                    <option value="opponent">상대(앞모습)</option>
                    <option value="player">내 포켓몬(뒷모습)</option>
                </select>
                <button onClick={play} style={{ padding: "6px 14px", fontWeight: "bold" }}>
                    ▶ 재생 ({type})
                </button>
                <div style={{ ...teraButtonStyle(type, 1), marginLeft: "auto" }} title="테라스탈 버튼 이미지" />
            </div>
            <div className="battle-portrait">
                <div className="bp-field" ref={fieldRef}>
                    <div className="bp-head">
                        <span>미리보기 · 타입 색 {TERA_COLORS[type]}</span>
                    </div>
                    <div className="bp-opponent">
                        <CurrentPokemon pokemon={mons.foe} img={mons.foe.sprites.front_default} />
                    </div>
                    <div className="bp-player">
                        <CurrentPokemon pokemon={mons.me} img={mons.me.sprites.back_default} />
                    </div>
                </div>
            </div>

            </div>
            <div className={ogOnly ? "og-hide" : ""}>
            <h3 style={{ margin: "16px 0 4px" }}>오거폰 4종 확인</h3>
            <p style={{ margin: "0 0 6px", fontSize: 13 }}>가면(지닌 도구)에 따라 모습, 타입, 특성, 능력치가 다릅니다. 아래 필드에서 가면을 고르고 테라스탈을 눌러 보세요. 게임과 같은 처리(terastallize)를 그대로 부릅니다.</p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
                {MASKS.map((m, i) => (
                    <button key={m.name} onClick={() => setMaskIndex(i)} style={{ padding: "5px 10px", fontWeight: i === maskIndex ? "bold" : "normal", border: i === maskIndex ? "2px solid #000" : "1px solid #888", background: "#fff" }}>
                        {m.label}
                    </button>
                ))}
                <button onClick={ogTera} style={{ padding: "5px 12px", fontWeight: "bold" }} disabled={!og || og.foe.terastallized}>
                    ▶ 테라스탈
                </button>
                <button onClick={ogRevert} style={{ padding: "5px 12px" }} disabled={!og || !og.foe.terastallized}>
                    되돌리기
                </button>
            </div>
            {og && (
                <p style={{ margin: "0 0 6px", fontSize: 13 }}>
                    {og.foe.korean_name} · 타입 {og.foe.types.map((t) => t.type.name).join("/")} · 특성 {og.foe.ability.name}
                    {og.foe.item ? " · 도구 " + og.foe.item.name : ""}
                    {og.foe.terastallized ? " · 테라스탈 " + og.foe.teraType : " · 테라스탈 타입 " + teraTypeOf(og.foe)}
                    {" · 능력치 단계 [" + og.foe.stat_levels.slice(0, 5).map((v, i) => STAT_LABEL[i] + v).join(" ") + "]"}
                </p>
            )}
            {ogLog.length > 0 && <pre style={{ fontSize: 12, margin: "0 0 6px", whiteSpace: "pre-wrap" }}>{ogLog.join(String.fromCharCode(10))}</pre>}
            </div>
            {og && (
                <div className="battle-portrait">
                    <div className="bp-field" ref={ogFieldRef} style={{ position: "relative" }}>
                        <div className="bp-head">
                            <span>오거폰 확인 · {MASKS[maskIndex].label}</span>
                        </div>
                        <div className="bp-opponent">
                            <CurrentPokemon pokemon={og.foe} img={og.foe.sprites.front_default} />
                        </div>
                        <div className="bp-player">
                            <CurrentPokemon pokemon={og.me} img={og.me.sprites.back_default} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
