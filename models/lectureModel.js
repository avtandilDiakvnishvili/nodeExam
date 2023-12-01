const { ObjectId } = require('mongodb');
const { Schema, model } = require('mongoose');

const schema = Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
    },
    lastName: {
        type: String,
        required: true
    },
    personalNumber: {
        type: String,
        required: true
    },


    subjects: [{
        type: ObjectId,
        ref: 'Subject',
        required: false
    }
    ]
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
})


const Lecture = model('Lecture', schema);
module.exports = Lecture;