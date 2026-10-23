// 네임드 트레이너(보스). floor는 그 보스를 만나는 때의 연승 수다 (7연승째마다 한 명, 마지막은 50연승째).
// pokemon은 보스가 반드시 데려오는 포켓몬이다 (6마리를 다 적으면 파티가 통째로 정해지고, 모자라면 나머지는 일반 배틀처럼 무작위).
// lineup이 있는 보스는 상대가 6마리 중 3마리를 낼 때 칸마다 "이 특성을 가진 포켓몬 하나"를 먼저 뽑고(날씨를 거는 특성, 날씨에 반응하는 특성),
// 남은 자리는 나머지에서 무작위로 채운다. 해당하는 포켓몬이 없으면 그 칸은 무작위로 채운다.
// 한 칸은 이름 글자이거나 { name, ability, move }다. ability나 move를 적으면 세트 목록에서 그 특성/기술이 있는 세트로 뽑는다.
// 포켓몬 세트(도구, 특성, 기술)는 일반 포켓몬처럼 세트 목록에서 무작위로 뽑힌다.
// img는 public 폴더 안의 그림 경로다. 아직 전용 그림이 없는 보스는 임시로 몬스터볼 그림을 쓴다.
export const TRAINER_ALAZAR = {
    floor: 7,
    pokemon: ["grimer", "kadabra", "golem"],
    name: "Alazar",
    nameKo: "알라자르",
    text: [
        "You think your poor puny Pokemon can take on my chad squad?",
        "*humpf* I'd like to see you try!",
    ],
    textKo: ["너의 보잘것없는 포켓몬으로 내 최강 군단을 이길 수 있을 것 같아?", "흥! 어디 한번 해 보시지!"],
    img: "assets/alazarsprite.png",
};

export const TRAINER_BLAKE = {
    floor: 14,
    pokemon: ["hitmonlee", "electrode", "doduo"],
    name: "Blake",
    nameKo: "블레이크",
    text: [
        "Pokemon? More like Slowkemon!",
        "My team's speed dwarfs anything you could throw at me!",
    ],
    textKo: ["포켓몬? 느림보켓몬이라고 해야지!", "내 팀의 스피드는 네가 무엇을 내보내도 압도한다!"],
    img: "assets/blakesprite.png",
};

// 아래 네 명과 최종 보스의 이름, 대사는 처음 짜 본 초안이다. 팀은 콘셉트에 맞춰 6마리를 모두 정했다.
export const TRAINER_MARINA = {
    floor: 21,
    pokemon: [
        { name: "pelipper", ability: "drizzle" },
        { name: "politoed", ability: "drizzle" },
        { name: "kingdra", ability: "swift-swim" },
        { name: "ludicolo", ability: "swift-swim" },
        "swampert",
        "gyarados",
    ],
    name: "Marina",
    nameKo: "마리나",
    text: ["Do you hear the rain? It's the sound of my victory!", "Let's see if your team can swim."],
    textKo: ["빗소리가 들리니? 내 승리의 소리야!", "너의 팀이 헤엄칠 수 있는지 볼까?"],
    lineup: [{ abilities: ["drizzle"] }, { abilities: ["swift-swim"] }],
    img: "assets/trainer_cybercat.png",
};

export const TRAINER_DUNE = {
    floor: 28,
    pokemon: ["tyranitar", { name: "excadrill", ability: "sand-rush" }, "hippowdon", "garchomp", "rhyperior", "gliscor"],
    name: "Dune",
    nameKo: "듄",
    text: ["A storm is rolling in, and you're standing right in it.", "Grain by grain, I'll wear you down."],
    textKo: ["모래폭풍이 몰려오고 있어. 네가 서 있는 바로 그곳으로.", "한 알 한 알, 너를 닳게 해 주지."],
    lineup: [{ abilities: ["sand-stream"] }, { abilities: ["sand-rush"] }],
    img: "assets/trainer_skater.png",
};

export const TRAINER_FROST = {
    floor: 35,
    pokemon: ["abomasnow", "weavile", "mamoswine", "froslass", "beartic", "cloyster"],
    name: "Frost",
    nameKo: "프로스트",
    text: ["Cold enough for you? It's only getting colder.", "Nothing survives the long winter."],
    textKo: ["춥지? 앞으로 더 추워질 거야.", "긴 겨울을 이겨내는 건 없어."],
    lineup: [{ abilities: ["snow-warning"] }, { abilities: ["slush-rush", "snow-cloak"] }],
    img: "assets/trainer_icelady.png",
};

export const TRAINER_SOL = {
    floor: 42,
    pokemon: [
        { name: "torkoal", ability: "drought" },
        { name: "ninetales", ability: "drought" },
        { name: "venusaur", ability: "chlorophyll" },
        { name: "leafeon", ability: "chlorophyll" },
        "heatran",
        "charizard",
    ],
    name: "Sol",
    nameKo: "솔",
    text: ["Feel that heat? The sun is on my side today.", "Let's see how long you can stand the light."],
    textKo: ["이 열기 느껴져? 오늘은 태양이 내 편이야.", "네가 이 빛을 얼마나 버티는지 보자."],
    lineup: [{ abilities: ["drought"] }, { abilities: ["chlorophyll"] }],
    img: "assets/trainer_witch.png",
};

export const TRAINER_BASTION = {
    floor: 49,
    pokemon: ["blissey", "skarmory", "corviknight", "toxapex", "clefable", "ferrothorn"],
    name: "Bastion",
    nameKo: "바스티온",
    text: ["You'll break before I do.", "Patience is the strongest attack."],
    textKo: ["먼저 무너지는 건 네가 될 거야.", "인내가 가장 강한 공격이지."],
    img: "assets/trainer_pinkcat.png",
};

// 최종 보스: 이 사람을 이기면 엔드리스 모드가 열린다
export const FINAL_FLOOR = 50;
export const TRAINER_ORION = {
    floor: FINAL_FLOOR,
    pokemon: ["dragonite", "salamence", "metagross", "hydreigon", "heatran", "latios"],
    name: "Orion",
    nameKo: "오리온",
    text: ["You made it to the end. Few ever do.", "Now show me everything you've got!"],
    textKo: ["끝까지 올라왔구나. 여기까지 온 사람은 많지 않아.", "이제 가진 모든 것을 보여 줘!"],
    img: "logo192.png",
};

export const BOSSES = [
    TRAINER_ALAZAR,
    TRAINER_BLAKE,
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

// 보스의 6마리 중에서 3마리를 뽑는다. lineup이 없으면 완전 무작위다.
//   roster: 상대 포켓몬 6마리 (각자 .ability.name이 정해져 있다)
export function pickBossTeam(roster, lineup, random = Math.random) {
    const pickOne = (list) => list[Math.floor(random() * list.length)];
    const chosen = [];
    for (const rule of lineup || []) {
        const candidates = roster.filter(
            (p) => !chosen.includes(p) && p.ability && rule.abilities.includes(p.ability.name)
        );
        if (candidates.length > 0 && chosen.length < 3) chosen.push(pickOne(candidates));
    }
    while (chosen.length < 3) {
        const rest = roster.filter((p) => !chosen.includes(p));
        if (rest.length === 0) break;
        chosen.push(pickOne(rest));
    }
    // 앞에 나올 포켓몬은 무작위다
    for (let i = chosen.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [chosen[i], chosen[j]] = [chosen[j], chosen[i]];
    }
    return chosen;
}
