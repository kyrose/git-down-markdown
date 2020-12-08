// server.js
// @link https://scotch.io/tutorials/building-a-real-time-markdown-viewer

const express = require('express');
const app = express();

// set rendering engine as ejs
// @link https://ejs.co/
app.set('view engine', 'ejs');

// set public directory for storing assets to be static
app.use(express.static(__dirname + '/pub'));

// routes for app
app.get('/', function(req, res) {
    res.render('pad');
});

// listen on port 8000 (for localhost)
const port = process.env.PORT || 8000;
app.listen(port);
