const path = require('path');
const express = require('express');
const lectureRouter = require('./routes/lectureRoutes');
const studentRouter = require('./routes/studentRoutes');
const subjectRouter = require('./routes/subjectRoutes')


const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());


app.use('/api/student', studentRouter);
app.use('/api/lecture', lectureRouter);
app.use('/api/subject', subjectRouter);




app.use('/', (req, res, next) => {
    console.log(req.url)
    next()
})


app.use((error, req, res, next) => {
    res.status(error.statusCode || 500).send({
        success: false,
        error: error.stack
    })
})

module.exports = app;