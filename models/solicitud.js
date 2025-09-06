const mongoose = require('mongoose');

const solicitudSchema = new mongoose.Schema({
    nombreCliente:{
        type: String,
        required: true
    },
    tipoEntrada:{
        type: String,
        required: true
    },
    cantidad:{
        type: Number,
        required: true
    },
    fecha:{
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Solicitud', solicitudSchema);