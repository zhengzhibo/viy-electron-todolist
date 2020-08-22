import { ipcMain } from 'electron';
import db from '../db';

ipcMain.on('taskAdd', (event, arg) => {
  const doc = {
    hello: 'world',
    n: 5,
    today: new Date(),
    nedbIsAwesome: true,
    notthere: null,
    notToBeSaved: undefined, // Will not be saved
    fruits: ['apple', 'orange', 'pear'],
    infos: { name: 'nedb' },
  };
  console.log(db);
  db.insert(doc, (err, newDoc) => { // Callback is optional
    console.log(err, newDoc);
    event.returnValue = '1';
  });
});
