const express = require('express');
const controllers = require('../controllers/subjectController');
const router = express.Router();

router
    .route('/')
    .get(controllers.getSubjects)
    .post(controllers.createSubject)


router
    .route('/:subjectId')
    .get(controllers.getSubject)

module.exports = router;