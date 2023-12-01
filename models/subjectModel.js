const { ObjectId } = require('mongodb');
const { Schema, model } = require('mongoose');


const schema = Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true
    },

    lecture: {
        type: ObjectId,
        ref: 'Lecture',
        required: false,

    },
    students: [{
        type: ObjectId,
        ref: 'Student',
        required: false
    }
    ]

}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
})



const Subject = model('Subject', schema);
module.exports = Subject;