import chatbot from '../chatbot';

const testChatbot = async () => {
  try {
    const prompt = 'Hola, ¿cómo estás?';
    const response = await chatbot.invoke(prompt);
    console.log('Respuesta del chatbot:', response);
  } catch (error: any) {
    console.error('Error al llamar al chatbot:', error.message);
  }
};

testChatbot();
