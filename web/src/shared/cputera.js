// 컴퓨터가 테라스탈을 쓸지 정하는 규칙 (Pokémon Essentials의 Deluxe Battle Kit 쪽 판단을 줄여서 따른다).
// 팀마다 한 번뿐이라 아무 때나 쓰지 않고, 아래 중 하나일 때 쓴다.
//   1. 마지막 한 마리: 아껴 둘 이유가 없다
//   2. 이번 턴에 쓰러질 것을 테라스탈로 버틸 수 있다 (상대의 가장 센 공격을 방어 타입 덕에 견딘다)
//   3. 방어가 크게 좋아진다: 상대가 내 체력의 40% 이상을 깎는 기술을 갖고 있고, 테라스탈하면 그 피해가 4분의 3 이하로 줄어든다
//   4. 공격이 크게 좋아진다: 가진 기술 중 가장 센 피해가 테라스탈하면 1.25배 이상이 된다 (자속 보정, 테라버스트, 위력 60 보정)
// 그 밖에는 더 좋은 때를 기다린다.
import { bestDamage } from "./cpusetup";
import { teraTypeOf } from "./tera";

// 테라스탈했다고 쳤을 때의 포켓몬 (원래 포켓몬은 건드리지 않고 계산에만 쓴다)
function asTerastallized(mon) {
    const type = teraTypeOf(mon);
    return { ...mon, terastallized: true, teraType: type, teraOriginal: { types: mon.types }, types: [{ slot: 1, type: { name: type } }] };
}

export function cpuWantsTera(team, foeTeam, move, field) {
    const me = team[0];
    const foe = foeTeam[0];
    if (!me || !foe || me.hp[0] <= 0 || foe.hp[0] <= 0) return false;
    if (team.length < 2) return false; // 처음부터 혼자인 팀(실제 배틀에는 없다)은 쓰지 않는다
    if (team.filter((p) => p.hp[0] > 0).length === 1) return true;
    const tera = asTerastallized(me);
    const takenNow = bestDamage(foe, me, field);
    const takenTera = bestDamage(foe, tera, field);
    if (takenNow >= me.hp[0] && takenTera < me.hp[0]) return true;
    if (takenNow >= me.hp[1] * 0.4 && takenTera <= takenNow * 0.75) return true;
    const dealtNow = bestDamage(me, foe, field);
    const dealtTera = bestDamage(tera, foe, field);
    return dealtNow > 0 && dealtTera >= dealtNow * 1.25;
}
