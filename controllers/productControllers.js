const fs = require('fs');
const path = require('path');

// para usar el metodo PUT y metodo DELETE

const productsFilePath = path.join(__dirname, '../data/productCart.json'); /*ESTE*/
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
let archivoJSON = fs.readFileSync(path.join(__dirname,'../data/productCart.json'), {encoding: 'utf-8'});
let producto = JSON.parse(archivoJSON);

const productControllers = {
    product: (req, res) =>{
        return res.render('./producto/detalleProducto', {"producto": producto})
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
            fs.writeFileSync('../productCart.json', productoJSON);  
        } else {
            res.render('./producto/agregarProducto')
        }       
    }, 
    edit: (req, res) => {
        let idProduct = req.params.id;
        const modifyProduct = producto.filter(x => x.id == idProduct)
        console.log(modifyProduct)
        res.render('./producto/editarProducto', {"producto": modifyProduct})
        
    },
    editSave: (req, res) => {
        let id = req.body.id;
        let product = products
        let editProduct = {
            id: req.body.id,
            img: req.body.img,
        
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
        res.redirect("/detalleProducto")
    },
    delete: (req, res) => {
        let idProduct = req.params.id;
        const modifyProduct = producto.filter(x => x.id == idProduct)
        console.log(modifyProduct) 
        res.render('./producto/deleteProduct', {"producto": modifyProduct}) 
    },
    deleteSave: (req, res) => {
        let id = req.body.id;
        let product = products
        res.redirect("/detalleProducto")
        let productToDelete = product.filter(product => product.id != id)
        fs.writeFileSync(productsFilePath, JSON.stringify(productToDelete))        
        res.redirect("/detalleProducto")
    },
    getCreate: (req, res) => {
        return res.render('./producto/agregarProducto');
    }
}

module.exports = productControllers;
