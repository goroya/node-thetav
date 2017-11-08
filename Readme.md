# node-thetav

Node.js Library for Ricoh Theta V

## Install

```
npm install --save node-thetav
```

## Require ##

```javascript
import thetav from 'node-thetav';
const httpApi = thetav.http;
const bleApi = thetav.ble;
```

## Usage

```javascript
import thetav from 'node-thetav';
const httpApi = thetav.http;
const bleApi = thetav.ble;

(async () => {
    try {
        await httpApi.cameraSetBluetoothDevice('11111111-1111-1111-1111-111111111111');
        await bleApi.init();
        await bleApi.setAuthBluetoothDevice(
            '11111111-1111-1111-1111-111111111111'
        );
        await bleApi.setTakePicture(1);
    } catch (err) {
        console.error(err);
    }
})();
```
