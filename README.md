# backyardhacksIII

## Backend Instillation

`python3 -m venv venv` Set up virtual environment

`source ./setup.sh` initializes environment variables

`pip install -r requirements.txt` installed required packages to virtural environment

## Database init

create databse:  
`flask db-init`

fill database:  
`flask db-fill`

view database:  
`flask db-select-all`

run app:
`flask run -p 3000`

## National park API
place token.txt in backend/api/natpark/