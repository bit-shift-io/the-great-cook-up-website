(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5178:function(e,n,t){var Symbol=t(8237).Symbol;e.exports=Symbol},3980:function(e){e.exports=function(e,n){for(var t=-1,r=null==e?0:e.length,u=Array(r);++t<r;)u[t]=n(e[t],t,e);return u}},4103:function(e){e.exports=function(e,n,t,r){var u=-1,o=null==e?0:e.length;for(r&&o&&(t=e[++u]);++u<o;)t=n(t,e[u],u,e);return t}},617:function(e){e.exports=function(e){return e.split("")}},8535:function(e){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},4541:function(e,n,t){var Symbol=t(5178),r=t(2450),u=t(5315),o=Symbol?Symbol.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?r(e):u(e)}},3743:function(e){e.exports=function(e){return function(n){return null==e?void 0:e[n]}}},2444:function(e){e.exports=function(e,n,t){var r=-1,u=e.length;n<0&&(n=-n>u?0:u+n),(t=t>u?u:t)<0&&(t+=u),u=n>t?0:t-n>>>0,n>>>=0;for(var o=Array(u);++r<u;)o[r]=e[r+n];return o}},9394:function(e,n,t){var Symbol=t(5178),r=t(3980),u=t(6961),o=t(1734),f=1/0,i=Symbol?Symbol.prototype:void 0,c=i?i.toString:void 0;e.exports=function e(n){if("string"==typeof n)return n;if(u(n))return r(n,e)+"";if(o(n))return c?c.call(n):"";var t=n+"";return"0"==t&&1/n==-f?"-0":t}},4910:function(e,n,t){var r=t(2444);e.exports=function(e,n,t){var u=e.length;return t=void 0===t?u:t,!n&&t>=u?e:r(e,n,t)}},5831:function(e,n,t){var r=t(4910),u=t(1192),o=t(8400),f=t(5741);e.exports=function(e){return function(n){var t=u(n=f(n))?o(n):void 0,i=t?t[0]:n.charAt(0),c=t?r(t,1).join(""):n.slice(1);return i[e]()+c}}},1124:function(e,n,t){var r=t(4103),u=t(2457),o=t(8847),f=RegExp("['’]","g");e.exports=function(e){return function(n){return r(o(u(n).replace(f,"")),e,"")}}},31:function(e,n,t){var r=t(3743)({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});e.exports=r},1809:function(e,n,t){var r="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g;e.exports=r},2450:function(e,n,t){var Symbol=t(5178),r=Object.prototype,u=r.hasOwnProperty,o=r.toString,f=Symbol?Symbol.toStringTag:void 0;e.exports=function(e){var n=u.call(e,f),t=e[f];try{e[f]=void 0;var r=!0}catch(e){}var i=o.call(e);return r&&(n?e[f]=t:delete e[f]),i}},1192:function(e){var n=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return n.test(e)}},7400:function(e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},5315:function(e){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},8237:function(e,n,t){var r=t(1809),u="object"==typeof self&&self&&self.Object===Object&&self,o=r||u||Function("return this")();e.exports=o},8400:function(e,n,t){var r=t(617),u=t(1192),o=t(8919);e.exports=function(e){return u(e)?o(e):r(e)}},8919:function(e){var n="\ud800-\udfff",t="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\ud83c[\udffb-\udfff]",u="[^"+n+"]",o="(?:\ud83c[\udde6-\uddff]){2}",f="[\ud800-\udbff][\udc00-\udfff]",i="(?:"+t+"|"+r+")?",c="[\\ufe0e\\ufe0f]?",a="(?:\\u200d(?:"+[u,o,f].join("|")+")"+c+i+")*",l=RegExp(r+"(?="+r+")|(?:"+[u+t+"?",t,o,f,"["+n+"]"].join("|")+")"+(c+i+a),"g");e.exports=function(e){return e.match(l)||[]}},896:function(e){var n="\ud800-\udfff",t="\\u2700-\\u27bf",r="a-z\\xdf-\\xf6\\xf8-\\xff",u="A-Z\\xc0-\\xd6\\xd8-\\xde",o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",f="['’]",i="["+o+"]",c="["+r+"]",a="[^"+n+o+"\\d+"+t+r+u+"]",l="(?:\ud83c[\udde6-\uddff]){2}",s="[\ud800-\udbff][\udc00-\udfff]",d="["+u+"]",x="(?:"+c+"|"+a+")",p="(?:"+f+"(?:d|ll|m|re|s|t|ve))?",v="(?:"+f+"(?:D|LL|M|RE|S|T|VE))?",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",g="[\\ufe0e\\ufe0f]?",h="(?:\\u200d(?:"+["[^"+n+"]",l,s].join("|")+")"+g+b+")*",m="(?:"+["["+t+"]",l,s].join("|")+")"+(g+b+h),j=RegExp([d+"?"+c+"+"+p+"(?="+[i,d,"$"].join("|")+")","(?:"+d+"|"+a+")+"+v+"(?="+[i,d+x,"$"].join("|")+")",d+"?"+x+"+"+p,d+"+"+v,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])","\\d+",m].join("|"),"g");e.exports=function(e){return e.match(j)||[]}},2457:function(e,n,t){var r=t(31),u=t(5741),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,f=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=u(e))&&e.replace(o,r).replace(f,"")}},6961:function(e){var n=Array.isArray;e.exports=n},8028:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},1734:function(e,n,t){var r=t(4541),u=t(8028);e.exports=function(e){return"symbol"==typeof e||u(e)&&"[object Symbol]"==r(e)}},6795:function(e,n,t){var r=t(1124),u=t(2091),o=r(function(e,n,t){return e+(t?" ":"")+u(n)});e.exports=o},5741:function(e,n,t){var r=t(9394);e.exports=function(e){return null==e?"":r(e)}},2091:function(e,n,t){var r=t(5831)("toUpperCase");e.exports=r},8847:function(e,n,t){var r=t(8535),u=t(7400),o=t(5741),f=t(896);e.exports=function(e,n,t){return(e=o(e),void 0===(n=t?void 0:n))?u(e)?f(e):r(e):e.match(n)||[]}},9961:function(e,n,t){Promise.resolve().then(t.bind(t,3264))},3264:function(e,n,t){"use strict";t.r(n),t.d(n,{HomeClient:function(){return x}});var r=t(6771),u=t(5464),o=t.n(u),f=t(6795),i=t.n(f),c=t(3937),a=t(9571);let l=c.forwardRef((e,n)=>{let{className:t,type:u,...o}=e;return(0,r.jsx)("input",{type:u,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:n,...o})});l.displayName="Input";var s=t(522);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let d=(0,s.Z)("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);function x(e){var n;let[t,u]=(0,c.useState)(""),f=(null===(n=e.files)||void 0===n?void 0:n.filter(e=>{var n;if(!t)return!0;let r=t.toLowerCase(),u=e.path.replace(".md",""),o=u.replaceAll("-"," ").toLowerCase();if(o.includes(r))return!0;let f=e.tags,i=null!==(n=null==f?void 0:f.find(e=>e.toLowerCase().includes(r)))&&void 0!==n&&n;return i}))||[];return console.log("filter: ",t),(0,r.jsx)("main",{className:"flex flex-grow justify-center items-center p-5",children:(0,r.jsxs)("div",{className:"flex-grow max-w-5xl border rounded p-5",children:[(0,r.jsx)("h1",{className:"pb-2 text-xl font-bold",children:"The Great Cook Up"}),(0,r.jsxs)("div",{className:"flex flex-row justify-between pt-5 pb-5 items-center space-x-2",children:[(0,r.jsx)(l,{placeholder:"Search",onChange:e=>{u(e.target.value)},value:t}),(0,r.jsx)(d,{onClick:()=>u(""),className:"cursor-pointer"})]}),f.map(e=>{let n=e.tags,t=e.path.replace(".md",""),f=i()(t.replaceAll("-"," "));return(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)(o(),{href:"/".concat(t),children:f}),(0,r.jsx)("div",{className:"space-x-2",children:null==n?void 0:n.map((e,n)=>(0,r.jsx)("span",{className:"rounded border pl-2 pr-2 cursor-pointer",onClick:()=>u(e.toLowerCase()),children:e},n))})]},t)})]})})}},9571:function(e,n,t){"use strict";t.d(n,{cn:function(){return o}});var r=t(3501),u=t(1044);function o(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,u.m6)((0,r.W)(n))}}},function(e){e.O(0,[698,159,46,744],function(){return e(e.s=9961)}),_N_E=e.O()}]);