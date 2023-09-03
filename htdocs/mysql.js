const path = require('path');
const express = require('express');
const mysql = require('mysql');
const app = express();

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'actividad4',
    password: 'actividad42023**',
    database: 'act4'
});
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    res.render("act2");
});

app.post("/validar", function(req, res) {
    const { correo, nombre, password, telefono } = req.body;

    const registrar = "INSERT INTO info_usuarios (correo, nombre, contraseña, telefono) VALUES (?, ?, ?, ?)";
    
    pool.query(registrar, [correo, nombre, password, telefono], (err, result) => {
        if (err) {
            console.error("Error al insertar: ", err);
            res.status(500).send("Error al registrar usuario");
            return;
        }
        
        // Puedes responder con un mensaje o redireccionar, por ejemplo:
        res.send("Usuario registrado con éxito!");
    });
});

app.listen(3000, function() {
    console.log("Servidor escuchando en http://localhost:3000");
});
