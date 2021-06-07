// Importing dialog module using remote

const {
    ipcRenderer
} = require("electron/renderer");

var save = document.getElementById('save');
console.log(save)

save.addEventListener('click', (event) => {
    // Resolves to a Promise<Object>

    ipcRenderer.invoke("write", arg).then((result) => {
        console.log(result);
    })
});