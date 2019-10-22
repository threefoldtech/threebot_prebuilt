window.___socket_io___ = window.io;
window.__momentjs__ = window.moment;
window.__remarkablejs__ = window.Remarkable;
window.__dompurify__ = window.DOMPurify;
window.__toMarkdown__ = window.toMarkdown;
window.__Marionette__ = window.Marionette;
window.__Mn__ = window.Mn;

if (window.define) {
  window.__define__ = window.define;
  window.define = undefined;
}
if (window.exports) {
  window.__exports__ = window.exports;
  window.exports = undefined;
}
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});
//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function(){var n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this||{},r=n._,e=Array.prototype,o=Object.prototype,s="undefined"!=typeof Symbol?Symbol.prototype:null,u=e.push,c=e.slice,p=o.toString,i=o.hasOwnProperty,t=Array.isArray,a=Object.keys,l=Object.create,f=function(){},h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"==typeof exports||exports.nodeType?n._=h:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=h),exports._=h),h.VERSION="1.9.1";var v,y=function(u,i,n){if(void 0===i)return u;switch(null==n?3:n){case 1:return function(n){return u.call(i,n)};case 3:return function(n,r,t){return u.call(i,n,r,t)};case 4:return function(n,r,t,e){return u.call(i,n,r,t,e)}}return function(){return u.apply(i,arguments)}},d=function(n,r,t){return h.iteratee!==v?h.iteratee(n,r):null==n?h.identity:h.isFunction(n)?y(n,r,t):h.isObject(n)&&!h.isArray(n)?h.matcher(n):h.property(n)};h.iteratee=v=function(n,r){return d(n,r,1/0)};var g=function(u,i){return i=null==i?u.length-1:+i,function(){for(var n=Math.max(arguments.length-i,0),r=Array(n),t=0;t<n;t++)r[t]=arguments[t+i];switch(i){case 0:return u.call(this,r);case 1:return u.call(this,arguments[0],r);case 2:return u.call(this,arguments[0],arguments[1],r)}var e=Array(i+1);for(t=0;t<i;t++)e[t]=arguments[t];return e[i]=r,u.apply(this,e)}},m=function(n){if(!h.isObject(n))return{};if(l)return l(n);f.prototype=n;var r=new f;return f.prototype=null,r},b=function(r){return function(n){return null==n?void 0:n[r]}},j=function(n,r){return null!=n&&i.call(n,r)},x=function(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0},_=Math.pow(2,53)-1,A=b("length"),w=function(n){var r=A(n);return"number"==typeof r&&0<=r&&r<=_};h.each=h.forEach=function(n,r,t){var e,u;if(r=y(r,t),w(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=r(n[a],a,n)}return i};var O=function(c){return function(n,r,t,e){var u=3<=arguments.length;return function(n,r,t,e){var u=!w(n)&&h.keys(n),i=(u||n).length,o=0<c?0:i-1;for(e||(t=n[u?u[o]:o],o+=c);0<=o&&o<i;o+=c){var a=u?u[o]:o;t=r(t,n[a],a,n)}return t}(n,y(r,e,4),t,u)}};h.reduce=h.foldl=h.inject=O(1),h.reduceRight=h.foldr=O(-1),h.find=h.detect=function(n,r,t){var e=(w(n)?h.findIndex:h.findKey)(n,r,t);if(void 0!==e&&-1!==e)return n[e]},h.filter=h.select=function(n,e,r){var u=[];return e=d(e,r),h.each(n,function(n,r,t){e(n,r,t)&&u.push(n)}),u},h.reject=function(n,r,t){return h.filter(n,h.negate(d(r)),t)},h.every=h.all=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!r(n[o],o,n))return!1}return!0},h.some=h.any=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(r(n[o],o,n))return!0}return!1},h.contains=h.includes=h.include=function(n,r,t,e){return w(n)||(n=h.values(n)),("number"!=typeof t||e)&&(t=0),0<=h.indexOf(n,r,t)},h.invoke=g(function(n,t,e){var u,i;return h.isFunction(t)?i=t:h.isArray(t)&&(u=t.slice(0,-1),t=t[t.length-1]),h.map(n,function(n){var r=i;if(!r){if(u&&u.length&&(n=x(n,u)),null==n)return;r=n[t]}return null==r?r:r.apply(n,e)})}),h.pluck=function(n,r){return h.map(n,h.property(r))},h.where=function(n,r){return h.filter(n,h.matcher(r))},h.findWhere=function(n,r){return h.find(n,h.matcher(r))},h.max=function(n,e,r){var t,u,i=-1/0,o=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=w(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&i<t&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){u=e(n,r,t),(o<u||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},h.min=function(n,e,r){var t,u,i=1/0,o=1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=w(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&t<i&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){((u=e(n,r,t))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},h.shuffle=function(n){return h.sample(n,1/0)},h.sample=function(n,r,t){if(null==r||t)return w(n)||(n=h.values(n)),n[h.random(n.length-1)];var e=w(n)?h.clone(n):h.values(n),u=A(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,o=0;o<r;o++){var a=h.random(o,i),c=e[o];e[o]=e[a],e[a]=c}return e.slice(0,r)},h.sortBy=function(n,e,r){var u=0;return e=d(e,r),h.pluck(h.map(n,function(n,r,t){return{value:n,index:u++,criteria:e(n,r,t)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(e<t||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index}),"value")};var k=function(o,r){return function(e,u,n){var i=r?[[],[]]:{};return u=d(u,n),h.each(e,function(n,r){var t=u(n,r,e);o(i,n,t)}),i}};h.groupBy=k(function(n,r,t){j(n,t)?n[t].push(r):n[t]=[r]}),h.indexBy=k(function(n,r,t){n[t]=r}),h.countBy=k(function(n,r,t){j(n,t)?n[t]++:n[t]=1});var S=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;h.toArray=function(n){return n?h.isArray(n)?c.call(n):h.isString(n)?n.match(S):w(n)?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:w(n)?n.length:h.keys(n).length},h.partition=k(function(n,r,t){n[t?0:1].push(r)},!0),h.first=h.head=h.take=function(n,r,t){return null==n||n.length<1?null==r?void 0:[]:null==r||t?n[0]:h.initial(n,n.length-r)},h.initial=function(n,r,t){return c.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))},h.last=function(n,r,t){return null==n||n.length<1?null==r?void 0:[]:null==r||t?n[n.length-1]:h.rest(n,Math.max(0,n.length-r))},h.rest=h.tail=h.drop=function(n,r,t){return c.call(n,null==r||t?1:r)},h.compact=function(n){return h.filter(n,Boolean)};var M=function(n,r,t,e){for(var u=(e=e||[]).length,i=0,o=A(n);i<o;i++){var a=n[i];if(w(a)&&(h.isArray(a)||h.isArguments(a)))if(r)for(var c=0,l=a.length;c<l;)e[u++]=a[c++];else M(a,r,t,e),u=e.length;else t||(e[u++]=a)}return e};h.flatten=function(n,r){return M(n,r,!1)},h.without=g(function(n,r){return h.difference(n,r)}),h.uniq=h.unique=function(n,r,t,e){h.isBoolean(r)||(e=t,t=r,r=!1),null!=t&&(t=d(t,e));for(var u=[],i=[],o=0,a=A(n);o<a;o++){var c=n[o],l=t?t(c,o,n):c;r&&!t?(o&&i===l||u.push(c),i=l):t?h.contains(i,l)||(i.push(l),u.push(c)):h.contains(u,c)||u.push(c)}return u},h.union=g(function(n){return h.uniq(M(n,!0,!0))}),h.intersection=function(n){for(var r=[],t=arguments.length,e=0,u=A(n);e<u;e++){var i=n[e];if(!h.contains(r,i)){var o;for(o=1;o<t&&h.contains(arguments[o],i);o++);o===t&&r.push(i)}}return r},h.difference=g(function(n,r){return r=M(r,!0,!0),h.filter(n,function(n){return!h.contains(r,n)})}),h.unzip=function(n){for(var r=n&&h.max(n,A).length||0,t=Array(r),e=0;e<r;e++)t[e]=h.pluck(n,e);return t},h.zip=g(h.unzip),h.object=function(n,r){for(var t={},e=0,u=A(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t};var F=function(i){return function(n,r,t){r=d(r,t);for(var e=A(n),u=0<i?0:e-1;0<=u&&u<e;u+=i)if(r(n[u],u,n))return u;return-1}};h.findIndex=F(1),h.findLastIndex=F(-1),h.sortedIndex=function(n,r,t,e){for(var u=(t=d(t,e,1))(r),i=0,o=A(n);i<o;){var a=Math.floor((i+o)/2);t(n[a])<u?i=a+1:o=a}return i};var E=function(i,o,a){return function(n,r,t){var e=0,u=A(n);if("number"==typeof t)0<i?e=0<=t?t:Math.max(t+u,e):u=0<=t?Math.min(t+1,u):t+u+1;else if(a&&t&&u)return n[t=a(n,r)]===r?t:-1;if(r!=r)return 0<=(t=o(c.call(n,e,u),h.isNaN))?t+e:-1;for(t=0<i?e:u-1;0<=t&&t<u;t+=i)if(n[t]===r)return t;return-1}};h.indexOf=E(1,h.findIndex,h.sortedIndex),h.lastIndexOf=E(-1,h.findLastIndex),h.range=function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u},h.chunk=function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(c.call(n,e,e+=r));return t};var N=function(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=m(n.prototype),o=n.apply(i,u);return h.isObject(o)?o:i};h.bind=g(function(r,t,e){if(!h.isFunction(r))throw new TypeError("Bind must be called on a function");var u=g(function(n){return N(r,u,t,this,e.concat(n))});return u}),h.partial=g(function(u,i){var o=h.partial.placeholder,a=function(){for(var n=0,r=i.length,t=Array(r),e=0;e<r;e++)t[e]=i[e]===o?arguments[n++]:i[e];for(;n<arguments.length;)t.push(arguments[n++]);return N(u,a,this,this,t)};return a}),(h.partial.placeholder=h).bindAll=g(function(n,r){var t=(r=M(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=h.bind(n[e],n)}}),h.memoize=function(e,u){var i=function(n){var r=i.cache,t=""+(u?u.apply(this,arguments):n);return j(r,t)||(r[t]=e.apply(this,arguments)),r[t]};return i.cache={},i},h.delay=g(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),h.defer=h.partial(h.delay,h,1),h.throttle=function(t,e,u){var i,o,a,c,l=0;u||(u={});var f=function(){l=!1===u.leading?0:h.now(),i=null,c=t.apply(o,a),i||(o=a=null)},n=function(){var n=h.now();l||!1!==u.leading||(l=n);var r=e-(n-l);return o=this,a=arguments,r<=0||e<r?(i&&(clearTimeout(i),i=null),l=n,c=t.apply(o,a),i||(o=a=null)):i||!1===u.trailing||(i=setTimeout(f,r)),c};return n.cancel=function(){clearTimeout(i),l=0,i=o=a=null},n},h.debounce=function(t,e,u){var i,o,a=function(n,r){i=null,r&&(o=t.apply(n,r))},n=g(function(n){if(i&&clearTimeout(i),u){var r=!i;i=setTimeout(a,e),r&&(o=t.apply(this,n))}else i=h.delay(a,e,this,n);return o});return n.cancel=function(){clearTimeout(i),i=null},n},h.wrap=function(n,r){return h.partial(r,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},h.after=function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},h.before=function(n,r){var t;return function(){return 0<--n&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}},h.once=h.partial(h.before,2),h.restArguments=g;var I=!{toString:null}.propertyIsEnumerable("toString"),T=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],B=function(n,r){var t=T.length,e=n.constructor,u=h.isFunction(e)&&e.prototype||o,i="constructor";for(j(n,i)&&!h.contains(r,i)&&r.push(i);t--;)(i=T[t])in n&&n[i]!==u[i]&&!h.contains(r,i)&&r.push(i)};h.keys=function(n){if(!h.isObject(n))return[];if(a)return a(n);var r=[];for(var t in n)j(n,t)&&r.push(t);return I&&B(n,r),r},h.allKeys=function(n){if(!h.isObject(n))return[];var r=[];for(var t in n)r.push(t);return I&&B(n,r),r},h.values=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e},h.mapObject=function(n,r,t){r=d(r,t);for(var e=h.keys(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=r(n[a],a,n)}return i},h.pairs=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},h.invert=function(n){for(var r={},t=h.keys(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r},h.functions=h.methods=function(n){var r=[];for(var t in n)h.isFunction(n[t])&&r.push(t);return r.sort()};var R=function(c,l){return function(n){var r=arguments.length;if(l&&(n=Object(n)),r<2||null==n)return n;for(var t=1;t<r;t++)for(var e=arguments[t],u=c(e),i=u.length,o=0;o<i;o++){var a=u[o];l&&void 0!==n[a]||(n[a]=e[a])}return n}};h.extend=R(h.allKeys),h.extendOwn=h.assign=R(h.keys),h.findKey=function(n,r,t){r=d(r,t);for(var e,u=h.keys(n),i=0,o=u.length;i<o;i++)if(r(n[e=u[i]],e,n))return e};var q,K,z=function(n,r,t){return r in t};h.pick=g(function(n,r){var t={},e=r[0];if(null==n)return t;h.isFunction(e)?(1<r.length&&(e=y(e,r[1])),r=h.allKeys(n)):(e=z,r=M(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var o=r[u],a=n[o];e(a,o,n)&&(t[o]=a)}return t}),h.omit=g(function(n,t){var r,e=t[0];return h.isFunction(e)?(e=h.negate(e),1<t.length&&(r=t[1])):(t=h.map(M(t,!1,!1),String),e=function(n,r){return!h.contains(t,r)}),h.pick(n,e,r)}),h.defaults=R(h.allKeys,!0),h.create=function(n,r){var t=m(n);return r&&h.extendOwn(t,r),t},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,r){return r(n),n},h.isMatch=function(n,r){var t=h.keys(r),e=t.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=t[i];if(r[o]!==u[o]||!(o in u))return!1}return!0},q=function(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var u=typeof n;return("function"===u||"object"===u||"object"==typeof r)&&K(n,r,t,e)},K=function(n,r,t,e){n instanceof h&&(n=n._wrapped),r instanceof h&&(r=r._wrapped);var u=p.call(n);if(u!==p.call(r))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:0==+n?1/+n==1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return s.valueOf.call(n)===s.valueOf.call(r)}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof r)return!1;var o=n.constructor,a=r.constructor;if(o!==a&&!(h.isFunction(o)&&o instanceof o&&h.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in r)return!1}e=e||[];for(var c=(t=t||[]).length;c--;)if(t[c]===n)return e[c]===r;if(t.push(n),e.push(r),i){if((c=n.length)!==r.length)return!1;for(;c--;)if(!q(n[c],r[c],t,e))return!1}else{var l,f=h.keys(n);if(c=f.length,h.keys(r).length!==c)return!1;for(;c--;)if(l=f[c],!j(r,l)||!q(n[l],r[l],t,e))return!1}return t.pop(),e.pop(),!0},h.isEqual=function(n,r){return q(n,r)},h.isEmpty=function(n){return null==n||(w(n)&&(h.isArray(n)||h.isString(n)||h.isArguments(n))?0===n.length:0===h.keys(n).length)},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=t||function(n){return"[object Array]"===p.call(n)},h.isObject=function(n){var r=typeof n;return"function"===r||"object"===r&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(r){h["is"+r]=function(n){return p.call(n)==="[object "+r+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return j(n,"callee")});var D=n.document&&n.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof D&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return!h.isSymbol(n)&&isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&isNaN(n)},h.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"===p.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return void 0===n},h.has=function(n,r){if(!h.isArray(r))return j(n,r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(null==n||!i.call(n,u))return!1;n=n[u]}return!!t},h.noConflict=function(){return n._=r,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(r){return h.isArray(r)?function(n){return x(n,r)}:b(r)},h.propertyOf=function(r){return null==r?function(){}:function(n){return h.isArray(n)?x(r,n):r[n]}},h.matcher=h.matches=function(r){return r=h.extendOwn({},r),function(n){return h.isMatch(n,r)}},h.times=function(n,r,t){var e=Array(Math.max(0,n));r=y(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},h.random=function(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var L={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},P=h.invert(L),W=function(r){var t=function(n){return r[n]},n="(?:"+h.keys(r).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=W(L),h.unescape=W(P),h.result=function(n,r,t){h.isArray(r)||(r=[r]);var e=r.length;if(!e)return h.isFunction(t)?t.call(n):t;for(var u=0;u<e;u++){var i=null==n?void 0:n[r[u]];void 0===i&&(i=t,u=e),n=h.isFunction(i)?i.call(n):i}return n};var C=0;h.uniqueId=function(n){var r=++C+"";return n?n+r:r},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var J=/(.)^/,U={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},V=/\\|'|\r|\n|\u2028|\u2029/g,$=function(n){return"\\"+U[n]};h.template=function(i,n,r){!n&&r&&(n=r),n=h.defaults({},n,h.templateSettings);var t,e=RegExp([(n.escape||J).source,(n.interpolate||J).source,(n.evaluate||J).source].join("|")+"|$","g"),o=0,a="__p+='";i.replace(e,function(n,r,t,e,u){return a+=i.slice(o,u).replace(V,$),o=u+n.length,r?a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":t?a+="'+\n((__t=("+t+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{t=new Function(n.variable||"obj","_",a)}catch(n){throw n.source=a,n}var u=function(n){return t.call(this,n,h)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},h.chain=function(n){var r=h(n);return r._chain=!0,r};var G=function(n,r){return n._chain?h(r).chain():r};h.mixin=function(t){return h.each(h.functions(t),function(n){var r=h[n]=t[n];h.prototype[n]=function(){var n=[this._wrapped];return u.apply(n,arguments),G(this,r.apply(h,n))}}),h},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=e[r];h.prototype[r]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==r&&"splice"!==r||0!==n.length||delete n[0],G(this,n)}}),h.each(["concat","join","slice"],function(n){var r=e[n];h.prototype[n]=function(){return G(this,r.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},h.prototype.valueOf=h.prototype.toJSON=h.prototype.value,h.prototype.toString=function(){return String(this._wrapped)},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}();
// Backbone.js 1.3.3
(function(t){var e=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.3.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],o(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],o(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var h=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var o=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return l(t);if(i.isString(t))return function(e){return e.get(t)};return t};var l=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var u=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,h;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(h=i.keys(r);a<h.length;a++){e=f(t,e,h[a],r[h[a]],s)}}else if(r&&c.test(r)){for(h=r.split(c);a<h.length;a++){e=t(e,h[a],n,s)}}else{e=t(e,r,n,s)}return e};u.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};u.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var h=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:h,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,h=r.listening;if(h)h.count++;n.push({callback:i,context:s,ctx:s||a,listening:h})}return t};u.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};u.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var h=n[s[a]];if(!h)break;h.obj.off(e,r,this)}return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var h=n.context,o=n.listeners;if(!e&&!r&&!h){var l=i.keys(o);for(;s<l.length;s++){a=o[l[s]];delete o[a.id];delete a.listeningTo[a.objId]}return}var u=e?[e]:i.keys(t);for(;s<u.length;s++){e=u[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||h&&h!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete o[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}return t};u.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));if(typeof t==="string"&&r==null)e=void 0;return this.on(n,e,r)};u.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};u.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,h);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};u.bind=u.on;u.unbind=u.off;i.extend(e,u);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};var n=i.result(this,"defaults");r=i.defaults(i.extend({},n,r),n);this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,u,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var h=[];var o=this._changing;this._changing=true;if(!o){this._previousAttributes=i.clone(this.attributes);this.changed={}}var l=this.attributes;var u=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(l[f],e))h.push(f);if(!i.isEqual(c[f],e)){u[f]=e}else{delete u[f]}s?delete l[f]:l[f]=e}if(this.idAttribute in n)this.id=this.get(this.idAttribute);if(!a){if(h.length)this._pending=r;for(var d=0;d<h.length;d++){this.trigger("change:"+h[d],this,l[h[d]],r)}}if(o)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};B(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else if(!this._validate(n,r)){return false}var a=this;var h=r.success;var o=this.attributes;r.success=function(t){a.attributes=o;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(h)h.call(r.context,a,t,r);a.trigger("sync",a,t,r)};B(this,r);if(n&&s)this.attributes=i.extend({},o,n);var l=this.isNew()?"create":r.patch?"patch":"update";if(l==="patch"&&!r.attrs)r.attrs=n;var u=this.sync(l,this,r);this.attributes=o;return u},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{B(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend({},t,{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};h(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var I=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;var s;for(s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,u,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=this._removeModels(t,e);if(!e.silent&&n.length){e.changes={added:[],merged:[],removed:n};this.trigger("update",this,e)}return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.extend({},w,e);if(e.parse&&!this._isModel(t)){t=this.parse(t,e)||[]}var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n>this.length)n=this.length;if(n<0)n+=this.length+1;var s=[];var a=[];var h=[];var o=[];var l={};var u=e.add;var c=e.merge;var f=e.remove;var d=false;var v=this.comparator&&n==null&&e.sort!==false;var g=i.isString(this.comparator)?this.comparator:null;var p,m;for(m=0;m<t.length;m++){p=t[m];var _=this.get(p);if(_){if(c&&p!==_){var y=this._isModel(p)?p.attributes:p;if(e.parse)y=_.parse(y,e);_.set(y,e);h.push(_);if(v&&!d)d=_.hasChanged(g)}if(!l[_.cid]){l[_.cid]=true;s.push(_)}t[m]=_}else if(u){p=t[m]=this._prepareModel(p,e);if(p){a.push(p);this._addReference(p,e);l[p.cid]=true;s.push(p)}}}if(f){for(m=0;m<this.length;m++){p=this.models[m];if(!l[p.cid])o.push(p)}if(o.length)this._removeModels(o,e)}var b=false;var x=!v&&u&&f;if(s.length&&x){b=this.length!==s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;I(this.models,s,0);this.length=this.models.length}else if(a.length){if(v)d=true;I(this.models,a,n==null?this.length:n);this.length=this.models.length}if(d)this.sort({silent:true});if(!e.silent){for(m=0;m<a.length;m++){if(n!=null)e.index=n+m;p=a[m];p.trigger("add",p,this,e)}if(d||b)this.trigger("sort",this,e);if(a.length||o.length||h.length){e.changes={added:a,removed:o,merged:h};this.trigger("update",this,e)}}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[this.modelId(t.attributes||t)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.map(t+"")},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};B(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;delete this._byId[n.cid];var a=this.modelId(n.attributes);if(a!=null)delete this._byId[a];if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};h(x,S,"models");var k=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(k.prototype,u,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var h=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(h)return h.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var o=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(o)o.call(n.context,t,e,i)};var l=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,l,n);return l};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,u,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var M=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;N.started=false;i.extend(N.prototype,u,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(M,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");N.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!N.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new N;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);n.prototype=i.create(r.prototype,t);n.prototype.constructor=n;n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=k.extend=N.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var B=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});
// Backbone.Radio v2.0.0
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("underscore"),require("backbone")):"function"==typeof define&&define.amd?define(["underscore","backbone"],n):(e.Backbone=e.Backbone||{},e.Backbone.Radio=n(e._,e.Backbone))}(this,function(e,n){"use strict";function t(e,n,t,r){var o=e[n];if(!(t&&t!==o.callback&&t!==o.callback._callback||r&&r!==o.context))return delete e[n],!0}function r(n,r,o,i){n||(n={});for(var s=r?[r]:e.keys(n),u=!1,c=0,a=s.length;c<a;c++)r=s[c],n[r]&&t(n,r,o,i)&&(u=!0);return u}function o(n){return l[n]||(l[n]=e.bind(c.log,c,n))}function i(n){return e.isFunction(n)?n:function(){return n}}e="default"in e?e["default"]:e,n="default"in n?n["default"]:n;var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},u=n.Radio,c=n.Radio={};c.VERSION="2.0.0",c.noConflict=function(){return n.Radio=u,this},c.DEBUG=!1,c._debugText=function(e,n,t){return e+(t?" on the "+t+" channel":"")+': "'+n+'"'},c.debugLog=function(e,n,t){c.DEBUG&&console&&console.warn&&console.warn(c._debugText(e,n,t))};var a=/\s+/;c._eventsApi=function(n,t,r,o){if(!r)return!1;var i={};if("object"===("undefined"==typeof r?"undefined":s(r))){for(var u in r){var c=n[t].apply(n,[u,r[u]].concat(o));a.test(u)?e.extend(i,c):i[u]=c}return i}if(a.test(r)){for(var l=r.split(a),f=0,h=l.length;f<h;f++)i[l[f]]=n[t].apply(n,[l[f]].concat(o));return i}return!1},c._callHandler=function(e,n,t){var r=t[0],o=t[1],i=t[2];switch(t.length){case 0:return e.call(n);case 1:return e.call(n,r);case 2:return e.call(n,r,o);case 3:return e.call(n,r,o,i);default:return e.apply(n,t)}};var l={};e.extend(c,{log:function(n,t){if("undefined"!=typeof console){var r=e.toArray(arguments).slice(2);console.log("["+n+'] "'+t+'"',r)}},tuneIn:function(e){var n=c.channel(e);return n._tunedIn=!0,n.on("all",o(e)),this},tuneOut:function(e){var n=c.channel(e);return n._tunedIn=!1,n.off("all",o(e)),delete l[e],this}}),c.Requests={request:function(n){var t=e.toArray(arguments).slice(1),r=c._eventsApi(this,"request",n,t);if(r)return r;var o=this.channelName,i=this._requests;if(o&&this._tunedIn&&c.log.apply(this,[o,n].concat(t)),i&&(i[n]||i["default"])){var s=i[n]||i["default"];return t=i[n]?t:arguments,c._callHandler(s.callback,s.context,t)}c.debugLog("An unhandled request was fired",n,o)},reply:function(e,n,t){return c._eventsApi(this,"reply",e,[n,t])?this:(this._requests||(this._requests={}),this._requests[e]&&c.debugLog("A request was overwritten",e,this.channelName),this._requests[e]={callback:i(n),context:t||this},this)},replyOnce:function(n,t,r){if(c._eventsApi(this,"replyOnce",n,[t,r]))return this;var o=this,s=e.once(function(){return o.stopReplying(n),i(t).apply(this,arguments)});return this.reply(n,s,r)},stopReplying:function(e,n,t){return c._eventsApi(this,"stopReplying",e)?this:(e||n||t?r(this._requests,e,n,t)||c.debugLog("Attempted to remove the unregistered request",e,this.channelName):delete this._requests,this)}},c._channels={},c.channel=function(e){if(!e)throw new Error("You must provide a name for the channel.");return c._channels[e]?c._channels[e]:c._channels[e]=new c.Channel(e)},c.Channel=function(e){this.channelName=e},e.extend(c.Channel.prototype,n.Events,c.Requests,{reset:function(){return this.off(),this.stopListening(),this.stopReplying(),this}});var f,h,d=[n.Events,c.Requests];return e.each(d,function(n){e.each(n,function(n,t){c[t]=function(n){return h=e.toArray(arguments).slice(1),f=this.channel(n),f[t].apply(f,h)}})}),c.reset=function(n){var t=n?[this._channels[n]]:this._channels;e.each(t,function(e){e.reset()})},c});
/**
* @license
* MarionetteJS (Backbone.Marionette)
* ----------------------------------
* v3.5.1
*
* Copyright (c)2017 Derick Bailey, Muted Solutions, LLC.
* Distributed under MIT license
*
* http://marionettejs.com
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("backbone"),require("underscore"),require("backbone.radio")):"function"==typeof define&&define.amd?define(["backbone","underscore","backbone.radio"],t):e.Marionette=t(e.Backbone,e._,e.Backbone.Radio)}(this,function(e,t,i){"use strict";function n(e,t,i){return i.toUpperCase()}function s(e){for(var i=arguments.length,n=Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];var r=K(e),o=N.call(this,r),h=void 0;return t.isFunction(o)&&(h=o.apply(this,n)),this.trigger.apply(this,arguments),h}function r(e){for(var i=arguments.length,n=Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return t.isFunction(e.triggerMethod)?e.triggerMethod.apply(e,n):s.apply(e,n)}function o(e,i,n){e._getImmediateChildren&&t.each(e._getImmediateChildren(),function(e){n(e)&&r(e,i,e)})}function h(e){return!e._isAttached}function d(e){return!!h(e)&&(e._isAttached=!0,!0)}function l(e){return e._isAttached}function a(e){return!!l(e)&&(e._isAttached=!1,!0)}function c(e){e._isAttached&&e._isRendered&&r(e,"dom:refresh",e)}function u(e){e._isAttached&&e._isRendered&&r(e,"dom:remove",e)}function f(){o(this,"before:attach",h)}function _(){o(this,"attach",d),c(this)}function p(){o(this,"before:detach",l),u(this)}function g(){o(this,"detach",a)}function v(){u(this)}function m(){c(this)}function w(e){e._areViewEventsMonitored||!1===e.monitorViewEvents||(e._areViewEventsMonitored=!0,e.on({"before:attach":f,attach:_,"before:detach":p,detach:g,"before:render":v,render:m}))}function y(e,i,n,s,r){var o=s.split(/\s+/);o.length>1&&z("Multiple handlers for a single event are deprecated. If needed, use a single handler to call multiple methods."),t.each(o,function(t){var s=e[t];if(!s)throw new Y('Method "'+t+'" was configured as an event handler, but does not exist.');e[r](i,n,s)})}function C(e,i,n,s){if(!t.isObject(n))throw new Y({message:"Bindings must be an object.",url:"marionette.functions.html#marionettebindevents"});t.each(n,function(n,r){t.isString(n)?y(e,i,r,n,s):e[s](i,r,n)})}function V(e,t){return e&&t?(C(this,e,t,"listenTo"),this):this}function E(e,t){return e?t?(C(this,e,t,"stopListening"),this):(this.stopListening(e),this):this}function b(e,i,n,s){if(!t.isObject(n))throw new Y({message:"Bindings must be an object.",url:"marionette.functions.html#marionettebindrequests"});var r=H.call(e,n);i[s](r,e)}function M(e,t){return e&&t?(b(this,e,t,"reply"),this):this}function R(e,t){return e?t?(b(this,e,t,"stopReplying"),this):(e.stopReplying(null,null,this),this):this}function B(e,i){return e.behaviorClass?e.behaviorClass:t.isFunction(e)?e:t.isFunction(Le.Behaviors.behaviorsLookup)?Le.Behaviors.behaviorsLookup(e,i)[i]:Le.Behaviors.behaviorsLookup[i]}function x(e,i){return t.chain(i).map(function(i,n){var s=B(i,n),r=new s(i===s?{}:i,e),o=x(e,t.result(r,"behaviors"));return[r].concat(o)}).flatten().value()}function D(e){return!!re[e]}function A(e,i){t.isString(i)&&(i={event:i});var n=i.event,s=!!i.preventDefault;D("triggersPreventDefault")&&(s=!1!==i.preventDefault);var r=!!i.stopPropagation;return D("triggersStopPropagation")&&(r=!1!==i.stopPropagation),function(t){s&&t.preventDefault(),r&&t.stopPropagation(),e.triggerMethod(n,e,t)}}function O(t){return t instanceof e.$?t:e.$(t)}function I(e){return this.prototype.Dom=t.extend({},this.prototype.Dom,e),this}function $(e){e._isRendered||(e.supportsRenderLifecycle||r(e,"before:render",e),e.render(),e.supportsRenderLifecycle||(e._isRendered=!0,r(e,"render",e)))}function T(e){if(e.destroy)e.destroy();else{e.supportsDestroyLifecycle||r(e,"before:destroy",e);var t=e._isAttached&&!e._shouldDisableEvents;t&&r(e,"before:detach",e),e.remove(),t&&(e._isAttached=!1,r(e,"detach",e)),e._isDestroyed=!0,e.supportsDestroyLifecycle||r(e,"destroy",e)}}function U(e,i){var n=t.extend({},i);if(t.isString(e))return t.extend(n,{el:e}),S(n);if(t.isFunction(e))return t.extend(n,{regionClass:e}),S(n);if(t.isObject(e))return e.selector&&z("The selector option on a Region definition object is deprecated. Use el to pass a selector string"),t.extend(n,{el:e.selector},e),S(n);throw new Y({message:"Improper region configuration type.",url:"marionette.region.html#region-configuration-types"})}function S(e){return new(0,e.regionClass)(t.omit(e,"regionClass"))}function F(e,t){return t.model&&t.model.get(e)}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,i=i&&i.hasOwnProperty("default")?i.default:i;var L=function(e){return function(t){for(var i=arguments.length,n=Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];return e.apply(t,n)}},P=e.Model.extend,z=function e(i,n){t.isObject(i)&&(i=i.prev+" is going to be removed in the future. Please use "+i.next+" instead."+(i.url?" See: "+i.url:"")),Le.DEV_MODE&&(void 0!==n&&n||e._cache[i]||(e._warn("Deprecation warning: "+i),e._cache[i]=!0))};z._console="undefined"!=typeof console?console:{},z._warn=function(){return(z._console.warn||z._console.log||t.noop).apply(z._console,arguments)},z._cache={};var k=function(e){return document.documentElement.contains(e&&e.parentNode)},j=function(e,i){var n=this;e&&t.each(i,function(t){var i=e[t];void 0!==i&&(n[t]=i)})},N=function(e){if(e)return this.options&&void 0!==this.options[e]?this.options[e]:this[e]},H=function(e){var i=this;return t.reduce(e,function(e,n,s){return t.isFunction(n)||(n=i[n]),n&&(e[s]=n),e},{})},q=/(^|:)(\w)/gi,K=t.memoize(function(e){return"on"+e.replace(q,n)}),W=["description","fileName","lineNumber","name","message","number"],Y=P.call(Error,{urlRoot:"http://marionettejs.com/docs/v3.5.1/",constructor:function(e,i){t.isObject(e)?e=(i=e).message:i||(i={});var n=Error.call(this,e);t.extend(this,t.pick(n,W),t.pick(i,W)),this.captureStackTrace(),i.url&&(this.url=this.urlRoot+i.url)},captureStackTrace:function(){Error.captureStackTrace&&Error.captureStackTrace(this,Y)},toString:function(){return this.name+": "+this.message+(this.url?" See: "+this.url:"")}});Y.extend=P;var Z={normalizeMethods:H,_setOptions:function(e){this.options=t.extend({},t.result(this,"options"),e)},mergeOptions:j,getOption:N,bindEvents:V,unbindEvents:E},G={_initRadio:function(){var e=t.result(this,"channelName");if(e){if(!i)throw new Y({name:"BackboneRadioMissing",message:'The dependency "backbone.radio" is missing.'});var n=this._channel=i.channel(e),s=t.result(this,"radioEvents");this.bindEvents(n,s);var r=t.result(this,"radioRequests");this.bindRequests(n,r),this.on("destroy",this._destroyRadio)}},_destroyRadio:function(){this._channel.stopReplying(null,null,this)},getChannel:function(){return this._channel},bindEvents:V,unbindEvents:E,bindRequests:M,unbindRequests:R},J=["channelName","radioEvents","radioRequests"],Q=function(e){this.hasOwnProperty("options")||this._setOptions(e),this.mergeOptions(e,J),this._setCid(),this._initRadio(),this.initialize.apply(this,arguments)};Q.extend=P,t.extend(Q.prototype,e.Events,Z,G,{cidPrefix:"mno",_isDestroyed:!1,isDestroyed:function(){return this._isDestroyed},initialize:function(){},_setCid:function(){this.cid||(this.cid=t.uniqueId(this.cidPrefix))},destroy:function(){if(this._isDestroyed)return this;for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.triggerMethod.apply(this,["before:destroy",this].concat(t)),this._isDestroyed=!0,this.triggerMethod.apply(this,["destroy",this].concat(t)),this.stopListening(),this},triggerMethod:s});var X=function(e){this.templateId=e};t.extend(X,{templateCaches:{},get:function(e,t){var i=this.templateCaches[e];return i||(i=new X(e),this.templateCaches[e]=i),i.load(t)},clear:function(){for(var e=void 0,t=arguments.length,i=Array(t),n=0;n<t;n++)i[n]=arguments[n];var s=i.length;if(s>0)for(e=0;e<s;e++)delete this.templateCaches[i[e]];else this.templateCaches={}}}),t.extend(X.prototype,{load:function(e){if(this.compiledTemplate)return this.compiledTemplate;var t=this.loadTemplate(this.templateId,e);return this.compiledTemplate=this.compileTemplate(t,e),this.compiledTemplate},loadTemplate:function(t,i){var n=e.$(t);if(!n.length)throw new Y({name:"NoTemplateError",message:'Could not find template: "'+t+'"'});return n.html()},compileTemplate:function(e,i){return t.template(e,i)}});var ee=t.invokeMap||t.invoke,te={_initBehaviors:function(){this._behaviors=this._getBehaviors()},_getBehaviors:function(){var e=t.result(this,"behaviors");return t.isObject(e)?x(this,e):{}},_getBehaviorTriggers:function(){var e=ee(this._behaviors,"getTriggers");return t.reduce(e,function(e,i){return t.extend(e,i)},{})},_getBehaviorEvents:function(){var e=ee(this._behaviors,"getEvents");return t.reduce(e,function(e,i){return t.extend(e,i)},{})},_proxyBehaviorViewProperties:function(){ee(this._behaviors,"proxyViewProperties")},_delegateBehaviorEntityEvents:function(){ee(this._behaviors,"delegateEntityEvents")},_undelegateBehaviorEntityEvents:function(){ee(this._behaviors,"undelegateEntityEvents")},_destroyBehaviors:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];ee.apply(void 0,[this._behaviors,"destroy"].concat(t))},_removeBehavior:function(e){this._isDestroyed||(this.undelegate(".trig"+e.cid+" ."+e.cid),this._behaviors=t.without(this._behaviors,e))},_bindBehaviorUIElements:function(){ee(this._behaviors,"bindUIElements")},_unbindBehaviorUIElements:function(){ee(this._behaviors,"unbindUIElements")},_triggerEventOnBehaviors:function(){for(var e=this._behaviors,t=0,i=e&&e.length;t<i;t++)s.apply(e[t],arguments)}},ie={_delegateEntityEvents:function(e,i){var n=t.result(this,"modelEvents");n&&(E.call(this,e,n),V.call(this,e,n));var s=t.result(this,"collectionEvents");s&&(E.call(this,i,s),V.call(this,i,s))},_undelegateEntityEvents:function(e,i){var n=t.result(this,"modelEvents");E.call(this,e,n);var s=t.result(this,"collectionEvents");E.call(this,i,s)}},ne=/^(\S+)\s*(.*)$/,se=function(e,t){var i=e.match(ne);return i[1]+"."+t+" "+i[2]},re={childViewEventPrefix:!0,triggersStopPropagation:!0,triggersPreventDefault:!0},oe={_getViewTriggers:function(e,i){var n=this;return t.reduce(i,function(t,i,s){return s=se(s,"trig"+n.cid),t[s]=A(e,i),t},{})}},he=function(e,i){return t.reduce(e,function(e,t,n){return e[de(n,i)]=t,e},{})},de=function(e,t){return e.replace(/@ui\.[a-zA-Z-_$0-9]*/g,function(e){return t[e.slice(4)]})},le=function e(i,n,s){return t.each(i,function(r,o){t.isString(r)?i[o]=de(r,n):t.isObject(r)&&t.isArray(s)&&(t.extend(r,e(t.pick(r,s),n)),t.each(s,function(e){var i=r[e];t.isString(i)&&(r[e]=de(i,n))}))}),i},ae={normalizeUIKeys:function(e){var t=this._getUIBindings();return he(e,t)},normalizeUIString:function(e){var t=this._getUIBindings();return de(e,t)},normalizeUIValues:function(e,t){var i=this._getUIBindings();return le(e,i,t)},_getUIBindings:function(){var e=t.result(this,"_uiBindings"),i=t.result(this,"ui");return e||i},_bindUIElements:function(){var e=this;if(this.ui){this._uiBindings||(this._uiBindings=this.ui);var i=t.result(this,"_uiBindings");this._ui={},t.each(i,function(t,i){e._ui[i]=e.$(t)}),this.ui=this._ui}},_unbindUIElements:function(){var e=this;this.ui&&this._uiBindings&&(t.each(this.ui,function(t,i){delete e.ui[i]}),this.ui=this._uiBindings,delete this._uiBindings,delete this._ui)},_getUI:function(e){return this._ui[e]}},ce={createBuffer:function(){return document.createDocumentFragment()},getEl:function(e){return O(e)},findEl:function(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:O(e)).find(t)},hasEl:function(e,t){return e.contains(t&&t.parentNode)},detachEl:function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:O(e)).detach()},replaceEl:function(e,t){if(e!==t){var i=t.parentNode;i&&i.replaceChild(e,t)}},swapEl:function(e,t){if(e!==t){var i=e.parentNode,n=t.parentNode;if(i&&n){var s=e.nextSibling,r=t.nextSibling;i.insertBefore(t,s),n.insertBefore(e,r)}}},setContents:function(e,t){(arguments.length>2&&void 0!==arguments[2]?arguments[2]:O(e)).html(t)},appendContents:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=i._$el,s=void 0===n?O(e):n,r=i._$contents,o=void 0===r?O(t):r;s.append(o)},hasContents:function(e){return!!e&&e.hasChildNodes()},detachContents:function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:O(e)).contents().detach()}},ue={Dom:ce,supportsRenderLifecycle:!0,supportsDestroyLifecycle:!0,_isDestroyed:!1,isDestroyed:function(){return!!this._isDestroyed},_isRendered:!1,isRendered:function(){return!!this._isRendered},_isAttached:!1,isAttached:function(){return!!this._isAttached},delegateEvents:function(i){this._proxyBehaviorViewProperties(),this._buildEventProxies();var n=this._getEvents(i);void 0===i&&(this.events=n);var s=t.extend({},this._getBehaviorEvents(),n,this._getBehaviorTriggers(),this.getTriggers());return e.View.prototype.delegateEvents.call(this,s),this},_getEvents:function(e){var i=e||this.events;return t.isFunction(i)?this.normalizeUIKeys(i.call(this)):this.normalizeUIKeys(i)},getTriggers:function(){if(this.triggers){var e=this.normalizeUIKeys(t.result(this,"triggers"));return this._getViewTriggers(this,e)}},delegateEntityEvents:function(){return this._delegateEntityEvents(this.model,this.collection),this._delegateBehaviorEntityEvents(),this},undelegateEntityEvents:function(){return this._undelegateEntityEvents(this.model,this.collection),this._undelegateBehaviorEntityEvents(),this},destroy:function(){if(this._isDestroyed)return this;for(var e=this._isAttached&&!this._shouldDisableEvents,t=arguments.length,i=Array(t),n=0;n<t;n++)i[n]=arguments[n];return this.triggerMethod.apply(this,["before:destroy",this].concat(i)),e&&this.triggerMethod("before:detach",this),this.unbindUIElements(),this._removeElement(),e&&(this._isAttached=!1,this.triggerMethod("detach",this)),this._removeChildren(),this._isDestroyed=!0,this._isRendered=!1,this._destroyBehaviors.apply(this,i),this.triggerMethod.apply(this,["destroy",this].concat(i)),this.stopListening(),this},_removeElement:function(){this.$el.off().removeData(),this.Dom.detachEl(this.el,this.$el)},bindUIElements:function(){return this._bindUIElements(),this._bindBehaviorUIElements(),this},unbindUIElements:function(){return this._unbindUIElements(),this._unbindBehaviorUIElements(),this},getUI:function(e){return this._getUI(e)},childViewEventPrefix:function(){return!!D("childViewEventPrefix")&&"childview"},triggerMethod:function(){var e=s.apply(this,arguments);return this._triggerEventOnBehaviors.apply(this,arguments),e},_buildEventProxies:function(){this._childViewEvents=t.result(this,"childViewEvents"),this._childViewTriggers=t.result(this,"childViewTriggers")},_proxyChildViewEvents:function(e){this.listenTo(e,"all",this._childViewEventHandler)},_childViewEventHandler:function(e){for(var i=this.normalizeMethods(this._childViewEvents),n=arguments.length,s=Array(n>1?n-1:0),r=1;r<n;r++)s[r-1]=arguments[r];void 0!==i&&t.isFunction(i[e])&&i[e].apply(this,s);var o=this._childViewTriggers;o&&t.isString(o[e])&&this.triggerMethod.apply(this,[o[e]].concat(s));var h=t.result(this,"childViewEventPrefix");if(!1!==h){var d=h+":"+e;this.triggerMethod.apply(this,[d].concat(s))}}};t.extend(ue,te,Z,ie,oe,ae);var fe=["allowMissingEl","parentEl","replaceElement"],_e=Q.extend({Dom:ce,cidPrefix:"mnr",replaceElement:!1,_isReplaced:!1,_isSwappingView:!1,constructor:function(t){if(this._setOptions(t),this.mergeOptions(t,fe),this._initEl=this.el=this.getOption("el"),this.el=this.el instanceof e.$?this.el[0]:this.el,!this.el)throw new Y({name:"NoElError",message:'An "el" must be specified for a region.'});this.$el=this.getEl(this.el),Q.call(this,t)},show:function(e,t){if(this._ensureElement(t))return(e=this._getView(e,t))===this.currentView?this:(this._isSwappingView=!!this.currentView,this.triggerMethod("before:show",this,e,t),e._isAttached||this.empty(t),this._setupChildView(e),this.currentView=e,$(e),this._attachView(e,t),this.triggerMethod("show",this,e,t),this._isSwappingView=!1,this)},_setupChildView:function(e){w(e),this._proxyChildViewEvents(e),e.on("destroy",this._empty,this)},_proxyChildViewEvents:function(e){var t=this._parentView;t&&t._proxyChildViewEvents(e)},_shouldDisableMonitoring:function(){return this._parentView&&!1===this._parentView.monitorViewEvents},_attachView:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=!e._isAttached&&k(this.el)&&!this._shouldDisableMonitoring(),s=void 0===i.replaceElement?!!t.result(this,"replaceElement"):!!i.replaceElement;n&&r(e,"before:attach",e),s?this._replaceEl(e):this.attachHtml(e),n&&(e._isAttached=!0,r(e,"attach",e))},_ensureElement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t.isObject(this.el)||(this.$el=this.getEl(this.el),this.el=this.$el[0],this.$el=this.Dom.getEl(this.el)),!this.$el||0===this.$el.length){if(void 0===e.allowMissingEl?!!t.result(this,"allowMissingEl"):!!e.allowMissingEl)return!1;throw new Y('An "el" must exist in DOM for this region '+this.cid)}return!0},_getView:function(t){if(!t)throw new Y({name:"ViewNotValid",message:"The view passed is undefined and therefore invalid. You must pass a view instance to show."});if(t._isDestroyed)throw new Y({name:"ViewDestroyedError",message:'View (cid: "'+t.cid+'") has already been destroyed and cannot be used.'});if(t instanceof e.View)return t;var i=this._getViewOptions(t);return new we(i)},_getViewOptions:function(e){if(t.isFunction(e))return{template:e};if(t.isObject(e))return e;return{template:function(){return e}}},getEl:function(e){var i=t.result(this,"parentEl");return i&&t.isString(e)?this.Dom.findEl(i,e):this.Dom.getEl(e)},_replaceEl:function(e){this._restoreEl(),e.on("before:destroy",this._restoreEl,this),this.Dom.replaceEl(e.el,this.el),this._isReplaced=!0},_restoreEl:function(){if(this._isReplaced){var e=this.currentView;e&&(this._detachView(e),this._isReplaced=!1)}},isReplaced:function(){return!!this._isReplaced},isSwappingView:function(){return!!this._isSwappingView},attachHtml:function(e){this.Dom.appendContents(this.el,e.el,{_$el:this.$el,_$contents:e.$el})},empty:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{allowMissingEl:!0},t=this.currentView;if(!t)return this._ensureElement(e)&&this.detachHtml(),this;var i=!e.preventDestroy;return i||z("The preventDestroy option is deprecated. Use Region#detachView"),this._empty(t,i),this},_empty:function(e,t){e.off("destroy",this._empty,this),this.triggerMethod("before:empty",this,e),this._restoreEl(),delete this.currentView,e._isDestroyed||(t?this.removeView(e):this._detachView(e),this._stopChildViewEvents(e)),this.triggerMethod("empty",this,e)},_stopChildViewEvents:function(e){this._parentView&&this._parentView.stopListening(e)},destroyView:function(e){return e._isDestroyed?e:(e._shouldDisableEvents=this._shouldDisableMonitoring(),T(e),e)},removeView:function(e){this.destroyView(e)},detachView:function(){var e=this.currentView;if(e)return this._empty(e),e},_detachView:function(e){var t=e._isAttached&&!this._shouldDisableMonitoring(),i=this._isReplaced;t&&r(e,"before:detach",e),i?this.Dom.replaceEl(this.el,e.el):this.detachHtml(),t&&(e._isAttached=!1,r(e,"detach",e))},detachHtml:function(){this.Dom.detachContents(this.el,this.$el)},hasView:function(){return!!this.currentView},reset:function(e){return this.empty(e),this.$el&&(this.el=this._initEl),delete this.$el,this},destroy:function(e){return this._isDestroyed?this:(this.reset(e),this._name&&this._parentView._removeReferences(this._name),delete this._parentView,delete this._name,Q.prototype.destroy.apply(this,arguments))}},{setDomApi:I}),pe=function(e,t){return e instanceof _e?e:U(e,t)},ge={regionClass:_e,_initRegions:function(){this.regions=this.regions||{},this._regions={},this.addRegions(t.result(this,"regions"))},_reInitRegions:function(){ee(this._regions,"reset")},addRegion:function(e,t){var i={};return i[e]=t,this.addRegions(i)[e]},addRegions:function(e){if(!t.isEmpty(e))return e=this.normalizeUIValues(e,["selector","el"]),this.regions=t.extend({},this.regions,e),this._addRegions(e)},_addRegions:function(e){var i=this,n={regionClass:this.regionClass,parentEl:t.partial(t.result,this,"el")};return t.reduce(e,function(e,t,s){return e[s]=pe(t,n),i._addRegion(e[s],s),e},{})},_addRegion:function(e,t){this.triggerMethod("before:add:region",this,t,e),e._parentView=this,e._name=t,this._regions[t]=e,this.triggerMethod("add:region",this,t,e)},removeRegion:function(e){var t=this._regions[e];return this._removeRegion(t,e),t},removeRegions:function(){var e=this._getRegions();return t.each(this._regions,t.bind(this._removeRegion,this)),e},_removeRegion:function(e,t){this.triggerMethod("before:remove:region",this,t,e),e.destroy(),this.triggerMethod("remove:region",this,t,e)},_removeReferences:function(e){delete this.regions[e],delete this._regions[e]},emptyRegions:function(){var e=this.getRegions();return ee(e,"empty"),e},hasRegion:function(e){return!!this.getRegion(e)},getRegion:function(e){return this._isRendered||this.render(),this._regions[e]},_getRegions:function(){return t.clone(this._regions)},getRegions:function(){return this._isRendered||this.render(),this._getRegions()},showChildView:function(e,t){for(var i=this.getRegion(e),n=arguments.length,s=Array(n>2?n-2:0),r=2;r<n;r++)s[r-2]=arguments[r];return i.show.apply(i,[t].concat(s))},detachChildView:function(e){return this.getRegion(e).detachView()},getChildView:function(e){return this.getRegion(e).currentView}},ve={render:function(e,i){if(!e)throw new Y({name:"TemplateNotFoundError",message:"Cannot render the template since its false, null or undefined."});return(t.isFunction(e)?e:X.get(e))(i)}},me=["behaviors","childViewEventPrefix","childViewEvents","childViewTriggers","collectionEvents","events","modelEvents","regionClass","regions","template","templateContext","triggers","ui"],we=e.View.extend({constructor:function(i){this.render=t.bind(this.render,this),this._setOptions(i),this.mergeOptions(i,me),w(this),this._initBehaviors(),this._initRegions();var n=Array.prototype.slice.call(arguments);n[0]=this.options,e.View.prototype.constructor.apply(this,n),this.delegateEntityEvents(),this._triggerEventOnBehaviors("initialize",this)},serializeData:function(){return this.model||this.collection?this.model?this.serializeModel():{items:this.serializeCollection()}:{}},serializeModel:function(){return this.model?t.clone(this.model.attributes):{}},serializeCollection:function(){return this.collection?this.collection.map(function(e){return t.clone(e.attributes)}):{}},setElement:function(){return e.View.prototype.setElement.apply(this,arguments),this._isRendered=this.Dom.hasContents(this.el),this._isAttached=k(this.el),this._isRendered&&this.bindUIElements(),this},render:function(){return this._isDestroyed?this:(this.triggerMethod("before:render",this),this._isRendered&&this._reInitRegions(),this._renderTemplate(),this.bindUIElements(),this._isRendered=!0,this.triggerMethod("render",this),this)},_renderTemplate:function(){var e=this.getTemplate();if(!1!==e){var t=this.mixinTemplateContext(this.serializeData()),i=this._renderHtml(e,t);this.attachElContent(i)}else z("template:false is deprecated.  Use _.noop.")},_renderHtml:function(e,t){return ve.render(e,t,this)},getTemplate:function(){return this.template},mixinTemplateContext:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.result(this,"templateContext");return t.extend(e,i)},attachElContent:function(e){return this.Dom.setContents(this.el,e,this.$el),this},_removeChildren:function(){this.removeRegions()},_getImmediateChildren:function(){return t.chain(this._getRegions()).map("currentView").compact().value()}},{setRenderer:function(e){return this.prototype._renderHtml=e,this},setDomApi:I});t.extend(we.prototype,ue,ge);var ye=["forEach","each","map","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","toArray","first","initial","rest","last","without","isEmpty","pluck","reduce","partition"],Ce=function(e,i){t.each(ye,function(n){e[n]=function(){var e=t.result(this,i),s=Array.prototype.slice.call(arguments);return t[n].apply(t,[e].concat(s))}})},Ve=function(e){this._views={},this._indexByModel={},this._indexByCustom={},this._updateLength(),t.each(e,t.bind(this.add,this))};Ce(Ve.prototype,"_getViews"),t.extend(Ve.prototype,{_getViews:function(){return t.values(this._views)},add:function(e,t){return this._add(e,t)._updateLength()},_add:function(e,t){var i=e.cid;return this._views[i]=e,e.model&&(this._indexByModel[e.model.cid]=i),t&&(this._indexByCustom[t]=i),this},findByModel:function(e){return this.findByModelCid(e.cid)},findByModelCid:function(e){var t=this._indexByModel[e];return this.findByCid(t)},findByCustom:function(e){var t=this._indexByCustom[e];return this.findByCid(t)},findByIndex:function(e){return t.values(this._views)[e]},findByCid:function(e){return this._views[e]},remove:function(e){return this._remove(e)._updateLength()},_remove:function(e){var i=e.cid;return e.model&&delete this._indexByModel[e.model.cid],t.some(this._indexByCustom,t.bind(function(e,t){if(e===i)return delete this._indexByCustom[t],!0},this)),delete this._views[i],this},_updateLength:function(){return this.length=t.size(this._views),this}});var Ee=["behaviors","childView","childViewEventPrefix","childViewEvents","childViewOptions","childViewTriggers","collectionEvents","events","filter","emptyView","emptyViewOptions","modelEvents","reorderOnSort","sort","triggers","ui","viewComparator"],be=e.View.extend({sort:!0,constructor:function(i){this.render=t.bind(this.render,this),this._setOptions(i),this.mergeOptions(i,Ee),w(this),this._initBehaviors(),this.once("render",this._initialEvents),this._initChildViewStorage(),this._bufferedChildren=[];var n=Array.prototype.slice.call(arguments);n[0]=this.options,e.View.prototype.constructor.apply(this,n),this.delegateEntityEvents(),this._triggerEventOnBehaviors("initialize",this)},_startBuffering:function(){this._isBuffering=!0},_endBuffering:function(){var e=this._isAttached&&!1!==this.monitorViewEvents?this._getImmediateChildren():[];this._isBuffering=!1,t.each(e,function(e){r(e,"before:attach",e)}),this.attachBuffer(this,this._createBuffer()),t.each(e,function(e){e._isAttached=!0,r(e,"attach",e)}),this._bufferedChildren=[]},_getImmediateChildren:function(){return t.values(this.children._views)},_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this._onCollectionAdd),this.listenTo(this.collection,"update",this._onCollectionUpdate),this.listenTo(this.collection,"reset",this.render),this.sort&&this.listenTo(this.collection,"sort",this._sortViews))},_onCollectionAdd:function(e,i,n){var s=void 0!==n.at&&(n.index||i.indexOf(e));(this.filter||!1===s)&&(s=t.indexOf(this._filteredSortedModels(s),e)),this._shouldAddChild(e,s)&&(this._destroyEmptyView(),this._addChild(e,s))},_onCollectionUpdate:function(e,t){var i=t.changes;this._removeChildModels(i.removed)},_removeChildModels:function(e){var t=this._getRemovedViews(e);t.length&&(this.children._updateLength(),this._updateIndices(t,!1),this.isEmpty()&&this._showEmptyView())},_getRemovedViews:function(e){var i=this;return t.reduce(e,function(e,t){var n=t&&i.children.findByModel(t);return!n||n._isDestroyed?e:(i._removeChildView(n),e.push(n),e)},[])},_removeChildView:function(e){this.triggerMethod("before:remove:child",this,e),this.children._remove(e),e._shouldDisableEvents=!1===this.monitorViewEvents,T(e),this.stopListening(e),this.triggerMethod("remove:child",this,e)},setElement:function(){return e.View.prototype.setElement.apply(this,arguments),this._isAttached=k(this.el),this},render:function(){return this._isDestroyed?this:(this.triggerMethod("before:render",this),this._renderChildren(),this._isRendered=!0,this.triggerMethod("render",this),this)},setFilter:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).preventRender,i=this._isRendered&&!this._isDestroyed,n=this.filter!==e;if(i&&n&&!t){var s=this._filteredSortedModels();this.filter=e;var r=this._filteredSortedModels();this._applyModelDeltas(r,s)}else this.filter=e;return this},removeFilter:function(e){return this.setFilter(null,e)},_applyModelDeltas:function(e,i){var n=this,s={};t.each(e,function(e,t){!n.children.findByModel(e)&&n._onCollectionAdd(e,n.collection,{at:t}),s[e.cid]=!0});var r=t.filter(i,function(e){return!s[e.cid]&&n.children.findByModel(e)});this._removeChildModels(r)},reorder:function(){var e=this,i=this.children,n=this._filteredSortedModels();if(!n.length&&this._showingEmptyView)return this;if(t.some(n,function(e){return!i.findByModel(e)}))this.render();else{var s=[],r=t.reduce(this.children._views,function(e,i){var r=t.indexOf(n,i.model);return-1===r?(s.push(i.model),e):(i._index=r,e[r]=i.el,e)},new Array(n.length));this.triggerMethod("before:reorder",this);var o=this.Dom.createBuffer();t.each(r,function(t){e.Dom.appendContents(o,t)}),this._appendReorderedChildren(o),this._removeChildModels(s),this.triggerMethod("reorder",this)}return this},resortView:function(){return this.reorderOnSort?this.reorder():this._renderChildren(),this},_sortViews:function(){var e=this,i=this._filteredSortedModels();t.find(i,function(t,i){var n=e.children.findByModel(t);return!n||n._index!==i})&&this.resortView()},_emptyViewIndex:-1,_appendReorderedChildren:function(e){this.Dom.appendContents(this.el,e,{_$el:this.$el})},_renderChildren:function(){this._isRendered&&(this._destroyEmptyView(),this._destroyChildren());var e=this._filteredSortedModels();this.isEmpty({processedModels:e})?this._showEmptyView():(this.triggerMethod("before:render:children",this),this._startBuffering(),this._showCollection(e),this._endBuffering(),this.triggerMethod("render:children",this))},_createView:function(e,t){var i=this._getChildView(e),n=this._getChildViewOptions(e,t);return this.buildChildView(e,i,n)},_setupChildView:function(e,t){w(e),this._proxyChildViewEvents(e),this.sort&&(e._index=t)},_showCollection:function(e){t.each(e,t.bind(this._addChild,this)),this.children._updateLength()},_filteredSortedModels:function(e){if(!this.collection||!this.collection.length)return[];var t=this.getViewComparator(),i=this.collection.models;if(e=Math.min(Math.max(e,0),i.length-1),t){var n=void 0;e&&(n=i[e],i=i.slice(0,e).concat(i.slice(e+1))),i=this._sortModelsBy(i,t),n&&i.splice(e,0,n)}return i=this._filterModels(i)},getViewComparator:function(){return this.viewComparator},_filterModels:function(e){var i=this;return this.filter&&(e=t.filter(e,function(e,t){return i._shouldAddChild(e,t)})),e},_sortModelsBy:function(e,i){return"string"==typeof i?t.sortBy(e,function(e){return e.get(i)}):1===i.length?t.sortBy(e,t.bind(i,this)):t.clone(e).sort(t.bind(i,this))},_showEmptyView:function(){var i=this._getEmptyView();if(i&&!this._showingEmptyView){this._showingEmptyView=!0;var n=new e.Model,s=this.emptyViewOptions||this.childViewOptions;t.isFunction(s)&&(s=s.call(this,n,this._emptyViewIndex));var r=this.buildChildView(n,i,s);this.triggerMethod("before:render:empty",this,r),this.addChildView(r,0),this.triggerMethod("render:empty",this,r)}},_destroyEmptyView:function(){this._showingEmptyView&&(this.triggerMethod("before:remove:empty",this),this._destroyChildren(),delete this._showingEmptyView,this.triggerMethod("remove:empty",this))},_getEmptyView:function(){var e=this.emptyView;if(e)return this._getView(e)},_getChildView:function(e){var t=this.childView;if(!t)throw new Y({name:"NoChildViewError",message:'A "childView" must be specified'});if(!(t=this._getView(t,e)))throw new Y({name:"InvalidChildViewError",message:'"childView" must be a view class or a function that returns a view class'});return t},_getView:function(i,n){return i.prototype instanceof e.View||i===e.View?i:t.isFunction(i)?i.call(this,n):void 0},_addChild:function(e,t){var i=this._createView(e,t);return this.addChildView(i,t),i},_getChildViewOptions:function(e,i){return t.isFunction(this.childViewOptions)?this.childViewOptions(e,i):this.childViewOptions},addChildView:function(e,t){return this.triggerMethod("before:add:child",this,e),this._setupChildView(e,t),this._isBuffering?this.children._add(e):(this._updateIndices(e,!0),this.children.add(e)),$(e),this._attachView(e,t),this.triggerMethod("add:child",this,e),e},_updateIndices:function(e,i){if(this.sort)if(i){var n=t.isArray(e)?t.max(e,"_index"):e;t.isObject(n)&&t.each(this.children._views,function(e){e._index>=n._index&&(e._index+=1)})}else t.each(t.sortBy(this.children._views,"_index"),function(e,t){e._index=t})},_attachView:function(e,t){var i=!e._isAttached&&!this._isBuffering&&this._isAttached&&!1!==this.monitorViewEvents;i&&r(e,"before:attach",e),this.attachHtml(this,e,t),i&&(e._isAttached=!0,r(e,"attach",e))},buildChildView:function(e,i,n){return new i(t.extend({model:e},n))},removeChildView:function(e){return!e||e._isDestroyed?e:(this._removeChildView(e),this.children._updateLength(),this._updateIndices(e,!1),e)},isEmpty:function(e){var i=void 0;return t.result(e,"processedModels")?i=e.processedModels:(i=this.collection?this.collection.models:[],i=this._filterModels(i)),0===i.length},attachBuffer:function(e,t){this.Dom.appendContents(e.el,t,{_$el:e.$el})},_createBuffer:function(){var e=this,i=this.Dom.createBuffer();return t.each(this._bufferedChildren,function(t){e.Dom.appendContents(i,t.el,{_$contents:t.$el})}),i},attachHtml:function(e,t,i){e._isBuffering?e._bufferedChildren.splice(i,0,t):e._insertBefore(t,i)||e._insertAfter(t)},_insertBefore:function(e,i){var n=void 0;return this.sort&&i<this.children.length-1&&(n=t.find(this.children._views,function(e){return e._index===i+1})),!!n&&(this.beforeEl(n.el,e.el),!0)},beforeEl:function(e,t){this.$(e).before(t)},_insertAfter:function(e){this.Dom.appendContents(this.el,e.el,{_$el:this.$el,_$contents:e.$el})},_initChildViewStorage:function(){this.children=new Ve},_removeChildren:function(){this._destroyChildren()},_destroyChildren:function(e){this.children.length&&(this.triggerMethod("before:destroy:children",this),t.each(this.children._views,t.bind(this._removeChildView,this)),this.children._updateLength(),this.triggerMethod("destroy:children",this))},_shouldAddChild:function(e,i){var n=this.filter;return!t.isFunction(n)||n.call(this,e,i,this.collection)}},{setDomApi:I});t.extend(be.prototype,ue);var Me=function(){this._init()};Ce(Me.prototype,"_views"),t.extend(Me.prototype,{_init:function(){this._views=[],this._viewsByCid={},this._indexByModel={},this._updateLength()},_add:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._views.length,i=e.cid;this._viewsByCid[i]=e,e.model&&(this._indexByModel[e.model.cid]=i),this._views.splice(t,0,e),this._updateLength()},_sort:function(e,i){return"string"==typeof e?(e=t.partial(F,e),this._sortBy(e)):1===e.length?this._sortBy(t.bind(e,i)):this._views.sort(t.bind(e,i))},_sortBy:function(e){var i=t.sortBy(this._views,e);return this._set(i),i},_set:function(e){this._views.length=0,this._views.push.apply(this._views,e.slice(0)),this._updateLength()},_swap:function(e,t){var i=this.findIndexByView(e),n=this.findIndexByView(t);if(-1!==i&&-1!==n){var s=this._views[i];this._views[i]=this._views[n],this._views[n]=s}},findByModel:function(e){return this.findByModelCid(e.cid)},findByModelCid:function(e){var t=this._indexByModel[e];return this.findByCid(t)},findByIndex:function(e){return this._views[e]},findIndexByView:function(e){return this._views.indexOf(e)},findByCid:function(e){return this._viewsByCid[e]},hasView:function(e){return!!this.findByCid(e.cid)},_remove:function(e){if(this._viewsByCid[e.cid]){e.model&&delete this._indexByModel[e.model.cid],delete this._viewsByCid[e.cid];var t=this.findIndexByView(e);this._views.splice(t,1),this._updateLength()}},_updateLength:function(){this.length=this._views.length}});var Re=["behaviors","childView","childViewEventPrefix","childViewEvents","childViewOptions","childViewTriggers","collectionEvents","emptyView","emptyViewOptions","events","modelEvents","sortWithCollection","triggers","ui","viewComparator","viewFilter"],Be=e.View.extend({sortWithCollection:!0,constructor:function(t){this._setOptions(t),this.mergeOptions(t,Re),w(this),this.once("render",this._initialEvents),this._initChildViewStorage(),this._initBehaviors();var i=Array.prototype.slice.call(arguments);i[0]=this.options,e.View.prototype.constructor.apply(this,i),this.getEmptyRegion(),this.delegateEntityEvents(),this._triggerEventOnBehaviors("initialize",this)},_initChildViewStorage:function(){this.children=new Me},getEmptyRegion:function(){return this._emptyRegion&&!this._emptyRegion.isDestroyed()?this._emptyRegion:(this._emptyRegion=new _e({el:this.el,replaceElement:!1}),this._emptyRegion._parentView=this,this._emptyRegion)},_initialEvents:function(){this.listenTo(this.collection,{sort:this._onCollectionSort,reset:this._onCollectionReset,update:this._onCollectionUpdate})},_onCollectionSort:function(e,t){var i=t.add,n=t.merge,s=t.remove;this.sortWithCollection&&!1!==this.viewComparator&&(i||s||n||this.sort())},_onCollectionReset:function(){this.render()},_onCollectionUpdate:function(e,t){var i=t.changes,n=i.removed.length&&this._removeChildModels(i.removed);this._addedViews=i.added.length&&this._addChildModels(i.added),this._detachChildren(n),this._showChildren(),this._removeChildViews(n)},_removeChildModels:function(e){var i=this;return t.reduce(e,function(e,t){var n=i._removeChildModel(t);return n&&e.push(n),e},[])},_removeChildModel:function(e){var t=this.children.findByModel(e);return t&&this._removeChild(t),t},_removeChild:function(e){this.triggerMethod("before:remove:child",this,e),this.children._remove(e),this.triggerMethod("remove:child",this,e)},_addChildModels:function(e){return t.map(e,t.bind(this._addChildModel,this))},_addChildModel:function(e){var t=this._createChildView(e);return this._addChild(t),t},_createChildView:function(e){var t=this._getChildView(e),i=this._getChildViewOptions(e);return this.buildChildView(e,t,i)},_addChild:function(e,t){this.triggerMethod("before:add:child",this,e),this._setupChildView(e),this.children._add(e,t),this.triggerMethod("add:child",this,e)},_getChildView:function(e){var t=this.childView;if(!t)throw new Y({name:"NoChildViewError",message:'A "childView" must be specified'});if(!(t=this._getView(t,e)))throw new Y({name:"InvalidChildViewError",message:'"childView" must be a view class or a function that returns a view class'});return t},_getView:function(i,n){return i.prototype instanceof e.View||i===e.View?i:t.isFunction(i)?i.call(this,n):void 0},_getChildViewOptions:function(e){return t.isFunction(this.childViewOptions)?this.childViewOptions(e):this.childViewOptions},buildChildView:function(e,i,n){return new i(t.extend({model:e},n))},_setupChildView:function(e){w(e),e.on("destroy",this.removeChildView,this),this._proxyChildViewEvents(e)},_getImmediateChildren:function(){return this.children._views},setElement:function(){return e.View.prototype.setElement.apply(this,arguments),this._isAttached=k(this.el),this},render:function(){return this._isDestroyed?this:(this.triggerMethod("before:render",this),this._destroyChildren(),this.children._init(),this.collection&&this._addChildModels(this.collection.models),this._showChildren(),this._isRendered=!0,this.triggerMethod("render",this),this)},sort:function(){return this._isDestroyed?this:this.children.length?(this._showChildren(),this):this},_showChildren:function(){this.isEmpty()?this._showEmptyView():(this._sortChildren(),this.filter())},isEmpty:function(e){return e||!this.children.length},_showEmptyView:function(){var e=this._getEmptyView();if(e){var t=this._getEmptyViewOptions();this.getEmptyRegion().show(new e(t))}},_getEmptyView:function(){var e=this.emptyView;if(e)return this._getView(e)},_destroyEmptyView:function(){var e=this.getEmptyRegion();e.hasView()&&e.empty()},_getEmptyViewOptions:function(){var e=this.emptyViewOptions||this.childViewOptions;return t.isFunction(e)?e.call(this):e},_sortChildren:function(){var e=this.getComparator();e&&(delete this._addedViews,this.triggerMethod("before:sort",this),this.children._sort(e,this),this.triggerMethod("sort",this))},setComparator:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).preventRender,i=this.viewComparator!==e&&!t;return this.viewComparator=e,i&&this.sort(),this},removeComparator:function(e){return this.setComparator(null,e)},getComparator:function(){return this.viewComparator?this.viewComparator:!(!this.sortWithCollection||!1===this.viewComparator||!this.collection)&&this._viewComparator},_viewComparator:function(e){return this.collection.indexOf(e.model)},filter:function(){if(this._isDestroyed)return this;if(!this.children.length)return this;var e=this._filterChildren();return this._renderChildren(e),this},_filterChildren:function(){var e=this,i=this._getFilter(),n=this._addedViews;if(delete this._addedViews,!i)return n||this.children._views;this.triggerMethod("before:filter",this);var s=[],r=[];return t.each(this.children._views,function(t,n,o){(i.call(e,t,n,o)?s:r).push(t)}),this._detachChildren(r),this.triggerMethod("filter",this,s,r),s},_getFilter:function(){var e=this.getFilter();if(!e)return!1;if(t.isFunction(e))return e;if(t.isObject(e)){var i=t.matches(e);return function(e){return i(e.model&&e.model.attributes)}}if(t.isString(e))return function(t){return t.model&&t.model.get(e)};throw new Y({name:"InvalidViewFilterError",message:'"viewFilter" must be a function, predicate object literal, a string indicating a model attribute, or falsy'})},getFilter:function(){return this.viewFilter},setFilter:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).preventRender,i=this.viewFilter!==e&&!t;return this.viewFilter=e,i&&this.filter(),this},removeFilter:function(e){return this.setFilter(null,e)},_detachChildren:function(e){t.each(e,t.bind(this._detachChildView,this))},_detachChildView:function(e){var t=e._isAttached&&!1!==this.monitorViewEvents;t&&r(e,"before:detach",e),this.detachHtml(e),t&&(e._isAttached=!1,r(e,"detach",e))},detachHtml:function(e){this.Dom.detachEl(e.el,e.$el)},_renderChildren:function(e){if(this.isEmpty(!e.length))this._showEmptyView();else{this._destroyEmptyView(),this.triggerMethod("before:render:children",this,e);var t=this._getBuffer(e);this._attachChildren(t,e),this.triggerMethod("render:children",this,e)}},_attachChildren:function(e,i){i=this._isAttached&&!1!==this.monitorViewEvents?i:[],t.each(i,function(e){e._isAttached||r(e,"before:attach",e)}),this.attachHtml(e),t.each(i,function(e){e._isAttached||(e._isAttached=!0,r(e,"attach",e))})},_getBuffer:function(e){var i=this,n=this.Dom.createBuffer();return t.each(e,function(e){$(e),i.Dom.appendContents(n,e.el,{_$contents:e.$el})}),n},attachHtml:function(e){this.Dom.appendContents(this.el,e,{_$el:this.$el})},swapChildViews:function(e,t){if(!this.children.hasView(e)||!this.children.hasView(t))throw new Y({name:"ChildSwapError",message:"Both views must be children of the collection view"});return this.children._swap(e,t),this.Dom.swapEl(e.el,t.el),this.Dom.hasEl(this.el,e.el)!==this.Dom.hasEl(this.el,t.el)&&this.filter(),this},addChildView:function(e,t){return!e||e._isDestroyed?e:((!t||t>=this.children.length)&&(this._addedViews=[e]),this._addChild(e,t),this._showChildren(),e)},detachChildView:function(e){return this.removeChildView(e,{shouldDetach:!0}),e},removeChildView:function(e,t){return e?(this._removeChildView(e,t),this._removeChild(e),this.isEmpty()&&this._showEmptyView(),e):e},_removeChildViews:function(e){t.each(e,t.bind(this._removeChildView,this))},_removeChildView:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).shouldDetach;e.off("destroy",this.removeChildView,this),t?this._detachChildView(e):this._destroyChildView(e),this.stopListening(e)},_destroyChildView:function(e){e._isDestroyed||(e._shouldDisableEvents=!1===this.monitorViewEvents,T(e))},_removeChildren:function(){this._destroyChildren(),this.getEmptyRegion().destroy(),delete this._addedViews},_destroyChildren:function(){this.children&&this.children.length&&(this.triggerMethod("before:destroy:children",this),!1===this.monitorViewEvents&&this.Dom.detachContents(this.el,this.$el),t.each(this.children._views,t.bind(this._removeChildView,this)),this.triggerMethod("destroy:children",this))}},{setDomApi:I});t.extend(Be.prototype,ue);var xe=["childViewContainer","template","templateContext"],De=be.extend({constructor:function(e){z("CompositeView is deprecated. Convert to View at your earliest convenience"),this.mergeOptions(e,xe),be.prototype.constructor.apply(this,arguments)},_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this._onCollectionAdd),this.listenTo(this.collection,"update",this._onCollectionUpdate),this.listenTo(this.collection,"reset",this.renderChildren),this.sort&&this.listenTo(this.collection,"sort",this._sortViews))},_getChildView:function(e){var t=this.childView;if(!t)return this.constructor;if(!(t=this._getView(t,e)))throw new Y({name:"InvalidChildViewError",message:'"childView" must be a view class or a function that returns a view class'});return t},serializeData:function(){return this.serializeModel()},render:function(){return this._isDestroyed?this:(this._isRendering=!0,this.resetChildViewContainer(),this.triggerMethod("before:render",this),this._renderTemplate(),this.bindUIElements(),this.renderChildren(),this._isRendering=!1,this._isRendered=!0,this.triggerMethod("render",this),this)},renderChildren:function(){(this._isRendered||this._isRendering)&&be.prototype._renderChildren.call(this)},attachBuffer:function(e,t){var i=this.getChildViewContainer(e);this.Dom.appendContents(i[0],t,{_$el:i})},_insertAfter:function(e){var t=this.getChildViewContainer(this,e);this.Dom.appendContents(t[0],e.el,{_$el:t,_$contents:e.$el})},_appendReorderedChildren:function(e){var t=this.getChildViewContainer(this);this.Dom.appendContents(t[0],e,{_$el:t})},getChildViewContainer:function(e,i){if(e.$childViewContainer)return e.$childViewContainer;var n=void 0;if(e.childViewContainer){var s=t.result(e,"childViewContainer");if((n="@"===s.charAt(0)&&e.ui?e.ui[s.substr(4)]:this.$(s)).length<=0)throw new Y({name:"ChildViewContainerMissingError",message:'The specified "childViewContainer" was not found: '+e.childViewContainer})}else n=e.$el;return e.$childViewContainer=n,n},resetChildViewContainer:function(){this.$childViewContainer&&(this.$childViewContainer=void 0)}}),Ae=t.pick(we.prototype,"serializeModel","getTemplate","_renderTemplate","_renderHtml","mixinTemplateContext","attachElContent");t.extend(De.prototype,Ae);var Oe=["collectionEvents","events","modelEvents","triggers","ui"],Ie=Q.extend({cidPrefix:"mnb",constructor:function(e,i){this.view=i,this.defaults&&z("Behavior defaults are deprecated. For similar functionality set options on the Behavior class."),this.defaults=t.clone(t.result(this,"defaults",{})),this._setOptions(t.extend({},this.defaults,e)),this.mergeOptions(this.options,Oe),this.ui=t.extend({},t.result(this,"ui"),t.result(i,"ui")),Q.apply(this,arguments)},$:function(){return this.view.$.apply(this.view,arguments)},destroy:function(){return this.stopListening(),this.view._removeBehavior(this),this},proxyViewProperties:function(){return this.$el=this.view.$el,this.el=this.view.el,this},bindUIElements:function(){return this._bindUIElements(),this},unbindUIElements:function(){return this._unbindUIElements(),this},getUI:function(e){return this._getUI(e)},delegateEntityEvents:function(){return this._delegateEntityEvents(this.view.model,this.view.collection),this},undelegateEntityEvents:function(){return this._undelegateEntityEvents(this.view.model,this.view.collection),this},getEvents:function(){var e=this,i=this.normalizeUIKeys(t.result(this,"events"));return t.reduce(i,function(i,n,s){return t.isFunction(n)||(n=e[n]),n?(s=se(s,e.cid),i[s]=t.bind(n,e),i):i},{})},getTriggers:function(){if(this.triggers){var e=this.normalizeUIKeys(t.result(this,"triggers"));return this._getViewTriggers(this.view,e)}}});t.extend(Ie.prototype,ie,oe,ae);var $e=["region","regionClass"],Te=Q.extend({cidPrefix:"mna",constructor:function(e){this._setOptions(e),this.mergeOptions(e,$e),this._initRegion(),Q.prototype.constructor.apply(this,arguments)},regionClass:_e,_initRegion:function(){var e=this.region;if(e){var t={regionClass:this.regionClass};this._region=pe(e,t)}},getRegion:function(){return this._region},showView:function(e){for(var t=this.getRegion(),i=arguments.length,n=Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];return t.show.apply(t,[e].concat(n))},getView:function(){return this.getRegion().currentView},start:function(e){return this.triggerMethod("before:start",this,e),this.triggerMethod("start",this,e),this}}),Ue=["appRoutes","controller"],Se=e.Router.extend({constructor:function(t){this._setOptions(t),this.mergeOptions(t,Ue),e.Router.apply(this,arguments);var i=this.appRoutes,n=this._getController();this.processAppRoutes(n,i),this.on("route",this._processOnRoute,this)},appRoute:function(e,t){var i=this._getController();return this._addAppRoute(i,e,t),this},_processOnRoute:function(e,i){if(t.isFunction(this.onRoute)){var n=t.invert(this.appRoutes)[e];this.onRoute(e,n,i)}},processAppRoutes:function(e,i){var n=this;if(!i)return this;var s=t.keys(i).reverse();return t.each(s,function(t){n._addAppRoute(e,t,i[t])}),this},_getController:function(){return this.controller},_addAppRoute:function(e,i,n){var s=e[n];if(!s)throw new Y('Method "'+n+'" was not found on the controller');this.route(i,n,t.bind(s,e))},triggerMethod:s});t.extend(Se.prototype,Z);var Fe=e.Marionette,Le=e.Marionette={};return Le.noConflict=function(){return e.Marionette=Fe,this},Le.bindEvents=L(V),Le.unbindEvents=L(E),Le.bindRequests=L(M),Le.unbindRequests=L(R),Le.mergeOptions=L(j),Le.getOption=L(N),Le.normalizeMethods=L(H),Le.extend=P,Le.isNodeAttached=k,Le.deprecate=z,Le.triggerMethod=L(s),Le.triggerMethodOn=r,Le.isEnabled=D,Le.setEnabled=function(e,t){return re[e]=t},Le.monitorViewEvents=w,Le.Behaviors={},Le.Behaviors.behaviorsLookup=function(){throw new Y({message:"You must define where your behaviors are stored.",url:"marionette.behaviors.md#behaviorslookup"})},Le.Application=Te,Le.AppRouter=Se,Le.Renderer=ve,Le.TemplateCache=X,Le.View=we,Le.CollectionView=be,Le.NextCollectionView=Be,Le.CompositeView=De,Le.Behavior=Ie,Le.Region=_e,Le.Error=Y,Le.Object=Q,Le.DEV_MODE=!1,Le.FEATURES=re,Le.VERSION="3.5.1",Le.DomApi=ce,Le.setDomApi=function(e){be.setDomApi(e),De.setDomApi(e),Be.setDomApi(e),_e.setDomApi(e),we.setDomApi(e)},Le}),this&&this.Marionette&&(this.Mn=this.Marionette);
//! moment.js
//! version : 2.22.2
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  global.moment = factory()
}(this, (function () { 'use strict';

  var hookCallback;

  function hooks () {
      return hookCallback.apply(null, arguments);
  }

  // This is done to register the method called with moment()
  // without creating circular dependencies.
  function setHookCallback (callback) {
      hookCallback = callback;
  }

  function isArray(input) {
      return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
  }

  function isObject(input) {
      // IE8 will treat undefined and null as object if it wasn't for
      // input != null
      return input != null && Object.prototype.toString.call(input) === '[object Object]';
  }

  function isObjectEmpty(obj) {
      if (Object.getOwnPropertyNames) {
          return (Object.getOwnPropertyNames(obj).length === 0);
      } else {
          var k;
          for (k in obj) {
              if (obj.hasOwnProperty(k)) {
                  return false;
              }
          }
          return true;
      }
  }

  function isUndefined(input) {
      return input === void 0;
  }

  function isNumber(input) {
      return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
  }

  function isDate(input) {
      return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
  }

  function map(arr, fn) {
      var res = [], i;
      for (i = 0; i < arr.length; ++i) {
          res.push(fn(arr[i], i));
      }
      return res;
  }

  function hasOwnProp(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
  }

  function extend(a, b) {
      for (var i in b) {
          if (hasOwnProp(b, i)) {
              a[i] = b[i];
          }
      }

      if (hasOwnProp(b, 'toString')) {
          a.toString = b.toString;
      }

      if (hasOwnProp(b, 'valueOf')) {
          a.valueOf = b.valueOf;
      }

      return a;
  }

  function createUTC (input, format, locale, strict) {
      return createLocalOrUTC(input, format, locale, strict, true).utc();
  }

  function defaultParsingFlags() {
      // We need to deep clone this object.
      return {
          empty           : false,
          unusedTokens    : [],
          unusedInput     : [],
          overflow        : -2,
          charsLeftOver   : 0,
          nullInput       : false,
          invalidMonth    : null,
          invalidFormat   : false,
          userInvalidated : false,
          iso             : false,
          parsedDateParts : [],
          meridiem        : null,
          rfc2822         : false,
          weekdayMismatch : false
      };
  }

  function getParsingFlags(m) {
      if (m._pf == null) {
          m._pf = defaultParsingFlags();
      }
      return m._pf;
  }

  var some;
  if (Array.prototype.some) {
      some = Array.prototype.some;
  } else {
      some = function (fun) {
          var t = Object(this);
          var len = t.length >>> 0;

          for (var i = 0; i < len; i++) {
              if (i in t && fun.call(this, t[i], i, t)) {
                  return true;
              }
          }

          return false;
      };
  }

  function isValid(m) {
      if (m._isValid == null) {
          var flags = getParsingFlags(m);
          var parsedParts = some.call(flags.parsedDateParts, function (i) {
              return i != null;
          });
          var isNowValid = !isNaN(m._d.getTime()) &&
              flags.overflow < 0 &&
              !flags.empty &&
              !flags.invalidMonth &&
              !flags.invalidWeekday &&
              !flags.weekdayMismatch &&
              !flags.nullInput &&
              !flags.invalidFormat &&
              !flags.userInvalidated &&
              (!flags.meridiem || (flags.meridiem && parsedParts));

          if (m._strict) {
              isNowValid = isNowValid &&
                  flags.charsLeftOver === 0 &&
                  flags.unusedTokens.length === 0 &&
                  flags.bigHour === undefined;
          }

          if (Object.isFrozen == null || !Object.isFrozen(m)) {
              m._isValid = isNowValid;
          }
          else {
              return isNowValid;
          }
      }
      return m._isValid;
  }

  function createInvalid (flags) {
      var m = createUTC(NaN);
      if (flags != null) {
          extend(getParsingFlags(m), flags);
      }
      else {
          getParsingFlags(m).userInvalidated = true;
      }

      return m;
  }

  // Plugins that add properties should also add the key here (null value),
  // so we can properly clone ourselves.
  var momentProperties = hooks.momentProperties = [];

  function copyConfig(to, from) {
      var i, prop, val;

      if (!isUndefined(from._isAMomentObject)) {
          to._isAMomentObject = from._isAMomentObject;
      }
      if (!isUndefined(from._i)) {
          to._i = from._i;
      }
      if (!isUndefined(from._f)) {
          to._f = from._f;
      }
      if (!isUndefined(from._l)) {
          to._l = from._l;
      }
      if (!isUndefined(from._strict)) {
          to._strict = from._strict;
      }
      if (!isUndefined(from._tzm)) {
          to._tzm = from._tzm;
      }
      if (!isUndefined(from._isUTC)) {
          to._isUTC = from._isUTC;
      }
      if (!isUndefined(from._offset)) {
          to._offset = from._offset;
      }
      if (!isUndefined(from._pf)) {
          to._pf = getParsingFlags(from);
      }
      if (!isUndefined(from._locale)) {
          to._locale = from._locale;
      }

      if (momentProperties.length > 0) {
          for (i = 0; i < momentProperties.length; i++) {
              prop = momentProperties[i];
              val = from[prop];
              if (!isUndefined(val)) {
                  to[prop] = val;
              }
          }
      }

      return to;
  }

  var updateInProgress = false;

  // Moment prototype object
  function Moment(config) {
      copyConfig(this, config);
      this._d = new Date(config._d != null ? config._d.getTime() : NaN);
      if (!this.isValid()) {
          this._d = new Date(NaN);
      }
      // Prevent infinite loop in case updateOffset creates new moment
      // objects.
      if (updateInProgress === false) {
          updateInProgress = true;
          hooks.updateOffset(this);
          updateInProgress = false;
      }
  }

  function isMoment (obj) {
      return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
  }

  function absFloor (number) {
      if (number < 0) {
          // -0 -> 0
          return Math.ceil(number) || 0;
      } else {
          return Math.floor(number);
      }
  }

  function toInt(argumentForCoercion) {
      var coercedNumber = +argumentForCoercion,
          value = 0;

      if (coercedNumber !== 0 && isFinite(coercedNumber)) {
          value = absFloor(coercedNumber);
      }

      return value;
  }

  // compare two arrays, return the number of differences
  function compareArrays(array1, array2, dontConvert) {
      var len = Math.min(array1.length, array2.length),
          lengthDiff = Math.abs(array1.length - array2.length),
          diffs = 0,
          i;
      for (i = 0; i < len; i++) {
          if ((dontConvert && array1[i] !== array2[i]) ||
              (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
              diffs++;
          }
      }
      return diffs + lengthDiff;
  }

  function warn(msg) {
      if (hooks.suppressDeprecationWarnings === false &&
              (typeof console !==  'undefined') && console.warn) {
          console.warn('Deprecation warning: ' + msg);
      }
  }

  function deprecate(msg, fn) {
      var firstTime = true;

      return extend(function () {
          if (hooks.deprecationHandler != null) {
              hooks.deprecationHandler(null, msg);
          }
          if (firstTime) {
              var args = [];
              var arg;
              for (var i = 0; i < arguments.length; i++) {
                  arg = '';
                  if (typeof arguments[i] === 'object') {
                      arg += '\n[' + i + '] ';
                      for (var key in arguments[0]) {
                          arg += key + ': ' + arguments[0][key] + ', ';
                      }
                      arg = arg.slice(0, -2); // Remove trailing comma and space
                  } else {
                      arg = arguments[i];
                  }
                  args.push(arg);
              }
              warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
              firstTime = false;
          }
          return fn.apply(this, arguments);
      }, fn);
  }

  var deprecations = {};

  function deprecateSimple(name, msg) {
      if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(name, msg);
      }
      if (!deprecations[name]) {
          warn(msg);
          deprecations[name] = true;
      }
  }

  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;

  function isFunction(input) {
      return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
  }

  function set (config) {
      var prop, i;
      for (i in config) {
          prop = config[i];
          if (isFunction(prop)) {
              this[i] = prop;
          } else {
              this['_' + i] = prop;
          }
      }
      this._config = config;
      // Lenient ordinal parsing accepts just a number in addition to
      // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
      // TODO: Remove "ordinalParse" fallback in next major release.
      this._dayOfMonthOrdinalParseLenient = new RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
              '|' + (/\d{1,2}/).source);
  }

  function mergeConfigs(parentConfig, childConfig) {
      var res = extend({}, parentConfig), prop;
      for (prop in childConfig) {
          if (hasOwnProp(childConfig, prop)) {
              if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                  res[prop] = {};
                  extend(res[prop], parentConfig[prop]);
                  extend(res[prop], childConfig[prop]);
              } else if (childConfig[prop] != null) {
                  res[prop] = childConfig[prop];
              } else {
                  delete res[prop];
              }
          }
      }
      for (prop in parentConfig) {
          if (hasOwnProp(parentConfig, prop) &&
                  !hasOwnProp(childConfig, prop) &&
                  isObject(parentConfig[prop])) {
              // make sure changes to properties don't modify parent config
              res[prop] = extend({}, res[prop]);
          }
      }
      return res;
  }

  function Locale(config) {
      if (config != null) {
          this.set(config);
      }
  }

  var keys;

  if (Object.keys) {
      keys = Object.keys;
  } else {
      keys = function (obj) {
          var i, res = [];
          for (i in obj) {
              if (hasOwnProp(obj, i)) {
                  res.push(i);
              }
          }
          return res;
      };
  }

  var defaultCalendar = {
      sameDay : '[Today at] LT',
      nextDay : '[Tomorrow at] LT',
      nextWeek : 'dddd [at] LT',
      lastDay : '[Yesterday at] LT',
      lastWeek : '[Last] dddd [at] LT',
      sameElse : 'L'
  };

  function calendar (key, mom, now) {
      var output = this._calendar[key] || this._calendar['sameElse'];
      return isFunction(output) ? output.call(mom, now) : output;
  }

  var defaultLongDateFormat = {
      LTS  : 'h:mm:ss A',
      LT   : 'h:mm A',
      L    : 'MM/DD/YYYY',
      LL   : 'MMMM D, YYYY',
      LLL  : 'MMMM D, YYYY h:mm A',
      LLLL : 'dddd, MMMM D, YYYY h:mm A'
  };

  function longDateFormat (key) {
      var format = this._longDateFormat[key],
          formatUpper = this._longDateFormat[key.toUpperCase()];

      if (format || !formatUpper) {
          return format;
      }

      this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
          return val.slice(1);
      });

      return this._longDateFormat[key];
  }

  var defaultInvalidDate = 'Invalid date';

  function invalidDate () {
      return this._invalidDate;
  }

  var defaultOrdinal = '%d';
  var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

  function ordinal (number) {
      return this._ordinal.replace('%d', number);
  }

  var defaultRelativeTime = {
      future : 'in %s',
      past   : '%s ago',
      s  : 'a few seconds',
      ss : '%d seconds',
      m  : 'a minute',
      mm : '%d minutes',
      h  : 'an hour',
      hh : '%d hours',
      d  : 'a day',
      dd : '%d days',
      M  : 'a month',
      MM : '%d months',
      y  : 'a year',
      yy : '%d years'
  };

  function relativeTime (number, withoutSuffix, string, isFuture) {
      var output = this._relativeTime[string];
      return (isFunction(output)) ?
          output(number, withoutSuffix, string, isFuture) :
          output.replace(/%d/i, number);
  }

  function pastFuture (diff, output) {
      var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
      return isFunction(format) ? format(output) : format.replace(/%s/i, output);
  }

  var aliases = {};

  function addUnitAlias (unit, shorthand) {
      var lowerCase = unit.toLowerCase();
      aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
  }

  function normalizeUnits(units) {
      return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
  }

  function normalizeObjectUnits(inputObject) {
      var normalizedInput = {},
          normalizedProp,
          prop;

      for (prop in inputObject) {
          if (hasOwnProp(inputObject, prop)) {
              normalizedProp = normalizeUnits(prop);
              if (normalizedProp) {
                  normalizedInput[normalizedProp] = inputObject[prop];
              }
          }
      }

      return normalizedInput;
  }

  var priorities = {};

  function addUnitPriority(unit, priority) {
      priorities[unit] = priority;
  }

  function getPrioritizedUnits(unitsObj) {
      var units = [];
      for (var u in unitsObj) {
          units.push({unit: u, priority: priorities[u]});
      }
      units.sort(function (a, b) {
          return a.priority - b.priority;
      });
      return units;
  }

  function zeroFill(number, targetLength, forceSign) {
      var absNumber = '' + Math.abs(number),
          zerosToFill = targetLength - absNumber.length,
          sign = number >= 0;
      return (sign ? (forceSign ? '+' : '') : '-') +
          Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }

  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

  var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

  var formatFunctions = {};

  var formatTokenFunctions = {};

  // token:    'M'
  // padded:   ['MM', 2]
  // ordinal:  'Mo'
  // callback: function () { this.month() + 1 }
  function addFormatToken (token, padded, ordinal, callback) {
      var func = callback;
      if (typeof callback === 'string') {
          func = function () {
              return this[callback]();
          };
      }
      if (token) {
          formatTokenFunctions[token] = func;
      }
      if (padded) {
          formatTokenFunctions[padded[0]] = function () {
              return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
          };
      }
      if (ordinal) {
          formatTokenFunctions[ordinal] = function () {
              return this.localeData().ordinal(func.apply(this, arguments), token);
          };
      }
  }

  function removeFormattingTokens(input) {
      if (input.match(/\[[\s\S]/)) {
          return input.replace(/^\[|\]$/g, '');
      }
      return input.replace(/\\/g, '');
  }

  function makeFormatFunction(format) {
      var array = format.match(formattingTokens), i, length;

      for (i = 0, length = array.length; i < length; i++) {
          if (formatTokenFunctions[array[i]]) {
              array[i] = formatTokenFunctions[array[i]];
          } else {
              array[i] = removeFormattingTokens(array[i]);
          }
      }

      return function (mom) {
          var output = '', i;
          for (i = 0; i < length; i++) {
              output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
          }
          return output;
      };
  }

  // format date using native date object
  function formatMoment(m, format) {
      if (!m.isValid()) {
          return m.localeData().invalidDate();
      }

      format = expandFormat(format, m.localeData());
      formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

      return formatFunctions[format](m);
  }

  function expandFormat(format, locale) {
      var i = 5;

      function replaceLongDateFormatTokens(input) {
          return locale.longDateFormat(input) || input;
      }

      localFormattingTokens.lastIndex = 0;
      while (i >= 0 && localFormattingTokens.test(format)) {
          format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
          localFormattingTokens.lastIndex = 0;
          i -= 1;
      }

      return format;
  }

  var match1         = /\d/;            //       0 - 9
  var match2         = /\d\d/;          //      00 - 99
  var match3         = /\d{3}/;         //     000 - 999
  var match4         = /\d{4}/;         //    0000 - 9999
  var match6         = /[+-]?\d{6}/;    // -999999 - 999999
  var match1to2      = /\d\d?/;         //       0 - 99
  var match3to4      = /\d\d\d\d?/;     //     999 - 9999
  var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
  var match1to3      = /\d{1,3}/;       //       0 - 999
  var match1to4      = /\d{1,4}/;       //       0 - 9999
  var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

  var matchUnsigned  = /\d+/;           //       0 - inf
  var matchSigned    = /[+-]?\d+/;      //    -inf - inf

  var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
  var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

  var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

  // any word (or two) characters or numbers including two/three word month in arabic.
  // includes scottish gaelic two word and hyphenated months
  var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

  var regexes = {};

  function addRegexToken (token, regex, strictRegex) {
      regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
          return (isStrict && strictRegex) ? strictRegex : regex;
      };
  }

  function getParseRegexForToken (token, config) {
      if (!hasOwnProp(regexes, token)) {
          return new RegExp(unescapeFormat(token));
      }

      return regexes[token](config._strict, config._locale);
  }

  // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
  function unescapeFormat(s) {
      return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
          return p1 || p2 || p3 || p4;
      }));
  }

  function regexEscape(s) {
      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  var tokens = {};

  function addParseToken (token, callback) {
      var i, func = callback;
      if (typeof token === 'string') {
          token = [token];
      }
      if (isNumber(callback)) {
          func = function (input, array) {
              array[callback] = toInt(input);
          };
      }
      for (i = 0; i < token.length; i++) {
          tokens[token[i]] = func;
      }
  }

  function addWeekParseToken (token, callback) {
      addParseToken(token, function (input, array, config, token) {
          config._w = config._w || {};
          callback(input, config._w, config, token);
      });
  }

  function addTimeToArrayFromToken(token, input, config) {
      if (input != null && hasOwnProp(tokens, token)) {
          tokens[token](input, config._a, config, token);
      }
  }

  var YEAR = 0;
  var MONTH = 1;
  var DATE = 2;
  var HOUR = 3;
  var MINUTE = 4;
  var SECOND = 5;
  var MILLISECOND = 6;
  var WEEK = 7;
  var WEEKDAY = 8;

  // FORMATTING

  addFormatToken('Y', 0, 0, function () {
      var y = this.year();
      return y <= 9999 ? '' + y : '+' + y;
  });

  addFormatToken(0, ['YY', 2], 0, function () {
      return this.year() % 100;
  });

  addFormatToken(0, ['YYYY',   4],       0, 'year');
  addFormatToken(0, ['YYYYY',  5],       0, 'year');
  addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

  // ALIASES

  addUnitAlias('year', 'y');

  // PRIORITIES

  addUnitPriority('year', 1);

  // PARSING

  addRegexToken('Y',      matchSigned);
  addRegexToken('YY',     match1to2, match2);
  addRegexToken('YYYY',   match1to4, match4);
  addRegexToken('YYYYY',  match1to6, match6);
  addRegexToken('YYYYYY', match1to6, match6);

  addParseToken(['YYYYY', 'YYYYYY'], YEAR);
  addParseToken('YYYY', function (input, array) {
      array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken('YY', function (input, array) {
      array[YEAR] = hooks.parseTwoDigitYear(input);
  });
  addParseToken('Y', function (input, array) {
      array[YEAR] = parseInt(input, 10);
  });

  // HELPERS

  function daysInYear(year) {
      return isLeapYear(year) ? 366 : 365;
  }

  function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  // HOOKS

  hooks.parseTwoDigitYear = function (input) {
      return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
  };

  // MOMENTS

  var getSetYear = makeGetSet('FullYear', true);

  function getIsLeapYear () {
      return isLeapYear(this.year());
  }

  function makeGetSet (unit, keepTime) {
      return function (value) {
          if (value != null) {
              set$1(this, unit, value);
              hooks.updateOffset(this, keepTime);
              return this;
          } else {
              return get(this, unit);
          }
      };
  }

  function get (mom, unit) {
      return mom.isValid() ?
          mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
  }

  function set$1 (mom, unit, value) {
      if (mom.isValid() && !isNaN(value)) {
          if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
              mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
          }
          else {
              mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
          }
      }
  }

  // MOMENTS

  function stringGet (units) {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
          return this[units]();
      }
      return this;
  }


  function stringSet (units, value) {
      if (typeof units === 'object') {
          units = normalizeObjectUnits(units);
          var prioritized = getPrioritizedUnits(units);
          for (var i = 0; i < prioritized.length; i++) {
              this[prioritized[i].unit](units[prioritized[i].unit]);
          }
      } else {
          units = normalizeUnits(units);
          if (isFunction(this[units])) {
              return this[units](value);
          }
      }
      return this;
  }

  function mod(n, x) {
      return ((n % x) + x) % x;
  }

  var indexOf;

  if (Array.prototype.indexOf) {
      indexOf = Array.prototype.indexOf;
  } else {
      indexOf = function (o) {
          // I know
          var i;
          for (i = 0; i < this.length; ++i) {
              if (this[i] === o) {
                  return i;
              }
          }
          return -1;
      };
  }

  function daysInMonth(year, month) {
      if (isNaN(year) || isNaN(month)) {
          return NaN;
      }
      var modMonth = mod(month, 12);
      year += (month - modMonth) / 12;
      return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
  }

  // FORMATTING

  addFormatToken('M', ['MM', 2], 'Mo', function () {
      return this.month() + 1;
  });

  addFormatToken('MMM', 0, 0, function (format) {
      return this.localeData().monthsShort(this, format);
  });

  addFormatToken('MMMM', 0, 0, function (format) {
      return this.localeData().months(this, format);
  });

  // ALIASES

  addUnitAlias('month', 'M');

  // PRIORITY

  addUnitPriority('month', 8);

  // PARSING

  addRegexToken('M',    match1to2);
  addRegexToken('MM',   match1to2, match2);
  addRegexToken('MMM',  function (isStrict, locale) {
      return locale.monthsShortRegex(isStrict);
  });
  addRegexToken('MMMM', function (isStrict, locale) {
      return locale.monthsRegex(isStrict);
  });

  addParseToken(['M', 'MM'], function (input, array) {
      array[MONTH] = toInt(input) - 1;
  });

  addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
      var month = config._locale.monthsParse(input, token, config._strict);
      // if we didn't find a month name, mark the date as invalid.
      if (month != null) {
          array[MONTH] = month;
      } else {
          getParsingFlags(config).invalidMonth = input;
      }
  });

  // LOCALES

  var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
  var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
  function localeMonths (m, format) {
      if (!m) {
          return isArray(this._months) ? this._months :
              this._months['standalone'];
      }
      return isArray(this._months) ? this._months[m.month()] :
          this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
  }

  var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
  function localeMonthsShort (m, format) {
      if (!m) {
          return isArray(this._monthsShort) ? this._monthsShort :
              this._monthsShort['standalone'];
      }
      return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
          this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
  }

  function handleStrictParse(monthName, format, strict) {
      var i, ii, mom, llc = monthName.toLocaleLowerCase();
      if (!this._monthsParse) {
          // this is not used
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
          for (i = 0; i < 12; ++i) {
              mom = createUTC([2000, i]);
              this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
              this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
          }
      }

      if (strict) {
          if (format === 'MMM') {
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
          } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
          }
      } else {
          if (format === 'MMM') {
              ii = indexOf.call(this._shortMonthsParse, llc);
              if (ii !== -1) {
                  return ii;
              }
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
          } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              if (ii !== -1) {
                  return ii;
              }
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
          }
      }
  }

  function localeMonthsParse (monthName, format, strict) {
      var i, mom, regex;

      if (this._monthsParseExact) {
          return handleStrictParse.call(this, monthName, format, strict);
      }

      if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
      }

      // TODO: add sorting
      // Sorting makes sure if one month (or abbr) is a prefix of another
      // see sorting in computeMonthsParse
      for (i = 0; i < 12; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, i]);
          if (strict && !this._longMonthsParse[i]) {
              this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
              this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
          }
          if (!strict && !this._monthsParse[i]) {
              regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
              this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
          }
          // test the regex
          if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
              return i;
          } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
              return i;
          } else if (!strict && this._monthsParse[i].test(monthName)) {
              return i;
          }
      }
  }

  // MOMENTS

  function setMonth (mom, value) {
      var dayOfMonth;

      if (!mom.isValid()) {
          // No op
          return mom;
      }

      if (typeof value === 'string') {
          if (/^\d+$/.test(value)) {
              value = toInt(value);
          } else {
              value = mom.localeData().monthsParse(value);
              // TODO: Another silent failure?
              if (!isNumber(value)) {
                  return mom;
              }
          }
      }

      dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
      mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
      return mom;
  }

  function getSetMonth (value) {
      if (value != null) {
          setMonth(this, value);
          hooks.updateOffset(this, true);
          return this;
      } else {
          return get(this, 'Month');
      }
  }

  function getDaysInMonth () {
      return daysInMonth(this.year(), this.month());
  }

  var defaultMonthsShortRegex = matchWord;
  function monthsShortRegex (isStrict) {
      if (this._monthsParseExact) {
          if (!hasOwnProp(this, '_monthsRegex')) {
              computeMonthsParse.call(this);
          }
          if (isStrict) {
              return this._monthsShortStrictRegex;
          } else {
              return this._monthsShortRegex;
          }
      } else {
          if (!hasOwnProp(this, '_monthsShortRegex')) {
              this._monthsShortRegex = defaultMonthsShortRegex;
          }
          return this._monthsShortStrictRegex && isStrict ?
              this._monthsShortStrictRegex : this._monthsShortRegex;
      }
  }

  var defaultMonthsRegex = matchWord;
  function monthsRegex (isStrict) {
      if (this._monthsParseExact) {
          if (!hasOwnProp(this, '_monthsRegex')) {
              computeMonthsParse.call(this);
          }
          if (isStrict) {
              return this._monthsStrictRegex;
          } else {
              return this._monthsRegex;
          }
      } else {
          if (!hasOwnProp(this, '_monthsRegex')) {
              this._monthsRegex = defaultMonthsRegex;
          }
          return this._monthsStrictRegex && isStrict ?
              this._monthsStrictRegex : this._monthsRegex;
      }
  }

  function computeMonthsParse () {
      function cmpLenRev(a, b) {
          return b.length - a.length;
      }

      var shortPieces = [], longPieces = [], mixedPieces = [],
          i, mom;
      for (i = 0; i < 12; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, i]);
          shortPieces.push(this.monthsShort(mom, ''));
          longPieces.push(this.months(mom, ''));
          mixedPieces.push(this.months(mom, ''));
          mixedPieces.push(this.monthsShort(mom, ''));
      }
      // Sorting makes sure if one month (or abbr) is a prefix of another it
      // will match the longer piece.
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      for (i = 0; i < 12; i++) {
          shortPieces[i] = regexEscape(shortPieces[i]);
          longPieces[i] = regexEscape(longPieces[i]);
      }
      for (i = 0; i < 24; i++) {
          mixedPieces[i] = regexEscape(mixedPieces[i]);
      }

      this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
      this._monthsShortRegex = this._monthsRegex;
      this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
      this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
  }

  function createDate (y, m, d, h, M, s, ms) {
      // can't just apply() to create a date:
      // https://stackoverflow.com/q/181348
      var date = new Date(y, m, d, h, M, s, ms);

      // the date constructor remaps years 0-99 to 1900-1999
      if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
          date.setFullYear(y);
      }
      return date;
  }

  function createUTCDate (y) {
      var date = new Date(Date.UTC.apply(null, arguments));

      // the Date.UTC function remaps years 0-99 to 1900-1999
      if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
          date.setUTCFullYear(y);
      }
      return date;
  }

  // start-of-first-week - start-of-year
  function firstWeekOffset(year, dow, doy) {
      var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
          fwd = 7 + dow - doy,
          // first-week day local weekday -- which local weekday is fwd
          fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

      return -fwdlw + fwd - 1;
  }

  // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
      var localWeekday = (7 + weekday - dow) % 7,
          weekOffset = firstWeekOffset(year, dow, doy),
          dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
          resYear, resDayOfYear;

      if (dayOfYear <= 0) {
          resYear = year - 1;
          resDayOfYear = daysInYear(resYear) + dayOfYear;
      } else if (dayOfYear > daysInYear(year)) {
          resYear = year + 1;
          resDayOfYear = dayOfYear - daysInYear(year);
      } else {
          resYear = year;
          resDayOfYear = dayOfYear;
      }

      return {
          year: resYear,
          dayOfYear: resDayOfYear
      };
  }

  function weekOfYear(mom, dow, doy) {
      var weekOffset = firstWeekOffset(mom.year(), dow, doy),
          week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
          resWeek, resYear;

      if (week < 1) {
          resYear = mom.year() - 1;
          resWeek = week + weeksInYear(resYear, dow, doy);
      } else if (week > weeksInYear(mom.year(), dow, doy)) {
          resWeek = week - weeksInYear(mom.year(), dow, doy);
          resYear = mom.year() + 1;
      } else {
          resYear = mom.year();
          resWeek = week;
      }

      return {
          week: resWeek,
          year: resYear
      };
  }

  function weeksInYear(year, dow, doy) {
      var weekOffset = firstWeekOffset(year, dow, doy),
          weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
      return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  }

  // FORMATTING

  addFormatToken('w', ['ww', 2], 'wo', 'week');
  addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

  // ALIASES

  addUnitAlias('week', 'w');
  addUnitAlias('isoWeek', 'W');

  // PRIORITIES

  addUnitPriority('week', 5);
  addUnitPriority('isoWeek', 5);

  // PARSING

  addRegexToken('w',  match1to2);
  addRegexToken('ww', match1to2, match2);
  addRegexToken('W',  match1to2);
  addRegexToken('WW', match1to2, match2);

  addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
      week[token.substr(0, 1)] = toInt(input);
  });

  // HELPERS

  // LOCALES

  function localeWeek (mom) {
      return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }

  var defaultLocaleWeek = {
      dow : 0, // Sunday is the first day of the week.
      doy : 6  // The week that contains Jan 1st is the first week of the year.
  };

  function localeFirstDayOfWeek () {
      return this._week.dow;
  }

  function localeFirstDayOfYear () {
      return this._week.doy;
  }

  // MOMENTS

  function getSetWeek (input) {
      var week = this.localeData().week(this);
      return input == null ? week : this.add((input - week) * 7, 'd');
  }

  function getSetISOWeek (input) {
      var week = weekOfYear(this, 1, 4).week;
      return input == null ? week : this.add((input - week) * 7, 'd');
  }

  // FORMATTING

  addFormatToken('d', 0, 'do', 'day');

  addFormatToken('dd', 0, 0, function (format) {
      return this.localeData().weekdaysMin(this, format);
  });

  addFormatToken('ddd', 0, 0, function (format) {
      return this.localeData().weekdaysShort(this, format);
  });

  addFormatToken('dddd', 0, 0, function (format) {
      return this.localeData().weekdays(this, format);
  });

  addFormatToken('e', 0, 0, 'weekday');
  addFormatToken('E', 0, 0, 'isoWeekday');

  // ALIASES

  addUnitAlias('day', 'd');
  addUnitAlias('weekday', 'e');
  addUnitAlias('isoWeekday', 'E');

  // PRIORITY
  addUnitPriority('day', 11);
  addUnitPriority('weekday', 11);
  addUnitPriority('isoWeekday', 11);

  // PARSING

  addRegexToken('d',    match1to2);
  addRegexToken('e',    match1to2);
  addRegexToken('E',    match1to2);
  addRegexToken('dd',   function (isStrict, locale) {
      return locale.weekdaysMinRegex(isStrict);
  });
  addRegexToken('ddd',   function (isStrict, locale) {
      return locale.weekdaysShortRegex(isStrict);
  });
  addRegexToken('dddd',   function (isStrict, locale) {
      return locale.weekdaysRegex(isStrict);
  });

  addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
      var weekday = config._locale.weekdaysParse(input, token, config._strict);
      // if we didn't get a weekday name, mark the date as invalid
      if (weekday != null) {
          week.d = weekday;
      } else {
          getParsingFlags(config).invalidWeekday = input;
      }
  });

  addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
      week[token] = toInt(input);
  });

  // HELPERS

  function parseWeekday(input, locale) {
      if (typeof input !== 'string') {
          return input;
      }

      if (!isNaN(input)) {
          return parseInt(input, 10);
      }

      input = locale.weekdaysParse(input);
      if (typeof input === 'number') {
          return input;
      }

      return null;
  }

  function parseIsoWeekday(input, locale) {
      if (typeof input === 'string') {
          return locale.weekdaysParse(input) % 7 || 7;
      }
      return isNaN(input) ? null : input;
  }

  // LOCALES

  var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
  function localeWeekdays (m, format) {
      if (!m) {
          return isArray(this._weekdays) ? this._weekdays :
              this._weekdays['standalone'];
      }
      return isArray(this._weekdays) ? this._weekdays[m.day()] :
          this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
  }

  var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
  function localeWeekdaysShort (m) {
      return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
  }

  var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
  function localeWeekdaysMin (m) {
      return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
  }

  function handleStrictParse$1(weekdayName, format, strict) {
      var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
      if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._minWeekdaysParse = [];

          for (i = 0; i < 7; ++i) {
              mom = createUTC([2000, 1]).day(i);
              this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
              this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
              this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
          }
      }

      if (strict) {
          if (format === 'dddd') {
              ii = indexOf.call(this._weekdaysParse, llc);
              return ii !== -1 ? ii : null;
          } else if (format === 'ddd') {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
          } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
          }
      } else {
          if (format === 'dddd') {
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                  return ii;
              }
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              if (ii !== -1) {
                  return ii;
              }
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
          } else if (format === 'ddd') {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              if (ii !== -1) {
                  return ii;
              }
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                  return ii;
              }
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
          } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              if (ii !== -1) {
                  return ii;
              }
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                  return ii;
              }
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
          }
      }
  }

  function localeWeekdaysParse (weekdayName, format, strict) {
      var i, mom, regex;

      if (this._weekdaysParseExact) {
          return handleStrictParse$1.call(this, weekdayName, format, strict);
      }

      if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._minWeekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._fullWeekdaysParse = [];
      }

      for (i = 0; i < 7; i++) {
          // make the regex if we don't have it already

          mom = createUTC([2000, 1]).day(i);
          if (strict && !this._fullWeekdaysParse[i]) {
              this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
              this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
              this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
          }
          if (!this._weekdaysParse[i]) {
              regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
              this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
          }
          // test the regex
          if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
              return i;
          } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
              return i;
          } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
              return i;
          } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
              return i;
          }
      }
  }

  // MOMENTS

  function getSetDayOfWeek (input) {
      if (!this.isValid()) {
          return input != null ? this : NaN;
      }
      var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      if (input != null) {
          input = parseWeekday(input, this.localeData());
          return this.add(input - day, 'd');
      } else {
          return day;
      }
  }

  function getSetLocaleDayOfWeek (input) {
      if (!this.isValid()) {
          return input != null ? this : NaN;
      }
      var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return input == null ? weekday : this.add(input - weekday, 'd');
  }

  function getSetISODayOfWeek (input) {
      if (!this.isValid()) {
          return input != null ? this : NaN;
      }

      // behaves the same as moment#day except
      // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
      // as a setter, sunday should belong to the previous week.

      if (input != null) {
          var weekday = parseIsoWeekday(input, this.localeData());
          return this.day(this.day() % 7 ? weekday : weekday - 7);
      } else {
          return this.day() || 7;
      }
  }

  var defaultWeekdaysRegex = matchWord;
  function weekdaysRegex (isStrict) {
      if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
              computeWeekdaysParse.call(this);
          }
          if (isStrict) {
              return this._weekdaysStrictRegex;
          } else {
              return this._weekdaysRegex;
          }
      } else {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
              this._weekdaysRegex = defaultWeekdaysRegex;
          }
          return this._weekdaysStrictRegex && isStrict ?
              this._weekdaysStrictRegex : this._weekdaysRegex;
      }
  }

  var defaultWeekdaysShortRegex = matchWord;
  function weekdaysShortRegex (isStrict) {
      if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
              computeWeekdaysParse.call(this);
          }
          if (isStrict) {
              return this._weekdaysShortStrictRegex;
          } else {
              return this._weekdaysShortRegex;
          }
      } else {
          if (!hasOwnProp(this, '_weekdaysShortRegex')) {
              this._weekdaysShortRegex = defaultWeekdaysShortRegex;
          }
          return this._weekdaysShortStrictRegex && isStrict ?
              this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
      }
  }

  var defaultWeekdaysMinRegex = matchWord;
  function weekdaysMinRegex (isStrict) {
      if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
              computeWeekdaysParse.call(this);
          }
          if (isStrict) {
              return this._weekdaysMinStrictRegex;
          } else {
              return this._weekdaysMinRegex;
          }
      } else {
          if (!hasOwnProp(this, '_weekdaysMinRegex')) {
              this._weekdaysMinRegex = defaultWeekdaysMinRegex;
          }
          return this._weekdaysMinStrictRegex && isStrict ?
              this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
      }
  }


  function computeWeekdaysParse () {
      function cmpLenRev(a, b) {
          return b.length - a.length;
      }

      var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
          i, mom, minp, shortp, longp;
      for (i = 0; i < 7; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, 1]).day(i);
          minp = this.weekdaysMin(mom, '');
          shortp = this.weekdaysShort(mom, '');
          longp = this.weekdays(mom, '');
          minPieces.push(minp);
          shortPieces.push(shortp);
          longPieces.push(longp);
          mixedPieces.push(minp);
          mixedPieces.push(shortp);
          mixedPieces.push(longp);
      }
      // Sorting makes sure if one weekday (or abbr) is a prefix of another it
      // will match the longer piece.
      minPieces.sort(cmpLenRev);
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      for (i = 0; i < 7; i++) {
          shortPieces[i] = regexEscape(shortPieces[i]);
          longPieces[i] = regexEscape(longPieces[i]);
          mixedPieces[i] = regexEscape(mixedPieces[i]);
      }

      this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
      this._weekdaysShortRegex = this._weekdaysRegex;
      this._weekdaysMinRegex = this._weekdaysRegex;

      this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
      this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
      this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
  }

  // FORMATTING

  function hFormat() {
      return this.hours() % 12 || 12;
  }

  function kFormat() {
      return this.hours() || 24;
  }

  addFormatToken('H', ['HH', 2], 0, 'hour');
  addFormatToken('h', ['hh', 2], 0, hFormat);
  addFormatToken('k', ['kk', 2], 0, kFormat);

  addFormatToken('hmm', 0, 0, function () {
      return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });

  addFormatToken('hmmss', 0, 0, function () {
      return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
          zeroFill(this.seconds(), 2);
  });

  addFormatToken('Hmm', 0, 0, function () {
      return '' + this.hours() + zeroFill(this.minutes(), 2);
  });

  addFormatToken('Hmmss', 0, 0, function () {
      return '' + this.hours() + zeroFill(this.minutes(), 2) +
          zeroFill(this.seconds(), 2);
  });

  function meridiem (token, lowercase) {
      addFormatToken(token, 0, 0, function () {
          return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
      });
  }

  meridiem('a', true);
  meridiem('A', false);

  // ALIASES

  addUnitAlias('hour', 'h');

  // PRIORITY
  addUnitPriority('hour', 13);

  // PARSING

  function matchMeridiem (isStrict, locale) {
      return locale._meridiemParse;
  }

  addRegexToken('a',  matchMeridiem);
  addRegexToken('A',  matchMeridiem);
  addRegexToken('H',  match1to2);
  addRegexToken('h',  match1to2);
  addRegexToken('k',  match1to2);
  addRegexToken('HH', match1to2, match2);
  addRegexToken('hh', match1to2, match2);
  addRegexToken('kk', match1to2, match2);

  addRegexToken('hmm', match3to4);
  addRegexToken('hmmss', match5to6);
  addRegexToken('Hmm', match3to4);
  addRegexToken('Hmmss', match5to6);

  addParseToken(['H', 'HH'], HOUR);
  addParseToken(['k', 'kk'], function (input, array, config) {
      var kInput = toInt(input);
      array[HOUR] = kInput === 24 ? 0 : kInput;
  });
  addParseToken(['a', 'A'], function (input, array, config) {
      config._isPm = config._locale.isPM(input);
      config._meridiem = input;
  });
  addParseToken(['h', 'hh'], function (input, array, config) {
      array[HOUR] = toInt(input);
      getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmm', function (input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
      getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmmss', function (input, array, config) {
      var pos1 = input.length - 4;
      var pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
      getParsingFlags(config).bigHour = true;
  });
  addParseToken('Hmm', function (input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken('Hmmss', function (input, array, config) {
      var pos1 = input.length - 4;
      var pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
  });

  // LOCALES

  function localeIsPM (input) {
      // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
      // Using charAt should be more compatible.
      return ((input + '').toLowerCase().charAt(0) === 'p');
  }

  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
  function localeMeridiem (hours, minutes, isLower) {
      if (hours > 11) {
          return isLower ? 'pm' : 'PM';
      } else {
          return isLower ? 'am' : 'AM';
      }
  }


  // MOMENTS

  // Setting the hour should keep the time, because the user explicitly
  // specified which hour they want. So trying to maintain the same hour (in
  // a new timezone) makes sense. Adding/subtracting hours does not follow
  // this rule.
  var getSetHour = makeGetSet('Hours', true);

  var baseConfig = {
      calendar: defaultCalendar,
      longDateFormat: defaultLongDateFormat,
      invalidDate: defaultInvalidDate,
      ordinal: defaultOrdinal,
      dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
      relativeTime: defaultRelativeTime,

      months: defaultLocaleMonths,
      monthsShort: defaultLocaleMonthsShort,

      week: defaultLocaleWeek,

      weekdays: defaultLocaleWeekdays,
      weekdaysMin: defaultLocaleWeekdaysMin,
      weekdaysShort: defaultLocaleWeekdaysShort,

      meridiemParse: defaultLocaleMeridiemParse
  };

  // internal storage for locale config files
  var locales = {};
  var localeFamilies = {};
  var globalLocale;

  function normalizeLocale(key) {
      return key ? key.toLowerCase().replace('_', '-') : key;
  }

  // pick the locale from the array
  // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
  // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
  function chooseLocale(names) {
      var i = 0, j, next, locale, split;

      while (i < names.length) {
          split = normalizeLocale(names[i]).split('-');
          j = split.length;
          next = normalizeLocale(names[i + 1]);
          next = next ? next.split('-') : null;
          while (j > 0) {
              locale = loadLocale(split.slice(0, j).join('-'));
              if (locale) {
                  return locale;
              }
              if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                  //the next array item is better than a shallower substring of this one
                  break;
              }
              j--;
          }
          i++;
      }
      return globalLocale;
  }

  function loadLocale(name) {
      var oldLocale = null;
      // TODO: Find a better way to register and load all the locales in Node
      if (!locales[name] && (typeof module !== 'undefined') &&
              module && module.exports) {
          try {
              oldLocale = globalLocale._abbr;
              var aliasedRequire = require;
              aliasedRequire('./locale/' + name);
              getSetGlobalLocale(oldLocale);
          } catch (e) {}
      }
      return locales[name];
  }

  // This function will load locale and then set the global locale.  If
  // no arguments are passed in, it will simply return the current global
  // locale key.
  function getSetGlobalLocale (key, values) {
      var data;
      if (key) {
          if (isUndefined(values)) {
              data = getLocale(key);
          }
          else {
              data = defineLocale(key, values);
          }

          if (data) {
              // moment.duration._locale = moment._locale = data;
              globalLocale = data;
          }
          else {
              if ((typeof console !==  'undefined') && console.warn) {
                  //warn user if arguments are passed but the locale could not be set
                  console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
              }
          }
      }

      return globalLocale._abbr;
  }

  function defineLocale (name, config) {
      if (config !== null) {
          var locale, parentConfig = baseConfig;
          config.abbr = name;
          if (locales[name] != null) {
              deprecateSimple('defineLocaleOverride',
                      'use moment.updateLocale(localeName, config) to change ' +
                      'an existing locale. moment.defineLocale(localeName, ' +
                      'config) should only be used for creating a new locale ' +
                      'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
              parentConfig = locales[name]._config;
          } else if (config.parentLocale != null) {
              if (locales[config.parentLocale] != null) {
                  parentConfig = locales[config.parentLocale]._config;
              } else {
                  locale = loadLocale(config.parentLocale);
                  if (locale != null) {
                      parentConfig = locale._config;
                  } else {
                      if (!localeFamilies[config.parentLocale]) {
                          localeFamilies[config.parentLocale] = [];
                      }
                      localeFamilies[config.parentLocale].push({
                          name: name,
                          config: config
                      });
                      return null;
                  }
              }
          }
          locales[name] = new Locale(mergeConfigs(parentConfig, config));

          if (localeFamilies[name]) {
              localeFamilies[name].forEach(function (x) {
                  defineLocale(x.name, x.config);
              });
          }

          // backwards compat for now: also set the locale
          // make sure we set the locale AFTER all child locales have been
          // created, so we won't end up with the child locale set.
          getSetGlobalLocale(name);


          return locales[name];
      } else {
          // useful for testing
          delete locales[name];
          return null;
      }
  }

  function updateLocale(name, config) {
      if (config != null) {
          var locale, tmpLocale, parentConfig = baseConfig;
          // MERGE
          tmpLocale = loadLocale(name);
          if (tmpLocale != null) {
              parentConfig = tmpLocale._config;
          }
          config = mergeConfigs(parentConfig, config);
          locale = new Locale(config);
          locale.parentLocale = locales[name];
          locales[name] = locale;

          // backwards compat for now: also set the locale
          getSetGlobalLocale(name);
      } else {
          // pass null for config to unupdate, useful for tests
          if (locales[name] != null) {
              if (locales[name].parentLocale != null) {
                  locales[name] = locales[name].parentLocale;
              } else if (locales[name] != null) {
                  delete locales[name];
              }
          }
      }
      return locales[name];
  }

  // returns locale data
  function getLocale (key) {
      var locale;

      if (key && key._locale && key._locale._abbr) {
          key = key._locale._abbr;
      }

      if (!key) {
          return globalLocale;
      }

      if (!isArray(key)) {
          //short-circuit everything else
          locale = loadLocale(key);
          if (locale) {
              return locale;
          }
          key = [key];
      }

      return chooseLocale(key);
  }

  function listLocales() {
      return keys(locales);
  }

  function checkOverflow (m) {
      var overflow;
      var a = m._a;

      if (a && getParsingFlags(m).overflow === -2) {
          overflow =
              a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
              a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
              a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
              a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
              a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
              a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
              -1;

          if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
              overflow = DATE;
          }
          if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
              overflow = WEEK;
          }
          if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
              overflow = WEEKDAY;
          }

          getParsingFlags(m).overflow = overflow;
      }

      return m;
  }

  // Pick the first defined of two or three arguments.
  function defaults(a, b, c) {
      if (a != null) {
          return a;
      }
      if (b != null) {
          return b;
      }
      return c;
  }

  function currentDateArray(config) {
      // hooks is actually the exported moment object
      var nowValue = new Date(hooks.now());
      if (config._useUTC) {
          return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
      }
      return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }

  // convert an array to a date.
  // the array should mirror the parameters below
  // note: all values past the year are optional and will default to the lowest possible value.
  // [year, month, day , hour, minute, second, millisecond]
  function configFromArray (config) {
      var i, date, input = [], currentDate, expectedWeekday, yearToUse;

      if (config._d) {
          return;
      }

      currentDate = currentDateArray(config);

      //compute day of the year from weeks and weekdays
      if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
          dayOfYearFromWeekInfo(config);
      }

      //if the day of the year is set, figure out what it is
      if (config._dayOfYear != null) {
          yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

          if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
              getParsingFlags(config)._overflowDayOfYear = true;
          }

          date = createUTCDate(yearToUse, 0, config._dayOfYear);
          config._a[MONTH] = date.getUTCMonth();
          config._a[DATE] = date.getUTCDate();
      }

      // Default to current date.
      // * if no year, month, day of month are given, default to today
      // * if day of month is given, default month and year
      // * if month is given, default only year
      // * if year is given, don't default anything
      for (i = 0; i < 3 && config._a[i] == null; ++i) {
          config._a[i] = input[i] = currentDate[i];
      }

      // Zero out whatever was not defaulted, including time
      for (; i < 7; i++) {
          config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
      }

      // Check for 24:00:00.000
      if (config._a[HOUR] === 24 &&
              config._a[MINUTE] === 0 &&
              config._a[SECOND] === 0 &&
              config._a[MILLISECOND] === 0) {
          config._nextDay = true;
          config._a[HOUR] = 0;
      }

      config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
      expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

      // Apply timezone offset from input. The actual utcOffset can be changed
      // with parseZone.
      if (config._tzm != null) {
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      }

      if (config._nextDay) {
          config._a[HOUR] = 24;
      }

      // check for mismatching day of week
      if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
          getParsingFlags(config).weekdayMismatch = true;
      }
  }

  function dayOfYearFromWeekInfo(config) {
      var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

      w = config._w;
      if (w.GG != null || w.W != null || w.E != null) {
          dow = 1;
          doy = 4;

          // TODO: We need to take the current isoWeekYear, but that depends on
          // how we interpret now (local, utc, fixed offset). So create
          // a now version of current config (take local/utc/offset flags, and
          // create now).
          weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
          week = defaults(w.W, 1);
          weekday = defaults(w.E, 1);
          if (weekday < 1 || weekday > 7) {
              weekdayOverflow = true;
          }
      } else {
          dow = config._locale._week.dow;
          doy = config._locale._week.doy;

          var curWeek = weekOfYear(createLocal(), dow, doy);

          weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

          // Default to current week.
          week = defaults(w.w, curWeek.week);

          if (w.d != null) {
              // weekday -- low day numbers are considered next week
              weekday = w.d;
              if (weekday < 0 || weekday > 6) {
                  weekdayOverflow = true;
              }
          } else if (w.e != null) {
              // local weekday -- counting starts from begining of week
              weekday = w.e + dow;
              if (w.e < 0 || w.e > 6) {
                  weekdayOverflow = true;
              }
          } else {
              // default to begining of week
              weekday = dow;
          }
      }
      if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
          getParsingFlags(config)._overflowWeeks = true;
      } else if (weekdayOverflow != null) {
          getParsingFlags(config)._overflowWeekday = true;
      } else {
          temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
          config._a[YEAR] = temp.year;
          config._dayOfYear = temp.dayOfYear;
      }
  }

  // iso 8601 regex
  // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

  var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

  var isoDates = [
      ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
      ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
      ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
      ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
      ['YYYY-DDD', /\d{4}-\d{3}/],
      ['YYYY-MM', /\d{4}-\d\d/, false],
      ['YYYYYYMMDD', /[+-]\d{10}/],
      ['YYYYMMDD', /\d{8}/],
      // YYYYMM is NOT allowed by the standard
      ['GGGG[W]WWE', /\d{4}W\d{3}/],
      ['GGGG[W]WW', /\d{4}W\d{2}/, false],
      ['YYYYDDD', /\d{7}/]
  ];

  // iso time formats and regexes
  var isoTimes = [
      ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
      ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
      ['HH:mm:ss', /\d\d:\d\d:\d\d/],
      ['HH:mm', /\d\d:\d\d/],
      ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
      ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
      ['HHmmss', /\d\d\d\d\d\d/],
      ['HHmm', /\d\d\d\d/],
      ['HH', /\d\d/]
  ];

  var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

  // date from iso format
  function configFromISO(config) {
      var i, l,
          string = config._i,
          match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
          allowTime, dateFormat, timeFormat, tzFormat;

      if (match) {
          getParsingFlags(config).iso = true;

          for (i = 0, l = isoDates.length; i < l; i++) {
              if (isoDates[i][1].exec(match[1])) {
                  dateFormat = isoDates[i][0];
                  allowTime = isoDates[i][2] !== false;
                  break;
              }
          }
          if (dateFormat == null) {
              config._isValid = false;
              return;
          }
          if (match[3]) {
              for (i = 0, l = isoTimes.length; i < l; i++) {
                  if (isoTimes[i][1].exec(match[3])) {
                      // match[2] should be 'T' or space
                      timeFormat = (match[2] || ' ') + isoTimes[i][0];
                      break;
                  }
              }
              if (timeFormat == null) {
                  config._isValid = false;
                  return;
              }
          }
          if (!allowTime && timeFormat != null) {
              config._isValid = false;
              return;
          }
          if (match[4]) {
              if (tzRegex.exec(match[4])) {
                  tzFormat = 'Z';
              } else {
                  config._isValid = false;
                  return;
              }
          }
          config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
          configFromStringAndFormat(config);
      } else {
          config._isValid = false;
      }
  }

  // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
  var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

  function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
      var result = [
          untruncateYear(yearStr),
          defaultLocaleMonthsShort.indexOf(monthStr),
          parseInt(dayStr, 10),
          parseInt(hourStr, 10),
          parseInt(minuteStr, 10)
      ];

      if (secondStr) {
          result.push(parseInt(secondStr, 10));
      }

      return result;
  }

  function untruncateYear(yearStr) {
      var year = parseInt(yearStr, 10);
      if (year <= 49) {
          return 2000 + year;
      } else if (year <= 999) {
          return 1900 + year;
      }
      return year;
  }

  function preprocessRFC2822(s) {
      // Remove comments and folding whitespace and replace multiple-spaces with a single space
      return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  }

  function checkWeekday(weekdayStr, parsedInput, config) {
      if (weekdayStr) {
          // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
          var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
              weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
          if (weekdayProvided !== weekdayActual) {
              getParsingFlags(config).weekdayMismatch = true;
              config._isValid = false;
              return false;
          }
      }
      return true;
  }

  var obsOffsets = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60
  };

  function calculateOffset(obsOffset, militaryOffset, numOffset) {
      if (obsOffset) {
          return obsOffsets[obsOffset];
      } else if (militaryOffset) {
          // the only allowed military tz is Z
          return 0;
      } else {
          var hm = parseInt(numOffset, 10);
          var m = hm % 100, h = (hm - m) / 100;
          return h * 60 + m;
      }
  }

  // date and time from ref 2822 format
  function configFromRFC2822(config) {
      var match = rfc2822.exec(preprocessRFC2822(config._i));
      if (match) {
          var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
          if (!checkWeekday(match[1], parsedArray, config)) {
              return;
          }

          config._a = parsedArray;
          config._tzm = calculateOffset(match[8], match[9], match[10]);

          config._d = createUTCDate.apply(null, config._a);
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

          getParsingFlags(config).rfc2822 = true;
      } else {
          config._isValid = false;
      }
  }

  // date from iso format or fallback
  function configFromString(config) {
      var matched = aspNetJsonRegex.exec(config._i);

      if (matched !== null) {
          config._d = new Date(+matched[1]);
          return;
      }

      configFromISO(config);
      if (config._isValid === false) {
          delete config._isValid;
      } else {
          return;
      }

      configFromRFC2822(config);
      if (config._isValid === false) {
          delete config._isValid;
      } else {
          return;
      }

      // Final attempt, use Input Fallback
      hooks.createFromInputFallback(config);
  }

  hooks.createFromInputFallback = deprecate(
      'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
      'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
      'discouraged and will be removed in an upcoming major release. Please refer to ' +
      'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
      function (config) {
          config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
      }
  );

  // constant that refers to the ISO standard
  hooks.ISO_8601 = function () {};

  // constant that refers to the RFC 2822 form
  hooks.RFC_2822 = function () {};

  // date from string and format string
  function configFromStringAndFormat(config) {
      // TODO: Move this to another part of the creation flow to prevent circular deps
      if (config._f === hooks.ISO_8601) {
          configFromISO(config);
          return;
      }
      if (config._f === hooks.RFC_2822) {
          configFromRFC2822(config);
          return;
      }
      config._a = [];
      getParsingFlags(config).empty = true;

      // This array is used to make a Date, either with `new Date` or `Date.UTC`
      var string = '' + config._i,
          i, parsedInput, tokens, token, skipped,
          stringLength = string.length,
          totalParsedInputLength = 0;

      tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

      for (i = 0; i < tokens.length; i++) {
          token = tokens[i];
          parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
          // console.log('token', token, 'parsedInput', parsedInput,
          //         'regex', getParseRegexForToken(token, config));
          if (parsedInput) {
              skipped = string.substr(0, string.indexOf(parsedInput));
              if (skipped.length > 0) {
                  getParsingFlags(config).unusedInput.push(skipped);
              }
              string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
              totalParsedInputLength += parsedInput.length;
          }
          // don't parse if it's not a known token
          if (formatTokenFunctions[token]) {
              if (parsedInput) {
                  getParsingFlags(config).empty = false;
              }
              else {
                  getParsingFlags(config).unusedTokens.push(token);
              }
              addTimeToArrayFromToken(token, parsedInput, config);
          }
          else if (config._strict && !parsedInput) {
              getParsingFlags(config).unusedTokens.push(token);
          }
      }

      // add remaining unparsed input length to the string
      getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
      if (string.length > 0) {
          getParsingFlags(config).unusedInput.push(string);
      }

      // clear _12h flag if hour is <= 12
      if (config._a[HOUR] <= 12 &&
          getParsingFlags(config).bigHour === true &&
          config._a[HOUR] > 0) {
          getParsingFlags(config).bigHour = undefined;
      }

      getParsingFlags(config).parsedDateParts = config._a.slice(0);
      getParsingFlags(config).meridiem = config._meridiem;
      // handle meridiem
      config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

      configFromArray(config);
      checkOverflow(config);
  }


  function meridiemFixWrap (locale, hour, meridiem) {
      var isPm;

      if (meridiem == null) {
          // nothing to do
          return hour;
      }
      if (locale.meridiemHour != null) {
          return locale.meridiemHour(hour, meridiem);
      } else if (locale.isPM != null) {
          // Fallback
          isPm = locale.isPM(meridiem);
          if (isPm && hour < 12) {
              hour += 12;
          }
          if (!isPm && hour === 12) {
              hour = 0;
          }
          return hour;
      } else {
          // this is not supposed to happen
          return hour;
      }
  }

  // date from string and array of format strings
  function configFromStringAndArray(config) {
      var tempConfig,
          bestMoment,

          scoreToBeat,
          i,
          currentScore;

      if (config._f.length === 0) {
          getParsingFlags(config).invalidFormat = true;
          config._d = new Date(NaN);
          return;
      }

      for (i = 0; i < config._f.length; i++) {
          currentScore = 0;
          tempConfig = copyConfig({}, config);
          if (config._useUTC != null) {
              tempConfig._useUTC = config._useUTC;
          }
          tempConfig._f = config._f[i];
          configFromStringAndFormat(tempConfig);

          if (!isValid(tempConfig)) {
              continue;
          }

          // if there is any input that was not parsed add a penalty for that format
          currentScore += getParsingFlags(tempConfig).charsLeftOver;

          //or tokens
          currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

          getParsingFlags(tempConfig).score = currentScore;

          if (scoreToBeat == null || currentScore < scoreToBeat) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
          }
      }

      extend(config, bestMoment || tempConfig);
  }

  function configFromObject(config) {
      if (config._d) {
          return;
      }

      var i = normalizeObjectUnits(config._i);
      config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
          return obj && parseInt(obj, 10);
      });

      configFromArray(config);
  }

  function createFromConfig (config) {
      var res = new Moment(checkOverflow(prepareConfig(config)));
      if (res._nextDay) {
          // Adding is smart enough around DST
          res.add(1, 'd');
          res._nextDay = undefined;
      }

      return res;
  }

  function prepareConfig (config) {
      var input = config._i,
          format = config._f;

      config._locale = config._locale || getLocale(config._l);

      if (input === null || (format === undefined && input === '')) {
          return createInvalid({nullInput: true});
      }

      if (typeof input === 'string') {
          config._i = input = config._locale.preparse(input);
      }

      if (isMoment(input)) {
          return new Moment(checkOverflow(input));
      } else if (isDate(input)) {
          config._d = input;
      } else if (isArray(format)) {
          configFromStringAndArray(config);
      } else if (format) {
          configFromStringAndFormat(config);
      }  else {
          configFromInput(config);
      }

      if (!isValid(config)) {
          config._d = null;
      }

      return config;
  }

  function configFromInput(config) {
      var input = config._i;
      if (isUndefined(input)) {
          config._d = new Date(hooks.now());
      } else if (isDate(input)) {
          config._d = new Date(input.valueOf());
      } else if (typeof input === 'string') {
          configFromString(config);
      } else if (isArray(input)) {
          config._a = map(input.slice(0), function (obj) {
              return parseInt(obj, 10);
          });
          configFromArray(config);
      } else if (isObject(input)) {
          configFromObject(config);
      } else if (isNumber(input)) {
          // from milliseconds
          config._d = new Date(input);
      } else {
          hooks.createFromInputFallback(config);
      }
  }

  function createLocalOrUTC (input, format, locale, strict, isUTC) {
      var c = {};

      if (locale === true || locale === false) {
          strict = locale;
          locale = undefined;
      }

      if ((isObject(input) && isObjectEmpty(input)) ||
              (isArray(input) && input.length === 0)) {
          input = undefined;
      }
      // object construction must be done this way.
      // https://github.com/moment/moment/issues/1423
      c._isAMomentObject = true;
      c._useUTC = c._isUTC = isUTC;
      c._l = locale;
      c._i = input;
      c._f = format;
      c._strict = strict;

      return createFromConfig(c);
  }

  function createLocal (input, format, locale, strict) {
      return createLocalOrUTC(input, format, locale, strict, false);
  }

  var prototypeMin = deprecate(
      'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
      function () {
          var other = createLocal.apply(null, arguments);
          if (this.isValid() && other.isValid()) {
              return other < this ? this : other;
          } else {
              return createInvalid();
          }
      }
  );

  var prototypeMax = deprecate(
      'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
      function () {
          var other = createLocal.apply(null, arguments);
          if (this.isValid() && other.isValid()) {
              return other > this ? this : other;
          } else {
              return createInvalid();
          }
      }
  );

  // Pick a moment m from moments so that m[fn](other) is true for all
  // other. This relies on the function fn to be transitive.
  //
  // moments should either be an array of moment objects or an array, whose
  // first element is an array of moment objects.
  function pickBy(fn, moments) {
      var res, i;
      if (moments.length === 1 && isArray(moments[0])) {
          moments = moments[0];
      }
      if (!moments.length) {
          return createLocal();
      }
      res = moments[0];
      for (i = 1; i < moments.length; ++i) {
          if (!moments[i].isValid() || moments[i][fn](res)) {
              res = moments[i];
          }
      }
      return res;
  }

  // TODO: Use [].sort instead?
  function min () {
      var args = [].slice.call(arguments, 0);

      return pickBy('isBefore', args);
  }

  function max () {
      var args = [].slice.call(arguments, 0);

      return pickBy('isAfter', args);
  }

  var now = function () {
      return Date.now ? Date.now() : +(new Date());
  };

  var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

  function isDurationValid(m) {
      for (var key in m) {
          if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
              return false;
          }
      }

      var unitHasDecimal = false;
      for (var i = 0; i < ordering.length; ++i) {
          if (m[ordering[i]]) {
              if (unitHasDecimal) {
                  return false; // only allow non-integers for smallest unit
              }
              if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                  unitHasDecimal = true;
              }
          }
      }

      return true;
  }

  function isValid$1() {
      return this._isValid;
  }

  function createInvalid$1() {
      return createDuration(NaN);
  }

  function Duration (duration) {
      var normalizedInput = normalizeObjectUnits(duration),
          years = normalizedInput.year || 0,
          quarters = normalizedInput.quarter || 0,
          months = normalizedInput.month || 0,
          weeks = normalizedInput.week || 0,
          days = normalizedInput.day || 0,
          hours = normalizedInput.hour || 0,
          minutes = normalizedInput.minute || 0,
          seconds = normalizedInput.second || 0,
          milliseconds = normalizedInput.millisecond || 0;

      this._isValid = isDurationValid(normalizedInput);

      // representation for dateAddRemove
      this._milliseconds = +milliseconds +
          seconds * 1e3 + // 1000
          minutes * 6e4 + // 1000 * 60
          hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
      // Because of dateAddRemove treats 24 hours as different from a
      // day when working around DST, we need to store them separately
      this._days = +days +
          weeks * 7;
      // It is impossible to translate months into days without knowing
      // which months you are are talking about, so we have to store
      // it separately.
      this._months = +months +
          quarters * 3 +
          years * 12;

      this._data = {};

      this._locale = getLocale();

      this._bubble();
  }

  function isDuration (obj) {
      return obj instanceof Duration;
  }

  function absRound (number) {
      if (number < 0) {
          return Math.round(-1 * number) * -1;
      } else {
          return Math.round(number);
      }
  }

  // FORMATTING

  function offset (token, separator) {
      addFormatToken(token, 0, 0, function () {
          var offset = this.utcOffset();
          var sign = '+';
          if (offset < 0) {
              offset = -offset;
              sign = '-';
          }
          return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
      });
  }

  offset('Z', ':');
  offset('ZZ', '');

  // PARSING

  addRegexToken('Z',  matchShortOffset);
  addRegexToken('ZZ', matchShortOffset);
  addParseToken(['Z', 'ZZ'], function (input, array, config) {
      config._useUTC = true;
      config._tzm = offsetFromString(matchShortOffset, input);
  });

  // HELPERS

  // timezone chunker
  // '+10:00' > ['10',  '00']
  // '-1530'  > ['-15', '30']
  var chunkOffset = /([\+\-]|\d\d)/gi;

  function offsetFromString(matcher, string) {
      var matches = (string || '').match(matcher);

      if (matches === null) {
          return null;
      }

      var chunk   = matches[matches.length - 1] || [];
      var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
      var minutes = +(parts[1] * 60) + toInt(parts[2]);

      return minutes === 0 ?
        0 :
        parts[0] === '+' ? minutes : -minutes;
  }

  // Return a moment from input, that is local/utc/zone equivalent to model.
  function cloneWithOffset(input, model) {
      var res, diff;
      if (model._isUTC) {
          res = model.clone();
          diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
          // Use low-level api, because this fn is low-level api.
          res._d.setTime(res._d.valueOf() + diff);
          hooks.updateOffset(res, false);
          return res;
      } else {
          return createLocal(input).local();
      }
  }

  function getDateOffset (m) {
      // On Firefox.24 Date#getTimezoneOffset returns a floating point.
      // https://github.com/moment/moment/pull/1871
      return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
  }

  // HOOKS

  // This function will be called whenever a moment is mutated.
  // It is intended to keep the offset in sync with the timezone.
  hooks.updateOffset = function () {};

  // MOMENTS

  // keepLocalTime = true means only change the timezone, without
  // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
  // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
  // +0200, so we adjust the time as needed, to be valid.
  //
  // Keeping the time actually adds/subtracts (one hour)
  // from the actual represented time. That is why we call updateOffset
  // a second time. In case it wants us to change the offset again
  // _changeInProgress == true case, then we have to adjust, because
  // there is no such time in the given timezone.
  function getSetOffset (input, keepLocalTime, keepMinutes) {
      var offset = this._offset || 0,
          localAdjust;
      if (!this.isValid()) {
          return input != null ? this : NaN;
      }
      if (input != null) {
          if (typeof input === 'string') {
              input = offsetFromString(matchShortOffset, input);
              if (input === null) {
                  return this;
              }
          } else if (Math.abs(input) < 16 && !keepMinutes) {
              input = input * 60;
          }
          if (!this._isUTC && keepLocalTime) {
              localAdjust = getDateOffset(this);
          }
          this._offset = input;
          this._isUTC = true;
          if (localAdjust != null) {
              this.add(localAdjust, 'm');
          }
          if (offset !== input) {
              if (!keepLocalTime || this._changeInProgress) {
                  addSubtract(this, createDuration(input - offset, 'm'), 1, false);
              } else if (!this._changeInProgress) {
                  this._changeInProgress = true;
                  hooks.updateOffset(this, true);
                  this._changeInProgress = null;
              }
          }
          return this;
      } else {
          return this._isUTC ? offset : getDateOffset(this);
      }
  }

  function getSetZone (input, keepLocalTime) {
      if (input != null) {
          if (typeof input !== 'string') {
              input = -input;
          }

          this.utcOffset(input, keepLocalTime);

          return this;
      } else {
          return -this.utcOffset();
      }
  }

  function setOffsetToUTC (keepLocalTime) {
      return this.utcOffset(0, keepLocalTime);
  }

  function setOffsetToLocal (keepLocalTime) {
      if (this._isUTC) {
          this.utcOffset(0, keepLocalTime);
          this._isUTC = false;

          if (keepLocalTime) {
              this.subtract(getDateOffset(this), 'm');
          }
      }
      return this;
  }

  function setOffsetToParsedOffset () {
      if (this._tzm != null) {
          this.utcOffset(this._tzm, false, true);
      } else if (typeof this._i === 'string') {
          var tZone = offsetFromString(matchOffset, this._i);
          if (tZone != null) {
              this.utcOffset(tZone);
          }
          else {
              this.utcOffset(0, true);
          }
      }
      return this;
  }

  function hasAlignedHourOffset (input) {
      if (!this.isValid()) {
          return false;
      }
      input = input ? createLocal(input).utcOffset() : 0;

      return (this.utcOffset() - input) % 60 === 0;
  }

  function isDaylightSavingTime () {
      return (
          this.utcOffset() > this.clone().month(0).utcOffset() ||
          this.utcOffset() > this.clone().month(5).utcOffset()
      );
  }

  function isDaylightSavingTimeShifted () {
      if (!isUndefined(this._isDSTShifted)) {
          return this._isDSTShifted;
      }

      var c = {};

      copyConfig(c, this);
      c = prepareConfig(c);

      if (c._a) {
          var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
          this._isDSTShifted = this.isValid() &&
              compareArrays(c._a, other.toArray()) > 0;
      } else {
          this._isDSTShifted = false;
      }

      return this._isDSTShifted;
  }

  function isLocal () {
      return this.isValid() ? !this._isUTC : false;
  }

  function isUtcOffset () {
      return this.isValid() ? this._isUTC : false;
  }

  function isUtc () {
      return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }

  // ASP.NET json date format regex
  var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

  // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
  // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
  // and further modified to allow for strings containing both week and day
  var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

  function createDuration (input, key) {
      var duration = input,
          // matching against regexp is expensive, do it on demand
          match = null,
          sign,
          ret,
          diffRes;

      if (isDuration(input)) {
          duration = {
              ms : input._milliseconds,
              d  : input._days,
              M  : input._months
          };
      } else if (isNumber(input)) {
          duration = {};
          if (key) {
              duration[key] = input;
          } else {
              duration.milliseconds = input;
          }
      } else if (!!(match = aspNetRegex.exec(input))) {
          sign = (match[1] === '-') ? -1 : 1;
          duration = {
              y  : 0,
              d  : toInt(match[DATE])                         * sign,
              h  : toInt(match[HOUR])                         * sign,
              m  : toInt(match[MINUTE])                       * sign,
              s  : toInt(match[SECOND])                       * sign,
              ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
          };
      } else if (!!(match = isoRegex.exec(input))) {
          sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
          duration = {
              y : parseIso(match[2], sign),
              M : parseIso(match[3], sign),
              w : parseIso(match[4], sign),
              d : parseIso(match[5], sign),
              h : parseIso(match[6], sign),
              m : parseIso(match[7], sign),
              s : parseIso(match[8], sign)
          };
      } else if (duration == null) {// checks for null or undefined
          duration = {};
      } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
          diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

          duration = {};
          duration.ms = diffRes.milliseconds;
          duration.M = diffRes.months;
      }

      ret = new Duration(duration);

      if (isDuration(input) && hasOwnProp(input, '_locale')) {
          ret._locale = input._locale;
      }

      return ret;
  }

  createDuration.fn = Duration.prototype;
  createDuration.invalid = createInvalid$1;

  function parseIso (inp, sign) {
      // We'd normally use ~~inp for this, but unfortunately it also
      // converts floats to ints.
      // inp may be undefined, so careful calling replace on it.
      var res = inp && parseFloat(inp.replace(',', '.'));
      // apply sign while we're at it
      return (isNaN(res) ? 0 : res) * sign;
  }

  function positiveMomentsDifference(base, other) {
      var res = {milliseconds: 0, months: 0};

      res.months = other.month() - base.month() +
          (other.year() - base.year()) * 12;
      if (base.clone().add(res.months, 'M').isAfter(other)) {
          --res.months;
      }

      res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

      return res;
  }

  function momentsDifference(base, other) {
      var res;
      if (!(base.isValid() && other.isValid())) {
          return {milliseconds: 0, months: 0};
      }

      other = cloneWithOffset(other, base);
      if (base.isBefore(other)) {
          res = positiveMomentsDifference(base, other);
      } else {
          res = positiveMomentsDifference(other, base);
          res.milliseconds = -res.milliseconds;
          res.months = -res.months;
      }

      return res;
  }

  // TODO: remove 'name' arg after deprecation is removed
  function createAdder(direction, name) {
      return function (val, period) {
          var dur, tmp;
          //invert the arguments, but complain about it
          if (period !== null && !isNaN(+period)) {
              deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
              'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
              tmp = val; val = period; period = tmp;
          }

          val = typeof val === 'string' ? +val : val;
          dur = createDuration(val, period);
          addSubtract(this, dur, direction);
          return this;
      };
  }

  function addSubtract (mom, duration, isAdding, updateOffset) {
      var milliseconds = duration._milliseconds,
          days = absRound(duration._days),
          months = absRound(duration._months);

      if (!mom.isValid()) {
          // No op
          return;
      }

      updateOffset = updateOffset == null ? true : updateOffset;

      if (months) {
          setMonth(mom, get(mom, 'Month') + months * isAdding);
      }
      if (days) {
          set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
      }
      if (milliseconds) {
          mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
      }
      if (updateOffset) {
          hooks.updateOffset(mom, days || months);
      }
  }

  var add      = createAdder(1, 'add');
  var subtract = createAdder(-1, 'subtract');

  function getCalendarFormat(myMoment, now) {
      var diff = myMoment.diff(now, 'days', true);
      return diff < -6 ? 'sameElse' :
              diff < -1 ? 'lastWeek' :
              diff < 0 ? 'lastDay' :
              diff < 1 ? 'sameDay' :
              diff < 2 ? 'nextDay' :
              diff < 7 ? 'nextWeek' : 'sameElse';
  }

  function calendar$1 (time, formats) {
      // We want to compare the start of today, vs this.
      // Getting start-of-today depends on whether we're local/utc/offset or not.
      var now = time || createLocal(),
          sod = cloneWithOffset(now, this).startOf('day'),
          format = hooks.calendarFormat(this, sod) || 'sameElse';

      var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

      return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
  }

  function clone () {
      return new Moment(this);
  }

  function isAfter (input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
          return false;
      }
      units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
      if (units === 'millisecond') {
          return this.valueOf() > localInput.valueOf();
      } else {
          return localInput.valueOf() < this.clone().startOf(units).valueOf();
      }
  }

  function isBefore (input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
          return false;
      }
      units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
      if (units === 'millisecond') {
          return this.valueOf() < localInput.valueOf();
      } else {
          return this.clone().endOf(units).valueOf() < localInput.valueOf();
      }
  }

  function isBetween (from, to, units, inclusivity) {
      inclusivity = inclusivity || '()';
      return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
          (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
  }

  function isSame (input, units) {
      var localInput = isMoment(input) ? input : createLocal(input),
          inputMs;
      if (!(this.isValid() && localInput.isValid())) {
          return false;
      }
      units = normalizeUnits(units || 'millisecond');
      if (units === 'millisecond') {
          return this.valueOf() === localInput.valueOf();
      } else {
          inputMs = localInput.valueOf();
          return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
      }
  }

  function isSameOrAfter (input, units) {
      return this.isSame(input, units) || this.isAfter(input,units);
  }

  function isSameOrBefore (input, units) {
      return this.isSame(input, units) || this.isBefore(input,units);
  }

  function diff (input, units, asFloat) {
      var that,
          zoneDelta,
          output;

      if (!this.isValid()) {
          return NaN;
      }

      that = cloneWithOffset(input, this);

      if (!that.isValid()) {
          return NaN;
      }

      zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

      units = normalizeUnits(units);

      switch (units) {
          case 'year': output = monthDiff(this, that) / 12; break;
          case 'month': output = monthDiff(this, that); break;
          case 'quarter': output = monthDiff(this, that) / 3; break;
          case 'second': output = (this - that) / 1e3; break; // 1000
          case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
          case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
          case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
          case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
          default: output = this - that;
      }

      return asFloat ? output : absFloor(output);
  }

  function monthDiff (a, b) {
      // difference in months
      var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
          // b is in (anchor - 1 month, anchor + 1 month)
          anchor = a.clone().add(wholeMonthDiff, 'months'),
          anchor2, adjust;

      if (b - anchor < 0) {
          anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
          // linear across the month
          adjust = (b - anchor) / (anchor - anchor2);
      } else {
          anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
          // linear across the month
          adjust = (b - anchor) / (anchor2 - anchor);
      }

      //check for negative zero, return zero if negative zero
      return -(wholeMonthDiff + adjust) || 0;
  }

  hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
  hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

  function toString () {
      return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
  }

  function toISOString(keepOffset) {
      if (!this.isValid()) {
          return null;
      }
      var utc = keepOffset !== true;
      var m = utc ? this.clone().utc() : this;
      if (m.year() < 0 || m.year() > 9999) {
          return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
      }
      if (isFunction(Date.prototype.toISOString)) {
          // native implementation is ~50x faster, use it when we can
          if (utc) {
              return this.toDate().toISOString();
          } else {
              return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
          }
      }
      return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
  }

  /**
   * Return a human readable representation of a moment that can
   * also be evaluated to get a new moment which is the same
   *
   * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
   */
  function inspect () {
      if (!this.isValid()) {
          return 'moment.invalid(/* ' + this._i + ' */)';
      }
      var func = 'moment';
      var zone = '';
      if (!this.isLocal()) {
          func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
          zone = 'Z';
      }
      var prefix = '[' + func + '("]';
      var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
      var datetime = '-MM-DD[T]HH:mm:ss.SSS';
      var suffix = zone + '[")]';

      return this.format(prefix + year + datetime + suffix);
  }

  function format (inputString) {
      if (!inputString) {
          inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
      }
      var output = formatMoment(this, inputString);
      return this.localeData().postformat(output);
  }

  function from (time, withoutSuffix) {
      if (this.isValid() &&
              ((isMoment(time) && time.isValid()) ||
               createLocal(time).isValid())) {
          return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
      } else {
          return this.localeData().invalidDate();
      }
  }

  function fromNow (withoutSuffix) {
      return this.from(createLocal(), withoutSuffix);
  }

  function to (time, withoutSuffix) {
      if (this.isValid() &&
              ((isMoment(time) && time.isValid()) ||
               createLocal(time).isValid())) {
          return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
      } else {
          return this.localeData().invalidDate();
      }
  }

  function toNow (withoutSuffix) {
      return this.to(createLocal(), withoutSuffix);
  }

  // If passed a locale key, it will set the locale for this
  // instance.  Otherwise, it will return the locale configuration
  // variables for this instance.
  function locale (key) {
      var newLocaleData;

      if (key === undefined) {
          return this._locale._abbr;
      } else {
          newLocaleData = getLocale(key);
          if (newLocaleData != null) {
              this._locale = newLocaleData;
          }
          return this;
      }
  }

  var lang = deprecate(
      'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
      function (key) {
          if (key === undefined) {
              return this.localeData();
          } else {
              return this.locale(key);
          }
      }
  );

  function localeData () {
      return this._locale;
  }

  function startOf (units) {
      units = normalizeUnits(units);
      // the following switch intentionally omits break keywords
      // to utilize falling through the cases.
      switch (units) {
          case 'year':
              this.month(0);
              /* falls through */
          case 'quarter':
          case 'month':
              this.date(1);
              /* falls through */
          case 'week':
          case 'isoWeek':
          case 'day':
          case 'date':
              this.hours(0);
              /* falls through */
          case 'hour':
              this.minutes(0);
              /* falls through */
          case 'minute':
              this.seconds(0);
              /* falls through */
          case 'second':
              this.milliseconds(0);
      }

      // weeks are a special case
      if (units === 'week') {
          this.weekday(0);
      }
      if (units === 'isoWeek') {
          this.isoWeekday(1);
      }

      // quarters are also special
      if (units === 'quarter') {
          this.month(Math.floor(this.month() / 3) * 3);
      }

      return this;
  }

  function endOf (units) {
      units = normalizeUnits(units);
      if (units === undefined || units === 'millisecond') {
          return this;
      }

      // 'date' is an alias for 'day', so it should be considered as such.
      if (units === 'date') {
          units = 'day';
      }

      return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
  }

  function valueOf () {
      return this._d.valueOf() - ((this._offset || 0) * 60000);
  }

  function unix () {
      return Math.floor(this.valueOf() / 1000);
  }

  function toDate () {
      return new Date(this.valueOf());
  }

  function toArray () {
      var m = this;
      return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
  }

  function toObject () {
      var m = this;
      return {
          years: m.year(),
          months: m.month(),
          date: m.date(),
          hours: m.hours(),
          minutes: m.minutes(),
          seconds: m.seconds(),
          milliseconds: m.milliseconds()
      };
  }

  function toJSON () {
      // new Date(NaN).toJSON() === null
      return this.isValid() ? this.toISOString() : null;
  }

  function isValid$2 () {
      return isValid(this);
  }

  function parsingFlags () {
      return extend({}, getParsingFlags(this));
  }

  function invalidAt () {
      return getParsingFlags(this).overflow;
  }

  function creationData() {
      return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
      };
  }

  // FORMATTING

  addFormatToken(0, ['gg', 2], 0, function () {
      return this.weekYear() % 100;
  });

  addFormatToken(0, ['GG', 2], 0, function () {
      return this.isoWeekYear() % 100;
  });

  function addWeekYearFormatToken (token, getter) {
      addFormatToken(0, [token, token.length], 0, getter);
  }

  addWeekYearFormatToken('gggg',     'weekYear');
  addWeekYearFormatToken('ggggg',    'weekYear');
  addWeekYearFormatToken('GGGG',  'isoWeekYear');
  addWeekYearFormatToken('GGGGG', 'isoWeekYear');

  // ALIASES

  addUnitAlias('weekYear', 'gg');
  addUnitAlias('isoWeekYear', 'GG');

  // PRIORITY

  addUnitPriority('weekYear', 1);
  addUnitPriority('isoWeekYear', 1);


  // PARSING

  addRegexToken('G',      matchSigned);
  addRegexToken('g',      matchSigned);
  addRegexToken('GG',     match1to2, match2);
  addRegexToken('gg',     match1to2, match2);
  addRegexToken('GGGG',   match1to4, match4);
  addRegexToken('gggg',   match1to4, match4);
  addRegexToken('GGGGG',  match1to6, match6);
  addRegexToken('ggggg',  match1to6, match6);

  addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
      week[token.substr(0, 2)] = toInt(input);
  });

  addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
      week[token] = hooks.parseTwoDigitYear(input);
  });

  // MOMENTS

  function getSetWeekYear (input) {
      return getSetWeekYearHelper.call(this,
              input,
              this.week(),
              this.weekday(),
              this.localeData()._week.dow,
              this.localeData()._week.doy);
  }

  function getSetISOWeekYear (input) {
      return getSetWeekYearHelper.call(this,
              input, this.isoWeek(), this.isoWeekday(), 1, 4);
  }

  function getISOWeeksInYear () {
      return weeksInYear(this.year(), 1, 4);
  }

  function getWeeksInYear () {
      var weekInfo = this.localeData()._week;
      return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }

  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
      var weeksTarget;
      if (input == null) {
          return weekOfYear(this, dow, doy).year;
      } else {
          weeksTarget = weeksInYear(input, dow, doy);
          if (week > weeksTarget) {
              week = weeksTarget;
          }
          return setWeekAll.call(this, input, week, weekday, dow, doy);
      }
  }

  function setWeekAll(weekYear, week, weekday, dow, doy) {
      var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
          date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

      this.year(date.getUTCFullYear());
      this.month(date.getUTCMonth());
      this.date(date.getUTCDate());
      return this;
  }

  // FORMATTING

  addFormatToken('Q', 0, 'Qo', 'quarter');

  // ALIASES

  addUnitAlias('quarter', 'Q');

  // PRIORITY

  addUnitPriority('quarter', 7);

  // PARSING

  addRegexToken('Q', match1);
  addParseToken('Q', function (input, array) {
      array[MONTH] = (toInt(input) - 1) * 3;
  });

  // MOMENTS

  function getSetQuarter (input) {
      return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  }

  // FORMATTING

  addFormatToken('D', ['DD', 2], 'Do', 'date');

  // ALIASES

  addUnitAlias('date', 'D');

  // PRIORITY
  addUnitPriority('date', 9);

  // PARSING

  addRegexToken('D',  match1to2);
  addRegexToken('DD', match1to2, match2);
  addRegexToken('Do', function (isStrict, locale) {
      // TODO: Remove "ordinalParse" fallback in next major release.
      return isStrict ?
        (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
        locale._dayOfMonthOrdinalParseLenient;
  });

  addParseToken(['D', 'DD'], DATE);
  addParseToken('Do', function (input, array) {
      array[DATE] = toInt(input.match(match1to2)[0]);
  });

  // MOMENTS

  var getSetDayOfMonth = makeGetSet('Date', true);

  // FORMATTING

  addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

  // ALIASES

  addUnitAlias('dayOfYear', 'DDD');

  // PRIORITY
  addUnitPriority('dayOfYear', 4);

  // PARSING

  addRegexToken('DDD',  match1to3);
  addRegexToken('DDDD', match3);
  addParseToken(['DDD', 'DDDD'], function (input, array, config) {
      config._dayOfYear = toInt(input);
  });

  // HELPERS

  // MOMENTS

  function getSetDayOfYear (input) {
      var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
      return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
  }

  // FORMATTING

  addFormatToken('m', ['mm', 2], 0, 'minute');

  // ALIASES

  addUnitAlias('minute', 'm');

  // PRIORITY

  addUnitPriority('minute', 14);

  // PARSING

  addRegexToken('m',  match1to2);
  addRegexToken('mm', match1to2, match2);
  addParseToken(['m', 'mm'], MINUTE);

  // MOMENTS

  var getSetMinute = makeGetSet('Minutes', false);

  // FORMATTING

  addFormatToken('s', ['ss', 2], 0, 'second');

  // ALIASES

  addUnitAlias('second', 's');

  // PRIORITY

  addUnitPriority('second', 15);

  // PARSING

  addRegexToken('s',  match1to2);
  addRegexToken('ss', match1to2, match2);
  addParseToken(['s', 'ss'], SECOND);

  // MOMENTS

  var getSetSecond = makeGetSet('Seconds', false);

  // FORMATTING

  addFormatToken('S', 0, 0, function () {
      return ~~(this.millisecond() / 100);
  });

  addFormatToken(0, ['SS', 2], 0, function () {
      return ~~(this.millisecond() / 10);
  });

  addFormatToken(0, ['SSS', 3], 0, 'millisecond');
  addFormatToken(0, ['SSSS', 4], 0, function () {
      return this.millisecond() * 10;
  });
  addFormatToken(0, ['SSSSS', 5], 0, function () {
      return this.millisecond() * 100;
  });
  addFormatToken(0, ['SSSSSS', 6], 0, function () {
      return this.millisecond() * 1000;
  });
  addFormatToken(0, ['SSSSSSS', 7], 0, function () {
      return this.millisecond() * 10000;
  });
  addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
      return this.millisecond() * 100000;
  });
  addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
      return this.millisecond() * 1000000;
  });


  // ALIASES

  addUnitAlias('millisecond', 'ms');

  // PRIORITY

  addUnitPriority('millisecond', 16);

  // PARSING

  addRegexToken('S',    match1to3, match1);
  addRegexToken('SS',   match1to3, match2);
  addRegexToken('SSS',  match1to3, match3);

  var token;
  for (token = 'SSSS'; token.length <= 9; token += 'S') {
      addRegexToken(token, matchUnsigned);
  }

  function parseMs(input, array) {
      array[MILLISECOND] = toInt(('0.' + input) * 1000);
  }

  for (token = 'S'; token.length <= 9; token += 'S') {
      addParseToken(token, parseMs);
  }
  // MOMENTS

  var getSetMillisecond = makeGetSet('Milliseconds', false);

  // FORMATTING

  addFormatToken('z',  0, 0, 'zoneAbbr');
  addFormatToken('zz', 0, 0, 'zoneName');

  // MOMENTS

  function getZoneAbbr () {
      return this._isUTC ? 'UTC' : '';
  }

  function getZoneName () {
      return this._isUTC ? 'Coordinated Universal Time' : '';
  }

  var proto = Moment.prototype;

  proto.add               = add;
  proto.calendar          = calendar$1;
  proto.clone             = clone;
  proto.diff              = diff;
  proto.endOf             = endOf;
  proto.format            = format;
  proto.from              = from;
  proto.fromNow           = fromNow;
  proto.to                = to;
  proto.toNow             = toNow;
  proto.get               = stringGet;
  proto.invalidAt         = invalidAt;
  proto.isAfter           = isAfter;
  proto.isBefore          = isBefore;
  proto.isBetween         = isBetween;
  proto.isSame            = isSame;
  proto.isSameOrAfter     = isSameOrAfter;
  proto.isSameOrBefore    = isSameOrBefore;
  proto.isValid           = isValid$2;
  proto.lang              = lang;
  proto.locale            = locale;
  proto.localeData        = localeData;
  proto.max               = prototypeMax;
  proto.min               = prototypeMin;
  proto.parsingFlags      = parsingFlags;
  proto.set               = stringSet;
  proto.startOf           = startOf;
  proto.subtract          = subtract;
  proto.toArray           = toArray;
  proto.toObject          = toObject;
  proto.toDate            = toDate;
  proto.toISOString       = toISOString;
  proto.inspect           = inspect;
  proto.toJSON            = toJSON;
  proto.toString          = toString;
  proto.unix              = unix;
  proto.valueOf           = valueOf;
  proto.creationData      = creationData;
  proto.year       = getSetYear;
  proto.isLeapYear = getIsLeapYear;
  proto.weekYear    = getSetWeekYear;
  proto.isoWeekYear = getSetISOWeekYear;
  proto.quarter = proto.quarters = getSetQuarter;
  proto.month       = getSetMonth;
  proto.daysInMonth = getDaysInMonth;
  proto.week           = proto.weeks        = getSetWeek;
  proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
  proto.weeksInYear    = getWeeksInYear;
  proto.isoWeeksInYear = getISOWeeksInYear;
  proto.date       = getSetDayOfMonth;
  proto.day        = proto.days             = getSetDayOfWeek;
  proto.weekday    = getSetLocaleDayOfWeek;
  proto.isoWeekday = getSetISODayOfWeek;
  proto.dayOfYear  = getSetDayOfYear;
  proto.hour = proto.hours = getSetHour;
  proto.minute = proto.minutes = getSetMinute;
  proto.second = proto.seconds = getSetSecond;
  proto.millisecond = proto.milliseconds = getSetMillisecond;
  proto.utcOffset            = getSetOffset;
  proto.utc                  = setOffsetToUTC;
  proto.local                = setOffsetToLocal;
  proto.parseZone            = setOffsetToParsedOffset;
  proto.hasAlignedHourOffset = hasAlignedHourOffset;
  proto.isDST                = isDaylightSavingTime;
  proto.isLocal              = isLocal;
  proto.isUtcOffset          = isUtcOffset;
  proto.isUtc                = isUtc;
  proto.isUTC                = isUtc;
  proto.zoneAbbr = getZoneAbbr;
  proto.zoneName = getZoneName;
  proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
  proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
  proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
  proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
  proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

  function createUnix (input) {
      return createLocal(input * 1000);
  }

  function createInZone () {
      return createLocal.apply(null, arguments).parseZone();
  }

  function preParsePostFormat (string) {
      return string;
  }

  var proto$1 = Locale.prototype;

  proto$1.calendar        = calendar;
  proto$1.longDateFormat  = longDateFormat;
  proto$1.invalidDate     = invalidDate;
  proto$1.ordinal         = ordinal;
  proto$1.preparse        = preParsePostFormat;
  proto$1.postformat      = preParsePostFormat;
  proto$1.relativeTime    = relativeTime;
  proto$1.pastFuture      = pastFuture;
  proto$1.set             = set;

  proto$1.months            =        localeMonths;
  proto$1.monthsShort       =        localeMonthsShort;
  proto$1.monthsParse       =        localeMonthsParse;
  proto$1.monthsRegex       = monthsRegex;
  proto$1.monthsShortRegex  = monthsShortRegex;
  proto$1.week = localeWeek;
  proto$1.firstDayOfYear = localeFirstDayOfYear;
  proto$1.firstDayOfWeek = localeFirstDayOfWeek;

  proto$1.weekdays       =        localeWeekdays;
  proto$1.weekdaysMin    =        localeWeekdaysMin;
  proto$1.weekdaysShort  =        localeWeekdaysShort;
  proto$1.weekdaysParse  =        localeWeekdaysParse;

  proto$1.weekdaysRegex       =        weekdaysRegex;
  proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
  proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

  proto$1.isPM = localeIsPM;
  proto$1.meridiem = localeMeridiem;

  function get$1 (format, index, field, setter) {
      var locale = getLocale();
      var utc = createUTC().set(setter, index);
      return locale[field](utc, format);
  }

  function listMonthsImpl (format, index, field) {
      if (isNumber(format)) {
          index = format;
          format = undefined;
      }

      format = format || '';

      if (index != null) {
          return get$1(format, index, field, 'month');
      }

      var i;
      var out = [];
      for (i = 0; i < 12; i++) {
          out[i] = get$1(format, i, field, 'month');
      }
      return out;
  }

  // ()
  // (5)
  // (fmt, 5)
  // (fmt)
  // (true)
  // (true, 5)
  // (true, fmt, 5)
  // (true, fmt)
  function listWeekdaysImpl (localeSorted, format, index, field) {
      if (typeof localeSorted === 'boolean') {
          if (isNumber(format)) {
              index = format;
              format = undefined;
          }

          format = format || '';
      } else {
          format = localeSorted;
          index = format;
          localeSorted = false;

          if (isNumber(format)) {
              index = format;
              format = undefined;
          }

          format = format || '';
      }

      var locale = getLocale(),
          shift = localeSorted ? locale._week.dow : 0;

      if (index != null) {
          return get$1(format, (index + shift) % 7, field, 'day');
      }

      var i;
      var out = [];
      for (i = 0; i < 7; i++) {
          out[i] = get$1(format, (i + shift) % 7, field, 'day');
      }
      return out;
  }

  function listMonths (format, index) {
      return listMonthsImpl(format, index, 'months');
  }

  function listMonthsShort (format, index) {
      return listMonthsImpl(format, index, 'monthsShort');
  }

  function listWeekdays (localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
  }

  function listWeekdaysShort (localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
  }

  function listWeekdaysMin (localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
  }

  getSetGlobalLocale('en', {
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal : function (number) {
          var b = number % 10,
              output = (toInt(number % 100 / 10) === 1) ? 'th' :
              (b === 1) ? 'st' :
              (b === 2) ? 'nd' :
              (b === 3) ? 'rd' : 'th';
          return number + output;
      }
  });

  // Side effect imports

  hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
  hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

  var mathAbs = Math.abs;

  function abs () {
      var data           = this._data;

      this._milliseconds = mathAbs(this._milliseconds);
      this._days         = mathAbs(this._days);
      this._months       = mathAbs(this._months);

      data.milliseconds  = mathAbs(data.milliseconds);
      data.seconds       = mathAbs(data.seconds);
      data.minutes       = mathAbs(data.minutes);
      data.hours         = mathAbs(data.hours);
      data.months        = mathAbs(data.months);
      data.years         = mathAbs(data.years);

      return this;
  }

  function addSubtract$1 (duration, input, value, direction) {
      var other = createDuration(input, value);

      duration._milliseconds += direction * other._milliseconds;
      duration._days         += direction * other._days;
      duration._months       += direction * other._months;

      return duration._bubble();
  }

  // supports only 2.0-style add(1, 's') or add(duration)
  function add$1 (input, value) {
      return addSubtract$1(this, input, value, 1);
  }

  // supports only 2.0-style subtract(1, 's') or subtract(duration)
  function subtract$1 (input, value) {
      return addSubtract$1(this, input, value, -1);
  }

  function absCeil (number) {
      if (number < 0) {
          return Math.floor(number);
      } else {
          return Math.ceil(number);
      }
  }

  function bubble () {
      var milliseconds = this._milliseconds;
      var days         = this._days;
      var months       = this._months;
      var data         = this._data;
      var seconds, minutes, hours, years, monthsFromDays;

      // if we have a mix of positive and negative values, bubble down first
      // check: https://github.com/moment/moment/issues/2166
      if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
              (milliseconds <= 0 && days <= 0 && months <= 0))) {
          milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
          days = 0;
          months = 0;
      }

      // The following code bubbles up values, see the tests for
      // examples of what that means.
      data.milliseconds = milliseconds % 1000;

      seconds           = absFloor(milliseconds / 1000);
      data.seconds      = seconds % 60;

      minutes           = absFloor(seconds / 60);
      data.minutes      = minutes % 60;

      hours             = absFloor(minutes / 60);
      data.hours        = hours % 24;

      days += absFloor(hours / 24);

      // convert days to months
      monthsFromDays = absFloor(daysToMonths(days));
      months += monthsFromDays;
      days -= absCeil(monthsToDays(monthsFromDays));

      // 12 months -> 1 year
      years = absFloor(months / 12);
      months %= 12;

      data.days   = days;
      data.months = months;
      data.years  = years;

      return this;
  }

  function daysToMonths (days) {
      // 400 years have 146097 days (taking into account leap year rules)
      // 400 years have 12 months === 4800
      return days * 4800 / 146097;
  }

  function monthsToDays (months) {
      // the reverse of daysToMonths
      return months * 146097 / 4800;
  }

  function as (units) {
      if (!this.isValid()) {
          return NaN;
      }
      var days;
      var months;
      var milliseconds = this._milliseconds;

      units = normalizeUnits(units);

      if (units === 'month' || units === 'year') {
          days   = this._days   + milliseconds / 864e5;
          months = this._months + daysToMonths(days);
          return units === 'month' ? months : months / 12;
      } else {
          // handle milliseconds separately because of floating point math errors (issue #1867)
          days = this._days + Math.round(monthsToDays(this._months));
          switch (units) {
              case 'week'   : return days / 7     + milliseconds / 6048e5;
              case 'day'    : return days         + milliseconds / 864e5;
              case 'hour'   : return days * 24    + milliseconds / 36e5;
              case 'minute' : return days * 1440  + milliseconds / 6e4;
              case 'second' : return days * 86400 + milliseconds / 1000;
              // Math.floor prevents floating point math errors here
              case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
              default: throw new Error('Unknown unit ' + units);
          }
      }
  }

  // TODO: Use this.as('ms')?
  function valueOf$1 () {
      if (!this.isValid()) {
          return NaN;
      }
      return (
          this._milliseconds +
          this._days * 864e5 +
          (this._months % 12) * 2592e6 +
          toInt(this._months / 12) * 31536e6
      );
  }

  function makeAs (alias) {
      return function () {
          return this.as(alias);
      };
  }

  var asMilliseconds = makeAs('ms');
  var asSeconds      = makeAs('s');
  var asMinutes      = makeAs('m');
  var asHours        = makeAs('h');
  var asDays         = makeAs('d');
  var asWeeks        = makeAs('w');
  var asMonths       = makeAs('M');
  var asYears        = makeAs('y');

  function clone$1 () {
      return createDuration(this);
  }

  function get$2 (units) {
      units = normalizeUnits(units);
      return this.isValid() ? this[units + 's']() : NaN;
  }

  function makeGetter(name) {
      return function () {
          return this.isValid() ? this._data[name] : NaN;
      };
  }

  var milliseconds = makeGetter('milliseconds');
  var seconds      = makeGetter('seconds');
  var minutes      = makeGetter('minutes');
  var hours        = makeGetter('hours');
  var days         = makeGetter('days');
  var months       = makeGetter('months');
  var years        = makeGetter('years');

  function weeks () {
      return absFloor(this.days() / 7);
  }

  var round = Math.round;
  var thresholds = {
      ss: 44,         // a few seconds to seconds
      s : 45,         // seconds to minute
      m : 45,         // minutes to hour
      h : 22,         // hours to day
      d : 26,         // days to month
      M : 11          // months to year
  };

  // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
      return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }

  function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
      var duration = createDuration(posNegDuration).abs();
      var seconds  = round(duration.as('s'));
      var minutes  = round(duration.as('m'));
      var hours    = round(duration.as('h'));
      var days     = round(duration.as('d'));
      var months   = round(duration.as('M'));
      var years    = round(duration.as('y'));

      var a = seconds <= thresholds.ss && ['s', seconds]  ||
              seconds < thresholds.s   && ['ss', seconds] ||
              minutes <= 1             && ['m']           ||
              minutes < thresholds.m   && ['mm', minutes] ||
              hours   <= 1             && ['h']           ||
              hours   < thresholds.h   && ['hh', hours]   ||
              days    <= 1             && ['d']           ||
              days    < thresholds.d   && ['dd', days]    ||
              months  <= 1             && ['M']           ||
              months  < thresholds.M   && ['MM', months]  ||
              years   <= 1             && ['y']           || ['yy', years];

      a[2] = withoutSuffix;
      a[3] = +posNegDuration > 0;
      a[4] = locale;
      return substituteTimeAgo.apply(null, a);
  }

  // This function allows you to set the rounding function for relative time strings
  function getSetRelativeTimeRounding (roundingFunction) {
      if (roundingFunction === undefined) {
          return round;
      }
      if (typeof(roundingFunction) === 'function') {
          round = roundingFunction;
          return true;
      }
      return false;
  }

  // This function allows you to set a threshold for relative time strings
  function getSetRelativeTimeThreshold (threshold, limit) {
      if (thresholds[threshold] === undefined) {
          return false;
      }
      if (limit === undefined) {
          return thresholds[threshold];
      }
      thresholds[threshold] = limit;
      if (threshold === 's') {
          thresholds.ss = limit - 1;
      }
      return true;
  }

  function humanize (withSuffix) {
      if (!this.isValid()) {
          return this.localeData().invalidDate();
      }

      var locale = this.localeData();
      var output = relativeTime$1(this, !withSuffix, locale);

      if (withSuffix) {
          output = locale.pastFuture(+this, output);
      }

      return locale.postformat(output);
  }

  var abs$1 = Math.abs;

  function sign(x) {
      return ((x > 0) - (x < 0)) || +x;
  }

  function toISOString$1() {
      // for ISO strings we do not use the normal bubbling rules:
      //  * milliseconds bubble up until they become hours
      //  * days do not bubble at all
      //  * months bubble up until they become years
      // This is because there is no context-free conversion between hours and days
      // (think of clock changes)
      // and also not between days and months (28-31 days per month)
      if (!this.isValid()) {
          return this.localeData().invalidDate();
      }

      var seconds = abs$1(this._milliseconds) / 1000;
      var days         = abs$1(this._days);
      var months       = abs$1(this._months);
      var minutes, hours, years;

      // 3600 seconds -> 60 minutes -> 1 hour
      minutes           = absFloor(seconds / 60);
      hours             = absFloor(minutes / 60);
      seconds %= 60;
      minutes %= 60;

      // 12 months -> 1 year
      years  = absFloor(months / 12);
      months %= 12;


      // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
      var Y = years;
      var M = months;
      var D = days;
      var h = hours;
      var m = minutes;
      var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
      var total = this.asSeconds();

      if (!total) {
          // this is the same as C#'s (Noda) and python (isodate)...
          // but not other JS (goog.date)
          return 'P0D';
      }

      var totalSign = total < 0 ? '-' : '';
      var ymSign = sign(this._months) !== sign(total) ? '-' : '';
      var daysSign = sign(this._days) !== sign(total) ? '-' : '';
      var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

      return totalSign + 'P' +
          (Y ? ymSign + Y + 'Y' : '') +
          (M ? ymSign + M + 'M' : '') +
          (D ? daysSign + D + 'D' : '') +
          ((h || m || s) ? 'T' : '') +
          (h ? hmsSign + h + 'H' : '') +
          (m ? hmsSign + m + 'M' : '') +
          (s ? hmsSign + s + 'S' : '');
  }

  var proto$2 = Duration.prototype;

  proto$2.isValid        = isValid$1;
  proto$2.abs            = abs;
  proto$2.add            = add$1;
  proto$2.subtract       = subtract$1;
  proto$2.as             = as;
  proto$2.asMilliseconds = asMilliseconds;
  proto$2.asSeconds      = asSeconds;
  proto$2.asMinutes      = asMinutes;
  proto$2.asHours        = asHours;
  proto$2.asDays         = asDays;
  proto$2.asWeeks        = asWeeks;
  proto$2.asMonths       = asMonths;
  proto$2.asYears        = asYears;
  proto$2.valueOf        = valueOf$1;
  proto$2._bubble        = bubble;
  proto$2.clone          = clone$1;
  proto$2.get            = get$2;
  proto$2.milliseconds   = milliseconds;
  proto$2.seconds        = seconds;
  proto$2.minutes        = minutes;
  proto$2.hours          = hours;
  proto$2.days           = days;
  proto$2.weeks          = weeks;
  proto$2.months         = months;
  proto$2.years          = years;
  proto$2.humanize       = humanize;
  proto$2.toISOString    = toISOString$1;
  proto$2.toString       = toISOString$1;
  proto$2.toJSON         = toISOString$1;
  proto$2.locale         = locale;
  proto$2.localeData     = localeData;

  proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
  proto$2.lang = lang;

  // Side effect imports

  // FORMATTING

  addFormatToken('X', 0, 0, 'unix');
  addFormatToken('x', 0, 0, 'valueOf');

  // PARSING

  addRegexToken('x', matchSigned);
  addRegexToken('X', matchTimestamp);
  addParseToken('X', function (input, array, config) {
      config._d = new Date(parseFloat(input, 10) * 1000);
  });
  addParseToken('x', function (input, array, config) {
      config._d = new Date(toInt(input));
  });

  // Side effect imports


  hooks.version = '2.22.2';

  setHookCallback(createLocal);

  hooks.fn                    = proto;
  hooks.min                   = min;
  hooks.max                   = max;
  hooks.now                   = now;
  hooks.utc                   = createUTC;
  hooks.unix                  = createUnix;
  hooks.months                = listMonths;
  hooks.isDate                = isDate;
  hooks.locale                = getSetGlobalLocale;
  hooks.invalid               = createInvalid;
  hooks.duration              = createDuration;
  hooks.isMoment              = isMoment;
  hooks.weekdays              = listWeekdays;
  hooks.parseZone             = createInZone;
  hooks.localeData            = getLocale;
  hooks.isDuration            = isDuration;
  hooks.monthsShort           = listMonthsShort;
  hooks.weekdaysMin           = listWeekdaysMin;
  hooks.defineLocale          = defineLocale;
  hooks.updateLocale          = updateLocale;
  hooks.locales               = listLocales;
  hooks.weekdaysShort         = listWeekdaysShort;
  hooks.normalizeUnits        = normalizeUnits;
  hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
  hooks.calendarFormat        = getCalendarFormat;
  hooks.prototype             = proto;

  // currently HTML5 input type only supports 24-hour formats
  hooks.HTML5_FMT = {
      DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
      DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
      DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
      DATE: 'YYYY-MM-DD',                             // <input type="date" />
      TIME: 'HH:mm',                                  // <input type="time" />
      TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
      TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
      WEEK: 'YYYY-[W]WW',                             // <input type="week" />
      MONTH: 'YYYY-MM'                                // <input type="month" />
  };

  return hooks;

})));/*! remarkable 1.7.1 https://github.com/jonschlinkert/remarkable @license MIT */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Remarkable=e()}}(function(){var e;return function t(e,r,n){function s(i,l){if(!r[i]){if(!e[i]){var a="function"==typeof require&&require;if(!l&&a)return a(i,!0);if(o)return o(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var u=r[i]={exports:{}};e[i][0].call(u.exports,function(t){var r=e[i][1][t];return s(r?r:t)},u,u.exports,t,e,r,n)}return r[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)s(n[i]);return s}({1:[function(e,t){"use strict";t.exports={Aacute:"Á",aacute:"á",Abreve:"Ă",abreve:"ă",ac:"∾",acd:"∿",acE:"∾̳",Acirc:"Â",acirc:"â",acute:"´",Acy:"А",acy:"а",AElig:"Æ",aelig:"æ",af:"⁡",Afr:"𝔄",afr:"𝔞",Agrave:"À",agrave:"à",alefsym:"ℵ",aleph:"ℵ",Alpha:"Α",alpha:"α",Amacr:"Ā",amacr:"ā",amalg:"⨿",AMP:"&",amp:"&",And:"⩓",and:"∧",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",Aogon:"Ą",aogon:"ą",Aopf:"𝔸",aopf:"𝕒",ap:"≈",apacir:"⩯",apE:"⩰",ape:"≊",apid:"≋",apos:"'",ApplyFunction:"⁡",approx:"≈",approxeq:"≊",Aring:"Å",aring:"å",Ascr:"𝒜",ascr:"𝒶",Assign:"≔",ast:"*",asymp:"≈",asympeq:"≍",Atilde:"Ã",atilde:"ã",Auml:"Ä",auml:"ä",awconint:"∳",awint:"⨑",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",Backslash:"∖",Barv:"⫧",barvee:"⊽",Barwed:"⌆",barwed:"⌅",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",Bcy:"Б",bcy:"б",bdquo:"„",becaus:"∵",Because:"∵",because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",Bernoullis:"ℬ",Beta:"Β",beta:"β",beth:"ℶ",between:"≬",Bfr:"𝔅",bfr:"𝔟",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bNot:"⫭",bnot:"⌐",Bopf:"𝔹",bopf:"𝕓",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxbox:"⧉",boxDL:"╗",boxDl:"╖",boxdL:"╕",boxdl:"┐",boxDR:"╔",boxDr:"╓",boxdR:"╒",boxdr:"┌",boxH:"═",boxh:"─",boxHD:"╦",boxHd:"╤",boxhD:"╥",boxhd:"┬",boxHU:"╩",boxHu:"╧",boxhU:"╨",boxhu:"┴",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxUL:"╝",boxUl:"╜",boxuL:"╛",boxul:"┘",boxUR:"╚",boxUr:"╙",boxuR:"╘",boxur:"└",boxV:"║",boxv:"│",boxVH:"╬",boxVh:"╫",boxvH:"╪",boxvh:"┼",boxVL:"╣",boxVl:"╢",boxvL:"╡",boxvl:"┤",boxVR:"╠",boxVr:"╟",boxvR:"╞",boxvr:"├",bprime:"‵",Breve:"˘",breve:"˘",brvbar:"¦",Bscr:"ℬ",bscr:"𝒷",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",Bumpeq:"≎",bumpeq:"≏",Cacute:"Ć",cacute:"ć",Cap:"⋒",cap:"∩",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",CapitalDifferentialD:"ⅅ",caps:"∩︀",caret:"⁁",caron:"ˇ",Cayleys:"ℭ",ccaps:"⩍",Ccaron:"Č",ccaron:"č",Ccedil:"Ç",ccedil:"ç",Ccirc:"Ĉ",ccirc:"ĉ",Cconint:"∰",ccups:"⩌",ccupssm:"⩐",Cdot:"Ċ",cdot:"ċ",cedil:"¸",Cedilla:"¸",cemptyv:"⦲",cent:"¢",CenterDot:"·",centerdot:"·",Cfr:"ℭ",cfr:"𝔠",CHcy:"Ч",chcy:"ч",check:"✓",checkmark:"✓",Chi:"Χ",chi:"χ",cir:"○",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",CircleDot:"⊙",circledR:"®",circledS:"Ⓢ",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",cirE:"⧃",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",clubs:"♣",clubsuit:"♣",Colon:"∷",colon:":",Colone:"⩴",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",Congruent:"≡",Conint:"∯",conint:"∮",ContourIntegral:"∮",Copf:"ℂ",copf:"𝕔",coprod:"∐",Coproduct:"∐",COPY:"©",copy:"©",copysr:"℗",CounterClockwiseContourIntegral:"∳",crarr:"↵",Cross:"⨯",cross:"✗",Cscr:"𝒞",cscr:"𝒸",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",Cup:"⋓",cup:"∪",cupbrcap:"⩈",CupCap:"≍",cupcap:"⩆",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",Dagger:"‡",dagger:"†",daleth:"ℸ",Darr:"↡",dArr:"⇓",darr:"↓",dash:"‐",Dashv:"⫤",dashv:"⊣",dbkarow:"⤏",dblac:"˝",Dcaron:"Ď",dcaron:"ď",Dcy:"Д",dcy:"д",DD:"ⅅ",dd:"ⅆ",ddagger:"‡",ddarr:"⇊",DDotrahd:"⤑",ddotseq:"⩷",deg:"°",Del:"∇",Delta:"Δ",delta:"δ",demptyv:"⦱",dfisht:"⥿",Dfr:"𝔇",dfr:"𝔡",dHar:"⥥",dharl:"⇃",dharr:"⇂",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",diam:"⋄",Diamond:"⋄",diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",DifferentialD:"ⅆ",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",DJcy:"Ђ",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",Dopf:"𝔻",dopf:"𝕕",Dot:"¨",dot:"˙",DotDot:"⃜",doteq:"≐",doteqdot:"≑",DotEqual:"≐",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrow:"↓",Downarrow:"⇓",downarrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",Dscr:"𝒟",dscr:"𝒹",DScy:"Ѕ",dscy:"ѕ",dsol:"⧶",Dstrok:"Đ",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",DZcy:"Џ",dzcy:"џ",dzigrarr:"⟿",Eacute:"É",eacute:"é",easter:"⩮",Ecaron:"Ě",ecaron:"ě",ecir:"≖",Ecirc:"Ê",ecirc:"ê",ecolon:"≕",Ecy:"Э",ecy:"э",eDDot:"⩷",Edot:"Ė",eDot:"≑",edot:"ė",ee:"ⅇ",efDot:"≒",Efr:"𝔈",efr:"𝔢",eg:"⪚",Egrave:"È",egrave:"è",egs:"⪖",egsdot:"⪘",el:"⪙",Element:"∈",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",Emacr:"Ē",emacr:"ē",empty:"∅",emptyset:"∅",EmptySmallSquare:"◻",emptyv:"∅",EmptyVerySmallSquare:"▫",emsp:" ",emsp13:" ",emsp14:" ",ENG:"Ŋ",eng:"ŋ",ensp:" ",Eogon:"Ę",eogon:"ę",Eopf:"𝔼",eopf:"𝕖",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",Epsilon:"Ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",Equal:"⩵",equals:"=",EqualTilde:"≂",equest:"≟",Equilibrium:"⇌",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erarr:"⥱",erDot:"≓",Escr:"ℰ",escr:"ℯ",esdot:"≐",Esim:"⩳",esim:"≂",Eta:"Η",eta:"η",ETH:"Ð",eth:"ð",Euml:"Ë",euml:"ë",euro:"€",excl:"!",exist:"∃",Exists:"∃",expectation:"ℰ",ExponentialE:"ⅇ",exponentiale:"ⅇ",fallingdotseq:"≒",Fcy:"Ф",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",Ffr:"𝔉",ffr:"𝔣",filig:"ﬁ",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",Fopf:"𝔽",fopf:"𝕗",ForAll:"∀",forall:"∀",fork:"⋔",forkv:"⫙",Fouriertrf:"ℱ",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",Fscr:"ℱ",fscr:"𝒻",gacute:"ǵ",Gamma:"Γ",gamma:"γ",Gammad:"Ϝ",gammad:"ϝ",gap:"⪆",Gbreve:"Ğ",gbreve:"ğ",Gcedil:"Ģ",Gcirc:"Ĝ",gcirc:"ĝ",Gcy:"Г",gcy:"г",Gdot:"Ġ",gdot:"ġ",gE:"≧",ge:"≥",gEl:"⪌",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",Gfr:"𝔊",gfr:"𝔤",Gg:"⋙",gg:"≫",ggg:"⋙",gimel:"ℷ",GJcy:"Ѓ",gjcy:"ѓ",gl:"≷",gla:"⪥",glE:"⪒",glj:"⪤",gnap:"⪊",gnapprox:"⪊",gnE:"≩",gne:"⪈",gneq:"⪈",gneqq:"≩",gnsim:"⋧",Gopf:"𝔾",gopf:"𝕘",grave:"`",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"𝒢",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",GT:">",Gt:"≫",gt:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",Hacek:"ˇ",hairsp:" ",half:"½",hamilt:"ℋ",HARDcy:"Ъ",hardcy:"ъ",hArr:"⇔",harr:"↔",harrcir:"⥈",harrw:"↭",Hat:"^",hbar:"ℏ",Hcirc:"Ĥ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",Hfr:"ℌ",hfr:"𝔥",HilbertSpace:"ℋ",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",Hopf:"ℍ",hopf:"𝕙",horbar:"―",HorizontalLine:"─",Hscr:"ℋ",hscr:"𝒽",hslash:"ℏ",Hstrok:"Ħ",hstrok:"ħ",HumpDownHump:"≎",HumpEqual:"≏",hybull:"⁃",hyphen:"‐",Iacute:"Í",iacute:"í",ic:"⁣",Icirc:"Î",icirc:"î",Icy:"И",icy:"и",Idot:"İ",IEcy:"Е",iecy:"е",iexcl:"¡",iff:"⇔",Ifr:"ℑ",ifr:"𝔦",Igrave:"Ì",igrave:"ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",IJlig:"Ĳ",ijlig:"ĳ",Im:"ℑ",Imacr:"Ī",imacr:"ī",image:"ℑ",ImaginaryI:"ⅈ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",Implies:"⇒","in":"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",Int:"∬","int":"∫",intcal:"⊺",integers:"ℤ",Integral:"∫",intercal:"⊺",Intersection:"⋂",intlarhk:"⨗",intprod:"⨼",InvisibleComma:"⁣",InvisibleTimes:"⁢",IOcy:"Ё",iocy:"ё",Iogon:"Į",iogon:"į",Iopf:"𝕀",iopf:"𝕚",Iota:"Ι",iota:"ι",iprod:"⨼",iquest:"¿",Iscr:"ℐ",iscr:"𝒾",isin:"∈",isindot:"⋵",isinE:"⋹",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",Itilde:"Ĩ",itilde:"ĩ",Iukcy:"І",iukcy:"і",Iuml:"Ï",iuml:"ï",Jcirc:"Ĵ",jcirc:"ĵ",Jcy:"Й",jcy:"й",Jfr:"𝔍",jfr:"𝔧",jmath:"ȷ",Jopf:"𝕁",jopf:"𝕛",Jscr:"𝒥",jscr:"𝒿",Jsercy:"Ј",jsercy:"ј",Jukcy:"Є",jukcy:"є",Kappa:"Κ",kappa:"κ",kappav:"ϰ",Kcedil:"Ķ",kcedil:"ķ",Kcy:"К",kcy:"к",Kfr:"𝔎",kfr:"𝔨",kgreen:"ĸ",KHcy:"Х",khcy:"х",KJcy:"Ќ",kjcy:"ќ",Kopf:"𝕂",kopf:"𝕜",Kscr:"𝒦",kscr:"𝓀",lAarr:"⇚",Lacute:"Ĺ",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",Lambda:"Λ",lambda:"λ",Lang:"⟪",lang:"⟨",langd:"⦑",langle:"⟨",lap:"⪅",Laplacetrf:"ℒ",laquo:"«",Larr:"↞",lArr:"⇐",larr:"←",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",lAtail:"⤛",latail:"⤙",late:"⪭",lates:"⪭︀",lBarr:"⤎",lbarr:"⤌",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",Lcaron:"Ľ",lcaron:"ľ",Lcedil:"Ļ",lcedil:"ļ",lceil:"⌈",lcub:"{",Lcy:"Л",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",lE:"≦",le:"≤",LeftAngleBracket:"⟨",LeftArrow:"←",Leftarrow:"⇐",leftarrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",leftarrowtail:"↢",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",LeftRightArrow:"↔",Leftrightarrow:"⇔",leftrightarrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",leftthreetimes:"⋋",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",lEg:"⪋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",lessgtr:"≶",LessLess:"⪡",lesssim:"≲",LessSlantEqual:"⩽",LessTilde:"≲",lfisht:"⥼",lfloor:"⌊",Lfr:"𝔏",lfr:"𝔩",lg:"≶",lgE:"⪑",lHar:"⥢",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",LJcy:"Љ",ljcy:"љ",Ll:"⋘",ll:"≪",llarr:"⇇",llcorner:"⌞",Lleftarrow:"⇚",llhard:"⥫",lltri:"◺",Lmidot:"Ŀ",lmidot:"ŀ",lmoust:"⎰",lmoustache:"⎰",lnap:"⪉",lnapprox:"⪉",lnE:"≨",lne:"⪇",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",LongLeftArrow:"⟵",Longleftarrow:"⟸",longleftarrow:"⟵",LongLeftRightArrow:"⟷",Longleftrightarrow:"⟺",longleftrightarrow:"⟷",longmapsto:"⟼",LongRightArrow:"⟶",Longrightarrow:"⟹",longrightarrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",Lopf:"𝕃",lopf:"𝕝",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",LowerLeftArrow:"↙",LowerRightArrow:"↘",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",Lscr:"ℒ",lscr:"𝓁",Lsh:"↰",lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",Lstrok:"Ł",lstrok:"ł",LT:"<",Lt:"≪",lt:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltri:"◃",ltrie:"⊴",ltrif:"◂",ltrPar:"⦖",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",macr:"¯",male:"♂",malt:"✠",maltese:"✠",Map:"⤅",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",Mcy:"М",mcy:"м",mdash:"—",mDDot:"∺",measuredangle:"∡",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"𝔐",mfr:"𝔪",mho:"℧",micro:"µ",mid:"∣",midast:"*",midcir:"⫰",middot:"·",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",MinusPlus:"∓",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",Mopf:"𝕄",mopf:"𝕞",mp:"∓",Mscr:"ℳ",mscr:"𝓂",mstpos:"∾",Mu:"Μ",mu:"μ",multimap:"⊸",mumap:"⊸",nabla:"∇",Nacute:"Ń",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",Ncaron:"Ň",ncaron:"ň",Ncedil:"Ņ",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",Ncy:"Н",ncy:"н",ndash:"–",ne:"≠",nearhk:"⤤",neArr:"⇗",nearr:"↗",nearrow:"↗",nedot:"≐̸",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",nequiv:"≢",nesear:"⤨",nesim:"≂̸",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:"\n",nexist:"∄",nexists:"∄",Nfr:"𝔑",nfr:"𝔫",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",nGg:"⋙̸",ngsim:"≵",nGt:"≫⃒",ngt:"≯",ngtr:"≯",nGtv:"≫̸",nhArr:"⇎",nharr:"↮",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",NJcy:"Њ",njcy:"њ",nlArr:"⇍",nlarr:"↚",nldr:"‥",nlE:"≦̸",nle:"≰",nLeftarrow:"⇍",nleftarrow:"↚",nLeftrightarrow:"⇎",nleftrightarrow:"↮",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nLl:"⋘̸",nlsim:"≴",nLt:"≪⃒",nlt:"≮",nltri:"⋪",nltrie:"⋬",nLtv:"≪̸",nmid:"∤",NoBreak:"⁠",NonBreakingSpace:" ",Nopf:"ℕ",nopf:"𝕟",Not:"⫬",not:"¬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",notin:"∉",notindot:"⋵̸",notinE:"⋹̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrArr:"⇏",nrarr:"↛",nrarrc:"⤳̸",nrarrw:"↝̸",nRightarrow:"⇏",nrightarrow:"↛",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",Nscr:"𝒩",nscr:"𝓃",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",Ntilde:"Ñ",ntilde:"ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",Nu:"Ν",nu:"ν",num:"#",numero:"№",numsp:" ",nvap:"≍⃒",nVDash:"⊯",nVdash:"⊮",nvDash:"⊭",nvdash:"⊬",nvge:"≥⃒",nvgt:">⃒",nvHarr:"⤄",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwarhk:"⤣",nwArr:"⇖",nwarr:"↖",nwarrow:"↖",nwnear:"⤧",Oacute:"Ó",oacute:"ó",oast:"⊛",ocir:"⊚",Ocirc:"Ô",ocirc:"ô",Ocy:"О",ocy:"о",odash:"⊝",Odblac:"Ő",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",OElig:"Œ",oelig:"œ",ofcir:"⦿",Ofr:"𝔒",ofr:"𝔬",ogon:"˛",Ograve:"Ò",ograve:"ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",Omacr:"Ō",omacr:"ō",Omega:"Ω",omega:"ω",Omicron:"Ο",omicron:"ο",omid:"⦶",ominus:"⊖",Oopf:"𝕆",oopf:"𝕠",opar:"⦷",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",operp:"⦹",oplus:"⊕",Or:"⩔",or:"∨",orarr:"↻",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oS:"Ⓢ",Oscr:"𝒪",oscr:"ℴ",Oslash:"Ø",oslash:"ø",osol:"⊘",Otilde:"Õ",otilde:"õ",Otimes:"⨷",otimes:"⊗",otimesas:"⨶",Ouml:"Ö",ouml:"ö",ovbar:"⌽",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",par:"∥",para:"¶",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",PartialD:"∂",Pcy:"П",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",Pfr:"𝔓",pfr:"𝔭",Phi:"Φ",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",Pi:"Π",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",PlusMinus:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",Poincareplane:"ℌ",pointint:"⨕",Popf:"ℙ",popf:"𝕡",pound:"£",Pr:"⪻",pr:"≺",prap:"⪷",prcue:"≼",prE:"⪳",pre:"⪯",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",Prime:"″",prime:"′",primes:"ℙ",prnap:"⪹",prnE:"⪵",prnsim:"⋨",prod:"∏",Product:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",Proportion:"∷",Proportional:"∝",propto:"∝",prsim:"≾",prurel:"⊰",Pscr:"𝒫",pscr:"𝓅",Psi:"Ψ",psi:"ψ",puncsp:" ",Qfr:"𝔔",qfr:"𝔮",qint:"⨌",Qopf:"ℚ",qopf:"𝕢",qprime:"⁗",Qscr:"𝒬",qscr:"𝓆",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",QUOT:'"',quot:'"',rAarr:"⇛",race:"∽̱",Racute:"Ŕ",racute:"ŕ",radic:"√",raemptyv:"⦳",Rang:"⟫",rang:"⟩",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",Rarr:"↠",rArr:"⇒",rarr:"→",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",Rarrtl:"⤖",rarrtl:"↣",rarrw:"↝",rAtail:"⤜",ratail:"⤚",ratio:"∶",rationals:"ℚ",RBarr:"⤐",rBarr:"⤏",rbarr:"⤍",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",Rcaron:"Ř",rcaron:"ř",Rcedil:"Ŗ",rcedil:"ŗ",rceil:"⌉",rcub:"}",Rcy:"Р",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",Re:"ℜ",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",REG:"®",reg:"®",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",rfisht:"⥽",rfloor:"⌋",Rfr:"ℜ",rfr:"𝔯",rHar:"⥤",rhard:"⇁",rharu:"⇀",rharul:"⥬",Rho:"Ρ",rho:"ρ",rhov:"ϱ",RightAngleBracket:"⟩",RightArrow:"→",Rightarrow:"⇒",rightarrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",rightarrowtail:"↣",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",rightthreetimes:"⋌",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",Ropf:"ℝ",ropf:"𝕣",roplus:"⨮",rotimes:"⨵",RoundImplies:"⥰",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",Rrightarrow:"⇛",rsaquo:"›",Rscr:"ℛ",rscr:"𝓇",Rsh:"↱",rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",RuleDelayed:"⧴",ruluhar:"⥨",rx:"℞",Sacute:"Ś",sacute:"ś",sbquo:"‚",Sc:"⪼",sc:"≻",scap:"⪸",Scaron:"Š",scaron:"š",sccue:"≽",scE:"⪴",sce:"⪰",Scedil:"Ş",scedil:"ş",Scirc:"Ŝ",scirc:"ŝ",scnap:"⪺",scnE:"⪶",scnsim:"⋩",scpolint:"⨓",scsim:"≿",Scy:"С",scy:"с",sdot:"⋅",sdotb:"⊡",sdote:"⩦",searhk:"⤥",seArr:"⇘",searr:"↘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",Sfr:"𝔖",sfr:"𝔰",sfrown:"⌢",sharp:"♯",SHCHcy:"Щ",shchcy:"щ",SHcy:"Ш",shcy:"ш",ShortDownArrow:"↓",ShortLeftArrow:"←",shortmid:"∣",shortparallel:"∥",ShortRightArrow:"→",ShortUpArrow:"↑",shy:"­",Sigma:"Σ",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",SmallCircle:"∘",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",SOFTcy:"Ь",softcy:"ь",sol:"/",solb:"⧄",solbar:"⌿",Sopf:"𝕊",sopf:"𝕤",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",Sqrt:"√",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",Square:"□",square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",squarf:"▪",squf:"▪",srarr:"→",Sscr:"𝒮",sscr:"𝓈",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",Star:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",Sub:"⋐",sub:"⊂",subdot:"⪽",subE:"⫅",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",Subset:"⋐",subset:"⊂",subseteq:"⊆",subseteqq:"⫅",SubsetEqual:"⊆",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",SuchThat:"∋",Sum:"∑",sum:"∑",sung:"♪",Sup:"⋑",sup:"⊃",sup1:"¹",sup2:"²",sup3:"³",supdot:"⪾",supdsub:"⫘",supE:"⫆",supe:"⊇",supedot:"⫄",Superset:"⊃",SupersetEqual:"⊇",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",Supset:"⋑",supset:"⊃",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swarhk:"⤦",swArr:"⇙",swarr:"↙",swarrow:"↙",swnwar:"⤪",szlig:"ß",Tab:"	",target:"⌖",Tau:"Τ",tau:"τ",tbrk:"⎴",Tcaron:"Ť",tcaron:"ť",Tcedil:"Ţ",tcedil:"ţ",Tcy:"Т",tcy:"т",tdot:"⃛",telrec:"⌕",Tfr:"𝔗",tfr:"𝔱",there4:"∴",Therefore:"∴",therefore:"∴",Theta:"Θ",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",ThickSpace:"  ",thinsp:" ",ThinSpace:" ",thkap:"≈",thksim:"∼",THORN:"Þ",thorn:"þ",Tilde:"∼",tilde:"˜",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",times:"×",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",Topf:"𝕋",topf:"𝕥",topfork:"⫚",tosa:"⤩",tprime:"‴",TRADE:"™",trade:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",TripleDot:"⃛",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",Tscr:"𝒯",tscr:"𝓉",TScy:"Ц",tscy:"ц",TSHcy:"Ћ",tshcy:"ћ",Tstrok:"Ŧ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",Uacute:"Ú",uacute:"ú",Uarr:"↟",uArr:"⇑",uarr:"↑",Uarrocir:"⥉",Ubrcy:"Ў",ubrcy:"ў",Ubreve:"Ŭ",ubreve:"ŭ",Ucirc:"Û",ucirc:"û",Ucy:"У",ucy:"у",udarr:"⇅",Udblac:"Ű",udblac:"ű",udhar:"⥮",ufisht:"⥾",Ufr:"𝔘",ufr:"𝔲",Ugrave:"Ù",ugrave:"ù",uHar:"⥣",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",Umacr:"Ū",umacr:"ū",uml:"¨",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",uogon:"ų",Uopf:"𝕌",uopf:"𝕦",UpArrow:"↑",Uparrow:"⇑",uparrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",UpDownArrow:"↕",Updownarrow:"⇕",updownarrow:"↕",UpEquilibrium:"⥮",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",UpperLeftArrow:"↖",UpperRightArrow:"↗",Upsi:"ϒ",upsi:"υ",upsih:"ϒ",Upsilon:"Υ",upsilon:"υ",UpTee:"⊥",UpTeeArrow:"↥",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",Uring:"Ů",uring:"ů",urtri:"◹",Uscr:"𝒰",uscr:"𝓊",utdot:"⋰",Utilde:"Ũ",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",Uuml:"Ü",uuml:"ü",uwangle:"⦧",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",vArr:"⇕",varr:"↕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",Vbar:"⫫",vBar:"⫨",vBarv:"⫩",Vcy:"В",vcy:"в",VDash:"⊫",Vdash:"⊩",vDash:"⊨",vdash:"⊢",Vdashl:"⫦",Vee:"⋁",vee:"∨",veebar:"⊻",veeeq:"≚",vellip:"⋮",Verbar:"‖",verbar:"|",Vert:"‖",vert:"|",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"𝔙",vfr:"𝔳",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",Vopf:"𝕍",vopf:"𝕧",vprop:"∝",vrtri:"⊳",Vscr:"𝒱",vscr:"𝓋",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",Vvdash:"⊪",vzigzag:"⦚",Wcirc:"Ŵ",wcirc:"ŵ",wedbar:"⩟",Wedge:"⋀",wedge:"∧",wedgeq:"≙",weierp:"℘",Wfr:"𝔚",wfr:"𝔴",Wopf:"𝕎",wopf:"𝕨",wp:"℘",wr:"≀",wreath:"≀",Wscr:"𝒲",wscr:"𝓌",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",Xfr:"𝔛",xfr:"𝔵",xhArr:"⟺",xharr:"⟷",Xi:"Ξ",xi:"ξ",xlArr:"⟸",xlarr:"⟵",xmap:"⟼",xnis:"⋻",xodot:"⨀",Xopf:"𝕏",xopf:"𝕩",xoplus:"⨁",xotime:"⨂",xrArr:"⟹",xrarr:"⟶",Xscr:"𝒳",xscr:"𝓍",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",Yacute:"Ý",yacute:"ý",YAcy:"Я",yacy:"я",Ycirc:"Ŷ",ycirc:"ŷ",Ycy:"Ы",ycy:"ы",yen:"¥",Yfr:"𝔜",yfr:"𝔶",YIcy:"Ї",yicy:"ї",Yopf:"𝕐",yopf:"𝕪",Yscr:"𝒴",yscr:"𝓎",YUcy:"Ю",yucy:"ю",Yuml:"Ÿ",yuml:"ÿ",Zacute:"Ź",zacute:"ź",Zcaron:"Ž",zcaron:"ž",Zcy:"З",zcy:"з",Zdot:"Ż",zdot:"ż",zeetrf:"ℨ",ZeroWidthSpace:"​",Zeta:"Ζ",zeta:"ζ",Zfr:"ℨ",zfr:"𝔷",ZHcy:"Ж",zhcy:"ж",zigrarr:"⇝",Zopf:"ℤ",zopf:"𝕫",Zscr:"𝒵",zscr:"𝓏",zwj:"‍",zwnj:"‌"}},{}],2:[function(e,t){"use strict";var r={};["article","aside","button","blockquote","body","canvas","caption","col","colgroup","dd","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","iframe","li","map","object","ol","output","p","pre","progress","script","section","style","table","tbody","td","textarea","tfoot","th","tr","thead","ul","video"].forEach(function(e){r[e]=!0}),t.exports=r},{}],3:[function(e,t){"use strict";function r(e,t){return e=e.source,t=t||"",function r(n,s){return n?(s=s.source||s,e=e.replace(n,s),r):new RegExp(e,t)}}var n=/[a-zA-Z_:][a-zA-Z0-9:._-]*/,s=/[^"'=<>`\x00-\x20]+/,o=/'[^']*'/,i=/"[^"]*"/,l=r(/(?:unquoted|single_quoted|double_quoted)/)("unquoted",s)("single_quoted",o)("double_quoted",i)(),a=r(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name",n)("attr_value",l)(),c=r(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute",a)(),u=/<\/[A-Za-z][A-Za-z0-9]*\s*>/,p=/<!--([^-]+|[-][^-]+)*-->/,h=/<[?].*?[?]>/,f=/<![A-Z]+\s+[^>]*>/,d=/<!\[CDATA\[([^\]]+|\][^\]]|\]\][^>])*\]\]>/,g=r(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag",c)("close_tag",u)("comment",p)("processing",h)("declaration",f)("cdata",d)();t.exports.HTML_TAG_RE=g},{}],4:[function(e,t){"use strict";t.exports=["coap","doi","javascript","aaa","aaas","about","acap","cap","cid","crid","data","dav","dict","dns","file","ftp","geo","go","gopher","h323","http","https","iax","icap","im","imap","info","ipp","iris","iris.beep","iris.xpc","iris.xpcs","iris.lwz","ldap","mailto","mid","msrp","msrps","mtqp","mupdate","news","nfs","ni","nih","nntp","opaquelocktoken","pop","pres","rtsp","service","session","shttp","sieve","sip","sips","sms","snmp","soap.beep","soap.beeps","tag","tel","telnet","tftp","thismessage","tn3270","tip","tv","urn","vemmi","ws","wss","xcon","xcon-userid","xmlrpc.beep","xmlrpc.beeps","xmpp","z39.50r","z39.50s","adiumxtra","afp","afs","aim","apt","attachment","aw","beshare","bitcoin","bolo","callto","chrome","chrome-extension","com-eventbrite-attendee","content","cvs","dlna-playsingle","dlna-playcontainer","dtn","dvb","ed2k","facetime","feed","finger","fish","gg","git","gizmoproject","gtalk","hcp","icon","ipn","irc","irc6","ircs","itms","jar","jms","keyparc","lastfm","ldaps","magnet","maps","market","message","mms","ms-help","msnim","mumble","mvn","notes","oid","palm","paparazzi","platform","proxy","psyc","query","res","resource","rmi","rsync","rtmp","secondlife","sftp","sgn","skype","smb","soldat","spotify","ssh","steam","svn","teamspeak","things","udp","unreal","ut2004","ventrilo","view-source","webcal","wtai","wyciwyg","xfire","xri","ymsgr"]},{}],5:[function(e,t,r){"use strict";function n(e){return Object.prototype.toString.call(e)}function s(e){return"[object String]"===n(e)}function o(e,t){return e?d.call(e,t):!1}function i(e){var t=[].slice.call(arguments,1);return t.forEach(function(t){if(t){if("object"!=typeof t)throw new TypeError(t+"must be object");Object.keys(t).forEach(function(r){e[r]=t[r]})}}),e}function l(e){return e.indexOf("\\")<0?e:e.replace(g,"$1")}function a(e){return e>=55296&&57343>=e?!1:e>=64976&&65007>=e?!1:65535===(65535&e)||65534===(65535&e)?!1:e>=0&&8>=e?!1:11===e?!1:e>=14&&31>=e?!1:e>=127&&159>=e?!1:e>1114111?!1:!0}function c(e){if(e>65535){e-=65536;var t=55296+(e>>10),r=56320+(1023&e);return String.fromCharCode(t,r)}return String.fromCharCode(e)}function u(e,t){var r=0;return o(v,t)?v[t]:35===t.charCodeAt(0)&&b.test(t)&&(r="x"===t[1].toLowerCase()?parseInt(t.slice(2),16):parseInt(t.slice(1),10),a(r))?c(r):e}function p(e){return e.indexOf("&")<0?e:e.replace(m,u)}function h(e){return y[e]}function f(e){return k.test(e)?e.replace(_,h):e}var d=Object.prototype.hasOwnProperty,g=/\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g,m=/&([a-z#][a-z0-9]{1,31});/gi,b=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,v=e("./entities"),k=/[&<>"]/,_=/[&<>"]/g,y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};r.assign=i,r.isString=s,r.has=o,r.unescapeMd=l,r.isValidEntityCode=a,r.fromCodePoint=c,r.replaceEntities=p,r.escapeHtml=f},{"./entities":1}],6:[function(e,t){"use strict";t.exports={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,linkTarget:"",typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["block","inline","references","abbr2"]},block:{rules:["blockquote","code","fences","heading","hr","htmlblock","lheading","list","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","htmltag","links","newline","text"]}}}},{}],7:[function(e,t){"use strict";t.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,linkTarget:"",typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["block","inline","references","replacements","linkify","smartquotes","references","abbr2","footnote_tail"]},block:{rules:["blockquote","code","fences","footnote","heading","hr","htmlblock","lheading","list","paragraph","table"]},inline:{rules:["autolink","backticks","del","emphasis","entity","escape","footnote_ref","htmltag","links","newline","text"]}}}},{}],8:[function(e,t){"use strict";t.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,linkTarget:"",typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{},block:{},inline:{}}}},{}],9:[function(e,t){"use strict";var r=e("../common/utils").replaceEntities;t.exports=function(e){var t=r(e);try{t=decodeURI(t)}catch(n){}return encodeURI(t)}},{"../common/utils":5}],10:[function(e,t){"use strict";t.exports=function(e){return e.trim().replace(/\s+/g," ").toUpperCase()}},{}],11:[function(e,t){"use strict";var r=e("./normalize_link"),n=e("../common/utils").unescapeMd;t.exports=function(e,t){var s,o,i,l=t,a=e.posMax;if(60===e.src.charCodeAt(t)){for(t++;a>t;){if(s=e.src.charCodeAt(t),10===s)return!1;if(62===s)return i=r(n(e.src.slice(l+1,t))),e.parser.validateLink(i)?(e.pos=t+1,e.linkContent=i,!0):!1;92===s&&a>t+1?t+=2:t++}return!1}for(o=0;a>t&&(s=e.src.charCodeAt(t),32!==s)&&!(s>8&&14>s);)if(92===s&&a>t+1)t+=2;else{if(40===s&&(o++,o>1))break;if(41===s&&(o--,0>o))break;t++}return l===t?!1:(i=n(e.src.slice(l,t)),e.parser.validateLink(i)?(e.linkContent=i,e.pos=t,!0):!1)}},{"../common/utils":5,"./normalize_link":9}],12:[function(e,t){"use strict";t.exports=function(e,t){
var r,n,s,o=-1,i=e.posMax,l=e.pos,a=e.isInLabel;if(e.isInLabel)return-1;if(e.labelUnmatchedScopes)return e.labelUnmatchedScopes--,-1;for(e.pos=t+1,e.isInLabel=!0,r=1;e.pos<i;){if(s=e.src.charCodeAt(e.pos),91===s)r++;else if(93===s&&(r--,0===r)){n=!0;break}e.parser.skipToken(e)}return n?(o=e.pos,e.labelUnmatchedScopes=0):e.labelUnmatchedScopes=r-1,e.pos=l,e.isInLabel=a,o}},{}],13:[function(e,t){"use strict";var r=e("../common/utils").unescapeMd;t.exports=function(e,t){var n,s=t,o=e.posMax,i=e.src.charCodeAt(t);if(34!==i&&39!==i&&40!==i)return!1;for(t++,40===i&&(i=41);o>t;){if(n=e.src.charCodeAt(t),n===i)return e.pos=t+1,e.linkContent=r(e.src.slice(s+1,t)),!0;92===n&&o>t+1?t+=2:t++}return!1}},{"../common/utils":5}],14:[function(e,t){"use strict";function r(e,t,r){this.src=t,this.env=r,this.options=e.options,this.tokens=[],this.inlineMode=!1,this.inline=e.inline,this.block=e.block,this.renderer=e.renderer,this.typographer=e.typographer}function n(e,t){"string"!=typeof e&&(t=e,e="default"),this.inline=new a,this.block=new l,this.core=new i,this.renderer=new o,this.ruler=new c,this.options={},this.configure(u[e]),this.set(t||{})}var s=e("./common/utils").assign,o=e("./renderer"),i=e("./parser_core"),l=e("./parser_block"),a=e("./parser_inline"),c=e("./ruler"),u={"default":e("./configs/default"),full:e("./configs/full"),commonmark:e("./configs/commonmark")};n.prototype.set=function(e){s(this.options,e)},n.prototype.configure=function(e){var t=this;if(!e)throw new Error("Wrong `remarkable` preset, check name/content");e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(r){e.components[r].rules&&t[r].ruler.enable(e.components[r].rules,!0)})},n.prototype.use=function(e,t){return e(this,t),this},n.prototype.parse=function(e,t){var n=new r(this,e,t);return this.core.process(n),n.tokens},n.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)},n.prototype.parseInline=function(e,t){var n=new r(this,e,t);return n.inlineMode=!0,this.core.process(n),n.tokens},n.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)},t.exports=n,t.exports.utils=e("./common/utils")},{"./common/utils":5,"./configs/commonmark":6,"./configs/default":7,"./configs/full":8,"./parser_block":15,"./parser_core":16,"./parser_inline":17,"./renderer":18,"./ruler":19}],15:[function(e,t){"use strict";function r(){this.ruler=new n;for(var e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1],{alt:(o[e][2]||[]).slice()})}var n=e("./ruler"),s=e("./rules_block/state_block"),o=[["code",e("./rules_block/code")],["fences",e("./rules_block/fences"),["paragraph","blockquote","list"]],["blockquote",e("./rules_block/blockquote"),["paragraph","blockquote","list"]],["hr",e("./rules_block/hr"),["paragraph","blockquote","list"]],["list",e("./rules_block/list"),["paragraph","blockquote"]],["footnote",e("./rules_block/footnote"),["paragraph"]],["heading",e("./rules_block/heading"),["paragraph","blockquote"]],["lheading",e("./rules_block/lheading")],["htmlblock",e("./rules_block/htmlblock"),["paragraph","blockquote"]],["table",e("./rules_block/table"),["paragraph"]],["deflist",e("./rules_block/deflist"),["paragraph"]],["paragraph",e("./rules_block/paragraph")]];r.prototype.tokenize=function(e,t,r){for(var n,s,o=this.ruler.getRules(""),i=o.length,l=t,a=!1;r>l&&(e.line=l=e.skipEmptyLines(l),!(l>=r))&&!(e.tShift[l]<e.blkIndent);){for(s=0;i>s&&!(n=o[s](e,l,r,!1));s++);if(e.tight=!a,e.isEmpty(e.line-1)&&(a=!0),l=e.line,r>l&&e.isEmpty(l)){if(a=!0,l++,r>l&&"list"===e.parentType&&e.isEmpty(l))break;e.line=l}}};var i=/[\n\t]/g,l=/\r[\n\u0085]|[\u2424\u2028\u0085]/g,a=/\u00a0/g;r.prototype.parse=function(e,t,r,n){var o,c=0,u=0;return e?(e=e.replace(a," "),e=e.replace(l,"\n"),e.indexOf("	")>=0&&(e=e.replace(i,function(t,r){var n;return 10===e.charCodeAt(r)?(c=r+1,u=0,t):(n="    ".slice((r-c-u)%4),u=r-c+1,n)})),o=new s(e,this,t,r,n),void this.tokenize(o,o.line,o.lineMax)):[]},t.exports=r},{"./ruler":19,"./rules_block/blockquote":21,"./rules_block/code":22,"./rules_block/deflist":23,"./rules_block/fences":24,"./rules_block/footnote":25,"./rules_block/heading":26,"./rules_block/hr":27,"./rules_block/htmlblock":28,"./rules_block/lheading":29,"./rules_block/list":30,"./rules_block/paragraph":31,"./rules_block/state_block":32,"./rules_block/table":33}],16:[function(e,t){"use strict";function r(){this.options={},this.ruler=new n;for(var e=0;e<s.length;e++)this.ruler.push(s[e][0],s[e][1])}var n=e("./ruler"),s=[["block",e("./rules_core/block")],["abbr",e("./rules_core/abbr")],["references",e("./rules_core/references")],["inline",e("./rules_core/inline")],["footnote_tail",e("./rules_core/footnote_tail")],["abbr2",e("./rules_core/abbr2")],["replacements",e("./rules_core/replacements")],["smartquotes",e("./rules_core/smartquotes")],["linkify",e("./rules_core/linkify")]];r.prototype.process=function(e){var t,r,n;for(n=this.ruler.getRules(""),t=0,r=n.length;r>t;t++)n[t](e)},t.exports=r},{"./ruler":19,"./rules_core/abbr":34,"./rules_core/abbr2":35,"./rules_core/block":36,"./rules_core/footnote_tail":37,"./rules_core/inline":38,"./rules_core/linkify":39,"./rules_core/references":40,"./rules_core/replacements":41,"./rules_core/smartquotes":42}],17:[function(e,t){"use strict";function r(){this.ruler=new s;for(var e=0;e<l.length;e++)this.ruler.push(l[e][0],l[e][1]);this.validateLink=n}function n(e){var t=["vbscript","javascript","file","data"],r=e.trim().toLowerCase();return r=i.replaceEntities(r),-1!==r.indexOf(":")&&-1!==t.indexOf(r.split(":")[0])?!1:!0}var s=e("./ruler"),o=e("./rules_inline/state_inline"),i=e("./common/utils"),l=[["text",e("./rules_inline/text")],["newline",e("./rules_inline/newline")],["escape",e("./rules_inline/escape")],["backticks",e("./rules_inline/backticks")],["del",e("./rules_inline/del")],["ins",e("./rules_inline/ins")],["mark",e("./rules_inline/mark")],["emphasis",e("./rules_inline/emphasis")],["sub",e("./rules_inline/sub")],["sup",e("./rules_inline/sup")],["links",e("./rules_inline/links")],["footnote_inline",e("./rules_inline/footnote_inline")],["footnote_ref",e("./rules_inline/footnote_ref")],["autolink",e("./rules_inline/autolink")],["htmltag",e("./rules_inline/htmltag")],["entity",e("./rules_inline/entity")]];r.prototype.skipToken=function(e){var t,r,n=this.ruler.getRules(""),s=n.length,o=e.pos;if((r=e.cacheGet(o))>0)return void(e.pos=r);for(t=0;s>t;t++)if(n[t](e,!0))return void e.cacheSet(o,e.pos);e.pos++,e.cacheSet(o,e.pos)},r.prototype.tokenize=function(e){for(var t,r,n=this.ruler.getRules(""),s=n.length,o=e.posMax;e.pos<o;){for(r=0;s>r&&!(t=n[r](e,!1));r++);if(t){if(e.pos>=o)break}else e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},r.prototype.parse=function(e,t,r,n){var s=new o(e,this,t,r,n);this.tokenize(s)},t.exports=r},{"./common/utils":5,"./ruler":19,"./rules_inline/autolink":43,"./rules_inline/backticks":44,"./rules_inline/del":45,"./rules_inline/emphasis":46,"./rules_inline/entity":47,"./rules_inline/escape":48,"./rules_inline/footnote_inline":49,"./rules_inline/footnote_ref":50,"./rules_inline/htmltag":51,"./rules_inline/ins":52,"./rules_inline/links":53,"./rules_inline/mark":54,"./rules_inline/newline":55,"./rules_inline/state_inline":56,"./rules_inline/sub":57,"./rules_inline/sup":58,"./rules_inline/text":59}],18:[function(e,t){"use strict";function r(){this.rules=n.assign({},s),this.getBreak=s.getBreak}var n=e("./common/utils"),s=e("./rules");t.exports=r,r.prototype.renderInline=function(e,t,r){for(var n=this.rules,s=e.length,o=0,i="";s--;)i+=n[e[o].type](e,o++,t,r,this);return i},r.prototype.render=function(e,t,r){for(var n=this.rules,s=e.length,o=-1,i="";++o<s;)i+="inline"===e[o].type?this.renderInline(e[o].children,t,r):n[e[o].type](e,o,t,r,this);return i}},{"./common/utils":5,"./rules":20}],19:[function(e,t){"use strict";function r(){this.__rules__=[],this.__cache__=null}r.prototype.__find__=function(e){for(var t=this.__rules__.length,r=-1;t--;)if(this.__rules__[++r].name===e)return r;return-1},r.prototype.__compile__=function(){var e=this,t=[""];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){t.indexOf(e)<0&&t.push(e)})}),e.__cache__={},t.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(r){r.enabled&&(t&&r.alt.indexOf(t)<0||e.__cache__[t].push(r.fn))})})},r.prototype.at=function(e,t,r){var n=this.__find__(e),s=r||{};if(-1===n)throw new Error("Parser rule not found: "+e);this.__rules__[n].fn=t,this.__rules__[n].alt=s.alt||[],this.__cache__=null},r.prototype.before=function(e,t,r,n){var s=this.__find__(e),o=n||{};if(-1===s)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s,0,{name:t,enabled:!0,fn:r,alt:o.alt||[]}),this.__cache__=null},r.prototype.after=function(e,t,r,n){var s=this.__find__(e),o=n||{};if(-1===s)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s+1,0,{name:t,enabled:!0,fn:r,alt:o.alt||[]}),this.__cache__=null},r.prototype.push=function(e,t,r){var n=r||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:n.alt||[]}),this.__cache__=null},r.prototype.enable=function(e,t){e=Array.isArray(e)?e:[e],t&&this.__rules__.forEach(function(e){e.enabled=!1}),e.forEach(function(e){var t=this.__find__(e);if(0>t)throw new Error("Rules manager: invalid rule name "+e);this.__rules__[t].enabled=!0},this),this.__cache__=null},r.prototype.disable=function(e){e=Array.isArray(e)?e:[e],e.forEach(function(e){var t=this.__find__(e);if(0>t)throw new Error("Rules manager: invalid rule name "+e);this.__rules__[t].enabled=!1},this),this.__cache__=null},r.prototype.getRules=function(e){return null===this.__cache__&&this.__compile__(),this.__cache__[e]||[]},t.exports=r},{}],20:[function(e,t){"use strict";function r(e,t){return++t>=e.length-2?t:"paragraph_open"===e[t].type&&e[t].tight&&"inline"===e[t+1].type&&0===e[t+1].content.length&&"paragraph_close"===e[t+2].type&&e[t+2].tight?r(e,t+2):t}var n=e("./common/utils").has,s=e("./common/utils").unescapeMd,o=e("./common/utils").replaceEntities,i=e("./common/utils").escapeHtml,l={};l.blockquote_open=function(){return"<blockquote>\n"},l.blockquote_close=function(e,t){return"</blockquote>"+a(e,t)},l.code=function(e,t){return e[t].block?"<pre><code>"+i(e[t].content)+"</code></pre>"+a(e,t):"<code>"+i(e[t].content)+"</code>"},l.fence=function(e,t,r,l,c){var u,p,h,f=e[t],d="",g=r.langPrefix,m="";if(f.params){if(u=f.params.split(/\s+/g),p=u.join(" "),n(c.rules.fence_custom,u[0]))return c.rules.fence_custom[u[0]](e,t,r,l,c);m=i(o(s(p))),d=' class="'+g+m+'"'}return h=r.highlight?r.highlight.apply(r.highlight,[f.content].concat(u))||i(f.content):i(f.content),"<pre><code"+d+">"+h+"</code></pre>"+a(e,t)},l.fence_custom={},l.heading_open=function(e,t){return"<h"+e[t].hLevel+">"},l.heading_close=function(e,t){return"</h"+e[t].hLevel+">\n"},l.hr=function(e,t,r){return(r.xhtmlOut?"<hr />":"<hr>")+a(e,t)},l.bullet_list_open=function(){return"<ul>\n"},l.bullet_list_close=function(e,t){return"</ul>"+a(e,t)},l.list_item_open=function(){return"<li>"},l.list_item_close=function(){return"</li>\n"},l.ordered_list_open=function(e,t){var r=e[t],n=r.order>1?' start="'+r.order+'"':"";return"<ol"+n+">\n"},l.ordered_list_close=function(e,t){return"</ol>"+a(e,t)},l.paragraph_open=function(e,t){return e[t].tight?"":"<p>"},l.paragraph_close=function(e,t){var r=!(e[t].tight&&t&&"inline"===e[t-1].type&&!e[t-1].content);return(e[t].tight?"":"</p>")+(r?a(e,t):"")},l.link_open=function(e,t,r){var n=e[t].title?' title="'+i(o(e[t].title))+'"':"",s=r.linkTarget?' target="'+r.linkTarget+'"':"";return'<a href="'+i(e[t].href)+'"'+n+s+">"},l.link_close=function(){return"</a>"},l.image=function(e,t,r){var n=' src="'+i(e[t].src)+'"',l=e[t].title?' title="'+i(o(e[t].title))+'"':"",a=' alt="'+(e[t].alt?i(o(s(e[t].alt))):"")+'"',c=r.xhtmlOut?" /":"";return"<img"+n+a+l+c+">"},l.table_open=function(){return"<table>\n"},l.table_close=function(){return"</table>\n"},l.thead_open=function(){return"<thead>\n"},l.thead_close=function(){return"</thead>\n"},l.tbody_open=function(){return"<tbody>\n"},l.tbody_close=function(){return"</tbody>\n"},l.tr_open=function(){return"<tr>"},l.tr_close=function(){return"</tr>\n"},l.th_open=function(e,t){var r=e[t];return"<th"+(r.align?' style="text-align:'+r.align+'"':"")+">"},l.th_close=function(){return"</th>"},l.td_open=function(e,t){var r=e[t];return"<td"+(r.align?' style="text-align:'+r.align+'"':"")+">"},l.td_close=function(){return"</td>"},l.strong_open=function(){return"<strong>"},l.strong_close=function(){return"</strong>"},l.em_open=function(){return"<em>"},l.em_close=function(){return"</em>"},l.del_open=function(){return"<del>"},l.del_close=function(){return"</del>"},l.ins_open=function(){return"<ins>"},l.ins_close=function(){return"</ins>"},l.mark_open=function(){return"<mark>"},l.mark_close=function(){return"</mark>"},l.sub=function(e,t){return"<sub>"+i(e[t].content)+"</sub>"},l.sup=function(e,t){return"<sup>"+i(e[t].content)+"</sup>"},l.hardbreak=function(e,t,r){return r.xhtmlOut?"<br />\n":"<br>\n"},l.softbreak=function(e,t,r){return r.breaks?r.xhtmlOut?"<br />\n":"<br>\n":"\n"},l.text=function(e,t){return i(e[t].content)},l.htmlblock=function(e,t){return e[t].content},l.htmltag=function(e,t){return e[t].content},l.abbr_open=function(e,t){return'<abbr title="'+i(o(e[t].title))+'">'},l.abbr_close=function(){return"</abbr>"},l.footnote_ref=function(e,t){var r=Number(e[t].id+1).toString(),n="fnref"+r;return e[t].subId>0&&(n+=":"+e[t].subId),'<sup class="footnote-ref"><a href="#fn'+r+'" id="'+n+'">['+r+"]</a></sup>"},l.footnote_block_open=function(e,t,r){var n=r.xhtmlOut?'<hr class="footnotes-sep" />\n':'<hr class="footnotes-sep">\n';return n+'<section class="footnotes">\n<ol class="footnotes-list">\n'},l.footnote_block_close=function(){return"</ol>\n</section>\n"},l.footnote_open=function(e,t){var r=Number(e[t].id+1).toString();return'<li id="fn'+r+'"  class="footnote-item">'},l.footnote_close=function(){return"</li>\n"},l.footnote_anchor=function(e,t){var r=Number(e[t].id+1).toString(),n="fnref"+r;return e[t].subId>0&&(n+=":"+e[t].subId),' <a href="#'+n+'" class="footnote-backref">↩</a>'},l.dl_open=function(){return"<dl>\n"},l.dt_open=function(){return"<dt>"},l.dd_open=function(){return"<dd>"},l.dl_close=function(){return"</dl>\n"},l.dt_close=function(){return"</dt>\n"},l.dd_close=function(){return"</dd>\n"};var a=l.getBreak=function(e,t){return t=r(e,t),t<e.length&&"list_item_close"===e[t].type?"":"\n"};t.exports=l},{"./common/utils":5}],21:[function(e,t){"use strict";t.exports=function(e,t,r,n){var s,o,i,l,a,c,u,p,h,f,d,g=e.bMarks[t]+e.tShift[t],m=e.eMarks[t];if(g>m)return!1;if(62!==e.src.charCodeAt(g++))return!1;if(e.level>=e.options.maxNesting)return!1;if(n)return!0;for(32===e.src.charCodeAt(g)&&g++,a=e.blkIndent,e.blkIndent=0,l=[e.bMarks[t]],e.bMarks[t]=g,g=m>g?e.skipSpaces(g):g,o=g>=m,i=[e.tShift[t]],e.tShift[t]=g-e.bMarks[t],p=e.parser.ruler.getRules("blockquote"),s=t+1;r>s&&(g=e.bMarks[s]+e.tShift[s],m=e.eMarks[s],!(g>=m));s++)if(62!==e.src.charCodeAt(g++)){if(o)break;for(d=!1,h=0,f=p.length;f>h;h++)if(p[h](e,s,r,!0)){d=!0;break}if(d)break;l.push(e.bMarks[s]),i.push(e.tShift[s]),e.tShift[s]=-1337}else 32===e.src.charCodeAt(g)&&g++,l.push(e.bMarks[s]),e.bMarks[s]=g,g=m>g?e.skipSpaces(g):g,o=g>=m,i.push(e.tShift[s]),e.tShift[s]=g-e.bMarks[s];for(c=e.parentType,e.parentType="blockquote",e.tokens.push({type:"blockquote_open",lines:u=[t,0],level:e.level++}),e.parser.tokenize(e,t,s),e.tokens.push({type:"blockquote_close",level:--e.level}),e.parentType=c,u[1]=e.line,h=0;h<i.length;h++)e.bMarks[h+t]=l[h],e.tShift[h+t]=i[h];return e.blkIndent=a,!0}},{}],22:[function(e,t){"use strict";t.exports=function(e,t,r){var n,s;if(e.tShift[t]-e.blkIndent<4)return!1;for(s=n=t+1;r>n;)if(e.isEmpty(n))n++;else{if(!(e.tShift[n]-e.blkIndent>=4))break;n++,s=n}return e.line=n,e.tokens.push({type:"code",content:e.getLines(t,s,4+e.blkIndent,!0),block:!0,lines:[t,e.line],level:e.level}),!0}},{}],23:[function(e,t){"use strict";function r(e,t){var r,n,s=e.bMarks[t]+e.tShift[t],o=e.eMarks[t];return s>=o?-1:(n=e.src.charCodeAt(s++),126!==n&&58!==n?-1:(r=e.skipSpaces(s),s===r?-1:r>=o?-1:r))}function n(e,t){var r,n,s=e.level+2;for(r=t+2,n=e.tokens.length-2;n>r;r++)e.tokens[r].level===s&&"paragraph_open"===e.tokens[r].type&&(e.tokens[r+2].tight=!0,e.tokens[r].tight=!0,r+=2)}t.exports=function(e,t,s,o){var i,l,a,c,u,p,h,f,d,g,m,b,v,k;if(o)return e.ddIndent<0?!1:r(e,t)>=0;if(h=t+1,e.isEmpty(h)&&++h>s)return!1;if(e.tShift[h]<e.blkIndent)return!1;if(i=r(e,h),0>i)return!1;if(e.level>=e.options.maxNesting)return!1;p=e.tokens.length,e.tokens.push({type:"dl_open",lines:u=[t,0],level:e.level++}),a=t,l=h;e:for(;;){for(k=!0,v=!1,e.tokens.push({type:"dt_open",lines:[a,a],level:e.level++}),e.tokens.push({type:"inline",content:e.getLines(a,a+1,e.blkIndent,!1).trim(),level:e.level+1,lines:[a,a],children:[]}),e.tokens.push({type:"dt_close",level:--e.level});;){if(e.tokens.push({type:"dd_open",lines:c=[h,0],level:e.level++}),b=e.tight,d=e.ddIndent,f=e.blkIndent,m=e.tShift[l],g=e.parentType,e.blkIndent=e.ddIndent=e.tShift[l]+2,e.tShift[l]=i-e.bMarks[l],e.tight=!0,e.parentType="deflist",e.parser.tokenize(e,l,s,!0),(!e.tight||v)&&(k=!1),v=e.line-l>1&&e.isEmpty(e.line-1),e.tShift[l]=m,e.tight=b,e.parentType=g,e.blkIndent=f,e.ddIndent=d,e.tokens.push({type:"dd_close",level:--e.level}),c[1]=h=e.line,h>=s)break e;if(e.tShift[h]<e.blkIndent)break e;if(i=r(e,h),0>i)break;l=h}if(h>=s)break;if(a=h,e.isEmpty(a))break;if(e.tShift[a]<e.blkIndent)break;if(l=a+1,l>=s)break;if(e.isEmpty(l)&&l++,l>=s)break;if(e.tShift[l]<e.blkIndent)break;if(i=r(e,l),0>i)break}return e.tokens.push({type:"dl_close",level:--e.level}),u[1]=h,e.line=h,k&&n(e,p),!0}},{}],24:[function(e,t){"use strict";t.exports=function(e,t,r,n){var s,o,i,l,a,c=!1,u=e.bMarks[t]+e.tShift[t],p=e.eMarks[t];if(u+3>p)return!1;if(s=e.src.charCodeAt(u),126!==s&&96!==s)return!1;if(a=u,u=e.skipChars(u,s),o=u-a,3>o)return!1;if(i=e.src.slice(u,p).trim(),i.indexOf("`")>=0)return!1;if(n)return!0;for(l=t;(l++,!(l>=r))&&(u=a=e.bMarks[l]+e.tShift[l],p=e.eMarks[l],!(p>u&&e.tShift[l]<e.blkIndent));)if(e.src.charCodeAt(u)===s&&!(e.tShift[l]-e.blkIndent>=4||(u=e.skipChars(u,s),o>u-a||(u=e.skipSpaces(u),p>u)))){c=!0;break}return o=e.tShift[t],e.line=l+(c?1:0),e.tokens.push({type:"fence",params:i,content:e.getLines(t+1,l,o,!0),lines:[t,e.line],level:e.level}),!0}},{}],25:[function(e,t){"use strict";t.exports=function(e,t,r,n){var s,o,i,l,a,c=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(c+4>u)return!1;if(91!==e.src.charCodeAt(c))return!1;if(94!==e.src.charCodeAt(c+1))return!1;if(e.level>=e.options.maxNesting)return!1;for(l=c+2;u>l;l++){if(32===e.src.charCodeAt(l))return!1;if(93===e.src.charCodeAt(l))break}return l===c+2?!1:l+1>=u||58!==e.src.charCodeAt(++l)?!1:n?!0:(l++,e.env.footnotes||(e.env.footnotes={}),e.env.footnotes.refs||(e.env.footnotes.refs={}),a=e.src.slice(c+2,l-2),e.env.footnotes.refs[":"+a]=-1,e.tokens.push({type:"footnote_reference_open",label:a,level:e.level++}),s=e.bMarks[t],o=e.tShift[t],i=e.parentType,e.tShift[t]=e.skipSpaces(l)-l,e.bMarks[t]=l,e.blkIndent+=4,e.parentType="footnote",e.tShift[t]<e.blkIndent&&(e.tShift[t]+=e.blkIndent,e.bMarks[t]-=e.blkIndent),e.parser.tokenize(e,t,r,!0),e.parentType=i,e.blkIndent-=4,e.tShift[t]=o,e.bMarks[t]=s,e.tokens.push({type:"footnote_reference_close",level:--e.level}),!0)}},{}],26:[function(e,t){"use strict";t.exports=function(e,t,r,n){var s,o,i,l=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(l>=a)return!1;if(s=e.src.charCodeAt(l),35!==s||l>=a)return!1;for(o=1,s=e.src.charCodeAt(++l);35===s&&a>l&&6>=o;)o++,s=e.src.charCodeAt(++l);return o>6||a>l&&32!==s?!1:n?!0:(a=e.skipCharsBack(a,32,l),i=e.skipCharsBack(a,35,l),i>l&&32===e.src.charCodeAt(i-1)&&(a=i),e.line=t+1,e.tokens.push({type:"heading_open",hLevel:o,lines:[t,e.line],level:e.level}),a>l&&e.tokens.push({type:"inline",content:e.src.slice(l,a).trim(),level:e.level+1,lines:[t,e.line],children:[]}),e.tokens.push({type:"heading_close",hLevel:o,level:e.level}),!0)}},{}],27:[function(e,t){"use strict";t.exports=function(e,t,r,n){var s,o,i,l=e.bMarks[t],a=e.eMarks[t];if(l+=e.tShift[t],l>a)return!1;if(s=e.src.charCodeAt(l++),42!==s&&45!==s&&95!==s)return!1;for(o=1;a>l;){if(i=e.src.charCodeAt(l++),i!==s&&32!==i)return!1;i===s&&o++}return 3>o?!1:n?!0:(e.line=t+1,e.tokens.push({type:"hr",lines:[t,e.line],level:e.level}),!0)}},{}],28:[function(e,t){"use strict";function r(e){var t=32|e;return t>=97&&122>=t}var n=e("../common/html_blocks"),s=/^<([a-zA-Z]{1,15})[\s\/>]/,o=/^<\/([a-zA-Z]{1,15})[\s>]/;t.exports=function(e,t,i,l){var a,c,u,p=e.bMarks[t],h=e.eMarks[t],f=e.tShift[t];if(p+=f,!e.options.html)return!1;if(f>3||p+2>=h)return!1;if(60!==e.src.charCodeAt(p))return!1;if(a=e.src.charCodeAt(p+1),33===a||63===a){if(l)return!0}else{if(47!==a&&!r(a))return!1;if(47===a){if(c=e.src.slice(p,h).match(o),!c)return!1}else if(c=e.src.slice(p,h).match(s),!c)return!1;if(n[c[1].toLowerCase()]!==!0)return!1;if(l)return!0}for(u=t+1;u<e.lineMax&&!e.isEmpty(u);)u++;return e.line=u,e.tokens.push({type:"htmlblock",level:e.level,lines:[t,e.line],content:e.getLines(t,u,0,!0)}),!0}},{"../common/html_blocks":2}],29:[function(e,t){"use strict";t.exports=function(e,t,r){var n,s,o,i=t+1;return i>=r?!1:e.tShift[i]<e.blkIndent?!1:e.tShift[i]-e.blkIndent>3?!1:(s=e.bMarks[i]+e.tShift[i],o=e.eMarks[i],s>=o?!1:(n=e.src.charCodeAt(s),45!==n&&61!==n?!1:(s=e.skipChars(s,n),s=e.skipSpaces(s),o>s?!1:(s=e.bMarks[t]+e.tShift[t],e.line=i+1,e.tokens.push({type:"heading_open",hLevel:61===n?1:2,lines:[t,e.line],level:e.level}),e.tokens.push({type:"inline",content:e.src.slice(s,e.eMarks[t]).trim(),level:e.level+1,lines:[t,e.line-1],children:[]}),e.tokens.push({type:"heading_close",hLevel:61===n?1:2,level:e.level}),!0))))}},{}],30:[function(e,t){"use strict";function r(e,t){var r,n,s;return n=e.bMarks[t]+e.tShift[t],s=e.eMarks[t],n>=s?-1:(r=e.src.charCodeAt(n++),42!==r&&45!==r&&43!==r?-1:s>n&&32!==e.src.charCodeAt(n)?-1:n)}function n(e,t){var r,n=e.bMarks[t]+e.tShift[t],s=e.eMarks[t];if(n+1>=s)return-1;if(r=e.src.charCodeAt(n++),48>r||r>57)return-1;for(;;){if(n>=s)return-1;if(r=e.src.charCodeAt(n++),!(r>=48&&57>=r)){if(41===r||46===r)break;return-1}}return s>n&&32!==e.src.charCodeAt(n)?-1:n}function s(e,t){var r,n,s=e.level+2;for(r=t+2,n=e.tokens.length-2;n>r;r++)e.tokens[r].level===s&&"paragraph_open"===e.tokens[r].type&&(e.tokens[r+2].tight=!0,e.tokens[r].tight=!0,r+=2)}t.exports=function(e,t,o,i){var l,a,c,u,p,h,f,d,g,m,b,v,k,_,y,x,w,A,q,C,S,E,M=!0;if((d=n(e,t))>=0)k=!0;else{if(!((d=r(e,t))>=0))return!1;k=!1}if(e.level>=e.options.maxNesting)return!1;if(v=e.src.charCodeAt(d-1),i)return!0;for(y=e.tokens.length,k?(f=e.bMarks[t]+e.tShift[t],b=Number(e.src.substr(f,d-f-1)),e.tokens.push({type:"ordered_list_open",order:b,lines:w=[t,0],level:e.level++})):e.tokens.push({type:"bullet_list_open",lines:w=[t,0],level:e.level++}),l=t,x=!1,q=e.parser.ruler.getRules("list");!(!(o>l)||(_=e.skipSpaces(d),g=e.eMarks[l],m=_>=g?1:_-d,m>4&&(m=1),1>m&&(m=1),a=d-e.bMarks[l]+m,e.tokens.push({type:"list_item_open",lines:A=[t,0],level:e.level++}),u=e.blkIndent,p=e.tight,c=e.tShift[t],h=e.parentType,e.tShift[t]=_-e.bMarks[t],e.blkIndent=a,e.tight=!0,e.parentType="list",e.parser.tokenize(e,t,o,!0),(!e.tight||x)&&(M=!1),x=e.line-t>1&&e.isEmpty(e.line-1),e.blkIndent=u,e.tShift[t]=c,e.tight=p,e.parentType=h,e.tokens.push({type:"list_item_close",level:--e.level}),l=t=e.line,A[1]=l,_=e.bMarks[t],l>=o)||e.isEmpty(l)||e.tShift[l]<e.blkIndent);){for(E=!1,C=0,S=q.length;S>C;C++)if(q[C](e,l,o,!0)){E=!0;break}if(E)break;if(k){if(d=n(e,l),0>d)break}else if(d=r(e,l),0>d)break;if(v!==e.src.charCodeAt(d-1))break}return e.tokens.push({type:k?"ordered_list_close":"bullet_list_close",level:--e.level}),w[1]=l,e.line=l,M&&s(e,y),!0}},{}],31:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s,o,i,l,a=t+1;if(r=e.lineMax,r>a&&!e.isEmpty(a))for(l=e.parser.ruler.getRules("paragraph");r>a&&!e.isEmpty(a);a++)if(!(e.tShift[a]-e.blkIndent>3)){for(s=!1,o=0,i=l.length;i>o;o++)if(l[o](e,a,r,!0)){s=!0;break}if(s)break}return n=e.getLines(t,a,e.blkIndent,!1).trim(),e.line=a,n.length&&(e.tokens.push({type:"paragraph_open",tight:!1,lines:[t,e.line],level:e.level}),e.tokens.push({type:"inline",content:n,level:e.level+1,lines:[t,e.line],children:[]}),e.tokens.push({type:"paragraph_close",tight:!1,level:e.level})),!0}},{}],32:[function(e,t){"use strict";function r(e,t,r,n,s){var o,i,l,a,c,u,p;for(this.src=e,this.parser=t,this.options=r,this.env=n,this.tokens=s,this.bMarks=[],this.eMarks=[],this.tShift=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.parentType="root",this.ddIndent=-1,this.level=0,this.result="",i=this.src,u=0,p=!1,l=a=u=0,c=i.length;c>a;a++){if(o=i.charCodeAt(a),!p){if(32===o){u++;continue}p=!0}(10===o||a===c-1)&&(10!==o&&a++,this.bMarks.push(l),this.eMarks.push(a),this.tShift.push(u),p=!1,u=0,l=a+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.lineMax=this.bMarks.length-1}r.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},r.prototype.skipEmptyLines=function(e){for(var t=this.lineMax;t>e&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},r.prototype.skipSpaces=function(e){for(var t=this.src.length;t>e&&32===this.src.charCodeAt(e);e++);return e},r.prototype.skipChars=function(e,t){for(var r=this.src.length;r>e&&this.src.charCodeAt(e)===t;e++);return e},r.prototype.skipCharsBack=function(e,t,r){if(r>=e)return e;for(;e>r;)if(t!==this.src.charCodeAt(--e))return e+1;return e},r.prototype.getLines=function(e,t,r,n){var s,o,i,l,a,c=e;if(e>=t)return"";if(c+1===t)return o=this.bMarks[c]+Math.min(this.tShift[c],r),i=n?this.eMarks[c]+1:this.eMarks[c],this.src.slice(o,i);for(l=new Array(t-e),s=0;t>c;c++,s++)a=this.tShift[c],a>r&&(a=r),0>a&&(a=0),o=this.bMarks[c]+a,i=t>c+1||n?this.eMarks[c]+1:this.eMarks[c],l[s]=this.src.slice(o,i);return l.join("")},t.exports=r},{}],33:[function(e,t){"use strict";function r(e,t){var r=e.bMarks[t]+e.blkIndent,n=e.eMarks[t];return e.src.substr(r,n-r)}t.exports=function(e,t,n,s){var o,i,l,a,c,u,p,h,f,d,g;if(t+2>n)return!1;if(c=t+1,e.tShift[c]<e.blkIndent)return!1;if(l=e.bMarks[c]+e.tShift[c],l>=e.eMarks[c])return!1;if(o=e.src.charCodeAt(l),124!==o&&45!==o&&58!==o)return!1;if(i=r(e,t+1),!/^[-:| ]+$/.test(i))return!1;if(u=i.split("|"),2>=u)return!1;for(h=[],a=0;a<u.length;a++){if(f=u[a].trim(),!f){if(0===a||a===u.length-1)continue;return!1}if(!/^:?-+:?$/.test(f))return!1;h.push(58===f.charCodeAt(f.length-1)?58===f.charCodeAt(0)?"center":"right":58===f.charCodeAt(0)?"left":"")}if(i=r(e,t).trim(),-1===i.indexOf("|"))return!1;if(u=i.replace(/^\||\|$/g,"").split("|"),h.length!==u.length)return!1;if(s)return!0;for(e.tokens.push({type:"table_open",lines:d=[t,0],level:e.level++}),e.tokens.push({type:"thead_open",lines:[t,t+1],level:e.level++}),e.tokens.push({type:"tr_open",lines:[t,t+1],level:e.level++}),a=0;a<u.length;a++)e.tokens.push({type:"th_open",align:h[a],lines:[t,t+1],level:e.level++}),e.tokens.push({type:"inline",content:u[a].trim(),lines:[t,t+1],level:e.level,children:[]}),e.tokens.push({type:"th_close",level:--e.level});for(e.tokens.push({type:"tr_close",level:--e.level}),e.tokens.push({type:"thead_close",level:--e.level}),e.tokens.push({type:"tbody_open",lines:g=[t+2,0],level:e.level++}),c=t+2;n>c&&!(e.tShift[c]<e.blkIndent)&&(i=r(e,c).trim(),-1!==i.indexOf("|"));c++){for(u=i.replace(/^\||\|$/g,"").split("|"),e.tokens.push({type:"tr_open",level:e.level++}),a=0;a<u.length;a++)e.tokens.push({type:"td_open",align:h[a],level:e.level++}),p=u[a].substring(124===u[a].charCodeAt(0)?1:0,124===u[a].charCodeAt(u[a].length-1)?u[a].length-1:u[a].length).trim(),e.tokens.push({type:"inline",content:p,level:e.level,children:[]}),e.tokens.push({type:"td_close",level:--e.level});e.tokens.push({type:"tr_close",level:--e.level})}return e.tokens.push({type:"tbody_close",level:--e.level}),e.tokens.push({type:"table_close",level:--e.level}),d[1]=g[1]=c,e.line=c,!0}},{}],34:[function(e,t){"use strict";function r(e,t,r,o){var i,l,a,c,u,p;if(42!==e.charCodeAt(0))return-1;if(91!==e.charCodeAt(1))return-1;if(-1===e.indexOf("]:"))return-1;if(i=new n(e,t,r,o,[]),l=s(i,1),0>l||58!==e.charCodeAt(l+1))return-1;for(c=i.posMax,a=l+2;c>a&&10!==i.src.charCodeAt(a);a++);return u=e.slice(2,l),p=e.slice(l+2,a).trim(),0===p.length?-1:(o.abbreviations||(o.abbreviations={}),"undefined"==typeof o.abbreviations[":"+u]&&(o.abbreviations[":"+u]=p),a)}var n=e("../rules_inline/state_inline"),s=e("../helpers/parse_link_label");t.exports=function(e){var t,n,s,o,i=e.tokens;if(!e.inlineMode)for(t=1,n=i.length-1;n>t;t++)if("paragraph_open"===i[t-1].type&&"inline"===i[t].type&&"paragraph_close"===i[t+1].type){for(s=i[t].content;s.length&&(o=r(s,e.inline,e.options,e.env),!(0>o));)s=s.slice(o).trim();i[t].content=s,s.length||(i[t-1].tight=!0,i[t+1].tight=!0)}}},{"../helpers/parse_link_label":12,"../rules_inline/state_inline":56}],35:[function(e,t){"use strict";function r(e){return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1")}var n=" \n()[]'\".,!?-";t.exports=function(e){var t,s,o,i,l,a,c,u,p,h,f,d,g=e.tokens;if(e.env.abbreviations)for(e.env.abbrRegExp||(d="(^|["+n.split("").map(r).join("")+"])("+Object.keys(e.env.abbreviations).map(function(e){return e.substr(1)}).sort(function(e,t){return t.length-e.length}).map(r).join("|")+")($|["+n.split("").map(r).join("")+"])",e.env.abbrRegExp=new RegExp(d,"g")),h=e.env.abbrRegExp,s=0,o=g.length;o>s;s++)if("inline"===g[s].type)for(i=g[s].children,t=i.length-1;t>=0;t--)if(l=i[t],"text"===l.type){for(u=0,a=l.content,h.lastIndex=0,p=l.level,c=[];f=h.exec(a);)h.lastIndex>u&&c.push({type:"text",content:a.slice(u,f.index+f[1].length),level:p}),c.push({type:"abbr_open",title:e.env.abbreviations[":"+f[2]],level:p++}),c.push({type:"text",content:f[2],level:p}),c.push({type:"abbr_close",level:--p}),u=h.lastIndex-f[3].length;c.length&&(u<a.length&&c.push({type:"text",content:a.slice(u),level:p}),g[s].children=i=[].concat(i.slice(0,t),c,i.slice(t+1)))}}},{}],36:[function(e,t){"use strict";t.exports=function(e){e.inlineMode?e.tokens.push({type:"inline",content:e.src.replace(/\n/g," ").trim(),level:0,lines:[0,1],children:[]}):e.block.parse(e.src,e.options,e.env,e.tokens)}},{}],37:[function(e,t){"use strict";t.exports=function(e){var t,r,n,s,o,i,l,a,c,u=0,p=!1,h={};if(e.env.footnotes&&(e.tokens=e.tokens.filter(function(e){return"footnote_reference_open"===e.type?(p=!0,a=[],c=e.label,!1):"footnote_reference_close"===e.type?(p=!1,h[":"+c]=a,!1):(p&&a.push(e),!p)}),e.env.footnotes.list)){for(i=e.env.footnotes.list,e.tokens.push({type:"footnote_block_open",level:u++}),t=0,r=i.length;r>t;t++){for(e.tokens.push({type:"footnote_open",id:t,level:u++}),i[t].tokens?(l=[],l.push({type:"paragraph_open",tight:!1,level:u++}),l.push({type:"inline",content:"",level:u,children:i[t].tokens}),l.push({type:"paragraph_close",tight:!1,level:--u})):i[t].label&&(l=h[":"+i[t].label]),e.tokens=e.tokens.concat(l),o="paragraph_close"===e.tokens[e.tokens.length-1].type?e.tokens.pop():null,s=i[t].count>0?i[t].count:1,n=0;s>n;n++)e.tokens.push({type:"footnote_anchor",id:t,subId:n,level:u});o&&e.tokens.push(o),e.tokens.push({type:"footnote_close",level:--u})}e.tokens.push({type:"footnote_block_close",level:--u})}}},{}],38:[function(e,t){"use strict";t.exports=function(e){var t,r,n,s=e.tokens;for(r=0,n=s.length;n>r;r++)t=s[r],"inline"===t.type&&e.inline.parse(t.content,e.options,e.env,t.children)}},{}],39:[function(e,t){"use strict";function r(e){return/^<a[>\s]/i.test(e)}function n(e){return/^<\/a\s*>/i.test(e)}function s(){var e=[],t=new o({stripPrefix:!1,url:!0,email:!0,twitter:!1,replaceFn:function(t,r){switch(r.getType()){case"url":e.push({text:r.matchedText,url:r.getUrl()});break;case"email":e.push({text:r.matchedText,url:"mailto:"+r.getEmail().replace(/^mailto:/i,"")})}return!1}});return{links:e,autolinker:t}}var o=e("autolinker"),i=/www|@|\:\/\//;t.exports=function(e){var t,o,l,a,c,u,p,h,f,d,g,m,b,v=e.tokens,k=null;if(e.options.linkify)for(o=0,l=v.length;l>o;o++)if("inline"===v[o].type)for(a=v[o].children,
g=0,t=a.length-1;t>=0;t--)if(c=a[t],"link_close"!==c.type){if("htmltag"===c.type&&(r(c.content)&&g>0&&g--,n(c.content)&&g++),!(g>0)&&"text"===c.type&&i.test(c.content)){if(k||(k=s(),m=k.links,b=k.autolinker),u=c.content,m.length=0,b.link(u),!m.length)continue;for(p=[],d=c.level,h=0;h<m.length;h++)e.inline.validateLink(m[h].url)&&(f=u.indexOf(m[h].text),f&&(d=d,p.push({type:"text",content:u.slice(0,f),level:d})),p.push({type:"link_open",href:m[h].url,title:"",level:d++}),p.push({type:"text",content:m[h].text,level:d}),p.push({type:"link_close",level:--d}),u=u.slice(f+m[h].text.length));u.length&&p.push({type:"text",content:u,level:d}),v[o].children=a=[].concat(a.slice(0,t),p,a.slice(t+1))}}else for(t--;a[t].level!==c.level&&"link_open"!==a[t].type;)t--}},{autolinker:60}],40:[function(e,t){"use strict";function r(e,t,r,a){var c,u,p,h,f,d,g,m,b;if(91!==e.charCodeAt(0))return-1;if(-1===e.indexOf("]:"))return-1;if(c=new n(e,t,r,a,[]),u=s(c,0),0>u||58!==e.charCodeAt(u+1))return-1;for(h=c.posMax,p=u+2;h>p&&(f=c.src.charCodeAt(p),32===f||10===f);p++);if(!o(c,p))return-1;for(g=c.linkContent,p=c.pos,d=p,p+=1;h>p&&(f=c.src.charCodeAt(p),32===f||10===f);p++);for(h>p&&d!==p&&i(c,p)?(m=c.linkContent,p=c.pos):(m="",p=d);h>p&&32===c.src.charCodeAt(p);)p++;return h>p&&10!==c.src.charCodeAt(p)?-1:(b=l(e.slice(1,u)),"undefined"==typeof a.references[b]&&(a.references[b]={title:m,href:g}),p)}var n=e("../rules_inline/state_inline"),s=e("../helpers/parse_link_label"),o=e("../helpers/parse_link_destination"),i=e("../helpers/parse_link_title"),l=e("../helpers/normalize_reference");t.exports=function(e){var t,n,s,o,i=e.tokens;if(e.env.references=e.env.references||{},!e.inlineMode)for(t=1,n=i.length-1;n>t;t++)if("inline"===i[t].type&&"paragraph_open"===i[t-1].type&&"paragraph_close"===i[t+1].type){for(s=i[t].content;s.length&&(o=r(s,e.inline,e.options,e.env),!(0>o));)s=s.slice(o).trim();i[t].content=s,s.length||(i[t-1].tight=!0,i[t+1].tight=!0)}}},{"../helpers/normalize_reference":10,"../helpers/parse_link_destination":11,"../helpers/parse_link_label":12,"../helpers/parse_link_title":13,"../rules_inline/state_inline":56}],41:[function(e,t){"use strict";function r(e){return e.indexOf("(")<0?e:e.replace(s,function(e,t){return o[t.toLowerCase()]})}var n=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,s=/\((c|tm|r|p)\)/gi,o={c:"©",r:"®",p:"§",tm:"™"};t.exports=function(e){var t,s,o,i,l;if(e.options.typographer)for(l=e.tokens.length-1;l>=0;l--)if("inline"===e.tokens[l].type)for(i=e.tokens[l].children,t=i.length-1;t>=0;t--)s=i[t],"text"===s.type&&(o=s.content,o=r(o),n.test(o)&&(o=o.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---([^-]|$)/gm,"$1—$2").replace(/(^|\s)--(\s|$)/gm,"$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm,"$1–$2")),s.content=o)}},{}],42:[function(e,t){"use strict";function r(e,t){return 0>t||t>=e.length?!1:!i.test(e[t])}function n(e,t,r){return e.substr(0,t)+r+e.substr(t+1)}var s=/['"]/,o=/['"]/g,i=/[-\s()\[\]]/,l="’";t.exports=function(e){var t,i,a,c,u,p,h,f,d,g,m,b,v,k,_,y,x;if(e.options.typographer)for(x=[],_=e.tokens.length-1;_>=0;_--)if("inline"===e.tokens[_].type)for(y=e.tokens[_].children,x.length=0,t=0;t<y.length;t++)if(i=y[t],"text"===i.type&&!s.test(i.text)){for(h=y[t].level,v=x.length-1;v>=0&&!(x[v].level<=h);v--);x.length=v+1,a=i.content,u=0,p=a.length;e:for(;p>u&&(o.lastIndex=u,c=o.exec(a));)if(f=!r(a,c.index-1),u=c.index+1,k="'"===c[0],d=!r(a,u),d||f){if(m=!d,b=!f)for(v=x.length-1;v>=0&&(g=x[v],!(x[v].level<h));v--)if(g.single===k&&x[v].level===h){g=x[v],k?(y[g.token].content=n(y[g.token].content,g.pos,e.options.quotes[2]),i.content=n(i.content,c.index,e.options.quotes[3])):(y[g.token].content=n(y[g.token].content,g.pos,e.options.quotes[0]),i.content=n(i.content,c.index,e.options.quotes[1])),x.length=v;continue e}m?x.push({token:t,pos:c.index,single:k,level:h}):b&&k&&(i.content=n(i.content,c.index,l))}else k&&(i.content=n(i.content,c.index,l))}}},{}],43:[function(e,t){"use strict";var r=e("../common/url_schemas"),n=e("../helpers/normalize_link"),s=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,o=/^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;t.exports=function(e,t){var i,l,a,c,u,p=e.pos;return 60!==e.src.charCodeAt(p)?!1:(i=e.src.slice(p),i.indexOf(">")<0?!1:(l=i.match(o))?r.indexOf(l[1].toLowerCase())<0?!1:(c=l[0].slice(1,-1),u=n(c),e.parser.validateLink(c)?(t||(e.push({type:"link_open",href:u,level:e.level}),e.push({type:"text",content:c,level:e.level+1}),e.push({type:"link_close",level:e.level})),e.pos+=l[0].length,!0):!1):(a=i.match(s),a?(c=a[0].slice(1,-1),u=n("mailto:"+c),e.parser.validateLink(u)?(t||(e.push({type:"link_open",href:u,level:e.level}),e.push({type:"text",content:c,level:e.level+1}),e.push({type:"link_close",level:e.level})),e.pos+=a[0].length,!0):!1):!1))}},{"../common/url_schemas":4,"../helpers/normalize_link":9}],44:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s,o,i,l=e.pos,a=e.src.charCodeAt(l);if(96!==a)return!1;for(r=l,l++,n=e.posMax;n>l&&96===e.src.charCodeAt(l);)l++;for(s=e.src.slice(r,l),o=i=l;-1!==(o=e.src.indexOf("`",i));){for(i=o+1;n>i&&96===e.src.charCodeAt(i);)i++;if(i-o===s.length)return t||e.push({type:"code",content:e.src.slice(l,o).replace(/[ \n]+/g," ").trim(),block:!1,level:e.level}),e.pos=i,!0}return t||(e.pending+=s),e.pos+=s.length,!0}},{}],45:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s,o,i,l=e.posMax,a=e.pos;if(126!==e.src.charCodeAt(a))return!1;if(t)return!1;if(a+4>=l)return!1;if(126!==e.src.charCodeAt(a+1))return!1;if(e.level>=e.options.maxNesting)return!1;if(o=a>0?e.src.charCodeAt(a-1):-1,i=e.src.charCodeAt(a+2),126===o)return!1;if(126===i)return!1;if(32===i||10===i)return!1;for(n=a+2;l>n&&126===e.src.charCodeAt(n);)n++;if(n>a+3)return e.pos+=n-a,t||(e.pending+=e.src.slice(a,n)),!0;for(e.pos=a+2,s=1;e.pos+1<l;){if(126===e.src.charCodeAt(e.pos)&&126===e.src.charCodeAt(e.pos+1)&&(o=e.src.charCodeAt(e.pos-1),i=e.pos+2<l?e.src.charCodeAt(e.pos+2):-1,126!==i&&126!==o&&(32!==o&&10!==o?s--:32!==i&&10!==i&&s++,0>=s))){r=!0;break}e.parser.skipToken(e)}return r?(e.posMax=e.pos,e.pos=a+2,t||(e.push({type:"del_open",level:e.level++}),e.parser.tokenize(e),e.push({type:"del_close",level:--e.level})),e.pos=e.posMax+2,e.posMax=l,!0):(e.pos=a,!1)}},{}],46:[function(e,t){"use strict";function r(e){return e>=48&&57>=e||e>=65&&90>=e||e>=97&&122>=e}function n(e,t){var n,s,o,i=t,l=!0,a=!0,c=e.posMax,u=e.src.charCodeAt(t);for(n=t>0?e.src.charCodeAt(t-1):-1;c>i&&e.src.charCodeAt(i)===u;)i++;return i>=c&&(l=!1),o=i-t,o>=4?l=a=!1:(s=c>i?e.src.charCodeAt(i):-1,(32===s||10===s)&&(l=!1),(32===n||10===n)&&(a=!1),95===u&&(r(n)&&(l=!1),r(s)&&(a=!1))),{can_open:l,can_close:a,delims:o}}t.exports=function(e,t){var r,s,o,i,l,a,c,u=e.posMax,p=e.pos,h=e.src.charCodeAt(p);if(95!==h&&42!==h)return!1;if(t)return!1;if(c=n(e,p),r=c.delims,!c.can_open)return e.pos+=r,t||(e.pending+=e.src.slice(p,e.pos)),!0;if(e.level>=e.options.maxNesting)return!1;for(e.pos=p+r,a=[r];e.pos<u;)if(e.src.charCodeAt(e.pos)!==h)e.parser.skipToken(e);else{if(c=n(e,e.pos),s=c.delims,c.can_close){for(i=a.pop(),l=s;i!==l;){if(i>l){a.push(i-l);break}if(l-=i,0===a.length)break;e.pos+=i,i=a.pop()}if(0===a.length){r=i,o=!0;break}e.pos+=s;continue}c.can_open&&a.push(s),e.pos+=s}return o?(e.posMax=e.pos,e.pos=p+r,t||((2===r||3===r)&&e.push({type:"strong_open",level:e.level++}),(1===r||3===r)&&e.push({type:"em_open",level:e.level++}),e.parser.tokenize(e),(1===r||3===r)&&e.push({type:"em_close",level:--e.level}),(2===r||3===r)&&e.push({type:"strong_close",level:--e.level})),e.pos=e.posMax+r,e.posMax=u,!0):(e.pos=p,!1)}},{}],47:[function(e,t){"use strict";var r=e("../common/entities"),n=e("../common/utils").has,s=e("../common/utils").isValidEntityCode,o=e("../common/utils").fromCodePoint,i=/^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,l=/^&([a-z][a-z0-9]{1,31});/i;t.exports=function(e,t){var a,c,u,p=e.pos,h=e.posMax;if(38!==e.src.charCodeAt(p))return!1;if(h>p+1)if(a=e.src.charCodeAt(p+1),35===a){if(u=e.src.slice(p).match(i))return t||(c="x"===u[1][0].toLowerCase()?parseInt(u[1].slice(1),16):parseInt(u[1],10),e.pending+=o(s(c)?c:65533)),e.pos+=u[0].length,!0}else if(u=e.src.slice(p).match(l),u&&n(r,u[1]))return t||(e.pending+=r[u[1]]),e.pos+=u[0].length,!0;return t||(e.pending+="&"),e.pos++,!0}},{"../common/entities":1,"../common/utils":5}],48:[function(e,t){"use strict";for(var r=[],n=0;256>n;n++)r.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){r[e.charCodeAt(0)]=1}),t.exports=function(e,t){var n,s=e.pos,o=e.posMax;if(92!==e.src.charCodeAt(s))return!1;if(s++,o>s){if(n=e.src.charCodeAt(s),256>n&&0!==r[n])return t||(e.pending+=e.src[s]),e.pos+=2,!0;if(10===n){for(t||e.push({type:"hardbreak",level:e.level}),s++;o>s&&32===e.src.charCodeAt(s);)s++;return e.pos=s,!0}}return t||(e.pending+="\\"),e.pos++,!0}},{}],49:[function(e,t){"use strict";var r=e("../helpers/parse_link_label");t.exports=function(e,t){var n,s,o,i,l=e.posMax,a=e.pos;return a+2>=l?!1:94!==e.src.charCodeAt(a)?!1:91!==e.src.charCodeAt(a+1)?!1:e.level>=e.options.maxNesting?!1:(n=a+2,s=r(e,a+1),0>s?!1:(t||(e.env.footnotes||(e.env.footnotes={}),e.env.footnotes.list||(e.env.footnotes.list=[]),o=e.env.footnotes.list.length,e.pos=n,e.posMax=s,e.push({type:"footnote_ref",id:o,level:e.level}),e.linkLevel++,i=e.tokens.length,e.parser.tokenize(e),e.env.footnotes.list[o]={tokens:e.tokens.splice(i)},e.linkLevel--),e.pos=s+1,e.posMax=l,!0))}},{"../helpers/parse_link_label":12}],50:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s,o,i=e.posMax,l=e.pos;if(l+3>i)return!1;if(!e.env.footnotes||!e.env.footnotes.refs)return!1;if(91!==e.src.charCodeAt(l))return!1;if(94!==e.src.charCodeAt(l+1))return!1;if(e.level>=e.options.maxNesting)return!1;for(n=l+2;i>n;n++){if(32===e.src.charCodeAt(n))return!1;if(10===e.src.charCodeAt(n))return!1;if(93===e.src.charCodeAt(n))break}return n===l+2?!1:n>=i?!1:(n++,r=e.src.slice(l+2,n-1),"undefined"==typeof e.env.footnotes.refs[":"+r]?!1:(t||(e.env.footnotes.list||(e.env.footnotes.list=[]),e.env.footnotes.refs[":"+r]<0?(s=e.env.footnotes.list.length,e.env.footnotes.list[s]={label:r,count:0},e.env.footnotes.refs[":"+r]=s):s=e.env.footnotes.refs[":"+r],o=e.env.footnotes.list[s].count,e.env.footnotes.list[s].count++,e.push({type:"footnote_ref",id:s,subId:o,level:e.level})),e.pos=n,e.posMax=i,!0))}},{}],51:[function(e,t){"use strict";function r(e){var t=32|e;return t>=97&&122>=t}var n=e("../common/html_re").HTML_TAG_RE;t.exports=function(e,t){var s,o,i,l=e.pos;return e.options.html?(i=e.posMax,60!==e.src.charCodeAt(l)||l+2>=i?!1:(s=e.src.charCodeAt(l+1),(33===s||63===s||47===s||r(s))&&(o=e.src.slice(l).match(n))?(t||e.push({type:"htmltag",content:e.src.slice(l,l+o[0].length),level:e.level}),e.pos+=o[0].length,!0):!1)):!1}},{"../common/html_re":3}],52:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s,o,i,l=e.posMax,a=e.pos;if(43!==e.src.charCodeAt(a))return!1;if(t)return!1;if(a+4>=l)return!1;if(43!==e.src.charCodeAt(a+1))return!1;if(e.level>=e.options.maxNesting)return!1;if(o=a>0?e.src.charCodeAt(a-1):-1,i=e.src.charCodeAt(a+2),43===o)return!1;if(43===i)return!1;if(32===i||10===i)return!1;for(n=a+2;l>n&&43===e.src.charCodeAt(n);)n++;if(n!==a+2)return e.pos+=n-a,t||(e.pending+=e.src.slice(a,n)),!0;for(e.pos=a+2,s=1;e.pos+1<l;){if(43===e.src.charCodeAt(e.pos)&&43===e.src.charCodeAt(e.pos+1)&&(o=e.src.charCodeAt(e.pos-1),i=e.pos+2<l?e.src.charCodeAt(e.pos+2):-1,43!==i&&43!==o&&(32!==o&&10!==o?s--:32!==i&&10!==i&&s++,0>=s))){r=!0;break}e.parser.skipToken(e)}return r?(e.posMax=e.pos,e.pos=a+2,t||(e.push({type:"ins_open",level:e.level++}),e.parser.tokenize(e),e.push({type:"ins_close",level:--e.level})),e.pos=e.posMax+2,e.posMax=l,!0):(e.pos=a,!1)}},{}],53:[function(e,t){"use strict";var r=e("../helpers/parse_link_label"),n=e("../helpers/parse_link_destination"),s=e("../helpers/parse_link_title"),o=e("../helpers/normalize_reference");t.exports=function(e,t){var i,l,a,c,u,p,h,f,d=!1,g=e.pos,m=e.posMax,b=e.pos,v=e.src.charCodeAt(b);if(33===v&&(d=!0,v=e.src.charCodeAt(++b)),91!==v)return!1;if(e.level>=e.options.maxNesting)return!1;if(i=b+1,l=r(e,b),0>l)return!1;if(p=l+1,m>p&&40===e.src.charCodeAt(p)){for(p++;m>p&&(f=e.src.charCodeAt(p),32===f||10===f);p++);if(p>=m)return!1;for(b=p,n(e,p)?(c=e.linkContent,p=e.pos):c="",b=p;m>p&&(f=e.src.charCodeAt(p),32===f||10===f);p++);if(m>p&&b!==p&&s(e,p))for(u=e.linkContent,p=e.pos;m>p&&(f=e.src.charCodeAt(p),32===f||10===f);p++);else u="";if(p>=m||41!==e.src.charCodeAt(p))return e.pos=g,!1;p++}else{if(e.linkLevel>0)return!1;for(;m>p&&(f=e.src.charCodeAt(p),32===f||10===f);p++);if(m>p&&91===e.src.charCodeAt(p)&&(b=p+1,p=r(e,p),p>=0?a=e.src.slice(b,p++):p=b-1),a||("undefined"==typeof a&&(p=l+1),a=e.src.slice(i,l)),h=e.env.references[o(a)],!h)return e.pos=g,!1;c=h.href,u=h.title}return t||(e.pos=i,e.posMax=l,d?e.push({type:"image",src:c,title:u,alt:e.src.substr(i,l-i),level:e.level}):(e.push({type:"link_open",href:c,title:u,level:e.level++}),e.linkLevel++,e.parser.tokenize(e),e.linkLevel--,e.push({type:"link_close",level:--e.level}))),e.pos=p,e.posMax=m,!0}},{"../helpers/normalize_reference":10,"../helpers/parse_link_destination":11,"../helpers/parse_link_label":12,"../helpers/parse_link_title":13}],54:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s,o,i,l=e.posMax,a=e.pos;if(61!==e.src.charCodeAt(a))return!1;if(t)return!1;if(a+4>=l)return!1;if(61!==e.src.charCodeAt(a+1))return!1;if(e.level>=e.options.maxNesting)return!1;if(o=a>0?e.src.charCodeAt(a-1):-1,i=e.src.charCodeAt(a+2),61===o)return!1;if(61===i)return!1;if(32===i||10===i)return!1;for(n=a+2;l>n&&61===e.src.charCodeAt(n);)n++;if(n!==a+2)return e.pos+=n-a,t||(e.pending+=e.src.slice(a,n)),!0;for(e.pos=a+2,s=1;e.pos+1<l;){if(61===e.src.charCodeAt(e.pos)&&61===e.src.charCodeAt(e.pos+1)&&(o=e.src.charCodeAt(e.pos-1),i=e.pos+2<l?e.src.charCodeAt(e.pos+2):-1,61!==i&&61!==o&&(32!==o&&10!==o?s--:32!==i&&10!==i&&s++,0>=s))){r=!0;break}e.parser.skipToken(e)}return r?(e.posMax=e.pos,e.pos=a+2,t||(e.push({type:"mark_open",level:e.level++}),e.parser.tokenize(e),e.push({type:"mark_close",level:--e.level})),e.pos=e.posMax+2,e.posMax=l,!0):(e.pos=a,!1)}},{}],55:[function(e,t){"use strict";t.exports=function(e,t){var r,n,s=e.pos;if(10!==e.src.charCodeAt(s))return!1;if(r=e.pending.length-1,n=e.posMax,!t)if(r>=0&&32===e.pending.charCodeAt(r))if(r>=1&&32===e.pending.charCodeAt(r-1)){for(var o=r-2;o>=0;o--)if(32!==e.pending.charCodeAt(o)){e.pending=e.pending.substring(0,o+1);break}e.push({type:"hardbreak",level:e.level})}else e.pending=e.pending.slice(0,-1),e.push({type:"softbreak",level:e.level});else e.push({type:"softbreak",level:e.level});for(s++;n>s&&32===e.src.charCodeAt(s);)s++;return e.pos=s,!0}},{}],56:[function(e,t){"use strict";function r(e,t,r,n,s){this.src=e,this.env=n,this.options=r,this.parser=t,this.tokens=s,this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache=[],this.isInLabel=!1,this.linkLevel=0,this.linkContent="",this.labelUnmatchedScopes=0}r.prototype.pushPending=function(){this.tokens.push({type:"text",content:this.pending,level:this.pendingLevel}),this.pending=""},r.prototype.push=function(e){this.pending&&this.pushPending(),this.tokens.push(e),this.pendingLevel=this.level},r.prototype.cacheSet=function(e,t){for(var r=this.cache.length;e>=r;r++)this.cache.push(0);this.cache[e]=t},r.prototype.cacheGet=function(e){return e<this.cache.length?this.cache[e]:0},t.exports=r},{}],57:[function(e,t){"use strict";var r=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;t.exports=function(e,t){var n,s,o=e.posMax,i=e.pos;if(126!==e.src.charCodeAt(i))return!1;if(t)return!1;if(i+2>=o)return!1;if(e.level>=e.options.maxNesting)return!1;for(e.pos=i+1;e.pos<o;){if(126===e.src.charCodeAt(e.pos)){n=!0;break}e.parser.skipToken(e)}return n&&i+1!==e.pos?(s=e.src.slice(i+1,e.pos),s.match(/(^|[^\\])(\\\\)*\s/)?(e.pos=i,!1):(e.posMax=e.pos,e.pos=i+1,t||e.push({type:"sub",level:e.level,content:s.replace(r,"$1")}),e.pos=e.posMax+1,e.posMax=o,!0)):(e.pos=i,!1)}},{}],58:[function(e,t){"use strict";var r=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;t.exports=function(e,t){var n,s,o=e.posMax,i=e.pos;if(94!==e.src.charCodeAt(i))return!1;if(t)return!1;if(i+2>=o)return!1;if(e.level>=e.options.maxNesting)return!1;for(e.pos=i+1;e.pos<o;){if(94===e.src.charCodeAt(e.pos)){n=!0;break}e.parser.skipToken(e)}return n&&i+1!==e.pos?(s=e.src.slice(i+1,e.pos),s.match(/(^|[^\\])(\\\\)*\s/)?(e.pos=i,!1):(e.posMax=e.pos,e.pos=i+1,t||e.push({type:"sup",level:e.level,content:s.replace(r,"$1")}),e.pos=e.posMax+1,e.posMax=o,!0)):(e.pos=i,!1)}},{}],59:[function(e,t){"use strict";function r(e){switch(e){case 10:case 92:case 96:case 42:case 95:case 94:case 91:case 93:case 33:case 38:case 60:case 62:case 123:case 125:case 36:case 37:case 64:case 126:case 43:case 61:case 58:return!0;default:return!1}}t.exports=function(e,t){for(var n=e.pos;n<e.posMax&&!r(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}},{}],60:[function(t,r,n){!function(t,s){"function"==typeof e&&e.amd?e([],function(){return t.Autolinker=s()}):"object"==typeof n?r.exports=s():t.Autolinker=s()}(this,function(){var e=function(t){e.Util.assign(this,t)};return e.prototype={constructor:e,urls:!0,email:!0,twitter:!0,newWindow:!0,stripPrefix:!0,truncate:void 0,className:"",htmlParser:void 0,matchParser:void 0,tagBuilder:void 0,link:function(e){for(var t=this.getHtmlParser(),r=t.parse(e),n=0,s=[],o=0,i=r.length;i>o;o++){var l=r[o],a=l.getType(),c=l.getText();if("element"===a)"a"===l.getTagName()&&(l.isClosing()?n=Math.max(n-1,0):n++),s.push(c);else if("entity"===a)s.push(c);else if(0===n){var u=this.linkifyStr(c);s.push(u)}else s.push(c)}return s.join("")},linkifyStr:function(e){return this.getMatchParser().replace(e,this.createMatchReturnVal,this)},createMatchReturnVal:function(t){var r;if(this.replaceFn&&(r=this.replaceFn.call(this,this,t)),"string"==typeof r)return r;if(r===!1)return t.getMatchedText();if(r instanceof e.HtmlTag)return r.toString();var n=this.getTagBuilder(),s=n.build(t);return s.toString()},getHtmlParser:function(){var t=this.htmlParser;return t||(t=this.htmlParser=new e.htmlParser.HtmlParser),t},getMatchParser:function(){var t=this.matchParser;return t||(t=this.matchParser=new e.matchParser.MatchParser({urls:this.urls,email:this.email,twitter:this.twitter,stripPrefix:this.stripPrefix})),t},getTagBuilder:function(){var t=this.tagBuilder;return t||(t=this.tagBuilder=new e.AnchorTagBuilder({newWindow:this.newWindow,truncate:this.truncate,className:this.className})),t}},e.link=function(t,r){var n=new e(r);return n.link(t)},e.match={},e.htmlParser={},e.matchParser={},e.Util={abstractMethod:function(){throw"abstract"},assign:function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},extend:function(t,r){var n=t.prototype,s=function(){};s.prototype=n;var o;o=r.hasOwnProperty("constructor")?r.constructor:function(){n.constructor.apply(this,arguments)};var i=o.prototype=new s;return i.constructor=o,i.superclass=n,delete r.constructor,e.Util.assign(i,r),o},ellipsis:function(e,t,r){return e.length>t&&(r=null==r?"..":r,e=e.substring(0,t-r.length)+r),e},indexOf:function(e,t){if(Array.prototype.indexOf)return e.indexOf(t);for(var r=0,n=e.length;n>r;r++)if(e[r]===t)return r;return-1},splitAndCapture:function(e,t){if(!t.global)throw new Error("`splitRegex` must have the 'g' flag set");for(var r,n=[],s=0;r=t.exec(e);)n.push(e.substring(s,r.index)),n.push(r[0]),s=r.index+r[0].length;return n.push(e.substring(s)),n}},e.HtmlTag=e.Util.extend(Object,{whitespaceRegex:/\s+/,constructor:function(t){e.Util.assign(this,t),this.innerHtml=this.innerHtml||this.innerHTML},setTagName:function(e){return this.tagName=e,this},getTagName:function(){return this.tagName||""},setAttr:function(e,t){var r=this.getAttrs();return r[e]=t,this},getAttr:function(e){return this.getAttrs()[e]},setAttrs:function(t){var r=this.getAttrs();return e.Util.assign(r,t),this},getAttrs:function(){return this.attrs||(this.attrs={})},setClass:function(e){return this.setAttr("class",e)},addClass:function(t){for(var r,n=this.getClass(),s=this.whitespaceRegex,o=e.Util.indexOf,i=n?n.split(s):[],l=t.split(s);r=l.shift();)-1===o(i,r)&&i.push(r);return this.getAttrs()["class"]=i.join(" "),this},removeClass:function(t){for(var r,n=this.getClass(),s=this.whitespaceRegex,o=e.Util.indexOf,i=n?n.split(s):[],l=t.split(s);i.length&&(r=l.shift());){var a=o(i,r);-1!==a&&i.splice(a,1)}return this.getAttrs()["class"]=i.join(" "),this},getClass:function(){return this.getAttrs()["class"]||""},hasClass:function(e){return-1!==(" "+this.getClass()+" ").indexOf(" "+e+" ")},setInnerHtml:function(e){return this.innerHtml=e,this},getInnerHtml:function(){return this.innerHtml||""},toString:function(){var e=this.getTagName(),t=this.buildAttrsStr();return t=t?" "+t:"",["<",e,t,">",this.getInnerHtml(),"</",e,">"].join("")},buildAttrsStr:function(){if(!this.attrs)return"";var e=this.getAttrs(),t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(r+'="'+e[r]+'"');return t.join(" ")}}),e.AnchorTagBuilder=e.Util.extend(Object,{constructor:function(t){e.Util.assign(this,t)},build:function(t){var r=new e.HtmlTag({tagName:"a",attrs:this.createAttrs(t.getType(),t.getAnchorHref()),innerHtml:this.processAnchorText(t.getAnchorText())});return r},createAttrs:function(e,t){var r={href:t},n=this.createCssClass(e);return n&&(r["class"]=n),this.newWindow&&(r.target="_blank"),r},createCssClass:function(e){var t=this.className;return t?t+" "+t+"-"+e:""},processAnchorText:function(e){return e=this.doTruncate(e)},doTruncate:function(t){return e.Util.ellipsis(t,this.truncate||Number.POSITIVE_INFINITY)}}),e.htmlParser.HtmlParser=e.Util.extend(Object,{htmlRegex:function(){var e=/[0-9a-zA-Z][0-9a-zA-Z:]*/,t=/[^\s\0"'>\/=\x01-\x1F\x7F]+/,r=/(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/,n=t.source+"(?:\\s*=\\s*"+r.source+")?";return new RegExp(["(?:","<(!DOCTYPE)","(?:","\\s+","(?:",n,"|",r.source+")",")*",">",")","|","(?:","<(/)?","("+e.source+")","(?:","\\s+",n,")*","\\s*/?",">",")"].join(""),"gi")}(),htmlCharacterEntitiesRegex:/(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,parse:function(e){for(var t,r,n=this.htmlRegex,s=0,o=[];null!==(t=n.exec(e));){var i=t[0],l=t[1]||t[3],a=!!t[2],c=e.substring(s,t.index);c&&(r=this.parseTextAndEntityNodes(c),o.push.apply(o,r)),o.push(this.createElementNode(i,l,a)),s=t.index+i.length}if(s<e.length){var u=e.substring(s);u&&(r=this.parseTextAndEntityNodes(u),o.push.apply(o,r))}return o},parseTextAndEntityNodes:function(t){for(var r=[],n=e.Util.splitAndCapture(t,this.htmlCharacterEntitiesRegex),s=0,o=n.length;o>s;s+=2){var i=n[s],l=n[s+1];i&&r.push(this.createTextNode(i)),l&&r.push(this.createEntityNode(l))}return r},createElementNode:function(t,r,n){return new e.htmlParser.ElementNode({text:t,tagName:r.toLowerCase(),closing:n})},createEntityNode:function(t){return new e.htmlParser.EntityNode({text:t})},createTextNode:function(t){return new e.htmlParser.TextNode({text:t})}}),e.htmlParser.HtmlNode=e.Util.extend(Object,{text:"",constructor:function(t){e.Util.assign(this,t)},getType:e.Util.abstractMethod,getText:function(){return this.text}}),e.htmlParser.ElementNode=e.Util.extend(e.htmlParser.HtmlNode,{tagName:"",closing:!1,getType:function(){return"element"},getTagName:function(){return this.tagName},isClosing:function(){return this.closing}}),e.htmlParser.EntityNode=e.Util.extend(e.htmlParser.HtmlNode,{getType:function(){return"entity"}}),e.htmlParser.TextNode=e.Util.extend(e.htmlParser.HtmlNode,{getType:function(){return"text"}}),e.matchParser.MatchParser=e.Util.extend(Object,{urls:!0,email:!0,twitter:!0,stripPrefix:!0,matcherRegex:function(){var e=/(^|[^\w])@(\w{1,15})/,t=/(?:[\-;:&=\+\$,\w\.]+@)/,r=/(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,n=/(?:www\.)/,s=/[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,o=/\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,i=/[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;return new RegExp(["(",e.source,")","|","(",t.source,s.source,o.source,")","|","(","(?:","(",r.source,s.source,")","|","(?:","(.?//)?",n.source,s.source,")","|","(?:","(.?//)?",s.source,o.source,")",")","(?:"+i.source+")?",")"].join(""),"gi")}(),charBeforeProtocolRelMatchRegex:/^(.)?\/\//,constructor:function(t){e.Util.assign(this,t),this.matchValidator=new e.MatchValidator},replace:function(e,t,r){var n=this;return e.replace(this.matcherRegex,function(e,s,o,i,l,a,c,u,p){var h=n.processCandidateMatch(e,s,o,i,l,a,c,u,p);if(h){var f=t.call(r,h.match);return h.prefixStr+f+h.suffixStr}return e})},processCandidateMatch:function(t,r,n,s,o,i,l,a,c){var u,p=a||c,h="",f="";if(r&&!this.twitter||o&&!this.email||i&&!this.urls||!this.matchValidator.isValidMatch(i,l,p))return null;if(this.matchHasUnbalancedClosingParen(t)&&(t=t.substr(0,t.length-1),f=")"),o)u=new e.match.Email({matchedText:t,email:o});else if(r)n&&(h=n,t=t.slice(1)),u=new e.match.Twitter({matchedText:t,twitterHandle:s});else{if(p){var d=p.match(this.charBeforeProtocolRelMatchRegex)[1]||"";d&&(h=d,t=t.slice(1))}u=new e.match.Url({matchedText:t,url:t,protocolUrlMatch:!!l,protocolRelativeMatch:!!p,stripPrefix:this.stripPrefix})}return{prefixStr:h,suffixStr:f,match:u}},matchHasUnbalancedClosingParen:function(e){var t=e.charAt(e.length-1);if(")"===t){var r=e.match(/\(/g),n=e.match(/\)/g),s=r&&r.length||0,o=n&&n.length||0;if(o>s)return!0}return!1}}),e.MatchValidator=e.Util.extend(Object,{invalidProtocolRelMatchRegex:/^[\w]\/\//,hasFullProtocolRegex:/^[A-Za-z][-.+A-Za-z0-9]+:\/\//,uriSchemeRegex:/^[A-Za-z][-.+A-Za-z0-9]+:/,hasWordCharAfterProtocolRegex:/:[^\s]*?[A-Za-z]/,isValidMatch:function(e,t,r){return t&&!this.isValidUriScheme(t)||this.urlMatchDoesNotHaveProtocolOrDot(e,t)||this.urlMatchDoesNotHaveAtLeastOneWordChar(e,t)||this.isInvalidProtocolRelativeMatch(r)?!1:!0},isValidUriScheme:function(e){var t=e.match(this.uriSchemeRegex)[0].toLowerCase();return"javascript:"!==t&&"vbscript:"!==t},urlMatchDoesNotHaveProtocolOrDot:function(e,t){return!(!e||t&&this.hasFullProtocolRegex.test(t)||-1!==e.indexOf("."))},urlMatchDoesNotHaveAtLeastOneWordChar:function(e,t){return e&&t?!this.hasWordCharAfterProtocolRegex.test(e):!1},isInvalidProtocolRelativeMatch:function(e){return!!e&&this.invalidProtocolRelMatchRegex.test(e)}}),e.match.Match=e.Util.extend(Object,{constructor:function(t){e.Util.assign(this,t)},getType:e.Util.abstractMethod,getMatchedText:function(){return this.matchedText},getAnchorHref:e.Util.abstractMethod,getAnchorText:e.Util.abstractMethod}),e.match.Email=e.Util.extend(e.match.Match,{getType:function(){return"email"},getEmail:function(){return this.email},getAnchorHref:function(){return"mailto:"+this.email},getAnchorText:function(){return this.email}}),e.match.Twitter=e.Util.extend(e.match.Match,{getType:function(){return"twitter"},getTwitterHandle:function(){return this.twitterHandle},getAnchorHref:function(){return"https://twitter.com/"+this.twitterHandle},getAnchorText:function(){return"@"+this.twitterHandle}}),e.match.Url=e.Util.extend(e.match.Match,{urlPrefixRegex:/^(https?:\/\/)?(www\.)?/i,protocolRelativeRegex:/^\/\//,protocolPrepended:!1,getType:function(){return"url"},getUrl:function(){var e=this.url;return this.protocolRelativeMatch||this.protocolUrlMatch||this.protocolPrepended||(e=this.url="http://"+e,this.protocolPrepended=!0),e},getAnchorHref:function(){var e=this.getUrl();return e.replace(/&amp;/g,"&")},getAnchorText:function(){var e=this.getUrl();return this.protocolRelativeMatch&&(e=this.stripProtocolRelativePrefix(e)),this.stripPrefix&&(e=this.stripUrlPrefix(e)),e=this.removeTrailingSlash(e)},stripUrlPrefix:function(e){return e.replace(this.urlPrefixRegex,"")},stripProtocolRelativePrefix:function(e){return e.replace(this.protocolRelativeRegex,"")},removeTrailingSlash:function(e){return"/"===e.charAt(e.length-1)&&(e=e.slice(0,-1)),e}}),e})},{}],"/":[function(e,t){"use strict";t.exports=e("./lib/")},{"./lib/":14}]},{},[])("/")});
// DOMPurify 1.0.4
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.DOMPurify=t()}(this,function(){"use strict";function e(e,t){for(var n=t.length;n--;)"string"==typeof t[n]&&(t[n]=t[n].toLowerCase()),e[t[n]]=!0;return e}function t(e){var t={},n=void 0;for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(){var x=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A(),S=function(e){return o(e)};if(S.version="1.0.4",S.removed=[],!x||!x.document||9!==x.document.nodeType)return S.isSupported=!1,S;var k=x.document,w=!1,E=!1,L=x.document,O=x.DocumentFragment,M=x.HTMLTemplateElement,N=x.Node,D=x.NodeFilter,_=x.NamedNodeMap,R=void 0===_?x.NamedNodeMap||x.MozNamedAttrMap:_,C=x.Text,F=x.Comment,z=x.DOMParser,H=x.XMLHttpRequest,I=void 0===H?x.XMLHttpRequest:H,j=x.encodeURI,U=void 0===j?x.encodeURI:j;if("function"==typeof M){var P=L.createElement("template");P.content&&P.content.ownerDocument&&(L=P.content.ownerDocument)}var W=L,q=W.implementation,G=W.createNodeIterator,B=W.getElementsByTagName,X=W.createDocumentFragment,V=k.importNode,Y={};S.isSupported=q&&void 0!==q.createHTMLDocument&&9!==L.documentMode;var K=p,$=f,J=h,Q=g,Z=v,ee=b,te=y,ne=null,oe=e({},[].concat(n(r),n(i),n(a),n(l),n(s))),re=null,ie=e({},[].concat(n(c),n(d),n(u),n(m))),ae=null,le=null,se=!0,ce=!0,de=!1,ue=!1,me=!1,pe=!1,fe=!1,he=!1,ge=!1,ye=!1,ve=!1,be=!0,Te=!0,Ae={},xe=e({},["audio","head","math","script","style","template","svg","video"]),Se=e({},["audio","video","img","source","image"]),ke=e({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),we=null,Ee=L.createElement("form"),Le=function(o){"object"!==(void 0===o?"undefined":T(o))&&(o={}),ne="ALLOWED_TAGS"in o?e({},o.ALLOWED_TAGS):oe,re="ALLOWED_ATTR"in o?e({},o.ALLOWED_ATTR):ie,ae="FORBID_TAGS"in o?e({},o.FORBID_TAGS):{},le="FORBID_ATTR"in o?e({},o.FORBID_ATTR):{},Ae="USE_PROFILES"in o&&o.USE_PROFILES,se=!1!==o.ALLOW_ARIA_ATTR,ce=!1!==o.ALLOW_DATA_ATTR,de=o.ALLOW_UNKNOWN_PROTOCOLS||!1,ue=o.SAFE_FOR_JQUERY||!1,me=o.SAFE_FOR_TEMPLATES||!1,pe=o.WHOLE_DOCUMENT||!1,ge=o.RETURN_DOM||!1,ye=o.RETURN_DOM_FRAGMENT||!1,ve=o.RETURN_DOM_IMPORT||!1,he=o.FORCE_BODY||!1,be=!1!==o.SANITIZE_DOM,Te=!1!==o.KEEP_CONTENT,te=o.ALLOWED_URI_REGEXP||te,me&&(ce=!1),ye&&(ge=!0),Ae&&(ne=e({},[].concat(n(s))),re=[],!0===Ae.html&&(e(ne,r),e(re,c)),!0===Ae.svg&&(e(ne,i),e(re,d),e(re,m)),!0===Ae.svgFilters&&(e(ne,a),e(re,d),e(re,m)),!0===Ae.mathMl&&(e(ne,l),e(re,u),e(re,m))),o.ADD_TAGS&&(ne===oe&&(ne=t(ne)),e(ne,o.ADD_TAGS)),o.ADD_ATTR&&(re===ie&&(re=t(re)),e(re,o.ADD_ATTR)),o.ADD_URI_SAFE_ATTR&&e(ke,o.ADD_URI_SAFE_ATTR),Te&&(ne["#text"]=!0),Object&&"freeze"in Object&&Object.freeze(o),we=o},Oe=function(e){S.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}},Me=function(e,t){try{S.removed.push({attribute:t.getAttributeNode(e),from:t})}catch(e){S.removed.push({attribute:null,from:t})}t.removeAttribute(e)},Ne=function(e){var t=void 0,n=void 0;if(he&&(e="<remove></remove>"+e),E){try{e=U(e)}catch(e){}var o=new I;o.responseType="document",o.open("GET","data:text/html;charset=utf-8,"+e,!1),o.send(null),t=o.response}if(w)try{t=(new z).parseFromString(e,"text/html")}catch(e){}return t&&t.documentElement||((n=(t=q.createHTMLDocument("")).body).parentNode.removeChild(n.parentNode.firstElementChild),n.outerHTML=e),B.call(t,pe?"html":"body")[0]};S.isSupported&&function(){var e=Ne('<svg><g onload="this.parentNode.remove()"></g></svg>');e.querySelector("svg")||(E=!0);try{(e=Ne('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">')).querySelector("svg img")&&(w=!0)}catch(e){}}();var De=function(e){return G.call(e.ownerDocument||e,e,D.SHOW_ELEMENT|D.SHOW_COMMENT|D.SHOW_TEXT,function(){return D.FILTER_ACCEPT},!1)},_e=function(e){return!(e instanceof C||e instanceof F)&&!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof R&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)},Re=function(e){return"object"===(void 0===N?"undefined":T(N))?e instanceof N:e&&"object"===(void 0===e?"undefined":T(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Ce=function(e,t,n){Y[e]&&Y[e].forEach(function(e){e.call(S,t,n,we)})},Fe=function(e){var t=void 0;if(Ce("beforeSanitizeElements",e,null),_e(e))return Oe(e),!0;var n=e.nodeName.toLowerCase();if(Ce("uponSanitizeElement",e,{tagName:n,allowedTags:ne}),!ne[n]||ae[n]){if(Te&&!xe[n]&&"function"==typeof e.insertAdjacentHTML)try{e.insertAdjacentHTML("AfterEnd",e.innerHTML)}catch(e){}return Oe(e),!0}return!ue||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(S.removed.push({element:e.cloneNode()}),e.innerHTML=e.textContent.replace(/</g,"&lt;")),me&&3===e.nodeType&&(t=(t=(t=e.textContent).replace(K," ")).replace($," "),e.textContent!==t&&(S.removed.push({element:e.cloneNode()}),e.textContent=t)),Ce("afterSanitizeElements",e,null),!1},ze=function(e){var t=void 0,n=void 0,o=void 0,r=void 0,i=void 0,a=void 0,l=void 0;if(Ce("beforeSanitizeAttributes",e,null),a=e.attributes){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:re};for(l=a.length;l--;){if(t=a[l],n=t.name,o=t.value.trim(),r=n.toLowerCase(),s.attrName=r,s.attrValue=o,s.keepAttr=!0,Ce("uponSanitizeAttribute",e,s),o=s.attrValue,"name"===r&&"IMG"===e.nodeName&&a.id)i=a.id,a=Array.prototype.slice.apply(a),Me("id",e),Me(n,e),a.indexOf(i)>l&&e.setAttribute("id",i.value);else{if("INPUT"===e.nodeName&&"type"===r&&"file"===o&&(re[r]||!le[r]))continue;"id"===n&&e.setAttribute(n,""),Me(n,e)}if(s.keepAttr&&(!be||"id"!==r&&"name"!==r||!(o in L||o in Ee))){if(me&&(o=(o=o.replace(K," ")).replace($," ")),ce&&J.test(r));else if(se&&Q.test(r));else{if(!re[r]||le[r])continue;if(ke[r]);else if(te.test(o.replace(ee,"")));else if("src"!==r&&"xlink:href"!==r||0!==o.indexOf("data:")||!Se[e.nodeName.toLowerCase()]){if(de&&!Z.test(o.replace(ee,"")));else if(o)continue}else;}try{e.setAttribute(n,o),S.removed.pop()}catch(e){}}}Ce("afterSanitizeAttributes",e,null)}},He=function e(t){var n=void 0,o=De(t);for(Ce("beforeSanitizeShadowDOM",t,null);n=o.nextNode();)Ce("uponSanitizeShadowNode",n,null),Fe(n)||(n.content instanceof O&&e(n.content),ze(n));Ce("afterSanitizeShadowDOM",t,null)};return S.sanitize=function(e,t){var n=void 0,o=void 0,r=void 0,i=void 0,a=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Re(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");if("string"!=typeof(e=e.toString()))throw new TypeError("dirty is not a string, aborting")}if(!S.isSupported){if("object"===T(x.toStaticHTML)||"function"==typeof x.toStaticHTML){if("string"==typeof e)return x.toStaticHTML(e);if(Re(e))return x.toStaticHTML(e.outerHTML)}return e}if(fe||Le(t),S.removed=[],e instanceof N)1===(o=(n=Ne("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===o.nodeName?n=o:n.appendChild(o);else{if(!ge&&!pe&&-1===e.indexOf("<"))return e;if(!(n=Ne(e)))return ge?null:""}he&&Oe(n.firstChild);for(var l=De(n);r=l.nextNode();)3===r.nodeType&&r===i||Fe(r)||(r.content instanceof O&&He(r.content),ze(r),i=r);if(ge){if(ye)for(a=X.call(n.ownerDocument);n.firstChild;)a.appendChild(n.firstChild);else a=n;return ve&&(a=V.call(k,a,!0)),a}return pe?n.outerHTML:n.innerHTML},S.setConfig=function(e){Le(e),fe=!0},S.clearConfig=function(){we=null,fe=!1},S.addHook=function(e,t){"function"==typeof t&&(Y[e]=Y[e]||[],Y[e].push(t))},S.removeHook=function(e){Y[e]&&Y[e].pop()},S.removeHooks=function(e){Y[e]&&(Y[e]=[])},S.removeAllHooks=function(){Y={}},S}var r=["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"],i=["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"],a=["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"],l=["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmuliscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mpspace","msqrt","mystyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"],s=["#text"],c=["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"],d=["accent-height","accumulate","additivive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"],u=["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"],m=["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"],p=/\{\{[\s\S]*|[\s\S]*\}\}/gm,f=/<%[\s\S]*|[\s\S]*%>/gm,h=/^data-[\-\w.\u00B7-\uFFFF]/,g=/^aria-[\-\w]+$/,y=/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,v=/^(?:\w+script|data):/i,b=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A=function(){return"undefined"==typeof window?null:window};return o()});
/*!
 * Socket.IO v2.1.1
 * (c) 2014-2018 Guillermo Rauch
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t,e){"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{};var n,r=i(t),s=r.source,p=r.id,h=r.path,f=u[p]&&h in u[p].nsps,l=e.forceNew||e["force new connection"]||!1===e.multiplex||f;return l?(c("ignoring socket cache for %s",s),n=a(s,e)):(u[p]||(c("new io instance for %s",s),u[p]=a(s,e)),n=u[p]),r.query&&!e.query&&(e.query=r.query),n.socket(r.path,e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(1),s=n(7),a=n(12),c=n(3)("socket.io-client");t.exports=e=r;var u=e.managers={};e.protocol=s.protocol,e.connect=r,e.Manager=n(12),e.Socket=n(37)},function(t,e,n){(function(e){"use strict";function r(t,n){var r=t;n=n||e.location,null==t&&(t=n.protocol+"//"+n.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?n.protocol+t:n.host+t),/^(https?|wss?):\/\//.test(t)||(i("protocol-less url %s",t),t="undefined"!=typeof n?n.protocol+"//"+t:"https://"+t),i("parse %s",t),r=o(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";var s=r.host.indexOf(":")!==-1,a=s?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+a+":"+r.port,r.href=r.protocol+"://"+a+(n&&n.port===r.port?"":":"+r.port),r}var o=n(2),i=n(3)("socket.io-client:url");t.exports=r}).call(e,function(){return this}())},function(t,e){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=n.exec(t||""),a={},c=14;c--;)a[r[c]]=s[c]||"";return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e,n){(function(r){function o(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(t){var n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),n){var r="color: "+this.color;t.splice(1,0,r,"color: inherit");var o=0,i=0;t[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,r)}}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(n){}}function c(){var t;try{t=e.storage.debug}catch(n){}return!t&&"undefined"!=typeof r&&"env"in r&&(t=r.env.DEBUG),t}function u(){try{return window.localStorage}catch(t){}}e=t.exports=n(5),e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},e.enable(c())}).call(e,n(4))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(p===setTimeout)return setTimeout(t,0);if((p===n||!p)&&setTimeout)return p=setTimeout,setTimeout(t,0);try{return p(t,0)}catch(e){try{return p.call(null,t,0)}catch(e){return p.call(this,t,0)}}}function i(t){if(h===clearTimeout)return clearTimeout(t);if((h===r||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function s(){y&&l&&(y=!1,l.length?d=l.concat(d):m=-1,d.length&&a())}function a(){if(!y){var t=o(s);y=!0;for(var e=d.length;e;){for(l=d,d=[];++m<e;)l&&l[m].run();m=-1,e=d.length}l=null,y=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var p,h,f=t.exports={};!function(){try{p="function"==typeof setTimeout?setTimeout:n}catch(t){p=n}try{h="function"==typeof clearTimeout?clearTimeout:r}catch(t){h=r}}();var l,d=[],y=!1,m=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new c(t,e)),1!==d.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.prependListener=u,f.prependOnceListener=u,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,n){function r(t){var n,r=0;for(n in t)r=(r<<5)-r+t.charCodeAt(n),r|=0;return e.colors[Math.abs(r)%e.colors.length]}function o(t){function n(){if(n.enabled){var t=n,r=+new Date,i=r-(o||r);t.diff=i,t.prev=o,t.curr=r,o=r;for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;c++;var o=e.formatters[r];if("function"==typeof o){var i=s[c];n=o.call(t,i),s.splice(c,1),c--}return n}),e.formatArgs.call(t,s);var u=n.log||e.log||console.log.bind(console);u.apply(t,s)}}var o;return n.namespace=t,n.enabled=e.enabled(t),n.useColors=e.useColors(),n.color=r(t),n.destroy=i,"function"==typeof e.init&&e.init(n),e.instances.push(n),n}function i(){var t=e.instances.indexOf(this);return t!==-1&&(e.instances.splice(t,1),!0)}function s(t){e.save(t),e.names=[],e.skips=[];var n,r=("string"==typeof t?t:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&(t=r[n].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")));for(n=0;n<e.instances.length;n++){var i=e.instances[n];i.enabled=e.enabled(i.namespace)}}function a(){e.enable("")}function c(t){if("*"===t[t.length-1])return!0;var n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1}function u(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o.debug=o["default"]=o,e.coerce=u,e.disable=a,e.enable=s,e.enabled=c,e.humanize=n(6),e.instances=[],e.names=[],e.skips=[],e.formatters={}},function(t,e){function n(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),r=(e[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*p;case"days":case"day":case"d":return n*u;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(t){return t>=u?Math.round(t/u)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return i(t,u,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}var s=1e3,a=60*s,c=60*a,u=24*c,p=365.25*u;t.exports=function(t,e){e=e||{};var i=typeof t;if("string"===i&&t.length>0)return n(t);if("number"===i&&isNaN(t)===!1)return e["long"]?o(t):r(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,n){function r(){}function o(t){var n=""+t.type;if(e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(n+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(n+=t.nsp+","),null!=t.id&&(n+=t.id),null!=t.data){var r=i(t.data);if(r===!1)return g;n+=r}return f("encoded %j as %s",t,n),n}function i(t){try{return JSON.stringify(t)}catch(e){return!1}}function s(t,e){function n(t){var n=d.deconstructPacket(t),r=o(n.packet),i=n.buffers;i.unshift(r),e(i)}d.removeBlobs(t,n)}function a(){this.reconstructor=null}function c(t){var n=0,r={type:Number(t.charAt(0))};if(null==e.types[r.type])return h("unknown packet type "+r.type);if(e.BINARY_EVENT===r.type||e.BINARY_ACK===r.type){for(var o="";"-"!==t.charAt(++n)&&(o+=t.charAt(n),n!=t.length););if(o!=Number(o)||"-"!==t.charAt(n))throw new Error("Illegal attachments");r.attachments=Number(o)}if("/"===t.charAt(n+1))for(r.nsp="";++n;){var i=t.charAt(n);if(","===i)break;if(r.nsp+=i,n===t.length)break}else r.nsp="/";var s=t.charAt(n+1);if(""!==s&&Number(s)==s){for(r.id="";++n;){var i=t.charAt(n);if(null==i||Number(i)!=i){--n;break}if(r.id+=t.charAt(n),n===t.length)break}r.id=Number(r.id)}if(t.charAt(++n)){var a=u(t.substr(n)),c=a!==!1&&(r.type===e.ERROR||y(a));if(!c)return h("invalid payload");r.data=a}return f("decoded %s as %j",t,r),r}function u(t){try{return JSON.parse(t)}catch(e){return!1}}function p(t){this.reconPack=t,this.buffers=[]}function h(t){return{type:e.ERROR,data:"parser error: "+t}}var f=n(3)("socket.io-parser"),l=n(8),d=n(9),y=n(10),m=n(11);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=r,e.Decoder=a;var g=e.ERROR+'"encode error"';r.prototype.encode=function(t,n){if(f("encoding packet %j",t),e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)s(t,n);else{var r=o(t);n([r])}},l(a.prototype),a.prototype.add=function(t){var n;if("string"==typeof t)n=c(t),e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type?(this.reconstructor=new p(n),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",n)):this.emit("decoded",n);else{if(!m(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,this.emit("decoded",n))}},a.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},p.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=d.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},p.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,n){function r(t){if(t)return o(t)}function o(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,o=0;o<n.length;o++)if(r=n[o],r===e||r.fn===e){n.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var r=0,o=n.length;r<o;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,n){(function(t){function r(t,e){if(!t)return t;if(s(t)){var n={_placeholder:!0,num:e.length};return e.push(t),n}if(i(t)){for(var o=new Array(t.length),a=0;a<t.length;a++)o[a]=r(t[a],e);return o}if("object"==typeof t&&!(t instanceof Date)){var o={};for(var c in t)o[c]=r(t[c],e);return o}return t}function o(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(i(t))for(var n=0;n<t.length;n++)t[n]=o(t[n],e);else if("object"==typeof t)for(var r in t)t[r]=o(t[r],e);return t}var i=n(10),s=n(11),a=Object.prototype.toString,c="function"==typeof t.Blob||"[object BlobConstructor]"===a.call(t.Blob),u="function"==typeof t.File||"[object FileConstructor]"===a.call(t.File);e.deconstructPacket=function(t){var e=[],n=t.data,o=t;return o.data=r(n,e),o.attachments=e.length,{packet:o,buffers:e}},e.reconstructPacket=function(t,e){return t.data=o(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function n(t,a,p){if(!t)return t;if(c&&t instanceof Blob||u&&t instanceof File){r++;var h=new FileReader;h.onload=function(){p?p[a]=this.result:o=this.result,--r||e(o)},h.readAsArrayBuffer(t)}else if(i(t))for(var f=0;f<t.length;f++)n(t[f],f,t);else if("object"==typeof t&&!s(t))for(var l in t)n(t[l],l,t)}var r=0,o=t;n(o),r||e(o)}}).call(e,function(){return this}())},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e){(function(e){function n(t){return r&&e.Buffer.isBuffer(t)||o&&(t instanceof e.ArrayBuffer||i(t))}t.exports=n;var r="function"==typeof e.Buffer&&"function"==typeof e.Buffer.isBuffer,o="function"==typeof e.ArrayBuffer,i=function(){return o&&"function"==typeof e.ArrayBuffer.isView?e.ArrayBuffer.isView:function(t){return t.buffer instanceof e.ArrayBuffer}}()}).call(e,function(){return this}())},function(t,e,n){"use strict";function r(t,e){if(!(this instanceof r))return new r(t,e);t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new l({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var n=e.parser||c;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this.autoConnect=e.autoConnect!==!1,this.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(13),s=n(37),a=n(8),c=n(7),u=n(39),p=n(40),h=n(3)("socket.io-client:manager"),f=n(36),l=n(41),d=Object.prototype.hasOwnProperty;t.exports=r,r.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)d.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},r.prototype.updateSocketIds=function(){for(var t in this.nsps)d.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t))},r.prototype.generateId=function(t){return("/"===t?"":t+"#")+this.engine.id},a(r.prototype),r.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},r.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},r.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},r.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},r.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},r.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},r.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},r.prototype.open=r.prototype.connect=function(t,e){if(h("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;h("opening %s",this.uri),this.engine=i(this.uri,this.opts);var n=this.engine,r=this;this.readyState="opening",this.skipReconnect=!1;var o=u(n,"open",function(){r.onopen(),t&&t()}),s=u(n,"error",function(e){if(h("connect_error"),r.cleanup(),r.readyState="closed",r.emitAll("connect_error",e),t){var n=new Error("Connection error");n.data=e,t(n)}else r.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;h("connect attempt will timeout after %d",a);var c=setTimeout(function(){h("connect attempt timed out after %d",a),o.destroy(),n.close(),n.emit("error","timeout"),r.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},r.prototype.onopen=function(){h("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(u(t,"data",p(this,"ondata"))),this.subs.push(u(t,"ping",p(this,"onping"))),this.subs.push(u(t,"pong",p(this,"onpong"))),this.subs.push(u(t,"error",p(this,"onerror"))),this.subs.push(u(t,"close",p(this,"onclose"))),this.subs.push(u(this.decoder,"decoded",p(this,"ondecoded")))},r.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},r.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},r.prototype.ondata=function(t){this.decoder.add(t)},r.prototype.ondecoded=function(t){this.emit("packet",t)},r.prototype.onerror=function(t){h("error",t),this.emitAll("error",t)},r.prototype.socket=function(t,e){function n(){~f(o.connecting,r)||o.connecting.push(r)}var r=this.nsps[t];if(!r){r=new s(this,t,e),this.nsps[t]=r;var o=this;r.on("connecting",n),r.on("connect",function(){r.id=o.generateId(t)}),this.autoConnect&&n()}return r},r.prototype.destroy=function(t){var e=f(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},r.prototype.packet=function(t){h("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(n){for(var r=0;r<n.length;r++)e.engine.write(n[r],t.options);e.encoding=!1,e.processPacketQueue()}))},r.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},r.prototype.cleanup=function(){h("cleanup");for(var t=this.subs.length,e=0;e<t;e++){var n=this.subs.shift();n.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},r.prototype.close=r.prototype.disconnect=function(){h("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},r.prototype.onclose=function(t){h("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},r.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)h("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();h("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var n=setTimeout(function(){t.skipReconnect||(h("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(h("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(h("reconnect success"),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(n)}})}},r.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,n){t.exports=n(14),t.exports.parser=n(21)},function(t,e,n){(function(e){function r(t,n){if(!(this instanceof r))return new r(t,n);n=n||{},t&&"object"==typeof t&&(n=t,t=null),t?(t=p(t),n.hostname=t.host,n.secure="https"===t.protocol||"wss"===t.protocol,n.port=t.port,t.query&&(n.query=t.query)):n.host&&(n.hostname=p(n.host).host),this.secure=null!=n.secure?n.secure:e.location&&"https:"===location.protocol,n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.agent=n.agent||!1,this.hostname=n.hostname||(e.location?location.hostname:"localhost"),this.port=n.port||(e.location&&location.port?location.port:this.secure?443:80),this.query=n.query||{},"string"==typeof this.query&&(this.query=h.decode(this.query)),this.upgrade=!1!==n.upgrade,this.path=(n.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!n.forceJSONP,this.jsonp=!1!==n.jsonp,this.forceBase64=!!n.forceBase64,this.enablesXDR=!!n.enablesXDR,this.timestampParam=n.timestampParam||"t",this.timestampRequests=n.timestampRequests,this.transports=n.transports||["polling","websocket"],this.transportOptions=n.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=n.policyPort||843,this.rememberUpgrade=n.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=n.onlyBinaryUpgrades,this.perMessageDeflate=!1!==n.perMessageDeflate&&(n.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=n.pfx||null,this.key=n.key||null,this.passphrase=n.passphrase||null,this.cert=n.cert||null,this.ca=n.ca||null,this.ciphers=n.ciphers||null,this.rejectUnauthorized=void 0===n.rejectUnauthorized||n.rejectUnauthorized,this.forceNode=!!n.forceNode;var o="object"==typeof e&&e;o.global===o&&(n.extraHeaders&&Object.keys(n.extraHeaders).length>0&&(this.extraHeaders=n.extraHeaders),n.localAddress&&(this.localAddress=n.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}function o(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var i=n(15),s=n(8),a=n(3)("engine.io-client:socket"),c=n(36),u=n(21),p=n(2),h=n(30);t.exports=r,r.priorWebsocketSuccess=!1,s(r.prototype),r.protocol=u.protocol,r.Socket=r,r.Transport=n(20),r.transports=n(15),r.parser=n(21),r.prototype.createTransport=function(t){a('creating transport "%s"',t);var e=o(this.query);e.EIO=u.protocol,e.transport=t;var n=this.transportOptions[t]||{};this.id&&(e.sid=this.id);var r=new i[t]({query:e,socket:this,agent:n.agent||this.agent,hostname:n.hostname||this.hostname,port:n.port||this.port,secure:n.secure||this.secure,path:n.path||this.path,forceJSONP:n.forceJSONP||this.forceJSONP,jsonp:n.jsonp||this.jsonp,forceBase64:n.forceBase64||this.forceBase64,enablesXDR:n.enablesXDR||this.enablesXDR,timestampRequests:n.timestampRequests||this.timestampRequests,timestampParam:n.timestampParam||this.timestampParam,policyPort:n.policyPort||this.policyPort,pfx:n.pfx||this.pfx,key:n.key||this.key,passphrase:n.passphrase||this.passphrase,cert:n.cert||this.cert,ca:n.ca||this.ca,ciphers:n.ciphers||this.ciphers,rejectUnauthorized:n.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:n.perMessageDeflate||this.perMessageDeflate,extraHeaders:n.extraHeaders||this.extraHeaders,forceNode:n.forceNode||this.forceNode,localAddress:n.localAddress||this.localAddress,requestTimeout:n.requestTimeout||this.requestTimeout,protocols:n.protocols||void 0});return r},r.prototype.open=function(){var t;if(this.rememberUpgrade&&r.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(n){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},r.prototype.setTransport=function(t){a("setting transport %s",t.name);var e=this;this.transport&&(a("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},r.prototype.probe=function(t){function e(){if(f.onlyBinaryUpgrades){var e=!this.supportsBinary&&f.transport.supportsBinary;h=h||e}h||(a('probe transport "%s" opened',t),p.send([{type:"ping",data:"probe"}]),p.once("packet",function(e){if(!h)if("pong"===e.type&&"probe"===e.data){if(a('probe transport "%s" pong',t),f.upgrading=!0,f.emit("upgrading",p),!p)return;r.priorWebsocketSuccess="websocket"===p.name,a('pausing current transport "%s"',f.transport.name),f.transport.pause(function(){h||"closed"!==f.readyState&&(a("changing transport and sending upgrade packet"),u(),f.setTransport(p),p.send([{type:"upgrade"}]),f.emit("upgrade",p),p=null,f.upgrading=!1,f.flush())})}else{a('probe transport "%s" failed',t);var n=new Error("probe error");n.transport=p.name,f.emit("upgradeError",n)}}))}function n(){h||(h=!0,u(),p.close(),p=null)}function o(e){var r=new Error("probe error: "+e);r.transport=p.name,n(),a('probe transport "%s" failed because of error: %s',t,e),f.emit("upgradeError",r)}function i(){o("transport closed")}function s(){o("socket closed")}function c(t){p&&t.name!==p.name&&(a('"%s" works - aborting "%s"',t.name,p.name),n())}function u(){p.removeListener("open",e),p.removeListener("error",o),p.removeListener("close",i),f.removeListener("close",s),f.removeListener("upgrading",c)}a('probing transport "%s"',t);var p=this.createTransport(t,{probe:1}),h=!1,f=this;r.priorWebsocketSuccess=!1,p.once("open",e),p.once("error",o),p.once("close",i),this.once("close",s),this.once("upgrading",c),p.open()},r.prototype.onOpen=function(){if(a("socket open"),this.readyState="open",r.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){a("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},r.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(a('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}else a('packet received with socket readyState "%s"',this.readyState)},r.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},r.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},r.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){a("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},r.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},r.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},r.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},r.prototype.write=r.prototype.send=function(t,e,n){return this.sendPacket("message",t,e,n),this},r.prototype.sendPacket=function(t,e,n,r){if("function"==typeof e&&(r=e,e=void 0),"function"==typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){n=n||{},n.compress=!1!==n.compress;var o={type:t,data:e,options:n};this.emit("packetCreate",o),this.writeBuffer.push(o),r&&this.once("flush",r),this.flush()}},r.prototype.close=function(){function t(){r.onClose("forced close"),a("socket closing - telling transport to close"),r.transport.close()}function e(){r.removeListener("upgrade",e),r.removeListener("upgradeError",e),t()}function n(){r.once("upgrade",e),r.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var r=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?n():t()}):this.upgrading?n():t()}return this},r.prototype.onError=function(t){a("socket error %j",t),r.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},r.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){a('socket close with reason: "%s"',t);var n=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),n.writeBuffer=[],n.prevBufferLen=0}},r.prototype.filterUpgrades=function(t){for(var e=[],n=0,r=t.length;n<r;n++)~c(this.transports,t[n])&&e.push(t[n]);return e}}).call(e,function(){return this}())},function(t,e,n){(function(t){function r(e){var n,r=!1,a=!1,c=!1!==e.jsonp;if(t.location){var u="https:"===location.protocol,p=location.port;
p||(p=u?443:80),r=e.hostname!==location.hostname||p!==e.port,a=e.secure!==u}if(e.xdomain=r,e.xscheme=a,n=new o(e),"open"in n&&!e.forceJSONP)return new i(e);if(!c)throw new Error("JSONP disabled");return new s(e)}var o=n(16),i=n(18),s=n(33),a=n(34);e.polling=r,e.websocket=a}).call(e,function(){return this}())},function(t,e,n){(function(e){var r=n(17);t.exports=function(t){var n=t.xdomain,o=t.xscheme,i=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!n||r))return new XMLHttpRequest}catch(s){}try{if("undefined"!=typeof XDomainRequest&&!o&&i)return new XDomainRequest}catch(s){}if(!n)try{return new(e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(s){}}}).call(e,function(){return this}())},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(n){t.exports=!1}},function(t,e,n){(function(e){function r(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,e.location){var n="https:"===location.protocol,r=location.port;r||(r=n?443:80),this.xd=t.hostname!==e.location.hostname||r!==t.port,this.xs=t.secure!==n}}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=n(16),c=n(19),u=n(8),p=n(31),h=n(3)("engine.io-client:polling-xhr");t.exports=o,t.exports.Request=i,p(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var n="string"!=typeof t&&void 0!==t,r=this.request({method:"POST",data:t,isBinary:n}),o=this;r.on("success",e),r.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=r},o.prototype.doPoll=function(){h("xhr poll");var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},u(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var n=this.xhr=new a(t),r=this;try{h("xhr open %s: %s",this.method,this.uri),n.open(this.method,this.uri,this.async);try{if(this.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(var o in this.extraHeaders)this.extraHeaders.hasOwnProperty(o)&&n.setRequestHeader(o,this.extraHeaders[o])}}catch(s){}if("POST"===this.method)try{this.isBinary?n.setRequestHeader("Content-type","application/octet-stream"):n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(s){}try{n.setRequestHeader("Accept","*/*")}catch(s){}"withCredentials"in n&&(n.withCredentials=!0),this.requestTimeout&&(n.timeout=this.requestTimeout),this.hasXDR()?(n.onload=function(){r.onLoad()},n.onerror=function(){r.onError(n.responseText)}):n.onreadystatechange=function(){if(2===n.readyState)try{var t=n.getResponseHeader("Content-Type");r.supportsBinary&&"application/octet-stream"===t&&(n.responseType="arraybuffer")}catch(e){}4===n.readyState&&(200===n.status||1223===n.status?r.onLoad():setTimeout(function(){r.onError(n.status)},0))},h("xhr data %s",this.data),n.send(this.data)}catch(s){return void setTimeout(function(){r.onError(s)},0)}e.document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=r:this.xhr.onreadystatechange=r,t)try{this.xhr.abort()}catch(n){}e.document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type")}catch(n){}t="application/octet-stream"===e?this.xhr.response||this.xhr.responseText:this.xhr.responseText}catch(n){this.onError(n)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof e.XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},e.document&&(e.attachEvent?e.attachEvent("onunload",s):e.addEventListener&&e.addEventListener("beforeunload",s,!1))}).call(e,function(){return this}())},function(t,e,n){function r(t){var e=t&&t.forceBase64;p&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=n(20),i=n(30),s=n(21),a=n(31),c=n(32),u=n(3)("engine.io-client:polling");t.exports=r;var p=function(){var t=n(16),e=new t({xdomain:!1});return null!=e.responseType}();a(r,o),r.prototype.name="polling",r.prototype.doOpen=function(){this.poll()},r.prototype.pause=function(t){function e(){u("paused"),n.readyState="paused",t()}var n=this;if(this.readyState="pausing",this.polling||!this.writable){var r=0;this.polling&&(u("we are currently polling - waiting to pause"),r++,this.once("pollComplete",function(){u("pre-pause polling complete"),--r||e()})),this.writable||(u("we are currently writing - waiting to pause"),r++,this.once("drain",function(){u("pre-pause writing complete"),--r||e()}))}else e()},r.prototype.poll=function(){u("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},r.prototype.onData=function(t){var e=this;u("polling got data %s",t);var n=function(t,n,r){return"opening"===e.readyState&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,n),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():u('ignoring poll - transport state "%s"',this.readyState))},r.prototype.doClose=function(){function t(){u("writing close packet"),e.write([{type:"close"}])}var e=this;"open"===this.readyState?(u("transport open - closing"),t()):(u("transport not open - deferring close"),this.once("open",t))},r.prototype.write=function(t){var e=this;this.writable=!1;var n=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,n)})},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",n="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(n=":"+this.port),t.length&&(t="?"+t);var r=this.hostname.indexOf(":")!==-1;return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t}},function(t,e,n){function r(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=n(21),i=n(8);t.exports=r,i(r.prototype),r.prototype.onError=function(t,e){var n=new Error(t);return n.type="TransportError",n.description=e,this.emit("error",n),this},r.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},r.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},r.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},r.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},r.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},r.prototype.onPacket=function(t){this.emit("packet",t)},r.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,n){(function(t){function r(t,n){var r="b"+e.packets[t.type]+t.data.data;return n(r)}function o(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return r(s.buffer)}function i(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=new FileReader;return o.onload=function(){t.data=o.result,e.encodePacket(t,n,!0,r)},o.readAsArrayBuffer(t.data)}function s(t,n,r){if(!n)return e.encodeBase64Packet(t,r);if(g)return i(t,n,r);var o=new Uint8Array(1);o[0]=v[t.type];var s=new k([o.buffer,t.data]);return r(s)}function a(t){try{t=d.decode(t,{strict:!1})}catch(e){return!1}return t}function c(t,e,n){for(var r=new Array(t.length),o=l(t.length,n),i=function(t,n,o){e(n,function(e,n){r[t]=n,o(e,r)})},s=0;s<t.length;s++)i(s,t[s],o)}var u,p=n(22),h=n(23),f=n(24),l=n(25),d=n(26);t&&t.ArrayBuffer&&(u=n(28));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),g=y||m;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=p(v),w={type:"error",data:"parser error"},k=n(29);e.encodePacket=function(e,n,i,a){"function"==typeof n&&(a=n,n=!1),"function"==typeof i&&(a=i,i=null);var c=void 0===e.data?void 0:e.data.buffer||e.data;if(t.ArrayBuffer&&c instanceof ArrayBuffer)return o(e,n,a);if(k&&c instanceof t.Blob)return s(e,n,a);if(c&&c.base64)return r(e,a);var u=v[e.type];return void 0!==e.data&&(u+=i?d.encode(String(e.data),{strict:!1}):String(e.data)),a(""+u)},e.encodeBase64Packet=function(n,r){var o="b"+e.packets[n.type];if(k&&n.data instanceof t.Blob){var i=new FileReader;return i.onload=function(){var t=i.result.split(",")[1];r(o+t)},i.readAsDataURL(n.data)}var s;try{s=String.fromCharCode.apply(null,new Uint8Array(n.data))}catch(a){for(var c=new Uint8Array(n.data),u=new Array(c.length),p=0;p<c.length;p++)u[p]=c[p];s=String.fromCharCode.apply(null,u)}return o+=t.btoa(s),r(o)},e.decodePacket=function(t,n,r){if(void 0===t)return w;if("string"==typeof t){if("b"===t.charAt(0))return e.decodeBase64Packet(t.substr(1),n);if(r&&(t=a(t),t===!1))return w;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:w}var i=new Uint8Array(t),o=i[0],s=f(t,1);return k&&"blob"===n&&(s=new k([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var n=b[t.charAt(0)];if(!u)return{type:n,data:{base64:!0,data:t.substr(1)}};var r=u.decode(t.substr(1));return"blob"===e&&k&&(r=new k([r])),{type:n,data:r}},e.encodePayload=function(t,n,r){function o(t){return t.length+":"+t}function i(t,r){e.encodePacket(t,!!s&&n,!1,function(t){r(null,o(t))})}"function"==typeof n&&(r=n,n=null);var s=h(t);return n&&s?k&&!g?e.encodePayloadAsBlob(t,r):e.encodePayloadAsArrayBuffer(t,r):t.length?void c(t,i,function(t,e){return r(e.join(""))}):r("0:")},e.decodePayload=function(t,n,r){if("string"!=typeof t)return e.decodePayloadAsBinary(t,n,r);"function"==typeof n&&(r=n,n=null);var o;if(""===t)return r(w,0,1);for(var i,s,a="",c=0,u=t.length;c<u;c++){var p=t.charAt(c);if(":"===p){if(""===a||a!=(i=Number(a)))return r(w,0,1);if(s=t.substr(c+1,i),a!=s.length)return r(w,0,1);if(s.length){if(o=e.decodePacket(s,n,!1),w.type===o.type&&w.data===o.data)return r(w,0,1);var h=r(o,c+i,u);if(!1===h)return}c+=i,a=""}else a+=p}return""!==a?r(w,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){return n(null,t)})}return t.length?void c(t,r,function(t,e){var r=e.reduce(function(t,e){var n;return n="string"==typeof e?e.length:e.byteLength,t+n.toString().length+n+2},0),o=new Uint8Array(r),i=0;return e.forEach(function(t){var e="string"==typeof t,n=t;if(e){for(var r=new Uint8Array(t.length),s=0;s<t.length;s++)r[s]=t.charCodeAt(s);n=r.buffer}e?o[i++]=0:o[i++]=1;for(var a=n.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var r=new Uint8Array(n),s=0;s<r.length;s++)o[i++]=r[s]}),n(o.buffer)}):n(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var r=new Uint8Array(t.length),o=0;o<t.length;o++)r[o]=t.charCodeAt(o);t=r.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,k){var c=new k([e.buffer,a.buffer,t]);n(null,c)}})}c(t,r,function(t,e){return n(new k(e))})},e.decodePayloadAsBinary=function(t,n,r){"function"==typeof n&&(r=n,n=null);for(var o=t,i=[];o.byteLength>0;){for(var s=new Uint8Array(o),a=0===s[0],c="",u=1;255!==s[u];u++){if(c.length>310)return r(w,0,1);c+=s[u]}o=f(o,2+c.length),c=parseInt(c);var p=f(o,0,c);if(a)try{p=String.fromCharCode.apply(null,new Uint8Array(p))}catch(h){var l=new Uint8Array(p);p="";for(var u=0;u<l.length;u++)p+=String.fromCharCode(l[u])}i.push(p),o=f(o,c)}var d=i.length;i.forEach(function(t,o){r(e.decodePacket(t,n,!0),o,d)})}}).call(e,function(){return this}())},function(t,e){t.exports=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty;for(var r in t)n.call(t,r)&&e.push(r);return e}},function(t,e,n){(function(e){function r(t){if(!t||"object"!=typeof t)return!1;if(o(t)){for(var n=0,i=t.length;n<i;n++)if(r(t[n]))return!0;return!1}if("function"==typeof e.Buffer&&e.Buffer.isBuffer&&e.Buffer.isBuffer(t)||"function"==typeof e.ArrayBuffer&&t instanceof ArrayBuffer||s&&t instanceof Blob||a&&t instanceof File)return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return r(t.toJSON(),!0);for(var c in t)if(Object.prototype.hasOwnProperty.call(t,c)&&r(t[c]))return!0;return!1}var o=n(10),i=Object.prototype.toString,s="function"==typeof e.Blob||"[object BlobConstructor]"===i.call(e.Blob),a="function"==typeof e.File||"[object FileConstructor]"===i.call(e.File);t.exports=r}).call(e,function(){return this}())},function(t,e){t.exports=function(t,e,n){var r=t.byteLength;if(e=e||0,n=n||r,t.slice)return t.slice(e,n);if(e<0&&(e+=r),n<0&&(n+=r),n>r&&(n=r),e>=r||e>=n||0===r)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(n-e),s=e,a=0;s<n;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function n(t,e,n){function o(t,r){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=n):0!==o.count||i||e(null,r)}var i=!1;return n=n||r,o.count=t,0===t?e():o}function r(){}t.exports=n},function(t,e,n){var r;(function(t,o){!function(i){function s(t){for(var e,n,r=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(n=t.charCodeAt(o++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),o--)):r.push(e);return r}function a(t){for(var e,n=t.length,r=-1,o="";++r<n;)e=t[r],e>65535&&(e-=65536,o+=w(e>>>10&1023|55296),e=56320|1023&e),o+=w(e);return o}function c(t,e){if(t>=55296&&t<=57343){if(e)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value");return!1}return!0}function u(t,e){return w(t>>e&63|128)}function p(t,e){if(0==(4294967168&t))return w(t);var n="";return 0==(4294965248&t)?n=w(t>>6&31|192):0==(4294901760&t)?(c(t,e)||(t=65533),n=w(t>>12&15|224),n+=u(t,6)):0==(4292870144&t)&&(n=w(t>>18&7|240),n+=u(t,12),n+=u(t,6)),n+=w(63&t|128)}function h(t,e){e=e||{};for(var n,r=!1!==e.strict,o=s(t),i=o.length,a=-1,c="";++a<i;)n=o[a],c+=p(n,r);return c}function f(){if(b>=v)throw Error("Invalid byte index");var t=255&g[b];if(b++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function l(t){var e,n,r,o,i;if(b>v)throw Error("Invalid byte index");if(b==v)return!1;if(e=255&g[b],b++,0==(128&e))return e;if(192==(224&e)){if(n=f(),i=(31&e)<<6|n,i>=128)return i;throw Error("Invalid continuation byte")}if(224==(240&e)){if(n=f(),r=f(),i=(15&e)<<12|n<<6|r,i>=2048)return c(i,t)?i:65533;throw Error("Invalid continuation byte")}if(240==(248&e)&&(n=f(),r=f(),o=f(),i=(7&e)<<18|n<<12|r<<6|o,i>=65536&&i<=1114111))return i;throw Error("Invalid UTF-8 detected")}function d(t,e){e=e||{};var n=!1!==e.strict;g=s(t),v=g.length,b=0;for(var r,o=[];(r=l(n))!==!1;)o.push(r);return a(o)}var y="object"==typeof e&&e,m=("object"==typeof t&&t&&t.exports==y&&t,"object"==typeof o&&o);m.global!==m&&m.window!==m||(i=m);var g,v,b,w=String.fromCharCode,k={version:"2.1.2",encode:h,decode:d};r=function(){return k}.call(e,n,e,t),!(void 0!==r&&(t.exports=r))}(this)}).call(e,n(27)(t),function(){return this}())},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=new Uint8Array(256),r=0;r<t.length;r++)n[t.charCodeAt(r)]=r;e.encode=function(e){var n,r=new Uint8Array(e),o=r.length,i="";for(n=0;n<o;n+=3)i+=t[r[n]>>2],i+=t[(3&r[n])<<4|r[n+1]>>4],i+=t[(15&r[n+1])<<2|r[n+2]>>6],i+=t[63&r[n+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,r,o,i,s,a=.75*t.length,c=t.length,u=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var p=new ArrayBuffer(a),h=new Uint8Array(p);for(e=0;e<c;e+=4)r=n[t.charCodeAt(e)],o=n[t.charCodeAt(e+1)],i=n[t.charCodeAt(e+2)],s=n[t.charCodeAt(e+3)],h[u++]=r<<2|o>>4,h[u++]=(15&o)<<4|i>>2,h[u++]=(3&i)<<6|63&s;return p}}()},function(t,e){(function(e){function n(t){for(var e=0;e<t.length;e++){var n=t[e];if(n.buffer instanceof ArrayBuffer){var r=n.buffer;if(n.byteLength!==r.byteLength){var o=new Uint8Array(n.byteLength);o.set(new Uint8Array(r,n.byteOffset,n.byteLength)),r=o.buffer}t[e]=r}}}function r(t,e){e=e||{};var r=new i;n(t);for(var o=0;o<t.length;o++)r.append(t[o]);return e.type?r.getBlob(e.type):r.getBlob()}function o(t,e){return n(t),new Blob(t,e||{})}var i=e.BlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(e){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(e){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;t.exports=function(){return s?a?e.Blob:o:c?r:void 0}()}).call(e,function(){return this}())},function(t,e){e.encode=function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e},e.decode=function(t){for(var e={},n=t.split("&"),r=0,o=n.length;r<o;r++){var i=n[r].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e){"use strict";function n(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function r(t){var e=0;for(p=0;p<t.length;p++)e=e*a+c[t.charAt(p)];return e}function o(){var t=n(+new Date);return t!==i?(u=0,i=t):t+"."+n(u++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},u=0,p=0;p<a;p++)c[s[p]]=p;o.encode=n,o.decode=r,t.exports=o},function(t,e,n){(function(e){function r(){}function o(t){i.call(this,t),this.query=this.query||{},a||(e.___eio||(e.___eio=[]),a=e.___eio),this.index=a.length;var n=this;a.push(function(t){n.onData(t)}),this.query.j=this.index,e.document&&e.addEventListener&&e.addEventListener("beforeunload",function(){n.script&&(n.script.onerror=r)},!1)}var i=n(19),s=n(31);t.exports=o;var a,c=/\n/g,u=/\\n/g;s(o,i),o.prototype.supportsBinary=!1,o.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),i.prototype.doClose.call(this)},o.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var n=document.getElementsByTagName("script")[0];n?n.parentNode.insertBefore(e,n):(document.head||document.body).appendChild(e),this.script=e;var r="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);r&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},o.prototype.doWrite=function(t,e){function n(){r(),e()}function r(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var e='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(e)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),p=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=p,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),r(),t=t.replace(u,"\\\n"),this.area.value=t.replace(c,"\\n");try{this.form.submit()}catch(h){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&n()}:this.iframe.onload=n}}).call(e,function(){return this}())},function(t,e,n){(function(e){function r(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=h&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(l=o),i.call(this,t)}var o,i=n(20),s=n(21),a=n(30),c=n(31),u=n(32),p=n(3)("engine.io-client:websocket"),h=e.WebSocket||e.MozWebSocket;if("undefined"==typeof window)try{o=n(35)}catch(f){}var l=h;l||"undefined"!=typeof window||(l=o),t.exports=r,c(r,i),r.prototype.name="websocket",r.prototype.supportsBinary=!0,r.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,n={agent:this.agent,perMessageDeflate:this.perMessageDeflate};n.pfx=this.pfx,n.key=this.key,n.passphrase=this.passphrase,n.cert=this.cert,n.ca=this.ca,n.ciphers=this.ciphers,n.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(n.headers=this.extraHeaders),this.localAddress&&(n.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket?e?new l(t,e):new l(t):new l(t,e,n)}catch(r){return this.emit("error",r)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},r.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},r.prototype.write=function(t){function n(){r.emit("flush"),setTimeout(function(){r.writable=!0,r.emit("drain")},0)}var r=this;this.writable=!1;for(var o=t.length,i=0,a=o;i<a;i++)!function(t){s.encodePacket(t,r.supportsBinary,function(i){if(!r.usingBrowserWebSocket){var s={};if(t.options&&(s.compress=t.options.compress),r.perMessageDeflate){var a="string"==typeof i?e.Buffer.byteLength(i):i.length;a<r.perMessageDeflate.threshold&&(s.compress=!1)}}try{r.usingBrowserWebSocket?r.ws.send(i):r.ws.send(i,s)}catch(c){p("websocket closed before onclose event")}--o||n()})}(t[i])},r.prototype.onClose=function(){i.prototype.onClose.call(this)},r.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",n="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(n=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=u()),this.supportsBinary||(t.b64=1),t=a.encode(t),t.length&&(t="?"+t);var r=this.hostname.indexOf(":")!==-1;return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t},r.prototype.check=function(){return!(!l||"__initialize"in l&&this.name===r.prototype.name)}}).call(e,function(){return this}())},function(t,e){},function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}},function(t,e,n){"use strict";function r(t,e,n){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},n&&n.query&&(this.query=n.query),this.io.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(7),s=n(8),a=n(38),c=n(39),u=n(40),p=n(3)("socket.io-client:socket"),h=n(30),f=n(23);t.exports=e=r;var l={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},d=s.prototype.emit;s(r.prototype),r.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[c(t,"open",u(this,"onopen")),c(t,"packet",u(this,"onpacket")),c(t,"close",u(this,"onclose"))]}},r.prototype.open=r.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},r.prototype.send=function(){var t=a(arguments);return t.unshift("message"),this.emit.apply(this,t),this},r.prototype.emit=function(t){if(l.hasOwnProperty(t))return d.apply(this,arguments),this;var e=a(arguments),n={type:(void 0!==this.flags.binary?this.flags.binary:f(e))?i.BINARY_EVENT:i.EVENT,data:e};return n.options={},n.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(p("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),this.flags={},this},r.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},r.prototype.onopen=function(){if(p("transport is open - connecting"),"/"!==this.nsp)if(this.query){var t="object"===o(this.query)?h.encode(this.query):this.query;p("sending connect packet with query %s",t),this.packet({type:i.CONNECT,query:t})}else this.packet({type:i.CONNECT})},r.prototype.onclose=function(t){p("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},r.prototype.onpacket=function(t){var e=t.nsp===this.nsp,n=t.type===i.ERROR&&"/"===t.nsp;if(e||n)switch(t.type){case i.CONNECT:this.onconnect();break;case i.EVENT:this.onevent(t);break;case i.BINARY_EVENT:this.onevent(t);break;case i.ACK:this.onack(t);break;case i.BINARY_ACK:this.onack(t);break;case i.DISCONNECT:this.ondisconnect();break;case i.ERROR:this.emit("error",t.data)}},r.prototype.onevent=function(t){var e=t.data||[];p("emitting event %j",e),null!=t.id&&(p("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?d.apply(this,e):this.receiveBuffer.push(e)},r.prototype.ack=function(t){var e=this,n=!1;return function(){if(!n){n=!0;var r=a(arguments);p("sending ack %j",r),e.packet({type:f(r)?i.BINARY_ACK:i.ACK,id:t,data:r})}}},r.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e?(p("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):p("bad ack %s",t.id)},r.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},r.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)d.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},r.prototype.ondisconnect=function(){p("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},r.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},r.prototype.close=r.prototype.disconnect=function(){return this.connected&&(p("performing disconnect (%s)",this.nsp),this.packet({type:i.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},r.prototype.compress=function(t){return this.flags.compress=t,this},r.prototype.binary=function(t){return this.flags.binary=t,this}},function(t,e){function n(t,e){var n=[];e=e||0;for(var r=e||0;r<t.length;r++)n[r-e]=t[r];return n}t.exports=n},function(t,e){"use strict";function n(t,e,n){return t.on(e,n),{destroy:function(){t.removeListener(e,n)}}}t.exports=n},function(t,e){var n=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var r=n.call(arguments,2);return function(){return e.apply(t,r.concat(n.call(arguments)))}}},function(t,e){function n(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=n,n.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},n.prototype.reset=function(){this.attempts=0},n.prototype.setMin=function(t){this.ms=t},n.prototype.setMax=function(t){this.max=t},n.prototype.setJitter=function(t){this.jitter=t}}])});
// to-markdown 3.1.1
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toMarkdown=e()}}(function(){return function e(n,t,r){function o(a,c){if(!t[a]){if(!n[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var f=t[a]={exports:{}};n[a][0].call(f.exports,function(e){var t=n[a][1][e];return o(t||e)},f,f.exports,e,n,t,r)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,n,t){"use strict";function r(e){return-1!==g.indexOf(e.nodeName.toLowerCase())}function o(e){return-1!==v.indexOf(e.nodeName.toLowerCase())}function i(e){for(var n="",t=0;t<e.childNodes.length;t++)if(1===e.childNodes[t].nodeType)n+=e.childNodes[t]._replacement;else{if(3!==e.childNodes[t].nodeType)continue;n+=e.childNodes[t].data}return n}function a(e,n){if("string"==typeof n)return n===e.nodeName.toLowerCase();if(Array.isArray(n))return-1!==n.indexOf(e.nodeName.toLowerCase());if("function"==typeof n)return n.call(f,e);throw new TypeError("`filter` needs to be a string, array, or function")}function c(e,n){var t,o,i;return"left"===e?(t=n.previousSibling,o=/ $/):(t=n.nextSibling,o=/^ /),t&&(3===t.nodeType?i=o.test(t.nodeValue):1!==t.nodeType||r(t)||(i=o.test(t.textContent))),i}function l(e,n){var t="",o="";if(!r(e)){var i=/^[ \r\n\t]/.test(n),a=/[ \r\n\t]$/.test(n);i&&!c("left",e)&&(t=" "),a&&!c("right",e)&&(o=" ")}return{leading:t,trailing:o}}function u(e){var n,t=i(e);if(o(e)||/A|TH|TD/.test(e.nodeName)||!/^\s*$/i.test(t)){for(var r=0;r<d.length;r++){var c=d[r];if(a(e,c.filter)){if("function"!=typeof c.replacement)throw new TypeError("`replacement` needs to be a function that returns a string");var u=l(e,t);(u.leading||u.trailing)&&(t=t.trim()),n=u.leading+c.replacement.call(f,t,e)+u.trailing;break}}e._replacement=n}else e._replacement=""}var f,d,s=e("./lib/md-converters"),p=e("./lib/gfm-converters"),m=e("./lib/html-parser"),h=e("collapse-whitespace"),g=["address","article","aside","audio","blockquote","body","canvas","center","dd","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frameset","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","isindex","li","main","menu","nav","noframes","noscript","ol","output","p","pre","section","table","tbody","td","tfoot","th","thead","tr","ul"],v=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"];(f=function(e,n){if(n=n||{},"string"!=typeof e)throw new TypeError(e+" is not a string");if(""===e)return"";var t=function(e){var n=(new m).parseFromString(e,"text/html");return h(n.documentElement,r),n}(e=e.replace(/(\d+)\. /g,"$1\\. ")).body,o=function(e){for(var n,t,r,o=[e],i=[];o.length>0;)for(n=o.shift(),i.push(n),t=n.childNodes,r=0;r<t.length;r++)1===t[r].nodeType&&o.push(t[r]);return i.shift(),i}(t);d=s.slice(0),n.gfm&&(d=p.concat(d)),n.converters&&(d=n.converters.concat(d));for(var a=o.length-1;a>=0;a--)u(o[a]);return i(t).replace(/^[\t\r\n]+|[\t\r\n\s]+$/g,"").replace(/\n\s+\n/g,"\n\n").replace(/\n{3,}/g,"\n\n")}).isBlock=r,f.isVoid=o,f.outer=function(e,n){return e.cloneNode(!1).outerHTML.replace("><",">"+n+"<")},n.exports=f},{"./lib/gfm-converters":2,"./lib/html-parser":3,"./lib/md-converters":4,"collapse-whitespace":7}],2:[function(e,n,t){"use strict";function r(e,n){var t=" ";return 0===Array.prototype.indexOf.call(n.parentNode.childNodes,n)&&(t="| "),t+e+" |"}var o=/highlight highlight-(\S+)/;n.exports=[{filter:"br",replacement:function(){return"\n"}},{filter:["del","s","strike"],replacement:function(e){return"~~"+e+"~~"}},{filter:function(e){return"checkbox"===e.type&&"LI"===e.parentNode.nodeName},replacement:function(e,n){return(n.checked?"[x]":"[ ]")+" "}},{filter:["th","td"],replacement:function(e,n){return r(e,n)}},{filter:"tr",replacement:function(e,n){var t="",o={left:":--",right:"--:",center:":-:"};if("THEAD"===n.parentNode.nodeName)for(var i=0;i<n.childNodes.length;i++){var a=n.childNodes[i].attributes.align,c="---";a&&(c=o[a.value]||c),t+=r(c,n.childNodes[i])}return"\n"+e+(t?"\n"+t:"")}},{filter:"table",replacement:function(e){return"\n\n"+e+"\n\n"}},{filter:["thead","tbody","tfoot"],replacement:function(e){return e}},{filter:function(e){return"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(e,n){return"\n\n```\n"+n.firstChild.textContent+"\n```\n\n"}},{filter:function(e){return"PRE"===e.nodeName&&"DIV"===e.parentNode.nodeName&&o.test(e.parentNode.className)},replacement:function(e,n){return"\n\n```"+n.parentNode.className.match(o)[1]+"\n"+n.textContent+"\n```\n\n"}},{filter:function(e){return"DIV"===e.nodeName&&o.test(e.className)},replacement:function(e){return"\n\n"+e+"\n\n"}}]},{}],3:[function(e,n,t){function r(){var n=function(){};if("undefined"==typeof document){var t=e("jsdom");n.prototype.parseFromString=function(e){return t.jsdom(e,{features:{FetchExternalResources:[],ProcessExternalResources:!1}})}}else!function(){var e=!1;try{document.implementation.createHTMLDocument("").open()}catch(n){window.ActiveXObject&&(e=!0)}return e}()?n.prototype.parseFromString=function(e){var n=document.implementation.createHTMLDocument("");return n.open(),n.write(e),n.close(),n}:n.prototype.parseFromString=function(e){var n=new window.ActiveXObject("htmlfile");return n.designMode="on",n.open(),n.write(e),n.close(),n};return n}var o="undefined"!=typeof window?window:this;n.exports=function(){var e=o.DOMParser,n=!1;try{(new e).parseFromString("","text/html")&&(n=!0)}catch(e){}return n}()?o.DOMParser:r()},{jsdom:6}],4:[function(e,n,t){"use strict";n.exports=[{filter:"p",replacement:function(e){return"\n\n"+e+"\n\n"}},{filter:"br",replacement:function(){return"  \n"}},{filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,n){for(var t=n.nodeName.charAt(1),r="",o=0;o<t;o++)r+="#";return"\n\n"+r+" "+e+"\n\n"}},{filter:"hr",replacement:function(){return"\n\n* * *\n\n"}},{filter:["em","i"],replacement:function(e){return"_"+e+"_"}},{filter:["strong","b"],replacement:function(e){return"**"+e+"**"}},{filter:function(e){var n=e.previousSibling||e.nextSibling,t="PRE"===e.parentNode.nodeName&&!n;return"CODE"===e.nodeName&&!t},replacement:function(e){return"`"+e+"`"}},{filter:function(e){return"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,n){var t=n.title?' "'+n.title+'"':"";return"["+e+"]("+n.getAttribute("href")+t+")"}},{filter:"img",replacement:function(e,n){var t=n.alt||"",r=n.getAttribute("src")||"",o=n.title||"";return r?"!["+t+"]("+r+(o?' "'+o+'"':"")+")":""}},{filter:function(e){return"PRE"===e.nodeName&&"CODE"===e.firstChild.nodeName},replacement:function(e,n){return"\n\n    "+n.firstChild.textContent.replace(/\n/g,"\n    ")+"\n\n"}},{filter:"blockquote",replacement:function(e){return e=e.trim(),e=e.replace(/\n{3,}/g,"\n\n"),"\n\n"+(e=e.replace(/^/gm,"> "))+"\n\n"}},{filter:"li",replacement:function(e,n){e=e.replace(/^\s+/,"").replace(/\n/gm,"\n    ");var t=n.parentNode,r=Array.prototype.indexOf.call(t.children,n)+1;return(/ol/i.test(t.nodeName)?r+".  ":"*   ")+e}},{filter:["ul","ol"],replacement:function(e,n){for(var t=[],r=0;r<n.childNodes.length;r++)t.push(n.childNodes[r]._replacement);return/li/i.test(n.parentNode.nodeName)?"\n"+t.join("\n"):"\n\n"+t.join("\n")+"\n\n"}},{filter:function(e){return this.isBlock(e)},replacement:function(e,n){return"\n\n"+this.outer(n,e)+"\n\n"}},{filter:function(){return!0},replacement:function(e,n){return this.outer(n,e)}}]},{}],5:[function(e,n,t){n.exports=["address","article","aside","audio","blockquote","canvas","dd","div","dl","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","main","nav","noscript","ol","output","p","pre","section","table","tfoot","ul","video"]},{}],6:[function(e,n,t){},{}],7:[function(e,n,t){"use strict";function r(e){return!(!e||!l[e.nodeName])}function o(e){return!(!e||!c[e.nodeName])}function i(e){var n=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),n}function a(e,n){return e&&e.parentNode===n||"PRE"===n.nodeName?n.nextSibling||n.parentNode:n.firstChild||n.nextSibling||n.parentNode}var c=e("void-elements");Object.keys(c).forEach(function(e){c[e.toUpperCase()]=1});var l={};e("block-elements").forEach(function(e){l[e.toUpperCase()]=1}),n.exports=function(e,n){if(e.firstChild&&"PRE"!==e.nodeName){"function"!=typeof n&&(n=r);for(var t=null,c=!1,l=null,u=a(l,e);u!==e;){if(3===u.nodeType){var f=u.data.replace(/[ \r\n\t]+/g," ");if(t&&!/ $/.test(t.data)||c||" "!==f[0]||(f=f.substr(1)),!f){u=i(u);continue}u.data=f,t=u}else{if(1!==u.nodeType){u=i(u);continue}n(u)||"BR"===u.nodeName?(t&&(t.data=t.data.replace(/ $/,"")),t=null,c=!1):o(u)&&(t=null,c=!0)}var d=a(l,u);l=u,u=d}t&&(t.data=t.data.replace(/ $/,""),t.data||i(t))}}},{"block-elements":5,"void-elements":8}],8:[function(e,n,t){n.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},{}]},{},[1])(1)});
window.Fruum = window.Fruum || {};
window.Fruum.libs = window.Fruum.libs || {};
window.Fruum.libs.$ = $.noConflict(true);
window.Fruum.libs._ = _.noConflict();
window.Fruum.libs.Backbone = Backbone.noConflict();
window.Fruum.libs.Marionette = Marionette.noConflict();
window.Fruum.libs.io = window.io;
window.Fruum.libs.moment = window.moment;
window.Fruum.libs.Remarkable = window.Remarkable;
window.Fruum.libs.DOMPurify = window.DOMPurify;
window.Fruum.libs.toMarkdown = window.toMarkdown;

delete window.io;
delete window.moment;
delete window.Remarkable;
delete window.DOMPurify;
delete window.toMarkdown;
delete window.Marionette;
delete window.Mn;

if (window.___socket_io___)
  window.io = window.___socket_io___;

if (window.__momentjs__)
  window.moment = window.__momentjs__;

if (window.__remarkablejs__)
  window.Remarkable = window.__remarkablejs__;

if (window.__dompurify__)
  window.DOMPurify = window.__dompurify__;

if (window.__toMarkdown__)
  window.toMarkdown = window.__toMarkdown__;

if (window.__Marionette__)
  window.Marionette = window.__Marionette__;

if (window.__Mn__)
   window.Mn = window.__Mn__;

delete window.___socket_io___;
delete window.__momentjs__;
delete window.__remarkablejs__;
delete window.__dompurify__;
delete window.__toMarkdown__;
delete window.__Marionette__;
delete window.__Mn__;

if (window.__define__) {
  window.define = window.__define__;
  delete window.__define__;
}
if (window.__exports__) {
  window.exports = window.__exports__;
  delete window.__exports__;
}
(function() {
  'use strict';
  window.FruumData = window.FruumData || [];

  window.Fruum = window.Fruum || {};
  window.Fruum.require = window.Fruum.require || [];
  window.Fruum.models = window.Fruum.models || {};
  window.Fruum.collections = window.Fruum.collections || {};
  window.Fruum.utils = window.Fruum.utils || {};
  window.Fruum.emoji = window.Fruum.emoji || {
    symbols: {},
    convert: function(str) { return str; },
  };
  window.Fruum.plugins = window.Fruum.plugins || [];
  window.Fruum.processors = window.Fruum.processors || {};
  window.Fruum.processors.post = [];
  window.Fruum.processors.transmit = [];
  window.Fruum.processors.receive = [];
  window.Fruum.processors.init = [];
  window.Fruum.processors.persona = [];
  window.Fruum.messages = {
    private: 'Only administrators will be able to see this!',
    public: 'Everybody will be able to see this!',
    report: 'Report this post as inappropriate?',
    move: 'Move entire stream under new category?',
  };
  window.Fruum.permission = {
    0: 'everyone',
    1: 'logged-in users',
    2: 'administrators',
  };
  window.Fruum.usage = {
    0: 'discussion',
    1: 'helpdesk',
    2: 'blog',
    3: 'chat',
    4: 'categories only',
  };
})();
/******************************************************************************
Easing jquery plugin
*******************************************************************************/

(function() {
  'use strict';
  window.Fruum.require.push(function () {
    var $ = Fruum.libs.$,
        _ = Fruum.libs._;

    $.easing = _.extend($.easing, {
    	easeInQuad: function (x, t, b, c, d) {
    		return c*(t/=d)*t + b;
    	},
    	easeOutQuad: function (x, t, b, c, d) {
    		return -c *(t/=d)*(t-2) + b;
    	},
    	easeInOutQuad: function (x, t, b, c, d) {
    		if ((t/=d/2) < 1) return c/2*t*t + b;
    		return -c/2 * ((--t)*(t-2) - 1) + b;
    	},
    	easeInCubic: function (x, t, b, c, d) {
    		return c*(t/=d)*t*t + b;
    	},
    	easeOutCubic: function (x, t, b, c, d) {
    		return c*((t=t/d-1)*t*t + 1) + b;
    	},
    	easeInOutCubic: function (x, t, b, c, d) {
    		if ((t/=d/2) < 1) return c/2*t*t*t + b;
    		return c/2*((t-=2)*t*t + 2) + b;
    	},
    	easeInQuart: function (x, t, b, c, d) {
    		return c*(t/=d)*t*t*t + b;
    	},
    	easeOutQuart: function (x, t, b, c, d) {
    		return -c * ((t=t/d-1)*t*t*t - 1) + b;
    	},
    	easeInOutQuart: function (x, t, b, c, d) {
    		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    		return -c/2 * ((t-=2)*t*t*t - 2) + b;
    	},
    	easeInQuint: function (x, t, b, c, d) {
    		return c*(t/=d)*t*t*t*t + b;
    	},
    	easeOutQuint: function (x, t, b, c, d) {
    		return c*((t=t/d-1)*t*t*t*t + 1) + b;
    	},
    	easeInOutQuint: function (x, t, b, c, d) {
    		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    		return c/2*((t-=2)*t*t*t*t + 2) + b;
    	},
    	easeInSine: function (x, t, b, c, d) {
    		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    	},
    	easeOutSine: function (x, t, b, c, d) {
    		return c * Math.sin(t/d * (Math.PI/2)) + b;
    	},
    	easeInOutSine: function (x, t, b, c, d) {
    		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    	},
    	easeInExpo: function (x, t, b, c, d) {
    		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    	},
    	easeOutExpo: function (x, t, b, c, d) {
    		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    	},
    	easeInOutExpo: function (x, t, b, c, d) {
    		if (t==0) return b;
    		if (t==d) return b+c;
    		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    	},
    	easeInCirc: function (x, t, b, c, d) {
    		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    	},
    	easeOutCirc: function (x, t, b, c, d) {
    		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    	},
    	easeInOutCirc: function (x, t, b, c, d) {
    		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    	},
    	easeInElastic: function (x, t, b, c, d) {
    		var s=1.70158;var p=0;var a=c;
    		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    		if (a < Math.abs(c)) { a=c; var s=p/4; }
    		else var s = p/(2*Math.PI) * Math.asin (c/a);
    		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    	},
    	easeOutElastic: function (x, t, b, c, d) {
    		var s=1.70158;var p=0;var a=c;
    		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    		if (a < Math.abs(c)) { a=c; var s=p/4; }
    		else var s = p/(2*Math.PI) * Math.asin (c/a);
    		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    	},
    	easeInOutElastic: function (x, t, b, c, d) {
    		var s=1.70158;var p=0;var a=c;
    		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    		if (a < Math.abs(c)) { a=c; var s=p/4; }
    		else var s = p/(2*Math.PI) * Math.asin (c/a);
    		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    	},
    	easeInBack: function (x, t, b, c, d, s) {
    		if (s == undefined) s = 1.70158;
    		return c*(t/=d)*t*((s+1)*t - s) + b;
    	},
    	easeOutBack: function (x, t, b, c, d, s) {
    		if (s == undefined) s = 1.70158;
    		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    	},
    	easeInOutBack: function (x, t, b, c, d, s) {
    		if (s == undefined) s = 1.70158;
    		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    	},
    	easeInBounce: function (x, t, b, c, d) {
    		return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    	},
    	easeOutBounce: function (x, t, b, c, d) {
    		if ((t/=d) < (1/2.75)) {
    			return c*(7.5625*t*t) + b;
    		} else if (t < (2/2.75)) {
    			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    		} else if (t < (2.5/2.75)) {
    			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    		} else {
    			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    		}
    	},
    	easeInOutBounce: function (x, t, b, c, d) {
    		if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
    		return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    	}
    });
  });
})();
/******************************************************************************
Field selection jquery plugin
*******************************************************************************/

(function() {
  'use strict';
  window.Fruum.require.push(function () {
    var $ = Fruum.libs.$;
    /*
     * $ plugin: fieldSelection - v0.1.1 - last change: 2006-12-16
     * (c) 2006 Alex Brem <alex@0xab.cd> - http://blog.0xab.cd
     */
  	var fieldSelection = {
  		getSelection: function() {
  			var e = (this.jquery) ? this[0] : this;
        if ('selectionStart' in e) {
          var l = e.selectionEnd - e.selectionStart;
          return { start: e.selectionStart, end: e.selectionEnd, length: l, text: e.value.substr(e.selectionStart, l) };
        }
        else if (document.selection) {
          e.focus();
          var r = document.selection.createRange();
          if (r === null) {
            return { start: 0, end: e.value.length, length: 0 }
          }
          var re = e.createTextRange();
          var rc = re.duplicate();
          re.moveToBookmark(r.getBookmark());
          rc.setEndPoint('EndToStart', re);
          return { start: rc.text.length, end: rc.text.length + r.text.length, length: r.text.length, text: r.text };
        }
        else return null;
  		},
  		replaceSelection: function() {
  			var e = (this.jquery) ? this[0] : this;
  			var text = arguments[0] || '';
        if ('selectionStart' in e) {
          e.value = e.value.substr(0, e.selectionStart) + text + e.value.substr(e.selectionEnd, e.value.length);
          return this;
        }
        else if (document.selection) {
          e.focus();
          document.selection.createRange().text = text;
          return this;
        }
        else {
          e.value += text;
          return $(e);
        }
  		}
  	};
  	$.each(fieldSelection, function(i) { $.fn[i] = this; });
  });
})();
/******************************************************************************
Nanoscroller plugin
*******************************************************************************/

(function() {
  'use strict';
  window.Fruum.require.push(function () {
    var $ = Fruum.libs.$,
        jQuery = $;
    /*! nanoScrollerJS - v0.8.7 - 2015
    * http://jamesflorentino.github.com/nanoScrollerJS/
    * Copyright (c) 2015 James Florentino; Licensed MIT */
    (function(factory) {
      return factory(jQuery, window, document);
    })(function($, window, document) {
      "use strict";
      var BROWSER_IS_IE7, BROWSER_SCROLLBAR_WIDTH, DOMSCROLL, DOWN, DRAG, ENTER, KEYDOWN, KEYUP, MOUSEDOWN, MOUSEENTER, MOUSEMOVE, MOUSEUP, MOUSEWHEEL, NanoScroll, PANEDOWN, RESIZE, SCROLL, SCROLLBAR, TOUCHMOVE, UP, WHEEL, cAF, defaults, getBrowserScrollbarWidth, hasTransform, isFFWithBuggyScrollbar, rAF, transform, _elementStyle, _prefixStyle, _vendor;
      defaults = {

        /**
          a classname for the pane element.
          @property paneClass
          @type String
          @default 'nano-pane'
         */
        paneClass: 'nano-pane',

        /**
          a classname for the slider element.
          @property sliderClass
          @type String
          @default 'nano-slider'
         */
        sliderClass: 'nano-slider',

        /**
          a classname for the content element.
          @property contentClass
          @type String
          @default 'nano-content'
         */
        contentClass: 'nano-content',

        /**
          a classname for enabled mode
          @property enabledClass
          @type String
          @default 'has-scrollbar'
         */
        enabledClass: 'has-scrollbar',

        /**
          a classname for flashed mode
          @property flashedClass
          @type String
          @default 'flashed'
         */
        flashedClass: 'flashed',

        /**
          a classname for active mode
          @property activeClass
          @type String
          @default 'active'
         */
        activeClass: 'active',

        /**
          a setting to enable native scrolling in iOS devices.
          @property iOSNativeScrolling
          @type Boolean
          @default false
         */
        iOSNativeScrolling: false,

        /**
          a setting to prevent the rest of the page being
          scrolled when user scrolls the `.content` element.
          @property preventPageScrolling
          @type Boolean
          @default false
         */
        preventPageScrolling: false,

        /**
          a setting to disable binding to the resize event.
          @property disableResize
          @type Boolean
          @default false
         */
        disableResize: false,

        /**
          a setting to make the scrollbar always visible.
          @property alwaysVisible
          @type Boolean
          @default false
         */
        alwaysVisible: false,

        /**
          a default timeout for the `flash()` method.
          @property flashDelay
          @type Number
          @default 1500
         */
        flashDelay: 1500,

        /**
          a minimum height for the `.slider` element.
          @property sliderMinHeight
          @type Number
          @default 20
         */
        sliderMinHeight: 20,

        /**
          a maximum height for the `.slider` element.
          @property sliderMaxHeight
          @type Number
          @default null
         */
        sliderMaxHeight: null,

        /**
          an alternate document context.
          @property documentContext
          @type Document
          @default null
         */
        documentContext: null,

        /**
          an alternate window context.
          @property windowContext
          @type Window
          @default null
         */
        windowContext: null
      };

      /**
        @property SCROLLBAR
        @type String
        @static
        @final
        @private
       */
      SCROLLBAR = 'scrollbar';

      /**
        @property SCROLL
        @type String
        @static
        @final
        @private
       */
      SCROLL = 'scroll';

      /**
        @property MOUSEDOWN
        @type String
        @final
        @private
       */
      MOUSEDOWN = 'mousedown';

      /**
        @property MOUSEENTER
        @type String
        @final
        @private
       */
      MOUSEENTER = 'mouseenter';

      /**
        @property MOUSEMOVE
        @type String
        @static
        @final
        @private
       */
      MOUSEMOVE = 'mousemove';

      /**
        @property MOUSEWHEEL
        @type String
        @final
        @private
       */
      MOUSEWHEEL = 'mousewheel';

      /**
        @property MOUSEUP
        @type String
        @static
        @final
        @private
       */
      MOUSEUP = 'mouseup';

      /**
        @property RESIZE
        @type String
        @final
        @private
       */
      RESIZE = 'resize';

      /**
        @property DRAG
        @type String
        @static
        @final
        @private
       */
      DRAG = 'drag';

      /**
        @property ENTER
        @type String
        @static
        @final
        @private
       */
      ENTER = 'enter';

      /**
        @property UP
        @type String
        @static
        @final
        @private
       */
      UP = 'up';

      /**
        @property PANEDOWN
        @type String
        @static
        @final
        @private
       */
      PANEDOWN = 'panedown';

      /**
        @property DOMSCROLL
        @type String
        @static
        @final
        @private
       */
      DOMSCROLL = 'DOMMouseScroll';

      /**
        @property DOWN
        @type String
        @static
        @final
        @private
       */
      DOWN = 'down';

      /**
        @property WHEEL
        @type String
        @static
        @final
        @private
       */
      WHEEL = 'wheel';

      /**
        @property KEYDOWN
        @type String
        @static
        @final
        @private
       */
      KEYDOWN = 'keydown';

      /**
        @property KEYUP
        @type String
        @static
        @final
        @private
       */
      KEYUP = 'keyup';

      /**
        @property TOUCHMOVE
        @type String
        @static
        @final
        @private
       */
      TOUCHMOVE = 'touchmove';

      /**
        @property BROWSER_IS_IE7
        @type Boolean
        @static
        @final
        @private
       */
      BROWSER_IS_IE7 = window.navigator.appName === 'Microsoft Internet Explorer' && /msie 7./i.test(window.navigator.appVersion) && window.ActiveXObject;

      /**
        @property BROWSER_SCROLLBAR_WIDTH
        @type Number
        @static
        @default null
        @private
       */
      BROWSER_SCROLLBAR_WIDTH = null;
      rAF = window.requestAnimationFrame;
      cAF = window.cancelAnimationFrame;
      _elementStyle = document.createElement('div').style;
      _vendor = (function() {
        var i, transform, vendor, vendors, _i, _len;
        vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'];
        for (i = _i = 0, _len = vendors.length; _i < _len; i = ++_i) {
          vendor = vendors[i];
          transform = vendors[i] + 'ransform';
          if (transform in _elementStyle) {
            return vendors[i].substr(0, vendors[i].length - 1);
          }
        }
        return false;
      })();
      _prefixStyle = function(style) {
        if (_vendor === false) {
          return false;
        }
        if (_vendor === '') {
          return style;
        }
        return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
      };
      transform = _prefixStyle('transform');
      hasTransform = transform !== false;

      /**
        Returns browser's native scrollbar width
        @method getBrowserScrollbarWidth
        @return {Number} the scrollbar width in pixels
        @static
        @private
       */
      getBrowserScrollbarWidth = function() {
        var outer, outerStyle, scrollbarWidth;
        outer = document.createElement('div');
        outerStyle = outer.style;
        outerStyle.position = 'absolute';
        outerStyle.width = '100px';
        outerStyle.height = '100px';
        outerStyle.overflow = SCROLL;
        outerStyle.top = '-9999px';
        document.body.appendChild(outer);
        scrollbarWidth = outer.offsetWidth - outer.clientWidth;
        document.body.removeChild(outer);
        return scrollbarWidth;
      };
      isFFWithBuggyScrollbar = function() {
        var isOSXFF, ua, version;
        ua = window.navigator.userAgent;
        isOSXFF = /(?=.+Mac OS X)(?=.+Firefox)/.test(ua);
        if (!isOSXFF) {
          return false;
        }
        version = /Firefox\/\d{2}\./.exec(ua);
        if (version) {
          version = version[0].replace(/\D+/g, '');
        }
        return isOSXFF && +version > 23;
      };

      /**
        @class NanoScroll
        @param element {HTMLElement|Node} the main element
        @param options {Object} nanoScroller's options
        @constructor
       */
      NanoScroll = (function() {
        function NanoScroll(el, options) {
          this.el = el;
          this.options = options;
          BROWSER_SCROLLBAR_WIDTH || (BROWSER_SCROLLBAR_WIDTH = getBrowserScrollbarWidth());
          this.$el = $(this.el);
          this.doc = $(this.options.documentContext || document);
          this.win = $(this.options.windowContext || window);
          this.body = this.doc.find('body');
          this.$content = this.$el.children("." + this.options.contentClass);
          this.$content.attr('tabindex', this.options.tabIndex || 0);
          this.content = this.$content[0];
          this.previousPosition = 0;
          if (this.options.iOSNativeScrolling && (this.el.style.WebkitOverflowScrolling != null)) {
            this.nativeScrolling();
          } else {
            this.generate();
          }
          this.createEvents();
          this.addEvents();
          this.reset();
        }


        /**
          Prevents the rest of the page being scrolled
          when user scrolls the `.nano-content` element.
          @method preventScrolling
          @param event {Event}
          @param direction {String} Scroll direction (up or down)
          @private
         */

        NanoScroll.prototype.preventScrolling = function(e, direction) {
          if (!this.isActive) {
            return;
          }
          if (e.type === DOMSCROLL) {
            if (direction === DOWN && e.originalEvent.detail > 0 || direction === UP && e.originalEvent.detail < 0) {
              e.preventDefault();
            }
          } else if (e.type === MOUSEWHEEL) {
            if (!e.originalEvent || !e.originalEvent.wheelDelta) {
              return;
            }
            if (direction === DOWN && e.originalEvent.wheelDelta < 0 || direction === UP && e.originalEvent.wheelDelta > 0) {
              e.preventDefault();
            }
          }
        };


        /**
          Enable iOS native scrolling
          @method nativeScrolling
          @private
         */

        NanoScroll.prototype.nativeScrolling = function() {
          this.$content.css({
            WebkitOverflowScrolling: 'touch'
          });
          this.iOSNativeScrolling = true;
          this.isActive = true;
        };


        /**
          Updates those nanoScroller properties that
          are related to current scrollbar position.
          @method updateScrollValues
          @private
         */

        NanoScroll.prototype.updateScrollValues = function() {
          var content, direction;
          content = this.content;
          this.maxScrollTop = content.scrollHeight - content.clientHeight;
          this.prevScrollTop = this.contentScrollTop || 0;
          this.contentScrollTop = content.scrollTop;
          direction = this.contentScrollTop > this.previousPosition ? "down" : this.contentScrollTop < this.previousPosition ? "up" : "same";
          this.previousPosition = this.contentScrollTop;
          if (direction !== "same") {
            this.$el.trigger('update', {
              position: this.contentScrollTop,
              maximum: this.maxScrollTop,
              direction: direction
            });
          }
          if (!this.iOSNativeScrolling) {
            this.maxSliderTop = this.paneHeight - this.sliderHeight;
            this.sliderTop = this.maxScrollTop === 0 ? 0 : this.contentScrollTop * this.maxSliderTop / this.maxScrollTop;
          }
        };


        /**
          Updates CSS styles for current scroll position.
          Uses CSS 2d transfroms and `window.requestAnimationFrame` if available.
          @method setOnScrollStyles
          @private
         */

        NanoScroll.prototype.setOnScrollStyles = function() {
          var cssValue;
          if (hasTransform) {
            cssValue = {};
            cssValue[transform] = "translate(0, " + this.sliderTop + "px)";
          } else {
            cssValue = {
              top: this.sliderTop
            };
          }
          if (rAF) {
            if (cAF && this.scrollRAF) {
              cAF(this.scrollRAF);
            }
            this.scrollRAF = rAF((function(_this) {
              return function() {
                _this.scrollRAF = null;
                return _this.slider.css(cssValue);
              };
            })(this));
          } else {
            this.slider.css(cssValue);
          }
        };


        /**
          Creates event related methods
          @method createEvents
          @private
         */

        NanoScroll.prototype.createEvents = function() {
          this.events = {
            down: (function(_this) {
              return function(e) {
                _this.isBeingDragged = true;
                _this.offsetY = e.pageY - _this.slider.offset().top;
                if (!_this.slider.is(e.target)) {
                  _this.offsetY = 0;
                }
                _this.pane.addClass(_this.options.activeClass);
                _this.doc.bind(MOUSEMOVE, _this.events[DRAG]).bind(MOUSEUP, _this.events[UP]);
                _this.body.bind(MOUSEENTER, _this.events[ENTER]);
                return false;
              };
            })(this),
            drag: (function(_this) {
              return function(e) {
                _this.sliderY = e.pageY - _this.$el.offset().top - _this.paneTop - (_this.offsetY || _this.sliderHeight * 0.5);
                _this.scroll();
                if (_this.contentScrollTop >= _this.maxScrollTop && _this.prevScrollTop !== _this.maxScrollTop) {
                  _this.$el.trigger('scrollend');
                } else if (_this.contentScrollTop === 0 && _this.prevScrollTop !== 0) {
                  _this.$el.trigger('scrolltop');
                }
                return false;
              };
            })(this),
            up: (function(_this) {
              return function(e) {
                _this.isBeingDragged = false;
                _this.pane.removeClass(_this.options.activeClass);
                _this.doc.unbind(MOUSEMOVE, _this.events[DRAG]).unbind(MOUSEUP, _this.events[UP]);
                _this.body.unbind(MOUSEENTER, _this.events[ENTER]);
                return false;
              };
            })(this),
            resize: (function(_this) {
              return function(e) {
                _this.reset();
              };
            })(this),
            panedown: (function(_this) {
              return function(e) {
                _this.sliderY = (e.offsetY || e.originalEvent.layerY) - (_this.sliderHeight * 0.5);
                _this.scroll();
                _this.events.down(e);
                return false;
              };
            })(this),
            scroll: (function(_this) {
              return function(e) {
                _this.updateScrollValues();
                if (_this.isBeingDragged) {
                  return;
                }
                if (!_this.iOSNativeScrolling) {
                  _this.sliderY = _this.sliderTop;
                  _this.setOnScrollStyles();
                }
                if (e == null) {
                  return;
                }
                if (_this.contentScrollTop >= _this.maxScrollTop) {
                  if (_this.options.preventPageScrolling) {
                    _this.preventScrolling(e, DOWN);
                  }
                  if (_this.prevScrollTop !== _this.maxScrollTop) {
                    _this.$el.trigger('scrollend');
                  }
                } else if (_this.contentScrollTop === 0) {
                  if (_this.options.preventPageScrolling) {
                    _this.preventScrolling(e, UP);
                  }
                  if (_this.prevScrollTop !== 0) {
                    _this.$el.trigger('scrolltop');
                  }
                }
              };
            })(this),
            wheel: (function(_this) {
              return function(e) {
                var delta;
                if (e == null) {
                  return;
                }
                delta = e.delta || e.wheelDelta || (e.originalEvent && e.originalEvent.wheelDelta) || -e.detail || (e.originalEvent && -e.originalEvent.detail);
                if (delta) {
                  _this.sliderY += -delta / 3;
                }
                _this.scroll();
                return false;
              };
            })(this),
            enter: (function(_this) {
              return function(e) {
                var _ref;
                if (!_this.isBeingDragged) {
                  return;
                }
                if ((e.buttons || e.which) !== 1) {
                  return (_ref = _this.events)[UP].apply(_ref, arguments);
                }
              };
            })(this)
          };
        };


        /**
          Adds event listeners with jQuery.
          @method addEvents
          @private
         */

        NanoScroll.prototype.addEvents = function() {
          var events;
          this.removeEvents();
          events = this.events;
          if (!this.options.disableResize) {
            this.win.bind(RESIZE, events[RESIZE]);
          }
          if (!this.iOSNativeScrolling) {
            this.slider.bind(MOUSEDOWN, events[DOWN]);
            this.pane.bind(MOUSEDOWN, events[PANEDOWN]).bind("" + MOUSEWHEEL + " " + DOMSCROLL, events[WHEEL]);
          }
          this.$content.bind("" + SCROLL + " " + MOUSEWHEEL + " " + DOMSCROLL + " " + TOUCHMOVE, events[SCROLL]);
        };


        /**
          Removes event listeners with jQuery.
          @method removeEvents
          @private
         */

        NanoScroll.prototype.removeEvents = function() {
          var events;
          events = this.events;
          this.win.unbind(RESIZE, events[RESIZE]);
          if (!this.iOSNativeScrolling) {
            this.slider.unbind();
            this.pane.unbind();
          }
          this.$content.unbind("" + SCROLL + " " + MOUSEWHEEL + " " + DOMSCROLL + " " + TOUCHMOVE, events[SCROLL]);
        };


        /**
          Generates nanoScroller's scrollbar and elements for it.
          @method generate
          @chainable
          @private
         */

        NanoScroll.prototype.generate = function() {
          var contentClass, cssRule, currentPadding, options, pane, paneClass, sliderClass;
          options = this.options;
          paneClass = options.paneClass, sliderClass = options.sliderClass, contentClass = options.contentClass;
          if (!(pane = this.$el.children("." + paneClass)).length && !pane.children("." + sliderClass).length) {
            this.$el.append("<div class=\"" + paneClass + "\"><div class=\"" + sliderClass + "\" /></div>");
          }
          this.pane = this.$el.children("." + paneClass);
          this.slider = this.pane.find("." + sliderClass);
          if (BROWSER_SCROLLBAR_WIDTH === 0 && isFFWithBuggyScrollbar()) {
            currentPadding = window.getComputedStyle(this.content, null).getPropertyValue('padding-right').replace(/[^0-9.]+/g, '');
            cssRule = {
              right: -14,
              paddingRight: +currentPadding + 14
            };
          } else if (BROWSER_SCROLLBAR_WIDTH) {
            cssRule = {
              right: -BROWSER_SCROLLBAR_WIDTH,
              paddingRight: BROWSER_SCROLLBAR_WIDTH
            };
            this.$el.addClass(options.enabledClass);
          }
          if (cssRule != null) {
            this.$content.css(cssRule);
          }
          return this;
        };


        /**
          @method restore
          @private
         */

        NanoScroll.prototype.restore = function() {
          this.stopped = false;
          if (!this.iOSNativeScrolling) {
            this.pane.show();
          }
          this.addEvents();
        };


        /**
          Resets nanoScroller's scrollbar.
          @method reset
          @chainable
          @example
              $(".nano").nanoScroller();
         */

        NanoScroll.prototype.reset = function() {
          var content, contentHeight, contentPosition, contentStyle, contentStyleOverflowY, paneBottom, paneHeight, paneOuterHeight, paneTop, parentMaxHeight, right, sliderHeight;
          if (this.iOSNativeScrolling) {
            this.contentHeight = this.content.scrollHeight;
            return;
          }
          if (!this.$el.find("." + this.options.paneClass).length) {
            this.generate().stop();
          }
          if (this.stopped) {
            this.restore();
          }
          content = this.content;
          contentStyle = content.style;
          contentStyleOverflowY = contentStyle.overflowY;
          if (BROWSER_IS_IE7) {
            this.$content.css({
              height: this.$content.height()
            });
          }
          contentHeight = content.scrollHeight + BROWSER_SCROLLBAR_WIDTH;
          parentMaxHeight = parseInt(this.$el.css("max-height"), 10);
          if (parentMaxHeight > 0) {
            this.$el.height("");
            this.$el.height(content.scrollHeight > parentMaxHeight ? parentMaxHeight : content.scrollHeight);
          }
          paneHeight = this.pane.outerHeight(false);
          paneTop = parseInt(this.pane.css('top'), 10);
          paneBottom = parseInt(this.pane.css('bottom'), 10);
          paneOuterHeight = paneHeight + paneTop + paneBottom;
          sliderHeight = Math.round(paneOuterHeight / contentHeight * paneHeight);
          if (sliderHeight < this.options.sliderMinHeight) {
            sliderHeight = this.options.sliderMinHeight;
          } else if ((this.options.sliderMaxHeight != null) && sliderHeight > this.options.sliderMaxHeight) {
            sliderHeight = this.options.sliderMaxHeight;
          }
          if (contentStyleOverflowY === SCROLL && contentStyle.overflowX !== SCROLL) {
            sliderHeight += BROWSER_SCROLLBAR_WIDTH;
          }
          this.maxSliderTop = paneOuterHeight - sliderHeight;
          this.contentHeight = contentHeight;
          this.paneHeight = paneHeight;
          this.paneOuterHeight = paneOuterHeight;
          this.sliderHeight = sliderHeight;
          this.paneTop = paneTop;
          this.slider.height(sliderHeight);
          this.events.scroll();
          this.pane.show();
          this.isActive = true;
          if ((content.scrollHeight === content.clientHeight) || (this.pane.outerHeight(true) >= content.scrollHeight && contentStyleOverflowY !== SCROLL)) {
            this.pane.hide();
            this.isActive = false;
          } else if (this.el.clientHeight === content.scrollHeight && contentStyleOverflowY === SCROLL) {
            this.slider.hide();
          } else {
            this.slider.show();
          }
          this.pane.css({
            opacity: (this.options.alwaysVisible ? 1 : ''),
            visibility: (this.options.alwaysVisible ? 'visible' : '')
          });
          contentPosition = this.$content.css('position');
          if (contentPosition === 'static' || contentPosition === 'relative') {
            right = parseInt(this.$content.css('right'), 10);
            if (right) {
              this.$content.css({
                right: '',
                marginRight: right
              });
            }
          }
          return this;
        };


        /**
          @method scroll
          @private
          @example
              $(".nano").nanoScroller({ scroll: 'top' });
         */

        NanoScroll.prototype.scroll = function() {
          if (!this.isActive) {
            return;
          }
          this.sliderY = Math.max(0, this.sliderY);
          this.sliderY = Math.min(this.maxSliderTop, this.sliderY);
          this.$content.scrollTop(this.maxScrollTop * this.sliderY / this.maxSliderTop);
          if (!this.iOSNativeScrolling) {
            this.updateScrollValues();
            this.setOnScrollStyles();
          }
          return this;
        };


        /**
          Scroll at the bottom with an offset value
          @method scrollBottom
          @param offsetY {Number}
          @chainable
          @example
              $(".nano").nanoScroller({ scrollBottom: value });
         */

        NanoScroll.prototype.scrollBottom = function(offsetY) {
          if (!this.isActive) {
            return;
          }
          this.$content.scrollTop(this.contentHeight - this.$content.height() - offsetY).trigger(MOUSEWHEEL);
          this.stop().restore();
          return this;
        };


        /**
          Scroll at the top with an offset value
          @method scrollTop
          @param offsetY {Number}
          @chainable
          @example
              $(".nano").nanoScroller({ scrollTop: value });
         */

        NanoScroll.prototype.scrollTop = function(offsetY) {
          if (!this.isActive) {
            return;
          }
          this.$content.scrollTop(+offsetY).trigger(MOUSEWHEEL);
          this.stop().restore();
          return this;
        };


        /**
          Scroll to an element
          @method scrollTo
          @param node {Node} A node to scroll to.
          @chainable
          @example
              $(".nano").nanoScroller({ scrollTo: $('#a_node') });
         */

        NanoScroll.prototype.scrollTo = function(node) {
          if (!this.isActive) {
            return;
          }
          this.scrollTop(this.$el.find(node).get(0).offsetTop);
          return this;
        };


        /**
          To stop the operation.
          This option will tell the plugin to disable all event bindings and hide the gadget scrollbar from the UI.
          @method stop
          @chainable
          @example
              $(".nano").nanoScroller({ stop: true });
         */

        NanoScroll.prototype.stop = function() {
          if (cAF && this.scrollRAF) {
            cAF(this.scrollRAF);
            this.scrollRAF = null;
          }
          this.stopped = true;
          this.removeEvents();
          if (!this.iOSNativeScrolling) {
            this.pane.hide();
          }
          return this;
        };


        /**
          Destroys nanoScroller and restores browser's native scrollbar.
          @method destroy
          @chainable
          @example
              $(".nano").nanoScroller({ destroy: true });
         */

        NanoScroll.prototype.destroy = function() {
          if (!this.stopped) {
            this.stop();
          }
          if (!this.iOSNativeScrolling && this.pane.length) {
            this.pane.remove();
          }
          if (BROWSER_IS_IE7) {
            this.$content.height('');
          }
          this.$content.removeAttr('tabindex');
          if (this.$el.hasClass(this.options.enabledClass)) {
            this.$el.removeClass(this.options.enabledClass);
            this.$content.css({
              right: ''
            });
          }
          return this;
        };


        /**
          To flash the scrollbar gadget for an amount of time defined in plugin settings (defaults to 1,5s).
          Useful if you want to show the user (e.g. on pageload) that there is more content waiting for him.
          @method flash
          @chainable
          @example
              $(".nano").nanoScroller({ flash: true });
         */

        NanoScroll.prototype.flash = function() {
          if (this.iOSNativeScrolling) {
            return;
          }
          if (!this.isActive) {
            return;
          }
          this.reset();
          this.pane.addClass(this.options.flashedClass);
          setTimeout((function(_this) {
            return function() {
              _this.pane.removeClass(_this.options.flashedClass);
            };
          })(this), this.options.flashDelay);
          return this;
        };

        return NanoScroll;

      })();
      $.fn.nanoScroller = function(settings) {
        return this.each(function() {
          var options, scrollbar;
          if (!(scrollbar = this.nanoscroller)) {
            options = $.extend({}, defaults, settings);
            this.nanoscroller = scrollbar = new NanoScroll(this, options);
          }
          if (settings && typeof settings === "object") {
            $.extend(scrollbar.options, settings);
            if (settings.scrollBottom != null) {
              return scrollbar.scrollBottom(settings.scrollBottom);
            }
            if (settings.scrollTop != null) {
              return scrollbar.scrollTop(settings.scrollTop);
            }
            if (settings.scrollTo) {
              return scrollbar.scrollTo(settings.scrollTo);
            }
            if (settings.scroll === 'bottom') {
              return scrollbar.scrollBottom(0);
            }
            if (settings.scroll === 'top') {
              return scrollbar.scrollTop(0);
            }
            if (settings.scroll && settings.scroll instanceof $) {
              return scrollbar.scrollTo(settings.scroll);
            }
            if (settings.stop) {
              return scrollbar.stop();
            }
            if (settings.destroy) {
              return scrollbar.destroy();
            }
            if (settings.flash) {
              return scrollbar.flash();
            }
          }
          return scrollbar.reset();
        });
      };
      $.fn.nanoScroller.Constructor = NanoScroll;
    });
  });
})();
/******************************************************************************
Emoji support
*******************************************************************************/

(function() {
  'use strict';

  function escape_re(re) {
    return re.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"); // eslint-disable-line
  }

  window.Fruum.emoji = {
    symbols: {
      ':wide-smile:': 'wide-smile',
      ':D': 'wide-smile',
      ':P': 'stuck-out-tongue',
      ':stuck-out-tongue:': 'stuck-out-tongue',
      ':tongue-out:': 'stuck-out-tongue',
      ':(': 'sad-face',
      ':sadface:': 'sad-face',
      'xO': 'astonished',
      ':astonished:': 'astonished',
      ':smiling-eyes-grinning:': 'smiling-eyes-grinning',
      ':tears-of-joy:': 'tears-of-joy',
      ':smiling-open-mouth:': 'smiling-open-mouth',
      ':smiling-eyes-n-open-mouth:': 'smiling-eyes-n-open-mouth',
      ':smiling-mouth-w-sweat:': 'smiling-mouth-w-sweat',
      ':smiling-mouth-tight-eyes:': 'smiling-mouth-tight-eyes',
      'xD': 'smiling-mouth-tight-eyes',
      ':angel-smile:': 'angel-smile',
      ':devil-smile:': 'devil-smile',
      ':yummy-delicious:': 'yummy-delicious',
      ':smiling-heart-eyes:': 'smiling-heart-eyes',
      ':)': 'smiling-mouth-smiling-eyes',
      ':cool:': 'cool',
      ':neutral:': 'neutral',
      ':all-neutral:': 'all-neutral',
      ':confused:': 'confused',
      ':kissing:': 'kissing',
      ':throw-a-kiss:': 'throw-a-kiss',
      ':smiling-kiss:': 'smiling-kiss',
      ':smirking:': 'smirking',
      ':bored:': 'bored',
      ':cold-sweat:': 'cold-sweat',
      ':deep-thought:': 'deep-thought',
      ':confounded:': 'confounded',
      ':relieved:': 'relieved',
      ':winking:': 'winking',
      ';)': 'winking',
      ';P': 'wink-out-tongue',
      ':wink-out-tongue:': 'wink-out-tongue',
      ':closed-eyes-out-tongue:': 'closed-eyes-out-tongue',
      'xP': 'closed-eyes-out-tongue',
      ':worried:': 'worried',
      ':angry:': 'angry',
      ':redface-angry:': 'redface-angry',
      ':crying:': 'crying',
      ':stand-strong:': 'stand-strong',
      ':triumphant:': 'triumphant',
      ':so-close-yet:': 'so-close-yet',
      ':frowning-open-mouth:': 'frowning-open-mouth',
      ':anguish:': 'anguish',
      ':fearful:': 'fearful',
      ':weary:': 'weary',
      ':sleepy:': 'sleepy',
      ':tired:': 'tired',
      ':show-teeth:': 'show-teeth',
      ':8': 'show-teeth',
      ':crying-loud:': 'crying-loud',
      ':open-mouth:': 'open-mouth',
      ':O': 'open-mouth',
      ':I': 'hushed',
      ':|': 'hushed',
      ':hushed:': 'hushed',
      ':cold-sweat-fear:': 'cold-sweat-fear',
      '8O': 'screaming',
      ':screaming-fear:': 'screaming',
      ':/': 'flushed',
      ':flushed:': 'flushed',
      ':z': 'sleeping',
      ':sleeping:': 'sleeping',
      ':dizzy:': 'dizzy',
      ':no-mouth:': 'no-mouth',
      ':doctor:': 'doctor',
      ':fist:': 'fist',
      ':hi-five:': 'hi-five',
      ':victory:': 'victory',
      ':hands-up:': 'hands-up',
      ':white-point-up:': 'white-point-up',
      ':white-point-down:': 'white-point-down',
      ':white-point-left:': 'white-point-left',
      ':white-point-right:': 'white-point-right',
      ':bro-fist:': 'bro-fist',
      ':wave-hand:': 'wave-hand',
      ':ok-hand:': 'ok-hand',
      ':thumbs-up:': 'thumbs-up',
      ':thumbs-down:': 'thumbs-down',
      ':hands-clap:': 'hands-clap',
      ':open-hands:': 'open-hands',
      ':eyes:': 'eyes',
      ':ears:': 'ears',
      ':nose:': 'nose',
      ':mouth:': 'mouth',
      ':tongue:': 'tongue',
      ':grin-cat-smile:': 'grin-cat-smile',
      ':smile-cat:': 'smile-cat',
      ':hearteyed-cat:': 'hearteyed-cat',
      ':smirk-cat:': 'smirk-cat',
      ':kiss-cat:': 'kiss-cat',
      ':pouting-cat:': 'pouting-cat',
      ':cry-cat:': 'cry-cat',
      ':weary-cat:': 'weary-cat',
      ':face-no-good:': 'face-no-good',
      ':face-ok:': 'face-ok',
      ':bow-deeply:': 'bow-deeply',
      ':see-noevil-monkey:': 'see-noevil-monkey',
      ':hear-noevil-monkey:': 'hear-noevil-monkey',
      ':speak-noevil-monkey:': 'speak-noevil-monkey',
      ':raise-one-hand:': 'raise-one-hand',
      ':face-frown:': 'face-frown',
      ':face-pouting:': 'face-pouting',
      ':praise-hands:': 'praise-hands',
    },
    convert: function(input) {
      return input.replace(window.Fruum.emoji.re, function(all, emoji) {
        if (window.Fruum.emoji.symbols[emoji]) {
          return all.replace(emoji, '<span data-fruumemoji="' + window.Fruum.emoji.symbols[emoji] + '"></span>');
        }
        return all;
      });
    },
  };

  var keys = [];
  for (var key in window.Fruum.emoji.symbols) {
    keys.push(escape_re(key));
  }
  window.Fruum.emoji.re = RegExp('(?:^|\\s)(' + keys.join('|') + ')', 'g');
})();
/******************************************************************************
Utilities
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    var remarkable = new Fruum.libs.Remarkable({
          html: true,
          breaks: true,
          linkify: true,
        }),
        sanitize = Fruum.libs.DOMPurify.sanitize,
        _ = Fruum.libs._;

    // custom validator
    if (remarkable.inline && remarkable.inline.validateLink) {
      remarkable.inline.__validateLink = remarkable.inline.validateLink;
      remarkable.inline.validateLink = function(url) {
        if (!remarkable.inline.__validateLink(url)) {
          // allow inline images
          return url.indexOf('data:image') == 0;
        }
        return true;
      };
    }

    var at_user = ['@[.+-_0-9A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6',
      '\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376',
      '-\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-',
      '\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0',
      '-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e-\u066f\u0671-\u06d3\u06d5',
      '\u06e5-\u06e6\u06ee-\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d',
      '-\u07a5\u07b1\u07ca-\u07ea\u07f4-\u07f5\u07fa\u0800-\u0815\u081a\u0824',
      '\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-',
      '\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f-\u0990\u0993-',
      '\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc-\u09dd\u09df-',
      '\u09e1\u09f0-\u09f1\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-',
      '\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a72',
      '-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2',
      '-\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0-\u0ae1\u0b05-\u0b0c\u0b0f-',
      '\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b5c',
      '-\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-',
      '\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae',
      '-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33',
      '\u0c35-\u0c39\u0c3d\u0c58-\u0c59\u0c60-\u0c61\u0c85-\u0c8c\u0c8e-',
      '\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0-\u0ce1',
      '\u0cf1-\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60',
      '-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd',
      '\u0dc0-\u0dc6\u0e01-\u0e30\u0e32-\u0e33\u0e40-\u0e46\u0e81-\u0e82',
      '\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3',
      '\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4',
      '\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000',
      '-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065-\u1066\u106e-',
      '\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-',
      '\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a',
      '-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5',
      '\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f',
      '\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea',
      '\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c',
      '\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa',
      '\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab',
      '\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-',
      '\u1b4b\u1b83-\u1ba0\u1bae-\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-',
      '\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5-\u1cf6\u1d00-',
      '\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-',
      '\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2',
      '-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2',
      '-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113',
      '\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-',
      '\u213f\u2145-\u2149\u214e\u2183-\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60',
      '-\u2ce4\u2ceb-\u2cee\u2cf2-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-',
      '\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8',
      '-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f',
      '\u3005-\u3006\u3031-\u3035\u303b-\u303c\u3041-\u3096\u309d-\u309f',
      '\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba',
      '\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd',
      '\ua500-\ua60c\ua610-\ua61f\ua62a-\ua62b\ua640-\ua66e\ua67f-\ua697',
      '\ua6a0-\ua6e5\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793',
      '\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822',
      '\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-',
      '\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44',
      '-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5-\uaab6\uaab9-',
      '\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06',
      '\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2',
      '\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9',
      '\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-',
      '\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50',
      '-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21',
      '-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2',
      '-\uffd7\uffda-\uffdc]+'].join('');

    var re_mention = new RegExp('(^|\\s)' + at_user, 'g'),
        re_autocomplete_user = new RegExp('\\B' + at_user + '$');

    // Escape regex
    Fruum.utils.escape_regex = function(re) {
      return re.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"); // eslint-disable-line
    };

    // --------------------------------- VISITS --------------------------------

    var visit_date = {}, visit_updates = {};
    Fruum.utils.resetVisits = function() {
      visit_date = {};
      visit_updates = {};
    };

    Fruum.utils.addVisitUpdate = function(view_id) {
      visit_updates[view_id] = true;
    };

    Fruum.utils.setVisitDate = function(view_id) {
      delete visit_updates[view_id];
      if (Fruum.user.anonymous) return;
      visit_date[view_id] = Date.now() - (Fruum.user.time_diff || 0);
    };

    Fruum.utils.isNewVisit = function(view_id, timestamp) {
      return visit_updates[view_id] ||
             (!Fruum.user.anonymous &&
             (timestamp > (visit_date[view_id] || Fruum.user.last_visit)) &&
             (timestamp < Fruum.user.server_now));
    };

    // --------------------------------- VIEWS --------------------------------

    // Make Marionette itemviews work without the parent div
    Fruum.utils.marionette_itemview_without_tag = function(view) {
      return view.extend({
        onRender: function() {
          this.$el = this.$el.children();
          this.$el.unwrap();
          this.setElement(this.$el);
        },
      });
    };

    // Item view with fade transition
    Fruum.utils.marionette_itemview_transition = function(view) {
      return view.extend({
        onBeforeAttach: function() {
          this.$el.css('opacity', 0);
        },
        onAttach: function() {
          this.$el.
            delay(this.__delay_transition || 10).
            animate({ opacity: 1 }, 200);
        },
      });
    };

    // ------------------------------- DISPLAY --------------------------------

    // Check if string is url
    Fruum.utils.isLink = function(url) {
      url = (url || '').trim().toLowerCase();
      return url.indexOf('http://') == 0 || url.indexOf('https://') == 0;
    };

    // Get initials from username
    Fruum.utils.getInitials = function(name) {
      name = (name || '').toUpperCase().split(' ');
      var response = '';
      for (var i = 0; i < name.length && i < 3; ++i) {
        if (name[i]) response += name[i][0];
      }
      return response;
    };

    // Print initials
    Fruum.utils.printInitials = function(initials) {
      return (initials || '').toUpperCase();
    };

    // Print tags
    Fruum.utils.tagify = function(text) {
      return text.replace(/\[(.*?)\]/g, function(a, b) { // eslint-disable-line
        return '<span class="fruum-tag" data-initials="' + b.toUpperCase()[0] + '">' + b + '</span>';
      });
    };

    // Highlight user mentions
    Fruum.utils.mentions = function(text) {
      text = text.replace(re_mention, function(matched) {
        var ret = '**' + matched.trim() + '**';
        if (matched[0] === '\n' || matched[0] === ' ') {
          ret = matched[0] + ret;
        }
        return ret;
      });
      return text;
    };

    // get autocomplete for @user
    Fruum.utils.autocompleteUser = function(text) {
      var m = (text || '').match(re_autocomplete_user);
      if (m) return m[0];
    };

    // get autocomplete for emoji
    Fruum.utils.autocompleteEmoji = function(text) {
      var m = (text || '').match(/\B:([\-+\w]*)$/); // eslint-disable-line
      if (m && m[0].length > 1) return m[0];
    };

    // XSS protect
    Fruum.utils.xssProtect = function(text) {
      text = text || '';
      // find code blocks
      text = text.replace(/```([^`]+)```/g, function(a, b) { return '```' + _.escape(b) + '```'; });
      text = sanitize(text);
      // revert code blocks
      text = text.replace(/```([^`]+)```/g, function(a, b) { return '```' + _.unescape(b) + '```'; });
      return text;
    };

    // Persona processor
    Fruum.utils.personaSays = function(payload) {
      // build all available responses
      var responses = [];
      _.each(Fruum.processors.persona, function(persona) {
        var response = persona(payload);
        if (response) responses.push(response);
      });
      if (!responses.length) responses.push({});
      // pick a random one
      var final = responses[_.random(0, responses.length - 1)];
      // add failsafes
      final.avatar_url = final.avatar_url || '';
      final.avatar_initials = final.avatar_initials || '';
      final.name = final.name || '';
      final.text = final.text || 'Least said sooner mended. Something went really wrong!';
      final.topic = final.topic || '';
      // do some variable processing
      var username = Fruum.user.displayname || final.default_username || 'user';
      final.text = final.text.
        replace(/<username>/g, username).
        replace(/<categoryname>/g, payload.categoryname || 'category').
        replace(/<search>/g, payload.search || '');
      return final;
    };

    // Markdown display
    Fruum.utils.print = function(post, attachments) {
      // remove escaping of > and ` used by markdown
      post = (post || '').replace(/&gt;/g, '>').replace(/&#x60;/g, '`');
      // process post through plugins
      post = Fruum.utils.chain(Fruum.processors.post, post);
      // emoji processing
      post = Fruum.emoji.convert(post);
      // user mentions processing
      post = Fruum.utils.mentions(post);
      // attachments processing
      if (attachments && attachments.length) {
        _.each(attachments, function(attachment) {
          if (attachment.type == 'image') {
            post = post.replace(
              new RegExp(Fruum.utils.escape_regex('[[' + attachment.type + ':' + attachment.name + ']]'), 'g'),
              '![' + attachment.name + '](' + attachment.data + ')'
            );
          }
        });
      }
      return remarkable.render(post);
    };

    Fruum.utils.printHeader = function(text) {
      // emojify
      text = Fruum.emoji.convert(_.escape(text || ''));
      return text;
    };

    Fruum.utils.printReaction = function(count) {
      if (!count) return '';
      if (count < 1000) return '' + count;
      return (count / 1000).toFixed(1) + 'K';
    };

    Fruum.utils.printReactionTooltip = function(action, reactions) {
      if (!reactions.length) return '';
      var users = _.without(reactions.slice(0), Fruum.user.username),
          ret = '', has_you = false, i;
      if (users.length != reactions.length) {
        has_you = true;
        users.unshift('you');
      }
      if (users.length > 5) {
        for (i = 0; i < 4; ++i) {
          ret += users[i] + ', ';
        }
        ret += users[4] + ' and ' + (users.length - 5) + ' more';
      } else if (users.length > 1) {
        for (i = 0; i < users.length - 2; ++i) {
          ret += users[i] + ', ';
        }
        ret += users[users.length - 2] + ' and ' + users[users.length - 1];
      } else {
        ret += users[0];
      }
      if (has_you) {
        ret += '. Click to revoke';
      }
      return action + ' by ' + ret;
    };

    // if message contains attachment
    Fruum.utils.usesAttachment = function(message, attachment) {
      return Boolean(message.match(new RegExp(Fruum.utils.escape_regex('[[' + attachment.type + ':' + attachment.name + ']]'), 'g')));
    };

    Fruum.utils.permaLink = function(doc_id, post_index) {
      var ret = Fruum.application.fullpage_url +
                (Fruum.application.pushstate ? '' : '#') +
                'v/' + doc_id;
      if (post_index > 0) ret += '/' + post_index;
      return ret;
    };

    Fruum.utils.printSummary = function(text) {
      text = Fruum.utils.print(text).
        replace(/(<h[123456]\b[^>]*>)[^<>]*(<\/h[123456]>)/gi, '').
        replace(/<(?:.|\n)*?>/gm, '').
        replace(/\[\[\b\S+?\b\]\]/g, ''); // eslint-disable-line

      if (text.length > 170) {
        text = text.substr(0, 170) + '...';
      }
      return text;
    };

    Fruum.utils.printSearch = function(text) {
      text = Fruum.utils.printSummary(text);
      // do some highlighting
      return text.replace(/\{\{\{(.+?)\}\}\}/g, '<span class="highlight">$1</span>');
    };

    Fruum.utils.printCategoryDescription = function(text) {
      text = Fruum.utils.print(text) || '';
      // remove <p> tag
      return text.replace(/<p>/g, '').replace(/<\/p>/g, '');
    };

    // ------------------------------- STRING ---------------------------------

    Fruum.utils.injectString = function(text, needle, position) {
      position = position || text.length;
      return text.substr(0, position) +
        needle + text.substr(position, text.length);
    };

    Fruum.utils.truncateString = function(text, startindex, endindex, needle) {
      needle = needle || '';
      return text.substr(0, startindex) + needle + text.substr(endindex);
    };

    Fruum.utils.padFactory = function(needle, count) {
      return (new Array(count + 1)).join(needle);
    };

    Fruum.utils.startsWith = function(text, prefix) {
      return text.indexOf(prefix) == 0;
    };

    Fruum.utils.endsWith = function(text, suffix) {
      if (text.length < suffix.length) return false;
      return text.lastIndexOf(suffix) == text.length - suffix.length;
    };

    Fruum.utils.setCaretPosition = function($el, caretPos) {
      var el = $el.get(0);
      if (!el) return;

      if (el.createTextRange) {
        var range = el.createTextRange();
        range.move('character', caretPos);
        range.select();
      } else if (el.selectionStart || el.selectionStart === 0) {
        el.focus();
        el.setSelectionRange(caretPos, caretPos);
      } else {
        el.focus();
      }
    };

    // ------------------------------- GENERIC --------------------------------

    // analyze url
    Fruum.utils.getLocation = function(href) {
      var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/); // eslint-disable-line
      if (match) {
        return {
          protocol: match[1],
          host: match[2],
          hostname: match[3],
          port: match[4],
          pathname: match[5],
          search: match[6],
          hash: match[7],
        };
      } else {
        return {
          protocol: '',
          host: '',
          hostname: '',
          port: '',
          pathname: '',
          search: '',
          hash: '',
        };
      }
    };

    // If computer is Mac or IOS
    Fruum.utils.isMacLike = function() {
      return (navigator.platform || '').match(/(Mac|iPhone|iPod|iPad)/i) ? true : false; // eslint-disable-line
    };

    // If computer is Mac
    Fruum.utils.isMac = function() {
      return (navigator.platform || '').match(/(Mac)/i) ? true : false; // eslint-disable-line
    };

    // If computer is Windows
    Fruum.utils.isWindows = function() {
      return (navigator.platform || '').match(/(Win)/i) ? true : false; // eslint-disable-line
    };

    // If computer is Linux
    Fruum.utils.isLinux = function() {
      return (navigator.platform || '').match(/(Linux)/i) ? true : false; // eslint-disable-line
    };

    // If computer is desktop
    Fruum.utils.isDesktop = function() {
      return (navigator.platform || '').match(/(Linux|Win|Mac)/i) ? true : false; // eslint-disable-line
    };

    // If browser is Chrome
    Fruum.utils.isChrome = function() {
      return !!window.chrome;
    };

    // print shortcut using mac/win modifier
    Fruum.utils.shortcutModifier = function(key) {
      return (Fruum.utils.isMacLike() ? 'Cmd' : 'Ctrl') + '+' + key;
    };

    // chain execute array of functions
    Fruum.utils.chain = function(fn_array, data, params) {
      // process post through plugins
      if (fn_array.length) {
        _.each(fn_array, function(fn) {
          data = fn(data, params);
        });
      }
      return data;
    };

    // session storage
    Fruum.utils.sessionStorage = function(key, value) {
      if (window.sessionStorage &&
          window.sessionStorage.setItem &&
          window.sessionStorage.getItem
      ) {
        try {
          if (value != undefined) window.sessionStorage.setItem(key, value);
          else return window.sessionStorage.getItem(key);
        } catch (err) {}
      }
    };

    // move categories/articles up/down
    Fruum.utils.orderUp = function(model, top) {
      if (!model || !model.collection) return;
      var collection = model.collection;
      var index = collection.models.indexOf(model);
      if (index <= 0) return;
      if (top) {
        var reorder = [{
              id: model.get('id'),
              order: 1,
            }],
            order = 1;

        collection.each(function(m) {
          if (m != model) {
            order++;
            reorder.push({
              id: m.get('id'),
              order: order,
            });
          }
        });
        _.each(reorder, function(entry) {
          Fruum.io.trigger('fruum:field', {
            id: entry.id, field: 'order', value: entry.order,
          });
        });
      } else {
        var prev_model = collection.models[index - 1];
        Fruum.io.trigger('fruum:field', {
          id: model.get('id'), field: 'order', value: prev_model.get('order'),
        });
        Fruum.io.trigger('fruum:field', {
          id: prev_model.get('id'), field: 'order', value: model.get('order'),
        });
      }
    };

    Fruum.utils.orderDown = function(model, bottom) {
      if (!model || !model.collection) return;
      var collection = model.collection;
      var index = collection.models.indexOf(model);
      if (index + 1 >= collection.models.length) return;
      if (bottom) {
        var reorder = [], order = 0;
        collection.each(function(m) {
          if (m != model) {
            order++;
            reorder.push({
              id: m.get('id'),
              order: order,
            });
          }
        });
        order++;
        reorder.push({
          id: model.get('id'),
          order: order,
        });
        _.each(reorder, function(entry) {
          Fruum.io.trigger('fruum:field', {
            id: entry.id, field: 'order', value: entry.order,
          });
        });
      } else {
        var next_model = collection.models[index + 1];
        Fruum.io.trigger('fruum:field', {
          id: model.get('id'), field: 'order', value: next_model.get('order'),
        });
        Fruum.io.trigger('fruum:field', {
          id: next_model.get('id'), field: 'order', value: model.get('order'),
        });
      }
    };

    Fruum.utils.resizeImage = function(base64, max_width, max_height, done) {
      var img = document.createElement('img');
      img.onload = function() {
        try {
          var width = img.width,
              height = img.height;
          if (width <= max_width && height <= max_height) {
            done(base64);
            return;
          }

          var canvas = document.createElement('canvas'),
              ctx = canvas.getContext('2d');

          ctx.drawImage(img, 0, 0);

          if (width > height) {
            if (width > max_width) {
              height *= max_width / width;
              width = max_width;
            }
          } else {
            if (height > max_height) {
              width *= max_height / height;
              height = max_height;
            }
          }
          canvas.width = width;
          canvas.height = height;
          ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          var mime = base64.indexOf('data:image/jpeg') == 0 ? 'image/jpeg' : 'image/png';
          done(canvas.toDataURL(mime));
        } catch (err) {
          done(base64);
        }
      };
      img.src = base64;
    };
  });
})();
/******************************************************************************
Models
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    var _ = Fruum.libs._;
    var Backbone = Fruum.libs.Backbone;

    // Document
    Fruum.models.Document = Backbone.Model.extend({
      defaults: {
        // document id
        id: '',
        // breadcrumb path
        breadcrumb: [],
        // document parent id
        parent: '',
        // document parent type
        parent_type: '',
        // category, thread, article, blog, post, bookmark, channel
        type: '',
        // creation date in unix timestamp
        created: 0,
        // last update date in unix timestamp
        updated: 0,
        // category or thread initials
        initials: '',
        // header e.g. category or thread/channel title
        header: '',
        // body e.g. description or post message or bookmark search query
        body: '',
        // optional thumbnail URL
        thumbnail: '',
        // if category/thread is sticky
        sticky: false,
        // permissions
        locked: false,
        visible: true,
        inappropriate: false,
        // 0: everyone, 1: logged-in, 2: admins
        permission: 0,
        // 0: discussion, 1: helpdesk, 2: blog, 3: chat, 4: categories
        usage: 0,
        // denormalized author details
        user_id: '',
        user_username: '',
        user_displayname: '',
        user_avatar: '',
        // reactions (array of usernames)
        react_up: [],
        react_down: [],
        // order
        order: 0,
        // total number of children
        children_count: 0,
        // if document is marked for deletion
        archived: false,
        // archived date unix timestamp
        archived_ts: 0,
        // tags
        tags: [],
        // attachments, array of [{ name: '', type: 'image', data: 'base64' }, ..]
        attachments: [],
        // metadata
        meta: {},
      },
    });

    // User profile
    Fruum.models.Profile = Backbone.Model.extend({
      defaults: {
        id: '',
        username: '',
        displayname: '',
        avatar: '',
        karma: 0,
        admin: false,
        blocked: false,
        joined: 0, // timestamp
        last_login: 0, // timestamp or 'online'.
        topics: 0,
        replies: 0,
      },
    });

    // UI state
    Fruum.models.UIState = Backbone.Model.extend({
      defaults: {
        breadcrumb: [],
        viewing: {},
        editing: {},
        online: {},

        total_entries: 0,
        viewing_from: 0,
        viewing_to: 0,
        jumpto_post: 0,

        search: '',
        loading: '',
        load_state: '',
        view_req: '',

        profile: '',
        profile_total_users: 0,
        interacting: false,
        searching: false,
        has_search_string: false,
        visible: false,
        connected: false,
        optimizing: 0,
        search_helper: false,
        updates_count: 0,

        navigation_height: 0,
        interactions_height: 0,
        content_height: 0,
        panel_height: 0,
      },
    });

    // User
    Fruum.user = {
      anonymous: true,
      admin: false,
    };

    Fruum.userUtils = {
      watch: function(docid) {
        if (!docid) return;
        Fruum.user.watch = Fruum.user.watch || [];
        if (Fruum.user.watch.indexOf(docid) < 0) {
          Fruum.user.watch.push(docid);
        }
      },
      unwatch: function(docid) {
        if (!docid || !Fruum.user.watch) return;
        var index = Fruum.user.watch.indexOf(docid);
        if (index >= 0) Fruum.user.watch.splice(index, 1);
      },
      isWatching: function(docid) {
        return Fruum.user.watch && Fruum.user.watch.indexOf(docid) >= 0;
      },
      hasNotification: function(docid) {
        return Fruum.user.notifications && Fruum.user.notifications.indexOf(docid) >= 0;
      },
      addNotification: function(docid) {
        if (!docid) return;
        Fruum.user.notifications = Fruum.user.notifications || [];
        if (Fruum.user.notifications.indexOf(docid) < 0) {
          Fruum.user.notifications.push(docid);
        }
      },
      removeNotification: function(docid) {
        if (!docid || !Fruum.user.notifications) return;
        var index = Fruum.user.notifications.indexOf(docid);
        if (index >= 0) Fruum.user.notifications.splice(index, 1);
      },
      countNotifications: function() {
        if (!Fruum.user.notifications) return 0;
        return Fruum.user.notifications.length;
      },
    };

    // Cross view communication channel
    Fruum.io = _.clone(Backbone.Events);
  });
})();
/******************************************************************************
Collections
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    var Backbone = Fruum.libs.Backbone;
    // collections
    Fruum.collections.Categories = Backbone.Collection.extend({
      model: Fruum.models.Document,
      comparator: 'order',
    });
    Fruum.collections.Threads = Backbone.Collection.extend({
      model: Fruum.models.Document,
      comparator: function(a, b) {
        return (b.get('sticky') - a.get('sticky')) ||
               (b.get('updated') - a.get('updated'));
      },
    });
    Fruum.collections.Articles = Backbone.Collection.extend({
      model: Fruum.models.Document,
      comparator: 'order',
    });
    Fruum.collections.Blogs = Backbone.Collection.extend({
      model: Fruum.models.Document,
      comparator: function(a, b) {
        return b.get('created') - a.get('created');
      },
    });
    Fruum.collections.Channels = Backbone.Collection.extend({
      model: Fruum.models.Document,
      comparator: 'header',
    });
    Fruum.collections.Posts = Backbone.Collection.extend({
      model: Fruum.models.Document,
      comparator: 'created',
    });
    Fruum.collections.Search = Backbone.Collection.extend({
      model: Fruum.models.Document,
    });
    Fruum.collections.Notifications = Backbone.Collection.extend({
      model: Fruum.models.Document,
    });
    Fruum.collections.ProfileTopics = Backbone.Collection.extend({
      model: Fruum.models.Document,
    });
    Fruum.collections.ProfileReplies = Backbone.Collection.extend({
      model: Fruum.models.Document,
    });
    Fruum.collections.ProfileUsers = Backbone.Collection.extend({
      model: Fruum.models.Profile,
    });
  });
})();
/******************************************************************************
Loader helper view
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var _ = Fruum.libs._,
        Marionette = Fruum.libs.Marionette;

    Fruum.views.LoadingView = Marionette.View.extend({
      template: '#fruum-template-loading',
      modelEvents: {
        'change:loading': 'onLoading',
      },
      initialize: function(options) {
        _.bindAll(this, 'onRender');
        this.$content = options.content;
      },
      onRender: function() {
        this.timer = null;
        this.$el.parent().stop(true, true).fadeIn(1);
        this.$content.stop(true, true).fadeOut(1);
      },
      onLoading: function() {
        var state = this.model.get('loading');
        if (state) {
          // default delay
          var delay = 1000;
          // semi fade out content panel
          if (state.slice(0, 5) == 'view:') {
            var id = state.slice(5),
                view_el = this.$content.find('[data-docid="' + id + '"]');
            this.$content.find('[data-docid]:not([data-docid="' + id + '"])').fadeTo(600, 0);
            if (view_el.length) {
              delay = 700;
              view_el.addClass('fruum-interactive-clicked').
                      animate({
                        'padding-top': '3em',
                        'padding-bottom': '3em',
                        'margin-top': '-2em',
                      }, 400).
                      animate({
                        'opacity': 0,
                      }, 300);
            } else {
              delay = 700;
            }
          }

          if (state == 'link' || state == 'connect' || state == 'search') {
            if (this.timer) {
              clearTimeout(this.timer);
              this.timer = null;
            }
            this.$el.parent().stop(true, true).fadeIn(1);
            this.$content.stop(true, true).fadeOut(1);
          } else {
            if (!this.timer) this.timer = setTimeout(this.onRender, delay);
          }
        } else {
          if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
          }
          this.$el.parent().stop(true, true).fadeOut('fast');
          // show content panel
          this.$content.stop(true, true).fadeTo(100, 1);
        }
      },
    });
  });
})();
/******************************************************************************
User profile view
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var $ = Fruum.libs.$,
        _ = Fruum.libs._,
        Backbone = Fruum.libs.Backbone,
        Marionette = Fruum.libs.Marionette,
        TRANSITION = Fruum.utils.marionette_itemview_transition,
        PAGE_SIZE = 50;

    // -------------------------------------------------------------------------

    var HeaderView = Marionette.View.extend({
      template: '#fruum-template-profile-header',
      modelEvents: { 'change': 'render' },
    });

    var MainCardView = Marionette.View.extend({
      template: '#fruum-template-profile-maincard',
      modelEvents: { 'change': 'render' },
    });

    var TabsView = Marionette.View.extend({
      template: '#fruum-template-profile-tabs',
      modelEvents: {
        'change:topics change:replies change:id': 'render',
      },
      ui: {
        tabs: '[data-tab]',
      },
      events: {
        'click @ui.tabs': 'onTab',
      },
      initialize: function(options) {
        this.controller = options.controller;
        this.ui_state = options.ui_state;
      },
      onAttach: function() {
        this.listenTo(Fruum.io, 'fruum:update_notify', this.render);
        this.listenTo(this.ui_state, 'change:profile_total_users', this.render);
        this.listenTo(this.controller, 'change:tab', this.highlightTab);
        this.onDomRefresh();
      },
      onDomRefresh: function() {
        var tab = this.controller.get('tab');
        if (!tab ||
            tab && !(this.$('[data-tab="' + tab + '"]').length)
        ) {
          if (this.templateContext().notifications) {
            this.controller.set('tab', 'notifications');
          } else {
            this.controller.set('tab', this.$('[data-tab]').eq(0).data('tab') || '');
          }
        } else {
          this.highlightTab();
        }
      },
      highlightTab: function() {
        var tab = this.controller.get('tab');
        this.ui.tabs.removeClass('fruum-active');
        this.$('[data-tab="' + tab + '"]').addClass('fruum-active');
      },
      onTab: function(event) {
        event.preventDefault();
        event.stopPropagation();
        var tab = $(event.target).closest('[data-tab]').data('tab');
        if (tab) {
          this.controller.set('tab', tab);
        }
      },
      templateContext: function() {
        var notifications = 0;
        if (Fruum.user.id == this.model.get('id')) {
          notifications = Fruum.userUtils.countNotifications();
        }
        return {
          notifications: notifications,
          users: this.ui_state.get('profile_total_users'),
        };
      },
    });

    var ActionsView = Marionette.View.extend({
      template: '#fruum-template-profile-actions',
      modelEvents: { 'change': 'render' },
      triggers: {
        'click [data-action="account:block"]': 'action:account:block',
        'click [data-action="account:unblock"]': 'action:account:unblock',
        'click [data-action="account:remove"]': 'action:account:remove',
      },
    });

    // -------------------------------------------------------------------------

    var DocumentView = TRANSITION(Marionette.View.extend({
      template: '#fruum-template-profile-document',
      ui: {
        navigate: '.fruum-js-navigate',
      },
      events: {
        'click @ui.navigate': 'onNavigate',
      },
      initialize: function(options) {
        this.templateContext = {
          is_notification: options.is_notification,
        };
      },
      onNavigate: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var id = this.model.get('id');
        if (this.model.get('type') === 'post') id = this.model.get('parent');
        Fruum.io.trigger('fruum:profile');
        Fruum.io.trigger('fruum:view', { id: id });
      },
    }));

    var DocumentsView = Marionette.CollectionView.extend({
      childView: DocumentView,
      initialize: function(options) {
        this.childViewOptions = {
          is_notification: options.is_notification,
        };
      },
      onAttach: function() {
        this.triggerMethod('resize');
        this.listenTo(this.collection, 'add remove reset', function() {
          this.triggerMethod('resize');
        });
      },
    });

    // -------------------------------------------------------------------------

    var UserView = TRANSITION(Marionette.View.extend({
      template: '#fruum-template-profile-user',
      events: {
        'click': 'onSelect',
      },
      modelEvents: {
        'change': 'render',
      },
      onSelect: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:profile', {
          id: this.model.get('id'),
          username: this.model.get('username'),
        });
      },
    }));

    var UsersView = Marionette.CollectionView.extend({
      childView: UserView,
      onAttach: function() {
        this.triggerMethod('resize');
        this.listenTo(this.collection, 'add remove reset', function() {
          this.triggerMethod('resize');
        });
      },
    });

    // -------------------------------------------------------------------------

    Fruum.views.ProfileView = Marionette.View.extend({
      template: '#fruum-template-profile-layout',
      regions: {
        header: '.fruum-js-profile-region-header',
        maincard: '.fruum-js-profile-region-maincard',
        tabs: '.fruum-js-profile-tabs',
        content: '.fruum-js-profile-content',
        actions: '.fruum-js-profile-actions',
      },
      ui: {
        navigation: '.fruum-js-profile-navigation',
        close: '[data-action="close"]',
        nano: '.nano',
      },
      events: {
        'click @ui.close': 'onClose',
      },
      initialize: function(options) {
        _.bindAll(this, 'resize', 'nextFeed');
        this.parent = options.parent;
        this.ui_state = options.ui_state;
        this.notifications = options.notifications;
        this.topics = options.topics;
        this.replies = options.replies;
        this.users = options.users;
        // profile controller model
        this.controller = new Backbone.Model({ tab: '' });
      },
      onAttach: function() {
        this.showChildView('header', new HeaderView({ model: this.model }));
        this.showChildView('maincard', new MainCardView({ model: this.model }));
        this.showChildView('tabs', new TabsView({
          model: this.model,
          controller: this.controller,
          ui_state: this.ui_state,
        }));
        this.showChildView('actions', new ActionsView({ model: this.model }));
        this.ui.nano.nanoScroller({
          preventPageScrolling: true,
          iOSNativeScrolling: true,
          disableResize: true,
        }).bind('scrollend', this.nextFeed);

        // show/hide panel
        var that = this;
        this.listenTo(this.ui_state, 'change:profile', function() {
          if (!this.ui_state.get('profile')) {
            that.topics.reset();
            that.replies.reset();
            that.users.reset();
            that.notifications.reset();
            if (that.ui_state.get('viewing').id) {
              Fruum.io.trigger('fruum:restore_view_route');
            } else {
              Fruum.io.trigger('fruum:view_default');
            }
            this.parent.fadeOut('fast', function() {
              that.parent.addClass('fruum-nodisplay');
            });
          } else if (!this.ui_state.previous('profile')) {
            // hide onboarding
            Fruum.io.trigger('fruum:set_onboard');
            this.parent.removeClass('fruum-nodisplay').fadeIn('fast', function() {
              that.$(that.regions.actions).toggle(that.canDisplayActions());
              that.resize();
            });
          } else {
            that.$(that.regions.actions).toggle(that.canDisplayActions());
            that.resize();
          }
        });
        this.listenTo(this.ui_state, 'change:connected', function() {
          // display the action area only if user is admin
          this.$(this.regions.actions).toggle(this.canDisplayActions());
          if (!this.parent.hasClass('fruum-nodisplay')) this.resize();
        });
        this.listenTo(Fruum.io, 'fruum:resize', this.resize);
        this.listenTo(this.controller, 'change:tab', this.renderContent);
        this.listenTo(this.model, 'change:id', function() {
          this.controller.set('tab', '');
        });
      },
      onClose: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.ui_state.set('profile', '');
      },
      onChildviewActionAccountBlock: function() {
        if (!Fruum.user.admin) return;
        Fruum.io.trigger('fruum:user:block', { id: this.model.get('id') });
        this.model.set('blocked', true);
        var user = this.users.get(this.model.get('id'));
        if (user) user.set('blocked', true);
      },
      onChildviewActionAccountUnblock: function() {
        if (!Fruum.user.admin) return;
        Fruum.io.trigger('fruum:user:unblock', { id: this.model.get('id') });
        this.model.set('blocked', false);
        var user = this.users.get(this.model.get('id'));
        if (user) user.set('blocked', false);
      },
      onChildviewActionAccountRemove: function() {
        if (!Fruum.user.admin) return;
        if (confirm('Are you sure you want to delete user @' + this.model.get('username') + '?')) {
          this.onClose();
          Fruum.io.trigger('fruum:user:remove', { id: this.model.get('id') });
          this.ui_state.set('profile_total_users', this.ui_state.get('profile_total_users') - 1);
        }
      },
      onChildviewResize: function() {
        this.resize();
      },
      canDisplayActions: function() {
        return Fruum.user.admin && this.model.get('id') != Fruum.user.id;
      },
      resize: function() {
        this.$(this.ui.nano).height(
          this.parent.height() - this.$(this.ui.navigation).outerHeight() -
          (this.canDisplayActions() ? this.$(this.regions.actions).outerHeight() : 0)
        ).nanoScroller({ reset: true });
      },
      nextFeed: function() {
        if (!this.model.get('id')) return;
        switch (this.controller.get('tab')) {
          case 'topics':
            Fruum.io.trigger('fruum:user:feed', {
              id: this.model.get('id'),
              feed: 'topics',
              from: this.topics.length,
              size: PAGE_SIZE,
            });
            break;
          case 'replies':
            Fruum.io.trigger('fruum:user:feed', {
              id: this.model.get('id'),
              feed: 'replies',
              from: this.replies.length,
              size: PAGE_SIZE,
            });
            break;
          case 'users':
            Fruum.io.trigger('fruum:user:list', {
              from: this.users.length,
              size: PAGE_SIZE,
            });
            break;
        }
      },
      renderContent: function() {
        switch (this.controller.get('tab')) {
          case 'topics':
            if (!this.topics.length) {
              Fruum.io.trigger('fruum:user:feed', {
                id: this.model.get('id'),
                feed: 'topics',
                from: 0,
                size: PAGE_SIZE,
              });
            }
            this.showChildView('content', new DocumentsView({
              collection: this.topics,
              ui_state: this.ui_state,
              is_notification: false,
            }));
            break;
          case 'replies':
            if (!this.replies.length) {
              Fruum.io.trigger('fruum:user:feed', {
                id: this.model.get('id'),
                feed: 'replies',
                from: 0,
                size: PAGE_SIZE,
              });
            }
            this.showChildView('content', new DocumentsView({
              collection: this.replies,
              ui_state: this.ui_state,
              is_notification: false,
            }));
            break;
          case 'notifications':
            if (Fruum.userUtils.countNotifications() != this.notifications.length) {
              Fruum.io.trigger('fruum:notifications', { ids: Fruum.user.notifications });
            }
            this.showChildView('content', new DocumentsView({
              collection: this.notifications,
              ui_state: this.ui_state,
              is_notification: true,
            }));
            break;
          case 'users':
            if (!this.users.length) {
              Fruum.io.trigger('fruum:user:list', {
                from: 0,
                size: PAGE_SIZE,
              });
            }
            this.showChildView('content', new UsersView({
              collection: this.users,
              ui_state: this.ui_state,
            }));
            break;
        }
        this.ui.nano.nanoScroller && this.ui.nano.nanoScroller({ scroll: 'top' });
        _.defer(this.resize);
      },
    });
  });
})();
/******************************************************************************
Breadcrumb view
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var $ = Fruum.libs.$,
        Marionette = Fruum.libs.Marionette;

    Fruum.views.BreadcrumbView = Marionette.View.extend({
      template: '#fruum-template-breadcrumb',
      ui: {
        navigate: '.fruum-js-navigate',
        close_search: '.fruum-js-search-close',
      },
      modelEvents: {
        'change:viewing change:searching': 'render',
      },
      events: {
        'click @ui.close_search': 'onCloseSearch',
        'click @ui.navigate': 'onNavigate',
      },
      onNavigate: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:unset_onboard', 'breadcrumb');
        Fruum.io.trigger('fruum:view', { id: $(event.target).closest('[data-id]').data('id') });
      },
      onCloseSearch: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:clear_search');
      },
    });
  });
})();
/******************************************************************************
Handles the top part
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var $ = Fruum.libs.$,
        _ = Fruum.libs._,
        Messages = Fruum.messages,
        Marionette = Fruum.libs.Marionette;

    Fruum.views.TitleView = Marionette.View.extend({
      template: '#fruum-template-title',
      ui: {
        search: '[data-search-shortcut]',
        manage: '.fruum-js-manage',
        edit: '[data-action="edit"]',
        visible: '[data-action="visible"]',
        delete: '[data-action="delete"]',
        locked: '[data-action="locked"]',
      },
      modelEvents: {
        'change:viewing change:searching': 'render',
      },
      events: {
        'click @ui.search': 'onSearch',
        'click @ui.manage': 'onManage',
        'click @ui.edit': 'onEdit',
        'click @ui.delete': 'onDelete',
        'click @ui.visible': 'onVisible',
        'click @ui.locked': 'onLocked',
      },
      onSearch: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var search = $(event.target).
          closest('[data-search-shortcut]').
          data('search-shortcut');
        if (!search) return;
        Fruum.io.trigger('fruum:set_search', search);
      },
      onManage: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:unset_onboard', 'manage');
        Fruum.io.trigger('fruum:toggle_manage', this.ui.manage);
      },
      onLocked: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var viewing = this.model.get('viewing');
        if (viewing.id) {
          Fruum.io.trigger('fruum:field', {
            id: viewing.id,
            field: 'locked',
            value: !viewing.locked,
          });
        }
      },
      onVisible: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var viewing = this.model.get('viewing');
        if (viewing.id && confirm(viewing.visible ? Messages.private : Messages.public)) {
          Fruum.io.trigger('fruum:field', {
            id: viewing.id,
            field: 'visible',
            value: !viewing.visible,
          });
        }
      },
      onEdit: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var viewing = _.clone(this.model.get('viewing'));
        if (viewing.type == 'bookmark') {
          Fruum.io.trigger('fruum:show_bookmark', viewing);
        } else {
          Fruum.io.trigger('fruum:unset_onboard', 'edit');
          Fruum.io.trigger('fruum:edit', viewing);
        }
      },
      onDelete: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var viewing = this.model.get('viewing');
        if (viewing.id) Fruum.io.trigger('fruum:archive', { id: viewing.id });
      },
    });
  });
})();
/******************************************************************************
Search button
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var $ = Fruum.libs.$,
        _ = Fruum.libs._,
        Marionette = Fruum.libs.Marionette;

    Fruum.views.FiltersView = Marionette.View.extend({
      template: '#fruum-template-filters',
      ui: {
        search: '.fruum-js-search',
        search_input: '.fruum-js-search-input',
        search_close: '.fruum-js-search-close',
      },
      events: {
        'keyup @ui.search_input': 'onSearchKeyup',
        'blur @ui.search_input': 'onSearchBlur',
        'click @ui.search': 'onSearchOpen',
        'click @ui.search_close': 'onSearchClose',
      },
      initialize: function(options) {
        _.bindAll(this, '_search');
        this.listenTo(Fruum.io, 'fruum:clear_search', this.onSearchClose);
        this.listenTo(Fruum.io, 'fruum:set_search', this.onSearchSet);
      },
      onSearchSet: function(query) {
        this.model.set('searching', true);
        if (!this.ui.search.hasClass('fruum-search-active')) {
          this.ui.search.addClass('fruum-search-active');
        }
        this.ui.search_input.focus().val(query + ' ');
        this.searchNow();
      },
      onSearchKeyup: function(event) {
        if (this.search_timer) clearTimeout(this.search_timer);
        this.search_timer = setTimeout(this._search, 500);
      },
      onSearchBlur: function(event) {
        if (!this.ui.search_input.val()) {
          this.ui.search.removeClass('fruum-search-active');
          if (this.model.get('searching')) {
            this.model.set('searching', false);
            Fruum.io.trigger('fruum:restore_view_route');
          }
        }
        this._updateStatus();
      },
      onSearchOpen: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.model.set('searching', true);
        if (!this.ui.search.hasClass('fruum-search-active')) {
          this.ui.search.addClass('fruum-search-active');
          // check for stored search
          var viewing = this.model.get('viewing');
          if (viewing.type == 'bookmark') {
            this.ui.search_input.val(viewing.body);
          }
          this.ui.search_input.focus().select();
          this.searchNow();
        }
      },
      onSearchClose: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.ui.search_input.val('').blur();
        this.onSearchBlur();
      },
      searchNow: function() {
        if (this.search_timer) clearTimeout(this.search_timer);
        this._search();
      },
      _updateStatus: function() {
        this.model.set('has_search_string', $.trim(this.ui.search_input.val() || '').length > 0);
      },
      _search: function() {
        this.search_timer = null;
        this._updateStatus();
        Fruum.io.trigger('fruum:search', this.ui.search_input.val());
      },
    });
  });
})();
/******************************************************************************
 Counters
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var $ = Fruum.libs.$,
        _ = Fruum.libs._,
        Marionette = Fruum.libs.Marionette;

    Fruum.views.CountersView = Marionette.View.extend({
      template: '#fruum-template-counters',
      ui: {
        down: '.fruum-js-filter-down',
        up: '.fruum-js-filter-up',
        watch: '[data-action="watch"]',
        unwatch: '[data-action="unwatch"]',
        share: '[data-action="share"]',
      },
      modelEvents: {
        'change:total_entries change:viewing_from change:viewing_to change:viewing change:editing': 'render',
      },
      events: {
        'click @ui.down': 'onDown',
        'click @ui.up': 'onUp',
        'click @ui.watch': 'onWatch',
        'click @ui.unwatch': 'onUnwatch',
        'click @ui.share': 'onShare',
      },
      onDown: function() {
        Fruum.io.trigger('fruum:scroll_bottom');
      },
      onUp: function() {
        Fruum.io.trigger('fruum:scroll_top');
      },
      onWatch: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var viewing = this.model.get('viewing');
        if (viewing.id) {
          Fruum.io.trigger('fruum:unset_onboard', 'watch');
          Fruum.io.trigger('fruum:watch', { id: viewing.id });
        }
      },
      onUnwatch: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var viewing = this.model.get('viewing');
        if (viewing.id) {
          Fruum.io.trigger('fruum:unset_onboard', 'watch');
          Fruum.io.trigger('fruum:unwatch', { id: viewing.id });
        }
      },
      onShare: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:share', $(event.target));
      },
      templateContext: function() {
        var editing = this.model.get('editing'),
            viewing = this.model.get('viewing');
        return {
          hide_actions: this.model.get('searching') || !viewing.id ||
                        _.contains(['thread', 'article', 'blog'], editing.type),
        };
      },
    });
  });
})();
/******************************************************************************
Categories view
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var Marionette = Fruum.libs.Marionette,
        TRANSITION = Fruum.utils.marionette_itemview_transition;

    Fruum.views.CategoryView = TRANSITION(Marionette.View.extend({
      ui: {
        navigate: '.fruum-js-navigate',
        manage: '.fruum-js-manage',
        up: '[data-action="up"]',
        down: '[data-action="down"]',
        delete: '[data-action="delete"]',
      },
      modelEvents: {
        'change': 'render',
      },
      events: {
        'click @ui.manage': 'onManage',
        'click @ui.navigate': 'onNavigate',
        'click @ui.up': 'onUp',
        'click @ui.down': 'onDown',
        'click @ui.delete': 'onDelete',
      },
      initialize: function(options) {
        this.ui_state = options.ui_state;
      },
      templateContext: function() {
        return {
          viewing: this.ui_state.get('viewing'),
          is_new: Fruum.utils.isNewVisit(
            this.model.get('id'), this.model.get('updated')
          ),
        };
      },
      getTemplate: function() {
        if (this.model.get('type') == 'bookmark') {
          return '#fruum-template-bookmark';
        } else {
          return '#fruum-template-category';
        }
      },
      onNavigate: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:view', { id: this.model.get('id') });
      },
      onManage: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:toggle_manage', this.ui.manage);
      },
      onUp: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:close_manage');
        Fruum.utils.orderUp(this.model, event.shiftKey);
      },
      onDown: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:close_manage');
        Fruum.utils.orderDown(this.model, event.shiftKey);
      },
      onDelete: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:close_manage');
        if (this.model.get('type') == 'bookmark') {
          Fruum.io.trigger('fruum:delete', { id: this.model.get('id') });
        } else {
          Fruum.io.trigger('fruum:archive', { id: this.model.get('id') });
        }
      },
    }));

    Fruum.views.CategoriesView = Marionette.CollectionView.extend({
      childView: Fruum.views.CategoryView,
      initialize: function(options) {
        this.ui_state = options.ui_state;
      },
      childViewOptions: function(model, index) {
        return { ui_state: this.ui_state };
      },
    });
  });
})();
/******************************************************************************
Posts view
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var $ = Fruum.libs.$,
        Marionette = Fruum.libs.Marionette,
        Messages = Fruum.messages,
        TRANSITION = Fruum.utils.marionette_itemview_transition;

    Fruum.views.PostView = TRANSITION(Marionette.View.extend({
      ui: {
        react: '[data-action="react"]',
        edit: '[data-action="edit"]',
        report: '[data-action="report"]',
        inappropriate: '[data-action="inappropriate"]',
        delete: '[data-action="delete"]',
        share: '[data-action="share"]',
        more_source: '.fruum-js-more-source',
        more_target: '.fruum-js-more-target',
        profile: '.fruum-js-profile',
        links: 'a[href]',
      },
      modelEvents: {
        'change': 'render',
      },
      events: {
        'click @ui.more_source': 'onMore',
        'click @ui.react': 'onReact',
        'click @ui.edit': 'onEdit',
        'click @ui.report': 'onReport',
        'click @ui.inappropriate': 'onInappropriate',
        'click @ui.delete': 'onDelete',
        'click @ui.share': 'onShare',
        'click @ui.profile': 'onProfile',
        'click @ui.links': 'onLink',
      },
      initialize: function(options) {
        this.template_helpers = options;
      },
      templateContext: function() {
        return this.template_helpers;
      },
      getTemplate: function() {
        if (this.template_helpers.viewing.type == 'channel') {
          return '#fruum-template-post-channel';
        }
        if (this.template_helpers.child_index == 0) {
          return '#fruum-template-post-master';
        }
        return '#fruum-template-post';
      },
      onProfile: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:profile', {
          id: this.model.get('user_id'),
          username: this.model.get('user_username'),
        });
      },
      onMore: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.ui.more_source.addClass('fruum-nodisplay');
        this.ui.more_target.removeClass('fruum-nodisplay');
      },
      onEdit: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:edit', this.model.toJSON());
      },
      onReact: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var reaction = $(event.target).closest('[data-reaction]').data('reaction');
        if (Fruum.user.anonymous || !reaction) return;
        Fruum.io.trigger('fruum:react', { id: this.model.get('id'), reaction: reaction });
      },
      onInappropriate: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:field', {
          id: this.model.get('id'),
          field: 'inappropriate',
          value: !this.model.get('inappropriate'),
        });
      },
      onShare: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var post_index = this.model.collection.models.indexOf(this.model) + 1;
        Fruum.io.trigger('fruum:share', $(event.target), post_index);
      },
      onDelete: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:archive', { id: this.model.get('id') });
      },
      onReport: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        if (confirm(Messages.report)) {
          Fruum.io.trigger('fruum:report', { id: this.model.get('id') });
        }
      },
      onLink: function(event) {
        var href = $(event.target).attr('href') || '';
        // relative link
        if (href.indexOf('#fruum:') == 0) {
          event.preventDefault();
          event.stopPropagation();
          href = href.replace('#fruum:', '');
          Fruum.api.open(href);
        } else if (href.indexOf(Fruum.utils.permaLink('')) == 0) {
          // absolute forum link
          Fruum.api.open(href.replace(Fruum.utils.permaLink(''), ''));
        } else if (href.toLowerCase().indexOf('http://') == 0 ||
                   href.toLowerCase().indexOf('https://') == 0
        ) {
          // external link
          event.preventDefault();
          event.stopPropagation();
          window.open(href, '_blank');
        }
      },
    }));

    Fruum.views.PostEmptyView = TRANSITION(Marionette.View.extend({
      template: '#fruum-template-persona',
      initialize: function(options) {
        this.viewing = options.viewing;
        if (this.viewing.type == 'channel') {
          this.__delay_transition = 1000;
        }
      },
      templateContext: function() {
        return Fruum.utils.personaSays({
          permission: Fruum.user.anonymous ? 'read' : 'write',
          action: 'empty_' + this.viewing.type,
          categoryname: this.viewing.header,
        });
      },
    }));

    Fruum.views.PostsView = Marionette.CollectionView.extend({
      childView: Fruum.views.PostView,
      emptyView: Fruum.views.PostEmptyView,
      initialize: function(options) {
        this.ui_state = options.ui_state;
      },
      childViewOptions: function(model, index) {
        if (index > 0) {
          var prev_model = model.collection.at(index - 1);
          return {
            child_index: index,
            viewing: this.ui_state.get('viewing'),
            previous_user_id: prev_model.get('user_id'),
            previous_created: prev_model.get('created'),
          };
        } else {
          return {
            child_index: index,
            viewing: this.ui_state.get('viewing'),
            previous_user_id: '',
            previous_created: 0,
          };
        }
      },
    });
  });
})();
/******************************************************************************
Threads view
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var $ = Fruum.libs.$,
        Marionette = Fruum.libs.Marionette,
        TRANSITION = Fruum.utils.marionette_itemview_transition;

    Fruum.views.ThreadView = TRANSITION(Marionette.View.extend({
      template: '#fruum-template-thread',
      ui: {
        search: '[data-search-shortcut]',
        navigate: '.fruum-js-navigate',
        manage: '.fruum-js-manage',
        sticky: '[data-action="sticky"]',
        move: '[data-action="move"]',
        delete: '[data-action="delete"]',
      },
      modelEvents: {
        'change': 'render',
      },
      events: {
        'click @ui.search': 'onSearch',
        'click @ui.manage': 'onManage',
        'click @ui.navigate': 'onNavigate',
        'click @ui.sticky': 'onSticky',
        'click @ui.delete': 'onDelete',
        'click @ui.move': 'onMove',
      },
      templateContext: function() {
        return {
          is_new: Fruum.utils.isNewVisit(
            this.model.get('id'), this.model.get('updated')
          ),
        };
      },
      onSearch: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var search = $(event.target).
          closest('[data-search-shortcut]').
          data('search-shortcut');
        if (!search) return;
        Fruum.io.trigger('fruum:set_search', search);
      },
      onNavigate: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:view', { id: this.model.get('id') });
      },
      onManage: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:toggle_manage', this.ui.manage);
      },
      onSticky: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:close_manage');
        Fruum.io.trigger('fruum:field', {
          id: this.model.get('id'),
          field: 'sticky',
          value: !this.model.get('sticky'),
        });
      },
      onDelete: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:close_manage');
        Fruum.io.trigger('fruum:archive', { id: this.model.get('id') });
      },
      onMove: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:close_manage');
        Fruum.io.trigger('fruum:show_move', this.model.toJSON());
      },
    }));

    Fruum.views.ThreadsView = Marionette.CollectionView.extend({
      childView: Fruum.views.ThreadView,
    });
  });
})();
/******************************************************************************
Articles view
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var $ = Fruum.libs.$,
        Marionette = Fruum.libs.Marionette,
        TRANSITION = Fruum.utils.marionette_itemview_transition;

    Fruum.views.ArticleView = TRANSITION(Marionette.View.extend({
      template: '#fruum-template-article',
      ui: {
        search: '[data-search-shortcut]',
        navigate: '.fruum-js-navigate',
        manage: '.fruum-js-manage',
        up: '[data-action="up"]',
        down: '[data-action="down"]',
        move: '[data-action="move"]',
        delete: '[data-action="delete"]',
      },
      modelEvents: {
        'change': 'render',
      },
      events: {
        'click @ui.search': 'onSearch',
        'click @ui.manage': 'onManage',
        'click @ui.navigate': 'onNavigate',
        'click @ui.delete': 'onDelete',
        'click @ui.up': 'onUp',
        'click @ui.down': 'onDown',
        'click @ui.move': 'onMove',
      },
      templateContext: function() {
        return {
          is_new: Fruum.utils.isNewVisit(
            this.model.get('id'), this.model.get('updated')
          ),
        };
      },
      onSearch: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var search = $(event.target).
          closest('[data-search-shortcut]').
          data('search-shortcut');
        if (!search) return;
        Fruum.io.trigger('fruum:set_search', search);
      },
      onNavigate: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:view', { id: this.model.get('id') });
      },
      onManage: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:toggle_manage', this.ui.manage);
      },
      onDelete: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:close_manage');
        Fruum.io.trigger('fruum:archive', { id: this.model.get('id') });
      },
      onUp: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:close_manage');
        Fruum.utils.orderUp(this.model, event.shiftKey);
      },
      onDown: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:close_manage');
        Fruum.utils.orderDown(this.model, event.shiftKey);
      },
      onMove: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:close_manage');
        Fruum.io.trigger('fruum:show_move', this.model.toJSON());
      },
    }));

    Fruum.views.ArticlesView = Marionette.CollectionView.extend({
      childView: Fruum.views.ArticleView,
    });
  });
})();
/******************************************************************************
Blog view
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var $ = Fruum.libs.$,
        Marionette = Fruum.libs.Marionette,
        TRANSITION = Fruum.utils.marionette_itemview_transition;

    Fruum.views.BlogView = TRANSITION(Marionette.View.extend({
      template: '#fruum-template-blog',
      ui: {
        search: '[data-search-shortcut]',
        navigate: '.fruum-js-navigate',
        manage: '.fruum-js-manage',
        move: '[data-action="move"]',
        delete: '[data-action="delete"]',
      },
      modelEvents: {
        'change': 'render',
      },
      events: {
        'click @ui.search': 'onSearch',
        'click @ui.manage': 'onManage',
        'click @ui.navigate': 'onNavigate',
        'click @ui.delete': 'onDelete',
        'click @ui.move': 'onMove',
      },
      templateContext: function() {
        return {
          is_new: Fruum.utils.isNewVisit(
            this.model.get('id'), this.model.get('updated')
          ),
        };
      },
      onSearch: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var search = $(event.target).
          closest('[data-search-shortcut]').
          data('search-shortcut');
        if (!search) return;
        Fruum.io.trigger('fruum:set_search', search);
      },
      onNavigate: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:view', { id: this.model.get('id') });
      },
      onManage: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:toggle_manage', this.ui.manage);
      },
      onDelete: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:close_manage');
        Fruum.io.trigger('fruum:archive', { id: this.model.get('id') });
      },
      onMove: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:close_manage');
        Fruum.io.trigger('fruum:show_move', this.model.toJSON());
      },
    }));

    Fruum.views.BlogsView = Marionette.CollectionView.extend({
      childView: Fruum.views.BlogView,
    });
  });
})();
/******************************************************************************
Channels view
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var Marionette = Fruum.libs.Marionette,
        TRANSITION = Fruum.utils.marionette_itemview_transition;

    Fruum.views.ChannelView = TRANSITION(Marionette.View.extend({
      template: '#fruum-template-channel',
      ui: {
        navigate: '.fruum-js-navigate',
        manage: '.fruum-js-manage',
        move: '[data-action="move"]',
        delete: '[data-action="delete"]',
      },
      modelEvents: {
        'change': 'render',
      },
      events: {
        'click @ui.manage': 'onManage',
        'click @ui.navigate': 'onNavigate',
        'click @ui.delete': 'onDelete',
        'click @ui.move': 'onMove',
      },
      initialize: function(options) {
        this.options = options;
      },
      templateContext: function() {
        return {
          online: this.options.online,
        };
      },
      onNavigate: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:view', { id: this.model.get('id') });
      },
      onManage: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:toggle_manage', this.ui.manage);
      },
      onDelete: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:close_manage');
        Fruum.io.trigger('fruum:archive', { id: this.model.get('id') });
      },
      onMove: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:close_manage');
        Fruum.io.trigger('fruum:show_move', this.model.toJSON());
      },
    }));

    Fruum.views.ChannelsView = Marionette.CollectionView.extend({
      childView: Fruum.views.ChannelView,
      initialize: function(options) {
        this.ui_state = options.ui_state;
      },
      childViewOptions: function(model, index) {
        return {
          online: this.ui_state.get('online'),
        };
      },
    });
  });
})();
/******************************************************************************
 Autocomplete
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var $ = Fruum.libs.$,
        _ = Fruum.libs._,
        Marionette = Fruum.libs.Marionette;

    Fruum.views.AutocompleteView = Marionette.View.extend({
      template: _.noop,
      $el_root: $('#fruum'),
      el: '.fruum-js-autocomplete',
      template_autocomplete_user: _.template($('#fruum-template-autocomplete-user').html()),
      template_autocomplete_emoji: _.template($('#fruum-template-autocomplete-emoji').html()),
      events: {
        'mousedown [data-item]': 'onSelect',
      },
      initialize: function(options) {
        _.bindAll(this, 'onTimer');
        this.interactions = options.interactions;
        this.listenTo(Fruum.io, 'fruum:autocomplete_results', this.onResults);
        this.match = '';
        this.items = [];
      },
      onKey: function(event) {
        // reset timer
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
        switch (event.which) {
          case 38: // up
          case 40: // down
          case 37: // left
          case 39: // right
          case 13: // enter
          case 27: // escape
            this.onShortcut(event);
            break;
          default:
            this.timer = setTimeout(this.onTimer, 250);
            break;
        }
      },
      onShortcut: function(event) {
        if (!this.$el.is(':visible')) return;
        event.preventDefault();
        var el;
        switch (event.which) {
          case 27: { // escape
            event._autocomplete_consumed = true;
            this.$el.addClass('fruum-nodisplay');
            this.match = '';
            break;
          }
          case 13: // enter
            el = this.$('.fruum-option-selected');
            if (el.length) {
              this.onSelect({ target: el });
              this.hide();
              event._autocomplete_consumed = true;
            }
            break;
          case 38: // up
          case 40: // down
          case 37: // left
          case 39: // right
            el = this.$('.fruum-option-selected');
            if (!el.length) {
              // select first element
              this.$('[data-item]:first').addClass('fruum-option-selected');
            } else {
              var last_item = el.data('item');
              var index = this.items.indexOf(last_item);
              switch (event.which) {
                case 38: // up
                  index = Math.max(0, index - 2);
                  break;
                case 40: // down
                  index = Math.min(this.items.length - 1, index + 2);
                  break;
                case 37: // left
                  index = Math.max(0, index - 1);
                  break;
                case 39: // right
                  index = Math.min(this.items.length - 1, index + 1);
                  break;
              }
              if (this.items[index]) {
                el.removeClass('fruum-option-selected');
                this.$('[data-item="' + this.items[index] + '"]').addClass('fruum-option-selected');
              }
            }
            event._autocomplete_consumed = true;
            break;
        }
      },
      hide: function() {
        this.$el.addClass('fruum-nodisplay');
        this.match = '';
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
      },
      onResults: function(payload) {
        // are we still relevant?
        if (payload.q !== this.match) return;
        // do we have results?
        if (payload && payload.results && payload.results.length) {
          var list = [], hash = {};
          this.items = [];
          _.each(payload.results, function(item) {
            if (hash[item.username]) return;
            hash[item.username] = true;
            list.push({
              key: '@' + item.username,
              username: item.username,
              displayname: item.displayname || item.username,
            });
            this.items.push('@' + item.username);
          }, this);
          this.$el.html(
            this.template_autocomplete_user({
              list: list,
            })
          ).removeClass('fruum-nodisplay');
          this.positionPanel();
        } else {
          this.$el.addClass('fruum-nodisplay');
        }
      },
      onSelect: function(event) {
        var item = $(event.target).closest('[data-item]').data('item'),
            field = this.interactions.ui.field_body,
            text = field.val(),
            curret = field.prop('selectionStart');
        if (text && item && this.match && curret) {
          var start_index = text.lastIndexOf(this.match, curret);
          text = text.substr(0, start_index) + item +
            ' ' + text.substr(curret);
          field.val(text);
          _.defer(function() {
            field.focus();
            Fruum.utils.setCaretPosition(field, start_index + item.length + 1);
          });
        }
      },
      onTimer: function() {
        this.timer = null;
        var text = this.interactions.ui.field_body.val() || '',
            curret = this.interactions.ui.field_body.prop('selectionStart') || text.length,
            match;
        // check from curret position
        text = text.substr(0, curret);
        // find emoji
        match = Fruum.utils.autocompleteEmoji(text);
        if (match) {
          this.match = match;
          var list = [];
          this.items = [];
          _.each(Fruum.emoji.symbols, function(value, key) {
            if (key.indexOf(match) === 0) {
              this.items.push(key);
              list.push({
                key: key,
                emoji: key,
                icon: value,
              });
            }
          }, this);
          if (list.length) {
            this.$el.html(
              this.template_autocomplete_emoji({ list: list })
            ).removeClass('fruum-nodisplay');
            this.positionPanel();
          } else {
            this.$el.addClass('fruum-nodisplay');
          }
          return;
        }
        // find user
        match = Fruum.utils.autocompleteUser(text);
        if (match) {
          this.match = match;
          Fruum.io.trigger('fruum:autocomplete', { q: match });
          return;
        }
        // nothing found
        this.match = '';
        this.$el.addClass('fruum-nodisplay');
      },
      positionPanel: function() {
        this.$el.css('top', (
          this.interactions.ui.field_body.offset().top -
          this.$el_root.offset().top -
          this.$el.outerHeight()
        ) + 'px');
      },
    });
  });
})();
/******************************************************************************
 Emoji panel
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var $ = Fruum.libs.$,
        _ = Fruum.libs._,
        Marionette = Fruum.libs.Marionette;

    Fruum.views.EmojiPanelView = Marionette.View.extend({
      template: _.noop,
      $el_root: $('#fruum'),
      el: '.fruum-js-emoji',
      events: {
        'click [data-item]': 'onSelect',
      },
      initialize: function(options) {
        _.bindAll(this, 'onKey');
        this.$el.html(_.template($('#fruum-template-emojipanel').html())());
        this.interactions = options.interactions;
      },
      onSelect: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var item = $(event.target).closest('[data-item]').data('item'),
            field = this.interactions.ui.field_body;
        if (item) {
          field.val(field.val() + ' ' + item + ' ');
          this.hide();
          _.defer(function() { field.focus(); });
        }
      },
      onKey: function(event) {
        if (event.which == 27) this.hide();
      },
      show: function() {
        if (!this.$el.hasClass('fruum-nodisplay')) return;
        this.$el.removeClass('fruum-nodisplay');
        $(document).on('keydown', this.onKey);
      },
      hide: function() {
        if (this.$el.hasClass('fruum-nodisplay')) return;
        this.$el.addClass('fruum-nodisplay');
        $(document).off('keydown', this.onKey);
      },
      toggle: function() {
        if (this.$el.is(':visible')) {
          this.hide();
        } else {
          this.show();
        }
      },
    });
  });
})();
/******************************************************************************
 Attachments panel
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var $ = Fruum.libs.$,
        _ = Fruum.libs._,
        Marionette = Fruum.libs.Marionette;

    Fruum.views.AttachmentsView = Marionette.View.extend({
      template: _.noop,
      $el_root: $('#fruum'),
      el: '.fruum-js-attachments',
      ui: {
        plus: '#fruum-file-upload',
        image: '[data-attachment]',
        close: '.fruum-js-close',
      },
      events: {
        'click @ui.close': 'hide',
        'click @ui.image': 'onSelect',
        'dragover': 'onDragOver',
        'dragleave': 'onDragLeave',
        'drop': 'onDrop',
        'change @ui.plus': 'onChange',
      },
      initialize: function(options) {
        _.bindAll(this, 'onKey', 'onPaste');
        this.ui_state = options.ui_state;
        this.interactions = options.interactions;
        this.template = _.template($('#fruum-template-attachments').html());
        this.listenTo(this.ui_state, 'fruum:optimize', this.onOptimize);
        this.listenTo(this.ui_state, 'change:optimizing', this.render);
      },
      onSelect: function(event) {
        var attachment = $(event.target).closest('[data-attachment]').data('attachment');
        if (attachment) {
          var body = this.interactions.ui.field_body.val() || '';
          if (body.length) body += '\n';
          this.interactions.ui.field_body.val(
            body + attachment + '\n'
          );
          this.hide();
          this.interactions.renderPreview();
        }
      },
      onDragOver: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.$el.find('.fruum-options-list').addClass('fruum-droppable');
      },
      onDragLeave: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.$el.find('.fruum-options-list').removeClass('fruum-droppable');
      },
      onDrop: function(event) {
        this.$el.find('.fruum-options-list').removeClass('fruum-droppable');
        if (event.originalEvent.dataTransfer) {
          if (event.originalEvent.dataTransfer.files.length) {
            event.preventDefault();
            event.stopPropagation();
            this.handleFiles(event.originalEvent.dataTransfer.files);
            return false;
          }
        }
      },
      onChange: function(event) {
        this.handleFiles(event.target.files);
      },
      onOptimize: function(payload) {
        if (!payload) return;
        var editing = this.ui_state.get('editing');
        editing.attachments = editing.attachments || [];
        var attachment = {
          name: this.uniqueName(
            (payload.name || ('file' + editing.attachments.length)).replace(/ /g, '-'),
            editing.attachments
          ),
          type: payload.type,
          data: payload.data,
        };
        editing.attachments.push(attachment);
        this.render();
        var body = this.interactions.ui.field_body.val() || '';
        if (body.length) body += '\n';
        this.interactions.ui.field_body.val(body +
          '[[' + attachment.type + ':' + attachment.name + ']]\n'
        );
        this.interactions.renderPreview();
        if (!this.ui_state.get('optimizing')) this.hide();
      },
      handleFiles: function(files) {
        if (!files) return;
        _.each(files, function(file) {
          var reader = new FileReader();
          reader.onload = function(e) {
            var data = e.target.result;
            if (data.indexOf('data:image/png') == 0 ||
                data.indexOf('data:image/jpeg') == 0
            ) {
              // send it to server for minification
              Fruum.utils.resizeImage(data, 800, 800, function(resized_data) {
                Fruum.io.trigger('fruum:optimize', {
                  name: file.name || '',
                  type: 'image',
                  data: resized_data,
                });
              });
            }
          };
          reader.readAsDataURL(file);
        });
      },
      uniqueName: function(name, attachments) {
        for (var i = 0; i < attachments.length; ++i) {
          if (attachments[i].name === name) {
            return this.uniqueName(name + '_', attachments);
          }
        }
        return name;
      },
      onKey: function(event) {
        if (event.which == 27) this.hide();
      },
      onPaste: function(event) {
        var clipboard = event.originalEvent.clipboardData;
        if (clipboard && clipboard.items) {
          var files = [];
          _.each(clipboard.items, function(item) {
            if (item.type.indexOf('image') == 0) {
              item = item.getAsFile();
              if (item) files.push(item);
            }
          });
          if (files.length) this.handleFiles(files);
        }
      },
      render: function() {
        this.$el.html(this.template({
          attachments: this.ui_state.get('editing').attachments || [],
          optimizing: this.ui_state.get('optimizing'),
        }));
      },
      show: function() {
        if (!this.$el.hasClass('fruum-nodisplay')) return;
        this.$el.removeClass('fruum-nodisplay');
        $(document).on('keydown', this.onKey);
        $(document).on('paste', this.onPaste);
        this.render();
      },
      hide: function() {
        if (this.$el.hasClass('fruum-nodisplay')) return;
        this.$el.addClass('fruum-nodisplay');
        $(document).off('keydown', this.onKey);
        $(document).off('paste', this.onPaste);
      },
      toggle: function() {
        if (this.$el.is(':visible')) {
          this.hide();
        } else {
          this.show();
        }
      },
    });
  });
})();
/******************************************************************************
Handles the bottom input part
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var $ = Fruum.libs.$,
        _ = Fruum.libs._,
        toMarkdown = Fruum.libs.toMarkdown,
        Marionette = Fruum.libs.Marionette;

    Fruum.views.InteractionsView = Marionette.View.extend({
      ui: {
        search: '.fruum-js-search-category',
        post: '[data-action="post"]',
        add_category: '[data-action="add_category"]',
        add_article: '[data-action="add_article"]',
        add_blog: '[data-action="add_blog"]',
        add_thread: '[data-action="add_thread"]',
        add_channel: '[data-action="add_channel"]',
        add_post: '[data-action="add_post"]',
        add_search: '[data-action="add_search"]',
        cancel: '[data-action="cancel"]',
        preview: '[data-action="preview"]',
        help: '[data-action="help"]',
        emoji_panel: '[data-action="emojipanel"]',
        attachments: '[data-action="attachments"]',
        help_panel: '.fruum-js-help',
        help_tab: '[data-help-tab]',
        karma_notify: '.fruum-js-karma-notify',
        show_profile: '.fruum-js-show-profile',
        avatar_container: '.fruum-js-avatar-container',
        preview_panel: '.fruum-js-preview',
        field_parent: '[data-field="parent"]',
        field_type: '[data-field="type"]',
        field_initials: '[data-field="initials"]',
        field_header: '[data-field="header"]',
        field_body: '[data-field="body"]',
        field_tags: '[data-field="tags"]',
        field_notifications: '[data-field="notifications"]',
        field_usage: '[data-field="usage"]',
        field_permission: '[data-field="permission"]',
        option_usage: '[data-usage]',
        option_permission: '[data-permission]',
        channel_input: '.fruum-js-channel-input',
        popup_usage: '.fruum-js-choose-usage',
        popup_permission: '.fruum-js-choose-permission',
      },
      modelEvents: {
        'change:editing change:viewing change:searching change:has_search_string': 'onChange',
        'change:interacting change:connected': 'onInteracting',
        'change:search_helper': 'onSearchHelper',
        'change:updates_count': 'onUpdatesCount',
      },
      events: {
        'click @ui.search': 'onSearch',
        'click @ui.field_usage': 'onClickUsage',
        'click @ui.field_permission': 'onClickPermission',
        'click @ui.option_usage': 'onSelectUsage',
        'click @ui.option_permission': 'onSelectPermission',
        'focus @ui.field_initials': 'onInitialFocus',
        'keydown @ui.field_initials': 'onInitialsKeydown',
        'keydown @ui.field_body': 'onBodyKeydown',
        'keydown @ui.channel_input': 'onChannelKey',
        'blur @ui.field_header': 'onHeaderBlur',
        'click @ui.help': 'onHelp',
        'click @ui.help_tab': 'onHelpTab',
        'click @ui.emoji_panel': 'onEmojiPanel',
        'click @ui.attachments': 'onAttachments',
        'click @ui.post': 'onPost',
        'click @ui.add_thread': 'onAddThread',
        'click @ui.add_article': 'onAddArticle',
        'click @ui.add_blog': 'onAddBlog',
        'click @ui.add_channel': 'onAddChannel',
        'click @ui.add_category': 'onAddCategory',
        'click @ui.add_post': 'onAddPost',
        'click @ui.add_search': 'onAddSearch',
        'click @ui.cancel': 'onCancel',
        'click @ui.preview': 'onPreview',
        'click @ui.show_profile': 'onShowProfile',
        // capture changes and store them
        'blur @ui.field_body': 'onBodyBlur',
        'keyup @ui.field_body': 'onKeyBody',
        'keyup @ui.field_header': 'onKeyHeader',
        'keyup @ui.field_initials': 'onKeyInitials',
        'keyup @ui.field_tags': 'onKeyTags',
        'paste @ui.field_body': 'onPasteBody',
      },
      initialize: function(options) {
        _.bindAll(this,
          'typeNotificationStart', 'typeNotificationEnd',
          '_clearSearch', '_updatesCount', '_onboard'
        );
        // helper to mark how many posts the user has submitted for onboarding
        this.post_count = 0;
        this.new_karma = 0;
        this.ui_state = this.model;
        this.collections = options.collections;
        this.listenTo(Fruum.io, 'fruum:resize', this.onResize);
        this.listenTo(Fruum.io, 'fruum:update_notify', this.onUpdateNotify);
        this.listenTo(Fruum.io, 'fruum:message', this.onMessage);
        this.listenTo(Fruum.io, 'fruum:new_karma', this.onNewKarma);
        this.listenTo(Fruum.io, 'fruum:default_action', function() {
          var el = this.$('.fruum-js-default-action');
          if (el.length) {
            el.addClass('fruum-button-active');
            setTimeout(function() {
              el.trigger('click');
            }, 100);
          }
        });
        this.onAttach = this.onDomRefresh = this.onInteracting;
        this.mode = this._getMode();
        this.autocomplete_view = new Fruum.views.AutocompleteView({
          ui_state: this.ui_state,
          interactions: this,
        });
        this.emojipanel_view = new Fruum.views.EmojiPanelView({
          ui_state: this.ui_state,
          interactions: this,
        });
        this.attachments_view = new Fruum.views.AttachmentsView({
          ui_state: this.ui_state,
          interactions: this,
        });
        this.help_tab = Fruum.utils.isDesktop() ? 'shortcuts' : 'text';
      },
      getTemplate: function() {
        if (Fruum.user.anonymous) return '#fruum-template-interactions-anonymous';
        var editing = this.ui_state.get('editing'),
            viewing = this.ui_state.get('viewing');
        if (this.ui_state.get('searching')) {
          return '#fruum-template-interactions-searching';
        }
        switch (editing.type) {
          case 'category':
            return '#fruum-template-interactions-edit-category';
          case 'article':
            return '#fruum-template-interactions-edit-article';
          case 'blog':
            return '#fruum-template-interactions-edit-blog';
          case 'thread':
            return '#fruum-template-interactions-edit-thread';
          case 'channel':
            return '#fruum-template-interactions-edit-channel';
          case 'post':
            return '#fruum-template-interactions-edit-post';
        }
        switch (viewing.type) {
          case 'thread':
          case 'article':
          case 'blog':
            return '#fruum-template-interactions-view-thread';
          case 'channel':
            return '#fruum-template-interactions-view-channel';
          case 'bookmark':
            return '#fruum-template-interactions-view-bookmark';
        }
        if (Fruum.user.admin) return '#fruum-template-interactions-admin';
        return '#fruum-template-interactions-user';
      },

      // --------------------------- NOTIFICATIONS -----------------------------

      onUpdatesCount: function() {
        var count = this.ui_state.get('updates_count');
        if (!count) {
          if (this.__update_drawer_timer) {
            clearTimeout(this.__update_drawer_timer);
          }
          this._updatesCount();
        } else {
          if (!this.__update_drawer_timer) {
            this.__update_drawer_timer = setTimeout(this._updatesCount, 1500);
          }
        }
      },
      _updatesCount: function() {
        this.__update_drawer_timer = null;
        var count = this.ui_state.get('updates_count');
        if (!count) {
          this.$('.fruum-js-updates-drawer').stop(true, true).slideUp('fast');
        } else {
          this.$('.fruum-js-updates-number').html(count);
          this.$('.fruum-js-updates-drawer').stop(true, true).slideDown('fast');
        }
      },
      onUpdateNotify: function() {
        var notifications = Fruum.userUtils.countNotifications();
        if (notifications > 0) {
          this.ui.field_notifications.html(notifications).fadeIn();
          this.ui.avatar_container.removeClass('fruum-link-disabled').
            attr('data-fruumtipsy-right', this.ui.avatar_container.attr('data-fruumtipsy-original'));
        } else {
          this.ui.field_notifications.html(notifications).fadeOut();
          this.ui.avatar_container.addClass('fruum-link-disabled').removeAttr('data-fruumtipsy-right');
        }
      },
      typeNotificationStart: function() {
        if (!this.type_notification_timer) {
          Fruum.io.trigger('fruum:typing');
          this.type_notification_timer = setTimeout(this.typeNotificationEnd, 1500);
        }
      },
      typeNotificationEnd: function() {
        this.type_notification_timer = null;
      },
      onShowProfile: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:profile', {
          username: Fruum.user.username,
          id: Fruum.user.id,
        });
      },
      onNewKarma: function(diff) {
        this.new_karma += diff;
        this.consumeKarma();
      },
      consumeKarma: function() {
        var el = this.$(this.ui.karma_notify);
        if (this.new_karma && el.length) {
          el.find('.fruum-js-karma-diff').html(
            (this.new_karma > 0 ? '+' : '-') + this.new_karma
          );
          el.delay(500).fadeIn('fast').delay(4000).fadeOut('slow');
          this.new_karma = 0;
        }
      },

      // ----------------------------- SEARCH ----------------------------------

      onSearch: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger(
          'fruum:set_search',
          'parent:' + this.ui_state.get('viewing').id + ' '
        );
      },
      onSearchHelper: function() {
        if (this.ui_state.get('search_helper') && !this.ui_state.get('editing').type) {
          Fruum.io.trigger('fruum:message', 'search');
        } else {
          if (this.timer_clearsearch) clearTimeout(this.timer_clearsearch);
          this.timer_clearsearch = setTimeout(this._clearSearch, 700);
        }
      },
      _clearSearch: function() {
        this.timer_clearsearch = null;
        Fruum.io.trigger('fruum:message');
      },

      // ----------------------------- MESSAGES --------------------------------

      onMessage: function(msg_type) {
        if (msg_type) {
          this.$('[data-message="' + msg_type + '"]').slideDown();
        } else {
          this.$('[data-message]').slideUp('fast');
        }
      },

      // -------------------------- INTERACTION --------------------------------

      onInteracting: function() {
        var el = this.$el.parent();
        if (this.ui_state.get('interacting') || !this.ui_state.get('connected')) {
          this.$('input, textarea').attr('disabled', 'disabled');
          el.addClass('fruum-interaction-unavailable').
            removeClass('fruum-interacting');
        } else {
          this.$('input, textarea').removeAttr('disabled');
          el.removeClass('fruum-interaction-unavailable');
          if (this.$('.fruum-js-interacting').length) {
            el.addClass('fruum-interacting');
          }
        }
      },
      onRender: function() {
        Fruum.io.trigger('fruum:set_onboard');
        Fruum.io.trigger('fruum:hide_bookmark');
        this.emojipanel_view.hide();
        this.attachments_view.hide();
      },
      onEmojiPanel: function() {
        this.attachments_view.hide();
        this.emojipanel_view.toggle();
      },
      onAttachments: function() {
        this.emojipanel_view.hide();
        this.attachments_view.toggle();
        Fruum.io.trigger('fruum:unset_onboard', 'attachments');
      },
      onHelp: function() {
        this.emojipanel_view.hide();
        this.attachments_view.hide();
        if (this.ui.help_panel.is(':visible')) {
          this.ui.help_panel.slideUp('show', 'easeInOutBack');
        } else {
          this._selectHelpTab(this.help_tab);
          this.ui.help_panel.slideDown('show', 'easeInOutBack');
        }
        Fruum.io.trigger('fruum:unset_onboard', 'help');
      },
      onHelpTab: function(event) {
        event.preventDefault();
        event.stopPropagation();
        var tab = $(event.target).closest('[data-help-tab]').data('help-tab');
        if (!tab) return;
        this.help_tab = tab;
        this._selectHelpTab(this.help_tab);
      },
      _selectHelpTab: function(tab) {
        this.$('[data-help-tab]').removeClass('fruum-active');
        this.$('[data-help-tab="' + tab + '"]').addClass('fruum-active');
        this.$('[data-help-content]').addClass('fruum-nodisplay');
        this.$('[data-help-content="' + tab + '"]').removeClass('fruum-nodisplay');
      },

      onResize: function() {
        switch (this.ui_state.get('editing').type) {
          case 'thread':
          case 'article':
          case 'blog':
            this.ui.field_body.height(
              this.ui_state.get('panel_height') -
              (this.$el.parent().outerHeight() - this.ui.field_body.height()) -
              this.ui_state.get('navigation_height') + 1
            );
            break;
        }
      },
      onChange: function() {
        var new_mode = this._getMode();
        if (new_mode === this.mode) {
          this.render();
          if (this.ui_state.get('viewing').type === 'channel') {
            this.ui.channel_input.focus();
          }
          Fruum.io.trigger('fruum:resize');
          this.startOnboard();
          return;
        }
        this.mode = new_mode;

        var that = this;
        var el = this.$el.parent();
        Fruum.io.trigger('fruum:resize_to_bottom');
        el.stop(true, true).animate({
          bottom: (-el.outerHeight()) + 'px',
        }, 100, function() {
          that.render();
          if (that.$('.fruum-js-interacting').length) {
            el.addClass('fruum-interacting');
          } else {
            el.removeClass('fruum-interacting');
          }
          that.onResize();
          el.css('bottom', (-el.outerHeight()) + 'px').
            stop(true, true).
            animate({
              bottom: '0px',
            }, 'fast', that._getEasing(), function() {
              Fruum.io.trigger('fruum:resize');
              if (that.ui_state.get('viewing').type === 'channel') {
                that.ui.channel_input.focus();
                Fruum.io.trigger('fruum:scroll_bottom');
              } else {
                switch (that.ui_state.get('editing').type) {
                  case 'thread':
                  case 'article':
                  case 'blog':
                  case 'channel':
                  case 'category':
                    that.ui.field_header.focus().select();
                    break;
                  case 'post':
                    that.ui.field_body.focus();
                    break;
                }
              }
              that.startOnboard();
              that.consumeKarma();
            });
        });
      },
      _getEasing: function() {
        switch (this.ui_state.get('editing').type) {
          case 'thread':
          case 'article':
          case 'blog':
            return 'easeOutSine';
        }
        return 'easeInOutBack';
      },
      _getMode: function() {
        if (Fruum.user.anonymous) return 'anonymous';
        return this.ui_state.get('viewing').type + ':' +
               this.ui_state.get('editing').type + ':' +
               this.ui_state.get('searching');
      },

      // ------------------------------ PREVIEW --------------------------------

      onPreview: function() {
        this.emojipanel_view.hide();
        this.attachments_view.hide();
        this.ui.preview.toggleClass('fruum-is-active');
        this.renderPreview();
        Fruum.io.trigger('fruum:unset_onboard', 'preview');
      },
      renderPreview: function() {
        if (this.ui.preview.hasClass('fruum-is-active')) {
          var h = this.ui.field_body.height();
          this.ui.field_body.hide();
          this.ui.preview_panel.css('display', 'inline-block').height(h).html(
            Fruum.utils.xssProtect(
              Fruum.utils.print(
                this.ui.field_body.val(),
                this.ui_state.get('editing').attachments
              )
            )
          );
        } else {
          this.ui.preview_panel.hide();
          this.ui.field_body.show();
        }
      },

      // ------------------------------ ONBOARD --------------------------------

      startOnboard: function() {
        if (this.onboard_timer) clearTimeout(this.onboard_timer);
        this.onboard_timer = setTimeout(this._onboard, 100);
      },
      _onboard: function() {
        this.onboard_timer = null;
        if (!this.ui_state.get('editing').type) {
          Fruum.io.trigger('fruum:set_onboard', 'add_stream');
          Fruum.io.trigger('fruum:set_onboard', 'add_category');
          Fruum.io.trigger('fruum:set_onboard', 'manage');
          Fruum.io.trigger('fruum:set_onboard', 'edit');
          Fruum.io.trigger('fruum:set_onboard', 'watch');
          Fruum.io.trigger('fruum:set_onboard', 'breadcrumb');
        }
      },

      // ------------------------------- EDIT ----------------------------------

      onHeaderBlur: function(event) {
        if (this.ui.field_initials.length && !this.ui.field_initials.val()) {
          this.ui.field_initials.val(
            (this.ui.field_header.val() || '').substr(0, 3)
          );
          this.onInitialsKeydown(event);
        }
      },
      onBodyBlur: function(event) {
        this.autocomplete_view.hide();
      },
      onInitialFocus: function() {
        this.ui.field_initials.select();
      },
      onInitialsKeydown: function(event) {
        this.ui.field_initials.parent().attr('data-initials', Fruum.utils.printInitials(this.ui.field_initials.val()));
      },
      onChannelKey: function(event) {
        switch (event.which) {
          case 13: // Enter
            if (!event._autocomplete_consumed) {
              this.onPost(event);
            }
            break;
          case 27: // Escape
            if (!event._autocomplete_consumed) {
              this.ui.channel_input.val('').blur();
            }
            break;
        }
      },
      onBodyKeydown: function(event) {
        // send type notification
        this.typeNotificationStart();
        if (event.metaKey || event.ctrlKey) {
          var selection = null;
          switch (event.which) {
            case 13: // enter
              if (this.ui_state.get('editing').type == 'post') {
                var that = this;
                this.ui.post.addClass('fruum-button-active');
                setTimeout(function() {
                  that.onPost(event);
                  that.ui.post.removeClass('fruum-button-active');
                }, 100);
              }
              break;
            case 66: // b
            case 73: // i
              selection = (this.ui.field_body.getSelection() || {}).text;
              event.preventDefault();
              break;
          }
          switch (event.which) {
            case 66: // b
              if (selection) this.ui.field_body.replaceSelection('**' + selection + '**');
              else this.ui.field_body.val(this.ui.field_body.val() + ' **bold**');
              break;
            case 73: // i
              if (selection) this.ui.field_body.replaceSelection('*' + selection + '*');
              else this.ui.field_body.val(this.ui.field_body.val() + ' *italics*');
              break;
          }
        } else if (event.which == 13) {
          // onboard
          if (this.post_count % 2) {
            Fruum.io.trigger('fruum:set_onboard', 'help');
          } else {
            Fruum.io.trigger('fruum:set_onboard', 'preview');
            Fruum.io.trigger('fruum:set_onboard', 'attachments');
          }
          // smart markdown
          this.onSmartText(event);
        }
        this.autocomplete_view.onKey(event);
      },
      onSmartText: function(event) {
        // smart markdown, get last line
        var curretPos = this.ui.field_body.prop('selectionStart');
        if (curretPos) {
          // get last line
          var text = this.ui.field_body.val() || '',
              line_start = text.lastIndexOf('\n', curretPos - 1);

          if (line_start < curretPos) {
            var line = text.substr(line_start + 1, curretPos - line_start - 1) || '',
                tabs = line.search(/\S/) || 0,
                smart_text;

            line = $.trim(line);
            // check for list or empty list
            if (line == '*' || line == '+' || line == '-') {
              // remove line
              this.ui.field_body.val(
                Fruum.utils.truncateString(text, line_start + 1, curretPos, '\n')
              );
              Fruum.utils.setCaretPosition(this.ui.field_body, line_start + 2);
              event.preventDefault();
            } else if (line.indexOf('* ') == 0) {
              smart_text = Fruum.utils.padFactory(' ', tabs) + '* ';
            } else if (line.indexOf('+ ') == 0) {
              smart_text = Fruum.utils.padFactory(' ', tabs) + '+ ';
            } else if (line.indexOf('- ') == 0) {
              smart_text = Fruum.utils.padFactory(' ', tabs) + '- ';
            } else {
              // numbered list
              var match = line.match(/(^\d+)\. /);
              if (match && match[1] | 0) {
                match = (match[1] | 0) + 1;
                smart_text = Fruum.utils.padFactory(' ', tabs) + match + '. ';
              }
            }
            // inject smart text
            if (smart_text) {
              this.ui.field_body.val(Fruum.utils.injectString(text, '\n' + smart_text, curretPos));
              Fruum.utils.setCaretPosition(this.ui.field_body, curretPos + smart_text.length + 1);
              event.preventDefault();
            }
          }
        }
      },
      onKeyBody: function(event) {
        var editing = this.ui_state.get('editing');
        editing.body = this.ui.field_body.val() || '';
        this.onKeyAny(event);
      },
      onKeyHeader: function(event) {
        var editing = this.ui_state.get('editing');
        editing.header = this.ui.field_header.val() || '';
        this.onKeyAny(event);
      },
      onKeyInitials: function(event) {
        var editing = this.ui_state.get('editing');
        editing.initials = this.ui.field_initials.val() || '';
      },
      onKeyTags: function(event) {
        // check for trailing space
        if (event.which == 32) {
          var tags = this.ui.field_tags.val() || '';
          if (tags.charAt(tags.length - 1) == ' ' && tags.charAt(tags.length - 2) != ',') {
            tags = (tags.trim() + ', ').replace(/,{2,}/g, ',').replace(/, ,/g, ', ');
            this.ui.field_tags.val(tags);
          }
        }
      },
      onKeyAny: function(event) {
        if (event && event.which == 27) {
          // check if all fields are empty
          if (!this.ui.field_header.val() && !this.ui.field_body.val()) {
            this.onCancel();
          }
        }
      },
      onPasteBody: function(event) {
        var clp = (event.originalEvent || event).clipboardData;
        if (clp && clp.getData) {
          var text = clp.getData('text/html') || '';
          if (text) {
            try {
              text = toMarkdown(text, { converters: [
                {
                  filter: ['html', 'body', 'span', 'div'],
                  replacement: function(innerHTML) {
                    return innerHTML;
                  },
                },
                {
                  filter: ['head', 'script', 'style', 'input', 'form'],
                  replacement: function() { return ''; },
                }
              ]});
              event.preventDefault();
              this.ui.field_body.replaceSelection(text);
            } catch (err) {}
            return;
          }
          // try text plain
          text = clp.getData('text/plain') || clp.getData('Text');
          if (text) {
            // find links
            if (Fruum.utils.startsWith(text, 'https://') ||
                Fruum.utils.startsWith(text, 'http://')
            ) {
              // check for image
              if (_.some(['.png', '.jpg', '.jpeg', '.gif'], function(ext) {
                return Fruum.utils.endsWith(text, ext);
              })) {
                text = '![image](' + text + ')';
              } else {
                text = '[link](' + text + ')';
              }
              event.preventDefault();
              this.ui.field_body.replaceSelection(text);
              // select field
              var curretPos = this.ui.field_body.prop('selectionStart'),
                  el = this.ui.field_body.get(0);
              if (curretPos && el && el.setSelectionRange) {
                var value = this.ui.field_body.val() || '';
                el.setSelectionRange(
                  value.lastIndexOf('[', curretPos) + 1,
                  value.lastIndexOf(']', curretPos)
                );
              }
            }
          }
        }
      },

      // -------------------------------- BUTTONS ------------------------------

      onCancel: function() {
        this.ui_state.set('editing', {});
      },
      onAddCategory: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:unset_onboard', 'add_category');
        this.ui_state.set('editing', {
          type: 'category',
          parent: this.ui_state.get('viewing').id,
          permission: this.ui_state.get('viewing').permission,
        });
        this.ui.field_header.focus();
      },
      onAddArticle: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:unset_onboard', 'add_stream');
        this.ui_state.set('editing', {
          type: 'article',
          parent: this.ui_state.get('viewing').id,
        });
        this.ui.field_header.focus();
      },
      onAddBlog: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:unset_onboard', 'add_stream');
        this.ui_state.set('editing', {
          type: 'blog',
          parent: this.ui_state.get('viewing').id,
        });
        this.ui.field_header.focus();
      },
      onAddThread: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:unset_onboard', 'add_stream');
        this.ui_state.set('editing', {
          type: 'thread',
          parent: this.ui_state.get('viewing').id,
        });
        this.ui.field_header.focus();
      },
      onAddChannel: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:unset_onboard', 'add_stream');
        this.ui_state.set('editing', {
          type: 'channel',
          parent: this.ui_state.get('viewing').id,
        });
        this.ui.field_header.focus();
      },
      onAddPost: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:unset_onboard', 'add_stream');
        this.ui_state.set('editing', {
          type: 'post',
          parent: this.ui_state.get('viewing').id,
        });
        this.ui.field_body.focus();
      },
      onAddSearch: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        Fruum.io.trigger('fruum:show_bookmark', {
          body: this.ui_state.get('search'),
        });
      },
      onPost: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var editing = this.ui_state.get('editing'),
            id = editing.id || '',
            order = 0;
        switch (this.ui.field_type.val()) {
          case 'category':
            order = this.collections.categories.length + 1;
            // set default if they do not exist
            if (this.ui.field_initials.length && !this.ui.field_initials.val()) {
              this.ui.field_initials.val((this.ui.field_header.val() || '').substr(0, 3));
            }
            break;
          case 'article':
            order = this.collections.articles.length + 1;
            break;
        }
        if (editing.id) {
          id = editing.id;
          order = editing.order || order;
        }
        // prepare tags
        var tags = _.uniq(_.compact(
          (this.ui.field_tags.val() || '').
            replace(/ /g, ',').
            replace(/#/g, '').
            toLowerCase().
            split(',')
        ));
        var header = this.ui.field_header.val() || '',
            body = this.ui.field_body.val() || '',
            type = this.ui.field_type.val() || '';
        if (type == 'post' && !body) return;
        if (type != 'post' && !header) return;
        Fruum.io.trigger(id ? 'fruum:update' : 'fruum:add', {
          id: id,
          parent: this.ui.field_parent.val() || '',
          initials: this.ui.field_initials.val() || '',
          type: type,
          header: header,
          body: body,
          thumbnail: editing.thumbnail || '',
          attachments: this.cleanAttachments(body, editing.attachments || []),
          tags: tags,
          usage: this.ui.field_usage.data('value') | 0,
          permission: this.ui.field_permission.data('value') | 0,
          order: order,
        });
        this.post_count++;
      },
      // remove unused attachments
      cleanAttachments: function(body, attachments) {
        for (var i = attachments.length - 1; i >= 0; --i) {
          var attachment = attachments[i];
          if (!Fruum.utils.usesAttachment(body, attachment)) {
            attachments.splice(i, 1);
          }
        }
        return attachments;
      },

      // ------------------------- CATEGORY USE FOR ---------------------------

      onClickUsage: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.ui.popup_usage.toggleClass('fruum-nodisplay');
      },
      onSelectUsage: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var usage = $(event.target).closest('[data-usage]').data('usage') | 0;
        this.ui.field_usage.data('value', usage).html(Fruum.usage[usage]);
        this.ui.popup_usage.addClass('fruum-nodisplay');
      },

      // ------------------------- CATEGORY PERM -------------------------------

      onClickPermission: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.ui.popup_permission.toggleClass('fruum-nodisplay');
      },
      onSelectPermission: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var permission = $(event.target).closest('[data-permission]').data('permission') | 0;
        this.ui.field_permission.data('value', permission).html(Fruum.permission[permission]);
        this.ui.popup_permission.addClass('fruum-nodisplay');
      },
    });
  });
})();
/******************************************************************************
Handles search results
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var $ = Fruum.libs.$,
        Marionette = Fruum.libs.Marionette,
        TRANSITION = Fruum.utils.marionette_itemview_transition;

    Fruum.views.SearchResultEmptyView = TRANSITION(Marionette.View.extend({
      template: '#fruum-template-persona-fullpage',
      initialize: function(options) {
        this.ui_state = options.ui_state;
        this.listenTo(this.ui_state, 'change:search', function() {
          var current = this.ui_state.get('search'),
              previous = this.ui_state.previous('search');
          if ((current && !previous) || (previous && !current)) this.render();
        });
      },
      templateContext: function() {
        // get persona message
        var search = this.ui_state.get('search');
        return Fruum.utils.personaSays({
          permission: Fruum.user.admin ? 'write' : 'read',
          action: search ? 'no_search_results' : 'type_to_search',
          search: search,
        });
      },
    }));

    Fruum.views.SearchResultView = TRANSITION(Marionette.View.extend({
      template: '#fruum-template-search',
      ui: {
        search: '[data-search-shortcut]',
        navigate: '.fruum-js-navigate',
      },
      events: {
        'click @ui.search': 'onSearch',
        'click @ui.navigate': 'onNavigate',
      },
      onSearch: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var search = $(event.target).
          closest('[data-search-shortcut]').
          data('search-shortcut');
        if (!search) return;
        Fruum.io.trigger('fruum:set_search', search);
      },
      onNavigate: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var id = this.model.get('id');
        if (this.model.get('type') === 'post') id = this.model.get('parent');
        Fruum.io.trigger('fruum:view', { id: id });
        Fruum.io.trigger('fruum:clear_search');
      },
    }));

    Fruum.views.SearchView = Marionette.CollectionView.extend({
      emptyView: Fruum.views.SearchResultEmptyView,
      childView: Fruum.views.SearchResultView,
      initialize: function(options) {
        this.ui_state = options.ui_state;
      },
      childViewOptions: function() {
        return { ui_state: this.ui_state };
      },
    });
  });
})();
/******************************************************************************
Handles bookmark search
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var $ = Fruum.libs.$,
        _ = Fruum.libs._,
        Marionette = Fruum.libs.Marionette,
        TRANSITION = Fruum.utils.marionette_itemview_transition;

    Fruum.views.BookmarkItemView = Marionette.View.extend({
      template: '#fruum-template-bookmark-category',
      triggers: {
        'click': 'select:category',
      },
    });

    Fruum.views.BookmarkCollectionView = Marionette.CollectionView.extend({
      childView: Fruum.views.BookmarkItemView,
      onChildviewSelectCategory: function(childView) {
        // bubble to parent
        this.triggerMethod('select:category', childView.model);
      },
    });

    Fruum.views.BookmarkEditView = Marionette.View.extend({
      template: '#fruum-template-bookmark-edit',
      regions: {
        list: '.fruum-js-bookmark-categories',
      },
      ui: {
        close: '.fruum-js-close',
        delete: '.fruum-js-delete',
        header: '[data-field="header"]',
        body: '[data-field="body"]',
        store: '.fruum-js-store',
      },
      events: {
        'click @ui.close': 'onClose',
        'click @ui.delete': 'onDelete',
        'click @ui.store': 'onStore',
      },
      initialize: function(options) {
        _.bindAll(this, 'onKey');
        this.ui_state = options.model;
        this.all_categories = options.all_categories;
        this.categories = options.categories;
        this.listenTo(Fruum.io, 'fruum:show_bookmark', this.show);
        this.listenTo(Fruum.io, 'fruum:hide_bookmark', this.onClose);
        this.listenTo(this.all_categories, 'reset', this.onResetCategories);
      },
      onChildviewSelectCategory: function(model) {
        if (!this.bookmark) return;
        this.bookmark.parent = model.get('id');
        this.onResetCategories();
      },
      onResetCategories: function() {
        var that = this;
        _.defer(function() {
          if (that.bookmark && that.bookmark.parent) {
            that.$('[data-id]').removeClass('fruum-option-selected');
            that.$('[data-id="' + that.bookmark.parent + '"]').addClass('fruum-option-selected');
          }
        });
      },
      onClose: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        if (this.el_container.hasClass('fruum-nodisplay')) return;
        this.el_container.addClass('fruum-nodisplay');
        $(document).off('keydown', this.onKey);
      },
      onDelete: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        if (!this.bookmark || !this.bookmark.id) return;
        Fruum.io.trigger('fruum:delete', { id: this.bookmark.id });
        this.onClose();
      },
      onStore: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        if (!this.bookmark || !this.bookmark.parent) return;
        var header = $.trim(this.ui.header.val() || ''),
            body = $.trim(this.ui.body.val() || '') || this.bookmark.body;
        if (!header || !body) return;
        Fruum.io.trigger(this.bookmark.id ? 'fruum:update' : 'fruum:add', {
          id: this.bookmark.id || '',
          parent: this.bookmark.parent,
          header: header,
          type: 'bookmark',
          body: body,
          order: this.bookmark.id ? this.bookmark.order : (this.categories.length + 1),
        });
        this.onClose();
        if (!this.bookmark.id) Fruum.io.trigger('fruum:clear_search');
      },
      onKey: function(event) {
        if (event.which == 27) this.onClose();
      },
      onRender: function() {
        this.el_container = this.$el.parent();
        this.showChildView('list', new Fruum.views.BookmarkCollectionView({
          collection: this.all_categories,
        }));
      },
      show: function(bookmark) {
        if (!bookmark || !bookmark.body) return;
        this.bookmark = bookmark;
        this.render();
        if (!this.el_container.hasClass('fruum-nodisplay')) return;
        this.el_container.removeClass('fruum-nodisplay');
        $(document).on('keydown', this.onKey);
        Fruum.io.trigger('fruum:categories', {});
        this.ui.header.focus();
      },
      templateContext: function() {
        return {
          bookmark: this.bookmark || {},
        };
      },
    });

    Fruum.views.BookmarkSearchResultView = TRANSITION(Marionette.View.extend({
      template: '#fruum-template-bookmarksearch',
      ui: {
        search: '[data-search-shortcut]',
        navigate: '.fruum-js-navigate',
      },
      events: {
        'click @ui.search': 'onSearch',
        'click @ui.navigate': 'onNavigate',
      },
      onSearch: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var search = $(event.target).
          closest('[data-search-shortcut]').
          data('search-shortcut');
        if (!search) return;
        Fruum.io.trigger('fruum:set_search', search);
      },
      onNavigate: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        var id = this.model.get('id');
        if (this.model.get('type') === 'post') id = this.model.get('parent');
        Fruum.io.trigger('fruum:view', { id: id });
      },
    }));

    Fruum.views.BookmarkSearchView = Marionette.CollectionView.extend({
      childView: Fruum.views.BookmarkSearchResultView,
    });
  });
})();
/******************************************************************************
Onboarding widget
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var $ = Fruum.libs.$,
        _ = Fruum.libs._,
        Backbone = Fruum.libs.Backbone;

    var MESSAGES = {
      breadcrumb: {
        tip: '<strong>Psst!</strong> You can use the breadcrumb to go back.',
        key: 1 << 1,
      },
      add_stream: {
        tip: 'Share your thoughts and ideas by clicking here.',
        key: 1 << 2,
      },
      add_category: {
        tip: '<strong>Psst!</strong> You can click here and add categories to organize your topics.',
        key: 1 << 3,
      },
      edit: {
        tip: '<strong>Hey!</strong> In case you want to edit your __type__ click here.',
        key: 1 << 4,
      },
      manage: {
        tip: '<strong>Hey!</strong> In case you want to manage this __type__ click here.',
        key: 1 << 5,
      },
      watch: {
        tip: '<strong>Hey!</strong> You&#39;re watching this __type__! You will receive notifications on updates.',
        key: 1 << 6,
      },
      preview: {
        tip: '<strong>Psst!</strong> Preview how your __type__ will look like by clicking this button.',
        key: 1 << 7,
      },
      attachments: {
        tip: 'An image is worth a thousand words, you can add some by clicking here.',
        key: 1 << 8,
      },
      help: {
        tip: '<strong>Hey!</strong> Enhance your messages with markdown typography, click to see how.',
        key: 1 << 9,
      },
    };

    Fruum.views.OnboardingView = Backbone.View.extend({
      events: {
        'click .fruum-js-onboarding-ok': 'onOK',
      },
      show_delay: 2000,
      hide_delay: 9000,
      anim_yoffset: 35,
      initialize: function(options) {
        _.bindAll(this, 'consume', 'hide');
        this.ui_state = options.ui_state;
        this.root_el = options.root_el;
        this.template_top = _.template($('#fruum-template-onboarding-top').html());
        this.template_bottom = _.template($('#fruum-template-onboarding-bottom').html());
        this.listenTo(Fruum.io, 'fruum:set_onboard', this.addMessage);
        this.listenTo(Fruum.io, 'fruum:unset_onboard', this.removeMessage);
        this.listenTo(this.ui_state, 'change:searching', function() {
          if (this.ui_state.get('searching')) Fruum.io.trigger('fruum:set_onboard');
        });
        this.listenTo(this.ui_state, 'change:loading', function() {
          Fruum.io.trigger('fruum:set_onboard');
        });
        this.queue = [];
        this.delay_offset = 0;
        this.noop = true;
      },
      removeMessage: function(message) {
        if (Fruum.user.anonymous) return;
        if (message && MESSAGES[message] && !(Fruum.user.onboard & MESSAGES[message].key)) {
          Fruum.user.onboard |= MESSAGES[message].key;
          Fruum.io.trigger('fruum:onboard', { onboard: Fruum.user.onboard });
          if (this.viewing == message) {
            if (this.timer_hide) clearTimeout(this.timer_hide);
            this.hide();
          }
        }
      },
      addMessage: function(message) {
        if (Fruum.user.anonymous) return;
        if (!message) {
          // purge all
          this.queue = [];
          this.delay_offset = 0;
          if (this.timer_show) {
            clearTimeout(this.timer_show);
            this.timer_show = null;
          }
          if (this.timer_hide) {
            clearTimeout(this.timer_hide);
            this.timer_hide = null;
          }
          this.hide();
          return;
        }
        if (this.queue.indexOf(message) < 0 && this.validate(message)) {
          this.queue.push(message);
          if (!this.timer_show && !this.viewing) {
            this.timer_show = setTimeout(this.consume, this.show_delay + this.delay_offset);
          }
        }
      },
      validate: function(message) {
        return message &&
            MESSAGES[message] &&
            !(Fruum.user.onboard & MESSAGES[message].key) &&
            this.root_el.find('[data-onboard="' + message + '"]').length;
      },
      hide: function() {
        this.timer_hide = null;
        this.noop = true;
        if (!this.$el) return;
        var that = this;
        this.$el.fadeOut(200, function() {
          that.$el.remove();
          that.undelegateEvents();
          that.$el = null;
          that.viewing = null;
          // consume next
          if (that.queue.length) {
            if (that.timer_show) clearTimeout(that.timer_show);
            that.timer_show = setTimeout(that.consume, that.show_delay + that.delay_offset);
          }
        });
      },
      consume: function() {
        this.timer_show = null;
        while (this.queue.length) {
          var message = this.queue.shift();
          if (this.validate(message)) {
            this.viewing = message;
            this.noop = true;

            var target = this.root_el.find('[data-onboard="' + message + '"]').eq(0),
                target_top = target.offset().top - this.root_el.offset().top,
                target_center = target.offset().left - this.root_el.offset().left +
                                target.innerWidth() / 2,
                anim = { opacity: 1 },
                tip = MESSAGES[message].tip,
                that = this;

            tip = tip.replace('__type__', this.ui_state.get('viewing').type || 'message');

            if (target_top < this.root_el.height() / 2) {
              var top = target_top + target.height();
              anim.top = top + 'px';
              this.root_el.append(this.template_top({
                left: target_center,
                top: top + this.anim_yoffset,
                tip: tip,
              }));
            } else {
              var bottom = this.root_el.height() - target_top;
              anim.bottom = bottom + 'px';
              this.root_el.append(this.template_bottom({
                left: target_center,
                bottom: bottom + this.anim_yoffset,
                tip: tip,
              }));
            }

            this.$el = this.root_el.find('.fruum-onboarding');
            this.delegateEvents();
            this.$el.animate(anim, 400, 'easeInOutBack', function() {
              that.noop = false;
              that.delay_offset += that.show_delay;
            });
            this.timer_hide = setTimeout(this.hide, this.hide_delay);
            return;
          }
        }
      },
      onOK: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        if (this.viewing && !this.noop) {
          Fruum.user.onboard |= MESSAGES[this.viewing].key;
          if (this.timer_hide) clearTimeout(this.timer_hide);
          this.hide();
          Fruum.io.trigger('fruum:onboard', { onboard: Fruum.user.onboard });
        }
      },
    });
  });
})();
/******************************************************************************
Handles sharing functionality
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var $ = Fruum.libs.$,
        _ = Fruum.libs._,
        Marionette = Fruum.libs.Marionette;

    Fruum.views.ShareView = Marionette.View.extend({
      template: _.noop,
      events: {
        'click .fruum-popup-close': 'onClose',
        'click textarea': 'onSelect',
      },
      initialize: function(options) {
        this.ui_state = options.ui_state;
        this.listenTo(Fruum.io, 'fruum:share', this.onShare);
        this.listenTo(Fruum.io, 'fruum:view', this.onView);
      },
      onShare: function(el_caller, post_index) {
        if (el_caller) {
          this.$el.css('top', (el_caller.offset().top - this.$el.parent().offset().top) + 'px');
        }
        this.$el.removeClass('fruum-nodisplay').find('textarea').
          val(Fruum.utils.permaLink(this.ui_state.get('viewing').id, post_index)).
          focus().
          select();
      },
      onView: function() {
        this.onClose();
      },
      onClose: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.$el.addClass('fruum-nodisplay');
      },
      onSelect: function(event) {
        $(event.target).focus().select();
      },
    });
  });
})();
/******************************************************************************
Handles move document
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var $ = Fruum.libs.$,
        _ = Fruum.libs._,
        Marionette = Fruum.libs.Marionette,
        Messages = Fruum.messages;

    Fruum.views.MoveItemView = Marionette.View.extend({
      template: '#fruum-template-move-entry',
      triggers: {
        'click': 'select:category',
      },
    });

    Fruum.views.MoveCollectionView = Marionette.CollectionView.extend({
      childView: Fruum.views.MoveItemView,
      initialize: function(options) {
        this.ui_state = options.ui_state;
      },
      onChildviewSelectCategory: function(childView) {
        // bubble to parent
        this.triggerMethod('select:category', childView.model);
      },
      filter: function(child, index, collection) {
        return child.get('id') != this.ui_state.get('viewing').id;
      },
    });

    Fruum.views.MoveView = Marionette.View.extend({
      template: '#fruum-template-move',
      regions: {
        list: '.fruum-js-move-entries',
      },
      ui: {
        close: '.fruum-js-close',
      },
      events: {
        'click @ui.close': 'onClose',
      },
      initialize: function(options) {
        _.bindAll(this, 'onKey');
        this.ui_state = options.model;
        this.all_categories = options.all_categories;
        this.listenTo(Fruum.io, 'fruum:show_move', this.show);
      },
      onChildviewSelectCategory: function(model) {
        if (!this.move_document) return;
        if (confirm(Messages.move)) {
          Fruum.io.trigger('fruum:move', {
            id: this.move_document.id,
            category: model.get('id'),
          });
          this.onClose();
        }
      },
      onClose: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        if (this.el_container.hasClass('fruum-nodisplay')) return;
        this.el_container.addClass('fruum-nodisplay');
        $(document).off('keydown', this.onKey);
      },
      onKey: function(event) {
        if (event.which == 27) this.onClose();
      },
      onRender: function() {
        this.el_container = this.$el.parent();
        this.showChildView('list', new Fruum.views.MoveCollectionView({
          ui_state: this.ui_state,
          collection: this.all_categories,
        }));
      },
      show: function(move_document) {
        if (!move_document) return;
        this.move_document = move_document;
        this.render();
        if (!this.el_container.hasClass('fruum-nodisplay')) return;
        this.el_container.removeClass('fruum-nodisplay');
        $(document).on('keydown', this.onKey);
        Fruum.io.trigger('fruum:categories', {});
      },
      templateContext: function() {
        return {
          move_document: this.move_document,
        };
      },
    });
  });
})();
/******************************************************************************
Handles empty categories
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  window.Fruum.require.push(function() {
    Fruum.views = Fruum.views || {};

    var $ = Fruum.libs.$,
        Marionette = Fruum.libs.Marionette,
        TRANSITION = Fruum.utils.marionette_itemview_transition;

    Fruum.views.EmptyView = TRANSITION(Marionette.View.extend({
      ui: {
        navigate: '[data-navigate]',
      },
      events: {
        'click @ui.navigate': 'onNavigate',
      },
      modelEvents: {
        'change:viewing change:load_state change:view_req': 'render',
      },
      onNavigate: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
          var link = $(event.target).closest('[data-navigate]').data('navigate');
          if (link) {
            Fruum.io.trigger('fruum:view', { id: link });
          }
        }
      },
      getTemplate: function() {
        var load_state = this.model.get('load_state'),
            viewing = this.model.get('viewing');
        if (load_state == 'not_found' || viewing.type == 'category') {
          return '#fruum-template-persona-fullpage';
        } else {
          return '#fruum-template-persona';
        }
      },
      templateContext: function() {
        var viewing = this.model.get('viewing'),
            load_state = this.model.get('load_state'),
            view_req = this.model.get('view_req'),
            action = '',
            permission = 'read';

        // find action
        if (load_state == 'not_found') {
          if (view_req == 'home') action = 'private_forum';
          else action = 'not_found';
        } else if (viewing.id === 'home') {
          action = 'empty_home';
        } else if (viewing.type == 'category') {
          action = 'empty_category';
          switch (viewing.usage) {
            case 0:
              action += '_thread';
              break;
            case 1:
              action += '_article';
              break;
            case 2:
              action += '_blog';
              break;
            case 3:
              action += '_channel';
              break;
          }
        } else {
          action = 'empty_' + viewing.type;
        }

        if (Fruum.user.administrator) {
          // admin has always write permission
          permission = 'write';
        } else if (!Fruum.user.anonymous) {
          // logged in
          if (viewing.type == 'category' && (viewing.usage == 0 || viewing.usage == 3)) {
            permission = 'write';
          }
        }

        return Fruum.utils.personaSays({
          permission: permission,
          action: action,
          categoryname: viewing.header,
        });
      },
    }));
  });
})();
/******************************************************************************
 Empty states (persona default)
*******************************************************************************/

(function() {
  'use strict';
  var persona_avatar = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxNi0wMS0yNVQwOToxNTozMiswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTYtMDktMDJUMDY6MzY6MjIrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTYtMDktMDJUMDY6MzY6MjIrMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU4MDM3NkVGNjhGQjExRTY5QUFEODY2QjQyRDk0NzRDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU4MDM3NkYwNjhGQjExRTY5QUFEODY2QjQyRDk0NzRDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTgwMzc2RUQ2OEZCMTFFNjlBQUQ4NjZCNDJEOTQ3NEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTgwMzc2RUU2OEZCMTFFNjlBQUQ4NjZCNDJEOTQ3NEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ohObbAAAAGFBMVEWKiop3d3eEhISWlpaRkZF9fX10dHSZmZnPHIhgAAAAY0lEQVR42uzUwQrAMAgD0Fib7P//ePch3dZethKPIg8RFcdiwIABAxsDFMvSOl8Akkqgzhsw8Flg+Rb8UAwY2APInmtAUxB4oVyB0DB4C4Bj4sEQs6MxYrYDL5IBA78FTgEGAJmsbvJo4OB5AAAAAElFTkSuQmCC';

  // variables: <username>, <categoryname>, <search>
  var messages = {
    empty_home: {
      read: ['Sorry <username>, nothing to show here yet, please visit again later'],
      write: [
        'No content to display here yet. You can create categories and articles by using the actions below.',
        'Nothing to show here, <username>. You can populate this page using the actions at the bottom.'
      ],
    },
    empty_category_article: {
      read: ['Sorry, no articles here yet. Users will be adding articles so consider paying a visit later.'],
      write: ['Hello <b><username></b>, you can be the first writing an article here.'],
    },
    empty_category_thread: {
      read: ['Hello <username>, no discussions here yet. You can visit again later or <b>login and add a thread</b>!'],
      write: ['Hello <username>, no discussions here yet. You can start a discussion using the actions below.'],
    },
    empty_category_blog: {
      read: ['Hello <username>, no blogposts here yet. Visit again later for updates.'],
      write: ['Hello, noone has added a blogpost here yet. You can be the first to <b>add a good blogpost</b>, <username>!'],
    },
    empty_category_channel: {
      read: ['No chats added here yet. Consider coming back later!'],
      write: ['No chats in here yet <username>. You can pick your topic and <b>add a chat</b>.'],
    },
    empty_category: {
      read: ['Noone has added content here yet. Please visit later for updates.'],
      write: ['Hello <username>, seems <categoryname> has no content yet.<br>You can contribute with your thoughts and ideas on <b><categoryname></b>.'],
    },
    empty_article: {
      read: ['This is awkward! A single title! Please visit again later to see if the story is updated.'],
      write: ['Hello <username>, seems like someone forgot to add the actual story in here.You can share your thoughts on the matter or visit again later to see any updates.'],
    },
    empty_thread: {
      read: ['This is awkward! A single title! You can visit again later or login to share your own thoughts!'],
      write: ['Hello <username>, seems like someone forgot to add the actual story in here. You can share your thoughts or visit again later to see any updates.'],
    },
    empty_blog: {
      read: ['Hello, this is awkward! A single title! Please visit again later to see if the story is updated.'],
      write: ['Hello <username>, seems like someone forgot to add the actual story in here. If you have something to share, start typing!'],
    },
    empty_channel: {
      read: [
        'I&#39;m the only one here! Take your time and wonder around! I&#39;m pretty sure people will come later.'
      ],
      write: [
        'Hello <username>, I see you came to say something and found noone here. Start typing your thought and people will follow!'
      ],
    },
    no_search_results: {
      read: [
        'Sorry <b><username></b>, but no results found for <b><search></b>',
        'No results found for <b><search></b>.<br>You can try using a different search term.'
      ],
      write: [
        'No results found for <b><search></b>',
        'No results for <b><search></b>,<br>please consider using a different search term.'
      ],
    },
    type_to_search: {
      read: [
        'Type your search to find answers',
        'Start by typing your search. Did you know you can search on tags by typing <b>#tag</b>, like <i>#bug</i>?'
      ],
      write: [
        'Type your search to find your answers',
        'Start by typing your search. Did you know you can search on tags by typing <b>#tag</b>, like <i>#bug</i>?'
      ],
    },
    not_found: {
      topic: [
        'Sorry <b><username></b>, topic not found!'
      ],
      text: [
        'Seems like somebody gave you a wrong link.<br>Try searching for something similar or return <a class="fruum-link" href="javascript:;" data-navigate="home">Home</a>.'
      ],
    },
    private_forum: {
      topic: [
        'Sorry <b><username></b>, this is a private area!'
      ],
      text: [
        'If somebody gave you that link, you can tell him that you have a permission problem accessing that topic.'
      ],
    },
    idle: {
      read: [],
      write: [],
    },
  };

  var defaults = {
    default_username: 'guest',
    avatar_url: persona_avatar,
  };

  window.Fruum.plugins.push(function() {
    var _ = window.Fruum.libs._;

    this.personaSays = function(payload) {
      var perm = payload.permission || 'read',
          action = messages[payload.action];
      if (payload.action == 'not_found' || payload.action == 'private_forum') {
        return _.extend({
          topic: action.topic[_.random(0, action.topic.length - 1)],
          text: action.text[_.random(0, action.text.length - 1)],
        }, defaults);
      }
      if (action && action[perm] && action[perm].length) {
        var entries = action[perm];
        var entry = entries[_.random(0, entries.length - 1)];
        return _.extend({ text: entry }, defaults);
      }
    };
  });
})();
/******************************************************************************
 Youtube links processor plugin
*******************************************************************************/

(function() {
  'use strict';
  window.Fruum.plugins.push(function() {
    var re = /((?:http:\/\/|https:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.*?)([^\s]+))/g;
    this.post_content = function(markdown) {
      return markdown.replace(
        re,
        '<p class="fruum-youtube-container"><a href="$1">$1</a>' +
        '<iframe src="https://www.youtube.com/embed/$3" frameborder="0" class="fruum-youtube-iframe" allowfullscreen></iframe></p>\n'
      );
    };
  });
})();
/******************************************************************************
 Vimeo links processor plugin
*******************************************************************************/

(function() {
  'use strict';
  window.Fruum.plugins.push(function() {
    var re = /(?:http:\/\/|https:\/\/)?(?:www\.)?(?:vimeo\.com)\/([^\s]+)/g;
    this.post_content = function(markdown) {
      return markdown.replace(re, '<iframe src="//player.vimeo.com/video/$1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    };
  });
})();
/******************************************************************************
 Dropbox image links processor plugin
*******************************************************************************/

(function() {
  'use strict';
  window.Fruum.plugins.push(function() {
    var re = /\.(jpe?g|png|gif|bmp)$/i;
    this.post_content = function(markdown) {
      if (markdown.indexOf('https://www.dropbox.com/s/') == 0 &&
          re.test(markdown.replace('?dl=0', ''))
      ) {
        markdown += '\n\n![' + markdown + '](' + markdown.replace('www.dropbox.com', 'dl.dropbox.com') + ')';
      }
      return markdown;
    };
  });
})();
/******************************************************************************
 Twitch TV links processor plugin
*******************************************************************************/

(function() {
  'use strict';
  window.Fruum.plugins.push(function() {
    var $ = window.Fruum.libs.$,
        _ = window.Fruum.libs._,
        template = _.template($('#fruum-plugin-template-twitchtv').html()),
        re = /http:\/\/www.twitch.tv\/[a-zA_Z0-9_]+/gi;

    this.post_content = function(markdown) {
      return markdown.replace(re, function(match) {
        return template({ channel: match });
      });
    };
  });
})();
/******************************************************************************
 Soundcloud links processor plugin
*******************************************************************************/

(function() {
  'use strict';
  window.Fruum.plugins.push(function() {
    var $ = window.Fruum.libs.$,
        _ = window.Fruum.libs._,
        template = _.template($('#fruum-plugin-template-soundcloud').html()),
        re = /https:\/\/soundcloud.com\/[a-zA-Z0-9-_]+\/[a-zA-Z0-9-_]+/gi;

    this.post_content = function(markdown) {
      return markdown.replace(re, function(match) {
        return template({ channel: match });
      });
    };
  });
})();
/******************************************************************************
 Imgur links processor plugin
*******************************************************************************/

(function() {
  'use strict';
  window.Fruum.plugins.push(function() {
    var $ = window.Fruum.libs.$,
        _ = window.Fruum.libs._,
        template = _.template($('#fruum-plugin-template-imgur').html()),
        re = /https?:\/\/[w\.]*imgur\.[^\/]*\/([^?][^\s]*)/gi; // eslint-disable-line

    function endsWith(str, suffix) {
      return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    this.post_content = function(markdown) {
      return markdown.replace(re, function(match, id) {
        if (endsWith(match, '.png') ||
            endsWith(match, '.gif') ||
            endsWith(match, '.jpg') ||
            id.indexOf('gallery/') >= 0
        ) return match;
        return template({ id: id });
      });
    };
  });
})();
/******************************************************************************
 Image links processor plugin
*******************************************************************************/

(function() {
  'use strict';
  window.Fruum.plugins.push(function() {
    var re = /(?:^|\s)https?:\/\/.*?\.(?:png|jpg|jpeg|gif)(?:$|\s)/ig;

    this.post_content = function(markdown) {
      return markdown.replace(re, function(match) {
        match = match.trim();
        return ' ![' + match + '](' + match + ') ';
      });
    };
  });
})();
/******************************************************************************
Main client app
*******************************************************************************/

/* globals Fruum */

(function() {
  'use strict';
  // here we define the address of the server that is hosting fruum files
  var remote_host = window.fruumSettings.fruum_host;
  // executes a function by string
  function executeFunctionByName(functionName, context /*, args */) {
    var args = [].slice.call(arguments).splice(2);
    var namespaces = functionName.split('.');
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
  }
  // loads css and html to display fruum panel
  function setup() {
    // load css
    var $ = Fruum.libs.$,
        fruum_html, fruum_css;

    function loadHTML() {
      $('head').append('<style>' + fruum_css + '</style>');
      if (window.fruumSettings.container && $(window.fruumSettings.container).length) {
        $(window.fruumSettings.container).html(fruum_html);
      } else {
        $('body').append(fruum_html);
      }
      run();
    }

    $.get(remote_host + '/_/get/style/' + window.fruumSettings.app_id, function(data) {
      fruum_css = data;
      if (fruum_css && fruum_html) loadHTML();
    });
    $.get(remote_host + '/_/get/html/' + window.fruumSettings.app_id, function(data) {
      fruum_html = data;
      if (fruum_css && fruum_html) loadHTML();
    });
  }

  // when all dependencies have been loaded, start the app
  function run() {
    Fruum.application = {
      fullpage_url: window.fruumSettings.fullpage_url,
      pushstate: window.fruumSettings.fullpage_url && window.fruumSettings.pushstate,
    };

    // libraries
    var $ = Fruum.libs.$,
        _ = Fruum.libs._,
        Backbone = Fruum.libs.Backbone,
        Marionette = Fruum.libs.Marionette,
        io = Fruum.libs.io;

    // load requirements
    _.each(Fruum.require, function(fn) { fn(); });

    // cache some stuff
    var Models = Fruum.models,
        Collections = Fruum.collections,
        Views = Fruum.views;

    // root view
    var RootView = Marionette.View.extend({
      template: _.noop,
      ui: {
        navigation: '.fruum-js-navigation-container',
        content: '.fruum-js-content-container',
        list: '.fruum-js-objects-list',
        share: '.fruum-js-share-container',

        divider_category_article: '.fruum-js-divider-category-article',
        divider_article_blog: '.fruum-js-divider-article-blog',
        divider_blog_thread: '.fruum-js-divider-blog-thread',
        divider_thread_channel: '.fruum-js-divider-thread-channel',

        message_signin: '.fruum-js-message-signin',
        message_reconnect: '.fruum-js-message-reconnecting',
        message_invalid_app: '.fruum-js-message-invalid-app',
        message_restore: '.fruum-js-message-restore',
        message_report: '.fruum-js-message-report',
        message_account_removed: '.fruum-js-message-account-removed',
        message_account_not_exists: '.fruum-js-message-account-not-exists',

        restore_undo: '.fruum-js-restore-undo',
        sticky_section: '.fruum-section-sticky',
        close: '.fruum-js-panel-close',
        maximize: '.fruum-js-panel-maximize',
      },
      regions: {
        breadcrumb: '.fruum-js-region-breadcrumb',
        title: '.fruum-section-title',
        filters: '.fruum-js-region-filters',
        counters: '.fruum-js-region-counters',
        loading: '.fruum-is-loading',
        categories: '.fruum-category-list',
        articles: '.fruum-article-list',
        blogs: '.fruum-blog-list',
        threads: '.fruum-thread-list',
        channels: '.fruum-channel-list',
        posts: '.fruum-post-list',
        search: '.fruum-search-list',
        bookmarksearch: '.fruum-bookmarksearch-list',
        interactions: '.fruum-interactions-section',
        empty: '.fruum-empty-list',
        move: '.fruum-js-move',
        bookmark: '.fruum-js-bookmark',
        profile: '.fruum-js-profile',
      },
      events: {
        'keydown input, textarea': 'onInterceptKeyboard',
        'keyup input, textarea': 'onInterceptKeyboard',
        'click @ui.close': 'onClose',
        'click @ui.maximize': 'onMaximize',
        'click @ui.restore_undo': 'onRestore',
      },
      initialize: function() {
        var that = this;
        // saves scroll state for viewed documents
        this.scroll_history = {};
        // typing template
        this.template_typing = _.template($('#fruum-template-interactions-typing').html());
        this.typing_users = new Backbone.Collection();

        _.bindAll(this,
          'resize', 'onScroll', 'calculateViewRegions',
          '_scrollTop', '_scrollBottom', '_snapTop', '_snapBottom',
          'restoreScrollState', 'saveScrollState', 'onGlobalKey',
          'calculateUpdatesCount'
        );
        $(window).resize(function() {
          Fruum.io.trigger('fruum:resize');
        });
        // models
        while (this._consumeData());
        this.ui_state = new Models.UIState();
        this.profile = new Models.Profile();
        this.all_categories = new Collections.Categories();
        this.categories = new Collections.Categories();
        this.threads = new Collections.Threads();
        this.articles = new Collections.Articles();
        this.blogs = new Collections.Blogs();
        this.channels = new Collections.Channels();
        this.posts = new Collections.Posts();
        this.search = new Collections.Search();
        this.bookmarksearch = new Collections.Search();
        this.notifications = new Collections.Notifications();
        this.profile_topics = new Collections.ProfileTopics();
        this.profile_replies = new Collections.ProfileReplies();
        this.profile_users = new Collections.ProfileUsers();
        this.socket = io(remote_host);


        // initialize plugins
        Fruum.utils.chain(Fruum.processors.init, this);

        // initialize standard regions
        this.showChildView('breadcrumb', new Views.BreadcrumbView({
          model: this.ui_state,
        }));
        this.showChildView('title', new Views.TitleView({
          model: this.ui_state,
        }));
        this.showChildView('filters', new Views.FiltersView({
          model: this.ui_state,
        }));
        this.showChildView('counters', new Views.CountersView({
          model: this.ui_state,
        }));
        this.showChildView('loading', new Views.LoadingView({
          model: this.ui_state,
          content: this.$(this.ui.list),
        }));
        this.showChildView('categories', new Views.CategoriesView({
          collection: this.categories,
          ui_state: this.ui_state,
        }));
        this.showChildView('articles', new Views.ArticlesView({
          collection: this.articles,
          ui_state: this.ui_state,
        }));
        this.showChildView('blogs', new Views.BlogsView({
          collection: this.blogs,
          ui_state: this.ui_state,
        }));
        this.showChildView('threads', new Views.ThreadsView({
          collection: this.threads,
          ui_state: this.ui_state,
        }));
        this.showChildView('channels', new Views.ChannelsView({
          collection: this.channels,
          ui_state: this.ui_state,
        }));
        this.showChildView('posts', new Views.PostsView({
          collection: this.posts,
          ui_state: this.ui_state,
        }));
        this.showChildView('search', new Views.SearchView({
          collection: this.search,
          ui_state: this.ui_state,
        }));
        this.showChildView('bookmarksearch', new Views.BookmarkSearchView({
          collection: this.bookmarksearch,
          ui_state: this.ui_state,
        }));
        this.showChildView('empty', new Views.EmptyView({
          model: this.ui_state,
        }));
        this.showChildView('interactions', new Views.InteractionsView({
          model: this.ui_state,
          collections: {
            categories: this.categories,
            threads: this.threads,
            articles: this.articles,
            blogs: this.blogs,
            channels: this.channels,
            posts: this.posts,
          },
        }));
        this.showChildView('move', new Views.MoveView({
          model: this.ui_state,
          all_categories: this.all_categories,
        }));
        this.showChildView('bookmark', new Views.BookmarkEditView({
          model: this.ui_state,
          all_categories: this.all_categories,
          categories: this.categories,
        }));
        this.showChildView('profile', new Views.ProfileView({
          model: this.profile,
          ui_state: this.ui_state,
          notifications: this.notifications,
          topics: this.profile_topics,
          replies: this.profile_replies,
          users: this.profile_users,
          parent: this.$(this.regions.profile),
        }));
        new Views.ShareView({ // eslint-disable-line
          ui_state: this.ui_state,
          el: this.$(this.ui.share),
        });
        new Views.OnboardingView({ // eslint-disable-line
          ui_state: this.ui_state,
          root_el: this.$el,
        });
        this.listenTo(this.ui_state, 'change:loading change:searching', this.onRefresh);
        this.listenTo(this.ui_state, 'change:searching', function() {
          if (!this.ui_state.get('searching')) {
            if (this.search.length) this.search.reset();
          }
        });
        this.listenTo(this.ui_state, 'change:viewing', function() {
          var type = this.ui_state.get('viewing').type;
          if (_.contains(['channel', 'thread', 'article', 'blog'], type)) {
            $(this.ui.sticky_section).removeClass('fruum-section-empty');
          } else {
            $(this.ui.sticky_section).addClass('fruum-section-empty');
          }
        });

        // ------------------- TYPING NOTIFICATIONS -------------------

        function _cleanTyping() {
          that.typing_timer = null;
          var to_delete = [], now = Date.now();
          that.typing_users.each(function(model) {
            if (now - model.get('timestamp') > 2000) to_delete.push(model);
          });
          that.typing_users.remove(to_delete);
          if (that.typing_users.length) _notifyTyping();
          else {
            that.$('.fruum-interactions-stream-update').slideUp('fast');
          }
        }
        function _notifyTyping() {
          if (that.typing_timer) clearTimeout(that.typing_timer);
          that.typing_timer = setTimeout(_cleanTyping, 1000);
          that.$('.fruum-interactions-stream-update').
            html(that.template_typing({ users: that.typing_users.toJSON() })).
            slideDown('fast');
        }
        this.listenTo(this.typing_users, 'add change:timestamp', _notifyTyping);

        // ------------------- IO EVENTS -------------------

        this.listenTo(Fruum.io, 'fruum:view_default', function() {
          Fruum.io.trigger('fruum:view', {
            id: window.fruumSettings.view_id ||
                that.ui_state.get('viewing').id ||
                Fruum.utils.sessionStorage('fruum:view:' + window.fruumSettings.app_id) ||
                'home',
            origin: window.fruumSettings.view_id ? 'link' : '',
          });
        });
        this.listenTo(Fruum.io, 'fruum:restore_view_route', function() {
          var id = that.ui_state.get('viewing').id;
          if (that.router && id) that.router.navigate('v/' + id, { replace: true });
        });
        this.listenTo(Fruum.io, 'fruum:scroll_top', this._scrollTop);
        this.listenTo(Fruum.io, 'fruum:scroll_bottom', this._scrollBottom);
        this.listenTo(Fruum.io, 'fruum:refresh', this.onRefresh);
        this.listenTo(Fruum.io, 'fruum:resize', this.resize);
        this.listenTo(Fruum.io, 'fruum:resize_to_bottom', this.resize_to_bottom);
        this.listenTo(Fruum.io, 'fruum:edit', function(json) {
          that.ui_state.set('editing', json || {});
        });
        this.listenTo(Fruum.io, 'fruum:toggle_manage', function(el) {
          if (el.hasClass('fruum-manage-display')) {
            el.removeClass('fruum-manage-display');
          } else {
            this.$('.fruum-manage').removeClass('fruum-manage-display');
            el.addClass('fruum-manage-display');
          }
        });
        this.listenTo(Fruum.io, 'fruum:close_manage', function() {
          this.$('.fruum-manage').removeClass('fruum-manage-display');
        });

        // ------------------- SHORTCUTS -------------------

        this.listenTo(this.ui_state, 'change:visible', function() {
          if (this.ui_state.get('visible')) {
            $(document).on('keydown', this.onGlobalKey);
          } else {
            $(document).off('keydown', this.onGlobalKey);
          }
        });

        // ------------------- PROFILE -------------------

        this.bindIO('fruum:profile',
          function send(payload) {
            if (!payload) {
              that.ui_state.set('profile', '');
              return;
            }
            that.profile.set(that.profile.defaults);
            that.profile_topics.reset();
            that.profile_replies.reset();
            if (payload.id == Fruum.user.id) {
              // prefill
              that.profile.set(Fruum.user);
            }
            that.ui_state.set('profile', payload.username);
            if (that.router && payload.username) {
              that.router.navigate('u/' + encodeURIComponent(payload.username));
            }
            // count users
            if (!that.ui_state.get('profile_total_users')) {
              payload.count_users = true;
            }
            that.socket.emit('fruum:profile', payload);
          },
          function recv(payload) {
            if (payload) {
              that.profile.set(payload);
              if (payload.users) {
                that.ui_state.set('profile_total_users', payload.users);
              }
            } else {
              if (that.ui_state.get('profile')) {
                that.ui_state.set('profile', '');
                Fruum.io.trigger('fruum:view_default');
                // show error message
                $(that.ui.message_account_not_exists).stop(true, true).
                  delay(500).slideDown('fast').delay(3000).slideUp('slow');
              }
            }
          }
        );

        this.bindIO('fruum:user:feed',
          function send(payload) {
            that.socket.emit('fruum:user:feed', payload);
          },
          function recv(payload) {
            if (payload && payload.id == that.profile.get('id')) {
              switch (payload.feed) {
                case 'topics':
                  if (payload.from) {
                    that.profile_topics.add(payload.docs);
                  } else {
                    that.profile_topics.reset(payload.docs);
                  }
                  break;
                case 'replies':
                  if (payload.from) {
                    that.profile_replies.add(payload.docs);
                  } else {
                    that.profile_replies.reset(payload.docs);
                  }
                  break;
              }
            }
          }
        );

        this.bindIO('fruum:user:list',
          function send(payload) {
            that.socket.emit('fruum:user:list', payload);
          },
          function recv(payload) {
            if (!payload) return;
            if (payload.from) {
              that.profile_users.add(payload.users);
            } else {
              that.profile_users.reset(payload.users);
            }
            if (that.ui_state.get('profile_total_users') < that.profile_users.length) {
              that.ui_state.set('profile_total_users', that.profile_users.length);
            }
          }
        );

        // ------------------- VIEW -------------------

        this.bindIO('fruum:view',
          function send(payload) {
            // save previous scroll pos
            that.saveScrollState();
            // grab some meta data from the trigger
            var loading = payload.origin || ('view:' + payload.id);
            // remove metadata
            delete payload.origin;
            that.ui_state.set({
              loading: loading,
              view_req: payload.id,
            });
            that.socket.emit('fruum:view', payload);
          },
          function recv(payload) {
            if (!payload) {
              that.ui_state.set({
                loading: '',
                load_state: 'not_found',
                viewing: {},
              });
              that.categories.reset();
              that.articles.reset();
              that.blogs.reset();
              that.threads.reset();
              that.channels.reset();
              that.posts.reset();
              that.bookmarksearch.reset();
              that.onRefresh();
              return;
            }

            var breadcrumb = payload.breadcrumb || [];
            var last_doc = breadcrumb.pop() || {};
            that.ui_state.set({
              loading: '',
              load_state: 'found',
              breadcrumb: breadcrumb,
              online: payload.online || {},
            });

            if (that.ui_state.get('viewing').id != last_doc.id) {
              that.ui_state.set({
                viewing: last_doc,
              });
            }

            // reset edit
            if (that.ui_state.get('viewing').id != that.ui_state.get('editing').parent) {
              that.ui_state.set({
                editing: {},
              });
            }

            var categories = [],
                articles = [],
                blogs = [],
                threads = [],
                channels = [],
                posts = [],
                bookmarksearch = [];

            if (last_doc.type == 'bookmark') {
              bookmarksearch = payload.documents;
            } else {
              if (last_doc.body) {
                switch (last_doc.type) {
                  case 'article':
                  case 'blog':
                  case 'thread':
                    posts.push(last_doc);
                    break;
                }
              }

              _.each(payload.documents, function(entry) {
                switch (entry.type) {
                  case 'category':
                  case 'bookmark':
                    categories.push(entry);
                    break;
                  case 'article':
                    articles.push(entry);
                    break;
                  case 'blog':
                    blogs.push(entry);
                    break;
                  case 'thread':
                    threads.push(entry);
                    break;
                  case 'channel':
                    channels.push(entry);
                    break;
                  case 'post':
                    posts.push(entry);
                    break;
                }
              });
            }

            that.categories.reset(categories);
            that.articles.reset(articles);
            that.blogs.reset(blogs);
            that.threads.reset(threads);
            that.channels.reset(channels);
            that.posts.reset(posts);
            that.bookmarksearch.reset(bookmarksearch);

            that.onRefresh();

            if (that.ui_state.get('jumpto_post') > 0) {
              var jumpto_post = that.ui_state.get('jumpto_post');
              that.ui_state.set('jumpto_post', 0);
              that.listenToOnce(Fruum.io, 'fruum:layout', function() {
                _.defer(function() {
                  that.jumpToPost(jumpto_post);
                });
              });
            } else if (last_doc.type === 'channel') {
              // scroll to bottom
              _.defer(that._snapBottom);
            } else {
              // scroll to top
              if (that.hasScrollState()) {
                _.defer(that.restoreScrollState);
              } else {
                _.defer(that._snapTop);
              }
            }

            // remove from notifications
            if (Fruum.userUtils.hasNotification(payload.id)) {
              Fruum.io.trigger('fruum:unnotify', { id: payload.id });
            }

            // store on local storage
            Fruum.utils.sessionStorage('fruum:view:' + window.fruumSettings.app_id, last_doc.id);
            if (that.router) that.router.navigate('v/' + last_doc.id);

            // update visit timestamp
            Fruum.utils.setVisitDate(last_doc.id);
          }
        );

        // ------------------- ADD UPDATE DOCUMENT -------------------

        this.bindIO('fruum:add',
          function send(payload) {
            that.ui_state.set({
              loading: 'add',
              interacting: true,
            });
            that.socket.emit('fruum:add', payload);
          },
          function recv(payload) {
            that.ui_state.set({
              loading: '',
              interacting: false,
            });
            if (!payload) {
              Fruum.io.trigger('fruum:message', 'error');
              return;
            }
            that.ui_state.set('editing', {});
            that.upsertPayload(payload);
            var watch_id;
            switch (payload.type) {
              case 'thread':
              case 'article':
              case 'blog':
                watch_id = payload.id;
                Fruum.io.trigger('fruum:view', { id: payload.id });
                break;
              case 'channel':
                Fruum.io.trigger('fruum:view', { id: payload.id });
                break;
              case 'post':
                if (_.contains(['thread', 'article', 'blog'], payload.parent_type)) {
                  watch_id = payload.parent;
                }
                that.ui_state.trigger('change:editing');
                Fruum.io.trigger('fruum:scroll_bottom');
                break;
              default:
                break;
            }
            if (watch_id && !Fruum.userUtils.isWatching(watch_id)) {
              Fruum.io.trigger('fruum:watch', { id: watch_id });
            }
          }
        );

        this.bindIO('fruum:update',
          function send(payload) {
            that.ui_state.set({
              loading: 'update',
              interacting: true,
            });
            that.socket.emit('fruum:update', payload);
          },
          function recv(payload) {
            that.ui_state.set({
              loading: '',
              interacting: false,
            });
            if (!payload) {
              Fruum.io.trigger('fruum:message', 'error');
              return;
            }
            that.ui_state.set('editing', {});
            that.upsertPayload(payload);
          }
        );

        // ------------------- REACTION -------------------

        this.bindIO('fruum:react',
          function send(payload) {
            that.socket.emit('fruum:react', payload);
          },
          function recv(payload) {
            if (!payload) return;
            that.upsertPayload(payload);
          }
        );

        // ------------------- DELETION -------------------

        this.bindIO('fruum:delete',
          function send(payload) {
            that.ui_state.set({
              loading: 'delete',
              interacting: true,
            });
            that.socket.emit('fruum:delete', payload);
          },
          function recv(payload) {
            that.ui_state.set({
              loading: '',
              interacting: false,
            });
            if (!payload) return;
            that.deletePayload(payload);
          }
        );

        this.bindIO('fruum:archive',
          function send(payload) {
            that.ui_state.set({
              loading: 'archive',
              interacting: true,
            });
            that.socket.emit('fruum:archive', payload);
            $(that.ui.message_restore).stop(true, true).slideDown('fast').delay(4000).slideUp('slow');
            that.last_archived_id = payload.id;
          },
          function recv(payload) {
            that.ui_state.set({
              loading: '',
              interacting: false,
            });
            if (!payload) return;
            that.deletePayload(payload);
          }
        );

        this.bindIO('fruum:restore',
          function send(payload) {
            that.ui_state.set({
              loading: 'restore',
              interacting: true,
            });
            that.socket.emit('fruum:restore', payload);
          },
          function recv(payload) {
            that.ui_state.set({
              loading: '',
              interacting: false,
            });
            if (!payload) return;
            that.upsertPayload(payload);
          }
        );

        // -------------------- WATCH --------------------

        this.bindIO('fruum:watch',
          function send(payload) {
            that.socket.emit('fruum:watch', payload);
          },
          function recv(payload) {
            if (payload) {
              Fruum.userUtils.watch(payload.id);
              that.upsertPayload(payload);
            }
          }
        );

        this.bindIO('fruum:unwatch',
          function send(payload) {
            that.socket.emit('fruum:unwatch', payload);
          },
          function recv(payload) {
            if (payload) {
              Fruum.userUtils.unwatch(payload.id);
              that.upsertPayload(payload);
            }
          }
        );

        // ------------------- MOVE -------------------

        this.bindIO('fruum:categories',
          function send(payload) {
            that.socket.emit('fruum:categories', payload);
          },
          function recv(payload) {
            if (payload && payload.categories) {
              that.all_categories.reset(payload.categories);
            }
          }
        );

        this.bindIO('fruum:move',
          function send(payload) {
            that.socket.emit('fruum:move', payload);
          },
          function recv(payload) {
            if (payload) {
              that.deletePayload(payload.source);
              that.upsertPayload(payload.target);
            }
          }
        );

        // -------------------- NOTIFICATIONS --------------------

        // fetch notifications
        this.bindIO('fruum:notifications',
          function send(payload) {
            that.socket.emit('fruum:notifications', payload);
          },
          function recv(payload) {
            if (!payload.notifications) return;
            // update badge
            var ids = [];
            _.each(payload.notifications, function(document) {
              ids.push(document.id);
            });
            // find not existent notifications
            var diff = _.difference(Fruum.user.notifications || [], ids);
            Fruum.user.notifications = ids;
            Fruum.io.trigger('fruum:update_notify');
            // store in collection
            that.notifications.reset(payload.notifications);
            // remove invalid notifications
            _.each(diff, function(doc_id) {
              Fruum.io.trigger('fruum:unnotify', { id: doc_id });
            });
          }
        );

        this.bindIO('fruum:notify',
          function send(payload) {
            that.socket.emit('fruum:notify', payload);
          },
          function recv(payload) {
            if (payload) {
              Fruum.userUtils.addNotification(payload.id);
              Fruum.io.trigger('fruum:update_notify');
            }
          }
        );

        this.bindIO('fruum:unnotify',
          function send(payload) {
            that.socket.emit('fruum:unnotify', payload);
          },
          function recv(payload) {
            if (payload) {
              Fruum.userUtils.removeNotification(payload.id);
              Fruum.io.trigger('fruum:update_notify');
            }
          }
        );

        this.bindIO('fruum:typing',
          function send(payload) {
            that.socket.emit('fruum:typing', {});
          },
          function recv(payload) {
            if (payload) {
              var model = that.typing_users.get(payload);
              if (model) model.set('timestamp', Date.now());
              else {
                that.typing_users.add({
                  id: payload,
                  timestamp: Date.now(),
                });
              }
            }
          }
        );

        this.bindIO('fruum:onboard',
          function send(payload) {
            that.socket.emit('fruum:onboard', payload);
          },
          function recv(payload) {
            // noop
          }
        );

        // -------------------- REPORT --------------------

        this.bindIO('fruum:report',
          function send(payload) {
            that.socket.emit('fruum:report', payload);
          },
          function recv(payload) {
            if (payload) {
              $(that.ui.message_report).stop(true, true).slideDown('fast').delay(3000).slideUp('slow');
            }
          }
        );

        // ------------------- SORTING -------------------

        this.bindIO('fruum:field',
          function send(payload) {
            that.ui_state.set({
              loading: 'field',
              interacting: true,
            });
            that.socket.emit('fruum:field', payload);
          },
          function recv(payload) {
            that.ui_state.set({
              loading: '',
              interacting: false,
            });
            if (!payload) return;
            that.upsertPayload(payload);
          }
        );

        // ------------------- POSTS -------------------

        // authenticate
        this.socket.on('fruum:auth', function(payload) {
          if (!payload) {
            that.__permanent_abort = true;
            $(that.ui.message_invalid_app).slideDown('fast');
            that.ui_state.set('loading', '');
            return;
          }
          Fruum.user = payload.user || Fruum.user;
          Fruum.user.time_diff = Date.now() - Fruum.user.server_now;
          Fruum.utils.resetVisits();
          that.ui_state.set('connected', true);
          that.onRefresh();
          if (window.fruumSettings.view_id == '*') window.fruumSettings.view_id = undefined;
          // check for viewing profile
          if (that.ui_state.get('profile')) {
            Fruum.io.trigger('fruum:profile', { username: that.ui_state.get('profile') });
          } else {
            Fruum.io.trigger('fruum:view_default');
          }
          $(that.ui.message_reconnect).slideUp('fast');
          $(that.ui.message_signin).slideUp('fast');
          that.ui_state.get('viewing').id = undefined;
          window.fruumSettings.view_id = undefined;
          if (window.fruumSettings.jumpto | 0) {
            that.ui_state.set('jumpto_post', window.fruumSettings.jumpto | 0);
            window.fruumSettings.jumpto = undefined;
          }
          // check for karma update
          var karma_diff = Fruum.user.karma - Fruum.user.logout_karma;
          if (karma_diff) Fruum.io.trigger('fruum:new_karma', karma_diff);
          // ready event
          if (window.fruumSettings.ready) {
            if (_.isFunction(window.fruumSettings.ready)) {
              window.fruumSettings.ready();
            } else if (_.isString(window.fruumSettings.ready)) {
              executeFunctionByName(window.fruumSettings.ready, window);
            }
          }
        });

        // ----------------- LIVE UPDATES -----------------

        this.socket.on('fruum:karma', function(payload) {
          if (payload && payload.karma) {
            var diff = payload.karma - (Fruum.user.karma || 0);
            Fruum.user.karma = payload.karma;
            if (diff) Fruum.io.trigger('fruum:new_karma', diff);
          }
        });
        this.socket.on('fruum:dirty', function(payload) {
          if (payload) {
            // admin
            if (Fruum.user.admin) {
              that.upsertPayload(payload);
            } else if (!Fruum.user.anonymous) {
              // logged in user
              if (!payload.visible || payload.permission >= 2) {
                that.deletePayload(payload);
              } else {
                that.upsertPayload(payload);
              }
            } else {
              // anonymous
              if (!payload.visible || payload.permission >= 1) {
                that.deletePayload(payload);
              } else {
                that.upsertPayload(payload);
              }
            }
          }
        });
        this.socket.on('fruum:info', function(payload) {
          // enable notification badge
          if (payload && payload.id && that.ui_state.get('viewing').id != payload.id) {
            Fruum.utils.addVisitUpdate(payload.id);
            // also update existing documents
            var model;
            switch (payload.type) {
              case 'category':
                model = that.categories.get(payload.id);
                break;
              case 'article':
                model = that.articles.get(payload.id);
                break;
              case 'blog':
                model = that.blogs.get(payload.id);
                break;
              case 'thread':
                model = that.threads.get(payload.id);
                break;
              case 'channel':
                model = that.channels.get(payload.id);
                break;
              case 'post':
                model = that.posts.get(payload.id);
                break;
            }
            if (model) {
              model.set(payload);
              _.defer(that.calculateUpdatesCount);
            }
          }
        });
        this.socket.on('fruum:online', function(payload) {
          if (!payload) return;
          that.ui_state.set(
            'online',
            _.extend(that.ui_state.get('online'), payload)
          );
          // update region counters
          var el = that.$(that.regions.channels);
          for (var channel in payload) {
            el.find('[data-channel-members="' + channel + '"]').html(payload[channel]);
          }
        });

        // ----------------- SEARCH -----------------

        this.bindIO('fruum:search',
          function send(text) {
            that.ui_state.set({
              search: text,
            });
            if (!that.ui_state.get('searching') || !text) {
              if (that.search.length) that.search.reset();
              that.onRefresh();
            } else {
              that.ui_state.set({
                loading: 'search',
              });
              that.socket.emit('fruum:search', {
                q: text,
              });
            }
          },
          function recv(payload) {
            if (that.ui_state.get('loading') == 'search') {
              that.ui_state.set('loading', '');
            }
            if (!payload) return;
            // check if search is valid
            if (payload.q === that.ui_state.get('search') && that.ui_state.get('searching')) {
              that.search.reset(payload.results);
              that.onRefresh();
              if (that.router) that.router.navigate('s/' + encodeURIComponent(payload.q));
            }
          }
        );

        this.bindIO('fruum:autocomplete',
          function send(payload) {
            that.socket.emit('fruum:autocomplete', payload);
          },
          function recv(payload) {
            if (payload) Fruum.io.trigger('fruum:autocomplete_results', payload);
          }
        );

        // ----------------- OPTIMIZE -----------------

        this.bindIO('fruum:optimize',
          function send(payload) {
            that.ui_state.set('optimizing', that.ui_state.get('optimizing') + 1);
            that.socket.emit('fruum:optimize', payload);
          },
          function recv(payload) {
            that.ui_state.set('optimizing', Math.max(0, that.ui_state.get('optimizing') - 1));
            that.ui_state.trigger('fruum:optimize', payload);
          }
        );

        // -------------------- USER MANAGEMENT --------------------

        this.bindIO('fruum:user:block',
          function send(payload) {
            that.socket.emit('fruum:user:block', payload);
          },
          function recv(payload) {
          }
        );

        this.bindIO('fruum:user:unblock',
          function send(payload) {
            that.socket.emit('fruum:user:unblock', payload);
          },
          function recv(payload) {
          }
        );

        this.bindIO('fruum:user:remove',
          function send(payload) {
            that.socket.emit('fruum:user:remove', payload);
          },
          function recv(payload) {
            if (payload) {
              $(that.ui.message_account_removed).stop(true, true).
                delay(500).slideDown('fast').delay(3000).slideUp('slow');
            }
          }
        );

        // ----------------- START -----------------

        this.socket.on('connect', function() {
          that.__signin = false;
          that.socket.emit('fruum:auth', window.fruumSettings);
        });
        this.socket.on('disconnect', function() {
          that.ui_state.set('connected', false);
          if (that.__signin) {
            $(that.ui.message_signin).slideDown('fast');
          } else if (!that.__permanent_abort) {
            $(that.ui.message_reconnect).slideDown('fast');
          }
        });

        setInterval(function() {
          while (that._consumeData());
        }, 1000);

        // close preview
        _.defer(function() {
          $('#fruum-preview').removeClass('fruum-clicked fruum-peak');
        });
        // remove hide button on full page mode
        if (window.fruumSettings.fullpage) {
          this.$(this.ui.close).remove();
          this.$(this.ui.maximize).remove();
        }
        // if history is enabled enable it
        if (window.fruumSettings.history) {
          this.startRouter();
        }
        // start nano scroller
        this.$(this.ui.content).nanoScroller({
          preventPageScrolling: true,
          iOSNativeScrolling: true,
          disableResize: true,
        });
        this.$(this.ui.content).on('update', this.onScroll);

        // store open state
        Fruum.utils.sessionStorage('fruum:open:' + window.fruumSettings.app_id, 1);

        // start with loading state open
        this.ui_state.set('loading', 'connect');
        this.onRefresh();
        Fruum.io.trigger('fruum:resize');

        this.ui_state.set('visible', true);
      },
      onScroll: function() {
        if (this.calculate_regions_timer) return;
        this.calculate_regions_timer = setTimeout(this.calculateViewRegions, 200);
      },
      onRefresh: function() {
        var viewing_type = this.ui_state.get('viewing').type;
        if (this.ui_state.get('searching')) {
          // Search mode
          this.$(this.regions.empty).stop(true, true).hide();
          this.$(this.regions.categories).hide();
          this.$(this.regions.bookmarksearch).hide();
          this.$(this.regions.articles).hide();
          this.$(this.regions.blogs).hide();
          this.$(this.regions.threads).hide();
          this.$(this.regions.channels).hide();
          this.$(this.regions.posts).hide();
          this.$(this.regions.search).show();
          this.$(this.ui.divider_category_article).hide();
          this.$(this.ui.divider_article_blog).hide();
          this.$(this.ui.divider_blog_thread).hide();
          this.$(this.ui.divider_thread_channel).hide();
          this.ui_state.set({
            total_entries: this.search.length,
          });
        } else if (viewing_type === 'bookmark') {
          this.$(this.regions.empty).stop(true, true).hide();
          this.$(this.regions.categories).hide();
          this.$(this.regions.bookmarksearch).show();
          this.$(this.regions.articles).hide();
          this.$(this.regions.blogs).hide();
          this.$(this.regions.threads).hide();
          this.$(this.regions.channels).hide();
          this.$(this.regions.posts).hide();
          this.$(this.regions.search).hide();
          this.$(this.ui.divider_category_article).hide();
          this.$(this.ui.divider_article_blog).hide();
          this.$(this.ui.divider_blog_thread).hide();
          this.$(this.ui.divider_thread_channel).hide();
          this.ui_state.set({
            total_entries: this.bookmarksearch.length,
          });
        } else if (_.contains(['channel', 'thread', 'article', 'blog'], viewing_type)) {
          // Viewing posts
          this.$(this.regions.empty).stop(true, true).hide();
          this.$(this.regions.search).hide();
          this.$(this.regions.categories).hide();
          this.$(this.regions.bookmarksearch).hide();
          this.$(this.regions.articles).hide();
          this.$(this.regions.blogs).hide();
          this.$(this.regions.threads).hide();
          this.$(this.regions.channels).hide();
          this.$(this.regions.posts).show();
          this.$(this.ui.divider_category_article).hide();
          this.$(this.ui.divider_article_blog).hide();
          this.$(this.ui.divider_blog_thread).hide();
          this.$(this.ui.divider_thread_channel).hide();
          this.ui_state.set({
            total_entries: this.posts.length,
          });
        } else if (this.categories.length || this.articles.length ||
            this.blogs.length || this.threads.length ||
            this.channels.length
        ) {
          this.$(this.regions.empty).stop(true, true).hide();
          this.$(this.regions.search).hide();
          this.$(this.regions.categories).show();
          this.$(this.regions.bookmarksearch).hide();
          this.$(this.regions.articles).show();
          this.$(this.regions.blogs).show();
          this.$(this.regions.threads).show();
          this.$(this.regions.channels).show();
          this.$(this.regions.posts).hide();
          if (this.categories.length &&
              (this.articles.length || this.blogs.length || this.threads.length || this.channels.length)
          ) {
            this.$(this.ui.divider_category_article).show();
          } else {
            this.$(this.ui.divider_category_article).hide();
          }
          if (this.articles.length &&
              (this.blogs.length || this.threads.length || this.channels.length)
          ) {
            this.$(this.ui.divider_article_blog).show();
          } else {
            this.$(this.ui.divider_article_blog).hide();
          }
          if (this.blogs.length &&
              (this.threads.length || this.channels.length)) {
            this.$(this.ui.divider_blog_thread).show();
          } else {
            this.$(this.ui.divider_blog_thread).hide();
          }
          if (this.threads.length && this.channels.length) {
            this.$(this.ui.divider_thread_channel).show();
          } else {
            this.$(this.ui.divider_thread_channel).hide();
          }
          this.ui_state.set({
            total_entries: this.categories.length +
                           this.threads.length +
                           this.channels.length +
                           this.articles.length +
                           this.blogs.length,
          });
        } else {
          this.$(this.regions.empty).fadeIn('fast');
          this.$(this.regions.categories).hide();
          this.$(this.regions.bookmarksearch).hide();
          this.$(this.regions.search).hide();
          this.$(this.regions.articles).hide();
          this.$(this.regions.blogs).hide();
          this.$(this.regions.threads).hide();
          this.$(this.regions.channels).hide();
          this.$(this.regions.posts).hide();
          this.$(this.ui.divider_category_article).hide();
          this.$(this.ui.divider_article_blog).hide();
          this.$(this.ui.divider_blog_thread).hide();
          this.$(this.ui.divider_thread_channel).hide();
          this.ui_state.set({
            total_entries: 0,
          });
        }
        _.defer(this.resize);
      },
      deletePayload: function(payload) {
        if (!payload) return;
        // update only if we are viewing the same parent
        if (payload.parent === this.ui_state.get('viewing').id) {
          switch (payload.type) {
            case 'category':
            case 'bookmark':
              this.categories.remove(payload);
              break;
            case 'article':
              this.articles.remove(payload);
              break;
            case 'blog':
              this.blogs.remove(payload);
              break;
            case 'thread':
              this.threads.remove(payload);
              break;
            case 'channel':
              this.channels.remove(payload);
              break;
            case 'post':
              this.posts.remove(payload);
              break;
          }
          this.onRefresh();
        } else if (payload.id === this.ui_state.get('viewing').id) {
          // view parent
          Fruum.io.trigger('fruum:view', { id: payload.parent });
        }
      },
      upsertPayload: function(payload) {
        if (!payload) return;
        var viewing = this.ui_state.get('viewing');
        // update only if we are viewing the same parent
        if (payload.parent === viewing.id) {
          // check if content area scroll is on bottom
          var on_bottom = this.isContentOnBottom();
          switch (payload.type) {
            case 'category':
            case 'bookmark':
              this.categories.add(payload, {merge: true});
              break;
            case 'article':
              this.articles.add(payload, {merge: true});
              break;
            case 'blog':
              this.blogs.add(payload, {merge: true});
              break;
            case 'thread':
              this.threads.add(payload, {merge: true});
              break;
            case 'channel':
              this.channels.add(payload, {merge: true});
              break;
            case 'post':
              this.posts.add(payload, {merge: true});
              break;
          }
          this.onRefresh();
          if (on_bottom) _.defer(this._scrollBottom);
        } else if (payload.id === viewing.id) {
          // check breadcrumb update
          if (payload.body != viewing.body ||
              payload.header != viewing.header
          ) {
            this.ui_state.set('viewing', {});
            Fruum.io.trigger('fruum:view', {id: payload.id});
          } else {
            // check for reaction changes on first post
            if (this.posts.get(payload.id)) {
              this.posts.add(payload, {merge: true});
            }
            this.ui_state.set('viewing', payload, { silent: true });
            this.ui_state.trigger('change:viewing');
            this.onRefresh();
          }
        }
      },
      resize: function() {
        var panel_h = this.$el.height(),
            navigation_h = this.$(this.ui.navigation).outerHeight(),
            interactions_h = this.$(this.regions.interactions).outerHeight(),
            content_h = 0;
        if (!this.$(this.regions.interactions).is(':visible')) interactions_h = 0;
        content_h = panel_h - navigation_h - interactions_h;
        this.$(this.ui.content).height(content_h);
        this.ui_state.set({
          navigation_height: navigation_h,
          interactions_height: interactions_h,
          content_height: content_h,
          panel_height: this.$el.height(),
        });
        this.$(this.ui.content).nanoScroller({ reset: true });
        this.onScroll();
        Fruum.io.trigger('fruum:layout');
      },
      resize_to_bottom: function() {
        this.$(this.ui.content).height(
           this.$el.height() - this.$(this.ui.navigation).outerHeight()
        );
      },
      calculateViewRegions: function() {
        this.calculate_regions_timer = null;
        // find all object elements
        var entries_cls = '';
        if (this.ui_state.get('searching')) {
          entries_cls = '.fruum-js-entry-search';
        } else {
          entries_cls = '.fruum-js-entry-default';
        }

        var top = this.$(this.ui.content).offset().top,
            bottom = top + this.$(this.ui.content).height(),
            entries = this.$(entries_cls),
            total = entries.length,
            start = 0,
            end = total;
        for (var i = 0; i < entries.length; ++i) {
          if (!start && entries.eq(i).offset().top >= top) {
            start = i + 1;
          } else if (entries.eq(i).offset().top > bottom) {
            end = i;
            break;
          }
        }
        this.ui_state.set({
          viewing_from: start,
          viewing_to: end,
          search_helper: (start >= 20) && end < total &&
                         this.ui_state.get('viewing').type == 'category',
        });
        this.calculateUpdatesCount();
      },
      calculateUpdatesCount: function() {
        if (this.ui_state.get('viewing').type != 'category') {
          this.ui_state.set('updates_count', 0);
          return;
        }
        var top = this.$(this.ui.content).offset().top,
            bottom = top + this.$(this.ui.content).height(),
            count = 0;
        // find updates that are not visible
        var entries = this.$('.fruum-js-has-update');
        for (var i = 0; i < entries.length; ++i) {
          if (entries.eq(i).offset().top > bottom) {
            count++;
          } else {
            entries.eq(i).removeClass('fruum-js-has-update');
          }
        }
        this.ui_state.set('updates_count', count);
      },
      bindIO: function(call, send_fn, recv_fn) {
        if (send_fn) {
          this.listenTo(Fruum.io, call, function(payload) {
            send_fn(
              Fruum.utils.chain(Fruum.processors.transmit, payload, call)
            );
          });
        }
        if (recv_fn) {
          this.socket.on(call, function(payload) {
            recv_fn(
              Fruum.utils.chain(Fruum.processors.receive, payload, call)
            );
          });
        }
      },
      saveScrollState: function() {
        var view_id = this.ui_state.get('viewing').id;
        if (view_id) {
          this.scroll_history[view_id] = this._getScrollTop();
        }
      },
      restoreScrollState: function() {
        var view_id = this.ui_state.get('viewing').id;
        if (this.scroll_history[view_id]) {
          this._snapTo(this.scroll_history[view_id]);
        }
      },
      hasScrollState: function() {
        return this.scroll_history[this.ui_state.get('viewing').id];
      },
      _getScrollTop: function() {
        return this.$(this.ui.content).find('.nano-content').scrollTop();
      },
      isContentOnBottom: function() {
        var el = this.$(this.ui.content).find('.nano-content');
        return (el.get(0).scrollHeight - el.scrollTop()) <= el.outerHeight() + 60;
      },
      // smooth scroll bottom
      _scrollBottom: function() {
        var el = this.$(this.ui.content).find('.nano-content');
        el.stop(true, true).delay(1).animate({ scrollTop: el.get(0).scrollHeight }, 'fast');
      },
      // smooth scroll top
      _scrollTop: function() {
        var el = this.$(this.ui.content).find('.nano-content');
        el.stop(true, true).delay(1).animate({ scrollTop: 0 }, 'fast');
      },
      // hard scroll to position
      _snapTo: function(top) {
        this.$(this.ui.content).nanoScroller({ scrollTop: top });
      },
      // hard scroll to el
      _snapToEl: function(el) {
        if (el && el.length) {
          this.$(this.ui.content).nanoScroller({ scrollTo: el });
        }
      },
      // hard scroll bottom
      _snapBottom: function() {
        this.$(this.ui.content).nanoScroller({ scrollBottom: true });
      },
      // hard scroll top
      _snapTop: function() {
        this.$(this.ui.content).nanoScroller({ scrollTop: true });
      },
      _consumeData: function() {
        if (window.FruumData && window.FruumData.length) {
          var data = window.FruumData.shift();
          if (!data) return;
          if (data.user) {
            window.fruumSettings.user = data.user;
            if (this.isOpen() && this.socket) {
              this.__signin = true;
              this.socket.disconnect();
              this.socket.connect();
            }
          }
          return true;
        }
        return false;
      },

      onInterceptKeyboard: function(event) {
        event.stopPropagation();
      },
      jumpToPost: function(index) {
        if (index > 0) {
          this._snapToEl(this.$(this.regions.posts).find('.fruum-js-entry-default').eq(index - 1));
        }
      },
      onRestore: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        $(this.ui.message_restore).stop(true, true).slideUp('fast');
        if (this.last_archived_id) Fruum.io.trigger('fruum:restore', { id: this.last_archived_id });
        delete this.last_archived_id;
      },
      onClose: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        if (this.$el.hasClass('fruum-hide')) return;
        this.__permanent_abort = true;
        this.$el.addClass('fruum-hide');
        this.socket.disconnect();
        this.$el.stop(true, true).delay(1000).fadeOut(1);
        this.ui_state.set('visible', false);
        Fruum.utils.sessionStorage('fruum:open:' + window.fruumSettings.app_id, 0);
      },
      onMaximize: function(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.$el.toggleClass('fruum-takeover');
        if (this.$el.hasClass('fruum-takeover')) {
          this.$(this.ui.maximize).removeClass('fruum-icon-left').addClass('fruum-icon-right');
        } else {
          this.$(this.ui.maximize).removeClass('fruum-icon-right').addClass('fruum-icon-left');
        }
      },
      onGlobalKey: function(event) {
        switch (event.which) {
          case 27:
            if (!window.fruumSettings.fullpage) this.onClose();
            break;
          case 13:
            Fruum.io.trigger('fruum:default_action');
            break;
        }
      },
      onOpen: function() {
        if (!this.$el.hasClass('fruum-hide')) return;
        this.__permanent_abort = false;
        this.$el.stop(true, true).fadeIn(1);
        this.$el.removeClass('fruum-hide');
        this.ui_state.set({
          loading: 'connect',
          visible: true,
        });
        this.socket.connect();
        Fruum.utils.sessionStorage('fruum:open:' + window.fruumSettings.app_id, 1);
      },
      isOpen: function() {
        return !this.$el.hasClass('fruum-hide');
      },

      // start history route
      startRouter: function() {
        this.router = new Marionette.AppRouter({
          controller: this,
          appRoutes: {
            's/:query': 'onRouteSearch',
            'u/:username': 'onRouteProfile',
            'v/:id': 'onRouteView',
            'v/:id/': 'onRouteView',
            'v/:id/:post': 'onRouteViewPost',
          },
        });
        if (Fruum.application.pushstate) {
          Backbone.history.start({
            pushState: true,
            root: Fruum.utils.getLocation(Fruum.application.fullpage_url).pathname,
          });
        } else {
          Backbone.history.start();
        }
      },
      onRouteProfile: function(username) {
        username = decodeURIComponent(username);
        if (this.ui_state.get('profile') != username) {
          Fruum.io.trigger('fruum:profile', { username: username });
        }
      },
      onRouteSearch: function(query) {
        this.ui_state.set('profile', '');
        if (!this.ui_state.get('searching') ||
          (this.ui_state.get('searching') && this.ui_state.get('search') != query)
        ) {
          Fruum.io.trigger('fruum:set_search', query);
        }
      },
      onRouteView: function(id) {
        if (this.ui_state.get('searching')) {
          Fruum.io.trigger('fruum:clear_search');
        }
        this.ui_state.set('profile', '');
        this.ui_state.set('jumpto_post', 0);
        if (id && this.ui_state.get('viewing').id !== id) {
          Fruum.io.trigger('fruum:view', {id: id});
        }
      },
      onRouteViewPost: function(id, post) {
        if (this.ui_state.get('searching')) {
          Fruum.io.trigger('fruum:clear_search');
        }
        this.ui_state.set('profile', '');
        if (id && this.ui_state.get('viewing').id !== id) {
          this.ui_state.set('jumpto_post', post);
          Fruum.io.trigger('fruum:view', {id: id});
        } else {
          this.jumpToPost(post);
        }
      },
    });

    // initialize plugins
    _.each(Fruum.plugins, function(plugin_fn) {
      var plugin = new plugin_fn(); // eslint-disable-line
      if (plugin.personaSays) {
        Fruum.processors.persona.push(plugin.personaSays);
      }
      if (plugin.post_content) {
        Fruum.processors.post.push(plugin.post_content);
      }
      if (plugin.transmit) {
        Fruum.processors.transmit.push(plugin.transmit);
      }
      if (plugin.receive) {
        Fruum.processors.receive.push(plugin.receive);
      }
      if (plugin.init) {
        Fruum.processors.init.push(plugin.init);
      }
    });

    // start app
    var app = new Marionette.Application();
    app.rootView = new RootView({
      el: '#fruum',
    });

    // register to global Fruum object
    Fruum.RootView = app.rootView;

    // register api
    Fruum.api = {
      open: function(doc_id) {
        if (!app.rootView.isOpen()) {
          window.fruumSettings.view_id = doc_id;
          window.fruumSettings.jumpto = undefined;
          app.rootView.onOpen();
        } else if (
          doc_id != '*' &&
          doc_id &&
          doc_id !== app.rootView.ui_state.get('viewing').id
        ) {
          // if we are already viewing the same document, abort
          Fruum.io.trigger('fruum:view', {id: doc_id, origin: 'link'});
        }
      },
    };

    // ignite`
    app.start();
  }
  // initiate fruum
  if (window.fruumSettings && window.fruumSettings.app_id) {
    setup();
  }
})();
