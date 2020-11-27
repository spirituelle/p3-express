const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    let autHeader = req.get('Authorization')
    if(!autHeader){
      let error = new Error('Invalid token')
      error.statusCode= 401
        throw error;
    }
    let decodedToken;
    const token = autHeader.split(' ')[1];

    try{
      decodedToken = jwt.verify(token, 'premiercledesecuritepourbackend');
    
    }
    catch{
      const error = new Error('Invalid request !')
      error.status = 401
      throw MediaStreamError
    }
    if(!decodedToken){
      const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }
  
    
    req.userId = decodedToken.id;
    next();
};