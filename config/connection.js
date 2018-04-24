var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host:'e764qqay0xlsc4cz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'fw6piev4dia64sal',
        password: '',
        database: 'do1ybg94ktpc70jh',
        port: 3306
    });
};

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    };

    console.log('connected as id ' + connection.threadId);

});

module.exports = connection;