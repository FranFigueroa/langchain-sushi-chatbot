// src/integratedChatbot.ts

import chatbot from './chatbot';
import { getChatbotPrompt } from './prompts/prompts';
import Product from './models/Products';
import Order from './models/Order';
import { HumanMessage } from "@langchain/core/messages";

/**
 * Consulta y retorna el menú de productos.
 */
export const fetchMenu = async (): Promise<string> => {
  try {
    const products = await Product.find();
    if (!products.length) {
      return 'El menú está vacío en este momento.';
    }
    return `Nuestro menú:\n${products.map(item => `${item.name}: $${item.price}`).join('\n')}`;
  } catch (error) {
    console.error('Error fetching menu:', error);
    return 'Lo siento, no se pudo obtener el menú.';
  }
};

/**
 * Procesa un pedido creando un nuevo registro en la base de datos.
 * En una implementación real, se analizarían los detalles del pedido.
 */
export const processOrder = async (orderDetails: {
  products: { productId: string; quantity: number }[];
  total: number;
}): Promise<string> => {
  try {
    const newOrder = await Order.create({ ...orderDetails, status: 'pending' });
    return `Pedido creado exitosamente. Tu ID de pedido es: ${newOrder._id}`;
  } catch (error) {
    console.error('Error processing order:', error);
    return 'Lo siento, ocurrió un error al procesar tu pedido.';
  }
};

// src/integratedChatbot.ts (continuación)

export const handleUserRequest = async (userInput: string): Promise<string> => {
  const lowerInput = userInput.toLowerCase();

  if (lowerInput.includes('menú') || lowerInput.includes('mostrar')) {
    return await fetchMenu();
  }

  if (lowerInput.includes('pedido') || lowerInput.includes('ordenar')) {
    const dummyOrder = {
      products: [{ productId: 'dummy-product-id', quantity: 1 }],
      total: 10.0,
    };
    return await processOrder(dummyOrder);
  }

  const prompt = getChatbotPrompt(userInput);
  const response = await chatbot.invoke([new HumanMessage(prompt)]);
  return typeof response.content === 'string' 
    ? response.content 
    : JSON.stringify(response.content);
};

