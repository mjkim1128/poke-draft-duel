// 포켓몬 그림 주소: 웹 버전은 GitHub, 다운로드 버전은 앱 안의 /sprites/pokemon/
const REMOTE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const sample = { sprites: { front_default: REMOTE + "386.png", back_default: REMOTE + "back/386.png" }, name: "deoxys-normal" };

function load(local) {
    jest.resetModules();
    if (local) process.env.REACT_APP_LOCAL_DATA = "1";
    else delete process.env.REACT_APP_LOCAL_DATA;
    return require("shared/spritebase");
}
afterEach(() => delete process.env.REACT_APP_LOCAL_DATA);

test("웹 버전은 주소를 바꾸지 않는다", () => {
    const { SPRITE_BASE, localizeSprites } = load(false);
    expect(SPRITE_BASE).toBe(REMOTE);
    expect(localizeSprites(sample)).toBe(sample);
});

test("다운로드 버전은 앞·뒤 그림 주소를 앱 안의 폴더로 바꾼다", () => {
    const { SPRITE_BASE, localizeSprites } = load(true);
    expect(SPRITE_BASE).toBe("/sprites/pokemon/");
    expect(localizeSprites([sample])[0].sprites).toEqual({ front_default: "/sprites/pokemon/386.png", back_default: "/sprites/pokemon/back/386.png" });
    expect(sample.sprites.front_default).toBe(REMOTE + "386.png"); // 원본은 건드리지 않는다
});
