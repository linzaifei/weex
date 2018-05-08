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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = {
  "item": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "img": {
    "marginLeft": "5",
    "marginRight": "5"
  }
}

/***/ }),

/***/ 1:
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

var modal = weex.requireModule('modal');
exports.default = {
    props: {
        rate: { default: 0 },
        imgStar: { default: 'http://chuantu.biz/t6/297/1524813946x-1566638171.png' }, //空
        imgStarHalf: { default: 'http://chuantu.biz/t6/297/1524814019x-1566638171.png' }, //半高亮
        imgStarHight: { default: 'http://chuantu.biz/t6/297/1524814035x-1566638171.png' }, //高亮
        maxRate: { default: 5 }, //默认5分值
        iconWidth: { default: 30 },
        bgColor: { default: '#fff' }
    },
    data: function data() {
        return {
            inter: 0,
            isHalf: false
        };
    },

    computed: {
        stars: function stars() {
            var list = [];
            for (var i = 0; i < this.maxRate; i++) {
                list.push(i);
            }
            return list;
        }
    },

    created: function created() {
        if (Number.isInteger(parseFloat(this.rate))) {
            this.inter = this.rate;
            this.isHalf = false;
        } else {
            this.inter = parseInt(this.rate);
            this.isHalf = true;
        }
    },

    components: {},
    methods: {}
};

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item"]
  }, [_vm._l((_vm.stars), function(item, i) {
    return _c('div', {
      style: {
        backgroundColor: _vm.bgColor
      }
    }, [(i < _vm.inter) ? _c('image', {
      staticClass: ["img"],
      style: {
        width: _vm.iconWidth + 'px',
        height: _vm.iconWidth + 'px'
      },
      attrs: {
        "resize": "contain",
        "src": _vm.imgStarHight
      }
    }) : (_vm.isHalf && i == _vm.inter) ? _c('image', {
      staticClass: ["img"],
      style: {
        width: _vm.iconWidth + 'px',
        height: _vm.iconWidth + 'px'
      },
      attrs: {
        "resize": "contain",
        "src": _vm.imgStarHalf
      }
    }) : _c('image', {
      staticClass: ["img"],
      style: {
        width: _vm.iconWidth + 'px',
        height: _vm.iconWidth + 'px'
      },
      attrs: {
        "resize": "contain",
        "src": _vm.imgStar
      }
    })])
  }), _c('text', [_vm._v(_vm._s(_vm.pageX))])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(0)
)

/* script */
__vue_exports__ = __webpack_require__(1)

/* template */
var __vue_template__ = __webpack_require__(2)
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
__vue_options__.__file = "/Users/linzaifei/Desktop/linzaifei/Weex/project/zf_components/src/packages/zf-rate/zf-rate.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b50094c2"
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