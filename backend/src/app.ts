import express from 'express';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';
import chatbotRoutes from './routes/chatbotRoutes';  // Importamos las rutas del chatbot

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Bienvenido al Langchain Sushi Chatbot!');
});

// Rutas de API
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api', chatbotRoutes);  // El endpoint para el chatbot será: /api/chat

export default app;
