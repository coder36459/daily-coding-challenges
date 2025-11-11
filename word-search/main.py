def find_word(matrix, word):
    result = []

    def horizontal():
        result = ""
        for x in matrix:
            for y in x:
                result += y

        return result

    def vertical():
        def v(num):
            result = ""
            for x in matrix:
                for y in x[num]:
                    result += y

            return result

        result = ""
        i = 0
        while i < len(matrix):
            result += v(i)
            i += 1

        return result

    def position(hor_ver, ord_rev, start, lm, lw):
        arr = []
        pos = int((start * lw) / lm**2)

        if hor_ver == "horizontal" and ord_rev == "ordered":
            if lm == lw:
                arr.append([pos, lm - lw])
                arr.append([pos, lw - 1])
            else:
                print("not supported")

        if hor_ver == "vertical" and ord_rev == "ordered":
            if lm == lw:
                arr.append([lm - lw, pos])
                arr.append([lw - 1, pos])
            else:
                print("not supported")

        if hor_ver == "horizontal" and ord_rev == "reverse":
            if lm == lw:
                print("not supported")
            else:
                pos = int((start * lm) / lm**2)
                arr.append([pos, lm - 1])
                arr.append([pos, lm - lw])

        if hor_ver == "vertical" and ord_rev == "reverse":
            if lm == lw:
                arr.append([lw - 1, pos])
                arr.append([lm - lw, pos])
            else:
                print("not supported")

        return arr

    f_hor_ord = horizontal().find(word)
    f_ver_ord = vertical().find(word)
    f_hor_rev = horizontal().find(word[::-1])
    f_ver_rev = vertical().find(word[::-1])

    if f_hor_ord >= False:
        result = position("horizontal", "ordered", f_hor_ord, len(matrix), len(word))

    elif f_ver_ord >= False:
        result = position("vertical", "ordered", f_ver_ord, len(matrix), len(word))

    elif f_hor_rev >= False:
        result = position("horizontal", "reverse", f_hor_rev, len(matrix), len(word))

    elif f_ver_rev >= False:
        result = position("vertical", "reverse", f_ver_rev, len(matrix), len(word))

    matrix = result

    return matrix


print(find_word([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat"))
# should return [[0, 1], [2, 1]].

print(find_word([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog"))
# should return [[0, 0], [0, 2]].

print(
    find_word(
        [
            ["h", "i", "s", "h"],
            ["i", "s", "f", "s"],
            ["f", "s", "i", "i"],
            ["s", "h", "i", "f"],
        ],
        "fish",
    )
)
# should return [[3, 3], [0, 3]].

print(
    find_word(
        [
            ["f", "x", "o", "x"],
            ["o", "x", "o", "f"],
            ["f", "o", "f", "x"],
            ["f", "x", "x", "o"],
        ],
        "fox",
    )
)
# should return [[1, 3], [1, 1]].
