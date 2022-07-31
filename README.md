# ParkCheck.Tech

## Backend Instillation

`python3 -m venv venv` Set up virtual environment

`source ./setup.sh` initializes environment variables

`pip install -r requirements.txt` installed required packages to virtural environment

## National park API
place token.txt in resources/token.txt

## Database init

create databse:  
`flask db-init`

fill database:  
`flask db-fill`

view database:  
`flask db-select-all`

run app:
`flask run -p 3000`

## Docker Container
To build image

`docker build --tag parkcheck . `

To deploy container

`docker run -d --name parkcheck -p 3000:3000 parkcheck`

To access park db in json 

`local.host:3000/parks` 

We opted to put this into a docker container for easy of deployment. 
With the container we could all test front end code and be certain we were all running the same code

### To see example of the park DB in a json format visit

### [parkcheck.tech/parks](https://parkcheck.tech/parks)



## Further reading can be found in `backend/`


