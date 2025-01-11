// src/integratedChatbotTest.ts

import { handleUserRequest } from '../integratedChatbot';

const testIntegration = async () => {
  const testInputs = [
    'Muéstrame el menú',
    'Quiero hacer un pedido de sushi variado',
    'Hola, ¿cómo estás?',
  ];

  for (const input of testInputs) {
    console.log('----------------------------------------');
    console.log(`Input: ${input}`);
    const response = await handleUserRequest(input);
    console.log(`Respuesta: ${response}`);
    console.log('----------------------------------------\n');
  }
};

testIntegration();
