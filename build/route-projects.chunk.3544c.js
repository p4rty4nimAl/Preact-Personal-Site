(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2kgO":function(e,t,r){"use strict";(function(e){var n=r("Y3FI"),o=[{link:"/projects/0090C4",name:"0090C4",desc:"A cipher with the distinguishing feature being an offset of 0x0090C4.",keywords:"weez'd 2 k0090c4 cipher"},{link:"/projects/bipher",name:"Bipher",desc:["Variation of the ",e(n.Link,{href:"/projects/keysmashCipher"},"Keysmash Cipher"),", improving upon it by simply applying it twice."],keywords:"keysmash cipher bipher"},{link:"/projects/caesarVariation",name:"Caesar Variation",desc:"This is the famous Caesar Cipher, but the change by 3 is replaced with an alternative.",keywords:"cipher caesarvariation caesar variation"},{link:"/projects/continuousRegisterCipher",name:"Continuous Register Cipher",desc:"This cipher works by incrementing a counter per character it sees, then outputting the current value.",keywords:"crc continuousregistercipher continuous register cipher"},{link:"/projects/hashKeyCipher",name:"Hashed CRC",desc:["This cipher is a direct improvement over the ",e(n.Link,{href:"/projects/keyedCRC"},"Keyed CRC"),", including a hash over the key-based security it offers."],keywords:"continuous register cipher hashed crc hashkeycipher"},{link:"/projects/hCRCRework",name:"Hashed CRC: Reworked",desc:["Another iteration upon the CRC, with the base being the ",e(n.Link,{href:"/projects/hashKeyCipher"},"Hashed CRC"),", updated with an improved hashing algorithm."],keywords:"continuous register cipher hcrcrework hashed crc: reworked"},{link:"/projects/K0090C4",name:"Weez'd 2",desc:[e(n.Link,{href:"/projects/0090C4"},"0090C4"),"'s key-integrated alternative."],keywords:"0090c4 cipher k0090c4 weez'd 2"},{link:"/projects/keyedCRC",name:"Keyed CRC",desc:["A key-based security improvement over the original  ",e(n.Link,{href:"/projects/continuousRegisterCipher"},"Continuous Register Cipher"),"."],keywords:"continuous register cipher keyedcrc keyed crc"},{link:"/projects/keysmashCipher",name:"Keysmash Cipher",desc:"The original cipher, that got us here.",keywords:"bipher keysmashcipher keysmash cipher"},{link:"/projects/poetry",name:"Poems",desc:"A collection of poems written by me, your loyal site administrator.",keywords:"ignorance someone else's panopticon poems poetry"},{link:"/projects/serverstalker",name:"Minecraft Server Pinger",desc:"A quick tool to check who is online on a specified Minecraft: Java Edition server, and a few more things.",keywords:"minecraft server pinger serverstalker"}];t.a=o}).call(this,r("hosL").h)},"8M9P":function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(t){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}function u(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw i}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,r){return t&&_(e.prototype,t),r&&_(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=k(e);if(t){var o=k(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return w(this,r)}}function w(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}r.d(t,"a",(function(){return E}));var j=r("hosL"),O={showcase:"showcase__R8tAi",desc:"desc__dbAJB",link:"link__I2jZf"},g=r("ox/y"),C="searchbar__gYPpE",R=function(e){function t(){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return f(s(e=a.call.apply(a,[this].concat(r))),"textInput",Object(j.createRef)()),e}!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(t,e);var r,n,u,a=c(t);return r=t,(n=[{key:"render",value:function(){return Object(j.h)("span",{class:C},Object(j.h)("input",{ref:this.textInput,placeholder:"Search...",onInput:this.handleChange.bind(this),autoFocus:!0}),Object(j.h)("button",null,Object(j.h)("img",{src:"/assets/search.png",alt:""})))}},{key:"handleChange",value:function(){this.props.parent.search(this.textInput.current.value,this.props.parent.props.items)}}])&&o(r.prototype,n),u&&o(r,u),Object.defineProperty(r,"prototype",{writable:!1}),t}(j.Component),P=R,S=function(e){function t(e){var n;y(this,t),n=r.call(this,e);var o,i=[],c=l(e.items);try{for(c.s();!(o=c.n()).done;){var u=o.value;i.push(Object(j.h)(E,{item:u,key:u.link}))}}catch(e){c.e(e)}finally{c.f()}return n.state={showcaseWidgets:i},n}d(t,e);var r=v(t);return b(t,[{key:"render",value:function(){return Object(j.h)("div",{className:"showcase-container"},Object(j.h)(P,{parent:this}),Object(j.h)("div",null,this.state.showcaseWidgets))}},{key:"search",value:function(e,t){e=e.toLowerCase();var r,n=[],o=l(t);try{for(o.s();!(r=o.n()).done;){var i=r.value;i.keywords.includes(e)&&n.push(Object(j.h)(E,{item:i,key:i.link}))}}catch(e){o.e(e)}finally{o.f()}this.setState({showcaseWidgets:n})}}]),t}(j.Component),E=function(e){function t(){return y(this,t),r.apply(this,arguments)}d(t,e);var r=v(t);return b(t,[{key:"render",value:function(){return Object(j.h)("span",{class:O.showcase},Object(j.h)("span",{class:O.header},this.props.item.name),Object(j.h)("span",{class:O.desc},this.props.item.desc),Object(j.h)(g.Link,{class:O.link,href:this.props.item.link},Object(j.h)("button",null,"Go!")))}}]),t}(j.Component);t.b=S},HvmH:function(e,t,r){"use strict";function n(){for(var e;e=d.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(i),e.__H.__h.forEach(c),e.__H.__h=[]}catch(t){e.__H.__h=[],b.options.__e(t,e.__v)}}function o(e){var t,r=function(){clearTimeout(n),g&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,100);g&&(t=requestAnimationFrame(r))}function i(e){var t=h,r=e.__c;"function"==typeof r&&(e.__c=void 0,r()),h=t}function c(e){var t=h;e.__c=e.__(),h=t}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function p(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}r.r(t);var h,y,_,b=r("hosL"),d=[],m=[],v=b.options.__b,w=b.options.__r,k=b.options.diffed,j=b.options.__c,O=b.options.unmount;b.options.__b=function(e){"function"!=typeof e.type||e.__m||null===e.__?e.__m||(e.__m=e.__&&e.__.__m?e.__.__m:""):e.__m=(e.__&&e.__.__m?e.__.__m:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),h=null,v&&v(e)},b.options.__r=function(e){w&&w(e),0;var t=(h=e.__c).__H;t&&(y===h?(t.__h=[],h.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=m,e.__N=e.i=void 0}))):(t.__h.forEach(i),t.__h.forEach(c),t.__h=[])),y=h},b.options.diffed=function(e){k&&k(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==d.push(t)&&_===b.options.requestAnimationFrame||((_=b.options.requestAnimationFrame)||o)(n)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==m&&(e.__=e.__V),e.i=void 0,e.__V=m}))),y=h=null},b.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(i),e.__h=e.__h.filter((function(e){return!e.__||c(e)}))}catch(r){t.some((function(e){e.__h&&(e.__h=[])})),t=[],b.options.__e(r,e.__v)}})),j&&j(e,t)},b.options.unmount=function(e){O&&O(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach((function(e){try{i(e)}catch(e){t=e}})),r.__H=void 0,t&&b.options.__e(t,r.__v))};var g="function"==typeof requestAnimationFrame,C="showcases__UhJnS",R=r("2kgO"),P=r("8M9P"),S=function(e){function t(){return i.apply(this,arguments)}!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(t,e);var r,n,o,i=f(t);return r=t,(n=[{key:"render",value:function(){return Object(b.h)("div",{class:C},Object(b.h)(P.b,{items:R.a}),Object(b.h)("p",null,"This is where all my projects are stored. Click any you like the look of!",Object(b.h)("br",null),Object(b.h)("a",{href:"/",rel:"noopener noreferrer"},"Home")),Object(b.h)("footer",null))}}])&&s(r.prototype,n),o&&s(r,o),Object.defineProperty(r,"prototype",{writable:!1}),t}(b.Component);t.default=S}}]);
//# sourceMappingURL=route-projects.chunk.3544c.js.map