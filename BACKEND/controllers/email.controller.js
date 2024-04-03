const nodemailer = require('nodemailer');
//const port = 3001;


const SendMail = async (req, res)=>{
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
        to: req.body.email, // list of receivers
        subject: 'Hello from Project ResQ', // Subject line
        html: "<b>Hello world</b>", // html body
        // attachments: [ // use URL as an attachment
        //     {
        //       filename: 'receipt_test.pdf',
        //       path: 'receipt_test.pdf',
        //       cid: 'uniqreceipt_test.pdf' 
        //     }
        // ]
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