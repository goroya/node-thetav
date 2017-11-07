import axios from 'axios';

const httpApiTable ={
  OSC_INFO: {
    method: 'get',
    url: '/osc/info',
    params: {},
  },
  OSC_STATE: {
    method: 'post',
    url: '/osc/state',
    data: {},
  },
  OSC_CHECK_FOR_UPDATE: {
    method: 'post',
    url: '/osc/checkForUpdates',
    data: {
      stateFingerprint: '',
    },
  },
  COMMANDS_EXECUTE: {
    method: 'post',
    url: '/osc/commands/execute',
    data: {
      name: '',
      parameters: {},
    },
  },
  COMMANDS_STATUS: {
    method: 'post',
    url: '/osc/commands/status',
    data: {
      id: '',
    },
  },
  LICENCE: {
    method: 'get',
    url: '/legal-information/open-source-licenses',
    params: {},
  },
};

const CmdTable = {
  FINISH_WLAN:           'camera._finishWlan',
  TAKE_PICTURE:          'camera.takePicture',
  START_CAPTURE:         'camera.startCapture',
  STOP_CAPTURE:          'camera.stopCapture',
  LIST_FILES:            'camera.listFiles',
  DELETE:                'camera.delete',
  GET_LIVE_PREVIEW:      'camera.getLivePreview',
  GET_OPTIONS:           'camera.getOptions',
  RESET:                 'camera.reset',
  SET_OPTIONS:           'camera.setOptions',
  GET_MY_SETTING:        'camera._getMySetting',
  SET_MY_SETTING:        'camera._setMySetting',
  STOP_SELF_TIMER:       'camera._stopSelfTimer',
  CONVERT_VIDEO_FORMATS: 'camera._convertVideoFormats',
  SET_BLUETOOTH_DEVICE:  'camera._setBluetoothDevice',
};
const CmdArgTable = {
  [CmdTable.FINISH_WLAN]: {},
  [CmdTable.TAKE_PICTURE]: {},
  [CmdTable.START_CAPTURE]: {
    _mode: '',
  },
  [CmdTable.STOP_CAPTURE]: {},
  [CmdTable.LIST_FILES]: {
    fileType: '',
    entryCount: 0,
    maxThumbSize: 640,
  },
  [CmdTable.DELETE]: {
    fileUrls: '',
  },
  [CmdTable.GET_LIVE_PREVIEW]: {},
  [CmdTable.GET_OPTIONS]: {
    optionNames: {},
  },
  [CmdTable.RESET]: {},
  [CmdTable.SET_OPTIONS]: {
    options: {},
  },
  [CmdTable.GET_MY_SETTING]: {
    optionNames: {},
  },
  [CmdTable.SET_MY_SETTING]: {
    options: {},
  },
  [CmdTable.STOP_SELF_TIMER]: {},
  [CmdTable.CONVERT_VIDEO_FORMATS]: {
    fileUrl: '',
    size: '',
    projectionType: '',
    codec: '',
    topBottomCorrection: '',
  },
  [CmdTable.SET_BLUETOOTH_DEVICE]: {
    uuid: '',
  },
};

const optionTable = {
  aperture: '',
  _autoBracket: '',
  captureInterval: '',
  captureMode: '',
  captureNumber: '',
  clientVersion: '',
  _colorTemperature: '',
  _compositeShootingOutputInterval: '',
  _compositeShootingTime: '',
  dateTimeZone: '',
  exposureCompensation: '',
  exposureDelay: '',
  exposureProgram: '',
  fileFormat: '',
  _filter: '',
  gpsInfo: '',
  _HDMIreso: '',
  iso: '',
  _latestEnabledExposureDelayTime: '',
  offDelay: '',
  previewFormat: '',
  remainingPictures: '',
  remainingSpace: '',
  remainingVideoSeconds: '',
  shutterSpeed: '',
  _shutterVolume: '',
  sleepDelay: '',
  totalSpace: '',
  whiteBalance: '',
  _wlanChannel: '',
};

axios.defaults.baseURL = 'http://192.168.1.1';
axios.defaults.timeout = 3000;

class HttpCtrl {
  static oscInfo() {
    return axios(httpApiTable.OSC_INFO);
  }
  static oscState() {
    return axios(httpApiTable.OSC_STATE);
  }
  static oscCheckForUpdate(stateFingerprint) {
    const param = {
      ...httpApiTable.OSC_CHECK_FOR_UPDATE,
      data: {
        stateFingerprint,
      },
    };
    return axios(param);
  }
  static commandsExecute(name, parameters) {
    const param = {
      ...httpApiTable.COMMANDS_EXECUTE,
      data: {
        name,
        parameters,
      },
    };
    return axios(param);
  }
  static commandsStatus(id) {
    const param = {
      ...httpApiTable.COMMANDS_STATUS,
      data: {
        id,
      },
    };
    return axios(param);
  }
  static Licence() {
    return axios(httpApiTable.LICENCE);
  }

  static cameraFinishWlan() {
    return HttpCtrl.commandsExecute(
      CmdTable.FINISH_WLAN,
      CmdArgTable[CmdTable.FINISH_WLAN],
    );
  }
  static cameraTakePicture() {
    return HttpCtrl.commandsExecute(
      CmdTable.TAKE_PICTURE,
      CmdArgTable[CmdTable.TAKE_PICTURE],
    );
  }
  static cameraStartCapture(_mode) {
    return HttpCtrl.commandsExecute(
      CmdTable.START_CAPTURE,
      {...CmdArgTable[CmdTable.START_CAPTURE], _mode},
    );
  }
  static cameraStopCapture() {
    return HttpCtrl.commandsExecute(
      CmdTable.STOP_CAPTURE,
      CmdArgTable[CmdTable.STOP_CAPTURE],
    );
  }
  static cameraListFiles(
    fileType = 'all',
    entryCount = 1024,
    maxThumbSize = 640,
    options = {}
  ) {
    return HttpCtrl.commandsExecute(
      CmdTable.LIST_FILES,
      {
        ...CmdArgTable[CmdTable.LIST_FILES],
        fileType,
        entryCount,
        maxThumbSize,
        ...options,
      },
    );
  }
  static cameraDelete(fileUrls) {
    return HttpCtrl.commandsExecute(
      CmdTable.DELETE,
      {...CmdArgTable[CmdTable.DELETE], fileUrls},
    );
  }
  static cameraGetLivePreview() {
    return HttpCtrl.commandsExecute(
      CmdTable.GET_LIVE_PREVIEW,
      CmdArgTable[CmdTable.GET_LIVE_PREVIEW],
    );
  }
  static cameraGetOptions(optionNames) {
    return HttpCtrl.commandsExecute(
      CmdTable.GET_OPTIONS,
      {...CmdArgTable[CmdTable.GET_OPTIONS], optionNames},
    );
  }
  static cameraReset() {
    return HttpCtrl.commandsExecute(
      CmdTable.RESET,
      CmdArgTable[CmdTable.RESET],
    );
  }
  static cameraSetOptions(options) {
    return HttpCtrl.commandsExecute(
      CmdTable.SET_OPTIONS,
      {...CmdArgTable[CmdTable.SET_OPTIONS], options},
    );
  }
  static cameraGetMySetting(optionNames) {
    return HttpCtrl.commandsExecute(
      CmdTable.GET_MY_SETTING,
      {...CmdArgTable[CmdTable.GET_MY_SETTING], optionNames},
    );
  }
  static cameraSetMySetting(options) {
    return HttpCtrl.commandsExecute(
      CmdTable.SET_MY_SETTING,
      {...CmdArgTable[CmdTable.SET_MY_SETTING], options},
    );
  }
  static cameraStopSelfTimer(options) {
    return HttpCtrl.commandsExecute(
      CmdTable.STOP_SELF_TIMER,
      CmdArgTable[CmdTable.STOP_SELF_TIMER],
    );
  }
  static cameraConvertVideoFormats(
    fileUrl = '', size = '3840x1920', projectionType = 'Equirectangular',
    codec = 'H.264/MPEG-4 AVC', topBottomCorrection = 'Apply'
  ) {
    return HttpCtrl.commandsExecute(
      CmdTable.CONVERT_VIDEO_FORMATS,
      {...CmdArgTable[CmdTable.CONVERT_VIDEO_FORMATS], options},
    );
  }
  static cameraSetBluetoothDevice(uuid) {
    return HttpCtrl.commandsExecute(
      CmdTable.SET_BLUETOOTH_DEVICE,
      {...CmdArgTable[CmdTable.SET_BLUETOOTH_DEVICE], uuid},
    );
  }
}
export default HttpCtrl;
