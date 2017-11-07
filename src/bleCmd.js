const bleServiceTable ={
  CAMERA_INFORMATION: {
    uuid: '9a5ed1c574cc4c50b5b666a48e7ccff1',
    charaTable: {
      MANUFACTURER_NAME_STRING_CHARA_UUID:  'f5666a486a7440aea8173c9b3efb59a6',
      MODEL_NUMBER_STRING_CHARA_UUID:       '35fe62726aa544d988e1f09427f51a71',
      SERIAL_NUMBER_STRING_CHARA_UUID:      '0d2fc4d55cb34cdeb519445e599957d8',
      FIRMWARE_REVISION_STRING_CHARA_UUID:  'b4eb8905741140a6a3672834c2157ea7',
      MAC_ADDRESS_CHARA_UUID:               '97e34da22e1a405bb80df8f0aa9cc51c',
    },
  },
  CAMERA_STATUS_COMMAND: {
    uuid: '8af982b1f1ff4d4983f0a56db4c431a7',
    charaTable: {
      CAMERA_POWER_CHARA_UUID:              'b58ce84c06664de9bec82d27b27b3211',
      BATTERY_LEVEL_CHARA_UUID:             '875fc41d4980434ca653fd4a4d4410c4',
      BATTERY_STATUS_CHARA_UUID:            '5429b6a066d6491bb906902737d5442f',
      COMMAND_ERROR_DESCRIPTION_CHARA_UUID: '4b03d05e02d2412ba20b578ae82b9c01',
      BOOT_EXTENDED_APPLICATION_CHARA_UUID: 'a88732d5678643129364b9a4514dc123',
    },
  },
  CAMERA_CONTROL_COMMAND: {
    uuid: '32886d39ba23425cbcae9c1db0066922',
    charaTable: {
      DATE_TIME_ZONE_CHARA_UUID:            '5d485ac4ff0840c9b9208fc20196e40c',
      SLEEP_DELAY_CHARA_UUID:               '9938c6738d8f4850a2e2a5b043887ddb',
      OFF_DELAY_CHARA_UUID:                 '29be3f95f2fe4be9865575eca7b89682',
      VOLUME_CHARA_UUID:                    '7a929cfa8159424b8ebb2cf0db39068c',
      APPLICATION_LIST_CHARA_UUID:          'e83264b2c52d454e95bd6485de912430',
      SELECTED_APPLICATION_CHARA_UUID:      'fb9715571c4844eeb3c4880212c87a84',
      APPLICATION_INFORMATION_CHARA_UUID:   'e7ffad4080494028afc0fdd8de8f67de',
      APPLICATION_STATUS_CHARA_UUID:        '445c117f9ef74e3c8db70f3c2427a125',
      LANGUAGE_CHARA_UUID:                  'd003fc11e7e649cb8147bfb771302fe5',
    },
  },
  SHOOTING_STATUS_COMMAND: {
    uuid: '9ad04fdfe62b43e485937631fcd29874',
    charaTable: {
      RECORDED_TIME_CHARA_UUID:            '626d6cd030364ac2902db65e95543f79',
      RECORDABLE_TIME_CHARA_UUID:          'd7e2196a4b9b4ad2bb768a714fcc7047',
      REMAINING_PICTURES_CHARA_UUID:       '10a3781b18b647f983dc6785022dbc8e',
      REMAINING_VIDEO_SECONDS_CHARA_UUID:  '275b4b77ea0f4b58bb8ed33d5b2d8992',
      CAPTURED_PICTURES_CHARA_UUID:        '8c5a0bfddd3341bbbe8267f88040c231',
      CAMERA_ERROR_CHARA_UUID:             'c9434c4a37de44d2acaf19cc3e8e34e5',
    },
  },
  SHOOTING_CONTROL_COMMAND: {
    uuid: '1d0f36028dfb43409045513040dad991',
    charaTable: {
      TAKE_PICTURE_CHARA_UUID:             'fec1805c89054477b862ba5e447528a5',
      CONTINUOUS_SHOOTING_CHARA_UUID:      'e33b80dc4661458fb873ac5270f8ab5c',
      COUNTDOWN_STATUS_CHARA_UUID:         'f399c66a1d8e49bf942094ac17d8c20b',
      CAPTURE_MODE_CHARA_UUID:             '78009238ac3d43709b6fc9ce2f4e3ca8',
      EXPOSURE_PROGRAM_CHARA_UUID:         '9630282737d94719a2e39234c4f34292',
      ISO_CHARA_UUID:                      'abb94d51189f455b951dabe9b0333080',
      SHUTTER_SPEED_CHARA_UUID:            'd3ce2aed10fa4648833dcd74c6f35905',
      WHITE_BALANCE_CHARA_UUID:            '2361f4ff2c7e4fc5876bf9b0efbc06fd',
      EXPOSURE_COMPENSATION_CHARA_UUID:    '30bcc8eb725d4048a832e76ae26a57e9',
      FILE_FORMAT_CHARA_UUID:              'e8f0edd16c0f494a95c33244ae0b9a01',
      MAX_RECORDABLE_TIME_CHARA_UUID:      '6eabab737f2b4061be7c1d71d143cb7d',
      EXPOSURE_DELAY_CHARA_UUID:           'd22b7c92556e4038a5efa9ad56899b40',
      CAPTURE_INTERVAL_CHARA_UUID:         '47f4047f55d34b77b12027a89f00c15d',
      CAPTURE_NUMBER_CHARA_UUID:           '41bbde51e1124652b3d6e8233732c3e6',
      FILTER_CHARA_UUID:                   '246231f9176b48f2a675b946d6a46999',
      AUTO_BRACKET_CHARA_UUID:             '0387f5a326f54a67b3c7a78bbf17dff7',
      COLOR_TEMPERATURE_CHARA_UUID:        '6c3f1c61249a4d9aace85f0e4fc77581',
      MICROPHONE_CHANNEL_CHARA_UUID:       '926c1871e56b4c249d4bbd89e10c25a2',
      MICROPHONE_CHARA_UUID:               '4a4b485b3bfa40a08daf5e1b68bb64da',
      GAIN_CHARA_UUID:                     '1a0de4a8d3224ea48cb85c7b8b2133f6',
      SHOT_OPTIONS_CHARA_UUID:             '25ee117301964da0ad4e474d7e704e01',
    },
  },
  GPS_CONTROL_COMMAND: {
    uuid: '84a0dd62e8aa4d0f91db819b6724c69e',
    charaTable: {
      GPS_INFORMATION_CHARA_UUID:          '97b06384e7044907a5d122349d12ee6b',
    },
  },
  WLAN_CONTROL_COMMAND: {
    uuid: 'f37f568f9071445da9385441f2e82399',
    charaTable: {
      NETWORK_TYPE_CHARA_UUID:             '9111cdd09f0145c4a2d4e09e8fb0424d',
      ACCESS_POINT_LIST_CHARA_UUID:        '84127a8ae56a40c1945833e70057512e',
      SELECTED_ACCESS_POINT_CHARA_UUID:    'aafbac036a974980a391ee536e7102eb',
      ACCESS_POINT_INFORMATION_CHARA_UUID: '474478b83a864dabaf4ef0e2c69afa33',
      ACCESS_POINT_PASSWORD_CHARA_UUID:    'acc41a32f5654ebab7bc33fedf75d5c3',
      DELETE_ACCESS_POINT_CHARA_UUID:      'ac844a43ec094a108c0d27a9681c57fb',
      SSID_CHARA_UUID:                     '90638e5ae77d409db55078f7e1ca5ab4',
      PASSPHRASE_CHARA_UUID:               '0f38279cfe9e461b859681287e8c9a81',
      WLAN_FREQUENCY_CHARA_UUID:           'c4b7dfc080fd4223b132b7d25a59cf85',
      USERNAME_CHARA_UUID:                 '25a4b8f4ac4140c18b7a3b7307d90e51',
      PASSWORD_CHARA_UUID:                 '73587e637848426882b01e37c768cbdc',
    },
  },
  BLUETOOTH_CONTROL_COMMAND: {
    uuid: '0f2917460c80472687a73c501fd3b4b6',
    charaTable: {
      AUTH_BLUETOOTH_DEVICE_CHARA_UUID:    'ebafb2f00e0f40a2a84fe2f098dc13c3',
      BLUETOOTH_POWER_STATUS_CHARA_UUID:   '1fbcbbfe063d411ca1bd67d758e804ed',
    },
  },
};

class BleCmd {
  static get CMD() {
    return bleServiceTable;
  }
  static getService(serviceName) {
    const service = bleServiceTable[serviceName];
    if (!!service === false) {
      return null;
    }
    return service;
  }
  static getServiceUUID(serviceName) {
    const service = BleCmd.getService(serviceName);
    return !!service ? service.uuid : null;
  }
  static getCharacteristicUUID(serviceName, charaName) {
    const service = BleCmd.getService(serviceName);
    if (!!service === false) {
      return null;
    }
    const chara = service.charaTable[charaName];
    if (!!chara === false) {
      return null;
    }
    return chara;
  }
}
export default BleCmd;

