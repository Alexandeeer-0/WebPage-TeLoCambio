from flask_sqlalchemy import SQLAlchemy
import mysql.connector
from mysql.connector import Error

db = SQLAlchemy()

def init_db(app):
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:QPsdANrILQkqMwwYwSBurEmBMalpVVWC@junction.proxy.rlwy.net:58710/railway'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)

def get_db_connection():
    try:
        connection = mysql.connector.connect(
            host="junction.proxy.rlwy.net",
            user="root",
            password="QPsdANrILQkqMwwYwSBurEmBMalpVVWC",
            port=58710,
            database="railway"
        )
        if connection.is_connected():
            print("Conexión exitosa a la base de datos")
            return connection
        else:
            print("No se pudo establecer la conexión")
            return None
    except Error as e:
        print(f"Error conectando a MySQL: {e}")
        return None