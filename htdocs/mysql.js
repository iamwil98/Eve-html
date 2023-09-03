
const express = requiere('express')
const app = express ();


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

app.set("view engine","ejs");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get("/", function (req,res){
    res.render("act2.ejs");
});
app.post("/validar", function (req,res){
  const datos =req.body;
  console.log(datos);
  let correo = datos.correo;
  let nombre = datos.nombre;
  let contraseña = datos.contraseña;
  let telefono =  datos.telefono;

  let registrar = "INSERT INTO  info_usuarios (correo, nombre, contraseña, telefono) VALEUS ('"+correo +"', '"+nombre +"', '"+contraseña +"', '"+telefono +"')";
  connection.query(act2.ejs)
});



app.listen(3000, function(){
console.log("servidor creado http://localhost:3000");
})

