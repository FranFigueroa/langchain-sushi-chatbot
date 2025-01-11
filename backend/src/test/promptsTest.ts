// src/promptsTest.ts

import { getChatbotPrompt } from '../prompts/prompts';

const testPromptFunction = () => {
  const userInputs = [
    '¿Cuáles son las especialidades del menú?',
    '¿Están abiertos los fines de semana?',
    'Quiero hacer un pedido de sushi variado.'
  ];

  userInputs.forEach(input => {
    const prompt = getChatbotPrompt(input);
    console.log('----------------------------------------');
    console.log(`Input: ${input}`);
    console.log('Prompt Generado:');
    console.log(prompt);
    console.log('----------------------------------------\n');
  });
};

testPromptFunction();
