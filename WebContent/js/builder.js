if(/^u/.test(typeof define)){var def={};this.define=function(m,f){def[m]=f()};this.require=function(m){return def[m]}}
define("minifiedUtil",function(){function m(g){return g.substr(0,3)}function f(g){return null!=g?""+g:""}function j(g){return"string"==typeof g}function d(g){return"function"==typeof g}function k(g){return!!g&&"object"==typeof g}function r(g){return"number"==typeof g}function p(g){return k(g)&&!!g.getDay}function l(g){return!0===g||!1===g}function w(g){var a=typeof g;return"object"==a?!(!g||!g.getDay):"string"==a||"number"==a||l(g)}function t(g){return!!g&&null!=g.length&&!j(g)&&!(g&&g.nodeType)&&
!d(g)}function n(g){return g}function v(g){return g+1}function s(g,a,b){return f(g).replace(a,null!=b?b:"")}function P(g){return s(g,/[\\\[\]\/{}()*+?.$|^-]/g,"\\$&")}function H(g){return s(g,/^\s+|\s+$/g)}function B(g,a){for(var b in g)g.hasOwnProperty(b)&&a(b,g[b]);return g}function C(g,a){if(g)for(var b=0;b<g.length;b++)a(g[b],b);return g}function J(g,a){var b=[],c=d(a)?a:function(g){return a!=g};C(g,function(g,a){c(g,a)&&b.push(g)});return b}function S(g,a,b){var c=[];g(a,function(g,a){t(g=b(g,
a))?C(g,function(g){c.push(g)}):null!=g&&c.push(g)});return c}function K(g,a){return S(C,g,a)}function T(g){var a=[];B(g,function(g){a.push(g)});return a}function u(g,a){var b=[];C(g,function(g,c){b.push(a(g,c))});return b}function D(g,b){if(t(g)){var c=O(b);return a(O(g).sub(0,c.length),c)}return null!=b&&g.substr(0,b.length)==b}function Q(g,a){if(t(g)){var b=O(a);return O(g).sub(-b.length).equals(b)||!b.length}return null!=a&&g.substr(g.length-a.length)==a}function F(g){var a=g.length;return u(g,
function(){return g[--a]})}function x(g,a,b){if(!g)return[];var c=g.length,e=0>a?c+a:a,h=null==b?c:0<=b?b:c+b;return J(g,function(g,a){return a>=e&&a<h})}function A(g,a){var b={};C(g,function(g){b[g]=a});return b}function U(g,a,b){B(g,function(g,c){if(null==a[g]||!b)a[g]=c});return a}function z(g,a){for(var b=d(a)?a:function(g,b){if(a===g)return b},c,e=0;e<g.length;e++)if(null!=(c=b(g[e],e)))return c}function L(g){return u(g,n)}function M(){var g=this;return function(){return new R(c(g,arguments))}}
function W(g){var a={};return J(g,function(g){if(a[g])return!1;a[g]=1;return!0})}function E(g,a){var b=A(a,1);return J(g,function(a){var g=b[a];b[a]=0;return g})}function X(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1}function a(g,b){var c=d(g)?g():g,e=d(b)?b():b;if(c==e)return!0;if(null==c||null==e)return!1;if(w(c)||w(e))return p(c)&&p(e)&&c.getTime()==e.getTime();if(t(c))return c.length!=e.length?!1:!z(c,function(g,b){if(!a(g,e[b]))return!0});if(t(e))return!1;var h=T(c),q=h.length,
y=0;B(e,function(){y++});return q!=y?!1:!z(h,function(g){if(!a(c[g],e[g]))return!0})}function b(a,b,c){return a.apply(c&&b,u(c||b,n))}function c(a,c,e){return u(a,function(a){return d(a)?b(a,c,e):Y})}function e(a,c,e,h){return function(){return b(a,c,K([e,arguments,h],n))}}function h(a,b){return q(b,0,0,0,a)}function q(a,b,c,e,h,q,y){function l(a){var b=a.length;return b>y?l(a.substr(0,b-y))+(q||",")+a.substr(b-y):a}var f=0>a,d=/(\d+)(\.(.*))?/.exec((f?-a:a).toFixed(b));a=d[1];for(e=(e||".")+d[3];a.length<
(h||1);)a="0"+a;y&&(a=l(a));return(f?"-":"")+a+(b?c?s(e,/[.,]?0+$/):e:"")}function y(a,b,c){return null==b||!a?0:60*parseInt(a[b])+parseInt(a[b+1])+c.getTimezoneOffset()}function V(a,b){if(1==arguments.length)return V(null,a);if(/^\?/.test(a)){if(""==H(b))return null;a=a.substr(1)}var c,e=(c=/[0#]([.,])[_9]/.exec(a))?c[1]:(c=/^[.,]$/.exec(a))?c[0]:".";c=parseFloat(s(s(s(b,","==e?/\./g:/,/g),e,"."),/^[^\d-]*(-?\d)/,"$1"));return isNaN(c)?Y:c}function ga(a){return new Date(a.getTime())}function ca(a,
b,c){a["set"+b].call(a,a["get"+b].call(a)+c);return a}function Z(a,b,c){return 3>arguments.length?Z(new Date,a,b):ca(ga(a),b.charAt(0).toUpperCase()+b.substr(1),c)}function aa(a,b,c){var e=b.getTime(),h=c.getTime(),q=h-e;if(0>q)return-aa(a,c,b);if(b={milliseconds:1,seconds:1E3,minutes:6E4,hours:36E5}[a])return q/b;b=a.charAt(0).toUpperCase()+a.substr(1);a=Math.floor(q/{fullYear:31536E6,month:2628E6,date:864E5}[a]-2);e=ca(new Date(e),b,a);for(q=a;q<1.2*a+4;q++)if(ca(e,b,1).getTime()>h)return q}function ba(a){return s(a,
/['"\t\n\r]/g,function(a){return la[a]})}function da(a,c){if(ea[a])return ea[a];var e="with(_.isObject(obj)?obj:{}){"+u(a.split(/{{|}}}?/),function(a,b){var c,g=H(a),e=s(g,/^{/),g=g==e?"esc(":"";if(b%2)return(c=/^each\b(\s+([\w_]+(\s*,\s*[\w_]+)?)\s*:)?(.*)/.exec(e))?"each("+(""==H(c[4])?"this":c[4])+", function("+c[2]+"){":(c=/^if\b(.*)/.exec(e))?"if("+c[1]+"){":(c=/^else\b\s*(if\b(.*))?/.exec(e))?"}else "+(c[1]?"if("+c[2]+")":"")+"{":(c=/^\/(if)?/.exec(e))?c[1]?"}\n":"});\n":(c=/^#(.*)/.exec(e))?
c[1]:(c=/(.*)::\s*(.*)/.exec(e))?"print("+g+'_.formatValue("'+ba(c[2])+'",'+(""==H(c[1])?"this":c[1])+(g&&")")+"));\n":"print("+g+(""==H(e)?"this":e)+(g&&")")+");\n";if(""!=a)return'print("'+ba(a)+'");\n'}).join("")+"}",h=new Function("obj","each","esc","print","_",e);return ea[a]=function(a,g){var e=[];h.call(g||a,a,function(a,b){t(a)?C(a,function(a,c){b.call(a,a,c)}):B(a,function(a,c){b.call(c,a,c)})},c||n,function(){b(e.push,e,arguments)},O);return e.join("")}}function ha(a){return s(a,/[<>'"&]/g,
function(a){return"&#"+a.charCodeAt(0)+";"})}function R(a,b){for(var c=0,e=0;e<a.length;e++){var h=a[e];if(b&&t(h))for(var q=0;q<h.length;q++)this[c++]=h[q];else this[c++]=h}this.length=c;this._=!0}function O(){return new R(arguments,!0)}function N(a){return function(b,c){return new R(a(this,b,c))}}function I(a){return function(b,c){return a(this,b,c)}}function G(a){return function(b,c,e){return new R(a(b,c,e))}}var Y,fa="January,February,March,April,May,June,July,August,September,October,November,December".split(/,/),
ia=u(fa,m),ja="Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(/,/),ma=u(ja,m),ka=["am","pm"],la={'"':'\\"',"'":"\\'","\n":"\\n","\t":"\\t","\r":"\\r"},ea={};U({each:I(C),filter:N(J),collect:N(K),map:N(u),toObject:I(A),equals:I(a),sub:N(x),reverse:N(F),find:I(z),startsWith:I(D),endsWith:I(Q),contains:I(X),call:N(c),array:I(L),unite:I(M),uniq:N(W),intersection:N(E),join:function(a){return u(this,n).join(a)},sort:function(a){return new R(u(this,n).sort(a))},tap:function(a){a(this);return this}},
R.prototype);U({filter:G(J),collect:G(K),collectObj:G(function(a,b){return S(B,a,b)}),map:G(u),sub:G(x),reverse:G(F),each:C,toObject:A,find:z,contains:X,startsWith:D,endsWith:Q,equals:a,keys:G(T),values:G(function(a,b){var c=[];b?C(b,function(b){c.push(a[b])}):B(a,function(a,b){c.push(b)});return c}),call:G(c),array:L,unite:M,uniq:G(W),intersection:G(E),bind:e,partial:function(a,b,c){return e(a,null,b,c)},once:function(a){var c=0;return function(){if(!c++)return b(a,this,arguments)}},nonOp:n,eachObj:B,
mapObj:function(a,b){var c={};B(a,function(a,e){c[a]=b(a,e)});return c},filterObj:function(a,b){var c={},e=d(b)?b:function(a){return b!=a};B(a,function(a,b){e(a,b)&&(c[a]=b)});return c},isList:t,isFunction:d,isObject:k,isNumber:r,isBool:l,isDate:p,isValue:w,isString:j,toString:f,toList:function(a){return t(a)?a:null!=a?[a]:[]},dateClone:ga,dateAdd:Z,dateDiff:aa,dateMidnight:function(a){a=a||new Date;return new Date(a.getFullYear(),a.getMonth(),a.getDate())},formatNumber:q,pad:h,formatValue:function(a,
b){a=s(a,/^\?/);if(p(b)){var c,e,l=a,d=b,k={y:["FullYear",n],M:["Month",v],n:["Month",ia],N:["Month",fa],d:["Date",n],m:["Minutes",n],H:["Hours",n],h:["Hours",function(a){return a%12||12}],K:["Hours",v],k:["Hours",function(a){return a%12+1}],s:["Seconds",n],S:["Milliseconds",n],a:["Hours",function(a,b){return(b||ka)[12>a?0:1]}],w:["Day",ma],W:["Day",ja],z:["TimezoneOffset",function(a){if(c)return c;var b=0<a?a:-a;return(0>a?"+":"-")+h(2,Math.floor(b/60))+h(2,b%60)}]};if(e=/^\[(([+-]\d\d)(\d\d))\]\s*(.*)/.exec(a))c=
e[1],d=Z(b,"minutes",y(e,2,b)),l=e[4];return s(l,/(\w)(\1*)(?:\[([^\]]+)\])?/g,function(a,b,c,e){if(b=k[b])a=d["get"+(t(b)?b[0]:b)].call(d),e=e&&e.split(","),a=t(b[1])?(e||b[1])[a]:b[1](a,e),null!=a&&!j(a)&&(a=h(c.length+1,a));return a})}return z(a.split(/\s*\|\s*/),function(a){var c,e;if(c=/^([<>]?)(=?)([^:]*?)\s*:\s*(.*)$/.exec(a)){a=b;var g=parseFloat(c[3]);if(isNaN(g)||!r(a))a=null==a?"null":f(a),g=c[3];if(c[1]){if(!c[2]&&a==g||"<"==c[1]&&a>g||">"==c[1]&&a<g)return null}else if(a!=g)return null;
a=c[4]}if(r(b)&&(c=/(?:(0[0.,]*)|(#[#.,]*))(_*)(9*)/.exec(a))){e=f(c[1])+f(c[2]);var g=f(c[1]).length?s(e,/[.,]/g).length:1,h=s(s(e,/^.*[0#]/),/[^,.]/g),y=f(c[3]).length+f(c[4]).length,d,l;if(e=/([.,])[^.,]+[.,]/.exec(c[0]))d=e[1],l=e[0].length-2;d=q(b,y,f(c[3]).length,h,g,d,l);l=a;a=c.index;c=f(c[0]).length;return l.substr(0,a)+d+l.substr(a+c)}return a})},parseDate:function(a,b){var c={y:0,M:[1,1],n:[1,ia],N:[1,fa],d:2,m:4,H:3,h:3,K:[3,1],k:[3,1],s:5,S:6,a:[3,ka]},e={},h=1,q,l,d;if(/^\?/.test(a)){if(""==
H(b))return null;a=a.substr(1)}if(d=/^\[([+-]\d\d)(\d\d)\]\s*(.*)/.exec(a))q=d,a=d[3];if(!(d=RegExp(a.replace(/(.)(\1*)(?:\[([^\]]*)\])?/g,function(a,b,c,g){return/[dmhkyhs]/i.test(b)?(e[h++]=b,a=c.length+1,"(\\d"+(2>a?"+":"{1,"+a+"}")+")"):"z"==b?(l=h,h+=2,"([+-]\\d\\d)(\\d\\d)"):/[Nna]/.test(b)?(e[h++]=[b,g&&g.split(",")],"([a-zA-Z\u0080\ufffd\u1fff]+)"):/w/i.test(b)?"[a-zA-Z\u0080\ufffd\u1fff]+":/\s/.test(b)?"\\s+":P(a)})).exec(b)))return Y;for(var f=[0,0,0,0,0,0,0],k=1;k<h;k++){var w=d[k],n=e[k];
if(t(n)){var m=n[0],j=c[m],V=j[0],n=z(n[1]||j[1],function(a,b){return D(w.toLowerCase(),a.toLowerCase())?b:null});if(null==n)return Y;f[V]="a"==m?f[V]+12*n:n}else n&&(m=parseInt(w),j=c[n],t(j)?f[j[0]]+=m-j[1]:f[j]+=m)}c=new Date(f[0],f[1],f[2],f[3],f[4],f[5],f[6]);return Z(c,"minutes",-y(q,1,c)-y(d,l,c))},parseNumber:V,copyObj:U,coal:function(){return z(arguments,n)},trim:H,escapeRegExp:P,escapeHtml:ha,format:function(a,b){return da(a)(b)},template:da,htmlTemlplate:function(a){return da(a,ha)}},O);
return{_:O}});/^u/.test(typeof define)&&(def={},this.define=function(m,f){def[m]=f()},this.require=function(m){return def[m]});
define("minified",function(){function m(a){return null!=a?""+a:""}function f(a){return"string"==typeof a}function j(a){return"function"==typeof a&&!a.item}function d(a){return a&&a.nodeType}function k(a){return a&&null!=a.length&&!f(a)&&!d(a)&&!j(a)}function r(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c]);return a}function p(a,b){for(var c=0;a&&c<a.length;c++)b(a[c],c);return a}function l(a,b){var c=[],e=j(b)?b:function(a){return b!=a};p(a,function(a,b){e(a,b)&&c.push(a)});return c}function w(a,
b){var c=[];p(a,function(a,h){k(a=b(a,h))?p(a,function(a){c.push(a)}):null!=a&&c.push(a)});return c}function t(a,b){var c=[];r(a,function(a,h){k(a=b(a,h))?p(a,function(a){c.push(a)}):null!=a&&c.push(a)});return c}function n(a,b,c){return m(a).replace(b,c||"")}function v(a){return parseFloat(n(a,/^[^\d-]+/))}function s(a){return a.minified=a.minified||++U}function P(a,b){function c(a){if(d(a)&&!h[q=s(a)])e.push(a),h[q]=!0}var e=[],h={},q;p(a,function(a){a=b(a);k(a)?p(a,c):c(a)});return e}function H(a){var b=
{$position:"absolute",$visibility:"hidden",$display:"block",$height:null},c=a.get(b);a.set(b);b=a.get("$height",!0);a.set(c);return b}function B(a){a()}function C(){p(L,B);L=null}function J(a){L?L.push(a):x.setTimeout(a,0)}function S(a,b,c,e){return function(){var h=u(A.createElement(a));k(b)||"object"!=typeof b?h.add(b):h.set(b).add(c);e&&e(h);return h}}function K(){var a,b=[],c=[],e=function(e,h){null==a&&(a=e,b=h,x.setTimeout(function(){p(c,B)},0))},h=e.then=function(e,h){var d=K(),f=function(){try{var c=
a?e:h;if(j(c)){var f=c.apply(null,b);f&&j(f.then)?f.then(function(a){d(!0,[a])},function(a){d(!1,[a])}):d(!0,[f])}else d(a,b)}catch(l){d(!1,[l])}};null!=a?x.setTimeout(f,0):c.push(f);return d};e.always=function(a){return h(a,a)};e.error=function(a){return h(0,a)};return e}function T(a){return X[a]||"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function u(a,b,c){return j(a)?J(a):new F(D(a,b,c))}function D(a,b,c){function e(a){a=function aa(a){return k(a)?w(a,aa):a}(a);return h?l(a,function(a){for(;a=
a.parentNode;){if(a===h)return!0;if(c)return!1}}):a}var h,q,d,j,m;if(b&&1!=(b=D(b)).length)return P(b,function(b){return D(a,b,c)});h=b&&b[0];if(!f(a))return e(k(a)?a:[a]);if(1<(b=a.split(/\s*,\s*/)).length)return P(b,function(a){return D(a,h,c)});if(b=/(\S+)\s+(.+)$/.exec(a))return D(b[2],D(b[1],h),c);if(a!=(b=n(a,/^#/)))return e([A.getElementById(b)]);h=h||A;q=(b=/([\w-]*)\.?([\w-]*)/.exec(a))[1];j=b[2];b=(d=h.getElementsByClassName&&j)?h.getElementsByClassName(j):h.getElementsByTagName(q||"*");
if(q=d?q:j)m=RegExp("\\b"+q+"\\b","i"),b=l(b,function(a){return m.test(a[d?"nodeName":"className"])});return h?e(b):b}function Q(a){var b;if(j(a))return a;if(!a||f(a)&&("*"==a||(b=/^([\w-]*)\.([\w-]+)$/.exec(a))||(b=/^([\w-]+)$/.exec(a)))){var c=b&&b[1]&&RegExp(b[1],"i"),e=b&&b[2]&&RegExp("\\b"+b[2]+"\\b","i");return function(a){return 1==d(a)&&(!c||c.test(a.nodeName))&&(!e||e.test(a.className))}}var h={};u(a).each(function(a){h[s(a)]=!0});return function(a){return h[s(a)]}}function F(a){for(var b=
this.length=a.length,c=0;c<b;c++)this[c]=a[c]}var x=this,A=document,U=1,z={},L=[],M=[],W=x.requestAnimationFrame||function(a){x.setTimeout(a,33)},E=!!A.all&&!L.map,X={"\t":"\\t","\r":"\\r","\n":"\\n",'"':'\\"',"\\":"\\\\"};r({each:function(a){return p(this,a)},filter:function(a){return new F(l(this,a))},collect:function(a){return new F(w(this,a))},sub:function(a,b){var c=0>a?this.length+a:a,e=0<=b?b:this.length+(b||0);return new F(l(this,function(a,b){return b>=c&&b<e}))},find:function(a){for(var b,
c=j(a)?a:function(b,c){if(a===b)return c},e=0;e<this.length;e++)if(null!=(b=c(this[e],e)))return b},remove:function(){p(this,function(a){if(E){var b=function(a){p(z[a.minified],function(b){a.detachEvent("on"+b.n,b.h)});delete z[a.minified]};p(D("*",a),b);b(a)}a.parentNode.removeChild(a)})},text:function(){function a(b){var c=d(b);return 1==c?w(b.childNodes,a):5>c?b.data:null}return w(this,a).join("")},trav:function(a,b,c){var e=Q(b),h=c||1E9;return new F(P(this,function(b){for(var c=[];(b=b[a])&&
9!=b.nodeType&&c.length<h;)e(b)&&c.push(b);return c}))},select:function(a,b){return u(a,this,b)},is:function(a){var b=Q(a);return!this.find(function(a){if(!b(a))return!0})},only:function(a){return this.filter(Q(a))},get:function(a,b){var c=this,e=c[0];if(e){if(f(a)){var h=n(n(a,/^%/,"data-"),/^[$@]/),d;d="$"==a?e.className:"$$"==a?E?e.style.cssText:e.getAttribute("style"):/\$\$/.test(a)&&("hidden"==e.style.visibility||"none"==e.style.display)?0:"$$fade"==a?isNaN(d=E?v(e.style.filter)/100:v(e.style.opacity))?
1:d:"$$slide"==a?c.get("$height"):/^\$/.test(a)?x.getComputedStyle?x.getComputedStyle(e,null).getPropertyValue(n(h,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(e.currentStyle||e.style)[h]:/^[@%]/.test(a)?e.getAttribute(h):e[h];return b?v(d):d}var l={};(k(a)?p:r)(a,function(a){l[a]=c.get(a,b)});return l}},set:function(a,b){var c=this,e;void 0!==b?"$$fade"==a||"$$slide"==a?c.set({$visibility:0<(e=v(b))?"visible":"hidden",$display:"block"}).set("$$fade"==a?E?{$filter:"alpha(opacity = "+100*e+")",
$zoom:1}:{$opacity:e}:{$height:/px$/.test(b)?b:function(a,b,c){return e*(e&&H(u(c)))+"px"},$overflow:"hidden"}):p(c,function(c,e){var d=n(n(a,/^%/,"data-"),/^[@$]/),f=c.className||"",l=/^\$/.test(a)?c.style:c,k=j(b)?b(u(c).get(a),e,c):b;"$"==a?null!=k&&(p(k.split(/\s+/),function(a){var b=n(a,/^[+-]/),c=f;f=n(f,RegExp("\\b"+b+"\\b"));if(/^\+/.test(a)||b==a&&c==f)f+=" "+b}),c.className=n(f,/^\s+|\s+(?=\s|$)/g)):"$$"==a?E?l.cssText=k:null!=k?c.setAttribute("style",k):c.removeAttribute("style"):/^[@%]/.test(a)?
null!=k?l.setAttribute(d,k):l.removeAttribute(d):l[d]=k}):f(a)||j(a)?c.set("$",a):r(a,function(a,b){c.set(a,b)});return c},add:function(a,b){return p(this,function(c,e){var h;(function y(a){k(a)?p(a,y):j(a)?y(a(c,e)):null!=a&&(a=d(a)?a:A.createTextNode(a),h?h.parentNode.insertBefore(a,h.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),h=a)})(d(a)&&e?null:a)})},fill:function(a){return p(this,function(a){u(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,c,e){e.insertBefore(a,
c)})},addAfter:function(a){return this.add(a,function(a,c,e){e.insertBefore(a,c.nextSibling)})},addFront:function(a){return this.add(a,function(a,c){c.insertBefore(a,c.firstChild)})},replace:function(a){return this.add(a,function(a,c,e){e.replaceChild(a,c)})},clone:function(a){return new F(w(this,function(b){var c=d(b);if(1==c){var e={$:b.className||null,$$:E?b.style.cssText:b.getAttribute("style")};p(b.attributes,function(a){var c=a.name;"id"!=c&&("style"!=c&&"class"!=c&&b.getAttribute(c))&&(e["@"+
c]=a.value)});return S(b.tagName,e,u(b.childNodes).clone(),a)}return 5>c?b.data:null}))},animate:function(a,b,c,e){var h=this,d=[],f=/-?[\d.]+/,l,k=K(),w=j(c)?c:function(a,b,e){return a+e*(b-a)*(c+(1-c)*e*(3-2*e))};e=e||{};e.time=0;e.stop=function(){l();k(!1)};b=b||500;c=c||0;p(h,function(b){var c={o:u(b),e:{}};r(c.s=c.o.get(a),function(b,e){var h=a[b];"$$slide"==b&&(h=h*H(c.o)+"px");c.e[b]=/^[+-]=/.test(h)?n(h.substr(2),f,v(e)+v(n(h,/\+?=/))):h});d.push(c)});l=u.loop(function(a){function c(a,b){return/^#/.test(a)?
parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(n(a,/[^\d,]+/g).split(",")[b])}e.time=a;a>=b||0>a?(p(d,function(a){a.o.set(a.e)}),l(),e.time=null,k(!0,[h])):p(d,function(e){r(e.s,function(h,d){var l="rgb(",k=e.e[h],j=a/b;if(/^#|rgb\(/.test(k))for(var q=0;3>q;q++)l+=Math.round(w(c(d,q),c(k,q),j))+(2>q?",":")");else l=n(k,f,m(w(v(d),v(k),j)));e.o.set(h,l)})})});return k},toggle:function(a,b,c,e){var h=this,d={},f=!1,l=/\b(?=\w)/g,k;return b?h.set(a)&&function(l){if(l!==f)return k=
(f=!0===l||!1===l?l:!f)?b:a,j(k)?k(h,c,e):c?h.animate(k,d.stop?d.stop()||d.time:c,e,d):h.set(k)&&void 0}:h.toggle(n(a,l,"-"),n(a,l,"+"))},values:function(a){var b=a||{};this.each(function(a){var e=a.name,h=m(a.value),d=b[e];if(/form/i.test(a.tagName))u(a.elements).values(b);else if(e&&(!/kbox|dio/i.test(a.type)||a.checked))k(d)?d.push(h):b[e]=null==d?h:[d,h]});return b},on:function(a,b,c,e){return this.each(function(h,d){p(a.split(/\s/),function(a){var l=n(a,/\|/),f=e&&c,k=e||c,j=l==a;a=function(a,
c){var e=a||x.event,h;if((h=(!b.apply(f||c||e.target,k||[e,d])||k)&&j)&&!c)e.stopPropagation&&(e.preventDefault(),e.stopPropagation()),e.returnValue=!1,e.cancelBubble=!0;return h};var m={e:h,h:a,n:l};(b.M=b.M||[]).push(m);E?(h.attachEvent("on"+l,a),(z[h.minified]=z[s(h)]||[]).push(m)):(h.addEventListener(l,a,!0),(h.minified2=h.minified2||[]).push(m))})})},onOver:function(a){var b=[],c=this;return c.on("|mouseover |mouseout",function(e,h){var d="mouseout"!=e.type,l=e.relatedTarget;if(b[h]!==d&&(d||
!l||l!=c[h]&&!u(l).trav("parentNode",c[h]).length))b[h]=d,a.call(this,d,h)})},trigger:function(a,b){var c=b||{};return this.each(function h(b,d,l){var f;p(E?z[b.minified]:b.minified2,function(h){h.n==a&&(f=f||h.h(c,l||b))});b.parentNode&&!f&&h(b.parentNode,d,l||b)})}},function(a,b){F.prototype[a]=b});r({request:function(a,b,c,e,h,l){var j,n=c,p=0,v=K();try{j=x.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),null!=c&&(e=e||{},!f(c)&&!d(c)&&(n=t(c,function ba(a,b){return k(b)?
w(b,function(b){return ba(a,b)}):encodeURIComponent(a)+(null!=b?"="+encodeURIComponent(b):"")}).join("&")),/post/i.test(a)?!d(c)&&(!f(c)&&!e["Content-Type"])&&(e["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+n,n=null)),j.open(a,b,!0,h,l),r(e,function(a,b){j.setRequestHeader(a,b)}),j.onreadystatechange=function(){4==j.readyState&&!p++&&(200==j.status?v(!0,[j.responseText,j.responseXML]):v(!1,[j.status,j.statusText,j.responseText]))},j.send(n)}catch(s){p||v(!1,[0,null,m(s)])}return v},
toJSON:function b(c){return null==c?""+c:f(c=c.valueOf())?'"'+n(c,/[\\\"\x00-\x1f\x22\x5c]/g,T)+'"':k(c)?"["+w(c,b).join()+"]":"object"==typeof c?"{"+t(c,function(c,h){return b(c)+":"+b(h)}).join()+"}":m(c)},parseJSON:x.JSON?x.JSON.parse:function(b){b=n(b,/[\x00\xad\u0600-\uffff]/g,T);if(/^[[\],:{}\s]*$/.test(n(n(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g)))return eval("("+b+")")},ready:J,setCookie:function(b,c,e,h,d,l){A.cookie=b+"="+(l?c:escape(c))+(e?"; expires="+("object"==
typeof e?e:new Date((new Date).getTime()+864E5*e)).toUTCString():"")+"; path="+(h?escapeURI(h):"/")+(d?"; domain="+escape(d):"")},getCookie:function(b,c){var e,h=(e=RegExp("(^|;)\\s*"+b+"=([^;]*)").exec(A.cookie))&&e[2];return c?h:h&&unescape(h)},loop:function(b){var c={c:b,t:(new Date).getTime(),s:function(){for(var b=0;b<M.length;b++)M[b]===c&&M.splice(b--,1)}};2>M.push(c)&&function h(){p(M,function(b){b.c(Math.max(0,(new Date).getTime()-b.t),b.s)}).length&&W(h)}();return c.s},wait:function(b,c){var e=
K();x.setTimeout(function(){e(!0,c)},b||0);return e},off:function(b){p(b.M,function(b){E?(b.e.detachEvent("on"+b.n,b.h),z[b.e.minified]=l(z[b.e.minified],b)):(b.e.removeEventListener(b.n,b.h,!0),b.e.minified2=l(b.e.minified2,b))});b.M=null}},function(b,c){u[b]=c});x.onload=C;A.addEventListener&&A.addEventListener("DOMContentLoaded",C,!1);return{$:u,$$:function(b){return D(b)[0]},EE:S,M:F}});var _=require("minifiedUtil")._;
function parseSourceSections(m){function f(){return{id:"anon"+j++,src:[],desc:"",requires:{},requiredBy:{},syntax:[],example:[],params:[]}}m=m.split("\n");var j=100,d=[],k=f(),r=!1;_.each(m,function(j){if(r&&/^.*\*\/\s*$/.test(j))r=!1;else if(r){var l=j.replace(/^\s*(\*\s?)?/,"").replace(/\s*$/,""),m=l.match(/^\s*@([a-z]+)/);m?(m=m[1],l=_.trim(l.replace(/^\s*@[a-z]+\s*/,"")),"syntax"==m||"example"==m?k[m].push(l):"requires"==m?l.length&&_.each(l.split(/\s+/),function(d){k.requires[d]=1}):"param"==
m?k.params.push({name:l.replace(/\s.*$/,""),desc:l.replace(/^\S+\s+/,"")}):"return"==m?k.params.push({name:"@return",desc:l}):"function"==m?k.params[k.params.length-1].funcs.push(l):k[m]=""!=l?l:1):k.params.length?k.params[k.params.length-1].desc+="\n"+_.trim(l):k.example.length?k.example[k.example.length-1]+="\n"+l:k.desc+=l+"\n"}else/^\s*\/\*\$/.test(j)&&!/\*\/\s*$/.test(j)&&(r=!0,d.push(k),k=f());k.src.push(j)});d.push(k);return d}
function createSectionMap(m){var f={};_.each(m,function(j){f[j.id]=j});return f}function completeRequirements(m,f){var j=0;_.each(m,function(d){_.eachObj(d.requires,function(k){var m=f[k];if(!m)throw Error('Unknown id in requirement: "'+k+'"');_.eachObj(m.requires,function(f){d.requires[f]||(j++,d.requires[f]=1)})})});0<j?completeRequirements(m,f):_.each(m,function(d){_.eachObj(d.requires,function(j){f[j].requiredBy[d.id]=1})})}
function calculateDependencies(m,f){var j={};_.eachObj(f,function(d){f[d]&&(j[d]=1,_.eachObj(m[d].requires,function(d){j[d]=1}))});return j}function createDefaultConfigurationMap(m,f){var j={};_.each(m,function(d){if(d.configurable&&("default"==d.configurable||f))j[d.id]=1});return j}
function compile(m,f,j){var d="",k=calculateDependencies(f,j),r=[],p=!0;_.filter(m,function(d){return k[d.id]||!(d.configurable||d.dependency)}).each(function(l){_.each(l.src,function(l){if(/^\s*$/.test(l))p||(d+="\n"),p=!0;else{var f=l.match(/^(\s*)\/\/\s*@(cond|condblock)\s+(\!?)(\w*)\s*(.*)$/);if(f&&"cond"==f[2]&&!!k[f[4]]!=("!"==f[3]))d+=f[1]+f[5]+"\n";else{var j=!1,m=!0;f&&"condblock"==f[2]?r.push(!!k[f[4]]!=("!"==f[3])):/^\s*\/\/\s*@condend\b/.test(l)&&(j=!0);for(f=0;f<r.length;f++)if(!r[f]){m=
!1;break}m&&(d+=l+"\n");j&&r.pop()}p=!1}})});return d}function prepareSections(m){m=parseSourceSections(m);var f=createSectionMap(m);completeRequirements(m,f);var j=createDefaultConfigurationMap(m);return{sections:m,sectionMap:f,enabledSections:j}}var CONFIG_START="minified.js config start --",CONFIG_COMMENT="// - ",CONFIG_ALL="All sections.",CONFIG_ALL_EXCEPT="All sections except ",CONFIG_ONLY="Only sections ";
function serializeEnabledSections(m,f){var j=_.filter(m,function(d){return d.configurable}),d=_.filter(_.keys(f),function(d){return f[d]}),k,r=[];d.length==j.length?(k=CONFIG_COMMENT+CONFIG_ALL,r=[]):d.length/3>j.length/2?(k=CONFIG_COMMENT+CONFIG_ALL_EXCEPT,r=_.filter(j,function(d){return!f[d.id]}).collect(function(d){return d.id})):(k=CONFIG_COMMENT+CONFIG_ONLY,r=d);var p="// "+CONFIG_START+" use this comment to re-create configuration in the Builder\n"+k,l=50;_(r).sort().each(function(d){l<d.length?
(l=70,p+="\n// - "+d+", "):(p+=d+", ",l-=d.length+2)});return p=p.replace(/,\s*$/,".\n")}function fixConfig(m,f){_.eachObj(f,function(j){m[j]?_.copyObj(m[j].requires,f):delete f[j]});return f}
function deserializeEnabledSections(m,f,j){function d(d){return RegExp("^"+d.replace(/ /g,"\\s+"))}var k=d(CONFIG_START+".*"),r=d(CONFIG_ALL.replace(/\./,"\\.")),p=d(CONFIG_ALL_EXCEPT+"\\s*"),l=d(CONFIG_ONLY+"\\s*"),w=d(CONFIG_COMMENT);j=j.split("\n");for(var t=0;t<j.length;t++){var n=j[t];if(/^\s*\/\/s*/.test(n)&&(n=n.replace(/^\s*\/\/\s*/,""),k.test(n)&&t+1<j.length)){for(var n="",v=t+1;v<j.length;v++)if(w.test(j[v])){if(n+=j[v].replace(w,""),/\s*\.\s*$/.test(j[v]))break}else break;if(r.test(n))return createDefaultConfigurationMap(m,
!0);n=n.replace(/\s*\.\s*$/,"");if(p.test(n)){var s=createDefaultConfigurationMap(m,!0);_.each(n.replace(p,"").split(/\s*,\s*/),function(d){delete s[d]});return fixConfig(f,s)}if(l.test(n))return s={},_.each(n.replace(l,"").split(/\s*,\s*/),function(d){f[d]&&(s[d]=1)}),fixConfig(f,s)}}return null};var MINI=require("minified"),$=MINI.$,$$=MINI.$$,EE=MINI.EE,_=require("minifiedUtil")._,MAX_SIZE=4095,SRC="/download/minified-web-src.js",GROUPS="INTERNAL SELECTORS ELEMENT REQUEST JSON EVENTS COOKIE ANIMATION OPTIONS".split(" ");
function closureCompile(m,f,j){$.request("post","http://closure-compiler.appspot.com/compile",{js_code:m,output_format:"json",output_info:["compiled_code","statistics"],output_file_name:"minified-custom.js",compilation_level:f?"ADVANCED_OPTIMIZATIONS":"SIMPLE_OPTIMIZATIONS"}).then(function(d){j&&j($.parseJSON(d))},function(d,f,m){window.console&&console.log("error",d,f,m);j&&j(null)}).error(function(d){window.console&&console.log(d)})}
function setUpConfigurationUI(m){function f(){$(".modCheck").each(function(d){var f=0;$(".secCheck",d.parentNode.parentNode).each(function(d){d.checked&&f++});d.checked=0<f})}function j(d){var f=m.sectionMap[d.id.substr(4)];d.checked?_.eachObj(f.requires,function(d){$("#sec-"+d).set("checked",!0)}):_.eachObj(f.requiredBy,function(d){$("#sec-"+d).set("checked",!1)})}$("#compile").on("click",function(){var d={};$(".secCheck").each(function(f){f.checked&&(d[f.id.substr(4)]=1)});var f=compile(m.sections,
m.sectionMap,d),j=serializeEnabledSections(m.sections,d);if($$("#compressionAdvanced").checked)$$("#compile").disabled=!0,closureCompile(f,!0,function(d){$$("#compile").disabled=!1;$("#resultDiv").animate({$$slide:1});d?($("#gzipRow, #downloadRow").set({$display:"table-row"}),$$("#resultSrc").value=j+"\n"+d.compiledCode,$("#resultPlain").fill((d.statistics.compressedSize/1024).toFixed(2)+"kb ("+d.statistics.compressedSize+" bytes)"),$("#resultGzippedSize").fill((d.statistics.compressedGzipSize/1024).toFixed(2)+
"kb ("+d.statistics.compressedGzipSize+" bytes)"),$$("#resultLink").setAttribute("href","http://closure-compiler.appspot.com"+d.outputFilePath),$("#resultGzippedComment").set({$$fade:d.statistics.compressedGzipSize>MAX_SIZE?1:0})):alert("Google Closure Service not availble. Try again later.")});else try{$("#resultDiv").animate({$$slide:1}),$$("#resultSrc").value=j+f,$("#resultPlain").fill((f.length/1024).toFixed(2)+"kb"),$("#gzipRow, #downloadRow").set({$display:"none"})}catch(k){console.log(k)}return!1});
var d=$("#configSrcDiv").toggle({$$slide:0},{$$slide:1});$("#fromScratch").on("|click",d,[!1]);$("#loadConfig").on("|click",d,[!0]);$("#recreate").on("click",function(){try{var d=$$("#configSrc").value,j=deserializeEnabledSections(m.sections,m.sectionMap,d);j?(_.eachObj(m.sectionMap,function(d){var f=$$("#sec-"+d);f&&(f.checked=!!j[d])}),f()):alert("Can not find configuration in source.")}catch(k){console.log(k)}});$("#sectionCheckboxes").fill();for(var k=1;k<GROUPS.length;k++){var r;$("#sectionCheckboxes").add(r=
EE("div",{"@id":"divMod-"+k},EE("div",{className:"groupDescriptor"},[d=EE("input",{"@id":"mod-"+k,className:"modCheck","@type":"checkbox",checked:"checked"})(),EE("label",{"@for":"mod-"+k},GROUPS[k])]))());$(d).on("change",function(){var d=this.checked;$(".secCheck",this.parentNode.parentNode).each(function(f){f.checked=d;j(f)});f();return!0});var p;_.filter(m.sections,function(d){return d.group==GROUPS[k]&&d.configurable}).sort(function(d,f){var j=d.name||d.id,k=f.name||f.id;return j==k?0:j>k?1:
-1}).each(function(d){function k(d,f){var j=_.filter(_.keys(f),function(d){return!!f[d].name});if(!j.length)return null;var l=0,n=d;_.each(j,function(d){l++<Math.min(j.length,8)&&(1<l&&(n=l==Math.min(j.length,8)?n+" and ":n+", "),n=8==l&&8<j.length?n+"more":n+(m.sectionMap[d].name||m.sectionMap[d].id))});return n+="."}var t=k("Required by ",d.requiredBy),n=k("Requires ",d.requires);r.add(EE("div",{className:"sectionDescriptor"},[p=EE("input",{className:"secCheck","@type":"checkbox","@id":"sec-"+d.id,
checked:"default"==d.configurable?"checked":null})(),EE("label",{"@for":"sec-"+d.id},d.name||d.id),EE("div",{className:"requirements"},[t?[t,EE("br")]:null,n])]));$(p).on("change",function(){j(this);f();return!0})})}}
$(function(){var m=/MSIE\s([\d.]+)/i.exec(navigator.userAgent);m&&10>parseInt(m[1])?$("#builderDiv").fill("Sorry, the Builder tool requires at least Internet Explorer 10 (or, alternatively, Chrome or Firefox). Earlier versions lack CORS support required to use Google Closure's web service."):$.request("get",SRC,null).then(function(f){setUpConfigurationUI(prepareSections(f))}).error(function(f){window.console&&console.log(f)})});
