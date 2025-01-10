import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/langchain_sushi_db';

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI, {});
    console.log('Base de datos conectada');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
    process.exit(1);
  }
};

