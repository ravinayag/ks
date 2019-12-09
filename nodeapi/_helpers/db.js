var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'password',
    database : 'blockchain'
});

connection.connect(function(err) {
	// console.log(err);
    if (err) throw err;
});

module.exports = connection;