const express = require('express');
const router = express.Router();
const { obtenerRespuestaChat } = require('../services/openaiServices');

router.post('/chat', async (req, res) => {
    try {
        const { mensajes } = req.body;
        if (!mensajes || !Array.isArray(mensajes)) {
            return res.status(400).json({ error: 'Formato de mensajes inválido.' });
        }

        const respuestaIA = await obtenerRespuestaChat(mensajes);
        res.status(200).json({ respuesta: respuestaIA });

    } catch (error) {
        res.status(500).json({ error: 'Error al comunicarse con la IA', detalles: error.message });
    }
});

module.exports = router;