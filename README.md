<div align="center">
  <h1>🔄 TeLoCambio</h1>
  <p><i>Una plataforma moderna de intercambio de objetos</i></p>
  
  ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
  ![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
  ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
  ![Neo4j](https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white)
  ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
</div>

## 📋 Descripción

**TeLoCambio** es una innovadora plataforma web que revoluciona la forma en que intercambiamos objetos. Utilizando una arquitectura híbrida que combina MySQL y Neo4j, ofrecemos una experiencia única para:

- 🤝 Intercambiar objetos de forma segura
- ⭐ Valorar las experiencias de intercambio
- 🔔 Recibir notificaciones en tiempo real
- 👥 Construir una comunidad de intercambio confiable

## 🚀 Características Principales

- **Sistema de Valoraciones**: Construye tu reputación a través de intercambios exitosos
- **Notificaciones**: Mantente informado sobre tus solicitudes y ofertas
- **Gestión de Objetos**: Administra tu inventario de forma intuitiva
- **API RESTful**: Integración sencilla con otros servicios

## 🛠️ Tecnologías

### Backend
- Python (Flask)
- MySQL (Base de datos relacional)
- Neo4j (Base de datos de grafos)
- Flask-Login (Autenticación)

### Frontend
- HTML5 & CSS3
- Bootstrap 5
- JavaScript

### Testing
- unittest
- pytest

## ⚙️ Instalación

### Prerrequisitos
- Python 3.x
- MySQL
- Neo4j
- pip

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Alexandeeer-0/WebPage-TeLoCambio.git
cd TeLoCambio
```

2. **Crear y activar entorno virtual**
```bash
python -m venv venv

# Windows
venv\Scripts\activate

# Linux/MacOS
source venv/bin/activate
```

3. **Instalar dependencias**
```bash
pip install -r requirements.txt
```

4. **Configurar variables de entorno**
Crea un archivo `.env` en la raíz:
```env
# MySQL
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=tu_contraseña
MYSQL_DB=te_locambio
MYSQL_PORT=3306

# Neo4j
NEO4J_URI=bolt://localhost:7687
NEO4J_USER=neo4j
NEO4J_PASSWORD=tu_contraseña

# Flask
FLASK_APP=run.py
FLASK_ENV=development
SECRET_KEY=tu_clave_secreta
```

5. **Ejecutar la aplicación**
```bash
python run.py
```

## 🗄️ Estructura del Proyecto

```
TeLoCambio/
├── app/
│   ├── routes/          # Rutas de la API
│   ├── models/          # Modelos de datos
│   ├── database/        # Configuración de BD
│   ├── templates/       # Plantillas HTML
│   ├── static/         # Archivos estáticos
│   └── __init__.py
├── config/
├── tests/
├── run.py
└── requirements.txt
```

## 🔗 API Endpoints

### Usuarios
- `POST /api/usuarios` - Crear usuario
- `POST /api/login` - Iniciar sesión
- `GET /api/usuarios` - Listar usuarios
- `DELETE /api/usuarios/{id}` - Eliminar usuario

### Objetos e Intercambios
- `POST /api/objetos` - Registrar objeto
- `PATCH /api/objetos/{id}/estado` - Actualizar estado
- `POST /api/intercambios` - Crear intercambio
- `PATCH /api/intercambios/{id}/confirmar` - Confirmar intercambio

## 🧪 Testing

Ejecutar pruebas automatizadas:
```bash
pytest tests/test_api.py
```

## 👥 Contribución

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

