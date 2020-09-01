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

function removeTask(id) {
  return tasks.remove({ _id: id });
}

export {
  getTasks, addTask, updateTask, removeTask,
};
export default {
  getTasks,
  addTask,
  updateTask,
  removeTask,
};
