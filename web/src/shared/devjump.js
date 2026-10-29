// 플레이 시험용 바로가기 (개발 서버에서만 쓰인다. 배포용 빌드에서는 꺼진다):
//   /?boss=30                 그 층의 보스 화면으로 바로 간다 (5, 10, 15, 20, 25, 30)
//   /?boss=30&resets=7&time=5025   최종 보스의 진입 대사에 나올 "패배한 횟수"와 "걸린 시간(초)"을 정한다
//   /?clear=1                 최종 보스를 이긴 뒤의 클리어 화면으로 바로 간다 (&easy=1이면 이지 모드의 클리어 화면)
import { bossForFloor } from "./bosspokemon";

const int = (value) => (value !== null && /^\d+$/.test(value) ? parseInt(value, 10) : null);

// 주소의 검색 부분(location.search)을 읽는다. 해당하는 것이 없으면 null.
export function readDevJump(search) {
    const params = new URLSearchParams(search || "");
    const easy = params.get("easy") === "1";
    if (params.get("clear") === "1") return { screen: "clear", easy };
    const floor = int(params.get("boss"));
    if (floor === null || !bossForFloor(floor)) return null;
    const seconds = int(params.get("time"));
    return { screen: "boss", floor, easy, resets: int(params.get("resets")), ms: seconds === null ? null : seconds * 1000 };
}
