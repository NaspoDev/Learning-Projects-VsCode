# Use the selenium site and documentation to learn all about it and about things you can do:
# https://www.selenium.dev/ (See webdriver docs)


# If you're not using their IDE or whatever else (which you're super most likely not doing), your import will always look like this.
# The webdriver is the thing that allows you to control the browser
from selenium import webdriver

# Options are specific configurations you can set for the webdriver
# The following option will allow the webdriver to stay open after the script is done running
options = webdriver.ChromeOptions()
options.add_experimental_option("detach", True)

# Creating the webdriver and assigning the options to it
driver = webdriver.Chrome(options=options)
driver.get("https://www.techwithtim.net/")

# Example thing to do: Getting the title of the website
title = driver.title
print(title)