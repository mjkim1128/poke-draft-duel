// 시작 화면의 "규칙 설명"에 나오는 내용. 한 쪽에 제목 하나와 문단 몇 개가 들어가고, 한국어와 영어의 쪽 수와 문단 수는 같다.
// 규칙이 바뀌면(교환, 항복, 모드 등) 여기도 함께 고친다.
export const RULES = [
    {
        title: ["목표", "Goal"],
        paragraphs: [
            ["무작위로 받은 포켓몬 6마리로 배틀을 이기며 연승을 쌓는 게임입니다.", "Win battles with the 6 random Pokémon you're given and build up a win streak."],
            [
                "연승이 쌓이면 네임드 트레이너들이 나타나고, 30연승째에는 최종 보스가 기다립니다.",
                "As your streak grows, named trainers appear, and a final boss waits at 30 wins.",
            ],
            ["지면 처음부터 다시 시작합니다.", "If you lose, you start over from the beginning."],
        ],
    },
    {
        title: ["선출", "Picking your team"],
        paragraphs: [
            [
                "배틀 전에 상대 파티 6마리를 볼 수 있습니다. 포켓몬을 누르면 능력치와 특성, 기술 정보가 보입니다.",
                "Before each battle you can see the opponent's 6 Pokémon. Tap a Pokémon to see its stats, ability and moves.",
            ],
            [
                "내 6마리 중 3마리를 순서대로 골라 배틀에 내보냅니다. 첫 번째가 선두입니다.",
                "Choose 3 of your 6 in order to send into battle. The first one leads.",
            ],
            [
                "상대는 6마리 중 3마리를 내보내는데, 어떤 3마리인지는 배틀에 나오기 전까지 알 수 없습니다.",
                "The opponent brings 3 of its 6, but you won't know which 3 until they come out in the battle.",
            ],
        ],
    },
    {
        title: ["배틀", "Battle"],
        paragraphs: [
            [
                "매 턴 기술을 쓰거나 포켓몬을 교체합니다. 기술 버튼에 마우스를 올리면(폰에서는 길게 누르면) 위력, 예상 피해, 설명이 보입니다.",
                "Each turn, use a move or switch Pokémon. Hover over a move (or long-press it on a phone) to see its power, estimated damage and description.",
            ],
            [
                "메가스톤을 든 포켓몬은 '메가진화' 버튼을 켜면 그 턴에 메가진화합니다. 한 배틀에 한 번이며, 배틀이 끝나면 원래 모습으로 돌아옵니다.",
                "A Pokémon holding a Mega Stone Mega Evolves that turn when you switch on the 'Mega Evolve' button. It works once per battle, and the Pokémon returns to its normal form afterwards.",
            ],
            [
                "데미지는 85~100%의 난수가 있습니다. 상대 3마리를 모두 쓰러뜨리면 이기고, 내 3마리가 모두 쓰러지면 집니다.",
                "Damage has a random 85-100% roll. You win by knocking out all 3 of the opponent's Pokémon, and lose when all 3 of yours faint.",
            ],
        ],
    },
    {
        title: ["승리 뒤", "After a win"],
        paragraphs: [
            [
                "이기면 연승이 1 올라가고, 내 포켓몬의 체력, PP, 상태, 도구가 모두 회복됩니다.",
                "Your streak goes up by 1, and your Pokémon's HP, PP, status and items are fully restored.",
            ],
            [
                "일반 트레이너에게 이기면 배틀에서 본 상대 포켓몬 하나를 내 포켓몬 하나와 교환할 수 있습니다. 교환하지 않고 넘어가도 됩니다.",
                "After beating an ordinary trainer you can swap one of your Pokémon for one of the opponent's Pokémon you saw in the battle. You can also skip the swap.",
            ],
            ["네임드 트레이너에게 이긴 뒤에는 교환할 수 없습니다.", "There is no swapping after beating a named trainer."],
        ],
    },
    {
        title: ["네임드 트레이너", "Named trainers"],
        paragraphs: [
            [
                "5, 10, 15, 20, 25연승을 한 뒤에는 각자 콘셉트가 있는 네임드 트레이너가 나타납니다. 30연승 뒤에는 최종 보스가 있습니다.",
                "After 5, 10, 15, 20 and 25 wins you face a named trainer with a themed party. After 30 wins, the final boss is waiting.",
            ],
            [
                "최종 보스를 이기면 클리어이고, 일반 모드에서는 엔드리스 모드가 열립니다. 엔드리스 모드에서는 네임드 트레이너 없이 계속 도전합니다.",
                "Beat the final boss to clear the game. In normal mode this unlocks Endless Mode, where you keep challenging without named trainers.",
            ],
        ],
    },
    {
        title: ["모드와 설정", "Modes and settings"],
        paragraphs: [
            [
                "이지 모드는 진행이 저장되고, 져도 같은 층을 다시 도전할 수 있습니다. 대신 엔드리스 모드는 열리지 않습니다.",
                "Easy Mode saves your progress and lets you retry the same floor after a loss. In exchange, Endless Mode isn't unlocked.",
            ],
            [
                "설정(⚙)의 항복으로 어느 화면에서든 도전을 끝낼 수 있습니다.",
                "Use Surrender in the settings (⚙) to end your run from any screen.",
            ],
            [
                "능력치는 시작 화면에서만 바꿀 수 있습니다. '합계 600 보정'은 모든 포켓몬의 종족값 합을 600으로 맞춥니다. 평소에 쓰고 싶었지만 약해서 쓰지 못하였던 포켓몬을 사용해볼 수 있는 모드로 기획하였습니다.",
                "Stats can only be changed on the title screen. 'Total 600' adjusts every Pokémon's base stats so they add up to 600. It was designed as a mode where you can try the Pokémon you always wanted to use but were too weak to play.",
            ],
        ],
    },
];

// 언어에 맞는 쪽 목록: [{ title, paragraphs: [문단...] }, ...]
export function rulePages(ko) {
    const i = ko ? 0 : 1;
    return RULES.map((page) => ({ title: page.title[i], paragraphs: page.paragraphs.map((p) => p[i]) }));
}
