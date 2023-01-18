const fs = require ('fs');

function logUsuarioMiddleware (req,res,next) {
    fs.appendFileSync('log.txt', )
    next();
}

module.exports = logUsuarioMiddleware;