var express = require('express');
var router = express.Router();
var _ = require('underscore');
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

function setStudent(req, res, next) {
  var theStudent = _.find(students, function(student) {
    return student.id == parseInt(req.params.id);
  });
  if (typeof theStudent != 'undefined') {
    res.student = theStudent;
    next();
  } else {
    res.status(404).send();
  }
}

/* GET /api/students */
router.get('/', function(req, res, next) {
  res.json(students);
});

/* POST /api/students */
router.post('/', function(req, res, next) {
  var responseBody = {
    id: students.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }
  students.push(responseBody)
  res.json(responseBody);
});

/* GET /api/students/:id */
router.get('/:id', setStudent, function(req, res, next) {
  res.json(res.student);
});

/* PUT /api/students/:id */
router.put('/:id', setStudent, function(req, res, next) {
  // Faking updating student
  params = _.pick(req.body, 'firstName', 'lastName')
  params.id = parseInt(req.params.id);
  students = _.reject(students, function(student) {
    return student.id == req.params.id;
  });
  students.push(params);
  students = _.sortBy(students, function(student) {
    return student.id;
  })

  res.json(params);
});

/* DELETE /api/students/:id */
router.delete('/:id', setStudent, function(req, res, next) {
  students = _.reject(students, function(student) {
    return student.id == req.params.id;
  });
  res.status(204).send();
});

module.exports = router;
