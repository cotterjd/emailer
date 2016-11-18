const
	mailer = require('./mailer.js'),
	log    = console.log,
        logX   = function (e, r) { console.log (e, r); },
	
	nil = null;

mailer.send ('jrdn.cttr@gmail.com', "test", "did you get this", logX);
