const fs = require('fs');
const path = require('path');

// para usar el metodo PUT y metodo DELETE

const usersFilePath = path.join(__dirname, '../data/users.json');
//const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

// para usar POST
let userJSON = fs.readFileSync('../data/users.json', {encoding: 'utf-8'});
let user = JSON.parse(userJSON);

const usersController = {

register: (req,res) => {
    return res.render('register')
},
create: (req,res) => {
    
    let createUser = {
        nombre: req.body.nombre,
        mail: req.body.mail,
        pais: req.body.pais,
        num: req.body.num,
        usuario: req.body.usuario,
        Contraseña: req.body.Contraseña

        
    }
    let newUser; 
    if (userJSON == '') {
        newUser = []
    } else {
        newUser = JSON.parse(userJSON)
    }

}

}

module.exports = usersController;