def image_search(images, term):
    img = []
    term = term.lower()
    for i in images:
        if i.lower().find(term) >= 0:
            img.append(i)
    images = img
    return images


print(
    image_search(
        ["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"],
        "Cat",
    )
)
