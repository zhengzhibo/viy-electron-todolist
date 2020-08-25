const Datastore = require('nedb-promises');

const tasks = Datastore.create('task');
const setting = Datastore.create('setting');

export { tasks, setting };

export default {
  tasks,
  setting,
};
