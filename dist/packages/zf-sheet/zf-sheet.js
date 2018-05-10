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
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "zIndex": 100
  },
  "zf-sheet": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "zIndex": 101,
    "width": "750",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "actionList": {
    "width": "710",
    "borderRadius": "20",
    "overflow": "hidden",
    "backgroundColor": "#ffffff"
  },
  "action-title": {
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "height": "90",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "action-title-text": {
    "fontSize": "25",
    "color": "#666666"
  },
  "action-item": {
    "width": "710",
    "height": "114",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  "action-item-title": {
    "fontSize": "35"
  },
  "action-cancel": {
    "marginTop": "10",
    "width": "710",
    "height": "100",
    "borderRadius": "20",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  "action-cancel-text": {
    "fontSize": "35"
  },
  "border": {
    "borderBottomWidth": "1",
    "borderColor": "#eeeeee"
  }
}

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(14);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


var animation = weex.requireModule('animation');
var modal = weex.requireModule('modal');

exports.default = {
    mixins: [_mixins2.default],
    props: {
        show: { default: false },
        opacity: { default: 0.1 },
        actionTitle: { default: '' },
        actionCancelTitle: { default: '' },
        actions: { default: [[]] },
        actionItemColor: { default: '#333' },
        actionCancelColor: { default: '#333' },
        canClickMask: { default: false }
    },
    data: function data() {
        return {
            actionHeight: { default: 114 }
        };
    },

    computed: {
        conStyle: function conStyle() {
            return {
                backgroundColor: 'rgba(0,0,0,' + this.opacity + ')'
            };
        },
        sheetStyle: function sheetStyle() {
            var actionItemHeight = 114;
            var titleHeight = 90;
            var height = this.actions.length * actionItemHeight - 15;
            if (this.actionTitle) {
                height += titleHeight;
            }
            if (this.actionCancelTitle) {
                height += actionItemHeight;
            }
            var posBottom = Number(this.getPosition().bottom.replace('px', ''));
            var styleObj = { 'bottom': '-' + (height - posBottom) + 'px' };
            return styleObj;
        },
        shouldShow: function shouldShow() {
            var _this = this;

            var show = this.show;

            setTimeout(function () {
                _this.apperSheet(show);
            }, 100);
            return show;
        }
    },
    created: function created() {},

    components: {},
    methods: {
        apperSheet: function apperSheet(bool, callback) {
            var refs = this.$refs['zf-alert'];

            var styles = bool ? { transform: 'translate(0, -100%)' } : { transform: 'translate(0, 100%)' };
            var timingFunction = bool ? 'ease' : 'ease-out';
            var duration = 300;
            if (refs) {
                animation.transition(refs, {
                    styles: styles,
                    duration: duration,
                    timingFunction: timingFunction
                }, function () {
                    typeof callback === 'function' && callback();
                });
            }
        },
        clickmask: function clickmask() {
            var _this2 = this;

            if (!this.canClickMask) {
                return;
            }
            this.apperSheet(!this.show, function () {
                _this2.$emit('clickCancel', {});
            });
        },
        clickCancel: function clickCancel() {
            var _this3 = this;

            this.apperSheet(!this.show, function () {
                _this3.$emit('clickCancel', {});
            });
        },

        //点击取消
        clickItem: function clickItem(index, value) {
            var _this4 = this;

            this.apperSheet(!this.show, function () {
                _this4.$emit('clickItem', {
                    index: index,
                    value: value
                });
            });
        }
    }
};

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var width = weex.config.env.deviceWidth;
var height = weex.config.env.deviceHeight;
var platform = weex.config.env.platform.toLowerCase();
var appName = weex.config.env.appName;

var mixins = {
    methods: {
        getPageHeight: function getPageHeight() {
            if (platform === 'android') {
                return 750 / width * height;
            }
            return height;
        },
        getPosition: function getPosition() {

            var isProd = platform === 'ios' && appName !== 'WeexDemo';
            return {
                top: isProd ? '-40px' : '0px',
                bottom: isProd ? '36px' : '0px'
            };
        }
    }
};

exports.default = mixins;

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["container"],
    style: _vm.conStyle,
    on: {
      "click": _vm.clickmask
    }
  }, [_c('div', {
    ref: "zf-alert",
    staticClass: ["zf-sheet"],
    style: _vm.sheetStyle,
    attrs: {
      "hack": _vm.shouldShow
    }
  }, [_c('div', {
    staticClass: ["actionList"]
  }, [(_vm.actionTitle) ? _c('div', {
    staticClass: ["action-title", "border"]
  }, [_c('text', {
    staticClass: ["action-title-text"]
  }, [_vm._v(_vm._s(_vm.actionTitle))])]) : _vm._e(), _vm._l((_vm.actions), function(item, index) {
    return _c('div', {
      staticClass: ["action-item", "border"],
      on: {
        "click": function($event) {
          _vm.clickItem(index, item)
        }
      }
    }, [_c('text', {
      staticClass: ["action-item-title"],
      style: {
        color: _vm.actionItemColor
      }
    }, [_vm._v(_vm._s(item))])])
  })], 2), (_vm.actionCancelTitle) ? _c('div', {
    staticClass: ["action-cancel"],
    on: {
      "click": _vm.clickCancel
    }
  }, [_c('text', {
    style: {
      color: _vm.actionCancelColor
    },
    attrs: {
      "color": "action-cancel-text"
    }
  }, [_vm._v(_vm._s(_vm.actionCancelTitle))])]) : _vm._e()])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(15)
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
__vue_options__.__file = "/Users/linzaifei/Desktop/linzaifei/Weex/project/zf_components/src/packages/zf-sheet/zf-sheet.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-494d004a"
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