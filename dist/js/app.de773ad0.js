(function(e){function t(t){for(var r,u,i=t[0],l=t[1],s=t[2],f=0,p=[];f<i.length;f++)u=i[f],o[u]&&p.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=n("2877"),i={},l=Object(u["a"])(i,o,a,!1,null,null,null),s=l.exports,c=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Navbar"),e._v("\n  Hello world\n")],1)},p=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar"},[n("nav",{staticClass:"indigo darken-2"},[n("div",{staticClass:"nav-wrapper"},[n("router-link",{attrs:{to:{name:"home"}}},[n("span",{staticClass:"brand-logo center"},[e._v("Profile")])])],1)])])},v=[],b=n("4d5c"),h=n.n(b),m={name:"Navbar",mounted:function(){var e=document.querySelector(".sidenav");this.sideNav=h.a.Sidenav.init(e)}},y=m,w=Object(u["a"])(y,d,v,!1,null,null,null),g=w.exports,_={name:"home",components:{Navbar:g}},O=_,j=Object(u["a"])(O,f,p,!1,null,null,null),x=j.exports;r["a"].use(c["a"]);var S=new c["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:x}]}),P=n("2f62");r["a"].use(P["a"]);var k=new P["a"].Store({state:{},mutations:{},actions:{}});n("8266");r["a"].config.productionTip=!1,new r["a"]({router:S,store:k,render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=app.de773ad0.js.map