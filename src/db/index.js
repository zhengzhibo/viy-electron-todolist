import path from 'path';
import { ipcRenderer } from 'electron';

const Datastore = require('nedb-promises');

const { userData } = ipcRenderer.sendSync('GetSystemInfo');
const tasks = Datastore.create(path.join(userData, 'db/tasks.db'));
const setting = Datastore.create(path.join(userData, 'db/setting.db'));

export { tasks, setting };

export default {
  tasks,
  setting,
};
