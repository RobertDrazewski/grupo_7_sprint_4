const path = require('path');
const products = require("../public/js/listadoCompras")
const mainController = {


index: (req,res)=>{
    res.render('index')
},
productCart: (req,res)=>{
    return res.render('productCart', {"producto": products})
},
register: (req,res)=>{
    res.render('register')
},
productDetail: (req,res)=>{
    res.render('productDetail')
},
login: (req,res)=>{
    res.render('login')
}


}

module.exports= mainController