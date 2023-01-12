const express = require('express');
const path = require('path')
const app = express();


const mainRouter =require('./routes/mainRouter');


app.use(express.static('public'));

app.use(mainRouter);

// configuramos ejs como template engine

app.set('view engine','ejs');

// configuramos la carpeta de vistas

app.set('views','views');

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Servidor corriendo en el puerto ${port}`))