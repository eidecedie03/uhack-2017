
var express = require('express');
var bodyParser = require('body-parser');
var wsRequest = require('./modules/WSRequest');

var app = express();

app.set('view engine', 'ejs')
app.use(express.static('views'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var host = 'http://172.16.2.122:999';
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  //connect to webservice
  res.render('index');
});

app.get('/users', function (req, res) {
  //connect to webservice
   wsRequest.get(res, host + '/user/getlist', 'users');
});

app.listen(3000);
