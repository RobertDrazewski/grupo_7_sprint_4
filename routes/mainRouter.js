const express = require('express');
const router= express.Router();
const mainController= require('../controllers/mainController');

//home

router.get('/',mainController.index)

//Carrito

router.get('/productCart',mainController.productCart)

//Register

router.get('/register',mainController.register)

//Product
router.get('/productDetail',mainController.productDetail)

//login

router.get('/login',mainController.login)



module.exports=router

