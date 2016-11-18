const 
	nodemailer = require('nodemailer'),
	user = 'fieldsavvytest',
	pass = 'Retry123',
	transporter = 'smtps://' + user + '@gmail.com:' + pass + '@smtp.gmail.com',
        transport = nodemailer.createTransport (transporter),
	from = 'Jordan Cotter <jrdn.cttr@gmail.com>',

	nil = null;

exports.send = function send(email, subject, body, callback){
    var mailOptions = {
        from: from,  
        to: email,
        subject: subject,
        html: body
    };

    transport.sendMail(mailOptions, function(error, info){
        if(error)console.warn(error);

        return callback(error, info);
    });
};

