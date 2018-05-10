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
/******/ 	return __webpack_require__(__webpack_require__.s = 90);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
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
    "borderColor": "#dddddd",
    "borderRightWidth": "1"
  },
  "right": {
    "flex": 1,
    "textAlign": "center"
  },
  "tag": {
    "paddingTop": "15",
    "paddingBottom": "15",
    "fontSize": "35"
  }
}

/***/ }),

/***/ 15:
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
        show: { default: false },
        title: { default: '' },
        content: { default: '' },
        okTitle: { default: '确认' },
        cancelTitle: { default: '' },
        opacity: { default: 0.1 },
        okColor: { default: '#fc8157' },
        cancelColor: { default: '#666' }
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
    components: {},
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

/***/ 16:
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
    style: {
      color: _vm.cancelColor
    },
    on: {
      "click": function($event) {
        _vm.clickItem(0)
      }
    }
  }, [_vm._v(_vm._s(_vm.cancelTitle))]) : _vm._e(), (_vm.okTitle) ? _c('text', {
    staticClass: ["right", "tag"],
    style: {
      color: _vm.okColor
    },
    on: {
      "click": function($event) {
        _vm.clickItem(1)
      }
    }
  }, [_vm._v(_vm._s(_vm.okTitle))]) : _vm._e()])])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(16)
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


/***/ })

/******/ });