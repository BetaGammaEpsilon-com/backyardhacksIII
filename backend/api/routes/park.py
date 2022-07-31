from flask import Flask
from flask import Blueprint
from flask import jsonify
from flask import request
from backend.api.db import db
from backend.api.natpark.NatPark import NatPark

parks_bp = Blueprint('park', __name__, url_prefix='/parks')


@parks_bp.route('/', methods=["GET"])
def get_parks():
    parks = db.selectAll()
    all_parks = []
    
    for park in parks:
        new_park = NatPark(park[0], park[1], park[2])
        all_parks.append(new_park.serialize())
    
    return jsonify(all_parks)