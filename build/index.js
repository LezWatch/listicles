!function(){var e,t={501:function(e,t,r){"use strict";var n=window.wp.element,l=window.wp.blocks,i=window.React,o=(r(184),r(588)),c=r.n(o),s=r(913),a=r.n(s);const{__:__}=wp.i18n,{Fragment:u}=wp.element,{createBlock:p,InnerBlocks:d,InspectorControls:f}=wp.blockEditor,{PanelBody:m,ToggleControl:b,RangeControl:v,Button:g}=wp.components,{select:y,dispatch:k}=wp.data;function h(e){var t;const r=y("core/block-editor").getBlock(e),{items:n}=y("core/block-editor").getBlockAttributes(e),l=null==r||null===(t=r.innerBlocks)||void 0===t?void 0:t.length;l>0&&n!==l&&k("core/block-editor").updateBlockAttributes(e,{items:l})}const E=c()((e=>a()(e,(()=>["lez-library/listitem"]))));(0,l.registerBlockType)("lez-library/listicles",{title:__("Listicle","listicles"),icon:"excerpt-view",category:"layout",attributes:{items:{type:"number",default:2},reversed:{type:"boolean",default:!1},ranked:{type:"boolean",default:!1}},description:__("A block for listicles. You can add items, remove them, and flip them in reverse.","listicles"),edit:e=>{const{attributes:{placeholder:t},className:r,setAttributes:l,clientId:o}=e;let{items:c,reversed:s,ranked:a}=e.attributes;(0,i.useEffect)((()=>h(o)),[o]);let p="",v="0",y=a?"lez-library/rankeditem":"lez-library/listitem";return s&&(p="reversed",v=parseInt(`${c}`)+1),(0,n.createElement)(u,null,(0,n.createElement)(f,null,(0,n.createElement)(m,{title:__("Listicle Settings","listicles")},(0,n.createElement)(b,{label:"Ranked",help:e=>__(e?"Listicle is ranked.":"Listicle is default.","listicles"),checked:e.attributes.ranked,onChange:()=>e.setAttributes({ranked:!e.attributes.ranked})}),(0,n.createElement)(b,{label:"Reversed",help:e=>__(e?"Reversed order (10 - 1)":"Numerical order (1 - 10)","listicles"),checked:e.attributes.reversed,onChange:()=>e.setAttributes({reversed:!e.attributes.reversed})}))),(0,n.createElement)("dl",{className:`${r} ${p} listicle items-${c} ${a?"ranked":""}`,style:{counterReset:`listicle-counter ${v}`}},(0,n.createElement)(d,{template:E(c),allowedBlocks:[["lez-library/listitem"]],defaultBlock:"lez-library/listitem",renderAppender:!1}),(0,n.createElement)("div",{className:"listicles-buttons"},(0,n.createElement)(g,{icon:"insert",onClick:()=>{const e=wp.blocks.createBlock(y);wp.data.dispatch("core/block-editor").insertBlock(e,c,o)},className:"editor-inserter__toggle"},"Add List Item"),(0,n.createElement)(g,{icon:"controls-repeat",onClick:()=>l({reversed:!s}),className:"editor-inserter__toggle"},"Toggle List Order"))))},save:e=>{const{attributes:{className:t}}=e;let{items:r,reversed:l}=e.attributes,i="",o=0;return l&&(i="reversed",o=parseInt(`${r}`)+1),(0,n.createElement)("dl",{className:`${t} ${i} listicle items-${r}`,style:{counterReset:`listicle-counter ${o}`}},(0,n.createElement)(d.Content,null))}});const{__:w}=wp.i18n,{InnerBlocks:x}=wp.blockEditor,{Fragment:N}=wp.element,{select:B}=wp.data;(0,l.registerBlockType)("lez-library/listitem",{title:w("List Item","listicles"),parent:["lez-library/listicles"],icon:"editor-rtl",category:"layout",description:w("An individual list item.","listicles"),edit:function(e){const{className:t,clientId:r}=e;return(0,i.useEffect)((()=>{const e=B("core/block-editor").getBlockParents(r);return h(e),()=>h(e)}),[r]),(0,n.createElement)(N,null,(0,n.createElement)("div",{className:"listicles-innerblocks"},(0,n.createElement)(x,{template:[["lez-library/listdt"],["lez-library/listdd"]],allowedBlocks:[["lez-library/listdt"],["lez-library/listdd"]],templateLock:"all"})))},save:function(e){const{attributes:{className:t}}=e;return(0,n.createElement)(x.Content,null)}});const{__:z}=wp.i18n,{InnerBlocks:O}=wp.blockEditor,{Fragment:j}=wp.element;(0,l.registerBlockType)("lez-library/rankeditem",{title:z("Ranked Item","listicles"),parent:["lez-library/listicles"],icon:"editor-rtl",category:"layout",description:z("An individual ranked item.","listicles"),edit:function(e){const{className:t,clientId:r}=e;return(0,n.createElement)("div",{className:`${t} listicles-innerblocks`},(0,n.createElement)(O,{template:[["core/cover"],["lez-library/listdt"],["core/buttons"],["lez-library/listdd"]],allowedBlocks:[["core/cover"],["lez-library/listdt"],["core/buttons"],["core/button"],["lez-library/listdd"]]}))},save:function(e){const{attributes:{className:t}}=e;return(0,n.createElement)("div",{className:t},(0,n.createElement)(O.Content,null))}});const{__:I}=wp.i18n,{InnerBlocks:A,RichText:C}=wp.blockEditor,{Fragment:_}=wp.element;(0,l.registerBlockType)("lez-library/listdt",{title:I("Listicle Item Title","listicles"),parent:["lez-library/listitem"],icon:"migrate",category:"layout",attributes:{content:{type:"array",source:"children",selector:"dt",default:I("Title","listicles")},placeholder:{type:"string",default:I("Title","listicles")}},description:I("An individual list item title.","listicles"),edit(e){let{attributes:t,setAttributes:r,isSelected:l,className:i}=e;const{content:o}=t;return(0,n.createElement)(_,null,(0,n.createElement)(C,{tagName:"dt",className:i,value:o,allowedFormats:["core/bold","core/link","core/italic","core/strikethrough","core/text-color","yoast-seo/link"],onChange:e=>r({content:e})}))},save(e){let{attributes:t,className:r}=e;const{content:l}=t;return(0,n.createElement)(C.Content,{tagName:"dt",className:r,value:l})}});const{__:T}=wp.i18n,{InnerBlocks:$}=wp.blockEditor,{Fragment:S}=wp.element;(0,l.registerBlockType)("lez-library/listdd",{title:T("List Item Content","listicles"),parent:["lez-library/listitem"],icon:"migrate",category:"layout",description:T("A list item description (aka content).","listicles"),edit:function(e){const{className:t}=e;return(0,n.createElement)(S,null,(0,n.createElement)("dd",{className:t},(0,n.createElement)($,{template:[["core/paragraph",{placeholder:"List Content..."}]],templateLock:!1})))},save:function(e){const{attributes:{className:t}}=e;return(0,n.createElement)("dd",{className:t},(0,n.createElement)($.Content,null))}});const{__:R}=wp.i18n,{InnerBlocks:L,InspectorControls:F}=wp.blockEditor,{PanelBody:P,TextControl:M}=wp.components,{Fragment:U}=wp.element;(0,l.registerBlockType)("lez-library/rating",{title:R("Ratings","listicles"),icon:"star",category:"layout",attributes:{rating:{type:"number",default:1}},description:R("A block indicating a rating for a product.","listicles"),edit:function(e){const{className:t,clientId:r}=e,{rating:l}=e.attributes;return console.log(l),(0,n.createElement)(U,null,(0,n.createElement)(F,null,(0,n.createElement)(P,{title:R("Settings","listicles")},(0,n.createElement)(M,{label:"Rating (1 - 10)",type:"number",help:R("Enter the sporked rating (between 1 and 10).","listicles"),value:l,onChange:t=>e.setAttributes({rating:t})}))),(0,n.createElement)("div",{className:`${t}`},(0,n.createElement)("p",null,(0,n.createElement)("span",null,"Rating"),(0,n.createElement)("span",null,"2/10"),(0,n.createElement)("span",null,"Sporks"))))},save:function(e){const{attributes:{className:t,rating:r}}=e;return(0,n.createElement)("div",{className:`${t}`},(0,n.createElement)("p",null,(0,n.createElement)("span",null,"Rating"),(0,n.createElement)("span",null,"2/10"),(0,n.createElement)("span",null,"Sporks")))}})},184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var o=l.apply(null,r);o&&e.push(o)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(r=function(){return l}.apply(t,[]))||(e.exports=r)}()},705:function(e,t,r){var n=r(639).Symbol;e.exports=n},239:function(e,t,r){var n=r(705),l=r(607),i=r(333),o=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?l(e):i(e)}},545:function(e){e.exports=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}},561:function(e,t,r){var n=r(990),l=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(l,""):e}},290:function(e,t,r){var n=r(557);e.exports=function(e){return"function"==typeof e?e:n}},957:function(e,t,r){var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},607:function(e,t,r){var n=r(705),l=Object.prototype,i=l.hasOwnProperty,o=l.toString,c=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,c),r=e[c];try{e[c]=void 0;var n=!0}catch(e){}var l=o.call(e);return n&&(t?e[c]=r:delete e[c]),l}},333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},639:function(e,t,r){var n=r(957),l="object"==typeof self&&self&&self.Object===Object&&self,i=n||l||Function("return this")();e.exports=i},990:function(e){var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},557:function(e){e.exports=function(e){return e}},218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},5:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},448:function(e,t,r){var n=r(239),l=r(5);e.exports=function(e){return"symbol"==typeof e||l(e)&&"[object Symbol]"==n(e)}},913:function(e,t,r){var n=r(545),l=r(290),i=r(554),o=4294967295,c=Math.min;e.exports=function(e,t){if((e=i(e))<1||e>9007199254740991)return[];var r=o,s=c(e,o);t=l(t),e-=o;for(var a=n(s,t);++r<e;)t(r);return a}},601:function(e,t,r){var n=r(841);e.exports=function(e){return e?Infinity===(e=n(e))||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},554:function(e,t,r){var n=r(601);e.exports=function(e){var t=n(e),r=t%1;return t==t?r?t-r:t:0}},841:function(e,t,r){var n=r(561),l=r(218),i=r(448),o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,a=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(l(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=l(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=c.test(e);return r||s.test(e)?a(e.slice(2),r?2:8):o.test(e)?NaN:+e}},588:function(e){e.exports=function(e,t){var r,n,l=0;function i(){var i,o,c=r,s=arguments.length;e:for(;c;){if(c.args.length===arguments.length){for(o=0;o<s;o++)if(c.args[o]!==arguments[o]){c=c.next;continue e}return c!==r&&(c===n&&(n=c.prev),c.prev.next=c.next,c.next&&(c.next.prev=c.prev),c.next=r,c.prev=null,r.prev=c,r=c),c.val}c=c.next}for(i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return c={args:i,val:e.apply(null,i)},r?(r.prev=c,c.next=r):n=c,l===t.maxSize?(n=n.prev).next=null:l++,r=c,c.val}return t=t||{},i.clear=function(){r=null,n=null,l=0},i}}},r={};function n(e){var l=r[e];if(void 0!==l)return l.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=function(t,r,l,i){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],l=e[u][1],i=e[u][2];for(var c=!0,s=0;s<r.length;s++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(c=!1,i<o&&(o=i));if(c){e.splice(u--,1);var a=l();void 0!==a&&(t=a)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,l,i]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var l,i,o=r[0],c=r[1],s=r[2],a=0;if(o.some((function(t){return 0!==e[t]}))){for(l in c)n.o(c,l)&&(n.m[l]=c[l]);if(s)var u=s(n)}for(t&&t(r);a<o.length;a++)i=o[a],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self.webpackChunklisticles=self.webpackChunklisticles||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var l=n.O(void 0,[431],(function(){return n(501)}));l=n.O(l)}();