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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "QfWi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "10dd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cipher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return KeyedCipher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HashedCipher; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UxE5");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Cipher = /*#__PURE__*/function (_Component) {
  _inherits(Cipher, _Component);
  var _super = _createSuper(Cipher);
  function Cipher(props) {
    var _this;
    _classCallCheck(this, Cipher);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "reverseString", function (string) {
      return string.split("").reverse().join("");
    });
    _defineProperty(_assertThisInitialized(_this), "getVal", function (char) {
      return (char === null || char === void 0 ? void 0 : char.toLowerCase().charCodeAt(0)) - 96;
    });
    _defineProperty(_assertThisInitialized(_this), "getChar", function (val) {
      return String.fromCharCode(val % 32 + 96);
    });
    _this.inputTextBox = Object(preact__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.outputTextBox = Object(preact__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    return _this;
  }
  _createClass(Cipher, [{
    key: "bEF",
    value: function bEF(string) {}
  }, {
    key: "bDF",
    value: function bDF(string) {}
  }, {
    key: "handleInputBoxChange",
    value: function handleInputBoxChange(event) {
      this.setState({
        value: event.target.value
      });
      this.encipher(false);
    }
  }, {
    key: "decipher",
    value: function decipher(keepCase) {
      var output = this.outputTextBox.current.value;
      if (keepCase) {
        this.inputTextBox.current.value = this.bDF(this.reverseString(this.bDF(this.reverseString(output)))).replaceAll("`", " ");
      } else {
        this.inputTextBox.current.value = this.bDF(this.reverseString(this.bDF(this.reverseString(output)))).replaceAll("`", " ").toLowerCase();
      }
    }
  }, {
    key: "encipher",
    value: function encipher(keepCase) {
      var input = this.inputTextBox.current.value;
      if (keepCase) {
        this.outputTextBox.current.value = this.reverseString(this.bEF(this.reverseString(this.bEF(input)))).replaceAll("`", " ");
      } else {
        this.outputTextBox.current.value = this.reverseString(this.bEF(this.reverseString(this.bEF(input)))).replaceAll("`", " ").toLowerCase();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return h("span", {
        class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ciphercontainer
      }, h("h1", null, this.state.title), h("p", null, h("textarea", {
        ref: this.inputTextBox,
        cols: "80",
        rows: "12",
        autoFocus: true,
        onKeyUp: function onKeyUp() {
          return _this2.encipher();
        },
        value: this.state.value
      })), h("p", {
        class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].arrow
      }, "\u2191"), h("p", null, h("button", {
        onClick: function onClick() {
          return _this2.decipher();
        }
      }, "Decipher")), h("p", {
        class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].arrow
      }, "\u2191"), h("p", null, h("textarea", {
        ref: this.outputTextBox,
        cols: "80",
        rows: "12"
      })));
    }
  }]);
  return Cipher;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);
var KeyedCipher = /*#__PURE__*/function (_Cipher) {
  _inherits(KeyedCipher, _Cipher);
  var _super2 = _createSuper(KeyedCipher);
  function KeyedCipher(props) {
    var _this3;
    _classCallCheck(this, KeyedCipher);
    _this3 = _super2.call(this, props);
    _this3.keyTextBox = Object(preact__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    return _this3;
  }
  _createClass(KeyedCipher, [{
    key: "getKey",
    value: function getKey() {
      return this.keyTextBox.current.value;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      return h("span", {
        class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ciphercontainer
      }, h("h1", null, this.state.title), h("p", null, h("textarea", {
        ref: this.inputTextBox,
        cols: "80",
        rows: "12",
        autoFocus: true,
        onKeyUp: function onKeyUp() {
          return _this4.encipher();
        },
        value: this.state.value
      })), h("p", {
        class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].arrow
      }, "\u2191"), h("p", {
        style: "display: flex; align-items: center; justify-content: center;"
      }, h("textarea", {
        ref: this.keyTextBox,
        class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].keyarea,
        id: "key",
        cols: "20",
        rows: "1",
        maxlength: "20",
        placeholder: "Key:"
      }), h("button", {
        class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].keybutton,
        onClick: function onClick() {
          return _this4.decipher();
        }
      }, "Decipher")), h("p", {
        class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].arrow
      }, "\u2191"), h("p", null, h("textarea", {
        ref: this.outputTextBox,
        cols: "80",
        rows: "12"
      })));
    }
  }]);
  return KeyedCipher;
}(Cipher);

//TODO: note, i cannot support anything in this class
//quick, hacky copy+paste job - breaks in strict mode, needed workaround - not sure why workaround even works??
// TOUCH ONLY WITH A POOL ROD
var HashedCipher = /*#__PURE__*/function (_KeyedCipher) {
  _inherits(HashedCipher, _KeyedCipher);
  var _super3 = _createSuper(HashedCipher);
  function HashedCipher() {
    var _this5;
    _classCallCheck(this, HashedCipher);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this5 = _super3.call.apply(_super3, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this5), "hash", function () {
      function getVal(char) {
        if (char != undefined) return char.toLowerCase().charCodeAt(0) - 96;
      }
      function getChar(val) {
        return String.fromCharCode(val % 32 + 96);
      }
      var complexity = 2;
      var i, j;
      function combineBlocks(array) {
        if (array.length == 1) return array;
        var output = [];
        var interm = "";
        for (i = 1; i < array.length; i++) {
          for (j = 0; j < 64; j++) {
            interm = interm + getChar(getVal(array[i - 1][j]) ^ getVal(array[i][j]));
          }
          output.push(interm);
          interm = "";
        }
        return combineBlocks(output); //.replaceAll("\x7F", " ");
      }

      function hash(input) {
        if (input.length == 0) return input;
        return rentropise(combineBlocks(split(rentropise(input.toString())))).replaceAll("\x7F", " ").substring(0, 63);
      }
      function split(string) {
        for (i = 0; string.length % 64 != 0; i++) {
          string = string + rentropise(string[string.length - 1])[i % 256];
        }
        string = string + rentropise(string[string.length - 1])[62];
        var cnt = 0;
        var output = [""];
        for (var _i = 0; _i < string.length; _i += 64) {
          output[cnt] = string.substring(_i - 64, _i);
          cnt++;
        }
        output.shift();
        return output;
      }
      function rentropise(string) {
        return entropise(string, string.length);
      }
      function entropise(string, sL) {
        if (string.length > 64 * complexity) return string;
        string += getChar(Math.pow(sL, 2) + Math.sqrt(Math.pow(string.length, 3)) + 2 * (getTotalVal(string, 0) + getTotalVal(string, 1)));
        return entropise(string, 0);
      }
      function getTotalVal(string, mode) {
        var total = 0;
        switch (mode) {
          case 0:
            for (i = 0; i < string.length; i++) {
              total += getVal(string[i]);
            }
            return total;
          default:
            for (i = 0; i < string.length; i++) {
              if (i % 2 == 0) total = Math.max(total, 1) * Math.ceil(getVal(string[i]));
            }
            return total;
        }
      }
      return hash;
    }());
    return _this5;
  }
  return _createClass(HashedCipher);
}(KeyedCipher);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "2kgO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* unused harmony export showcases */
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Y3FI");
/* eslint-disable react/jsx-key */

var showcases = [{
  link: "/projects/0090C4",
  name: "0090C4",
  desc: "A cipher with the distinguishing feature being an offset of 0x0090C4.",
  keywords: "weez'd 2 k0090c4 cipher"
}, {
  link: "/projects/bipher",
  name: "Bipher",
  desc: ["Variation of the ", h(preact_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: "/projects/keysmashCipher"
  }, "Keysmash Cipher"), ", improving upon it by simply applying it twice."],
  keywords: "keysmash cipher bipher"
}, {
  link: "/projects/caesarVariation",
  name: "Caesar Variation",
  desc: "This is the famous Caesar Cipher, but the change by 3 is replaced with an alternative.",
  keywords: "cipher caesarvariation caesar variation"
}, {
  link: "/projects/continuousRegisterCipher",
  name: "Continuous Register Cipher",
  desc: "This cipher works by incrementing a counter per character it sees, then outputting the current value.",
  keywords: "crc continuousregistercipher continuous register cipher"
}, {
  link: "/projects/hashKeyCipher",
  name: "Hashed CRC",
  desc: ["This cipher is a direct improvement over the ", h(preact_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: "/projects/keyedCRC"
  }, "Keyed CRC"), ", including a hash over the key-based security it offers."],
  keywords: "continuous register cipher hashed crc hashkeycipher"
}, {
  link: "/projects/hCRCRework",
  name: "Hashed CRC: Reworked",
  desc: ["Another iteration upon the CRC, with the base being the ", h(preact_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: "/projects/hashKeyCipher"
  }, "Hashed CRC"), ", updated with an improved hashing algorithm."],
  keywords: "continuous register cipher hcrcrework hashed crc: reworked"
}, {
  link: "/projects/K0090C4",
  name: "Weez'd 2",
  desc: [h(preact_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: "/projects/0090C4"
  }, "0090C4"), "'s key-integrated alternative."],
  keywords: "0090c4 cipher k0090c4 weez'd 2"
}, {
  link: "/projects/keyedCRC",
  name: "Keyed CRC",
  desc: ["A key-based security improvement over the original  ", h(preact_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: "/projects/continuousRegisterCipher"
  }, "Continuous Register Cipher"), "."],
  keywords: "continuous register cipher keyedcrc keyed crc"
}, {
  link: "/projects/keysmashCipher",
  name: "Keysmash Cipher",
  desc: "The original cipher, that got us here.",
  keywords: "bipher keysmashcipher keysmash cipher"
}, {
  link: "/projects/poetry",
  name: "Poems",
  desc: "A collection of poems written by me, your loyal site administrator.",
  keywords: "ignorance someone else's panopticon poems poetry"
}, {
  link: "/projects/mcserverping",
  name: "Minecraft Server Pinger",
  desc: "A quick tool to check who is online on a specified Minecraft: Java Edition server, and a few more things.",
  keywords: "minecraft server pinger mc"
}, {
  link: "/projects/backgroundcreator",
  name: "Background Creator (Beta)",
  desc: "A powerful tool which allows for creation of backgrounds (wallpapers) using only circles and layers.",
  keywords: "background creator circles layers wallpaper (beta)"
}, {
  link: "/projects/embedCreator",
  name: "Embed Creator (Beta)",
  desc: "A tool to create custom link embeds on external sites that display link previews.",
  keywords: "embed creator external previews (beta)"
}];
/* harmony default export */ __webpack_exports__["a"] = (showcases);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "3br2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* unused harmony export Home */
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FA6U");
/* harmony import */ var _components_showcases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8M9P");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ox/y");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(preact_router_match__WEBPACK_IMPORTED_MODULE_2__);



var items = [{
  name: "Website Projects",
  desc: "Here you can find all my web-based projects.",
  link: "/projects"
}, {
  name: "Portfolio",
  desc: "My projects that run elsewhere, working with different languages.",
  link: "/portfolio"
}, {
  name: "Documentation",
  desc: "Documentation of all my formally released projects, web-based or not.",
  link: "/docs"
}];
var Home = function Home() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].home
  }, h("p", null, "Welcome! This site is a collection of tools, for me or anyone else who can make use of them. They may find aid in the ", h(preact_router_match__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/docs"
  }, "docs"), ", of course."), h("p", null, "If you are, however, looking for something new to try, there are options below with varying degrees of effort and processor power required."), h(_components_showcases__WEBPACK_IMPORTED_MODULE_1__[/* Showcase */ "a"], {
    item: items[0]
  }), h(_components_showcases__WEBPACK_IMPORTED_MODULE_1__[/* Showcase */ "a"], {
    item: items[1]
  }), h(_components_showcases__WEBPACK_IMPORTED_MODULE_1__[/* Showcase */ "a"], {
    item: items[2]
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (Home);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "59Wk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"searchbar":"searchbar__gYPpE"});

/***/ }),

/***/ "5PBX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("59Wk");

var Searchbar = function Searchbar(props) {
  var parent = props.parent;
  var handleChange = function handleChange(event) {
    parent.search(event.target.value, parent.props.items);
  };
  return h("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].searchbar
  }, h("input", {
    placeholder: "Search...",
    onInput: handleChange,
    autoFocus: true
  }), h("button", null, h("img", {
    src: "/assets/search.png",
    alt: ""
  })));
};
/* harmony default export */ __webpack_exports__["a"] = (Searchbar);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "6NaM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"errorbody":"errorbody__Cwt+z","title":"title__zaIng","text":"text__hdvbm","link":"link__XeQ17"});

/***/ }),

/***/ "6YPM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"pinger":"pinger__Dr7-L"});

/***/ }),

/***/ "8M9P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Fragment) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Showcase; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dwRq");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ox/y");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(preact_router_match__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _searchbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5PBX");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Showcases = /*#__PURE__*/function (_Component) {
  _inherits(Showcases, _Component);
  var _super = _createSuper(Showcases);
  function Showcases(props) {
    var _this;
    _classCallCheck(this, Showcases);
    _this = _super.call(this, props);
    var showcaseWidgets = props.items.filter(function (item) {
      return !item.hidden;
    }).map(function (item) {
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Showcase, {
        item: item,
        key: item.link
      });
    });
    _this.state = {
      showcaseWidgets: showcaseWidgets
    };
    return _this;
  }
  _createClass(Showcases, [{
    key: "render",
    value: function render() {
      // style written like that due to the '-' in the name
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Fragment, null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("header", {
        class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].spacer
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]["showcase-container"]
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_searchbar__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        parent: this
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.state.showcaseWidgets)));
    }
  }, {
    key: "search",
    value: function search(query, items) {
      query = query.toLowerCase();
      var showcaseWidgets = items.filter(function (item) {
        return item.keywords.includes(query);
      }).map(function (item) {
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Showcase, {
          item: item,
          key: item.link
        });
      });
      this.setState({
        showcaseWidgets: showcaseWidgets
      });
    }
  }]);
  return Showcases;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);
var Showcase = function Showcase(props) {
  var item = props.item;
  var name = item.name,
    desc = item.desc,
    link = item.link;
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].showcase
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].header
  }, name), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].desc
  }, desc), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(preact_router_match__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].link,
    href: link
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", null, "Go!")));
};
/* harmony default export */ __webpack_exports__["b"] = (Showcases);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "9ZoI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* unused harmony default export */ var _unused_webpack_default_export = ({"home":"home__TjhaP","bg":"bg__Po6T5"});

/***/ }),

/***/ "AQju":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony import */ var _components_showcases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8M9P");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Y3FI");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TQsQ");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/* eslint-disable react/jsx-key */



var poems = [{
  link: "/projects/poetry/Ignorance",
  desc: "Ignorance",
  keywords: "ignorance"
}, {
  link: "/projects/poetry/someoneElsesPanopticon",
  desc: "Someone Else's Panopticon",
  keywords: "someone elses else's panopticon"
}, {
  link: "/projects/poetry/nothingWithoutMe",
  desc: "You are Nothing without me",
  keywords: "you are nothing without me",
  hidden: true
}, {
  link: "/projects/poetry/moonlitOverpass",
  desc: "Moonlit Overpass",
  keywords: "moonlit overpass",
  hidden: true
}];
var Index = function Index() {
  return h(PoemsShowcases, {
    items: poems
  });
};
var PoemsShowcases = /*#__PURE__*/function (_Showcases) {
  _inherits(PoemsShowcases, _Showcases);
  var _super = _createSuper(PoemsShowcases);
  function PoemsShowcases(props) {
    var _this;
    _classCallCheck(this, PoemsShowcases);
    _this = _super.call(this, props);
    var showcaseWidgets = props.items.filter(function (item) {
      return !item.hidden;
    }).map(function (item) {
      return h(_components_showcases__WEBPACK_IMPORTED_MODULE_0__[/* Showcase */ "a"], {
        item: item,
        key: item.link
      });
    });
    _this.state = {
      showcaseWidgets: showcaseWidgets
    };
    return _this;
  }
  _createClass(PoemsShowcases, [{
    key: "search",
    value: function search(query, items) {
      query = query.toLowerCase();
      var showcaseWidgets;
      if (query === "hidden") {
        showcaseWidgets = items.filter(function (item) {
          return item.hidden;
        }).map(function (item) {
          return h(_components_showcases__WEBPACK_IMPORTED_MODULE_0__[/* Showcase */ "a"], {
            item: item,
            key: item.link
          });
        });
      } else {
        showcaseWidgets = items.filter(function (item) {
          return !item.hidden && item.keywords.includes(query);
        }).map(function (item) {
          return h(_components_showcases__WEBPACK_IMPORTED_MODULE_0__[/* Showcase */ "a"], {
            item: item,
            key: item.link
          });
        });
      }
      this.setState({
        showcaseWidgets: showcaseWidgets
      });
    }
  }]);
  return PoemsShowcases;
}(_components_showcases__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"]);
var Poem = function Poem(props) {
  var title = props.title,
    poem = props.poem;
  return h("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].poemcontainer
  }, h("br", null), h("fieldset", null, h("legend", null, title), h("span", null, poem)), h("br", null), h(preact_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/projects/poetry"
  }, "Back"), h("p", null));
};
var Igno = function Igno() {
  var text = ["I laid still, in a field of grass,", "The curve of a lifetime forgotten,", "Traceable,", "", "The grass of a thousand lives before me,", "Each identical under the gaze of the masses,", "Each with such story,", "Such individuality,", "", "A tree stands, squats: the horizon calls,", "You ignore it,", "", "As you distance, trees disappear,", "Forests give way to cities;", "Give way to the trap,", "", "Hundreds of trees stand, still,", "Surrounded by smoke and steel,", "A breath of fresh air no more than a myth,", "", "I lay once again in this former field,", "", "You see me, silently approach;", "I think: I know your words;", "But you just walk away,", "Once more."];
  var poem = text.map(function (line) {
    return h(Fragment, null, line, h("br", null));
  });
  return h(Poem, {
    title: "Ignorance",
    poem: poem
  });
};
var Smep = function Smep() {
  var text = ["I look outside, after silence,", "I look inside, I see flashes,", "Flashes of light reflected in me,", "", "Flashes in the past tense,", "Thoughts from sounds ago,", "", "Can't hold a conversation,", "Too caught up in my own", "Head, turning to look at another screen,", "", "Spot another camera,", "Regulate my behaviour,", "", "What concrete madness we live in,", "Block it all out; next time it shows,", "I'm different, it's all alien. "];
  var poem = text.map(function (line) {
    return h(Fragment, null, line, h("br", null));
  });
  return h(Poem, {
    title: "Someone Else's Panopticon",
    poem: poem
  });
};
var Yanwe = function Yanwe() {
  var text = ["A ray of hope, caught in a razor,", "what's next is anyone's guess,", "", "A sharp line of skin,", "A slicing, stinging, burning pain,", "and the past comes rushing back.", "", "Rushing, like the veins,", "like the arteries,", " which don't suffer thought:", "saying, \"You are Nothing without me\"", "", "They are not alone in their message,", "Echoed by scars,", "Repeated by the scales,", "A prisoner turned against its sole possesor."];
  var poem = text.map(function (line) {
    return h(Fragment, null, line, h("br", null));
  });
  return h(Poem, {
    title: "You are Nothing without me",
    poem: poem
  });
};
var Mnop = function Mnop() {
  var text = ["The beauty of the moon,", "seen from a million miles away,", "stunning still from a pillow,", "A view rivalled only by:", "", "That of a rural bridge,", "over the tracks, chasing,", "A rolling landscape,", "Ended by a tree.", "", "Soaring.", "", "A bridge chased away,", "Supports a body not,", "So it soars and falls,", "Towards the tracks below.", "", "Onwards and downwards,", "As gravity runs course,", "A body finds the ground,", "Passing underneath.", "", "Searing."];
  var poem = text.map(function (line) {
    return h(Fragment, null, line, h("br", null));
  });
  return h(Poem, {
    title: "Moonlit Overpass",
    poem: poem
  });
};
var Poems = {
  Index: Index,
  Igno: Igno,
  Smep: Smep,
  Yanwe: Yanwe,
  Mnop: Mnop
};
/* harmony default export */ __webpack_exports__["a"] = (Poems);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "Eb7j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"portfolio":"portfolio__Cz5s5"});

/***/ }),

/***/ "FA6U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"home":"home__uRcqa"});

/***/ }),

/***/ "FsrD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nxe/");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var InputForm = function InputForm(props) {
  var type = props.type,
    update = props.update;
  return h(Fragment, null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].inputTag
  }, h("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].descriptionTag
  }, type, ": "), h("textarea", {
    maxlength: "500",
    rows: "1",
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].textTag,
    onChange: update,
    placeholder: "optional..."
  })), h("br", null));
};
var OutputDisplay = function OutputDisplay(props) {
  var URLID = props.URLID;
  var copyLink = function copyLink() {
    var _navigator;
    if (typeof window === "undefined" || typeof ((_navigator = navigator) === null || _navigator === void 0 ? void 0 : _navigator.clipboard) === "undefined") return;
    var url = "https://api.xtraea.com/v1/embed?s=".concat(URLID);
    navigator.clipboard.writeText(url);
  };
  return h(Fragment, null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].outputContainer
  }, h("button", {
    onClick: copyLink,
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].outputButton
  }, "Copy to clipboard"), h("p", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].textTag, " ").concat(_style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].output)
  }, "https://api.xtraea.com/v1/embed?s=".concat(URLID))));
};
var EmbedCreator = function EmbedCreator() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "b"])(),
    _useState2 = _slicedToArray(_useState, 2),
    title = _useState2[0],
    setTitle = _useState2[1];
  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "b"])(),
    _useState4 = _slicedToArray(_useState3, 2),
    description = _useState4[0],
    setDescription = _useState4[1];
  var _useState5 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "b"])(),
    _useState6 = _slicedToArray(_useState5, 2),
    image = _useState6[0],
    setImage = _useState6[1];
  var _useState7 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "b"])(),
    _useState8 = _slicedToArray(_useState7, 2),
    color = _useState8[0],
    setColor = _useState8[1];
  var _useState9 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "b"])("..."),
    _useState10 = _slicedToArray(_useState9, 2),
    outputURL = _useState10[0],
    setOutput = _useState10[1];
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var responseJSON = JSON.parse(request.responseText);
      setOutput(responseJSON.response);
    }
  };
  var submit = function submit() {
    var authXHR = new XMLHttpRequest();
    authXHR.open("GET", "https://api.xtraea.com/_/health?auth=true");
    authXHR.send();
    request.open("POST", "https://api.xtraea.com/v1/embed");
    var headers = {
      title: title,
      description: description,
      image: image,
      color: color
    };
    var none = true;
    for (var _i2 = 0, _Object$entries = Object.entries(headers); _i2 < _Object$entries.length; _i2++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        name = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      if (value) {
        none = false;
        request.setRequestHeader(name, value);
      }
    }
    if (!none) request.send();
    return;
  };
  return h(Fragment, null, h("br", null), h("p", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].textDescription
  }, "A tool to create custom link embeds on external sites that display link previews.", h("br", null), h("br", null), "Title: The text at the top of an embed; can be clicked.", h("br", null), "Description: Typically the text displayed under the title.", h("br", null), "Image: Link to an image to embed into the external site. In some cases the link may need cleaning, such as if there is a '?' or a '#'. To clean the link, simply remove the '?'/'#' and anything that follows it.", h("br", null), "Color: If the external site supports an accent color, this will set it. Enter as a hex code, without a '#' before it."), h(InputForm, {
    type: "Title",
    update: function update(e) {
      return setTitle(e.target.value);
    }
  }), h(InputForm, {
    type: "Description",
    update: function update(e) {
      return setDescription(e.target.value);
    }
  }), h(InputForm, {
    type: "Image",
    update: function update(e) {
      return setImage(e.target.value);
    }
  }), h(InputForm, {
    type: "Color",
    update: function update(e) {
      return setColor(e.target.value);
    }
  }), h("br", null), h("button", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].submitButton,
    onClick: submit
  }, "Generate embed link"), h("br", null), h("br", null), h("br", null), h(OutputDisplay, {
    URLID: outputURL
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (EmbedCreator);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "GFNa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "O2Vz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UnQz");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2kgO");
/* harmony import */ var _components_showcases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8M9P");



var Projects = function Projects() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].showcases
  }, h(_components_showcases__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"], {
    items: _text__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  }), h("p", null, "This is where all my projects are stored. Click any you like the look of!", h("br", null), h("a", {
    href: "/",
    rel: "noopener noreferrer"
  }, "Home")), h("footer", null));
};
/* harmony default export */ __webpack_exports__["a"] = (Projects);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "QRet":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useCallback */
/* unused harmony export useContext */
/* unused harmony export useDebugValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return h; });
/* unused harmony export useErrorBoundary */
/* unused harmony export useId */
/* unused harmony export useImperativeHandle */
/* unused harmony export useLayoutEffect */
/* unused harmony export useMemo */
/* unused harmony export useReducer */
/* unused harmony export useRef */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return p; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

var t,
  r,
  u,
  i,
  o = 0,
  f = [],
  c = [],
  e = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b,
  a = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,
  v = preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,
  l = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,
  m = preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;
function d(t, u) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(r, t, o || u), o = 0;
  var i = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: c
  }), i.__[t];
}
function p(n) {
  return o = 1, y(B, n);
}
function y(n, u, i) {
  var o = d(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.u)) {
    r.u = !0;
    var f = r.shouldComponentUpdate;
    r.shouldComponentUpdate = function (n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !f || f.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!f || f.call(this, n, t, r));
    };
  }
  return o.__N || o.__;
}
function h(u, i) {
  var o = d(t++, 3);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
}
function s(u, i) {
  var o = d(t++, 4);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
}
function _(n) {
  return o = 5, F(function () {
    return {
      current: n
    };
  }, []);
}
function A(n, t, r) {
  o = 6, s(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function F(n, r) {
  var u = d(t++, 7);
  return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
  return o = 8, F(function () {
    return n;
  }, t);
}
function q(n) {
  var u = r.context[n.__c],
    i = d(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function x(t, r) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue && preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(r ? r(t) : t);
}
function P(n) {
  var u = d(t++, 10),
    i = p();
  return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function V() {
  var n = d(t++, 11);
  if (!n.__) {
    for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function b() {
  for (var t; t = f.shift();) if (t.__P && t.__H) try {
    t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, t.__v);
  }
}
preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b = function (n) {
  r = null, e && e(n);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r = function (n) {
  a && a(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [])), u = r;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed = function (t) {
  v && v(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame || ((i = preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), u = r = null;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
        return !n.__ || w(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u, t.__v);
    }
  }), l && l(t, r);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount = function (t) {
  m && m(t);
  var r,
    u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
  var t,
    r = function r() {
      clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  g && (t = requestAnimationFrame(r));
}
function k(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function w(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function z(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function B(n, t) {
  return "function" == typeof t ? t(n) : t;
}


/***/ }),

/***/ "QfWi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Y3FI");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("GFNa");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QyV/");
/* harmony import */ var _routes_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3br2");
/* harmony import */ var _routes_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("O2Vz");
/* harmony import */ var _routes_projects_pinger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("W0J3");
/* harmony import */ var _routes_projects_ciphers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("WiEw");
/* harmony import */ var _routes_projects_poems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("AQju");
/* harmony import */ var _routes_projects_backgroundcreator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("t/1Q");
/* harmony import */ var _routes_projects_embedCreator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("FsrD");
/* harmony import */ var _routes_portfolio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("ohOX");
/* harmony import */ var _routes_docs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("TJL8");
/* harmony import */ var _routes_error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("ScL5");




// Code-splitting is automated for `routes` directory










var App = function App() {
  return h("div", {
    id: "app"
  }, h(_components_header__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), h(preact_router__WEBPACK_IMPORTED_MODULE_0__["Router"], null, h(_routes_home__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    path: "/"
  }), h(_routes_projects__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    path: "/projects/"
  }), h(_routes_projects_pinger__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    path: "/projects/mcserverping"
  }), h(_routes_projects_ciphers__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].Weezd, {
    path: "/projects/0090C4/"
  }), h(_routes_projects_ciphers__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].Bipher, {
    path: "/projects/bipher/"
  }), h(_routes_projects_ciphers__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].CaesarVariation, {
    path: "/projects/caesarVariation/"
  }), h(_routes_projects_ciphers__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].CRC, {
    path: "/projects/continuousRegisterCipher/"
  }), h(_routes_projects_ciphers__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].HashKeyCipher, {
    path: "/projects/hashKeyCipher/"
  }), h(_routes_projects_ciphers__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].KCRC, {
    path: "/projects/keyedCRC/"
  }), h(_routes_projects_ciphers__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].HKCRCR, {
    path: "/projects/hCRCRework/"
  }), h(_routes_projects_ciphers__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].Weezd2, {
    path: "/projects/K0090C4/"
  }), h(_routes_projects_ciphers__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].Keysmash, {
    path: "/projects/keysmashCipher/"
  }), h(_routes_projects_poems__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].Index, {
    path: "/projects/poetry/"
  }), h(_routes_projects_poems__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].Igno, {
    path: "/projects/poetry/Ignorance/"
  }), h(_routes_projects_poems__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].Smep, {
    path: "/projects/poetry/someoneElsesPanopticon/"
  }), h(_routes_projects_poems__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].Yanwe, {
    path: "/projects/poetry/nothingWithoutMe/"
  }), h(_routes_projects_poems__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].Mnop, {
    path: "/projects/poetry/moonlitOverpass/"
  }), h(_routes_projects_backgroundcreator__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    path: "/projects/backgroundcreator/"
  }), h(_routes_projects_embedCreator__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    path: "/projects/embedCreator"
  }), h(_routes_portfolio__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    path: "/portfolio/"
  }), h(_routes_docs__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    path: "/docs/"
  }), h(_routes_error__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    default: true
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (App);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "QyV/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ox/y");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact_router_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QRet");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ySiU");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Header = function Header() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "b"])(),
    _useState2 = _slicedToArray(_useState, 2),
    _ = _useState2[0],
    rerender = _useState2[1];
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useEffect */ "a"])(function () {
    var resizeHandler = function resizeHandler() {
      rerender({});
    };
    window.addEventListener('resize', resizeHandler);
    return function () {
      window.removeEventListener('resize', resizeHandler);
    };
  });
  var isHidden = false;
  if (typeof window !== "undefined") isHidden = screen.height === window.innerHeight;
  return h(Fragment, null, h("header", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].header,
    hidden: isHidden
  }, h("h1", null, "xtraea.com"), h("nav", null, h(preact_router_match__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: "/"
  }, "Home"), h(preact_router_match__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: "/projects"
  }, "Projects"), h(preact_router_match__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: "/portfolio"
  }, "Portfolio"), h(preact_router_match__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: "/docs"
  }, "Documentation"))), h("header", null));
};
/* harmony default export */ __webpack_exports__["a"] = (Header);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "ScL5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6NaM");

var Error = function Error() {
  return h("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].errorbody
  }, h("p", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].title
  }, "404: Page Not Found"), h("p", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].text
  }, "One of us has made a mistake... ", h("br", null), "But neither wants to admit it. You could head to the ", h("br", null), h("a", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].link,
    href: "/"
  }, "home"), " page and forget this ever happened."));
};
/* harmony default export */ __webpack_exports__["a"] = (Error);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "TJL8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9ZoI");

var Docs = function Docs() {
  return h("div", null, h("p", null, "docs"));
};
/* harmony default export */ __webpack_exports__["a"] = (Docs);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "TQsQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"poemcontainer":"poemcontainer__gSEPI"});

/***/ }),

/***/ "UnQz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"showcases":"showcases__UhJnS"});

/***/ }),

/***/ "UxE5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"ciphercontainer":"ciphercontainer__NSqUO","arrow":"arrow__tYCQh","keybutton":"keybutton__Wmt+e"});

/***/ }),

/***/ "W0J3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6YPM");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Pinger = function Pinger() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "b"])(),
    _useState2 = _slicedToArray(_useState, 2),
    rawAddress = _useState2[0],
    setAddress = _useState2[1];
  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "b"])(),
    _useState4 = _slicedToArray(_useState3, 2),
    output = _useState4[0],
    setOutput = _useState4[1];
  var _useState5 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "b"])(),
    _useState6 = _slicedToArray(_useState5, 2),
    playerList = _useState6[0],
    setPlayerList = _useState6[1];
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var responseJSON = JSON.parse(request.responseText);
      var playerCount = responseJSON.players.max === 0 ? "Invalid IP/Server offline!" : "".concat(responseJSON.players.now, "/").concat(responseJSON.players.max, " players online!");
      var _playerList = responseJSON.players.sample.map(function (player) {
        return player.name;
      });
      setOutput(playerCount);
      setPlayerList(_playerList);
    }
  };
  var gather = function gather() {
    // 25565 == Minecraft: JE default port
    var _rawAddress$split = rawAddress.split(":"),
      _rawAddress$split2 = _slicedToArray(_rawAddress$split, 2),
      address = _rawAddress$split2[0],
      _rawAddress$split2$ = _rawAddress$split2[1],
      port = _rawAddress$split2$ === void 0 ? 25565 : _rawAddress$split2$;
    request.open("GET", "https://mcapi.us/server/status?ip=".concat(address, "&port=").concat(port));
    request.send();
  };
  return h("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].pinger
  }, h("p", null, "Enter the server's address (and port, if applicable): "), h("br", null), h("input", {
    onChange: function onChange(event) {
      return setAddress(event.target.value);
    },
    type: "text"
  }), h("br", null), h("button", {
    onclick: gather
  }, "Click to ping the server for information!"), h("br", null), h("p", null, "The results will be displayed below: "), h(DisplayOutput, {
    output: output,
    playerList: playerList
  }));
};
//TODO: maybe make into player cards? have skin head shown? + fits with theme of site
//TODO: move into components; does it really belong here? - cant exactly be reused
var DisplayOutput = function DisplayOutput(props) {
  var output = props.output,
    playerList = props.playerList;
  var linkArray = [];
  for (var i = 0; i < (playerList === null || playerList === void 0 ? void 0 : playerList.length); i++) {
    if (playerList[i].includes("§")) continue;
    linkArray.push(h(Fragment, null, h("a", {
      href: "https://namemc.com/profile/".concat(playerList[i])
    }, playerList[i]), h("br", null)));
  }
  return h(Fragment, null, h("p", null, output), h("p", null, linkArray));
};
/* harmony default export */ __webpack_exports__["a"] = (Pinger);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "WiEw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony import */ var _components_cipher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("10dd");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ox/y");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(preact_router_match__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Weezd = /*#__PURE__*/function (_Cipher) {
  _inherits(Weezd, _Cipher);
  var _super = _createSuper(Weezd);
  function Weezd(props) {
    var _this;
    _classCallCheck(this, Weezd);
    _this = _super.call(this, props);
    _this.state = {
      title: "Weez'd"
    };
    return _this;
  }
  _createClass(Weezd, [{
    key: "bEF",
    value: function bEF(string) {
      var output = string[0];
      for (var i = 1; i < string.length; i++) {
        output += String.fromCharCode(string[i].charCodeAt() + string[i - 1].charCodeAt() + 0x0090C4);
      }
      return output;
    }
  }, {
    key: "bDF",
    value: function bDF(string) {
      var output = string[0];
      for (var i = 1; i < string.length; i++) {
        output += String.fromCharCode(string[i].charCodeAt() - output[i - 1].charCodeAt() - 0x0090C4);
      }
      return output.toString();
    }
  }]);
  return Weezd;
}(_components_cipher__WEBPACK_IMPORTED_MODULE_0__[/* Cipher */ "a"]);
var Bipher = /*#__PURE__*/function (_Cipher2) {
  _inherits(Bipher, _Cipher2);
  var _super2 = _createSuper(Bipher);
  function Bipher(props) {
    var _this2;
    _classCallCheck(this, Bipher);
    _this2 = _super2.call(this, props);
    _this2.state = {
      title: "Bipher"
    };
    return _this2;
  }
  _createClass(Bipher, [{
    key: "bEF",
    value: function bEF(string) {
      var retVal = string[0];
      for (var i = 1; i < string.length; i++) {
        retVal += this.getChar((this.getVal(string[i]) + this.getVal(string[i - 1])) % 32);
      }
      return retVal;
    }
  }, {
    key: "bDF",
    value: function bDF(string) {
      var retVal = string[0];
      for (var i = 1; i < string.length; i++) {
        retVal += this.getChar((this.getVal(string[i]) - this.getVal(retVal[i - 1])) % 32);
      }
      return retVal;
    }
  }]);
  return Bipher;
}(_components_cipher__WEBPACK_IMPORTED_MODULE_0__[/* Cipher */ "a"]);
var CaesarVariation = /*#__PURE__*/function (_Cipher3) {
  _inherits(CaesarVariation, _Cipher3);
  var _super3 = _createSuper(CaesarVariation);
  function CaesarVariation(props) {
    var _this3;
    _classCallCheck(this, CaesarVariation);
    _this3 = _super3.call(this, props);
    _this3.state = {
      title: "Caesar Variation Cipher"
    };
    return _this3;
  }
  _createClass(CaesarVariation, [{
    key: "bEF",
    value: function bEF(string) {
      var output = "";
      var constant = string.length % 16 == 0 ? 1 : string.length % 32;
      for (var i = 0; i < string.length; i++) {
        output += this.getChar(this.getVal(string[i]) + constant % 32);
      }
      return output;
    }
  }, {
    key: "bDF",
    value: function bDF(string) {
      var output = "";
      var constant = string.length % 32 == 0 ? 1 : string.length;
      for (var i = 0; i < string.length; i++) {
        output += this.getChar(this.getVal(string[i]) - constant % 32);
      }
      return output;
    }
  }]);
  return CaesarVariation;
}(_components_cipher__WEBPACK_IMPORTED_MODULE_0__[/* Cipher */ "a"]);
var CRC = /*#__PURE__*/function (_Cipher4) {
  _inherits(CRC, _Cipher4);
  var _super4 = _createSuper(CRC);
  function CRC(props) {
    var _this4;
    _classCallCheck(this, CRC);
    _this4 = _super4.call(this, props);
    _this4.state = {
      title: "Continuous Register Cipher"
    };
    return _this4;
  }
  _createClass(CRC, [{
    key: "bEF",
    value: function bEF(string) {
      var register = 0;
      var output = "";
      for (var i = 0; i < string.length; i++) {
        // eslint-disable-next-line no-undef
        register = (register + getVal(string[i])) % 32;
        // eslint-disable-next-line no-undef
        output += getChar(register);
      }
      return output;
    }
  }, {
    key: "bDF",
    value: function bDF(string) {
      var output = string[0];
      for (var i = 1; i < string.length; i++) {
        // eslint-disable-next-line no-undef
        output += getChar(getVal(string[i]) - getVal(string[i - 1]));
      }
      return output;
    }
  }]);
  return CRC;
}(_components_cipher__WEBPACK_IMPORTED_MODULE_0__[/* Cipher */ "a"]);
var KCRC = /*#__PURE__*/function (_KeyedCipher) {
  _inherits(KCRC, _KeyedCipher);
  var _super5 = _createSuper(KCRC);
  function KCRC(props) {
    var _this5;
    _classCallCheck(this, KCRC);
    _this5 = _super5.call(this, props);
    _this5.state = {
      title: "Keyed CRC"
    };
    return _this5;
  }
  _createClass(KCRC, [{
    key: "bEF",
    value: function bEF(string) {
      var register = 0;
      var output = "";
      var key = this.getKey();
      for (var i = 0; i < string.length; i++) {
        register = (register + this.getVal(string[i])) % 32;
        output += this.getChar(register);
      }
      string = output;
      output = "";
      for (var _i = 0; _i < string.length; _i++) {
        output += this.getChar(this.getVal(string[_i]) + this.getVal(key[_i % key.length]));
      }
      return output;
    }
  }, {
    key: "bDF",
    value: function bDF(string) {
      var output = "";
      var key = this.getKey();
      for (var i = 0; i < string.length; i++) {
        output += this.getChar(this.getVal(string[i]) - this.getVal(key[i % key.length]));
      }
      string = output;
      output = string[0];
      for (var _i2 = 1; _i2 < string.length; _i2++) {
        output += this.getChar(this.getVal(string[_i2]) - this.getVal(string[_i2 - 1]));
      }
      return output;
    }
  }]);
  return KCRC;
}(_components_cipher__WEBPACK_IMPORTED_MODULE_0__[/* KeyedCipher */ "c"]);
/*class FHKCRC extends HashedCipher {
    bEF(string) {
        let register = 0;
        let output = "";
        for (let i = 0; i < string.length; i++) {
            register = (register + this.getVal(string[i])) % 32;
            output += this.getChar(register);
        }
        string = output;
        const key = this.hash(this.getKey());
        output = "";
        for (let i = 0; i < string.length; i++) {
            output += this.getChar(this.getVal(string[i]) + this.getVal(key[i % key.length]));
        }
        return output;
    }
    bDF(string) {
        let output = "";
        const key = this.hash(this.getKey());
        for (let i = 0; i < string.length; i++) {
            output += this.getChar(this.getVal(string[i]) - this.getVal(key[i % key.length]));
        }
        string = output;
        output = string[0];
        for (let i = 1; i < string.length; i++) {
            output += this.getChar(this.getVal(string[i]) - this.getVal(string[i - 1]));
        }
        return output;
    }
    constructor(props) {
        super(props);
        this.state = {title: "Fast Hashed CRC"};
    }
}*/
// shits not real???
var HKCRCR = /*#__PURE__*/function (_HashedCipher) {
  _inherits(HKCRCR, _HashedCipher);
  var _super6 = _createSuper(HKCRCR);
  function HKCRCR(props) {
    var _this6;
    _classCallCheck(this, HKCRCR);
    _this6 = _super6.call(this, props);
    _this6.state = {
      title: "Hashed CRC: Reworked"
    };
    return _this6;
  }
  _createClass(HKCRCR, [{
    key: "bEF",
    value: function bEF(string) {
      var register = 0;
      var output = "";
      for (var i = 0; i < string.length; i++) {
        register = (register + this.getVal(string[i])) % 32;
        output += this.getChar(register);
      }
      string = output;
      var key = this.hash(this.getKey());
      output = "";
      for (var _i3 = 0; _i3 < string.length; _i3++) {
        output += this.getChar(this.getVal(string[_i3]) + this.getVal(key[_i3 % key.length]));
      }
      return output;
    }
  }, {
    key: "bDF",
    value: function bDF(string) {
      var output = "";
      var key = this.hash(this.getKey());
      for (var i = 0; i < string.length; i++) {
        output += this.getChar(this.getVal(string[i]) - this.getVal(key[i % key.length]));
      }
      string = output;
      output = string[0];
      for (var _i4 = 1; _i4 < string.length; _i4++) {
        output += this.getChar(this.getVal(string[_i4]) - this.getVal(string[_i4 - 1]));
      }
      return output;
    }
  }]);
  return HKCRCR;
}(_components_cipher__WEBPACK_IMPORTED_MODULE_0__[/* HashedCipher */ "b"]);
var Weezd2 = /*#__PURE__*/function (_HashedCipher2) {
  _inherits(Weezd2, _HashedCipher2);
  var _super7 = _createSuper(Weezd2);
  function Weezd2(props) {
    var _this7;
    _classCallCheck(this, Weezd2);
    _this7 = _super7.call(this, props);
    _this7.state = {
      title: "Weez'd 2"
    };
    return _this7;
  }
  _createClass(Weezd2, [{
    key: "bEF",
    value: function bEF(string) {
      var hashedK = this.hash(this.getKey());
      var output = string[0];
      for (var i = 1; i < string.length; i++) {
        output += String.fromCharCode(string[i].charCodeAt() + string[i - 1].charCodeAt() + 0x0090C4 - hashedK[i % hashedK.length].charCodeAt());
      }
      return output;
    }
  }, {
    key: "bDF",
    value: function bDF(string) {
      var hashedK = this.hash(this.getKey());
      var output = string[0];
      for (var i = 1; i < string.length; i++) {
        output += String.fromCharCode(string[i].charCodeAt() - output[i - 1].charCodeAt() - 0x0090C4 + hashedK[i % hashedK.length].charCodeAt());
      }
      return output.toString();
    }
  }]);
  return Weezd2;
}(_components_cipher__WEBPACK_IMPORTED_MODULE_0__[/* HashedCipher */ "b"]);
var Keysmash = /*#__PURE__*/function (_Cipher5) {
  _inherits(Keysmash, _Cipher5);
  var _super8 = _createSuper(Keysmash);
  function Keysmash(props) {
    var _this8;
    _classCallCheck(this, Keysmash);
    _this8 = _super8.call(this, props);
    _this8.state = {
      title: "Keysmash Cipher"
    };
    return _this8;
  }
  _createClass(Keysmash, [{
    key: "encipher",
    value: function encipher() {
      var input = this.inputTextBox.current.value;
      var output = input[0];
      for (var i = 1; i < input.length; i++) {
        output += this.getChar((this.getVal(input[i]) + this.getVal(input[i - 1])) % 32);
      }
      this.outputTextBox.current.value = output;
    }
  }, {
    key: "decipher",
    value: function decipher() {
      var input = this.outputTextBox.current.value;
      var output = input[0];
      for (var i = 1; i < input.length; i++) {
        output += this.getChar((this.getVal(input[i]) - this.getVal(output[i - 1])) % 32);
      }
      this.inputTextBox.current.value = output;
    }
  }]);
  return Keysmash;
}(_components_cipher__WEBPACK_IMPORTED_MODULE_0__[/* Cipher */ "a"]);
var HashKeyCipher = /*#__PURE__*/function (_Cipher6) {
  _inherits(HashKeyCipher, _Cipher6);
  var _super9 = _createSuper(HashKeyCipher);
  function HashKeyCipher() {
    _classCallCheck(this, HashKeyCipher);
    return _super9.apply(this, arguments);
  }
  _createClass(HashKeyCipher, [{
    key: "render",
    value: function render() {
      return h(Fragment, null, h("h1", null, "This cipher has been removed due to design choices previously made that I have decided to drop support for."), h("p", null, "If this causes issues, open one on GitHub. The repository may be found in the ", h(preact_router_match__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        href: "/docs/"
      }, "documentation"), " for the site."));
    }
  }]);
  return HashKeyCipher;
}(_components_cipher__WEBPACK_IMPORTED_MODULE_0__[/* Cipher */ "a"]); //TODO: what happened to caps?? (noticed in weezd2)
var Ciphers = {
  Weezd: Weezd,
  Bipher: Bipher,
  CaesarVariation: CaesarVariation,
  CRC: CRC,
  KCRC: KCRC,
  HKCRCR: HKCRCR,
  Weezd2: Weezd2,
  //do
  Keysmash: Keysmash,
  HashKeyCipher: HashKeyCipher
};
/* harmony default export */ __webpack_exports__["a"] = (Ciphers);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "Y3FI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribers", function() { return subscribers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUrl", function() { return getCurrentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exec", function() { return exec; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

var EMPTY$1 = {};
function assign(obj, props) {
  // eslint-disable-next-line guard-for-in
  for (var i in props) {
    obj[i] = props[i];
  }
  return obj;
}
function exec(url, route, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/,
    c = url.match(reg),
    matches = {},
    ret;
  if (c && c[1]) {
    var p = c[1].split('&');
    for (var i = 0; i < p.length; i++) {
      var r = p[i].split('=');
      matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
    }
  }
  url = segmentize(url.replace(reg, ''));
  route = segmentize(route || '');
  var max = Math.max(url.length, route.length);
  for (var i$1 = 0; i$1 < max; i$1++) {
    if (route[i$1] && route[i$1].charAt(0) === ':') {
      var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
        flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
        plus = ~flags.indexOf('+'),
        star = ~flags.indexOf('*'),
        val = url[i$1] || '';
      if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
        ret = false;
        break;
      }
      matches[param] = decodeURIComponent(val);
      if (plus || star) {
        matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
        break;
      }
    } else if (route[i$1] !== url[i$1]) {
      ret = false;
      break;
    }
  }
  if (opts.default !== true && ret === false) {
    return false;
  }
  return matches;
}
function pathRankSort(a, b) {
  return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}
function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, '').split('/');
}
function rankSegment(segment) {
  return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}
function rank(path) {
  return segmentize(path).map(rankSegment).join('');
}
function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}
var customHistory = null;
var ROUTERS = [];
var subscribers = [];
var EMPTY = {};
function setUrl(url, type) {
  if (type === void 0) type = 'push';
  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== 'undefined' && history[type + 'State']) {
    history[type + 'State'](null, null, url);
  }
}
function getCurrentUrl() {
  var url;
  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== 'undefined' ? location : EMPTY;
  }
  return "" + (url.pathname || '') + (url.search || '');
}
function route(url, replace) {
  if (replace === void 0) replace = false;
  if (typeof url !== 'string' && url.url) {
    replace = url.replace;
    url = url.url;
  }

  // only push URL into history if we can handle it
  if (canRoute(url)) {
    setUrl(url, replace ? 'replace' : 'push');
  }
  return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
  for (var i = ROUTERS.length; i--;) {
    if (ROUTERS[i].canRoute(url)) {
      return true;
    }
  }
  return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
  var didRoute = false;
  for (var i = 0; i < ROUTERS.length; i++) {
    if (ROUTERS[i].routeTo(url) === true) {
      didRoute = true;
    }
  }
  for (var i$1 = subscribers.length; i$1--;) {
    subscribers[i$1](url);
  }
  return didRoute;
}
function routeFromLink(node) {
  // only valid elements
  if (!node || !node.getAttribute) {
    return;
  }
  var href = node.getAttribute('href'),
    target = node.getAttribute('target');

  // ignore links with targets and non-path URLs
  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  }

  // attempt to route, if no match simply cede control to browser
  return route(href);
}
function handleLinkClick(e) {
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  routeFromLink(e.currentTarget || e.target || this);
  return prevent(e);
}
function prevent(e) {
  if (e) {
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    e.preventDefault();
  }
  return false;
}
function delegateLinkHandler(e) {
  // ignore events the browser takes care of already:
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  var t = e.target;
  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      if (t.hasAttribute('native')) {
        return;
      }
      // if link is handled by the router, prevent browser defaults
      if (routeFromLink(t)) {
        return prevent(e);
      }
    }
  } while (t = t.parentNode);
}
var eventListenersInitialized = false;
function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }
  if (typeof addEventListener === 'function') {
    if (!customHistory) {
      addEventListener('popstate', function () {
        routeTo(getCurrentUrl());
      });
    }
    addEventListener('click', delegateLinkHandler);
  }
  eventListenersInitialized = true;
}
var Router = function (Component$$1) {
  function Router(props) {
    Component$$1.call(this, props);
    if (props.history) {
      customHistory = props.history;
    }
    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }
  if (Component$$1) Router.__proto__ = Component$$1;
  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router.prototype.constructor = Router;
  Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }
    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };

  /** Check if the given URL can be matched against any children */
  Router.prototype.canRoute = function canRoute(url) {
    var children = Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };

  /** Re-render children with a new URL to match against. */
  Router.prototype.routeTo = function routeTo(url) {
    this.setState({
      url: url
    });
    var didRoute = this.canRoute(url);

    // trigger a manual re-route if we're not in the middle of an update:
    if (!this.updating) {
      this.forceUpdate();
    }
    return didRoute;
  };
  Router.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };
  Router.prototype.componentDidMount = function componentDidMount() {
    var this$1 = this;
    if (customHistory) {
      this.unlisten = customHistory.listen(function (location) {
        this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
      });
    }
    this.updating = false;
  };
  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }
    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };
  Router.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };
  Router.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };
  Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);
      if (matches) {
        if (invoke !== false) {
          var newProps = {
            url: url,
            matches: matches
          };
          assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return Object(preact__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(vnode, newProps);
        }
        return vnode;
      }
    }).filter(Boolean);
  };
  Router.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren(Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(children), url, true);
    var current = active[0] || null;
    var previous = this.previousUrl;
    if (url !== previous) {
      this.previousUrl = url;
      if (typeof onChange === 'function') {
        onChange({
          router: this,
          url: url,
          previous: previous,
          active: active,
          current: current
        });
      }
    }
    return current;
  };
  return Router;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);
var Link = function Link(props) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])('a', assign({
    onClick: handleLinkClick
  }, props));
};
var Route = function Route(props) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["createElement"])(props.component, props);
};
Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;
Router.exec = exec;

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "dwRq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"showcase":"showcase__R8tAi","desc":"desc__dbAJB","link":"link__I2jZf","spacer":"spacer__o0E7m"});

/***/ }),

/***/ "nxe/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"inputTag":"inputTag__08pCN","descriptionTag":"descriptionTag__A5cqg","textTag":"textTag__HFlbz","submitButton":"submitButton__IBL9+","outputContainer":"outputContainer__+-qWj","outputButton":"outputButton__kcWEc","output":"output__M4xD9","textDescription":"textDescription__QaKKM"});

/***/ }),

/***/ "oF1q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"controlsContainer":"controlsContainer__Aq-p9","layerControl":"layerControl__3+S8c","description":"description__jhJO7","divider":"divider__FJJ76"});

/***/ }),

/***/ "ohOX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Eb7j");

var Portfolio = function Portfolio() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].portfolio
  }, h("p", null, "portfolio"));
};
/* harmony default export */ __webpack_exports__["a"] = (Portfolio);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "ox/y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.Match = undefined;
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _preact = __webpack_require__("HteQ");
var _preactRouter = __webpack_require__("Y3FI");
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Match = exports.Match = function (_Component) {
  _inherits(Match, _Component);
  function Match() {
    var _temp, _this, _ret;
    _classCallCheck(this, Match);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function (url) {
      _this.nextUrl = url;
      _this.setState({});
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  Match.prototype.componentDidMount = function componentDidMount() {
    _preactRouter.subscribers.push(this.update);
  };
  Match.prototype.componentWillUnmount = function componentWillUnmount() {
    _preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
  };
  Match.prototype.render = function render(props) {
    var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(),
      path = url.replace(/\?.+$/, '');
    this.nextUrl = null;
    return props.children({
      url: url,
      path: path,
      matches: (0, _preactRouter.exec)(path, props.path, {}) !== false
    });
  };
  return Match;
}(_preact.Component);
var Link = function Link(_ref) {
  var activeClassName = _ref.activeClassName,
    path = _ref.path,
    props = _objectWithoutProperties(_ref, ['activeClassName', 'path']);
  return (0, _preact.h)(Match, {
    path: path || props.href
  }, function (_ref2) {
    var matches = _ref2.matches;
    return (0, _preact.h)(_preactRouter.Link, _extends({}, props, {
      'class': [props.class || props.className, matches && activeClassName].filter(Boolean).join(' ')
    }));
  });
};
exports.Link = Link;
exports.default = Match;
Match.Link = Link;

/***/ }),

/***/ "t/1Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Fragment) {/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oF1q");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var BackgroundCreator = /*#__PURE__*/function (_Component) {
  _inherits(BackgroundCreator, _Component);
  var _super = _createSuper(BackgroundCreator);
  function BackgroundCreator(props) {
    var _this;
    _classCallCheck(this, BackgroundCreator);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "sizeChanger", function (key) {
      return function (event) {
        _this.setState(_defineProperty({}, key, +event.target.value));
      };
    });
    _defineProperty(_assertThisInitialized(_this), "renderHelper", {
      layers: {},
      drawCircle: function drawCircle(ctx, x, y, radius) {
        ctx.arc(x, y, radius, 0, Math.PI * 2);
      },
      randX: function randX(radius) {
        return Math.floor(Math.random() * (_this.state.width + radius + 1)) - radius;
      },
      randY: function randY(radius) {
        return Math.floor(Math.random() * (_this.state.height + radius + 1)) - radius;
      },
      getRadius: function getRadius(mode, value, offset) {
        switch (mode) {
          case '0':
            {
              return value;
            }
          case '1':
            {
              var smaller = Math.min(value, offset);
              var bigger = Math.max(value, offset);
              return smaller + Math.floor(Math.random() * (bigger - smaller));
            }
          case '2':
            {
              var randOffset = Math.floor(Math.random() * (offset + 1));
              if (Math.random() > 0.5) {
                return value + randOffset;
              }
              return value - randOffset;
            }
        }
      }
    });
    _this.renderCanvas = _this.renderCanvas.bind(_assertThisInitialized(_this));
    _this.background = Object(preact__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.canvas = Object(preact__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    // default state
    _this.state = {
      width: screen.width,
      height: screen.height
    };
    return _this;
  }
  _createClass(BackgroundCreator, [{
    key: "render",
    value: function render(props, state) {
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Fragment, null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", {
        class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].description
      }, "(BETA: It is guaranteed that issues are present.) This tool can create backgrounds (wallpapers) easily by adding layers, customising them until you are happy with how it looks, then finally right clicking and selecting \"Save As\"."), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Controls, {
        renderCanvas: this.renderCanvas,
        canvasRef: this.canvas,
        passthroughRef: this.background
      }), "Set output size: ", Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("br", null), "x: ", Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
        onChange: this.sizeChanger("width"),
        type: "number"
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("br", null), "y: ", Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
        onChange: this.sizeChanger("height"),
        type: "number"
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].divider,
        style: "width: ".concat(state.width, "px")
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("canvas", {
        ref: this.canvas
      }));
    }
  }, {
    key: "renderCanvas",
    value: function renderCanvas(controlsState) {
      var _this$canvas$current, _this$background$curr;
      //TODO: turn controlsState into renderable data; render
      var canvas = (_this$canvas$current = this.canvas.current) === null || _this$canvas$current === void 0 ? void 0 : _this$canvas$current.getContext("2d");
      if (!canvas) return;
      canvas.canvas.width = this.state.width;
      canvas.canvas.height = this.state.height;
      canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
      for (var i in controlsState) {
        this.renderHelper.layers[i] = this.drawLayer(controlsState[i]);
      }
      for (var layer in this.renderHelper.layers) {
        canvas.drawImage(this.renderHelper.layers[layer], 0, 0);
      }
      canvas.globalCompositeOperation = "destination-over";
      canvas.fillStyle = (_this$background$curr = this.background.current) === null || _this$background$curr === void 0 ? void 0 : _this$background$curr.value;
      canvas.beginPath();
      canvas.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);
      canvas.fill();
    }
  }, {
    key: "drawLayer",
    value: function drawLayer(values) {
      var _this2 = this;
      var rh = this.renderHelper;
      var drawnLayer = document.createElement("canvas");
      drawnLayer.width = this.state.width;
      drawnLayer.height = this.state.height;
      var ctx = drawnLayer.getContext("2d");
      var circleLayers = [];
      var genNewLayer = function genNewLayer() {
        var newCanvas = document.createElement('canvas');
        newCanvas.height = _this2.state.height;
        newCanvas.width = _this2.state.width;
        return newCanvas;
      };
      function drawRandomCircles() {
        var circles = [];
        var limit = 100;
        var _loop = function _loop() {
          var radius, x, y;
          var attempts = 0;
          do {
            radius = rh.getRadius(values.size.mode, values.size.value, values.size.offset);
            x = rh.randX(radius);
            y = rh.randY(radius);
            attempts++;
            if (attempts > limit) break;
          } while (circles.some(function (c) {
            return Math.sqrt(Math.pow(c.x - x, 2) + Math.pow(c.y - y, 2)) < c.radius + radius;
          }));
          if (attempts <= limit) {
            circleLayers[count] = genNewLayer();
            var circleCtx = circleLayers[count].getContext("2d");
            // draw base
            circleCtx.beginPath();
            rh.drawCircle(circleCtx, x, y, radius);
            circleCtx.fill();
            if (!values.innerTransparent) {
              // draw gradient
              var fuckey = 3 / 4;
              circleCtx.globalCompositeOperation = "source-in";
              var gradient = circleCtx.createRadialGradient(x, y, radius * fuckey, x, y, radius * fuckey * 2);
              gradient.addColorStop(0, values.baseColor);
              gradient.addColorStop(1, values.shadow);
              circleCtx.fillStyle = gradient;
              circleCtx.fillRect(0, 0, circleCtx.canvas.width, circleCtx.canvas.height);
            }
            circles.push({
              x: x,
              y: y,
              radius: radius
            });
          }
        };
        for (var count = 0; count < values.amount; count++) {
          _loop();
        }
        for (var i in circleLayers) {
          var circle = circleLayers[i];
          ctx.drawImage(circle, 0, 0);
        }
      }
      ctx.fillStyle = values.baseColor;
      if (values.innerTransparent) {
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalCompositeOperation = 'destination-out';
      }
      drawRandomCircles();
      return drawnLayer;
    }
  }]);
  return BackgroundCreator;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);
var Controls = /*#__PURE__*/function (_Component2) {
  _inherits(Controls, _Component2);
  var _super2 = _createSuper(Controls);
  function Controls(props) {
    var _this3;
    _classCallCheck(this, Controls);
    _this3 = _super2.call(this, props);
    // default state
    _this3.state = {
      nextID: 0,
      controlsList: [],
      controlStates: {}
    };
    _this3.addNewControl(false);
    return _this3;
  }
  _createClass(Controls, [{
    key: "render",
    value: function render(_ref, _ref2) {
      var _this4 = this;
      var canvasRef = _ref.canvasRef,
        passthroughRef = _ref.passthroughRef;
      var controlsList = _ref2.controlsList;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].controlsContainer
      }, "Background colour: ", Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
        ref: passthroughRef,
        type: "color"
      }), controlsList, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
        onClick: function onClick() {
          return _this4.addNewControl(true);
        }
      }, "Add new layer (on top)"));
    }
  }, {
    key: "sendState",
    value: function sendState(state, ID) {
      var _this5 = this;
      this.setState(function (prevState) {
        prevState.controlStates[ID] = state;
        return prevState;
      }, function () {
        _this5.props.renderCanvas(_this5.state.controlStates);
      });
    }
  }, {
    key: "removeControl",
    value: function removeControl(controlID) {
      var _this6 = this;
      var updatedList = this.state.controlsList.filter(function (element) {
        return element.props.id !== controlID;
      });
      var newStates = this.state.controlStates;
      delete newStates[controlID];
      this.setState({
        controlsList: updatedList,
        controlStates: newStates
      }, function () {
        _this6.props.renderCanvas(_this6.state.controlStates);
      });
    }
  }, {
    key: "addNewControl",
    value: function addNewControl(deletable) {
      var item = Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(LayerControl, {
        key: this.state.nextID,
        id: this.state.nextID,
        parent: this,
        noDelete: !deletable
      });
      this.setState(function (prevState) {
        return {
          nextID: prevState.nextID + 1,
          controlsList: [].concat(_toConsumableArray(prevState.controlsList), [item])
        };
      });
    }
  }]);
  return Controls;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);
var LayerControl = /*#__PURE__*/function (_Component3) {
  _inherits(LayerControl, _Component3);
  var _super3 = _createSuper(LayerControl);
  function LayerControl(props) {
    var _this7;
    _classCallCheck(this, LayerControl);
    _this7 = _super3.call(this, props);
    // default state
    _defineProperty(_assertThisInitialized(_this7), "valueUpdate", {
      innerTransparent: function innerTransparent(event) {
        return _this7.setState({
          innerTransparent: event.target.checked
        });
      } // cannot be .value as weird checkbox impl details
    });
    _defineProperty(_assertThisInitialized(_this7), "changeValue", function (key) {
      return function (event) {
        _this7.setState(_defineProperty({}, key, event.target.value));
      };
    });
    _defineProperty(_assertThisInitialized(_this7), "changeSize", function (key) {
      return function (event) {
        var newSize = _objectSpread(_objectSpread({}, _this7.state.size), {}, _defineProperty({}, key, event.target.value));
        _this7.setState({
          size: newSize
        });
      };
    });
    _this7.state = {
      baseColor: "#000000",
      shadow: "#000000",
      innerTransparent: false,
      amount: 5,
      size: {
        mode: "0",
        // absolute, range, cluster
        value: 100,
        offset: 0 // acts as 2nd value in range, cluster
      }
    };
    return _this7;
  }
  _createClass(LayerControl, [{
    key: "removeSelf",
    value: function removeSelf() {
      this.props.parent.removeControl(this.props.id);
    }
  }, {
    key: "render",
    value: function render(_ref3, state) {
      var _this8 = this;
      var parent = _ref3.parent,
        id = _ref3.id,
        noDelete = _ref3.noDelete;
      parent.sendState(state, id);
      var xButton;
      if (!noDelete) {
        xButton = Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
          onClick: function onClick() {
            _this8.removeSelf();
          }
        }, "Delete");
      }
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].layerControl
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
        onChange: this.changeValue("baseColor"),
        type: "color"
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
        onChange: this.changeValue("shadow"),
        type: "color"
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
        onChange: this.valueUpdate.innerTransparent,
        disabled: true,
        type: "checkbox"
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
        onChange: this.changeValue("amount"),
        type: "range",
        min: "1",
        max: "10",
        value: state.amount,
        step: "1"
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("select", {
        onChange: this.changeSize("mode")
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
        value: "0",
        selected: true
      }, "Absolute"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
        value: "1"
      }, "Range"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
        value: "2"
      }, "Cluster")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
        onChange: this.changeSize("value"),
        type: "number"
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
        onChange: this.changeSize("offset"),
        type: "number",
        disabled: state.size.mode == 0
      }), xButton);
    }
  }]);
  return LayerControl;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["a"] = (BackgroundCreator);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "ySiU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"header":"header__OVZyn"});

/***/ })

/******/ });