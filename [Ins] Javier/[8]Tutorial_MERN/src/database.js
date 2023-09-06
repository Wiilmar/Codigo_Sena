const mongoose = require('mongoose');
const URI='mongodb://localhost/mern-task'
mongoose.connect(URI) //Me permite conectarme a una base de datos local
    .then(db => console.log("DB esta conectada")) //Me imprime un consola una confirmacion acerca de mi conexion de la base de datos.
    .catch(err => console.error(err)); //Me permite capturar el error que se presente por consola.
module.export = mongoose

