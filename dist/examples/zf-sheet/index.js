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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ZfTime = exports.ZfSheet = exports.ZfAlert = exports.ZfMask = exports.ZfSelectItem = exports.ZfRate = undefined;

var _zfRate = __webpack_require__(20);

var _zfRate2 = _interopRequireDefault(_zfRate);

var _zfSelectItem = __webpack_require__(22);

var _zfSelectItem2 = _interopRequireDefault(_zfSelectItem);

var _zfMask = __webpack_require__(24);

var _zfMask2 = _interopRequireDefault(_zfMask);

var _zfAlert = __webpack_require__(26);

var _zfAlert2 = _interopRequireDefault(_zfAlert);

var _zfSheet = __webpack_require__(28);

var _zfSheet2 = _interopRequireDefault(_zfSheet);

var _zfTime = __webpack_require__(30);

var _zfTime2 = _interopRequireDefault(_zfTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ZfRate = _zfRate2.default;
exports.ZfSelectItem = _zfSelectItem2.default;
exports.ZfMask = _zfMask2.default;
exports.ZfAlert = _zfAlert2.default;
exports.ZfSheet = _zfSheet2.default;
exports.ZfTime = _zfTime2.default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zfRate = __webpack_require__(21);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_zfRate).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 21 */
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


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zfSelectItem = __webpack_require__(23);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_zfSelectItem).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 23 */
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


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zfMask = __webpack_require__(25);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_zfMask).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(8)
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


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zfAlert = __webpack_require__(27);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_zfAlert).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(11)
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


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zfSheet = __webpack_require__(29);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_zfSheet).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 29 */
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


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zfTime = __webpack_require__(31);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_zfTime).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 31 */
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


/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(51)
)

/* script */
__vue_exports__ = __webpack_require__(52)

/* template */
var __vue_template__ = __webpack_require__(53)
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
__vue_options__.__file = "/Users/linzaifei/Desktop/linzaifei/Weex/project/zf_components/src/examples/zf-sheet/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f943122e"
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
/* 51 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "backgroundColor": "#ffffff"
  },
  "item": {
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "20",
    "marginRight": "20",
    "marginBottom": "20",
    "marginLeft": "20"
  },
  "center": {
    "color": "#333333",
    "fontSize": "35"
  },
  "title": {
    "fontSize": "30",
    "color": "#666666",
    "backgroundColor": "#f2f2f2",
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15"
  }
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(19);

var modal = weex.requireModule('modal'); //
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
    data: function data() {
        return {
            show: false,
            show1: false,
            show2: false,
            actions: ['打开相册', '打开相机'],
            actions1: ['样式一', '样式二', '样式三']

        };
    },
    created: function created() {},

    components: {
        ZfSheet: _index.ZfSheet
    },
    methods: {
        clickItem: function clickItem(e) {
            switch (e) {
                case 0:
                    this.show = true;
                    break;
                case 1:
                    this.show1 = true;
                    break;
                case 2:
                    this.show2 = true;
                    break;
            }
        },
        clickCancel: function clickCancel() {
            if (this.show) {
                this.show = false;
            }
            if (this.show1) {
                this.show1 = false;
            }
            if (this.show2) {
                this.show2 = false;
            }
        },
        clickSheetItem: function clickSheetItem(e) {
            if (this.show) {
                this.show = false;
            }
            if (this.show1) {
                this.show1 = false;
            }
            if (this.show2) {
                this.show2 = false;
            }
            modal.toast({
                message: e.value
            });
        }
    }
};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("样式一(默认样式)")]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["center"],
    on: {
      "click": function($event) {
        _vm.clickItem(0)
      }
    }
  }, [_vm._v("点击弹出")])]), _c('zf-sheet', {
    attrs: {
      "show": _vm.show,
      "actions": _vm.actions,
      "actionCancelTitle": "取消",
      "actionTitle": "选择方式"
    },
    on: {
      "clickItem": _vm.clickSheetItem,
      "clickCancel": _vm.clickCancel
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("样式二")]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["center"],
    on: {
      "click": function($event) {
        _vm.clickItem(1)
      }
    }
  }, [_vm._v("点击弹出样式二")])]), _c('zf-sheet', {
    attrs: {
      "show": _vm.show1,
      "actions": _vm.actions1,
      "actionCancelTitle": "取消"
    },
    on: {
      "clickItem": _vm.clickSheetItem,
      "clickCancel": _vm.clickCancel
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("样式三")]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["center"],
    on: {
      "click": function($event) {
        _vm.clickItem(2)
      }
    }
  }, [_vm._v("点击弹出样式三")])]), _c('zf-sheet', {
    attrs: {
      "show": _vm.show2,
      "canClickMask": "true",
      "actions": _vm.actions1
    },
    on: {
      "clickItem": _vm.clickSheetItem,
      "clickCancel": _vm.clickCancel
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);