let nodemailer = require('nodemailer');
module.exports = {
    sendmail: function (link, type, email) {
        console.log("this is the send mail function");
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'r.rashijain95@gmail.com', //email address to send from
                pass: 'Rashijain@95' //the actual password for that account
            }
        });
        console.log("data is emailed", transporter);
        let mailOptions = {
            from: 'r.rashijain95@gmail.com',
            to: email,
            subject: 'hello',
            text: 'Welcome to the PPL',
            html: `<a href=${link}   >Verification link!!</a>`
        };

        console.log("mailOptions", mailOptions);
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
        })
        console.log("mail sent");
    }
}





