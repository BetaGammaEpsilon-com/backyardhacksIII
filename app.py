import os

from flask import Flask
from backend import create_app
app = create_app()


if __name__ == "__main__":

    os.system('flask db-init')
    os.system('flask db-fill')
    app.run(debug=True, port='3000', host='0.0.0.0')