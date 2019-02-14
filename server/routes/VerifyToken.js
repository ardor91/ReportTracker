var jwt = require('jsonwebtoken');
var config = require('./config/keys');
const sessionstorage = require('sessionstorage');
const bcrypt = require('bcryptjs');


function verifyToken(req, res, next) {

  // check header or url parameters or post parameters for token
  let token = sessionstorage.getItem('x-access-token');
  if (!token) {
      return res.status(403).send({ auth: false, message: 'No token provided.' });
  }

  // verifies secret and checks exp
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err){
      res.cookie("auth", '');
      return res.status(500).send({
        auth: false,
        message: 'Failed to authenticate token.'
      });
    }


    res.cookie("auth" , bcrypt.hashSync('true', 8));

    // if everything is good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });

}


module.exports = {
  'verifyToken': verifyToken
};
