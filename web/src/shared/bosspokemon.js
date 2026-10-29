// 네임드 트레이너(보스). floor는 그 보스를 만나는 때의 연승 수다 (5연승째마다 한 명, 마지막은 30연승째).
// pokemon은 보스가 반드시 데려오는 포켓몬이다 (6마리를 다 적으면 파티가 통째로 정해지고, 모자라면 나머지는 일반 배틀처럼 무작위).
// lineup이 있는 보스는 상대가 6마리 중 3마리를 낼 때 칸마다 "이 특성을 가진 포켓몬 하나"를 먼저 뽑고(날씨를 거는 특성, 날씨에 반응하는 특성),
// 칸은 { mega: true }(메가스톤을 들어서 메가진화할 수 있는 포켓몬) 또는 { mega: false }(메가진화하지 않는 포켓몬)일 수도 있고,
// { name: "froslass" }처럼 이름으로 그 포켓몬을 정할 수도 있고, { names: ["skarmory", "ferrothorn"] }처럼 이름 목록 중 하나를 뽑을 수도 있다.
// { name, mega: true }는 그 포켓몬이 메가스톤을 들고 있을 때다.
// lineup은 칸 목록이거나, { options: [칸 목록, 칸 목록...] }이다. options이면 그 중 하나를 같은 확률로 골라서 쓴다 (예: 프로스트).
// 칸 목록이 3칸보다 짧으면 나머지 칸은 남은 포켓몬 중에서 무작위로 채운다.
// { mega: true }가 있으면 날씨를 거는 첫 칸은 메가진화하지 않는 포켓몬을 먼저 고른다 (메가스톤을 든 포켓몬은 메가 칸에서 나오도록).
// 첫 번째 칸(날씨를 거는 포켓몬)은 지금 가진 특성만 보고, 두 번째 칸부터는 메가스톤을 들고 있으면 메가진화한 뒤의 특성도 친다
// (예: 마리나의 쓱쓱 칸에는 쓱쓱인 킹드라와, 메가진화하면 쓱쓱이 되는 대짱이가 모두 후보다).
// 남은 자리는 나머지에서 무작위로 채운다. 해당하는 포켓몬이 없으면 그 칸은 무작위로 채운다.
// 한 칸은 이름 글자이거나 { name, ability, move, item, stone }다. ability, move, item을 적으면 세트 목록에서 그 특성/기술/도구가 있는 세트로 뽑는다.
// item은 도구 하나이거나 [도구, 도구] 목록(그 중 하나를 든 세트)이다. stone: false는 메가스톤을 들지 않는 세트로 고정한다(메가진화 가능한 종이어도).
// stone: true를 적으면 그 포켓몬은 반드시 메가스톤을 든 세트로 나온다 (그 보스의 대표 메가진화). 한 보스에 최대 2마리까지.
// stone을 적지 않은 메가진화 가능 종은 일반 파티와 같은 규칙(1/2 확률, 한 파티에 메가스톤 최대 2마리 - 적어 둔 stone도 센다)을 따른다.
// guaranteeMega: true인 보스(바스티온)는 lineup 없이 일반 트레이너처럼 내 6마리 전체를 보고 상성으로 3마리를 고르되, 메가진화할 수 있는 포켓몬이 한 마리는 반드시 들어간다 (bosscounter.js).
// counter: true인 보스(P.D.D Developer, 최종 보스)는 6마리 중 3마리를 무작위로 내지 않고, 내가 고른 3마리를 보고 가장 상성이 좋은 3마리를 내며,
// 전투 중에는 내가 이번 턴에 무엇을 하는지(기술, 교체) 알고 나서 행동한다 (bosscounter.js, cpuread.js).
// 포켓몬 세트(도구, 특성, 기술)는 일반 포켓몬처럼 세트 목록에서 무작위로 뽑힌다.
// img는 public 폴더 안의 그림 경로다. 아직 전용 그림이 없는 보스는 임시로 몬스터볼 그림을 쓴다.
import { megaFormOf } from "./mega";

// 아래 다섯 명과 최종 보스의 이름, 대사는 처음 짜 본 초안이다. 팀은 콘셉트에 맞춰 6마리를 모두 정했다.
export const TRAINER_MARINA = {
    floor: 5,
    pokemon: [
        { name: "pelipper", ability: "drizzle" },
        { name: "politoed", ability: "drizzle" },
        { name: "kingdra", ability: "swift-swim" },
        { name: "archaludon", ability: "stamina", move: "electro-shot", item: "sitrus-berry" },
        { name: "swampert", stone: true },
        { name: "blastoise", stone: false, item: ["white-herb", "focus-sash"] },
    ],
    name: "Marina",
    nameKo: "마리나",
    text: ["Do you hear the rain? It's the sound of my victory!", "Let's see if your team can swim."],
    textKo: ["빗소리가 들리니? 내 승리의 소리야!", "너의 팀이 헤엄칠 수 있는지 볼까?"],
    lineup: [{ abilities: ["drizzle"] }, { abilities: ["swift-swim"] }],
    img: "assets/trainer_cybercat.png",
};

export const TRAINER_DUNE = {
    floor: 10,
    pokemon: ["tyranitar", "excadrill", "hippowdon", "garchomp", "rhyperior", "steelix"],
    name: "Dune",
    nameKo: "듄",
    text: ["A storm is rolling in, and you're standing right in it.", "Grain by grain, I'll wear you down."],
    textKo: ["모래폭풍이 몰려오고 있어. 네가 서 있는 바로 그곳으로.", "한 알 한 알, 너를 닳게 해 주지."],
    lineup: [{ abilities: ["sand-stream"] }, { mega: true }, { mega: false }],
    img: "assets/trainer_skater.png",
};

export const TRAINER_FROST = {
    floor: 15,
    pokemon: [
        { name: "ninetales-alola", ability: "snow-warning" },
        "weavile",
        "mamoswine",
        { name: "froslass", stone: true },
        "beartic",
        { name: "baxcalibur", stone: true },
    ],
    name: "Frost",
    nameKo: "프로스트",
    text: ["Cold enough for you? It's only getting colder.", "Nothing survives the long winter."],
    textKo: ["춥지? 앞으로 더 추워질 거야.", "긴 겨울을 이겨내는 건 없어."],
    // A형: 알로라 나인테일(눈을 깔며 선두) + 메가 드닐레이브 + 무작위 1마리 / B형: 메가 눈여아(메가진화하며 눈을 깔고 선두) + 무작위 2마리
    lineup: {
        options: [
            [{ name: "ninetales-alola" }, { name: "baxcalibur", mega: true }],
            [{ name: "froslass", mega: true }],
        ],
    },
    img: "assets/trainer_icelady.png",
};

export const TRAINER_SOL = {
    floor: 20,
    pokemon: [
        { name: "torkoal", ability: "drought" },
        { name: "ninetales", ability: "drought" },
        { name: "victreebel", ability: "chlorophyll", stone: false }, // 엽록소 세트 중 메가스톤이 없는 세트만 (메가는 리자몽 Y 하나)
        { name: "leafeon", ability: "chlorophyll" },
        "houndoom",
        { name: "charizard", stone: true, item: "charizardite-y" }, // 메가진화하면 가뭄이 되는 Y로 고정
    ],
    name: "Sol",
    nameKo: "솔",
    text: ["Feel that heat? The sun is on my side today.", "Let's see how long you can stand the light."],
    textKo: ["이 열기 느껴져? 오늘은 태양이 내 편이야.", "네가 이 빛을 얼마나 버티는지 보자."],
    // A형: 가뭄 담당(선두) + 엽록소 + 메가 1마리(메가 리자몽 Y 또는 메가 헬가) / B형: 메가 리자몽 Y(메가진화하며 쾌청을 깔고 선두) + 엽록소 + 무작위 1마리
    lineup: {
        options: [
            [{ abilities: ["drought"] }, { abilities: ["chlorophyll"] }, { mega: true }],
            [{ name: "charizard", mega: true }, { abilities: ["chlorophyll"] }],
        ],
    },
    img: "assets/trainer_witch.png",
};

export const TRAINER_BASTION = {
    floor: 25,
    pokemon: [
        { name: "aggron", stone: true },
        { name: "golisopod", stone: true },
        "regice",
        "florges",
        "toxapex",
        "umbreon",
    ],
    name: "Bastion",
    nameKo: "바스티온",
    text: ["You'll break before I do.", "Patience is the strongest attack."],
    textKo: ["먼저 무너지는 건 네가 될 거야.", "인내가 가장 강한 공격이지."],
    // 일반 트레이너처럼 내 6마리를 보고 상성으로 3마리를 고르되, 메가진화할 수 있는 포켓몬(보스로라, 갑주무사)이 적어도 한 마리는 나온다
    guaranteeMega: true,
    img: "assets/trainer_pinkcat.png",
};

// 최종 보스: 이 사람을 이기면 엔드리스 모드가 열린다
export const FINAL_FLOOR = 30;
export const TRAINER_ORION = {
    floor: FINAL_FLOOR,
    // 메가진화 없이 만들 수 있는 가장 강한 파티. 플레이어가 고른 3마리를 보고 상성이 가장 좋은 3마리를 내보낸다 (counter).
    pokemon: ["flutter-mane", "chien-pao", "ursaluna-bloodmoon", "urshifu-rapid-strike", "gholdengo", "ting-lu"],
    counter: true,
    name: "P.D.D Developer",
    nameKo: "P.D.D Developer",
    // 진입 대사는 journey.js가 만든다: 패배한 횟수와 걸린 시간이 들어간다 (아래 text는 기록을 읽을 수 없을 때를 위한 것)
    journey: true,
    text: ["You made it all the way up here. I built this place, you know.", "I won't go easy on you."],
    textKo: ["여기까지 올라오다니. 이 게임, 내가 만들었거든.", "그렇다고 봐주지 않아."],
    // 이겼을 때 클리어 화면에서 하는 말 (일반 모드 / 이지 모드)
    clearText: ["Well played. These parties weren't built to be broken, you know.", "Still, I'm glad if you had fun."],
    clearTextKo: ["훌륭하네. 깨라고 만든 파티가 아니었는데 말이지.", "그래도 재밌게 즐겼다면 다행이야."],
    clearTextEasy: ["...Well played. Easy or not, a win is a win.", "If you want to see how deep this goes, try the normal mode."],
    clearTextEasyKo: ["...잘했어. 이지든 아니든, 이긴 건 이긴 거지.", "이 길이 얼마나 깊은지 보고 싶다면 일반 모드로 도전해 봐."],
    img: "assets/trainer_pdd.png",
};

export const BOSSES = [
    TRAINER_MARINA,
    TRAINER_DUNE,
    TRAINER_FROST,
    TRAINER_SOL,
    TRAINER_BASTION,
    TRAINER_ORION,
];

// 그 연승 수에서 만나는 보스 (없으면 null)
export function bossForFloor(floor) {
    return BOSSES.find((b) => b.floor === floor) || null;
}

// 방금 이긴 상대가 네임드 트레이너(보스)였는가: 이기면 연승 수가 하나 늘어서, 이긴 뒤의 연승 수에서 하나를 뺀 층이 보스의 층이다.
// 네임드 트레이너를 이긴 뒤에는 상대 포켓몬과 교환하는 화면을 건너뛴다. (엔드리스 모드에는 네임드 트레이너가 없다)
export const beatNamedTrainer = (winStreakAfterWin, endless = false) => !endless && !!bossForFloor(winStreakAfterWin - 1);

// 보스의 6마리 중에서 3마리를 뽑는다. lineup이 없으면 완전 무작위다.
//   roster: 상대 포켓몬 6마리 (각자 .ability.name이 정해져 있다)
export function pickBossTeam(roster, lineup, random = Math.random) {
    const pickOne = (list) => list[Math.floor(random() * list.length)];
    // lineup이 { options }이면 그 중 하나를 같은 확률로 고른다
    const rules = lineup && !Array.isArray(lineup) && lineup.options ? pickOne(lineup.options) : lineup || [];
    const chosen = [];
    // 메가스톤을 들고 있으면 메가진화한 뒤의 특성도 후보로 친다 (첫 칸, 날씨를 거는 포켓몬은 처음부터 날씨를 깔아야 하니 지금 특성만)
    const abilityNames = (p, withMega) => {
        const names = p.ability ? [p.ability.name] : [];
        const form = withMega ? megaFormOf(p) : null;
        if (form) names.push(form.abilities[0].ability.name);
        return names;
    };
    const wantsMega = rules.some((rule) => rule.mega === true && rule.name === undefined);
    let leadPicked = false; // 첫 칸에서 포켓몬을 뽑았는가 (그 포켓몬이 맨 앞에 나온다)
    for (const [index, rule] of rules.entries()) {
        let candidates = roster.filter((p) => {
            if (chosen.includes(p)) return false;
            if (rule.name !== undefined && p.name !== rule.name) return false;
            if (rule.names !== undefined && !rule.names.includes(p.name)) return false;
            if (rule.mega !== undefined) return !!megaFormOf(p) === rule.mega;
            if (rule.abilities) return abilityNames(p, index > 0).some((name) => rule.abilities.includes(name));
            return rule.name !== undefined || rule.names !== undefined; // 이름(목록)만 적은 칸
        });
        if (index === 0 && wantsMega) {
            const plain = candidates.filter((p) => !megaFormOf(p));
            if (plain.length > 0) candidates = plain;
        }
        if (candidates.length > 0 && chosen.length < 3) {
            chosen.push(pickOne(candidates));
            if (index === 0) leadPicked = true;
        }
    }
    while (chosen.length < 3) {
        const rest = roster.filter((p) => !chosen.includes(p));
        if (rest.length === 0) break;
        chosen.push(pickOne(rest));
    }
    // 첫 번째 규칙에서 뽑은 포켓몬(날씨를 거는 포켓몬이나 메가진화하며 날씨를 거는 포켓몬)이 먼저 나와야 날씨가 바로 깔린다. 나머지 순서는 무작위다.
    const first = leadPicked ? 1 : 0;
    for (let i = chosen.length - 1; i > first; i--) {
        const j = first + Math.floor(random() * (i - first + 1));
        [chosen[i], chosen[j]] = [chosen[j], chosen[i]];
    }
    return chosen;
}
