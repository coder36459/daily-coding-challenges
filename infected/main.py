import math


def infected(days):

    count = 1
    for i in range(days + 1):
        count += count
        if i % 3 == False:
            reduce = math.ceil(count * 0.2)
            count -= reduce

    days = count

    return days


print(infected(0))
# should return 1.
print(infected(1))
# should return 2.
print(infected(3))
# should return 6.
print(infected(8))
# should return 152.
print(infected(17))
# should return 39808.
print(infected(25))
# should return 5217638.
