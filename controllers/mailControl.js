
const nodemailer = require("nodemailer");


async function sendmail(name, email, message) {


    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "ayushtherock2001@gmail.com",
            pass: process.env.PASS,
        },
    });


    let info = await transporter.sendMail({
        from: "ayushtherock2001@gmail.com",
        to: "ayushbathre3101@gmail.com",
        subject: "Portfolio message",
        html: `<h3>From ${name}</h3> 
         <p>${message}</p>`
    })

    console.log("Message sent: %s", info.messageId);



    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}


module.exports = sendmail


