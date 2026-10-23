// 네임드 트레이너(보스). floor는 그 보스를 만나는 때의 연승 수다 (7연승째마다 한 명, 마지막은 50연승째).
// pokemon은 보스가 반드시 데려오는 3마리이고, 나머지 3마리는 일반 배틀처럼 무작위로 채운다.
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

// 아래 네 명과 최종 보스는 처음 짜 본 초안이다. 이름, 대사, 팀, 그림은 마음대로 바꾸면 된다.
export const TRAINER_MARINA = {
    floor: 21,
    pokemon: ["politoed", "ludicolo", "kingdra"],
    name: "Marina",
    nameKo: "마리나",
    text: ["Do you hear the rain? It's the sound of my victory!", "Let's see if your team can swim."],
    textKo: ["빗소리가 들리니? 내 승리의 소리야!", "너의 팀이 헤엄칠 수 있는지 볼까?"],
    img: "logo192.png",
};

export const TRAINER_DUNE = {
    floor: 28,
    pokemon: ["tyranitar", "excadrill", "hippowdon"],
    name: "Dune",
    nameKo: "듄",
    text: ["A storm is rolling in, and you're standing right in it.", "Grain by grain, I'll wear you down."],
    textKo: ["모래폭풍이 몰려오고 있어. 네가 서 있는 바로 그곳으로.", "한 알 한 알, 너를 닳게 해 주지."],
    img: "logo192.png",
};

export const TRAINER_FROST = {
    floor: 35,
    pokemon: ["abomasnow", "glalie", "weavile"],
    name: "Frost",
    nameKo: "프로스트",
    text: ["Cold enough for you? It's only getting colder.", "Nothing survives the long winter."],
    textKo: ["춥지? 앞으로 더 추워질 거야.", "긴 겨울을 이겨내는 건 없어."],
    img: "logo192.png",
};

export const TRAINER_SAGE = {
    floor: 42,
    pokemon: ["reuniclus", "bronzong", "cresselia"],
    name: "Sage",
    nameKo: "세이지",
    text: ["Slow is smooth, and smooth is fast. Let me show you.", "In this room, time runs backwards."],
    textKo: ["느린 것이 곧 부드럽고, 부드러운 것이 곧 빠른 거야. 보여 줄게.", "이 방에서는 시간이 거꾸로 흘러."],
    img: "logo192.png",
};

export const TRAINER_BASTION = {
    floor: 49,
    pokemon: ["blissey", "skarmory", "corviknight"],
    name: "Bastion",
    nameKo: "바스티온",
    text: ["You'll break before I do.", "Patience is the strongest attack."],
    textKo: ["먼저 무너지는 건 네가 될 거야.", "인내가 가장 강한 공격이지."],
    img: "logo192.png",
};

// 최종 보스: 이 사람을 이기면 엔드리스 모드가 열린다
export const FINAL_FLOOR = 50;
export const TRAINER_ORION = {
    floor: FINAL_FLOOR,
    pokemon: ["dragonite", "salamence", "metagross"],
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
    TRAINER_SAGE,
    TRAINER_BASTION,
    TRAINER_ORION,
];

// 그 연승 수에서 만나는 보스 (없으면 null)
export function bossForFloor(floor) {
    return BOSSES.find((b) => b.floor === floor) || null;
}
