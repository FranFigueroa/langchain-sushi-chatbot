// src/promptsTest.ts
import { getChatbotPrompt } from '../prompts/prompts';

const testPrompt = () => {
  const userInput = '¿Cuáles son las especialidades del menú?';
  const prompt = getChatbotPrompt(userInput);
  console.log('Prompt generado:\n', prompt);
};

testPrompt();
