from bs4 import BeautifulSoup
import requests

url = "https://menu.dining.ucla.edu/Menus"

result = requests.get(url)
print(result.text)



