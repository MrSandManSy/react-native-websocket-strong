# react-native-websocket-strong

```
use original Websocket
```

## install

`npm i react-native-websocket-strong`

## example

```javascript
import WsClient from 'react-native-websocket-strong'

const wsClient = new WsClient()

wsClient.addListener('message', (data) => {
    // recive push data
})

wsClient.addListener('connect', () => {
    // recive connect response
})

wsClient.connect('ws://www.npmjs.com:8080')

```

## Follow-up planning

* support configure websocket keep alive time
