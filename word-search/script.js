function findWord(matrix, word) {

    // Convert matrix to string
    const str = () => {

        let rows = "", cols = "";

        for (let x in matrix) {
            rows += matrix[x].join("");

            for (let y in matrix[x]) {
                cols += matrix[y][x];
            }
        }
        rows += " " + cols;

        return rows
    }

    // Check is order or reverse and vertical or horizontal
    const position = () => {

        const strLen = str().length - 1;
        const size = Math.sqrt(strLen / 2); // Length rows or columns
        const ord = (str().indexOf(word)) + 1;
        const rev = str().indexOf(word.split("").reverse().join("")) + 1;
        const isVer = (rev > (strLen / 2) || ord >= (strLen / 2)) ? "vertical" : "horizontal";

        let result = [];

        if (ord < 1) {
            result = [rev, size, "reverse", isVer];
        }

        else {
            result = [ord, size, "ordered", isVer];
        }

        return result
    }

    const arr = () => {

        let result = [];

        const wordLen = word.length;
        const mat = position()[1] ** 2;

        const posH = (position()[0] > mat) ? position()[0] - 1 : position()[0];
        const posV = position()[0] - mat - 1;

        const opt = (x, y) => Math.floor(x - 1 - (position()[1] * y));

        const rowH = Math.floor(posH / position()[1]);
        const colH = opt(posH, rowH);

        const colV = Math.floor(posV / position()[1]);
        const rowV = opt(posV, colV);

        console.log(str(), position());
        if (position()[2] === "reverse" && position()[3] === "horizontal") {
            result = [[rowH, colH + wordLen - 1], [rowH, colH]]
        }
        else if (position()[2] === "reverse" && position()[3] === "vertical") {
            result = [[rowV + wordLen - 1, colV], [rowV, colV]]
        }
        else if (position()[2] === "ordered" && position()[3] === "horizontal") {
            result = [[rowH, colH], [rowH, colH + wordLen - 1]]
        }
        else {
            result = [[rowV, colV], [rowV + wordLen - 1, colV]]
        }
        return result
    }

    matrix = arr();

    return matrix
}
console.log(findWord([["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox"))
//should return [[1, 3], [1, 1]]

console.log(findWord([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], "fish"))
//should return [[3, 3], [0, 3]]

console.log(findWord([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog"))
//should return [[0, 0], [0, 2]]

console.log(findWord([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat"))
//should return [[0, 1], [2, 1]]