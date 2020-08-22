import path from 'path';
import { app } from 'electron';
import Datastore from 'nedb';

console.log(app.getPath('userData'));
const db = new Datastore({ filename: path.join(app.getPath('userData'), 'db/task.db'), autoload: true });
export default db;
