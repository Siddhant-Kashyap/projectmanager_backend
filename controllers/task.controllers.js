const taskServices = require('../services/task.services')


async function createTask(req,res,next){
    try {
        const _task = req.body;
        const task = await taskServices.createTask(_task)
        res.status(201).json(task);

    } catch (error) {
        next(error)
    }
}
async function getTaskById(req,res,next){
    try {
        const task = await taskServices.getTaskById(req.params.taskId);
        res.status(200).json(task);
        
    } catch (error) {
        next(error);
    }
  
}
async function getAllTaskOfUser(req,res,next){
    try {
        const userId = req.params.userId;
        const tasks= await taskServices.getAllTaskOfUser(userId);
        res.status(200).json(tasks)
    } catch (error) {
        next(error)
    }
}
async function updatedTask(req,res,next){
    try {
        const taskId = req.params.taskId;
        const newTask = req.body;
        const updatedTask = await taskServices.updateTask(taskId,newTask);
        res.status(201).json({"message":"taskUpdated"});
    } catch (error) {
        
    }
}
async function deleteTask(req, res, next) {
    try {
        const taskId = req.params.taskId;
        await taskServices.deleteTask(taskId);
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}
module.exports ={
    createTask,getAllTaskOfUser,getTaskById,updatedTask,deleteTask
}