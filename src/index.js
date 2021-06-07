const {
    app,
    BrowserWindow,
    dialog
} = require('electron');
const csv = require('csv');
const fs = require('fs');
const path = require('path');

// show dialog
function crWiPr() {
    let veMa = new BrowserWindow({
        width: 800,
        height: 400,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    veMa.loadFile('./src/public/views/index.html')
};
app.whenReady().then(crWiPr);