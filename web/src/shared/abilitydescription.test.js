// 특성 설명: PokeAPI에서 받아 둔 데이터를 언어 설정에 맞춰 보여 준다
import DESCRIPTIONS from "shared/ability_descriptions.json";
import NAMES from "shared/ability_names.json";
import { abilityDescription } from "shared/abilitydescription";

describe("특성 설명 데이터", () => {
    test("게임의 모든 특성에 설명이 있다", () => {
        const missing = Object.keys(NAMES).filter((slug) => !DESCRIPTIONS[slug]);
        expect(missing).toEqual([]);
    });
    test("모든 특성에 영어 설명이 있고, 줄바꿈이 남아 있지 않다", () => {
        for (const [slug, d] of Object.entries(DESCRIPTIONS)) {
            expect(typeof d.en).toBe("string");
            expect(d.en.length).toBeGreaterThan(5);
            expect(`${slug}: ${d.en}${d.ko || ""}`).not.toMatch(/[\n\u00ad]/);
        }
    });
});

describe("abilityDescription", () => {
    test("한국어 설정이면 한국어 설명", () => {
        expect(abilityDescription({ name: "intimidate" }, "ko")).toMatch(/[가-힣]/);
    });
    test("English 설정이면 영어 설명", () => {
        expect(abilityDescription({ name: "intimidate" }, "en")).toMatch(/Attack/);
    });
    test("PokeAPI에 한국어 설명이 없는 새 특성도 한국어로 나온다 (ko_descriptions.json이 채운다), 영어 설정에서는 영어", () => {
        expect(DESCRIPTIONS["minds-eye"].ko).toBeUndefined();
        expect(abilityDescription({ name: "minds-eye" }, "ko")).toMatch(/고스트/);
        expect(abilityDescription({ name: "minds-eye" }, "en")).toMatch(/Ghost/);
    });
    test("특성이 없거나 모르는 특성이면 빈 글", () => {
        expect(abilityDescription(null, "ko")).toBe("");
        expect(abilityDescription({ name: "no-such-ability" }, "ko")).toBe("");
    });
});
