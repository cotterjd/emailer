const
	mailer = require('./mailer.js'),
	config = require('./config'),
	log    = console.log,
  logX   = function (e, r) { console.log (e, r); },
	
	nil = null;

mailer.send (config.email, "subject", "body", logX);
