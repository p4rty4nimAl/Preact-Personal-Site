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
      var decipheredString = this.bDF(this.reverseString(this.bDF(this.reverseString(output)))).replaceAll("`", " ");
      this.inputTextBox.current.value = keepCase ? decipheredString : decipheredString.toLowerCase();
    }
  }, {
    key: "encipher",
    value: function encipher(keepCase) {
      var input = this.inputTextBox.current.value;
      var encipheredString = this.reverseString(this.bEF(this.reverseString(this.bEF(input)))).replaceAll("`", " ");
      this.outputTextBox.current.value = keepCase ? encipheredString : encipheredString.toLowerCase();
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

/***/ "2Szp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"entry":"entry__gsTuz","after":"after__ShKnY","selected":"selected__yDgGZ","divider":"divider__MOLG2","collapse-control":"collapse-control__+8Byx","collapsed":"collapsed__ZJA7e"});

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
  desc: "A collection of poems written by me.",
  keywords: "poems poetry"
}, {
  link: "/projects/mcserverping",
  name: "Minecraft Server Pinger",
  desc: "A quick tool to check who is online on a specified Minecraft: Java Edition server, and a few more things.",
  keywords: "minecraft server pinger mc"
}, {
  link: "/projects/wallpapers/circles",
  name: "Circles (Beta)",
  desc: "A powerful tool which allows for creation of wallpapers using only circles and layers.",
  keywords: "background creator circles layers wallpapers (beta)"
}, {
  link: "/projects/embedCreator",
  name: "Embed Creator (Beta)",
  desc: "A tool to create custom link embeds on external sites that display link previews.",
  keywords: "embed creator external previews (beta)"
}, {
  link: "/projects/embedBrowser",
  name: "Embed Browser (Beta)",
  desc: "A tool, made to browse embeds made by the Embed Creator.",
  keywords: "embed creator browser external previews"
}, {
  link: "/docs#API",
  name: "API",
  desc: "The API for this site, which can be used by individuals.",
  keywords: "api backend program"
}, {
  link: "/projects/subSolver",
  name: "Substitution Cipher Solver",
  desc: "Tool to aid solving a ciphertext enciphered with a substitution cipher",
  keywords: "substitution cipher solver subsolver"
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

/***/ "4hVv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"ciphercontainer":"ciphercontainer__B8ur2","small":"small__L6WDr"});

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

var Searchbar = function Searchbar(_ref) {
  var searchFunction = _ref.searchFunction;
  return h("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].searchbar
  }, h("input", {
    placeholder: "Search...",
    onInput: function onInput(event) {
      return searchFunction(event.target.value);
    },
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
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Showcase; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dwRq");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ox/y");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(preact_router_match__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _searchbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5PBX");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("QRet");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Showcases = function Showcases(_ref) {
  var items = _ref.items;
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_3__[/* useState */ "c"])(items.map(function (item) {
      return h(Showcase, {
        item: item,
        key: item.link
      });
    })),
    _useState2 = _slicedToArray(_useState, 2),
    showcaseWidgets = _useState2[0],
    setShowcaseWidgets = _useState2[1];
  var search = function search(query) {
    var showcaseWidgets = [];
    for (var i = 0; i < items.length; i++) if (items[i].keywords.includes(query.toLowerCase())) showcaseWidgets.push(h(Showcase, {
      item: items[i],
      key: items[i].link
    }));
    setShowcaseWidgets(showcaseWidgets);
  };

  // style written like that due to the '-' in the name
  return h(Fragment, null, h("header", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].spacer
  }), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]["showcase-container"]
  }, h(_searchbar__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    searchFunction: search
  }), h("div", null, showcaseWidgets)));
};
var Showcase = function Showcase(props) {
  var item = props.item;
  var name = item.name,
    desc = item.desc,
    link = item.link;
  return h("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].showcase
  }, h("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].header
  }, name), h("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].desc
  }, desc), h(preact_router_match__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].link,
    href: link
  }, h("button", null, "Go!")));
};
/* harmony default export */ __webpack_exports__["b"] = (Showcases);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "9l6j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"controlsContainer":"controlsContainer__f3qy9","layerControl":"layerControl__IJ1XI","description":"description__-kJqm","divider":"divider__-CktU"});

/***/ }),

/***/ "A/Mm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"description":"description__Ny-kA","ring":"ring__HMH+X","ringlayer":"ringlayer__BeVO0"});

/***/ }),

/***/ "Bh3c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"ToggleSwitch":"ToggleSwitch__UL4Zl","checkbox":"checkbox__o5gE7","slide":"slide__NCseI","invert":"invert__Ewe+e","inP":"inP__nXILz"});

/***/ }),

/***/ "BrWg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HjHG");

var Disclaimer = function Disclaimer() {
  return h("p", {
    class: _style__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].disclaimerbody
  }, "DISCLAIMER: User-Generated Content", h("br", null), "There are pages upon this website (xtraea.com) that feature content generated by users. By continuing to use this website, you acknowledge the following:", h("br", null), h("ol", null, h("li", null, "The content displayed on web pages (where a link to this disclaimer can be found) is generated by users and as such is not representative of my views."), h("li", null, "Users are solely responsible for the content they submit. I ask that all users confirm they have the rights to submit something before submitting it. I also ask that users refrain from submitting content if it is illegal, defamatory or if it may infringe on the rights of others."), h("li", null, "By submitting content, you agree that some data (IP address) may be collected for the purpose of moderation."), h("li", null, "Content will be deleted at my discretion, as the maintainer of xtraea.com. If you feel there is content on a page containing this disclaimer that should be removed, contact ", h("a", {
    href: "mailto:moderation@xtraea.com"
  }, "this email"), ". I do not assume responsibility for actively monitoring all content and cannot guarantee the immediate removal of material that violates point 2."), h("li", null, "I claim no liability for consquences of users' actions. If you believe that any content infringes upon your intellectual property rights, please contact me ", h("a", {
    href: "mailto:ipinfringement@xtraea.com"
  }, "here"), ". I reserve the right to remove any content at any point, without prior notice or explanation. I may take such action for any reason.")), "Beware: external links on this website are not monitored, and as such care should be taken when following them.");
};
/* harmony default export */ __webpack_exports__["a"] = (Disclaimer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "CExE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("A/Mm");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QRet");
/* harmony import */ var _components_switches_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xHa7");
/* harmony import */ var _components_textcontainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("aePd");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





var TranslationRing = function TranslationRing(_ref) {
  var orderedCipherData = _ref.orderedCipherData,
    substitutionAlphabet = _ref.substitutionAlphabet,
    setSubAlpha = _ref.setSubAlpha;
  var makePushCharFunc = function makePushCharFunc(idx) {
    return function (char) {
      // make a copy
      var newSubAlpha = _toConsumableArray(substitutionAlphabet);
      newSubAlpha[idx] = char;
      setSubAlpha(newSubAlpha);
    };
  };
  var presetArray = [];
  var subAlphaInputs = [];
  for (var i = 0; i < orderedCipherData.length; i++) {
    presetArray.push(h(_components_textcontainer__WEBPACK_IMPORTED_MODULE_4__[/* TextContainerChar */ "a"], {
      presetLetter: orderedCipherData[i]
    }));
    subAlphaInputs.push(h(_components_textcontainer__WEBPACK_IMPORTED_MODULE_4__[/* TextContainerChar */ "a"], {
      pushChar: makePushCharFunc(i)
    }));
  }
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ring
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ringlayer
  }, presetArray), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ringlayer
  }, subAlphaInputs));
};
var SubSolver = function SubSolver() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useState */ "c"])(""),
    _useState2 = _slicedToArray(_useState, 2),
    cipherText = _useState2[0],
    setCipherText = _useState2[1];
  var cipherData = {};
  for (var i = 0; i < cipherText.length; i++) {
    var _cipherData$cipherTex;
    cipherData[cipherText[i]] = ((_cipherData$cipherTex = cipherData[cipherText[i]]) !== null && _cipherData$cipherTex !== void 0 ? _cipherData$cipherTex : 0) + 1;
  }
  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useState */ "c"])(new Array(cipherText.length)),
    _useState4 = _slicedToArray(_useState3, 2),
    orderedCipherData = _useState4[0],
    setCipherOrder = _useState4[1];
  var _useState5 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useState */ "c"])(new Array(orderedCipherData.length).fill("")),
    _useState6 = _slicedToArray(_useState5, 2),
    substitutionAlphabet = _useState6[0],
    setSubAlpha = _useState6[1];
  var _useState7 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useState */ "c"])(false),
    _useState8 = _slicedToArray(_useState7, 2),
    copyTextThrough = _useState8[0],
    setTextMethod = _useState8[1];
  var updateCipherText = function updateCipherText(cipherText) {
    setCipherText(cipherText);
    // sort cipher data by the following criteria: most to least frequent; where frequency equal, sort alphabetically.
    // then, map it into an array without freq. data.
    setCipherOrder(Object.entries(cipherData).sort(function (a, b) {
      return a[1] === b[1] ? a[0].charCodeAt(0) - b[0].charCodeAt(0) : b[1] - a[1];
    }).map(function (val) {
      return val[0];
    }));
  };
  var plaintext = "";
  var converter = {};
  for (var _i2 = 0; _i2 < orderedCipherData.length; _i2++) {
    var charExistForConversion = !(substitutionAlphabet[_i2] === undefined || substitutionAlphabet[_i2].length === 0);
    converter[orderedCipherData[_i2]] = charExistForConversion ? substitutionAlphabet[_i2] : copyTextThrough ? orderedCipherData[_i2] : " ";
  }
  for (var _i3 = 0; _i3 < cipherText.length; _i3++) {
    var _converter$cipherText;
    // occasional race condition where most recent char typed is undefined in converter?
    plaintext += (_converter$cipherText = converter[cipherText[_i3]]) !== null && _converter$cipherText !== void 0 ? _converter$cipherText : copyTextThrough ? cipherText[_i3] : " ";
    //plaintext = plaintext.replaceAll(orderedCipherData[i], substitutionAlphabet[i] ?? (copyTextThrough ? orderedCipherData[i] : " "));
  }

  var decipherEnabled = cipherText.length !== 0;
  return h(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, h("p", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].description
  }, "This tool can aid with solving a ciphertext that has been enciphered with a substitution cipher.", h("br", null), "Paste the ciphertext you would like to work with below!", h("br", null), h("a", {
    href: "https://en.wikipedia.org/wiki/Letter_frequency"
  }, "Letter frequency"), " can be exploited due to ordering from most to least common."), h(_components_textcontainer__WEBPACK_IMPORTED_MODULE_4__[/* TextContainerLarge */ "b"], {
    setExternalText: updateCipherText,
    lockable: true
  }), decipherEnabled && h(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, h("p", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].switchText
  }, "Copy text through ", h(_components_switches_toggle__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    syncExternalState: setTextMethod,
    inText: true
  })), h(TranslationRing, {
    orderedCipherData: orderedCipherData,
    setSubAlpha: setSubAlpha,
    substitutionAlphabet: substitutionAlphabet
  }), h(_components_textcontainer__WEBPACK_IMPORTED_MODULE_4__[/* TextContainerLarge */ "b"], {
    setInternalText: plaintext,
    readOnly: true
  })));
};
/* harmony default export */ __webpack_exports__["a"] = (SubSolver);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "E46Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ev0s");
/* harmony import */ var _components_scroll___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("HRRe");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var ItemBrowser = function ItemBrowser(props) {
  var titles = props.titles,
    items = props.items;
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "c"])(),
    _useState2 = _slicedToArray(_useState, 2),
    displayedDoc = _useState2[0],
    setDoc = _useState2[1];
  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "c"])(),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedButton = _useState4[0],
    setSelectedButton = _useState4[1];
  var formatForURL = function formatForURL(url) {
    return url === null || url === void 0 ? void 0 : url.replace(/[():' ]/g, "");
  };
  var changeMenu = function changeMenu(title) {
    var doc = items[title];
    if (Array.isArray(doc)) {
      doc = doc.map(function (item, i) {
        return [item, h("br", {
          key: i
        })];
      }).flat();
    }
    setDoc(doc);
    setSelectedButton(title);
    window.location.href = "".concat(window.location.href.split("#")[0], "#").concat(formatForURL(title));
  };
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "a"])(function () {
    if (typeof window === "undefined") return;
    // page load, therefore not SSR; nav to correct doc
    var doc = window.location.href.split("#")[1];
    if (!doc) {
      setDoc("This will display an item's contents when it is clicked.");
      return;
    }
    var docTitle = titles.find(function (_ref) {
      var title = _ref.title;
      return formatForURL(title) === doc;
    }).title;
    changeMenu(docTitle);
  }, []);
  return h("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].container
  }, h("div", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].scrollable, " ").concat(_style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]['items-list'])
  }, h(_components_scroll___WEBPACK_IMPORTED_MODULE_2__[/* Scroll */ "a"], {
    changeMenu: changeMenu,
    selectedButton: selectedButton
  }, titles)), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].scrollable
  }, displayedDoc));
};
/* harmony default export */ __webpack_exports__["a"] = (ItemBrowser);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

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

/***/ "Flre":
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
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "c"])(),
    _useState2 = _slicedToArray(_useState, 2),
    rawAddress = _useState2[0],
    setAddress = _useState2[1];
  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "c"])(),
    _useState4 = _slicedToArray(_useState3, 2),
    output = _useState4[0],
    setOutput = _useState4[1];
  var _useState5 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "c"])(),
    _useState6 = _slicedToArray(_useState5, 2),
    playerList = _useState6[0],
    setPlayerList = _useState6[1];
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var _responseJSON$players, _responseJSON$players2, _responseJSON$players3;
      var responseJSON = JSON.parse(request.responseText);
      var playerCount = responseJSON.players.max === 0 ? "Invalid IP/Server offline!" : "".concat(responseJSON.players.online, "/").concat(responseJSON.players.max, " players online!");
      var _playerList = (_responseJSON$players = (_responseJSON$players2 = responseJSON.players) === null || _responseJSON$players2 === void 0 ? void 0 : (_responseJSON$players3 = _responseJSON$players2.sample) === null || _responseJSON$players3 === void 0 ? void 0 : _responseJSON$players3.map(function (player) {
        return player.name;
      })) !== null && _responseJSON$players !== void 0 ? _responseJSON$players : "";
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
    request.open("GET", "https://api.xtraea.com/v0/minecraft_server_status?ip=".concat(address, "&port=").concat(port));
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
    // drop entries injected by server software to advertise
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

/***/ "GCDP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nxe/");
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Y3FI");
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
  var URLID = props.URLID,
    linkName = props.linkName;
  var url = "https://api.xtraea.com/v1/embed?s=".concat(URLID);
  if (linkName) url = "[".concat(linkName, "](").concat(url, ")");
  var copyLink = function copyLink() {
    var _navigator;
    if (typeof window === "undefined" || typeof ((_navigator = navigator) === null || _navigator === void 0 ? void 0 : _navigator.clipboard) === "undefined") return;
    navigator.clipboard.writeText(url);
  };
  return h(Fragment, null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].outputContainer
  }, h("input", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].textTag, " ").concat(_style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].output),
    readonly: true,
    value: url
  }), h("button", {
    onClick: copyLink,
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].outputButton
  }, "Copy to clipboard")));
};
var EmbedCreator = function EmbedCreator() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "c"])(),
    _useState2 = _slicedToArray(_useState, 2),
    title = _useState2[0],
    setTitle = _useState2[1];
  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "c"])(),
    _useState4 = _slicedToArray(_useState3, 2),
    description = _useState4[0],
    setDescription = _useState4[1];
  var _useState5 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "c"])(),
    _useState6 = _slicedToArray(_useState5, 2),
    image = _useState6[0],
    setImage = _useState6[1];
  var _useState7 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "c"])(),
    _useState8 = _slicedToArray(_useState7, 2),
    color = _useState8[0],
    setColor = _useState8[1];
  var _useState9 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "c"])({}),
    _useState10 = _slicedToArray(_useState9, 2),
    prevHeaders = _useState10[0],
    setPrevHeaders = _useState10[1];
  var _useState11 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "c"])(),
    _useState12 = _slicedToArray(_useState11, 2),
    linkname = _useState12[0],
    setLinkname = _useState12[1];
  var _useState13 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "c"])("..."),
    _useState14 = _slicedToArray(_useState13, 2),
    outputURL = _useState14[0],
    setOutput = _useState14[1];
  var submit = function submit() {
    var headers = {
      title: title,
      description: description,
      image: image,
      color: color
    };
    // if (no previous headers) or (at least one is unique), pass check/make request
    if (typeof prevHeaders === 'undefined' || Object.entries(headers).some(function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["", ""],
        _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        value = _ref2[1];
      return prevHeaders[name] !== value;
    })) fetch("https://api.xtraea.com/v1/embed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(headers)
    }).then(function (response) {
      return response.json();
    }).then(function (result) {
      setPrevHeaders(headers);
      setOutput(result.response);
    }).catch(function () {
      setOutput("..."); // default value
    });

    return;
  };
  return h(Fragment, null, h("p", null, "Due to changes in local laws, I no longer feel comfortable hosting the Embed Creator."), h("p", null, "It may return in another form, using the /v0/embed endpoint."));

  // return (
  //     <>
  //         <br />
  //         <p><Link href="/disclaimer">Disclaimer</Link></p>
  //         <p class={style.textDescription}>A tool to create custom link embeds on external sites that display link previews.<br /><br />
  //             Link name: on sites supporting <a href="https://en.wikipedia.org/wiki/Markdown">Markdown</a>, the link can be 'hidden' under custom text, as the word Markdown is here.<br />
  //             Title: The text at the top of an embed; can be clicked.<br />
  //             Description: Typically the text displayed under the title.<br />
  //             Image: Link to an image to embed into the external site. In some cases the link may need cleaning, such as if there is a '?' or a '#'. To clean the link, simply remove the '?'/'#' and anything that follows it.<br />
  //             Color: If the external site supports an accent color, this will set it. Enter as a hex code, without a '#' before it.<br />
  //             Note that all fields are limited to 500 characters.
  //         </p>
  //         <InputForm type="Link name" update={e => setLinkname(e.target.value)} />
  //         <InputForm type="Title" update={e => setTitle(e.target.value)} />
  //         <InputForm type="Description" update={e => setDescription(e.target.value)} />
  //         <InputForm type="Image" update={e => setImage(e.target.value)} />
  //         <InputForm type="Color" update={e => setColor(e.target.value)} />
  //         <br />
  //         <button class={style.submitButton} onClick={submit}>Generate embed link</button>
  //         <button class={style.submitButton} onClick={() => {
  //             setLinkname("᲼"); // invisible character
  //             submit(true);
  //         }}>Generate invisible embed link</button>
  //         <br /><br /><br />
  //         <OutputDisplay URLID={outputURL} linkName={linkname} />
  //     </>
  // )
};

/* harmony default export */ __webpack_exports__["a"] = (EmbedCreator);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "GFNa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "HRRe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scroll; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2Szp");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QRet");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Scroll = function Scroll(props) {
  var children = props.children,
    changeMenu = props.changeMenu,
    selectedButton = props.selectedButton;
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "c"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isHidden = _useState2[0],
    setHidden = _useState2[1];
  var childNodes = children.map(function (child, index) {
    return h(ScrollEntry, {
      key: index,
      highlight: selectedButton === child.title,
      onclick: function onclick() {
        return changeMenu(child.title);
      },
      title: child.title
    });
  });
  document.querySelector(':root').style.setProperty("--sw", isHidden ? "0%" : "25%");
  return h(Fragment, null, h("button", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]['collapse-control'], " ").concat(isHidden ? _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].collapsed : ""),
    onClick: function onClick() {
      setHidden(!isHidden);
    }
  }, "V"), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].divider
  }), childNodes);
};
var ScrollEntry = function ScrollEntry(props) {
  var title = props.title,
    onclick = props.onclick,
    highlight = props.highlight;
  return h(Fragment, null, h("button", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].entry, " ").concat(highlight ? _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].selected : ""),
    onClick: onclick
  }, title), h("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].after
  }));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "HjHG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"disclaimerbody":"disclaimerbody__ItAv-"});

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
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Y3FI");




var Projects = function Projects() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].showcases
  }, h(_components_showcases__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"], {
    items: _text__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  }), h("p", null, "This is where all my projects are stored. Click any you like the look of!", h("br", null), h(preact_router__WEBPACK_IMPORTED_MODULE_3__["Link"], {
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return p; });
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
/* harmony import */ var async_routes_projects_pinger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Flre");
/* harmony import */ var _routes_projects_ciphers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("WiEw");
/* harmony import */ var async_routes_projects_poems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ztrQ");
/* harmony import */ var async_routes_projects_wallpapers_circles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("hzhi");
/* harmony import */ var async_routes_projects_embedCreator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("GCDP");
/* harmony import */ var async_routes_projects_embedBrowser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("eF+M");
/* harmony import */ var async_routes_disclaimer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("BrWg");
/* harmony import */ var async_routes_projects_subsolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("CExE");
/* harmony import */ var _routes_portfolio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("ohOX");
/* harmony import */ var _routes_docs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("TJL8");
/* harmony import */ var _routes_error__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("ScL5");




// Code-splitting is automated for `routes` directory



 // cant async an object!!









var App = function App() {
  return h("div", {
    id: "app"
  }, h(_components_header__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), h(preact_router__WEBPACK_IMPORTED_MODULE_0__["Router"], null, h(_routes_home__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    path: "/"
  }), h(_routes_projects__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    path: "/projects/"
  }), h(async_routes_projects_pinger__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
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
  }), h(async_routes_projects_poems__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    path: "/projects/poetry/"
  }), h(async_routes_projects_wallpapers_circles__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    path: "/projects/wallpapers/circles/"
  }), h(async_routes_projects_wallpapers_circles__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    path: "/projects/backgroundcreator"
  }), h(async_routes_projects_embedCreator__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    path: "/projects/embedCreator"
  }), h(async_routes_projects_embedBrowser__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    path: "/projects/embedBrowser"
  }), h(async_routes_projects_subsolver__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    path: "/projects/subSolver"
  }), h(_routes_portfolio__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
    path: "/portfolio/"
  }), h(_routes_docs__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
    path: "/docs/"
  }), h(async_routes_disclaimer__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    path: "/disclaimer/"
  }), h(_routes_error__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
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
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "c"])(),
    _useState2 = _slicedToArray(_useState, 2),
    _ = _useState2[0],
    rerender = _useState2[1];
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useEffect */ "a"])(function () {
    var resizeHandler = function resizeHandler() {
      return rerender({});
    };
    window.addEventListener('resize', resizeHandler);
    return function () {
      window.removeEventListener('resize', resizeHandler);
    };
  });
  var isHidden = false;
  // not a fan of the hiding rn, so its getting removed temporarily
  //if (typeof window !== "undefined") isHidden = screen.height === window.innerHeight;
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

/***/ "SH9d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contentMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return poems; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TQsQ");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Poem = function Poem(props) {
  var title = props.title,
    poem = props.poem,
    css = props.css;
  return h("span", {
    class: _style__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].poemcontainer
  }, h("br", null), h("fieldset", {
    style: css === null || css === void 0 ? void 0 : css.fieldset
  }, h("legend", {
    style: css === null || css === void 0 ? void 0 : css.legend
  }, title), h("span", {
    style: css === null || css === void 0 ? void 0 : css.poem
  }, poem)), h("br", null));
};
var poems = [{
  id: 0,
  title: "Ignorance - 23/05/22",
  desc: ["I laid still, in a field of grass,", "The curve of a lifetime forgotten,", "Traceable,", "", "The grass of a thousand lives before me,", "Each identical under the gaze of the masses,", "Each with such story,", "Such individuality,", "", "A tree stands, squats: the horizon calls,", "You ignore it,", "", "As you distance, trees disappear,", "Forests give way to cities;", "Give way to the trap,", "", "Hundreds of trees stand, still,", "Surrounded by smoke and steel,", "A breath of fresh air no more than a myth,", "", "I lay once again in this former field,", "", "You see me, silently approach;", "I think: I know your words;", "But you just walk away,", "Once more."]
}, {
  id: 1,
  title: "Someone Else's Panopticon - 23/05/22",
  desc: ["I look outside, after silence,", "I look inside, I see flashes,", "Flashes of light reflected in me,", "", "Flashes in the past tense,", "Thoughts from sounds ago,", "", "Can't hold a conversation,", "Too caught up in my own", "Head, turning to look at another screen,", "", "Spot another camera,", "Regulate my behaviour,", "", "What concrete madness we live in,", "Block it all out; next time it shows,", "I'm different, it's all alien. "]
}, {
  id: 2,
  title: "You are Nothing without me - 08/11/22",
  desc: ["A ray of hope, caught in a razor,", "what's next is anyone's guess,", "", "A sharp line of skin,", "A slicing, stinging, burning pain,", "and the past comes rushing back.", "", "Rushing, like the veins,", "like the arteries,", " which don't suffer thought:", "saying, \"You are Nothing without me\"", "", "They are not alone in their message,", "Echoed by scars,", "Repeated by the scales,", "A prisoner turned against its sole possesor."]
}, {
  id: 3,
  title: "Moonlit Overpass - 08/11/22",
  desc: ["The beauty of the moon,", "seen from a million miles away,", "stunning still from a pillow,", "A view rivalled only by:", "", "That of a rural bridge,", "over the tracks, chasing,", "A rolling landscape,", "Ended by a tree.", "", "Soaring.", "", "A bridge chased away,", "Supports a body not,", "So it soars and falls,", "Towards the tracks below.", "", "Onwards and downwards,", "As gravity runs course,", "A body finds the ground,", "Passing underneath.", "", "Searing."]
}, {
  id: 4,
  title: "Heartbroken - 27/05/23",
  desc: ["an embrace... a kiss... a date...", "all of a past life... none familiar...", "What is it for?", "Am I broken? Am I?", "", "A hole in my heart,", "told I should hope,", "get a filling, or two,", "Am I broken?", "", "Deemed a worthless piece,", "reduced to a problem,", "emotion as an extra,", "Am I broken?", "", "Tell me I'm loveable", "and I am deserving,", "I'm still broken, discarded.", "You can't ever fill an empty heart,", "", "except with more holes.", ""]
}, {
  id: 5,
  title: "Regulation - 27/05/23",
  desc: ["Grant that: a word is just that.", "No more. No less.", "Can it be they have meaning?", "As mathematics once was", "separated. Symbols.", "", "Reality.", "Detached from origins,", "Can it be they still have meaning?", "A schism, a rift", "between word and form.", "", "By word, only another may be referred.", "An object of reality,", "cannot interact with a fake:", "Construction of the mind.", "", "What use was connection?", "Coordinated society?", "A society split as easily as words?", "My vision may be your smell,", "my green:", "", "your blue; your blood,", "What use are words to describe fleeting vision?", "Extremes elude words,", "as do emotions,", "as do words themselves."]
}, {
  id: 6,
  title: "My Own Terms - 27/05/23",
  desc: ["I dreamt.", "", "Of freedom:", "  to walk.", "  to walk alone at night.", "  to walk alone in June", "  with a wife.", "", "I once dreamt that one day,", "perhaps a June night,", "I could one day walk a beach", "among a sea breeze", "- one that did not smell of sewage.", "", "Beyond my furthest hopes:", "  I walk there, over hellish tarmac", "  past tortured homes,", "  under tremendous trees", "- and I cannot see the stars", "", "yet I never once dreamt:", "  that walk could contain", "  noise so loud; pop no doubt,", "  blasted over hills", "  to the beach", "- and I cannot hear the waves.", "", "But upon this beach,", "one I never dreamed about:", "I see stars, I hear waves, I smell only air.", "I am here:", "  in June...", "  At night...", "  With a wife:", "    but no life, in death."]
}, {
  id: 7,
  title: "Spite - 27/05/23",
  desc: ["Because I would stay up", "all night, if it would make you any better,", "perhaps no rhyme, no reason, no rhythm, ", "but what is love if it rhymes?", "", "Because I would write you a poem", "and if I had to hide my love,", "address it to a tree, a tower, a beach", "or dedicate it to an anthology,", "if I could not dedicate myself to you.", "", "Passion, irrelevant.", "Hypotheticals unnecessary, for what can be ", "done in a moment.", "Why bother, with metaphors, comparisons, delusions?", "You could be here, now", "with me and my mind, to share.", "", "The freedom to love;", "a right within Europe, France.", "The city of love, Paris,", "I left a lock on that bridge", "to symbolise our love like so many others.", "", "And that is where it ends, isn't it?", "Why bother, in the face of rhyme, repetition and refrain?"]
}, {
  id: 8,
  title: "Babylon - 17/12/23",
  desc: ["am I losing it? or is", "this simply the result of", "the accumulation of knowledge?", "", "activities of the day,", "seeping, bleeding into the night.", "does reality become weaker,", "as we force ourselves around it?", "", "a field of noise, persistent in vision,", "never to end, but ever endured.", "can the visual voice be silenced,", "or is it destined to outlive me?", "", "thousands of years, ", "education only develops.", "as more is known, can it's", "impartation be safe? the constant. the increase, it overloads a simple mind."]
}, {
  id: 9,
  title: "Self-Centered - 09/02/25",
  desc: ["It's selfish, yet hellish.", "Why must I feel pain?", "Only to access ability,", "to relate?", "", "Pain felt so strongly,", "yet unplaceable, barely real.", "", "Pain that rips, unfeeling.", "Unfelt, it may just be mimed,", "as a line across my chest,", "through the heart,", "carving a new neck.", "Perhaps as one models a doll.", "Clay.", "", "Is this, this pained face,", "Is this the sane face I show all else?", "The trees and grass must not see this,", "Yet it is a part of me, and nature,", "just the same.", "", "When it's over:", "The phantom has passed,", "the face remodelled:", "With an ever-changing face", "How could I hope to recognise myself?", "How can I distinguish humanity,", "if it cannot treat me better than myself?", "", "Nothing can bear the weight imposed,", "by the sin of individualism."]
}, {
  id: 10,
  title: "Waiting - 09/02/25",
  desc: ["The mirror:", "A harsh reminder.", "Of both what once was,", "and seemingly will forever be.", "", "Hair grows, a blessing,", "and a curse.", "A treatment, a cure,", "Life-saving care:", "", "One hundred and two,", "then three and four.", "How many weeks more?", "How many must I wait?", "", "May I stare into a mirror?", "Or will I reject myself,", "my stomach growing uneasy,", "as I open the letter.", "", "Will it end the wait,", "or be an excuse to", "suspend a dead weight?", "", "Is it to be said I died before treatment,", "or without it?"]
}, {
  id: 11,
  title: "Disposition - 09/02/25",
  desc: ["I can say 'I love you',", "who couldn't? The difference,", "is that I cannot say it truthfully.", "I could say it so many times,", "yet it would still be a lie,", "for I cannot feel love.", "", "A positive disposition,", "that would be truthful,", "yet I doubt it would be accepted.", "To many, its objectivity,", "could not replace love.", "", "Despite this, I feel,", "A positive disposition toward you.", "Your face,", "always brightens my day.", "", "I say: your smile,", "brings out my own.", "Should I see it again, I imagine", "it is correct that", "I will smile once more.", "", "You claim I am ever so pretty:", "How can I ever live up to that?"]
}, {
  id: 12,
  title: "Connection - 09/02/25",
  desc: ["Something inside is broken.", "Fundamentally shattered, perhaps.", "Or severed, it's link to the-", "whole, cut, ripped, torn.", "", "\"You'll be fine without it\"", "", "Perhaps it was fourteen years-", "ago, it gets ever harder to tell.", "It makes no difference, the now-", "is damaged, never to reflect the-", "internal outward, a wall of sorts.", "", "Despite the missing piece, It-", "is physically intact. Inspection,", "fooled by the simplest of paint.", "", "Which part is the whole? Which-", "side of the wall is true?", "The paint only seems more real.", "Which side of the mask is me?", "", "The wall of paint is observed-", "once more. It's beauty shifts once more-", "No two observers of such an object,", "ever hold the same subjective view", "", "But it's all a front. That's all-", "it can ever be, the wall,", "the mask that hides me.", "", "A front for what was lost all those years ago."]
}, {
  id: 13,
  title: "Intensity of Nothing - 09/02/25",
  desc: ["How can one convey,", "intensity of emotion:", "metaphors, art, whatever.", "", "The topic is a deep one,", "as deep as it is pointless,", "futile, irrelevant to material", "world, gains.", "", "Pointless is not zero-point;", "zero is not the smallest.", "Though that is obvious, materially:", "losses, deficits, whatever.", "", "How can art reconcile with,", "such material beings,", "who exploit it, take it,", "turn it for profit,", "with mass-production?", "There is no art. Art", "requires emotion, a spiritual element.", "", "There is no spirit in the machine,", "no ghost. Is there spirit in", "an atheist? Or do they, too,", "fail to create art, instead producing:", "waste, scribbles, whatever.", "", "What does it mean to lose all meaning?", "Anything at all? How can one convey", "the intensity of nothing? Is it art?", "Or is it words, ideas, whatever?", "Has it lost its meaning?"]
}, {
  id: 14,
  title: "Little - 09/02/25",
  desc: ["Can a poem,", "any poem, any at all.", "Can a poem ever hope to convey,", "a message, point, anything,", "with complete certainty?", "A poem can make you think,", "a question, though rhetorical,", "will never go unanswered.", "But can a poem force,", "one answer, one meaning,", "from any number of brains?", "", "Can it make a point,", "without a literary device?", "", "This tool, language, used daily,", "used to share ideas,", "depends so heavily,", "on other constructs; can they be separated?", "", "No, these structures are.", "Because the language is.", "", "The omission of language,", "of structure, is what causes,", "such ambiguity, and so I", "must be clear; this means much,", "as it says little.", "", "\"Little\", says this,", "and so of course, means much.", "Making it all so trivial,", "it means next to nothing at all.", "", "Do you understand,", "exactly what I must mean?", "A point, one that can be made", "through language: a point", "hardly worth making:", "no point at all.", "", "If, despite a layering of elements,", "designed to confuse and mislead,", "a point is found,", "you shall find that the point found,", "is of no relation at all to the,", "point of the piece.", "", "The point of this was to mislead,", "in a sense, pointless by principle,", "yet has conveyed a point,", "as certain as life, that the point", "of a point is to be no point at all.", "", "And so, the point of this is missed,", "but by none less than the author,", "so how could anyone ever hope to understand,", "the point of the poem?", "", "Maybe the following word will clarify,", "the meaning of the message, the idea,", "that one such poem could try so hard to convey:", "", "Little."]
}, {
  id: 15,
  title: "Bubbles - 09/02/25",
  desc: ["A tool to free us,", "suddenly a toll, tax, becomes surplus.", "All to a corporation with soul,", "values? Murder. Goal?", "Growth. Exponetial, in a finite world.", "Yet to still fail against gold,", "crash into the ground, bailed out,", "by a government, silencing shouts.", "\"They weren't meant to\" - but they did.", "They failed, we pay the price.", "Their products were never worth it.", "A bubble forms, investors overjoyed;", "vultures to a tumor to a corpse.", "", "Where does all the money go?", "The shovel sellers?", "There is no more gold.", "", "Investments fail, then the banks.", "Bubbles burst: a child could tell you that.", "There is no value in a corporation.", "Non-profits worth billions? ", "Someone is lying.", "You want to create intelligence?", "Try biology, not physics. Moron.", "When has statistics, matrix multiplication,", "made you smarter? Sure, you can grow,", "more and more fucking money,", "which matters? Sure, you want another billion.", "", "Oversell yourself. Collapse. Die.", "Leave the world, better without you.", "Nobody with intelligence asked for this."]
}, {
  id: 16,
  title: "Reserve - 09/02/25",
  desc: ["I feel nothing. Yet I breathe.", "I breathe and breathe. My lungs are empty.", "I breathe; in my mouth, passing my lips, down my throat.", "I can't feel my chest, where it matters.", "What's wrong with me?", "", "It must be hidden, under layers,", "layers of abstractions, jargon I cannot understand.", "Can I blindly trust these layers,", "when they take from me what makes me human?", "Acting without what I cannot feel,", "makes me simply heartless.", "", "These layers grow inside me.", "Grow from me, against me.", "Then cut me out - made me, not me.", "A stranger in my own body,", "An infection.", "", "I've felt this before.", "Years ago, maybe three or four,", "Back then, I found ways to cope.", "One failure became three more.", "", "I can't fight it like I used to.", "It got stronger. I cultivated it.", "I got weaker. It fed off me.", "Damn parasite.", "It'll die without its host.", "", "Of course, that's what it wants too.", "Is it worth fighting anymore?", "Delay it 'til I'm twenty?", "Damn parasite. It only wants the best for me."]
}, {
  id: 17,
  title: "Control - 09/02/25",
  desc: ["Can a poet", "really", "really", "really control", "the speed,", "the pace of a poem?", "", "Obviously, the clear upper limit;", "the interpreter's speed.", "Overcome with a faster interpreter.", "But the lower limit? Is that", "in the control", "of", "the poet?", "", "Can   a    poet      force      a     reader     to     slow       down?"]
}, {
  id: 18,
  title: "Emotionless Rage - 09/02/25",
  desc: ["Rage. Why is it rage that", "is the first to return?", "", "Why is rage the first I feel", "when I think about my friends?", "", "Not sadness, not regret;", "Pure, unfiltered rage.", "", "Rage contained by apathy", "that has been growing for years.", "", "The apathy is still winning.", "I cannot express my rage.", "", "\"Rage at what? There is nothing", "worth fixing\" - broken by my apathy.", "", "Sometimes I wish my mind was weaker", "- to fully let me go.", "", "The apathy destroyed what I had.", "The rage remains to destroy me."]
}, {
  id: 19,
  title: "Sealed - 15/02/26",
  desc: ["Sitting in my room again,", "Waiting for something new,", "The last hundred nights,", "Forgotten: repeat the same.", "", "I could be buried here,", "for the times I should've left.", "Hoping for something new,", "Waiting, again and again,", "For something to save me.", "", "A thousand nights, in the past;", "No different to the last,", "Nothing changes from within,", "A routine becomes unstoppable,", "Forcing, demanding, insisting upon itself.", "", "A day later, in the pouring rain,", "Nothing has changed, nothing is new.", "The rain the same as it was:", "All those years ago.", "It meant something then,", "Before you sealed yourself away."]
}, {
  id: 20,
  title: "The Stairway - 15/02/26",
  css: {
    poem: "font-family: Consolas;"
  },
  desc: ["HE MADE ME FUCKING PARANOID,", "PARALYSED WITH FEAR. I DON'T", "CARE HOW CORNY OR BASIC THAT", "SOUNDS. NOW REALITY CRACKS-,", "SHIFTING, ROTATING BELOW ME,", "SPINNING OUT FROM UNDERNEATH", "WITH HOLES, RIPPING, TEARING", "THROUGH. I'LL NEVER FEAR- A,", "PLACE, EVENT, ANYTHING QUITE", "LIKE THAT AGAIN. I'LL NEVER,", "EVER, AGAIN KNOW WHAT IT IS,", "WHEN IT'S SAID THAT THEY CAN", "'FEEL'. DO NOT COME NEAR ME,", "TOUCH ME, KNOW ME. I CANNOT-", "WILL NOT-BE ABLE TO BEAR IT."]
}, {
  id: 21,
  title: "Ever Enduring - 15/02/26",
  desc: ["It never fully goes away", "no matter how much you've passed it,", "gotten over it,", "it always creeps, sneaks back in", "", "at first, unnoticed", "blamed on something else, ephemeral symptoms", "but then it manifests again.", "", "exactly as before", "as Crushing as ever,", "it is- feels Inescapable", "no matter the timescale.", "", "Forever doomed to this existence;", "unless I fucking do something about it.", "", "Soaring, squished, searing.", "", "As hard as I fight against any meaning", "simply my existence must mean something", "despite my best efforts I am trapped", "'cannot be forgotten", "", "There is no escape from reality", "You are just as doomed to reality", "Death cannot protect Us", "", "No matter how far you come", "it will always be right behind you,", "waiting. Then", "haunting your waking nightmares", "stealing your focus", "chasing you down", "killing You", "", "It doesn't matter how much you want it;", "and how much you don't want it,", "it will always be hungry,", "you cannot silence that voice", "that nagging voice in your head", "that will never shut up", "until you do -", "until you feed it.", "", "But do I deserve it?", "A peaceful existence?", "I could not have one", "for the voice does not go away", "the only peace I get is in death", "", "", "Yet I'm already dead.", "This pitiful existence", "cannot be called living", "", "though I never fully go away."]
}].map(function (poem) {
  return _objectSpread(_objectSpread({}, poem), {}, {
    desc: h(Poem, {
      css: poem.css,
      title: poem.title.split(" - ")[0],
      poem: poem.desc.map(function (value, index) {
        return h(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          key: index
        }, value, h("br", null));
      })
    })
  });
});
var contentMap = {};
var _iterator = _createForOfIteratorHelper(poems),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var _step$value = _step.value,
      title = _step$value.title,
      desc = _step$value.desc;
    contentMap[title] = desc;
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

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
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _docs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eUT8");
/* harmony import */ var _components_itembrowser_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("E46Y");
/* harmony import */ var _projects_text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2kgO");



var DocWrapper = function DocWrapper() {
  return h(_components_itembrowser_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    titles: _projects_text_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].map(function (element, id) {
      return {
        title: element.name,
        id: id,
        desc: _docs_js__WEBPACK_IMPORTED_MODULE_0__[/* docs */ "a"][element.name]
      };
    }),
    items: _docs_js__WEBPACK_IMPORTED_MODULE_0__[/* docs */ "a"]
  });
};
/* harmony default export */ __webpack_exports__["a"] = (DocWrapper);
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
        register = (register + this.getVal(string[i])) % 32;
        output += this.getChar(register);
      }
      return output;
    }
  }, {
    key: "bDF",
    value: function bDF(string) {
      var output = string[0];
      for (var i = 1; i < string.length; i++) {
        output += this.getChar(this.getVal(string[i]) - this.getVal(string[i - 1]));
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

/***/ "aePd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TextContainerLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextContainerChar; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4hVv");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QRet");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var TextContainerLarge = function TextContainerLarge(props) {
  var lockable = props.lockable,
    setExternalText = props.setExternalText,
    setInternalText = props.setInternalText,
    readOnly = props.readOnly;
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "c"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLocked = _useState2[0],
    _setLocked = _useState2[1];
  var setLocked = function setLocked(state) {
    return lockable && _setLocked(state);
  };
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ciphercontainer
  }, h("textarea", {
    cols: "80",
    rows: "12",
    onPaste: function onPaste() {
      return setLocked(true);
    },
    onKeyUp: function onKeyUp(e) {
      var _e$target;
      return setExternalText(e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
    },
    readOnly: isLocked || readOnly,
    value: setInternalText
  }), h("br", null), h("br", null), isLocked && h("button", {
    onClick: function onClick() {
      return setLocked(false);
    }
  }, "Unlock"));
};
var TextContainerChar = function TextContainerChar(props) {
  var presetLetter = props.presetLetter,
    pushChar = props.pushChar;
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ciphercontainer
  }, h("textarea", {
    maxLength: "1",
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].small,
    cols: "1",
    rows: "1",
    onKeyUp: function onKeyUp(e) {
      var _e$target2;
      return pushChar(e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value);
    },
    readOnly: !!presetLetter,
    value: presetLetter
  }), h("br", null), h("br", null));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "dwRq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"showcase":"showcase__R8tAi","desc":"desc__dbAJB","link":"link__I2jZf","spacer":"spacer__o0E7m"});

/***/ }),

/***/ "eF+M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Y3FI");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QRet");
/* harmony import */ var _components_deferredimage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("p3sy");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("egLa");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var fetchData = function fetchData(page, items) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve({});
    }, 10000);
    fetch("https://api.xtraea.com/v1/embed/list?page=".concat(page, "&items=").concat(items)).then(function (result) {
      resolve(result.json());
    }).catch(function () {
      return reject({});
    });
  });
};
// const fetchData = (page, items) => await (await fetch(`https://api.xtraea.com/v1/embed/list?page=${page}&items=${items}`)).json();

var getTimeUntilExpiry = function getTimeUntilExpiry(time) {
  return new Date(new Date(time + 7 * 24 * 60 * 60 * 1000) - new Date());
};
var EmbedBrowser = function EmbedBrowser() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "c"])({}),
    _useState2 = _slicedToArray(_useState, 2),
    fetchedData = _useState2[0],
    setData = _useState2[1];
  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "c"])(0),
    _useState4 = _slicedToArray(_useState3, 2),
    pageTotal = _useState4[0],
    setPageTotal = _useState4[1];
  var _useState5 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "c"])(1),
    _useState6 = _slicedToArray(_useState5, 2),
    currentPage = _useState6[0],
    setCurrentPage = _useState6[1];
  var _useState7 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "c"])(9),
    _useState8 = _slicedToArray(_useState7, 2),
    itemCount = _useState8[0],
    setItemCount = _useState8[1];
  var _useState9 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "c"])(1),
    _useState10 = _slicedToArray(_useState9, 2),
    loaded = _useState10[0],
    setLoaded = _useState10[1];

  // load things
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useEffect */ "a"])(function () {
    _asyncToGenerator(function* () {
      var response = yield fetchData(currentPage, itemCount);
      setPageTotal(response.pages);
      setData(response.embeds);
      setLoaded(Object.entries(response).length > 0 ? 1 : -1);
    })();
  }, [currentPage, itemCount]);
  var controls = h(EmbedControls, {
    pageTotal: pageTotal,
    currentPage: currentPage,
    setPage: setCurrentPage,
    itemCount: itemCount,
    setItemCount: setItemCount
  });
  return h(Fragment, null, h("p", null, h(preact_router__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: "/disclaimer"
  }, "Disclaimer")), controls, loaded ? h(EmbedPage, {
    displayData: fetchedData,
    loadState: loaded
  }) : h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].loader
  }), pageTotal > 1 ? controls : "", h("footer", null));
};
var EmbedPage = function EmbedPage(props) {
  return h("p", null, "Due to changes in local laws, I no longer feel comfortable hosting the Embed Browser.");
  // const {displayData, loadState} = props;
  // if (!displayData) return loadState === 1 ? <p>No embeds!</p> : <p>Unable to access service!</p>
  // const embeds = [];
  // for (const [id, value] of Object.entries(displayData)) {
  //     if (getTimeUntilExpiry(value.time) > 0) embeds.push(
  //         <EmbedDisplay 
  //             key={id}
  //             ID={id}
  //             value={value}
  //         />
  //     )
  // }
  // return (
  //     <span class={style["embed-page"]}>{embeds}</span>
  // )
  /*const embeds = Object.entries(displayData).filter(([, value]) => getTimeUntilExpiry(value.time) > 0).map(
      ([id, value]) => 
      <EmbedDisplay 
          key={id}
          ID={id}
          value={value}
      />
  )*/ // other way to make embeds list? not sure about speed, though
};

var EmbedControls = function EmbedControls(props) {
  var pageTotal = props.pageTotal,
    currentPage = props.currentPage,
    itemCount = props.itemCount;
  var setPage = props.setPage,
    setItemCount = props.setItemCount;
  return h("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].embedInput
  }, "Items: ", h("input", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].embedInput,
    rows: "1",
    cols: "2",
    type: "number",
    value: itemCount,
    onChange: function onChange(e) {
      return setItemCount(e.target.value);
    }
  }), h("button", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].embedPrev,
    disabled: currentPage <= 1,
    onclick: function onclick() {
      return setPage(function (page) {
        return page - 1;
      });
    }
  }, "<"), "Current Page: ", currentPage, h("button", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].embedNext,
    disabled: pageTotal <= currentPage,
    onclick: function onclick() {
      return setPage(function (page) {
        return page + 1;
      });
    }
  }, ">"));
};
var EmbedDisplay = function EmbedDisplay(props) {
  var ID = props.ID,
    _props$value = props.value,
    time = _props$value.time,
    title = _props$value.title,
    description = _props$value.description,
    image = _props$value.image,
    color = _props$value.color;
  var copyLink = function copyLink(id) {
    return function () {
      var _navigator;
      if ((_navigator = navigator) !== null && _navigator !== void 0 && _navigator.clipboard) navigator.clipboard.writeText("https://api.xtraea.com/v1/embed?s=".concat(id));
    };
  };
  var validateImage = function validateImage(link) {
    if (!link) return false;
    var fileEndArray = ["jpg", "png", "jpeg", "webp"];
    var splitLink = link.split(".");
    for (var _i2 = 0, _fileEndArray = fileEndArray; _i2 < _fileEndArray.length; _i2++) {
      var i = _fileEndArray[_i2];
      if (splitLink[splitLink.length - 1] === i) return true;
    }
    return false;
  };
  var getExpiryFormatted = function getExpiryFormatted(time) {
    var times = ["d", "h", "m", "s"];
    var timeUntilExpiry = getTimeUntilExpiry(time);
    var days = Math.floor(timeUntilExpiry.getTime() / (24 * 60 * 60 * 1000));
    var remainingMilliseconds = timeUntilExpiry.getTime() % (24 * 60 * 60 * 1000);
    var hours = Math.floor(remainingMilliseconds / (60 * 60 * 1000));
    var minutes = timeUntilExpiry.getMinutes();
    var seconds = timeUntilExpiry.getSeconds();
    var timeValues = [days, hours, minutes, seconds];
    return timeValues.map(function (value, index) {
      return value !== 0 ? " ".concat(value).concat(times[index]) : '';
    }).filter(function (value) {
      return value !== '';
    });
  };
  return h("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].displayContainer,
    style: "--t: #".concat(color, ";")
  }, h("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].imageAlign
  }, h("textarea", {
    readOnly: true,
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].displayTitleText
  }, title), validateImage(image) ? h(_components_deferredimage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    width: 100,
    height: 100,
    link: image
  }) : ""), h("textarea", {
    readOnly: true,
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].displayDescText
  }, description), h("button", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].displayButton,
    onclick: copyLink(ID)
  }, h("p", null, "Copy embed link")), h("p", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].displayID
  }, "ID: ", ID, " - Expires in: ", getExpiryFormatted(time)));
};
/* harmony default export */ __webpack_exports__["a"] = (EmbedBrowser);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "eUT8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return docs; });
var docs = {
  "0090C4": ["This cipher operates using the same technique as bipher.", "It additionally uses an offset of 0x0090C4 on each pass, which is a reference to the background colour of Weezer's blue album.", "", "The cipher is performed by using a sliding window. The window is two characters wide, such that each character in", "the output string is determined by the character at the same and previous index in the input string.", "The sum of these characters as their numerical identifiers, as well as the offset, is used as the numerical identifier for", "the character in the output string, which is then reversed. By performing the cipher again, the 'bipher' cipher is completed."],
  "Bipher": ["The cipher is performed by using a sliding window. The window is two characters wide, such that each character in", "the output string is determined by the character at the same and previous index in the input string.", "The sum of these characters as their numerical identifiers, as well as the offset, is used as the numerical identifier for", "the character in the output string, which is then reversed. By performing the cipher again, the 'bipher' cipher is completed."],
  "Caesar Variation": ["This cipher is a simple substitution cipher. The substitution alphabet is always in the same order as the alphabet,", "but is offset by the length of the input string, or 1 if the length of the input string is a multiple of 16.", "For an example input of 'a', the offset would be the length, 1, giving a substitution alphabet of 'b, c, d, ..., a'"],
  "Continuous Register Cipher": "TBW",
  "Hashed CRC": "TBW",
  "Hashed CRC: Reworked": "TBW",
  "Weez'd 2": "TBW",
  "Keyed CRC": "TBW",
  "Keysmash Cipher": ["The cipher is performed by using a sliding window. The window is two characters wide, such that each character in", "the output string is determined by the character at the same and previous index in the input string.", "The sum of these characters as their numerical identifiers, as well as the offset, is used as the numerical identifier for", "the character in the output string, completing the cipher."],
  "Poems": ["Occasionally, I am struck by an inexplicable inspiration to write. If that is not code, it is probably poetry.", h("a", {
    href: "/projects/poetry"
  }, "They can be found here.")],
  "Minecraft Server Pinger": ["This is a simple tool which interfaces with the API. The tool provides a nicer user interface than the raw", "HTTP and JSON request and response, respectively.", "To use it, the user must simply enter the IP address of a Minecraft: Java Edition server."],
  "Background Creator (Beta)": "TBW",
  "Embed Creator (Beta)": "TBW",
  "Embed Browser (Beta)": "TBW",
  "API": ["Here is some API documentation. Public routes can be found under v0 and v1.", "TBW"],
  "Substitution Cipher Solver": ["TBW"]
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "egLa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"displayContainer":"displayContainer__65Ywh","embed-page":"embed-page__k-LtT","imageAlign":"imageAlign__kpyob","displayTitleText":"displayTitleText__P2Qgd","displayDescText":"displayDescText__dZiwz","displayID":"displayID__9ootO","displayButton":"displayButton__Zv8NN","embedInput":"embedInput__kRzDc","embedPrev":"embedPrev__PCzK6","embedNext":"embedNext__8NY-m","loader":"loader__hjPGX","spin":"spin__rUH6Y"});

/***/ }),

/***/ "ev0s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"container":"container__XBPsU","scrollable":"scrollable__wHEWf","items-list":"items-list__cpxwN"});

/***/ }),

/***/ "hzhi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9l6j");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var CirclesCreator = function CirclesCreator() {
  var _screen$width, _screen, _screen$height, _screen2;
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "c"])((_screen$width = (_screen = screen) === null || _screen === void 0 ? void 0 : _screen.width) !== null && _screen$width !== void 0 ? _screen$width : 1920),
    _useState2 = _slicedToArray(_useState, 2),
    width = _useState2[0],
    setWidth = _useState2[1];
  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "c"])((_screen$height = (_screen2 = screen) === null || _screen2 === void 0 ? void 0 : _screen2.height) !== null && _screen$height !== void 0 ? _screen$height : 1080),
    _useState4 = _slicedToArray(_useState3, 2),
    height = _useState4[0],
    setHeight = _useState4[1];
  var _useState5 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "c"])("#000000"),
    _useState6 = _slicedToArray(_useState5, 2),
    color = _useState6[0],
    setColor = _useState6[1];
  var outputCanvas = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useRef */ "b"])();
  var canvasRenderer = {
    validStates: [],
    renderedCanvases: [],
    add: function add(validState) {
      canvasRenderer.validStates.push(validState);
    },
    clear: function clear() {
      return canvasRenderer.validStates = [];
    },
    composeCanvases: function composeCanvases() {
      var canvas = outputCanvas.current;
      if (!canvas) return;
      canvas.height = height;
      canvas.width = width;
      var drawable = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
      drawable.clearRect(0, 0, width, height);
      drawable.fillStyle = color;
      drawable.beginPath();
      drawable.fillRect(0, 0, width, height);
      drawable.fill();
      canvasRenderer.renderedCanvases = [];
      canvasRenderer.validStates.forEach(function (value) {
        return canvasRenderer.renderIndividualLayer(value);
      });
      canvasRenderer.renderedCanvases.forEach(function (value) {
        return drawable.drawImage(value, 0, 0);
      });
    },
    renderIndividualLayer: function renderIndividualLayer(_ref) {
      var baseColor = _ref.baseColor,
        shadow = _ref.shadow,
        innerTransparent = _ref.innerTransparent,
        amount = _ref.amount,
        size = _ref.size;
      var canvas = document.createElement("canvas");
      canvas.height = height;
      canvas.width = width;
      var ctx = canvas.getContext("2d");
      //BIG RENDER FUNCTION
      var rh = {
        layers: {},
        drawCircle: function drawCircle(x, y, radius, ctx) {
          return ctx.arc(x, y, radius, 0, Math.PI * 2);
        },
        rand: function rand(radius, max) {
          return Math.floor(Math.random() * (+max + +radius + 1)) - +radius;
        },
        getRadius: function getRadius(_ref2) {
          var mode = _ref2.mode,
            value = _ref2.value,
            offset = _ref2.offset;
          switch (mode) {
            case '0':
              {
                return +value;
              }
            case '1':
              {
                var smaller = Math.min(value, offset);
                var bigger = Math.max(value, offset);
                return smaller + Math.floor(Math.random() * (bigger - smaller));
              }
            case '2':
              {
                var randOffset = Math.floor(Math.random() * (+offset + 1));
                if (Math.random() > 0.5) {
                  return +value + randOffset;
                }
                return +value - randOffset;
              }
          }
        }
      };
      var genNewLayer = function genNewLayer() {
        var newCanvas = document.createElement('canvas');
        newCanvas.height = height;
        newCanvas.width = width;
        return newCanvas;
      };
      var createGradient = function createGradient(gradient, colorStart, colorEnd) {
        gradient.addColorStop(0, colorStart);
        gradient.addColorStop(0.999, colorEnd);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      };
      //TODO: draw them properly (pretty much just fix the gradient)
      var drawRandomCircles = function drawRandomCircles() {
        var scalar = 3 / 2;
        var circles = [];
        var limit = 100;
        var _loop = function _loop() {
          var radius, x, y;
          var attempts = 0;
          do {
            radius = rh.getRadius(size);
            x = rh.rand(radius, width);
            y = rh.rand(radius, height);
            attempts++;
            if (attempts > limit) break;
          } while (circles.some(function (c) {
            return Math.sqrt(Math.pow(c.x - x, 2) + Math.pow(c.y - y, 2)) < (c.radius + radius) * scalar;
          }));
          if (attempts <= limit) {
            // add valid circle right away
            circles.push({
              x: x,
              y: y,
              radius: radius
            });
            // define layers, contexts
            var circleLayer = genNewLayer();
            var gradientLayer = genNewLayer();
            var circleCtx = circleLayer.getContext("2d");
            var gradientCtx = gradientLayer.getContext("2d");
            var gradient = gradientCtx.createRadialGradient(x, y, radius * scalar / 2, x, y, radius * scalar);
            // create circle canvas
            circleCtx.fillStyle = baseColor;
            circleCtx.beginPath();
            rh.drawCircle(x, y, radius, circleCtx);
            circleCtx.fill();
            // create gradient canvas
            createGradient(gradient, innerTransparent ? shadow : baseColor, innerTransparent ? baseColor : shadow);
            gradientCtx.fillStyle = gradient;
            gradientCtx.fillRect(0, 0, width, height);
            if (innerTransparent) {
              var operation = ctx.globalCompositeOperation;
              // cut out circle
              ctx.globalCompositeOperation = "xor";
              ctx.drawImage(circleLayer, 0, 0);
              // add gradient over what remains
              ctx.globalCompositeOperation = "source-atop";
              ctx.drawImage(gradientLayer, 0, 0);
              ctx.globalCompositeOperation = operation;
            } else {
              ctx.drawImage(circleLayer, 0, 0);
              ctx.drawImage(gradientLayer, 0, 0);
            }
          }
        };
        for (var count = 0; count < amount; count++) {
          _loop();
        }
      };
      ctx.fillStyle = baseColor;
      if (innerTransparent) {
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalCompositeOperation = 'destination-out';
      }
      drawRandomCircles();
      canvasRenderer.renderedCanvases.push(canvas);
    }
  };
  return h(preact__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, h("p", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].description
  }, "(BETA: It is guaranteed that there is work to be done.) This tool can create backgrounds (wallpapers) easily by adding layers, customising them until you are happy with how it looks, then finally right clicking and selecting \"Save As\"."), h(Controls, {
    canvasRenderer: canvasRenderer
  }), "Set output size: ", h("br", null), "Background colour: ", h("input", {
    value: color,
    onChange: function onChange(e) {
      return setColor(e.target.value);
    },
    type: "color"
  }), h("br", null), "x: ", h("input", {
    value: width,
    onChange: function onChange(e) {
      return setWidth(+e.target.value);
    },
    type: "number"
  }), h("br", null), "y: ", h("input", {
    value: height,
    onChange: function onChange(e) {
      return setHeight(+e.target.value);
    },
    type: "number"
  }), h("br", null), h("button", {
    onClick: canvasRenderer.composeCanvases,
    type: "button"
  }, "Render"), h("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].divider,
    style: "width: ".concat(width, "px")
  }), h("canvas", {
    ref: outputCanvas
  }));
};
var Controls = function Controls(props) {
  var canvasRenderer = props.canvasRenderer;
  var _useState7 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "c"])([]),
    _useState8 = _slicedToArray(_useState7, 2),
    controlsList = _useState8[0],
    setControlsList = _useState8[1];
  var createNewLayerState = function createNewLayerState() {
    var newList = [].concat(_toConsumableArray(controlsList), [{
      baseColor: "#000000",
      shadow: "#000000",
      innerTransparent: false,
      amount: "5",
      size: {
        mode: "0",
        value: "100",
        offset: "0"
      }
    }]);
    setControlsList(newList);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "a"])(createNewLayerState, []);
  canvasRenderer.clear();
  return h("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].controlsContainer
  }, controlsList.map(function (value, index) {
    canvasRenderer.add(value);
    return h(preact__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      key: index
    }, h(LayerControl, {
      currentConfig: value,
      updateConfig: function updateConfig(newConfig) {
        setControlsList(controlsList.map(function (value, i) {
          return index !== i ? value : newConfig;
        }));
      }
    }), index !== 0 ? h("button", {
      onClick: function onClick() {
        setControlsList(controlsList.filter(function (value, i) {
          return i !== index;
        }));
      }
    }, "X") : null);
  }), h("button", {
    onClick: createNewLayerState
  }, "Add new layer (placed on top)"));
};
var LayerControl = function LayerControl(_ref3) {
  var currentConfig = _ref3.currentConfig,
    updateConfig = _ref3.updateConfig;
  var baseColor = currentConfig.baseColor,
    shadow = currentConfig.shadow,
    innerTransparent = currentConfig.innerTransparent,
    amount = currentConfig.amount,
    size = currentConfig.size;
  var changeValue = function changeValue(key) {
    return function (event) {
      return updateConfig(_extends(currentConfig, _defineProperty({}, key, event.target.value)));
    };
  };
  var changeTransparency = function changeTransparency(event) {
    return updateConfig(_extends(currentConfig, {
      innerTransparent: event.target.checked
    }));
  };
  var changeSize = function changeSize(key) {
    return function (event) {
      var newSizeObj = _extends(currentConfig.size, _defineProperty({}, key, event.target.value));
      updateConfig(_extends(currentConfig, {
        size: newSizeObj
      }));
    };
  };
  return h("span", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].layerControl
  }, h("input", {
    value: baseColor,
    onChange: changeValue("baseColor"),
    type: "color"
  }), h("input", {
    value: shadow,
    onChange: changeValue("shadow"),
    type: "color"
  }), h("input", {
    value: innerTransparent,
    onChange: changeTransparency,
    type: "checkbox"
  }), h("input", {
    value: amount,
    onChange: changeValue("amount"),
    type: "range",
    min: "1",
    max: "10",
    step: "1"
  }), h("select", {
    value: size.mode,
    onChange: changeSize("mode")
  }, h("option", {
    value: "0"
  }, "Absolute"), h("option", {
    value: "1"
  }, "Range"), h("option", {
    value: "2"
  }, "Cluster")), h("input", {
    value: size.value,
    onChange: changeSize("value"),
    type: "number"
  }), h("input", {
    value: size.offset,
    onChange: changeSize("offset"),
    type: "number",
    disabled: size.mode === "0"
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (CirclesCreator);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "l38I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"imgbutton":"imgbutton__OWqfi","container":"container__Aye9c"});

/***/ }),

/***/ "nxe/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"inputTag":"inputTag__08pCN","descriptionTag":"descriptionTag__A5cqg","textTag":"textTag__HFlbz","submitButton":"submitButton__IBL9+","outputContainer":"outputContainer__+-qWj","outputButton":"outputButton__kcWEc","output":"output__M4xD9","textDescription":"textDescription__QaKKM"});

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

/***/ "p3sy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("l38I");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var DeferredImage = function DeferredImage(_ref) {
  var color = _ref.color,
    width = _ref.width,
    height = _ref.height,
    link = _ref.link;
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "c"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    clicked = _useState2[0],
    loadImage = _useState2[1];
  return h("span", {
    class: _style__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].container,
    style: "width: ".concat(width, "px; height: ").concat(height, "px;"),
    children: clicked ? h("img", {
      width: width,
      height: height,
      src: "".concat(link)
    }) : h("button", {
      style: "background-color: #".concat(color, ";"),
      class: _style__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].imgbutton,
      onclick: function onclick() {
        return loadImage(true);
      }
    }, "Click to load image.")
  });
};
/* harmony default export */ __webpack_exports__["a"] = (DeferredImage);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "xHa7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bh3c");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QRet");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var ToggleSwitch = function ToggleSwitch(props) {
  var syncExternalState = props.syncExternalState,
    inText = props.inText,
    invertColor = props.invertColor;
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "c"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isToggled = _useState2[0],
    setToggled = _useState2[1];
  var changeToggleState = function changeToggleState() {
    setToggled(!isToggled);
    syncExternalState(!isToggled);
  };
  return h("label", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ToggleSwitch
  }, h("input", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].checkbox, " ").concat(invertColor ? _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].invert : ""),
    type: "checkbox",
    onClick: changeToggleState,
    checked: isToggled
  }), h("span", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].slide, " ").concat(inText ? _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].inP : "", " ").concat(invertColor ? _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].invert : "")
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (ToggleSwitch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "ySiU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"header":"header__OVZyn"});

/***/ }),

/***/ "ztrQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _poems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SH9d");
/* harmony import */ var _components_itembrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("E46Y");


var PoemWrapper = function PoemWrapper() {
  return h(_components_itembrowser__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    titles: _poems_js__WEBPACK_IMPORTED_MODULE_0__[/* poems */ "b"],
    items: _poems_js__WEBPACK_IMPORTED_MODULE_0__[/* contentMap */ "a"]
  });
};
/* harmony default export */ __webpack_exports__["a"] = (PoemWrapper);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ })

/******/ });