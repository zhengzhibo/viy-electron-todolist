import { ipcRenderer } from 'electron';

function taskAdd() {
  return ipcRenderer.sendSync('taskAdd', { a: 1 });
}

export default {
  taskAdd,
};
