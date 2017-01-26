const 
	config = require('../config'),
	nodemailer = require('nodemailer'),
	user = config.user,
	pass = config.pass,
	transporter = 'smtps://' + user + '@gmail.com:' + pass + '@smtp.gmail.com',
  	transport = nodemailer.createTransport (transporter),

	nil = null;

exports.send = function send(options, callback){
    var mailOptions = {
        from: options.from,  
        to: options.to,
	cc: options.cc,
        subject: options.subject,
        html: options.body,
	attachments: options.attachments
    };

    transport.sendMail(mailOptions, function(error, info){
        if(error)console.warn(error);

        return callback(error, info);
    });
};
