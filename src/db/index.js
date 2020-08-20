import path from 'path';
import { remote } from 'electron';
import Datastore from 'nedb';

console.log(path.join(remote.app.getPath('userData')));
export default new Datastore({ filename: path.join(remote.app.getPath('userData'), 'db/device.db'), autoload: true });
