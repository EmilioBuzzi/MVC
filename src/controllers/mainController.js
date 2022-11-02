//Invoco al modulo nativo path - permite generar rutas de una manera mas comoda en express
const path = require('path');

//---
const mainController={
    index:(req,res) => {
        res.sendFile (path.join(__dirname, '../views/home.html'));
    },
}

module.exports = mainController;