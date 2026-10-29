// 실제 배틀 팩토리 세트(도구/특성/기술) 모음. 종족 슬러그(PokeAPI 이름)를 키로 하고,
// 그 종이 실전에서 쓸 수 있는 세트들의 배열을 값으로 가집니다. 각 세트를 뽑는 로직은
// randompokemon.js의 pickFactorySet/resolveFactoryMoveSlugs를 참고하세요.
// 슬러그 옆 /* 한글 */ 주석은 참고용이며 게임 로직에는 쓰이지 않습니다.
// 세트에 "opening": "기술 슬러그"를 적으면, 상대(컴퓨터)가 그 포켓몬을 내보낸 첫 턴에 그 기술을 먼저 씁니다
// (예: 기합의띠 파르셀이 나오자마자 껍질깨기). 그 기술은 세트의 기술 칸에 있어야 합니다.
// eslint-disable-next-line import/no-anonymous-default-export
const SPECIES_FACTORY_SETS = {
  "klefki": /* 클레피 */ [ // [확인] 세트 13개 (5개 초과)
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
      [ { "slug": "reflect" /* 리플렉터 */ } ],
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
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ]
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
  "tyranitar": /* 마기라스 */ /* 메가진화 가능: 메가마기라스 */ [ // [확인] 세트 21개 (5개 초과)
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "roar" /* 울부짖기 */ } ]
    ]
  },
  {
    "item": "shuca-berry" /* 슈캐열매 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "roar" /* 울부짖기 */ } ]
    ]
  },
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
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ }, { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ }, { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": "chople-berry" /* 로플열매 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "rock-tomb" /* 암석봉인 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "rest" /* 잠자기 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "fire-blast" /* 불대문자 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ]
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
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ }, { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ }, { "slug": "ice-beam" /* 냉동빔 */ } ]
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
  },
  /* 메가진화 세트: 메가마기라스 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "tyranitarite" /* 마기라스나이트 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  }
  ,
  {
    "item": "tyranitarite" /* 마기라스나이트 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
    ]
  }
  ],
  "salamence": /* 보만다 */ /* 메가진화 가능: 메가보만다 */ [ // [확인] 세트 8개 (5개 초과)
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
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "dual-wingbeat" /* 더블윙 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ }, { "slug": "temper-flare" /* 열불내기 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": ["intimidate" /* 위협 */, "moxie" /* 자기과신 */],
    "moves": [
      [ { "slug": "dragon-claw" /* 드래곤크루 */ } ],
      [ { "slug": "dual-wingbeat" /* 더블윙 */ }, { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": ["intimidate" /* 위협 */, "moxie" /* 자기과신 */],
    "moves": [
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "dual-wingbeat" /* 더블윙 */ }, { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  },
  /* 메가진화 세트: 메가보만다 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "salamencite" /* 보만다나이트 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "double-edge" /* 이판사판태클 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  }
  ],
  "sableye": /* 깜까미 */ /* 메가진화 가능: 메가깜까미 */ [
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
      [ { "slug": "foul-play" /* 속임수 */ } ]
    ]
  },
  /* 메가진화 세트: 메가깜까미 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "sablenite" /* 깜까미나이트 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "snarl" /* 바크아웃 */ } ]
    ]
  },
  ],
  "mawile": /* 입치트 */ /* 메가진화 가능: 메가입치트 */ [
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
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  },
  /* 메가진화 세트: 메가입치트 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "mawilite" /* 입치트나이트 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  }
  ],
  "lucario": /* 루카리오 */ /* 메가진화 가능: 메가루카리오, 메가루카리오Z */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ }, { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
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
    "ability": "inner-focus" /* 정신력 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "vacuum-wave" /* 진공파 */ }, { "slug": "dark-pulse" /* 악의파동 */ } ]
    ]
  },
  /* 메가진화 세트: 메가루카리오 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "lucarionite" /* 루카리오나이트 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "meteor-mash" /* 코멧펀치 */ } ],
    ]
  },
  /* 메가진화 세트: 메가루카리오Z (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "lucarionite-z" /* 루카리오나이트Z */,
    "ability": "steadfast" /* 불굴의마음 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "vacuum-wave" /* 진공파 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ]
    ]
  }
  ],
  "latios": /* 라티오스 */ /* 메가진화 가능: 메가라티오스 */ [ // [확인] 세트 10개 (5개 초과)
  {
    "item": "soul-dew" /* 마음의물방울 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ }, { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
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
      [ { "slug": "flip-turn" /* 퀵턴 */ },{ "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  /* 메가진화 세트: 메가라티오스 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "latiosite" /* 라티오스나이트 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  }
  ],
  "latias": /* 라티아스 */ /* 메가진화 가능: 메가라티아스 */ [
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
  /* 메가진화 세트: 메가라티아스 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "latiasite" /* 라티아스나이트 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */ }, { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  }
  ],
  "kangaskhan": /* 캥카 */ /* 메가진화 가능: 메가캥카 */ [
  /* 메가진화 세트: 메가캥카 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "kangaskhanite" /* 캥카나이트 */,
    "ability": "scrappy" /* 배짱 */,
    "moves": [
      [ { "slug": "fake-out" /* 속이기 */ } ],
      [ { "slug": "double-edge" /* 이판사판태클 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "fire-punch" /* 불꽃펀치 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "kangaskhanite" /* 캥카나이트 */,
    "ability": "scrappy" /* 배짱 */,
    "moves": [
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "double-edge" /* 이판사판태클 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  }
  ],
  "greninja": /* 개굴닌자 */ /* 메가진화 가능: 메가개굴닌자 */ [ // [확인] 세트 12개 (5개 초과)
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
    "item": "choice-specs" /* 구애안경 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "surf" /* 파도타기 */ }, { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ]
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
  },
  /* 메가진화 세트: 메가개굴닌자 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "greninjite" /* 개굴닌자나이트 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "water-shuriken" /* 물수리검 */ } ]  ]
  },
  {
    "item": "greninjite" /* 개굴닌자나이트 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "water-shuriken" /* 물수리검 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ]
    ]
  },
  {
    "item": "greninjite" /* 개굴닌자나이트 */,
    "ability": "protean" /* 변환자재 */,
    "moves": [
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "surf" /* 파도타기 */ } ]
    ]
  }
  ],
  "gengar": /* 팬텀 */ /* 메가진화 가능: 메가팬텀 */ [ // [확인] 세트 10개 (5개 초과)
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
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
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ]
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
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ }, { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "destiny-bond" /* 길동무 */ } ]
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
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  /* 메가진화 세트: 메가팬텀 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "gengarite" /* 팬텀나이트 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
    ]
  },
  {
    "item": "gengarite" /* 팬텀나이트 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "perish-song" /* 멸망의노래 */ } ]
    ]
  },
  {
    "item": "gengarite" /* 팬텀나이트 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "destiny-bond" /* 길동무 */ } ]
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
  "ferrothorn": /* 너트령 */ [ // [확인] 세트 10개 (5개 초과)
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
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
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
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
      [ { "slug": "curse" /* 저주 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "gyro-ball" /* 자이로볼 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "iron-barbs" /* 철가시 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ]
    ]
  }
  ],
  "excadrill": /* 몰드류 */ /* 메가진화 가능: 메가몰드류 */ [ // [확인] 세트 8개 (5개 초과)
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
      [ { "slug": "rock-tomb" /* 암석봉인 */ } ]
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
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  /* 메가진화 세트: 메가몰드류 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "excadrite" /* 몰드류나이트 */,
    "ability": "sand-rush" /* 모래헤치기 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
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
      [ { "slug": "wish" /* 희망사항 */ } ],
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
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "teleport" /* 순간이동 */ } ],
      [ { "slug": "seismic-toss" /* 지구던지기 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  }
  ],
  "blaziken": /* 번치코 */ /* 메가진화 가능: 메가번치코 */ [
  {
    "item": "focus-sash" /* 기합의띠 */, 
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
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의 띠 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  /* 메가진화 세트: 메가번치코 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "blazikenite" /* 번치코나이트 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  }
  ],
  "scizor": /* 핫삼 */ /* 메가진화 가능: 메가핫삼 */ [ // [확인] 세트 8개 (5개 초과)
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
      [ { "slug": "pursuit" /* 따라가때리기 */ } ]
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
  /* 메가진화 세트: 메가핫삼 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "scizorite" /* 핫삼나이트 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  }
  ],
  "diancie": /* 디안시 */ /* 메가진화 가능: 메가디안시 */ [ // [확인] 세트 11개 (5개 초과)
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
    "item": "weakness-policy" /* 약점보험 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "trick-room" /* 트릭룸 */ } ],
      [ { "slug": "diamond-storm" /* 다이아스톰 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ } ]
    ]
  },//여기부터
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "diamond-storm" /* 다이아스톰 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
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
  },
  /* 메가진화 세트: 메가디안시 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "diancite" /* 디안시나이트 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "diamond-storm" /* 다이아스톰 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ } ]
    ]
  },
  {
    "item": "diancite" /* 디안시나이트 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "diamond-storm" /* 다이아스톰 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "rock-polish" /* 록커트 */ } ]
    ]
  }
  ],
  "hippowdon": /* 하마돈 */ [
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "slack-off" /* 태만함 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "yawn" /* 하품 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "whirlwind" /* 날려버리기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "yawn" /* 하품 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "slack-off" /* 태만함 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "yawn" /* 하품 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "yawn" /* 하품 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ]
    ]
  }
  ],
  "jirachi": /* 지라치 */ [ // [확인] 세트 10개 (5개 초과)
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
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "healing-wish" /* 치유소원 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
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
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
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
  }
  ],
  "celebi": /* 세레비 */ [ // [확인] 세트 10개 (5개 초과)
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
  "weavile": /* 포푸니라 */ [ //테스트용  // [확인] 세트 11개 (5개 초과)
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ]
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
      [ { "slug": "low-kick" /* 안다리걸기 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ]
    ]
  },
  {
    "item": "focus-sash" ,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ]
    ]
  },
  {
    "item": "focus-sash" ,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "triple-axel" /* 트리플악셀 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "focus-sash",
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
  "victini": /* 비크티니 */ [ // [확인] 세트 11개 (5개 초과)
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
  }
  ],
  "togekiss": /* 토게키스 */ [ // [확인] 세트 14개 (5개 초과)
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
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
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
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  }
  ],
  "staraptor": /* 찌르호크 */ /* 메가진화 가능: 메가찌르호크 */ [
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
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "close-combat" /* 인파이트 */ } ]
    ]
  },
  /* 메가진화 세트: 메가찌르호크 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "staraptite" /* 찌르호크나이트 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ },  { "slug": "blaze-kick" /* 블레이즈킥 */ }, { "slug": "facade" /* 객기 */ } ]
    ] 
  }
  ],
  "scolipede": /* 펜드라 */ /* 메가진화 가능: 메가펜드라 */ [ // [확인] 세트 8개 (5개 초과)
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
      [ { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  /* 메가진화 세트: 메가펜드라 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "scolipite" /* 펜드라나이트 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "megahorn" /* 메가혼 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "scolipite" /* 펜드라나이트 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "leech-life" /* 흡혈 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  ],
  "medicham": /* 요가램 */ /* 메가진화 가능: 메가요가램 */ [ // [확인] 세트 6개 (5개 초과)
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
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "pure-power" /* 순수한힘 */,
    "moves": [
      [ { "slug": "thunder-punch" /* 번개펀치 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ]
    ]
  },
  /* 메가진화 세트: 메가요가램 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "medichamite" /* 요가램나이트 */,
    "ability": "pure-power" /* 순수한힘 */,
    "moves": [
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ }, { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "fake-out" /* 속이다 */ } ]
    ]
  },
  {
    "item": "medichamite" /* 요가램나이트 */,
    "ability": "pure-power" /* 순수한힘 */,
    "moves": [
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ]
    ]
  }
  ],
  "manaphy": /* 마나피 */ [ // [확인] 세트 8개 (5개 초과)
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
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "alluring-voice" /* 매혹의보이스 */ } ]
    ]
  }
  ],
  "hawlucha": /* 루차불 */ /* 메가진화 가능: 메가루차불 */ [
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
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  /* 메가진화 세트: 메가루차불 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "hawluchanite" /* 루차불나이트 */,
    "ability": "mold-breaker" /* 틀깨기 */,
    "moves": [
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "encore" /* 앙코르 */ } ]
    ]
  },
  ],
  "diggersby": /* 파르토 */ [ // [확인] 세트 10개 (5개 초과)
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
      [ { "slug": "close-combat" /* 인파이트 */ } ]
    ]
  }
  ],
  "alakazam": /* 후딘 */ /* 메가진화 가능: 메가후딘 */ [ // [확인] 세트 9개 (5개 초과)
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
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "counter" /* 카운터 */ } ]
    ]
  },
  /* 메가진화 세트: 메가후딘 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "alakazite" /* 후디나이트 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ]
    ]
  },
  {
    "item": "alakazite" /* 후디나이트 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "disable" /* 사슬묶기 */ } ],      
      [ { "slug": "encore" /* 앵콜 */ } ]
    ]
  },
  ],
  "zapdos": /* 썬더 */ [ // [확인] 세트 11개 (5개 초과)
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "static" /* 정전기 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "eerie-impulse" /* 괴전파 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "static" /* 정전기 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  }
  ],
  "venusaur": /* 이상해꽃 */ /* 메가진화 가능: 메가이상해꽃 */ [ // [확인] 세트 7개 (5개 초과)
  {
    "item": "focus-sash" /* 기합의 띠 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  },
  /* 메가진화 세트: 메가이상해꽃 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "venusaurite" /* 이상해꽃나이트 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  }
  ],
  "terrakion": /* 테라키온 */ [ // [확인] 세트 17개 (5개 초과)
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
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
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
      [ { "slug": "poison-jab" /* 독찌르기 */ } ]
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
  "talonflame": /* 파이어로 */ [ // [확인] 세트 6개 (5개 초과)
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
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "flame-body" /* 불꽃몸 */,
    "moves": [
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
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
    "item": "choice-specs" /* 구애안경 */,
    "ability": "pixilate" /* 페어리스킨 */,
    "moves": [
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "mystical-fire" /* 매지컬플레임 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ } ]
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
  "slowbro": /* 야도란 */ /* 메가진화 가능: 메가야도란 */ [ // [확인] 세트 9개 (5개 초과)
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
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
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
  /* 메가진화 세트: 메가야도란 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "slowbronite" /* 야도란나이트 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "iron-defense" /* 철벽 */ } ],
      [ { "slug": "amnesia" /* 망각술 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "slack-off" /* 게으름피우기 */ } ]
    ]
  },
  ],
  "skarmory": /* 무장조 */ /* 메가진화 가능: 메가무장조 */ [ // [확인] 세트 18개 (5개 초과)
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
      [ { "slug": "whirlwind" /* 날려버리기 */ } ],
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
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ } ]
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
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "body-press" /* 바디프레스 */ }, { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
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
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
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
      [ { "slug": "whirlwind" /* 날려버리기 */ } ]
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
  },
  /* 메가진화 세트: 메가무장조 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "skarmorite" /* 무장조나이트 */,
    "ability": "weak-armor" /* 깨어진갑옷 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "drill-run" /* 드릴라이너 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ]
    ]
  }
  ],
  "pinsir": /* 쁘사이저 */ /* 메가진화 가능: 메가쁘사이저 */ [ // [확인] 세트 6개 (5개 초과)
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
  /* 메가진화 세트: 메가쁘사이저 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "pinsirite" /* 쁘사이저나이트 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "x-scissor" /* 시저크로스 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ } ]
    ]
  },
  {
    "item": "pinsirite" /* 쁘사이저나이트 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "x-scissor" /* 시저크로스 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ } ]
    ]
  }
  ],
  "mew": /* 뮤 */ [ // [확인] 세트 9개 (5개 초과)
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
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "synchronize" /* 싱크로 */,
    "moves": [
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
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
  }
  ],
  "metagross": /* 메타그로스 */ /* 메가진화 가능: 메가메타그로스 */ [ // [확인] 세트 15개 (5개 초과)
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
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "psychic-fangs" /* 사이코팽 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "bullet-punch" /* 불릿펀치 */ } ]
    ]
  },
  /* 메가진화 세트: 메가메타그로스 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "metagrossite" /* 메타그로스나이트 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "meteor-mash" /* 코멧펀치 */ }, { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "thunder-punch" /* 번개펀치 */ } ],
      [ { "slug": "psychic-fangs" /* 사이코팽 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "metagrossite" /* 메타그로스나이트 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "psychic-fangs" /* 사이코팽 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "metagrossite" /* 메타그로스나이트 */,
    "ability": "clear-body" /* 클리어바디 */,
    "moves": [
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ } ],
      [ { "slug": "psychic-fangs" /* 사이코팽 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ]
    ]
  }
  ],
  "manectric": /* 썬더볼트 */ /* 메가진화 가능: 메가썬더볼트 */ [ // [확인] 세트 5개 전부 잠재파워 5 → 지우면 세트가 모두 사라짐
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "switcheroo" /* 바꿔치기 */ } ]
    ]
  },
  /* 메가진화 세트: 메가썬더볼트 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "manectite" /* 썬더볼트나이트 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "switcheroo" /* 바꿔치기 */ } ]
    ]
  },
  ],
  "mandibuzz": /* 버랜지나 */ [ // [확인] 세트 10개 (5개 초과)
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
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "toxic" /* 맹독 */ }, { "slug": "u-turn" /* 유턴 */ } ]
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
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
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
  ],
  "mamoswine": /* 맘모꾸리 */ [ // [확인] 세트 14개 (5개 초과)
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
    "ability": "oblivious" /* 둔감 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "endeavor" /* 죽기살기 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
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
  "magnezone": /* 자포코일 */ [ // [확인] 세트 10개 (5개 초과)
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magnet-pull" /* 자력 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "teleport" /* 순간이동 */ }, { "slug": "magnet-rise" /* 전자부유 */ } ]
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
  // $$ 도구가 없는 세트뿐이라 그대로 남김 - 도구를 채워 넣을 것
  "lopunny": /* 이어롭 */ /* 메가진화 가능: 메가이어롭 */ [ // [확인] 세트 8개 (5개 초과)
  {
    "item": "life-orb",
    "ability": "limber" /* 유연 */,
    "moves": [
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "fake-out" /* 속이다 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": "life-orb",
    "ability": "limber" /* 유연 */,
    "moves": [
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "fake-out" /* 속이다 */ } ],
      [ { "slug": "power-up-punch" /* 그로우펀치 */ } ]
    ]
  },
  {
    "item": "leftovers",
    "ability": "limber" /* 유연 */,
    "moves": [
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ]
    ]
  },
  {
    "item": "focus-sash",
    "ability": "limber" /* 유연 */,
    "moves": [
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ } ],
      [ { "slug": "fake-out" /* 속이다 */ } ]
    ]
  },
  {
    "item": "focus-sash",
    "ability": "limber" /* 유연 */,
    "moves": [
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ }, { "slug": "quick-attack" /* 전광석화 */ } ],
      [ { "slug": "power-up-punch" /* 그로우펀치 */ } ]
    ]
  },
  {
    "item": "focus-sash",
    "ability": "limber" /* 유연 */,
    "moves": [
      [ { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "power-up-punch" /* 그로우펀치 */ } ]
    ]
  },
  /* 메가진화 세트: 메가이어롭 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "lopunnite" /* 이어롭나이트 */,
    "ability": "limber" /* 유연 */,
    "moves": [
      [ { "slug": "high-jump-kick" /* 무릎차기 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "fake-out" /* 속이기 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  }
  ],
  "heracross": /* 헤라크로스 */ /* 메가진화 가능: 메가헤라크로스 */ [ // [확인] 세트 9개 (5개 초과)
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
      [ { "slug": "earthquake" /* 지진 */ } ]
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
    "item": "flame-orb" /* 화염구슬 */,
    "ability": "guts" /* 근성 */,
    "moves": [
      [ { "slug": "facade" /* 객기 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "trailblaze" /* 개척하기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  /* 메가진화 세트: 메가헤라크로스 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "heracronite" /* 헤라크로스나이트 */,
    "ability": "moxie" /* 자기과신 */,
    "moves": [
      [ { "slug": "bullet-seed" /* 씨기관총 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "rock-blast" /* 록블라스트 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  }
  ],
  "heatran": /* 히드런 */ [ // [확인] 세트 18개 (5개 초과)
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
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
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
    "item": "leftovers" /* 먹다남은음식 */,
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
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "magma-storm" /* 마그마스톰 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "magma-storm" /* 마그마스톰 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
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
  ],
  "gyarados": /* 갸라도스 */ /* 메가진화 가능: 메가갸라도스 */ [ // [확인] 세트 10개 (5개 초과)
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
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "avalanche" /* 눈사태 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "taunt" /* 도발 */ } ]
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
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ]
    ]
  },
  /* 메가진화 세트: 메가갸라도스 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "gyaradosite" /* 갸라도스나이트 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "ice-fang" /* 얼음엄니 */ }, { "slug": "power-whip" /* 파워휩 */ }]
    ]
  }
  ],
  "gallade": /* 엘레이드 */ /* 메가진화 가능: 메가엘레이드 */ [ // [확인] 세트 7개 (5개 초과)
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
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "psycho-cut" /* 사이코커터 */ }, { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  /* 메가진화 세트: 메가엘레이드 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "galladite" /* 엘레이드나이트 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  }
  ],
  "gliscor": /* 글라이온 */ [ // [확인] 세트 13개 (5개 초과)
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
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "facade" /* 객기 */ } ]
    ]
  },
  {
    "item": "toxic-orb" /* 맹독구슬 */,
    "ability": "poison-heal" /* 포이즌힐 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ]
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
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  }
  ],
  "gardevoir": /* 가디안 */ /* 메가진화 가능: 메가가디안 */ [ // [확인] 세트 9개 (5개 초과)
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
    "item": "choice-specs" /* 구애안경 */,
    "ability": "trace" /* 트레이스 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ]
    ]
  },
  /* 메가진화 세트: 메가가디안 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "gardevoirite" /* 가디안나이트 */,
    "ability": "trace" /* 트레이스 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "vacuum-wave" /* 진공파 */ } ]
    ]
  }
  ],
  "garchomp": /* 한카리아스 */ /* 메가진화 가능: 메가한카리아스, 메가한카리아스Z */ [ // [확인] 세트 8개 (5개 초과)
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
      [ { "slug": "outrage" /* 역린 */ }, { "slug": "scale-shot" /* 스케일샷 */ } ],
      [ { "slug": "rock-tomb" /* 암석봉인 */ } ]
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
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ }, { "slug": "fire-fang" /* 불꽃엄니 */ } ]
    ]
  },
  {
    "item": "loaded-dice" /* 속임수주사위 */,
    "ability": "rough-skin" /* 까칠한피부 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "fire-fang" /* 불꽃엄니 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "scale-shot" /* 스케일샷 */ } ]
    ]
  },
  /* 메가진화 세트: 메가한카리아스 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "garchompite" /* 한카리아스나이트 */,
    "ability": "rough-skin" /* 까칠한피부 */,
    "moves": [
      [ { "slug": "fire-fang" /* 불꽃엄니 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "scale-shot" /* 스케일샷 */ } ]
    ]
  },
  /* 메가진화 세트: 메가한카리아스Z (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "garchompite-z" /* 한카리아스나이트Z */,
    "ability": "rough-skin" /* 까칠한피부 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "power-gem" /* 파워젬 */ } ],
      [ { "slug": "surf" /* 파도타기 */ } ]
    ]
  },
  {
    "item": "garchompite-z" /* 한카리아스나이트Z */,
    "ability": "rough-skin" /* 까칠한피부 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "surf" /* 파도타기 */ } ]
    ]
  }
  ],
  "dragonite": /* 망나뇽 */ /* 메가진화 가능: 메가망나뇽 */ [ // [확인] 세트 10개 (5개 초과)
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
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "fire-punch" /* 불꽃펀치 */ } ]
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
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "multiscale" /* 멀티스케일 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "ice-spinner" /* 아이스스피너 */ } ]
    ]
  },
  /* 메가진화 세트: 메가망나뇽 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "dragoninite" /* 망나뇽나이트 */,
    "ability": "multiscale" /* 멀티스케일 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "dragoninite" /* 망나뇽나이트 */,
    "ability": "multiscale" /* 멀티스케일 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ]
    ]
  },
  {
    "item": "dragoninite" /* 망나뇽나이트 */,
    "ability": "multiscale" /* 멀티스케일 */,
    "moves": [
      [ { "slug": "ice-spinner" /* 아이스스피너 */ } ],
      [ { "slug": "scale-shot" /* 스케일샷 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
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
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
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
  ], // 여기부터
  "clefable": /* 픽시 */ /* 메가진화 가능: 메가픽시 */ [ // [확인] 세트 15개 (5개 초과)
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  }, // 여기부터
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "wish" /* 희망사항 */ }, { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "babiri-berry" /* 바리비열매 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
    ]
  },
  {
    "item": "babiri-berry" /* 바리비열매 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "thunder" /* 번개 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "moonlight" /* 달의불빛 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "moonlight" /* 달의불빛 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  /* 메가진화 세트: 메가픽시 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "clefablite" /* 픽시나이트 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "soft-boiled" /* 알낳기 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "clefablite" /* 픽시나이트 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "cosmic-power" /* 코스믹파워 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "moonlight" /* 달의불빛 */ } ],
      [ { "slug": "stored-power" /* 어시스트파워 */ } ]
    ]
  }
  ],
  "charizard": /* 리자몽 */ /* 메가진화 가능: 메가리자몽X, 메가리자몽Y */ [
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
  /* 메가진화 세트: 메가리자몽X (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "charizardite-x" /* 리자몽나이트X */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "flame-charge" /* 니트로차지 */ } ]
    ]
  },
  {
    "item": "charizardite-x" /* 리자몽나이트X */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],      
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  /* 메가진화 세트: 메가리자몽Y (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "charizardite-y" /* 리자몽나이트Y */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ,{ "slug": "dragon-pulse" /* 용의파동 */ }],
      [ { "slug": "solar-beam" /* 솔라빔 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "charizardite-y" /* 리자몽나이트Y */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "solar-beam" /* 솔라빔 */ } ],
      [ { "slug": "weather-ball" /* 웨더볼 */ } ]

    ]
  }
  ],
  "breloom": /* 버섯모 */ [ // [확인] 세트 9개 (5개 초과)
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
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
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
  "azumarill": /* 마릴리 */ [ // [확인] 세트 8개 (5개 초과)
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
  "altaria": /* 파비코리 */ /* 메가진화 가능: 메가파비코리 */ [ // [확인] 세트 7개 (5개 초과)
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
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ]
    ]
  },
  /* 메가진화 세트: 메가파비코리 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "altarianite" /* 파비코리나이트 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "cotton-guard" /* 코튼가드 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "altarianite" /* 파비코리나이트 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  }
  ],
  "serperior": /* 샤로다 */ [ // [확인] 세트 13개 (5개 초과)
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  }
  ],
  "feraligatr": /* 장크로다일 */ /* 메가진화 가능: 메가장크로다일 */ [ // [확인] 세트 9개 (5개 초과)
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
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ }, { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ]
    ]
  },
  /* 메가진화 세트: 메가장크로다일 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "feraligite" /* 장크로다일나이트 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  },
  {
    "item": "feraligite" /* 장크로다일나이트 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "double-edge" /* 이판사판태클 */ } ],
      [ { "slug": "trailblaze" /* 개척하기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  }
  ],
  "raikou": /* 라이코 */ [ // [확인] 세트 16개 (5개 초과)
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "extrasensory" /* 신통력 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "extrasensory" /* 신통력 */ } ]
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
  "hoopa": /* 후파 */ [ // [확인] 세트 10개 (5개 초과)
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
  "crobat": /* 크로뱃 */ [ // [확인] 세트 8개 (5개 초과)
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
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
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
  ],
  "entei": /* 앤테이 */ [ // [확인] 세트 8개 (5개 초과)
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
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "inner-focus" /* 정신력 */,
    "moves": [
      [ { "slug": "sacred-fire" /* 성스러운불꽃 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ]
    ]
  },
  ],
  "suicune": /* 스이쿤 */ [ // [확인] 세트 8개 (5개 초과)
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
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ]
    ]
  }
  ],
  "aerodactyl": /* 프테라 */ /* 메가진화 가능: 메가프테라 */ [ // [확인] 세트 9개 (5개 초과)
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
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "unnerve" /* 긴장감 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "dual-wingbeat" /* 더블윙 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  },
  /* 메가진화 세트: 메가프테라 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "aerodactylite" /* 프테라나이트 */,
    "ability": "unnerve" /* 긴장감 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-fang" /* 얼음엄니 */ } ]
    ]
  }
  ],
  "hydreigon": /* 삼삼드래 */ [ // [확인] 세트 19개 (5개 초과)
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
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ }, { "slug": "flash-cannon" /* 러스터캐논 */ } ]
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
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  }
  ],
  "machamp": /* 괴력몬 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "no-guard" /* 노가드 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "no-guard" /* 노가드 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "no-guard" /* 노가드 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "no-guard" /* 노가드 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
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
  "mienshao": /* 비조도 */ [ // [확인] 세트 6개 (5개 초과)
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
      [ { "slug": "stone-edge" /* 스톤에지 */ } ]
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
  "absol": /* 앱솔 */ /* 메가진화 가능: 메가앱솔, 메가앱솔Z */ [ // [확인] 세트 9개 (5개 초과)
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
  },
  /* 메가진화 세트: 메가앱솔 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "absolite" /* 앱솔나이트 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  {
    "item": "absolite" /* 앱솔나이트 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "absolite" /* 앱솔나이트 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ]
    ]
  },
  /* 메가진화 세트: 메가앱솔Z (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "absolite-z" /* 앱솔나이트Z */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "shadow-claw" /* 섀도클로 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "absolite-z" /* 앱솔나이트Z */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "shadow-claw" /* 섀도클로 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "night-slash" /* 깜짝베기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  }
  ],
  "aggron": /* 보스로라 */ /* 메가진화 가능: 메가보스로라 */ [ // [확인] 세트 7개 (5개 초과)
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
  },
  /* 메가진화 세트: 메가보스로라 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "aggronite" /* 보스로라나이트 */,
    "ability": "rock-head" /* 돌머리 */,
    "moves": [
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ]
    ]
  },
  {
    "item": "aggronite" /* 보스로라나이트 */,
    "ability": "rock-head" /* 돌머리 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ]
    ]
  }
  ],
  // $$ 도구가 없는 세트뿐이라 그대로 남김 - 도구를 채워 넣을 것
  "beedrill": /* 독침붕 */ /* 메가진화 가능: 메가독침붕 */ [
  
  /* 메가진화 세트: 메가독침붕 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "beedrillite" /* 독침붕나이트 */,
    "ability": "sniper" /* 스나이퍼 */,
    "moves": [
      [ { "slug": "poison-jab" /* 독찌르기 */ } ],
      [ { "slug": "drill-run" /* 드릴라이너 */ } ],
      [ { "slug": "fell-stinger" /* 마지막일침 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  }
  ],
  "blastoise": /* 거북왕 */ /* 메가진화 가능: 메가거북왕 */ [
  {
    "item": [ "white-herb" /* 하양허브 */, "focus-sash" /* 기합의띠 */ ],
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ }, { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "water-pulse" /* 물의파동 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ } ]
    ]
  },
  /* 메가진화 세트: 메가거북왕 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "blastoisinite" /* 거북왕나이트 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "water-pulse" /* 물의파동 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ } ]
    ]
  },
  {
    "item": "blastoisinite" /* 거북왕나이트 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "dark-pulse" /* 악의파동 */ }, { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "water-pulse" /* 물의파동 */ } ],
      [ { "slug": "aura-sphere" /* 파동탄 */ } ]
    ]
  }
  ],
  "empoleon": /* 엠페르트 */ [ // [확인] 세트 10개 (5개 초과)
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
  "krookodile": /* 악비아르 */ [ // [확인] 세트 17개 (5개 초과)
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  },
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
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ]
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
      [ { "slug": "toxic" /* 맹독 */ } ]
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
  "nidoqueen": /* 니드퀸 */ [ // [확인] 세트 8개 (5개 초과)
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
      [ { "slug": "toxic-spikes" /* 독압정 */ } ],
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
  ],
  "swampert": /* 대짱이 */ /* 메가진화 가능: 메가대짱이 */ [ // [확인] 세트 7개 (5개 초과)
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
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "counter" /* 카운터 */ } ]
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
  },
  /* 메가진화 세트: 메가대짱이 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "swampertite" /* 대짱이나이트 */,
    "ability": "torrent" /* 급류 */,
    "moves": [
      [ { "slug": "wave-crash" /* 웨이브태클 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ]
    ]
  }
  ],
  "ampharos": /* 전룡 */ /* 메가진화 가능: 메가전룡 */ [
  /* 메가진화 세트: 메가전룡 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "ampharosite" /* 전룡나이트 */,
    "ability": "static" /* 정전기 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  ],
  "arcanine": /* 윈디 */ [ // [확인] 세트 6개 (5개 초과)
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
  "chandelure": /* 샹델라 */ /* 메가진화 가능: 메가샹델라 */ [ // [확인] 세트 10개 (5개 초과)
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
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  /* 메가진화 세트: 메가샹델라 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "chandelurite" /* 샹델라나이트 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "flame-charge" /* 니트로차지 */ } ]
    ]
  },
  {
    "item": "chandelurite" /* 샹델라나이트 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  }
  ],
  "chesnaught": /* 브리가론 */ /* 메가진화 가능: 메가브리가론 */ [
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
  },
  /* 메가진화 세트: 메가브리가론 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "chesnaughtite" /* 브리가론나이트 */,
    "ability": "bulletproof" /* 방탄 */,
    "moves": [
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "iron-defense" /* 철벽 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
  ],
  "cloyster": /* 파르셀 */ [ // [확인] 세트 8개 (5개 초과)
  {
    "item": "focus-sash" /* 기합의띠 */,
    "opening": "shell-smash" /* 나오자마자 쓰는 기술 */,
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
    "opening": "shell-smash" /* 나오자마자 쓰는 기술 */,
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
    "opening": "shell-smash" /* 나오자마자 쓰는 기술 */,
    "ability": "skill-link" /* 스킬링크 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "icicle-spear" /* 고드름침 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
  ],
  "donphan": /* 코리갑 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
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
  "florges": /* 플라제스 */ [ // [확인] 세트 13개 (5개 초과)
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
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ }, { "slug": "wish" /* 희망사항 */ } ],
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
  ],
  "flygon": /* 플라이곤 */ [ // [확인] 세트 19개 (5개 초과)
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
      [ { "slug": "dragon-claw" /* 드래곤크루 */ } ],
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
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
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
  "forretress": /* 쏘콘 */ [ // [확인] 세트 6개 (5개 초과)
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
  "galvantula": /* 전툴라 */ [ // [확인] 세트 6개 (5개 초과)
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
  ],
  "goodra": /* 미끄래곤 */ [ // [확인] 세트 13개 (5개 초과)
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
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ]
    ]
  }
  ],
  "heliolisk": /* 일레도리자드 */ [ // [확인] 세트 6개 (5개 초과)
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
  "infernape": /* 초염몽 */ [ // [확인] 세트 16개 (5개 초과)
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
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ]
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
  "kingdra": /* 킹드라 */ [ // [확인] 세트 6개 (5개 초과)
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
  "milotic": /* 밀로틱 */ [ // [확인] 세트 6개 (5개 초과)
  {
    "item": "flame-orb" /* 불꽃구슬 */,
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
  "noivern": /* 음번 */ [ // [확인] 세트 10개 (5개 초과)
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
    "item": "choice-specs" /* 구애안경 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "switcheroo" /* 바꿔치기 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ]
    ]
  },
  ],
  "porygon-z": /* 폴리곤Z */ [ // [확인] 세트 14개 (5개 초과)
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
    "ability": "download" /* 다운로드 */,
    "moves": [
      [ { "slug": "tri-attack" /* 트라이어택 */ }, { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "agility" /* 고속이동 */ } ]
    ]
  },
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
    "ability": "trace" /* 트레이스 */,
    "moves": [
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "scrafty": /* 곤율거니 */ /* 메가진화 가능: 메가곤율거니 */ [ // [확인] 세트 13개 (5개 초과)
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
      [ { "slug": "iron-head" /* 아이언헤드 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": ["intimidate" /* 위협 */, "moxie" /* 자기과신 */],
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ }, { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ]
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
  },
  /* 메가진화 세트: 메가곤율거니 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "scraftinite" /* 곤율거니나이트 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ }, { "slug": "poison-jab" /* 독찌르기 */ } ]
    ]
  },
  {
    "item": "scraftinite" /* 곤율거니나이트 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "throat-chop" /* 지옥찌르기 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ } ]
    ]
  }
  ],
  "snorlax": /* 잠만보 */ [ // [확인] 세트 10개 (5개 초과)
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
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "curse" /* 저주 */ } ]
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
      [ { "slug": "fire-punch" /* 불꽃펀치 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ]
    ]
  }
  ],
  "tentacruel": /* 독파리 */ [ // [확인] 세트 9개 (5개 초과)
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
  }
  ],
  "toxicroak": /* 독개굴 */ [ // [확인] 세트 9개 (5개 초과)
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
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "low-kick" /* 안다리걸기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "dry-skin" /* 건조피부 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
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
    "ability": ["synchronize" /* 싱크로 */, "inner-focus" /* 정신력 */],
    "moves": [
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "toxic" /* 맹독 */ },{ "slug": "yawn" /* 하품 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ },{ "slug": "moonlight" /* 달의불빛 */ } ]
    ]
  }
  ],
  "vaporeon": /* 샤미드 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "toxic" /* 맹독 */ },{ "slug": "yawn" /* 하품 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  }
  ],
  "froslass": /* 눈여아 */ /* 메가진화 가능: 메가눈여아 */ [ // [확인] 세트 11개 (5개 초과)
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
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ]
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
  /* 메가진화 세트: 메가눈여아 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "froslassite" /* 눈여아나이트 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "aurora-veil" /* 오로라베일 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "froslassite" /* 눈여아나이트 */,
    "ability": "cursed-body" /* 저주받은바디 */,
    "moves": [
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "aurora-veil" /* 오로라베일 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  }
  ],
  "houndoom": /* 헬가 */ /* 메가진화 가능: 메가헬가 */ [
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
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ]
    ]
  },
  /* 메가진화 세트: 메가헬가 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "houndoominite" /* 헬가나이트 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
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
  "yanmega": /* 메가자리 */ [ // [확인] 세트 6개 (5개 초과)
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
  }
  ],
  "zoroark": /* 조로아크 */ [ // [확인] 세트 8개 (5개 초과)
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
  "cresselia": /* 크레세리아 */ [ // [확인] 세트 8개 (5개 초과)
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
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "roserade": /* 로즈레이드 */ [ // [확인] 세트 6개 (5개 초과)
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
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ }, { "slug": "sleep-powder" /* 수면가루 */ } ]
    ]
  }
  ],
  "cobalion": /* 코바르온 */ [ // [확인] 세트 10개 (5개 초과)
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
  "dragalge": /* 드래캄 */ /* 메가진화 가능: 메가드래캄 */ [ // [확인] 세트 15개 (5개 초과)
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
    "item": "choice-specs" /* 구애안경 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ]
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
      [ { "slug": "toxic-spikes" /* 독압정 */ } ]
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
  },
  /* 메가진화 세트: 메가드래캄 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "dragalgite" /* 드래캄나이트 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ }, { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ]
    ]
  }
  ],
  "reuniclus": /* 란쿨루스 */ [ // [확인] 세트 9개 (5개 초과)
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
      [ { "slug": "energy-ball" /* 에너지볼 */ }, { "slug": "signal-beam" /* 시그널빔 */ } ],
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
      [ { "slug": "thunder" /* 번개 */ } ]
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
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "magic-guard" /* 매직가드 */,
    "moves": [
      [ { "slug": "psychic-noise" /* 사이코노이즈 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ }, { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  }
  ],
  "whimsicott": /* 엘풍 */ [ // [확인] 세트 12개 (5개 초과)
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
    "item": "choice-specs" /* 구애안경 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "switcheroo" /* 바꿔치기 */ } ]
    ]
  }
  ],
  "sharpedo": /* 샤크니아 */ /* 메가진화 가능: 메가샤크니아 */ [
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
  },
  /* 메가진화 세트: 메가샤크니아 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "sharpedonite" /* 샤크니아나이트 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "ice-fang" /* 얼음엄니 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  }
  ],
  "sceptile": /* 나무킹 */ /* 메가진화 가능: 메가나무킹 */ [
  /* 메가진화 세트: 메가나무킹 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "sceptilite" /* 나무킹나이트 */,
    "ability": "overgrow" /* 심록 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "shed-tail" /* 꼬리자르기 */ } ]
    ]
  }
  ],
  "rhyperior": /* 거대코뿌리 */ [ // [확인] 세트 11개 (5개 초과)
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
      [ { "slug": "heat-crash" /* 히트스탬프 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "megahorn" /* 메가폰 */ } ]
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
  "bronzong": /* 동탁군 */ [ // [확인] 세트 11개 (5개 초과)
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
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "unburden" /* 곡예 */,
    "moves": [
      [ { "slug": "belly-drum" /* 배북 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ]
    ]
  },
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
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "unburden" /* 곡예 */,
    "moves": [
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "belly-drum" /* 배북 */ } ],
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ]
    ]
  },
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "unburden" /* 곡예 */,
    "moves": [
      [ { "slug": "belly-drum" /* 배북 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "facade" /* 객기 */ } ]
    ]
  }
  ],
  "pangoro": /* 부란다 */ [ // [확인] 세트 7개 (5개 초과)
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
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  }
  ],
  "abomasnow": /* 눈설왕 */ /* 메가진화 가능: 메가눈설왕 */ [ // [확인] 세트 10개 (5개 초과)
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
      [ { "slug": "wood-hammer" /* 우드해머 */ } ],
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
      [ { "slug": "wood-hammer" /* 우드해머 */ } ],
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
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ]
    ]
  },
  /* 메가진화 세트: 메가눈설왕 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "abomasite" /* 눈설왕나이트 */,
    "ability": "snow-warning" /* 눈퍼뜨리기 */,
    "moves": [
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "abomasite" /* 눈설왕나이트 */,
    "ability": "snow-warning" /* 눈퍼뜨리기 */,
    "moves": [
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ }, { "slug": "energy-ball" /* 에너지볼 */ }, { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "protect" /* 방어 */ }, { "slug": "leech-seed" /* 씨뿌리기 */ }, { "slug": "ice-shard" /* 얼음뭉치 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  }
  ],
  // $$ 도구가 없는 세트뿐이라 그대로 남김 - 도구를 채워 넣을 것
  "banette": /* 다크펫 */ /* 메가진화 가능: 메가다크펫 */ [
  {
    "item": "focus-sash" /* 집중띠 */,
    "ability": "insomnia" /* 불면 */,
    "moves": [
      [ { "slug": "destiny-bond" /* 길동무 */ }, { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ }, { "slug": "taunt" /* 도발 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  },
  /* 메가진화 세트: 메가다크펫 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "banettite" /* 다크펫나이트 */,
    "ability": "insomnia" /* 불면 */,
    "moves": [
      [ { "slug": "destiny-bond" /* 길동무 */ } ],
      [ { "slug": "encore" /* 앙코르 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "poltergeist" /* 폴터가이스트 */ } ]
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
      [ { "slug": "calm-mind" /* 명상 */ } ]
    ]
  },
  ],
  "gastrodon": /* 트리토돈 */ [ // [확인] 세트 6개 (5개 초과)
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
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "storm-drain" /* 마중물 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "scald" /* 열탕 */ }, { "slug": "clear-smog" /* 클리어스모그 */ } ]
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
  "delphox": /* 마폭시 */ /* 메가진화 가능: 메가마폭시 */ [ // [확인] 세트 10개 (5개 초과)
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
  /* 메가진화 세트: 메가마폭시 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "delphoxite" /* 마폭시나이트 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  },
  {
    "item": "delphoxite" /* 마폭시나이트 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
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
  "rotom": /* 로토무 */ [ // [확인] 세트 7개 (5개 초과)
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
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  ],
  "rotom-heat": /* 로토무(히트) */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  }
  ],
  "rotom-wash": /* 로토무(워시) */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ } ]
    ]
  },
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  }
  ],
  "rotom-frost": /* 로토무(프로스트) */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ } ]
    ]
  }
  ],
  "rotom-fan": /* 로토무(스핀) */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  }
  ,
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  }
  ],
  "rotom-mow": /* 로토무(커트) */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ } ]
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
  ],
  "registeel": /* 레지스틸 */ [ // [확인] 세트 10개 (5개 초과)
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
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
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
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
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
      [ { "slug": "toxic" /* 맹독 */ } ]
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
  "omastar": /* 암스타 */ [ // [확인] 세트 8개 (5개 초과)
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
    "item": "white-herb" /* 하양허브 */,
    "ability": "weak-armor" /* 깨어진갑옷 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  }
  ],
  "jolteon": /* 쥬피썬더 */ [ // [확인] 세트 9개 전부 잠재파워 9 → 지우면 세트가 모두 사라짐 / 세트 9개 (5개 초과)
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "alluring-voice" /* 매혹의보이스 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "alluring-voice" /* 매혹의보이스 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ]
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
  "eelektross": /* 저리더프 */ /* 메가진화 가능: 메가저리더프 */ [
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
      [ { "slug": "acid-spray" /* 애시드봄 */ } ]
    ]
  },
  /* 메가진화 세트: 메가저리더프 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "eelektrossite" /* 저리더프나이트 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "coil" /* 똬리틀기 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "supercell-slam" /* 썬더다이브 */ } ]
    ]
  },
  {
    "item": "eelektrossite" /* 저리더프나이트 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "dragon-pulse" /* 용의파동 */ } ]
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
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  }
  ],
  "camerupt": /* 폭타 */ /* 메가진화 가능: 메가폭타 */ [
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
  /* 메가진화 세트: 메가폭타 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "cameruptite" /* 폭타나이트 */,
    "ability": "solid-rock" /* 하드록 */,
    "moves": [
      [ { "slug": "ancient-power" /* 원시의힘 */ } ],
      [ { "slug": "lava-plume" /* 분연 */ }, { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "yawn" /* 하품 */ } ]
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
  "glalie": /* 얼음귀신 */ /* 메가진화 가능: 메가얼음귀신 */ [
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
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "moody" /* 변덕쟁이 */,
    "moves": [
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "sheer-cold" /* 절대영도 */ } ]
    ]
  },
  /* 메가진화 세트: 메가얼음귀신 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "glalitite" /* 얼음귀신나이트 */,
    "ability": "inner-focus" /* 정신력 */,
    "moves": [
      [ { "slug": "return" /* 은혜갚기 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ } ]
    ]
  },
  ],
  "escavalier": /* 슈바르고 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "overcoat" /* 방진 */,
    "moves": [
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "drill-run" /* 드릴라이너 */ }, { "slug": "pursuit" /* 따라가때리기 */ } ]
    ]
  },
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
    "ability": "overcoat" /* 방진 */,
    "moves": [
      [ { "slug": "megahorn" /* 메가폰 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ]
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
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
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
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
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
  "emboar": /* 염무왕 */ /* 메가진화 가능: 메가염무왕 */ [
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
  },
  /* 메가진화 세트: 메가염무왕 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "emboarite" /* 염무왕나이트 */,
    "ability": "reckless" /* 이판사판 */,
    "moves": [
      [ { "slug": "temper-flare" /* 열불내기 */ } ],
      [ { "slug": "focus-punch" /* 힘껏펀치 */ }, { "slug": "high-horsepower" /* 10만마력 */ } ],
      [ { "slug": "head-smash" /* 양날박치기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ }, { "slug": "trailblaze" /* 개척하기 */ } ]
    ]
  }
  ],
  "seismitoad": /* 두빅굴 */ [ // [확인] 세트 10개 (5개 초과)
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
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
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
  "smeargle": /* 루브도 */ [ // [확인] 세트 8개 (5개 초과)
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
      [ { "slug": "taunt" /* 도발 */ } ],
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
  "slowking": /* 야도킹 */ [ // [확인] 세트 8개 (5개 초과)
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
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "teleport" /* 순간이동 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "teleport" /* 순간이동 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ]
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
      [ { "slug": "zen-headbutt" /* 사념의박치기 */ } ],
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
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  }
  ],
  "uxie": /* 유크시 */ [ // [확인] 세트 10개 (5개 초과)
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
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ]
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
  "poliwrath": /* 강챙이 */ [ // [확인] 세트 8개 (5개 초과)
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
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
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
      [ { "slug": "scald" /* 열탕 */ } ],
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
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "darkest-lariat" /* DD래리어트 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ]
    ]
  },
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
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "compound-eyes" /* 복안 */,
    "moves": [
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ]
    ]
  }
  ],
  "audino": /* 다부니 */ /* 메가진화 가능: 메가다부니 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "double-edge" /* 이판사판태클 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ]
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
      [ { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  /* 메가진화 세트: 메가다부니 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "audinite" /* 다부니나이트 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "calm-mind" /* 명상 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  }
  ],
  "mesprit": /* 엠라이트 */ [ // [확인] 세트 12개 (5개 초과)
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
      [ { "slug": "u-turn" /* 유턴 */ } ]
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
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "defeatist" /* 무기력 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "endeavor" /* 죽기살기 */ } ],
      [ { "slug": "head-smash" /* 양날박치기 */ } ]
    ]
  },
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
  "malamar": /* 칼라마네로 */ /* 메가진화 가능: 메가칼라마네로 */ [
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
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "psycho-cut" /* 사이코커터 */ } ],
      [ { "slug": "switcheroo" /* 바꿔치기 */ } ]
    ]
  },
  /* 메가진화 세트: 메가칼라마네로 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "malamarite" /* 칼라마네로나이트 */,
    "ability": "contrary" /* 심술꾸러기 */,
    "moves": [
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "baton-pass" /* 바톤터치 */ } ],
      [ { "slug": "throat-chop" /* 지옥찌르기 */ } ]
    ]
  },
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
      [ { "slug": "pursuit" /* 따라가때리기 */ } ]
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
  ],
  "beheeyem": /* 벰크 */ [ // [확인] 세트 2개 전부 잠재파워 2 → 지우면 세트가 모두 사라짐
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "analytic" /* 애널라이즈 */,
    "moves": [
      [ { "slug": "trick-room" /* 트릭룸 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "signal-beam" /* 시그널빔 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "analytic" /* 애널라이즈 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "signal-beam" /* 시그널빔 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "trick" /* 트릭 */ }, { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  }
  ],
  "barbaracle": /* 거북손데스 */ /* 메가진화 가능: 메가거북손데스 */ [
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
  /* 메가진화 세트: 메가거북손데스 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "barbaracite" /* 거북손데스나이트 */,
    "ability": "tough-claws" /* 단단한발톱 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
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
  "articuno": /* 프리져 */ [ // [확인] 세트 8개 (5개 초과)
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
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ]
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
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  }
  ],
  "xatu": /* 네이티오 */ [ // [확인] 세트 7개 (5개 초과)
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
      [ { "slug": "taunt" /* 도발 */ } ]
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
  ],
  "vileplume": /* 라플레시아 */ [
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "effect-spore" /* 포자 */,
    "moves": [
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ } ]
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
    "item": "choice-specs" /* 구애안경 */,
    "ability": "scrappy" /* 배짱 */,
    "moves": [
      [ { "slug": "boomburst" /* 폭음파 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "scrappy" /* 배짱 */,
    "moves": [
      [ { "slug": "boomburst" /* 폭음파 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "grass" } ]
    ]
  },
  {
    "item": "flame-orb" /* 화염구슬 */,
    "ability": "guts" /* 근성 */,
    "moves": [
      [ { "slug": "facade" /* 객기 */ } ],
      [ { "slug": "brave-bird" /* 브레이브버드 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "quick-attack" /* 전광석화 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "scrappy" /* 배짱 */,
    "moves": [
      [ { "slug": "boomburst" /* 폭음파 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ]
    ]
  }
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
      [ { "slug": "signal-beam" /* 시그널빔 */ } ],
      [ { "slug": "moonlight" /* 달의불빛 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "synchronize" /* 싱크로 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "barrier" /* 배리어 */ } ],
      [ { "slug": "moonlight" /* 달의불빛 */ } ],
      [ { "slug": "stored-power" /* 어시스트파워 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "synchronize" /* 싱크로 */,
    "moves": [
      [ { "slug": "barrier" /* 배리어 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "stored-power" /* 어시스트파워 */ } ],
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
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "poison-touch" /* 독수 */,
    "moves": [
      [ { "slug": "gunk-shot" /* 더스트슈트 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  }
  ],
  "mismagius": /* 무우마직 */ [
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "destiny-bond" /* 길동무 */ } ]
    ]
  },
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
  "magmortar": /* 마그마번 */ [ // [확인] 세트 6개 (5개 초과)
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
  "lilligant": /* 드레디어 */ [ // [확인] 세트 3개 전부 잠재파워 3 → 지우면 세트가 모두 사라짐
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "own-tempo" /* 마이페이스 */,
    "moves": [
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "petal-dance" /* 꽃잎댄스 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "own-tempo" /* 마이페이스 */,
    "moves": [
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "petal-dance" /* 꽃잎댄스 */ } ],
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
    ]
  }
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
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
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
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "swift-swim" /* 쓱쓱 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ]
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
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "swift-swim" /* 쓱쓱 */,
    "moves": [
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
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
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ],
      [ { "slug": "fake-out" /* 속이다 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "guts" /* 근성 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ]
    ]
  },
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
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": ["guts" /* 근성 */, "thick-fat" /* 두꺼운지방 */],
    "moves": [
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "bullet-punch" /* 불릿펀치 */ } ]
    ]
  }
  ],
  "golurk": /* 골루그 */ /* 메가진화 가능: 메가골루그 */ [ // [확인] 세트 11개 (5개 초과)
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
  },
  /* 메가진화 세트: 메가골루그 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "golurkite" /* 골루그나이트 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "poltergeist" /* 폴터가이스트 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dynamic-punch" /* 폭발펀치 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
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
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "chlorophyll" /* 엽록소 */,
    "moves": [
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ } ]
    ]
  },
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
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "harvest" /* 수확 */,
    "moves": [
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ]
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
  "electivire": /* 에레키블 */ [ // [확인] 세트 1개 전부 잠재파워 1 → 지우면 세트가 모두 사라짐
    {    
      "item": "choice-band" /* 구애머리띠 */,
      "ability": "motor-drive" /* 모터드라이브 */,
      "moves": [
      [ { "slug": "wild-charge" /* 와일드볼트 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "brick-break" /* 깨뜨리다 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
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
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "levitate" /* 부유 */,
    "moves": [
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
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
  "pelipper": /* 패리퍼 */ [ // [확인] 세트 6개 (5개 초과)
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
  }
  ],
  "shiftry": /* 다탱구 */ [ // [확인] 세트 7개 (5개 초과)
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
      [ { "slug": "explosion" /* 대폭발 */ } ]
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
  "floatzel": /* 플로젤 */ [ // [확인] 세트 6개 (5개 초과)
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
    "item": "choice-specs" /* 구애안경 */,
    "ability": "water-veil" /* 수의베일 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "electric" } ],
      [ { "slug": "surf" /* 파도타기 */ }, { "slug": "switcheroo" /* 바꿔치기 */ } ]
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
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "water-veil" /* 수의베일 */,
    "moves": [
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "electric" } ],
      [ { "slug": "surf" /* 파도타기 */ }, { "slug": "switcheroo" /* 바꿔치기 */ } ]
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
  "skuntank": /* 스컹탱크 */ [ // [확인] 세트 8개 (5개 초과)
  {
    "item": "lum-berry" /* 리샘열매 */,
    "ability": "aftermath" /* 유폭 */,
    "moves": [
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "aftermath" /* 유폭 */,
    "moves": [
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "aftermath" /* 유폭 */,
    "moves": [
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "pursuit" /* 따라가때리기 */ } ]
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
  "grumpig": /* 피그킹 */ [ // [확인] 세트 16개 (5개 초과)
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
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
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
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ }, { "slug": "whirlwind" /* 날려버리기 */ } ],
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  }
  
  ],
  "ninetales": /* 나인테일 */ [
  {
    "item": "heat-rock" /* 뜨거운바위 */,
    "ability": "drought" /* 가뭄 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ]
    ]
  },
  {
    "item": "heat-rock" /* 뜨거운바위 */,
    "ability": "drought" /* 가뭄 */,
    "moves": [
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ]
    ]
  },
  {
    "item": "heat-rock" /* 뜨거운바위 */,
    "ability": "drought" /* 가뭄 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ground" } ]
    ]
  }
  ],
  "ninetales-alola": /* 나인테일 (알로라) */ [
  {
    "item": "light-clay" /* 빛의점토 */,
    "ability": "snow-warning" /* 눈퍼뜨리기 */,
    "moves": [
      [ { "slug": "aurora-veil" /* 오로라베일 */ } ],
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ }, { "slug": "encore" /* 앙코르 */ } ]
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
  "gorebyss": /* 분홍장이 */ [ // [확인] 세트 2개 전부 잠재파워 2 → 지우면 세트가 모두 사라짐
  {
    "item": "white-herb" /* 하양허브 */,
    "ability": "swift-swim" /* 쓱쓱 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ]
    ]
  },
  {
    "item": "white-herb" /* 하양허브 */,
    "ability": "swift-swim" /* 쓱쓱 */,
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "draining-kiss" /* 드레인키스 */ } ]
    ]
  }
  ],
  "gothitelle": /* 고디모아젤 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "competitive" /* 승기 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "mean-look" /* 검은눈빛 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ]
    ]
  },
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
      [ { "slug": "crunch" /* 깨물어부수기 */ } ]
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
  "zebstrika": /* 제브라이카 */ [ // [확인] 세트 2개 전부 잠재파워 2 → 지우면 세트가 모두 사라짐
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sap-sipper" /* 초식 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "flame-charge" /* 니트로차지 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "trailblaze" /* 개척하기 */ } ]
    ]
  }
  ],
  // $$ 도구가 없는 세트뿐이라 그대로 남김 - 도구를 채워 넣을 것
  "jumpluff": /* 솜솜코 */ [
  {
    "item": "focus-sash",
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "seed-bomb" /* 씨폭탄 */ } ],
      [ { "slug": "memento" /* 추억의선물 */ } ]
    ]
  },
  {
    "item": "focus-sash",
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "seed-bomb" /* 씨폭탄 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "focus-sash",
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
  "raichu": /* 라이츄 */ /* 메가진화 가능: 메가라이츄X, 메가라이츄Y */ [ // [확인] 세트 8개 (5개 초과)
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
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
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ]
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
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  /* 메가진화 세트: 메가라이츄X (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "raichunite-x" /* 라이츄나이트X */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "fake-out" /* 속이기 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "volt-tackle" /* 볼트태클 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ]
    ]
  },
  /* 메가진화 세트: 메가라이츄Y (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "raichunite-y" /* 라이츄나이트Y */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "zap-cannon" /* 전자포 */ } ]
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
      [ { "slug": "dragon-tail" /* 드래곤테일 */ } ]
    ]
  }
  ],
  "politoed": /* 왕구리 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "drizzle" /* 잔비 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "electric" } ],
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  {
    "item": "eject-button" /* 탈출버튼 */,
    "ability": "drizzle" /* 잔비 */,
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
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "mirror-coat" /* 미러코트 */ } ],
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
  "electrode": /* 붐볼 */ [ // [확인] 세트 1개 전부 잠재파워 1 → 지우면 세트가 모두 사라짐
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "soundproof" /* 방음 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "signal-beam" /* 시그널빔 */ } ],
      [ { "slug": "hyper-beam" /* 파괴광선 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "soundproof" /* 방음 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "mirror-coat" /* 미러코트 */ } ]
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
      [ { "slug": "flamethrower" /* 화염방사 */ } ]
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
      [ { "slug": "toxic" /* 맹독 */ } ],
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
  "toxapex": /* 더시마사리 */ [ // [확인] 세트 10개 (5개 초과)
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
      [ { "slug": "grass-knot" /* 풀묶기 */ } ],
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
  ],
  "buzzwole": /* 매시붕 */ [ // [확인] 세트 10개 (5개 초과)
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
  "tapu-koko": /* 카푸꼬꼬꼭 */ [ // [확인] 세트 10개 (5개 초과)
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "electric-surge" /* 일렉트릭메이커 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "electric-surge" /* 일렉트릭메이커 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "natures-madness" /* 자연의분노 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ]
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
    "item": "magnet" /* 자석 */,
    "ability": "electric-surge" /* 일렉트릭메이커 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "natures-madness" /* 자연의분노 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ]
    ]
  },
  {
    "item": "magnet" /* 자석 */,
    "ability": "electric-surge" /* 일렉트릭메이커 */,
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "natures-madness" /* 자연의분노 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
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
  // $$ 도구가 없는 세트뿐이라 그대로 남김 - 도구를 채워 넣을 것
  "naganadel": /* 아고용 */ [
  {
    "item": "life-orb",
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ]
    ]
  }
  ],
  "blacephalon": /* 두파팡 */ [ // [확인] 세트 11개 (5개 초과)
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
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
      [ { "slug": "mind-blown" /* 깜짝헤드 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "mind-blown" /* 깜짝헤드 */ } ],
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
      [ { "slug": "mind-blown" /* 깜짝헤드 */ } ]
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
      [ { "slug": "mind-blown" /* 깜짝헤드 */ } ]
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
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
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
      [ { "slug": "psycho-cut" /* 사이코커터 */ } ]
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
  ],
  "moltres": /* 파이어 */ [ // [확인] 세트 7개 (5개 초과)
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "scorching-sands" /* 열사의대지 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ } ],
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
      [ { "slug": "will-o-wisp" /* 도깨비불 */ }, { "slug": "roar" /* 울부짖기 */ } ],
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
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "soak" /* 물붓기 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "counter" /* 카운터 */ } ]
    ]
  }
  ],
  "ribombee": /* 에리본 */ [ // [확인] 세트 8개 (5개 초과)
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
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "energy-ball" /* 에너지볼 */ } ],
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
      [ { "slug": "sticky-web" /* 끈적끈적네트 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "bug-buzz" /* 벌레의야단법석 */ } ],
      [ { "slug": "quiver-dance" /* 나비춤 */ }, { "slug": "stun-spore" /* 저리가루 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "shield-dust" /* 인분 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "u-turn" /* 유턴 */ } ]
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
  "tapu-bulu": /* 카푸브루루 */ [ // [확인] 세트 6개 (5개 초과)
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "grassy-surge" /* 그래스메이커 */,
    "moves": [
      [ { "slug": "wood-hammer" /* 우드해머 */ } ],
      [ { "slug": "horn-leech" /* 우드호른 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "megahorn" /* 메가폰 */ } ]
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
  "tapu-fini": /* 카푸느지느 */ [ // [확인] 세트 8개 (5개 초과)
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "misty-surge" /* 미스트메이커 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "misty-surge" /* 미스트메이커 */,
    "moves": [
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "natures-madness" /* 자연의분노 */ } ],
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
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
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "misty-surge" /* 미스트메이커 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
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
  "volcanion": /* 볼케니온 */ [ // [확인] 세트 12개 (5개 초과)
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
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
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
      [ { "slug": "explosion" /* 대폭발 */ } ],
      [ { "slug": "steam-eruption" /* 스팀버스트 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "explosion" /* 대폭발 */ } ],
      [ { "slug": "steam-eruption" /* 스팀버스트 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
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
      [ { "slug": "explosion" /* 대폭발 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "steam-eruption" /* 스팀버스트 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ } ]
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
      [ { "slug": "explosion" /* 대폭발 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  }
  ],
  "nidoking": /* 니드킹 */ [ // [확인] 세트 9개 (5개 초과)
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "ice-beam" /* 냉동빔 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "taunt" /* 도발 */ } ]
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
      [ { "slug": "curse" /* 저주 */ } ]
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
      [ { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ]
    ]
  },
  ],
  "araquanid": /* 깨비물거미 */ [ // [확인] 세트 7개 (5개 초과)
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
  "amoonguss": /* 뽀록나 */ [ // [확인] 세트 7개 (5개 초과)
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "spore" /* 버섯포자 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "clear-smog" /* 클리어스모그 */ } ]
    ]
  },
  {
    "item": "black-sludge" /* 검은오물 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "spore" /* 버섯포자 */ } ],
      [ { "slug": "clear-smog" /* 클리어스모그 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ }, { "slug": "foul-play" /* 속임수 */ } ],
      [ { "slug": "stun-spore" /* 저리가루 */ } ],
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
  "primarina": /* 누리레느 */ [ // [확인] 세트 9개 (5개 초과)
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
      [ { "slug": "calm-mind" /* 명상 */ } ]
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
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "plasma-fists" /* 플라스마피스트 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "bulk-up" /* 벌크업 */ }, { "slug": "volt-switch" /* 볼트체인지 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  // $$ 도구가 없는 세트뿐이라 그대로 남김 - 도구를 채워 넣을 것
  "pidgeot": /* 피죤투 */ /* 메가진화 가능: 메가피죤투 */ [
  {
    "item": "life-orb",
    "ability": "big-pecks" /* 부풀린가슴 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "work-up" /* 분발 */ }, { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ground" } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "sitrus-berry",
    "ability": "big-pecks" /* 부풀린가슴 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots",
    "ability": "big-pecks" /* 부풀린가슴 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "defog" /* 안개제거 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-scarf",
    "ability": "big-pecks" /* 부풀린가슴 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "ground" } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  /* 메가진화 세트: 메가피죤투 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "pidgeotite" /* 피죤투나이트 */,
    "ability": "big-pecks" /* 부풀린가슴 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "hyper-beam" /* 파괴광선 */ } ]
    ]
  }
  ],
  "starmie": /* 아쿠스타 */ /* 메가진화 가능: 메가아쿠스타 */ [ // [확인] 세트 7개 (5개 초과)
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "reflect-type" /* 미러타입 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ]
    ]
  },
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
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  /* 메가진화 세트: 메가아쿠스타 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "starminite" /* 아쿠스타나이트 */,
    "ability": "analytic" /* 애널라이즈 */,
    "moves": [
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ],
      [ { "slug": "ice-spinner" /* 아이스스피너 */ }, { "slug": "psycho-cut" /* 사이코커터 */ } ]
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
  "nihilego": /* 텅비드 */ [ // [확인] 세트 9개 (5개 초과)
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
  }
  ],
  "salazzle": /* 염뉴트 */ [ // [확인] 세트 8개 (5개 초과)
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
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "corrosion" /* 부식 */,
    "moves": [
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "corrosion" /* 부식 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "oblivious" /* 둔감 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ }, { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "corrosion" /* 부식 */,
    "moves": [
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "corrosion" /* 부식 */,
    "moves": [
      [ { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "corrosion" /* 부식 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ }, { "slug": "flamethrower" /* 화염방사 */ } ]
    ]
  }
  ],
  "steelix": /* 강철톤 */ /* 메가진화 가능: 메가강철톤 */ [
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
  },
  /* 메가진화 세트: 메가강철톤 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "steelixite" /* 강철톤나이트 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "fissure" /* 땅가르기 */ } ]
    ]
  }
  ],
  "bewear": /* 이븐곰 */ [ // [확인] 세트 8개 (5개 초과)
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
  "necrozma": /* 네크로즈마 */ [ // [확인] 세트 9개 (5개 초과)
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
  "decidueye": /* 모크나이퍼 */ [ // [확인] 세트 6개 (5개 초과)
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
      [ { "slug": "heavy-slam" /* 헤비봄버 */ }, { "slug": "protect" /* 방어 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sand-stream" /* 모래날림 */,
    "moves": [
      [ { "slug": "rock-blast" /* 락블레스트 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "protect" /* 방어 */ }, { "slug": "toxic" /* 맹독 */ } ]
    ]
  }
  ],
  "golisopod": /* 갑주무사 */ /* 메가진화 가능: 메가갑주무사 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "emergency-exit" /* 위기회피 */,
    "moves": [
      [ { "slug": "first-impression" /* 만나자마자 */ },{ "slug": "sucker-punch" /* 기습 */ }, { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ],
      [ { "slug": "leech-life" /* 흡혈 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ]
    ]
  },
  /* 메가진화 세트: 메가갑주무사 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "golisopite" /* 갑주무사나이트 */,
    "ability": "emergency-exit" /* 위기회피 */,
    "moves": [
      [ { "slug": "first-impression" /* 만나자마자 */ },{ "slug": "sucker-punch" /* 기습 */ }, { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "leech-life" /* 흡혈 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "golisopite" /* 갑주무사나이트 */,
    "ability": "emergency-exit" /* 위기회피 */,
    "moves": [
      [ { "slug": "first-impression" /* 만나자마자 */ },{ "slug": "sucker-punch" /* 기습 */ }, { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "leech-life" /* 흡혈 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ]
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
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ]
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
      [ { "slug": "hone-claws" /* 손톱갈기 */ } ],
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
  "comfey": /* 큐아링 */ [ // [확인] 세트 1개 전부 잠재파워 1 → 지우면 세트가 모두 사라짐
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "triage" /* 힐링시프트 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "draining-kiss" /* 드레인키스 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ]
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
  "incineroar": /* 어흥염 */ [ // [확인] 세트 8개 (5개 초과)
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
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "toxic" /* 맹독 */ }, { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ }, { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "trailblaze" /* 개척하기 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "parting-shot" /* 막말내뱉기 */ } ]
    ]
  }
  ],
  "togedemaru": /* 토게데마루 */ [ // [확인] 세트 7개 (5개 초과)
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
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "lightning-rod" /* 피뢰침 */,
    "moves": [
      [ { "slug": "zing-zap" /* 찌리리따끔따끔 */ } ],
      [ { "slug": "wish" /* 희망사항 */ } ],
      [ { "slug": "spiky-shield" /* 니들가드 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
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
  // $$ 도구가 없는 세트뿐이라 그대로 남김 - 도구를 채워 넣을 것
  "bellossom": /* 아르코 */ [
  {
    "item": "focus-sash",
    "ability": "chlorophyll" /* 엽록소 */,
    "moves": [
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "strength-sap" /* 힘흡수 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "moonblast" /* 문포스 */ }, { "slug": "safeguard" /* 신비의부적 */ } ]
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
  "drampa": /* 할비롱 */ /* 메가진화 가능: 메가할비롱 */ [
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
  },
  /* 메가진화 세트: 메가할비롱 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "drampanite" /* 할비롱나이트 */,
    "ability": ["berserk","sap-sipper"] /* 발끈, 초식 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "surf" /* 파도타기 */ }, { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
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
      [ { "slug": "rock-slide" /* 스톤샤워 */ }, { "slug": "roar" /* 울부짖기 */ } ]
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
  "victreebel": /* 우츠보트 */ /* 메가진화 가능: 메가우츠보트 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "chlorophyll" /* 엽록소 */,
    "moves": [
      [ { "slug": "sunny-day" /* 쾌청 */ } ],
      [ { "slug": "solar-beam" /* 솔라빔 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "weather-ball" /* 웨더볼 */ } ]
    ]
  },
  /* 메가진화 세트: 메가우츠보트 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "victreebelite" /* 우츠보트나이트 */,
    "ability": "chlorophyll" /* 엽록소 */,
    "moves": [
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "strength-sap" /* 힘흡수 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  }
  ],
  "crabominable": /* 모단단게 */ /* 메가진화 가능: 메가모단단게 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "ice-hammer" /* 아이스해머 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "pursuit" /* 따라가때리기 */ } ]
    ]
  },
  /* 메가진화 세트: 메가모단단게 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "crabominite" /* 모단단게나이트 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "ice-hammer" /* 아이스해머 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ }, { "slug": "mach-punch" /* 마하펀치 */ }, { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ } ]
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
  "lapras": /* 라프라스 */ [ // [확인] 세트 1개 전부 잠재파워 1 → 지우면 세트가 모두 사라짐
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ } ],
      [ { "slug": "blizzard" /* 눈보라 */ } ],
      [ { "slug": "hydro-pump" /* 하이드로펌프 */ }, { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  }
  ],
  "walrein": /* 씨카이저 */ [ // [확인] 세트 1개 전부 잠재파워 1 → 지우면 세트가 모두 사라짐
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "thick-fat" /* 두꺼운지방 */,
    "moves": [
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "sheer-cold" /* 절대영도 */ } ],
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
  "zarude": /* 자루도 */ [ // [확인] 세트 7개 (5개 초과)
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "leaf-guard" /* 리프가드 */,
    "moves": [
      [ { "slug": "darkest-lariat" /* DD래리어트 */ } ],
      [ { "slug": "power-whip" /* 파워휩 */ } ],
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "jungle-healing" /* 정글힐 */ } ]
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
  "dragapult": /* 드래펄트 */ [ // [확인] 세트 6개 (5개 초과)
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "thunder" /* 번개 */ }, { "slug": "hydro-pump" /* 하이드로펌프 */ } ]
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
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "infiltrator" /* 틈새포착 */,
    "moves": [
      [ { "slug": "dragon-darts" /* 드래곤애로 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
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
      [ { "slug": "stored-power" /* 어시스트파워 */ } ],
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
    "item": "light-clay" /* 빛의점토 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "reflect" /* 리플렉터 */ } ],
      [ { "slug": "light-screen" /* 빛의장막 */ } ],
      [ { "slug": "parting-shot" /* 막말내뱉기 */ } ],
      [ { "slug": "spirit-break" /* 소울크래시 */ } ]
    ]
  }
  ],
  "regidrago": /* 레지드래고 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
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
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "heavy-metal" /* 헤비메탈 */,
    "moves": [
      [ { "slug": "heavy-slam" /* 헤비봄버 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ }, { "slug": "protect" /* 방어 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "whirlwind" /* 날려버리기 */ }, { "slug": "protect" /* 방어 */ }, { "slug": "earthquake" /* 지진 */ } ]
    ]
  }
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
      [ { "slug": "surf" /* 파도타기 */ } ],
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
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ]
    ]
  }
  ],
  "eldegoss": /* 백솜모카 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "grass-knot" /* 풀묶기 */ }, { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "grass-knot" /* 풀묶기 */ }, { "slug": "leaf-storm" /* 리프스톰 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "sleep-powder" /* 수면가루 */ } ],
      [ { "slug": "pollen-puff" /* 꽃가루경단 */ }, { "slug": "synthesis" /* 광합성 */ } ]
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
    "item": "focus-sash" /* 기합의띠 */,
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
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "chilling-neigh" /* 백의울음 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
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
      [ { "slug": "protect" /* 방어 */ } ]
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
    "item": "sitrus-berry" /* 자뭉열매 */,
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
  } ,
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "sword-of-ruin" /* 재앙의검 */,
    "moves": [
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ }, { "slug": "ice-spinner" /* 아이스스피너 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ]
    ]
  }
  ],
  "glimmora": /* 킬라플로르 */ /* 메가진화 가능: 메가킬라플로르 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "toxic-debris" /* 독치장 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "mortal-spin" /* 킬러스핀 */ } ],
      [ { "slug": "mud-shot" /* 머드숏 */ } ],
      [ { "slug": "power-gem" /* 파워젬 */ }, { "slug": "sludge-wave" /* 오물웨이브 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "toxic-debris" /* 독치장 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "mortal-spin" /* 킬러스핀 */ } ],
      [ { "slug": "mud-shot" /* 머드숏 */ } ],
      [ { "slug": "power-gem" /* 파워젬 */ }, { "slug": "sludge-wave" /* 오물웨이브 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "corrosion" /* 부식 */,
    "moves": [
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "spiky-shield" /* 니들가드 */ } ],
      [ { "slug": "power-gem" /* 파워젬 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ }, { "slug": "sludge-wave" /* 오물웨이브 */ }, { "slug": "energy-ball" /* 에너지볼 */ } ]
    ]
  },
  /* 메가진화 세트: 메가킬라플로르 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "glimmoranite" /* 킬라플로르나이트 */,
    "ability": "toxic-debris" /* 독치장 */,
    "moves": [
      [ { "slug": "power-gem" /* 파워젬 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ]
    ]
  }
  ],
  "iron-bundle": /* 무쇠보따리 */ [
  {
    "item": "booster-energy" /* 부스트에너지 */,
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
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "supreme-overlord" /* 총대장 */,
    "moves": [
      [ { "slug": "kowtow-cleave" /* 도각참 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "low-kick" /* 안다리걸기 */ } ],
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
    "item": "focus-sash" /* 기합의띠 */,
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
  },
  ],
  "skeledirge": /* 라우드본 */ [
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "torch-song" /* 플레어송 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "slack-off" /* 태만함 */ } ]
    ]
  },
  ],
  "gholdengo": /* 타부자고 */ [
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "good-as-gold" /* 황금몸 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "good-as-gold" /* 황금몸 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "make-it-rain" /* 골드러시 */ } ],
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
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "headlong-rush" /* 들이받기 */ } ],
      [ { "slug": "ice-spinner" /* 아이스스피너 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "close-combat" /* 인파이트 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "headlong-rush" /* 들이받기 */ } ],
      [ { "slug": "ice-spinner" /* 아이스스피너 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  ],
  // $$ 도구가 없는 세트뿐이라 그대로 남김 - 도구를 채워 넣을 것
  "iron-moth": /* 무쇠독나방 */ [
  {
    "item": "booster-energy",
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "fiery-dance" /* 불꽃춤 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "booster-energy",
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "fiery-dance" /* 불꽃춤 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ }, { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ]
    ]
  },
  {
    "item": "booster-energy",
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "fiery-dance" /* 불꽃춤 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ }, { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ]
    ]
  },
  {
    "item": "booster-energy",
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "fiery-dance" /* 불꽃춤 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ }, { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ]
    ]
  }
  ],
  // $$ 도구가 없는 세트뿐이라 그대로 남김 - 도구를 채워 넣을 것
  "iron-valiant": /* 무쇠무인 */ [ // [확인] 세트 6개 (5개 초과)
  {
    "item": "booster-energy",
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "booster-energy",
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ]
    ]
  },
  {
    "item": "booster-energy",
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ]
    ]
  },
  {
    "item": "booster-energy",
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "spirit-break" /* 소울크래시 */ }, { "slug": "encore" /* 앵콜 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "booster-energy",
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "encore" /* 앵콜 */ }, { "slug": "destiny-bond" /* 길동무 */ } ]
    ]
  },
  {
    "item": "booster-energy",
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
    "item": "sitrus-berry" /* 자뭉열매 */,
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
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "blaze" /* 맹화 */,
    "moves": [
      [ { "slug": "pyro-ball" /* 화염볼 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "court-change" /* 코트체인지 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
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
  // $$ 도구가 없는 세트뿐이라 그대로 남김 - 도구를 채워 넣을 것
  "roaring-moon": /* 고동치는달 */ [
  {
    "item": "booster-energy",
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "booster-energy",
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "dragon-dance" /* 용의춤 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  }
  ],
  "ogerpon": /* 오거폰 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "defiant" /* 오기 */,
    "moves": [
      [ { "slug": "ivy-cudgel" /* 덩굴방망이 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "encore" /* 앵콜 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "defiant" /* 오기 */,
    "moves": [
      [ { "slug": "ivy-cudgel" /* 덩굴방망이 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ }, { "slug": "stomping-tantrum" /* 분함의발구르기 */ } ]
    ]
  }
  ],
  "sinistcha": /* 그우린차 */ [
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
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
  },
  {
    "item": "focus-sash" /* 기합의 띠 */,
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
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
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
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "waterfall" /* 폭포오르기 */ } ],
      [ { "slug": "curse" /* 저주 */ }, { "slug": "avalanche" /* 눈사태 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "unaware" /* 천진 */,
    "moves": [
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "avalanche" /* 눈사태 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
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
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "fickle-beam" /* 변덕레이저 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "giga-drain" /* 기가드레인 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
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
    "item": "life-orb" /* 생명의구슬 */,
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
    "item": "choice-scarf" /* 구애스카프 */,
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
    "item": "life-orb" /* 생명의구슬 */,
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
    "item": "booster-energy" /* 부스트에너지 */,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "first-impression" /* 만나자마자 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ }, { "slug": "stun-spore" /* 저리가루 */ } ],
      [ { "slug": "morning-sun" /* 아침햇살 */ } ]
    ]
  },
  {
    "item": "booster-energy" /* 부스트에너지 */,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "first-impression" /* 만나자마자 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ }, { "slug": "stun-spore" /* 저리가루 */ } ]
    ]
  },
  {
    "item": "booster-energy" /* 부스트에너지 */,
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
  "sandy-shocks": /* 모래털가죽 */ [ // [확인] 세트 1개 전부 테라버스트 1 → 지우면 세트가 모두 사라짐
  {
    "item": "booster-energy" /* 부스트에너지 */,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "mud-shot" /* 머드숏 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ }, { "slug": "stealth-rock" /* 스텔스록 */ } ]
    ]
  }
  ],
  "fezandipiti": /* 기로치 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "toxic-chain" /* 독사슬 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "beat-up" /* 집단구타 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "toxic-chain" /* 독사슬 */,
    "moves": [
      [ { "slug": "moonblast" /* 문포스 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
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
    "item": "focus-sash" /* 기합의띠 */,
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
    "item": "life-orb" /* 생명의구슬 */,
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
    "item": "life-orb" /* 생명의구슬 */,
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
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "barb-barrage" /* 독침천발 */ } ],
      [ { "slug": "throat-chop" /* 지옥찌르기 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "taunt" /* 도발 */ }, { "slug": "haze" /* 흑안개 */ }, { "slug": "pain-split" /* 아픔나누기 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
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
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "toxic-chain" /* 독사슬 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ }, { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
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
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "toxic-chain" /* 독사슬 */,
    "moves": [
      [ { "slug": "sludge-wave" /* 오물웨이브 */ }, { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
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
    "item": "booster-energy" /* 부스트에너지 */,
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
    "item": "leftovers" /* 먹다남은음식 */,
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
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "iron-fist" /* 철주먹 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "double-shock" /* 전광쌍격 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "mach-punch" /* 마하펀치 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의 띠 */,
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
    "item": "focus-sash" /* 기합의 띠 */,
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
    "item": "focus-sash" /* 기합의 띠 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "fake-out" /* 속이다 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "triple-axel" /* 트리플악셀 */ } ]
    ]
  }
  ],
  // ===== 쇼다운 배틀 팩토리에서 가져와 나중에 추가한 세트 (여기부터 파일 끝까지) =====
  // 처음 모은 세트에서 빠져 있던 포켓몬 중 쇼다운 6~9세대 세트가 있는 종을 변환해 넣은 부분입니다.
  // 종마다 가장 최근 세대의 세트만 넣었고, 이 게임에 없는 기술/도구는 뺐습니다.
  "deoxys-normal": /* 테오키스 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "pressure" /* 프레셔 */,
    "moves": [
      [ { "slug": "psycho-boost" /* 사이코부스트 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "spikes" /* 압정뿌리기 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  }
  ],
  "shaymin-land": /* 쉐이미 */ [ // [확인] 세트 2개 전부 잠재파워 2 → 지우면 세트가 모두 사라짐
  {
    "item": null,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "celebrate" /* 축하 */ } ],
      [ { "slug": "seed-flare" /* 시드플레어 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "natural-cure" /* 자연회복 */,
    "moves": [
      [ { "slug": "seed-flare" /* 시드플레어 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  }
  ],
  "darmanitan-standard": /* 불비달마 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ }, { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ }, { "slug": "superpower" /* 엄청난힘 */ } ]
    ]
  }
  ],
  "jellicent-male": /* 탱탱겔 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ }, { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "colbur-berry" /* 마코열매 */,
    "ability": ["water-absorb" /* 저수 */, "cursed-body" /* 저주받은바디 */],
    "moves": [
      [ { "slug": "recover" /* HP회복 */ } ],
      [ { "slug": "hex" /* 병상첨병 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "water-absorb" /* 저수 */,
    "moves": [
      [ { "slug": "water-spout" /* 해수스파우팅 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ],
      [ { "slug": "surf" /* 파도타기 */ }, { "slug": "hydro-pump" /* 하이드로펌프 */ } ]
    ]
  }
  ],
  "tornadus-incarnate": /* 토네로스 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "defiant" /* 오기 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ }, { "slug": "bleakwind-storm" /* 찬바람폭풍 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ }, { "slug": "grass-knot" /* 풀묶기 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ }, { "slug": "bleakwind-storm" /* 찬바람폭풍 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ]
    ]
  },
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "defiant" /* 오기 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ]
    ]
  },
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "defiant" /* 오기 */,
    "moves": [
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ],
      [ { "slug": "brick-break" /* 깨뜨리다 */ }, { "slug": "hammer-arm" /* 암해머 */ } ]
    ]
  }
  ],
  "thundurus-incarnate": /* 볼트로스 */ [
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "prankster" /* 짓궂은마음 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ } ],
      [ { "slug": "eerie-impulse" /* 괴전파 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "defiant" /* 오기 */,
    "moves": [
      [ { "slug": "wild-charge" /* 와일드볼트 */ } ],
      [ { "slug": "fly" /* 공중날기 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ } ],
      [ { "slug": "bulk-up" /* 벌크업 */ } ]
    ]
  }
  ],
  "landorus-incarnate": /* 랜드로스 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ }, { "slug": "psychic" /* 사이코키네시스 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ }, { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sheer-force" /* 우격다짐 */,
    "moves": [
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ }, { "slug": "nasty-plot" /* 나쁜음모 */ }, { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ]
    ]
  }
  ],
  "keldeo-ordinary": /* 케르디오 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "aura-sphere" /* 파동탄 */ } ],
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ],
      [ { "slug": "vacuum-wave" /* 진공파 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "secret-sword" /* 신비의칼 */ } ],
      [ { "slug": "surf" /* 파도타기 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "justified" /* 정의의마음 */,
    "moves": [
      [ { "slug": "secret-sword" /* 신비의칼 */ } ],
      [ { "slug": "surf" /* 파도타기 */ }, { "slug": "hydro-pump" /* 하이드로펌프 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ],
      [ { "slug": "vacuum-wave" /* 진공파 */ } ]
    ]
  }
  ],
  "meloetta-aria": /* 메로엣타 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "trick" /* 트릭 */ }, { "slug": "focus-blast" /* 기합구슬 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ }, { "slug": "psyshock" /* 사이코쇼크 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
    ]
  }
  ],
  "pyroar-male": /* 화염레오 */ [ // [확인] 세트 2개 전부 잠재파워 2 → 지우면 세트가 모두 사라짐
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "unnerve" /* 긴장감 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "sunny-day" /* 쾌청 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "unnerve" /* 긴장감 */,
    "moves": [
      [ { "slug": "fire-blast" /* 불대문자 */ } ],
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "sunny-day" /* 쾌청 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ }, { "slug": "overheat" /* 오버히트 */ } ]
    ]
  }
  ],
  "aegislash-shield": /* 킬가르도 */ [
  {
    "item": "weakness-policy" /* 약점보험 */,
    "ability": "stance-change",
    "moves": [
      [ { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ }, { "slug": "sacred-sword" /* 성스러운칼 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "kings-shield" /* 킹실드 */ }, { "slug": "shadow-claw" /* 섀도클로 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "stance-change",
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ }, { "slug": "steel-beam" /* 철제광선 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ]
    ]
  },
  {
    "item": "weakness-policy" /* 약점보험 */,
    "ability": "stance-change",
    "moves": [
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "air-slash" /* 에어슬래시 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "stance-change",
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ]
    ]
  }
  ],
  "gourgeist-average": /* 펌킨인 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "frisk" /* 통찰 */,
    "moves": [
      [ { "slug": "seed-bomb" /* 씨폭탄 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "leech-seed" /* 씨뿌리기 */ } ],
      [ { "slug": "synthesis" /* 광합성 */ } ]
    ]
  }
  ],
  "oricorio-baile": /* 춤추새 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "dancer",
    "moves": [
      [ { "slug": "quiver-dance" /* 나비춤 */ } ],
      [ { "slug": "revelation-dance" /* 잠재댄스 */ } ],
      [ { "slug": "hurricane" /* 폭풍 */ }, { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  }
  ],
  "lycanroc-midday": /* 루가루암 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sand-rush" /* 모래헤치기 */,
    "moves": [
      [ { "slug": "accelerock" /* 액셀록 */ } ],
      [ { "slug": "stone-edge" /* 스톤에지 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  }
  ],
  "wishiwashi-solo": /* 약어리 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "schooling",
    "moves": [
      [ { "slug": "scald" /* 열탕 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  }
  ],
  "type-null": /* 타입:널 */ [
  {
    "item": "eviolite" /* 진화의휘석 */,
    "ability": "battle-armor" /* 전투무장 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ }, { "slug": "toxic" /* 맹독 */ }, { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "rest" /* 잠자기 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "return" /* 은혜갚기 */ } ]
    ]
  }
  ],
  "minior-red-meteor": /* 메테노 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "shields-down",
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "power-gem" /* 파워젬 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "shields-down",
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  },
  {
    "item": "white-herb" /* 하양허브 */,
    "ability": "shields-down",
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "power-gem" /* 파워젬 */ } ]
    ]
  },
  {
    "item": "white-herb" /* 하양허브 */,
    "ability": "shields-down",
    "moves": [
      [ { "slug": "shell-smash" /* 껍질깨기 */ } ],
      [ { "slug": "acrobatics" /* 애크러뱃 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "hidden-power" /* 잠재파워 */, "hpType": "fire" } ]
    ]
  }
  ],
  "mimikyu-disguised": /* 따라큐 */ [ // [확인] 세트 8개 (5개 초과)
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "disguise",
    "moves": [
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "curse" /* 저주 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "disguise",
    "moves": [
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ }, { "slug": "shadow-claw" /* 섀도클로 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "disguise",
    "moves": [
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "shadow-claw" /* 섀도클로 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  },
  {
    "item": "covert-cloak" /* 은밀망토 */,
    "ability": "disguise",
    "moves": [
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ }, { "slug": "shadow-claw" /* 섀도클로 */ } ],
      [ { "slug": "curse" /* 저주 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "disguise",
    "moves": [
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "wood-hammer" /* 우드해머 */ } ],
      [ { "slug": "curse" /* 저주 */ } ]
    ]
  },
  {
    "item": "covert-cloak" /* 은밀망토 */,
    "ability": "disguise",
    "moves": [
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "curse" /* 저주 */ } ],
      [ { "slug": "trick-room" /* 트릭룸 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ]
    ]
  },
  {
    "item": "figy-berry" /* 무화열매 */,
    "ability": "disguise",
    "moves": [
      [ { "slug": "shadow-claw" /* 섀도클로 */ }, { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "curse" /* 저주 */ } ],
      [ { "slug": "pain-split" /* 아픔나누기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "disguise",
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "play-rough" /* 치근거리기 */ } ],
      [ { "slug": "shadow-claw" /* 섀도클로 */ } ]
    ]
  }
  ],
  "pheromosa": /* 페로코체 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "beast-boost" /* 비스트부스트 */,
    "moves": [
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "triple-axel" /* 트리플악셀 */ } ],
      [ { "slug": "poison-jab" /* 독찌르기 */ }, { "slug": "drill-run" /* 드릴라이너 */ } ]
    ]
  }
  ],
  "toxtricity-amped": /* 스트린더 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "punk-rock",
    "moves": [
      [ { "slug": "overdrive" /* 오버드라이브 */ } ],
      [ { "slug": "boomburst" /* 폭음파 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "sludge-bomb" /* 오물폭탄 */ }, { "slug": "snarl" /* 바크아웃 */ } ]
    ]
  }
  ],
  "indeedee-male": /* 에써르 */ [
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "psychic-surge" /* 사이코메이커 */,
    "moves": [
      [ { "slug": "expanding-force" /* 와이드포스 */ } ],
      [ { "slug": "mystical-fire" /* 매지컬플레임 */ }, { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "trick" /* 트릭 */ }, { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "psychic-surge" /* 사이코메이커 */,
    "moves": [
      [ { "slug": "expanding-force" /* 와이드포스 */ } ],
      [ { "slug": "mystical-fire" /* 매지컬플레임 */ } ],
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "trick" /* 트릭 */ } ]
    ]
  }
  ],
  "dracozolt": /* 파치래곤 */ [
  {
    "item": "power-herb" /* 파워풀허브 */,
    "ability": "sand-rush" /* 모래헤치기 */,
    "moves": [
      [ { "slug": "bolt-beak" /* 전격부리 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "meteor-beam" /* 메테오빔 */ } ],
      [ { "slug": "fire-blast" /* 불대문자 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "hustle" /* 의욕 */,
    "moves": [
      [ { "slug": "bolt-beak" /* 전격부리 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "aerial-ace" /* 제비반환 */ } ],
      [ { "slug": "fire-fang" /* 불꽃엄니 */ }, { "slug": "low-kick" /* 안다리걸기 */ } ]
    ]
  }
  ],
  "arctozolt": /* 파치르돈 */ [
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "slush-rush" /* 눈치우기 */,
    "moves": [
      [ { "slug": "bolt-beak" /* 전격부리 */ } ],
      [ { "slug": "icicle-spear" /* 고드름침 */ }, { "slug": "icicle-crash" /* 고드름떨구기 */ } ],
      [ { "slug": "low-kick" /* 안다리걸기 */ }, { "slug": "stomping-tantrum" /* 분함의발구르기 */ } ],
      [ { "slug": "freeze-dry" /* 프리즈드라이 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  }
  ],
  "dracovish": /* 어래곤 */ [
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "strong-jaw" /* 옹골찬턱 */,
    "moves": [
      [ { "slug": "fishious-rend" /* 아가미물기 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "sleep-talk" /* 잠꼬대 */ } ],
      [ { "slug": "dive" /* 다이빙 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "strong-jaw" /* 옹골찬턱 */,
    "moves": [
      [ { "slug": "fishious-rend" /* 아가미물기 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "sand-rush" /* 모래헤치기 */,
    "moves": [
      [ { "slug": "fishious-rend" /* 아가미물기 */ } ],
      [ { "slug": "outrage" /* 역린 */ } ],
      [ { "slug": "rock-blast" /* 록블라스트 */ } ],
      [ { "slug": "psychic-fangs" /* 사이코팽 */ }, { "slug": "protect" /* 방어 */ } ]
    ]
  }
  ],
  "urshifu-single-strike": /* 우라오스 일격의 태세*/ [ // [확인] 세트 6개 (5개 초과)
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "unseen-fist",
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "wicked-blow" /* 암흑강타 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ }, { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "unseen-fist",
    "moves": [
      [ { "slug": "counter" /* 카운터 */ }, { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "wicked-blow" /* 암흑강타 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "unseen-fist",
    "moves": [
      [ { "slug": "wicked-blow" /* 암흑강타 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "ice-spinner" /* 아이스스피너 */ }, { "slug": "poison-jab" /* 독찌르기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "unseen-fist",
    "moves": [
      [ { "slug": "wicked-blow" /* 암흑강타 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ }, { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "unseen-fist",
    "moves": [
      [ { "slug": "wicked-blow" /* 암흑강타 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "ice-spinner" /* 아이스스피너 */ }, { "slug": "poison-jab" /* 독찌르기 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "punching-glove", /* 펀칭글러브 */
    "ability": "unseen-fist",
    "moves": [
      [ { "slug": "wicked-blow" /* 암흑강타 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ }, { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ]
    ]
  }
  ],
  "urshifu-rapid-strike": /* 우라오스 연격의 태세 */ [ // [확인] 세트 6개 (5개 초과)
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "unseen-fist",
    "moves": [
      [ { "slug": "ice-spinner" /* 아이스스피너 */ }, { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "surging-strikes" /* 수류연타 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "unseen-fist",
    "moves": [
      [ { "slug": "counter" /* 카운터 */ } ],
      [ { "slug": "surging-strikes" /* 수류연타 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ }, { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "unseen-fist",
    "moves": [
      [ { "slug": "surging-strikes" /* 수류연타 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "unseen-fist",
    "moves": [
      [ { "slug": "surging-strikes" /* 수류연타 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "ice-punch" /* 냉동펀치 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "unseen-fist",
    "moves": [
      [ { "slug": "surging-strikes" /* 수류연타 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  }
  ,
  {
    "item": "punching-glove", /* 펀칭글러브 */
    "ability": "unseen-fist",
    "moves": [
      [ { "slug": "surging-strikes" /* 수류연타 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  }
  ],
  "regieleki": /* 레지에레키 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "transistor",
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "volt-switch" /* 볼트체인지 */ }, { "slug": "wild-charge" /* 와일드볼트 */ } ]
    ]
  },
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "transistor",
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ } ],
      [ { "slug": "wild-charge" /* 와일드볼트 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "transistor",
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "extreme-speed" /* 신속 */ }, { "slug": "thunder-cage" /* 썬더프리즌 */ } ]
    ]
  },
  {
    "item": "light-clay" /* 빛의점토 */,
    "ability": "transistor",
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ }, { "slug": "thunder-cage" /* 썬더프리즌 */ } ],
      [ { "slug": "reflect" /* 리플렉터 */ } ],
      [ { "slug": "light-screen" /* 빛의장막 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ]
    ]
  },
  {
    "item": "light-clay" /* 빛의점토 */,
    "ability": "transistor",
    "moves": [
      [ { "slug": "thunderbolt" /* 10만볼트 */ }, { "slug": "thunder-cage" /* 썬더프리즌 */ } ],
      [ { "slug": "reflect" /* 리플렉터 */ } ],
      [ { "slug": "light-screen" /* 빛의장막 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ }, { "slug": "thunder-wave" /* 전기자석파 */ } ]
    ]
  }
  ],
  "spectrier": /* 레이스포스 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "grim-neigh",
    "moves": [
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "draining-kiss" /* 드레인키스 */ } ],
      [ { "slug": "will-o-wisp" /* 도깨비불 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ } ]
    ]
  }
  ],
  "basculegion-male": /* 대쓰여너 */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "last-respects" /* 성묘 */ } ],
      [ { "slug": "wave-crash" /* 웨이브태클 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "wave-crash" /* 웨이브태클 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "agility" /* 고속이동 */ }, { "slug": "endeavor" /* 죽기살기 */ } ],
      [ { "slug": "last-respects" /* 성묘 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "wave-crash" /* 웨이브태클 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "last-respects" /* 성묘 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "wave-crash" /* 웨이브태클 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ],
      [ { "slug": "psychic-fangs" /* 사이코팽 */ }, { "slug": "phantom-force" /* 고스트다이브 */ } ],
      [ { "slug": "aqua-jet" /* 아쿠아제트 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "adaptability" /* 적응력 */,
    "moves": [
      [ { "slug": "wave-crash" /* 웨이브태클 */ } ],
      [ { "slug": "flip-turn" /* 퀵턴 */ } ],
      [ { "slug": "psychic-fangs" /* 사이코팽 */ }, { "slug": "phantom-force" /* 고스트다이브 */ } ],
      [ { "slug": "liquidation" /* 아쿠아브레이크 */ } ]
    ]
  }
  ],
  "sneasler": /* 포푸니크 */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "unburden" /* 곡예 */,
    "moves": [
      [ { "slug": "dire-claw" /* 페이탈클로 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "fake-out" /* 속이기 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "poison-touch" /* 독수 */,
    "moves": [
      [ { "slug": "dire-claw" /* 페이탈클로 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "fake-out" /* 속이기 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  },
  {
    "item": "air-balloon" /* 풍선 */,
    "ability": "unburden" /* 곡예 */,
    "moves": [
      [ { "slug": "dire-claw" /* 페이탈클로 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "shadow-claw" /* 섀도클로 */ } ],
      [ { "slug": "toxic-spikes" /* 독압정 */ } ]
    ]
  }
  ],
  "maushold-family-of-four": /* 파밀리쥐 */ [
  {
    "item": "wide-lens" /* 광각렌즈 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "population-bomb" /* 찍찍베기 */ } ],
      [ { "slug": "bite" /* 물기 */ }, { "slug": "mud-shot" /* 머드샷 */ } ],
      [ { "slug": "encore" /* 앙코르 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "tidy-up" /* 정리정돈 */ } ]
    ]
  },
  {
    "item": "wide-lens" /* 광각렌즈 */,
    "ability": "technician" /* 테크니션 */,
    "moves": [
      [ { "slug": "tidy-up" /* 정리정돈 */ } ],
      [ { "slug": "population-bomb" /* 찍찍베기 */ } ],
      [ { "slug": "bite" /* 물기 */ }, { "slug": "bullet-seed" /* 씨기관총 */ } ],
      [ { "slug": "encore" /* 앙코르 */ } ]
    ]
  }
  ],
  "ceruledge": /* 파라블레이즈 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "flash-fire" /* 타오르는불꽃 */,
    "moves": [
      [ { "slug": "bitter-blade" /* 원념의칼 */ } ],
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "flame-charge" /* 니트로차지 */ }, { "slug": "shadow-sneak" /* 야습 */ }, { "slug": "tera-blast" /* 테라버스트 */ }, { "slug": "will-o-wisp" /* 도깨비불 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "weak-armor" /* 깨어진갑옷 */,
    "moves": [
      [ { "slug": "bitter-blade" /* 원념의칼 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ }, { "slug": "poltergeist" /* 폴터가이스트 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "destiny-bond" /* 길동무 */ }, { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "weak-armor" /* 깨어진갑옷 */,
    "moves": [
      [ { "slug": "bitter-blade" /* 원념의칼 */ } ],
      [ { "slug": "flare-blitz" /* 플레어드라이브 */ } ],
      [ { "slug": "shadow-sneak" /* 야습 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ]
    ]
  }
  ],
  "espathra": /* 클레스퍼트라 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "stored-power" /* 어시스트파워 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ],
      [ { "slug": "protect" /* 방어 */ }, { "slug": "roost" /* 날개쉬기 */ }, { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "stored-power" /* 어시스트파워 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ } ],
      [ { "slug": "protect" /* 방어 */ }, { "slug": "roost" /* 날개쉬기 */ }, { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "lumina-crash" /* 루미나콜리전 */ } ],
      [ { "slug": "baton-pass" /* 배턴터치 */ } ],
      [ { "slug": "dazzling-gleam" /* 매지컬샤인 */ }, { "slug": "protect" /* 방어 */ }, { "slug": "reflect" /* 리플렉터 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ }, { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "lumina-crash" /* 루미나콜리전 */ } ],
      [ { "slug": "energy-ball" /* 에너지볼 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "baton-pass" /* 배턴터치 */ }, { "slug": "hypnosis" /* 최면술 */ } ]
    ]
  },
  {
    "item": "light-clay" /* 빛의점토 */,
    "ability": "speed-boost" /* 가속 */,
    "moves": [
      [ { "slug": "light-screen" /* 빛의장막 */ } ],
      [ { "slug": "reflect" /* 리플렉터 */ } ],
      [ { "slug": "lumina-crash" /* 루미나콜리전 */ }, { "slug": "protect" /* 방어 */ } ],
      [ { "slug": "baton-pass" /* 배턴터치 */ } ]
    ]
  }
  ],
  "tatsugiri-curly": /* 싸리용 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "storm-drain" /* 마중물 */,
    "moves": [
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ } ],
      [ { "slug": "surf" /* 파도타기 */ } ]
    ]
  }
  ],
  "annihilape": /* 저승갓숭 */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "vital-spirit" /* 의기양양 */,
    "moves": [
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "rage-fist" /* 분노의주먹 */ } ],
      [ { "slug": "bulk-up" /* 벌크업 */ } ],
      [ { "slug": "encore" /* 앙코르 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "vital-spirit" /* 의기양양 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "rage-fist" /* 분노의주먹 */ } ],
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "final-gambit" /* 목숨걸기 */ }, { "slug": "rock-tomb" /* 암석봉인 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "vital-spirit" /* 의기양양 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "rage-fist" /* 분노의주먹 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ }, { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "final-gambit" /* 목숨걸기 */ }, { "slug": "rock-tomb" /* 암석봉인 */ }, { "slug": "taunt" /* 도발 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "defiant" /* 오기 */,
    "moves": [
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "close-combat" /* 인파이트 */ } ],
      [ { "slug": "rage-fist" /* 분노의주먹 */ }, { "slug": "shadow-claw" /* 섀도클로 */ } ],
      [ { "slug": "final-gambit" /* 목숨걸기 */ } ]
    ]
  }
  ],
  "dudunsparce-two-segment": /* 노고고치 */ [
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "rattled",
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "boomburst" /* 폭음파 */ } ],
      [ { "slug": "shadow-ball" /* 섀도볼 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "dragon-tail" /* 드래곤테일 */ } ],
      [ { "slug": "body-slam" /* 누르기 */ } ],
      [ { "slug": "coil" /* 똬리틀기 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  },
  {
    "item": "heavy-duty-boots" /* 통굽부츠 */,
    "ability": "serene-grace" /* 하늘의은총 */,
    "moves": [
      [ { "slug": "dragon-tail" /* 드래곤테일 */ }, { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "body-slam" /* 누르기 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "roost" /* 날개쉬기 */ } ]
    ]
  }
  ],
  "brute-bonnet": /* 사나운버섯 */ [ // [확인] 세트 2개 전부 테라버스트 2 → 지우면 세트가 모두 사라짐
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "spore" /* 버섯포자 */ } ],
      [ { "slug": "trailblaze" /* 개척하기 */ } ],
      [ { "slug": "crunch" /* 깨물어부수기 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  },
  {
    "item": "loaded-dice" /* 속임수주사위 */,
    "ability": "protosynthesis" /* 고대활성 */,
    "moves": [
      [ { "slug": "spore" /* 버섯포자 */ } ],
      [ { "slug": "sucker-punch" /* 기습 */ } ],
      [ { "slug": "bullet-seed" /* 씨기관총 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ]
    ]
  }
  ],
  "iron-treads": /* 무쇠바퀴 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "heavy-slam" /* 헤비봄버 */ }, { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "ice-spinner" /* 아이스스피너 */ }, { "slug": "rapid-spin" /* 고속스핀 */ }, { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "booster-energy" /* 부스트에너지 */,
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "endeavor" /* 죽기살기 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ }, { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "ice-spinner" /* 아이스스피너 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "booster-energy" /* 부스트에너지 */,
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "endeavor" /* 죽기살기 */ } ],
      [ { "slug": "iron-head" /* 아이언헤드 */ } ],
      [ { "slug": "rapid-spin" /* 고속스핀 */ }, { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "tera-blast" /* 테라버스트 */ } ]
    ]
  }
  ],
  "iron-hands": /* 무쇠손 */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ }, { "slug": "wild-charge" /* 와일드볼트 */ } ],
      [ { "slug": "earthquake" /* 지진 */ }, { "slug": "heavy-slam" /* 헤비봄버 */ }, { "slug": "ice-punch" /* 냉동펀치 */ } ],
      [ { "slug": "fake-out" /* 속이기 */ }, { "slug": "volt-switch" /* 볼트체인지 */ } ]
    ]
  },
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "quark-drive" /* 쿼크차지 */,
    "moves": [
      [ { "slug": "drain-punch" /* 드레인펀치 */ } ],
      [ { "slug": "thunder-punch" /* 번개펀치 */ } ],
      [ { "slug": "substitute" /* 대타출동 */ } ],
      [ { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  }
  ],
  "baxcalibur": /* 드닐레이브 */ /* 메가진화 가능: 메가드닐레이브 */ [ // [확인] 세트 6개 (5개 초과)
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "thermal-exchange",
    "moves": [
      [ { "slug": "glaive-rush" /* 대검돌격 */ }, { "slug": "scale-shot" /* 스케일샷 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "icicle-spear" /* 고드름침 */ }, { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "loaded-dice" /* 속임수주사위 */,
    "ability": "thermal-exchange",
    "moves": [
      [ { "slug": "ice-shard" /* 얼음뭉치 */ }, { "slug": "scale-shot" /* 스케일샷 */ } ],
      [ { "slug": "icicle-spear" /* 고드름침 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ }, { "slug": "swords-dance" /* 칼춤 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "thermal-exchange",
    "moves": [
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ }, { "slug": "icicle-spear" /* 고드름침 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "glaive-rush" /* 대검돌격 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "thermal-exchange",
    "moves": [
      [ { "slug": "glaive-rush" /* 대검돌격 */ }, { "slug": "scale-shot" /* 스케일샷 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "icicle-spear" /* 고드름침 */ } ]
    ]
  },
  /* 메가진화 세트: 메가드닐레이브 (도구는 메가스톤, 특성은 진화 전 모습의 특성) */
  {
    "item": "baxcalibrite" /* 드닐레이브나이트 */,
    "ability": "thermal-exchange" /* 열교환 */,
    "moves": [
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ }, { "slug": "icicle-spear" /* 고드름침 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "glaive-rush" /* 대검돌격 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ]
    ]
  },
  {
    "item": "baxcalibrite" /* 드닐레이브나이트 */,
    "ability": "thermal-exchange" /* 열교환 */,
    "moves": [
      [ { "slug": "icicle-crash" /* 고드름떨구기 */ }, { "slug": "icicle-spear" /* 고드름침 */ } ],
      [ { "slug": "ice-shard" /* 얼음뭉치 */ } ],
      [ { "slug": "glaive-rush" /* 대검돌격 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  }
  ],
  "chi-yu": /* 위유이 */ [ // [확인] 세트 6개 (5개 초과)
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "beads-of-ruin",
    "moves": [
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "lava-plume" /* 분연 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "beads-of-ruin",
    "moves": [
      [ { "slug": "flame-charge" /* 니트로차지 */ } ],
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "ruination" /* 카타스트로피 */ } ]
    ]
  },
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "beads-of-ruin",
    "moves": [
      [ { "slug": "lava-plume" /* 분연 */ } ],
      [ { "slug": "ruination" /* 카타스트로피 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ]
    ]
  },
  {
    "item": "choice-specs" /* 구애안경 */,
    "ability": "beads-of-ruin",
    "moves": [
      [ { "slug": "overheat" /* 오버히트 */ } ],
      [ { "slug": "flamethrower" /* 화염방사 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ],
      [ { "slug": "psychic" /* 사이코키네시스 */ } ]
    ]
  },
  ],
  "archaludon": /* 브리두라스 */ [
  {
    "item": "custap-berry" /* 애슈열매 */,
    "ability": "sturdy" /* 옹골참 */,
    "moves": [
      [ { "slug": "steel-beam" /* 철제광선 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ }, { "slug": "dragon-tail" /* 드래곤테일 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "thunder-wave" /* 전기자석파 */ }, { "slug": "mirror-coat" /* 미러코트 */ }, { "slug": "metal-burst" /* 메탈버스트 */ } ]
    ]
  },
  {
    "item": "power-herb" /* 파워풀허브 */,
    "ability": ["sturdy" /* 옹골참 */, "stamina" /* 지구력 */],
    "moves": [
      [ { "slug": "electro-shot" /* 일렉트로빔 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ }, { "slug": "dark-pulse" /* 악의파동 */ } ]
    ]
  },
  {
    "item": "sitrus-berry" /* 자뭉열매 */,
    "ability": "stamina" /* 지구력 */,
    "moves": [
      [ { "slug": "electro-shot" /* 일렉트로빔 */ } ],
      [ { "slug": "draco-meteor" /* 용성군 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ } ]
    ]
  },     
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "stamina" /* 지구력 */,
    "moves": [
      [ { "slug": "body-press" /* 바디프레스 */ } ],
      [ { "slug": "flash-cannon" /* 러스터캐논 */ } ],
      [ { "slug": "stealth-rock" /* 스텔스록 */ }, { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "dark-pulse" /* 악의파동 */ }, { "slug": "roar" /* 울부짖기 */ }, { "slug": "dragon-tail" /* 드래곤테일 */ } ]
    ]
  }
  ],
  // ===== 보스 전용 세트 (알라자르, 블레이크의 포켓몬. 풀에는 없고 보스만 데려온다) =====
  // 게임은 이 파일의 세트에서만 도구와 기술을 고르므로, 보스 포켓몬도 세트가 있어야 한다.
  "kadabra": [
  {
    "item": "eviolite",
    "ability": ["magic-guard", "synchronize"],
    "moves": [
      [ { "slug": "psychic" } ],
      [ { "slug": "shadow-ball" } ],
      [ { "slug": "focus-blast" } ],
      [ { "slug": "calm-mind" } ]
    ]
  },
  {
    "item": "eviolite",
    "ability": "magic-guard",
    "moves": [
      [ { "slug": "psychic" } ],
      [ { "slug": "shadow-ball" } ],
      [ { "slug": "recover" } ],
      [ { "slug": "focus-blast" } ]
    ]
  }
  ],
  "doduo": [
  {
    "item": "eviolite",
    "ability": "early-bird",
    "moves": [
      [ { "slug": "brave-bird" } ],
      [ { "slug": "double-edge" } ],
      [ { "slug": "knock-off" } ],
      [ { "slug": "swords-dance" } ]
    ]
  },
  {
    "item": "eviolite",
    "ability": "tangled-feet",
    "moves": [
      [ { "slug": "brave-bird" } ],
      [ { "slug": "return" } ],
      [ { "slug": "quick-attack" } ],
      [ { "slug": "roost" } ]
    ]
  }
  ],
  "grimer": [
  {
    "item": "eviolite",
    "ability": "poison-touch",
    "moves": [
      [ { "slug": "poison-jab" } ],
      [ { "slug": "gunk-shot" } ],
      [ { "slug": "knock-off" } ],
      [ { "slug": "shadow-sneak" } ]
    ]
  },
  {
    "item": "eviolite",
    "ability": "sticky-hold",
    "moves": [
      [ { "slug": "poison-jab" } ],
      [ { "slug": "drain-punch" } ],
      [ { "slug": "toxic" } ],
      [ { "slug": "knock-off" } ]
    ]
  }
  ],
    "ursaluna-bloodmoon": /* 다투곰 (붉은달) */ [
  {
    "item": [ "assault-vest" /* 돌격조끼 */, "focus-sash" /* 기합의띠 */ ],
    "ability": "minds-eye" /* 심안 */,
    "moves": [
      [ { "slug": "blood-moon" /* 블러드문 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "vacuum-wave" /* 진공파 */ } ]
    ]
  },
  {
    "item": "covert-cloak" /* 은밀망토 */,
    "ability": "minds-eye" /* 심안 */,
    "moves": [
      [ { "slug": "blood-moon" /* 블러드문 */ } ],
      [ { "slug": "hyper-voice" /* 하이퍼보이스 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "vacuum-wave" /* 진공파 */ } ]
    ]
  },
  {
    "item": [ "leftovers" /* 먹다남은음식 */, "sitrus-berry" /* 자뭉열매 */ ], 
    "ability": "minds-eye" /* 심안 */,
    "moves": [
      [ { "slug": "blood-moon" /* 블러드문 */ } ],
      [ { "slug": "vacuum-wave" /* 진공파 */ } ],
      [ { "slug": "yawn" /* 하품 */ } ],
      [ { "slug": "calm-mind" /* 명상 */ }, { "slug": "moonlight" /* 달빛 */ }, { "slug": "earth-power" /* 대지의힘 */ }, { "slug": "hyper-voice" /* 하이퍼보이스 */ } ]
    ]
  },
  ],
    "landorus-therian": /* 랜드로스(영물폼) */ [
  {
    "item": "focus-sash" /* 기합의띠 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "rock-tomb" /* 암석봉인 */ } ],
      [ { "slug": "explosion" /* 대폭발 */ } ]
    ]
  },
  {
    "item": "rocky-helmet" /* 울퉁불퉁멧 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "toxic" /* 맹독 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "rock-tomb" /* 암석봉인 */ } ]
    ]
  }
  ,
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "intimidate" /* 위협 */,
    "moves": [
      [ { "slug": "stone-edge" /* 스톤에지 */ }, { "slug": "rock-tomb" /* 암석봉인 */ }, { "slug": "rock-slide" /* 스톤샤워 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ],
      [ { "slug": "superpower" /* 엄청난힘 */ }, { "slug": "explosion" /* 대폭발 */ }, { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
  ],
  "thundurus-therian": /* 볼트로스(영물폼) */ [
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "focus-blast" /* 기합구슬 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ]
    ]
  },
  {
    "item": ["aguav-berry" /* 아바열매 */, "sitrus-berry" /*자뭉열매 */],
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "taunt" /* 도발 */ } ],
      [ { "slug": "nasty-plot" /* 나쁜음모 */ } ]
    ]
  },
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "volt-absorb" /* 축전 */,
    "moves": [
      [ { "slug": "volt-switch" /* 볼트체인지 */ } ],
      [ { "slug": "thunderbolt" /* 10만볼트 */ } ],
      [ { "slug": "sludge-wave" /* 오물웨이브 */ } ],
      [ { "slug": "grass-knot" /* 풀묶기 */ } ]
    ]
  }
  ],
  "tornadus-therian": /* 토네로스(영물폼) */ [
  {
    "item": ["leftovers" /* 먹다남은음식 */, "life-orb" /* 생명의구슬 */ ],
    "ability": "regenerator" /* 재생력 */,
    "moves": [
      [ { "slug": "hurricane" /* 폭풍 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ }, { "slug": "icy-wind" /* 얼다바람 */ } ],
      [ { "slug": "u-turn" /* 유턴 */ } ]
    ]
  }
  ],
  "necrozma-dusk": /* 네크로즈마(황혼의 갈기) */ [
  {
    "item": "leftovers" /* 먹다남은음식 */,
    "ability": "prism-armor" /* 프리즘아머 */,
    "moves": [
      [ { "slug": "swords-dance" /* 칼춤 */ } ],
      [ { "slug": "sunsteel-strike" /* 메테오드라이브 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  },
  {
    "item": "weakness-policy" /* 약점보험 */,
    "ability": "prism-armor" /* 프리즘아머 */,
    "moves": [
      [ { "slug": "psychic-fangs" /* 사이코팽 */ } ],
      [ { "slug": "sunsteel-strike" /* 메테오드라이브 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "autotomize" /* 바디퍼지 */ } ]
    ]
  },
  {
    "item": "weakness-policy" /* 약점보험 */,
    "ability": "prism-armor" /* 프리즘아머 */,
    "moves": [
      [ { "slug": "stealth-rock" /* 스텔스록 */ } ],
      [ { "slug": "sunsteel-strike" /* 메테오드라이브 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "trick-room" /* 트릭룸 */ } ]
    ]
  }
  ,
  {
    "item": "choice-band" /* 구애머리띠 */,
    "ability": "prism-armor" /* 프리즘아머 */,
    "moves": [
      [ { "slug": "photon-geyser" /* 포톤가이저 */ } ],
      [ { "slug": "sunsteel-strike" /* 메테오드라이브 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ]
    ]
  }
  ,
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "prism-armor" /* 프리즘아머 */,
    "moves": [
      [ { "slug": "psychic-fangs" /* 사이코팽 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "shadow-claw" /* 섀도크루 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  }
    ,
  {
    "item": "life-orb" /* 생명의구슬 */,
    "ability": "prism-armor" /* 프리즘아머 */,
    "moves": [
      [ { "slug": "sunsteel-strike" /* 메테오드라이브 */ } ],
      [ { "slug": "earthquake" /* 지진 */ } ],
      [ { "slug": "knock-off" /* 탁쳐서떨구기 */ } ],
      [ { "slug": "dragon-dance" /* 용의춤 */ } ]
    ]
  }
  ],
  "necrozma-dawn": /* 네크로즈마(새벽의 날개) */ [
  {
    "item": "assault-vest" /* 돌격조끼 */,
    "ability": "prism-armor" /* 프리즘아머 */,
    "moves": [
      [ { "slug": "calm-mind" /* 명상 */ } ],
      [ { "slug": "moongeist-beam" /* 섀도레이 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ]
    ]
  },
  {
    "item": "choice-scarf" /* 구애스카프 */,
    "ability": "prism-armor" /* 프리즘아머 */,
    "moves": [
      [ { "slug": "photon-geyser" /* 포톤가이저 */ } ],
      [ { "slug": "moongeist-beam" /* 섀도레이 */ } ],
      [ { "slug": "earth-power" /* 대지의힘 */ } ],
      [ { "slug": "heat-wave" /* 열풍 */ } ]
    ]
  }
  ],
};

export default SPECIES_FACTORY_SETS;
