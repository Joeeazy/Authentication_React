from dotenv import load_dotenv
import os
import redis

load_dotenv()

class AppConfig:
    SECRET_KEY= os.environ["SECRET_KEY"]
    #avoid some warnings 
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    #to see whats happening in the db
    SQLALCHEMY_ECHO=True
    #connection URI string
    SQLALCHEMY_DATABASE_URI = r"sqlite:///./db.sqlite"

    #flask sessions
    SESSION_TYPE = "redis"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    SESSION_REDIS = redis.from_url("redis://127.0.0.1:6379")