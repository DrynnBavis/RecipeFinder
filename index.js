const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.listen(8080, () => {
	console.log('Listening to 8080!');
});
