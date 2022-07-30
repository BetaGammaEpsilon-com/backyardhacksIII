import sqlite3

import click
from flask import current_app, g
from flask.cli import with_appcontext

DATABASE = 'resources/database.db'
SQLDATABASE = 'backend/api/db/sql/'


def db_connect():
    if 'conn' not in g:
        try:
            conn = sqlite3.connect(DATABASE)
        except Exception as e:
            raise RuntimeError(f'Error connecting to database {DATABASE}: {e}')
        return conn
    return g.conn


def db_close():
    conn = g.pop('conn', None)
    if conn is not None:
        conn.close()


def db_init():
    conn = db_connect()

    file_path = SQLDATABASE + 'schema.sql'

    with current_app.open_resource(file_path) as f:
        conn.executescript(f.read().decode('utf8'))


@click.command('db-init')
@with_appcontext
def db_init_command():
    db_init()
    click.echo("Initilized databse")


def app_init(app):
    app.teardown_appcontext(db_close())
    app.cli.add_command(db_init_command)


