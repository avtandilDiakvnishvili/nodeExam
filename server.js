require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/university').then(() => {
    console.log('Connected to DB');
})

app.listen(8888, () => {
    console.log('App started successfully');
})