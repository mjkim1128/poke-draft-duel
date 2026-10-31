// 포켓몬 그림이 있는 곳. 웹 버전은 PokeAPI의 그림 저장소(GitHub)에서 받고,
// 다운로드 버전(REACT_APP_LOCAL_DATA=1)은 인터넷 없이도 보이도록 앱에 넣어 둔 /sprites/pokemon/ 폴더에서 읽는다.
const REMOTE_BASE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const LOCAL = process.env.REACT_APP_LOCAL_DATA === "1";

export const SPRITE_BASE = LOCAL ? "/sprites/pokemon/" : REMOTE_BASE;

// 데이터 안의 그림 주소(전부 REMOTE_BASE로 시작)를 이 빌드의 주소로 바꾼다. 웹 버전은 그대로 돌려준다.
export function localizeSprites(data) {
    if (!LOCAL) return data;
    return JSON.parse(JSON.stringify(data).split(REMOTE_BASE).join(SPRITE_BASE));
}
