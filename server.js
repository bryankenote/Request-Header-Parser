let express = require('express');
let app = express();
let port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.end('init');
});

app.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
});