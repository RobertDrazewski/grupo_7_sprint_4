const express = require('express');
const router= express.Router();
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

//Carrito

router.get('/productCart',mainController.productCart)

//Register

//router.get('/register',mainController.register)

//Product
router.get('/productDetail',mainController.productDetail)

//login

router.get('/login',mainController.login)


// usuario
router.get('/register',usersController.register)
router.post('/register',usersController.create)

module.exports=router