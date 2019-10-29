const { app, BrowserWindow } = require('electron');

class SchedulingApp {
  constructor() {
    this.win = null;
  }

  run() {
    app.on('ready', this.createWindow);
    app.on('activate', () => {
      if(this.win === null) {
        this.createWindow();
      }
    });
  }

  createWindow() {
    this.win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      },
    });
    this.win.loadFile('index.html');
    this.win.on('closed', () => {
      this.win = null;
    });
  }
}

const schedulingApp = new SchedulingApp();
schedulingApp.run();
