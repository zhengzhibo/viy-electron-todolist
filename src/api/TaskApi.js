import { tasks } from '../db';

function getTasks() {
  return tasks.find();
}

function addTask(task) {
  return tasks.insert(task);
}

function updateTask(id, task) {
  return tasks.update({ _id: id }, task);
}

export { getTasks, addTask, updateTask };
export default {
  getTasks,
  addTask,
  updateTask,
};
