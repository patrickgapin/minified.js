var k=!0,t=null,u=!1;if(/^u/.test(typeof define)){var Q={};this.define=function(E,C){Q[E]=C()};this.require=function(E){return Q[E]}}define("minified",function(){function E(){return 1}function C(a){return a!=t?""+a:""}function z(a){return"string"==typeof a}function q(a){return a&&a.nodeType}function F(a){return a&&a.length!=t&&!z(a)&&!q(a)&&!p(a)}function R(a){return a}function v(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function K(a,b){var c=[];f(a,function(a,e){b(a,e)&&c.push(a)});return c}function r(a,b,c){var d=[];a(b,function(a,b){f(c(a,b),function(a){d.push(a)})});return d}function m(a,b,c){return C(a).replace(b,c||"")}function L(a,b){var c=RegExp("\\b"+a+"\\b","i");return a?function(a){return c.test(a[b])}:E}function p(a){return"function"==typeof a&&!a.item}function f(a,b){if(F(a))for(var c=0;c<a.length;c++)b(a[c],c);else a!=t&&b(a,0);return a}function M(a,b){for(var c=0;a&&c<a.length;c++)a[c]===b&&a.splice(c--,1)}function A(a){return parseFloat(m(a,/^[^\d-]+/))}function I(a){return a.minified=a.minified||++Z}function N(a,b){var c=[],d={},e;f(a,function(a){f(b(a),function(a){if(q(a)&&!d[e=I(a)])c.push(a),d[e]=k})});return c}function S(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:t},c=a.get(b);a.set(b);b=a.get("$height",k);a.set(c);return b}function T(a){a()}function U(a,b){f(b,function(a){a.e.detachEvent("on"+a.n,a.h)})}function V(){f(H,T);H=t}function W(a){H?H.push(a):s.setTimeout(a,0)}function X(a,b,c,d){return function(){var e=l(w.createElement(a));F(b)||"object"!=typeof b?e.add(b):e.set(b).add(c);d&&d(e);return e}}function Y(a){return $[a]||"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function l(a,b,c){return p(a)?W(a):new G(B(a,b,c))}function B(a,b,c){function d(a){a=r(f,a,function aa(a){return F(a)?r(f,a,aa):a});return e?K(a,function(a){for(;a=a.parentNode;){if(a===e)return k;if(c)return u}}):a}var e,j,h,g;if(b&&1!=(b=B(b)).length)return N(b,function(b){return B(a,b,c)});e=b&&b[0];if(!z(a))return d(a);if(1<(b=a.split(/\s*,\s*/)).length)return N(b,function(a){return B(a,e,c)});if(b=/(\S+)\s+(.+)$/.exec(a))return B(b[2],B(b[1],e),c);if(a!=(b=m(a,/^#/)))return d(w.getElementById(b));e=e||w;j=(b=/([\w-]*)\.?([\w-]*)/.exec(a))[1];g=b[2];b=(h=e.getElementsByClassName&&g)?e.getElementsByClassName(g):e.getElementsByTagName(j||"*");if(j=h?j:g)b=K(b,L(j,h?"nodeName":"className"));return e?d(b):b}function J(a,b){var c,d={};if(p(a))return a;if(!a||z(a)&&("*"==a||(c=/^([\w-]*)\.([\w-]+)$/.exec(a))||(c=/^([\w-]+)$/.exec(a)))){var e=L(c&&c[1],"nodeName"),j=L(c&&c[2],"className");return function(a){return 1==q(a)&&e(a)&&j(a)}}if(b)return function(c){return l(a,b).find(c)!=t};l(a).each(function(a){d[I(a)]=k});return function(a){return d[I(a)]}}function O(){function a(a,e){b==t&&(b=a,c=e,s.setTimeout(function(){f(d,T)},0))}var b,c=[],d=[],e=a.then=function(a,e){function g(){try{var d=b?a:e;if(p(d)){var g=d.apply(t,c);g&&p(g.then)?g.then(function(a){n(k,[a])},function(a){n(u,[a])}):n(k,[g])}else n(b,c)}catch(f){n(u,[f])}}var n=O();b!=t?s.setTimeout(g,0):d.push(g);return n};a.error=function(a){return e(0,a)};return a}function G(a){for(var b=this.length=a.length,c=0;c<b;c++)this[c]=a[c]}var s=this,w=document,Z=1,D={},H=[],P=[],ba=s.requestAnimationFrame||function(a){s.setTimeout(a,33)},y=!!w.all&&!H.map,$={"	":"\\t","\r":"\\r","\n":"\\n",'"':'\\"',"\\":"\\\\"};v({each:function(a){return f(this,a)},filter:function(a){return new G(K(this,a))},collect:function(a){return new G(r(f,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=0<=b?b:this.length+(b||0);return this.filter(function(a,b){return b>=c&&b<d})},find:function(a){for(var b,c=p(a)?a:function(b,c){if(a===b)return c},d=0;d<this.length;d++)if((b=c(this[d],d))!=t)return b},remove:function(){f(this,function(a){y&&1==q(a)&&(f(B("*",a),function(a){U(0,D[a.minified]);delete D[a.minified]}),removeEvents(a));a.parentNode.removeChild(a)})},text:function(){function a(b){var c=q(b);return 1==c?r(f,b.childNodes,a):5>c?b.data:t}return r(f,this,a).join("")},trav:function(a,b,c){var d=J("number"==typeof b?t:b),e="number"==typeof b?b:c||1e9;return new G(N(this,function(b){for(var c=[];(b=b[a])&&c.length<e;)d(b)&&c.push(b);return c}))},select:function(a,b){return l(a,this,b)},is:function(a){var b=J(a);return!this.find(function(a){if(!b(a))return k})},only:function(a){return this.filter(J(a))},get:function(a,b){var c=this,d=c[0];if(d){if(z(a)){var e=m(m(a,/^%/,"data-"),/^[$@]/),j;j="$"==a?d.className:"$$"==a?y?d.style.cssText:d.getAttribute("style"):/\$\$/.test(a)&&("hidden"==d.style.visibility||"none"==d.style.display)?0:"$$fade"==a?isNaN(j=y?A(d.style.filter)/100:A(d.style.opacity))?1:j:"$$slide"==a?c.get("$height"):/^\$/.test(a)?s.getComputedStyle?s.getComputedStyle(d,t).getPropertyValue(m(e,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(d.currentStyle||d.style)[e]:/^[@%]/.test(a)?d.getAttribute(e):d[e];return b?A(j):j}var h={};(F(a)?f:v)(a,function(a){h[a]=c.get(a,b)});return h}},set:function(a,b){var c=this,d;void 0!==b?"$$fade"==a||"$$slide"==a?c.set({$visibility:0<(d=A(b))?"visible":"hidden",$display:"block"}).set("$$fade"==a?y?{$filter:"alpha(opacity = "+100*d+")",$zoom:1}:{$opacity:d}:{$height:/px/.test(b)?b:function(a,b,c){return d*(d&&S(l(c)))+"px"},$overflow:"hidden"}):f(c,function(c,d){var h=m(m(a,/^%/,"data-"),/^[@$]/),g=c.className||"",n=/^\$/.test(a)?c.style:c,x=p(b)?b(l(c).get(a),d,c):b;"$"==a?x!=t&&(f(x.split(/\s+/),function(a){var b=m(a,/^[+-]/),c=g;g=m(g,RegExp("\\b"+b+"\\b","i"));if(/^\+/.test(a)||b==a&&c==g)g+=" "+b}),c.className=m(g,/^\s+|\s+(?=\s|$)/g)):"$$"==a?y?n.cssText=x:x!=t?c.setAttribute("style",x):c.removeAttribute("style"):/^[@%]/.test(a)?x!=t?n.setAttribute(h,x):n.removeAttribute(h):n[h]=x}):z(a)||p(a)?c.set("$",a):v(a,function(a,b){c.set(a,b)});return c},add:function(a,b){return this.each(function(c,d){var e;(function h(a){F(a)?f(a,h):p(a)?h(a(c,d)):a!=t&&(a=q(a)?a:w.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)})(q(a)&&d?t:a)})},fill:function(a){return this.each(function(a){l(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c)})},addAfter:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c.nextSibling)})},addFront:function(a){return this.add(a,function(a,c){c.insertBefore(a,c.firstChild)})},replace:function(a){return this.add(a,function(a,c,d){d.replaceChild(a,c)})},clone:function(a){return this.collect(function(b){var c=q(b);if(1==c){var d={$:b.className||t,$$:y?b.style.cssText:b.getAttribute("style")};f(b.attributes,function(a){var c=a.name;"id"!=c&&"style"!=c&&"class"!=c&&b.getAttribute(c)&&(d["@"+c]=a.value)});return X(b.tagName,d,l(b.childNodes).clone(),a)}return 5>c?b.data:t})},animate:function(a,b,c,d){var e=this,j=[],h=/-?[\d.]+/,g,n=O(),x=p(c)?c:function(a,b,d){return a+d*(b-a)*(c+(1-c)*d*(3-2*d))};d=d||{};d.time=0;d.stop=function(){g();n(u)};b=b||500;c=c||0;f(e,function(b){var c={a:l(b),c:{}};v(c.b=c.a.get(a),function(b,d){var e=a[b];"$$slide"==b&&(e=e*S(c.a)+"px");c.c[b]=/^[+-]=/.test(e)?m(e.substr(2),h,A(d)+A(m(e,/\+?=/))):e});j.push(c)});g=l.loop(function(a){function c(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(m(a,/[^\d,]+/g).split(",")[b])}d.time=a;a>=b||0>a?(f(j,function(a){a.a.set(a.c)}),g(),d.time=t,n(k,[e])):f(j,function(d){v(d.b,function(e,j){var g="rgb(",f=d.c[e],n=a/b;if(/^#|rgb\(/.test(f))for(var l=0;3>l;l++)g+=Math.round(x(c(j,l),c(f,l),n))+(2>l?",":")");else g=m(f,h,C(x(A(j),A(f),n)));d.a.set(e,g)})})});return n},toggle:function(a,b,c,d){var e=this,j={},h=u,g=/\b(?=\w)/g,f;return b?e.set(a)&&function(g){if(g!==h)return f=(h=g===k||g===u?g:!h)?b:a,p(f)?f(e,c,d):c?e.animate(f,j.stop?j.stop()||j.time:c,d,j):e.set(f)&&void 0}:e.toggle(m(a,g,"-"),m(a,g,"+"))},values:function(a){var b=a||{};this.each(function(a){var d=a.name,e=C(a.value);if(/form/i.test(a.tagName))l(r(f,a.elements,R)).values(b);else if(d&&(!/kbox|dio/i.test(a.type)||a.checked))b[d]=r(f,[b[d],e],R)});return b},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(a,b,c,d){return this.each(function(e,j){f(a.split(/\s/),function(a){var g=m(a,/\|/),f=p(b)||t,l=f?b:c,r=f&&d&&c,q=f&&(d||c),v=g==a,w=f?E:J(b,e),f=function(a,b){var c=a||s.event,d,e=b||c.target;if(w(e)&&(d=(!l.apply(r||e,q||[c,j])||q)&&v)&&!b)c.stopPropagation&&(c.preventDefault(),c.stopPropagation()),c.returnValue=u,c.cancelBubble=k;return d};a={e:e,h:f,n:g};(l.M=l.M||[]).push(a);y?(e.attachEvent("on"+g,f),g=I(e),(D[g]=D[g]||[]).push(a)):(e.addEventListener(g,f,u),(e.minified2=e.minified2||[]).push(a))})})},onOver:function(a){var b=this,c=[];return b.on("|mouseover |mouseout",function(d,e){var f="mouseout"!=d.type,h=d.relatedTarget||d.toElement;if(c[e]!==f&&(f||!h||h!=b[e]&&!l(h).trav("parentNode",b[e]).length))c[e]=f,a.call(this,f,e)})},trigger:function(a,b){return this.each(function(c){for(var d,e=c;e&&!d;)f(y?D[e.minified]:e.minified2,function(e){e.n==a&&(d=d||e.h(b,c))}),e=e.parentNode})}},function(a,b){G.prototype[a]=b});v({request:function(a,b,c,d,e,j){var h,g=c,l=0,m=O();try{h=s.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),c!=t&&(d=d||{},!z(c)&&!q(c)&&(g=r(v,c,function(a,b){return r(f,b,function(b){return encodeURIComponent(a)+(b!=t?"="+encodeURIComponent(b):"")})}).join("&")),/post/i.test(a)?!q(c)&&!z(c)&&!d["Content-Type"]&&(d["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+g,g=t)),h.open(a,b,k,e,j),v(d,function(a,b){h.setRequestHeader(a,b)}),h.onreadystatechange=function(){4==h.readyState&&!l++&&(200==h.status?m(k,[h.responseText,h.responseXML]):m(u,[h.status,h.statusText,h.responseText]))},h.send(g)}catch(p){l||m(u,[0,t,C(p)])}return m},toJSON:function b(c){return c==t?""+c:z(c=c.valueOf())?'"'+m(c,/[\\\"\x00-\x1f\x22\x5c]/g,Y)+'"':F(c)?"["+r(f,c,b).join()+"]":"object"==typeof c?"{"+r(v,c,function(c,e){return b(c)+":"+b(e)}).join()+"}":C(c)},parseJSON:s.JSON?s.JSON.parse:function(b){b=m(b,/[\x00\xad\u0600-\uffff]/g,Y);if(/^[[\],:{}\s]*$/.test(m(m(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g)))return eval("("+b+")")},ready:W,setCookie:function(b,c,d,e,f,h){w.cookie=b+"="+(h?c:escape(c))+(d?"; expires="+("object"==typeof d?d:new Date((new Date).getTime()+864e5*d)).toUTCString():"")+"; path="+(e?escapeURI(e):"/")+(f?"; domain="+escape(f):"")},getCookie:function(b,c){var d,e=(d=RegExp("(^|;)\\s*"+b+"=([^;]*)").exec(w.cookie))&&d[2];return c?e:e&&unescape(e)},loop:function(b){var c={d:b,f:(new Date).getTime(),b:function(){M(P,c)}};2>P.push(c)&&function e(){f(P,function(b){b.d(Math.max(0,(new Date).getTime()-b.f),b.b)}).length&&ba(e)}();return c.b},off:function(b){f(b.M,function(b){y?(b.e.detachEvent("on"+b.n,b.h),M(D[b.e.minified],b)):(b.e.removeEventListener(b.n,b.h,u),M(b.e.minified2,b))});b.M=t}},function(b,c){l[b]=c});s.onload=V;w.addEventListener&&w.addEventListener("DOMContentLoaded",V,u);s.g=function(){f(D,U)};return{$:l,$$:function(b){return B(b)[0]},EE:X,M:G}});