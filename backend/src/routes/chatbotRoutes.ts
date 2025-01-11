import { Router } from 'express';
import { chatHandler } from '../controllers/chatbotControllers';

const router = Router();

// Endpoint para recibir mensajes del chatbot
router.post('/chat', chatHandler);

export default router;
