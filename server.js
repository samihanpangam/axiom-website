const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.get('/blog1', (req, res) => {
  res.sendFile(__dirname + '/blogs/blog1.html');
});

app.get('/blog2', (req, res) => {
  res.sendFile(__dirname + '/blogs/blog2.html');
});

app.get('/blog3', (req, res) => {
  res.sendFile(__dirname + '/blogs/blog3.html');
});

app.get('/blog4', (req, res) => {
  res.sendFile(__dirname + '/blogs/blog4.html');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
