const { createPool } = require("mysql");
const mysql = require('mysql');

const pool = createPool({
    canRetry: true,
    database: 'domloto',
    host: 'localhost',
    user: 'root',
    password: '1423',
    port: 3306,
    connectionLimit: 8,
    waitForConnections: true,
    queueLimit: 0,
});

exports.connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1423',
    database : 'domloto',
    port: 3306,
    waitForConnections: true,
    queueLimit: 0
  });

// Attempt to catch disconnects 
pool.on('connection', function(connection) {
    console.log('Connection established');

    // Below never get called
    connection.on('error', function(err) {
        console.error(new Date(), 'MySQL error', err.code);
    });
    connection.on('close', function(err) {
        console.error(new Date(), 'MySQL close', err);
    });
});