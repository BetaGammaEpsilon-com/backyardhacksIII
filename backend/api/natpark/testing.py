import requests

tokenfile = open("token.txt", 'r')

token = tokenfile.readline().rstrip()

endpoint = 'https://developer.nps.gov/api/v1/parks?limit=467&api_key=' + token


#head = {'Authorization': '{}'.format(myToken)}
response = requests.get(endpoint)#, headers=head)


print(response.json())
