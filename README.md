# Selected-Topics-Project
# CRUD 
# react + fastapi + mysql

# Frontend
* cd frontend
* npm install
* npm start

# Backend
* cd backend
* virtualenv env
* CMD: .\env\scripts\activate
* pip install -r requirements.txt
* uvicorn main:app --reload

# Docker
* MYSQL
* docker run --name mysqldb -e MYSQL_DATABASE=test -e MYSQL_ROOT_PASSWORD=password -d -p 3306:3306 mysql:latest
