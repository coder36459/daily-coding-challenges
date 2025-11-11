function getExtension(filename) {

    let extension = filename.substr(filename.lastIndexOf(".") + 1);
    if (extension != "" && filename.indexOf(".") >= false) {
        filename = extension
    }
    else {
        filename = "none";
    }

    return filename;
}

console.log(getExtension("document.txt"))
//should return "txt".
console.log(getExtension("README"))
//should return "none".
console.log(getExtension("image.PNG"))
//should return "PNG".
console.log(getExtension(".gitignore"))
//should return "gitignore".
console.log(getExtension("archive.tar.gz"))
//should return "gz".
console.log(getExtension("final.draft."))
//should return "none".