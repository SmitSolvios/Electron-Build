const { ipcMain } = require('electron')
const { app, BrowserWindow, screen,session } = require('electron')
const { TestFuncation, buildMenu, buildDefaultTemplate, buildDarwinTemplate } = require('../Menu')
const { ReadConnectionFile, SetPinPad } = require('../Config/Connection');
const print = require('../Config');
const { getIP, Ping, GetMAC } = require('../utility/Helpers');
const { CheckHealth } = require('../service');
const { download } = require('electron-dl');
const path = require('path')
const Store = require('../Config/Store');
const axios = require('axios');
const fs = require('fs')
const DEFAULT_PRINTER = 'Default';


module.exports = (MainWin, ClientWin) => {

  const GetPrinter = async (printerName = 'Default') => {

    const getallprinter = await MainWin.webContents.getPrintersAsync();
    const GetDefualtPrinter = getallprinter.filter(x => x.isDefault === true);

    if (printerName === 'Default') {
      return GetDefualtPrinter[0].name;
    } else {
      const PrinterInfo = getallprinter.filter(x => x.name === printerName)[0];
      if (PrinterInfo) {
        return PrinterInfo.name;
      } else {
        return GetDefualtPrinter[0].name;
      }
    }
  };

  ipcMain.handle('GetPinPadSetting', async (event, arg) => {

    let data = { PinPadIp: "", PinPadPort: "", SerialNumber: "" };
    var Jsondata = ReadConnectionFile();
    if (Jsondata !== undefined) {
      data.PinPadIp = Jsondata.PinPadIp;
      data.PinPadPort = Jsondata.PinPadPort;
      data.SerialNumber = Jsondata.SerialNumber;
    }
    return data;
  })

  ipcMain.handle('GetVersion', async (event, arg) => {
    return app.getVersion();
  })

  ipcMain.handle('GetMac', async (event, arg) => {
    return await GetMAC();
  })

  ipcMain.handle('GetTerminalDetails', async (event, arg) => {

    const terminalConfig = Store.get('terminalConfig');
    
    if (terminalConfig) {
      const _getIP = await getIP(terminalConfig.connection);
      return {
        ...terminalConfig,
        IpAddress: {..._getIP,address:`${_getIP.address}:8081`},
        MAC: await GetMAC()
      };
    } else {
      return {
        connection: '',
        terminalName: '',
        storeId: '1',
        storeName: '',
        terminalRole: '',
        IpAddress: '',
        MAC: await GetMAC()
      };
    }
  })

  ipcMain.handle('hostping', async (event, arg) => {
    let res = await Ping(arg.host);
    if (res.alive) {
      try {
        const Req = await CheckHealth(res.numeric_host);
        if (Req.data.status === 'Healthy') {
          res.numeric_host = `${res.numeric_host}:8081`
          return res;
        } else {
          res.alive = false;
          return res;
        }
      } catch (e) {
        res.alive = false;
        return res;
      }
    }
    return res;
  })

  ipcMain.handle('SetPinPadSetting', async (event, arg) => {
    try {
      SetPinPad(arg);
      return true;
    }
    catch
    {
      return false;
    }
  })

  ipcMain.handle('terminalSetup', async (event, arg) => {
    try {
      Store.set('terminalConfig.connection', arg.server)
      Store.set('terminalConfig.terminalName', arg.terminalName)
      Store.set('terminalConfig.storeId', arg.storeid)
      Store.set('terminalConfig.storeName', arg.storename)
      Store.set('terminalConfig.terminalRole', arg.terminalRole)
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }

  })

  ipcMain.handle('GetAllSetting', async (event, arg) => {
    return ReadConnectionFile();
  })

  ipcMain.on('UpdateClientScreen', (event, arg) => {
    if (ClientWin != undefined)
      ClientWin.webContents.send('ClientScreenData', arg);
  });

  ipcMain.handle('GetAllPrinter', async (event, arg) => {
    if (MainWin != undefined) {
      try {
        const Printers = await MainWin.webContents.getPrintersAsync();
        return Printers;
      }
      catch (e) {
        return e;
      }
    }
  })
  

  ipcMain.on('UpdateClientScreenTransactionDone', (event, arg) => {
    if (ClientWin != undefined)
      ClientWin.webContents.send('ClientScreenTransactionDone', arg);
  });

  ipcMain.on('title-updated', (e, data) => {
    MainWin.webContents.send('title-updated-Client', data);
  });

  ipcMain.on('anaction', (e, data) => {
    const menu = Menu.buildFromTemplate(buildDarwinTemplate());
    Menu.setApplicationMenu(menu);
    MainWin.webContents.send('Update-Menu');
  });

  ipcMain.on('internet-connection', (e, data) => {
    MainWin.webContents.send('internet-connection', data);
  });

  ipcMain.on('open-clientscreen', (e, data) => {
    if (ClientWin) {
      data === 1 ? ClientWin.show() : ClientWin.hide();
    }
  });

  ipcMain.on('minimize-app', (e, data) => {
    if (MainWin) {
      MainWin.minimize();
    }
  });

  ipcMain.on('preview-print-recipt', async (e, data) => {
    console.log('printer',await GetPrinter(data.printer));
    print.PreviewPrintInvoiceRecipt(data, await GetPrinter(data.printer));

  });

  ipcMain.on('print-Shift-recipt', async (e, data) => {
    print.PrintShiftReport(data.data, await GetPrinter(data.printer));
  });

  ipcMain.on('print-recipt', async (e, data) => {

    await print.PrintInvoiceRecipt(data, await GetPrinter(data.Printername));
    for (let index = 0; index < data.PrintObject.Extracopy; index++) {
      await print.PrintInvoiceRecipt(data, await GetPrinter(data.Printername));
    }
  });

  ipcMain.on('print-OAreceipt', async (e, data) => {
    await print.PrintOAreceipt(data, await GetPrinter(data.Printer));
  });

  ipcMain.on('print-Report', async (e, data) => {
    MainWin.webContents.send("Start Printing", "");
    axios.get(data.url, { responseType: "arraybuffer", headers: { 
      'Accept': 'application/pdf',
      'Authorization':`Bearer ${data.Token}`
     }})
    .then(async (res) => {
        const DirectoryPath = path.join(app.getPath("temp"),'tmp_pdf.pdf');
        MainWin.webContents.send('Logs', DirectoryPath);
        fs.writeFileSync(DirectoryPath, res.data, { encoding: "binary" });
        print.PrintReport(MainWin, DirectoryPath, await GetPrinter(data.printer))
      }).catch(err => {
        console.log(err)
        MainWin.webContents.send("End Printing", "");
      });
  });

  ipcMain.on('download-Report', async (e, data) => {

  session.defaultSession.webRequest.onBeforeSendHeaders( { urls: ["*://*/api/report/*"] }, (details, callback) => {
      details.requestHeaders['Authorization'] = `Bearer ${data.Token}`;
      callback({ requestHeaders: details.requestHeaders })
  })

  setTimeout(async() => {
    try {
      await download(MainWin, data.url, {
        onProgress: (progress) => {
          MainWin.webContents.send("download progress", progress);
          console.log("download progress", progress);
        },
        onCompleted: (item) => {
          MainWin.webContents.send("download complete", item);
          try {
            if (DownloadWindow) {
              DownloadWindow.close()
            }
          }
          catch { }
        },
        onStarted: () => {
          MainWin.webContents.send("download start", "Start Download");
        }
      });
    }
    catch (err) {
      console.log(err);
    }
  }, 2000);
  });


  ipcMain.on('close-app', (e, data) => {
    app.quit();
  });
}





