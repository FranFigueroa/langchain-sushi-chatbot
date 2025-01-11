import { BufferMemory } from 'langchain/memory';

export const memory = new BufferMemory({
  memoryKey: 'chat_history',  // Clave para almacenar el historial en el prompt
  inputKey: 'input',          // Clave del input del usuario
  outputKey: 'output',        // Clave para almacenar la respuesta del chatbot
});
