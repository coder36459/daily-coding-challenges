import re


def count(s):
    count = 0
    vowels = "aeiou"
    string = re.sub(r"[^a-zA-Z]", "", s).lower()

    for i in string:
        if i in vowels:
            count += 1

    s = []
    s.append(count)
    s.append(len(string) - count)

    return s


print(count("Hello World"))
# should return [3, 7].
print(count("JavaScript"))
# should return [3, 7].
print(count("Python"))
# should return [1, 5].
print(count("freeCodeCamp"))
# should return [5, 7].
print(count("Hello, World!"))
# should return [3, 7].
print(count("The quick brown fox jumps over the lazy dog."))
# should return [11, 24].
