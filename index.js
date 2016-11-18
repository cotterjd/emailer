const
	mailer = require('./mailer.js'),
	config = require('./config'),
	log    = console.log,
  logX   = function (e, r) { console.log (e, r); },
	
	attachment = { filename: 'thing.txt', path: './thing.txt'}

	nil = null;

mailer.send (config.email, "subject", "body", attachment, logX);
