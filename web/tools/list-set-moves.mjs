// 세트에서 쓰는 모든 기술의 slug를 한 줄에 하나씩 뽑는다 (extract-ps-anims.mjs의 기술 목록 파일로 쓴다).
//   node tools/list-set-moves.mjs > moves-used.txt
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const here = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(here, "..", "..", "api", "src", "main", "resources", "data", "factory_sets.json");
const rows = fs.readFileSync(file, "utf8").split(/\r?\n/).filter((l) => l.startsWith("{")).map((l) => JSON.parse(l.trim().replace(/,$/, "")));
const used = new Set();
for (const r of rows) for (const slot of r.set.moves) for (const o of slot) used.add(o.slug);
console.log([...used].sort().join("\n"));
