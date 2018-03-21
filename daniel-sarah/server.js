'use strict';

// DONE: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('./public'));
app.get('/new', (req, res) => {
  res.sendFile('public/new.html', {root: '.'});
});
app.get('/home', (req, res) => {
  res.sendFile('public/index.html', {root: '.'});
});
const bodyParser = require('body-parser').urlencoded({extended: true});

app.post('/articles', bodyParser, function(request, response) {
  // DONE: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.use((req, res, next) => {
  console.log(res.status);
  res.status(404).sendFile('404.html', { root: './public'});
});

app.listen(PORT, () => console.log('WAT'));
