const fs = require('fs');
const path = require('path');

// para usar el metodo PUT y metodo DELETE

const usersFilePath = path.join(__dirname, '../data/users.json');
const users= JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

// para usar POST
//let userJSON = fs.readFileSync('../data/users.json', {encoding: 'utf-8'});


const usersController = {

register: (req,res) => {
    return res.render('register')
},
create: (req,res) => {
   

    let nuevoId = users.map(u=>u.id)
    console.log(nuevoId)
    
    let createUser = {
        id: Math.random(),
        nombre:req.body.nombre,
        mail: req.body.mail,
        pais: req.body.pais,
        num: req.body.num,
        usuario: req.body.usuario,
        contraseña: req.body.contraseña
        
    }
   
    
users.push(createUser);

fs.writeFileSync(usersFilePath,JSON.stringify(users,null,' '));

res.redirect('login');

},
login: (req,res) => {

    //let id = users.map(u=>u.id)

    let idUser = {
        usuario: req.body.usuario,
        contraseña: req.body.contraseña
    }

users.push(idUser);

fs.writeFileSync(usersFilePath,JSON.stringify(users,null,' '));

res.redirect('productDetail');
}

}



module.exports = usersController;