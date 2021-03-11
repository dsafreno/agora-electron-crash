const electron = require('electron')
const { BrowserWindow, app } = electron

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile(`${__dirname}/app/index.html`)
})
