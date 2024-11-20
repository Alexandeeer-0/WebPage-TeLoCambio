from flask import Flask, render_template, send_from_directory, request, jsonify
import hashlib
import hashlib
from models.user import User
from config.database import db, init_db, get_db_connection
import os
from dotenv import load_dotenv

# Cargar variables de entorno
load_dotenv()

app = Flask(__name__, 
            static_url_path='/static',
            static_folder='static',
            template_folder='.')

init_db(app)

with app.app_context():
    db.create_all()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login.html')
def login_page():
    return render_template('login.html')

@app.route('/auth/login', methods=['POST'])
def login():
    email = request.form.get('email')
    password = request.form.get('password')
    
    # Hash the password for comparison
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    
    # Verificar credenciales contra la base de datos
    user = User.query.filter_by(email=email).first()
    
    if user and user.password == hashed_password:
        return jsonify({'success': True, 'redirect': '/dashboard'}), 200
    return jsonify({'success': False, 'message': 'Credenciales inválidas'}), 401

@app.route('/register.html')
def register_page():
    return render_template('register.html')

@app.route('/auth/register', methods=['POST'])
def register():
    try:
        nombre = request.form.get('nombre')
        apellido = request.form.get('apellido')
        dni = request.form.get('dni')
        email = request.form.get('email')
        password = request.form.get('password')
        
        # Verificar si el usuario ya existe
        if User.query.filter_by(email=email).first():
            return jsonify({'success': False, 'message': 'El correo ya está registrado'}), 400
            
        # Crear nuevo usuario
        success = User.create_user(
            nombre=nombre,
            apellido=apellido,
            dni=dni,
            email=email,
            password=password
        )
        
        if not success:
            return jsonify({'success': False, 'message': 'Error al crear el usuario'}), 500
        
        return jsonify({'success': True, 'message': 'Usuario registrado exitosamente'}), 200
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

if __name__ == '__main__':
    init_db(app)
    app.run(debug=True)