import re


def get_extension(filename):

    if filename.rfind(".") >= False and filename.endswith(".") == False:
        extension = re.findall(r"\.\s*(\w+)", filename)
        if len(extension) > 1:
            filename = extension.pop()
        else:
            filename = "".join(extension)
    else:
        filename = "none"

    return filename


print(get_extension("document.txt"))
# should return "txt".
print(get_extension("README"))
# should return "none".
print(get_extension("image.PNG"))
# should return "PNG".
print(get_extension(".gitignore"))
# should return "gitignore".
print(get_extension("archive.tar.gz"))
# should return "gz".
print(get_extension("final.draft."))
# should return "none".
