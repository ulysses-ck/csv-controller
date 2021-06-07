const {
    app,
    BrowserWindow,
    dialog
} = require('electron');
const csv = require('csv');
const fs = require('fs');
const path = require('path');

// create Window Main func
function crWiMa() {
    let veMa = new BrowserWindow({
        width: 800,
        height: 400,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    veMa.loadFile('./src/public/views/index.html')
};

// call crwima
app.whenReady().then(crWiMa);

// macOS compatibilty
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// macOs compatiblity
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) crWiMa();
})