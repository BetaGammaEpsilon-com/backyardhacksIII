import sqlite3

import click
from flask import current_app, g
from flask.cli import with_appcontext

DATABASE = 'resources/database.db'


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
