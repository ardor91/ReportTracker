var jwt = require('jsonwebtoken');
var config = require('./config/keys');
const sessionstorage = require('sessionstorage');


function verifyToken(req, res, next) {

  // check header or url parameters or post parameters for token
  let token = sessionstorage.getItem('x-access-token');
  if (!token) {
      return res.status(403).send({ auth: false, message: 'No token provided.' });
  }

  // verifies secret and checks exp
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
      return res.status(500).send({
        auth: false,
        message: 'Failed to authenticate token.'
      });

    // if everything is good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });

}


module.exports = {
  'verifyToken': verifyToken,
  'access': function() {
    let value = false;
    let token = sessionstorage.getItem('x-access-token');
    if (!token) {
      value = false;
    }

    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) {
        value = false;
      } else {
        value = true;
      }
    });
    return value;
  }
};
