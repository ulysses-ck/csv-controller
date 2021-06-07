const {
    app,
    BrowserWindow,
    dialog,
    ipcMain
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

ipcMain.handle("write", async (Event, arg) => {
    const result = dialog.showSaveDialog({
        title: 'Select the File Path to save',
        defaultPath: path.join(__dirname, '../assets/sample.txt'),
        // defaultPath: path.join(__dirname, '../assets/'),
        buttonLabel: 'Save',
        // Restricting the user to only Text Files.
        filters: [{
            name: 'Text Files',
            extensions: ['txt', 'docx']
        }, ],
        properties: []
    }).then(file => {
        // Stating whether dialog operation was cancelled or not.
        console.log(file.canceled);
        if (!file.canceled) {
            console.log(file.filePath.toString());

            // Creating and Writing to the sample.txt file
            fs.writeFile(file.filePath.toString(),
                'This is a Sample File',
                function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                });
        }
    }).catch(err => {
        console.log(err)
    });
    return result
})