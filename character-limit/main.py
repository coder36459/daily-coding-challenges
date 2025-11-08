def can_post(message):

    if len(message) > 80:
        message = "invalid post"
    elif len(message) > 40:
        message = "long post"
    else:
        message = "short post"

    return message


print(can_post("Hello world"))
