const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY,
});

async function obtenerRespuestaChat(mensajes) {
    try{
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: mensajes,

        });

        return completion.choices[0].message.content;

    }catch (error){
        console.error('Error al llamar a la API de OpenAI:', error.response ? error.response.data : error.message);
        return 'Lo siento hubo un error al procesar tu solicitud.';
    }
} 

module.exports = { obtenerRespuestaChat };