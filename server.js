var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var pageone={
    title:'Page One - Vineet Chauhan',
    heading:'Page One',
    date:'Sep 5, 2016',
    content:`<p>
                Content of first web Page. Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.
            </p>
            <p>
                Content of first web Page. Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.
            </p>
            <p>
                Content of first web Page. Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.
            </p>
            <p>
                Content of first web Page. Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.Content of first web Page.
            </p>`
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/page-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page-one.html'));
});


app.get('/page-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page-two.html'));
});

app.get('/page-three', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'page-three.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
