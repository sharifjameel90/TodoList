const electron = require('electron');
const { app, BrowserWindow, Menu, ipcMain, ipcRenderer, Notification, dialog} = electron;


app.on('ready', () => {
 


    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        title: 'Todo',
        roundedCorners: true,
        fullscreenable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        // frame:false,
    });

    mainWindow.loadFile('public/index.html')

    mainWindow.on('closed', () => {
        app.quit();
    });
});