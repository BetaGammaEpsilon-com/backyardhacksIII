import requests

tokenfile = open("token.txt", 'r')

token = tokenfile.readline().rstrip()

def getAPICall(call: str):
    endpoint = 'https://developer.nps.gov/api/v1/' + call +'?limit=467&api_key=' + token
    return requests.get(endpoint)


def getParks():
    print(getAPICall('parks/').json())

getParks()