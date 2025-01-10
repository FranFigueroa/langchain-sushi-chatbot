import app from './app';
import { connectDB } from './db';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();  // Conectamos a MongoDB
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
};

startServer();
