if(/^u/.test(typeof define)){var def={};this.define=function(j,e){def[j]=e()};this.require=function(j){return def[j]}}
define("minifiedUtil",function(){function j(q){return q.substr(0,3)}function e(q){return null!=q?""+q:""}function m(q){return"string"==typeof q}function h(q){return!!q&&"object"==typeof q}function n(q){return"number"==typeof q}function s(q){return h(q)&&!!q.getDay}function t(q){return!0===q||!1===q}function l(q){var a=typeof q;return"object"==a?!(!q||!q.getDay):"string"==a||"number"==a||t(q)}function g(q){return!!q&&null!=q.length&&!m(q)&&!(q&&q.nodeType)&&!R(q)}function k(q){return q}function w(q){return q+
1}function p(q,a,b){return e(q).replace(a,null!=b?b:"")}function r(q){return p(q,/[\\\[\]\/{}()*+?.$|^-]/g,"\\$&")}function G(q){return p(q,/^\s+|\s+$/g)}function x(q,a){for(var b in q)q.hasOwnProperty(b)&&a(b,q[b]);return q}function A(a,b){if(a)for(var c=0;c<a.length;c++)b(a[c],c);return a}function L(a,b){var c=[],d=R(b)?b:function(a){return b!=a};A(a,function(a,q){d(a,q)&&c.push(a)});return c}function X(a,b,c){var d=[];a(b,function(a,q){g(a=c(a,q))?A(a,function(a){d.push(a)}):null!=a&&d.push(a)});
return d}function U(a,b){return X(A,a,b)}function Y(a){var b=[];x(a,function(a){b.push(a)});return b}function B(a,b){var c=[];A(a,function(a,q){c.push(b(a,q))});return c}function V(a,b){if(g(a)){var c=S(b);return H(S(a).sub(0,c.length),c)}return null!=b&&a.substr(0,b.length)==b}function Z(a,b){if(g(a)){var c=S(b);return S(a).sub(-c.length).equals(c)||!c.length}return null!=b&&a.substr(a.length-b.length)==b}function aa(a){var b=a.length;return B(a,function(){return a[--b]})}function y(a,b,c){if(!a)return[];
var d=a.length,f=0>b?d+b:b,g=null==c?d:0<=c?c:d+c;return L(a,function(a,b){return b>=f&&b<g})}function D(a,b){var c={};A(a,function(a){c[a]=b});return c}function P(a,b,c){x(a,function(a,q){if(null==b[a]||!c)b[a]=q});return b}function I(a,b){for(var c=R(b)?b:function(a,c){if(b===a)return c},d,f=0;f<a.length;f++)if(null!=(d=c(a[f],f)))return d}function M(a){return B(a,k)}function z(a){return function(){return new Q(ba(a,arguments))}}function E(a){var b={};return L(a,function(a){if(b[a])return!1;b[a]=
1;return!0})}function ca(a,b){var c=D(b,1);return L(a,function(a){var b=c[a];c[a]=0;return b})}function J(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1}function H(a,b){var c=R(a)?a():a,d=R(b)?b():b;if(c==d)return!0;if(null==c||null==d)return!1;if(l(c)||l(d))return s(c)&&s(d)&&c.getTime()==d.getTime();if(g(c))return c.length!=d.length?!1:!I(c,function(a,b){if(!H(a,d[b]))return!0});if(g(d))return!1;var f=Y(c),v=f.length,u=0;x(d,function(){u++});return v!=u?!1:!I(f,function(a){if(!H(c[a],
d[a]))return!0})}function T(a,b,c){return a.apply(c&&b,B(c||b,k))}function ba(a,b,c){return B(a,function(a){return R(a)?T(a,b,c):da})}function F(a,b,c,d){return function(){return T(a,b,U([c,arguments,d],k))}}function W(b,c){return a(c,0,0,0,b)}function a(a,b,c,d,f,g,v){function u(a){var b=a.length;return b>v?u(a.substr(0,b-v))+(g||",")+a.substr(b-v):a}var k=0>a,l=/(\d+)(\.(.*))?/.exec((k?-a:a).toFixed(b));a=l[1];for(d=(d||".")+l[3];a.length<(f||1);)a="0"+a;v&&(a=u(a));return(k?"-":"")+a+(b?c?p(d,
/[.,]?0+$/):d:"")}function b(a,b,c){return null==b||!a?0:60*parseInt(a[b])+parseInt(a[b+1])+c.getTimezoneOffset()}function c(a,b){if(1==arguments.length)return c(null,a);if(/^\?/.test(a)){if(""==G(b))return null;a=a.substr(1)}var d,f=(d=/[0#]([.,])[_9]/.exec(a))?d[1]:(d=/^[.,]$/.exec(a))?d[0]:".";d=parseFloat(p(p(p(b,","==f?/\./g:/,/g),f,"."),/^[^\d-]*(-?\d)/,"$1"));return isNaN(d)?da:d}function d(a){return new Date(a.getTime())}function f(a,b,c){a["set"+b].call(a,a["get"+b].call(a)+c);return a}function v(a,
b,c){return 3>arguments.length?v(new Date,a,b):f(d(a),b.charAt(0).toUpperCase()+b.substr(1),c)}function u(a,b,c){var d=b.getTime(),v=c.getTime(),g=v-d;if(0>g)return-u(a,c,b);if(b={milliseconds:1,seconds:1E3,minutes:6E4,hours:36E5}[a])return g/b;b=a.charAt(0).toUpperCase()+a.substr(1);a=Math.floor(g/{fullYear:31536E6,month:2628E6,date:864E5}[a]-2);d=f(new Date(d),b,a);for(g=a;g<1.2*a+4;g++)if(f(d,b,1).getTime()>v)return g}function N(a){return p(a,/['"\t\n\r]/g,function(a){return la[a]})}function ea(a,
b){if(fa[a])return fa[a];var c="with(_.isObject(obj)?obj:{}){"+B(a.split(/{{|}}}?/),function(a,b){var c,d=G(a),f=p(d,/^{/),d=d==f?"esc(":"";if(b%2)return(c=/^each\b(\s+([\w_]+(\s*,\s*[\w_]+)?)\s*:)?(.*)/.exec(f))?"each("+(""==G(c[4])?"this":c[4])+", function("+c[2]+"){":(c=/^if\b(.*)/.exec(f))?"if("+c[1]+"){":(c=/^else\b\s*(if\b(.*))?/.exec(f))?"}else "+(c[1]?"if("+c[2]+")":"")+"{":(c=/^\/(if)?/.exec(f))?c[1]?"}\n":"});\n":(c=/^#(.*)/.exec(f))?c[1]:(c=/(.*)::\s*(.*)/.exec(f))?"print("+d+'_.formatValue("'+
N(c[2])+'",'+(""==G(c[1])?"this":c[1])+(d&&")")+"));\n":"print("+d+(""==G(f)?"this":f)+(d&&")")+");\n";if(""!=a)return'print("'+N(a)+'");\n'}).join("")+"}",d=new Function("obj","each","esc","print","_",c);return fa[a]=function(a,c){var f=[];d.call(c||a,a,function(a,b){g(a)?A(a,function(a,c){b.call(a,a,c)}):x(a,function(a,c){b.call(c,a,c)})},b||k,function(){T(f.push,f,arguments)},S);return f.join("")}}function ha(a){return p(a,/[<>'"&]/g,function(a){return"&#"+a.charCodeAt(0)+";"})}function K(a){return function(b,
c){return new Q(a(this,b,c))}}function O(a){return function(b,c){return a(this,b,c)}}function C(a){return function(b,c,d){return new Q(a(b,c,d))}}function R(a){return"function"==typeof a}function Q(a,b){for(var c=0,d=0;d<a.length;d++){var f=a[d];if(b&&g(f))for(var v=0;v<f.length;v++)this[c++]=f[v];else this[c++]=f}this.length=c;this._=!0}function S(){return new Q(arguments,!0)}var da,ga="January,February,March,April,May,June,July,August,September,October,November,December".split(/,/),ia=B(ga,j),ja=
"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(/,/),ma=B(ja,j),ka=["am","pm"],la={'"':'\\"',"'":"\\'","\n":"\\n","\t":"\\t","\r":"\\r"},fa={};P({each:O(A),filter:K(L),collect:K(U),map:K(B),toObject:O(D),equals:O(H),sub:K(y),reverse:K(aa),find:O(I),startsWith:O(V),endsWith:O(Z),contains:O(J),call:K(ba),array:O(M),unite:O(z),uniq:K(E),intersection:K(ca),join:function(a){return B(this,k).join(a)},sort:function(a){return new Q(B(this,k).sort(a))}},Q.prototype);P({filter:C(L),collect:C(U),
collectObj:C(function(a,b){return X(x,a,b)}),map:C(B),sub:C(y),reverse:C(aa),each:A,toObject:D,find:I,contains:J,startsWith:V,endsWith:Z,equals:H,keys:C(Y),values:C(function(a,b){var c=[];b?A(b,function(b){c.push(a[b])}):x(a,function(a,b){c.push(b)});return c}),call:C(ba),array:M,unite:z,uniq:C(E),intersection:C(ca),copyObj:P,range:function(a,b){for(var c=[],d=null==b?a:b,f=null!=b?a:0;f<d;f++)c.push(f);return new Q(c)},bind:F,partial:function(a,b,c){return F(a,null,b,c)},eachObj:x,mapObj:function(a,
b){var c={};x(a,function(a,d){c[a]=b(a,d)});return c},filterObj:function(a,b){var c={};x(a,function(a,d){b(a,d)&&(c[a]=d)});return c},isList:g,isFunction:R,isObject:h,isNumber:n,isBool:t,isDate:s,isValue:l,isString:m,toString:e,dateClone:d,dateAdd:v,dateDiff:u,dateMidnight:function(a){a=a||new Date;return new Date(a.getFullYear(),a.getMonth(),a.getDate())},pad:W,formatValue:function(c,d){c=p(c,/^\?/);if(s(d)){var f,u,l=c,h=d,N={y:["FullYear",k],Y:["FullYear",function(a){return a%100}],M:["Month",
w],n:["Month",ia],N:["Month",ga],d:["Date",k],m:["Minutes",k],H:["Hours",k],h:["Hours",function(a){return a%12||12}],k:["Hours",w],K:["Hours",function(a){return a%12}],s:["Seconds",k],S:["Milliseconds",k],a:["Hours",function(a,b){return(b||ka)[12>a?0:1]}],w:["Day",ma],W:["Day",ja],z:["TimezoneOffset",function(a){if(f)return f;var b=0<a?a:-a;return(0>a?"+":"-")+W(2,Math.floor(b/60))+W(2,b%60)}]};if(u=/^\[(([+-]\d\d)(\d\d))\]\s*(.*)/.exec(c))f=u[1],h=v(d,"minutes",b(u,2,d)),l=u[4];return p(l,/(\w)(\1*)(?:\[([^\]]+)\])?/g,
function(a,b,c,d){if(b=N[b])a=h["get"+(g(b)?b[0]:b)].call(h),d=d&&d.split(","),a=g(b[1])?(d||b[1])[a]:b[1](a,d),null!=a&&!m(a)&&(a=W(c.length+1,a));return a})}return I(c.split(/\s*\|\s*/),function(b){var c,f;if(c=/^([<>]?)(=?)([^:]*?)\s*:\s*(.*)$/.exec(b)){b=d;var g=parseFloat(c[3]);if(isNaN(g)||!n(b))b=null==b?"null":e(b),g=c[3];if(c[1]){if(!c[2]&&b==g||"<"==c[1]&&b>g||">"==c[1]&&b<g)return null}else if(b!=g)return null;b=c[4]}if(n(d)&&(c=/(?:(0[0.,]*)|(#[#.,]*))(_*)(9*)/.exec(b))){f=e(c[1])+e(c[2]);
var g=e(c[1]).length?p(f,/[.,]/g).length:1,v=p(p(f,/^.*[0#]/),/[^,.]/g),u=e(c[3]).length+e(c[4]).length,k,l;if(f=/([.,])[^.,]+[.,]/.exec(c[0]))k=f[1],l=f[0].length-2;k=a(d,u,e(c[3]).length,v,g,k,l);l=b;b=c.index;c=e(c[0]).length;return l.substr(0,b)+k+l.substr(b+c)}return b})},parseDate:function(a,c){var d={y:0,Y:[0,-2E3],M:[1,1],n:[1,ia],N:[1,ga],d:2,m:4,H:3,h:3,K:[3,1],k:[3,1],s:5,S:6,a:[3,ka]},f={},u=1,k,l,h;if(/^\?/.test(a)){if(""==G(c))return null;a=a.substr(1)}if(h=/^\[([+-]\d\d)(\d\d)\]\s*(.*)/.exec(a))k=
h,a=h[3];if(!(h=RegExp(a.replace(/(.)(\1*)(?:\[([^\]]*)\])?/g,function(a,b,c,d){return/[dmhkyhs]/i.test(b)?(f[u++]=b,a=c.length+1,"(\\d"+(2>a?"+":"{1,"+a+"}")+")"):"z"==b?(l=u,u+=2,"([+-]\\d\\d)(\\d\\d)"):/[Nna]/.test(b)?(f[u++]=[b,d&&d.split(",")],"([a-zA-Z\u0080\ufffd\u1fff]+)"):/w/i.test(b)?"[a-zA-Z\u0080\ufffd\u1fff]+":/\s/.test(b)?"\\s+":r(a)})).exec(c)))return da;for(var e=[0,0,0,0,0,0,0],N=1;N<u;N++){var n=h[N],j=f[N];if(g(j)){var m=j[0],p=d[m],C=p[0],j=I(j[1]||p[1],function(a,b){return V(n.toLowerCase(),
a.toLowerCase())?b:null});if(null==j)return da;e[C]="a"==m?e[C]+12*j:j}else j&&(m=parseInt(n),p=d[j],g(p)?e[p[0]]+=m-p[1]:e[p]+=m)}d=new Date(e[0],e[1],e[2],e[3],e[4],e[5],e[6]);return v(d,"minutes",-b(k,1,d)-b(h,l,d))},parseNumber:c,trim:G,escapeRegExp:r,escapeHtml:ha,format:function(a,b){return ea(a)(b)},template:ea,formatHtml:function(a,b){return ea(a,ha)(b)}},S);return{_:S,M:Q}});/^u/.test(typeof define)&&(def={},this.define=function(j,e){def[j]=e()},this.require=function(j){return def[j]});
define("minified",function(){function j(){return 1}function e(a){return null!=a?""+a:""}function m(a){return"string"==typeof a}function h(a){return a&&a.nodeType}function n(a){return a&&null!=a.length&&!m(a)&&!h(a)&&!p(a)}function s(a){return a}function t(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function l(a,b){var c=[];r(a,function(a,f){b(a,f)&&c.push(a)});return c}function g(a,b,c){var d=[];a(b,function(a,b){r(c(a,b),function(a){d.push(a)})});return d}function k(a,b,c){return e(a).replace(b,
c||"")}function w(a,b){var c=RegExp("\\b"+a+"\\b","i");return a?function(a){return c.test(a[b])}:j}function p(a){return"function"==typeof a&&!a.item}function r(a,b){if(n(a))for(var c=0;c<a.length;c++)b(a[c],c);else null!=a&&b(a,0);return a}function G(a,b){for(var c=0;a&&c<a.length;c++)a[c]===b&&a.splice(c--,1)}function x(a){return parseFloat(k(a,/^[^\d-]+/))}function A(a){return a.minified=a.minified||++ca}function L(a,b){var c=[],d={},f;r(a,function(a){r(b(a),function(a){if(h(a)&&!d[f=A(a)])c.push(a),
d[f]=!0})});return c}function X(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:null},c=a.get(b);a.set(b);b=a.get("$height",!0);a.set(c);return b}function U(a){a()}function Y(a,b){r(b,function(a){a.e.detachEvent("on"+a.n,a.h)})}function B(){r(H,U);H=null}function V(a){H?H.push(a):z.setTimeout(a,0)}function Z(a,b,c,d){return function(){var f=y(E.createElement(a));n(b)||"object"!=typeof b?f.add(b):f.set(b).add(c);d&&d(f);return f}}function aa(a){return W[a]||"\\u"+("0000"+
a.charCodeAt(0).toString(16)).slice(-4)}function y(a,b,c){return p(a)?V(a):new M(D(a,b,c))}function D(a,b,c){function d(a){a=g(r,a,function K(a){return n(a)?g(r,a,K):a});return f?l(a,function(a){for(;a=a.parentNode;){if(a===f)return!0;if(c)return!1}}):a}var f,v,u,e;if(b&&1!=(b=D(b)).length)return L(b,function(b){return D(a,b,c)});f=b&&b[0];if(!m(a))return d(a);if(1<(b=a.split(/\s*,\s*/)).length)return L(b,function(a){return D(a,f,c)});if(b=/(\S+)\s+(.+)$/.exec(a))return D(b[2],D(b[1],f),c);if(a!=
(b=k(a,/^#/)))return d(E.getElementById(b));f=f||E;v=(b=/([\w-]*)\.?([\w-]*)/.exec(a))[1];e=b[2];b=(u=f.getElementsByClassName&&e)?f.getElementsByClassName(e):f.getElementsByTagName(v||"*");if(v=u?v:e)b=l(b,w(v,u?"nodeName":"className"));return f?d(b):b}function P(a,b){var c,d={};if(p(a))return a;if(!a||m(a)&&("*"==a||(c=/^([\w-]*)\.([\w-]+)$/.exec(a))||(c=/^([\w-]+)$/.exec(a)))){var f=w(c&&c[1],"nodeName"),g=w(c&&c[2],"className");return function(a){return 1==h(a)&&f(a)&&g(a)}}if(b)return function(c){return null!=
y(a,b).find(c)};y(a).each(function(a){d[A(a)]=!0});return function(a){return d[A(a)]}}function I(){var a,b=[],c=[],d=function(d,f){null==a&&(a=d,b=f,z.setTimeout(function(){r(c,U)},0))},f=d.then=function(d,f){var g=I(),k=function(){try{var c=a?d:f;if(p(c)){var k=c.apply(null,b);k&&p(k.then)?k.then(function(a){g(!0,[a])},function(a){g(!1,[a])}):g(!0,[k])}else g(a,b)}catch(e){g(!1,[e])}};null!=a?z.setTimeout(k,0):c.push(k);return g};d.error=function(a){return f(0,a)};return d}function M(a){for(var b=
this.length=a.length,c=0;c<b;c++)this[c]=a[c]}var z=this,E=document,ca=1,J={},H=[],T=[],ba=z.requestAnimationFrame||function(a){z.setTimeout(a,33)},F=!!E.all&&!H.map,W={"\t":"\\t","\r":"\\r","\n":"\\n",'"':'\\"',"\\":"\\\\"};t({each:function(a){return r(this,a)},filter:function(a){return new M(l(this,a))},collect:function(a){return new M(g(r,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=0<=b?b:this.length+(b||0);return this.filter(function(a,b){return b>=c&&b<d})},find:function(a){for(var b,
c=p(a)?a:function(b,c){if(a===b)return c},d=0;d<this.length;d++)if(null!=(b=c(this[d],d)))return b},remove:function(){r(this,function(a){F&&1==h(a)&&(r(D("*",a),function(a){Y(0,J[a.minified]);delete J[a.minified]}),removeEvents(a));a.parentNode.removeChild(a)})},text:function(){function a(b){var c=h(b);return 1==c?g(r,b.childNodes,a):5>c?b.data:null}return g(r,this,a).join("")},trav:function(a,b,c){var d=P("number"==typeof b?null:b),f="number"==typeof b?b:c||1E9;return new M(L(this,function(b){for(var c=
[];(b=b[a])&&c.length<f;)d(b)&&c.push(b);return c}))},select:function(a,b){return y(a,this,b)},is:function(a){var b=P(a);return!this.find(function(a){if(!b(a))return!0})},only:function(a){return this.filter(P(a))},get:function(a,b){var c=this,d=c[0];if(d){if(m(a)){var f=k(k(a,/^%/,"data-"),/^[$@]/),g;g="$"==a?d.className:"$$"==a?F?d.style.cssText:d.getAttribute("style"):/\$\$/.test(a)&&("hidden"==d.style.visibility||"none"==d.style.display)?0:"$$fade"==a?isNaN(g=F?x(d.style.filter)/100:x(d.style.opacity))?
1:g:"$$slide"==a?c.get("$height"):/^\$/.test(a)?z.getComputedStyle?z.getComputedStyle(d,null).getPropertyValue(k(f,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(d.currentStyle||d.style)[f]:/^[@%]/.test(a)?d.getAttribute(f):d[f];return b?x(g):g}var e={};(n(a)?r:t)(a,function(a){e[a]=c.get(a,b)});return e}},set:function(a,b){var c=this,d;void 0!==b?"$$fade"==a||"$$slide"==a?c.set({$visibility:0<(d=x(b))?"visible":"hidden",$display:"block"}).set("$$fade"==a?F?{$filter:"alpha(opacity = "+100*d+")",
$zoom:1}:{$opacity:d}:{$height:/px/.test(b)?b:function(a,b,c){return d*(d&&X(y(c)))+"px"},$overflow:"hidden"}):r(c,function(c,d){var g=k(k(a,/^%/,"data-"),/^[@$]/),e=c.className||"",l=/^\$/.test(a)?c.style:c,h=p(b)?b(y(c).get(a),d,c):b;"$"==a?null!=h&&(r(h.split(/\s+/),function(a){var b=k(a,/^[+-]/),c=e;e=k(e,RegExp("\\b"+b+"\\b","i"));if(/^\+/.test(a)||b==a&&c==e)e+=" "+b}),c.className=k(e,/^\s+|\s+(?=\s|$)/g)):"$$"==a?F?l.cssText=h:null!=h?c.setAttribute("style",h):c.removeAttribute("style"):/^[@%]/.test(a)?
null!=h?l.setAttribute(g,h):l.removeAttribute(g):l[g]=h}):m(a)||p(a)?c.set("$",a):t(a,function(a,b){c.set(a,b)});return c},add:function(a,b){return this.each(function(c,d){var f;(function u(a){n(a)?r(a,u):p(a)?u(a(c,d)):null!=a&&(a=h(a)?a:E.createTextNode(a),f?f.parentNode.insertBefore(a,f.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),f=a)})(h(a)&&d?null:a)})},fill:function(a){return this.each(function(a){y(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,
c,d){d.insertBefore(a,c)})},addAfter:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c.nextSibling)})},addFront:function(a){return this.add(a,function(a,c){c.insertBefore(a,c.firstChild)})},replace:function(a){return this.add(a,function(a,c,d){d.replaceChild(a,c)})},clone:function(a){return this.collect(function(b){var c=h(b);if(1==c){var d={$:b.className||null,$$:F?b.style.cssText:b.getAttribute("style")};r(b.attributes,function(a){var c=a.name;"id"!=c&&("style"!=c&&"class"!=c&&b.getAttribute(c))&&
(d["@"+c]=a.value)});return Z(b.tagName,d,y(b.childNodes).clone(),a)}return 5>c?b.data:null})},animate:function(a,b,c,d){var f=this,g=[],l=/-?[\d.]+/,h,j=I(),n=p(c)?c:function(a,b,d){return a+d*(b-a)*(c+(1-c)*d*(3-2*d))};d=d||{};d.time=0;d.stop=function(){h();j(!1)};b=b||500;c=c||0;r(f,function(b){var c={o:y(b),e:{}};t(c.s=c.o.get(a),function(b,d){var f=a[b];"$$slide"==b&&(f=f*X(c.o)+"px");c.e[b]=/^[+-]=/.test(f)?k(f.substr(2),l,x(d)+x(k(f,/\+?=/))):f});g.push(c)});h=y.loop(function(a){function c(a,
b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(k(a,/[^\d,]+/g).split(",")[b])}d.time=a;a>=b||0>a?(r(g,function(a){a.o.set(a.e)}),h(),d.time=null,j(!0,[f])):r(g,function(d){t(d.s,function(f,g){var h="rgb(",j=d.e[f],m=a/b;if(/^#|rgb\(/.test(j))for(var p=0;3>p;p++)h+=Math.round(n(c(g,p),c(j,p),m))+(2>p?",":")");else h=k(j,l,e(n(x(g),x(j),m)));d.o.set(f,h)})})});return j},toggle:function(a,b,c,d){var f=this,g={},e=!1,h=/\b(?=\w)/g,l;return b?f.set(a)&&function(h){if(h!==
e)return l=(e=!0===h||!1===h?h:!e)?b:a,p(l)?l(f,c,d):c?f.animate(l,g.stop?g.stop()||g.time:c,d,g):f.set(l)&&void 0}:f.toggle(k(a,h,"-"),k(a,h,"+"))},values:function(a){var b=a||{};this.each(function(a){var d=a.name,f=e(a.value);if(/form/i.test(a.tagName))y(g(r,a.elements,s)).values(b);else if(d&&(!/kbox|dio/i.test(a.type)||a.checked))b[d]=g(r,[b[d],f],s)});return b},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(a,b,c,d){return this.each(function(f,
g){r(a.split(/\s/),function(a){var e=k(a,/\|/),h=p(b)||null,l=h?b:c,n=h&&d&&c,m=h&&(d||c),r=e==a,t=h?j:P(b,f),h=function(a,b){var c=a||z.event,d,f=b||c.target;if(t(f)&&(d=(!l.apply(n||f,m||[c,g])||m)&&r)&&!b)c.stopPropagation&&(c.preventDefault(),c.stopPropagation()),c.returnValue=!1,c.cancelBubble=!0;return d};a={e:f,h:h,n:e};(l.M=l.M||[]).push(a);F?(f.attachEvent("on"+e,h),e=A(f),(J[e]=J[e]||[]).push(a)):(f.addEventListener(e,h,!1),(f.minified2=f.minified2||[]).push(a))})})},onOver:function(a){var b=
this,c=[];return b.on("|mouseover |mouseout",function(d,f){var g="mouseout"!=d.type,e=d.relatedTarget||d.toElement;if(c[f]!==g&&(g||!e||e!=b[f]&&!y(e).trav("parentNode",b[f]).length))c[f]=g,a.call(this,g,f)})},trigger:function(a,b){return this.each(function(c){for(var d,f=c;f&&!d;)r(F?J[f.minified]:f.minified2,function(f){f.n==a&&(d=d||f.h(b,c))}),f=f.parentNode})}},function(a,b){M.prototype[a]=b});t({request:function(a,b,c,d,f,l){var k,j=c,n=0,p=I();try{k=z.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),
null!=c&&(d=d||{},!m(c)&&!h(c)&&(j=g(t,c,function(a,b){return g(r,b,function(b){return encodeURIComponent(a)+(null!=b?"="+encodeURIComponent(b):"")})}).join("&")),/post/i.test(a)?!h(c)&&(!m(c)&&!d["Content-Type"])&&(d["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+j,j=null)),k.open(a,b,!0,f,l),t(d,function(a,b){k.setRequestHeader(a,b)}),k.onreadystatechange=function(){4==k.readyState&&!n++&&(200==k.status?p(!0,[k.responseText,k.responseXML]):p(!1,[k.status,k.statusText,k.responseText]))},
k.send(j)}catch(w){n||p(!1,[0,null,e(w)])}return p},toJSON:function b(c){return null==c?""+c:m(c=c.valueOf())?'"'+k(c,/[\\\"\x00-\x1f\x22\x5c]/g,aa)+'"':n(c)?"["+g(r,c,b).join()+"]":"object"==typeof c?"{"+g(t,c,function(c,f){return b(c)+":"+b(f)}).join()+"}":e(c)},parseJSON:z.JSON?z.JSON.parse:function(b){b=k(b,/[\x00\xad\u0600-\uffff]/g,aa);if(/^[[\],:{}\s]*$/.test(k(k(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g)))return eval("("+b+")")},ready:V,setCookie:function(b,c,d,f,g,
e){E.cookie=b+"="+(e?c:escape(c))+(d?"; expires="+("object"==typeof d?d:new Date((new Date).getTime()+864E5*d)).toUTCString():"")+"; path="+(f?escapeURI(f):"/")+(g?"; domain="+escape(g):"")},getCookie:function(b,c){var d,f=(d=RegExp("(^|;)\\s*"+b+"=([^;]*)").exec(E.cookie))&&d[2];return c?f:f&&unescape(f)},loop:function(b){var c={c:b,t:(new Date).getTime(),s:function(){G(T,c)}};2>T.push(c)&&function f(){r(T,function(b){b.c(Math.max(0,(new Date).getTime()-b.t),b.s)}).length&&ba(f)}();return c.s},off:function(b){r(b.M,
function(b){F?(b.e.detachEvent("on"+b.n,b.h),G(J[b.e.minified],b)):(b.e.removeEventListener(b.n,b.h,!1),G(b.e.minified2,b))});b.M=null}},function(b,c){y[b]=c});z.onload=B;E.addEventListener&&E.addEventListener("DOMContentLoaded",B,!1);z.unload=function(){r(J,Y)};return{$:y,$$:function(b){return D(b)[0]},EE:Z,M:M}});var _=(require("minifiedUtil")||require("minified"))._;
function parseSourceSections(j){function e(){return{id:"anon"+m++,src:[],desc:"",requires:{},requiredBy:{},syntax:[],example:[],params:[]}}j=j.split("\n");var m=100,h=[],n=e(),s=!1;_.each(j,function(j){if(s&&/^.*\*\/\s*$/.test(j))s=!1;else if(s){var l=j.replace(/^\s*(\*\s?)?/,"").replace(/\s*$/,""),g=l.match(/^\s*@([a-z]+)/);g?(g=g[1],l=_.trim(l.replace(/^\s*@[a-z]+\s*/,"")),"syntax"==g||"example"==g?n[g].push(l):"requires"==g?l.length&&_.each(l.split(/\s+/),function(g){n.requires[g]=1}):"param"==
g?n.params.push({name:l.replace(/\s.*$/,""),desc:l.replace(/^\S+\s+/,"")}):"return"==g?n.params.push({name:"@return",desc:l}):"function"==g?n.params[n.params.length-1].funcs.push(l):n[g]=""!=l?l:1):n.params.length?n.params[n.params.length-1].desc+="\n"+_.trim(l):n.example.length?n.example[n.example.length-1]+="\n"+l:n.desc+=l+"\n"}else/^\s*\/\*\$/.test(j)&&!/\*\/\s*$/.test(j)&&(s=!0,h.push(n),n=e());n.src.push(j)});h.push(n);return h}
function createSectionMap(j){var e={};_.each(j,function(j){e[j.id]=j});return e}function completeRequirements(j,e){var m=0;_.each(j,function(h){_.eachObj(h.requires,function(j){var s=e[j];if(!s)throw Error('Unknown id in requirement: "'+j+'"');_.eachObj(s.requires,function(e){h.requires[e]||(m++,h.requires[e]=1)})})});0<m?completeRequirements(j,e):_.each(j,function(h){_.eachObj(h.requires,function(j){e[j].requiredBy[h.id]=1})})}
function calculateDependencies(j,e){var m={};_.eachObj(e,function(h){e[h]&&(m[h]=1,_.eachObj(j[h].requires,function(e){m[e]=1}))});return m}function createDefaultConfigurationMap(j,e){var m={};_.each(j,function(h){if(h.configurable&&("default"==h.configurable||e))m[h.id]=1});return m}
function compile(j,e,m){var h="",n=calculateDependencies(e,m),s=[],t=!0;_.filter(j,function(e){return n[e.id]||!(e.configurable||e.dependency)}).each(function(e){_.each(e.src,function(g){if(/^\s*$/.test(g))t||(h+="\n"),t=!0;else{var e=g.match(/^(\s*)\/\/\s*@(cond|condblock)\s+(\!?)(\w*)\s*(.*)$/);if(e&&"cond"==e[2]&&!!n[e[4]]!=("!"==e[3]))h+=e[1]+e[5]+"\n";else{var j=!1,l=!0;e&&"condblock"==e[2]?s.push(!!n[e[4]]!=("!"==e[3])):/^\s*\/\/\s*@condend\b/.test(g)&&(j=!0);for(e=0;e<s.length;e++)if(!s[e]){l=
!1;break}l&&(h+=g+"\n");j&&s.pop()}t=!1}})});return h}function prepareSections(j){j=parseSourceSections(j);var e=createSectionMap(j);completeRequirements(j,e);var m=createDefaultConfigurationMap(j);return{sections:j,sectionMap:e,enabledSections:m}}var CONFIG_START="minified.js config start --",CONFIG_COMMENT="// - ",CONFIG_ALL="All sections.",CONFIG_ALL_EXCEPT="All sections except ",CONFIG_ONLY="Only sections ";
function serializeEnabledSections(j,e){var m=_.filter(j,function(g){return g.configurable}),h=_.filter(_.keys(e),function(g){return e[g]}),n,s=[];h.length==m.length?(n=CONFIG_COMMENT+CONFIG_ALL,s=[]):h.length/3>m.length/2?(n=CONFIG_COMMENT+CONFIG_ALL_EXCEPT,s=_.filter(m,function(g){return!e[g.id]}).collect(function(g){return g.id})):(n=CONFIG_COMMENT+CONFIG_ONLY,s=h);var t="// "+CONFIG_START+" use this comment to re-create configuration in the Builder\n"+n,l=50;_(s).sort().each(function(g){l<g.length?
(l=70,t+="\n// - "+g+", "):(t+=g+", ",l-=g.length+2)});return t=t.replace(/,\s*$/,".\n")}function fixConfig(j,e){_.eachObj(e,function(m){j[m]?_.copyObj(j[m].requires,e):delete e[m]});return e}
function deserializeEnabledSections(j,e,m){function h(g){return RegExp("^"+g.replace(/ /g,"\\s+"))}var n=h(CONFIG_START+".*"),s=h(CONFIG_ALL.replace(/\./,"\\.")),t=h(CONFIG_ALL_EXCEPT+"\\s*"),l=h(CONFIG_ONLY+"\\s*"),g=h(CONFIG_COMMENT);m=m.split("\n");for(var k=0;k<m.length;k++){var w=m[k];if(/^\s*\/\/s*/.test(w)&&(w=w.replace(/^\s*\/\/\s*/,""),n.test(w)&&k+1<m.length)){for(var w="",p=k+1;p<m.length;p++)if(g.test(m[p])){if(w+=m[p].replace(g,""),/\s*\.\s*$/.test(m[p]))break}else break;if(s.test(w))return createDefaultConfigurationMap(j,
!0);w=w.replace(/\s*\.\s*$/,"");if(t.test(w)){var r=createDefaultConfigurationMap(j,!0);_.each(w.replace(t,"").split(/\s*,\s*/),function(g){delete r[g]});return fixConfig(e,r)}if(l.test(w))return r={},_.each(w.replace(l,"").split(/\s*,\s*/),function(g){e[g]&&(r[g]=1)}),fixConfig(e,r)}}return null};var MINI=require("minified"),$=MINI.$,$$=MINI.$$,EE=MINI.EE,_=require("minifiedUtil")._,MAX_SIZE=4095,SRC="/download/minified-web-src.js",GROUPS="INTERNAL SELECTORS ELEMENT REQUEST JSON EVENTS COOKIE ANIMATION OPTIONS".split(" ");
function closureCompile(j,e,m){$.request("post","http://closure-compiler.appspot.com/compile",{js_code:j,output_format:"json",output_info:["compiled_code","statistics"],output_file_name:"minified-custom.js",compilation_level:e?"ADVANCED_OPTIMIZATIONS":"SIMPLE_OPTIMIZATIONS"}).then(function(e){m&&m($.parseJSON(e))},function(e,j,s){window.console&&console.log("error",e,j,s);m&&m(null)}).error(function(e){window.console&&console.log(e)})}
function setUpConfigurationUI(j){function e(){$(".modCheck").each(function(e){var g=0;$(".secCheck",e.parentNode.parentNode).each(function(e){e.checked&&g++});e.checked=0<g})}function m(e){var g=j.sectionMap[e.id.substr(4)];e.checked?_.eachObj(g.requires,function(e){$("#sec-"+e).set("checked",!0)}):_.eachObj(g.requiredBy,function(e){$("#sec-"+e).set("checked",!1)})}$("#compile").on("click",function(){var e={};$(".secCheck").each(function(g){g.checked&&(e[g.id.substr(4)]=1)});var g=compile(j.sections,
j.sectionMap,e),h=serializeEnabledSections(j.sections,e);if($$("#compressionAdvanced").checked)$$("#compile").disabled=!0,closureCompile(g,!0,function(e){$$("#compile").disabled=!1;$("#resultDiv").animate({$$slide:1});e?($("#gzipRow, #downloadRow").set({$display:"table-row"}),$$("#resultSrc").value=h+"\n"+e.compiledCode,$("#resultPlain").fill((e.statistics.compressedSize/1024).toFixed(2)+"kb ("+e.statistics.compressedSize+" bytes)"),$("#resultGzippedSize").fill((e.statistics.compressedGzipSize/1024).toFixed(2)+
"kb ("+e.statistics.compressedGzipSize+" bytes)"),$$("#resultLink").setAttribute("href","http://closure-compiler.appspot.com"+e.outputFilePath),$("#resultGzippedComment").set({$$fade:e.statistics.compressedGzipSize>MAX_SIZE?1:0})):alert("Google Closure Service not availble. Try again later.")});else try{$("#resultDiv").animate({$$slide:1}),$$("#resultSrc").value=h+g,$("#resultPlain").fill((g.length/1024).toFixed(2)+"kb"),$("#gzipRow, #downloadRow").set({$display:"none"})}catch(m){console.log(m)}return!1});
var h=$("#configSrcDiv").toggle({$$slide:0},{$$slide:1});$("#fromScratch").on("|click",h,[!1]);$("#loadConfig").on("|click",h,[!0]);$("#recreate").on("click",function(){try{var h=$$("#configSrc").value,g=deserializeEnabledSections(j.sections,j.sectionMap,h);g?(_.eachObj(j.sectionMap,function(e){var h=$$("#sec-"+e);h&&(h.checked=!!g[e])}),e()):alert("Can not find configuration in source.")}catch(k){console.log(k)}});$("#sectionCheckboxes").fill();for(var n=1;n<GROUPS.length;n++){var s;$("#sectionCheckboxes").add(s=
EE("div",{"@id":"divMod-"+n},EE("div",{className:"groupDescriptor"},[h=EE("input",{"@id":"mod-"+n,className:"modCheck","@type":"checkbox",checked:"checked"})(),EE("label",{"@for":"mod-"+n},GROUPS[n])]))());$(h).on("change",function(){var h=this.checked;$(".secCheck",this.parentNode.parentNode).each(function(e){e.checked=h;m(e)});e();return!0});var t;_.filter(j.sections,function(e){return e.group==GROUPS[n]&&e.configurable}).sort(function(e,g){var h=e.name||e.id,j=g.name||g.id;return h==j?0:h>j?1:
-1}).each(function(h){function g(e,g){var h=_.filter(_.keys(g),function(e){return!!g[e].name});if(!h.length)return null;var k=0,l=e;_.each(h,function(e){k++<Math.min(h.length,8)&&(1<k&&(l=k==Math.min(h.length,8)?l+" and ":l+", "),l=8==k&&8<h.length?l+"more":l+(j.sectionMap[e].name||j.sectionMap[e].id))});return l+="."}var k=g("Required by ",h.requiredBy),n=g("Requires ",h.requires);s.add(EE("div",{className:"sectionDescriptor"},[t=EE("input",{className:"secCheck","@type":"checkbox","@id":"sec-"+h.id,
checked:"default"==h.configurable?"checked":null})(),EE("label",{"@for":"sec-"+h.id},h.name||h.id),EE("div",{className:"requirements"},[k?[k,EE("br")]:null,n])]));$(t).on("change",function(){m(this);e();return!0})})}}
$(function(){var j=/MSIE\s([\d.]+)/i.exec(navigator.userAgent);j&&10>parseInt(j[1])?$("#builderDiv").fill("Sorry, the Builder tool requires at least Internet Explorer 10 (or, alternatively, Chrome or Firefox). Earlier versions lack CORS support required to use Google Closure's web service."):$.request("get",SRC,null).then(function(e){setUpConfigurationUI(prepareSections(e))}).error(function(e){window.console&&console.log(e)})});
