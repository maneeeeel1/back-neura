const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;
require('dotenv').config();


require('./db/mongoose');

app.use(express.json());

const allowedOrigins = ['https://neuraevents.es', 'https://www.neuraevents.es'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

app.use('/api/solicitudes', require('./routes/solicitudes'));

app.use('/api/chat', require('./routes/chat'));

app.listen(PORT, () =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})

