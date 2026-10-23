// Pokemon Showdown의 기술 연출 중 우리가 쓰는 기술만 뽑아 src/animations/psAnims.generated.js로 만든다.
//
//   node tools/extract-ps-anims.mjs <쇼다운 클라이언트 저장소 경로> <기술 목록 파일> [효과 이미지 복사 위치]
//
//   기술 목록 파일: 한 줄에 기술 slug 하나 (예: swords-dance). 쇼다운 id는 하이픈을 뺀 이름이다.
//   효과 이미지 복사 위치: 주면 연출에 필요한 이미지만 그 폴더(public/fx)에 복사한다.
//
// 라이선스: battle-animations-moves.ts는 CC0, battle-animations.ts(연출 엔진)는 MIT.
// 효과 이미지(play.pokemonshowdown.com/fx)에는 따로 적힌 라이선스가 없다.
//
// babel(CRA에 들어 있는 @babel/core)이 필요하니 web 폴더에서 실행한다.
import fs from "fs";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const babel = require("@babel/core");

const [clientDir, listFile, fxOut] = process.argv.slice(2);
if (!clientDir || !listFile) {
    console.error("사용법: node tools/extract-ps-anims.mjs <쇼다운 클라이언트 경로> <기술 목록 파일> [fx 복사 위치]");
    process.exit(1);
}
const srcDir = path.join(clientDir, "play.pokemonshowdown.com", "src");
const read = (f) => fs.readFileSync(path.join(srcDir, f), "utf8");

const toJs = (code, filename) =>
    babel.transformSync(code, {
        filename,
        babelrc: false,
        configFile: false,
        presets: [["@babel/preset-typescript", { allExtensions: true, isTSX: false }]],
        compact: false,
        comments: false,
    }).code;

// "const NAME ... = {" 로 시작하는 객체 리터럴을 짝이 맞는 중괄호까지 잘라 낸다
function sliceObject(code, startMarker) {
    const start = code.indexOf(startMarker);
    if (start < 0) throw new Error("못 찾음: " + startMarker);
    const open = code.indexOf("{", code.indexOf("=", start));
    let depth = 0;
    let inStr = null;
    for (let i = open; i < code.length; i++) {
        const c = code[i];
        if (inStr) {
            if (c === "\\") i++;
            else if (c === inStr) inStr = null;
            continue;
        }
        if (c === "'" || c === '"' || c === "`") inStr = c;
        else if (c === "/" && code[i + 1] === "/") i = code.indexOf("\n", i);
        else if (c === "{") depth++;
        else if (c === "}" && --depth === 0) return code.slice(open, i + 1);
    }
    throw new Error("중괄호가 닫히지 않음: " + startMarker);
}

// ---- 연출 엔진 쪽: 효과 이미지 표와 공용 연출
const engineTs = read("battle-animations.ts");
const effectsJs = toJs("const x = " + sliceObject(engineTs, "const BattleEffects") + ";", "effects.ts");
const otherJs = toJs("const x = " + sliceObject(engineTs, "export const BattleOtherAnims") + ";", "other.ts");
const evalObject = (js, scope) =>
    new Function(...Object.keys(scope), js.replace(/^const x = /, "return ").replace(/;\s*$/, ";"))(...Object.values(scope));
const EFFECTS = evalObject(effectsJs, {});
const MOVES_STUB = {};
const OTHER = evalObject(otherJs, { BattleMoveAnims: MOVES_STUB });

// ---- 기술 쪽: 파일 전체를 JS로 바꿔 실행한다 (끝에 있는 별칭 대입까지 같이 처리된다)
const movesJs = toJs(read("battle-animations-moves.ts"), "moves.ts")
    .replace(/^import .*$/gm, "")
    .replace(/export const BattleMoveAnims/, "const BattleMoveAnims");
const MOVES = new Function(
    "BattleOtherAnims",
    "Config",
    movesJs + "\nreturn BattleMoveAnims;"
)(OTHER, { routes: { client: "play.pokemonshowdown.com" } });

// ---- 필요한 것만 모으기 (연출 안에서 부르는 다른 연출, 효과 이미지까지)
const wanted = fs
    .readFileSync(listFile, "utf8")
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
const psId = (slug) => slug.replace(/-/g, "");

const pickedMoves = {};
const pickedOther = {};
const effectNames = new Set();
const fxFiles = new Set();
const missing = [];

function scan(fnText) {
    for (const m of fnText.matchAll(/BattleOtherAnims(?:\.(\w+)|\['(\w+)'\])/g)) addOther(m[1] || m[2]);
    for (const m of fnText.matchAll(/BattleMoveAnims(?:\.(\w+)|\['(\w+)'\])/g)) addMove(m[1] || m[2]);
    for (const m of fnText.matchAll(/showEffect\(\s*'(\w+)'/g)) effectNames.add(m[1]);
    for (const m of fnText.matchAll(/\/fx\/([\w.-]+)/g)) fxFiles.add(m[1]);
}
function addOther(id) {
    if (pickedOther[id] || !OTHER[id]) return;
    pickedOther[id] = OTHER[id].anim.toString();
    scan(pickedOther[id]);
}
function addMove(id) {
    if (pickedMoves[id] || !MOVES[id]) return;
    pickedMoves[id] = MOVES[id].anim.toString();
    scan(pickedMoves[id]);
}
for (const slug of wanted) {
    if (MOVES[psId(slug)]) addMove(psId(slug));
    else missing.push(slug);
}

const effects = {};
for (const name of effectNames) {
    if (!EFFECTS[name]) continue;
    effects[name] = EFFECTS[name];
    fxFiles.add(EFFECTS[name].url);
}

const fix = (text) => text.replace(/https:\/\/\$\{Config\.routes\.client\}\/fx\//g, "${FX_BASE}");
const entries = (obj) =>
    Object.keys(obj)
        .sort()
        .map((k) => `    ${JSON.stringify(k)}: { ${fix(obj[k])} },`)
        .join("\n");

const out = `// 자동 생성 파일: web/tools/extract-ps-anims.mjs 로 만든다. 직접 고치지 않는다.
// 원본: Pokemon Showdown 클라이언트의 battle-animations-moves.ts (CC0)와 battle-animations.ts (MIT).
/* eslint-disable */
export const FX_BASE = (typeof process !== "undefined" && process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "") + "/fx/";

export const EFFECTS = ${JSON.stringify(effects, null, 4)};

export const OTHER = {
${entries(pickedOther)}
};

export const MOVES = {
${entries(pickedMoves)}
};

const BattleOtherAnims = OTHER;
const BattleMoveAnims = MOVES;
const Config = { routes: { client: "" } };
`;
// 함수 본문이 BattleOtherAnims / BattleMoveAnims 를 참조하므로, 위 상수 선언이 객체보다 뒤에 있어도 호출 시점에는 이미 정해져 있다.
fs.writeFileSync(path.join("src", "animations", "psAnims.generated.js"), out);

if (fxOut) {
    fs.mkdirSync(fxOut, { recursive: true });
    for (const f of fxFiles) {
        const from = path.join(clientDir, "play.pokemonshowdown.com", "fx", f);
        if (fs.existsSync(from)) fs.copyFileSync(from, path.join(fxOut, f));
        else console.warn("이미지 없음:", f);
    }
}
console.log(`기술 ${Object.keys(pickedMoves).length}개, 공용 연출 ${Object.keys(pickedOther).length}개, 이미지 ${fxFiles.size}개`);
if (missing.length) console.log("쇼다운에 연출이 없는 기술:", missing.join(", "));
