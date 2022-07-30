from flask import Flask
from flask import Blueprint

version_bp = Blueprint('version', __name__, url_prefix='/version')

@version_bp.route('/')
def get_version():
    return {'version': '1.0.0'}