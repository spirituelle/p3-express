const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const token = req.headers.authorization.split(' ')[1];
    if(token.length == 0){
        throw 'Invalid token';
    }
    try{
      const decodedToken = jwt.verify(token, 'premiercledesecuritepourbackend');
      req.userId = decodedToken.id;
      next();

    }
    catch{
        res.status(401).json({
            error: new Error('Invalid request!')
          });
    }

 
 
};