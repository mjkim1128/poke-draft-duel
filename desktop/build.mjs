// 다운로드 버전(Neutralino)의 화면 파일을 만든다.
//   1) 웹 화면을 REACT_APP_LOCAL_DATA=1로 빌드한다 (서버 대신 앱 안의 JSON을 읽는 빌드). 웹 버전의 web/build는 건드리지 않는다.
//   2) 그 결과를 desktop/resources에, 게임 데이터(api의 JSON)를 desktop/resources/data에, 포켓몬 그림을 desktop/resources/sprites에 복사한다.
// 사용법: node build.mjs 한 뒤, 개발 실행은 npx neu run, 설치 파일(실행 파일 묶음)은 npx neu build
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const web = path.join(here, "..", "web");
const dataSrc = path.join(here, "..", "api", "src", "main", "resources", "data");
const webBuild = path.join(here, ".webbuild");
const resources = path.join(here, "resources");

fs.rmSync(webBuild, { recursive: true, force: true });
execSync("npm run build", {
    cwd: web,
    stdio: "inherit",
    env: { ...process.env, REACT_APP_LOCAL_DATA: "1", BUILD_PATH: webBuild, CI: "false" },
});

// resources/js(Neutralino 클라이언트 라이브러리, neu update가 넣는다)만 남기고 지운 뒤 새 화면을 복사한다
fs.mkdirSync(resources, { recursive: true });
for (const name of fs.readdirSync(resources)) if (name !== "js") fs.rmSync(path.join(resources, name), { recursive: true, force: true });
fs.cpSync(webBuild, resources, { recursive: true });
fs.cpSync(dataSrc, path.join(resources, "data"), { recursive: true });
// 포켓몬 그림 (없으면 node fetch-sprites.mjs로 먼저 받는다)
if (!fs.existsSync(path.join(here, "sprites", "pokemon"))) throw new Error("그림이 없습니다. 먼저 node fetch-sprites.mjs를 실행하세요");
fs.cpSync(path.join(here, "sprites"), path.join(resources, "sprites"), { recursive: true });
fs.rmSync(webBuild, { recursive: true, force: true });
console.log("desktop/resources 준비 완료");
