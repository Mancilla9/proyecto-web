# Titulo del Proyecto

## Descripción
Este proyecto es una aplicación web que permite gestionar y visualizar datos desde un archivo JSON. Proporciona una interfaz para interactuar con la información almacenada y realizar operaciones básicas de CRUD (Crear, Leer, Actualizar, Eliminar).

La aplicación está diseñada para:
- Mostrar datos en tiempo real
- Permitir la edición directa de registros
- Ofrecer una interfaz intuitiva para la gestión de datos
- Mantener persistencia de datos mediante JSON Server
- Proporcionar una API RESTful para operaciones CRUD

## Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript (ES6+)
- Node.js
- JSON Server
- RESTful API
- Fetch API
- Bootstrap 5 (para estilos)


## Requisitos Previos
- Node.js instalado en tu sistema
- NPM (Node Package Manager)

### Instalación de Dependencias
```bash
# Instalar JSON Server globalmente
npm install -g json-server

# Instalar dependencias del proyecto
npm install
```

## Ejecutar el Proyecto
1. Inicia el servidor JSON:

```bash
# Iniciar el servidor con el archivo data.json
json-server --watch data.json

# Iniciar en un puerto específico (opcional)
json-server --watch data.json --port 3000

# Iniciar con delay para simular latencia de red (opcional)
json-server --watch data.json --delay 1000
```

2. El servidor se iniciará en `http://localhost:3000`

## Estructura del Proyecto
- `data.json`: Archivo que contiene los datos de la aplicación
- `index.html`: Página principal
- `styles/`: Directorio con archivos CSS
- `js/`: Directorio con archivos JavaScript

## API Endpoints
- GET    `/datos`          # Obtener todos los datos
- GET    `/datos/:id`      # Obtener un dato específico
- POST   `/datos`          # Crear nuevo dato
- PUT    `/datos/:id`      # Actualizar dato existente
- DELETE `/datos/:id`      # Eliminar dato

## Scripts Disponibles
```bash
# Iniciar el servidor en modo desarrollo
npm run dev

# Iniciar el servidor en modo producción
npm start

# Ejecutar pruebas (si están configuradas)
npm test
```
