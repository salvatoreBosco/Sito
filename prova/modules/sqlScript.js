'use strct'

module.exports = executeQuery

const mysql = require('mysql')
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'db_salvopittore'
});

function executeQuery(sql, callback){
    con.query(sql, callback)
}