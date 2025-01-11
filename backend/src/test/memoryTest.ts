import { memory } from '../memory';

const testMemory = async () => {
  // Simula una conversación agregando mensajes
  await memory.saveContext({ input: 'Hola' }, { output: '¡Hola! ¿Cómo estás?' });
  await memory.saveContext({ input: 'Quiero pedir sushi' }, { output: 'Claro, ¿qué te gustaría?' });

  // Recupera el historial
  const chatHistory = await memory.loadMemoryVariables({});

  console.log('Historial de Conversación:', chatHistory.chat_history);
};

testMemory();
