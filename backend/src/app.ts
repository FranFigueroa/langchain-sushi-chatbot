import express from 'express';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Bienvenido al Langchain Sushi Chatbot!');
});

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

export default app;
