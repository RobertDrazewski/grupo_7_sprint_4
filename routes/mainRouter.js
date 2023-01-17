const express = require('express');
const router= express.Router();

// const multer = require('multer');

const mainController= require('../controllers/mainController');
const usersController = require('../controllers/usersController');
// para usar PUT y DELETE
const methodOverride = require('method-override');
router.use(methodOverride('_method'));

// para usar POST

router.use(express.urlencoded({ extended: false}));
router.use(express.json());

//home

router.get('/',mainController.index)

//(1) Carrito

router.get('/productCart',mainController.productCart)

//(2) Agregar viaje (formulario de creación de producto)

        //router.get('/', mainController.)


//(3) ProductDetail --> (products/:id)
router.get('/productDetail',mainController.productDetail)

//(4) Products (POST) (Acción de creación (a donde se envía el formulario )

    //router.post('/', )

//(5) Products/:id /edit (GET) Formulario de edición de productos

//(6) /products/ :id (PUT) Acción de edición (a donde se envía el formulario):


//(7) /products/ :id (DELETE) Acción de borrado


//Register
    //router.get('/register',mainController.register)


//login

router.get('/login',mainController.login)


// usuario
router.get('/register',usersController.register)
router.post('/register',usersController.create)

module.exports=router