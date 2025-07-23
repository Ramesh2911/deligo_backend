import nodemailer from 'nodemailer';
import crypto from 'crypto';

async function mailSender(receiver) {
    let OTP = crypto.randomInt(100000, 1000000);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.MAIL_USER,
        to: receiver,
        subject: 'OTP for Shopper registration',
        text: `Your OTP is ${OTP}`,
        html: `<p>Your One Time Password is: <strong>${OTP}</strong></p>`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email: ', error);
    }
    return OTP;
}

export default mailSender;