const express = require('express');
const router = express.Router();
const Solicitud = require ('../models/solicitud.js');
const { enviarEmail } = require ('../services/emailServices.js');

router.post('/vip', async (req,res) =>{
    try{
        const { nombre, tipo, cantidad } = req.body;

        const nuevaSolicitud = new Solicitud({
            nombreCliente: nombre,
            tipoEntrada: tipo,
            cantidad: cantidad
        });
        console.log("📩 Solicitud recibida:", req.body);

        await nuevaSolicitud.save();

        const cuerpoEmail = `
        <h3>Nueva solicitud VIP!</h3>
        <p><strong>Cliente:</strong>${nombre}</p>
        <p><strong>Tipo de entrada:</strong>${tipo}</p>
        <p><strong>Cantidad:</strong>${cantidad}</p>
        `;

        const correoEnviado = await enviarEmail('Nueva Solicitud VIP', cuerpoEmail);
        console.log("📨 Estado envío:", correoEnviado);
        if (correoEnviado){
        res.status(200).json({mensaje: 'Solicitud recibida y procesada correctamente.'});

        }else{
            res.status(500).json({error:'Error al enviar la notificación por correo'})
        }

    }catch (error){
        res.status(500).json({ error: 'Error al procesar la solicitud', detalles: error.message });
    }

});

module.exports = router;