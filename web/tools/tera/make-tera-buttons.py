"""Pokemon Wishing Star(Deluxe Battle Kit 테라스탈 플러그인)의 cursor_tera.png에서 타입별 버튼 그림을 만든다.
원본 버튼에는 "ACTION" 글자가 구워져 있어서, 글자 자리를 지우고(글자 앞 한 줄을 늘려 채움) 우리가 한글을 얹을 수 있게 한다.

Usage (web/에서):
    python tools/tera/make-tera-buttons.py "<Pokemon Wishing Star 폴더>/Graphics/Plugins/Terastallization/cursor_tera.png" public/tera/buttons
"""
import sys, os
from PIL import Image

SRC, OUT = sys.argv[1], sys.argv[2]
os.makedirs(OUT, exist_ok=True)
sheet = Image.open(SRC).convert("RGBA")
W, H = 150, 46
# 에센셜의 타입 순서: 0 기본, 1 노말, 2 격투, 3 비행, 4 독, 5 땅, 6 바위, 7 벌레, 8 고스트, 9 강철, 10 ???, 11 불꽃, 12 물, 13 풀, 14 전기, 15 에스퍼, 16 얼음, 17 드래곤, 18 악, 19 페어리, 20 스텔라
ROWS = {"default": 0, "normal": 1, "fighting": 2, "flying": 3, "poison": 4, "ground": 5, "rock": 6, "bug": 7, "ghost": 8, "steel": 9,
        "fire": 11, "water": 12, "grass": 13, "electric": 14, "psychic": 15, "ice": 16, "dragon": 17, "dark": 18, "fairy": 19}
TEXT_FROM, TEXT_TO, FILL_COL = 56, 142, 52  # 글자가 있는 가로 범위와, 그 앞에서 본뜰 세로 한 줄 (아이콘 뒤, 글자 앞)
for name, row in ROWS.items():
    btn = sheet.crop((0, row * H, W, row * H + H))
    col = btn.crop((FILL_COL, 0, FILL_COL + 1, H))
    for x in range(TEXT_FROM, TEXT_TO):
        btn.paste(col, (x, 0))
    btn.save(os.path.join(OUT, name + ".png"))
print(len(ROWS), "buttons")
