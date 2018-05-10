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
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "width": "750",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "flexWrap": "wrap"
  },
  "item": {
    "position": "relative",
    "borderRadius": "8",
    "overflow": "hidden"
  },
  "item_close": {
    "position": "absolute",
    "right": "5",
    "top": "5",
    "width": "40",
    "height": "40"
  }
}

/***/ }),

/***/ 4:
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

var modal = weex.requireModule('modal');

exports.default = {
    props: {
        space: { default: 5 }, //item中间间距
        margin: { default: 5 }, //item外间距
        count: { default: 4 }, //水平item个数
        list: { default: [] },
        max: { default: 9 }, //最大9个
        showClose: { default: true }, //隐藏删除
        bgColor: { default: '#fff' }
    },
    data: function data() {
        return {
            close: 'http://chuantu.biz/t6/300/1525251856x-1404781168.png',
            add: 'http://chuantu.biz/t6/300/1525252504x-1566638249.png',
            itemW: '',
            index: 0
        };
    },
    created: function created() {

        this.itemW = (750 - 2 * this.margin - (this.getCount - 1) * this.space) / this.getCount + 'px';
    },

    watch: {},
    computed: {
        getBottom: function getBottom() {

            return parseInt(this.list.length / this.getCount) * this.getCount;
        },
        getMarfinLeft: function getMarfinLeft() {
            return this.list.length % this.getCount;
        },
        getCount: function getCount() {
            if (this.count > 5 || this.count < 3) {
                return 3;
            }
            return this.count;
        }
    },
    components: {},
    methods: {
        del: function del(index) {
            this.list.splice(index, 1);
        },
        addAction: function addAction() {
            this.$emit('addPhoto', {});
        }
    }
};

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"],
    style: {
      padding: _vm.margin,
      backgroundColor: _vm.bgColor
    }
  }, [_vm._l((_vm.list), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('div', {
      staticClass: ["item"],
      style: {
        width: _vm.itemW,
        height: _vm.itemW,
        marginBottom: index < _vm.getBottom ? _vm.space + 'px' : '0px',
        marginLeft: index == parseInt(index / _vm.getCount) * _vm.getCount ? '0px' : _vm.space + 'px'
      }
    }, [_c('image', {
      staticClass: ["item_img"],
      style: {
        width: _vm.itemW,
        height: _vm.itemW
      },
      attrs: {
        "src": item
      }
    }), (_vm.showClose) ? _c('image', {
      staticClass: ["item_close"],
      attrs: {
        "src": _vm.close
      },
      on: {
        "click": function($event) {
          _vm.del(index)
        }
      }
    }) : _vm._e()])])
  }), (_vm.list.length < _vm.max) ? _c('div', {
    style: {
      marginLeft: _vm.getMarfinLeft == 0 ? '0px' : _vm.space + 'px'
    },
    on: {
      "click": _vm.addAction
    }
  }, [_c('image', {
    staticClass: ["item_img"],
    style: {
      width: _vm.itemW,
      height: _vm.itemW
    },
    attrs: {
      "src": _vm.add
    }
  })]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(5)
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
__vue_options__.__file = "/Users/linzaifei/Desktop/linzaifei/Weex/project/zf_components/src/packages/zf-selectItem/zf-selectItem.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-083d15fd"
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