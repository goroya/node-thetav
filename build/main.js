require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bleCtrl__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpCtrl__ = __webpack_require__(8);



/* harmony default export */ __webpack_exports__["default"] = ({
  ble: __WEBPACK_IMPORTED_MODULE_0__bleCtrl__["a" /* default */],
  http: __WEBPACK_IMPORTED_MODULE_1__httpCtrl__["a" /* default */]
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_noble__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_noble___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_noble__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_events__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bleCmd__ = __webpack_require__(7);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var BleCtrl = function (_EventEmitter) {
  _inherits(BleCtrl, _EventEmitter);

  function BleCtrl(height, width) {
    _classCallCheck(this, BleCtrl);

    var _this = _possibleConstructorReturn(this, (BleCtrl.__proto__ || Object.getPrototypeOf(BleCtrl)).call(this));

    _this.bleObj = {};
    _this.initFlag = {};
    for (var key in __WEBPACK_IMPORTED_MODULE_3__bleCmd__["a" /* default */].CMD) {
      if ({}.hasOwnProperty.call(__WEBPACK_IMPORTED_MODULE_3__bleCmd__["a" /* default */].CMD, key)) {
        _this.initFlag[__WEBPACK_IMPORTED_MODULE_3__bleCmd__["a" /* default */].CMD[key].uuid] = false;
      }
    }
    return _this;
  }

  _createClass(BleCtrl, [{
    key: '_checkInitEnd',
    value: function _checkInitEnd() {
      var result = true;
      for (var key in this.initFlag) {
        if (this.initFlag[key] !== true) {
          result = false;
          break;
        }
      }
      return result;
    }
  }, {
    key: 'init',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _this2 = this;

        var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10000;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', new Promise(function (resolve, reject) {
                  var timer = setTimeout(function () {
                    reject('Timeout');
                  }, timeout);
                  __WEBPACK_IMPORTED_MODULE_1_noble___default.a.on('stateChange', function (state) {
                    if (state === 'poweredOn') {
                      __WEBPACK_IMPORTED_MODULE_1_noble___default.a.startScanning();
                      _this2.emit('startScanning');
                    } else {
                      __WEBPACK_IMPORTED_MODULE_1_noble___default.a.stopScanning();
                      _this2.emit('stopScanning');
                    }
                  });
                  __WEBPACK_IMPORTED_MODULE_1_noble___default.a.on('discover', function (peripheral) {
                    peripheral.connect(function (error) {
                      if (error) {
                        console.error(error);
                        return;
                      }
                      peripheral.discoverServices([], function (error, services) {
                        for (var i in services) {
                          if ({}.hasOwnProperty.call(services, i)) {
                            (function () {
                              _this2.bleObj[services[i].uuid] = {};
                              var deviceInformationService = services[i];
                              deviceInformationService.discoverCharacteristics(null, function (error, characteristics) {
                                for (var chara in characteristics) {
                                  if ({}.hasOwnProperty.call(characteristics, chara)) {
                                    var charInstance = characteristics[chara];
                                    var serviceUuid = charInstance._serviceUuid;
                                    var charUuid = charInstance.uuid;
                                    _this2.bleObj[serviceUuid][charUuid] = charInstance;
                                  }
                                }
                                _this2.initFlag[deviceInformationService.uuid] = true;
                                if (_this2._checkInitEnd() === true) {
                                  resolve(true);
                                  clearTimeout(timer);
                                }
                              });
                            })();
                          }
                        }
                      });
                    });
                  });
                }));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _ref.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: 'getChara',
    value: function getChara(serviceName, charaName) {
      var serviceUuid = __WEBPACK_IMPORTED_MODULE_3__bleCmd__["a" /* default */].getServiceUUID(serviceName);
      var charaUuid = __WEBPACK_IMPORTED_MODULE_3__bleCmd__["a" /* default */].getCharacteristicUUID(serviceName, charaName);
      if (!serviceUuid || !charaUuid) {
        return null;
      }
      var chara = this.bleObj[serviceUuid][charaUuid];

      return chara;
    }
  }, {
    key: 'execRead',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(serviceName, charaName) {
        var _this3 = this;

        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', new Promise(function (resolve, reject) {
                  var chara = _this3.getChara(serviceName, charaName);
                  if (!!chara === false) {
                    reject('chara error');
                  }
                  chara.read(function (error, data) {
                    if (error) {
                      reject(error);
                    }
                    var utf8Data = new Uint8Array(data);
                    var arrayData = Array.from(utf8Data);
                    resolve(arrayData);
                  });
                }));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function execRead(_x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return execRead;
    }()
  }, {
    key: 'execWrite',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(serviceName, charaName, data) {
        var _this4 = this;

        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt('return', new Promise(function (resolve, reject) {
                  var chara = _this4.getChara(serviceName, charaName);
                  if (!!chara === false) {
                    reject('chara error');
                  }
                  chara.write(new Buffer(data), true, function (error) {
                    if (error) {
                      reject(error);
                    }
                    resolve();
                  });
                }));

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function execWrite(_x4, _x5, _x6) {
        return _ref3.apply(this, arguments);
      }

      return execWrite;
    }()
    // MANUFACTURER_NAME

  }, {
    key: 'getManufacturerName',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.execRead('CAMERA_INFORMATION', 'MANUFACTURER_NAME_STRING_CHARA_UUID');

              case 3:
                data = _context4.sent;
                return _context4.abrupt('return', String.fromCharCode.apply(String, _toConsumableArray(data)));

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4['catch'](0);
                throw new Error(_context4.t0);

              case 10:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      function getManufacturerName() {
        return _ref4.apply(this, arguments);
      }

      return getManufacturerName;
    }()
    // MODEL_NUMBER

  }, {
    key: 'getModelNumberString',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.execRead('CAMERA_INFORMATION', 'MODEL_NUMBER_STRING_CHARA_UUID');

              case 3:
                data = _context5.sent;
                return _context5.abrupt('return', String.fromCharCode.apply(String, _toConsumableArray(data)));

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5['catch'](0);
                throw new Error(_context5.t0);

              case 10:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 7]]);
      }));

      function getModelNumberString() {
        return _ref5.apply(this, arguments);
      }

      return getModelNumberString;
    }()
    // SERIAL_NUMBER

  }, {
    key: 'getSerialNumberString',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return this.execRead('CAMERA_INFORMATION', 'SERIAL_NUMBER_STRING_CHARA_UUID');

              case 3:
                data = _context6.sent;
                return _context6.abrupt('return', String.fromCharCode.apply(String, _toConsumableArray(data)));

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6['catch'](0);
                throw new Error(_context6.t0);

              case 10:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 7]]);
      }));

      function getSerialNumberString() {
        return _ref6.apply(this, arguments);
      }

      return getSerialNumberString;
    }()
    // FIRMWARE_REVISION

  }, {
    key: 'getFirmwareRevisionString',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee7() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return this.execRead('CAMERA_INFORMATION', 'FIRMWARE_REVISION_STRING_CHARA_UUID');

              case 3:
                data = _context7.sent;
                return _context7.abrupt('return', String.fromCharCode.apply(String, _toConsumableArray(data)));

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7['catch'](0);
                throw new Error(_context7.t0);

              case 10:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 7]]);
      }));

      function getFirmwareRevisionString() {
        return _ref7.apply(this, arguments);
      }

      return getFirmwareRevisionString;
    }()
    // MAC_ADDRESS

  }, {
    key: 'getMacAddress',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee8() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return this.execRead('CAMERA_INFORMATION', 'MAC_ADDRESS_CHARA_UUID');

              case 3:
                data = _context8.sent;
                return _context8.abrupt('return', String.fromCharCode.apply(String, _toConsumableArray(data)));

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8['catch'](0);
                throw new Error(_context8.t0);

              case 10:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 7]]);
      }));

      function getMacAddress() {
        return _ref8.apply(this, arguments);
      }

      return getMacAddress;
    }()

    // CAMERA_STATUS_COMMAND
    //  CAMERA_POWER_CHARA_UUID

  }, {
    key: 'getCameraPower',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee9() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return this.execRead('CAMERA_STATUS_COMMAND', 'CAMERA_POWER_CHARA_UUID');

              case 3:
                data = _context9.sent;
                return _context9.abrupt('return', data[0]);

              case 7:
                _context9.prev = 7;
                _context9.t0 = _context9['catch'](0);
                throw new Error(_context9.t0);

              case 10:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 7]]);
      }));

      function getCameraPower() {
        return _ref9.apply(this, arguments);
      }

      return getCameraPower;
    }()
    //  BATTERY_LEVEL_CHARA_UUID

  }, {
    key: 'getBatteryLevel',
    value: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee10() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return this.execRead('CAMERA_STATUS_COMMAND', 'BATTERY_LEVEL_CHARA_UUID');

              case 3:
                data = _context10.sent;
                return _context10.abrupt('return', data[0]);

              case 7:
                _context10.prev = 7;
                _context10.t0 = _context10['catch'](0);
                throw new Error(_context10.t0);

              case 10:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this, [[0, 7]]);
      }));

      function getBatteryLevel() {
        return _ref10.apply(this, arguments);
      }

      return getBatteryLevel;
    }()
    //  BATTERY_STATUS_CHARA_UUID

  }, {
    key: 'getBatteryStatus',
    value: function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee11() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return this.execRead('CAMERA_STATUS_COMMAND', 'BATTERY_STATUS_CHARA_UUID');

              case 3:
                data = _context11.sent;
                return _context11.abrupt('return', data[0]);

              case 7:
                _context11.prev = 7;
                _context11.t0 = _context11['catch'](0);
                throw new Error(_context11.t0);

              case 10:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this, [[0, 7]]);
      }));

      function getBatteryStatus() {
        return _ref11.apply(this, arguments);
      }

      return getBatteryStatus;
    }()
    //  COMMAND_ERROR_DESCRIPTION_CHARA_UUID

  }, {
    key: 'getCommandErrorDescription',
    value: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee12() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                _context12.next = 3;
                return this.execRead('CAMERA_STATUS_COMMAND', 'COMMAND_ERROR_DESCRIPTION_CHARA_UUID');

              case 3:
                data = _context12.sent;
                return _context12.abrupt('return', data[0]);

              case 7:
                _context12.prev = 7;
                _context12.t0 = _context12['catch'](0);
                throw new Error(_context12.t0);

              case 10:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 7]]);
      }));

      function getCommandErrorDescription() {
        return _ref12.apply(this, arguments);
      }

      return getCommandErrorDescription;
    }()
    //  BOOT_EXTENDED_APPLICATION_CHARA_UUID

  }, {
    key: 'getBootExtendedApplication',
    value: function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee13() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.prev = 0;
                _context13.next = 3;
                return this.execRead('CAMERA_STATUS_COMMAND', 'BOOT_EXTENDED_APPLICATION_CHARA_UUID');

              case 3:
                data = _context13.sent;
                return _context13.abrupt('return', data[0]);

              case 7:
                _context13.prev = 7;
                _context13.t0 = _context13['catch'](0);
                throw new Error(_context13.t0);

              case 10:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this, [[0, 7]]);
      }));

      function getBootExtendedApplication() {
        return _ref13.apply(this, arguments);
      }

      return getBootExtendedApplication;
    }()
    // WLAN_CONTROL_COMMAND
    //  NETWORK_TYPE_CHARA_UUID

  }, {
    key: 'getNetworkType',
    value: function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee14() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.prev = 0;
                _context14.next = 3;
                return this.execRead('WLAN_CONTROL_COMMAND', 'NETWORK_TYPE_CHARA_UUID');

              case 3:
                data = _context14.sent;
                return _context14.abrupt('return', data[0]);

              case 7:
                _context14.prev = 7;
                _context14.t0 = _context14['catch'](0);
                throw new Error(_context14.t0);

              case 10:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, this, [[0, 7]]);
      }));

      function getNetworkType() {
        return _ref14.apply(this, arguments);
      }

      return getNetworkType;
    }()
    //  ACCESS_POINT_LIST_CHARA_UUID

  }, {
    key: 'getAccessPowerList',
    value: function () {
      var _ref15 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee15() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.prev = 0;
                _context15.next = 3;
                return this.execRead('WLAN_CONTROL_COMMAND', 'ACCESS_POINT_LIST_CHARA_UUID');

              case 3:
                data = _context15.sent;
                return _context15.abrupt('return', data[0]);

              case 7:
                _context15.prev = 7;
                _context15.t0 = _context15['catch'](0);
                throw new Error(_context15.t0);

              case 10:
              case 'end':
                return _context15.stop();
            }
          }
        }, _callee15, this, [[0, 7]]);
      }));

      function getAccessPowerList() {
        return _ref15.apply(this, arguments);
      }

      return getAccessPowerList;
    }()
    //  SELECTED_ACCESS_POINT_CHARA_UUID

  }, {
    key: 'getSelectedAccessPoint',
    value: function () {
      var _ref16 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee16() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.prev = 0;
                _context16.next = 3;
                return this.execRead('WLAN_CONTROL_COMMAND', 'SELECTED_ACCESS_POINT_CHARA_UUID');

              case 3:
                data = _context16.sent;
                return _context16.abrupt('return', data[0]);

              case 7:
                _context16.prev = 7;
                _context16.t0 = _context16['catch'](0);
                throw new Error(_context16.t0);

              case 10:
              case 'end':
                return _context16.stop();
            }
          }
        }, _callee16, this, [[0, 7]]);
      }));

      function getSelectedAccessPoint() {
        return _ref16.apply(this, arguments);
      }

      return getSelectedAccessPoint;
    }()
    //  WLAN_FREQUENCY_CHARA_UUID

  }, {
    key: 'getWlanFrequency',
    value: function () {
      var _ref17 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee17() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.prev = 0;
                _context17.next = 3;
                return this.execRead('WLAN_CONTROL_COMMAND', 'WLAN_FREQUENCY_CHARA_UUID');

              case 3:
                data = _context17.sent;
                return _context17.abrupt('return', data[0]);

              case 7:
                _context17.prev = 7;
                _context17.t0 = _context17['catch'](0);
                throw new Error(_context17.t0);

              case 10:
              case 'end':
                return _context17.stop();
            }
          }
        }, _callee17, this, [[0, 7]]);
      }));

      function getWlanFrequency() {
        return _ref17.apply(this, arguments);
      }

      return getWlanFrequency;
    }()
    //  USERNAME_CHARA_UUID

  }, {
    key: 'getUsername',
    value: function () {
      var _ref18 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee18() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.prev = 0;
                _context18.next = 3;
                return this.execRead('WLAN_CONTROL_COMMAND', 'USERNAME_CHARA_UUID');

              case 3:
                data = _context18.sent;
                return _context18.abrupt('return', String.fromCharCode.apply(String, _toConsumableArray(data)));

              case 7:
                _context18.prev = 7;
                _context18.t0 = _context18['catch'](0);
                throw new Error(_context18.t0);

              case 10:
              case 'end':
                return _context18.stop();
            }
          }
        }, _callee18, this, [[0, 7]]);
      }));

      function getUsername() {
        return _ref18.apply(this, arguments);
      }

      return getUsername;
    }()
    //  PASSWORD_CHARA_UUID

  }, {
    key: 'getPassword',
    value: function () {
      var _ref19 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee19() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.prev = 0;
                _context19.next = 3;
                return this.execRead('WLAN_CONTROL_COMMAND', 'PASSWORD_CHARA_UUID');

              case 3:
                data = _context19.sent;
                return _context19.abrupt('return', String.fromCharCode.apply(String, _toConsumableArray(data)));

              case 7:
                _context19.prev = 7;
                _context19.t0 = _context19['catch'](0);
                throw new Error(_context19.t0);

              case 10:
              case 'end':
                return _context19.stop();
            }
          }
        }, _callee19, this, [[0, 7]]);
      }));

      function getPassword() {
        return _ref19.apply(this, arguments);
      }

      return getPassword;
    }()

    // BLUETOOTH_CONTROL_COMMAND
    //  AUTH_BLUETOOTH_DEVICE_CHARA_UUID

  }, {
    key: 'setAuthBluetoothDevice',
    value: function () {
      var _ref20 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee20(uuid) {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.prev = 0;
                _context20.next = 3;
                return this.execWrite('BLUETOOTH_CONTROL_COMMAND', 'AUTH_BLUETOOTH_DEVICE_CHARA_UUID', uuid);

              case 3:
                data = _context20.sent;
                return _context20.abrupt('return', data);

              case 7:
                _context20.prev = 7;
                _context20.t0 = _context20['catch'](0);
                throw new Error(_context20.t0);

              case 10:
              case 'end':
                return _context20.stop();
            }
          }
        }, _callee20, this, [[0, 7]]);
      }));

      function setAuthBluetoothDevice(_x7) {
        return _ref20.apply(this, arguments);
      }

      return setAuthBluetoothDevice;
    }()
    //  BLUETOOTH_POWER_STATUS_CHARA_UUID

  }, {
    key: 'getBluetoothPowerStatus',
    value: function () {
      var _ref21 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee21() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.prev = 0;
                _context21.next = 3;
                return this.execRead('BLUETOOTH_CONTROL_COMMAND', 'BLUETOOTH_POWER_STATUS_CHARA_UUID');

              case 3:
                data = _context21.sent;
                return _context21.abrupt('return', data[0]);

              case 7:
                _context21.prev = 7;
                _context21.t0 = _context21['catch'](0);
                throw new Error(_context21.t0);

              case 10:
              case 'end':
                return _context21.stop();
            }
          }
        }, _callee21, this, [[0, 7]]);
      }));

      function getBluetoothPowerStatus() {
        return _ref21.apply(this, arguments);
      }

      return getBluetoothPowerStatus;
    }()
  }, {
    key: 'getDateTimeZone',
    value: function () {
      var _ref22 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee22() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.prev = 0;
                _context22.next = 3;
                return this.execRead('CAMERA_CONTROL_COMMAND', 'DATE_TIME_ZONE_CHARA_UUID');

              case 3:
                data = _context22.sent;
                return _context22.abrupt('return', {
                  Year: data[1] << 8 | data[0],
                  Month: data[2],
                  Day: data[3],
                  Hours: data[4],
                  Minutes: data[5],
                  Seconds: data[6],
                  TimeZone: String.fromCharCode(data[7], data[8], data[9], data[10], data[11], data[12])
                });

              case 7:
                _context22.prev = 7;
                _context22.t0 = _context22['catch'](0);
                throw new Error(_context22.t0);

              case 10:
              case 'end':
                return _context22.stop();
            }
          }
        }, _callee22, this, [[0, 7]]);
      }));

      function getDateTimeZone() {
        return _ref22.apply(this, arguments);
      }

      return getDateTimeZone;
    }()
  }, {
    key: 'getVolume',
    value: function () {
      var _ref23 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee23() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.prev = 0;
                _context23.next = 3;
                return this.execRead('CAMERA_CONTROL_COMMAND', 'VOLUME_CHARA_UUID');

              case 3:
                data = _context23.sent;
                return _context23.abrupt('return', data[0]);

              case 7:
                _context23.prev = 7;
                _context23.t0 = _context23['catch'](0);
                throw new Error(_context23.t0);

              case 10:
              case 'end':
                return _context23.stop();
            }
          }
        }, _callee23, this, [[0, 7]]);
      }));

      function getVolume() {
        return _ref23.apply(this, arguments);
      }

      return getVolume;
    }()
  }, {
    key: 'getRecordableTime',
    value: function () {
      var _ref24 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee24() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.prev = 0;
                _context24.next = 3;
                return this.execRead('SHOOTING_STATUS_COMMAND', 'RECORDABLE_TIME_CHARA_UUID');

              case 3:
                data = _context24.sent;
                return _context24.abrupt('return', data[1] << 8 | data[0]);

              case 7:
                _context24.prev = 7;
                _context24.t0 = _context24['catch'](0);
                throw new Error(_context24.t0);

              case 10:
              case 'end':
                return _context24.stop();
            }
          }
        }, _callee24, this, [[0, 7]]);
      }));

      function getRecordableTime() {
        return _ref24.apply(this, arguments);
      }

      return getRecordableTime;
    }()
  }, {
    key: 'getRecordedTime',
    value: function () {
      var _ref25 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee25() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.prev = 0;
                _context25.next = 3;
                return this.execRead('SHOOTING_STATUS_COMMAND', 'RECORDED_TIME_CHARA_UUID');

              case 3:
                data = _context25.sent;
                return _context25.abrupt('return', data[1] << 8 | data[0]);

              case 7:
                _context25.prev = 7;
                _context25.t0 = _context25['catch'](0);
                throw new Error(_context25.t0);

              case 10:
              case 'end':
                return _context25.stop();
            }
          }
        }, _callee25, this, [[0, 7]]);
      }));

      function getRecordedTime() {
        return _ref25.apply(this, arguments);
      }

      return getRecordedTime;
    }()
  }, {
    key: 'getRemainingPictures',
    value: function () {
      var _ref26 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee26() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.prev = 0;
                _context26.next = 3;
                return this.execRead('SHOOTING_STATUS_COMMAND', 'REMAINING_PICTURES_CHARA_UUID');

              case 3:
                data = _context26.sent;
                return _context26.abrupt('return', data[1] << 8 | data[0]);

              case 7:
                _context26.prev = 7;
                _context26.t0 = _context26['catch'](0);
                throw new Error(_context26.t0);

              case 10:
              case 'end':
                return _context26.stop();
            }
          }
        }, _callee26, this, [[0, 7]]);
      }));

      function getRemainingPictures() {
        return _ref26.apply(this, arguments);
      }

      return getRemainingPictures;
    }()
  }, {
    key: 'getRemainingVideoSeconds',
    value: function () {
      var _ref27 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee27() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _context27.prev = 0;
                _context27.next = 3;
                return this.execRead('SHOOTING_STATUS_COMMAND', 'REMAINING_VIDEO_SECONDS_CHARA_UUID');

              case 3:
                data = _context27.sent;
                return _context27.abrupt('return', data[1] << 8 | data[0]);

              case 7:
                _context27.prev = 7;
                _context27.t0 = _context27['catch'](0);
                throw new Error(_context27.t0);

              case 10:
              case 'end':
                return _context27.stop();
            }
          }
        }, _callee27, this, [[0, 7]]);
      }));

      function getRemainingVideoSeconds() {
        return _ref27.apply(this, arguments);
      }

      return getRemainingVideoSeconds;
    }()
  }, {
    key: 'setRemainingPictures',
    value: function () {
      var _ref28 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee28(iso, shutterSpeed, colorTemperature) {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.prev = 0;
                _context28.next = 3;
                return this.execWrite('SHOOTING_CONTROL_COMMAND', 'AUTO_BRACKET_CHARA_UUID', []);

              case 3:
                data = _context28.sent;
                return _context28.abrupt('return', data[1] << 8 | data[0]);

              case 7:
                _context28.prev = 7;
                _context28.t0 = _context28['catch'](0);
                throw new Error(_context28.t0);

              case 10:
              case 'end':
                return _context28.stop();
            }
          }
        }, _callee28, this, [[0, 7]]);
      }));

      function setRemainingPictures(_x8, _x9, _x10) {
        return _ref28.apply(this, arguments);
      }

      return setRemainingPictures;
    }()
  }, {
    key: 'getCaptureInterval',
    value: function () {
      var _ref29 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee29() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.prev = 0;
                _context29.next = 3;
                return this.execRead('SHOOTING_CONTROL_COMMAND', 'CAPTURE_INTERVAL_CHARA_UUID');

              case 3:
                data = _context29.sent;
                return _context29.abrupt('return', data[1] << 8 | data[0]);

              case 7:
                _context29.prev = 7;
                _context29.t0 = _context29['catch'](0);
                throw new Error(_context29.t0);

              case 10:
              case 'end':
                return _context29.stop();
            }
          }
        }, _callee29, this, [[0, 7]]);
      }));

      function getCaptureInterval() {
        return _ref29.apply(this, arguments);
      }

      return getCaptureInterval;
    }()
  }, {
    key: 'setCaptureInterval',
    value: function () {
      var _ref30 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee30(val) {
        var writeData, data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                _context30.prev = 0;
                writeData = BleCtrl.int2array(val);
                _context30.next = 4;
                return this.execWrite('SHOOTING_CONTROL_COMMAND', 'AUTO_BRACKET_CHARA_UUID', writeData);

              case 4:
                data = _context30.sent;
                return _context30.abrupt('return', data);

              case 8:
                _context30.prev = 8;
                _context30.t0 = _context30['catch'](0);
                throw new Error(_context30.t0);

              case 11:
              case 'end':
                return _context30.stop();
            }
          }
        }, _callee30, this, [[0, 8]]);
      }));

      function setCaptureInterval(_x11) {
        return _ref30.apply(this, arguments);
      }

      return setCaptureInterval;
    }()
    // ISO

  }, {
    key: 'setISO',
    value: function () {
      var _ref31 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee31(val) {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                _context31.prev = 0;
                _context31.next = 3;
                return this.execWrite('SHOOTING_CONTROL_COMMAND', 'ISO_CHARA_UUID', [val]);

              case 3:
                data = _context31.sent;
                return _context31.abrupt('return', data);

              case 7:
                _context31.prev = 7;
                _context31.t0 = _context31['catch'](0);
                throw new Error(_context31.t0);

              case 10:
              case 'end':
                return _context31.stop();
            }
          }
        }, _callee31, this, [[0, 7]]);
      }));

      function setISO(_x12) {
        return _ref31.apply(this, arguments);
      }

      return setISO;
    }()
  }, {
    key: 'getISO',
    value: function () {
      var _ref32 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee32() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                _context32.prev = 0;
                _context32.next = 3;
                return this.execRead('SHOOTING_CONTROL_COMMAND', 'ISO_CHARA_UUID');

              case 3:
                data = _context32.sent;
                return _context32.abrupt('return', data[0]);

              case 7:
                _context32.prev = 7;
                _context32.t0 = _context32['catch'](0);
                throw new Error(_context32.t0);

              case 10:
              case 'end':
                return _context32.stop();
            }
          }
        }, _callee32, this, [[0, 7]]);
      }));

      function getISO() {
        return _ref32.apply(this, arguments);
      }

      return getISO;
    }()
  }, {
    key: 'setShutterSpeed',
    value: function () {
      var _ref33 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee33(val) {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                _context33.prev = 0;
                _context33.next = 3;
                return this.execWrite('SHOOTING_CONTROL_COMMAND', 'SHUTTER_SPEED_CHARA_UUID', [val]);

              case 3:
                data = _context33.sent;
                return _context33.abrupt('return', data);

              case 7:
                _context33.prev = 7;
                _context33.t0 = _context33['catch'](0);
                throw new Error(_context33.t0);

              case 10:
              case 'end':
                return _context33.stop();
            }
          }
        }, _callee33, this, [[0, 7]]);
      }));

      function setShutterSpeed(_x13) {
        return _ref33.apply(this, arguments);
      }

      return setShutterSpeed;
    }()
  }, {
    key: 'getShutterSpeed',
    value: function () {
      var _ref34 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee34() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                _context34.prev = 0;
                _context34.next = 3;
                return this.execRead('SHOOTING_CONTROL_COMMAND', 'SHUTTER_SPEED_CHARA_UUID');

              case 3:
                data = _context34.sent;
                return _context34.abrupt('return', data[0]);

              case 7:
                _context34.prev = 7;
                _context34.t0 = _context34['catch'](0);
                throw new Error(_context34.t0);

              case 10:
              case 'end':
                return _context34.stop();
            }
          }
        }, _callee34, this, [[0, 7]]);
      }));

      function getShutterSpeed() {
        return _ref34.apply(this, arguments);
      }

      return getShutterSpeed;
    }()
  }, {
    key: 'getTakePicture',
    value: function () {
      var _ref35 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee35() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                _context35.prev = 0;
                _context35.next = 3;
                return this.execRead('SHOOTING_CONTROL_COMMAND', 'TAKE_PICTURE_CHARA_UUID');

              case 3:
                data = _context35.sent;
                return _context35.abrupt('return', data[0]);

              case 7:
                _context35.prev = 7;
                _context35.t0 = _context35['catch'](0);
                throw new Error(_context35.t0);

              case 10:
              case 'end':
                return _context35.stop();
            }
          }
        }, _callee35, this, [[0, 7]]);
      }));

      function getTakePicture() {
        return _ref35.apply(this, arguments);
      }

      return getTakePicture;
    }()
  }, {
    key: 'setTakePicture',
    value: function () {
      var _ref36 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee36(val) {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                _context36.prev = 0;
                _context36.next = 3;
                return this.execWrite('SHOOTING_CONTROL_COMMAND', 'TAKE_PICTURE_CHARA_UUID', [val]);

              case 3:
                data = _context36.sent;
                return _context36.abrupt('return', data);

              case 7:
                _context36.prev = 7;
                _context36.t0 = _context36['catch'](0);
                throw new Error(_context36.t0);

              case 10:
              case 'end':
                return _context36.stop();
            }
          }
        }, _callee36, this, [[0, 7]]);
      }));

      function setTakePicture(_x14) {
        return _ref36.apply(this, arguments);
      }

      return setTakePicture;
    }()
  }, {
    key: 'getWhiteBalance',
    value: function () {
      var _ref37 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee37() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                _context37.prev = 0;
                _context37.next = 3;
                return this.execRead('SHOOTING_CONTROL_COMMAND', 'WHITE_BALANCE_CHARA_UUID');

              case 3:
                data = _context37.sent;
                return _context37.abrupt('return', data[0]);

              case 7:
                _context37.prev = 7;
                _context37.t0 = _context37['catch'](0);
                throw new Error(_context37.t0);

              case 10:
              case 'end':
                return _context37.stop();
            }
          }
        }, _callee37, this, [[0, 7]]);
      }));

      function getWhiteBalance() {
        return _ref37.apply(this, arguments);
      }

      return getWhiteBalance;
    }()
  }, {
    key: 'setWhiteBalance',
    value: function () {
      var _ref38 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee38(val) {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                _context38.prev = 0;
                _context38.next = 3;
                return this.execWrite('SHOOTING_CONTROL_COMMAND', 'WHITE_BALANCE_CHARA_UUID', [val]);

              case 3:
                data = _context38.sent;
                return _context38.abrupt('return', data);

              case 7:
                _context38.prev = 7;
                _context38.t0 = _context38['catch'](0);
                throw new Error(_context38.t0);

              case 10:
              case 'end':
                return _context38.stop();
            }
          }
        }, _callee38, this, [[0, 7]]);
      }));

      function setWhiteBalance(_x15) {
        return _ref38.apply(this, arguments);
      }

      return setWhiteBalance;
    }()
  }, {
    key: 'getGpsInformation',
    value: function () {
      var _ref39 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.mark(function _callee39() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0__Users_fanta_RubymineProjects_node_thetav_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                _context39.prev = 0;
                _context39.next = 3;
                return this.execRead('GPS_CONTROL_COMMAND', 'GPS_INFORMATION_CHARA_UUID');

              case 3:
                data = _context39.sent;
                return _context39.abrupt('return', data);

              case 7:
                _context39.prev = 7;
                _context39.t0 = _context39['catch'](0);
                throw new Error(_context39.t0);

              case 10:
              case 'end':
                return _context39.stop();
            }
          }
        }, _callee39, this, [[0, 7]]);
      }));

      function getGpsInformation() {
        return _ref39.apply(this, arguments);
      }

      return getGpsInformation;
    }()
  }], [{
    key: 'int2array',
    value: function int2array(val) {
      return [val & 0xFF, val >> 8 & 0xFF];
    }
  }, {
    key: 'array2Int',
    value: function array2Int(val) {
      return val[1] << 8 | val[0];
    }
  }]);

  return BleCtrl;
}(__WEBPACK_IMPORTED_MODULE_2_events___default.a);

/* harmony default export */ __webpack_exports__["a"] = (new BleCtrl());

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("noble");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bleServiceTable = {
  CAMERA_INFORMATION: {
    uuid: '9a5ed1c574cc4c50b5b666a48e7ccff1',
    charaTable: {
      MANUFACTURER_NAME_STRING_CHARA_UUID: 'f5666a486a7440aea8173c9b3efb59a6',
      MODEL_NUMBER_STRING_CHARA_UUID: '35fe62726aa544d988e1f09427f51a71',
      SERIAL_NUMBER_STRING_CHARA_UUID: '0d2fc4d55cb34cdeb519445e599957d8',
      FIRMWARE_REVISION_STRING_CHARA_UUID: 'b4eb8905741140a6a3672834c2157ea7',
      MAC_ADDRESS_CHARA_UUID: '97e34da22e1a405bb80df8f0aa9cc51c'
    }
  },
  CAMERA_STATUS_COMMAND: {
    uuid: '8af982b1f1ff4d4983f0a56db4c431a7',
    charaTable: {
      CAMERA_POWER_CHARA_UUID: 'b58ce84c06664de9bec82d27b27b3211',
      BATTERY_LEVEL_CHARA_UUID: '875fc41d4980434ca653fd4a4d4410c4',
      BATTERY_STATUS_CHARA_UUID: '5429b6a066d6491bb906902737d5442f',
      COMMAND_ERROR_DESCRIPTION_CHARA_UUID: '4b03d05e02d2412ba20b578ae82b9c01',
      BOOT_EXTENDED_APPLICATION_CHARA_UUID: 'a88732d5678643129364b9a4514dc123'
    }
  },
  CAMERA_CONTROL_COMMAND: {
    uuid: '32886d39ba23425cbcae9c1db0066922',
    charaTable: {
      DATE_TIME_ZONE_CHARA_UUID: '5d485ac4ff0840c9b9208fc20196e40c',
      SLEEP_DELAY_CHARA_UUID: '9938c6738d8f4850a2e2a5b043887ddb',
      OFF_DELAY_CHARA_UUID: '29be3f95f2fe4be9865575eca7b89682',
      VOLUME_CHARA_UUID: '7a929cfa8159424b8ebb2cf0db39068c',
      APPLICATION_LIST_CHARA_UUID: 'e83264b2c52d454e95bd6485de912430',
      SELECTED_APPLICATION_CHARA_UUID: 'fb9715571c4844eeb3c4880212c87a84',
      APPLICATION_INFORMATION_CHARA_UUID: 'e7ffad4080494028afc0fdd8de8f67de',
      APPLICATION_STATUS_CHARA_UUID: '445c117f9ef74e3c8db70f3c2427a125',
      LANGUAGE_CHARA_UUID: 'd003fc11e7e649cb8147bfb771302fe5'
    }
  },
  SHOOTING_STATUS_COMMAND: {
    uuid: '9ad04fdfe62b43e485937631fcd29874',
    charaTable: {
      RECORDED_TIME_CHARA_UUID: '626d6cd030364ac2902db65e95543f79',
      RECORDABLE_TIME_CHARA_UUID: 'd7e2196a4b9b4ad2bb768a714fcc7047',
      REMAINING_PICTURES_CHARA_UUID: '10a3781b18b647f983dc6785022dbc8e',
      REMAINING_VIDEO_SECONDS_CHARA_UUID: '275b4b77ea0f4b58bb8ed33d5b2d8992',
      CAPTURED_PICTURES_CHARA_UUID: '8c5a0bfddd3341bbbe8267f88040c231',
      CAMERA_ERROR_CHARA_UUID: 'c9434c4a37de44d2acaf19cc3e8e34e5'
    }
  },
  SHOOTING_CONTROL_COMMAND: {
    uuid: '1d0f36028dfb43409045513040dad991',
    charaTable: {
      TAKE_PICTURE_CHARA_UUID: 'fec1805c89054477b862ba5e447528a5',
      CONTINUOUS_SHOOTING_CHARA_UUID: 'e33b80dc4661458fb873ac5270f8ab5c',
      COUNTDOWN_STATUS_CHARA_UUID: 'f399c66a1d8e49bf942094ac17d8c20b',
      CAPTURE_MODE_CHARA_UUID: '78009238ac3d43709b6fc9ce2f4e3ca8',
      EXPOSURE_PROGRAM_CHARA_UUID: '9630282737d94719a2e39234c4f34292',
      ISO_CHARA_UUID: 'abb94d51189f455b951dabe9b0333080',
      SHUTTER_SPEED_CHARA_UUID: 'd3ce2aed10fa4648833dcd74c6f35905',
      WHITE_BALANCE_CHARA_UUID: '2361f4ff2c7e4fc5876bf9b0efbc06fd',
      EXPOSURE_COMPENSATION_CHARA_UUID: '30bcc8eb725d4048a832e76ae26a57e9',
      FILE_FORMAT_CHARA_UUID: 'e8f0edd16c0f494a95c33244ae0b9a01',
      MAX_RECORDABLE_TIME_CHARA_UUID: '6eabab737f2b4061be7c1d71d143cb7d',
      EXPOSURE_DELAY_CHARA_UUID: 'd22b7c92556e4038a5efa9ad56899b40',
      CAPTURE_INTERVAL_CHARA_UUID: '47f4047f55d34b77b12027a89f00c15d',
      CAPTURE_NUMBER_CHARA_UUID: '41bbde51e1124652b3d6e8233732c3e6',
      FILTER_CHARA_UUID: '246231f9176b48f2a675b946d6a46999',
      AUTO_BRACKET_CHARA_UUID: '0387f5a326f54a67b3c7a78bbf17dff7',
      COLOR_TEMPERATURE_CHARA_UUID: '6c3f1c61249a4d9aace85f0e4fc77581',
      MICROPHONE_CHANNEL_CHARA_UUID: '926c1871e56b4c249d4bbd89e10c25a2',
      MICROPHONE_CHARA_UUID: '4a4b485b3bfa40a08daf5e1b68bb64da',
      GAIN_CHARA_UUID: '1a0de4a8d3224ea48cb85c7b8b2133f6',
      SHOT_OPTIONS_CHARA_UUID: '25ee117301964da0ad4e474d7e704e01'
    }
  },
  GPS_CONTROL_COMMAND: {
    uuid: '84a0dd62e8aa4d0f91db819b6724c69e',
    charaTable: {
      GPS_INFORMATION_CHARA_UUID: '97b06384e7044907a5d122349d12ee6b'
    }
  },
  WLAN_CONTROL_COMMAND: {
    uuid: 'f37f568f9071445da9385441f2e82399',
    charaTable: {
      NETWORK_TYPE_CHARA_UUID: '9111cdd09f0145c4a2d4e09e8fb0424d',
      ACCESS_POINT_LIST_CHARA_UUID: '84127a8ae56a40c1945833e70057512e',
      SELECTED_ACCESS_POINT_CHARA_UUID: 'aafbac036a974980a391ee536e7102eb',
      ACCESS_POINT_INFORMATION_CHARA_UUID: '474478b83a864dabaf4ef0e2c69afa33',
      ACCESS_POINT_PASSWORD_CHARA_UUID: 'acc41a32f5654ebab7bc33fedf75d5c3',
      DELETE_ACCESS_POINT_CHARA_UUID: 'ac844a43ec094a108c0d27a9681c57fb',
      SSID_CHARA_UUID: '90638e5ae77d409db55078f7e1ca5ab4',
      PASSPHRASE_CHARA_UUID: '0f38279cfe9e461b859681287e8c9a81',
      WLAN_FREQUENCY_CHARA_UUID: 'c4b7dfc080fd4223b132b7d25a59cf85',
      USERNAME_CHARA_UUID: '25a4b8f4ac4140c18b7a3b7307d90e51',
      PASSWORD_CHARA_UUID: '73587e637848426882b01e37c768cbdc'
    }
  },
  BLUETOOTH_CONTROL_COMMAND: {
    uuid: '0f2917460c80472687a73c501fd3b4b6',
    charaTable: {
      AUTH_BLUETOOTH_DEVICE_CHARA_UUID: 'ebafb2f00e0f40a2a84fe2f098dc13c3',
      BLUETOOTH_POWER_STATUS_CHARA_UUID: '1fbcbbfe063d411ca1bd67d758e804ed'
    }
  }
};

var BleCmd = function () {
  function BleCmd() {
    _classCallCheck(this, BleCmd);
  }

  _createClass(BleCmd, null, [{
    key: 'getService',
    value: function getService(serviceName) {
      var service = bleServiceTable[serviceName];
      if (!!service === false) {
        return null;
      }
      return service;
    }
  }, {
    key: 'getServiceUUID',
    value: function getServiceUUID(serviceName) {
      var service = BleCmd.getService(serviceName);
      return !!service ? service.uuid : null;
    }
  }, {
    key: 'getCharacteristicUUID',
    value: function getCharacteristicUUID(serviceName, charaName) {
      var service = BleCmd.getService(serviceName);
      if (!!service === false) {
        return null;
      }
      var chara = service.charaTable[charaName];
      if (!!chara === false) {
        return null;
      }
      return chara;
    }
  }, {
    key: 'CMD',
    get: function get() {
      return bleServiceTable;
    }
  }]);

  return BleCmd;
}();

/* harmony default export */ __webpack_exports__["a"] = (BleCmd);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CmdArgTable;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var httpApiTable = {
  OSC_INFO: {
    method: 'get',
    url: '/osc/info',
    params: {}
  },
  OSC_STATE: {
    method: 'post',
    url: '/osc/state',
    data: {}
  },
  OSC_CHECK_FOR_UPDATE: {
    method: 'post',
    url: '/osc/checkForUpdates',
    data: {
      stateFingerprint: ''
    }
  },
  COMMANDS_EXECUTE: {
    method: 'post',
    url: '/osc/commands/execute',
    data: {
      name: '',
      parameters: {}
    }
  },
  COMMANDS_STATUS: {
    method: 'post',
    url: '/osc/commands/status',
    data: {
      id: ''
    }
  },
  LICENCE: {
    method: 'get',
    url: '/legal-information/open-source-licenses',
    params: {}
  }
};

var CmdTable = {
  FINISH_WLAN: 'camera._finishWlan',
  TAKE_PICTURE: 'camera.takePicture',
  START_CAPTURE: 'camera.startCapture',
  STOP_CAPTURE: 'camera.stopCapture',
  LIST_FILES: 'camera.listFiles',
  DELETE: 'camera.delete',
  GET_LIVE_PREVIEW: 'camera.getLivePreview',
  GET_OPTIONS: 'camera.getOptions',
  RESET: 'camera.reset',
  SET_OPTIONS: 'camera.setOptions',
  GET_MY_SETTING: 'camera._getMySetting',
  SET_MY_SETTING: 'camera._setMySetting',
  STOP_SELF_TIMER: 'camera._stopSelfTimer',
  CONVERT_VIDEO_FORMATS: 'camera._convertVideoFormats',
  SET_BLUETOOTH_DEVICE: 'camera._setBluetoothDevice'
};
var CmdArgTable = (_CmdArgTable = {}, _defineProperty(_CmdArgTable, CmdTable.FINISH_WLAN, {}), _defineProperty(_CmdArgTable, CmdTable.TAKE_PICTURE, {}), _defineProperty(_CmdArgTable, CmdTable.START_CAPTURE, {
  _mode: ''
}), _defineProperty(_CmdArgTable, CmdTable.STOP_CAPTURE, {}), _defineProperty(_CmdArgTable, CmdTable.LIST_FILES, {
  fileType: '',
  entryCount: 0,
  maxThumbSize: 640
}), _defineProperty(_CmdArgTable, CmdTable.DELETE, {
  fileUrls: ''
}), _defineProperty(_CmdArgTable, CmdTable.GET_LIVE_PREVIEW, {}), _defineProperty(_CmdArgTable, CmdTable.GET_OPTIONS, {
  optionNames: {}
}), _defineProperty(_CmdArgTable, CmdTable.RESET, {}), _defineProperty(_CmdArgTable, CmdTable.SET_OPTIONS, {
  options: {}
}), _defineProperty(_CmdArgTable, CmdTable.GET_MY_SETTING, {
  optionNames: {}
}), _defineProperty(_CmdArgTable, CmdTable.SET_MY_SETTING, {
  options: {}
}), _defineProperty(_CmdArgTable, CmdTable.STOP_SELF_TIMER, {}), _defineProperty(_CmdArgTable, CmdTable.CONVERT_VIDEO_FORMATS, {
  fileUrl: '',
  size: '',
  projectionType: '',
  codec: '',
  topBottomCorrection: ''
}), _defineProperty(_CmdArgTable, CmdTable.SET_BLUETOOTH_DEVICE, {
  uuid: ''
}), _CmdArgTable);

var optionTable = {
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
  _wlanChannel: ''
};

__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.baseURL = 'http://192.168.1.1';
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.timeout = 3000;

var HttpCtrl = function () {
  function HttpCtrl() {
    _classCallCheck(this, HttpCtrl);
  }

  _createClass(HttpCtrl, null, [{
    key: 'oscInfo',
    value: function oscInfo() {
      return __WEBPACK_IMPORTED_MODULE_0_axios___default()(httpApiTable.OSC_INFO);
    }
  }, {
    key: 'oscState',
    value: function oscState() {
      return __WEBPACK_IMPORTED_MODULE_0_axios___default()(httpApiTable.OSC_STATE);
    }
  }, {
    key: 'oscCheckForUpdate',
    value: function oscCheckForUpdate(stateFingerprint) {
      var param = Object.assign({}, httpApiTable.OSC_CHECK_FOR_UPDATE, {
        data: {
          stateFingerprint: stateFingerprint
        }
      });
      return __WEBPACK_IMPORTED_MODULE_0_axios___default()(param);
    }
  }, {
    key: 'commandsExecute',
    value: function commandsExecute(name, parameters) {
      var param = Object.assign({}, httpApiTable.COMMANDS_EXECUTE, {
        data: {
          name: name,
          parameters: parameters
        }
      });
      return __WEBPACK_IMPORTED_MODULE_0_axios___default()(param);
    }
  }, {
    key: 'commandsStatus',
    value: function commandsStatus(id) {
      var param = Object.assign({}, httpApiTable.COMMANDS_STATUS, {
        data: {
          id: id
        }
      });
      return __WEBPACK_IMPORTED_MODULE_0_axios___default()(param);
    }
  }, {
    key: 'Licence',
    value: function Licence() {
      return __WEBPACK_IMPORTED_MODULE_0_axios___default()(httpApiTable.LICENCE);
    }
  }, {
    key: 'cameraFinishWlan',
    value: function cameraFinishWlan() {
      return HttpCtrl.commandsExecute(CmdTable.FINISH_WLAN, CmdArgTable[CmdTable.FINISH_WLAN]);
    }
  }, {
    key: 'cameraTakePicture',
    value: function cameraTakePicture() {
      return HttpCtrl.commandsExecute(CmdTable.TAKE_PICTURE, CmdArgTable[CmdTable.TAKE_PICTURE]);
    }
  }, {
    key: 'cameraStartCapture',
    value: function cameraStartCapture(_mode) {
      return HttpCtrl.commandsExecute(CmdTable.START_CAPTURE, Object.assign({}, CmdArgTable[CmdTable.START_CAPTURE], { _mode: _mode }));
    }
  }, {
    key: 'cameraStopCapture',
    value: function cameraStopCapture() {
      return HttpCtrl.commandsExecute(CmdTable.STOP_CAPTURE, CmdArgTable[CmdTable.STOP_CAPTURE]);
    }
  }, {
    key: 'cameraListFiles',
    value: function cameraListFiles() {
      var fileType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
      var entryCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1024;
      var maxThumbSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 640;
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      return HttpCtrl.commandsExecute(CmdTable.LIST_FILES, Object.assign({}, CmdArgTable[CmdTable.LIST_FILES], {
        fileType: fileType,
        entryCount: entryCount,
        maxThumbSize: maxThumbSize
      }, options));
    }
  }, {
    key: 'cameraDelete',
    value: function cameraDelete(fileUrls) {
      return HttpCtrl.commandsExecute(CmdTable.DELETE, Object.assign({}, CmdArgTable[CmdTable.DELETE], { fileUrls: fileUrls }));
    }
  }, {
    key: 'cameraGetLivePreview',
    value: function cameraGetLivePreview() {
      return HttpCtrl.commandsExecute(CmdTable.GET_LIVE_PREVIEW, CmdArgTable[CmdTable.GET_LIVE_PREVIEW]);
    }
  }, {
    key: 'cameraGetOptions',
    value: function cameraGetOptions(optionNames) {
      return HttpCtrl.commandsExecute(CmdTable.GET_OPTIONS, Object.assign({}, CmdArgTable[CmdTable.GET_OPTIONS], { optionNames: optionNames }));
    }
  }, {
    key: 'cameraReset',
    value: function cameraReset() {
      return HttpCtrl.commandsExecute(CmdTable.RESET, CmdArgTable[CmdTable.RESET]);
    }
  }, {
    key: 'cameraSetOptions',
    value: function cameraSetOptions(options) {
      return HttpCtrl.commandsExecute(CmdTable.SET_OPTIONS, Object.assign({}, CmdArgTable[CmdTable.SET_OPTIONS], { options: options }));
    }
  }, {
    key: 'cameraGetMySetting',
    value: function cameraGetMySetting(optionNames) {
      return HttpCtrl.commandsExecute(CmdTable.GET_MY_SETTING, Object.assign({}, CmdArgTable[CmdTable.GET_MY_SETTING], { optionNames: optionNames }));
    }
  }, {
    key: 'cameraSetMySetting',
    value: function cameraSetMySetting(options) {
      return HttpCtrl.commandsExecute(CmdTable.SET_MY_SETTING, Object.assign({}, CmdArgTable[CmdTable.SET_MY_SETTING], { options: options }));
    }
  }, {
    key: 'cameraStopSelfTimer',
    value: function cameraStopSelfTimer(options) {
      return HttpCtrl.commandsExecute(CmdTable.STOP_SELF_TIMER, CmdArgTable[CmdTable.STOP_SELF_TIMER]);
    }
  }, {
    key: 'cameraConvertVideoFormats',
    value: function cameraConvertVideoFormats() {
      var fileUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '3840x1920';
      var projectionType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Equirectangular';
      var codec = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'H.264/MPEG-4 AVC';
      var topBottomCorrection = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'Apply';

      return HttpCtrl.commandsExecute(CmdTable.CONVERT_VIDEO_FORMATS, Object.assign({}, CmdArgTable[CmdTable.CONVERT_VIDEO_FORMATS], { options: options }));
    }
  }, {
    key: 'cameraSetBluetoothDevice',
    value: function cameraSetBluetoothDevice(uuid) {
      return HttpCtrl.commandsExecute(CmdTable.SET_BLUETOOTH_DEVICE, Object.assign({}, CmdArgTable[CmdTable.SET_BLUETOOTH_DEVICE], { uuid: uuid }));
    }
  }]);

  return HttpCtrl;
}();

/* harmony default export */ __webpack_exports__["a"] = (HttpCtrl);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map