// 다운로드 버전에 넣을 포켓몬 그림을 PokeAPI 그림 저장소에서 받아 desktop/sprites/pokemon/ 에 모은다.
// 게임 데이터(pokemon.json, megas.json)와 코드(모습이 바뀌는 폼, 대타 인형)가 쓰는 주소를 전부 훑어서 받고,
// 이미 받은 파일은 건너뛰므로 다시 실행해도 빠진 것만 받는다. 사용법: node fetch-sprites.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, "..");
const REMOTE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const out = path.join(here, "sprites", "pokemon");

const read = (...p) => fs.readFileSync(path.join(root, ...p), "utf8");
const found = new Set();
const scan = (text) => {
    for (const m of text.matchAll(/https:\/\/raw\.githubusercontent\.com\/PokeAPI\/sprites\/master\/sprites\/pokemon\/([A-Za-z0-9/_-]+\.png)/g)) found.add(m[1]);
};
scan(read("api", "src", "main", "resources", "data", "pokemon.json"));
scan(read("web", "src", "shared", "megas.json"));
// 코드가 번호로 만드는 그림: 모습이 바뀌는 폼 (abilities.js의 sprite: 번호), 대타 인형
for (const m of read("web", "src", "shared", "abilities.js").matchAll(/sprite: (\d+)/g)) {
    found.add(`${m[1]}.png`);
    found.add(`back/${m[1]}.png`);
}
found.add("substitute.png");
found.add("back/substitute.png");

const todo = [...found].filter((rel) => !fs.existsSync(path.join(out, rel)));
console.log(`그림 ${found.size}개 중 ${todo.length}개를 받습니다`);

const missing = [];
let done = 0;
async function download(rel) {
    for (let attempt = 1; attempt <= 4; attempt++) {
        try {
            const res = await fetch(REMOTE + rel);
            if (res.status === 404) return missing.push(rel);
            if (!res.ok) throw new Error("HTTP " + res.status);
            const file = path.join(out, rel);
            fs.mkdirSync(path.dirname(file), { recursive: true });
            fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
            return;
        } catch (e) {
            if (attempt === 4) return missing.push(rel + " (" + e.message + ")");
            await new Promise((r) => setTimeout(r, 1000 * attempt));
        }
    }
}
const queue = [...todo];
await Promise.all(
    Array.from({ length: 8 }, async () => {
        while (queue.length > 0) {
            await download(queue.shift());
            if (++done % 200 === 0) console.log(`  ${done}/${todo.length}`);
        }
    })
);
console.log(`완료. 받지 못한 그림 ${missing.length}개${missing.length ? ": " + missing.join(", ") : ""}`);
