import thetav from 'node-thetav/build/main';
const thetaBle = thetav.ble;

(async () => {
    try {
        // const ret = await thetaHttp.cameraSetBluetoothDevice('11111111-1111-1111-1111-111111111111');
        await thetaBle.init();
        await thetaBle.setAuthBluetoothDevice(
            '11111111-1111-1111-1111-111111111111'
        );
        await thetaBle.setTakePicture(1);
    } catch (err) {
        console.error(err);
    }
})();
