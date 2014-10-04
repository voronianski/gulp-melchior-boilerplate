var express = require('express');

var app = express();

app.use(express.static('./public'));

app.listen(9090);
console.info('melchiorjs examples server started on localhost:9090');
