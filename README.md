# Te Lo Cambio

**Te Lo Cambio** es una plataforma de intercambio de bienes que permite a los usuarios realizar trueques de objetos mediante una API en Flask, respaldada por bases de datos relacionales (MySQL) y no relacionales (Neo4j). La plataforma ofrece recomendaciones inteligentes y un análisis detallado de las interacciones entre usuarios y objetos.

## Funcionalidades Principales

- **Gestión de Usuarios**: Registro, inicio de sesión y preferencias.
- **Gestión de Objetos**: Registro de objetos ofrecidos y deseados, con imágenes y videos.
- **Intercambios**: Historial de intercambios y gestión de estados.
- **Historial de Propiedad**: Registro de propietarios anteriores de los objetos.

## Sincronización de Bases de Datos

Los datos en MySQL y Neo4j están sincronizados para asegurar que la información sobre usuarios, objetos e intercambios esté actualizada en ambas bases de datos.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/te-lo-cambio.git

2. Instala las dependencias:

pip install -r requirements.txt

3. Configura las variables de entorno en un archivo .env.

4. Ejecuta la aplicación:

python run.py

## Contribución
Este proyecto está abierto a contribuciones. Si deseas colaborar, realiza un fork del repositorio y envía un pull request con tus cambios.
