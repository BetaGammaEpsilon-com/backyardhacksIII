import requests


class NatPark:
    #inits NatPark
    def __init__(self, id: int, name: str, url: str):
        self.id = id
        self.name = name
        self.url = url
        self.reviewCount = -1
        self.stars = -1

    # override tostring
    def __str__(self):
        return f'ID: {self.id}, NAME: {self.name}, URL: {self.url}, REVIEW_COUNT: {self.reviewCount}, STARS: {self.stars}'

    # override string object representation
    def __repr__(self):
        return f'ID: {self.id}, NAME: {self.name}, URL: {self.url}, REVIEW_COUNT: {self.reviewCount}, STARS: {self.stars}'

    def printPark(self):
        print("ID: " + str(self.id) + "\nName: "
              + self.name, "\nURL: "
              + self.url + "\n")

    # serialize into JSON format
    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'url': self.url,
            'reviewCount': self.reviewCount,
            'stars': self.stars
        }

    # able to insert into sql table
    def sqlify(self):
        return (
            'id,name,url,reviewCount,stars',
            (None,self.name,self.url,self.reviewCount,self.stars)
        )