const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3001;

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'juan'
});

// Conexión a la base de datos
db.connect(err => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos.');
    }
});

// Ruta para verificar el inicio de sesión
app.post('/practica3/login', (req, res) => {
  express.response.send('<h1>hola</h1>')
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
