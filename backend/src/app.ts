import express from 'express';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Bienvenido al Langchain Sushi Chatbot!');
});

export default app;

