# Selected-Topics-Project
#CRUD

#Frontend 
* cd frontend 
* npm start

#Backend 
*  cd backend 
*  virtualenv env
* WINDOWS: .\env\Scripts\activate 
* pip install -r requirements.txt 
* uvicorn main:app --reload

#DOCKER 
#MYSQL
* docker run --name mysqldb -e MYSQL_DATABASE=test -e MYSQL_ROOT_PASSWORD=password -d -p 3306:3306 mysql:latest
