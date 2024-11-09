import openai
import requests
import json

def theSafetyScore():
    response = requests.get("https://ipinfo.io/json")
    data = response.json()

    print("City:", data.get("city"))
    print("Region:", data.get("region"))
    print("Location:", data.get("loc"))  # latitude,longitude


    # Replace with your OpenAI API key
    openai.api_key = ''


    prompt = (
            f"Given the city {data.get("city")}, {data.get("region")}, "
            "just give me what is the safety score 0-100 for city does not have to be real time and DO NOT SAY ANYTHING ELSE."
        )
    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )

    numbers = [int(char) for char in response.choices[0].message['content'].strip() if char.isdigit()]
    numbers_string = "".join(str(num) for num in numbers)

    printable = (f"The safety score for the city {data.get("city")}, {data.get("region")} is {numbers_string}")
    print(printable)

    data = {
        "Safety Score": int(numbers_string)  # This is the number you want to send
    }

    with open("data.json", "w") as file:
        json.dump(data, file)

    return data

theSafetyScore()