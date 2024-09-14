const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/this-random-endpoint/', function (req, res) {
	  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000, () => {
	console.log('app running on port 9k');
});
