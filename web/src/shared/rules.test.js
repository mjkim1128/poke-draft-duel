// 시작 화면의 규칙 설명 내용
import { RULES, rulePages } from "./rules";

test("여섯 쪽이고 한국어와 영어의 쪽 수, 문단 수가 같다", () => {
    expect(RULES).toHaveLength(6);
    const ko = rulePages(true);
    const en = rulePages(false);
    expect(ko).toHaveLength(en.length);
    ko.forEach((page, i) => expect(page.paragraphs.length).toBe(en[i].paragraphs.length));
});
test("쪽마다 제목이 있고 문단이 하나 이상 있으며 비어 있는 글이 없다", () => {
    for (const ko of [true, false]) {
        for (const page of rulePages(ko)) {
            expect(page.title.trim().length).toBeGreaterThan(0);
            expect(page.paragraphs.length).toBeGreaterThan(0);
            for (const p of page.paragraphs) expect(p.trim().length).toBeGreaterThan(0);
        }
    }
});
test("검수한 쪽 제목", () => {
    expect(rulePages(true).map((p) => p.title)).toEqual(["목표", "선출", "배틀", "승리 뒤", "네임드 트레이너", "모드와 설정"]);
});
test("네임드 트레이너 뒤에는 교환이 없다는 설명이 있다", () => {
    expect(rulePages(true)[3].paragraphs).toContain("네임드 트레이너에게 이긴 뒤에는 교환할 수 없습니다.");
});
test("마지막 쪽: 항복은 어느 화면에서든 가능하고, 합계 600 보정의 기획 의도를 설명한다", () => {
    const last = rulePages(true)[5].paragraphs;
    expect(last).toContain("설정(⚙)의 항복으로 어느 화면에서든 도전을 끝낼 수 있습니다.");
    expect(last).toContain(
        "능력치는 시작 화면에서만 바꿀 수 있습니다. '합계 600 보정'은 모든 포켓몬의 종족값 합을 600으로 맞춥니다. 평소에 쓰고 싶었지만 약해서 쓰지 못하였던 포켓몬을 사용해볼 수 있는 모드로 기획하였습니다."
    );
});
