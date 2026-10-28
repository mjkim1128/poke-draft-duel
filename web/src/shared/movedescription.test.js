// 기술 정보창의 설명: 언어 설정에 맞는 최신 도감 설명을 한 줄로 보여 준다
import fs from "fs";
import path from "path";
import { moveDescription } from "shared/movedescription";

const MOVES = new Map(
    fs
        .readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/moves.json"), "utf8")
        .split(/\r?\n/)
        .filter((l) => l.startsWith("{"))
        .map((l) => JSON.parse(l.replace(/,$/, "")))
        .map((m) => [m.name, m])
);
const entry = (language, flavor_text) => ({ language: { name: language }, flavor_text });

describe("언어와 최신 설명", () => {
    const move = { flavor_text_entries: [entry("en", "Old English."), entry("ko", "옛 한국어."), entry("en", "New English."), entry("ko", "새 한국어.")] };
    test("한국어 설정이면 가장 마지막 한국어 설명", () => {
        expect(moveDescription(move, "ko")).toBe("새 한국어.");
    });
    test("English 설정이면 가장 마지막 영어 설명", () => {
        expect(moveDescription(move, "en")).toBe("New English.");
    });
    test("한국어 설명이 없으면 영어로, 영어가 없으면 한국어로", () => {
        expect(moveDescription({ flavor_text_entries: [entry("en", "Only English.")] }, "ko")).toBe("Only English.");
        expect(moveDescription({ flavor_text_entries: [entry("ko", "한국어만.")] }, "en")).toBe("한국어만.");
    });
});

describe("글 다듬기", () => {
    test("줄바꿈과 줄 끝 하이픈을 없애고 한 줄로 만든다", () => {
        const move = { flavor_text_entries: [entry("en", "A dance that in­\ncreases ATTACK.\nIt is fast.")] };
        expect(moveDescription(move, "en")).toBe("A dance that increases ATTACK. It is fast.");
    });
});

describe("설명이 없을 때", () => {
    test("도감 설명이 없으면 효과 요약을 쓴다", () => {
        expect(moveDescription({ flavor_text_entries: [], effect_entries: [{ short_effect: "Raises Attack." }] }, "en")).toBe("Raises Attack.");
    });
    test("아무것도 없으면 빈 글", () => {
        expect(moveDescription({}, "en")).toBe("");
        expect(moveDescription({ flavor_text_entries: [] }, "ko")).toBe("");
    });
    test("언어 표시가 없는 옛 데이터도 쓴다", () => {
        expect(moveDescription({ flavor_text_entries: [{ flavor_text: "Untagged." }] }, "ko")).toBe("Untagged.");
    });
});

describe("실제 기술 데이터", () => {
    test("몸통박치기는 한국어 설명이 한 줄 한글로 나온다", () => {
        const text = moveDescription(MOVES.get("tackle"), "ko");
        expect(text).toMatch(/[가-힣]/);
        expect(text).not.toContain("\n");
    });
    test("기가톤해머는 한국어 설명이 없어서 영어로 나온다", () => {
        expect(moveDescription(MOVES.get("gigaton-hammer"), "ko")).toContain("hammer");
    });
    test("거의 모든 기술에 설명이 있다", () => {
        const empty = [...MOVES.values()].filter((m) => !moveDescription(m, "ko") && !moveDescription(m, "en"));
        expect(empty.length).toBeLessThan(40); // 설명이 없는 기술(섀도 계열 등)은 정보창에서 설명 줄을 생략한다
    });
});
