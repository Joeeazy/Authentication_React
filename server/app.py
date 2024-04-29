from flask import Flask, request, session, jsonify
from models import db, User
from config import AppConfig
from flask_session import Session
from flask_bcrypt import Bcrypt
from flask_cors import CORS , cross_origin

app = Flask(__name__)
app.config.from_object(AppConfig)
server_session = Session(app)
bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True) 
#initialize the application instance
db.init_app(app)

#create an app context?
with app.app_context():
    db.create_all()


#get current user route return info on the current logged in user
@app.route("/@me", methods=["GET"])
def get_current_user():
    user_id = session.get("user_id")
    #if theres in invalid session user_id === none
    if not user_id:
        return jsonify({"error": "Unauthorized"})

    #else check if id matchez
    user = User.query.filter_by(id=user_id).first()

    #return 
    return jsonify({
        "id": user.id,
        "email": user.email
    })


#register user route
@app.route("/register", methods=["POST"])
def register_user():
    email = request.json["email"]
    password = request.json["password"]

    #return true if you have an existing user
    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409
    #hash password
    hashed_password = bcrypt.generate_password_hash(password)
    #create the new_user with an email and the hashed password
    new_user = User(email=email, password=hashed_password)
    #add the created user 
    db.session.add(new_user)
    #save the entry
    db.session.commit()

    #return the new_user
    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })


#login route
@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    #check if email matches
    log_user = User.query.filter_by(email=email).first()

    #if none matches return error
    if log_user is None:
        return jsonify({"error": "Unautorized user"}), 401

    #check if password matches with hashed password if none return error
    if not bcrypt.check_password_hash(log_user.password, password):
        return jsonify({"error": "Wrong passowrd"}), 401

    session["user_id"] = log_user.id

    #otherwise return the log_user
    return jsonify({
        "id": log_user.id,
        "email": log_user.email
    })
    

if __name__ == "__main__":
    app.run(debug=True)