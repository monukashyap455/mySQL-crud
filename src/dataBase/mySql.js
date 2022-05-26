const mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

connection.connect((err) => {
    if (err) {
        return console.error('error: ' + err);
    }

    console.log('Connected to the MySQL server.');
});



module.exports = connection;