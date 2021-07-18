import { contextBridge, ipcRenderer } from "electron"

contextBridge.exposeInMainWorld(
  'api',
  {
    // From renderer to main
    send: (channel: 'string', data: any) => {
      const validChannels = [
        'loadData'
      ]
      if (validChannels.includes(channel)) {
        ipcRenderer.send(channel, data)
      }
    },
    // From main to renderer
    receive: (channel: 'string', func: any) => {
      const validChannels = [
        'isDataLoaded'
      ]
      if (validChannels.includes(channel)) {
        ipcRenderer.on(channel, (event: Event, ...args: any) => func(...args))
      }
    }
  }
)