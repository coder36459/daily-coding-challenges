def combinations(cards):

    def factorial(num):
        res = 1
        for i in range(num):
            res *= i + 1

        return res

    cards = factorial(52) / (factorial(cards) * factorial(52 - cards))

    return cards


print(combinations(52))
