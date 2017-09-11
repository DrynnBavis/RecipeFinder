var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
const express = require('express');
const path = require('path');
const app = express();
const favicon = require('express-favicon');

app.use(express.static(__dirname + '/public'));

app.use(favicon(path.join(__dirname + '/public/images/favicon.ico')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/views/index.html'));
	console.log('req has been made');
});

app.listen(server_port, server_ip_address, () => {
	console.log('Listening on' + server_ip_address +' at port ' + server_port);
});
