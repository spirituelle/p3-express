const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    let autHeader = req.get('Authorization');
    
    if(!autHeader){
      res.status(401).json({error: true, message:'aucun token envoyé'});
    }
    let decodedToken;
    const token = autHeader.split(' ')[1];
    try{
      decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = decodedToken;
      next();
    }
    catch (err){
      res.status(401).json({error: true, message:'token invalid or expired'});
    }
    
};