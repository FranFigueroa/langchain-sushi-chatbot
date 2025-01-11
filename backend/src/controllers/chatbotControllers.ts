import { Request, Response } from 'express';
import { handleUserRequest } from '../integratedChatbot';

export const chatHandler = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'El mensaje es obligatorio.' });
    }

    // Llama a la función que procesa el input del usuario
    const responseMessage = await handleUserRequest(message);
    return res.status(200).json({ response: responseMessage });
  } catch (error: any) {
    console.error('Error en chatHandler:', error);
    return res.status(500).json({ error: 'Error al procesar el mensaje.' });
  }
};
