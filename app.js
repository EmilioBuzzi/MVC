//Requerimos el modulo de express y almacenamos la función que nos devuelve en la constante express
const express = require('express');

//Ejecutamos la función y almacenamos el objeto que devuelve en la constante app. Ahora, tenemos accesos a tdoas las propiedades y métodos que nos da express.
const app = express();

//Invoco al modulo nativo path - permite generar rutas de una manera mas comoda en express
const path = require('path');

//usando recursos estáticos
app.use(express.static(path.join(__dirname,'public')));

const mainRutas = require ("./src/routes/main");

app.use("/", mainRutas);

//Al objeto app le pedidos el metodo listen, que se encargará de levantar el servidor. Parámetros: PUERTO | FUNCIÓN (Callback)
app.listen(3002, () => console.log ("Servidor corriendo"));

