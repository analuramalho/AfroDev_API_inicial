const mysql = require('mysql')

const conexao=mysql.createConnection({
    host:'192.168.0.56',
    port:3306,
    user:'root',
    password:'718293',
    database:'agenda'
})

module.exports = conexao