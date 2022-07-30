from flask import Flask
import os
from backend.api.db import db
from backend.api.routes import version, park


#Barebones for the flask app
def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'database.db')
    )

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # @app.route('/hello')
    # def hello():
    #     return 'Hello, World!'

    #blueprints:
    #version
    app.register_blueprint(version.version_bp)
    #park
    app.register_blueprint(park.parks_bp)

    db.app_init(app)

    return app
