import noble from 'noble';
import EventEmitter from 'events';

import bleCmd from './bleCmd';

class BleCtrl extends EventEmitter {
  constructor(height, width) {
    super();

    this.bleObj = {};
    this.initFlag = {};
    for (let key in bleCmd.CMD) {
      if ({}.hasOwnProperty.call(bleCmd.CMD, key)) {
        this.initFlag[bleCmd.CMD[key].uuid] = false;
      }
    }
  }
  static int2array(val) {
    return [val & 0xFF, (val >> 8) & 0xFF];
  }
  static array2Int(val) {
    return val[1] << 8 | val[0];
  }
  _checkInitEnd() {
    let result = true;
    for (const key in this.initFlag) {
      if (this.initFlag[key] !== true) {
        result = false;
        break;
      }
    }
    return result;
  }
  async init(timeout = 10000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject('Timeout');
      }, timeout);
      noble.on('stateChange', (state) => {
        if (state === 'poweredOn') {
          noble.startScanning();
          this.emit('startScanning');
        } else {
          noble.stopScanning();
          this.emit('stopScanning');
        }
      });
      noble.on('discover', (peripheral) =>{
        peripheral.connect((error) => {
          if (error) {
            console.error(error);
            return;
          }
          peripheral.discoverServices(
            [],
            (error, services) => {
              for (let i in services) {
                if ({}.hasOwnProperty.call(services, i)) {
                  this.bleObj[services[i].uuid] = {};
                  const deviceInformationService = services[i];
                  deviceInformationService.discoverCharacteristics(
                    null,
                    (error, characteristics) => {
                      for (let chara in characteristics) {
                        if ({}.hasOwnProperty.call(characteristics, chara)) {
                          const charInstance = characteristics[chara];
                          const serviceUuid = charInstance._serviceUuid;
                          const charUuid = charInstance.uuid;
                          this.bleObj[serviceUuid][charUuid] = charInstance;
                        }
                      }
                      this.initFlag[deviceInformationService.uuid] = true;
                      if (this._checkInitEnd() === true) {
                        resolve(true);
                        clearTimeout(timer);
                      }
                    }
                  );
                }
              }
            }
          );
        });
      });
    });
  }
  getChara(serviceName, charaName) {
    const serviceUuid = bleCmd.getServiceUUID(serviceName);
    const charaUuid = bleCmd.getCharacteristicUUID(serviceName, charaName);
    if (!serviceUuid || !charaUuid) {
      return null;
    }
    const chara = this.bleObj[serviceUuid][charaUuid];

    return chara;
  }
  async execRead(serviceName, charaName) {
    return new Promise((resolve, reject) => {
      const chara = this.getChara(serviceName, charaName);
      if (!!chara === false) {
        reject('chara error');
      }
      chara.read((error, data) => {
        if (error) {
          reject(error);
        }
        const utf8Data = new Uint8Array(data);
        const arrayData = Array.from(utf8Data);
        resolve(arrayData);
      });
    });
  }
  async execWrite(serviceName, charaName, data) {
    return new Promise((resolve, reject) => {
      const chara = this.getChara(serviceName, charaName);
      if (!!chara === false) {
        reject('chara error');
      }
      chara.write(new Buffer(data), true, (error) => {
        if (error) {
          reject(error);
        }
        resolve();
      });
    });
  }
  // MANUFACTURER_NAME
  async getManufacturerName() {
    try {
      const data = await this.execRead(
        'CAMERA_INFORMATION',
        'MANUFACTURER_NAME_STRING_CHARA_UUID'
      );
      return String.fromCharCode(...data);
    } catch (error) {
      throw new Error(error);
    }
  }
  // MODEL_NUMBER
  async getModelNumberString() {
    try {
      const data = await this.execRead(
        'CAMERA_INFORMATION',
        'MODEL_NUMBER_STRING_CHARA_UUID'
      );
      return String.fromCharCode(...data);
    } catch (error) {
      throw new Error(error);
    }
  }
  // SERIAL_NUMBER
  async getSerialNumberString() {
    try {
      const data = await this.execRead(
        'CAMERA_INFORMATION',
        'SERIAL_NUMBER_STRING_CHARA_UUID'
      );
      return String.fromCharCode(...data);
    } catch (error) {
      throw new Error(error);
    }
  }
  // FIRMWARE_REVISION
  async getFirmwareRevisionString() {
    try {
      const data = await this.execRead(
        'CAMERA_INFORMATION',
        'FIRMWARE_REVISION_STRING_CHARA_UUID'
      );
      return String.fromCharCode(...data);
    } catch (error) {
      throw new Error(error);
    }
  }
  // MAC_ADDRESS
  async getMacAddress() {
    try {
      const data = await this.execRead(
        'CAMERA_INFORMATION',
        'MAC_ADDRESS_CHARA_UUID'
      );
      return String.fromCharCode(...data);
    } catch (error) {
      throw new Error(error);
    }
  }

  // CAMERA_STATUS_COMMAND
  //  CAMERA_POWER_CHARA_UUID
  async getCameraPower() {
    try {
      const data = await this.execRead(
        'CAMERA_STATUS_COMMAND',
        'CAMERA_POWER_CHARA_UUID'
      );
      return data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  //  BATTERY_LEVEL_CHARA_UUID
  async getBatteryLevel() {
    try {
      const data = await this.execRead(
        'CAMERA_STATUS_COMMAND',
        'BATTERY_LEVEL_CHARA_UUID'
      );
      return data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  //  BATTERY_STATUS_CHARA_UUID
  async getBatteryStatus() {
    try {
      const data = await this.execRead(
        'CAMERA_STATUS_COMMAND',
        'BATTERY_STATUS_CHARA_UUID'
      );
      return data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  //  COMMAND_ERROR_DESCRIPTION_CHARA_UUID
  async getCommandErrorDescription() {
    try {
      const data = await this.execRead(
        'CAMERA_STATUS_COMMAND',
        'COMMAND_ERROR_DESCRIPTION_CHARA_UUID'
      );
      return data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  //  BOOT_EXTENDED_APPLICATION_CHARA_UUID
  async getBootExtendedApplication() {
    try {
      const data = await this.execRead(
        'CAMERA_STATUS_COMMAND',
        'BOOT_EXTENDED_APPLICATION_CHARA_UUID'
      );
      return data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  // WLAN_CONTROL_COMMAND
  //  NETWORK_TYPE_CHARA_UUID
  async getNetworkType() {
    try {
      const data = await this.execRead(
        'WLAN_CONTROL_COMMAND',
        'NETWORK_TYPE_CHARA_UUID'
      );
      return data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  //  ACCESS_POINT_LIST_CHARA_UUID
  async getAccessPowerList() {
    try {
      const data = await this.execRead(
        'WLAN_CONTROL_COMMAND',
        'ACCESS_POINT_LIST_CHARA_UUID'
      );
      return data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  //  SELECTED_ACCESS_POINT_CHARA_UUID
  async getSelectedAccessPoint() {
    try {
      const data = await this.execRead(
        'WLAN_CONTROL_COMMAND',
        'SELECTED_ACCESS_POINT_CHARA_UUID'
      );
      return data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  //  WLAN_FREQUENCY_CHARA_UUID
  async getWlanFrequency() {
    try {
      const data = await this.execRead(
        'WLAN_CONTROL_COMMAND',
        'WLAN_FREQUENCY_CHARA_UUID'
      );
      return data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  //  USERNAME_CHARA_UUID
  async getUsername() {
    try {
      const data = await this.execRead(
        'WLAN_CONTROL_COMMAND',
        'USERNAME_CHARA_UUID');
      return String.fromCharCode(...data);
    } catch (error) {
      throw new Error(error);
    }
  }
  //  PASSWORD_CHARA_UUID
  async getPassword() {
    try {
      const data = await this.execRead(
        'WLAN_CONTROL_COMMAND',
        'PASSWORD_CHARA_UUID'
      );
      return String.fromCharCode(...data);
    } catch (error) {
      throw new Error(error);
    }
  }

  // BLUETOOTH_CONTROL_COMMAND
  //  AUTH_BLUETOOTH_DEVICE_CHARA_UUID
  async setAuthBluetoothDevice(uuid) {
    try {
      const data = await this.execWrite(
        'BLUETOOTH_CONTROL_COMMAND',
        'AUTH_BLUETOOTH_DEVICE_CHARA_UUID',
        uuid
      );
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
  //  BLUETOOTH_POWER_STATUS_CHARA_UUID
  async getBluetoothPowerStatus() {
    try {
      const data = await this.execRead(
        'BLUETOOTH_CONTROL_COMMAND',
        'BLUETOOTH_POWER_STATUS_CHARA_UUID'
      );
      return data[0];
    } catch (error) {
      throw new Error(error);
    }
  }

  async getDateTimeZone() {
    try {
      const data = await this.execRead(
        'CAMERA_CONTROL_COMMAND',
        'DATE_TIME_ZONE_CHARA_UUID'
      );
      return {
        Year: data[1] << 8 | data[0],
        Month: data[2],
        Day: data[3],
        Hours: data[4],
        Minutes: data[5],
        Seconds: data[6],
        TimeZone: String.fromCharCode(
          data[7], data[8], data[9], data[10], data[11], data[12]
        ),
      };
    } catch (error) {
      throw new Error(error);
    }
  }
  async getVolume() {
    try {
      const data = await this.execRead(
        'CAMERA_CONTROL_COMMAND',
        'VOLUME_CHARA_UUID'
      );
      return data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  async getRecordableTime() {
    try {
      const data = await this.execRead(
        'SHOOTING_STATUS_COMMAND',
        'RECORDABLE_TIME_CHARA_UUID'
      );
      return data[1] << 8 | data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  async getRecordedTime() {
    try {
      const data = await this.execRead(
        'SHOOTING_STATUS_COMMAND',
        'RECORDED_TIME_CHARA_UUID'
      );
      return data[1] << 8 | data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  async getRemainingPictures() {
    try {
      const data = await this.execRead(
        'SHOOTING_STATUS_COMMAND',
        'REMAINING_PICTURES_CHARA_UUID'
      );
      return data[1] << 8 | data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  async getRemainingVideoSeconds() {
    try {
      const data = await this.execRead(
        'SHOOTING_STATUS_COMMAND',
        'REMAINING_VIDEO_SECONDS_CHARA_UUID'
      );
      return data[1] << 8 | data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  async setRemainingPictures(iso, shutterSpeed, colorTemperature) {
    try {
      const data = await this.execWrite(
        'SHOOTING_CONTROL_COMMAND',
        'AUTO_BRACKET_CHARA_UUID',
        []
      );
      return data[1] << 8 | data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  async getCaptureInterval() {
    try {
      const data = await this.execRead(
        'SHOOTING_CONTROL_COMMAND',
        'CAPTURE_INTERVAL_CHARA_UUID'
      );
      return data[1] << 8 | data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  async setCaptureInterval(val) {
    try {
      const writeData = BleCtrl.int2array(val);
      const data = await this.execWrite(
        'SHOOTING_CONTROL_COMMAND',
        'AUTO_BRACKET_CHARA_UUID', writeData);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
  // ISO
  async setISO(val) {
    try {
      const data = await this.execWrite(
        'SHOOTING_CONTROL_COMMAND',
        'ISO_CHARA_UUID', [val]
      );
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getISO() {
    try {
      const data = await this.execRead(
        'SHOOTING_CONTROL_COMMAND',
        'ISO_CHARA_UUID'
      );
      return data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  async setShutterSpeed(val) {
    try {
      const data = await this.execWrite(
        'SHOOTING_CONTROL_COMMAND',
        'SHUTTER_SPEED_CHARA_UUID',
        [val]
      );
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getShutterSpeed() {
    try {
      const data = await this.execRead(
        'SHOOTING_CONTROL_COMMAND',
        'SHUTTER_SPEED_CHARA_UUID'
      );
      return data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  async getTakePicture() {
    try {
      const data = await this.execRead(
        'SHOOTING_CONTROL_COMMAND',
        'TAKE_PICTURE_CHARA_UUID'
      );
      return data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  async setTakePicture(val) {
    try {
      const data = await this.execWrite(
        'SHOOTING_CONTROL_COMMAND',
        'TAKE_PICTURE_CHARA_UUID',
        [val]
      );
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getWhiteBalance() {
    try {
      const data = await this.execRead(
        'SHOOTING_CONTROL_COMMAND',
        'WHITE_BALANCE_CHARA_UUID'
      );
      return data[0];
    } catch (error) {
      throw new Error(error);
    }
  }
  async setWhiteBalance(val) {
    try {
      const data = await this.execWrite(
        'SHOOTING_CONTROL_COMMAND',
        'WHITE_BALANCE_CHARA_UUID',
        [val]
      );
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getGpsInformation() {
    try {
      const data = await this.execRead(
        'GPS_CONTROL_COMMAND',
        'GPS_INFORMATION_CHARA_UUID'
      );
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
export default new BleCtrl;
