(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2kgO":function(e,t,r){"use strict";(function(e){var s=r("Y3FI");const i=[{link:"/projects/0090C4",name:"0090C4",desc:"A cipher with the distinguishing feature being an offset of 0x0090C4.",keywords:"weez'd 2 k0090c4 cipher"},{link:"/projects/bipher",name:"Bipher",desc:["Variation of the ",e(s.Link,{href:"/projects/keysmashCipher"},"Keysmash Cipher"),", improving upon it by simply applying it twice."],keywords:"keysmash cipher bipher"},{link:"/projects/caesarVariation",name:"Caesar Variation",desc:"This is the famous Caesar Cipher, but the change by 3 is replaced with an alternative.",keywords:"cipher caesarvariation caesar variation"},{link:"/projects/continuousRegisterCipher",name:"Continuous Register Cipher",desc:"This cipher works by incrementing a counter per character it sees, then outputting the current value.",keywords:"crc continuousregistercipher continuous register cipher"},{link:"/projects/hashKeyCipher",name:"Hashed CRC",desc:["This cipher is a direct improvement over the ",e(s.Link,{href:"/projects/keyedCRC"},"Keyed CRC"),", including a hash over the key-based security it offers."],keywords:"continuous register cipher hashed crc hashkeycipher"},{link:"/projects/hCRCRework",name:"Hashed CRC: Reworked",desc:["Another iteration upon the CRC, with the base being the ",e(s.Link,{href:"/projects/hashKeyCipher"},"Hashed CRC"),", updated with an improved hashing algorithm."],keywords:"continuous register cipher hcrcrework hashed crc: reworked"},{link:"/projects/K0090C4",name:"Weez'd 2",desc:[e(s.Link,{href:"/projects/0090C4"},"0090C4"),"'s key-integrated alternative."],keywords:"0090c4 cipher k0090c4 weez'd 2"},{link:"/projects/keyedCRC",name:"Keyed CRC",desc:["A key-based security improvement over the original  ",e(s.Link,{href:"/projects/continuousRegisterCipher"},"Continuous Register Cipher"),"."],keywords:"continuous register cipher keyedcrc keyed crc"},{link:"/projects/keysmashCipher",name:"Keysmash Cipher",desc:"The original cipher, that got us here.",keywords:"bipher keysmashcipher keysmash cipher"},{link:"/projects/poetry",name:"Poems",desc:"A collection of poems written by me, your loyal site administrator.",keywords:"ignorance someone else's panopticon poems poetry"},{link:"/projects/serverstalker",name:"Minecraft Server Pinger",desc:"A quick tool to check who is online on a specified Minecraft: Java Edition server, and a few more things.",keywords:"minecraft server pinger serverstalker"}];t.a=i}).call(this,r("hosL").h)},"8M9P":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var s=r("hosL"),i={showcase:"showcase__R8tAi",desc:"desc__dbAJB",link:"link__I2jZf"},n=r("ox/y"),o="searchbar__gYPpE";var c=class extends s.Component{constructor(...e){var t,r,i;super(...e),t=this,r="textInput",i=Object(s.createRef)(),r in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i}render(){return Object(s.h)("span",{class:o},Object(s.h)("input",{ref:this.textInput,placeholder:"Search...",onInput:this.handleChange.bind(this),autoFocus:!0}),Object(s.h)("button",null,Object(s.h)("img",{src:"/assets/search.png",alt:""})))}handleChange(){this.props.parent.search(this.textInput.current.value,this.props.parent.props.items)}};class a extends s.Component{render(){return Object(s.h)("span",{class:i.showcase},Object(s.h)("span",{class:i.header},this.props.item.name),Object(s.h)("span",{class:i.desc},this.props.item.desc),Object(s.h)(n.Link,{class:i.link,href:this.props.item.link},Object(s.h)("button",null,"Go!")))}}t.b=class extends s.Component{constructor(e){super(e);let t=[];for(let r of e.items)t.push(Object(s.h)(a,{item:r,key:r.link}));this.state={showcaseWidgets:t}}render(){return Object(s.h)("div",{className:"showcase-container"},Object(s.h)(c,{parent:this}),Object(s.h)("div",null,this.state.showcaseWidgets))}search(e,t){e=e.toLowerCase();let r=[];for(let i of t)i.keywords.includes(e)&&r.push(Object(s.h)(a,{item:i,key:i.link}));this.setState({showcaseWidgets:r})}}},HvmH:function(e,t,r){"use strict";function s(){for(var e;e=p.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(n),e.__H.__h.forEach(o),e.__H.__h=[]}catch(t){e.__H.__h=[],_.options.__e(t,e.__v)}}function i(e){var t,r=function(){clearTimeout(s),y&&cancelAnimationFrame(t),setTimeout(e)},s=setTimeout(r,100);y&&(t=requestAnimationFrame(r))}function n(e){var t=c,r=e.__c;"function"==typeof r&&(e.__c=void 0,r()),c=t}function o(e){var t=c;e.__c=e.__(),c=t}r.r(t);var c,a,h,_=r("hosL"),p=[],u=[],d=_.options.__b,l=_.options.__r,m=_.options.diffed,f=_.options.__c,k=_.options.unmount;_.options.__b=function(e){"function"!=typeof e.type||e.__m||null===e.__?e.__m||(e.__m=e.__&&e.__.__m?e.__.__m:""):e.__m=(e.__&&e.__.__m?e.__.__m:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),c=null,d&&d(e)},_.options.__r=function(e){l&&l(e),0;var t=(c=e.__c).__H;t&&(a===c?(t.__h=[],c.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=u,e.__N=e.i=void 0}))):(t.__h.forEach(n),t.__h.forEach(o),t.__h=[])),a=c},_.options.diffed=function(e){m&&m(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==p.push(t)&&h===_.options.requestAnimationFrame||((h=_.options.requestAnimationFrame)||i)(s)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==u&&(e.__=e.__V),e.i=void 0,e.__V=u}))),a=c=null},_.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(n),e.__h=e.__h.filter((function(e){return!e.__||o(e)}))}catch(r){t.some((function(e){e.__h&&(e.__h=[])})),t=[],_.options.__e(r,e.__v)}})),f&&f(e,t)},_.options.unmount=function(e){k&&k(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach((function(e){try{n(e)}catch(e){t=e}})),r.__H=void 0,t&&_.options.__e(t,r.__v))};var y="function"==typeof requestAnimationFrame,b="showcases__UhJnS",C=r("2kgO"),v=r("8M9P");t.default=class extends _.Component{render(){return Object(_.h)("div",{class:b},Object(_.h)(v.b,{items:C.a}),Object(_.h)("p",null,"This is where all my projects are stored. Click any you like the look of!",Object(_.h)("br",null),Object(_.h)("a",{href:"/",rel:"noopener noreferrer"},"Home")),Object(_.h)("footer",null))}}}}]);
//# sourceMappingURL=route-projects.chunk.ddcf9.esm.js.map