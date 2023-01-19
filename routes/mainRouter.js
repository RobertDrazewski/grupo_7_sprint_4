const express = require('express');
const router= express.Router();
const multer = require('multer');
const path = require ('path'); 
// const multer = require('multer');
// const path = require ('path'); 
// const varDeValidacion = require('./validations');
const mainController= require('../controllers/mainController');
const usersController = require('../controllers/usersController');
const productControllers = require('../controllers/productControllers')
const carritoControllers = require('../controllers/mainControllers')
/*ESTO LO AGREGO FACU, SE PUEDE BORRAR*/
const storage = multer.diskStorage({
    destination: (req, file, callback)=> {
        let folder = path.join(__dirname, '../public/img')//aca indico donde se guarda el archivo
        callback(null, folder)
    }, 
    filename:(req, file, callback) =>{
        let img = 'img-' + Date.now() + path.extname(file.originalname);//nose porque no me guarda el nombre bien
        callback(null, img)
    }
});

let fileUpload = multer({ storage: storage});
/*HASTA ACÁ*/


/* const multerDiskstorage = multer.diskStorage({
      destination:(req,file,cb)=> {   
        let folder = path.join(__dirname,'../public/img);
        cb(null,folder)
    }, 
    filename: (req,file,cb)=> {
        let imageName = date.now() + path.extname(file.originalname);
        cb(null,imageName);
         //se puede usar en vez de "date.now" al parametro que representa al req
    }
    })

    const FileUpload = multer({storage: multerDiskstorage });

   
*/


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

        //router.get('/registro',controlador.mostrarFormulario )


//(3) ProductDetail --> (products/:id)
router.get('/productDetail',mainController.productDetail)

//(4) Products (POST) (Acción de creación (a donde se envía el formulario )

    //router.post('/registro', logUsuarioMiddleware ,fileUpload.single('imagenUsuario')controlador.procesarFormulario );

//(5) Products/:id /edit (GET) Formulario de edición de productos

//(6) /products/ :id (PUT) Acción de edición (a donde se envía el formulario):


//(7) /products/ :id (DELETE) Acción de borrado



//login

router.get('/login',/*logUsuarioMiddleware ,*/mainController.login)


// Register
router.get('/register',usersController.register)
router.post('/register',/* logUsuarioMiddleware (o tambien validaciones) varDeValidacion ,*/usersController.create)

/*PRODUCTO Y CARRITO*/
//CARRITO
router.get("/productCart", fileUpload.single('img'), carritoControllers.productCart);
router.get("/prueba",fileUpload.single('img') , carritoControllers.prueba);
router.post("/prueba", fileUpload.single('img') ,carritoControllers.create)/*configurado con multer */
router.get("/:id/edit", carritoControllers.edit)
router.put("/:id/edit", carritoControllers.editSave);
router.get("/:id/delete", fileUpload.single('img'), carritoControllers.delete)
router.delete("/:id/delete", fileUpload.single('img'), carritoControllers.deleteSave)



//PRODUCTO
router.get("/vistaProducto", fileUpload.single('img'), productControllers.product);
router.get("/crearProducto",fileUpload.single('img') , productControllers.prueba);
router.post("/crearProducto", fileUpload.single('img') ,productControllers.create)/*configurado con multer */
router.get("/:id/editProduct", productControllers.edit)
router.put("/:id/editProduct", productControllers.editSave);
/*METODO DELETE*/
router.get("/:id/deleteProduct", fileUpload.single('img'), productControllers.delete)
router.delete("/:id/deleteProduct", fileUpload.single('img'), productControllers.deleteSave)



module.exports=router