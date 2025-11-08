function canPost(message) {

    if (message.length > 80) {
        message = "invalid post"
    }
    else if (message.length > 40) {
        message = "long post"
    }
    else {
        message = "short post"
    }

    return message;
}
console.log(canPost("Hello world"))