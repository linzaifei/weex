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
/******/ 	return __webpack_require__(__webpack_require__.s = 97);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = {
  "item": {
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  }
}

/***/ }),

/***/ 2:
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

exports.default = {
    props: {
        src: { default: '' },
        content: { default: '' },
        color: { default: '#666' },
        size: { default: '27px' },
        iconWidth: { default: '35px' },
        direction: { default: 'left' },
        bgColor: { default: 'transparent' },
        space: { default: "8px" }
    },
    data: function data() {
        return {};
    },

    computed: {
        itemStyle: function itemStyle() {
            if (this.direction == 'left') {
                return {
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: this.bgColor
                };
            } else if (this.direction == 'top') {
                return {
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: this.bgColor
                };
            } else if (this.direction == 'right') {
                return {
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: this.bgColor
                };
            } else if (this.direction == 'bottom') {
                return {
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: this.bgColor
                };
            }
        },
        textStyle: function textStyle() {
            if (this.direction == 'left') {
                return {
                    marginLeft: this.src ? this.space : '0px'
                };
            } else if (this.direction == 'top') {
                return {
                    marginTop: this.src ? this.space : '0px'
                };
            } else if (this.direction == 'right') {
                return {
                    marginRight: this.src ? this.space : '0px'
                };
            } else if (this.direction == 'bottom') {
                return {
                    marginBottom: this.src ? this.space : '0px'
                };
            }
        }
    },
    created: function created() {},

    components: {},
    methods: {
        clickTag: function clickTag() {
            this.$emit("zfClickTag", {});
        }
    }
};

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [(_vm.direction == 'left' || _vm.direction == 'top') ? _c('div', {
    staticClass: ["item"],
    style: _vm.itemStyle,
    on: {
      "click": _vm.clickTag
    }
  }, [(_vm.src) ? _c('image', {
    staticClass: ["img"],
    style: {
      width: _vm.iconWidth,
      height: _vm.iconWidth
    },
    attrs: {
      "resize": "contain",
      "src": _vm.src
    }
  }) : _vm._e(), (_vm.content) ? _c('text', {
    staticClass: ["content"],
    style: [{
      color: _vm.color,
      fontSize: _vm.size,
    }, _vm.textStyle]
  }, [_vm._v(_vm._s(_vm.content))]) : _vm._e()]) : _vm._e(), (_vm.direction == 'right' || _vm.direction == 'bottom') ? _c('div', {
    staticClass: ["item"],
    style: _vm.itemStyle,
    on: {
      "click": _vm.clickTag
    }
  }, [(_vm.content) ? _c('text', {
    staticClass: ["content"],
    style: [{
      color: _vm.color,
      fontSize: _vm.size
    }, _vm.textStyle]
  }, [_vm._v(_vm._s(_vm.content))]) : _vm._e(), (_vm.src) ? _c('image', {
    staticClass: ["img"],
    style: {
      width: _vm.iconWidth,
      height: _vm.iconWidth
    },
    attrs: {
      "resize": "contain",
      "src": _vm.src
    }
  }) : _vm._e()]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
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
__vue_options__.__file = "/Users/linzaifei/Desktop/linzaifei/Weex/project/zf_components/src/packages/zf-tag/zf-tag.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4ccbbc8a"
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