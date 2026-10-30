// 한 번의 기술 사용(한 박자)을 화면에서 차례대로 보여 주기 위해 세 부분으로 나눈다.
//   1) "OO의 XX!" - 기술 연출이 나온다. 체력은 아직 그대로다.
//   2) 데미지 - 연출이 끝난 뒤 체력이 줄어든다. 기절은 아직 보이지 않는다 (체력이 다 줄어든 다음에 기절한다).
//   3) 그 뒤에 생기는 일 - 기절, 반동/생명의구슬 같은 부작용의 체력 감소, 능력치 변화, 상태이상, 도구 사용...
// 이 모듈은 줄과 두 장의 스냅샷(기술을 쓰기 전, 쓴 뒤)을 받아서 각 부분의 줄과 보여 줄 스냅샷을 돌려준다.
import lodash from "lodash";

// 데미지 부분에 들어가는 줄: "OO lost 12% HP!", "A critical hit!", "Hit 3 times!"
const DAMAGE_LINES = [/^.+ lost \d+% HP!$/, /^A critical hit!$/, /^Hit \d+ times!$/];
// 기술을 쓰기 전에 나오는 모습 변화 안내 (스탠스 체인지)
const FORM_LINE = /^.+ changed to (Blade|Shield) Forme!$/;
const isDamageLine = (line) => DAMAGE_LINES.some((re) => re.test(line));

// 데미지 부분에서 보여 줄 모습: 맞은 쪽은 체력이 줄어든 모습, 쓴 쪽은 아직 쓰기 전 모습 그대로.
// (능력치 단계, 상태이상도 아직 바뀌기 전이다. 그건 세 번째 부분에서 바뀐다.)
function damageSnapshot(pre, post, moverIsPlayer) {
    const mid = { playerPokemon: lodash.cloneDeep(post.playerPokemon), opponentPokemon: lodash.cloneDeep(post.opponentPokemon) };
    const sides = [
        ["playerPokemon", moverIsPlayer],
        ["opponentPokemon", !moverIsPlayer],
    ];
    for (const [key, isMover] of sides) {
        const before = pre[key][0];
        const now = mid[key][0];
        // 중간에 교체되어 앞에 나온 포켓몬이 달라졌으면 손대지 않는다
        if (!before || !now || before.name !== now.name) continue;
        now.stat_levels = lodash.cloneDeep(before.stat_levels);
        now.status = lodash.cloneDeep(before.status);
        now.confusion = lodash.cloneDeep(before.confusion);
        if (isMover) now.hp = lodash.cloneDeep(before.hp);
        else if (now.hp[0] <= 0) now.faintPending = true; // 체력 바가 다 줄어든 뒤에 기절한 모습이 된다
    }
    return mid;
}

// 기술을 쓰려고 모습이 바뀌는 포켓몬(킬가르도: 공격하면 블레이드폼, 킹실드면 실드폼)은 기술 연출이 나오는 장면부터 바뀐 모습이어야 한다.
// 쓰기 전 스냅샷(pre)에서 쓴 쪽의 모습(그림, 능력치, 타입)만 쓴 뒤의 것으로 바꾼다. 중간에 교체되어 다른 포켓몬이 나왔으면 손대지 않는다.
function withMoversForm(pre, post, moverIsPlayer) {
    const key = moverIsPlayer ? "playerPokemon" : "opponentPokemon";
    const before = pre[key][0];
    const now = post[key][0];
    if (!before || !now || before.name !== now.name || (before.forme || null) === (now.forme || null)) return pre;
    const team = Object.assign([], pre[key]); // 배열에 붙은 필드, 함정 같은 정보도 그대로 가져간다
    team[0] = { ...before, forme: now.forme, sprites: now.sprites, base_stats: now.base_stats, types: now.types };
    return { ...pre, [key]: team };
}

// lines: 한 박자에 나온 줄들, pre / post: { playerPokemon, opponentPokemon } 스냅샷, moverIsPlayer: 기술을 쓴 쪽
// 반환: [{ text, playerPokemon, opponentPokemon, short? }, ...] (첫 부분이 연출 부분이다)
export function splitMoveBeat(lines, pre, post, moverIsPlayer) {
    const used = lines.findIndex((line) => line.includes(" used "));
    if (used < 0) return [{ text: lines, ...post }];
    // 기술을 쓰려고 모습이 바뀌었다면 (킬가르도) 순서는: 모습이 바뀜 -> "블레이드폼으로 바뀌었다!" 글 -> 기술 연출
    const formLines = lines.slice(0, used).filter((line) => FORM_LINE.test(line));
    if (used === lines.length - 1 && formLines.length === 0) return [{ text: lines, ...post }];
    const first = lines.slice(0, used + 1).filter((line) => !FORM_LINE.test(line));
    const rest = lines.slice(used + 1);
    let n = 0;
    while (n < rest.length && isDamageLine(rest[n])) n++;
    const damage = rest.slice(0, n);
    const after = rest.slice(n);
    const moverBoard = withMoversForm(pre, post, moverIsPlayer);
    const parts = [];
    if (formLines.length > 0) parts.push({ text: formLines, ...moverBoard });
    parts.push({ text: first, ...moverBoard, isMove: true });
    if (damage.length > 0) {
        parts.push({ text: damage, ...damageSnapshot(pre, post, moverIsPlayer), short: true });
        if (after.length > 0) parts.push({ text: after, ...post, short: true });
    } else if (after.length > 0) {
        parts.push({ text: after, ...post, short: true });
    }
    return parts;
}
