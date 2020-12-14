# CHAT API

### Introduction
This Flask chat API will fit for all people who want to learn the main basic ideas of creating some sort of REST API.


### Basic idea of realization
- For database ORM we will use SQLAlchemy. 
- For database we will use SQLite because it can ideally fit all our purposes and it's not overloaded.
- For authorization we will create and proceed auth token with JWT library for python.
- For hashing and proceeding secure storage of passwords we will use Werkzeug.security library.
- For adding messages history and adding them nessesary to the chat without reloading of page(when API working with client not on localhost) we will use Pusher API.

### What methods are in this API?
Our goal is to build a private chat with your own personal account and message history as well. So, for this we need to handle and proceed some requests. List of them are below:
- **Register <POST>**

This is method. Register method in this API do not require any authorization and you can get access to this method just by making request to 
> **<host>:5000/api/register** 

with body which contents JSON struct with username and password of user we want to create. API will return JSON struct which contents status and message about procceding current method.

- **Login <POST>**

Login method in this API do not require any authorization and you can get access to this method just by making request to 
> **<host>:5000/api/login**

with body which contents JSON struct with username and password of user we want to find in database to create authorization token. API will return JSON struct which contents status and message about procceding current method. 
This method is used for creating authorization token and grant access to some methods of this API.

- **Request_Chat <POST>**

Request Chat method requires previous authorization with **API:Login** method. You can access this method just by making request to 
> **<host>:5000/api/request_chat**

with body which contents JSON struct with from_user id and to_user id. This method is used for creating channel of communication between two users as well as for subscribing users on their private channel for fetching and showing updates.

- **Pusher auth <POST>**

Pusher auth method requires previous authorization with **API:Login** method. You can access this method just by making request to
> **<host>:5000/api/pusher/auth**

without any additional params. This method required for making new channels and socket authenticated by Pusher API.
- **Send_Message <POST>**

Send_message method requires previous authorization with **API:Login** method. You can access this method just by making request to
> **<host>:5000/api/send_message**

with body which contents JSON struct with from_user id and to_user id as well as message text and channel id. This method add new message to database and pusher display it on client. Moreover, in this method pusher get message struct which came to send_message method, and send it to API for proceeding.
- **Users <GET>**

Users method requires previout authorization with **API:Login** method. You can access this method just by making request to
> **<host>:5000/api/users**

without any additional params. This method required for getting all users who are currently registered in API.
- **Get_message/<channel_id> <GET>**

This method requires previos authorization with **API:Login** method. You can access this method just by making request to
> **<host>:5000/api/get_message/<channel_id>**

without any addutionak params. This method required for getting all messages in private channel by this channel ID.
### How to setup this API
- **Copy this branch to newly created API directory.**
> mkdir api && cd api
- **Create venv for this python project.**
> python -m venv env
- **Activate virtual enviroment**
> \path\to\env\Scripts\activate
- **Add your PUSHER API KEYS TO .env file**
>    PUSHER_APP_ID=app_id  
    PUSHER_KEY=key  
    PUSHER_SECRET=secret  
    PUSHER_CLUSTER=cluster  
- **Install requirements.txt**
> pip install -r requirements.txt
-**Initialize database.db**
In command line navigate to project folder, activate venv and launch python executor.  
Then import init_db() from database.py and execute it for initialzing database.db
- **Start-up project**
> flask run

