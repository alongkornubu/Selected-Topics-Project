from fastapi import APIRouter
from models.user import users
from config.db import conn
user = APIRouter()

@user.get('/')
async def fetch_user():
    return conn.execute(user.select()).fetchall()

