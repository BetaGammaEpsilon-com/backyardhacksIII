import sqlite3

import click
from flask import Flask
from flask import current_app, g
from flask.cli import with_appcontext
from backend.api.natpark.NatPark import NatPark

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


#inits database
def db_init():
    conn = db_connect()

    with current_app.open_resource(file_path) as f:
        conn.executescript(f.read().decode('utf8'))

#TODO be able to insert into database
def inset(park: NatPark):
    conn = db_connect()

    cursor = conn.cursor()


#inits database on the commandline
@click.command('db-init')
@with_appcontext
def db_init_command():
    db_init()
    click.echo("Initilized databse")


def app_init(app):
    app.teardown_appcontext(db_close)
    app.cli.add_command(db_init_command)



