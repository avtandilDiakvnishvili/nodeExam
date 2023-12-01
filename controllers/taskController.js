const Task = require("../models/taskModel");
const asyncCatch = require('../error/asyncCatch');
const User = require("../models/userModel");
const { ObjectId } = require("mongodb");

module.exports.getTasks = asyncCatch(async (req, res) => {
    const tasks = await Task.find(req.query);
    res.send(tasks) 
})

module.exports.createTask = asyncCatch(async (req, res) => {
    const task = await Task.create(req.body);
    res.send(task);
})

module.exports.getStatistics = asyncCatch(async (req, res) => {
    const statistics = await Task.aggregate([
    {
        $group: {
            _id: '$priority',
            totalEstimation: {$sum: '$estimation'},
            avgEstimation: {$avg: '$estimation'},
            totalCount: {$sum: 1}
        }
    }])
    res.send(statistics);
})

module.exports.assignTask = asyncCatch(async (req, res) => {
    const {taskId, userId} = req.body;
    const task = await Task.findByIdAndUpdate(taskId, {user: new ObjectId(userId)});
    await User.findByIdAndUpdate(userId, {$push: {tasks: new ObjectId(taskId)}});
    res.send(task);
})
