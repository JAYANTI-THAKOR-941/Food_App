import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service:'gmail',
    port:587,
    auth:{
        user:'jyantithakor941@gmail.com',
        pass:'uxieoshjqyouzyxa'
    }
});

