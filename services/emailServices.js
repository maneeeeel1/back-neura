const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

const enviarEmail = async (asunto, cuerpo) => {
    try{
        const mailOption = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_DESTINATION,
            subject: asunto,
            html: cuerpo
    };

    await transporter.sendMail(mailOption);
    console.log('Correo enviado correctamente.');
    return true;
    }catch (error){
        console.error('Error al enviar correo:', error);
        return false;
    }
};

module.exports = {
    enviarEmail
};