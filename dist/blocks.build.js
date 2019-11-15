!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){var r=n(16),i=r.Symbol;e.exports=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(n(2),n(24)),i=(n.n(r),n(25)),l=(n.n(i),n(26));n.n(l)},function(e,t,n){"use strict";var r=n(3),i=(n.n(r),n(4)),l=n.n(i),o=n(6),c=n.n(o),s=n(22),a=(n.n(s),n(23)),__=(n.n(a),wp.i18n.__),u=wp.element.Fragment,p=wp.blocks,f=p.createBlock,m=p.registerBlockType,d=wp.editor,v=d.InnerBlocks,y=d.InspectorControls,b=wp.components,w=b.PanelBody,g=b.ToggleControl,h=(b.RangeControl,b.IconButton),x=wp.data.dispatch,E=l()(function(e){return c()(e,function(){return["lez-library/listitem"]})});m("lez-library/listicles",{title:__("Listicle","listicles"),icon:"excerpt-view",category:"layout",attributes:{items:{type:"number",default:2},reversed:{type:"boolean",default:!1}},description:__("A block for listicles. You can add items, remove them, and flip them in reverse.","listicles"),edit:function(e){var t=(e.attributes.placeholder,e.className),n=e.setAttributes,r=e.clientId,i=e.attributes,l=i.items,o=i.reversed,c="",s="0";o&&(c="reversed",s=parseInt(""+l)+1);var a=function(){n({items:parseInt(""+l)+1});var e=f("lez-library/listitem");x("core/editor").insertBlock(e,l,r)};return wp.element.createElement(u,null,wp.element.createElement(y,null,wp.element.createElement(w,{title:__("Listicle Settings","listicles")},wp.element.createElement(g,{label:"Reversed",help:function(e){return e?__("Reversed order (10 - 1)","listicles"):__("Numerical order (1 - 10)","listicles")},checked:e.attributes.reversed,onChange:function(){return e.setAttributes({reversed:!e.attributes.reversed})}}))),wp.element.createElement("dl",{className:t+" "+c+" listicle items-"+l,style:{counterReset:"listicle-counter "+s}},wp.element.createElement(v,{template:E(l),allowedBlocks:[["lez-library/listitem"]],defaultBlock:"lez-library/listitem"}),wp.element.createElement("div",{className:"listicles-buttons"},wp.element.createElement(h,{icon:"insert",onClick:a,className:"editor-inserter__toggle"},"Add List Item"),wp.element.createElement(h,{icon:"controls-repeat",onClick:function(){return n({reversed:!o})},className:"editor-inserter__toggle"},"Toggle List Order"))))},save:function(e){var t=e.attributes.className,n=e.attributes,r=n.items,i=n.reversed,l="",o=0;return i&&(l="reversed",o=parseInt(""+r)+1),wp.element.createElement("dl",{className:t+" "+l+" listicle items-"+r,style:{counterReset:"listicle-counter "+o}},wp.element.createElement(v.Content,null))}})},function(e,t,n){var r,i;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===i)for(var o in r)l.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}var l={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?e.exports=n:(r=[],void 0!==(i=function(){return n}.apply(t,r))&&(e.exports=i))}()},function(e,t,n){(function(t){e.exports=function(e,n){function r(){var t,n,r=l,s=arguments.length;e:for(;r;){if(r.args.length===arguments.length){for(n=0;n<s;n++)if(r.args[n]!==arguments[n]){r=r.next;continue e}return r!==l&&(r===o&&(o=r.prev),r.prev.next=r.next,r.next&&(r.next.prev=r.prev),r.next=l,r.prev=null,l.prev=r,l=r),r.val}r=r.next}for(t=new Array(s),n=0;n<s;n++)t[n]=arguments[n];return r={args:t,val:e.apply(null,t)},l?(l.prev=r,r.next=l):o=r,c===i?(o=o.prev,o.next=null):c++,l=r,r.val}var i,l,o,c=0;return n&&n.maxSize&&(i=n.maxSize),r.clear=function(){l=null,o=null,c=0},"test"===t.env.NODE_ENV&&(r.getCache=function(){return[l,o,c]}),r}}).call(t,n(5))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(u===setTimeout)return setTimeout(e,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function l(e){if(p===clearTimeout)return clearTimeout(e);if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function o(){v&&m&&(v=!1,m.length?d=m.concat(d):y=-1,d.length&&c())}function c(){if(!v){var e=i(o);v=!0;for(var t=d.length;t;){for(m=d,d=[];++y<t;)m&&m[y].run();y=-1,t=d.length}m=null,v=!1,l(e)}}function s(e,t){this.fun=e,this.array=t}function a(){}var u,p,f=e.exports={};!function(){try{u="function"===typeof setTimeout?setTimeout:n}catch(e){u=n}try{p="function"===typeof clearTimeout?clearTimeout:r}catch(e){p=r}}();var m,d=[],v=!1,y=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new s(e,t)),1!==d.length||v||i(c)},s.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=a,f.addListener=a,f.once=a,f.off=a,f.removeListener=a,f.removeAllListeners=a,f.emit=a,f.prependListener=a,f.prependOnceListener=a,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(e,t,n){function r(e,t){if((e=o(e))<1||e>c)return[];var n=s,r=a(e,s);t=l(t),e-=s;for(var u=i(r,t);++n<e;)t(n);return u}var i=n(7),l=n(8),o=n(10),c=9007199254740991,s=4294967295,a=Math.min;e.exports=r},function(e,t){function n(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}e.exports=n},function(e,t,n){function r(e){return"function"==typeof e?e:i}var i=n(9);e.exports=r},function(e,t){function n(e){return e}e.exports=n},function(e,t,n){function r(e){var t=i(e),n=t%1;return t===t?n?t-n:t:0}var i=n(11);e.exports=r},function(e,t,n){function r(e){if(!e)return 0===e?e:0;if((e=i(e))===l||e===-l){return(e<0?-1:1)*o}return e===e?e:0}var i=n(12),l=1/0,o=1.7976931348623157e308;e.exports=r},function(e,t,n){function r(e){if("number"==typeof e)return e;if(l(e))return o;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var n=a.test(e);return n||u.test(e)?p(e.slice(2),n?2:8):s.test(e)?o:+e}var i=n(13),l=n(14),o=NaN,c=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,p=parseInt;e.exports=r},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t,n){function r(e){return"symbol"==typeof e||l(e)&&i(e)==o}var i=n(15),l=n(21),o="[object Symbol]";e.exports=r},function(e,t,n){function r(e){return null==e?void 0===e?s:c:a&&a in Object(e)?l(e):o(e)}var i=n(0),l=n(19),o=n(20),c="[object Null]",s="[object Undefined]",a=i?i.toStringTag:void 0;e.exports=r},function(e,t,n){var r=n(17),i="object"==typeof self&&self&&self.Object===Object&&self,l=r||i||Function("return this")();e.exports=l},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,n(18))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===typeof window&&(n=window)}e.exports=n},function(e,t,n){function r(e){var t=o.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var i=c.call(e);return r&&(t?e[s]=n:delete e[s]),i}var i=n(0),l=Object.prototype,o=l.hasOwnProperty,c=l.toString,s=i?i.toStringTag:void 0;e.exports=r},function(e,t){function n(e){return i.call(e)}var r=Object.prototype,i=r.toString;e.exports=n},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t){},function(e,t){},function(e,t){var __=wp.i18n.__,n=wp.editor.InnerBlocks,r=wp.blocks.registerBlockType,i=(wp.components.IconButton,wp.element.Fragment);r("lez-library/listitem",{title:__("List Item","listicles"),parent:["lez-library/listicles"],icon:"editor-rtl",category:"layout",description:__("An individual list item.","listicles"),edit:function(e){e.className,e.clientId;return wp.element.createElement(i,null,wp.element.createElement("div",{className:"listicles-innerblocks"},wp.element.createElement(n,{template:[["lez-library/listdt"],["lez-library/listdd"]],allowedBlocks:[["lez-library/listdt"],["lez-library/listdd"]]})))},save:function(e){e.attributes.className;return wp.element.createElement(n.Content,null)}})},function(e,t){var __=wp.i18n.__,n=wp.editor,r=(n.InnerBlocks,n.RichText),i=wp.blocks.registerBlockType,l=wp.element.Fragment;i("lez-library/listdt",{title:__("Listicle Item Title","listicles"),parent:["lez-library/listitem"],icon:"migrate",category:"layout",attributes:{content:{type:"array",source:"children",selector:"dt",default:__("Title","listicles")},placeholder:{type:"string",default:__("Title","listicles")}},description:__("An individual list item title.","listicles"),edit:function(e){var t=e.attributes,n=e.setAttributes,i=(e.isSelected,e.className),o=t.content;return wp.element.createElement(l,null,wp.element.createElement(r,{tagName:"dt",className:i,value:o,formattingControls:["italic","strikethrough","bold","link"],onChange:function(e){return n({content:e})}}))},save:function(e){var t=e.attributes,n=e.className,i=t.content;return wp.element.createElement(r.Content,{tagName:"dt",className:n,value:i})}})},function(e,t){var __=wp.i18n.__,n=wp.editor.InnerBlocks,r=wp.blocks.registerBlockType,i=wp.element.Fragment;r("lez-library/listdd",{title:__("List Item Content","listicles"),parent:["lez-library/listitem"],icon:"migrate",category:"layout",description:__("A list item description (aka content).","listicles"),edit:function(e){var t=e.className;return wp.element.createElement(i,null,wp.element.createElement("dd",{className:t},wp.element.createElement(n,{template:[["core/paragraph",{placeholder:"List Content..."}]],templateLock:!1})))},save:function(e){var t=e.attributes.className;return wp.element.createElement("dd",{className:t},wp.element.createElement(n.Content,null))}})}]);