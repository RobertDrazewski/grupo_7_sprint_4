const {check} = require ('express-validator');

let varDeValidacion = [
    check('nombre del campo a validar')
    .notEmpty('Este campo debe contener un valor').bail(/* usado para q no de error a todos si este está vacio*/),
    check('Xej.email')
    .isEmail('ingrese un email válido'),
    check('password')
    .notEmpty('Debes elegir una pswd').withMessage().bail().isLength({ min:8 }).withMessage('La pswd debe contener al menos 8 caracteres')
];

module.exports = varDeValidacion;
//lo q validemos... x ej loggin´s