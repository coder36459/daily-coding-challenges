function buildMatrix(rows, cols) {
    //let arr = "0".repeat(cols).split("").map(Number)
    rows = Array(rows).fill(Array(cols).fill(0))
    return rows;
}
console.log(buildMatrix(2, 3))