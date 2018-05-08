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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(35)
)

/* script */
__vue_exports__ = __webpack_require__(36)

/* template */
var __vue_template__ = __webpack_require__(37)
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
__vue_options__.__file = "/Users/linzaifei/Desktop/linzaifei/Weex/project/zf_components/src/packages/zf-alert/zf-alert.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-24c75c7b"
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


/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "zIndex": 100,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "alert": {
    "width": "500",
    "borderRadius": "20",
    "backgroundColor": "#ffffff"
  },
  "alert_title": {
    "fontSize": "32",
    "color": "#333333"
  },
  "btn": {
    "flexDirection": "row",
    "alignItems": "center",
    "borderColor": "#dddddd",
    "borderTopWidth": "1"
  },
  "alert_content": {
    "marginTop": "15",
    "fontSize": "29",
    "color": "#666666"
  },
  "top": {
    "textAlign": "center",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "column",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20"
  },
  "left": {
    "flex": 1,
    "textAlign": "center",
    "color": "#666666",
    "borderColor": "#dddddd",
    "borderRightWidth": "1"
  },
  "right": {
    "flex": 1,
    "textAlign": "center",
    "color": "#fc8157"
  },
  "tag": {
    "paddingTop": "15",
    "paddingBottom": "15",
    "fontSize": "35"
  }
}

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _zfMask = __webpack_require__(44);

var _zfMask2 = _interopRequireDefault(_zfMask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animation = weex.requireModule('animation'); //
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

var modal = weex.requireModule('modal');

exports.default = {
    props: {
        show: { default: false },
        title: { default: '标题' },
        content: { default: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容' },
        okTitle: { default: '确认' },
        cancelTitle: { default: '取消' },
        opacity: { default: 0.1 }
    },
    data: function data() {
        return {};
    },
    created: function created() {},

    computed: {
        conStyle: function conStyle() {
            return {
                backgroundColor: 'rgba(0,0,0,' + this.opacity + ')'
            };
        },
        alertStyle: function alertStyle() {
            return {
                transform: 'scale(0.6)'
            };
        },
        shouldShow: function shouldShow() {
            var _this = this;

            var show = this.show;

            setTimeout(function () {
                _this.apperAlert(show);
            }, 50);
            return show;
        }
    },
    components: {
        ZfMask: _zfMask2.default
    },
    methods: {
        apperAlert: function apperAlert(bool) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

            var refs = this.$refs['zf-alert'];
            if (bool && refs) {
                animation.transition(refs, {
                    styles: {
                        transform: 'scale(1)',
                        transformOrigin: 'center center'
                    },
                    duration: duration,
                    timingFunction: 'ease-out'
                }, function () {});
            }
        },
        clickItem: function clickItem(e) {
            this.$emit('clickItem', {
                data: {
                    key: e
                }
            });
        }
    }
};

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["container"],
    style: _vm.conStyle
  }, [_c('div', {
    ref: "zf-alert",
    staticClass: ["alert"],
    style: _vm.alertStyle,
    attrs: {
      "hack": _vm.shouldShow
    }
  }, [_c('div', {
    staticClass: ["top"]
  }, [(_vm.title) ? _c('text', {
    staticClass: ["alert_title"]
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), (_vm.content) ? _c('text', {
    staticClass: ["alert_content"]
  }, [_vm._v(_vm._s(_vm.content))]) : _vm._e()]), _c('div', {
    staticClass: ["btn"]
  }, [(_vm.cancelTitle) ? _c('text', {
    staticClass: ["left", "tag"],
    on: {
      "click": function($event) {
        _vm.clickItem(0)
      }
    }
  }, [_vm._v(_vm._s(_vm.cancelTitle))]) : _vm._e(), (_vm.okTitle) ? _c('text', {
    staticClass: ["right", "tag"],
    on: {
      "click": function($event) {
        _vm.clickItem(1)
      }
    }
  }, [_vm._v(_vm._s(_vm.okTitle))]) : _vm._e()])])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = {
  "mask": {
    "position": "fixed",
    "top": 0,
    "bottom": 0,
    "right": 0,
    "left": 0,
    "zIndex": 100
  }
}

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

var animation = weex.requireModule('animation');
var modal = weex.requireModule('modal');
exports.default = {
    props: {
        show: { default: false }, //显示
        hasAnimation: { default: true }, //是否有动画
        duration: { default: 300 }, //动画时间
        opacity: { default: 0.6 }, //透明度
        timingFunction: { default: 'linear' }
    },
    data: function data() {
        return {};
    },

    computed: {
        maskStyle: function maskStyle() {
            return {
                opacity: this.hasAnimation ? 0 : 1,
                backgroundColor: 'rgba(0, 0, 0,' + this.opacity + ')'
            };
        },
        shouldShow: function shouldShow() {
            var _this = this;

            var show = this.show,
                hasAnimation = this.hasAnimation;

            hasAnimation && setTimeout(function () {
                _this.appermask(show);
            }, 50);
            return show;
        }
    },
    created: function created() {},

    components: {},
    methods: {
        appermask: function appermask(bool) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
            var hasAnimation = this.hasAnimation,
                timingFunction = this.timingFunction;

            var ref = this.$refs['zf-mask'];
            if (hasAnimation && ref) {
                animation.transition(ref, {
                    styles: {
                        opacity: bool ? 1 : 0
                    },
                    duration: duration,
                    timingFunction: timingFunction,
                    delay: 0
                }, function () {});
            };
        },
        maskClicked: function maskClicked() {
            this.$emit('zfMaskClicked', {});
        }
    }
};

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    ref: "zf-mask",
    staticClass: ["mask"],
    style: _vm.maskStyle,
    attrs: {
      "hack": _vm.shouldShow
    },
    on: {
      "click": _vm.maskClicked
    }
  }, [_vm._t("default")], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zfMask = __webpack_require__(45);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_zfMask).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(39)
)

/* script */
__vue_exports__ = __webpack_require__(40)

/* template */
var __vue_template__ = __webpack_require__(41)
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
__vue_options__.__file = "/Users/linzaifei/Desktop/linzaifei/Weex/project/zf_components/src/packages/zf-mask/zf-mask.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2bd6dc92"
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


/***/ })

/******/ });