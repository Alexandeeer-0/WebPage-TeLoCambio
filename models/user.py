from config.database import db
import hashlib

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100))
    apellido = db.Column(db.String(100))
    dni = db.Column(db.String(8))
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, server_default=db.func.current_timestamp())

    @staticmethod
    def create_user(nombre, apellido, dni, email, password):
        try:
            hashed_password = hashlib.sha256(password.encode()).hexdigest()
            
            new_user = User(
                nombre=nombre,
                apellido=apellido,
                dni=dni,
                email=email,
                password=hashed_password
            )
            
            db.session.add(new_user)
            db.session.commit()
            return True
        except Exception as e:
            print(f"Error: {e}")
            db.session.rollback()
            return False