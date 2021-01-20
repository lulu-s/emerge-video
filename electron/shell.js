const electron = require('electron')
const {
    app,
    BrowserWindow
} = require('electron')
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
app.commandLine.appendSwitch("--disable-http-cache");

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        frame: false,
        fullScreen: true,
        // x: 0,
        y: 0,
        width: 1920,
        height: 1080,
        //enableLargerThanScreen: true
    })

    // and load the index.html of the app.
    win.loadURL('http://localhost:1234/index.html')
    win.setSize(1920, 1080);
    // win.openDevTools();
}

app.on('ready', createWindow)

