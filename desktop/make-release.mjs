// 배포 파일을 만든다 (desktop/release/):
//   Poke-Draft-Duel-Setup-<버전>.exe   설치 마법사 (내 계정에 설치, 시작 메뉴와 바탕화면 바로가기, 제거 프로그램 포함)
//   Poke-Draft-Duel-portable/ 와 .zip  설치 없이 실행하는 폴더 (exe와 resources.neu는 같은 폴더에 있어야 한다)
// 사전 준비: npm install, npx neu update, node fetch-sprites.mjs, tools/nsis-3.10 (설치 마법사용 NSIS)
// 사용법: node make-release.mjs  (화면과 데이터를 새로 빌드한 뒤 만든다)
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const config = JSON.parse(fs.readFileSync(path.join(here, "neutralino.config.json"), "utf8"));
const version = config.version;
const exeName = "poke-draft-duel-win_x64.exe";
const release = path.join(here, "release");
const stage = path.join(release, "Poke-Draft-Duel-portable");
const neu = path.join(here, "node_modules", "@neutralinojs", "neu", "bin", "neu.js");
const makensis = path.join(here, "tools", "nsis-3.10", "makensis.exe");
const run = (cmd, args, opts = {}) => execFileSync(cmd, args, { cwd: here, stdio: "inherit", ...opts });

if (!fs.existsSync(makensis)) throw new Error("tools/nsis-3.10/makensis.exe가 없습니다 (NSIS 3.10 압축을 desktop/tools에 풀어 주세요)");

run("node", ["build.mjs"]); // 화면, 게임 데이터, 그림을 desktop/resources에
fs.rmSync(path.join(here, "dist"), { recursive: true, force: true });
run("node", [neu, "build", "--release"]); // dist/poke-draft-duel/ 에 실행 파일과 resources.neu

fs.rmSync(release, { recursive: true, force: true });
fs.mkdirSync(stage, { recursive: true });
const built = path.join(here, "dist", "poke-draft-duel");
fs.copyFileSync(path.join(built, exeName), path.join(stage, exeName));
fs.copyFileSync(path.join(built, "resources.neu"), path.join(stage, "resources.neu"));
fs.copyFileSync(path.join(here, "resources", "favicon.ico"), path.join(stage, "app.ico"));
// 실행 파일의 아이콘과 파일 정보를 설치 마법사와 같은 게임 아이콘으로 바꾼다 (Neutralino 기본 아이콘 대신)
run(path.join(here, "node_modules", "rcedit", "bin", "rcedit-x64.exe"), [
    path.join(stage, exeName),
    "--set-icon", path.join(stage, "app.ico"),
    "--set-version-string", "ProductName", "Poke Draft Duel",
    "--set-version-string", "FileDescription", "Poke Draft Duel",
    "--set-file-version", version,
    "--set-product-version", version,
]);

// 설치 마법사
const setup = path.join(release, `Poke-Draft-Duel-Setup-${version}.exe`);
run(makensis, ["/V2", `/DVERSION=${version}`, `/DSRC_DIR=${stage}`, `/DOUT_FILE=${setup}`, "installer.nsi"]);

// 설치 없이 쓰는 묶음 (app.ico는 설치 마법사용이라 뺀다)
fs.rmSync(path.join(stage, "app.ico"));
run("powershell", ["-NoProfile", "-Command", `Compress-Archive -Path '${stage}\*' -DestinationPath '${path.join(release, "Poke-Draft-Duel-portable.zip")}' -Force`]);
console.log("\n완료:");
for (const f of fs.readdirSync(release)) console.log("  ", path.join("desktop", "release", f));
