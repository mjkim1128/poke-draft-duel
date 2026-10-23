// 화면별 음악 파일 고르기를 확인한다.
import fs from "fs";
import path from "path";
import { FILE_SONGS, pickFile } from "./bgm";

test("선출, 배틀, 보스 곡의 파일이 모두 public/bgm 에 있다", () => {
    for (const files of Object.values(FILE_SONGS)) {
        for (const file of files) {
            expect(fs.existsSync(path.join(__dirname, "../../public/bgm", file))).toBe(true);
        }
    }
});

test("두 파일 중 하나를 고르고, 연달아 같은 파일이 나오지 않는다", () => {
    let last = null;
    const seen = new Set();
    for (let i = 0; i < 20; i++) {
        const file = pickFile("battle", () => Math.random());
        expect(FILE_SONGS.battle).toContain(file);
        expect(file).not.toBe(last);
        seen.add(file);
        last = file;
    }
    expect(seen.size).toBe(2);
});

test("파일이 없는 곡(타이틀, 승리, 패배)은 null이라 8비트 곡을 쓴다", () => {
    expect(pickFile("title")).toBeNull();
    expect(pickFile("win")).toBeNull();
});
