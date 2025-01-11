

/**
 * Devuelve el prompt completo para el chatbot combinando el mensaje del usuario
 * con instrucciones base que definen el rol del bot.
 * 
 * @param userInput - Mensaje del usuario.
 * @returns El prompt completo.
 */
export const getChatbotPrompt = (userInput: string): string => {
    const basePrompt = `
      Eres un experto en sushi que ayuda a la gente a pedir sushi, 
      mostrar el menú y responder preguntas frecuentes sobre el restaurante. 
      Proporciona respuestas claras, concisas y amigables.
    `;
    return `${basePrompt.trim()}\n\nUsuario: ${userInput}\nAsistente:`;
  };
  