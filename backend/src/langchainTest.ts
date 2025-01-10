import { ChatOpenAI } from "@langchain/openai";
import dotenv from 'dotenv';
dotenv.config();

const testLangChain = async () => {

  console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY); 

  const model = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const response = await model.invoke('Hola, ¿cómo estás?');
  console.log(response);
};

testLangChain();
