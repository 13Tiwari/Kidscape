import requests
response = requests.get("https://ipinfo.io/json")
data = response.json()