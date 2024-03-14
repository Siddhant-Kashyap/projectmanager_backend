const Task = require('../models/task.model')


async function createTask(taskData){
    try {
        const task = new Task(taskData);
        return await task.save();
    } catch (error) {
        throw new Error("task is not created")
        
    }
}
async function getTaskById(id){
    try {
        const task = await Task.findById({id});
        return task;
    } catch (error) {
        throw new Error("Failed to fetch the task by id");
    }


} 
async function getAllTaskOfUser(userId){
    try {
        const tasks =  await Task.find({assignedTo:userId});
        return tasks;
    } catch (error) {
        throw new Error("task of user not exists")
    }
}
async function updateTask(taskId,updatedTask){
    try {
        const task = await Task.findByIdAndUpdate(taskId,updatedTask,{new:true});
        return task;
    } catch (error) {
        throw new Error('Failed to update task');
    }

}

module.exports={
    createTask,getAllTaskOfUser,getTaskById,updateTask
}