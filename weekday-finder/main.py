from datetime import datetime


def get_weekday(date_string):
    date_string = datetime.strptime(date_string, "%Y-%m-%d").strftime("%A")

    return date_string


print(get_weekday("2025-11-06"))
