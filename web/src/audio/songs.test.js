// 곡 악보가 올바른지 확인한다 (소리 자체는 들어 봐야 알 수 있다).
import { noteFrequency, parseDrums, parseNotes } from "./notes";
import { SONGS } from "./songs";
import { compileSong } from "./engine";

test("음 높이: 가운데 라(A4)는 440Hz, 한 옥타브 위는 두 배", () => {
    expect(noteFrequency("A4")).toBeCloseTo(440, 5);
    expect(noteFrequency("A5")).toBeCloseTo(880, 5);
    expect(noteFrequency("C4")).toBeCloseTo(261.63, 1);
    expect(noteFrequency("Bb3")).toBeCloseTo(noteFrequency("A#3"), 5);
});

test("악보 글자를 음과 길이로 읽는다", () => {
    const { events, steps } = parseNotes("C5:2 _:2 E5:4");
    expect(steps).toBe(8);
    expect(events.map((e) => [e.step, e.length])).toEqual([
        [0, 2],
        [4, 4],
    ]);
});

test("잘못된 악보는 오류를 낸다", () => {
    expect(() => parseNotes("H5:2")).toThrow();
    expect(() => parseNotes("C5")).toThrow();
});

test("북 패턴은 전체 길이만큼 반복된다", () => {
    const events = parseDrums("k.s.", 8);
    expect(events.map((e) => e.step + e.kind)).toEqual(["0k", "2s", "4k", "6s"]);
});

describe.each(Object.entries(SONGS))("곡 %s", (name, song) => {
    test("악보가 모두 읽히고 채널 길이가 같다", () => {
        const lengths = song.channels.map((c) => parseNotes(c.notes).steps);
        expect(new Set(lengths).size).toBe(1);
        expect(lengths[0]).toBeGreaterThan(0);
    });

    test("반복하는 곡은 마디(16칸)로 딱 떨어진다", () => {
        const { steps, loop } = compileSong(song);
        if (loop) expect(steps % 16).toBe(0);
    });

    test("음량과 박자가 정상 범위다", () => {
        expect(song.bpm).toBeGreaterThan(60);
        expect(song.bpm).toBeLessThan(220);
        const total = song.channels.reduce((sum, c) => sum + c.vol, 0) + (song.drums ? song.drums.vol : 0);
        expect(total).toBeLessThan(0.9);
    });
});
