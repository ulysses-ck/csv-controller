const fs = require('fs')
const csv = require('csv')
const {
    dialog
} = require('electron');
// create file function
function creFi() {
    dialog.showOpenDialog()
}