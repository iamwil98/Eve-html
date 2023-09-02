const mysql = require('mysql')

const connection = mysql.createConnection ({

host:'localhost',
user:'actividad4',
password:'actividad42023**',
database:'act4'
})

connection.connect ((err) =>{

    if(err) throw err

    console.log('Conexión Exitosa')
})