// 실제 배틀 팩토리 세트(도구/특성/기술) 모음. 종족 슬러그(PokeAPI 이름)를 키로 하고,
// 그 종이 실전에서 쓸 수 있는 세트들의 배열을 값으로 가집니다. 각 세트를 뽑는 로직은
// randompokemon.js의 pickFactorySet/resolveFactoryMoveSlugs를 참고하세요.
// 슬러그 옆 /* 한글 */ 주석은 참고용이며 게임 로직에는 쓰이지 않습니다.
// eslint-disable-next-line import/no-anonymous-default-export
const SPECIES_FACTORY_SETS = {
  "klefki": /* 클레피 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ]
    ]
  },
  {
    "item": "light-clay" /* 빛의점토 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "reflect" /* 리플렉터 */ } ],
      [ { "slug": "light-screen" /* 빛의장막 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "magnet-rise" /* 전자부유 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "magnet-rise" /* 전자부유 */ }, { "slug": "reflect" /* 리플렉터 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "magnet-rise" /* 전자부유 */ }, { "slug": "reflect" /* 리플렉터 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ }, { "slug": "foul-play" /* 속임수 */ } ]
    ]
  },
  {
    "item": "light-clay" /* 빛의점토 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "reflect" /* 리플렉터 */ } ],
      [ { "slug": "light-screen" /* 빛의장막 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ } ]
    ]
  },
  {
    "item": "light-clay" /* 빛의점토 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "reflect" /* 리플렉터 */ } ],
      [ { "slug": "light-screen" /* 빛의장막 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ]
    ]
  },
  {
    "item": "light-clay" /* 빛의점토 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "reflect" /* 리플렉터 */ } ],
      [ { "slug": "light-screen" /* 빛의장막 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ]
    ]
  },
  {
    "item": "light-clay" /* 빛의점토 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "reflect" /* 리플렉터 */ } ],
      [ { "slug": "light-screen" /* 빛의장막 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "magnet-rise" /* 전자부유 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ }, { "slug": "magnet-rise" /* 전자부유 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ }, { "slug": "magnet-rise" /* 전자부유 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "magician" /* 매지션 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "magnet-rise" /* 전자부유 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ } ],
      [ { "slug": "draining-kiss" /* 드레인키스 */ } ],
      [ { "slug": "stored-power" /* 어시스트파워 */ } ]
    ]
  }
  ],
  "tyranitar": /* 마기라스 */ [
  {
    "item": "shuca-berry" /* 슈캐열매 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "low-kick" /* 안다리걸기 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "roar" /* 울부짖기 */ } ]
    ]
  },
  {
    "item": "weakness-policy" /* 약점보험 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "rock-polish" /* 록커트 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "rock-blast" /* 락블레스트 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "rock-blast" /* 락블레스트 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "heavy-slam" /* 헤비봄버 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  }
  ],
  "salamence": /* 보만다 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "fire-fang" /* 불꽃엄니 */ } ],
      [ { "slug": "dragon-claw" /* 드래곤크루 */ }, { "slug": "iron-tail" /* 아이언테일 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ }, { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "dual-wingbeat" /* 더블윙 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "dual-wingbeat" /* 더블윙 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ }, { "slug": "temper-flare" /* 열불내기 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": ["intimidate" /* 위협 */, "moxie" /* 자기과신 */],
    "moves": [
      [ { "slug": "dragon-claw" /* 드래곤크루 */ } ],
      [ { "slug": "dual-wingbeat" /* 더블윙 */ }, { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": ["intimidate" /* 위협 */, "moxie" /* 자기과신 */],
    "moves": [
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "dual-wingbeat" /* 더블윙 */ }, { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  }
  ],
  "sableye": /* 깜까미 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  ],
  "mawile": /* 입치트 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "super-fang" /* 분노의앞니 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  }
  ],
  "lucario": /* 루카리오 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "steadfast" /* 불굴의마음 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "vacuum-wave" /* 진공파 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "meteor-mash" /* 코멧펀치 */ }, { "slug": "bullet-punch" /* 불릿펀치 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "inner-focus" /* 정신력 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "vacuum-wave" /* 진공파 */ }, { "slug": "dark-pulse" /* 악의파동 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "inner-focus" /* 정신력 */,
    "moves": [
      [ { "slug": "meteor-mash" /* 코멧펀치 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ }, { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "inner-focus" /* 정신력 */,
    "moves": [
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ }, { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "meteor-mash" /* 코멧펀치 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "inner-focus" /* 정신력 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "meteor-mash" /* 코멧펀치 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ]
    ]
  }
  ],
  "latios": /* 라티오스 */ [
  {
    "item": "soul-dew" /* 마음의물방울 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "memento" /* 추억의선물 */ }, { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "soul-dew" /* 마음의물방울 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "soul-dew" /* 마음의물방울 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "memento" /* 추억의선물 */ }, { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "soul-dew" /* 마음의물방울 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "soul-dew" /* 마음의물방울 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ }, { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ }, { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "steel" } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "steel" } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "surf" /* 파도타기 */ }, { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "surf" /* 파도타기 */ }, { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "soul-dew" /* 마음의물방울 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ } ],
      [ { "slug": "luster-purge" /* 라스트버지 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ } ],
      [ { "slug": "luster-purge" /* 라스트버지 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ]
    ]
  },
  {
    "item": "soul-dew" /* 마음의물방울 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ }, { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "luster-purge" /* 라스트버지 */ }, { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "luster-purge" /* 라스트버지 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ],
      [ { "slug": "surf" /* 파도타기 */ }, { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "luster-purge" /* 라스트버지 */ } ],
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "luster-purge" /* 라스트버지 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "soul-dew" /* 마음의물방울 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "luster-purge" /* 라스트버지 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "soul-dew" /* 마음의물방울 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "luster-purge" /* 라스트버지 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  }
  ],
  "latias": /* 라티아스 */ [
  {
    "item": "soul-dew" /* 마음의물방울 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "recover" /* HP회복 */ }, { "slug": "healing-wish" /* 치유소원 */ } ]
    ]
  },
  {
    "item": "soul-dew" /* 마음의물방울 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "healing-wish" /* 치유소원 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "healing-wish" /* 치유소원 */ } ],
      [ { "slug": "trick" /* 트릭 */ }, { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" }, { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" }, { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "trick" /* 트릭 */ }, { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" }, { "slug": "healing-wish" /* 치유소원 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "healing-wish" /* 치유소원 */ }, { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "healing-wish" /* 치유소원 */ } ]
    ]
  }
  ],
  "kangaskhan": /* 캥카 */ [
  {
    "item": "silk-scarf" /* 실크스카프 */,
    "ability": "scrappy" /* 배짱 */,
    "moves": [
      [ { "slug": "fake-out" /* 속이다 */ } ],
      [ { "slug": "double-edge" /* 이판사판태클 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  ],
  "greninja": /* 개굴닌자 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "rock-slide" /* 스톤샤워 */ }, { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "low-kick" /* 안다리걸기 */ }, { "slug": "spikes" /* 압정뿌리기 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "low-kick" /* 안다리걸기 */ }, { "slug": "rock-slide" /* 스톤샤워 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "extrasensory" /* 신통력 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "extrasensory" /* 신통력 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "rock-slide" /* 스톤샤워 */ }, { "slug": "low-kick" /* 안다리걸기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "electric" } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "surf" /* 파도타기 */ }, { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ }, { "slug": "spikes" /* 압정뿌리기 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "surf" /* 파도타기 */ }, { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  }
  ],
  "gengar": /* 팬텀 */ [
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "trick" /* 트릭 */ }, { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ }, { "slug": "destiny-bond" /* 길동무 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ }, { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "destiny-bond" /* 길동무 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "destiny-bond" /* 길동무 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ }, { "slug": "focus-blast" /* 기합구슬 */ }, { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "destiny-bond" /* 길동무 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ]
    ]
  }
  ],
  "genesect": /* 게노세크트 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "download" /* 다운로드 */,
    "moves": [
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  }
  ],
  "ferrothorn": /* 너트령 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ }, { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "protect" /* 방어 */ }, { "slug": "gyro-ball" /* 자이로볼 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ } ]
    ]
  },
  {
    "item": "shed-shell" /* 아름다운허물 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ }, { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "protect" /* 방어 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "protect" /* 방어 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ }, { "slug": "curse" /* 저주 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "power-whip" /* 파워휩 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ }, { "slug": "body-press" /* 바디프레스 */ } ]
    ]
  }
  ],
  "excadrill": /* 몰드류 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sand-rush" /* 모래헤치기 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "sand-rush" /* 모래헤치기 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "sand-rush" /* 모래헤치기 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sand-rush" /* 모래헤치기 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "rock-tomb" /* 암석봉인 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "rock-tomb" /* 암석봉인 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "sand-rush" /* 모래헤치기 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sand-rush" /* 모래헤치기 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sand-rush" /* 모래헤치기 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "rock-tomb" /* 암석봉인 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "swords-dance" /* 칼춤 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  }
  ],
  "darkrai": /* 다크라이 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "bad-dreams" /* 나이트메어 */,
    "moves": [
      [ { "slug": "dark-void" /* 다크홀 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ }, { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ }, { "slug": "thunder" /* 번개 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "bad-dreams" /* 나이트메어 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "hypnosis" /* 최면술 */ } ],
      [ { "slug": "thunder" /* 번개 */ }, { "slug": "sludge-bomb" /* 오물폭탄 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "bad-dreams" /* 나이트메어 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "bad-dreams" /* 나이트메어 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "bad-dreams" /* 나이트메어 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "bad-dreams" /* 나이트메어 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "bad-dreams" /* 나이트메어 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  }
  ],
  "blissey": /* 해피너스 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "seismic-toss" /* 지구던지기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "seismic-toss" /* 지구던지기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  ],
  "blaziken": /* 번치코 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "baton-pass" /* 바톤터치 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "low-kick" /* 안다리걸기 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "low-kick" /* 안다리걸기 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  }
  ],
  "scizor": /* 핫삼 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "pursuit" /* 따라가때리기 */ } ]
    ]
  },
  {
    "item": "metal-coat" /* 금속코트 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "metal-coat" /* 금속코트 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "bug-bite" /* 벌레먹음 */ }, { "slug": "quick-attack" /* 전광석화 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ }, { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "dual-wingbeat" /* 더블윙 */ }, { "slug": "bug-bite" /* 벌레먹음 */ }, { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "dual-wingbeat" /* 더블윙 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
  ],
  "diancie": /* 디안시 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "diamond-storm" /* 다이아스톰 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ }, { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "diamond-storm" /* 다이아스톰 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "trick-room" /* 트릭룸 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "diamond-storm" /* 다이아스톰 */ }, { "slug": "explosion" /* 대폭발 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "diamond-storm" /* 다이아스톰 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "diamond-storm" /* 다이아스톰 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ } ]
    ]
  },
  {
    "item": "weakness-policy" /* 약점보험 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "trick-room" /* 트릭룸 */ } ],
      [ { "slug": "diamond-storm" /* 다이아스톰 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "diamond-storm" /* 다이아스톰 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "diamond-storm" /* 다이아스톰 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ }, { "slug": "moonblast" /* 문포스 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "diamond-storm" /* 다이아스톰 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "diamond-storm" /* 다이아스톰 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ]
    ]
  },
  {
    "item": "power-herb" /* 파워풀허브 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "trick-room" /* 트릭룸 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "meteor-beam" /* 메테오빔 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  }
  ],
  "hippowdon": /* 하마돈 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "slack-off" /* 태만함 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "slack-off" /* 태만함 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "whirlwind" /* 날려버리기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "whirlwind" /* 날려버리기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ } ]
    ]
  }
  ],
  "jirachi": /* 지라치 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "body-slam" /* 누르기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "body-slam" /* 누르기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "healing-wish" /* 치유소원 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "healing-wish" /* 치유소원 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ }, { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "healing-wish" /* 치유소원 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "body-slam" /* 누르기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "trick" /* 트릭 */ }, { "slug": "healing-wish" /* 치유소원 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ }, { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "trick" /* 트릭 */ }, { "slug": "healing-wish" /* 치유소원 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "body-slam" /* 누르기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "encore" /* 앵콜 */ }, { "slug": "wish" /* 희망사항 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ }, { "slug": "thunder" /* 번개 */ }, { "slug": "shadow-ball" /* 섀도볼 */ } ]
    ]
  },
  {
    "item": "expert-belt" /* 달인의띠 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "healing-wish" /* 치유소원 */ } ]
    ]
  }
  ],
  "celebi": /* 세레비 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ }, { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ }, { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "healing-wish" /* 치유소원 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ }, { "slug": "earth-power" /* 대지의힘 */ }, { "slug": "leaf-storm" /* 리프스톰 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ }, { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  }
  ],
  "weavile": /* 포푸니라 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "low-kick" /* 안다리걸기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "low-kick" /* 안다리걸기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "triple-axel" /* 트리플악셀 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "triple-axel" /* 트리플악셀 */ }, { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "triple-axel" /* 트리플악셀 */ }, { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "low-kick" /* 안다리걸기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "pickpocket" /* 나쁜손버릇 */,
    "moves": [
      [ { "slug": "triple-axel" /* 트리플악셀 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ }, { "slug": "low-kick" /* 안다리걸기 */ } ]
    ]
  }
  ],
  "volcarona": /* 불카모스 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "fiery-dance" /* 불꽃춤 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "fiery-dance" /* 불꽃춤 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ }, { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "safeguard" /* 신비의부적 */ } ]
    ]
  }
  ],
  "victini": /* 비크티니 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "victory-star" /* 승리의별 */,
    "moves": [
      [ { "slug": "v-create" /* V제너레이트 */ } ],
      [ { "slug": "brick-break" /* 깨트리다 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "victory-star" /* 승리의별 */,
    "moves": [
      [ { "slug": "v-create" /* V제너레이트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "final-gambit" /* 목숨걸기 */ } ]
    ]
  },
  {
    "item": "expert-belt" /* 달인의띠 */,
    "ability": "victory-star" /* 승리의별 */,
    "moves": [
      [ { "slug": "thunder" /* 번개 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "victory-star" /* 승리의별 */,
    "moves": [
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "v-create" /* V제너레이트 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "victory-star" /* 승리의별 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "v-create" /* V제너레이트 */ } ],
      [ { "slug": "power-up-punch" /* 그로우펀치 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "victory-star" /* 승리의별 */,
    "moves": [
      [ { "slug": "v-create" /* V제너레이트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "trick" /* 트릭 */ }, { "slug": "final-gambit" /* 목숨걸기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "victory-star" /* 승리의별 */,
    "moves": [
      [ { "slug": "v-create" /* V제너레이트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ }, { "slug": "brick-break" /* 깨트리다 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "victory-star" /* 승리의별 */,
    "moves": [
      [ { "slug": "v-create" /* V제너레이트 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "victory-star" /* 승리의별 */,
    "moves": [
      [ { "slug": "v-create" /* V제너레이트 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "victory-star" /* 승리의별 */,
    "moves": [
      [ { "slug": "v-create" /* V제너레이트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "victory-star" /* 승리의별 */,
    "moves": [
      [ { "slug": "v-create" /* V제너레이트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "brick-break" /* 깨트리다 */ }, { "slug": "trick" /* 트릭 */ }, { "slug": "zen-headbutt" /* 사념의박치기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "victory-star" /* 승리의별 */,
    "moves": [
      [ { "slug": "v-create" /* V제너레이트 */ } ],
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  }
  ],
  "togekiss": /* 토게키스 */ [
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "trick" /* 트릭 */ }, { "slug": "aura-sphere" /* 파동탄 */ } ]
    ]
  },
  {
    "item": "babiri-berry" /* 바리비열매 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "babiri-berry" /* 바리비열매 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "heal-bell" /* 치료방울 */ }, { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ }, { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  }
  ],
  "staraptor": /* 찌르호크 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "reckless" /* 이판사판 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "double-edge" /* 이판사판태클 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "reckless" /* 이판사판 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "double-edge" /* 이판사판태클 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "close-combat" /* 인파이트 */ } ]
    ]
  }
  ],
  "scolipede": /* 펜드라 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ }, { "slug": "poison-jab" /* 독찌르기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ }, { "slug": "endeavor" /* 죽기살기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "endeavor" /* 죽기살기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "endeavor" /* 죽기살기 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ }, { "slug": "protect" /* 방어 */ } ]
    ]
  },
  ],
  "medicham": /* 요가램 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "pure-power" /* 순수한힘 */,
    "moves": [
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "pure-power" /* 순수한힘 */,
    "moves": [
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ }, { "slug": "poison-jab" /* 독찌르기 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ }, { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "pure-power" /* 순수한힘 */,
    "moves": [
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "pure-power" /* 순수한힘 */,
    "moves": [
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "pure-power" /* 순수한힘 */,
    "moves": [
      [ { "slug": "thunder-punch" /* 번개펀치 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ]
    ]
  }
  ],
  "manaphy": /* 마나피 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "hydration" /* 촉촉바디 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "rain-dance" /* 비바라기 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "hydration" /* 촉촉바디 */,
    "moves": [
      [ { "slug": "tail-glow" /* 반딧불 */ } ],
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "hydration" /* 촉촉바디 */,
    "moves": [
      [ { "slug": "tail-glow" /* 반딧불 */ } ],
      [ { "slug": "rain-dance" /* 비바라기 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "hydration" /* 촉촉바디 */,
    "moves": [
      [ { "slug": "tail-glow" /* 반딧불 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ]
    ]
  },
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "hydration" /* 촉촉바디 */,
    "moves": [
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "tail-glow" /* 반딧불 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "hydration" /* 촉촉바디 */,
    "moves": [
      [ { "slug": "tail-glow" /* 반딧불 */ } ],
      [ { "slug": "surf" /* 파도타기 */ }, { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "alluring-voice" /* 매혹의보이스 */ }, { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "hydration" /* 촉촉바디 */,
    "moves": [
      [ { "slug": "tail-glow" /* 반딧불 */ } ],
      [ { "slug": "surf" /* 파도타기 */ }, { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "alluring-voice" /* 매혹의보이스 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ }, { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "hydration" /* 촉촉바디 */,
    "moves": [
      [ { "slug": "tail-glow" /* 반딧불 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "alluring-voice" /* 매혹의보이스 */ } ]
    ]
  }
  ],
  "hawlucha": /* 루차불 */ [
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "unburden" /* 곡예 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ]
    ]
  },
  {
    "item": "power-herb" /* 파워풀허브 */,
    "ability": "unburden" /* 곡예 */,
    "moves": [
      [ { "slug": "sky-attack" /* 불새 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ]
    ]
  },
  {
    "item": "power-herb" /* 파워풀허브 */,
    "ability": "unburden" /* 곡예 */,
    "moves": [
      [ { "slug": "sky-attack" /* 불새 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "unburden" /* 곡예 */,
    "moves": [
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "power-herb" /* 파워풀허브 */,
    "ability": "unburden" /* 곡예 */,
    "moves": [
      [ { "slug": "sky-attack" /* 불새 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "power-herb" /* 파워풀허브 */,
    "ability": "unburden" /* 곡예 */,
    "moves": [
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ],
      [ { "slug": "sky-attack" /* 불새 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "unburden" /* 곡예 */,
    "moves": [
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  }
  ],
  "diggersby": /* 파르토 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "huge-power" /* 천하장사 */,
    "moves": [
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "huge-power" /* 천하장사 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "huge-power" /* 천하장사 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "huge-power" /* 천하장사 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "huge-power" /* 천하장사 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "huge-power" /* 천하장사 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "huge-power" /* 천하장사 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "endeavor" /* 죽기살기 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "huge-power" /* 천하장사 */,
    "moves": [
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "huge-power" /* 천하장사 */,
    "moves": [
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "huge-power" /* 천하장사 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ]
    ]
  },
  {
    "item": "silk-scarf" /* 실크스카프 */,
    "ability": "huge-power" /* 천하장사 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "mega-kick" /* 메가톤킥 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "huge-power" /* 천하장사 */,
    "moves": [
      [ { "slug": "body-slam" /* 누르기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
  ],
  "crawdaunt": /* 가재장군 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "crabhammer" /* 찝게햄머 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "crabhammer" /* 찝게햄머 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "crabhammer" /* 찝게햄머 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ }, { "slug": "crunch" /* 깨물어부수기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "crabhammer" /* 찝게햄머 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "superpower" /* 엄청난힘 */ }, { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "crabhammer" /* 찝게햄머 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "crabhammer" /* 찝게햄머 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "crabhammer" /* 찝게햄머 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ }, { "slug": "crunch" /* 깨물어부수기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "crabhammer" /* 찝게햄머 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ]
    ]
  }
  ],
  "alakazam": /* 후딘 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ }, { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "counter" /* 카운터 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "counter" /* 카운터 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "counter" /* 카운터 */ } ]
    ]
  },
  ],
  "zapdos": /* 썬더 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "discharge" /* 방전 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "discharge" /* 방전 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "static" /* 정전기 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "discharge" /* 방전 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "static" /* 정전기 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "static" /* 정전기 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "static" /* 정전기 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "static" /* 정전기 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "discharge" /* 방전 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  }
  ],
  "venusaur": /* 이상해꽃 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "chlorophyll" /* 엽록소 */,
    "moves": [
      [ { "slug": "growth" /* 성장 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  }
  ],
  "terrakion": /* 테라키온 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "x-scissor" /* 시저크로스 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "rock-polish" /* 록커트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "substitute" /* 대타출동 */ }, { "slug": "rock-polish" /* 록커트 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ }, { "slug": "quick-attack" /* 전광석화 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ }, { "slug": "iron-head" /* 아이언헤드 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ }, { "slug": "iron-head" /* 아이언헤드 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  }
  ],
  "talonflame": /* 파이어로 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "gale-wings" /* 질풍날개 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "steel-wing" /* 강철날개 */ } ]
    ]
  },
  {
    "item": "sharp-beak" /* 예리한부리 */,
    "ability": "gale-wings" /* 질풍날개 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "liechi-berry" /* 치리열매 */,
    "ability": "gale-wings" /* 질풍날개 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "natural-gift" /* 자연의은혜 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "will-o-wisp" /* 도깨비불 */ }, { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "defog" /* 안개제거 */ }, { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  }
  ],
  "sylveon": /* 님피아 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "pixilate" /* 페어리스킨 */,
    "moves": [
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ground" } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pixilate" /* 페어리스킨 */,
    "moves": [
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pixilate" /* 페어리스킨 */,
    "moves": [
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "pixilate" /* 페어리스킨 */,
    "moves": [
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "mystical-fire" /* 매지컬플레임 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ }, { "slug": "quick-attack" /* 전광석화 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "pixilate" /* 페어리스킨 */,
    "moves": [
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "draining-kiss" /* 드레인키스 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "pixilate" /* 페어리스킨 */,
    "moves": [
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pixilate" /* 페어리스킨 */,
    "moves": [
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "roar" /* 울부짖기 */ }, { "slug": "calm-mind" /* 명상 */ } ]
    ]
  }
  ],
  "slowbro": /* 야도란 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "toxic" /* 맹독 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "counter" /* 카운터 */ }, { "slug": "calm-mind" /* 명상 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "block" /* 블록 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "teleport" /* 순간이동 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "teleport" /* 순간이동 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ],
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  }
  ],
  "skarmory": /* 무장조 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ } ]
    ]
  },
  {
    "item": "custap-berry" /* 애슈열매 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "shed-shell" /* 아름다운허물 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "shed-shell" /* 아름다운허물 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ }, { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "counter" /* 카운터 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ }, { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "counter" /* 카운터 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ } ]
    ]
  },
  {
    "item": "salac-berry" /* 캄라열매 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ }, { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "body-press" /* 바디프레스 */ }, { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "whirlwind" /* 날려버리기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "whirlwind" /* 날려버리기 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ }, { "slug": "iron-defense" /* 철벽 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ]
    ]
  }
  ],
  "pinsir": /* 쁘사이저 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "x-scissor" /* 시저크로스 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "x-scissor" /* 시저크로스 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "x-scissor" /* 시저크로스 */ } ],
      [ { "slug": "rock-tomb" /* 암석봉인 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "x-scissor" /* 시저크로스 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  ],
  "mew": /* 뮤 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "synchronize" /* 싱크로 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "synchronize" /* 싱크로 */,
    "moves": [
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "synchronize" /* 싱크로 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "synchronize" /* 싱크로 */,
    "moves": [
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "synchronize" /* 싱크로 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "synchronize" /* 싱크로 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "synchronize" /* 싱크로 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "synchronize" /* 싱크로 */,
    "moves": [
      [ { "slug": "cosmic-power" /* 코스믹파워 */ } ],
      [ { "slug": "stored-power" /* 어시스트파워 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ }, { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "synchronize" /* 싱크로 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  }
  ],
  "metagross": /* 메타그로스 */ [
  {
    "item": "shuca-berry" /* 슈캐열매 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "thunder-punch" /* 번개펀치 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "meteor-mash" /* 코멧펀치 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "meteor-mash" /* 코멧펀치 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ }, { "slug": "thunder-punch" /* 번개펀치 */ }, { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "bullet-punch" /* 불릿펀치 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "meteor-mash" /* 코멧펀치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "meteor-mash" /* 코멧펀치 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "meteor-mash" /* 코멧펀치 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ }, { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "meteor-mash" /* 코멧펀치 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "cosmic-power" /* 코스믹파워 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "meteor-mash" /* 코멧펀치 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "meteor-mash" /* 코멧펀치 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "meteor-mash" /* 코멧펀치 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "meteor-mash" /* 코멧펀치 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "psychic-fangs" /* 사이코팽 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "bullet-punch" /* 불릿펀치 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "psychic-fangs" /* 사이코팽 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "bullet-punch" /* 불릿펀치 */ } ]
    ]
  }
  ],
  "manectric": /* 썬더볼트 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "overheat" /* 오버히트 */ }, { "slug": "switcheroo" /* 바꿔치기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ],
      [ { "slug": "overheat" /* 오버히트 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ]
    ]
  },
  ],
  "mandibuzz": /* 버랜지나 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "overcoat" /* 방진 */,
    "moves": [
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "overcoat" /* 방진 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "taunt" /* 도발 */ }, { "slug": "toxic" /* 맹독 */ }, { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "overcoat" /* 방진 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "overcoat" /* 방진 */,
    "moves": [
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "overcoat" /* 방진 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "overcoat" /* 방진 */,
    "moves": [
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "overcoat" /* 방진 */,
    "moves": [
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "overcoat" /* 방진 */,
    "moves": [
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "overcoat" /* 방진 */,
    "moves": [
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "overcoat" /* 방진 */,
    "moves": [
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "defog" /* 안개제거 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "overcoat" /* 방진 */,
    "moves": [
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  }
  ],
  "mamoswine": /* 맘모꾸리 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "endeavor" /* 죽기살기 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ]
    ]
  },
  {
    "item": "metronome" /* 메트로놈 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "endeavor" /* 죽기살기 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "endeavor" /* 죽기살기 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "endeavor" /* 죽기살기 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "oblivious" /* 둔감 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "endeavor" /* 죽기살기 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "oblivious" /* 둔감 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ]
    ]
  },
  {
    "item": "loaded-dice" /* 속임수주사위 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "icicle-spear" /* 고드름침 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ]
    ]
  }
  ],
  "magnezone": /* 자포코일 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "magnet-pull" /* 자력 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "magnet-pull" /* 자력 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "magnet-pull" /* 자력 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "magnet-pull" /* 자력 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "magnet-pull" /* 자력 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "magnet-pull" /* 자력 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "magnet-pull" /* 자력 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ground" } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "magnet-pull" /* 자력 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "magnet-pull" /* 자력 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "body-press" /* 바디프레스 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "analytic" /* 애널라이즈 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "magnet-pull" /* 자력 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "analytic" /* 애널라이즈 */,
    "moves": [
      [ { "slug": "discharge" /* 방전 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "analytic" /* 애널라이즈 */,
    "moves": [
      [ { "slug": "discharge" /* 방전 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ }, { "slug": "mirror-coat" /* 미러코트 */ } ]
    ]
  }
  ],
  "lopunny": /* 이어롭 */ [
  {
    "item": null,
    "ability": "limber" /* 유연 */,
    "moves": [
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "fake-out" /* 속이다 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "limber" /* 유연 */,
    "moves": [
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "fake-out" /* 속이다 */ } ],
      [ { "slug": "power-up-punch" /* 그로우펀치 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "limber" /* 유연 */,
    "moves": [
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "limber" /* 유연 */,
    "moves": [
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "quick-attack" /* 전광석화 */ } ],
      [ { "slug": "fake-out" /* 속이다 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "limber" /* 유연 */,
    "moves": [
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "quick-attack" /* 전광석화 */ }, { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "power-up-punch" /* 그로우펀치 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "limber" /* 유연 */,
    "moves": [
      [ { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "power-up-punch" /* 그로우펀치 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "limber" /* 유연 */,
    "moves": [
      [ { "slug": "fake-out" /* 속이다 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "encore" /* 앵콜 */ }, { "slug": "substitute" /* 대타출동 */ } ]
    ]
  }
  ],
  "heracross": /* 헤라크로스 */ [
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "guts" /* 근성 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "facade" /* 객기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "flame-orb" /* 화염구슬 */,
    "ability": "guts" /* 근성 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "facade" /* 객기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "guts" /* 근성 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "flame-orb" /* 화염구슬 */,
    "ability": "guts" /* 근성 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "facade" /* 객기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "flame-orb" /* 화염구슬 */,
    "ability": "guts" /* 근성 */,
    "moves": [
      [ { "slug": "facade" /* 객기 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "trailblaze" /* 개척하기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
  ],
  "heatran": /* 히드런 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "lava-plume" /* 분연 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "lava-plume" /* 분연 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "magma-storm" /* 마그마스톰 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "lava-plume" /* 분연 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ }, { "slug": "roar" /* 울부짖기 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "magma-storm" /* 마그마스톰 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "magma-storm" /* 마그마스톰 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "lava-plume" /* 분연 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "magma-storm" /* 마그마스톰 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "magma-storm" /* 마그마스톰 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "magma-storm" /* 마그마스톰 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "magma-storm" /* 마그마스톰 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "magma-storm" /* 마그마스톰 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "magma-storm" /* 마그마스톰 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "magma-storm" /* 마그마스톰 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "magma-storm" /* 마그마스톰 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "magma-storm" /* 마그마스톰 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "magma-storm" /* 마그마스톰 */ }, { "slug": "lava-plume" /* 분연 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  }
  ],
  "gyarados": /* 갸라도스 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "bounce" /* 뛰어오르다 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "bounce" /* 뛰어오르다 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ }, { "slug": "earthquake" /* 지진 */ }, { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "roar" /* 울부짖기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "ice-fang" /* 얼음엄니 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "bounce" /* 뛰어오르다 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": ["intimidate" /* 위협 */, "moxie" /* 자기과신 */],
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": ["intimidate" /* 위협 */, "moxie" /* 자기과신 */],
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-fang" /* 얼음엄니 */ } ]
    ]
  },
  {
    "item": "covert-cloak" /* 은밀망토 */,
    "ability": ["intimidate" /* 위협 */, "moxie" /* 자기과신 */],
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "chesto-berry" /* 유루열매 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ]
    ]
  }
  ],
  "gallade": /* 엘레이드 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "psycho-cut" /* 사이코커터 */ } ],
      [ { "slug": "leaf-blade" /* 리프블레이드 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ]
    ]
  },
  {
    "item": "muscle-band" /* 힘의머리띠 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "psycho-cut" /* 사이코커터 */ }, { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "leaf-blade" /* 리프블레이드 */ }, { "slug": "thunder-punch" /* 번개펀치 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "psycho-cut" /* 사이코커터 */ }, { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  }
  ],
  "gliscor": /* 글라이온 */ [
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "facade" /* 객기 */ }, { "slug": "ice-fang" /* 얼음엄니 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "taunt" /* 도발 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "facade" /* 객기 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ }, { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ }, { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "facade" /* 객기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  }
  ],
  "gardevoir": /* 가디안 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "trace" /* 트레이스 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "trace" /* 트레이스 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "trace" /* 트레이스 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "trace" /* 트레이스 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ }, { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "trace" /* 트레이스 */,
    "moves": [
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "healing-wish" /* 치유소원 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "trace" /* 트레이스 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "trick" /* 트릭 */ }, { "slug": "healing-wish" /* 치유소원 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "trace" /* 트레이스 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "trick" /* 트릭 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "healing-wish" /* 치유소원 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "trace" /* 트레이스 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "healing-wish" /* 치유소원 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "trace" /* 트레이스 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ]
    ]
  }
  ],
  "garchomp": /* 한카리아스 */ [
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "rough-skin" /* 까칠한피부 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-tail" /* 드래곤테일 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "rough-skin" /* 까칠한피부 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-claw" /* 드래곤크루 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ]
    ]
  },
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "rough-skin" /* 까칠한피부 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "rough-skin" /* 까칠한피부 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "dragon-claw" /* 드래곤크루 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "rough-skin" /* 까칠한피부 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "roar" /* 울부짖기 */ }, { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "dragon-tail" /* 드래곤테일 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "rough-skin" /* 까칠한피부 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "outrage" /* 역린 */ }, { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "rough-skin" /* 까칠한피부 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "dragon-tail" /* 드래곤테일 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "rough-skin" /* 까칠한피부 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "rough-skin" /* 까칠한피부 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "fire-fang" /* 불꽃엄니 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "scale-shot" /* 스케일샷 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "rough-skin" /* 까칠한피부 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "protect" /* 방어 */ }, { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  }
  ],
  "dragonite": /* 망나뇽 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "multiscale" /* 멀티스케일 */,
    "moves": [
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "multiscale" /* 멀티스케일 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "multiscale" /* 멀티스케일 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "multiscale" /* 멀티스케일 */,
    "moves": [
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "weakness-policy" /* 약점보험 */,
    "ability": "multiscale" /* 멀티스케일 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ }, { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ]
    ]
  },
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "multiscale" /* 멀티스케일 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ }, { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "multiscale" /* 멀티스케일 */,
    "moves": [
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "multiscale" /* 멀티스케일 */,
    "moves": [
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "multiscale" /* 멀티스케일 */,
    "moves": [
      [ { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "dual-wingbeat" /* 더블윙 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "multiscale" /* 멀티스케일 */,
    "moves": [
      [ { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "dual-wingbeat" /* 더블윙 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ }, { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "multiscale" /* 멀티스케일 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "ice-spinner" /* 아이스스피너 */ }, { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "multiscale" /* 멀티스케일 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ }, { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "ice-spinner" /* 아이스스피너 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "multiscale" /* 멀티스케일 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "ice-spinner" /* 아이스스피너 */ } ]
    ]
  }
  ],
  "conkeldurr": /* 노보청 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "guts" /* 근성 */,
    "moves": [
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "guts" /* 근성 */,
    "moves": [
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ]
    ]
  },
  {
    "item": "flame-orb" /* 화염구슬 */,
    "ability": "guts" /* 근성 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ }, { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "facade" /* 객기 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "flame-orb" /* 화염구슬 */,
    "ability": "guts" /* 근성 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ],
      [ { "slug": "facade" /* 객기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
  ],
  "clefable": /* 픽시 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "thunder" /* 번개 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "wish" /* 희망사항 */ }, { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ }, { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "babiri-berry" /* 바리비열매 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
    ]
  },
  {
    "item": "babiri-berry" /* 바리비열매 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "heal-bell" /* 치료방울 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "thunder" /* 번개 */ }, { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "moonlight" /* 달의불빛 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "moonlight" /* 달의불빛 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "sticky-barb" /* 끈적끈적바늘 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "moonlight" /* 달의불빛 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
  ],
  "charizard": /* 리자몽 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "defog" /* 안개제거 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ }, { "slug": "thunder-punch" /* 번개펀치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  }
  ],
  "breloom": /* 버섯모 */ [
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "seed-bomb" /* 씨폭탄 */ } ],
      [ { "slug": "facade" /* 객기 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "spore" /* 버섯포자 */ } ],
      [ { "slug": "bullet-seed" /* 기관총 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ],
      [ { "slug": "rock-tomb" /* 암석봉인 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "spore" /* 버섯포자 */ } ],
      [ { "slug": "bullet-seed" /* 기관총 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "spore" /* 버섯포자 */ } ],
      [ { "slug": "bullet-seed" /* 기관총 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ],
      [ { "slug": "rock-tomb" /* 암석봉인 */ }, { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "spore" /* 버섯포자 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ }, { "slug": "rock-tomb" /* 암석봉인 */ } ],
      [ { "slug": "bullet-seed" /* 기관총 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ],
      [ { "slug": "bullet-seed" /* 기관총 */ } ],
      [ { "slug": "aerial-ace" /* 제비반환 */ }, { "slug": "bulldoze" /* 땅고르기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ],
      [ { "slug": "bullet-seed" /* 기관총 */ } ],
      [ { "slug": "rock-tomb" /* 암석봉인 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ],
      [ { "slug": "bullet-seed" /* 기관총 */ } ],
      [ { "slug": "rock-tomb" /* 암석봉인 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ],
      [ { "slug": "bullet-seed" /* 기관총 */ } ],
      [ { "slug": "aerial-ace" /* 제비반환 */ }, { "slug": "bulldoze" /* 땅고르기 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ }, { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "facade" /* 객기 */ } ],
      [ { "slug": "seed-bomb" /* 씨폭탄 */ } ],
      [ { "slug": "protect" /* 방어 */ }, { "slug": "substitute" /* 대타출동 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "azumarill": /* 마릴리 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "huge-power" /* 천하장사 */,
    "moves": [
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "huge-power" /* 천하장사 */,
    "moves": [
      [ { "slug": "belly-drum" /* 배북 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "huge-power" /* 천하장사 */,
    "moves": [
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "huge-power" /* 천하장사 */,
    "moves": [
      [ { "slug": "belly-drum" /* 배북 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ }, { "slug": "waterfall" /* 폭포오르기 */ }, { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "perish-song" /* 멸망의노래 */ } ],
      [ { "slug": "whirlpool" /* 바다회오리 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "whirlpool" /* 바다회오리 */ } ],
      [ { "slug": "perish-song" /* 멸망의노래 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "huge-power" /* 천하장사 */,
    "moves": [
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "huge-power" /* 천하장사 */,
    "moves": [
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "belly-drum" /* 배북 */ } ]
    ]
  }
  ],
  "altaria": /* 파비코리 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "dragon-claw" /* 드래곤크루 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ }, { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fighting" } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ }, { "slug": "haze" /* 흑안개 */ }, { "slug": "roar" /* 울부짖기 */ } ]
    ]
  }
  ],
  "serperior": /* 샤로다 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "glare" /* 뱀눈초리 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ground" } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ }, { "slug": "glare" /* 뱀눈초리 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "rock" } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "glare" /* 뱀눈초리 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "rock" } ],
      [ { "slug": "glare" /* 뱀눈초리 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "rock" } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "glare" /* 뱀눈초리 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ }, { "slug": "dragon-pulse" /* 용의파동 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "glare" /* 뱀눈초리 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ }, { "slug": "dragon-pulse" /* 용의파동 */ } ]
    ]
  }
  ],
  "feraligatr": /* 장크로다일 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "agility" /* 고속이동 */ } ],
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ }, { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ]
    ]
  }
  ],
  "raikou": /* 라이코 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "extrasensory" /* 신통력 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "extrasensory" /* 신통력 */ }, { "slug": "shadow-ball" /* 섀도볼 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "inner-focus" /* 정신력 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "inner-focus" /* 정신력 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "shadow-ball" /* 섀도볼 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "inner-focus" /* 정신력 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ }, { "slug": "shadow-ball" /* 섀도볼 */ }, { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ }, { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  }
  ],
  "hoopa": /* 후파 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magician" /* 매지션 */,
    "moves": [
      [ { "slug": "trick-room" /* 트릭룸 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ }, { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magician" /* 매지션 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magician" /* 매지션 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magician" /* 매지션 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magician" /* 매지션 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ }, { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magician" /* 매지션 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magician" /* 매지션 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "magician" /* 매지션 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magician" /* 매지션 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "magician" /* 매지션 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "trick-room" /* 트릭룸 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "magician" /* 매지션 */,
    "moves": [
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ }, { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "magician" /* 매지션 */,
    "moves": [
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  }
  ],
  "crobat": /* 크로뱃 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "cross-poison" /* 크로스포이즌 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "super-fang" /* 분노의앞니 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "inner-focus" /* 정신력 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "inner-focus" /* 정신력 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "defog" /* 안개제거 */ }, { "slug": "toxic" /* 맹독 */ }, { "slug": "super-fang" /* 분노의앞니 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": ["inner-focus" /* 정신력 */, "infiltrator" /* 틈새포착 */],
    "moves": [
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ }, { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  }
  ],
  "entei": /* 앤테이 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "sacred-fire" /* 성스러운불꽃 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "bulldoze" /* 땅고르기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "sacred-fire" /* 성스러운불꽃 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "bulldoze" /* 땅고르기 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "sacred-fire" /* 성스러운불꽃 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "bulldoze" /* 땅고르기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "sacred-fire" /* 성스러운불꽃 */ } ],
      [ { "slug": "stomping-tantrum" /* 분함의발구르기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "sacred-fire" /* 성스러운불꽃 */ } ],
      [ { "slug": "stomping-tantrum" /* 분함의발구르기 */ }, { "slug": "bulldoze" /* 땅고르기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "inner-focus" /* 정신력 */,
    "moves": [
      [ { "slug": "sacred-fire" /* 성스러운불꽃 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "inner-focus" /* 정신력 */,
    "moves": [
      [ { "slug": "sacred-fire" /* 성스러운불꽃 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ }, { "slug": "iron-head" /* 아이언헤드 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "inner-focus" /* 정신력 */,
    "moves": [
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "sacred-fire" /* 성스러운불꽃 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "stomping-tantrum" /* 분함의발구르기 */ } ]
    ]
  }
  ],
  "suicune": /* 스이쿤 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "roar" /* 울부짖기 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "sleep-talk" /* 잠꼬대 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "protect" /* 방어 */ }, { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "shadow-ball" /* 섀도볼 */ } ]
    ]
  }
  ],
  "aerodactyl": /* 프테라 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "unnerve" /* 긴장감 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "fire-fang" /* 불꽃엄니 */ }, { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "aerial-ace" /* 제비반환 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "unnerve" /* 긴장감 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "ice-fang" /* 얼음엄니 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "unnerve" /* 긴장감 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "ice-fang" /* 얼음엄니 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "tailwind" /* 순풍 */ } ],
      [ { "slug": "double-edge" /* 이판사판태클 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "unnerve" /* 긴장감 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "dual-wingbeat" /* 더블윙 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "unnerve" /* 긴장감 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "dual-wingbeat" /* 더블윙 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "unnerve" /* 긴장감 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": ["unnerve" /* 긴장감 */, "pressure" /* 프레셔 */],
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "dual-wingbeat" /* 더블윙 */ }, { "slug": "aqua-tail" /* 아쿠아테일 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  }
  ],
  "hydreigon": /* 삼삼드래 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ }, { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flash-cannon" /* 러스터캐논 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ }, { "slug": "flash-cannon" /* 러스터캐논 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ }, { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "defog" /* 안개제거 */ }, { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ }, { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ }, { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  }
  ],
  "machamp": /* 괴력몬 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "no-guard" /* 노가드 */,
    "moves": [
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "no-guard" /* 노가드 */,
    "moves": [
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "no-guard" /* 노가드 */,
    "moves": [
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "no-guard" /* 노가드 */,
    "moves": [
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": "flame-orb" /* 화염구슬 */,
    "ability": "guts" /* 근성 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "facade" /* 객기 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ]
    ]
  }
  ],
  "mienshao": /* 비조도 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "fake-out" /* 속이다 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "reckless" /* 이판사판 */,
    "moves": [
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "reckless" /* 이판사판 */,
    "moves": [
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "poison-jab" /* 독찌르기 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "fake-out" /* 속이다 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "triple-axel" /* 트리플악셀 */ }, { "slug": "ice-spinner" /* 아이스스피너 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "ice-spinner" /* 아이스스피너 */ }, { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  }
  ],
  "absol": /* 앱솔 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "iron-tail" /* 아이언테일 */ }, { "slug": "pursuit" /* 따라가때리기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "super-luck" /* 대운 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ]
    ]
  }
  ],
  "aggron": /* 보스로라 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "rock-head" /* 돌머리 */,
    "moves": [
      [ { "slug": "head-smash" /* 양날박치기 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ }, { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "low-kick" /* 안다리걸기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "rock-head" /* 돌머리 */,
    "moves": [
      [ { "slug": "head-smash" /* 양날박치기 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "shuca-berry" /* 슈캐열매 */,
    "ability": "rock-head" /* 돌머리 */,
    "moves": [
      [ { "slug": "head-smash" /* 양날박치기 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "rock-head" /* 돌머리 */,
    "moves": [
      [ { "slug": "head-smash" /* 양날박치기 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "aqua-tail" /* 아쿠아테일 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "rock-head" /* 돌머리 */,
    "moves": [
      [ { "slug": "head-smash" /* 양날박치기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "protect" /* 방어 */ }, { "slug": "roar" /* 울부짖기 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "beedrill": /* 독침붕 */ [
  {
    "item": null,
    "ability": "swarm" /* 벌레의알림 */,
    "moves": [
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ],
      [ { "slug": "drill-run" /* 드릴라이너 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "swarm" /* 벌레의알림 */,
    "moves": [
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ],
      [ { "slug": "drill-run" /* 드릴라이너 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "pursuit" /* 따라가때리기 */ }, { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "sniper" /* 스나이퍼 */,
    "moves": [
      [ { "slug": "poison-jab" /* 독찌르기 */ } ],
      [ { "slug": "drill-run" /* 드릴라이너 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "sniper" /* 스나이퍼 */,
    "moves": [
      [ { "slug": "poison-jab" /* 독찌르기 */ } ],
      [ { "slug": "drill-run" /* 드릴라이너 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  }
  ],
  "blastoise": /* 거북왕 */ [
  {
    "item": null,
    "ability": "rain-dish" /* 젖은접시 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "foresight" /* 꿰뚫어보기 */ }, { "slug": "refresh" /* 리프레쉬 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "rain-dish" /* 젖은접시 */,
    "moves": [
      [ { "slug": "water-pulse" /* 물의파동 */ }, { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ }, { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "rain-dish" /* 젖은접시 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "refresh" /* 리프레쉬 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "empoleon": /* 엠페르트 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "roar" /* 울부짖기 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ]
    ]
  },
  {
    "item": "petaya-berry" /* 야타비열매 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "agility" /* 고속이동 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "defog" /* 안개제거 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "roar" /* 울부짖기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "defog" /* 안개제거 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "roar" /* 울부짖기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "competitive" /* 승기 */,
    "moves": [
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "competitive" /* 승기 */,
    "moves": [
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "competitive" /* 승기 */,
    "moves": [
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "roar" /* 울부짖기 */ }, { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "competitive" /* 승기 */,
    "moves": [
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
  ],
  "krookodile": /* 악비아르 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ }, { "slug": "crunch" /* 깨물어부수기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ }, { "slug": "crunch" /* 깨물어부수기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ }, { "slug": "crunch" /* 깨물어부수기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": ["intimidate" /* 위협 */, "moxie" /* 자기과신 */],
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "close-combat" /* 인파이트 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": ["intimidate" /* 위협 */, "moxie" /* 자기과신 */],
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  }
  ],
  "nidoqueen": /* 니드퀸 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "roar" /* 울부짖기 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "shuca-berry" /* 슈캐열매 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  }
  ],
  "swampert": /* 대짱이 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "roar" /* 울부짖기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "chesto-berry" /* 유루열매 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "curse" /* 저주 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "roar" /* 울부짖기 */ }, { "slug": "toxic" /* 맹독 */ }, { "slug": "counter" /* 카운터 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "roar" /* 울부짖기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "yawn" /* 하품 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "roar" /* 울부짖기 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ]
    ]
  }
  ],
  "ampharos": /* 전룡 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "static" /* 정전기 */,
    "moves": [
      [ { "slug": "agility" /* 고속이동 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  ],
  "arcanine": /* 윈디 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "morning-sun" /* 아침햇살 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "wild-charge" /* 와일드볼트 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "wild-charge" /* 와일드볼트 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "wild-charge" /* 와일드볼트 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "teleport" /* 순간이동 */ } ],
      [ { "slug": "morning-sun" /* 아침햇살 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "curse" /* 저주 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "morning-sun" /* 아침햇살 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "raging-fury" /* 대격분 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ]
    ]
  }
  ],
  "chandelure": /* 샹델라 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": ["flame-body" /* 불꽃몸 */, "flash-fire" /* 타오르는불꽃 */],
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "memento" /* 추억의선물 */ } ],
      [ { "slug": "trick" /* 트릭 */ }, { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": ["flame-body" /* 불꽃몸 */, "flash-fire" /* 타오르는불꽃 */],
    "moves": [
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "trick" /* 트릭 */ }, { "slug": "sleep-talk" /* 잠꼬대 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ }, { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "protect" /* 방어 */ }, { "slug": "energy-ball" /* 에너지볼 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "trick" /* 트릭 */ }, { "slug": "overheat" /* 오버히트 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
    ]
  }
  ],
  "chesnaught": /* 브리가론 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "bulletproof" /* 방탄 */,
    "moves": [
      [ { "slug": "spiky-shield" /* 니들가드 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "bulletproof" /* 방탄 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "wood-hammer" /* 우드해머 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ]
    ]
  },
  {
    "item": "salac-berry" /* 캄라열매 */,
    "ability": "bulletproof" /* 방탄 */,
    "moves": [
      [ { "slug": "belly-drum" /* 배북 */ } ],
      [ { "slug": "seed-bomb" /* 씨폭탄 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "bulletproof" /* 방탄 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ]
    ]
  }
  ],
  "cloyster": /* 파르셀 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "skill-link" /* 스킬링크 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "icicle-spear" /* 고드름침 */ } ],
      [ { "slug": "rock-blast" /* 락블레스트 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "skill-link" /* 스킬링크 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "icicle-spear" /* 고드름침 */ } ],
      [ { "slug": "rock-blast" /* 락블레스트 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "skill-link" /* 스킬링크 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "icicle-spear" /* 고드름침 */ } ],
      [ { "slug": "rock-blast" /* 락블레스트 */ } ],
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "skill-link" /* 스킬링크 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "icicle-spear" /* 고드름침 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "skill-link" /* 스킬링크 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "icicle-spear" /* 고드름침 */ } ],
      [ { "slug": "rock-blast" /* 락블레스트 */ }, { "slug": "explosion" /* 대폭발 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ }, { "slug": "liquidation" /* 아쿠아브레이크 */ }, { "slug": "ice-shard" /* 얼음뭉치 */ } ]
    ]
  }
  ],
  "donphan": /* 코리갑 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "espeon": /* 에브이 */ [
  {
    "item": "light-clay" /* 빛의점토 */,
    "ability": "magic-bounce" /* 매직미러 */,
    "moves": [
      [ { "slug": "morning-sun" /* 아침햇살 */ } ],
      [ { "slug": "reflect" /* 리플렉터 */ } ],
      [ { "slug": "light-screen" /* 빛의장막 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "magic-bounce" /* 매직미러 */,
    "moves": [
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fighting" } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-bounce" /* 매직미러 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "morning-sun" /* 아침햇살 */ } ]
    ]
  }
  ],
  "florges": /* 플라제스 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "flower-veil" /* 플라워베일 */,
    "moves": [
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "aromatherapy" /* 아로마테라피 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "flower-veil" /* 플라워베일 */,
    "moves": [
      [ { "slug": "synthesis" /* 광합성 */ } ],
      [ { "slug": "aromatherapy" /* 아로마테라피 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "flower-veil" /* 플라워베일 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" }, { "slug": "defog" /* 안개제거 */ }, { "slug": "aromatherapy" /* 아로마테라피 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "flower-veil" /* 플라워베일 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": ["flower-veil" /* 플라워베일 */, "symbiosis" /* 공생 */],
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": ["flower-veil" /* 플라워베일 */, "symbiosis" /* 공생 */],
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": ["flower-veil" /* 플라워베일 */, "symbiosis" /* 공생 */],
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ }, { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": ["flower-veil" /* 플라워베일 */, "symbiosis" /* 공생 */],
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ }, { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": ["flower-veil" /* 플라워베일 */, "symbiosis" /* 공생 */],
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ }, { "slug": "calm-mind" /* 명상 */ }, { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": ["flower-veil" /* 플라워베일 */, "symbiosis" /* 공생 */],
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": ["flower-veil" /* 플라워베일 */, "symbiosis" /* 공생 */],
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": ["flower-veil" /* 플라워베일 */, "symbiosis" /* 공생 */],
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ }, { "slug": "psychic-noise" /* 사이코노이즈 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": ["flower-veil" /* 플라워베일 */, "symbiosis" /* 공생 */],
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": ["flower-veil" /* 플라워베일 */, "symbiosis" /* 공생 */],
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "wish" /* 희망사항 */ }, { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": ["flower-veil" /* 플라워베일 */, "symbiosis" /* 공생 */],
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": ["flower-veil" /* 플라워베일 */, "symbiosis" /* 공생 */],
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  }
  ],
  "flygon": /* 플라이곤 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "iron-tail" /* 아이언테일 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-claw" /* 드래곤크루 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-claw" /* 드래곤크루 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-claw" /* 드래곤크루 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "outrage" /* 역린 */ }, { "slug": "dragon-claw" /* 드래곤크루 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "outrage" /* 역린 */ }, { "slug": "first-impression" /* 만나자마자 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "loaded-dice" /* 속임수주사위 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "scale-shot" /* 스케일샷 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "loaded-dice" /* 속임수주사위 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "scale-shot" /* 스케일샷 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "loaded-dice" /* 속임수주사위 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "scale-shot" /* 스케일샷 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "outrage" /* 역린 */ }, { "slug": "dragon-claw" /* 드래곤크루 */ }, { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "first-impression" /* 만나자마자 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "outrage" /* 역린 */ }, { "slug": "dragon-claw" /* 드래곤크루 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "loaded-dice" /* 속임수주사위 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "scale-shot" /* 스케일샷 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ }, { "slug": "throat-chop" /* 지옥찌르기 */ } ]
    ]
  },
  {
    "item": "loaded-dice" /* 속임수주사위 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "scale-shot" /* 스케일샷 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "scale-shot" /* 스케일샷 */ }, { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "first-impression" /* 만나자마자 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "scale-shot" /* 스케일샷 */ }, { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "throat-chop" /* 지옥찌르기 */ }, { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  }
  ],
  "forretress": /* 쏘콘 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "overcoat" /* 방진 */,
    "moves": [
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ }, { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ } ]
    ]
  }
  ],
  "galvantula": /* 전툴라 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "compound-eyes" /* 복안 */,
    "moves": [
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "thunder" /* 번개 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "compound-eyes" /* 복안 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunder" /* 번개 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "compound-eyes" /* 복안 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunder" /* 번개 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "compound-eyes" /* 복안 */,
    "moves": [
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "thunder" /* 번개 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "compound-eyes" /* 복안 */,
    "moves": [
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "thunder" /* 번개 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "compound-eyes" /* 복안 */,
    "moves": [
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "thunder" /* 번개 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "compound-eyes" /* 복안 */,
    "moves": [
      [ { "slug": "thunder" /* 번개 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ]
    ]
  }
  ],
  "goodra": /* 미끄래곤 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "dragon-tail" /* 드래곤테일 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "gooey" /* 미끈미끈 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ }, { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "thunderbolt" /* 10만볼트 */ }, { "slug": "dragon-tail" /* 드래곤테일 */ } ]
    ]
  },
  {
    "item": "expert-belt" /* 달인의띠 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ }, { "slug": "thunder" /* 번개 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ }, { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ }, { "slug": "dragon-pulse" /* 용의파동 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "acid-spray" /* 애시드봄 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "scald" /* 열탕 */ }, { "slug": "dragon-tail" /* 드래곤테일 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "scald" /* 열탕 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "dragon-tail" /* 드래곤테일 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "acid-spray" /* 애시드봄 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "dragon-tail" /* 드래곤테일 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "scald" /* 열탕 */ }, { "slug": "dragon-pulse" /* 용의파동 */ } ]
    ]
  }
  ],
  "haxorus": /* 액스라이즈 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ }, { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ]
    ]
  }
  ],
  "heliolisk": /* 일레도리자드 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "surf" /* 파도타기 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ }, { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "surf" /* 파도타기 */ }, { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ }, { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ }, { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  }
  ],
  "honchkrow": /* 돈크로우 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "night-slash" /* 깜짝베기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ }, { "slug": "heat-wave" /* 열풍 */ } ]
    ]
  }
  ],
  "infernape": /* 초염몽 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "fake-out" /* 속이다 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "vacuum-wave" /* 진공파 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ }, { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "vacuum-wave" /* 진공파 */ }, { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "overheat" /* 오버히트 */ }, { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "endeavor" /* 죽기살기 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "thunder-punch" /* 번개펀치 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "switcheroo" /* 바꿔치기 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "vacuum-wave" /* 진공파 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ]
    ]
  }
  ],
  "kingdra": /* 킹드라 */ [
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "sniper" /* 스나이퍼 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sniper" /* 스나이퍼 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ]
    ]
  },
  {
    "item": "scope-lens" /* 초점렌즈 */,
    "ability": "sniper" /* 스나이퍼 */,
    "moves": [
      [ { "slug": "agility" /* 고속이동 */ } ],
      [ { "slug": "focus-energy" /* 기충전 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "swift-swim" /* 쓱쓱 */,
    "moves": [
      [ { "slug": "rain-dance" /* 비바라기 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ]
    ]
  },
  {
    "item": "scope-lens" /* 초점렌즈 */,
    "ability": "sniper" /* 스나이퍼 */,
    "moves": [
      [ { "slug": "focus-energy" /* 기충전 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "swift-swim" /* 쓱쓱 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  }
  ],
  "milotic": /* 밀로틱 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "competitive" /* 승기 */,
    "moves": [
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "marvel-scale" /* 이상한비늘 */,
    "moves": [
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "haze" /* 흑안개 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "marvel-scale" /* 이상한비늘 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "haze" /* 흑안개 */ } ],
      [ { "slug": "refresh" /* 리프레쉬 */ } ]
    ]
  },
  {
    "item": "expert-belt" /* 달인의띠 */,
    "ability": "competitive" /* 승기 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "electric" } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "marvel-scale" /* 이상한비늘 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "flip-turn" /* 퀵턴 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "haze" /* 흑안개 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": ["marvel-scale" /* 이상한비늘 */, "competitive" /* 승기 */],
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "haze" /* 흑안개 */ }, { "slug": "dragon-tail" /* 드래곤테일 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ]
    ]
  }
  ],
  "noivern": /* 음번 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "switcheroo" /* 바꿔치기 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "super-fang" /* 분노의앞니 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ }, { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ }, { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "u-turn" /* 유턴 */ }, { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "switcheroo" /* 바꿔치기 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ }, { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "super-fang" /* 분노의앞니 */ } ]
    ]
  }
  ],
  "porygon-z": /* 폴리곤Z */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "tri-attack" /* 트라이어택 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fighting" } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "tri-attack" /* 트라이어택 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "tri-attack" /* 트라이어택 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "tri-attack" /* 트라이어택 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ }, { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": ["adaptability" /* 적응력 */, "download" /* 다운로드 */],
    "moves": [
      [ { "slug": "tri-attack" /* 트라이어택 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ }, { "slug": "thunderbolt" /* 10만볼트 */ }, { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": ["adaptability" /* 적응력 */, "download" /* 다운로드 */],
    "moves": [
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ }, { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": ["adaptability" /* 적응력 */, "download" /* 다운로드 */],
    "moves": [
      [ { "slug": "tri-attack" /* 트라이어택 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": ["adaptability" /* 적응력 */, "download" /* 다운로드 */],
    "moves": [
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "download" /* 다운로드 */,
    "moves": [
      [ { "slug": "tri-attack" /* 트라이어택 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": ["adaptability" /* 적응력 */, "download" /* 다운로드 */],
    "moves": [
      [ { "slug": "tri-attack" /* 트라이어택 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "agility" /* 고속이동 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": ["adaptability" /* 적응력 */, "download" /* 다운로드 */],
    "moves": [
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "agility" /* 고속이동 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "download" /* 다운로드 */,
    "moves": [
      [ { "slug": "tri-attack" /* 트라이어택 */ }, { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "agility" /* 고속이동 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "download" /* 다운로드 */,
    "moves": [
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "agility" /* 고속이동 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "download" /* 다운로드 */,
    "moves": [
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "tri-attack" /* 트라이어택 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "agility" /* 고속이동 */ } ]
    ]
  }
  ],
  "porygon2": /* 폴리곤2 */ [
  {
    "item": "eviolite" /* 진화의휘석 */,
    "ability": "trace" /* 트레이스 */,
    "moves": [
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "eviolite" /* 진화의휘석 */,
    "ability": "trace" /* 트레이스 */,
    "moves": [
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ } ]
    ]
  },
  {
    "item": "eviolite" /* 진화의휘석 */,
    "ability": "download" /* 다운로드 */,
    "moves": [
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "discharge" /* 방전 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "eviolite" /* 진화의휘석 */,
    "ability": "trace" /* 트레이스 */,
    "moves": [
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "eviolite" /* 진화의휘석 */,
    "ability": "trace" /* 트레이스 */,
    "moves": [
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "scrafty": /* 곤율거니 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "shed-skin" /* 탈피 */,
    "moves": [
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ]
    ]
  },
  {
    "item": "chople-berry" /* 로플열매 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ }, { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  },
  {
    "item": "coba-berry" /* 바코열매 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "head-smash" /* 양날박치기 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  },
  {
    "item": "chople-berry" /* 로플열매 */,
    "ability": "shed-skin" /* 탈피 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "shed-skin" /* 탈피 */,
    "moves": [
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "shed-skin" /* 탈피 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": ["intimidate" /* 위협 */, "moxie" /* 자기과신 */],
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ }, { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "poison-jab" /* 독찌르기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": ["shed-skin" /* 탈피 */, "intimidate" /* 위협 */, "moxie" /* 자기과신 */],
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ }, { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "poison-jab" /* 독찌르기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": ["shed-skin" /* 탈피 */, "intimidate" /* 위협 */, "moxie" /* 자기과신 */],
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ }, { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "iron-head" /* 아이언헤드 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": ["intimidate" /* 위협 */, "moxie" /* 자기과신 */],
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ }, { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "iron-head" /* 아이언헤드 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "shed-skin" /* 탈피 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ }, { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  }
  ],
  "snorlax": /* 잠만보 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "body-slam" /* 누르기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "body-slam" /* 누르기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "curse" /* 저주 */ } ],
      [ { "slug": "body-slam" /* 누르기 */ } ]
    ]
  },
  {
    "item": "iapapa-berry" /* 파야열매 */,
    "ability": "gluttony" /* 먹보 */,
    "moves": [
      [ { "slug": "recycle" /* 리사이클 */ } ],
      [ { "slug": "facade" /* 객기 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ }, { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "curse" /* 저주 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "body-slam" /* 누르기 */ }, { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "curse" /* 저주 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "curse" /* 저주 */ } ],
      [ { "slug": "frustration" /* 화풀이 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "figy-berry" /* 무화열매 */,
    "ability": "gluttony" /* 먹보 */,
    "moves": [
      [ { "slug": "curse" /* 저주 */ } ],
      [ { "slug": "recycle" /* 리사이클 */ } ],
      [ { "slug": "facade" /* 객기 */ }, { "slug": "body-slam" /* 누르기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "figy-berry" /* 무화열매 */,
    "ability": "gluttony" /* 먹보 */,
    "moves": [
      [ { "slug": "curse" /* 저주 */ } ],
      [ { "slug": "recycle" /* 리사이클 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "double-edge" /* 이판사판태클 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "curse" /* 저주 */ } ],
      [ { "slug": "body-slam" /* 누르기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "darkest-lariat" /* DD래리어트 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "curse" /* 저주 */ } ],
      [ { "slug": "body-slam" /* 누르기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ]
    ]
  }
  ],
  "tentacruel": /* 독파리 */ [
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "liquid-ooze" /* 해감액 */,
    "moves": [
      [ { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "liquid-ooze" /* 해감액 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "haze" /* 흑안개 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "toxic-spikes" /* 독압정 */ }, { "slug": "sludge-bomb" /* 오물폭탄 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "liquid-ooze" /* 해감액 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "acid-spray" /* 애시드봄 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "liquid-ooze" /* 해감액 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "acid-spray" /* 애시드봄 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "liquid-ooze" /* 해감액 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "scald" /* 열탕 */ }, { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "acid-spray" /* 애시드봄 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "liquid-ooze" /* 해감액 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "scald" /* 열탕 */ }, { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "acid-spray" /* 애시드봄 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "liquid-ooze" /* 해감액 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "liquid-ooze" /* 해감액 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "liquid-ooze" /* 해감액 */,
    "moves": [
      [ { "slug": "flip-turn" /* 퀵턴 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ }, { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "haze" /* 흑안개 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "toxicroak": /* 독개굴 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ }, { "slug": "low-kick" /* 안다리걸기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ }, { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ }, { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  }
  ],
  "umbreon": /* 블래키 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "synchronize" /* 싱크로 */,
    "moves": [
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "synchronize" /* 싱크로 */,
    "moves": [
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ }, { "slug": "moonlight" /* 달의불빛 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "synchronize" /* 싱크로 */,
    "moves": [
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "synchronize" /* 싱크로 */,
    "moves": [
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "synchronize" /* 싱크로 */,
    "moves": [
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": ["synchronize" /* 싱크로 */, "inner-focus" /* 정신력 */],
    "moves": [
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": ["synchronize" /* 싱크로 */, "inner-focus" /* 정신력 */],
    "moves": [
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "moonlight" /* 달의불빛 */ } ]
    ]
  }
  ],
  "vaporeon": /* 샤미드 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ }, { "slug": "heal-bell" /* 치료방울 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ }, { "slug": "heal-bell" /* 치료방울 */ }, { "slug": "toxic" /* 맹독 */ }, { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "haze" /* 흑안개 */ }, { "slug": "calm-mind" /* 명상 */ }, { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "haze" /* 흑안개 */ } ]
    ]
  }
  ],
  "froslass": /* 눈여아 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "destiny-bond" /* 길동무 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "icy-wind" /* 얼다바람 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "icy-wind" /* 얼다바람 */ } ],
      [ { "slug": "destiny-bond" /* 길동무 */ }, { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "destiny-bond" /* 길동무 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "destiny-bond" /* 길동무 */ }, { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "destiny-bond" /* 길동무 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "destiny-bond" /* 길동무 */ }, { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "snow-cloak" /* 눈숨기 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ }, { "slug": "icy-wind" /* 얼다바람 */ } ],
      [ { "slug": "destiny-bond" /* 길동무 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "switcheroo" /* 바꿔치기 */ } ],
      [ { "slug": "destiny-bond" /* 길동무 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "switcheroo" /* 바꿔치기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ]
    ]
  }
  ],
  "houndoom": /* 헬가 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  ],
  "shuckle": /* 단단지 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "infestation" /* 엉겨붙기 */ }, { "slug": "encore" /* 앵콜 */ } ]
    ]
  },
  ],
  "yanmega": /* 메가자리 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "tinted-lens" /* 색안경 */,
    "moves": [
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "tinted-lens" /* 색안경 */,
    "moves": [
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "ancient-power" /* 원시의힘 */ }, { "slug": "psychic" /* 사이코키네시스 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "tinted-lens" /* 색안경 */,
    "moves": [
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "tinted-lens" /* 색안경 */,
    "moves": [
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "tinted-lens" /* 색안경 */,
    "moves": [
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  }
  ],
  "zoroark": /* 조로아크 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "illusion" /* 일루전 */,
    "moves": [
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "night-daze" /* 나이트버스트 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "illusion" /* 일루전 */,
    "moves": [
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "illusion" /* 일루전 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "night-daze" /* 나이트버스트 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "illusion" /* 일루전 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ }, { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "illusion" /* 일루전 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "illusion" /* 일루전 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "illusion" /* 일루전 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "low-kick" /* 안다리걸기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "illusion" /* 일루전 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "low-kick" /* 안다리걸기 */ }, { "slug": "aerial-ace" /* 제비반환 */ } ]
    ]
  }
  ],
  "cresselia": /* 크레세리아 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "moonlight" /* 달의불빛 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ]
    ]
  },
  {
    "item": "light-clay" /* 빛의점토 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "lunar-dance" /* 초승달춤 */ } ],
      [ { "slug": "reflect" /* 리플렉터 */ } ],
      [ { "slug": "light-screen" /* 빛의장막 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "moonlight" /* 달의불빛 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ]
    ]
  },
  {
    "item": "light-clay" /* 빛의점토 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "reflect" /* 리플렉터 */ } ],
      [ { "slug": "light-screen" /* 빛의장막 */ } ],
      [ { "slug": "lunar-dance" /* 초승달춤 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "moonlight" /* 달의불빛 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "moonlight" /* 달의불빛 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "stored-power" /* 어시스트파워 */ } ],
      [ { "slug": "moonlight" /* 달의불빛 */ } ]
    ]
  }
  ],
  "aromatisse": /* 프레프티르 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "aroma-veil" /* 아로마베일 */,
    "moves": [
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "aromatherapy" /* 아로마테라피 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "aroma-veil" /* 아로마베일 */,
    "moves": [
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "aromatherapy" /* 아로마테라피 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "aroma-veil" /* 아로마베일 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "roserade": /* 로즈레이드 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ }, { "slug": "spikes" /* 압정뿌리기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ }, { "slug": "sleep-powder" /* 수면가루 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ }, { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ }, { "slug": "sleep-powder" /* 수면가루 */ } ]
    ]
  }
  ],
  "cobalion": /* 코바르온 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ghost" } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ]
    ]
  },
  {
    "item": "shuca-berry" /* 슈캐열매 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "rock-polish" /* 록커트 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "iron-head" /* 아이언헤드 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ }, { "slug": "volt-switch" /* 볼트체인지 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  }
  ],
  "dragalge": /* 드래캄 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "dragon-tail" /* 드래곤테일 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ]
    ]
  },
  {
    "item": "dragon-fang" /* 용의이빨 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ }, { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ }, { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ }, { "slug": "dragon-pulse" /* 용의파동 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ }, { "slug": "dragon-tail" /* 드래곤테일 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ }, { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ]
    ]
  }
  ],
  "reuniclus": /* 란쿨루스 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ }, { "slug": "focus-blast" /* 기합구슬 */ }, { "slug": "signal-beam" /* 시그널빔 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "acid-armor" /* 녹기 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "trick-room" /* 트릭룸 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "thunder" /* 번개 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "thunder" /* 번개 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ }, { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  }
  ],
  "whimsicott": /* 엘풍 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "encore" /* 앵콜 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "stun-spore" /* 저리가루 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "stun-spore" /* 저리가루 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "nature-power" /* 자연의힘 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "stun-spore" /* 저리가루 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "switcheroo" /* 바꿔치기 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "defog" /* 안개제거 */ }, { "slug": "energy-ball" /* 에너지볼 */ }, { "slug": "giga-drain" /* 기가드레인 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": ["prankster" /* 짓궂은마음 */, "infiltrator" /* 틈새포착 */],
    "moves": [
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "switcheroo" /* 바꿔치기 */ } ]
    ]
  }
  ],
  "sharpedo": /* 샤크니아 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "destiny-bond" /* 길동무 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  }
  ],
  "sceptile": /* 나무킹 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  }
  ],
  "rhyperior": /* 거대코뿌리 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "aqua-tail" /* 아쿠아테일 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "rock-blast" /* 락블레스트 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "rock-polish" /* 록커트 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "rock-blast" /* 락블레스트 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "megahorn" /* 메가폰 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "rock-blast" /* 락블레스트 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "rock-blast" /* 락블레스트 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": "weakness-policy" /* 약점보험 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "counter" /* 카운터 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "heat-crash" /* 히트스탬프 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ }, { "slug": "toxic" /* 맹독 */ }, { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  }
  ],
  "bronzong": /* 동탁군 */ [
  {
    "item": "light-clay" /* 빛의점토 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "reflect" /* 리플렉터 */ } ],
      [ { "slug": "light-screen" /* 빛의장막 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "trick-room" /* 트릭룸 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "psywave" /* 사이코웨이브 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "protect" /* 방어 */ }, { "slug": "psywave" /* 사이코웨이브 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "occa-berry" /* 오카열매 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "trick-room" /* 트릭룸 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "stored-power" /* 어시스트파워 */ } ]
    ]
  }
  ],
  "slurpuff": /* 나루림 */ [
  {
    "item": "chesto-berry" /* 유루열매 */,
    "ability": "unburden" /* 곡예 */,
    "moves": [
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "draining-kiss" /* 드레인키스 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  ],
  "pangoro": /* 부란다 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "scrappy" /* 배짱 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ]
    ]
  },
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "hammer-arm" /* 암해머 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ }, { "slug": "gunk-shot" /* 더스트슈트 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "scrappy" /* 배짱 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "darkest-lariat" /* DD래리어트 */ }, { "slug": "bullet-punch" /* 불릿펀치 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ }, { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  }
  ],
  "abomasnow": /* 눈설왕 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "snow-warning" /* 눈퍼뜨리기 */,
    "moves": [
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "snow-warning" /* 눈퍼뜨리기 */,
    "moves": [
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "snow-warning" /* 눈퍼뜨리기 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "seed-bomb" /* 씨폭탄 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "snow-warning" /* 눈퍼뜨리기 */,
    "moves": [
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ }, { "slug": "wood-hammer" /* 우드해머 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "snow-warning" /* 눈퍼뜨리기 */,
    "moves": [
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "snow-warning" /* 눈퍼뜨리기 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "seed-bomb" /* 씨폭탄 */ }, { "slug": "wood-hammer" /* 우드해머 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "snow-warning" /* 눈퍼뜨리기 */,
    "moves": [
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "snow-warning" /* 눈퍼뜨리기 */,
    "moves": [
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "wood-hammer" /* 우드해머 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "rock-slide" /* 스톤샤워 */ } ]
    ]
  }
  ],
  "banette": /* 다크펫 */ [
  {
    "item": null,
    "ability": "insomnia" /* 불면 */,
    "moves": [
      [ { "slug": "destiny-bond" /* 길동무 */ }, { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ }, { "slug": "taunt" /* 도발 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  }
  ],
  "sigilyph": /* 심보러 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ]
    ]
  },
  {
    "item": "flame-orb" /* 화염구슬 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "psycho-shift" /* 사이코시프트 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ }, { "slug": "calm-mind" /* 명상 */ }, { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "flame-orb" /* 화염구슬 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "psycho-shift" /* 사이코시프트 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
    ]
  }
  ],
  "gastrodon": /* 트리토돈 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "storm-drain" /* 마중물 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "storm-drain" /* 마중물 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "storm-drain" /* 마중물 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "storm-drain" /* 마중물 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "storm-drain" /* 마중물 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "storm-drain" /* 마중물 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ }, { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "storm-drain" /* 마중물 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "sticky-hold" /* 점착 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": ["sticky-hold" /* 점착 */, "storm-drain" /* 마중물 */],
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "sludge-bomb" /* 오물폭탄 */ }, { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  }
  ],
  "delphox": /* 마폭시 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "trick" /* 트릭 */ }, { "slug": "overheat" /* 오버히트 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "water" } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "water" } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ]
    ]
  }
  ],
  "clawitzer": /* 블로스터 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "mega-launcher" /* 메가런처 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ } ]
    ]
  }
  ],
  "rotom": /* 로토무 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "discharge" /* 방전 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ } ]
    ]
  },
  {
    "item": "spell-tag" /* 저주의부적 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "discharge" /* 방전 */ }, { "slug": "shadow-ball" /* 섀도볼 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ }, { "slug": "pain-split" /* 아픔나누기 */ } ]
    ]
  }
  ],
  "hitmontop": /* 카포에라 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "foresight" /* 꿰뚫어보기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "braviary": /* 워글 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "defiant" /* 오기 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "defiant" /* 오기 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "defiant" /* 오기 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "defiant" /* 오기 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "frustration" /* 화풀이 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "defiant" /* 오기 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "defiant" /* 오기 */,
    "moves": [
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  }
  ],
  "registeel": /* 레지스틸 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "curse" /* 저주 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "seismic-toss" /* 지구던지기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "seismic-toss" /* 지구던지기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "chesto-berry" /* 유루열매 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ } ],
      [ { "slug": "amnesia" /* 망각술 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "body-press" /* 바디프레스 */ }, { "slug": "seismic-toss" /* 지구던지기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "seismic-toss" /* 지구던지기 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "heavy-slam" /* 헤비봄버 */ } ]
    ]
  },
  {
    "item": "chesto-berry" /* 유루열매 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "heavy-slam" /* 헤비봄버 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ } ]
    ]
  }
  ],
  "omastar": /* 암스타 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "weak-armor" /* 깨어진갑옷 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "swift-swim" /* 쓱쓱 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ]
    ]
  },
  {
    "item": "white-herb" /* 하양허브 */,
    "ability": "swift-swim" /* 쓱쓱 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "electric" } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "shell-armor" /* 조가비갑옷 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "icy-wind" /* 얼다바람 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "shell-armor" /* 조가비갑옷 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "electric" } ]
    ]
  },
  {
    "item": "white-herb" /* 하양허브 */,
    "ability": "weak-armor" /* 깨어진갑옷 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "weak-armor" /* 깨어진갑옷 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "surf" /* 파도타기 */ }, { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "weak-armor" /* 깨어진갑옷 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "surf" /* 파도타기 */ }, { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "electric" } ]
    ]
  }
  ],
  "jolteon": /* 쥬피썬더 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "water" } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "water" } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "expert-belt" /* 달인의띠 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "expert-belt" /* 달인의띠 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "water" } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "expert-belt" /* 달인의띠 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ }, { "slug": "toxic" /* 맹독 */ }, { "slug": "yawn" /* 하품 */ } ]
    ]
  }
  ],
  "exploud": /* 폭음룡 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "scrappy" /* 배짱 */,
    "moves": [
      [ { "slug": "boomburst" /* 폭음파 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "scrappy" /* 배짱 */,
    "moves": [
      [ { "slug": "boomburst" /* 폭음파 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "scrappy" /* 배짱 */,
    "moves": [
      [ { "slug": "boomburst" /* 폭음파 */ } ],
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  }
  ],
  "eelektross": /* 저리더프 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "acid-spray" /* 애시드봄 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
  ],
  "druddigon": /* 크리만 */ [
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "rough-skin" /* 까칠한피부 */,
    "moves": [
      [ { "slug": "dragon-tail" /* 드래곤테일 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "glare" /* 뱀눈초리 */ }, { "slug": "gunk-shot" /* 더스트슈트 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "outrage" /* 역린 */ }, { "slug": "dragon-claw" /* 드래곤크루 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "dragon-tail" /* 드래곤테일 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "roseli-berry" /* 로셀열매 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "glare" /* 뱀눈초리 */ } ]
    ]
  }
  ],
  "accelgor": /* 어지리더 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "sticky-hold" /* 점착 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "final-gambit" /* 목숨걸기 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sticky-hold" /* 점착 */,
    "moves": [
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sticky-hold" /* 점착 */,
    "moves": [
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "sticky-hold" /* 점착 */,
    "moves": [
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ]
    ]
  },
  ],
  "spiritomb": /* 화강돌 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ]
    ]
  },
  {
    "item": "black-glasses" /* 검은안경 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "black-glasses" /* 검은안경 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ]
    ]
  }
  ],
  "drapion": /* 드래피온 */ [
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "battle-armor" /* 전투무장 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ]
    ]
  },
  {
    "item": "shuca-berry" /* 슈캐열매 */,
    "ability": "battle-armor" /* 전투무장 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ]
    ]
  },
  {
    "item": "shuca-berry" /* 슈캐열매 */,
    "ability": "battle-armor" /* 전투무장 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "aqua-tail" /* 아쿠아테일 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ]
    ]
  },
  {
    "item": "shuca-berry" /* 슈캐열매 */,
    "ability": "battle-armor" /* 전투무장 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "aqua-tail" /* 아쿠아테일 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  }
  ],
  "camerupt": /* 폭타 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "lava-plume" /* 분연 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "lava-plume" /* 분연 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "electric" } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "lava-plume" /* 분연 */ }, { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "roar" /* 울부짖기 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  ],
  "hitmonlee": /* 시라소몬 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "reckless" /* 이판사판 */,
    "moves": [
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "reckless" /* 이판사판 */,
    "moves": [
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
  {
    "item": "liechi-berry" /* 치리열매 */,
    "ability": "unburden" /* 곡예 */,
    "moves": [
      [ { "slug": "endure" /* 버티기 */ } ],
      [ { "slug": "reversal" /* 기사회생 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ]
    ]
  }
  ],
  "glalie": /* 얼음귀신 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "inner-focus" /* 정신력 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ } ]
    ]
  },
  ],
  "escavalier": /* 슈바르고 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "overcoat" /* 방진 */,
    "moves": [
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "drill-run" /* 드릴라이너 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": ["shell-armor" /* 조가비갑옷 */, "overcoat" /* 방진 */],
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ }, { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": ["shell-armor" /* 조가비갑옷 */, "overcoat" /* 방진 */],
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  }
  ],
  "alomomola": /* 맘복치 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "scald" /* 열탕 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "flip-turn" /* 퀵턴 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "flip-turn" /* 퀵턴 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "mirror-coat" /* 미러코트 */ } ]
    ]
  }
  ],
  "emboar": /* 염무왕 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "reckless" /* 이판사판 */,
    "moves": [
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "wild-charge" /* 와일드볼트 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  },
  {
    "item": "expert-belt" /* 달인의띠 */,
    "ability": "reckless" /* 이판사판 */,
    "moves": [
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "wild-charge" /* 와일드볼트 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "reckless" /* 이판사판 */,
    "moves": [
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "wild-charge" /* 와일드볼트 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "reckless" /* 이판사판 */,
    "moves": [
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "wild-charge" /* 와일드볼트 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  }
  ],
  "seismitoad": /* 두빅굴 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "swift-swim" /* 쓱쓱 */,
    "moves": [
      [ { "slug": "rain-dance" /* 비바라기 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ }, { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ }, { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ }, { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  }
  ],
  "granbull": /* 그랑블루 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ } ],
      [ { "slug": "roar" /* 울부짖기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  }
  ],
  "smeargle": /* 루브도 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "own-tempo" /* 마이페이스 */,
    "moves": [
      [ { "slug": "spore" /* 버섯포자 */ }, { "slug": "dark-void" /* 다크홀 */ } ],
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "own-tempo" /* 마이페이스 */,
    "moves": [
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "nuzzle" /* 볼부비부비 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ }, { "slug": "toxic-thread" /* 독실 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "own-tempo" /* 마이페이스 */,
    "moves": [
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "nuzzle" /* 볼부비부비 */ }, { "slug": "magic-coat" /* 매직코트 */ } ],
      [ { "slug": "spore" /* 버섯포자 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "own-tempo" /* 마이페이스 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "spore" /* 버섯포자 */ } ],
      [ { "slug": "nuzzle" /* 볼부비부비 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "own-tempo" /* 마이페이스 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "spore" /* 버섯포자 */ } ],
      [ { "slug": "magic-coat" /* 매직코트 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "own-tempo" /* 마이페이스 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "spore" /* 버섯포자 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "own-tempo" /* 마이페이스 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "spore" /* 버섯포자 */ } ],
      [ { "slug": "memento" /* 추억의선물 */ }, { "slug": "endeavor" /* 죽기살기 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "own-tempo" /* 마이페이스 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "spore" /* 버섯포자 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  }
  ],
  "slowking": /* 야도킹 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "dragon-tail" /* 드래곤테일 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "chilly-reception" /* 썰렁개그 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ]
    ]
  }
  ],
  "virizion": /* 비리디온 */ [
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "leaf-blade" /* 리프블레이드 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
    ]
  },
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "leaf-blade" /* 리프블레이드 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "leaf-blade" /* 리프블레이드 */ }, { "slug": "synthesis" /* 광합성 */ } ]
    ]
  }
  ],
  "uxie": /* 유크시 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "yawn" /* 하품 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "kee-berry" /* 악키열매 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "draining-kiss" /* 드레인키스 */ } ],
      [ { "slug": "stored-power" /* 어시스트파워 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "draining-kiss" /* 드레인키스 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "draining-kiss" /* 드레인키스 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draining-kiss" /* 드레인키스 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ }, { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ }, { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  }
  ],
  "samurott": /* 대검귀 */ [
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "shell-armor" /* 조가비갑옷 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ]
    ]
  },
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  ],
  "poliwrath": /* 강챙이 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "circle-throw" /* 배대뒤치기 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ }, { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "vacuum-wave" /* 진공파 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ }, { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "vacuum-wave" /* 진공파 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ }, { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "vacuum-wave" /* 진공파 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "vacuum-wave" /* 진공파 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "vacuum-wave" /* 진공파 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "vacuum-wave" /* 진공파 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "darkest-lariat" /* DD래리어트 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "circle-throw" /* 배대뒤치기 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ]
    ]
  }
  ],
  "vivillon": /* 비비용 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "compound-eyes" /* 복안 */,
    "moves": [
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "compound-eyes" /* 복안 */,
    "moves": [
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "compound-eyes" /* 복안 */,
    "moves": [
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "compound-eyes" /* 복안 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "compound-eyes" /* 복안 */,
    "moves": [
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ }, { "slug": "bug-buzz" /* 벌레의야단법석 */ } ]
    ]
  }
  ],
  "audino": /* 다부니 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "toxic" /* 맹독 */ }, { "slug": "double-edge" /* 이판사판태클 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "encore" /* 앵콜 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "heal-bell" /* 치료방울 */ }, { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "mesprit": /* 엠라이트 */ [
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ }, { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "healing-wish" /* 치유소원 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "signal-beam" /* 시그널빔 */ }, { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "healing-wish" /* 치유소원 */ }, { "slug": "calm-mind" /* 명상 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "signal-beam" /* 시그널빔 */ }, { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ground" } ],
      [ { "slug": "healing-wish" /* 치유소원 */ }, { "slug": "calm-mind" /* 명상 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "signal-beam" /* 시그널빔 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "healing-wish" /* 치유소원 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "healing-wish" /* 치유소원 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "healing-wish" /* 치유소원 */ }, { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ }, { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "healing-wish" /* 치유소원 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ }, { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "kee-berry" /* 악키열매 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "stored-power" /* 어시스트파워 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "healing-wish" /* 치유소원 */ } ]
    ]
  }
  ],
  "archeops": /* 아케오스 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "defeatist" /* 무기력 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "dual-wingbeat" /* 더블윙 */ }, { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "power-herb" /* 파워풀허브 */,
    "ability": "defeatist" /* 무기력 */,
    "moves": [
      [ { "slug": "meteor-beam" /* 메테오빔 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ }, { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "heat-wave" /* 열풍 */ } ]
    ]
  }
  ],
  "malamar": /* 칼라마네로 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "psycho-cut" /* 사이코커터 */ } ],
      [ { "slug": "switcheroo" /* 바꿔치기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ]
    ]
  }
  ],
  "sawk": /* 타격귀 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "expert-belt" /* 달인의띠 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ]
    ]
  },
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ]
    ]
  },
  ],
  "dodrio": /* 두트리오 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "early-bird" /* 일찍기상 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "early-bird" /* 일찍기상 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ }, { "slug": "pursuit" /* 따라가때리기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "early-bird" /* 일찍기상 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ]
    ]
  }
  ],
  "chatot": /* 페라페 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "keen-eye" /* 날카로운눈 */,
    "moves": [
      [ { "slug": "boomburst" /* 폭음파 */ } ],
      [ { "slug": "chatter" /* 수다 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "keen-eye" /* 날카로운눈 */,
    "moves": [
      [ { "slug": "boomburst" /* 폭음파 */ } ],
      [ { "slug": "chatter" /* 수다 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "tangled-feet" /* 갈지자걸음 */,
    "moves": [
      [ { "slug": "boomburst" /* 폭음파 */ } ],
      [ { "slug": "chatter" /* 수다 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "keen-eye" /* 날카로운눈 */,
    "moves": [
      [ { "slug": "boomburst" /* 폭음파 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fighting" } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "keen-eye" /* 날카로운눈 */,
    "moves": [
      [ { "slug": "boomburst" /* 폭음파 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fighting" } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  }
  ],
  "carracosta": /* 늑골라 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "white-herb" /* 하양허브 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
  ],
  "beheeyem": /* 벰크 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "analytic" /* 애널라이즈 */,
    "moves": [
      [ { "slug": "trick-room" /* 트릭룸 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fighting" } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "analytic" /* 애널라이즈 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "signal-beam" /* 시그널빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ground" } ],
      [ { "slug": "trick" /* 트릭 */ }, { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  }
  ],
  "barbaracle": /* 거북손데스 */ [
  {
    "item": "shuca-berry" /* 슈캐열매 */,
    "ability": "tough-claws" /* 단단한발톱 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "razor-shell" /* 셸블레이드 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  ],
  "aurorus": /* 아마루르가 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "refrigerate" /* 프리즈스킨 */,
    "moves": [
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "frost-breath" /* 얼음숨결 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "snow-warning" /* 눈퍼뜨리기 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "rock-tomb" /* 암석봉인 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "snow-warning" /* 눈퍼뜨리기 */,
    "moves": [
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "rock" }, { "slug": "flash-cannon" /* 러스터캐논 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "snow-warning" /* 눈퍼뜨리기 */,
    "moves": [
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "rock" } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "snow-warning" /* 눈퍼뜨리기 */,
    "moves": [
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "rock-tomb" /* 암석봉인 */ }, { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  }
  ],
  "articuno": /* 프리져 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "agility" /* 고속이동 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "agility" /* 고속이동 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fighting" } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "heal-bell" /* 치료방울 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "hurricane" /* 폭풍 */ } ]
    ]
  }
  ],
  "zangoose": /* 쟝고 */ [
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "toxic-boost" /* 독폭주 */,
    "moves": [
      [ { "slug": "facade" /* 객기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "toxic-boost" /* 독폭주 */,
    "moves": [
      [ { "slug": "facade" /* 객기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ }, { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  }
  ],
  "xatu": /* 네이티오 */ [
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "magic-bounce" /* 매직미러 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-bounce" /* 매직미러 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ }, { "slug": "signal-beam" /* 시그널빔 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "magic-bounce" /* 매직미러 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "magic-bounce" /* 매직미러 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "magic-bounce" /* 매직미러 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "night-shade" /* 나이트헤드 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "magic-bounce" /* 매직미러 */,
    "moves": [
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "teleport" /* 순간이동 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "magic-bounce" /* 매직미러 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ }, { "slug": "grass-knot" /* 풀묶기 */ }, { "slug": "night-shade" /* 나이트헤드 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "teleport" /* 순간이동 */ } ]
    ]
  }
  ],
  "weezing": /* 또도가스 */ [
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  }
  ],
  "vileplume": /* 라플레시아 */ [
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "effect-spore" /* 포자 */,
    "moves": [
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ],
      [ { "slug": "aromatherapy" /* 아로마테라피 */ }, { "slug": "sleep-powder" /* 수면가루 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "effect-spore" /* 포자 */,
    "moves": [
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "effect-spore" /* 포자 */,
    "moves": [
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ground" } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "effect-spore" /* 포자 */,
    "moves": [
      [ { "slug": "strength-sap" /* 힘흡수 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "corrosive-gas" /* 부식가스 */ }, { "slug": "sleep-powder" /* 수면가루 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "effect-spore" /* 포자 */,
    "moves": [
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ }, { "slug": "stun-spore" /* 저리가루 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "strength-sap" /* 힘흡수 */ } ]
    ]
  }
  ],
  "swellow": /* 스왈로 */ [
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "guts" /* 근성 */,
    "moves": [
      [ { "slug": "facade" /* 객기 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ } ]
    ]
  },
  ],
  "sandslash": /* 고지 */ [
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "sand-rush" /* 모래헤치기 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-rush" /* 모래헤치기 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sand-rush" /* 모래헤치기 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "leech-life" /* 흡혈 */ }, { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sand-rush" /* 모래헤치기 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-rush" /* 모래헤치기 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  }
  ],
  "regirock": /* 레지락 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ }, { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "rock-blast" /* 락블레스트 */ }, { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  }
  ],
  "musharna": /* 몽얌나 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "synchronize" /* 싱크로 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ }, { "slug": "signal-beam" /* 시그널빔 */ } ],
      [ { "slug": "moonlight" /* 달의불빛 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "synchronize" /* 싱크로 */,
    "moves": [
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "moonlight" /* 달의불빛 */ } ]
    ]
  }
  ],
  "muk": /* 질뻐기 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "poison-touch" /* 독수 */,
    "moves": [
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  ],
  "mismagius": /* 무우마직 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ } ]
    ]
  },
  ],
  "miltank": /* 밀탱크 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "scrappy" /* 배짱 */,
    "moves": [
      [ { "slug": "curse" /* 저주 */ } ],
      [ { "slug": "body-slam" /* 누르기 */ } ],
      [ { "slug": "milk-drink" /* 우유마시기 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "body-slam" /* 누르기 */ } ],
      [ { "slug": "milk-drink" /* 우유마시기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "body-slam" /* 누르기 */ } ],
      [ { "slug": "milk-drink" /* 우유마시기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  }
  ],
  "mantine": /* 만타인 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "swift-swim" /* 쓱쓱 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "rain-dance" /* 비바라기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "haze" /* 흑안개 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "haze" /* 흑안개 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "haze" /* 흑안개 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "haze" /* 흑안개 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ]
    ]
  }
  ],
  "magmortar": /* 마그마번 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "vital-spirit" /* 의기양양 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "flame-charge" /* 니트로차지 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "vital-spirit" /* 의기양양 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ],
      [ { "slug": "flame-charge" /* 니트로차지 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "vital-spirit" /* 의기양양 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "vital-spirit" /* 의기양양 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "scorching-sands" /* 열사의대지 */ }, { "slug": "taunt" /* 도발 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "scorching-sands" /* 열사의대지 */ }, { "slug": "overheat" /* 오버히트 */ } ]
    ]
  }
  ],
  "ludicolo": /* 로파파 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "swift-swim" /* 쓱쓱 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "rain-dance" /* 비바라기 */ } ]
    ]
  }
  ],
  "lilligant": /* 드레디어 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "own-tempo" /* 마이페이스 */,
    "moves": [
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "own-tempo" /* 마이페이스 */,
    "moves": [
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  ],
  "liepard": /* 레파르다스 */ [
  {
    "item": "black-glasses" /* 검은안경 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "copycat" /* 흉내쟁이 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ]
    ]
  },
  {
    "item": "black-glasses" /* 검은안경 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "limber" /* 유연 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "copycat" /* 흉내쟁이 */ } ]
    ]
  }
  ],
  "lanturn": /* 랜턴 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ }, { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "signal-beam" /* 시그널빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ }, { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "signal-beam" /* 시그널빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "discharge" /* 방전 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ }, { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "protect" /* 방어 */ }, { "slug": "heal-bell" /* 치료방울 */ } ]
    ]
  }
  ],
  "klinklang": /* 기기기어르 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "shift-gear" /* 기어체인지 */ } ],
      [ { "slug": "gear-grind" /* 기어소서 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  ],
  "kabutops": /* 투구푸스 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "swift-swim" /* 쓱쓱 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ }, { "slug": "waterfall" /* 폭포오르기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "swift-swim" /* 쓱쓱 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ]
    ]
  },
  ],
  "jynx": /* 루주라 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "lovely-kiss" /* 악마의키스 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ }, { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "lovely-kiss" /* 악마의키스 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "lovely-kiss" /* 악마의키스 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "lovely-kiss" /* 악마의키스 */ } ]
    ]
  }
  ],
  "hariyama": /* 하리뭉 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ]
    ]
  },
  ],
  "golurk": /* 골루그 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "shadow-punch" /* 섀도펀치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ }, { "slug": "thunder-punch" /* 번개펀치 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "no-guard" /* 노가드 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "shadow-punch" /* 섀도펀치 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "rock-polish" /* 록커트 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "shadow-punch" /* 섀도펀치 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "no-guard" /* 노가드 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "no-guard" /* 노가드 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "no-guard" /* 노가드 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "poltergeist" /* 폴터가이스트 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "poltergeist" /* 폴터가이스트 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "shadow-punch" /* 섀도펀치 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "no-guard" /* 노가드 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "poltergeist" /* 폴터가이스트 */ } ],
      [ { "slug": "heat-crash" /* 히트스탬프 */ } ],
      [ { "slug": "darkest-lariat" /* DD래리어트 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "no-guard" /* 노가드 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "poltergeist" /* 폴터가이스트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "no-guard" /* 노가드 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "poltergeist" /* 폴터가이스트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ]
    ]
  }
  ],
  "garbodor": /* 더스트나 */ [
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "aftermath" /* 유폭 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "aftermath" /* 유폭 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "seed-bomb" /* 씨폭탄 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "aftermath" /* 유폭 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "seed-bomb" /* 씨폭탄 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "poison-barb" /* 독바늘 */,
    "ability": "aftermath" /* 유폭 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "aftermath" /* 유폭 */,
    "moves": [
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "stomping-tantrum" /* 분함의발구르기 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ }, { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  }
  ],
  "exeggutor": /* 나시 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "chlorophyll" /* 엽록소 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": ["chlorophyll" /* 엽록소 */, "harvest" /* 수확 */],
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "stomping-tantrum" /* 분함의발구르기 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ }, { "slug": "teleport" /* 순간이동 */ }, { "slug": "giga-drain" /* 기가드레인 */ } ]
    ]
  }
  ],
  "electivire": /* 에레키블 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "motor-drive" /* 전기엔진 */,
    "moves": [
      [ { "slug": "wild-charge" /* 와일드볼트 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ]
    ]
  }
  ],
  "cryogonal": /* 프리지오 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "frost-breath" /* 얼음숨결 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ground" } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fighting" } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fighting" } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "crustle": /* 암팰리스 */ [
  {
    "item": "custap-berry" /* 애슈열매 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "rock-blast" /* 락블레스트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
  ],
  "cacturne": /* 밤선인 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "destiny-bond" /* 길동무 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "seed-bomb" /* 씨폭탄 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  }
  ],
  "claydol": /* 점토도리 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ]
    ]
  }
  ],
  "tauros": /* 켄타로스 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "rock-climb" /* 락클라임 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "iron-tail" /* 아이언테일 */ }, { "slug": "zen-headbutt" /* 사념의박치기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "body-slam" /* 누르기 */ } ],
      [ { "slug": "throat-chop" /* 지옥찌르기 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ]
    ]
  }
  ],
  "torterra": /* 토대부기 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "wood-hammer" /* 우드해머 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "soft-sand" /* 부드러운모래 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "rock-polish" /* 록커트 */ } ],
      [ { "slug": "wood-hammer" /* 우드해머 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "wood-hammer" /* 우드해머 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ],
      [ { "slug": "wood-hammer" /* 우드해머 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "loaded-dice" /* 속임수주사위 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "bullet-seed" /* 기관총 */ } ],
      [ { "slug": "headlong-rush" /* 들이받기 */ }, { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "rock-blast" /* 락블레스트 */ } ],
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ]
    ]
  },
  {
    "item": "loaded-dice" /* 속임수주사위 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "bullet-seed" /* 기관총 */ } ],
      [ { "slug": "headlong-rush" /* 들이받기 */ }, { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ]
    ]
  }
  ],
  "pelipper": /* 패리퍼 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "keen-eye" /* 날카로운눈 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "hurricane" /* 폭풍 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "drizzle" /* 잔비 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "surf" /* 파도타기 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "damp-rock" /* 축축한바위 */,
    "ability": "drizzle" /* 잔비 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ }, { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "drizzle" /* 잔비 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ }, { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "drizzle" /* 잔비 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "drizzle" /* 잔비 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  }
  ],
  "shiftry": /* 다탱구 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "chlorophyll" /* 엽록소 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "chlorophyll" /* 엽록소 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "black-glasses" /* 검은안경 */,
    "ability": "chlorophyll" /* 엽록소 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "seed-bomb" /* 씨폭탄 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "chlorophyll" /* 엽록소 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "seed-bomb" /* 씨폭탄 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "pickpocket" /* 나쁜손버릇 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "leaf-blade" /* 리프블레이드 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ }, { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "pickpocket" /* 나쁜손버릇 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "leaf-blade" /* 리프블레이드 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "pickpocket" /* 나쁜손버릇 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  }
  ],
  "floatzel": /* 플로젤 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "swift-swim" /* 쓱쓱 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "water-veil" /* 수의베일 */,
    "moves": [
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "water-veil" /* 수의베일 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "electric" } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "water-veil" /* 수의베일 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  }
  ],
  "hitmonchan": /* 홍수몬 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "drain-punch" /* 드레인펀치 */ }, { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "thunder-punch" /* 번개펀치 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  }
  ],
  "skuntank": /* 스컹탱크 */ [
  {
    "item": "expert-belt" /* 달인의띠 */,
    "ability": "aftermath" /* 유폭 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "aftermath" /* 유폭 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "acid-spray" /* 애시드봄 */ }, { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "aftermath" /* 유폭 */,
    "moves": [
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "toxic" /* 맹독 */ }, { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  }
  ],
  "grumpig": /* 피그킹 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "signal-beam" /* 시그널빔 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  ],
  "ninetales": /* 나인테일 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ]
    ]
  },
  {
    "item": "passho-berry" /* 꼬시개열매 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ground" } ]
    ]
  },
  ],
  "bouffalant": /* 버프론 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ }, { "slug": "head-charge" /* 아프로브레이크 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "head-charge" /* 아프로브레이크 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ]
    ]
  }
  ],
  "gorebyss": /* 분홍장이 */ [
  {
    "item": "white-herb" /* 하양허브 */,
    "ability": "swift-swim" /* 쓱쓱 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "electric" } ]
    ]
  },
  {
    "item": "white-herb" /* 하양허브 */,
    "ability": "swift-swim" /* 쓱쓱 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ]
    ]
  }
  ],
  "gothitelle": /* 고디모아젤 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "shadow-tag" /* 그림자밟기 */,
    "moves": [
      [ { "slug": "charm" /* 애교부리기 */ } ],
      [ { "slug": "confide" /* 비밀이야기 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  }
  ],
  "stoutland": /* 바랜드 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "scrappy" /* 배짱 */,
    "moves": [
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "facade" /* 객기 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ }, { "slug": "crunch" /* 깨물어부수기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "sand-rush" /* 모래헤치기 */,
    "moves": [
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "scrappy" /* 배짱 */,
    "moves": [
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "facade" /* 객기 */ } ]
    ]
  }
  ],
  "zebstrika": /* 제브라이카 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  }
  ],
  "jumpluff": /* 솜솜코 */ [
  {
    "item": null,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "seed-bomb" /* 씨폭탄 */ } ],
      [ { "slug": "memento" /* 추억의선물 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "seed-bomb" /* 씨폭탄 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "strength-sap" /* 힘흡수 */ } ]
    ]
  }
  ],
  "stunfisk": /* 메더 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "static" /* 정전기 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "discharge" /* 방전 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "static" /* 정전기 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "discharge" /* 방전 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "bug" } ]
    ]
  },
  {
    "item": "passho-berry" /* 꼬시개열매 */,
    "ability": "static" /* 정전기 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "discharge" /* 방전 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "passho-berry" /* 꼬시개열매 */,
    "ability": "static" /* 정전기 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "discharge" /* 방전 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "bug" } ]
    ]
  }
  ],
  "rapidash": /* 날쌩마 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "wild-charge" /* 와일드볼트 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "morning-sun" /* 아침햇살 */ } ]
    ]
  },
  {
    "item": "charcoal" /* 목탄 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "wild-charge" /* 와일드볼트 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "morning-sun" /* 아침햇살 */ } ]
    ]
  }
  ],
  "simipour": /* 앗차키 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "low-kick" /* 안다리걸기 */ }, { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "electric" } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "low-kick" /* 안다리걸기 */ }, { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "salac-berry" /* 캄라열매 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  }
  ],
  "raichu": /* 라이츄 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "signal-beam" /* 시그널빔 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "static" /* 정전기 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "signal-beam" /* 시그널빔 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "surf" /* 파도타기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "signal-beam" /* 시그널빔 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  }
  ],
  "regice": /* 레지아이스 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "rock-polish" /* 록커트 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "rock-polish" /* 록커트 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  }
  ],
  "relicanth": /* 시라칸 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "rock-head" /* 돌머리 */,
    "moves": [
      [ { "slug": "head-smash" /* 양날박치기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "yawn" /* 하품 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "rock-head" /* 돌머리 */,
    "moves": [
      [ { "slug": "head-smash" /* 양날박치기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "rock-head" /* 돌머리 */,
    "moves": [
      [ { "slug": "head-smash" /* 양날박치기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "yawn" /* 하품 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "rock-head" /* 돌머리 */,
    "moves": [
      [ { "slug": "head-smash" /* 양날박치기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  }
  ],
  "simisage": /* 야나키 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
  ],
  "mightyena": /* 그라에나 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "iron-tail" /* 아이언테일 */ } ]
    ]
  }
  ],
  "probopass": /* 대코파스 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magnet-pull" /* 자력 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  },
  {
    "item": "passho-berry" /* 꼬시개열매 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ }, { "slug": "toxic" /* 맹독 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  },
  {
    "item": "shuca-berry" /* 슈캐열매 */,
    "ability": "magnet-pull" /* 자력 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  }
  ],
  "sawsbuck": /* 바라철록 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "double-edge" /* 이판사판태클 */ } ],
      [ { "slug": "horn-leech" /* 우드호른 */ } ],
      [ { "slug": "jump-kick" /* 점프킥 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "double-edge" /* 이판사판태클 */ } ],
      [ { "slug": "horn-leech" /* 우드호른 */ } ],
      [ { "slug": "jump-kick" /* 점프킥 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "salac-berry" /* 캄라열매 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "horn-leech" /* 우드호른 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  }
  ],
  "arbok": /* 아보크 */ [
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "coil" /* 똬리틀기 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "shuca-berry" /* 슈캐열매 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "coil" /* 똬리틀기 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "shed-skin" /* 탈피 */,
    "moves": [
      [ { "slug": "coil" /* 똬리틀기 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  }
  ],
  "golduck": /* 골덕 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "swift-swim" /* 쓱쓱 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "rain-dance" /* 비바라기 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  }
  ],
  "golem": /* 딱구리 */ [
  {
    "item": "custap-berry" /* 애슈열매 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "weakness-policy" /* 약점보험 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "weakness-policy" /* 약점보험 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "rock-blast" /* 락블레스트 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ }, { "slug": "explosion" /* 대폭발 */ } ]
    ]
  }
  ],
  "lickilicky": /* 내룸벨트 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "oblivious" /* 둔감 */,
    "moves": [
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "body-slam" /* 누르기 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "dragon-tail" /* 드래곤테일 */ }, { "slug": "heal-bell" /* 치료방울 */ } ]
    ]
  }
  ],
  "politoed": /* 왕구리 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "electric" } ],
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "perish-song" /* 멸망의노래 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  ],
  "seaking": /* 왕콘치 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "haze" /* 흑안개 */ }, { "slug": "protect" /* 방어 */ } ]
    ]
  }
  ],
  "simisear": /* 바오키 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ }, { "slug": "low-kick" /* 안다리걸기 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ }, { "slug": "fire-blast" /* 불대문자 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "low-kick" /* 안다리걸기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ]
    ]
  },
  {
    "item": "salac-berry" /* 캄라열매 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ]
    ]
  }
  ],
  "swanna": /* 스완나 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "keen-eye" /* 날카로운눈 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "big-pecks" /* 부풀린가슴 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "hydration" /* 촉촉바디 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  }
  ],
  "leafeon": /* 리피아 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "leaf-guard" /* 리프가드 */,
    "moves": [
      [ { "slug": "leaf-blade" /* 리프블레이드 */ } ],
      [ { "slug": "bullet-seed" /* 기관총 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "double-edge" /* 이판사판태클 */ }, { "slug": "quick-attack" /* 전광석화 */ } ]
    ]
  },
  {
    "item": "yache-berry" /* 플카열매 */,
    "ability": "chlorophyll" /* 엽록소 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "leaf-blade" /* 리프블레이드 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ }, { "slug": "return" /* 은혜갚기 */ } ]
    ]
  },
  {
    "item": "occa-berry" /* 오카열매 */,
    "ability": "chlorophyll" /* 엽록소 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "leaf-blade" /* 리프블레이드 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ }, { "slug": "return" /* 은혜갚기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "chlorophyll" /* 엽록소 */,
    "moves": [
      [ { "slug": "double-edge" /* 이판사판태클 */ }, { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "leaf-blade" /* 리프블레이드 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "bullet-seed" /* 기관총 */ }, { "slug": "x-scissor" /* 시저크로스 */ } ]
    ]
  },
  ],
  "leavanny": /* 모아머 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "chlorophyll" /* 엽록소 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "electroweb" /* 일렉트릭네트 */ }, { "slug": "magic-coat" /* 매직코트 */ } ],
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
  ],
  "ninjask": /* 아이스크 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "x-scissor" /* 시저크로스 */ } ],
      [ { "slug": "aerial-ace" /* 제비반환 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "dual-wingbeat" /* 더블윙 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  }
  ],
  "purugly": /* 몬냥이 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "defiant" /* 오기 */,
    "moves": [
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "fake-out" /* 속이다 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "sucker-punch" /* 기습 */ }, { "slug": "wake-up-slap" /* 잠깨움뺨치기 */ } ]
    ]
  }
  ],
  "solrock": /* 솔록 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ }, { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "morning-sun" /* 아침햇살 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "morning-sun" /* 아침햇살 */ } ]
    ]
  }
  ],
  "armaldo": /* 아말도 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "battle-armor" /* 전투무장 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "battle-armor" /* 전투무장 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "battle-armor" /* 전투무장 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "battle-armor" /* 전투무장 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "battle-armor" /* 전투무장 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "battle-armor" /* 전투무장 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "x-scissor" /* 시저크로스 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  }
  ],
  "dusknoir": /* 야느와르몽 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "frisk" /* 통찰 */,
    "moves": [
      [ { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "spell-tag" /* 저주의부적 */,
    "ability": "frisk" /* 통찰 */,
    "moves": [
      [ { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  }
  ],
  "huntail": /* 헌테일 */ [
  {
    "item": "white-herb" /* 하양허브 */,
    "ability": "water-veil" /* 수의베일 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "white-herb" /* 하양허브 */,
    "ability": "swift-swim" /* 쓱쓱 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "double-edge" /* 이판사판태클 */ } ]
    ]
  }
  ],
  "avalugg": /* 크레베이스 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "avalanche" /* 눈사태 */ } ],
      [ { "slug": "roar" /* 울부짖기 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "avalanche" /* 눈사태 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "roar" /* 울부짖기 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "avalanche" /* 눈사태 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "roar" /* 울부짖기 */ }, { "slug": "earthquake" /* 지진 */ }, { "slug": "mirror-coat" /* 미러코트 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "avalanche" /* 눈사태 */ }, { "slug": "ice-spinner" /* 아이스스피너 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ }, { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  }
  ],
  "electrode": /* 붐볼 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "soundproof" /* 방음 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "signal-beam" /* 시그널빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  }
  ],
  "marowak": /* 텅구리 */ [
  {
    "item": "thick-club" /* 굵은뼈 */,
    "ability": "rock-head" /* 돌머리 */,
    "moves": [
      [ { "slug": "bonemerang" /* 뼈다귀부메랑 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "double-edge" /* 이판사판태클 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "thick-club" /* 굵은뼈 */,
    "ability": "rock-head" /* 돌머리 */,
    "moves": [
      [ { "slug": "bonemerang" /* 뼈다귀부메랑 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "double-edge" /* 이판사판태클 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "thick-club" /* 굵은뼈 */,
    "ability": "rock-head" /* 돌머리 */,
    "moves": [
      [ { "slug": "bonemerang" /* 뼈다귀부메랑 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  }
  ],
  "rampardos": /* 램펄드 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "head-smash" /* 양날박치기 */ } ],
      [ { "slug": "surf" /* 파도타기 */ } ]
    ]
  }
  ],
  "drifblim": /* 둥실라이드 */ [
  {
    "item": "liechi-berry" /* 치리열매 */,
    "ability": "unburden" /* 곡예 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  }
  ],
  "marshadow": /* 마샤도 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "spectral-thief" /* 섀도스틸 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "spectral-thief" /* 섀도스틸 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "rock-tomb" /* 암석봉인 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "spectral-thief" /* 섀도스틸 */ } ],
      [ { "slug": "low-kick" /* 안다리걸기 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "rock-tomb" /* 암석봉인 */ }, { "slug": "bulk-up" /* 벌크업 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "spectral-thief" /* 섀도스틸 */ } ],
      [ { "slug": "low-kick" /* 안다리걸기 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "rock-tomb" /* 암석봉인 */ }, { "slug": "poltergeist" /* 폴터가이스트 */ } ]
    ]
  }
  ],
  "celesteela": /* 철화구야 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "protect" /* 방어 */ }, { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "power-herb" /* 파워풀허브 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "meteor-beam" /* 메테오빔 */ } ],
      [ { "slug": "autotomize" /* 바디퍼지 */ } ]
    ]
  }
  ],
  "toxapex": /* 더시마사리 */ [
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "haze" /* 흑안개 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "haze" /* 흑안개 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "toxic-spikes" /* 독압정 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "haze" /* 흑안개 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "baneful-bunker" /* 토치카 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "haze" /* 흑안개 */ }, { "slug": "baneful-bunker" /* 토치카 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "haze" /* 흑안개 */ }, { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "haze" /* 흑안개 */ }, { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "haze" /* 흑안개 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "haze" /* 흑안개 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "haze" /* 흑안개 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "haze" /* 흑안개 */ }, { "slug": "toxic-spikes" /* 독압정 */ }, { "slug": "baneful-bunker" /* 토치카 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "haze" /* 흑안개 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "haze" /* 흑안개 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  }
  ],
  "tapu-lele": /* 카푸나비나 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "psychic-surge" /* 사이코메이커 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ }, { "slug": "aromatherapy" /* 아로마테라피 */ } ],
      [ { "slug": "natures-madness" /* 자연의분노 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "psychic-surge" /* 사이코메이커 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "psychic-surge" /* 사이코메이커 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ }, { "slug": "thunderbolt" /* 10만볼트 */ }, { "slug": "natures-madness" /* 자연의분노 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "psychic-surge" /* 사이코메이커 */,
    "moves": [
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "psychic-surge" /* 사이코메이커 */,
    "moves": [
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ]
    ]
  }
  ],
  "magearna": /* 마기아나 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "soul-heart" /* 소울하트 */,
    "moves": [
      [ { "slug": "fleur-cannon" /* 플뢰르캐논 */ } ],
      [ { "slug": "heart-swap" /* 하트스웹 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "soul-heart" /* 소울하트 */,
    "moves": [
      [ { "slug": "fleur-cannon" /* 플뢰르캐논 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" }, { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "soul-heart" /* 소울하트 */,
    "moves": [
      [ { "slug": "shift-gear" /* 기어체인지 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "soul-heart" /* 소울하트 */,
    "moves": [
      [ { "slug": "fleur-cannon" /* 플뢰르캐논 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ } ],
      [ { "slug": "heal-bell" /* 치료방울 */ } ]
    ]
  }
  ],
  "buzzwole": /* 매시붕 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "hammer-arm" /* 암해머 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "leech-life" /* 흡혈 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "leech-life" /* 흡혈 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "leech-life" /* 흡혈 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "leech-life" /* 흡혈 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "leech-life" /* 흡혈 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "leech-life" /* 흡혈 */ } ],
      [ { "slug": "hammer-arm" /* 암해머 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ }, { "slug": "leech-life" /* 흡혈 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ }, { "slug": "leech-life" /* 흡혈 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  }
  ],
  "dugtrio": /* 닥트리오 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "arena-trap" /* 개미지옥 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "reversal" /* 기사회생 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ]
    ]
  }
  ],
  "tapu-koko": /* 카푸꼬꼬꼭 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "electric-surge" /* 일렉트릭메이커 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" }, { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "electric-surge" /* 일렉트릭메이커 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "light-clay" /* 빛의점토 */,
    "ability": "electric-surge" /* 일렉트릭메이커 */,
    "moves": [
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "reflect" /* 리플렉터 */ } ],
      [ { "slug": "light-screen" /* 빛의장막 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "shuca-berry" /* 슈캐열매 */,
    "ability": "electric-surge" /* 일렉트릭메이커 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "electric-surge" /* 일렉트릭메이커 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ }, { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "magnet" /* 자석 */,
    "ability": "electric-surge" /* 일렉트릭메이커 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ]
    ]
  },
  {
    "item": "magnet" /* 자석 */,
    "ability": "electric-surge" /* 일렉트릭메이커 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "electric-surge" /* 일렉트릭메이커 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ }, { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "electric-surge" /* 일렉트릭메이커 */,
    "moves": [
      [ { "slug": "wild-charge" /* 와일드볼트 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "magnet" /* 자석 */,
    "ability": "electric-surge" /* 일렉트릭메이커 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "grass-knot" /* 풀묶기 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "electric-surge" /* 일렉트릭메이커 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ]
    ]
  },
  {
    "item": "magnet" /* 자석 */,
    "ability": "electric-surge" /* 일렉트릭메이커 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "electric-surge" /* 일렉트릭메이커 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  }
  ],
  "wobbuffet": /* 마자용 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "shadow-tag" /* 그림자밟기 */,
    "moves": [
      [ { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "counter" /* 카운터 */ } ],
      [ { "slug": "mirror-coat" /* 미러코트 */ } ],
      [ { "slug": "safeguard" /* 신비의부적 */ } ]
    ]
  }
  ],
  "naganadel": /* 아고용 */ [
  {
    "item": null,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ]
    ]
  }
  ],
  "blacephalon": /* 두파팡 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "trick" /* 트릭 */ }, { "slug": "explosion" /* 대폭발 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "mind-blown" /* 깜짝헤드 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ } ]
    ]
  }
  ],
  "kartana": /* 종이신도 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "leaf-blade" /* 리프블레이드 */ } ],
      [ { "slug": "sacred-sword" /* 성스러운칼 */ } ],
      [ { "slug": "smart-strike" /* 스마트호른 */ } ],
      [ { "slug": "defog" /* 안개제거 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "leaf-blade" /* 리프블레이드 */ } ],
      [ { "slug": "sacred-sword" /* 성스러운칼 */ } ],
      [ { "slug": "smart-strike" /* 스마트호른 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "leaf-blade" /* 리프블레이드 */ } ],
      [ { "slug": "sacred-sword" /* 성스러운칼 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "leaf-blade" /* 리프블레이드 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "sacred-sword" /* 성스러운칼 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "leaf-blade" /* 리프블레이드 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "sacred-sword" /* 성스러운칼 */ } ],
      [ { "slug": "smart-strike" /* 스마트호른 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "leaf-blade" /* 리프블레이드 */ } ],
      [ { "slug": "smart-strike" /* 스마트호른 */ }, { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "sacred-sword" /* 성스러운칼 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
  ],
  "moltres": /* 파이어 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "air-slash" /* 에어슬래시 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "mystical-fire" /* 매지컬플레임 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ }, { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "roar" /* 울부짖기 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ }, { "slug": "hurricane" /* 폭풍 */ }, { "slug": "roar" /* 울부짖기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  }
  ],
  "pyukumuku": /* 해무기 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "soak" /* 물붓기 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "block" /* 블록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "spite" /* 원한 */ } ],
      [ { "slug": "rest" /* 잠자기 */ }, { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "block" /* 블록 */ } ]
    ]
  },
  {
    "item": "aguav-berry" /* 아바열매 */,
    "ability": "innards-out" /* 내용물분출 */,
    "moves": [
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "soak" /* 물붓기 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "block" /* 블록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "soak" /* 물붓기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "block" /* 블록 */ }, { "slug": "counter" /* 카운터 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "soak" /* 물붓기 */ } ],
      [ { "slug": "block" /* 블록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "soak" /* 물붓기 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "counter" /* 카운터 */ } ]
    ]
  }
  ],
  "ribombee": /* 에리본 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "shield-dust" /* 인분 */,
    "moves": [
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "stun-spore" /* 저리가루 */ }, { "slug": "quiver-dance" /* 나비춤 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "sweet-veil" /* 스위트베일 */,
    "moves": [
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ }, { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "sweet-veil" /* 스위트베일 */,
    "moves": [
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ }, { "slug": "psychic" /* 사이코키네시스 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "sweet-veil" /* 스위트베일 */,
    "moves": [
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "sweet-veil" /* 스위트베일 */,
    "moves": [
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "quiver-dance" /* 나비춤 */ }, { "slug": "stun-spore" /* 저리가루 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "sweet-veil" /* 스위트베일 */,
    "moves": [
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "shield-dust" /* 인분 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "aromatherapy" /* 아로마테라피 */ }, { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "shield-dust" /* 인분 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "switcheroo" /* 바꿔치기 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ]
    ]
  }
  ],
  "tangrowth": /* 덩쿠림보 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "giga-drain" /* 기가드레인 */ }, { "slug": "leaf-storm" /* 리프스톰 */ }, { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" }, { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "sludge-bomb" /* 오물폭탄 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" }, { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ }, { "slug": "stun-spore" /* 저리가루 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ }, { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "giga-drain" /* 기가드레인 */ }, { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ }, { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ }, { "slug": "synthesis" /* 광합성 */ } ]
    ]
  }
  ],
  "tapu-bulu": /* 카푸브루루 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "grassy-surge" /* 그래스메이커 */,
    "moves": [
      [ { "slug": "wood-hammer" /* 우드해머 */ } ],
      [ { "slug": "horn-leech" /* 우드호른 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ }, { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "megahorn" /* 메가폰 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "grassy-surge" /* 그래스메이커 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ }, { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "horn-leech" /* 우드호른 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ }, { "slug": "protect" /* 방어 */ }, { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "grassy-surge" /* 그래스메이커 */,
    "moves": [
      [ { "slug": "wood-hammer" /* 우드해머 */ } ],
      [ { "slug": "horn-leech" /* 우드호른 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "grassy-surge" /* 그래스메이커 */,
    "moves": [
      [ { "slug": "wood-hammer" /* 우드해머 */ } ],
      [ { "slug": "horn-leech" /* 우드호른 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "grassy-surge" /* 그래스메이커 */,
    "moves": [
      [ { "slug": "wood-hammer" /* 우드해머 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "horn-leech" /* 우드호른 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "grassy-surge" /* 그래스메이커 */,
    "moves": [
      [ { "slug": "horn-leech" /* 우드호른 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ }, { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "grassy-surge" /* 그래스메이커 */,
    "moves": [
      [ { "slug": "horn-leech" /* 우드호른 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ]
    ]
  }
  ],
  "tapu-fini": /* 카푸느지느 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "misty-surge" /* 미스트메이커 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ }, { "slug": "natures-madness" /* 자연의분노 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "misty-surge" /* 미스트메이커 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "scald" /* 열탕 */ }, { "slug": "natures-madness" /* 자연의분노 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "misty-surge" /* 미스트메이커 */,
    "moves": [
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "natures-madness" /* 자연의분노 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "misty-surge" /* 미스트메이커 */,
    "moves": [
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "surf" /* 파도타기 */ }, { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "misty-surge" /* 미스트메이커 */,
    "moves": [
      [ { "slug": "natures-madness" /* 자연의분노 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "misty-surge" /* 미스트메이커 */,
    "moves": [
      [ { "slug": "natures-madness" /* 자연의분노 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "misty-surge" /* 미스트메이커 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "misty-surge" /* 미스트메이커 */,
    "moves": [
      [ { "slug": "whirlpool" /* 바다회오리 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "natures-madness" /* 자연의분노 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "misty-surge" /* 미스트메이커 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "draining-kiss" /* 드레인키스 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "substitute" /* 대타출동 */ } ]
    ]
  }
  ],
  "volcanion": /* 볼케니온 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "steam-eruption" /* 스팀버스트 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "steam-eruption" /* 스팀버스트 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ }, { "slug": "hidden-power" /* 잠재파워 */, "hpType": "electric" } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ }, { "slug": "sludge-bomb" /* 오물폭탄 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "steam-eruption" /* 스팀버스트 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ }, { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "shuca-berry" /* 슈캐열매 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "steam-eruption" /* 스팀버스트 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "steam-eruption" /* 스팀버스트 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "steam-eruption" /* 스팀버스트 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "steam-eruption" /* 스팀버스트 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "steam-eruption" /* 스팀버스트 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "steam-eruption" /* 스팀버스트 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "steam-eruption" /* 스팀버스트 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "electric" } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "steam-eruption" /* 스팀버스트 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "steam-eruption" /* 스팀버스트 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "steam-eruption" /* 스팀버스트 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "steam-eruption" /* 스팀버스트 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "steam-eruption" /* 스팀버스트 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ }, { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  }
  ],
  "nidoking": /* 니드킹 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ }, { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ }, { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ }, { "slug": "thunder" /* 번개 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ }, { "slug": "substitute" /* 대타출동 */ } ]
    ]
  }
  ],
  "quagsire": /* 누오 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "curse" /* 저주 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "protect" /* 방어 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "scald" /* 열탕 */ }, { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "curse" /* 저주 */ } ]
    ]
  }
  ],
  "araquanid": /* 깨비물거미 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "water-bubble" /* 수포 */,
    "moves": [
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "magic-coat" /* 매직코트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "water-bubble" /* 수포 */,
    "moves": [
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "magic-coat" /* 매직코트 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "mirror-coat" /* 미러코트 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "water-bubble" /* 수포 */,
    "moves": [
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "magic-coat" /* 매직코트 */ } ],
      [ { "slug": "leech-life" /* 흡혈 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "water-bubble" /* 수포 */,
    "moves": [
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "leech-life" /* 흡혈 */ } ],
      [ { "slug": "mirror-coat" /* 미러코트 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ }, { "slug": "crunch" /* 깨물어부수기 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "water-bubble" /* 수포 */,
    "moves": [
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "leech-life" /* 흡혈 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "mirror-coat" /* 미러코트 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "water-bubble" /* 수포 */,
    "moves": [
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "leech-life" /* 흡혈 */ } ],
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "mirror-coat" /* 미러코트 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "water-bubble" /* 수포 */,
    "moves": [
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "leech-life" /* 흡혈 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  }
  ],
  "kommo-o": /* 짜랑고우거 */ [
  {
    "item": "salac-berry" /* 캄라열매 */,
    "ability": "bulletproof" /* 방탄 */,
    "moves": [
      [ { "slug": "belly-drum" /* 배북 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "bulletproof" /* 방탄 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "dragon-tail" /* 드래곤테일 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  ],
  "amoonguss": /* 뽀록나 */ [
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "spore" /* 버섯포자 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "clear-smog" /* 클리어스모그 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "spore" /* 버섯포자 */ } ],
      [ { "slug": "clear-smog" /* 클리어스모그 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "spore" /* 버섯포자 */ } ],
      [ { "slug": "clear-smog" /* 클리어스모그 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ }, { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "spore" /* 버섯포자 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "clear-smog" /* 클리어스모그 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "spore" /* 버섯포자 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ }, { "slug": "stun-spore" /* 저리가루 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "spore" /* 버섯포자 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ }, { "slug": "synthesis" /* 광합성 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "stun-spore" /* 저리가루 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "stomping-tantrum" /* 분함의발구르기 */ } ],
      [ { "slug": "leaf-storm" /* 리프스톰 */ }, { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ }, { "slug": "clear-smog" /* 클리어스모그 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "clear-smog" /* 클리어스모그 */ }, { "slug": "giga-drain" /* 기가드레인 */ }, { "slug": "stun-spore" /* 저리가루 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ } ]
    ]
  }
  ],
  "primarina": /* 누리레느 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "sparkling-aria" /* 물거품아리아 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ }, { "slug": "substitute" /* 대타출동 */ }, { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "surf" /* 파도타기 */ }, { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ }, { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "liquid-voice" /* 촉촉보이스 */,
    "moves": [
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "draining-kiss" /* 드레인키스 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "draining-kiss" /* 드레인키스 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
    ]
  }
  ],
  "stakataka": /* 차곡차곡 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "rock-blast" /* 락블레스트 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "trick-room" /* 트릭룸 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "rock-blast" /* 락블레스트 */ }, { "slug": "iron-defense" /* 철벽 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "trick-room" /* 트릭룸 */ } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "rock-blast" /* 락블레스트 */ } ]
    ]
  }
  ],
  "zeraora": /* 제라오라 */ [
  {
    "item": "expert-belt" /* 달인의띠 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "plasma-fists" /* 플라스마피스트 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "plasma-fists" /* 플라스마피스트 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "bulk-up" /* 벌크업 */ }, { "slug": "volt-switch" /* 볼트체인지 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "pidgeot": /* 피죤투 */ [
  {
    "item": null,
    "ability": "big-pecks" /* 부풀린가슴 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "work-up" /* 분발 */ }, { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ground" } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "big-pecks" /* 부풀린가슴 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "big-pecks" /* 부풀린가슴 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "big-pecks" /* 부풀린가슴 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "big-pecks" /* 부풀린가슴 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ground" } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  }
  ],
  "starmie": /* 아쿠스타 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "analytic" /* 애널라이즈 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ }, { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "analytic" /* 애널라이즈 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "analytic" /* 애널라이즈 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "teleport" /* 순간이동 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "analytic" /* 애널라이즈 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ }, { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "analytic" /* 애널라이즈 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "teleport" /* 순간이동 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  }
  ],
  "azelf": /* 아그놈 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ }, { "slug": "energy-ball" /* 에너지볼 */ } ]
    ]
  }
  ],
  "nihilego": /* 텅비드 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "power-gem" /* 파워젬 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "power-gem" /* 파워젬 */ }, { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "power-gem" /* 파워젬 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "power-gem" /* 파워젬 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "power-gem" /* 파워젬 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ }, { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "power-gem" /* 파워젬 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "power-gem" /* 파워젬 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "power-gem" /* 파워젬 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "power-gem" /* 파워젬 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "power-herb" /* 파워풀허브 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "power-gem" /* 파워젬 */ }, { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "meteor-beam" /* 메테오빔 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "power-gem" /* 파워젬 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
  ],
  "salazzle": /* 염뉴트 */ [
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "corrosion" /* 부식 */,
    "moves": [
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "corrosion" /* 부식 */,
    "moves": [
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "corrosion" /* 부식 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "oblivious" /* 둔감 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ }, { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "corrosion" /* 부식 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "corrosion" /* 부식 */,
    "moves": [
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "corrosion" /* 부식 */,
    "moves": [
      [ { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "corrosion" /* 부식 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  }
  ],
  "steelix": /* 강철톤 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "curse" /* 저주 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "bewear": /* 이븐곰 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "fluffy" /* 복슬복슬 */,
    "moves": [
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "shadow-claw" /* 섀도크루 */ }, { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "facade" /* 객기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "fluffy" /* 복슬복슬 */,
    "moves": [
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "fluffy" /* 복슬복슬 */,
    "moves": [
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "bulk-up" /* 벌크업 */ }, { "slug": "swords-dance" /* 칼춤 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "chesto-berry" /* 유루열매 */,
    "ability": "fluffy" /* 복슬복슬 */,
    "moves": [
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "fluffy" /* 복슬복슬 */,
    "moves": [
      [ { "slug": "double-edge" /* 이판사판태클 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "fluffy" /* 복슬복슬 */,
    "moves": [
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "chople-berry" /* 로플열매 */,
    "ability": "fluffy" /* 복슬복슬 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ }, { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "double-edge" /* 이판사판태클 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "darkest-lariat" /* DD래리어트 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "fluffy" /* 복슬복슬 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "double-edge" /* 이판사판태클 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "darkest-lariat" /* DD래리어트 */ } ]
    ]
  }
  ],
  "cofagrigus": /* 데스니칸 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "mummy" /* 미라 */,
    "moves": [
      [ { "slug": "trick-room" /* 트릭룸 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "mummy" /* 미라 */,
    "moves": [
      [ { "slug": "trick-room" /* 트릭룸 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "memento" /* 추억의선물 */ }, { "slug": "destiny-bond" /* 길동무 */ } ]
    ]
  },
  ],
  "necrozma": /* 네크로즈마 */ [
  {
    "item": "iapapa-berry" /* 파야열매 */,
    "ability": "prism-armor" /* 프리즘아머 */,
    "moves": [
      [ { "slug": "photon-geyser" /* 포톤가이저 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "signal-beam" /* 시그널빔 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "prism-armor" /* 프리즘아머 */,
    "moves": [
      [ { "slug": "photon-geyser" /* 포톤가이저 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "signal-beam" /* 시그널빔 */ } ]
    ]
  },
  {
    "item": "twisted-spoon" /* 휘어진스푼 */,
    "ability": "prism-armor" /* 프리즘아머 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "photon-geyser" /* 포톤가이저 */ } ],
      [ { "slug": "moonlight" /* 달의불빛 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  },
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "prism-armor" /* 프리즘아머 */,
    "moves": [
      [ { "slug": "photon-geyser" /* 포톤가이저 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "x-scissor" /* 시저크로스 */ } ]
    ]
  },
  {
    "item": "power-herb" /* 파워풀허브 */,
    "ability": "prism-armor" /* 프리즘아머 */,
    "moves": [
      [ { "slug": "photon-geyser" /* 포톤가이저 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "meteor-beam" /* 메테오빔 */ } ],
      [ { "slug": "autotomize" /* 바디퍼지 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "prism-armor" /* 프리즘아머 */,
    "moves": [
      [ { "slug": "photon-geyser" /* 포톤가이저 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "moonlight" /* 달의불빛 */ } ]
    ]
  },
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "prism-armor" /* 프리즘아머 */,
    "moves": [
      [ { "slug": "photon-geyser" /* 포톤가이저 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "x-scissor" /* 시저크로스 */ } ]
    ]
  },
  {
    "item": "weakness-policy" /* 약점보험 */,
    "ability": "prism-armor" /* 프리즘아머 */,
    "moves": [
      [ { "slug": "photon-geyser" /* 포톤가이저 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "x-scissor" /* 시저크로스 */ } ]
    ]
  },
  {
    "item": "power-herb" /* 파워풀허브 */,
    "ability": "prism-armor" /* 프리즘아머 */,
    "moves": [
      [ { "slug": "photon-geyser" /* 포톤가이저 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "meteor-beam" /* 메테오빔 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  }
  ],
  "decidueye": /* 모크나이퍼 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "spirit-shackle" /* 그림자꿰매기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "spirit-shackle" /* 그림자꿰매기 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "spirit-shackle" /* 그림자꿰매기 */ } ],
      [ { "slug": "leaf-blade" /* 리프블레이드 */ }, { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "spirit-shackle" /* 그림자꿰매기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "long-reach" /* 원격 */,
    "moves": [
      [ { "slug": "leaf-blade" /* 리프블레이드 */ } ],
      [ { "slug": "poltergeist" /* 폴터가이스트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "spell-tag" /* 저주의부적 */,
    "ability": "long-reach" /* 원격 */,
    "moves": [
      [ { "slug": "leaf-blade" /* 리프블레이드 */ } ],
      [ { "slug": "poltergeist" /* 폴터가이스트 */ }, { "slug": "spirit-shackle" /* 그림자꿰매기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ]
    ]
  },
  {
    "item": "spell-tag" /* 저주의부적 */,
    "ability": "long-reach" /* 원격 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "spirit-shackle" /* 그림자꿰매기 */ }, { "slug": "poltergeist" /* 폴터가이스트 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "leaf-blade" /* 리프블레이드 */ } ]
    ]
  }
  ],
  "tsareena": /* 달코퀸 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "queenly-majesty" /* 여왕의위엄 */,
    "moves": [
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "queenly-majesty" /* 여왕의위엄 */,
    "moves": [
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "triple-axel" /* 트리플악셀 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "queenly-majesty" /* 여왕의위엄 */,
    "moves": [
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  ],
  "palossand": /* 모래성이당 */ [
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "water-compaction" /* 꾸덕꾸덕굳기 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "shore-up" /* 모래모으기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-compaction" /* 꾸덕꾸덕굳기 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "shore-up" /* 모래모으기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "water-compaction" /* 꾸덕꾸덕굳기 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "shore-up" /* 모래모으기 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "water-compaction" /* 꾸덕꾸덕굳기 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "shore-up" /* 모래모으기 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "water-compaction" /* 꾸덕꾸덕굳기 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "scorching-sands" /* 열사의대지 */ }, { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "shore-up" /* 모래모으기 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ }, { "slug": "sludge-bomb" /* 오물폭탄 */ } ]
    ]
  }
  ],
  "durant": /* 아이앤트 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "hustle" /* 의욕 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "x-scissor" /* 시저크로스 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "hustle" /* 의욕 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "x-scissor" /* 시저크로스 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  ],
  "gigalith": /* 기가이어스 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ }, { "slug": "toxic" /* 맹독 */ }, { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "rock-blast" /* 락블레스트 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "protect" /* 방어 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "golisopod": /* 갑주무사 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "emergency-exit" /* 위기회피 */,
    "moves": [
      [ { "slug": "first-impression" /* 만나자마자 */ } ],
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "leech-life" /* 흡혈 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ]
    ]
  }
  ],
  "passimian": /* 내던숭이 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "defiant" /* 오기 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "defiant" /* 오기 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ }, { "slug": "gunk-shot" /* 더스트슈트 */ } ]
    ]
  }
  ],
  "torkoal": /* 코터스 */ [
  {
    "item": "heat-rock" /* 뜨거운바위 */,
    "ability": "drought" /* 가뭄 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "lava-plume" /* 분연 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "heat-rock" /* 뜨거운바위 */,
    "ability": "drought" /* 가뭄 */,
    "moves": [
      [ { "slug": "lava-plume" /* 분연 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "yawn" /* 하품 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "tyrantrum": /* 견고라스 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "rock-head" /* 돌머리 */,
    "moves": [
      [ { "slug": "head-smash" /* 양날박치기 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "rock-head" /* 돌머리 */,
    "moves": [
      [ { "slug": "head-smash" /* 양날박치기 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ }, { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "scale-shot" /* 스케일샷 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "rock-head" /* 돌머리 */,
    "moves": [
      [ { "slug": "head-smash" /* 양날박치기 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "rock-head" /* 돌머리 */,
    "moves": [
      [ { "slug": "head-smash" /* 양날박치기 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ }, { "slug": "hone-claws" /* 손톱갈기 */ } ],
      [ { "slug": "scale-shot" /* 스케일샷 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "rock-head" /* 돌머리 */,
    "moves": [
      [ { "slug": "head-smash" /* 양날박치기 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "dragon-claw" /* 드래곤크루 */ }, { "slug": "scale-shot" /* 스케일샷 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ]
    ]
  }
  ],
  "vanilluxe": /* 배바닐라 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "snow-warning" /* 눈퍼뜨리기 */,
    "moves": [
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ground" } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "snow-warning" /* 눈퍼뜨리기 */,
    "moves": [
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ]
    ]
  }
  ],
  "vikavolt": /* 투구뿌논 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ }, { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  ],
  "comfey": /* 큐아링 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "triage" /* 힐링시프트 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "draining-kiss" /* 드레인키스 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  }
  ],
  "dhelmise": /* 타타륜 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "steelworker" /* 강철술사 */,
    "moves": [
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "anchor-shot" /* 앵커숏 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "steelworker" /* 강철술사 */,
    "moves": [
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "steelworker" /* 강철술사 */,
    "moves": [
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "anchor-shot" /* 앵커숏 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "steelworker" /* 강철술사 */,
    "moves": [
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "poltergeist" /* 폴터가이스트 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "steelworker" /* 강철술사 */,
    "moves": [
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "poltergeist" /* 폴터가이스트 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  }
  ],
  "guzzlord": /* 악식킹 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "steel" } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ }, { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  }
  ],
  "incineroar": /* 어흥염 */ [
  {
    "item": "iapapa-berry" /* 파야열매 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "figy-berry" /* 무화열매 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ }, { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "u-turn" /* 유턴 */ }, { "slug": "drain-punch" /* 드레인펀치 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "trailblaze" /* 개척하기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "parting-shot" /* 막말내뱉기 */ } ]
    ]
  }
  ],
  "togedemaru": /* 토게데마루 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "spiky-shield" /* 니들가드 */ } ],
      [ { "slug": "zing-zap" /* 찌리리따끔따끔 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "zing-zap" /* 찌리리따끔따끔 */ } ],
      [ { "slug": "nuzzle" /* 볼부비부비 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "zing-zap" /* 찌리리따끔따끔 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "nuzzle" /* 볼부비부비 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "zing-zap" /* 찌리리따끔따끔 */ }, { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "spiky-shield" /* 니들가드 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": ["lightning-rod" /* 피뢰침 */, "iron-barbs" /* 철가시 */],
    "moves": [
      [ { "slug": "zing-zap" /* 찌리리따끔따끔 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "spiky-shield" /* 니들가드 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "spiky-shield" /* 니들가드 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "bellossom": /* 아르코 */ [
  {
    "item": null,
    "ability": "chlorophyll" /* 엽록소 */,
    "moves": [
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "strength-sap" /* 힘흡수 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ }, { "slug": "safeguard" /* 신비의부적 */ } ]
    ]
  }
  ],
  "type-null": /* 타입:널 */ [
  {
    "item": null,
    "ability": "battle-armor" /* 전투무장 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ }, { "slug": "toxic" /* 맹독 */ }, { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ]
    ]
  }
  ],
  "cradily": /* 릴리요 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "storm-drain" /* 마중물 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "storm-drain" /* 마중물 */,
    "moves": [
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "storm-drain" /* 마중물 */,
    "moves": [
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "storm-drain" /* 마중물 */,
    "moves": [
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ }, { "slug": "mirror-coat" /* 미러코트 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "drampa": /* 할비롱 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ }, { "slug": "dragon-pulse" /* 용의파동 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": ["berserk" /* 발끈 */, "sap-sipper" /* 초식 */],
    "moves": [
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "berserk" /* 발끈 */,
    "moves": [
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  }
  ],
  "kecleon": /* 켈리몬 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ }, { "slug": "power-up-punch" /* 그로우펀치 */ } ]
    ]
  }
  ],
  "lurantis": /* 라란티스 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  }
  ],
  "throh": /* 던지미 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "guts" /* 근성 */,
    "moves": [
      [ { "slug": "circle-throw" /* 배대뒤치기 */ } ],
      [ { "slug": "bulk-up" /* 벌크업 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ]
    ]
  }
  ],
  "mudsdale": /* 만마드 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "stamina" /* 지구력 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "stamina" /* 지구력 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ }, { "slug": "protect" /* 방어 */ }, { "slug": "roar" /* 울부짖기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "stamina" /* 지구력 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "stamina" /* 지구력 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "stamina" /* 지구력 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ }, { "slug": "heavy-slam" /* 헤비봄버 */ }, { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "roar" /* 울부짖기 */ } ]
    ]
  }
  ],
  "toucannon": /* 왕큰부리 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "skill-link" /* 스킬링크 */,
    "moves": [
      [ { "slug": "boomburst" /* 폭음파 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "bullet-seed" /* 기관총 */ } ]
    ]
  }
  ],
  "turtonator": /* 폭거북스 */ [
  {
    "item": "white-herb" /* 하양허브 */,
    "ability": "shell-armor" /* 조가비갑옷 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "dragon-pulse" /* 용의파동 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  }
  ],
  "victreebel": /* 우츠보트 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "chlorophyll" /* 엽록소 */,
    "moves": [
      [ { "slug": "sunny-day" /* 쾌청 */ } ],
      [ { "slug": "solar-beam" /* 솔라빔 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "weather-ball" /* 웨더볼 */ } ]
    ]
  }
  ],
  "crabominable": /* 모단단게 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "ice-hammer" /* 아이스해머 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "pursuit" /* 따라가때리기 */ } ]
    ]
  }
  ],
  "xurkitree": /* 전수목 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ice" } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ }, { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ]
    ]
  }
  ],
  "shedinja": /* 껍질몬 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "wonder-guard" /* 불가사의부적 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  }
  ],
  "lapras": /* 라프라스 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ }, { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  }
  ],
  "walrein": /* 씨카이저 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "signal-beam" /* 시그널빔 */ } ],
      [ { "slug": "frost-breath" /* 얼음숨결 */ }, { "slug": "ice-beam" /* 냉동빔 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "beartic": /* 툰베어 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "slush-rush" /* 눈치우기 */,
    "moves": [
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ]
    ]
  }
  ],
  "zarude": /* 자루도 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "leaf-guard" /* 리프가드 */,
    "moves": [
      [ { "slug": "darkest-lariat" /* DD래리어트 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ }, { "slug": "jungle-healing" /* 정글힐 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "leaf-guard" /* 리프가드 */,
    "moves": [
      [ { "slug": "darkest-lariat" /* DD래리어트 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "leaf-guard" /* 리프가드 */,
    "moves": [
      [ { "slug": "darkest-lariat" /* DD래리어트 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "jungle-healing" /* 정글힐 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "leaf-guard" /* 리프가드 */,
    "moves": [
      [ { "slug": "darkest-lariat" /* DD래리어트 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "leaf-guard" /* 리프가드 */,
    "moves": [
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "jungle-healing" /* 정글힐 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "leaf-guard" /* 리프가드 */,
    "moves": [
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ }, { "slug": "jungle-healing" /* 정글힐 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "leaf-guard" /* 리프가드 */,
    "moves": [
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ]
    ]
  }
  ],
  "melmetal": /* 멜메탈 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "double-iron-bash" /* 더블펀처 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "double-iron-bash" /* 더블펀처 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ }, { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "double-iron-bash" /* 더블펀처 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ } ]
    ]
  }
  ],
  "dragapult": /* 드래펄트 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "thunder" /* 번개 */ }, { "slug": "hydro-pump" /* 하이드로펌프 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "dragon-darts" /* 드래곤애로 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "phantom-force" /* 고스트다이브 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "dragon-darts" /* 드래곤애로 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "dragon-darts" /* 드래곤애로 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "phantom-force" /* 고스트다이브 */ }, { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  }
  ],
  "corviknight": /* 아머까오 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "body-press" /* 바디프레스 */ }, { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ } ]
    ]
  }
  ],
  "rillaboom": /* 고릴타 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "grassy-surge" /* 그래스메이커 */,
    "moves": [
      [ { "slug": "grassy-glide" /* 그래스슬라이더 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "grassy-surge" /* 그래스메이커 */,
    "moves": [
      [ { "slug": "grassy-glide" /* 그래스슬라이더 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "wood-hammer" /* 우드해머 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "grassy-surge" /* 그래스메이커 */,
    "moves": [
      [ { "slug": "grassy-glide" /* 그래스슬라이더 */ } ],
      [ { "slug": "wood-hammer" /* 우드해머 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "grassy-surge" /* 그래스메이커 */,
    "moves": [
      [ { "slug": "grassy-glide" /* 그래스슬라이더 */ } ],
      [ { "slug": "low-kick" /* 안다리걸기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "grassy-surge" /* 그래스메이커 */,
    "moves": [
      [ { "slug": "grassy-glide" /* 그래스슬라이더 */ } ],
      [ { "slug": "wood-hammer" /* 우드해머 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
  ],
  "hatterene": /* 브리무음 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-bounce" /* 매직미러 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "draining-kiss" /* 드레인키스 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ }, { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "mystical-fire" /* 매지컬플레임 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-bounce" /* 매직미러 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "draining-kiss" /* 드레인키스 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ }, { "slug": "stored-power" /* 어시스트파워 */ } ],
      [ { "slug": "mystical-fire" /* 매지컬플레임 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-bounce" /* 매직미러 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "draining-kiss" /* 드레인키스 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ }, { "slug": "stored-power" /* 어시스트파워 */ } ],
      [ { "slug": "nuzzle" /* 볼부비부비 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "magic-bounce" /* 매직미러 */,
    "moves": [
      [ { "slug": "mystical-fire" /* 매지컬플레임 */ } ],
      [ { "slug": "draining-kiss" /* 드레인키스 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "nuzzle" /* 볼부비부비 */ } ]
    ]
  }
  ],
  "polteageist": /* 포트데스 */ [
  {
    "item": "white-herb" /* 하양허브 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "strength-sap" /* 힘흡수 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ }, { "slug": "stored-power" /* 어시스트파워 */ } ]
    ]
  }
  ],
  "grimmsnarl": /* 오롱털 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "darkest-lariat" /* DD래리어트 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "frisk" /* 통찰 */,
    "moves": [
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "darkest-lariat" /* DD래리어트 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "frisk" /* 통찰 */,
    "moves": [
      [ { "slug": "superpower" /* 엄청난힘 */ }, { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "darkest-lariat" /* DD래리어트 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "parting-shot" /* 막말내뱉기 */ } ],
      [ { "slug": "spirit-break" /* 소울크래시 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "spirit-break" /* 소울크래시 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  }
  ],
  "regidrago": /* 레지드래고 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "dragons-maw" /* 용의턱 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "thunder-fang" /* 번개엄니 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  }
  ],
  "copperajah": /* 대왕끼리동 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ }, { "slug": "heat-crash" /* 히트스탬프 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  ],
  "inteleon": /* 인텔리레온 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ }, { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ]
    ]
  }
  ],
  "sandaconda": /* 사다이사 */ [
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "shed-skin" /* 탈피 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "glare" /* 뱀눈초리 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "shed-skin" /* 탈피 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "coil" /* 똬리틀기 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "shed-skin" /* 탈피 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "glare" /* 뱀눈초리 */ }, { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ]
    ]
  }
  ],
  "eldegoss": /* 백솜모카 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "grass-knot" /* 풀묶기 */ }, { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "aromatherapy" /* 아로마테라피 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ }, { "slug": "charm" /* 애교부리기 */ }, { "slug": "sleep-powder" /* 수면가루 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "grass-knot" /* 풀묶기 */ }, { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "grass-knot" /* 풀묶기 */ }, { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ }, { "slug": "aromatherapy" /* 아로마테라피 */ } ],
      [ { "slug": "pollen-puff" /* 꽃가루경단 */ }, { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "grass-knot" /* 풀묶기 */ }, { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "aromatherapy" /* 아로마테라피 */ } ]
    ]
  }
  ],
  "perrserker": /* 나이킹 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "steely-spirit" /* 강철정신 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "seed-bomb" /* 씨폭탄 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "steely-spirit" /* 강철정신 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "seed-bomb" /* 씨폭탄 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "tough-claws" /* 단단한발톱 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "seed-bomb" /* 씨폭탄 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "double-edge" /* 이판사판태클 */ } ]
    ]
  }
  ],
  "trevenant": /* 대로트 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "poltergeist" /* 폴터가이스트 */ } ],
      [ { "slug": "wood-hammer" /* 우드해머 */ } ],
      [ { "slug": "horn-leech" /* 우드호른 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "trick" /* 트릭 */ } ]
    ]
  }
  ],
  "centiskorch": /* 다태우지네 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "fire-lash" /* 불꽃채찍 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "leech-life" /* 흡혈 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
  ],
  "frosmoth": /* 모스노우 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "ice-scales" /* 얼음인분 */,
    "moves": [
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "ice-scales" /* 얼음인분 */,
    "moves": [
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ }, { "slug": "bug-buzz" /* 벌레의야단법석 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "ice-scales" /* 얼음인분 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ }, { "slug": "stun-spore" /* 저리가루 */ } ]
    ]
  }
  ],
  "cinccino": /* 치라치노 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "skill-link" /* 스킬링크 */,
    "moves": [
      [ { "slug": "tail-slap" /* 스위프뺨치기 */ } ],
      [ { "slug": "triple-axel" /* 트리플악셀 */ }, { "slug": "bullet-seed" /* 기관총 */ }, { "slug": "rock-blast" /* 락블레스트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "loaded-dice" /* 속임수주사위 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "tidy-up" /* 정리정돈 */ } ],
      [ { "slug": "tail-slap" /* 스위프뺨치기 */ } ],
      [ { "slug": "bullet-seed" /* 기관총 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "rock-blast" /* 락블레스트 */ }, { "slug": "triple-axel" /* 트리플악셀 */ } ]
    ]
  }
  ],
  "coalossal": /* 석탄산 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "rock-blast" /* 락블레스트 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "spikes" /* 압정뿌리기 */ } ]
    ]
  }
  ],
  "arctovish": /* 어치르돈 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "fishious-rend" /* 아가미물기 */ } ],
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "psychic-fangs" /* 사이코팽 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ]
    ]
  }
  ],
  "glastrier": /* 블리자포스 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "chilling-neigh" /* 백의울음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "chilling-neigh" /* 백의울음 */,
    "moves": [
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "high-horsepower" /* 10만마력 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  }
  ],
  "ting-lu": /* 딩루 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "vessel-of-ruin" /* 재앙의그릇 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ruination" /* 카타스트로피 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ }, { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "vessel-of-ruin" /* 재앙의그릇 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ruination" /* 카타스트로피 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "vessel-of-ruin" /* 재앙의그릇 */,
    "moves": [
      [ { "slug": "spikes" /* 압정뿌리기 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ } ],
      [ { "slug": "ruination" /* 카타스트로피 */ } ]
    ]
  }
  ],
  "chien-pao": /* 파오젠 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sword-of-ruin" /* 재앙의검 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ }, { "slug": "ice-shard" /* 얼음뭉치 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sword-of-ruin" /* 재앙의검 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "sword-of-ruin" /* 재앙의검 */,
    "moves": [
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ }, { "slug": "ice-spinner" /* 아이스스피너 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ]
    ]
  }
  ],
  "glimmora": /* 킬라플로르 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "toxic-debris" /* 독치장 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "mortal-spin" /* 킬러스핀 */ } ],
      [ { "slug": "mud-shot" /* 머드숏 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ]
    ]
  }
  ],
  "iron-bundle": /* 무쇠보따리 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  }
  ],
  "kingambit": /* 대도각참 */ [
  {
    "item": "black-glasses" /* 검은안경 */,
    "ability": "supreme-overlord" /* 총대장 */,
    "moves": [
      [ { "slug": "kowtow-cleave" /* 도각참 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "supreme-overlord" /* 총대장 */,
    "moves": [
      [ { "slug": "kowtow-cleave" /* 도각참 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  },
  {
    "item": "black-glasses" /* 검은안경 */,
    "ability": "supreme-overlord" /* 총대장 */,
    "moves": [
      [ { "slug": "kowtow-cleave" /* 도각참 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ }, { "slug": "low-kick" /* 안다리걸기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "supreme-overlord" /* 총대장 */,
    "moves": [
      [ { "slug": "low-kick" /* 안다리걸기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ }, { "slug": "kowtow-cleave" /* 도각참 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "supreme-overlord" /* 총대장 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "kowtow-cleave" /* 도각참 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "supreme-overlord" /* 총대장 */,
    "moves": [
      [ { "slug": "kowtow-cleave" /* 도각참 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  }
  ],
  "flutter-mane": /* 날개치는머리 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ }, { "slug": "mystical-fire" /* 매지컬플레임 */ } ],
      [ { "slug": "power-gem" /* 파워젬 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ }, { "slug": "mystical-fire" /* 매지컬플레임 */ }, { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "power-gem" /* 파워젬 */ } ]
    ]
  }
  ],
  "skeledirge": /* 라우드본 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "torch-song" /* 플레어송 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "torch-song" /* 플레어송 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ]
    ]
  }
  ],
  "gholdengo": /* 타부자고 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "good-as-gold" /* 황금몸 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "make-it-rain" /* 골드러시 */ } ],
      [ { "slug": "recover" /* HP회복 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "good-as-gold" /* 황금몸 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "make-it-rain" /* 골드러시 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "good-as-gold" /* 황금몸 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "make-it-rain" /* 골드러시 */ }, { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "good-as-gold" /* 황금몸 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "make-it-rain" /* 골드러시 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "good-as-gold" /* 황금몸 */,
    "moves": [
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "make-it-rain" /* 골드러시 */ }, { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "good-as-gold" /* 황금몸 */,
    "moves": [
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "make-it-rain" /* 골드러시 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "good-as-gold" /* 황금몸 */,
    "moves": [
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "make-it-rain" /* 골드러시 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "good-as-gold" /* 황금몸 */,
    "moves": [
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "make-it-rain" /* 골드러시 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ }, { "slug": "recover" /* HP회복 */ } ]
    ]
  }
  ],
  "great-tusk": /* 위대한엄니 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "headlong-rush" /* 들이받기 */ } ],
      [ { "slug": "ice-spinner" /* 아이스스피너 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "close-combat" /* 인파이트 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "headlong-rush" /* 들이받기 */ } ],
      [ { "slug": "ice-spinner" /* 아이스스피너 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  ],
  "iron-moth": /* 무쇠독나방 */ [
  {
    "item": null,
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "fiery-dance" /* 불꽃춤 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "fiery-dance" /* 불꽃춤 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ }, { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "fiery-dance" /* 불꽃춤 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ }, { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "fiery-dance" /* 불꽃춤 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ }, { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ]
    ]
  }
  ],
  "iron-valiant": /* 무쇠무인 */ [
  {
    "item": null,
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "spirit-break" /* 소울크래시 */ }, { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "destiny-bond" /* 길동무 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "destiny-bond" /* 길동무 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ]
    ]
  }
  ],
  "raging-bolt": /* 날뛰는우레 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "thunderclap" /* 질풍신뢰 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "dragon-pulse" /* 용의파동 */ }, { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "thunderclap" /* 질풍신뢰 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  }
  ],
  "cinderace": /* 에이스번 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "pyro-ball" /* 화염볼 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "court-change" /* 코트체인지 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "libero" /* 리베로 */,
    "moves": [
      [ { "slug": "pyro-ball" /* 화염볼 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "court-change" /* 코트체인지 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ }, { "slug": "gunk-shot" /* 더스트슈트 */ } ]
    ]
  }
  ],
  "garganacl": /* 콜로솔트 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "purifying-salt" /* 정화의소금 */,
    "moves": [
      [ { "slug": "salt-cure" /* 소금절이 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "curse" /* 저주 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "purifying-salt" /* 정화의소금 */,
    "moves": [
      [ { "slug": "salt-cure" /* 소금절이 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  }
  ],
  "iron-crown": /* 무쇠감투 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "tachyon-cutter" /* 타키온커터 */ } ],
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "tachyon-cutter" /* 타키온커터 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ }, { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  }
  ],
  "roaring-moon": /* 고동치는달 */ [
  {
    "item": null,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": null,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "acrobatics" /* 애크러뱃 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  }
  ],
  "ogerpon": /* 오거폰 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "defiant" /* 오기 */,
    "moves": [
      [ { "slug": "ivy-cudgel" /* 덩굴방망이 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "defiant" /* 오기 */,
    "moves": [
      [ { "slug": "ivy-cudgel" /* 덩굴방망이 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ }, { "slug": "encore" /* 앵콜 */ }, { "slug": "stomping-tantrum" /* 분함의발구르기 */ } ]
    ]
  }
  ],
  "sinistcha": /* 그우린차 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "heatproof" /* 내열 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "matcha-gotcha" /* 휘적휘적포 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "strength-sap" /* 힘흡수 */ } ]
    ]
  }
  ],
  "tinkaton": /* 두드리짱 */ [
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": ["pickpocket" /* 나쁜손버릇 */, "mold-breaker" /* 틀깨기 */],
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "gigaton-hammer" /* 거대해머 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
  ],
  "clodsire": /* 토오 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  }
  ],
  "dondozo": /* 어써러셔 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "curse" /* 저주 */ }, { "slug": "avalanche" /* 눈사태 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "avalanche" /* 눈사태 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "curse" /* 저주 */ } ]
    ]
  }
  ],
  "hydrapple": /* 과미드라 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "fickle-beam" /* 변덕레이저 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "fickle-beam" /* 변덕레이저 */ }, { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "fickle-beam" /* 변덕레이저 */ }, { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  }
  ],
  "ursaluna": /* 다투곰 */ [
  {
    "item": "flame-orb" /* 화염구슬 */,
    "ability": "guts" /* 근성 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "facade" /* 객기 */ } ],
      [ { "slug": "headlong-rush" /* 들이받기 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ }, { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  }
  ],
  "lokix": /* 엑스레그 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "tinted-lens" /* 색안경 */,
    "moves": [
      [ { "slug": "first-impression" /* 만나자마자 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "leech-life" /* 흡혈 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "tinted-lens" /* 색안경 */,
    "moves": [
      [ { "slug": "first-impression" /* 만나자마자 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  },
  {
    "item": "black-glasses" /* 검은안경 */,
    "ability": "tinted-lens" /* 색안경 */,
    "moves": [
      [ { "slug": "first-impression" /* 만나자마자 */ }, { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  }
  ],
  "meowscarada": /* 마스카나 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "flower-trick" /* 트릭플라워 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "triple-axel" /* 트리플악셀 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  }
  ],
  "pecharunt": /* 복숭악동 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "poison-puppeteer" /* 독조종 */,
    "moves": [
      [ { "slug": "malignant-chain" /* 악독사슬 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "parting-shot" /* 막말내뱉기 */ } ]
    ]
  }
  ],
  "slither-wing": /* 땅을기는날개 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "first-impression" /* 만나자마자 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ }, { "slug": "stun-spore" /* 저리가루 */ } ],
      [ { "slug": "morning-sun" /* 아침햇살 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "first-impression" /* 만나자마자 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "morning-sun" /* 아침햇살 */ }, { "slug": "will-o-wisp" /* 도깨비불 */ }, { "slug": "stun-spore" /* 저리가루 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "first-impression" /* 만나자마자 */ }, { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "morning-sun" /* 아침햇살 */ } ]
    ]
  }
  ],
  "okidogi": /* 조타구 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": ["guard-dog" /* 파수견 */, "toxic-chain" /* 독사슬 */],
    "moves": [
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "guard-dog" /* 파수견 */,
    "moves": [
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  }
  ],
  "quaquaval": /* 웨이니발 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "aqua-step" /* 아쿠아스텝 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "triple-axel" /* 트리플악셀 */ } ]
    ]
  }
  ],
  "revavroom": /* 부르르룸 */ [
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "filter" /* 필터 */,
    "moves": [
      [ { "slug": "shift-gear" /* 기어체인지 */ } ],
      [ { "slug": "temper-flare" /* 열불내기 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "high-horsepower" /* 10만마력 */ } ]
    ]
  }
  ],
  "sandy-shocks": /* 모래털가죽 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  }
  ],
  "fezandipiti": /* 기로치 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "toxic-chain" /* 독사슬 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "beat-up" /* 집단구타 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "toxic-chain" /* 독사슬 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "toxic-chain" /* 독사슬 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  }
  ],
  "armarouge": /* 카디나르마 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "weak-armor" /* 깨어진갑옷 */,
    "moves": [
      [ { "slug": "armor-cannon" /* 아머캐논 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
    ]
  },
  {
    "item": "weakness-policy" /* 약점보험 */,
    "ability": "weak-armor" /* 깨어진갑옷 */,
    "moves": [
      [ { "slug": "armor-cannon" /* 아머캐논 */ } ],
      [ { "slug": "stored-power" /* 어시스트파워 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ }, { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "endure" /* 버티기 */ } ]
    ]
  }
  ],
  "cyclizar": /* 모토마 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "dragon-tail" /* 드래곤테일 */ }, { "slug": "facade" /* 객기 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "double-edge" /* 이판사판태클 */ } ]
    ]
  }
  ],
  "wo-chien": /* 총지엔 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "tablets-of-ruin" /* 재앙의목간 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ }, { "slug": "ruination" /* 카타스트로피 */ } ]
    ]
  }
  ],
  "kleavor": /* 사마자르 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "sharpness" /* 예리함 */,
    "moves": [
      [ { "slug": "stone-axe" /* 암석액스 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "x-scissor" /* 시저크로스 */ } ]
    ]
  }
  ],
  "kilowattrel": /* 찌리비크 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  }
  ],
  "overqwil": /* 장침바루 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "barb-barrage" /* 독침천발 */ } ],
      [ { "slug": "throat-chop" /* 지옥찌르기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "haze" /* 흑안개 */ }, { "slug": "pain-split" /* 아픔나누기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "throat-chop" /* 지옥찌르기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "haze" /* 흑안개 */ }, { "slug": "pain-split" /* 아픔나누기 */ } ]
    ]
  },
  {
    "item": "loaded-dice" /* 속임수주사위 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "throat-chop" /* 지옥찌르기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "scale-shot" /* 스케일샷 */ } ]
    ]
  }
  ],
  "munkidori": /* 이야후 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "toxic-chain" /* 독사슬 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ }, { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "toxic-chain" /* 독사슬 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ }, { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "toxic-chain" /* 독사슬 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ }, { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "toxic-chain" /* 독사슬 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ }, { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "toxic-chain" /* 독사슬 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ }, { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  }
  ],
  "brambleghast": /* 공푸리 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "wind-rider" /* 바람타기 */,
    "moves": [
      [ { "slug": "poltergeist" /* 폴터가이스트 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "strength-sap" /* 힘흡수 */ }, { "slug": "spikes" /* 압정뿌리기 */ }, { "slug": "shadow-sneak" /* 야습 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "wind-rider" /* 바람타기 */,
    "moves": [
      [ { "slug": "poltergeist" /* 폴터가이스트 */ }, { "slug": "power-whip" /* 파워휩 */ }, { "slug": "night-shade" /* 나이트헤드 */ } ],
      [ { "slug": "infestation" /* 엉겨붙기 */ }, { "slug": "spikes" /* 압정뿌리기 */ }, { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "strength-sap" /* 힘흡수 */ } ]
    ]
  }
  ],
  "orthworm": /* 꿈트렁 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "earth-eater" /* 흙먹기 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ }, { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "earth-eater" /* 흙먹기 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ]
    ]
  }
  ],
  "scream-tail": /* 우렁찬꼬리 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "boomburst" /* 폭음파 */ } ],
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ }, { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ]
    ]
  }
  ],
  "bombirdier": /* 떨구새 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "big-pecks" /* 부풀린가슴 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  }
  ],
  "bellibolt": /* 찌리배리 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "static" /* 정전기 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "muddy-water" /* 탁류 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "pawmot": /* 빠르모트 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": ["volt-absorb" /* 축전 */, "natural-cure" /* 자연회복 */],
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "double-shock" /* 전광쌍격 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "double-shock" /* 전광쌍격 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ]
    ]
  }
  ],
  "bruxish": /* 치갈기 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "strong-jaw" /* 옹골찬턱 */,
    "moves": [
      [ { "slug": "psychic-fangs" /* 사이코팽 */ } ],
      [ { "slug": "wave-crash" /* 웨이브태클 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ }, { "slug": "ice-fang" /* 얼음엄니 */ }, { "slug": "aqua-jet" /* 아쿠아제트 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "strong-jaw" /* 옹골찬턱 */,
    "moves": [
      [ { "slug": "psychic-fangs" /* 사이코팽 */ } ],
      [ { "slug": "wave-crash" /* 웨이브태클 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "dazzling" /* 비비드바디 */,
    "moves": [
      [ { "slug": "psychic-fangs" /* 사이코팽 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "wave-crash" /* 웨이브태클 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ]
    ]
  }
  ],
  "cramorant": /* 윽우지 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "gulp-missile" /* 그대로꿀꺽미사일 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ]
    ]
  }
  ],
  "ambipom": /* 겟핸보숭 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "fake-out" /* 속이다 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "triple-axel" /* 트리플악셀 */ } ]
    ]
  }
  ]
};

export default SPECIES_FACTORY_SETS;
