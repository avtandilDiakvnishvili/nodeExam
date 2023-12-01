const Student = require('../models/studentModel');
const Subject = require('../models/subjectModel');

const asyncCatch = require('../error/asyncCatch');
const { ObjectId } = require('mongodb');
const ApiError = require("../error/apiError");


module.exports.getStudents = asyncCatch(async (req, res) => {
    const students = await Student.find(req.query).populate('subjects')
    res.send(students);
})

module.exports.getStudent = asyncCatch(async (req, res) => {
    const { studentId } = req.params;
    const student = await Student.findById(studentId).populate('subjects')
    if (!student) {
        throw new ApiError('Student not found', 404);
    }
    res.send(student);
})



module.exports.getStudentSubjects = asyncCatch(async (req, res) => {
    const { studentId } = req.params;
    const student = await Student.findById(studentId).populate('subjects')
    if (!student) {
        throw new ApiError('Student not found', 404);
    }
    console.log(student)
    res.send(student.subjects);
})




module.exports.createStudent = asyncCatch(async (req, res) => {
    const { ...student } = req.body;
    const createdStudent = await Student.create({ ...student });
    res.send(createdStudent);
})

module.exports.chooseSubject = asyncCatch(async (req, res) => {
    const { subjectId, studentId } = req.body;
    const subject = await Subject.findByIdAndUpdate(subjectId, { $push: { students: new ObjectId(studentId) } });
    await Student.findByIdAndUpdate(studentId, { $push: { subjects: new ObjectId(subjectId) } });
    res.send(subject);
})