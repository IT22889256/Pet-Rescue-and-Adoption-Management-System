const nodemailer = require('nodemailer');
const Salary = require("../modules/salary.model.js");
const { getSalaries, getSalary, createSalary, updateSalary, deleteSalary } = require('../controllers/salary.controller.js');

//const port = 3001;


const SendMail = async (req, res)=>{


const { email } = req.body;


    let config = {
        service: 'gmail', // your email domain
        host: "my.smtp.host",
        port: 465,
        secure: true,
        auth: {
            user: process.env.NODEJS_GMAIL_APP_USER,   // your email address
            pass: process.env.NODEJS_GMAIL_APP_PASSWORD, // your password
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false,
          },
    }
    let transporter = nodemailer.createTransport(config);

    let message = {
        from: 'projectforitp@gmail.com', // sender address
        to: email, // list of receivers
        subject: 'Leave Request from ResQ', // Subject line
        html: ` <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f5f5f5;
                    padding: 20px;
                }
                h1 {
                    color: #007bff;
                }
                p {
                    font-size: 16px;
                    line-height: 1.6;
                }
            </style>
        </head>
        <body>
            <h1>Hello!</h1>
            <p>Your leave request has been <strong>accepted</strong>.</p>
            <p>Thank you.</p>
        </body>
        </html> `
    };

    transporter.sendMail(message).then((info) => {
        return res.status(201).json(
            {
                msg: "Email sent",
                info: info.messageId,
                preview: nodemailer.getTestMessageUrl(info)
            }
        )
    }).catch((err) => {
        return res.status(500).json({ msg: err });
    }
    );
};

module.exports = {  SendMail };