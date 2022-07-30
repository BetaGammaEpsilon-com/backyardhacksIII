from flask import Flask
from flask import Blueprint
from flask import jsonify
from flask import request
from backend.api.db.db import db_select_all
from backend.api.natpark.NatPark import NatPark

parks_bp = Blueprint('park', __name__, url_prefix='/parks')

@parks_bp.route('/', methods=["GET"])
def get_parks():
    parks = db_select_all()
    return jsonify(parks)