import requests
import json
from backend.api.natpark.NatPark import NatPark

PARKNUMBER = 467

tokenfile = open("resources/token.txt", 'r')
token = tokenfile.readline().rstrip()

#API call barebones
def getAPICall(call: str, limit: int):
    endpoint = 'https://developer.nps.gov/api/v1/' + call + '?limit=' + str(limit) + '&api_key=' + token
    return requests.get(endpoint)

#wraper for getAPIcall spesifically for parks
def getParks():
    return getAPICall('parks/', PARKNUMBER).json()

#Returns a list of all the parks in NatPark class
def fillDatabase():
    parks = getParks()
    parkList = []
    i = 0
    for park in parks['data']:
        parkList.append(
            NatPark(i, park['fullName'], park['url'])
        )
        i = i + 1

    #for i in range(len(parkList)):
    #    parkList[i].printPark()

    return parkList

fillDatabase()