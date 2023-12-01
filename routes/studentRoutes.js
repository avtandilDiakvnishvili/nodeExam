const express = require('express');
const controllers = require('../controllers/studentController');
const router = express.Router();

router
    .route('/')
    .get(controllers.getStudents)
    .post(controllers.createStudent)


router
    .route('/:studentId')
    .get(controllers.getStudent)


router
    .route('/choose')
    .post(controllers.chooseSubject)


router
    .route('/getStudendSubject/:studentId')
    .get(controllers.getStudentSubjects)


module.exports = router;