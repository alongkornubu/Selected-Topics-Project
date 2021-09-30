from sqlalchemy import Table, Column, engine
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta,engine

users = Table('users', meta,
Column('id',Integer,primary_key=True),
Column('id',String(255)),
Column('id',String(255)),
Column('id',String(255)),
)
meta.create_all(engine)