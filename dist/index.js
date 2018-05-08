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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ({

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(30)
)

/* script */
__vue_exports__ = __webpack_require__(31)

/* template */
var __vue_template__ = __webpack_require__(33)
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
__vue_options__.__file = "/Users/linzaifei/Desktop/linzaifei/Weex/project/zf_components/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7a3d6f34"
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

/***/ 30:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "backgroundColor": "#f2f2f2"
  },
  "list": {
    "marginTop": "10"
  },
  "cell": {
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "fontSize": "35",
    "color": "#333333",
    "borderBottomWidth": "1",
    "borderColor": "#eeeeee",
    "backgroundColor": "#ffffff"
  }
}

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ZFPush = __webpack_require__(32);

var _ZFPush2 = _interopRequireDefault(_ZFPush);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigator = weex.requireModule('navigator'); //
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
    name: 'App',
    components: {},
    data: function data() {
        return {
            list: [{
                title: 'ZfRate',
                value: 'zf-rate'
            }, {
                title: 'ZfSelectItem',
                value: 'zf-selectItem'
            }, {
                title: 'ZfMask',
                value: 'zf-mask'
            }, {
                title: 'ZfAlert',
                value: 'zf-alert'
            }]
        };
    },

    methods: {
        clickItem: function clickItem(value) {
            //            modal.toast({
            //                message:push.baseUrl()+'examples/'+`${value}`+'/index.js'
            //            })

            navigator.push({
                url: _ZFPush2.default.createURL(_ZFPush2.default.baseUrl() + 'examples/' + ('' + value) + '/index.js'),
                animated: 'true'
            });
        }
    }

};

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function createURL(hash) {

    return hash + "?_wx_tpl=" + hash;
}
function baseUrl() {
    var bundleUrl = weex.config.bundleUrl;
    var url = bundleUrl.substring(0, bundleUrl.lastIndexOf("/dist/") + 1);
    return url + "dist/";
}
exports.default = {
    createURL: createURL, baseUrl: baseUrl
};

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('recycle-list', {
    staticClass: ["list"],
    appendAsTree: true,
    attrs: {
      "listData": _vm.list,
      "bindingExpression": "list",
      "alias": "item",
      "index": "i",
      "append": "tree"
    }
  }, [_c('cell-slot', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    },
    on: {
      "click": {
        handler: function($$_1, $event) {
          _vm.clickItem($$_1);
        },
        params: [{
          "@binding": "item.value"
        }]
      }
    }
  }, [_c('text', {
    staticClass: ["cell"],
    attrs: {
      "value": {
        "@binding": "item.title"
      }
    }
  })])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });