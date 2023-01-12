const fs = require('fs');
const path = require('path');

// para usar el metodo PUT y metodo DELETE

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))


