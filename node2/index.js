var express = require('express');
var app = express();


var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set('view engine', 'jade');

var path = require('path');

var blog = require('./blog');

app.use('/static', express.static(__dirname + '/public'));

app.get('/', blog.getArticles);
app.get('/articles', blog.getArticles);
app.get('/articles/:slug', blog.getArticleWithSlug);
app.post('/articles', blog.postArticle);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
