import { app, ipcMain } from 'electron';

const systemInfo = {
  userData: app.getPath('userData'),
};

ipcMain.on('GetSystemInfo', (event) => {
  event.returnValue = systemInfo;
});

ipcMain.on('QuitApp', (event) => {
  app.isQuiting = true;
  app.quit();
  event.returnValue = 'success';
});
