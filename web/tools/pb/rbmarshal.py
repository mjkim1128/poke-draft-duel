"""Minimal Ruby Marshal 4.8 reader (enough for Pokemon Essentials' PkmnAnimations.rxdata)."""
import struct


class RObj:
    def __init__(self, cls):
        self.cls = cls
        self.attrs = {}
        self.data = None  # for user classes wrapping array/string/hash

    def __repr__(self):
        return f"<{self.cls} {list(self.attrs.keys())[:8]}>"


class Reader:
    def __init__(self, buf):
        self.b = buf
        self.p = 0
        self.syms = []
        self.objs = []
        assert buf[0] == 4 and buf[1] == 8
        self.p = 2

    def byte(self):
        v = self.b[self.p]
        self.p += 1
        return v

    def long(self):
        c = self.byte()
        if c > 127:
            c -= 256
        if c == 0:
            return 0
        if 4 < c < 128:
            return c - 5
        if -129 < c < -4:
            return c + 5
        if c > 0:
            n = 0
            for i in range(c):
                n |= self.byte() << (8 * i)
            return n
        c = -c
        n = -1
        for i in range(c):
            n &= ~(0xFF << (8 * i))
            n |= self.byte() << (8 * i)
        return n

    def bytes(self):
        n = self.long()
        v = self.b[self.p:self.p + n]
        self.p += n
        return v

    def symbol(self):
        t = self.byte()
        if t == 0x3A:  # ':'
            s = self.bytes().decode("utf-8", "replace")
            self.syms.append(s)
            return s
        if t == 0x3B:  # ';'
            return self.syms[self.long()]
        raise ValueError("symbol expected, got %r at %d" % (t, self.p))

    def read(self):
        t = self.byte()
        c = chr(t)
        if c == "0":
            return None
        if c == "T":
            return True
        if c == "F":
            return False
        if c == "i":
            return self.long()
        if c == ":":
            self.p -= 1
            return self.symbol()
        if c == ";":
            self.p -= 1
            return self.symbol()
        if c == "@":
            return self.objs[self.long()]
        if c == "I":
            obj = self.read()
            n = self.long()
            for _ in range(n):
                k = self.symbol()
                v = self.read()
                if isinstance(obj, RObj):
                    obj.attrs[k] = v
            return obj
        if c == '"':
            s = self.bytes()
            self.objs.append(s)
            return s
        if c == "f":
            s = self.bytes().decode()
            v = float(s) if s not in ("inf", "-inf", "nan") else float("nan")
            self.objs.append(v)
            return v
        if c == "l":
            sign = self.byte()
            n = self.long() * 2
            v = int.from_bytes(self.b[self.p:self.p + n], "little")
            self.p += n
            v = v if sign == 0x2B else -v
            self.objs.append(v)
            return v
        if c == "[":
            idx = len(self.objs)
            arr = []
            self.objs.append(arr)
            n = self.long()
            for _ in range(n):
                arr.append(self.read())
            return arr
        if c == "{" or c == "}":
            idx = len(self.objs)
            h = {}
            self.objs.append(h)
            n = self.long()
            for _ in range(n):
                k = self.read()
                v = self.read()
                try:
                    h[k] = v
                except TypeError:
                    h[str(k)] = v
            if c == "}":
                self.read()
            return h
        if c == "C":  # user class wrapping a builtin
            cls = self.symbol()
            inner = self.read()
            o = RObj(cls)
            o.data = inner
            # keep identity registration consistent: replace the builtin's slot
            for i, x in enumerate(self.objs):
                if x is inner:
                    self.objs[i] = o
                    break
            return o
        if c == "o":
            cls = self.symbol()
            o = RObj(cls)
            self.objs.append(o)
            n = self.long()
            for _ in range(n):
                k = self.symbol()
                o.attrs[k] = self.read()
            return o
        if c == "u":
            cls = self.symbol()
            raw = self.bytes()
            o = RObj(cls)
            o.data = raw
            self.objs.append(o)
            return o
        if c == "U":
            cls = self.symbol()
            o = RObj(cls)
            self.objs.append(o)
            o.data = self.read()
            return o
        if c == "S":
            cls = self.symbol()
            o = RObj(cls)
            self.objs.append(o)
            n = self.long()
            for _ in range(n):
                k = self.symbol()
                o.attrs[k] = self.read()
            return o
        if c == "c" or c == "m" or c == "M":
            s = self.bytes().decode()
            self.objs.append(s)
            return s
        if c == "e":
            self.symbol()
            return self.read()
        raise ValueError("unknown type %r at %d" % (c, self.p - 1))


def load(path):
    with open(path, "rb") as f:
        return Reader(f.read()).read()
