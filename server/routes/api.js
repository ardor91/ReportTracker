const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

// Connect
const connection = (closure) => {
  return MongoClient.connect('mongodb://trackerApp:12345q@ds221095.mlab.com:21095/report-tracker', {
    useNewUrlParser: true
  }, (err, db) => {
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


//Get details on the main
router.get('/home', (req, res) => {
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
router.get('/students', (req, res) => {
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
router.get('/student/:id', (req, res) => {
  connection((dbo) => {
    const id = +req.params.id;
    const details = {"id": id};
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
router.put('/student/:id', (req, res) => {
  connection((dbo) => {
    const id = +req.params.id;
    dbo.collection('students')
    .updateOne(
      {"id": id},
      { $set:{ "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "contacts": req.body.contacts,
        "skills": req.body.skills }},
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

module.exports = router;
