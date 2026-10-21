// PokeAPI는 9세대 기술(번호 827~919)의 `meta`(부가 효과 정보)를 null로 비워 둔다.
// 게임 엔진은 부가 효과를 전부 이 meta에서 읽으므로(예: 플레어송의 "특수공격 1랭크 상승"은
// meta.category = "damage-raise", meta.stat_chance = 100 이어야 적용된다), meta가 null인 기술은
// 부가 효과가 하나도 일어나지 않는다. 이 스크립트는 Pokémon Showdown의 기술 데이터로 meta를 채운다.
//
// 사용법 (battlefactory-api 폴더, 즉 이 저장소의 api/ 에서):
//   node tools/enrich-move-meta.mjs --validate   Showdown 데이터로 만든 meta를 PokeAPI가 이미 가진 기술과 비교해 정확도를 본다
//   node tools/enrich-move-meta.mjs --apply      meta가 null인 기술의 meta와 effect_chance를 채워 moves.json에 저장한다
//
// 입력: src/main/resources/data/moves.json (PokeAPI에서 내려받은 것), tools/source/showdown-moves.json
//   (https://play.pokemonshowdown.com/data/moves.json 의 사본)
// 이미 meta가 있는 기술은 건드리지 않는다 (여러 번 실행해도 결과가 같다).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const movesFile = path.join(here, "..", "src", "main", "resources", "data", "moves.json");
const showdown = JSON.parse(fs.readFileSync(path.join(here, "source", "showdown-moves.json"), "utf8"));
const moves = JSON.parse(fs.readFileSync(movesFile, "utf8"));

// PokeAPI의 슬러그(torch-song)를 Showdown의 id(torchsong)로 바꾼다
const sdIdOf = (slug) => slug.replace(/[^a-z0-9]/g, "");

// Showdown의 상태 코드 -> PokeAPI의 상태 이름 (독독도 PokeAPI는 "poison"으로 둔다. 게임이 독독 기술은 따로 구분한다)
const AILMENT = { brn: "burn", par: "paralysis", psn: "poison", tox: "poison", slp: "sleep", frz: "freeze" };
const pct = (pair) => Math.round((pair[0] / pair[1]) * 100);

export function deriveMeta(sd) {
    const isStatus = sd.category === "Status";
    const secondaries = sd.secondaries || (sd.secondary ? [sd.secondary] : []);

    const meta = {
        ailment: { name: "none" },
        ailment_chance: 0,
        category: { name: "damage" },
        crit_rate: sd.critRatio ? sd.critRatio - 1 : 0,
        drain: 0,
        flinch_chance: 0,
        healing: 0,
        max_hits: null,
        max_turns: null,
        min_hits: null,
        min_turns: null,
        stat_chance: 0,
    };

    if (sd.drain) meta.drain = pct(sd.drain); // 준 피해의 일부를 회복
    if (sd.recoil) meta.drain = -pct(sd.recoil); // 반동은 음수 (PokeAPI와 같은 규칙)
    if (sd.heal) meta.healing = pct(sd.heal);
    if (sd.multihit) {
        const [min, max] = Array.isArray(sd.multihit) ? sd.multihit : [sd.multihit, sd.multihit];
        meta.min_hits = min;
        meta.max_hits = max;
    }
    if (sd.willCrit) meta.crit_rate = 6; // 반드시 급소에 맞는 기술 (PokeAPI와 같은 값)
    if (sd.volatileStatus === "partiallytrapped") {
        meta.min_turns = 4;
        meta.max_turns = 5;
    }

    // 상태이상 / 혼란 / 풀죽음
    let ailment = null;
    if (isStatus) {
        if (sd.status) ailment = AILMENT[sd.status];
        else if (sd.volatileStatus === "confusion") ailment = "confusion";
        else if (sd.volatileStatus === "partiallytrapped") ailment = "trap";
    } else if (sd.volatileStatus === "partiallytrapped") {
        // 조이기, 불꽃소용돌이 같은 가두기 기술: 맞히면 반드시 가둔다
        ailment = "trap";
        meta.ailment_chance = 100;
    }
    for (const s of secondaries) {
        if (s.status && !ailment) {
            ailment = AILMENT[s.status];
            meta.ailment_chance = s.chance;
        } else if (s.volatileStatus === "confusion" && !ailment) {
            ailment = "confusion";
            meta.ailment_chance = s.chance;
        }
        if (s.volatileStatus === "flinch") meta.flinch_chance = s.chance;
    }
    if (ailment) meta.ailment = { name: ailment };

    // 능력치 랭크 변화. PokeAPI는 자신에게 오는 변화(리프스톰의 특공 -2 포함)도 "damage-raise",
    // 상대에게 거는 변화는 "damage-lower"로 부른다.
    let statKind = null;
    if (!isStatus && sd.self && sd.self.boosts) {
        statKind = "raise";
        meta.stat_chance = 100;
    }
    for (const s of secondaries) {
        if (s.self && s.self.boosts) {
            statKind = "raise";
            meta.stat_chance = s.chance;
        } else if (s.boosts) {
            statKind = "lower";
            meta.stat_chance = s.chance;
        }
    }

    // 분류
    let category;
    if (isStatus) {
        if (ailment && !sd.boosts) category = "ailment";
        else if (sd.heal) category = "heal";
        else if (sd.boosts || (sd.self && sd.self.boosts)) category = "net-good-stats";
        else category = "unique";
    } else if (meta.drain > 0) {
        category = "damage-heal";
    } else if (statKind === "raise") {
        category = "damage-raise";
    } else if (statKind === "lower") {
        category = "damage-lower";
    } else if (ailment) {
        category = "damage-ailment";
    } else {
        category = "damage";
    }
    meta.category = { name: category };

    // PokeAPI의 effect_chance: 부가 효과가 일어날 확률
    const effectChance = secondaries.length > 0 ? secondaries[0].chance : sd.self && sd.self.boosts && !isStatus ? 100 : null;
    return { meta, effectChance };
}

// Showdown의 능력치 약어 -> PokeAPI의 능력치 이름
const STAT = { atk: "attack", def: "defense", spa: "special-attack", spd: "special-defense", spe: "speed", accuracy: "accuracy", evasion: "evasion" };

// PokeAPI의 stat_changes 모양: [{ change: 1, stat: { name: "special-attack" } }]
// 부가 효과로 오는 변화(자신/상대), 자신에게 오는 변화, 변화기의 변화를 모두 한 목록으로 모은다.
export function deriveStatChanges(sd) {
    const boosts = {};
    const merge = (obj) => obj && Object.assign(boosts, obj);
    const secondaries = sd.secondaries || (sd.secondary ? [sd.secondary] : []);
    merge(sd.boosts);
    merge(sd.self && sd.self.boosts);
    for (const s of secondaries) {
        merge(s.boosts);
        merge(s.self && s.self.boosts);
    }
    return Object.entries(boosts)
        .filter(([k]) => STAT[k])
        .map(([k, change]) => ({ change, stat: { name: STAT[k] } }));
}

// ---------------------------------------------------------------- 검증: PokeAPI가 이미 가진 기술과 비교
function validate() {
    const fields = ["drain", "healing", "stat_chance", "flinch_chance", "ailment_chance", "crit_rate", "min_hits", "max_hits"];
    const stat = { checked: 0, noShowdown: [], category: 0, ailmentName: 0, effectChance: 0 };
    for (const f of fields) stat[f] = 0;
    const mismatches = {};
    const note = (key, text) => (mismatches[key] = mismatches[key] || []).push(text);

    for (const m of moves) {
        if (!m.meta) continue;
        const sd = showdown[sdIdOf(m.name)];
        if (!sd) {
            stat.noShowdown.push(m.name);
            continue;
        }
        stat.checked++;
        const { meta, effectChance } = deriveMeta(sd);
        for (const f of fields) {
            const a = m.meta[f] ?? null;
            const b = meta[f] ?? null;
            if (a === b || (a === 0 && b === null) || (a === null && b === 0)) stat[f]++;
            else note(f, `${m.name}: PokeAPI=${a} derived=${b}`);
        }
        if (m.meta.category.name === meta.category.name) stat.category++;
        else note("category", `${m.name}: PokeAPI=${m.meta.category.name} derived=${meta.category.name}`);
        const an = m.meta.ailment ? m.meta.ailment.name : "none";
        if (an === meta.ailment.name) stat.ailmentName++;
        else note("ailmentName", `${m.name}: PokeAPI=${an} derived=${meta.ailment.name}`);
        if ((m.effect_chance ?? null) === effectChance) stat.effectChance++;
        else note("effectChance", `${m.name}: PokeAPI=${m.effect_chance} derived=${effectChance}`);
    }

    const pctOf = (n) => ((n / stat.checked) * 100).toFixed(1) + "%";
    console.log(`비교한 기술: ${stat.checked}개 (Showdown에 없는 기술 ${stat.noShowdown.length}개 제외)`);
    for (const key of [...fields, "category", "ailmentName", "effectChance"]) {
        console.log(`  ${key.padEnd(14)} 일치 ${String(stat[key]).padStart(4)} / ${stat.checked}  (${pctOf(stat[key])})`);
    }
    for (const [key, list] of Object.entries(mismatches)) {
        console.log(`\n[${key}] 다른 기술 ${list.length}개 (앞 8개)`);
        for (const t of list.slice(0, 8)) console.log("  " + t);
    }
}

// ---------------------------------------------------------------- 직접 보정
// Showdown은 아래 기술의 효과를 코드(onHit)로만 구현해서 구조화된 데이터가 없고, PokeAPI는 9세대 기술의
// 대상(target)을 틀리게 적어 둔 것도 있다("all-allies"는 게임이 자신에게 쓰는 기술로 보지 않는다).
// 데이터가 알려 주는 만큼만 직접 적는다. 상태이상 회복, 함정 제거 같은 부가 효과는 엔진에 없어서 빠져 있다.
const OVERRIDES = {
    // 공격, 스피드 +1 (stat_changes는 PokeAPI에 이미 있음)
    "tidy-up": { category: "net-good-stats" },
    // 자신의 HP를 25% 회복
    "lunar-blessing": { category: "heal", healing: 25, target: "user-and-allies" },
    // 특수공격, 특수방어 +1
    "take-heart": {
        category: "net-good-stats",
        target: "user-and-allies",
        stat_changes: [
            { change: 1, stat: { name: "special-attack" } },
            { change: 1, stat: { name: "special-defense" } },
        ],
    },
};

function applyOverride(m) {
    const o = OVERRIDES[m.name];
    if (!o) return false;
    if (o.category) m.meta.category = { name: o.category };
    if (o.healing != null) m.meta.healing = o.healing;
    if (o.target) m.target = { name: o.target };
    if (o.stat_changes) m.stat_changes = o.stat_changes;
    return true;
}

// ---------------------------------------------------------------- 적용
function apply() {
    let filled = 0;
    const skipped = [];
    const statChangesFilled = [];
    const overridden = [];
    for (const m of moves) {
        if (m.meta) continue;
        const sd = showdown[sdIdOf(m.name)];
        if (!sd) {
            skipped.push(m.name);
            continue;
        }
        const { meta, effectChance } = deriveMeta(sd);
        m.meta = meta;
        if (m.effect_chance == null) m.effect_chance = effectChance;
        // PokeAPI가 stat_changes까지 비워 둔 기술이 있으면 Showdown에서 채운다
        if (!m.stat_changes || m.stat_changes.length === 0) {
            const changes = deriveStatChanges(sd);
            if (changes.length > 0) {
                m.stat_changes = changes;
                statChangesFilled.push(m.name);
            }
        }
        if (applyOverride(m)) overridden.push(m.name);
        filled++;
    }
    const toLines = (arr) => "[\n" + arr.map((x) => JSON.stringify(x)).join(",\n") + "\n]\n";
    fs.writeFileSync(movesFile, toLines(moves));
    console.log(`meta를 채운 기술: ${filled}개`);
    console.log(`stat_changes까지 채운 기술: ${statChangesFilled.length}개 ${statChangesFilled.length ? "(" + statChangesFilled.join(", ") + ")" : ""}`);
    console.log(`직접 보정한 기술: ${overridden.join(", ") || "없음"}`);
    console.log(`Showdown에 없어 그대로 둔 기술: ${skipped.length}개 ${skipped.length ? "(" + skipped.join(", ") + ")" : ""}`);
}

if (process.argv.includes("--validate")) validate();
else if (process.argv.includes("--apply")) apply();
else console.log("사용법: node tools/enrich-move-meta.mjs --validate | --apply");
