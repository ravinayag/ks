var http = require('http');
const hostname = '149.129.178.119';
require('rootpath')();
const express = require('express');
var logger = require('morgan');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
// const jwt = require('_helpers/jwt');



const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// use JWT auth to secure the api
// app.use(jwt());

// api routes

app.use('/users', require('./users/users.controller'));
app.use('/admin', require('./admin/admin.controller'));
app.use('/blog', require('./blog/blog.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 8080;

var server = app.listen(8080, function () {
    var host = hostname;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port)
});

// app.listen(port,hostname, function () {
//     console.log('Server listening on port ' + port);
// });

