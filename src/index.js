const {
    app,
    BrowserWindow,
    dialog
} = require('electron');
const path = require('path');
const fs = require('fs')
const generate = require('csv-generate/lib/sync')
const assert = require('assert')

// create Window Main func
function crWiMa() {
    let veMa = new BrowserWindow({
        width: 800,
        height: 400,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    // Load html file
    veMa.loadFile('./src/public/views/index.html')
    // Open the DevTools.
    veMa.webContents.openDevTools()
};

// call ceatewindowmain func
app.whenReady().then(crWiMa);

// compatibilty
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// compatiblity
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) crWiMa();
})