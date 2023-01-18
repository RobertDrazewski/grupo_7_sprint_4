const fs = require ('fs');

function logAdminMiddleware (req,res,next) {
    fs.appendFileSync('log.txt', )
    next();
}

module.exports = logAdminMiddleware;