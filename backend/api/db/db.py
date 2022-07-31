import sqlite3

import click
from flask import Flask
from flask import current_app, g
from flask.cli import with_appcontext
from backend.api.natpark.NatPark import NatPark
from backend.api.natpark.NPSGrabber import fillDatabase

DATABASE = 'resources/database.db'
SQLDATABASE = 'api/db/sql/'
file_path = SQLDATABASE + 'parks.sql'

#Connects to DB
def db_connect():
    if 'conn' not in g:
        try:
            g.conn = sqlite3.connect(
                current_app.config['DATABASE'],
                detect_types=sqlite3.PARSE_DECLTYPES
            )
            g.conn.row_factory = sqlite3.Row
        except Exception as e:
            raise RuntimeError(f'Error connecting to database {DATABASE}: {e}')
    return g.conn


#closes connection
def db_close(e=None):
    conn = g.pop('conn', None)
    if conn is not None:
        conn.close()


#select all
def selectAll():

    conn = db_connect()

    cursor = conn.cursor()

    cursor.execute('SELECT * FROM park;')

    response = cursor.fetchall()

    conn.close()

    return response

# select all values from db
@click.command('db-select-all')
@with_appcontext
def db_select_all():
    return selectAll()

#TODO: select a single row

#inits database
def db_init():
    conn = db_connect()

    with current_app.open_resource(file_path) as f:
        conn.executescript(f.read().decode('utf8'))

def insert_park(park: NatPark):
    conn = db_connect()

    cursor = conn.cursor()

    col, val = park.sqlify()

    # add park into db or throw exception
    cursor.execute("INSERT INTO park VALUES (?, ?, ?, ?, ?)", val)
    
    conn.commit()

#inits database on the commandline
@click.command('db-init')
@with_appcontext
def db_init_command():
    db_init()
    click.echo("Initilized databse")


@click.command('db-fill')
@with_appcontext
def db_fill():
    #Call NPS grabber
    #place values into SQL table
    click.echo("Filling database")
    all_parks = fillDatabase()

    col, val = all_parks[0].sqlify()

    for park in all_parks:
        insert_park(park)

    db_close()
    

def app_init(app):
    app.teardown_appcontext(db_close)
    app.cli.add_command(db_init_command)
    app.cli.add_command(db_fill)
    app.cli.add_command(db_select_all)