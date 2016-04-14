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

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(students);
});

module.exports = router;
