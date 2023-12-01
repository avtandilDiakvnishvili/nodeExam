const Subject = require('../models/subjectModel');
const asyncCatch = require('../error/asyncCatch');
const { ObjectId } = require('mongodb');

module.exports.getSubjects = asyncCatch(async (req, res) => {
    const subjects = await Subject.find(req.query).populate('students').populate('lecture');
    res.send(subjects);
})

module.exports.getSubject = asyncCatch(async (req, res) => {
    const { subjectId } = req.params;
    const subject = await Subject.findById(subjectId).populate('students').populate('lecture');
    res.send(subject);
})

module.exports.createSubject = asyncCatch(async (req, res) => {
    const { ...subject } = req.body;
    const createdSubject = await Subject.create({ ...subject });
    res.send(createdSubject);
})




