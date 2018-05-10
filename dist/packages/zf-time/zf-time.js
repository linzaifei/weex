// { "framework": "Vue"} 

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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "flexDirection": "row",
    "alignItems": "center",
    "marginLeft": "20",
    "marginRight": "20"
  }
}

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var modal = weex.requireModule("modal");

exports.default = {
    props: {
        autoStart: {
            type: Boolean,
            default: true
        },
        countVal: { //获取初始值
            type: Number,
            default: 1525917631000
        },
        //单位为"毫秒"
        interval: {
            type: Number,
            default: 1000
        },
        tpl: {
            type: String,
            default: '{h}:{m}:{s}'
        },
        // 数字盒子 style
        timeBoxStyle: Object,
        // : 盒子Style
        dotBoxStyle: Object,
        // 数字文字 Style
        timeTextStyle: Object,
        // : 文字Style
        dotTextStyle: Object
    },
    data: function data() {
        return {
            isStart: false,
            globalTimer: null, //获取setInterval对象值
            pauseTime: 0,
            tplIndexOfDays: -1,
            tplIndexOfHours: -1,
            tplIndexOfMinutes: -1,
            tplIndexOfSeconds: -1,

            day: '00', //天
            hour: '00', //时
            minute: '00', //分
            second: '00', //秒

            TIME_BOX_STYLE: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '30px',
                width: '30px'
            },
            DOT_BOX_STYLE: {
                width: '18px',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            },
            TIME_TEXT_STYLE: {
                color: '#FFCC80',
                fontSize: '26px'
            },
            DOT_TEXT_STYLE: {
                color: '#333333',
                fontSize: '18px',
                fontWeight: 'bold'
            }
        };
    },
    mounted: function mounted() {
        this.tplIndexOfDays = this.tpl.indexOf('d');
        this.tplIndexOfHours = this.tpl.indexOf('h');
        this.tplIndexOfMinutes = this.tpl.indexOf('m');
        this.tplIndexOfSeconds = this.tpl.indexOf('s');

        var vm = this;
        if (vm.autoStart) {
            vm.startCountFn();
        }
    },

    computed: {
        mrTimeBoxStyle: function mrTimeBoxStyle() {
            return _extends({}, this.TIME_BOX_STYLE, this.timeBoxStyle);
        },
        mrDotBoxStyle: function mrDotBoxStyle() {
            return _extends({}, this.DOT_BOX_STYLE, this.dotBoxStyle);
        },
        mrTimeTextStyle: function mrTimeTextStyle() {
            return _extends({}, this.TIME_TEXT_STYLE, this.timeTextStyle);
        },
        mrDotTextStyle: function mrDotTextStyle() {
            return _extends({}, this.DOT_TEXT_STYLE, this.dotTextStyle);
        }
    },

    methods: {
        counterFn: function counterFn(counterTime) {
            var vm = this;
            var nowDate = new Date().getTime();
            if (vm.pauseTime == 0) {
                var num = nowDate - counterTime; //计算时间毫秒差
            } else {
                vm.pauseTime = vm.pauseTime + 10;
                var num = vm.pauseTime - counterTime; //计算时间毫秒差
            }
            var leave1 = num % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
            var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
            var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
            vm.day = Math.floor(num / (24 * 3600 * 1000)) < 10 ? '0' + Math.floor(num / (24 * 3600 * 1000)) : Math.floor(num / (24 * 3600 * 1000)); //计算相差天数
            vm.hour = Math.floor(leave1 / (3600 * 1000)) < 10 ? '0' + Math.floor(leave1 / (3600 * 1000)) : Math.floor(leave1 / (3600 * 1000)); //计算相差小时
            vm.minute = Math.floor(leave2 / (60 * 1000)) < 10 ? '0' + Math.floor(leave2 / (60 * 1000)) : Math.floor(leave2 / (60 * 1000)); //计算相差分钟
            vm.second = Math.round(leave3 / 1000) < 10 ? '0' + Math.round(leave3 / 1000) : Math.round(leave3 / 1000); //计算相差秒
        },
        startCountFn: function startCountFn() {
            var vm = this;
            if (!vm.isStart) {
                vm.countVal = vm.countVal ? vm.countVal : new Date().getTime();
                var timer = setInterval(function () {
                    vm.counterFn(vm.countVal);
                }, 10);
                vm.globalTimer = timer;
                vm.isStart = true;
            }
        },
        stopCountFn: function stopCountFn() {
            var vm = this;
            if (vm.isStart) {
                window.clearInterval(vm.globalTimer);
                vm.globalTimer = null;
                vm.isStart = false;
                vm.pauseTime = new Date().getTime();
            }
        },

        getDot: function getDot(prevTagIndex) {
            var nextTagIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

            if (nextTagIndex === -1) {
                return this.tpl.slice(prevTagIndex + 2);
            }
            return this.tpl.slice(prevTagIndex + 2, nextTagIndex - 1);
        }
    }
};

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [(_vm.tplIndexOfDays !== -1) ? _c('div', {
    style: _vm.mrTimeBoxStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": (_vm.day + "天")
    }
  }, [_c('text', {
    style: _vm.mrTimeTextStyle
  }, [_vm._v(_vm._s(_vm.day))])]) : _vm._e(), (_vm.tplIndexOfDays !== -1) ? _c('div', {
    style: _vm.mrDotBoxStyle,
    attrs: {
      "ariaHidden": true
    }
  }, [_c('text', {
    style: _vm.mrDotTextStyle
  }, [_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfDays, _vm.tplIndexOfHours)))])]) : _vm._e(), (_vm.tplIndexOfHours !== -1) ? _c('div', {
    style: _vm.mrTimeBoxStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": (_vm.hour + "时")
    }
  }, [_c('text', {
    style: _vm.mrTimeTextStyle
  }, [_vm._v(_vm._s(_vm.hour))])]) : _vm._e(), (_vm.tplIndexOfHours !== -1) ? _c('div', {
    style: _vm.mrDotBoxStyle,
    attrs: {
      "ariaHidden": true
    }
  }, [_c('text', {
    style: _vm.mrDotTextStyle
  }, [_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfHours, _vm.tplIndexOfMinutes)))])]) : _vm._e(), (_vm.tplIndexOfMinutes !== -1) ? _c('div', {
    style: _vm.mrTimeBoxStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": (_vm.minute + "分")
    }
  }, [_c('text', {
    style: _vm.mrTimeTextStyle
  }, [_vm._v(_vm._s(_vm.minute))])]) : _vm._e(), (_vm.tplIndexOfMinutes !== -1) ? _c('div', {
    style: _vm.mrDotBoxStyle,
    attrs: {
      "ariaHidden": true
    }
  }, [_c('text', {
    style: _vm.mrDotTextStyle
  }, [_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfMinutes, _vm.tplIndexOfSeconds)))])]) : _vm._e(), (_vm.tplIndexOfSeconds !== -1) ? _c('div', {
    style: _vm.mrTimeBoxStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": (_vm.second + "秒")
    }
  }, [_c('text', {
    style: _vm.mrTimeTextStyle
  }, [_vm._v(_vm._s(_vm.second))])]) : _vm._e(), (_vm.tplIndexOfSeconds !== -1) ? _c('div', {
    style: _vm.mrDotBoxStyle,
    attrs: {
      "ariaHidden": true
    }
  }, [_c('text', {
    style: _vm.mrDotTextStyle
  }, [_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfSeconds, -1)))])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(16)
)

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(18)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/linzaifei/Desktop/linzaifei/Weex/project/zf_components/src/packages/zf-time/zf-time.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-75708779"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ })

/******/ });