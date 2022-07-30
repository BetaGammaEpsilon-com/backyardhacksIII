import requests


class NatPark:

    def __init__(self, id: int, name: str, url: str):
        self.id = id
        self.name = name
        self.url = url
        self.reviewCount = -1
        self.stars = -1

    def printPark(self):
        print("ID: " + str(self.id) + "\nName: "
              + self.name, "\nURL: "
              + self.url + "\n")
