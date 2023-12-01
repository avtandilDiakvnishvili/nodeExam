const Lecture = require('../models/lectureModel');
const Subject = require('../models/subjectModel');

const asyncCatch = require('../error/asyncCatch');
const { ObjectId } = require('mongodb');

module.exports.getLectures = asyncCatch(async (req, res) => {
    const lectures = await Lecture.find(req.query).populate('subjects')
    res.send(lectures);
})

module.exports.getLecture = asyncCatch(async (req, res) => {
    const { lectureId } = req.params;
    const lecture = await Lecture.findById(lectureId).populate('subjects')
    res.send(lecture);
})

module.exports.createLecture = asyncCatch(async (req, res) => {
    const { ...lecture } = req.body;
    const createdLecture = await Lecture.create({ ...lecture });
    res.send(createdLecture);
})


module.exports.chooseSubject = asyncCatch(async (req, res) => {
    const { subjectId, lectureId } = req.body;
    const subject = await Subject.findByIdAndUpdate(subjectId, { lecture: new ObjectId(lectureId) });
    console.log(subject);
    await Lecture.findByIdAndUpdate(lectureId, { $push: { subjects: subject } });
    res.send(subject);
})

