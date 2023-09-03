const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'actividad4',
    password: 'actividad42023**',
    database: 'act4'
});

module.exports = connection;
