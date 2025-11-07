function combinations(cards) {

    function factorial(num) {

        const arr = [...Array(num).keys()].map(i => i + 1)
        let res = 1

        for (let i in arr) {
            res *= arr[i]
        }

        return res
    }

    cards = factorial(52) / (factorial(cards) * factorial(52 - cards))

    return cards;
}
console.log(combinations(52))