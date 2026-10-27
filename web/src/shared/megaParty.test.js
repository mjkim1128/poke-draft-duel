// 파티를 짤 때 메가진화할 수 있는 종이 메가스톤 세트를 받는 규칙 (1/2 확률, 한 파티에 최대 2마리)
import { assignMegaStones, MAX_MEGA_STONES } from "shared/randompokemon";
import { hasMegaForm } from "shared/mega";
import { getRandomFactorySet } from "shared/processjson";
import { fetchWithRetry } from "shared/serverStatus";

// 서버에 실제로 요청하지 않고, 어떤 주소로 요청하는지만 본다
jest.mock("shared/serverStatus", () => ({
    fetchWithRetry: jest.fn(),
}));

const party = (...names) => names.map((name) => ({ name }));
const stoneCount = (p) => p.filter((x) => x.want && x.want.stone === true).length;

describe("메가진화할 수 있는 종", () => {
    test("메가스톤 세트가 있는 종만 해당한다", () => {
        expect(hasMegaForm("charizard")).toBe(true);
        expect(hasMegaForm("scolipede")).toBe(true);
        expect(hasMegaForm("snorlax")).toBe(false);
    });
});

describe("메가스톤 세트 배정", () => {
    test("메가진화할 수 없는 종은 건드리지 않는다", () => {
        const p = assignMegaStones(party("snorlax", "blissey"), () => 0);
        expect(p.every((x) => x.want === undefined)).toBe(true);
    });
    test("확률 1/2: 난수가 0.5보다 작으면 메가스톤 세트, 크거나 같으면 아닌 세트", () => {
        expect(assignMegaStones(party("charizard"), () => 0.49)[0].want.stone).toBe(true);
        expect(assignMegaStones(party("charizard"), () => 0.5)[0].want.stone).toBe(false);
    });
    test("한 파티에 메가스톤 세트는 최대 두 마리다", () => {
        const six = assignMegaStones(party("charizard", "scolipede", "gyarados", "clefable", "sharpedo", "venusaur"), () => 0); // 모두 당첨돼도
        expect(MAX_MEGA_STONES).toBe(2);
        expect(stoneCount(six)).toBe(2);
        expect(six.filter((x) => x.want.stone === false)).toHaveLength(4);
    });
    test("무작위로 여러 번 돌려도 두 마리를 넘지 않고, 0마리, 1마리, 2마리가 모두 나온다", () => {
        const seen = new Set();
        for (let i = 0; i < 400; i++) {
            const six = assignMegaStones(party("charizard", "scolipede", "gyarados", "clefable", "sharpedo", "venusaur"));
            const n = stoneCount(six);
            expect(n).toBeLessThanOrEqual(2);
            seen.add(n);
        }
        expect([...seen].sort()).toEqual([0, 1, 2]);
    });
    test("메가진화할 수 있는 종이 한두 마리뿐이면 각각 대략 절반의 확률로 메가스톤 세트를 받는다", () => {
        let stones = 0;
        const trials = 2000;
        for (let i = 0; i < trials; i++) stones += stoneCount(assignMegaStones(party("charizard", "snorlax", "blissey")));
        expect(stones / trials).toBeGreaterThan(0.42);
        expect(stones / trials).toBeLessThan(0.58);
    });
    test("앞쪽 포켓몬만 유리하지 않다 (두 마리 제한이 걸려도 순서를 섞어서 정한다)", () => {
        const first = { charizard: 0, venusaur: 0, gyarados: 0 };
        for (let i = 0; i < 600; i++) {
            const p = assignMegaStones(party("charizard", "venusaur", "gyarados"), () => 0); // 모두 당첨 후보, 두 마리만 통과
            for (const x of p) if (x.want.stone) first[x.name]++;
        }
        for (const count of Object.values(first)) {
            expect(count).toBeGreaterThan(300); // 각자 약 2/3의 확률 (400)
            expect(count).toBeLessThan(500);
        }
    });
    test("이미 정해진 want(특성, 기술)는 그대로 두고 stone만 더한다", () => {
        const p = assignMegaStones([{ name: "charizard", want: { ability: "blaze" } }], () => 0);
        expect(p[0].want).toEqual({ ability: "blaze", stone: true });
    });
});

describe("서버에 세트를 요청할 때", () => {
    const ask = async (want) => {
        fetchWithRetry.mockClear();
        fetchWithRetry.mockResolvedValue({ status: 204, ok: true }); // (CRA는 테스트마다 mock을 초기화한다)
        await getRandomFactorySet("charizard", want);
        return fetchWithRetry.mock.calls[0][0];
    };
    test("stone 값이 있으면 주소에 붙인다", async () => {
        expect(await ask({ stone: true })).toContain("&stone=true");
        expect(await ask({ stone: false })).toContain("&stone=false");
    });
    test("stone 값이 없으면 붙이지 않는다", async () => {
        expect(await ask({})).not.toContain("stone");
    });
    test("item 값이 있으면 주소에 붙이고, 없으면 붙이지 않는다 (목록이면 쉼표로 잇는다)", async () => {
        expect(await ask({ item: "sitrus-berry" })).toContain("&item=sitrus-berry");
        expect(await ask({ item: ["white-herb", "focus-sash"] })).toContain("&item=white-herb%2Cfocus-sash");
        expect(await ask({})).not.toContain("item");
    });
});

describe("이미 정해진 stone(네임드 트레이너)은 그대로 두고 센다", () => {
    test("정해진 값은 바뀌지 않는다", () => {
        const p = assignMegaStones([{ name: "charizard", want: { stone: true } }, { name: "venusaur", want: { stone: false } }], () => 0);
        expect(p[0].want.stone).toBe(true);
        expect(p[1].want.stone).toBe(false);
    });
    test("정해진 메가스톤 2마리가 있으면 나머지는 모두 메가스톤이 아닌 세트다", () => {
        const six = assignMegaStones(
            [
                { name: "salamence", want: { stone: true } },
                { name: "metagross", want: { stone: true } },
                { name: "dragonite" },
                { name: "latios" },
                { name: "hydreigon" },
                { name: "heatran" },
            ],
            () => 0
        );
        expect(stoneCount(six)).toBe(2);
        expect(six.find((x) => x.name === "dragonite").want.stone).toBe(false);
        expect(six.find((x) => x.name === "latios").want.stone).toBe(false);
        expect(six.find((x) => x.name === "hydreigon").want).toBeUndefined(); // 메가진화할 수 없는 종
    });
    test("정해진 메가스톤이 1마리면 나머지에서 최대 한 마리만 더 받는다", () => {
        for (let i = 0; i < 100; i++) {
            const six = assignMegaStones([{ name: "swampert", want: { stone: true } }, { name: "blastoise" }, { name: "pelipper" }, { name: "kingdra" }, { name: "ludicolo" }, { name: "politoed" }]);
            expect(stoneCount(six)).toBeLessThanOrEqual(2);
            expect(six[0].want.stone).toBe(true);
        }
    });
});
