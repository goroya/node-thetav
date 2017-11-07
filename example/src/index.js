import thetav from 'node-thetav/build/main';
const bleApi = thetav.ble;
const httpApi = thetav.http;

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
