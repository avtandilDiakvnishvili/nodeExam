const express = require('express');
const controllers = require('../controllers/lectureController');
const router = express.Router();

router
    .route('/')
    .get(controllers.getLectures)
    .post(controllers.createLecture)


router
    .route('/:lectureId')
    .get(controllers.getLecture)


router
    .route('/choose')
    .post(controllers.chooseSubject)


module.exports = router;