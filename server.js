let express = require('express');
let app = express();
let port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  let parsed = {
    ipaddress: getIP(req.connection.remoteAddress)
  , language: getLanguage(req.headers['accept-language'])
  , software: getSoftware(req.headers['user-agent'])
  }
  res.end(JSON.stringify(parsed));
});

app.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
});

function getIP(remoteAddress) {
  let isV6 = remoteAddress.indexOf(':') >= 0;
  return isV6 ? remoteAddress.split(':').reverse()[0] : remoteAddress;
}

function getLanguage(acceptLanguage) {
  return acceptLanguage.split(',')[0].trim();
}

function getSoftware(userAgent) {
  return userAgent.split(/[\(\)]/)[1].trim();
}