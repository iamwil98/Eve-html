const express = require('express')
const app = express();
const mysql = require('mysql')
const conexion = mysql.createConnection ({

 host:'localhost',
 user:'actividad4',
 password:'actividad42023**',
 database:'act4'
 })

 conexion.connect ((err) =>{

     if(err) throw err

     console.log('Conexión Exitosa')
 })


app.set("view engine", "ejs");
app.use('/static/css', express.static(__dirname + '/css'));
app.use('/static/imagenes', express.static(__dirname + '/imagenes'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get("/", function(req,res) {
    res.render("act2");
});
app.post("/validar", function(req,res){
    const datos = req.body;
     console.log(datos);
    let correo = datos.correo;
    let nombre = datos.nombre;
    let password = datos.password;
    let telefono = datos.telefono;

    let registrar = "INSERT INTO info_usuarios (correo, nombre, contraseña, telefono) VALUES ('"+correo +"','"+nombre +"','"+password +"','"+telefono +"')";
    conexion.query(registrar, function(err, results) {
        if (err) {
            console.error(err);
            res.status(500).send('Error al guardar en la base de datos.');
        } else {
            res.send('<script>alert("Datos guardados con éxito."); window.location.href="/";</script>');
        }
    });
});






app.listen(3000, function() {
    console.log("servidor creado http://localhost:3000");
});
