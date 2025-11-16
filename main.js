const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  // Create the browser window with iPhone-like dimensions (375x812)
  // Scaled up slightly for better desktop viewing
  mainWindow = new BrowserWindow({
    width: 450,
    height: 900,
    resizable: false,
    frame: true,
    backgroundColor: '#87CEEB', // Sky blue
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
    roundedCorners: true
  });

  // Load the sign-in page (or sign-up if first time)
  mainWindow.loadFile('src/pages/signin.html');

  // Open DevTools in development mode
  if (process.argv.includes('--dev')) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
