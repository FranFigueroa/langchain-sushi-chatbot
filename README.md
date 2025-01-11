# Langchain Sushi Chatbot

Un chatbot que ayuda a los usuarios a pedir sushi, mostrar el menú y responder preguntas frecuentes, utilizando LangChain, OpenAI, Node.js, MongoDB y React.

## Tabla de Contenidos

- [Características](#características)
- [Tech Stack](#tech-stack)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Ejecución de Tests](#ejecución-de-tests)
- [Datos de Ejemplo para MongoDB](#datos-de-ejemplo-para-mongodb)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Características

- Responde preguntas sobre sushi.
- Muestra el menú de productos.
- Permite tomar pedidos básicos.
- Gestión de contexto y memoria conversacional.
- Comunicación entre backend y frontend.

## Tech Stack

- **Backend:** Node.js, Express, TypeScript  
- **Chatbot:** LangChain, OpenAI  
- **Base de Datos:** MongoDB, Mongoose  
- **Frontend:** React

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/langchain-sushi-chatbot.git
   cd langchain-sushi-chatbot/backend

## Configuracion

- Copia el archivo .env.example y renómbralo a .env:
- Rellena las variables de entorno en el archivo

## Uso

Backend
npm run dev

Frontend
npm start

## Endpoints

GET /
Mensaje de bienvenida.

GET /api/products
Retorna el menú de productos.

GET /api/products/:id
Retorna información de un producto específico.

POST /api/orders
Crea un nuevo pedido.

## Test

npm run test

## MongoDB Datos de ejemplo
npm run seed

