var express = require('express');
var router = express.Router();
var students = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Jenson'
  },
  {
    id: 3,
    firstName: 'Sally',
    lastName: 'Struthers'
  }
]

/* GET /api/students */
router.get('/', function(req, res, next) {
  res.json(students);
});

/* POST /api/students */
router.post('/', function(req, res, next) {
  var responseBody = {
    id: students.length,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }
  students.push(responseBody)
  res.json(responseBody);
});

module.exports = router;
