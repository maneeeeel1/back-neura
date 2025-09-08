const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;
require('dotenv').config();


require('./db/mongoose');

app.use(express.json());

app.use(cors({
    origin: 'https://neuraevents.es',
    credentials: true
}));

app.use('/api/solicitudes', require('./routes/solicitudes'));

app.use('/api/chat', require('./routes/chat'));

app.listen(PORT, () =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})

