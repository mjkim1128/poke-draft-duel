import { setLang, withParticle } from "./lang";
import { translateLine, untranslatedSentences } from "./logTranslate";
import templates from "./logTemplates.fixture.json";

describe("translateLine", () => {
    test("simple templates", () => {
        expect(translateLine("피카츄 used 10만볼트!")).toBe("피카츄의 10만볼트!");
        expect(translateLine("피카츄 fainted!")).toBe("피카츄는 쓰러졌다!");
        expect(translateLine("리자몽 fainted!")).toBe("리자몽은 쓰러졌다!");
    });
    test("multiple sentences", () => {
        expect(translateLine("A used B! It's super effective!")).toBe("A의 B! 효과가 굉장했다!");
        expect(translateLine("Switch out 피카츄! Switch in 리자몽!")).toBe("피카츄, 돌아와! 가랏! 리자몽!");
    });
    test("status words", () => {
        expect(translateLine("피카츄 is now afflicted with sleep!")).toBe("피카츄는 잠듦 상태가 되었다!");
    });
    test("unknown stays", () => {
        expect(translateLine("Something odd happened!")).toBe("Something odd happened!");
    });
    test("particles", () => {
        expect(withParticle("물", "로")).toBe("물로");
        expect(withParticle("불꽃", "로")).toBe("불꽃으로");
        expect(withParticle("피카츄", "이")).toBe("피카츄가");
    });
});

test("every extracted template is covered", () => {
    const missing = templates
        .map((t) => t.t.replace(/\{\}/g, "이름"))
        .filter((s) => untranslatedSentences(s).length > 0);
    expect(missing).toEqual([]);
});

afterAll(() => setLang("en"));
