const fs = require('fs')
// const products = require("../public/js/productCartList");
const path = require('path')
// const rutaImg = path.join(__dirname)//no se usa no recuerdo porque la puse
                                        /*IMPORTANTE Hay 3 campos donde se llama "manualmente" al JSON */
const productsFilePath = path.join(__dirname, '../data/productCart.json'); /*ESTE*/
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
let archivoJSON = fs.readFileSync(path.join(__dirname,'../data/productCart.json'), {encoding: 'utf-8'});
let producto = JSON.parse(archivoJSON);




const controllers = {
    productCart: (req, res) =>{
        return res.render('./carrito/productCart', {"producto": producto})
    },
    // list: (req, res) => {
    //     res.render('./carrito/productCart', {'producto': producto})//esta no la uso
    // },    
    create: (req, res) =>{
        if(req.file){ /*<--- este if es para que recargue la pagina si no carga una imagen*/
            let newProductCart = {
                id: req.body.id,
                img: req.file.filename,
                destino: req.body.destino,
                dias: req.body.dias,
                precio: req.body.precio,
                ofertas: req.body.ofertas,
                ida: req.body.ida,
                vuelta: req.body.vuelta,
                hospedaje: req.body.hospedaje,
                vehiculo: req.body.vehiculo,
                excursion1: req.body.excursion1,
                excursion2: req.body.excursion2
            }
            res.send(newProductCart)        
            //GUARDAR
            //Primero leer el archivo existente en este caso en "archivoUsuario"
            
            //Segundo descomprimir archivo json dentro de un if para saber que el JSON no nos haya llegado vacio 
            let producto; //IMPORTANTE declararla por fuera (no sabía que se podía declarar una variable así)
            if(archivoJSON == ""){
                producto = [];
            } else {
                producto = JSON.parse(archivoJSON);
            }
            //Tercero pushear el usuario nuevo y pasarlo a JSON.stingify
            producto.push(newProductCart);
            productoJSON = JSON.stringify(producto);
            fs.writeFileSync('../data/productCart.json', productoJSON);/* y ESTE*/    
        } else {
            res.render('./carrito/agregarProducto')
        }       
    }, 
    edit: (req, res) => {
        let idProduct = req.params.id;
        const modifyProduct = producto.filter(x => x.id == idProduct)
        console.log(modifyProduct) // para usar a futuro cuando entienda PUT       
        res.render('./carrito/editarProducto', {"producto": modifyProduct})
        
    },
    editSave: (req, res) => {
        let id = req.body.id;
        let product = products
        let editProduct = {
            id: req.body.id,
            img: req.body.img,/*PREGUNTAR porque aca no me toma el req.file.filename */
            destino: req.body.destino,
            dias: req.body.dias,
            precio: req.body.precio,
            ofertas: req.body.ofertas,
            ida: req.body.ida,
            vuelta: req.body.vuelta,
            hospedaje: req.body.hospedaje,
            vehiculo: req.body.vehiculo,
            excursion1: req.body.excursion1,
            excursion2: req.body.excursion2
        }
        let newProduct = product.map(product => {
            if(product.id == id) {
                product = {...editProduct}
                return product
            }
            return product
        })
        fs.writeFileSync(productsFilePath, JSON.stringify(newProduct))
        res.redirect("/productCart")
    },
    delete: (req, res) => {
        let idProduct = req.params.id;
        const modifyProduct = producto.filter(x => x.id == idProduct)
        console.log(modifyProduct) // para usar a futuro cuando entienda PUT 
        res.render('./carrito/deleteProduct', {"producto": modifyProduct}) 
    },
    deleteSave: (req, res) => {
        let id = req.body.id;
        let product = products
        res.redirect("/productCart")
        let productToDelete = product.filter(product => product.id != id)
        fs.writeFileSync(productsFilePath, JSON.stringify(productToDelete))        
        res.redirect("/productCart")
    },
    prueba: (req, res) => {
        return res.render('./carrito/agregarProducto');
    }
}

module.exports = controllers;


