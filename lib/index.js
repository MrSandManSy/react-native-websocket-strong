
'use strict'

const EventEmitter = require('events').EventEmitter

class WsClient extends EventEmitter {

    static instance = null
    static ws = null

    constructor() {
        super()
        if (WsClient.instance) {
            return WsClient.instance
        }
        return (WsClient.instance = this)
    }

    connect = (uri) => {
        WsClient.ws = !ws? new WebSocket(uri):ws
        WsClient.ws.onopen = () => {
            this.emit('connected')
        }

        WsClient.ws.onmessage = (e) => {
            this.emit('data', e.data)
        }

        WsClient.ws.onerror = (e) => {
            this.emit('error', e.message)
        }

        WsClient.ws.onclose = (e) => {
            this.emit('close', e)
        }
    }

    kill = () => {
        if (WsClient.ws) {
            WsClient.ws.close()
            WsClient.ws = null
        }
    }

    send = (params) => {
        if (WsClient.ws) {
            WsClient.ws.send(params)
        }
    }

}

export default WsClient
