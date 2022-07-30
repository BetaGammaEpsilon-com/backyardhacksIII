from flask import Flask
def create_app():
        app = Flask(__name__)
        from . import db
        db.app_init(app)
        return app