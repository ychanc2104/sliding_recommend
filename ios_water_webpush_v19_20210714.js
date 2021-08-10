/**
 * 加入onpage request紀錄在i3fresh, setddg
 * 20201124 Wine

 * 如果頁面有影音版為則不推播(ettoday用)- AviviD.video_page_filter()
 * 20201126 Wine

 * 優化跳出率功能，上線於全電商(website=3)
 * 20201223 Wine
 *
 * 電商onpage圖片滿版處理，直播版位
 * 20201224 ray
 */
(function () {
    /*! jQuery v3.1.1 | (c) jQuery Foundation | jQuery311.org/license */
    !function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
    a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
    void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});
    /*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license end*/
    var jQuery311 = jQuery.noConflict(true);
    // console.log("jQuery: ", jQuery.fn.jquery);
    // console.log("jQuery311: ", jQuery311.fn.jquery);

    AviviD.debug_mode = 0;
    AviviD.demo_mode = 0;

    AviviD.tracking = function(behavior_type,referrer_url,current_url,click_url,user_ip,os_type,browser_type)
    {
        if(typeof(AviviD.get_article_title) == 'function')
        {
            AviviD.get_article_title();
        }

        if(AviviD.title != undefined)
        {
            var track_data = {
                'web_id'            : AviviD.web_id,
                'uuid'              : AviviD.uuid,
                'behavior_type'     : behavior_type,
                'referrer_url'      : referrer_url,
                'current_url'       : current_url,
                'click_url'         : click_url,
                'user_ip'           : user_ip,
                'os_type'           : os_type,
                'browser_type'      : browser_type,
                'tracking_platform' : AviviD.tracking_platform,
                'title'             : (AviviD.title != undefined)?AviviD.title:'_',
            };


            var URLs = "https://elephant.likr.com.tw/elephant_api/php_redis.php";
            var json_data = JSON.stringify(track_data);

            jQuery311.ajax({

                type: "POST",
                data: {
                    "json_data": json_data
                },
                url: URLs,
                dataType: "json",

                    success: function (data) {
                        // console.log('add_type:  ' + data.add_type);
                        // console.log('add_status:  ' + data.add_status);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        // console.log("jqXHR :", jqXHR);
                        // console.log("textStatus :", textStatus);
                        // console.log("errorThrown :", errorThrown);
                }
            });
        }
        else
        {
            setTimeout(function () { AviviD.tracking(behavior_type,referrer_url,current_url,click_url,user_ip,os_type,browser_type) }, 500);
        }

    }
    AviviD.get_pair_uuid = function(){

        if(typeof(AviviD.get_urlparam) == 'function')
        {
            if(AviviD.get_urlparam('avivid_uuid_pair'))
            {
                AviviD.return_pair_uuid(AviviD.get_urlparam('avivid_uuid_pair'),AviviD.get_urlparam('avivid_pair'));
            }
        }
        else
        {
            setTimeout(function () { AviviD.get_pair_uuid() }, 1000);
        }


    }
    AviviD.return_pair_uuid = function(avivid_uuid,type='likr') {
        // if(AviviD.messaging != undefined ){
        //     AviviD.messaging.getToken()
        //         .then(function (currentToken) {
        //             if (currentToken) {

        //                 AviviD.send_uuid(avivid_uuid,currentToken);

        //             } else {
        //                 AviviD.send_uuid(avivid_uuid,'_');
        //             }

        //         }).catch(function (err) {
        //             AviviD.send_uuid(avivid_uuid,'_');
        //         });
        // }
        // else {//沒有firebaseApp 要載入 AviviD.loadFirebase()，但要先等有AviviD.settings
        //     if(!AviviD.firebaseApp && AviviD.sw_path)
        //     {
        //         AviviD.loadFirebase();
        //     }

        //     setTimeout(function () { AviviD.return_pair_uuid(avivid_uuid) }, 2000);


        // }

        type = (type) ? type : 'likr';

        if(AviviD.get_cookie('AviviD_send_pair') == null)
        {
            var url_choose = {
                'likr' :'https://narwhal-lbr.likr.com.tw/save_uuid/',
                'ad' :'https://bluefin-lbr.likr.com.tw/save_uuid/',
                'rec' :'https://bottlenose-lbr.likr.com.tw/save_uuid/'
            };
            var url = url_choose[type];
            AviviD.send_uuid(avivid_uuid,url,'_');
        }


    }
    AviviD.send_uuid = function(avivid_uuid, url_path, currentToken='_'){
        if(!AviviD.empty(AviviD.uuid))
        {
            let uuid_payload = {
                'avivid_uuid':avivid_uuid,
                'website_uuid':AviviD.uuid,
                'web_id':AviviD.web_id,
                'category_id':AviviD.category_id,
                'fcm_token':currentToken,
                'url':location.href
            };
            var str = btoa(unescape(encodeURIComponent(JSON.stringify(uuid_payload))));
            str = str.replaceAll('+','.').replaceAll('/','_').replaceAll('=','-');
            var url = url_path+str;
            jQuery.ajax({
                url: url,
                type: "GET",
                success: function (data) {
                    // console.log(data);
                    AviviD.set_cookie('AviviD_send_pair', 1, 1);
                }
            });
        }
        else
        {
            setTimeout(function () { AviviD.send_uuid(avivid_uuid,'_') }, 1000);
        }

    }

    var referrer_url = document.referrer;
    var current_url  = window.location.href;
    AviviD.tracking('onpage',referrer_url,current_url,'_','_',AviviD.int_os_type,AviviD.int_browser_type);
    AviviD.get_pair_uuid();



    /**
     * 瀏覽器類型(string) 轉 瀏覽器類型編號(number), 20200220 for ios_webpush will replace and cover GTM-T8C2ZSM(crescent_track_code), GTM-W9F4QDN(ring_without_tracking)
     */
    AviviD.transBrowserTypeToNumber = function (browser_type) {
        switch (browser_type) {
            case 'Chrome':
                return '1';
                break;
            case 'Firefox':
                return '2';
                break;
            case 'Safari':
                return '3';
                break;
            case 'iOS':
                return '4';
                break;
            case 'IE':
                return '5';
                break;
            case 'Edge':
                return '6';
                break;
            case 'Samsung Browser':
                return '8';
                break;
            case 'LINE':
                return '10';
                break;
            case 'weixin':
                return '11';
                break;
            case 'fbapp':
                return '12';
                break;
            case 'Instagram':
                return '13';
                break;
            case 'Opera':
                return '14'
                break;
            case 'Unknown':
                return '9';
                break;
            default:
                return '9';
                break;
        }
    };

    /**
     * 取得瀏覽器類型(string), 20200220 for ios_webpush will replace and cover GTM-T8C2ZSM(crescent_track_code), GTM-W9F4QDN(ring_without_tracking)
     */
    AviviD.detectBrowserType = function () {
        var isLINE = (navigator.userAgent.match(/line/i) != null),
            isiOS = (AviviD.UAResult.os.name == 'iOS'),
            isweixin = navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger",//微信瀏覽器
            isfbapp = navigator.userAgent.indexOf('FBAV') > -1 || navigator.userAgent.indexOf('FBSV') > -1, //Facebook App 內瀏覽器(Android => FBAV, IOS => FBSV)
            isInstagram = navigator.userAgent.indexOf('Instagram') > -1; //Instagram 內瀏覽器
            isOpera = navigator.userAgent.indexOf("Opera") > -1 || navigator.userAgent.indexOf("OPR") > -1;

        if (isLINE) {
            return "LINE";
        } else if (isiOS) {
            return "iOS";
        } else if (isweixin){
            return "weixin";
        } else if (isfbapp){
            return "fbapp";
        } else if (isInstagram){
            return "Instagram";
        } else if (isOpera){
            return "Opera";
        } else {
            return AviviD.UAResult.browser.name;
        }
    };

    ////////// waterfall 訂閱與推播 //////////
    AviviD.removeElement = function(elementId) {
        // 移除影片模組
        if (document.getElementById('hls-example') != null){
            var oldPlayer = document.getElementById('hls-example');
            videojs(oldPlayer).muted(true);
            videojs(oldPlayer).dispose();
        }

        // 移除影片計數
        if (typeof AviviD.video_Timer == 'number'){
            clearInterval(AviviD.video_Timer);
        }

        // Removes an element from the document
        var element = document.getElementById(elementId);
        if(element != null){
            element.parentNode.removeChild(element);
        }

    }

    //only for browsing 50s push
    AviviD.ios_visibilitychange = function (hide) {
        if(!hide){
            var already_exist = (AviviD.get_cookie('AviviD_already_exist') != null) ? AviviD.get_cookie('AviviD_already_exist') : 0; // 原生訂閱是否已存在
            var ios_already_exist = parseInt((AviviD.get_cookie('AviviD_waterfall_status') != null) ? AviviD.get_cookie('AviviD_waterfall_status') : 0);
            var enable = already_exist || ios_already_exist;
            if (enable == 1){
                // TODO: 回歸預設到數秒數，重新倒數
                AviviD.likrTimer.resetTime();

                // TODO: 啟動定時觸發推播
                // if(AviviD.leave == 1){
                    AviviD.likrTimer.intervalTrigger(AviviD.imitation_subscribe_webpush, enable);
                // }
            }
        } else {
            // TODO: 清除計時器
            AviviD.likrTimer.clearTimer();
            // AviviD.leave = 1;
        }
    }

    AviviD.waterfall_enable = function () {
        AviviD.received = (AviviD.get_cookie('AviviD_received') != null) ? parseInt(AviviD.get_cookie('AviviD_received')) : 0;
        AviviD.page_view();
        function ios_rule(ios_status) {
            switch(ios_status){
                case 0:
                    // AviviD.imitation_subscribe_webpush(0);
                    // // TODO: 初始化推播計時器
                    AviviD.likrTimer.init();

                    // // TODO: 啟動定時觸發推播
                    AviviD.likrTimer.intervalTrigger_ad_banner(AviviD.imitation_subscribe_webpush, 0);
                    break;
                case 1:
                    /** TODO: 1.update into localstorage
                     *        2.update into cookie
                     */
                    localStorage.setItem('AviviD_waterfall_status', 1);
                    AviviD.set_cookie('AviviD_waterfall_status', 1);
                    ////////
                    // TODO: 取代原生推播的onfocus, onblur 20200616 因推播邏輯錯誤，註解此功能 Request By James, Wing
                    // window.onfocus = function () {
                    //     AviviD.ios_visibilitychange(false);
                    // }
                    // window.onblur = function () {
                    //     AviviD.ios_visibilitychange(true);
                    // }
                    // TODO: 初始化推播計時器
                    AviviD.likrTimer.init();
                    // AviviD.likrTimer.native_init(AviviD.imitation_subscribe_webpush, 1);

                    // TODO: 啟動定時觸發推播
                    AviviD.likrTimer.intervalTrigger(AviviD.imitation_subscribe_webpush, 1);
                    break;
                case 2:
                    console.log('denied avivid ios subscribe');
                    break;
                default:
                    console.log('avivid ios default executed none');
                    break;
            }
        }
        // var os_platform = AviviD.int_os_type + AviviD.int_browser_type.padStart(2, "0");
        //rick 修改不管原生訂閱都要跳出onpage
        // var notification_permission = (window.Notification != null) ? window.Notification.permission : "unknow";

        var already_exist = (AviviD.get_cookie('AviviD_already_exist') != null) ? AviviD.get_cookie('AviviD_already_exist') : 0; // 原生訂閱是否已存在
        // if(notification_permission != 'denied'){ //rick 修改不管原生訂閱都要跳出onpage
            if (already_exist == 1 ){ //&& AviviD.AllowList.includes(AviviD.web_id) RICK 不判斷是否在ALLOW
                if(AviviD.demo_mode || AviviD.debug_mode){
                    console.log("sw subscribe is granted");
                }
                // TODO: 將ios推播狀態設定為0，使報表正常統計。
                localStorage.setItem('AviviD_waterfall_status', 0);
                AviviD.set_cookie('AviviD_waterfall_status', 0);
                ////////
                // TODO: 取代原生推播的onfocus, onblur 20200616 因推播邏輯錯誤，註解此功能 Request By James, Wing
                // window.onfocus = function () {
                //     AviviD.ios_visibilitychange(false);
                // }
                // window.onblur = function () {
                //     AviviD.ios_visibilitychange(true);
                // }
                if(Notification.permission == 'granted' || AviviD.settings.website_type == '3')
                {
                    // TODO: 初始化推播計時器
                    AviviD.likrTimer.init();
                    // AviviD.likrTimer.native_init(AviviD.imitation_subscribe_webpush, 1);

                    // TODO: 啟動定時觸發推播
                    AviviD.likrTimer.intervalTrigger(AviviD.imitation_subscribe_webpush, 1);
                }

            } else {
                var ios_status = 0;
                if((AviviD.get_cookie('AviviD_waterfall_status') == null)){
                    if(localStorage.getItem('AviviD_waterfall_status') == null){
                        ios_status = 0;
                    }else{
                        ios_status = parseInt(localStorage.getItem('AviviD_waterfall_status'));
                    }
                }else{
                    ios_status = parseInt(AviviD.get_cookie('AviviD_waterfall_status'));
                }
                // if(AviviD.settings.website_type == "3"){ ios_status = 1; }//rick:測試全面開啟onpage的成效，有開開關的才會跳過
                // ios_status = 1; // 不執行訂閱動作，直接推播。
                let avivid_ios_sub_list = ['20180905000003','20170626001000','20190626000001','20181120000002'];//rick：某些媒體需要訂閱後再跳出onpage
                if(!avivid_ios_sub_list.includes(AviviD.category_id) )
                {
                    ios_status = 1;
                }
                jQuery311(document).ready(ios_rule(ios_status));
            }
        // }else{
        //     // if(AviviD.debug_mode || AviviD.debug_mode){
        //         console.log("ServiceWorker Denied");
        //     // }
        // }
    }

    AviviD.setIconWithImpression = function(icon, title){
        let iconWithImpression = new URL('https://popcorn.likr.tw/api/onpage_impression.php');
        iconWithImpression.searchParams.append('web_id', AviviD.web_id);
        iconWithImpression.searchParams.append('os_type', AviviD.int_os_type);
        iconWithImpression.searchParams.append('uuid', AviviD.get_ios_uuid());
        iconWithImpression.searchParams.append('type', 'direct_push');
        iconWithImpression.searchParams.append('title', title);
        iconWithImpression.searchParams.append('url', icon);
        return iconWithImpression.href;
    }

    AviviD.setUrlWithRedirecter = function(url, title){
        let UrlWithRedirecter = new URL('https://popcorn.likr.tw/api/onpage_redirecter.php');
        UrlWithRedirecter.searchParams.append('web_id', AviviD.web_id);
        UrlWithRedirecter.searchParams.append('os_type', AviviD.int_os_type);
        UrlWithRedirecter.searchParams.append('uuid', AviviD.get_ios_uuid());
        UrlWithRedirecter.searchParams.append('type', 'direct_push');
        UrlWithRedirecter.searchParams.append('title', title);
        UrlWithRedirecter.searchParams.append('url', btoa(url));
        return UrlWithRedirecter.href;
    }
    AviviD.setUrlWithRedirecterClick = function(url,title){
        let UrlWithRedirecter = new URL('https://popcorn.likr.tw/api/onpage_click_for_direct.php');
        UrlWithRedirecter.searchParams.append('web_id', AviviD.web_id);
        UrlWithRedirecter.searchParams.append('os_type', AviviD.int_os_type);
        UrlWithRedirecter.searchParams.append('uuid', AviviD.get_ios_uuid());
        UrlWithRedirecter.searchParams.append('type', 'direct_onpage');
        UrlWithRedirecter.searchParams.append('title', title);

        servicetype=AviviD.UAResult.os.name;
        url2=AviviD.changeUrlWithLive(servicetype,url);

        UrlWithRedirecter.searchParams.append('url', btoa(url));
        return UrlWithRedirecter.href;
    }

    AviviD.changeUrlWithLive=function(type,url){
        switch(type){
            case 'iOS':
                url3=url.split('/')[3];
                url3="fb://profile/?id="+url3;
                // url3="fb://profile/?id=han168888";
                break;
            case 'Android':
                url=url.split('?')[0];
                video=url.split('/')[5];
                url3="fb://video/"+video+"?source_url="+url;
                // url="fb://video/265615035163287?source_url=https://www.facebook.com/703449936399981/videos/265615035163287";
                break;
            default:
                url3=url;
                break;
        }
        return url3;
    }

    /**
     * @todo 判斷當前文章是否與推播的文章相同
     */
    AviviD.replaceSpaceUrl=function(url){
        return url.replace(/ /g,"+","+");
    }
    AviviD.checkSamePageLink = function(webPushUrl, type){
        if(webPushUrl=="_" || webPushUrl == null){
            return false;
        }
        // 取得視窗移除utm參數的網址
        var window_link = new URL(window.location.href);
        window_link.searchParams.delete("utm_source");
        window_link.searchParams.delete("utm_medium");
        window_link.searchParams.delete("utm_content");
        window_link.searchParams.delete("utm_campaign");
        window_link.searchParams.delete("differ_push_day");
        // 取得移除utm參數的推播網址
        link = new URL(webPushUrl);
        if(type=="likrManualPush" || link.searchParams.get("url")==null){
            link2 = link;
        }else{
            link2 = new URL(atob(AviviD.replaceSpaceUrl(link.searchParams.get("url"))));
        }
        link2.searchParams.delete("utm_source");
        link2.searchParams.delete("utm_medium");
        link2.searchParams.delete("utm_content");
        link2.searchParams.delete("utm_campaign");
        link2.searchParams.delete("differ_push_day");

        match =  window_link.origin == link2.origin;
        match =  match && window_link.pathname == link2.pathname;
        [...window_link.searchParams.keys()].forEach(key =>
            match =  match && window_link.searchParams.get(key)==link2.searchParams.get(key)
        );

        return match;
    }


    // AviviD.NotAllowList = AviviD.AllowList;
    // Imitation subscribe webpush 仿訂閱仿推播
    AviviD.switch_status = 1;
    AviviD.debug_max_time = 5;
    AviviD.imitation_subscribe_webpush = function (status , onpage_type) {
        var AviviD_return_flag = false;
        var is_pause = AviviD.get_cookie('AviviD_waterfall_pause');
        //購物車不要跳出
        if(AviviD.settings.website_type == '3' && AviviD.web_id.substr(0,6) != 'nineyi'){

            //Udnshopping有特別要在這些頁面不跳出推薦版位的需求
            if(AviviD.category_id == '20200505000001')
            {
                var disallow = ['/ord/','/app/','/mc_api/','.inw','/ListBidLogAction.do','/Cc1c08','/Cc1c07','/Cc1c10','/SearchAction','/meb/'];
                disallow.forEach(function(str){
                    if(window.location.pathname.indexOf(str) > -1)
                    {
                        console.log('break');
                        AviviD_return_flag = true;
                    }
                });
            }
            else
            {
                jQuery311.ajax({
                    type: "GET",
                    // url: "https://subscribe.likr.com.tw/ios_onpage_switch_setting.json",
                    url: "https://avivid.likr.tw/ios_onpage_switch_file/total_switch.json",
                    dataType: "json",
                    async: false,
                    data: {},
                    success: function (data){
                        // for(var item in data){
                        //     url = data[item].split('?')[0];
                            // if (url == window.location.origin + window.location.pathname){
                            //     AviviD_return_flag = true;
                            // }
                        // }
                        if(data[AviviD.settings.website_type] == 0)
                        {
                            AviviD_return_flag = true;
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        AviviD.console("xhr :", xhr);
                        AviviD.console("ajaxOptions :", ajaxOptions);
                        AviviD.console("thrownError :", thrownError);
                        AviviD.console('status code : ' + xhr.status + ' , ajaxOptions : ' + ajaxOptions);
                    }
                });
            }
        }
        //ettoday 暫時先在測試頁跳出onpage
        // if(AviviD.category_id == '20201117000001' && window.location.pathname.indexOf('mobileweb_avivid_test.htm') == -1)
        // {
        //     AviviD_return_flag = true;
        // }

        if(AviviD_return_flag || is_pause)
        {
            return;
        }

        jQuery311.ajax({
            url: "https://load-balancer.likr.com.tw/api/hasSSL.php",
            type: "POST",
            dataType: "json", //資料格式
            data: {
                'host': window.location.host
            },
            success: function (data) { // 如果網站沒有SSL憑證，則不啟動推播
                // console.log(data);
                //console.log(4,data);
                if(AviviD.category_id == "20180920000003" || window.location.protocol.match("https")){ data = 1; }
                if(data){
                    // screen width
                    var screen_width = screen.width;
                    // device detect
                    // subscribe/webpush based on cookie(subscription)
                    // AviviD_watefall_subscribe == 0; 沒訂過
                    // AviviD_watefall_subscribe == 1; 訂閱了
                    // AviviD_watefall_subscribe == 2; 封鎖
                    // if (AviviD.web_id=="demo") {AviviD.received=0;}

                    if(AviviD.received % 2 == 0){
                        var onpage_type = 'landing';
                    } else {
                        var onpage_type = 'browsing';
                    }
                    switch (status) {
                        case 1: //subscribed / show webpush
                            if(AviviD.abtest())
                            {
                                return;
                            }
                            // get highest z-index from page and set more #avivid_waterfall higher
                            AviviD.highest_zindex('avivid_waterfall');
                            //取得文章標題
                            jQuery(document).ready(function () {
                                AviviD.get_article_title();
                            });
                            //get data from onpage api
                            // console.log('im in!')
                            jQuery311.ajax({
                                type: "GET",
                                // url: "https://subscribe.likr.com.tw/ios_onpage_switch_setting.json",
                                url: "https://avivid.likr.tw/ios_onpage_switch_file/"+AviviD.web_id+".json",
                                dataType: "json",
                                data: {},
                                success: function (data){
                                    if (document.getElementById("avivid_waterfall_webpush") != null){
                                        // console.log('remove waterfall');
                                        AviviD.removeElement("avivid_waterfall_webpush");
                                    }
                                    web_id = AviviD.web_id;
                                    AviviD.title_only = data["content_switch"];
                                    AviviD.int_os_type = AviviD.trans_os_type_to_number(AviviD.detect_os_type());
                                    AviviD.int_browser_type = AviviD.transBrowserTypeToNumber(AviviD.detectBrowserType());
                                    os_platform = AviviD.int_os_type + AviviD.int_browser_type.padStart(2, "0");
                                    // if(web_id in data["web_id"]){
                                    web_id_enable = Boolean(parseInt(data["enable"]));      // web_id 總開關
                                    web_id_direct = Boolean(parseInt(data["direct_enable"]));//web_id 直播開關
                                    os_enable = Boolean(parseInt(data["os"][os_platform])); // os 個別開關
                                    // }else{
                                    //     web_id_enable = false;
                                    //     os_enable = false;
                                    // }
                                    block_str = data['block_url'];
                                    enable = (web_id_enable && os_enable) ||(web_id_direct && os_enable);
                                    block_str.forEach(function(str){
                                        if(window.location.href.indexOf(str) > -1 && str != '')
                                        {
                                            console.log('block_url break');
                                            enable = false;
                                        }
                                    });
                                    if(AviviD.debug_mode || AviviD.demo_mode){
                                        console.log(data);
                                        console.log("web_id", web_id);
                                        console.log("web_id_enable", web_id_enable);
                                        console.log("direct_enable", web_id_direct);
                                        console.log("os_enable", os_enable);
                                        console.log("enable", enable);
                                    }
                                    if (enable || AviviD.debug_mode){ // 如果web_id的ios開關是開啟狀態，且原生訂閱不存在時，進入ios仿推播
                                        //&& !AviviD.NotAllowList.includes(AviviD.web_id) rick拿掉notallowlist
                                        var ua = AviviD.UAResult;
                                        var ad_id = (AviviD.get_cookie('AviviD_ad_id') != null) ? AviviD.get_cookie('AviviD_ad_id') : "_";
                                        AviviD.int_os_type = AviviD.trans_os_type_to_number(AviviD.detect_os_type());
                                        AviviD.int_browser_type = AviviD.transBrowserTypeToNumber(AviviD.detectBrowserType());
                                        onpage_input_data = {
                                            'is_crescent': AviviD.settings.is_crescent,
                                            'received': AviviD.received,
                                            'title': AviviD.title,
                                            'page_view': AviviD.page_view_num,
                                            'uuid': AviviD.uuid,
                                            'web_id': AviviD.web_id,
                                            'onpage_type': onpage_type,
                                            'website_type': AviviD.settings.website_type,
                                            'browser_ver': ua.browser.version,
                                            'os_ver': ua.os.version,
                                            'user_agent': ua.ua,
                                            'client_href': window.location.href,
                                            'os_type': AviviD.int_os_type,
                                            'browser_type': AviviD.int_browser_type,
                                            'ad_id': ad_id,
                                            'is_ios': "1",
                                            'onpage_with_ad':AviviD.settings.onpage_with_ad,
                                            'web_id_enable':data["enable"],
                                            'web_id_direct':data["direct_enable"],
                                        };
                                        // console.log(onpage_input_data);
                                        if (document.getElementById("AviviD_waterfall_subscribe") == null){
                                            // AviviD.loadScript("https://subscribe.likr.com.tw/api/avivid_waterfall_subscribe_v3.css", "AviviD_waterfall_subscribe");
                                            // AviviD.loadScript("https://subscribe.likr.com.tw/api/avivid_waterfall_webpush_v2.css", "AviviD_waterfall_webpush");
                                            AviviD.loadScript("https://avivid.likr.tw/api/avivid_waterfall_subscribe_v3.css", "AviviD_waterfall_subscribe");
                                            AviviD.loadScript("https://avivid.likr.tw/api/avivid_waterfall_webpush_v2.css", "AviviD_waterfall_webpush");
                                        }
                                        function avivid_common_webpush(onpage_input_data){
                                            if(onpage_input_data['web_id_enable']==0){
                                                return '';
                                            }
                                            if(AviviD.debug_mode || AviviD.demo_mode){
                                                console.log('in common webpush');
                                            }
                                            var get_onpage_url = AviviD.demo_mode == 1 ? "https://webpush-api.likr.com.tw/api/get_onpage_data.php" : "https://load-balancer.likr.com.tw/api/get_onpage_data.php" ;
                                            // 加入request紀錄在i3fresh,  20210107 Wine關閉
                                            // var record_request_category_id = ['20200612000001','20181022000001'];
                                            // if(record_request_category_id.indexOf(AviviD.category_id) != -1){
                                            //     AviviD.url_to_uuid('0', '0');   //request之前
                                            // }
                                            onpage_input_data['is_manual_push'] = 0;

                                            onpage_input_data['ad_block_enabled'] = AviviD.settings.ad_block_enabled;


                                            jQuery311.ajax({
                                                url: get_onpage_url,
                                                type: 'get',
                                                dataType: "json",
                                                data: onpage_input_data,
                                                success: function (data) {
                                                     //console.log(2,data);
                                                    PushPageLink = data.with_button==1 ? data.button1_url : data.click_url;
                                                    match = AviviD.checkSamePageLink(PushPageLink);
                                                    if(!match){
                                                        //====================只要活到半夜十二點=============================
                                                        if(data.ad_id != 'no_ad_id' && data.ad_id != null){
                                                            //re為電商廣告，要回放品牌ad
                                                            ad_id = ("_" == ad_id || data.ad_id.substr(-3) == '_re')? data.ad_id : ad_id + "," + data.ad_id;

                                                            var d = new Date();
                                                            var y = d.getFullYear();
                                                            var m = d.getMonth()+1;
                                                            var day = d.getDate();
                                                            var today = y + '/' + m + '/' + day;
                                                            var sd = new Date( today + 'T23:59:59');
                                                            var now = d.getTime();
                                                            var sd_time = sd.getTime();
                                                            var diff = (sd_time - now)/1000/60;
                                                            AviviD.set_cookie_minutes('AviviD_ad_id', ad_id, Math.floor(diff));
                                                        }
                                                        else
                                                        {
                                                            AviviD.set_cookie_minutes('AviviD_ad_id', data.ad_id, 1);
                                                        }
                                                        //====================只要活到半夜十二點 end =============================
                                                        title = data.title;
                                                        content = data.msg;
                                                        click_url = data.click_url;
                                                        if(data.ad_id == 'no_ad_id' && data.icon != "_" && data.icon != null){
                                                            icon_url = new URL(data.icon);
                                                            icon_url.searchParams.set("url", AviviD.settings.icon_path);
                                                            data.icon = icon_url.href;
                                                        }
                                                        logo_img = data.icon;
                                                        AviviD.banner_id = data.icon ? data.icon.split(",").reverse()[2] : "_";
                                                        s_img = data.image;
                                                        b_img = data.image;
                                                        video_url = data.video;
                                                        AviviD.push_version = data.ad_type;
                                                        AviviD.ios_ad_id =data.ad_id;

                                                        square_img = '';
                                                        rect_img = '';

                                                        //console.log(1,data)
                                                        //console.log(3);
                                                        if (title){ /* title 有值 則顯示 推播 */
                                                            AviviD.like_unlike_button = `
                                                                <div id="avivid_waterfall_wp_section_right_likeBtn" onclick="AviviD.subscribe('like', '` + data.click_url + `')">喜歡</div>
                                                                <div id="avivid_waterfall_wp_section_right_unlikeBtn" onclick="AviviD.subscribe('unlike')">不喜歡</div>
                                                            `;
                                                            // 移除htmlString空白
                                                            avivid_waterfall_subscribe_setting_module = htmlStr_remove_space(AviviD.waterfall_subscribe_module(2));
                                                            jQuery311("#avivid_waterfall").append(avivid_waterfall_subscribe_setting_module);
                                                            AviviD.highest_zindex('avivid_waterfall');
                                                            webpushData = {
                                                                version: data.ad_type,
                                                                beacon: data.beacon,
                                                                title_only:AviviD.title_only,
                                                                click_url: data.click_url,
                                                                title: data.title,
                                                                up_content: (data.button1_msg != '_')? data.msg: '_',
                                                                content: data.msg,
                                                                logo_img: data.icon,
                                                                s_img: data.image,
                                                                b_img: data.image,
                                                                video_url: data.video,
                                                                avivid_os_mobile: AviviD.os.mobile,
                                                                avivid_banner_id: data.icon ? data.icon.split(",").reverse()[2] : "_",
                                                                web_id: AviviD.web_id,
                                                                ios_uuid: AviviD.get_ios_uuid(),
                                                                ad_id: data.ad_id,
                                                                with_button: data.with_button ? data.with_button : "_",
                                                                button1_url: data.button1_url ? data.button1_url : "_",
                                                                button1_title: data.button1_title ? data.button1_title : "_",
                                                                button1_msg: data.button1_msg ? data.button1_msg : "_",
                                                                button1_icon: data.button1_icon ? data.button1_icon : "_",
                                                                wp_positon: AviviD.settings.onpage_position,
                                                                wp_up_down_status: AviviD.settings.onpage_pic_position,
                                                                live_url:'_',
                                                                live_status:'_',
                                                                live_time:'_',
                                                            }
                                                            if(AviviD.web_id == 'imaple')
                                                            {
                                                                webpushData.button1_title = '_';
                                                            }
                                                            if (data.ad_id == 'no_ad_id' && [...data.image.matchAll(/http/g)].length != 1 && data.ad_type == "image"){
                                                                webpushData.b_img= "_";
                                                            }
                                                            // webpushDataEncoded = btoa(unescape(encodeURIComponent(JSON.stringify(webpushData))));
                                                            webpushDataEncoded = webpushData;
                                                            // webpush_iframe = `
                                                            // <div id="avivid_waterfall_webpush" class="disappear">
                                                            //     <iframe id="avivid_webpush_frame" style="height: 100%; width: 100%; border: 0;border-radius: 10px;" src="https://avivid.likr.tw/api/avivid_webpush_frame.html?data=`+webpushDataEncoded+`"></iframe>
                                                            // </div>
                                                            // `;
                                                            // newonpage
                                                            // var newonpage_web_id_list = [
                                                            //     'sam',
                                                            //     'rick',
                                                            //     'doredore',
                                                            //     'wiwi',
                                                            //     'theplus',
                                                            //     'lilijan',
                                                            //     'healthezgo',
                                                            //     'parkcat',
                                                            //     'muzikstealer',
                                                            //     'ifit',
                                                            //     'olivia',
                                                            //     'lovingfamily',
                                                            //     'nineyi11185',
                                                            //     'howtravel',
                                                            //     'bogoto',
                                                            //     'amz',
                                                            //     'funkyprincess',
                                                            //     'taichi',
                                                            //     'nineyi1980',
                                                            //     'nineyi1937',
                                                            //     'nineyi1759',
                                                            //     'nineyi2190',
                                                            //     'nineyi2012',
                                                            //     'i3fresh',
                                                            //     'hsinifa',
                                                            //     'toothfilm',
                                                            //     'lalav',
                                                            //     'cherif',
                                                            //     'polylulu',
                                                            //     'nineyi357',
                                                            //     'nineyi711',
                                                            //     'parentingshopping',
                                                            //     'mayfullqdm',
                                                            //     'onehous',
                                                            //     'nineyi14267',
                                                            //     'nanooneshop',
                                                            //     'nineyi272'
                                                            // ];
                                                            // var oldonpage_web_id_list = [
                                                            //     '20200203000002',
                                                            //     '20201127000001',
                                                            //     '20191016000001',
                                                            //     '20180409000001',
                                                            //     '20201126000001',
                                                            //     '20200511000006',
                                                            //     '20200511000003',
                                                            //     '20200818000002',
                                                            //     '20200731000001',
                                                            //     '20200706000001',
                                                            //     '20200818000003',
                                                            //     '20191017000002',
                                                            //     '20200505000001',
                                                            //     '20170720001000',
                                                            //     '20200710000001',
                                                            //     '20200324000001',
                                                            //     '20190816000003',
                                                            // ];
                                                            var newonpage=1;
                                                            if("new_onpage_version" in AviviD.settings && parseInt(AviviD.settings.new_onpage_version)==0){
                                                                newonpage=0;
                                                            }
                                                            if(AviviD.settings.website_type ==3 && newonpage){
                                                                webpush_iframe_addr = "https://www.likr.com.tw/api/avivid_webpush_frame_v2_20201224_william.html";
                                                                // webpush_iframe_addr = "https://subscribe.likr.com.tw/api/avivid_webpush_frame_v2_20201224.html";
                                                            }else{
                                                                webpush_iframe_addr = "https://www.likr.com.tw/api/avivid_webpush_frame_v2_william.html";
                                                                // webpush_iframe_addr = "https://subscribe.likr.com.tw/api/avivid_webpush_frame_v2.html";
                                                            }

                                                            webpush_iframe = `
                                                                <div id="avivid_waterfall_webpush" class="disappear">
                                                                    <iframe id="avivid_webpush_frame" src="${webpush_iframe_addr}"></iframe>
                                                                </div>
                                                            `;
                                                            jQuery311('#avivid_waterfall').append(webpush_iframe);
                                                            // 获取iframe元素
                                                            iFrame = document.getElementById('avivid_webpush_frame');
                                                            // iframe加载完毕后再发送消息，否则子页面接收不到message
                                                            AviviD.likrTimer.clearTimer();
                                                            iFrame.onload = function(){
                                                                if(AviviD.debug_mode || AviviD.demo_mode){
                                                                    console.log('avivid_webpush_frame finished');
                                                                }
                                                                // iframe加载完立即发送一条消息
                                                                iFrame.contentWindow.postMessage(webpushDataEncoded,'*');
                                                                AviviD.webpush_showing(screen.width);
                                                                if (data.ad_id == 'no_ad_id' && [...data.image.matchAll(/http/g)].length != 1 && data.ad_type == "image"){ // 如果沒有圖片，使用文字版更改外型高度
                                                                    if(screen.width < 416){
                                                                        jQuery311("#avivid_waterfall_wp_product_area").css("height", "0");
                                                                        jQuery311("#avivid_waterfall_webpush").css({
                                                                            "height": "22vw",
                                                                            "min-height": "unset"
                                                                        });
                                                                    }else{
                                                                        jQuery311("#avivid_waterfall_wp_product_area").css("height", "0");
                                                                        jQuery311("#avivid_waterfall_webpush").css({
                                                                            "height": "6vw",
                                                                            "min-height": "unset"
                                                                        });
                                                                    }
                                                                }
                                                            }
                                                        } else {
                                                            if(AviviD.demo_mode || AviviD.debug_mode || AviviD.web_id=="demo"){
                                                                console.log('title is null');
                                                                //console.log('z');
                                                                /** test area */
                                                                // AviviD.likrTimer.test.contentNone();
                                                                /** test area end */
                                                            }
                                                            if(AviviD.web_id=="18comic")
                                                            {
                                                                AviviD.exec_num=0;
                                                                AviviD.call_customer_func = function()
                                                                {
                                                                    if(typeof(AviviD.customer_exec) == 'function')
                                                                    {
                                                                        AviviD.customer_exec();
                                                                    }
                                                                    else
                                                                    {
                                                                        if(AviviD.exec_num<10)
                                                                        {
                                                                            setTimeout(function () {
                                                                                AviviD.call_customer_func();
                                                                                // console.log(AviviD.exec_num);
                                                                                AviviD.exec_num++;
                                                                            }, 1000);
                                                                        }

                                                                    }
                                                                }
                                                                AviviD.call_customer_func();
                                                                console.log('noad');
                                                            }
                                                        }
                                                        AviviD.received += 1;
                                                        AviviD.set_cookie('AviviD_received', AviviD.received, 1);
                                                    }else{
                                                        if(AviviD.count < 100){
                                                            avivid_common_webpush(onpage_input_data);
                                                            AviviD.count = AviviD.count ? AviviD.count + 1 : 0;
                                                            console.log(AviviD.count);
                                                            if(AviviD.demo_mode || AviviD.debug_mode){
                                                                console.log('Page Link is same');
                                                            }
                                                        }
                                                    }
                                                },
                                                error: function (xhr, ajaxOptions, thrownError) {
                                                    console.log("xhr :", xhr);
                                                    console.log("ajaxOptions :", ajaxOptions);
                                                    console.log("thrownError :", thrownError);
                                                    console.log('status code : ' + xhr.status + ' , ajaxOptions : ' + ajaxOptions);
                                                }
                                            });
                                        }
                                        // TODO: 第一次推播有兩條路做特別處理，其他的按照一般推播形式。變更推播邏輯(AviviD.received == 0) => true

                                        if (true) {
                                            var get_onpage_url = AviviD.demo_mode == 1 ? "https://webpush-api.likr.com.tw/api/get_onpage_data.php" : "https://load-balancer.likr.com.tw/api/get_onpage_data.php" ;
                                            onpage_input_data['is_manual_push'] = 1;
                                            jQuery311.ajax({
                                                // type: "GET",
                                                // url: "https://webpush-api02.likr.tw/ios_push_file/"+ web_id +".json",
                                                // // url: "https://webpush-api02.likr.tw/ios_push_file/rick7.json",
                                                // dataType: "json",
                                                url: get_onpage_url,
                                                type: 'get',
                                                dataType: "json",
                                                data: onpage_input_data,
                                                success: function (data){
                                                    //拿內容若都跳不出來就不要再要資源了20210329
                                                    AviviD.likrTimer.clearTimer();

                                                    if(AviviD.debug_mode || AviviD.demo_mode){
                                                        console.log(data);
                                                    }
                                                    var push_id = AviviD.get_cookie('AviviD_push_id');
                                                    push_id = (push_id != null) && (push_id != "undefined") ? push_id : "_";
                                                    var d = new Date();
                                                    var y = d.getFullYear();
                                                    var m = d.getMonth()+1;
                                                    m = ('0'+m).substr(-2);
                                                    var day = d.getDate();
                                                    day = ('0'+day).substr(-2);// wine 20210106
                                                    var datestr = ''+y+m+day;
                                                    // 進入頁面後，取得push_id只推播一次來客手動推播，如果push_id相同或此頁文章標題相同時，進入一般推播。
                                                    // if(data.push_id != null && data.push_id != push_id || AviviD.debug_mode){
                                                    // console.log('push_id:'+data.push_id);
                                                    if(data.push_id != null && data.push_id != push_id && data.push_id.substr(-12,8) == datestr){
                                                        // match = !(data.msg != AviviD.get_article_title());
                                                        match = AviviD.checkSamePageLink(data.url, type="likrManualPush");

                                                        if(data.live_time == "")
                                                        {
                                                            push_status = true;
                                                        }else{
                                                            live_time = data.live_time;
                                                            live_time = live_time.replace(' ','T');
                                                            let push_time = new Date(live_time);
                                                            let tempt_push = push_time.getTime();
                                                            let tempt_now = d.getTime();
                                                            if((tempt_now-tempt_push)/1000/60/60 <=2 || data.live_status == '_')
                                                            {
                                                                push_status = true;
                                                            }
                                                            else
                                                            {
                                                                push_status = false;
                                                            }
                                                        }
                                                        // console.log('match:'+match);
                                                        if(!match && push_status){
                                                            push_id = data.push_id;
                                                            // console.log("push: ", push_id, data.msg);
                                                            ad_id = data.icon ? (data.icon.split(",").reverse()[2] ? data.icon.split(",").reverse()[2] : "_") : "_";
                                                            avivid_banner_id = ad_id;
                                                            if(AviviD.demo_mode){
                                                                data.url = data.url.replace("https://auto-satellite.advividnetwork.com/pushServer/redirect/redirect_click.php", "https://subscribe.likr.com.tw/sample/redirect_click.php")
                                                            }
                                                            data.icon = AviviD.setIconWithImpression(data.icon, data.title);
                                                            data.url = AviviD.setUrlWithRedirecter(data.url, data.title);
                                                            webpushData = {
                                                                version: "image",
                                                                beacon: '_',
                                                                title_only: '0',
                                                                click_url: data.url,
                                                                title: data.title,
                                                                up_content: data.msg,
                                                                content: data.msg,
                                                                logo_img: AviviD.settings.icon_path,
                                                                s_img: data.bigimage,
                                                                b_img: data.bigimage,
                                                                video_url: "_",
                                                                avivid_os_mobile: AviviD.os.mobile,
                                                                avivid_banner_id: avivid_banner_id,
                                                                web_id: AviviD.web_id,
                                                                ios_uuid: AviviD.get_ios_uuid(),
                                                                ad_id: ad_id,
                                                                with_button: data.with_button ? data.with_button : "_",
                                                                button1_url: data.button_one_url ? data.button_one_url : "_",
                                                                button1_title: data.button_one_title ? data.button_one_title : "_",
                                                                button1_msg: data.button1_msg ? data.button1_msg : "_",
                                                                button1_icon: data.button1_icon ? data.button1_icon : "_",
                                                                push_id: data.push_id,
                                                                wp_positon: AviviD.settings.onpage_position,
                                                                wp_up_down_status: AviviD.settings.onpage_pic_position,
                                                                live_url:data.live_url,
                                                                live_time:data.live_time,
                                                                live_status:data.live_status,
                                                            }
                                                            // newonpage
                                                            var newonpage=1;
                                                            if("new_onpage_version" in AviviD.settings && parseInt(AviviD.settings.new_onpage_version)==0){
                                                                newonpage=0;
                                                            }
                                                            if (webpushData['live_url']!= '_' &&AviviD.settings.website_type ==3&& newonpage){
                                                                webpushData['version']="live";
                                                                console.log(webpushData['version']);
                                                            }
                                                            if(AviviD.settings.onpage_with_ad == '1')
                                                            {
                                                                jQuery311.ajax({
                                                                    url: "https://auto-satellite.advividnetwork.com/api/crescent_give_api.php",
                                                                    type: "POST",
                                                                    dataType: "json", //資料格式
                                                                    data: {
                                                                        'page_view' : AviviD.page_view_num,
                                                                        'uuid' : AviviD.uuid,
                                                                        'title' : AviviD.title,
                                                                        'web_id'  : AviviD.web_id,
                                                                        'user_agent'  : AviviD.UAResult.ua,
                                                                        'client_href'  : window.location.href,
                                                                        'os_type'  : AviviD.int_os_type,
                                                                        'browser_type'  : AviviD.int_browser_type,
                                                                        'ad_id' : ad_id,
                                                                        'is_ios' : "1",
                                                                        'ip' : "_",
                                                                    },
                                                                    success: function (data) {
                                                                        // console.log(typeof data);
                                                                        if("ad_id" in data){
                                                                            // console.log(data);
                                                                            /* 替換手推廣告素材 */
                                                                            webpushData.likr_push = 1;
                                                                            if(data.ad_type != "video"){ // 不是影音廣告時，才置換廣告素材
                                                                                webpushData.ad_id = data.ad_id;
                                                                                webpushData.avivid_banner_id = data.ad_id;
                                                                                webpushData.version = data.ad_type;
                                                                                if(data.beacon && data.ad_type =='yahoo'){
                                                                                    webpushData.beacon = data.beacon;
                                                                                }
                                                                                webpushData.button1_url = data.click_url;
                                                                                webpushData.up_content = data.msg;
                                                                                webpushData.b_img = data.image;
                                                                                webpushData.s_img = data.image;
                                                                                webpushData.video_url = data.video;
                                                                            }else{ // 影音廣告時，全版素材(廣告直推)
                                                                                webpushData.ad_id = data.ad_id;
                                                                                webpushData.avivid_banner_id = data.ad_id;
                                                                                webpushData.version = data.ad_type;
                                                                                webpushData.button1_url = data.click_url;
                                                                                webpushData.click_url = data.click_url;
                                                                                webpushData.b_img = data.image;
                                                                                webpushData.s_img = data.image;
                                                                                webpushData.video_url = data.video;
                                                                                webpushData.title = data.title;
                                                                                webpushData.content = data.msg;
                                                                                webpushData.logo_img = data.icon;
                                                                            }
                                                                            /* 替換手推廣告素材 end */
                                                                            //直播版位調整
                                                                            // // wine 20210106
                                                                            // if(webpushData['live_url'] !='_' && AviviD.settings.website_type ==3){
                                                                            //     if(webpushData['live_status'] =='live_straight'){//直版
                                                                            //         AviviD.loadScript("https://avivid.likr.tw/api/avivid_waterfall_webpush_v3_ray2.css", "AviviD_waterfall_webpush");
                                                                            //     }else{//橫版
                                                                            //         AviviD.loadScript("https://avivid.likr.tw/api/avivid_waterfall_webpush_v3_ray.css", "AviviD_waterfall_webpush");
                                                                            //     }
                                                                            // }
                                                                            // // wine 20210106 END
                                                                            avivid_waterfall_subscribe_setting_module = htmlStr_remove_space(AviviD.waterfall_subscribe_module(2));
                                                                            jQuery311("#avivid_waterfall").append(avivid_waterfall_subscribe_setting_module);
                                                                            AviviD.highest_zindex('avivid_waterfall');
                                                                            // webpushDataEncoded = btoa(unescape(encodeURIComponent(JSON.stringify(webpushData))));
                                                                            webpushDataEncoded = webpushData;
                                                                            webpush_iframe_addr = "https://www.likr.com.tw/api/avivid_webpush_frame_v2_william.html";
                                                                            // wine 20210106
                                                                            // //直播iframe引入
                                                                            // // newonpage
                                                                            // if(AviviD.settings.website_type ==3 &&webpushData['live_url'] !='_'&& (AviviD.web_id =='rick'||AviviD.web_id =='sam'||AviviD.web_id =='doredore'||AviviD.web_id =='wiwi'||AviviD.web_id =='theplus'||AviviD.web_id =='lilijan'||AviviD.web_id =='healthezgo'||AviviD.web_id =='parkcat'||AviviD.web_id =='muzikstealer'||AviviD.web_id =='ifit'||AviviD.web_id =='olivia'||AviviD.web_id =='lovingfamily'||AviviD.web_id =='nineyi11185'||AviviD.web_id =='howtravel'||AviviD.web_id =='bogoto'||AviviD.web_id =='amz'||AviviD.web_id =='funkyprincess'||AviviD.web_id =='taichi'||AviviD.web_id =='nineyi1980'||AviviD.web_id =='nineyi1937'||AviviD.web_id =='nineyi1759'||AviviD.web_id =='nineyi2190'||AviviD.web_id =='nineyi2012'||AviviD.web_id =='i3fresh'||AviviD.web_id =='hsinifa'||AviviD.web_id =='toothfilm'||AviviD.web_id =='lalav'||AviviD.web_id =='cherif'||AviviD.web_id =='polylulu'||AviviD.web_id =='nineyi357'||AviviD.web_id =='nineyi711'||AviviD.web_id =='parentingshopping'||AviviD.web_id =='mayfullqdm'||AviviD.web_id =='onehous'||AviviD.web_id =='nineyi14267'||AviviD.web_id =='nanooneshop'||AviviD.web_id =='nineyi272')){
                                                                            //     webpush_iframe_addr = "https://avivid.likr.tw/api/avivid_webpush_frame_v2_20201224.html";
                                                                            //     // webpush_iframe_addr = "https://subscribe.likr.com.tw/api/avivid_webpush_frame_v2_20201224.html";
                                                                            // }else{
                                                                            //     webpush_iframe_addr = "https://avivid.likr.tw/api/avivid_webpush_frame_v2.html";
                                                                            //     // webpush_iframe_addr = "https://subscribe.likr.com.tw/api/avivid_webpush_frame_v2.html";
                                                                            // }
                                                                            // // wine 20210106 END
                                                                            // webpush_iframe_addr = "https://subscribe.likr.com.tw/api/avivid_webpush_frame_v2.html";
                                                                            webpush_iframe = `
                                                                                <div id="avivid_waterfall_webpush" class="disappear">
                                                                                    <iframe id="avivid_webpush_frame" src="${webpush_iframe_addr}"></iframe>
                                                                                </div>
                                                                            `;
                                                                            jQuery311('#avivid_waterfall').append(webpush_iframe);
                                                                            // 获取iframe元素
                                                                            iFrame = document.getElementById('avivid_webpush_frame');
                                                                            // iframe加载完毕后再发送消息，否则子页面接收不到message
                                                                            AviviD.likrTimer.clearTimer();
                                                                            iFrame.onload = function(){
                                                                                if(AviviD.debug_mode || AviviD.demo_mode){
                                                                                    console.log('avivid_webpush_frame finished');
                                                                                }
                                                                                // iframe加载完立即发送一条消息
                                                                                iFrame.contentWindow.postMessage(webpushDataEncoded,'*');
                                                                                AviviD.webpush_showing(screen.width);
                                                                                AviviD.set_cookie('AviviD_push_id', push_id);
                                                                                // AviviD.ios_visibilitychange(hide=true);
                                                                                if (data.image == "_"){ // 如果沒有圖片，使用文字版更改外型高度
                                                                                    if(screen.width < 416){
                                                                                        // jQuery311("#avivid_waterfall_webpush").css("height", "100px");
                                                                                        jQuery311("#avivid_waterfall_webpush").css({
                                                                                            "height": "22vw",
                                                                                            "min-height": "unset"
                                                                                        });
                                                                                    }else{
                                                                                        // jQuery311("#avivid_waterfall_webpush").css("height", "115px");
                                                                                        jQuery311("#avivid_waterfall_webpush").css({
                                                                                            "height": "6vw",
                                                                                            "min-height": "unset"
                                                                                        });
                                                                                    }
                                                                                }
                                                                            }
                                                                            AviviD.received += 1;
                                                                            // wine 20210106 以下可能要改
                                                                            if(data.ad_type != "video"){ // 不是影音廣告時，才寫入cookie
                                                                                AviviD.set_cookie('AviviD_received', AviviD.received, 1);
                                                                                // ad_id = ("_" == ad_id)? data.ad_id : ad_id + "," + data.ad_id;
                                                                                ad_id = data.ad_id; // 取得成功，就只寫入此ad_id，捨棄來客首推包的ad_id
                                                                                var d = new Date();
                                                                                var y = d.getFullYear();
                                                                                var m = d.getMonth()+1;
                                                                                var day = d.getDate();
                                                                                var today = y + '/' + m + '/' + day;
                                                                                var sd = new Date( today + 'T23:59:59');
                                                                                var now = d.getTime();
                                                                                var sd_time = sd.getTime();
                                                                                var diff = (sd_time - now)/1000/60;
                                                                                AviviD.set_cookie_minutes('AviviD_ad_id', ad_id, Math.floor(diff));
                                                                            }
                                                                        }else{
                                                                            if(AviviD.debug_mode || AviviD.demo_mode){
                                                                                console.log("No Data");
                                                                            }
                                                                        }
                                                                    },
                                                                    error: function (xhr, ajaxOptions, thrownError) {
                                                                        // AviviD.console("xhr :", xhr);
                                                                        // AviviD.console("ajaxOptions :", ajaxOptions);
                                                                        // AviviD.console("thrownError :", thrownError);
                                                                        // AviviD.console('status code : ' + xhr.status + ' , ajaxOptions : ' + ajaxOptions);
                                                                        if(AviviD.debug_mode || AviviD.demo_mode){
                                                                            console.log("No Data\n", "xhr :", xhr);
                                                                        }
                                                                        if(webpushData.b_img){
                                                                            //RICK 沒廣告不要壓字
                                                                            webpushData.up_content = "_";
                                                                            // 如果是廣告(ad_id不是底線)，則關閉大圖廣告
                                                                            //20210423 invaild by tony
                                                                            // if(webpushData.ad_id != "_"){
                                                                            //     webpushData.b_img = "_";
                                                                            //     webpushData.s_img = "_";
                                                                            //     webpushData.ad_id = "_";
                                                                            // }
                                                                            avivid_waterfall_subscribe_setting_module = htmlStr_remove_space(AviviD.waterfall_subscribe_module(2));
                                                                            //直播版位調整
                                                                            if(webpushData['live_url'] !='_' && AviviD.settings.website_type ==3){
                                                                                if(webpushData['live_status'] =='live_straight'){//直版
                                                                                    AviviD.loadScript("https://avivid.likr.tw/api/avivid_waterfall_webpush_v3_william2.css", "AviviD_waterfall_webpush");
                                                                                }else{//橫版
                                                                                    AviviD.loadScript("https://avivid.likr.tw/api/avivid_waterfall_webpush_v3_william.css", "AviviD_waterfall_webpush");
                                                                                }
                                                                            }
                                                                            jQuery311("#avivid_waterfall").append(avivid_waterfall_subscribe_setting_module);
                                                                            AviviD.highest_zindex('avivid_waterfall');
                                                                            // webpushDataEncoded = btoa(unescape(encodeURIComponent(JSON.stringify(webpushData))));
                                                                            webpushDataEncoded = webpushData;
                                                                            //直播iframe引入
                                                                            // newonpage
                                                                            var newonpage=1;
                                                                            if("new_onpage_version" in AviviD.settings && parseInt(AviviD.settings.new_onpage_version)==0){
                                                                                newonpage=0;
                                                                            }
                                                                            if(AviviD.settings.website_type ==3 &&webpushData['live_url'] !='_'&& newonpage){
                                                                                is_direct_video = true;
                                                                            }
                                                                            else
                                                                            {
                                                                                is_direct_video = false;
                                                                            }
                                                                            if(is_direct_video){
                                                                                webpush_iframe_addr = "https://www.likr.com.tw/api/avivid_webpush_frame_v2_20201224_william.html";
                                                                                // webpush_iframe_addr = "https://subscribe.likr.com.tw/api/avivid_webpush_frame_v2_20201224.html";
                                                                            }else{
                                                                                webpush_iframe_addr = "https://www.likr.com.tw/api/avivid_webpush_frame_v2_william.html";
                                                                                // webpush_iframe_addr = "https://subscribe.likr.com.tw/api/avivid_webpush_frame_v2.html";
                                                                            }
                                                                            webpush_iframe = `
                                                                                <div id="avivid_waterfall_webpush" class="disappear">
                                                                                    <iframe id="avivid_webpush_frame" src="${webpush_iframe_addr}"></iframe>
                                                                                </div>
                                                                            `;
                                                                            jQuery311('#avivid_waterfall').append(webpush_iframe);
                                                                            // 获取iframe元素
                                                                            iFrame = document.getElementById('avivid_webpush_frame');
                                                                            // iframe加载完毕后再发送消息，否则子页面接收不到message
                                                                            AviviD.likrTimer.clearTimer();
                                                                            iFrame.onload = function(){
                                                                                if(AviviD.debug_mode || AviviD.demo_mode){
                                                                                    console.log('avivid_webpush_frame finished');
                                                                                }
                                                                                // iframe加载完立即发送一条消息
                                                                                iFrame.contentWindow.postMessage(webpushDataEncoded,'*');
                                                                                AviviD.webpush_showing(screen.width);
                                                                                AviviD.set_cookie('AviviD_push_id', push_id);
                                                                                // AviviD.ios_visibilitychange(hide=true);
                                                                                if (webpushData.b_img == "_"){ // 如果沒有圖片，使用文字版更改外型高度
                                                                                    if(screen.width < 416){
                                                                                        // jQuery311("#avivid_waterfall_webpush").css("height", "100px");
                                                                                        jQuery311("#avivid_waterfall_webpush").css({
                                                                                            "height": "22vw",
                                                                                            // "min-height": "unset"
                                                                                        });
                                                                                    }else{
                                                                                        // jQuery311("#avivid_waterfall_webpush").css("height", "115px");
                                                                                        if(!is_direct_video)
                                                                                        {
                                                                                            jQuery311("#avivid_waterfall_webpush").css({
                                                                                                "height": "9vw",
                                                                                                // "min-height": "unset"
                                                                                            });
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                            AviviD.received += 1;
                                                                            AviviD.set_cookie('AviviD_received', AviviD.received, 1);
                                                                            var d = new Date();
                                                                            var y = d.getFullYear();
                                                                            var m = d.getMonth()+1;
                                                                            var day = d.getDate();
                                                                            var today = y + '/' + m + '/' + day;
                                                                            var sd = new Date( today + 'T23:59:59');
                                                                            var now = d.getTime();
                                                                            var sd_time = sd.getTime();
                                                                            var diff = (sd_time - now)/1000/60;
                                                                            AviviD.set_cookie_minutes('AviviD_ad_id', ad_id, Math.floor(diff));
                                                                        }else{
                                                                            if(AviviD.debug_mode || AviviD.demo_mode){
                                                                                console.log("b_img is null");
                                                                            }
                                                                        }
                                                                    }
                                                                })
                                                            }
                                                            else
                                                            {
                                                                // if(AviviD.debug_mode || AviviD.demo_mode){
                                                                //     console.log("No Data\n", "xhr :", xhr);
                                                                // }
                                                                if(webpushData.b_img){
                                                                    //RICK 沒廣告不要壓字
                                                                    webpushData.up_content = "_";
                                                                    // 如果是廣告(ad_id不是底線)，則關閉大圖廣告
                                                                    if(webpushData.ad_id != "_"){
                                                                        webpushData.b_img = "_";
                                                                        webpushData.s_img = "_";
                                                                        webpushData.ad_id = "_";
                                                                    }
                                                                    avivid_waterfall_subscribe_setting_module = htmlStr_remove_space(AviviD.waterfall_subscribe_module(2));
                                                                    //直播版位調整
                                                                    if(webpushData['live_url'] !='_' && AviviD.settings.website_type ==3){
                                                                        if(webpushData['live_status'] =='live_straight'){//直版
                                                                            AviviD.loadScript("https://avivid.likr.tw/api/avivid_waterfall_webpush_v3_william2.css", "AviviD_waterfall_webpush");
                                                                        }else{//橫版
                                                                            AviviD.loadScript("https://avivid.likr.tw/api/avivid_waterfall_webpush_v3_william.css", "AviviD_waterfall_webpush");
                                                                        }
                                                                    }
                                                                    jQuery311("#avivid_waterfall").append(avivid_waterfall_subscribe_setting_module);
                                                                    AviviD.highest_zindex('avivid_waterfall');
                                                                    // webpushDataEncoded = btoa(unescape(encodeURIComponent(JSON.stringify(webpushData))));
                                                                    webpushDataEncoded = webpushData;
                                                                    //直播iframe引入
                                                                    // newonpage
                                                                    var newonpage=1;
                                                                    if("new_onpage_version" in AviviD.settings && parseInt(AviviD.settings.new_onpage_version)==0){
                                                                        newonpage=0;
                                                                    }
                                                                    if(AviviD.settings.website_type ==3 &&webpushData['live_url'] !='_'&& newonpage){
                                                                        is_direct_video = true;
                                                                    }
                                                                    else
                                                                    {
                                                                        is_direct_video = false;
                                                                    }
                                                                    if(is_direct_video){
                                                                        // console.log(webpushDataEncoded)
                                                                        webpushDataEncoded.click_url= AviviD.setUrlWithRedirecterClick(data.url,data.title);
                                                                        webpush_iframe_addr = "https://www.likr.com.tw/api/avivid_webpush_frame_v2_20210302_william.html";
                                                                        // webpush_iframe_addr = "https://subscribe.likr.com.tw/api/avivid_webpush_frame_v2_20201224.html";
                                                                    }else{
                                                                        webpush_iframe_addr = "https://www.likr.com.tw/api/avivid_webpush_frame_v2_william.html";
                                                                        // webpush_iframe_addr = "https://subscribe.likr.com.tw/api/avivid_webpush_frame_v2.html";
                                                                    }
                                                                    webpush_iframe = `
                                                                        <div id="avivid_waterfall_webpush" class="disappear">
                                                                            <iframe id="avivid_webpush_frame" src="${webpush_iframe_addr}"></iframe>
                                                                        </div>
                                                                    `;
                                                                    jQuery311('#avivid_waterfall').append(webpush_iframe);
                                                                    // 获取iframe元素
                                                                    iFrame = document.getElementById('avivid_webpush_frame');
                                                                    // iframe加载完毕后再发送消息，否则子页面接收不到message
                                                                    AviviD.likrTimer.clearTimer();
                                                                    iFrame.onload = function(){
                                                                        if(AviviD.debug_mode || AviviD.demo_mode){
                                                                            console.log('avivid_webpush_frame finished');
                                                                        }
                                                                        // iframe加载完立即发送一条消息
                                                                        // console.log(webpushDataEncoded)
                                                                        iFrame.contentWindow.postMessage(webpushDataEncoded,'*');
                                                                        AviviD.webpush_showing(screen.width);
                                                                        AviviD.set_cookie('AviviD_push_id', push_id);
                                                                        // AviviD.ios_visibilitychange(hide=true);
                                                                        if (webpushData.b_img == "_"){ // 如果沒有圖片，使用文字版更改外型高度
                                                                            if(screen.width < 416){
                                                                                // jQuery311("#avivid_waterfall_webpush").css("height", "100px");
                                                                                jQuery311("#avivid_waterfall_webpush").css({
                                                                                    "height": "22vw",
                                                                                    // "min-height": "unset"
                                                                                });
                                                                            }else{
                                                                                // jQuery311("#avivid_waterfall_webpush").css("height", "115px");
                                                                                if(!is_direct_video)
                                                                                {
                                                                                    jQuery311("#avivid_waterfall_webpush").css({
                                                                                        "height": "9vw",
                                                                                        // "min-height": "unset"
                                                                                    });
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                    AviviD.received += 1;
                                                                    AviviD.set_cookie('AviviD_received', AviviD.received, 1);
                                                                    var d = new Date();
                                                                    var y = d.getFullYear();
                                                                    var m = d.getMonth()+1;
                                                                    var day = d.getDate();
                                                                    var today = y + '/' + m + '/' + day;
                                                                    var sd = new Date( today + 'T23:59:59');
                                                                    var now = d.getTime();
                                                                    var sd_time = sd.getTime();
                                                                    var diff = (sd_time - now)/1000/60;
                                                                    AviviD.set_cookie_minutes('AviviD_ad_id', ad_id, Math.floor(diff));
                                                                }else{
                                                                    if(AviviD.debug_mode || AviviD.demo_mode){
                                                                        console.log("b_img is null");
                                                                    }
                                                                }
                                                            }
                                                        }else{
                                                            avivid_common_webpush(onpage_input_data);
                                                        }
                                                    } else {
                                                        avivid_common_webpush(onpage_input_data);
                                                        if(AviviD.demo_mode || AviviD.debug_mode){
                                                            console.log("AviviD.received", AviviD.received,"; web_id", AviviD.web_id, ", No onpage webpush");
                                                        }
                                                    }
                                                },
                                                error: function (xhr, ajaxOptions, thrownError) {
                                                    console.log("xhr :", xhr);
                                                    console.log("ajaxOptions :", ajaxOptions);
                                                    console.log("thrownError :", thrownError);
                                                    console.log('status code : ' + xhr.status + ' , ajaxOptions : ' + ajaxOptions);
                                                }
                                            })
                                            .fail(function(jqXHR, textStatus) {
                                                console.log( "error" );
                                                avivid_common_webpush(onpage_input_data);
                                            });
                                        } else {
                                            avivid_common_webpush(onpage_input_data);
                                        }
                                    }
                                },
                                error: function (xhr, ajaxOptions, thrownError) {
                                    console.log("xhr :", xhr);
                                    console.log("ajaxOptions :", ajaxOptions);
                                    console.log("thrownError :", thrownError);
                                    console.log('status code : ' + xhr.status + ' , ajaxOptions : ' + ajaxOptions);
                                }
                            });
                            break;
                        case 2: //block / do nothing
                            AviviD.waterfall_disappear('avivid_waterfall');
                            break;
                        case 0: //none / show subscribe
                            if(AviviD.abtest())
                            {
                                AviviD.settings.ad_banner_with_ad = 0;
                            }

                            // fetch('https://subscribe.likr.com.tw/ios_onpage_switch_setting.json')
                            fetch('https://avivid.likr.tw/ios_onpage_switch_file/'+AviviD.web_id+'.json')
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(data) {
                                // data = myJson;
                                web_id = AviviD.web_id;
                                AviviD.int_os_type = AviviD.trans_os_type_to_number(AviviD.detect_os_type());
                                AviviD.int_browser_type = AviviD.transBrowserTypeToNumber(AviviD.detectBrowserType());
                                os_platform = AviviD.int_os_type + AviviD.int_browser_type.padStart(2, "0");
                                // if(web_id in data["web_id"]){
                                    web_id_enable = Boolean(parseInt(data["sub_enable"]));         // web_id 總開關
                                    os_enable = Boolean(parseInt(data["subscribe"][os_platform])); // subscribe 個別開關
                                // }else{
                                //     web_id_enable = false;
                                //     os_enable = false;
                                // }
                                block_str = data['block_url'];
                                enable = web_id_enable && os_enable;
                                block_str.forEach(function(str){
                                    if(window.location.href.indexOf(str) > -1)
                                    {
                                        console.log('break');
                                        enable = false;
                                    }
                                });
                                // 如果是ettoday則不推有影音的頁面
                                if(AviviD.category_id == '20201117000001' && enable != false){ //ettoday
                                    if(AviviD.video_page_filter() == false){
                                        enable = false;
                                    }
                                }
                                if(AviviD.debug_mode || AviviD.demo_mode){
                                    console.log(data);
                                    console.log("subscribe_web_id_enable", web_id_enable);
                                    console.log("subscribe_os_enable", os_enable);
                                    console.log("subscribe_enable", enable);
                                }
                                if (enable || AviviD.debug_mode){ // 如果web_id的ios開關是開啟狀態，且原生訂閱不存在時，進入ios仿推播
                                    // if (document.getElementById("AviviD_waterfall_subscribe") == null){
                                        // AviviD.loadScript("https://subscribe.likr.com.tw/api/avivid_waterfall_subscribe_v3.css", "AviviD_waterfall_subscribe");
                                        // AviviD.loadScript("https://subscribe.likr.com.tw/api/avivid_waterfall_webpush_v2.css", "AviviD_waterfall_webpush");
                                        AviviD.loadScript("https://avivid.likr.tw/api/avivid_waterfall_subscribe_v3.css", "AviviD_waterfall_subscribe");
                                        AviviD.loadScript("https://avivid.likr.tw/api/avivid_waterfall_webpush_v2_william.css", "AviviD_waterfall_webpush");
                                    // }else{
                                        // AviviD.loadScript("https://subscribe.likr.com.tw/api/avivid_waterfall_subscribe_v3.css", "AviviD_waterfall_subscribe");
                                        // AviviD.loadScript("https://subscribe.likr.com.tw/api/avivid_waterfall_webpush_v2.css", "AviviD_waterfall_webpush");
                                        // AviviD.loadScript("https://avivid.likr.tw/api/avivid_waterfall_subscribe_v3.css", "AviviD_waterfall_subscribe");
                                        // AviviD.loadScript("https://avivid.likr.tw/api/avivid_waterfall_webpush_v2.css", "AviviD_waterfall_webpush");
                                    // }
                                    if (document.getElementById("avivid_waterfall_subscribe") != null){
                                        // console.log('remove waterfall');
                                        AviviD.removeElement("avivid_waterfall_subscribe");
                                    }
                                    // if(parseInt(AviviD.settings.ad_banner_with_ad)){
                                    //rick:ad_banner不要一直出現
                                    // let AviviD_ad_temp_show = (AviviD.get_cookie('AviviD_ad_temp_show') != null) ? AviviD.get_cookie('AviviD_ad_temp_show') : 0;
                                    // if(AviviD_ad_temp_show == '0')
                                    // {
                                    //     jQuery311("#avivid_waterfall").append(AviviD.waterfall_subscribe_module(1));
                                    //     AviviD.set_cookie_minutes('AviviD_ad_temp_show', 1, 10);
                                    // }
                                    jQuery311("#avivid_waterfall").append(AviviD.waterfall_subscribe_module(1));
                                    // }else{
                                        // 舊版無廣告banner
                                        // jQuery311("#avivid_waterfall").append(AviviD.waterfall_subscribe_module(3));
                                    // }
                                } else {
                                    if(AviviD.debug_mode || AviviD.demo_mode){
                                        console.log("web_id='"+ web_id + "', ios_subscirbe switch is turn off.");
                                        // alert("web_id='"+ web_id + "', ios_subscirbe switch is turn off.");
                                        if (!(web_id in data["web_id"])){
                                            console.log("issue: this key '"+ web_id +"' not in ios_switch_status.json");
                                            // alert("issue: this key '"+ web_id +"' not in ios_switch_status.json");
                                        }
                                        var already_exist = (AviviD.get_cookie('AviviD_already_exist') != null) ? AviviD.get_cookie('AviviD_already_exist') : 0; // 原生訂閱是否已存在
                                        if (already_exist == 1){
                                            console.log("issue: this web_id '"+ web_id +"' origin webpush existed");
                                            // alert("issue: this web_id '"+ web_id +"' origin webpush existed");
                                        }
                                    }
                                }
                            }).catch(function(err) {
                                console.log(err);
                            });
                            break;
                    }
                }else{
                    if(AviviD.demo_mode || AviviD.debug_mode){
                        console.log("Not Has SSL");
                    }
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                AviviD.console("xhr :", xhr);
                AviviD.console("ajaxOptions :", ajaxOptions);
                AviviD.console("thrownError :", thrownError);
                AviviD.console('status code : ' + xhr.status + ' , ajaxOptions : ' + ajaxOptions);
            }
        });
    }
    // string => int, null => default int(0)
    AviviD.settings.ad_banner_position     = parseInt(AviviD.settings.ad_banner_position) || 0;
    AviviD.settings.ad_banner_pic_position = parseInt(AviviD.settings.ad_banner_pic_position) || 0;
    AviviD.settings.onpage_position        = parseInt(AviviD.settings.onpage_position) || 0;
    AviviD.settings.onpage_pic_position    = parseInt(AviviD.settings.onpage_pic_position) || 0;
    // subscribe animation
    AviviD.subscribe_waterfall = function (screen_width, id) {
        AviviD.waterfall_appear(id);
        // if (screen_width < 416) { //if screen size less than 416px, show waterfall animation;
            if(parseInt(AviviD.settings.ad_banner_with_ad)){
                if(AviviD.settings.ad_banner_position==0){
                    sb_position = "avivid_waterfall_subscribe_active_up";
                }else if(AviviD.settings.ad_banner_position==1){
                    jQuery311(`#${id}`).css({"top": "unset", "bottom": "110vh"});
                    sb_position = "avivid_waterfall_subscribe_active_down";
                }
            }else{
                sb_position = "avivid_waterfall_subscribe_active_origin_mid";
            }
            setTimeout(function () {
                // jQuery311("#" + id + "").addClass("avivid_waterfall_subscribe_active");
                jQuery311(`#${id}`).addClass(sb_position);
            }, 1000);
        // } else { //else just appear at left top of screen
        //     setTimeout(function () {
        //         jQuery311("#" + id + "").addClass("avivid_waterfall_subscribe_active");
        //     }, 1000);
        // }
    }
    // webpush animation
    AviviD.webpush_showing = function (screen_width) {
        AviviD.GetWebpushHeight();
        var height = AviviD.ajustWebpushHeightByWebID[AviviD.web_id] ? AviviD.ajustWebpushHeightByWebID[AviviD.web_id] : AviviD.webpushOriginHeight;
        function closeButtonShow(){
            var closeButtonHtml = `<div class="avivid_arrow_right" onclick="AviviD.removeElement('avivid_waterfall_webpush');"></div>`;
            if(webpushData.version == "video"){
                setTimeout(function(){
                    jQuery311("#avivid_waterfall_webpush").append(closeButtonHtml);
                }, 5000)
            }else{
                jQuery311("#avivid_waterfall_webpush").append(closeButtonHtml);
            }
        }
        if (AviviD.ios_ad_id == 'no_ad_id'){
            jQuery311("#avivid_waterfall_wp_section_right").append(AviviD.like_unlike_button);
        }

        function receiveMessageFromIFrame(event){
            if(AviviD.demo_mode || AviviD.debug_mode){ console.log( 'receiveMessageFromIndex', event ); }
            if(event.data == "webpush_already"){
                switch (AviviD.push_version){
                    case 'video':
                        AviviD.video_buffeded_rate = 0.05;
                        if (screen_width < 416) { //if screen size less than 416px, show animation from bottom to up;
                            jQuery311("#avivid_waterfall").css("top", "unset");
                            jQuery311("#avivid_waterfall").css("bottom", "0px");

                            AviviD.waterfall_appear("avivid_waterfall_webpush");
                            if(AviviD.settings.onpage_position==0){
                                wp_positon = "avivid_waterfall_webpush_active_up";
                            }else if(AviviD.settings.onpage_position==1){
                                jQuery311(`#avivid_waterfall_webpush`).css({"bottom": "unset", "top": "10vh"});
                                wp_positon = "avivid_waterfall_webpush_active_up_toUpSide";
                            }else if(AviviD.settings.onpage_position==2){
                                jQuery311(`#avivid_waterfall_webpush`).css({"bottom": "unset", "top": AviviD.settings.onpage_position_vh+"vh"});
                                wp_positon = "avivid_waterfall_webpush_active_up";
                            }
                            window.onmessage = function(e){
                                if (e.data == 'video_ready') {
                                    //TODO: show video
                                    setTimeout(function () {
                                        jQuery311("#avivid_waterfall_webpush").css("bottom", height);
                                        // AviviD.likrTimer.intervalTrigger(AviviD.imitation_subscribe_webpush, 1);
                                        // closeButtonShow();
                                    }, 500);
                                } else if (e.data == 'avivid_webpush_click') {
                                    // console.log('avivid_webpush_click');
                                    // AviviD.removeElement("avivid_waterfall");
                                } else if (e.data == 'avivid_setting'){
                                    // console.log('avivid_setting');
                                    AviviD.subscribe('setting');
                                } else if (e.data == 'avivid_like'){
                                    // console.log('avivid_like');
                                    AviviD.subscribe('like', webpushData.click_url);
                                } else if (e.data == 'avivid_unlike'){
                                    // console.log('avivid_unlike');
                                    AviviD.subscribe('unlike', webpushData.click_url);
                                } else if (e.data == 'avivid_close'){
                                    AviviD.removeElement("avivid_waterfall_webpush");
                                } else {
                                    if(AviviD.debug_mode || AviviD.demo_mode){
                                        console.log('avivid_none:', e);
                                    }
                                }
                            };
                        } else { //else show animation from right to left
                            jQuery311("#avivid_waterfall").css("bottom", "0px");

                            if(AviviD.settings.onpage_pc_position == 0){
                                jQuery311("#avivid_waterfall_webpush").css({ "right": "-100%", "top": "unset", "bottom": "2vh" });
                            }else if(AviviD.settings.onpage_pc_position == 1){
                                jQuery311("#avivid_waterfall_webpush").css({ "right": "-100%", "top": "2vh", "bottom": "unset" });
                            }else if(AviviD.settings.onpage_pc_position == 2){
                                jQuery311("#avivid_waterfall_webpush").css({ "right": "unset", "left": "0%", "bottom": "2vh", "top": "unset"});
                            }else if(AviviD.settings.onpage_pc_position == 3){
                                jQuery311("#avivid_waterfall_webpush").css({ "right": "unset", "left": "0%", "bottom": "unset", "top": "2vh"});
                            }
                            // if (AviviD.os.iPad || (AviviD.os.android && !!window.chrome)) {
                            //     jQuery311("#avivid_waterfall_webpush").css({ "right": "-100%", "bottom": "2vh" });
                            // } else {
                            //     jQuery311("#avivid_waterfall_webpush").css({ "right": "-100%", "top": "unset", "bottom": "2vh" });
                            // }
                            AviviD.waterfall_appear("avivid_waterfall_webpush");
                            // console.log("screen.width: "+screen.width);
                            window.onmessage = function(e){
                                if (e.data == 'video_ready') {
                                    //TODO: show video
                                    setTimeout(function () {
                                        jQuery311("#avivid_waterfall_webpush").addClass("avivid_waterfall_webpush_active_left");
                                        // AviviD.likrTimer.intervalTrigger(AviviD.imitation_subscribe_webpush, 1);
                                        // closeButtonShow();
                                    }, 500);
                                } else if (e.data == 'avivid_webpush_click') {
                                    // console.log('avivid_webpush_click');
                                    // AviviD.removeElement("avivid_waterfall");
                                } else if (e.data == 'avivid_setting'){
                                    // console.log('avivid_setting');
                                    AviviD.subscribe('setting');
                                } else if (e.data == 'avivid_like'){
                                    // console.log('avivid_like');
                                    AviviD.subscribe('like', webpushData.click_url);
                                } else if (e.data == 'avivid_unlike'){
                                    // console.log('avivid_unlike');
                                    AviviD.subscribe('unlike', webpushData.click_url);
                                } else if (e.data == 'avivid_close'){
                                    AviviD.removeElement("avivid_waterfall");
                                } else {
                                    if(AviviD.debug_mode || AviviD.demo_mode){
                                        console.log('avivid_none:', e);
                                    }
                                }
                            };
                        }
                        break;
                    default:
                        if (screen_width < 416) { //if screen size less than 416px, show animation from bottom to up;
                            AviviD.waterfall_appear("avivid_waterfall_webpush");
                            if(AviviD.settings.onpage_position==0){
                                wp_positon = "avivid_waterfall_webpush_active_up";
                            }else if(AviviD.settings.onpage_position==1){
                                jQuery311(`#avivid_waterfall_webpush`).css({"bottom": "unset", "top": "10vh"});
                                wp_positon = "avivid_waterfall_webpush_active_up_toUpSide";
                            }else if(AviviD.settings.onpage_position==2){
                                jQuery311(`#avivid_waterfall_webpush`).css({"bottom": "unset", "top": AviviD.settings.onpage_position_vh+"vh"});
                                wp_positon = "avivid_waterfall_webpush_active_up";
                            }
                            setTimeout(function () {
                                // jQuery311("#avivid_waterfall").css("top", "unset");
                                // jQuery311("#avivid_waterfall").css("bottom", "0px");
                                jQuery311("#avivid_waterfall_webpush").addClass(wp_positon);
                                // jQuery311("#avivid_waterfall_webpush").css("bottom", height);
                                // AviviD.likrTimer.intervalTrigger(AviviD.imitation_subscribe_webpush, 1);
                                // closeButtonShow()
                            }, 500);
                        } else { //else show animation from right to left
                            AviviD.waterfall_appear("avivid_waterfall_webpush");
                            jQuery311("#avivid_waterfall").css("bottom", "0px");
                            if(AviviD.settings.onpage_pc_position == 0){
                            }else if(AviviD.settings.onpage_pc_position == 1){
                                jQuery311("#avivid_waterfall_webpush").css({ "right": "-100%", "top": "2vh", "bottom": "unset" });
                            }else if(AviviD.settings.onpage_pc_position == 2){
                                jQuery311("#avivid_waterfall_webpush").css({ "right": "unset", "left": "0%", "bottom": "2vh", "top": "unset"});
                            }else if(AviviD.settings.onpage_pc_position == 3){
                                jQuery311("#avivid_waterfall_webpush").css({ "right": "unset", "left": "0%", "bottom": "unset", "top": "2vh"});
                            }


                            // if(AviviD.settings.onpage_position==0){
                            //     // wp_positon = "avivid_waterfall_webpush_active_up";
                            // }else if(AviviD.settings.onpage_position==1){
                            //     jQuery311("#avivid_waterfall_webpush").addClass("avivid_waterfall_webpush_active_up_toUpSide");
                            // }
                            setTimeout(function () {
                                jQuery311("#avivid_waterfall_webpush").addClass("avivid_waterfall_webpush_active_left");
                                // AviviD.likrTimer.intervalTrigger(AviviD.imitation_subscribe_webpush, 1);
                                // closeButtonShow()
                            }, 500);
                        }
                        window.onmessage = function(e){
                            if (e.data == 'avivid_setting'){
                                // console.log('avivid_setting');
                                AviviD.subscribe('setting');
                            } else if (e.data == 'avivid_webpush_click') {
                                // console.log('avivid_webpush_click');
                                // AviviD.removeElement("avivid_waterfall");
                            } else if (e.data == 'avivid_like'){
                                // console.log('avivid_like');
                                AviviD.subscribe('like', webpushData.click_url);
                            } else if (e.data == 'avivid_unlike'){
                                // console.log('avivid_unlike');
                                AviviD.subscribe('unlike', webpushData.click_url);
                            } else if (e.data == 'avivid_close'){
                                AviviD.removeElement("avivid_waterfall");
                            } else {
                                if(AviviD.debug_mode || AviviD.demo_mode){
                                    console.log('avivid_none:', e);
                                }
                            }
                        };
                        break;

                }
                if(AviviD.settings.onpage_position==0){
                    AviviD.highest_yindex();
                }
                if(AviviD.demo_mode || AviviD.debug_mode){
                    /** test area */
                    // AviviD.likrTimer.test.pushSuccess();
                    /** test area end */
                }
            }else{
                if(AviviD.debug_mode || AviviD.demo_mode){
                    console.log("webpush content loading not ready.");
                }
            }
        }
        window.addEventListener("message", receiveMessageFromIFrame, options={ once: true });
    }
    AviviD.webpushOriginHeight = "100px";
    AviviD.GetWebpushHeight = function(){
        AviviD.ajustWebpushHeightByWebID = {
            "upmedia": document.getElementById("bottom-ad") ? document.getElementById("bottom-ad").offsetHeight : AviviD.webpushOriginHeight,
            "ctnews": (document.querySelector("body > div.ad div.size-container") ? document.querySelector("body > div.ad div.size-container").offsetHeight : AviviD.webpushOriginHeight) * 1.1,
            "ettoday": (document.querySelector("#mobileweb_320x50_fixed") ? document.querySelector("#mobileweb_320x50_fixed").offsetHeight : AviviD.webpushOriginHeight) * 1.1,
            "mo-bo": (document.getElementById("footer_fixed") ? document.getElementById("footer_fixed").offsetHeight : AviviD.webpushOriginHeight) * 1.1,
            "managertoday": document.getElementById("onead-layout0") ? document.getElementById("onead-layout0").offsetHeight : AviviD.webpushOriginHeight,
            "kocpc": document.getElementById("IdontKonw") ? document.getElementById("IdontKonw").offsetHeight : AviviD.webpushOriginHeight,
            "oneboy": (document.getElementById("fixbtm") ? document.getElementById("fixbtm").offsetHeight : AviviD.webpushOriginHeight) * 1.1,
            "running": (document.getElementsByClassName("fixed-bottom-bar")[0] ? document.getElementsByClassName("fixed-bottom-bar")[0].offsetHeight : AviviD.webpushOriginHeight) * 1.1,
            "hiking": (document.getElementsByClassName("fixed-bottom-bar")[0] ? document.getElementsByClassName("fixed-bottom-bar")[0].offsetHeight : AviviD.webpushOriginHeight) * 1.1,
            "agentm": (document.getElementById("MediaBookAD2-container") ? document.getElementById("MediaBookAD2-container").offsetHeight : AviviD.webpushOriginHeight) * 1.0,
            "dpshop": (document.getElementsByClassName("dvFooterWorkBox")[0] ? document.getElementsByClassName("dvFooterWorkBox")[0].offsetHeight : AviviD.webpushOriginHeight) * 1.1,
            "howtravel": (document.getElementById("social-subscriber-position-right") ? document.getElementById("social-subscriber-position-right").offsetHeight : AviviD.webpushOriginHeight) * 1.1,
            "pufii": (document.getElementById("footermenu") ? document.getElementById("footermenu").offsetHeight : AviviD.webpushOriginHeight) * 1.1,
            "modalovemoda": (document.getElementsByClassName("floating")[0] ? document.getElementsByClassName("floating")[0].offsetHeight : AviviD.webpushOriginHeight) * 1.1,
            "mirrormedia": function(){
                el = document.getElementsByClassName("home-events")[0];
                return el ? (el.offsetHeight != 0 ? el.offsetHeight*1.1 : 20) : 20;
            }(),
            "techbang": function(){
                heights = [
                    document.getElementsByClassName("all-down-wrapper")[0] ? document.getElementsByClassName("all-down-wrapper")[0].offsetHeight * 1.1 : 20,
                    // document.getElementById("banner_click_area0") ? document.getElementById("banner_click_area0").offsetHeight * 1.1 : 50,
                    document.getElementById("dfp-techbang_mobile_all_down_320x100") ? document.getElementById("dfp-techbang_mobile_all_down_320x100").offsetHeight * 1.1 : 20,
                    document.getElementById("dfp-techbang_mobile_all_down_320x1000") ? document.getElementById("dfp-techbang_mobile_all_down_320x1000").offsetHeight * 1.1 : 20,
                    document.getElementsByClassName("phone-ads all-down-wrapper")[0] ? document.getElementsByClassName("phone-ads all-down-wrapper")[0].offsetHeight : 20,
                    20
                ]
                return Math.max(...heights);
            }(),
            "talk": document.querySelector('[id^="vmfive-overlay"]') ? document.querySelector('[id^="vmfive-overlay"]').offsetHeight : 20,
            "babyhome": function(){
                heights = [
                    document.getElementById("glob") ? document.getElementById("glob").offsetHeight * 0.37 : 20,
                    document.getElementsByClassName("alert")[1] ? (document.getElementsByClassName("alert")[1].offsetHeight)*1.1 : 20,
                    document.getElementById("sf_popfix") ? document.getElementById("sf_popfix").offsetHeight * 1.1 : 20,
                    document.getElementById("sfoverlay_fix") ? document.getElementById("sfoverlay_fix").offsetHeight * 1.1 : 20,
                    20
                ]
                return Math.max(...heights);
            }(),
            "bnext": document.querySelector('#MediaBookAD2-container') ? document.querySelector('#MediaBookAD2-container').offsetHeight * 1.1 : AviviD.webpushOriginHeight,
            "mydress": 65,
            "polylulu": 70,
            "lovingfamily": 90
        };
    }

    // make div disappear
    AviviD.waterfall_disappear = function (id) {
        jQuery311("#" + id + "").addClass("disappear");
    }
    // make div appear
    AviviD.waterfall_appear = function (id) {
        jQuery311("#" + id + "").removeClass("disappear");
    }
    // get highest z-index
    AviviD.highest_zindex = function (id) {
        exec_times = 0
        var clock = setInterval(function(){
            // 設定元素高度 start
            var index_highest = 0;
            jQuery311("body *").each(function () {
                // always use a radix when using parseInt
                var index_current = parseInt(jQuery311(this).css("zIndex"), 10);
                if (index_current > index_highest) {
                    index_highest = index_current;
                }
            })
            index_highest++;
            jQuery311("#" + id + "").css("z-index", index_highest);
            // 設定元素高度 end
            exec_times += 1;
            if (exec_times == 5){ clearInterval(clock) }
        } , 1000);
    }

    AviviD.highest_yindex = function(){
        var get_y_height_times = 0;
        var get_y_height_clock = setInterval(function(){
            AviviD.GetWebpushHeight();
            var height = AviviD.ajustWebpushHeightByWebID[AviviD.web_id] ? AviviD.ajustWebpushHeightByWebID[AviviD.web_id] : AviviD.webpushOriginHeight;
            if(typeof height == "number"){
                height = `${height}px`;
            }
            // jQuery311("#avivid_waterfall_webpush").css("bottom", `${height} !important`);
            el = document.getElementById("avivid_waterfall_webpush");
            if(el != null){
                jQuery311("#avivid_waterfall_webpush").css("bottom", `${height}`);
                // el.setAttribute("style", `bottom: ${height} !important`);
            }
            get_y_height_times += 1;
            if (get_y_height_times == 100) { clearInterval(get_y_height_clock) }
            // console.log(get_y_height_times);
        }, 1000)
    }
    AviviD.SecondSubscribeBannerShow = function(){
        var already_exist = (AviviD.get_cookie('AviviD_already_exist') != null) ? AviviD.get_cookie('AviviD_already_exist') : 0;
        AviviD.fcm_sec_log('0',already_exist);
    }
    ////////// waterfall 訂閱與推播 end //////////
    ////////// waterfall 推播版型區 //////////
    AviviD.getIosOnpageData = function(){
        onpage_input_data = {
            'is_crescent': AviviD.settings.is_crescent,
            'received': AviviD.received,
            'title': AviviD.title,
            'page_view': AviviD.page_view_num,
            'uuid': AviviD.uuid,
            'web_id': AviviD.web_id,
            'onpage_type': AviviD.received % 2 ? 'browsing' : 'landing',
            'website_type': AviviD.settings.website_type,
            'browser_ver': AviviD.UAResult.browser.version,
            'os_ver': AviviD.UAResult.os.version,
            'user_agent': AviviD.UAResult.ua,
            'client_href': window.location.href,
            'os_type': AviviD.int_os_type,
            'browser_type': AviviD.int_browser_type,
            'ad_id': (AviviD.get_cookie('AviviD_ad_id') != null) ? AviviD.get_cookie('AviviD_ad_id') : "_",
            'is_ios': "1",
        };
        jQuery311.ajax({
            url: "https://load-balancer.likr.com.tw/api/get_onpage_data.php",
            type: 'get',
            dataType: "json",
            data: onpage_input_data,
            success: function (data) {
                console.log(data);
                //====================只要活到半夜十二點=============================
                if(data.ad_id != 'no_ad_id' && data.ad_id != null){
                    ad_id = ("_" == ad_id || data.ad_id.substr(-3) == '_re')? data.ad_id : ad_id + "," + data.ad_id;
                    var d = new Date();
                    var y = d.getFullYear();
                    var m = d.getMonth()+1;
                    var day = d.getDate();
                    var today = y + '/' + m + '/' + day;
                    var sd = new Date( today + 'T23:59:59');
                    var now = d.getTime();
                    var sd_time = sd.getTime();
                    var diff = (sd_time - now)/1000/60;
                    AviviD.set_cookie_minutes('AviviD_ad_id', ad_id, Math.floor(diff));
                }
                else
                {
                    AviviD.set_cookie_minutes('AviviD_ad_id', data.ad_id, 1);
                }
                //====================只要活到半夜十二點 end =============================
                AviviD.received+=1;
            }
        })
    }
    //訂閱以及訂閱設定
    AviviD.waterfall_subscribe_module = function (choose, method="AviviD.subscribe", allow_text="允許") {
        // if (document.getElementById("AviviD_waterfall_subscribe") == null){
            // AviviD.loadScript("https://subscribe.likr.com.tw/api/avivid_waterfall_subscribe_v3.css", "AviviD_waterfall_subscribe");
            // AviviD.loadScript("https://subscribe.likr.com.tw/api/avivid_waterfall_webpush_v2.css", "AviviD_waterfall_webpush");
            AviviD.loadScript("https://avivid.likr.tw/api/avivid_waterfall_subscribe_v3.css", "AviviD_waterfall_subscribe");
            AviviD.loadScript("https://avivid.likr.tw/api/avivid_waterfall_webpush_v2_william.css", "AviviD_waterfall_webpush");
        // }else{
            // AviviD.loadScript("https://subscribe.likr.com.tw/api/avivid_waterfall_subscribe_v3.css", "AviviD_waterfall_subscribe");
            // AviviD.loadScript("https://subscribe.likr.com.tw/api/avivid_waterfall_webpush_v2.css", "AviviD_waterfall_webpush");
            // AviviD.loadScript("https://avivid.likr.tw/api/avivid_waterfall_subscribe_v3.css", "AviviD_waterfall_subscribe");
            // AviviD.loadScript("https://avivid.likr.tw/api/avivid_waterfall_webpush_v2.css", "AviviD_waterfall_webpush");
        // }
        if(document.getElementById("avivid_waterfall") == null){
            jQuery311("html").append(`<div id="avivid_waterfall"></div>`);
        }
        close_method = "close";
        onLoadFunction = "";
        ad_html = "";
        subscribe_idName = "avivid_waterfall_subscribe";
        if (   method == 'AviviD.compensation_subscribe'
            || method == 'AviviD.subscribe_agent_domain') {
            allow_text = "訂閱";
            close_method = "close_second_subscribe";
            onLoadFunction = "AviviD.SecondSubscribeBannerShow()";
            // AviviD.SecondSubscribeBannerShow();
            ad_html = `<div style="
                                background-image: url(&quot;https://www.likr.tw/pushImage/upmedia/big-20200604-163516.png&quot;);
                                height: 100%;
                                position: relative;
                                font-size: 5rem;
                                text-align: center;
                            ">TEST</div>
            `;
            // subscribe_idName = "avivid_second_subscribe";
        }
        // 開啟廣告banner版型則變動版型 1 => 沒有廣告, 3 => 有廣告
        if(choose == 1 || choose == 3){
            choose = parseInt(AviviD.settings.ad_banner_with_ad) ? 1 : 3 ;
            //rick banner
            if(AviviD.settings.sub_banner_customer_enable == '1')
            {
                choose = 4;
            }
        }
        function banner_style(choose){
            function esc(){
                return false;
            }

            switch (choose) {
                case 4:
                    var product_module = `
                        <div id="avivid_waterfall_sb_product_area">
                            <div id="avivid_waterfall_sb_img_area_img_version"></div>
                        </div>
                    `;//<div id="avivid_waterfall_sb_product_text_area" onclick="window.open('${data.click_url}');">${data.msg}</div>
                    var subscribe_btn_module = `
                        <div id='avivid_waterfall_sb_section'>
                            <!-- left area-->
                            <div id="avivid_waterfall_sb_section_left">
                                <!-- logo -->
                                <div id="avivid_waterfall_sb_section_left_logo">
                                </div>
                            </div>
                            <!-- right area -->
                            <div id="avivid_waterfall_sb_section_right">
                                <div id="avivid_waterfall_sb_section_right_inner">
                                    <div id="avivid_waterfall_sb_section_right_title_area">
                                        <div id="avivid_waterfall_sb_section_right_btn">
                                            <div>`+ AviviD.settings.push_banner_data_title +`</div>
                                            <div>` + AviviD.settings.push_banner_data_content + `</div>
                                        </div>
                                    </div>
                                    <div id="avivid_waterfall_sb_section_right_btn_area">
                                        <div id="avivid_waterfall_right_content_blk_btn" class="avivid_waterfall_right_content_btn" onclick="${method}('block')">`+ AviviD.settings.banner_button_deny +`</div>
                                        <div id="avivid_waterfall_right_content_sub_btn" class="avivid_waterfall_right_content_btn" onclick="${method}('accept')">`+ AviviD.settings.banner_button_allow +`</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;


                    top_section = product_module;
                    btm_section = subscribe_btn_module;

                    AviviD.removeElement("avivid_waterfall_subscribe");
                    var subscribe_module = `
                        <div id="avivid_waterfall_subscribe" ondragstart="esc();" onselectstart="esc();" onContextMenu="esc();" style="-webkit-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;" class="disappear avivid_waterfall_subscribe">
                            ${top_section}
                            ${btm_section}
                        </div>
                    `;
                    jQuery311("#avivid_waterfall").append(subscribe_module);
                    top_section_radius = "4px 4px 0px 0px";
                    btn_section_radius = "0px 0px 4px 4px";

                    jQuery311("#avivid_waterfall_sb_section").css("border-radius", btn_section_radius);
                    jQuery311("#avivid_waterfall_sb_img_area_img_version").css("border-radius", top_section_radius);

                    jQuery311("#avivid_waterfall_sb_img_area_img_version").css("background-image", `url('${AviviD.settings.ring_before_background_path}')`);
                    jQuery311("#avivid_waterfall_sb_section_left_logo").css("background-image", `url('${AviviD.settings.icon_path}')`);

                    AviviD.highest_zindex('avivid_waterfall');
                    AviviD.subscribe_waterfall(screen.width, "avivid_waterfall_subscribe");

                    return "";
                case 3:
                    AviviD.removeElement("avivid_waterfall_subscribe");
                    var avivid_waterfall_subscribe_module = `
                        <div id="avivid_waterfall_subscribe" class="disappear avivid_waterfall_subscribe_origin" onload="${onLoadFunction}">
                            <!-- subscribe -->
                            <!-- close button -->
                            <div id="avivid_waterfall_sub_cancel" onclick="AviviD.subscribe('${close_method}')">
                                <!-- <i class="fas fa-times"></i> -->
                                <div class="avivid_times"></div>
                            </div>
                            <!-- ask auth -->
                            <div id="avivid_waterfall_sub_title">
                                <p>
                                    <span id="avivid_waterfall_sub_title_domain">
                                        `+ AviviD.get_top_domain() +`
                                    </span>
                                    要求下列權限:
                                </p>
                            </div>
                            <!-- content -->
                            <div id="avivid_waterfall_sub_content">
                                <!-- <i class="fas fa-bell"></i> -->
                                <div class="avivid_bell"></div>
                                <p>顯示通知</p>
                            </div>
                            <!-- accept & block button -->
                            <div id="avivid_waterfall_sub_btn">
                                <div id="avivid_waterfall_sub_btn_accept" onclick="`+ method +`('accept')">`+allow_text+`</div>
                                <div id="avivid_waterfall_sub_btn_block" onclick="`+ method +`('block')">封鎖</div>
                            </div>
                            <!-- subscribe END-->
                        </div>
                    `;
                    jQuery311("#avivid_waterfall").append(avivid_waterfall_subscribe_module);
                    AviviD.highest_zindex('avivid_waterfall');
                    AviviD.settings.ad_banner_with_ad = 0; // 無廣告訂閱banner版型標記，以便給AviviD.subscribe_waterfall辨識動作終點位置，在中間。
                    AviviD.subscribe_waterfall(screen.width, "avivid_waterfall_subscribe");
                    // return avivid_waterfall_subscribe_module;
                    return "";
                case 2:
                    var avivid_waterfall_subscribe_setting_module = `
                        <div id="avivid_waterfall_subscribe_setting" class="disappear">
                            <!-- subscribe_setting -->
                            <!-- ask auth -->
                            <div id="avivid_waterfall_sub_title" style="margin-top: 5%;">設定</div>
                            <!-- content -->
                            <div id="avivid_waterfall_sub_content">
                            <!-- <i class="fas fa-bell"></i> -->
                            <div class="avivid_bell"></div>
                                <p>顯示通知</p>
                            </div>
                            <!-- accept & block button -->
                            <div id="avivid_waterfall_sub_btn" style="right: auto;">
                                <!-- powered by -->
                                <p id="avivid_waterfall_wp_section_left_content" style="margin: 3% 0 0 5%;width: 30%;">
                                </p>
                                <div id="avivid_waterfall_sub_btn_block" onclick="AviviD.subscribe('pause')" style="margin-left: auto;">暫停</div>
                                <div id="avivid_waterfall_sub_btn_accept" onclick="AviviD.subscribe('back')" style="margin-right: 5%;">返回</div>
                            </div>
                            <!-- subscribe_setting END-->
                        </div>
                    `;
                    if(document.getElementById("avivid_waterfall_subscribe_setting")==null){
                        jQuery311("#avivid_waterfall").append(htmlStr_remove_space(avivid_waterfall_subscribe_setting_module));
                    }
                    // return avivid_waterfall_subscribe_setting_module;
                    return "";
                case 1:
                    AviviD.settings.push_banner_data_content = AviviD.settings.push_banner_data_content || "立即訂閱 "+AviviD.get_top_domain();
                    var ad_id = (AviviD.get_cookie('AviviD_ad_id') != null) ? AviviD.get_cookie('AviviD_ad_id') : "_";
                    // var is_ios = AviviD.demo_mode == 1 ? "2" : "1";
                    onpage_input_data = {
                        'is_crescent': AviviD.settings.is_crescent,
                        'received': AviviD.received,
                        'title': AviviD.title,
                        'page_view': AviviD.page_view_num,
                        'uuid': (AviviD.uuid != null) ? AviviD.uuid : '_',
                        'web_id': AviviD.web_id,
                        'onpage_type': AviviD.received % 2 ? 'browsing' : 'landing',
                        'website_type': AviviD.settings.website_type,
                        'browser_ver': AviviD.UAResult.browser.version,
                        'os_ver': AviviD.UAResult.os.version,
                        'user_agent': AviviD.UAResult.ua,
                        'client_href': window.location.href,
                        'os_type': AviviD.int_os_type,
                        'browser_type': AviviD.int_browser_type,
                        'ad_id': ad_id,
                        'is_ios': "2", // TODO: "1" => "推播版位", "2" => "訂閱版位"
                    };
                    var get_onpage_url = AviviD.demo_mode == 1 ? "https://webpush-api.likr.com.tw/api/get_onpage_data.php" : "https://load-balancer.likr.com.tw/api/get_onpage_data.php" ;
                    jQuery311.ajax({
                        url: get_onpage_url,
                        type: 'get',
                        dataType: "json",
                        data: onpage_input_data,
                        success: function (data) {
                            // console.log(data);
                            // if(data.title){ // 如果有資料才執行廣告訂閱
                                if(AviviD.demo_page){ data = {}; }
                                //====================只要活到半夜十二點=============================
                                if(data.ad_id != 'no_ad_id' && data.ad_id != null){
                                    ad_id = ("_" == ad_id || data.ad_id.substr(-3) == '_re')? data.ad_id : ad_id + "," + data.ad_id;
                                    var d = new Date();
                                    var y = d.getFullYear();
                                    var m = d.getMonth()+1;
                                    var day = d.getDate();
                                    var today = y + '/' + m + '/' + day;
                                    var sd = new Date( today + 'T23:59:59');
                                    var now = d.getTime();
                                    var sd_time = sd.getTime();
                                    var diff = (sd_time - now)/1000/60;
                                    AviviD.set_cookie_minutes('AviviD_ad_id', ad_id, Math.floor(diff));
                                }
                                else
                                {
                                    AviviD.set_cookie_minutes('AviviD_ad_id', data.ad_id, 1);
                                }
                                //====================只要活到半夜十二點 end =============================
                                webpushData = {
                                    version: data.ad_type,
                                    click_url: data.click_url,
                                    title: data.title,
                                    up_content: data.msg,
                                    content: data.msg,
                                    logo_img: data.icon,
                                    s_img: data.image,
                                    b_img: data.image,
                                    video_url: data.video,
                                    avivid_os_mobile: AviviD.os.mobile,
                                    avivid_banner_id: data.icon ? data.icon.split(",").reverse()[2] : "_",
                                    web_id: AviviD.web_id,
                                    ios_uuid: AviviD.get_ios_uuid(),
                                    ad_id: data.ad_id,
                                    with_button: data.with_button ? data.with_button : "_",
                                    button1_url: data.button1_url ? data.button1_url : "_",
                                    button1_title: data.button1_title ? data.button1_title : "_",
                                    button1_msg: data.button1_msg ? data.button1_msg : "_",
                                    button1_icon: data.button1_icon ? data.button1_icon : "_"
                                }
                                if(parseInt(data.with_button)){
                                    webpushData.icon = webpushData.button1_icon;
                                }else{
                                    webpushData.icon = webpushData.logo_img;
                                }
                                if(webpushData.icon == "_"){
                                    webpushData.icon = AviviD.settings.icon_path;
                                }
                                var product_module = `
                                    <div id="avivid_waterfall_sb_product_area">
                                        <div id="avivid_waterfall_sb_img_area_img_version" onclick="window.open('${data.click_url}');"></div>
                                        <div id="avivid_waterfall_sb_product_text_area" onclick="window.open('${data.click_url}');">${data.msg}</div>

                                    </div>
                                `;//<div class="avivid_arrow_right" onclick="AviviD.subscribe('${close_method}')"></div>
                                //rick 要加回上面空白處
                                if(data.ad_type == 'yahoo' && data.beacon != '_')
                                {
                                    var beacon_img = `<img src="` + data.beacon + `" style="display:none;">`;
                                    product_module = product_module+beacon_img;
                                }
                                var subscribe_btn_module = `
                                    <div id='avivid_waterfall_sb_section'>
                                        <!-- left area-->
                                        <div id="avivid_waterfall_sb_section_left">
                                            <!-- logo -->
                                            <div id="avivid_waterfall_sb_section_left_logo">
                                            </div>
                                        </div>
                                        <!-- right area -->
                                        <div id="avivid_waterfall_sb_section_right">
                                            <div id="avivid_waterfall_sb_section_right_inner">
                                                <div id="avivid_waterfall_sb_section_right_title_area">
                                                    <div id="avivid_waterfall_sb_section_right_btn">
                                                        <div>`+ AviviD.get_top_domain() +` 要求下列權限: </div>
                                                        <div>顯示通知</div>
                                                    </div>
                                                </div>
                                                <div id="avivid_waterfall_sb_section_right_btn_area">
                                                    <div id="avivid_waterfall_right_content_blk_btn" class="avivid_waterfall_right_content_btn" onclick="${method}('block')">取消</div>
                                                    <div id="avivid_waterfall_right_content_sub_btn" class="avivid_waterfall_right_content_btn" onclick="${method}('accept')">允許</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                                if(AviviD.settings.ad_banner_pic_position == 1){
                                    top_section = subscribe_btn_module;
                                    btm_section = product_module;
                                }else{
                                    top_section = product_module;
                                    btm_section = subscribe_btn_module;
                                }
                                AviviD.removeElement("avivid_waterfall_subscribe");
                                var subscribe_module = `
                                    <div id="avivid_waterfall_subscribe" ondragstart="esc();" onselectstart="esc();" onContextMenu="esc();" style="-webkit-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;" class="disappear avivid_waterfall_subscribe">
                                        ${top_section}
                                        ${btm_section}
                                    </div>
                                `;
                                jQuery311("#avivid_waterfall").append(subscribe_module);
                                top_section_radius = "4px 4px 0px 0px";
                                btn_section_radius = "0px 0px 4px 4px";
                                if(AviviD.settings.ad_banner_pic_position == 1){
                                    jQuery311("#avivid_waterfall_sb_section").css("border-radius", top_section_radius);
                                    jQuery311("#avivid_waterfall_sb_img_area_img_version").css("border-radius", btn_section_radius);
                                    jQuery311("#avivid_waterfall_sb_product_text_area").css("border-radius", btn_section_radius);
                                }else{
                                    jQuery311("#avivid_waterfall_sb_section").css("border-radius", btn_section_radius);
                                    jQuery311("#avivid_waterfall_sb_img_area_img_version").css("border-radius", top_section_radius);
                                }
                                jQuery311("#avivid_waterfall_sb_img_area_img_version").css("background-image", `url('${data.image}')`);
                                jQuery311("#avivid_waterfall_sb_section_left_logo").css("background-image", `url('${webpushData.logo_img}')`);
                                if(!data.title){ // 如果無資料失敗則隱藏廣告版型
                                    jQuery311("#avivid_waterfall_sb_product_area").css("display", "none"); // 隱藏廣告區塊
                                    jQuery311("#avivid_waterfall_subscribe").css({"min-height": "74px", "max-height": "98px", "height": "17vw"}); // 縮小推播版高度至訂閱按鈕高度
                                    jQuery311("#avivid_waterfall_sb_section").css({"height": "100%", "border-radius": "4px 4px 4px 4px"}); // 將訂閱按鈕區塊，充滿至推播版面全版
                                    jQuery311("#avivid_waterfall_sb_section_left_logo").css("background-image", `url('${AviviD.settings.icon_path}')`);
                                    // jQuery311("#avivid_waterfall_sb_section").append(`<div class="avivid_arrow_right" onclick="AviviD.subscribe('${close_method}')"></div>`);
                                    // jQuery311(".avivid_arrow_right").css("padding", "0");
                                    //rick 以上兩行是為了測試不讓用戶按關閉，看訂閱數是否能提高
                                }
                                AviviD.highest_zindex('avivid_waterfall');
                                AviviD.subscribe_waterfall(screen.width, "avivid_waterfall_subscribe");
                                AviviD.received+=1;
                            // }else{ //  如果無資料失敗則呼叫無廣告版型
                                // banner_style(3);
                            // }
                        }
                    })
                    return "";
            }
        }
        return banner_style(choose);
    }




    AviviD.loadScript = function (url, id=null){
        if(id != null){
            AviviD.removeElement(id);
        }
        type = url.split(".").reverse()[0];
        switch (type){
            case 'js':
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = url;
                break;
            case 'css':
                var script = document.createElement('link');
                script.rel = 'stylesheet';
                script.type = 'text/css';
                if(id != null){
                    script.id = id;
                }
                script.href = url;
                break;
            default: break;
        }
        // Adding the script tag to the head as suggested before
        var head = document.head;

        // Fire the loading
        head.appendChild(script);
    }

    function htmlStr_remove_space(html_str){
        html_str = html_str.replace(/\n/g, "")
            .replace(/[\s ]+\</g, "<")
            .replace(/\>[\s ]+\</g, "><")
            .replace(/\>[\s ]+/g, ">")
        return html_str;
    }


    // subscribe function
    AviviD.subscribe = function (choose, click_url=null) {
        switch (choose) {
            case 'accept':
                AviviD.set_cookie('AviviD_waterfall_status', 1);
                // TODO: 1.insert into localstorage
                localStorage.setItem('AviviD_waterfall_status', 1);
                ////////
                AviviD.waterfall_disappear("avivid_waterfall_subscribe");
                //TODO: insert subscription into subscribe.server
                var ios_uuid = AviviD.get_ios_uuid();
                var web_id = AviviD.web_id;
                AviviD.int_browser_type = AviviD.transBrowserTypeToNumber(AviviD.detectBrowserType());
                var os_platform = AviviD.int_os_type + AviviD.int_browser_type.padStart(2, "0"); //已 os_type:1位數和browser_type:2位數(補0)
                var client_href = window.location.href;
                jQuery311.ajax({
                    url: "https://auto-load-balancer.likr.com.tw/api/ios_subscribe_api.php",
                    type: 'POST',
                    dataType: "json",
                    data: {
                        'uuid': ios_uuid,
                        'web_id': web_id,
                        'os_platform': os_platform,
                        'client_href': client_href,
                    },
                    success: function (data) {
                        // console.log(data);
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        AviviD.console("xhr :", xhr);
                        AviviD.console("ajaxOptions :", ajaxOptions);
                        AviviD.console("thrownError :", thrownError);
                        AviviD.console('status code : ' + xhr.status + ' , ajaxOptions : ' + ajaxOptions);
                    }
                });

                jQuery311.ajax({
                    url: "https://webpush-api02.likr.com.tw/pushServer/count_ad_banner_choose.php",
                    type: 'POST',
                    dataType: "json",
                    data: {
                        'choose': 'a',
                        'web_id': web_id,
                        'uuid': ios_uuid,
                    },
                    success: function (data) {
                        // console.log(data);
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        AviviD.console("xhr :", xhr);
                        AviviD.console("ajaxOptions :", ajaxOptions);
                        AviviD.console("thrownError :", thrownError);
                        AviviD.console('status code : ' + xhr.status + ' , ajaxOptions : ' + ajaxOptions);
                    }
                });

                break;
            case 'block':
                var days = 30;
                AviviD.waterfall_disappear("avivid_waterfall_subscribe");
                AviviD.waterfall_disappear('avivid_waterfall_subscribe_setting');
                AviviD.set_cookie('AviviD_waterfall_status', 2, days);
                // TODO: insert into localstorage
                localStorage.setItem('AviviD_waterfall_status', 2);
                var ios_uuid = AviviD.get_ios_uuid();
                var web_id = AviviD.web_id;
                jQuery311.ajax({
                    url: "https://webpush-api02.likr.com.tw/pushServer/count_ad_banner_choose.php",
                    type: 'POST',
                    dataType: "json",
                    data: {
                        'choose': 'b',
                        'web_id': web_id,
                        'uuid': ios_uuid,
                    },
                    success: function (data) {
                        // console.log(data);
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        AviviD.console("xhr :", xhr);
                        AviviD.console("ajaxOptions :", ajaxOptions);
                        AviviD.console("thrownError :", thrownError);
                        AviviD.console('status code : ' + xhr.status + ' , ajaxOptions : ' + ajaxOptions);
                    }
                });
                break;
            case 'close':
                // 關閉訂閱畫面，設定封鎖一天，cookie失效後，將再跳出訂閱畫面
                var days = 1;
                AviviD.set_cookie('AviviD_waterfall_status', 2, days);
                AviviD.waterfall_disappear('avivid_waterfall_subscribe');
                AviviD.removeElement("avivid_waterfall_subscribe");
                break;
            case 'close_second_subscribe':
                // 回傳二次訂閱被關閉的訊息
                AviviD.fcm_sec_log('x','0'); // This function in ring_without_tracking.js
                AviviD.set_cookie('AviviD_show_sub', '1', 7); // 設定二次訂閱封鎖cookie，防止關閉後再跳出，7天後失效
                // 關閉二次訂閱畫面
                AviviD.waterfall_disappear('avivid_waterfall_subscribe');
                AviviD.removeElement("avivid_waterfall_subscribe");
                break;
            case 'block_webpush':
                AviviD.waterfall_disappear('avivid_waterfall_webpush');
                AviviD.set_cookie('AviviD_waterfall_status', 2);
                //TODO: insert subscription into subscribe.server
                break;
            case 'setting':
                // AviviD.ios_visibilitychange(true);
                AviviD.waterfall_disappear('avivid_waterfall_webpush');
                jQuery311("#avivid_waterfall_webpush").css({"opacity": "0", "transition": "unset"});
                jQuery311("#avivid_waterfall_subscribe_setting").removeClass("disappear");
                if(AviviD.settings.onpage_position && screen.width < 416){
                    jQuery311("#avivid_waterfall_subscribe_setting").css({
                        "opacity": "1",
                        "transition": "unset",
                        "z-index": "1",
                        "top": "2vh",
                        "bottom": "unset",
                        "right": "0px",
                    });
                    jQuery311("#avivid_waterfall_subscribe_setting").addClass("avivid_waterfall_webpush_active_up_toUpSide");
                }else{
                    var height = AviviD.ajustWebpushHeightByWebID[AviviD.web_id] ? AviviD.ajustWebpushHeightByWebID[AviviD.web_id] : "2vh";
                    jQuery311("#avivid_waterfall_subscribe_setting").css({
                        "opacity": "1",
                        "transition": "unset",
                        "z-index": "1",
                        "top": "unset",
                        "bottom": height,
                        "right": "0"
                    });
                }
                break;
            case 'arrow-right-video':
                var oldPlayer = document.getElementById('hls-example');
                videojs(oldPlayer).dispose();
                AviviD.removeElement("avivid_waterfall");
                break;
            case 'back':
                // AviviD.ios_visibilitychange(false);
                AviviD.waterfall_disappear('avivid_waterfall_subscribe_setting');
                AviviD.waterfall_appear('avivid_waterfall_webpush');
                jQuery311("#avivid_waterfall_webpush").css({"opacity": "1", "transition": "unset"});
                jQuery311("#avivid_waterfall_subscribe_setting").css({"opacity": "0", "transition": "unset", "z-index": "0"});
                break;
            case 'pause':
                // 暫停訂閱，設定封鎖30天，cookie失效後，將再跳出訂閱畫面
                var days = 30;
                AviviD.set_cookie('AviviD_waterfall_status', 2, days); //safari 7天會失效 rick改寫別的cookie控制
                AviviD.set_cookie('AviviD_waterfall_pause', 1, days);
                AviviD.waterfall_disappear('avivid_waterfall');
                AviviD.removeElement("avivid_waterfall");
                AviviD.ios_unsubscribe();
                break;
            case 'like':
                window.open(click_url);
                AviviD.waterfall_disappear('avivid_waterfall');
                AviviD.removeElement("avivid_waterfall");
                break;
            case 'unlike':
                AviviD.waterfall_disappear('avivid_waterfall');
                AviviD.removeElement("avivid_waterfall");
                break;
            case 'ad_click':
                window.open(click_url);
                AviviD.set_cookie_minutes(name='AviviD_waterfall_status', value=2, minutes=30);
                AviviD.waterfall_disappear('avivid_waterfall');
                AviviD.removeElement("avivid_waterfall");
                break;
            default: break;
        }
    }

    AviviD.ios_unsubscribe = function(){
        jQuery311.ajax({
            url: "https://auto-load-balancer.likr.com.tw/api/ios_unsubscribe_api.php",
            type: 'POST',
            dataType: "json",
            data: {
                'uuid': AviviD.get_ios_uuid(),
                'web_id': AviviD.web_id,
            },
            success: function (data) {
                // console.log(data);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                AviviD.console("xhr :", xhr);
                AviviD.console("ajaxOptions :", ajaxOptions);
                AviviD.console("thrownError :", thrownError);
                AviviD.console('status code : ' + xhr.status + ' , ajaxOptions : ' + ajaxOptions);
            }
        })
    }
    // serviceWorker服務開關判斷
    AviviD.serviceworker_switch = function () {
        // 預設開關
        // return 1; //TODO: 上線要刪除
        switch_status = 1;
        jQuery311.ajax({
            type: "GET",
            url: "https://avivid.likr.tw/api/serviceworker_switch.php",
            dataType: "json",
            // async:false,
            data: {
            },
            success: function (data){
                // console.log(data);
                AviviD.int_browser_type = AviviD.transBrowserTypeToNumber(AviviD.detectBrowserType());
                // var os_platform = AviviD.int_os_type + AviviD.int_browser_type.padStart(2, "0"); //已 os_type:1位數和browser_type:2位數(補0)
                var os_platform = AviviD.int_os_type + "0" + AviviD.int_browser_type; //已 0 為間隔分離os_type和browser_type
                switch_status = data[os_platform];
            },
            error: function (jqXHR) {
                console.log("發生錯誤: " + jqXHR.status);
            }
        })
        // alert(switch_status);
        return switch_status;
    }
    // 作業系統與瀏覽器判斷
    AviviD.os = function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        var ua = navigator.userAgent.toLowerCase();
        var isOpera = u.indexOf("Opera") > -1 || u.indexOf("OPR") > -1;

        return { //偵測移動端瀏覽器版本信息
            IE: u.indexOf('Trident') > -1, //IE 核心
            presto: u.indexOf('Presto') > -1, //opera 核心
            opera: isOpera, //opera 瀏覽器
            Safari: (u.indexOf("compatible") > -1 && u.indexOf("MSIE") > -1 && !isOpera) || (u.indexOf("Safari") > -1 && u.indexOf("Chrome") == -1 && u.indexOf("Edg") == -1), //Safari 瀏覽器
            webKit: u.indexOf('AppleWebKit') > -1, //Apple, google 核心
            firefox: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //Firefox 核心
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //行動裝置
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android 或 uc 瀏覽器
            iPhone: u.indexOf('iPhone') > -1, //是否為 iPhone 或者 QQHD 瀏覽器
            iPad: u.indexOf('iPad') > -1, //是否 iPad
            webApp: u.indexOf('Safari') == -1, //是否 web 应该程序，没有头部与底部
            iosv: (u.indexOf('iPhone OS') == -1) ? false : u.substr(u.indexOf('iPhone OS') + 9, 3),//ios 版本
            weixin: ua.match(/MicroMessenger/i) == "micromessenger",//微信瀏覽器
            fbapp: u.indexOf('FBAV') > -1 || u.indexOf('FBSV') > -1, //Facebook App 內瀏覽器(Android => FBAV, IOS => FBSV)
            line: u.indexOf('Line') > -1, //Line 內瀏覽器
            Instagram: u.indexOf('Instagram') > -1, //Instagram 內瀏覽器
        };
    }();
    AviviD.ios_landing = function () {
        const avivid_web_id_data = {
            "101": "0",
            "102": "0",
            "103": "0",
            "104": "0",
            "105": "0",
            "106": "0",
            "107": "0",
            "108": "0",
            "109": "0",
            "1010": "1",
            "1011": "1",
            "1012": "1",
            "1013": "1",
            "1014": "1",
            "201": "1",
            "202": "1",
            "203": "1",
            "204": "1",
            "205": "1",
            "206": "1",
            "207": "1",
            "208": "1",
            "209": "0",
            "2010": "1",
            "2011": "1",
            "2012": "1",
            "2013": "1",
            "2014": "1",
            "301": "0",
            "302": "0",
            "303": "0",
            "304": "0",
            "305": "0",
            "306": "0",
            "307": "0",
            "308": "0",
            "309": "0",
            "3010": "1",
            "3011": "1",
            "3012": "1",
            "3013": "1",
            "3014": "1",
            "401": "0",
            "402": "0",
            "403": "0",
            "404": "0",
            "405": "0",
            "406": "0",
            "407": "0",
            "408": "0",
            "409": "0",
            "4010": "1",
            "4011": "1",
            "4012": "1",
            "4013": "1",
            "4014": "1",
            "901": "0",
            "902": "0",
            "903": "0",
            "904": "0",
            "905": "0",
            "906": "0",
            "907": "0",
            "908": "0",
            "909": "0",
            "9010": "1",
            "9011": "1",
            "9012": "1",
            "9013": "1",
            "9014": "1"
        };
        // jQuery.ajax({
        //     type: "GET",
        //     url: "https://avivid.likr.tw/serviceworker_switch_status.json",
        //     // url: "https://subscribe.likr.com.tw/serviceworker_switch_status.json",
        //     dataType: "json",
        //     data: {},
        //     success: function (data) {
                AviviD.int_os_type = AviviD.trans_os_type_to_number(AviviD.detect_os_type());
                AviviD.int_browser_type = AviviD.trans_browser_type_to_number(AviviD.detect_browser_type());
                var os_platform = AviviD.int_os_type + "0" + AviviD.int_browser_type; //已 0 為間隔分離os_type和browser_type
                if(avivid_web_id_data[os_platform] != null){
                    AviviD.switch_status = avivid_web_id_data[os_platform];
                }else{
                    AviviD.switch_status = '0';
                }
                if (AviviD.switch_status === '1') { //wine 2020-05-15 debug用
                    //類ios裝置landing
                    const reg_data = {
                        "web_id": AviviD.web_id,
                        "uuid": AviviD.uuid,
                        "client_href": window.location.href,
                        "browse_time": 5,
                        "is_leave": 0
                    };
                    jQuery311.ajax({
                        // https://auto-load-balancer.likr.com.tw
                        url: "https://auto-load-balancer.likr.com.tw/api/visit_record.php",
                        type: "get",
                        data: reg_data,
                        // dataType: "json",
                        success: function (data) {
                            AviviD.console(data);

                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            AviviD.console("xhr :", xhr);
                            AviviD.console("ajaxOptions :", ajaxOptions);
                            AviviD.console("thrownError :", thrownError);
                            AviviD.console('status code : ' + xhr.status + ' , ajaxOptions : ' + ajaxOptions);
                        }
                    });
                }else{
                    //sw裝置landing
                    const reg_data = {
                        "web_id": AviviD.web_id,
                        "uuid": AviviD.uuid,
                        "client_href": window.location.href,
                        "browse_time": 4,
                        "is_leave": 0
                    };
                    jQuery.ajax({
                        url: "https://auto-load-balancer.likr.com.tw/api/visit_record.php",
                        type: "get",
                        data: reg_data,
                        // dataType: "json",
                        success: function (data) {
                            AviviD.console(data);

                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            AviviD.console("xhr :", xhr);
                            AviviD.console("ajaxOptions :", ajaxOptions);
                            AviviD.console("thrownError :", thrownError);
                            AviviD.console('status code : ' + xhr.status + ' , ajaxOptions : ' + ajaxOptions);
                        }
                    });

                }
        //     }
        // })
    }
    AviviD.url_to_uuid = function (browse_time, is_leave) {
        const reg_data = {
            "web_id": AviviD.web_id,
            "uuid": AviviD.uuid,
            "client_href": window.location.href,
            "browse_time": browse_time,
            "is_leave": is_leave
        };

        jQuery311.ajax({
            url: "https://auto-load-balancer.likr.com.tw/api/visit_record.php",
            type: "get",
            data: reg_data,
            // dataType: "json",
            success: function (data) {
                AviviD.console(data);

            },
            error: function (xhr, ajaxOptions, thrownError) {
                AviviD.console("xhr :", xhr);
                AviviD.console("ajaxOptions :", ajaxOptions);
                AviviD.console("thrownError :", thrownError);
                AviviD.console('status code : ' + xhr.status + ' , ajaxOptions : ' + ajaxOptions);
            }
        });
    }
    AviviD.visit_again = function () {
        var already_exist = (AviviD.get_cookie('AviviD_already_exist') != null) ? AviviD.get_cookie('AviviD_already_exist') : 0;
        var ios_already_exist = (AviviD.get_cookie('AviviD_waterfall_status') != null) ? AviviD.get_cookie('AviviD_waterfall_status') : 0;

        // // if (window.jQuery) {
        //     if (AviviD.web_id == 'ctnews' ||
        //     AviviD.web_id == 'commonhealth' ||
        //     AviviD.web_id == 'upmedia' ||
        //     AviviD.web_id == 'babyhome' ||
        //     AviviD.web_id == 'btnet' ||
        //     AviviD.web_id == 'mirrormedia' ||
        //     AviviD.web_id == 'hiking' ||
        //     AviviD.web_id == 'nongnong' ||
        //     AviviD.web_id == 'running' ||
        //     AviviD.web_id == 'talk' ||
        //     AviviD.web_id == 'howtravel') {
        //         if (already_exist === '1') {
        //             AviviD.url_to_uuid('2', '0');   //如果是原生訂閱者landing
        //         } else if (ios_already_exist === '1') {
        //             AviviD.url_to_uuid('1', '0');   //如果是ios訂閱者landing
        //         } else {
        //             AviviD.url_to_uuid('0', '0');   //無訂閱者landing
        //         }
        //         AviviD.ios_landing();
        //         // console.log('in');
        //     } else {
        //         // console.log('out');
        //     }
        // }
        // else {
        //     setTimeout(function () { AviviD.visit_again() }, 500);
        // }
    }
    // ABtest
    AviviD.abtest = function () {
        if(AviviD.debug_mode == 1){
            console.log('abtest debug mode on');
            return false;
        }
        let avivid_abtest_web_id = [
                                    '20180511000001',
                                    '20200709000001'
                                ];
        let reverse_abtest = [];

        if (avivid_abtest_web_id.includes(AviviD.category_id)){
            let avivid_Today=new Date();
            if (avivid_Today.getDate() % 2 == 0){
                console.log('Even');
                if (reverse_abtest.includes(AviviD.category_id)){
                    // 偶數天開
                    console.log('reverse_abtest');
                    return false;
                }
                // 偶數天關
                return true;
            }
            else{
                console.log('Odd');
                if (reverse_abtest.includes(AviviD.category_id)){
                    //奇數天關
                    console.log('reverse_abtest');
                    return true;
                }
                // 奇數天開
                return false;
            }
        }
        else{
            console.log('Not in abtest web_id.')
            return false;
        }
    }
    // 如果頁面上有影音版位，則不推播(目前ettoday使用)
    AviviD.video_page_filter = function(){
        var ettoday_video_block_url = [
            'youtube.com',
            'livestream.com',
            'ettoday.net/source/tools/stream_player/',
            'ettoday.net/source/tools/player/',
            'facebook.com/plugins/video.php',
            'player.vimeo.com',
            'twitter.com',
            'vlog.xuite.net/embed/',
            'embed.ted.com'
        ];
        var ettoday_el = document.getElementsByTagName('iframe');
        var iframe_src = '';
        var enable = true;
        for(var i=0; i<ettoday_el.length; i++){
            iframe_src = ettoday_el[i].src;
            ettoday_video_block_url.forEach(function(element){
                if(enable != false){
                    if(iframe_src.indexOf(element) != -1 && element != ''){ //如果頁面有影音，則關閉enable
                        if(window.location.href.indexOf('AviviD_debug_mode=1') != -1){console.log('判斷頁面有影音版位，關閉推播!');}
                        enable = false;
                    }
                }
            });
            if(enable == false){
                break;
            }
        }
        return enable;
    }
    // AviviD.visit_again();
    // 20201029上線於howtravel BounceRate 優化
    // 20201126 i3fresh
    // 20201223 all 電商
    if(AviviD.settings.website_type=='3'){
        AviviD.BounceRate = function(){
            AviviD.BounceRate_flag = false;
            if(window.location.href.indexOf('utm_source=likr') != '-1'){
                window.addEventListener('scroll', function(e) {
                    let scrollTop = document.documentElement.scrollTop || window.pageYOfset ||document.body.scrollTop;
                    let body = document.body;
                    let html = document.documentElement;
                    let height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
                    if(scrollTop >= height*0.25 && !AviviD.BounceRate_flag){
                        if(typeof(ga) != 'undefined'){
                            ga('send', 'event', {
                                eventCategory: 'likr_view',
                                eventAction: 'view',
                                eventLabel: '30%'
                            });
                            // console.log('ga事件送出！');
                        }
                        if(typeof(gtag) != 'undefined'){
                            gtag('event', 'view', {
                                'event_category': 'likr_view',
                                'event_label': '30%'
                            });
                            // console.log('gtag事件送出！');
                        }
                        AviviD.BounceRate_flag = true;
                    }
                })
            }
        }
        AviviD.BounceRate();
    }

    })();