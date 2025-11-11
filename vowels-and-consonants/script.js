function count(str) {
    let count = 0
    const vowels = "aeiou"
    const string = str.replace(/\W/ig, "").toLowerCase();

    for (let i in string) {
        if (vowels.indexOf(string[i]) >= false) {
            count++
        }
    }

    str = []
    str.push(count)
    str.push(string.length - count)

    return str;
}

console.log(count("Hello World"))
//should return [3, 7].
console.log(count("JavaScript"))
//should return [3, 7].
console.log(count("Python"))
//should return [1, 5].
console.log(count("freeCodeCamp"))
//should return [5, 7].
console.log(count("Hello, World!"))
//should return [3, 7].
console.log(count("The quick brown fox jumps over the lazy dog."))
//should return [11, 24].