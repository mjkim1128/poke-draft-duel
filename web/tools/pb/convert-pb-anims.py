"""Gen 9 Move Animation Project (Pokemon Essentials) -> web JSON + sheets for the battle screen.

Usage (from web/): python tools/pb/convert-pb-anims.py <project folder> public
Only the weather and terrain animations are used. Writes public/pbanim/index.json, public/pbanim/a/<id>.json and public/pbanim/g/<sheet>.png
"""
import sys, os, json, re, shutil

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rbmarshal import load

P = sys.argv[1].rstrip("/\\") + "/"
OUT = sys.argv[2].rstrip("/\\") + "/pbanim/"

S = lambda b: b.decode("utf-8", "replace") if isinstance(b, bytes) else (b or "")
norm = lambda s: re.sub(r"[^a-z0-9]", "", s.lower())

data = load(P + "Data/PkmnAnimations.rxdata")
arr = [a for a in data.attrs["@array"] if a]
byKind = {"Move": {}, "OppMove": {}}
for a in arr:
    n = S(a.attrs["@name"])
    kind = n.split(":")[0]
    if kind in byKind and ":" in n:
        byKind[kind][norm(n.split(":", 1)[1])] = a

os.makedirs(OUT + "a", exist_ok=True)
os.makedirs(OUT + "g", exist_ok=True)

sheet_names = {}


def sheet(name):
    """Copy a sheet / background picture into the web folder and return its published file name."""
    if not name:
        return ""
    if name in sheet_names:
        return sheet_names[name]
    src = None
    for cand in (name, name + ".png"):
        if os.path.exists(P + "Graphics/Animations/" + cand) and os.path.isfile(P + "Graphics/Animations/" + cand):
            src = P + "Graphics/Animations/" + cand
            break
    if not src:
        sheet_names[name] = ""
        return ""
    base = re.sub(r"[^a-z0-9._-]+", "_", os.path.splitext(name if name.lower().endswith(".png") else name)[0].lower()).strip("_")
    out = base + ".png"
    i = 2
    while out in sheet_names.values():
        out = f"{base}_{i}.png"
        i += 1
    shutil.copyfile(src, OUT + "g/" + out)
    sheet_names[name] = out
    return out


def cel(c):
    if c is None:
        return None
    # AnimFrame: X0 Y1 ZOOMX2 ANGLE3 MIRROR4 BLEND5 VISIBLE6 PATTERN7 OPACITY8 ZOOMY11 COLOR12-15 TONE16-19 LOCKED20 PRIORITY25 FOCUS26
    g = lambda i, d=0: (c[i] if i < len(c) and c[i] is not None else d)
    base = [g(0), g(1), g(7), g(2, 100), g(11, 100), g(3), g(4), g(5), g(8, 255), g(25, 1), g(26, 4)]
    extra = []
    color = [g(12), g(13), g(14), g(15)]
    tone = [g(16), g(17), g(18), g(19)]
    if g(6, 1) != 1 or any(color) or any(tone):
        extra = [g(6, 1)] + color + tone
    return base + ([extra] if extra else [])


def timing(t):
    r = {"f": t.attrs["@frame"], "t": t.attrs["@timingType"], "d": t.attrs.get("@duration") or 0}
    name = S(t.attrs.get("@name"))
    if name:
        r["n"] = sheet(name) if r["t"] in (1, 3) else name
    for k, key in (("@bgX", "x"), ("@bgY", "y"), ("@opacity", "o")):
        v = t.attrs.get(k)
        if v is not None:
            r[key] = v
    col = [t.attrs.get("@colorRed"), t.attrs.get("@colorGreen"), t.attrs.get("@colorBlue"), t.attrs.get("@colorAlpha")]
    if any(v is not None for v in col):
        r["c"] = [v or 0 for v in col]
    if r["t"] == 0:
        r["v"] = t.attrs.get("@volume", 100)
    return r


written = {}


def emit(kind, key):
    """Write one animation (once) and return its file id."""
    fid = {"OppMove": "o_", "Move": "m_", "Common": "c_"}[kind] + key
    if fid in written:
        return fid
    a = byKind[kind][key]
    frames = a.attrs["@array"]
    out = {
        "g": sheet(S(a.attrs["@graphic"])),
        "h": a.attrs.get("@hue") or 0,
        "n": len(frames),
        "f": [[cel(c) for c in fr] for fr in frames],
        "t": [timing(t) for t in (a.attrs["@timing"] or []) if t.attrs["@timingType"] in (0, 1, 2, 3, 4)],
    }
    # trailing empty cels are dropped
    for fr in out["f"]:
        while fr and fr[-1] is None:
            fr.pop()
    json.dump(out, open(OUT + "a/" + fid + ".json", "w", encoding="utf-8"), separators=(",", ":"), ensure_ascii=False)
    written[fid] = True
    return fid


# 날씨와 필드(테레인)의 공통 연출만 쓴다: 이름 -> 에센셜의 "Common:" 연출 이름
COMMON = {
    "sun": "Sun",
    "rain": "Rain",
    "sand": "Sandstorm",
    "hail": "Hail",
    "snow": "Snow",
    "electric-terrain": "ElectricTerrain",
    "grassy-terrain": "GrassyTerrain",
    "misty-terrain": "MistyTerrain",
    "psychic-terrain": "PsychicTerrain",
}
common = {}
for a in arr:
    n = S(a.attrs["@name"])
    if n.startswith("Common:"):
        common[n[7:]] = a

index = {}
for key, name in COMMON.items():
    byKind.setdefault("Common", {})[key] = common[name]
    index[key] = emit("Common", key)

json.dump(index, open(OUT + "index.json", "w", encoding="utf-8"), separators=(",", ":"))
total = sum(os.path.getsize(OUT + "a/" + f) for f in os.listdir(OUT + "a"))
sheets = sum(os.path.getsize(OUT + "g/" + f) for f in os.listdir(OUT + "g"))
print(f"weather/terrain animations: {len(index)} ({total // 1024} KB), picture files: {len(os.listdir(OUT + 'g'))} ({sheets // 1024} KB)")
