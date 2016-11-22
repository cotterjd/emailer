# gmailer
simple node emailer with gmail

`git clone git@github.com:cotterjd/gmailer.git` clone repo <br>
`npm install` install necessary packages<br>
`vim config` (or nano config or any other text editor) see sample config <br>
`vim index.js` see sample index <br>
`node index.js` run program to send email

### sample config
```
module.exports = {
  user: 'joe',
  pass: 'joespassword'
}
```

### sample index.js

```javascript
const
  mailer = require('./gmailer/mailer.js'),
  config = require('./config'),
  logX = function(e, r) {console.log(e, r); },
  
  options = {
    to: 'bob@gmail.com',
    from: 'Joe Smith <joe@gmail.com>',
    cc: 'sal@tds.net, sam@hotmail.com',
    subject: 'random question',
    body: 'wanna hang out this saturday',
    attachments: [{filename: 'letsdothis.pdf', path: './flyer.pdf'}, {filename: 'randomPicture.png', path: './randomPicture.png'}]
  };
  
mailer.send(options, logX);
```
You may have to change your security settings on your from email account. 
