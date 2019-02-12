const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const config = require('./config/keys');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const sessionstorage = require('sessionstorage');
const VerifyToken = require('./VerifyToken').verifyToken;
// const access = require('./VerifyToken').access;
const User = require('./user/User');




var app = express();
app.use(cookieParser());
app.get('/cookie',function(req, res){
     res.cookie("cookie_name" , 'cookie_value');
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(cookieParser());
// app.use(express.cookieParser());

var _user = '';

// Connect
const connection = (closure) => {
  return MongoClient.connect('mongodb://trackerApp:12345q@ds221095.mlab.com:21095/report-tracker', {
      useNewUrlParser: true
    },
    (err, db) => {
      if (err) return console.log(err);

      let dbo = db.db("report-tracker");
      closure(dbo);
    });
};


// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};


// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};



function updateToken() {
  let token = jwt.sign({
    id: _user._id
  }, config.secret, {
    expiresIn: 43200 // expires in 12 hours
  });

  sessionstorage.setItem('x-access-token', token);
}


// //validation of the token for access to links
// function checkingTokenForRouting(req, res) {
//   let value = access();
//   console.log(value);
//   if (value === true) {
//     res.cookie('auth', bcrypt.hashSync(value.toString(), 8));
//   } else {
//     res.cookie('auth', '');
//   }
// }


//Get details on the main
router.get('/home', VerifyToken, (req, res) => {
  updateToken();
  // checkingTokenForRouting(req, res);

  connection((dbo) => {
    dbo.collection('home')
      .find()
      .toArray()
      .then((details) => {
        response.data = details;
        res.json(response.data);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});



// Get students
router.get('/students', VerifyToken, (req, res) => {
  updateToken();
  // checkingTokenForRouting(req, res);

  connection((dbo) => {
    dbo.collection('students')
      .find()
      .toArray()
      .then((students) => {
        response.data = students.reverse();
        res.json(response.data);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});



// Get one student
router.get('/student/:id', VerifyToken, (req, res) => {
  updateToken();
  // checkingTokenForRouting(req, res);

  connection((dbo) => {
    const id = +req.params.id;
    const details = {
      "id": id
    };
    dbo.collection('students')
      .findOne(details, (err, student) => {
        if (err) {
          sendError(err, res);
        }
        res.send(student);
      });
  });
});



//Update contacts and skills
router.put('/student/:id', VerifyToken, (req, res) => {
  updateToken();
  // checkingTokenForRouting(req, res);

  connection((dbo) => {
    const id = +req.params.id;
    dbo.collection('students')
      .updateOne({
          "id": id
        }, {
          $set: {
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "contacts": req.body.contacts,
            "skills": req.body.skills
          }
        },
        (err, result) => {
          if (err) {
            sendError(err, res);
          } else {
            res.send(result);
          }
        }
      );
  });
});



router.post('/registration', function(req, res) {

  var hashedPassword = bcrypt.hashSync(req.body.password, 8);

  User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      login: req.body.login,
      password: hashedPassword
    },
    function(err, user) {
      if (err) return res.status(500).send("There was a problem registering the user`.");

      res.status(200).send(user);
    });

});





router.post('/login', function(req, res) {

  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.send(err);

    // check if the password is valid
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.send(err);
    _user = user;
    updateToken();
    // checkingTokenForRouting(req, res);

    res.status(200).send(true);
  });
});


module.exports = router;
