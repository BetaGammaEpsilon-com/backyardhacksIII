import requests
import json
from natpark import NatPark

PARKNUMBER = 467

tokenfile = open("token.txt", 'r')
token = tokenfile.readline().rstrip()

def getAPICall(call: str, limit: int):

    endpoint = 'https://developer.nps.gov/api/v1/' + call +'?limit=' + str(limit) +'&api_key=' + token
    return requests.get(endpoint)


def getParks():
    return getAPICall('parks/', PARKNUMBER).json()


parks = getParks()
parkList = []
i = 0
for park in parks['data']:
    parkList.append(
        NatPark(i,park['fullName'], park['url'])
    )
    i = i+1

for i in range(len(parkList)):
    parkList[i].printPark()

