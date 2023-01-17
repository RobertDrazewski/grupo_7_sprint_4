const express = require('express');
const router= express.Router();
// const multer = require('multer');
// const path = require ('path'); 
const mainController= require('../controllers/mainController');
const usersController = require('../controllers/usersController');


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

        //router.get('/registro',controlador.mostrarFormulario )


//(3) ProductDetail --> (products/:id)
router.get('/productDetail',mainController.productDetail)

//(4) Products (POST) (Acción de creación (a donde se envía el formulario )

    //router.post('/registro', fileUpload.single('imagenUsuario')controlador.procesarFormulario );

//(5) Products/:id /edit (GET) Formulario de edición de productos

//(6) /products/ :id (PUT) Acción de edición (a donde se envía el formulario):


//(7) /products/ :id (DELETE) Acción de borrado



//login

router.get('/login',mainController.login)


// Register
router.get('/register',usersController.register)
router.post('/register',usersController.create)

module.exports=router