"use strict"

function infected(days) {

    let count = 1;

    for (let i in [...Array(days + 1).keys()]) {
        count += count;
        if (i % 3 == false) {
            let reduce = Math.ceil(count * 0.2);
            count -= reduce;
        }
    }
    days = count;

    return days;
}

console.log(infected(1));
//should return 2.
console.log(infected(3));
//should return 6.
console.log(infected(8));
//should return 152.
console.log(infected(17));
//should return 39808.
console.log(infected(25));
//should return 5217638.