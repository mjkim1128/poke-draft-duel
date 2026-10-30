// 한국어 설정일 때 기술과 특성의 설명이 영어로 나오는 곳이 없어야 한다 (PokeAPI에 한국어 설명이 없는 새 기술/특성은 ko_descriptions.json이 채운다)
import fs from "fs";
import path from "path";
import NAMES from "shared/ability_names.json";
import KO_EXTRA from "shared/ko_descriptions.json";
import { abilityDescription } from "shared/abilitydescription";
import { moveDescription } from "shared/movedescription";

const dir = path.join(__dirname, "../../../api/src/main/resources/data/");
const readLines = (f) =>
    fs
        .readFileSync(dir + f, "utf8")
        .split(/\r?\n/)
        .filter((l) => l.startsWith("{"))
        .map((l) => JSON.parse(l.replace(/,$/, "")));
const MOVES = new Map(readLines("moves.json").map((m) => [m.name, m]));
const SETS = JSON.parse(fs.readFileSync(dir + "factory_sets.json", "utf8"));
const hangul = (s) => /[가-힣]/.test(s || "");

describe("특성 설명", () => {
    test("모든 특성이 한국어 설정에서 한글 설명을 가진다", () => {
        const english = Object.keys(NAMES).filter((slug) => !hangul(abilityDescription({ name: slug }, "ko")));
        expect(english).toEqual([]);
    });
    test("영어 설정에서는 영어 설명이 그대로 나온다", () => {
        expect(abilityDescription({ name: "quark-drive" }, "en")).toMatch(/Electric Terrain/);
    });
    test("보충 한국어 설명은 실제로 있는 특성의 것만 적혀 있다", () => {
        for (const slug of Object.keys(KO_EXTRA.abilities)) expect(NAMES[slug]).toBeTruthy();
    });
});

describe("기술 설명", () => {
    const used = new Set();
    for (const s of SETS) for (const slot of s.set.moves) for (const o of slot) used.add(o.slug);
    test("세트에 나오는 모든 기술이 한국어 설정에서 한글 설명을 가진다", () => {
        const english = [...used].filter((slug) => !MOVES.get(slug) || !hangul(moveDescription(MOVES.get(slug), "ko")));
        expect(english).toEqual([]);
    });
    test("영어 설정에서는 영어 설명이 그대로 나온다", () => {
        expect(moveDescription(MOVES.get("salt-cure"), "en")).toMatch(/salt cures/i);
    });
    test("보충 한국어 설명은 실제로 있는 기술의 것만 적혀 있다", () => {
        for (const slug of Object.keys(KO_EXTRA.moves)) expect(MOVES.get(slug)).toBeTruthy();
    });
});
