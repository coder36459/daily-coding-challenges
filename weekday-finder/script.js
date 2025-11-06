function getWeekday(dateString) {

    /* First solution
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    firstSolution = weekday[new Date(dateString).getDay()]
    console.log(firstSolution)
    */

    // Second solution
    const secondSolution = new Date(dateString).toLocaleDateString("en-US", { weekday: "long" })
    dateString = secondSolution

    return dateString;
}
console.log(getWeekday("2025-11-06"))