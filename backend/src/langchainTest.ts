import { ChatOpenAI } from "@langchain/openai";

const testLangChain = async () => {
  const model = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const response = await model.invoke('Hola, ¿cómo estás?');
  console.log(response);
};

testLangChain();
