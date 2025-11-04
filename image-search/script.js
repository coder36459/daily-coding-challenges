function imageSearch(images, term) {
    let img = []
    term = term.toLowerCase()
    for (let i in images) {
        if (images[i].toLowerCase().indexOf(term) >= false) {
            img.push(images[i])
        }
    }
    images = img
    return images;
}
console.log(imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG"))