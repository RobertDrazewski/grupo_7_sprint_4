const express = require('express');
const router= express.Router();
const multer = require('multer');
const path = require ('path'); 

// const varDeValidacion = require('./validations');
const mainController= require('../controllers/mainController');
const usersController = require('../controllers/usersController');
const productControllers = require('../controllers/productControllers')
const carritoControllers = require('../controllers/mainControllers')
/*ESTO LO AGREGO FACU, SE PUEDE BORRAR*/
const storage = multer.diskStorage({
    destination: (req, file, callback)=> {
        let folder = path.join(__dirname, '../public/img')
        callback(null, folder)
    }, 
    filename:(req, file, callback) =>{
        let img = 'img-' + Date.now() + path.extname(file.originalname);//nose porque no me guarda el nombre bien
        callback(null, img)
    }
});

let fileUpload = multer({ storage: storage});




//**********MIDDLEWARES **************/

//let logUsuarioMiddleware = require ('../middlewares/logUsuarioMiddleware');
//let logAdminMiddleware = require ('../middlewares/logAdminMiddleware');



// para usar PUT y DELETE
const methodOverride = require('method-override');
router.use(methodOverride('_method'));

// para usar POST

router.use(express.urlencoded({ extended: false}));
router.use(express.json());



/**********RUTAS ***********/
//home

router.get('/',mainController.index)

//(1) Carrito

router.get('/productCarts',mainController.productCart)

//(2) Agregar viaje (formulario de creación de producto)

router.get("/crearProducto",fileUpload.single('img') , productControllers.getCreate);
router.post("/crearProducto", fileUpload.single('img') ,productControllers.create)/*configurado con multer */

//(3) ProductDetail --> (products/:id)
router.get('/productDetail',mainController.productDetail)

//(4) Products (POST) (Acción de creación (a donde se envía el formulario )

router.get("/vistaProducto", fileUpload.single('img'), productControllers.product);
//router.post("/prueba", fileUpload.single('img') ,carritoControllers.create)/*configurado con multer */


//(5) Products/:id /edit (GET) Formulario de edición de productos

router.get("/:id/edit", carritoControllers.edit);
router.get("/:id/editProduct", productControllers.edit);
router.get("/productCart", fileUpload.single('img'), carritoControllers.productCart);



//(6) /products/ :id (PUT) Acción de edición (a donde se envía el formulario):

router.put("/:id/edit", carritoControllers.editSave);
router.put("/:id/editProduct", productControllers.editSave);

//(7) /products/ :id (DELETE) Acción de borrado

router.get("/:id/delete", fileUpload.single('img'), carritoControllers.delete)
router.delete("/:id/delete", fileUpload.single('img'), carritoControllers.deleteSave)

router.get("/:id/deleteProduct", fileUpload.single('img'), productControllers.delete)
router.delete("/:id/deleteProduct", fileUpload.single('img'), productControllers.deleteSave)



//login

router.get('/login',/*logUsuarioMiddleware ,*/mainController.login)


// Register
router.get('/register',usersController.register)
router.post('/register',/* logUsuarioMiddleware (o tambien validaciones) varDeValidacion ,*/usersController.create)



module.exports=router