(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zarr-metadata-tab"],{"189a":function(t,e,r){"use strict";r.r(e);var n,a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.loading?r("div",{staticClass:"mt-2"}):t.errored?r("div",{staticClass:"mt-2"},[r("p",[t._v("An error has occurred while loading while loading Zarr metadata.")]),r("p",[t._v("Check the console.")])]):r("ZarrGroup",{attrs:{group:t.group,"group-name":t.root}})],1)},o=[],s=(r("d3b7"),r("8a79"),r("fb6a"),r("ac1f"),r("1276"),r("5319"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{key:"zarr-group",staticClass:"mt-2 zarr-group"},[r("b-list-group",[t._l(t.group.groups,(function(e,n){return r("b-list-group-item",{key:n},[r("div",{staticClass:"d-flex justify-content-between array-name"},[r("h2",[r("code",[t._v(t._s(n))])])]),r("ZarrGroup",{attrs:{group:e,"group-name":n}})],1)})),t._l(t.group.arrays,(function(e,n){return r("b-list-group-item",{key:n},[r("div",{staticClass:"d-flex justify-content-between array-name"},[r("h2",[r("code",[t._v(t._s(n))])]),r("small",[r("code",[t._v(t._s(e.dtype))])])]),r("div",{staticClass:"table-responsive array-dims"},[r("table",{staticClass:"table table-striped"},[r("thead",[r("tr",[e.attrs._ARRAY_DIMENSIONS?r("th",[t._v("Dimension")]):r("th",[t._v("Axis")]),r("th",[t._v("Shape")]),r("th",[t._v("Chunk Size")])])]),r("tbody",t._l(e.shape,(function(a,o){return r("tr",{key:n+"-axis-"+o},[r("td",[e.attrs._ARRAY_DIMENSIONS?r("code",[t._v(" "+t._s(e.attrs._ARRAY_DIMENSIONS[o])+" ")]):r("code",[t._v(t._s(o))])]),r("td",[r("code",[t._v(t._s(e.shape[o]))])]),r("td",[r("code",[t._v(t._s(e.chunks[o]))])])])})),0)])]),t.hasItems(e.attrs)?r("div",{staticClass:"mt-2 array-attrs"},[r("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:n+"-attrs",expression:"name + '-attrs'"}],attrs:{block:"",variant:"light"}},[r("b",[t._v("Attributes")])])],1),r("b-collapse",{attrs:{id:n+"-attrs"}},[r("b-card-body",[r("dl",[t._l(e.attrs,(function(e,a,o){return[r("dt",{key:n+"-key-"+o},[t._v(t._s(a))]),r("dd",{key:n+"-value-"+o},[t._v(t._s(e))])]}))],2)])],1)],1)],1):t._e()])}))],2),t.hasItems(t.group.attrs)?r("div",{staticClass:"mt-2 group-attrs"},[r("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.groupName+"-attrs",expression:"groupName + '-attrs'"}],attrs:{block:"",variant:"light"}},[r("b",[t._v("Group Attributes")])])],1),r("b-collapse",{attrs:{id:t.groupName+"-attrs"}},[r("b-card-body",[r("dl",[t._l(t.group.attrs,(function(e,n,a){return[r("dt",{key:t.groupName+"-key-"+a},[t._v(t._s(n))]),r("dd",{key:t.groupName+"-value-"+a},[t._v(t._s(e))])]}))],2)])],1)],1)],1):t._e()],1)}),i=[],c=r("23db"),u=r.n(c),l=r("a026"),h=r("c637"),f="show",p=r("e863"),d=r("0056"),b=r("a723"),v=r("9b76"),g=r("906c"),y=r("6b77"),j=r("58f2"),O=r("d82f"),m=r("cf75"),w=r("90ef"),_=r("602d"),k=r("8c18"),E=r("b42e"),S=function(t){Object(g["y"])(t,"height",0),Object(g["v"])((function(){Object(g["s"])(t),Object(g["y"])(t,"height","".concat(t.scrollHeight,"px"))}))},z=function(t){Object(g["u"])(t,"height")},A=function(t){Object(g["y"])(t,"height","auto"),Object(g["y"])(t,"display","block"),Object(g["y"])(t,"height","".concat(Object(g["h"])(t).height,"px")),Object(g["s"])(t),Object(g["y"])(t,"height",0)},C=function(t){Object(g["u"])(t,"height")},x={css:!0,enterClass:"",enterActiveClass:"collapsing",enterToClass:"collapse show",leaveClass:"collapse show",leaveActiveClass:"collapsing",leaveToClass:"collapse"},R={enter:S,afterEnter:z,leave:A,afterLeave:C},N={appear:Object(m["c"])(b["f"],!1)},$=l["a"].extend({name:h["s"],functional:!0,props:N,render:function(t,e){var r=e.props,n=e.data,a=e.children;return t("transition",Object(E["a"])(n,{props:x,on:R},{props:r}),a)}});function I(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?I(Object(r),!0).forEach((function(e){P(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function P(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var M=Object(y["b"])(h["r"],"toggle"),T=Object(y["b"])(h["r"],"request-state"),W=Object(y["c"])(h["r"],"accordion"),q=Object(y["c"])(h["r"],"state"),B=Object(y["c"])(h["r"],"sync-state"),G=Object(j["a"])("visible",{type:b["f"],defaultValue:!1}),L=G.mixin,Z=G.props,H=G.prop,F=G.event,V=Object(m["d"])(Object(O["l"])(D(D(D({},w["b"]),Z),{},{accordion:Object(m["c"])(b["q"]),appear:Object(m["c"])(b["f"],!1),isNav:Object(m["c"])(b["f"],!1),tag:Object(m["c"])(b["q"],"div")})),h["r"]),Y=l["a"].extend({name:h["r"],mixins:[w["a"],L,k["a"],_["a"]],props:V,data:function(){return{show:this[H],transitioning:!1}},computed:{classObject:function(){var t=this.transitioning;return{"navbar-collapse":this.isNav,collapse:!t,show:this.show&&!t}},slotScope:function(){var t=this;return{visible:this.show,close:function(){t.show=!1}}}},watch:(n={},P(n,H,(function(t){t!==this.show&&(this.show=t)})),P(n,"show",(function(t,e){t!==e&&this.emitState()})),n),created:function(){this.show=this[H]},mounted:function(){var t=this;this.show=this[H],this.listenOnRoot(M,this.handleToggleEvt),this.listenOnRoot(W,this.handleAccordionEvt),this.isNav&&(this.setWindowEvents(!0),this.handleResize()),this.$nextTick((function(){t.emitState()})),this.listenOnRoot(T,(function(e){e===t.safeId()&&t.$nextTick(t.emitSync)}))},updated:function(){this.emitSync()},deactivated:function(){this.isNav&&this.setWindowEvents(!1)},activated:function(){this.isNav&&this.setWindowEvents(!0),this.emitSync()},beforeDestroy:function(){this.show=!1,this.isNav&&p["g"]&&this.setWindowEvents(!1)},methods:{setWindowEvents:function(t){Object(y["a"])(t,window,"resize",this.handleResize,d["D"]),Object(y["a"])(t,window,"orientationchange",this.handleResize,d["D"])},toggle:function(){this.show=!this.show},onEnter:function(){this.transitioning=!0,this.$emit(d["A"])},onAfterEnter:function(){this.transitioning=!1,this.$emit(d["B"])},onLeave:function(){this.transitioning=!0,this.$emit(d["l"])},onAfterLeave:function(){this.transitioning=!1,this.$emit(d["k"])},emitState:function(){var t=this.show,e=this.accordion,r=this.safeId();this.$emit(F,t),this.emitOnRoot(q,r,t),e&&t&&this.emitOnRoot(W,r,e)},emitSync:function(){this.emitOnRoot(B,this.safeId(),this.show)},checkDisplayBlock:function(){var t=this.$el,e=Object(g["l"])(t,f);Object(g["t"])(t,f);var r="block"===Object(g["j"])(t).display;return e&&Object(g["b"])(t,f),r},clickHandler:function(t){var e=t.target;this.isNav&&e&&"block"===Object(g["j"])(this.$el).display&&(!Object(g["r"])(e,".nav-link,.dropdown-item")&&!Object(g["e"])(".nav-link,.dropdown-item",e)||this.checkDisplayBlock()||(this.show=!1))},handleToggleEvt:function(t){t===this.safeId()&&this.toggle()},handleAccordionEvt:function(t,e){var r=this.accordion,n=this.show;if(r&&r===e){var a=t===this.safeId();(a&&!n||!a&&n)&&this.toggle()}},handleResize:function(){this.show="block"===Object(g["j"])(this.$el).display}},render:function(t){var e=this.appear,r=t(this.tag,{class:this.classObject,directives:[{name:"show",value:this.show}],attrs:{id:this.safeId()},on:{click:this.clickHandler}},this.normalizeSlot(v["c"],this.slotScope));return t($,{props:{appear:e},on:{enter:this.onEnter,afterEnter:this.onAfterEnter,leave:this.onLeave,afterLeave:this.onAfterLeave}},[r])}}),J=r("7b1e");function U(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var K=Object(m["d"])({flush:Object(m["c"])(b["f"],!1),horizontal:Object(m["c"])(b["h"],!1),tag:Object(m["c"])(b["q"],"div")},h["y"]),Q=l["a"].extend({name:h["y"],functional:!0,props:K,render:function(t,e){var r=e.props,n=e.data,a=e.children,o=""===r.horizontal||r.horizontal;o=!r.flush&&o;var s={staticClass:"list-group",class:U({"list-group-flush":r.flush,"list-group-horizontal":!0===o},"list-group-horizontal-".concat(o),Object(J["m"])(o))};return t(r.tag,Object(E["a"])(n,s),a)}}),X={name:"ZarrGroup",components:{"b-collapse":Y,"b-list-group":Q},props:["group","groupName"],methods:{hasItems:function(t){return!u()(t)}}},tt=X,et=r("2877"),rt=Object(et["a"])(tt,s,i,!1,null,null,null),nt=rt.exports,at=r("a18f"),ot=r.n(at),st={name:"ZarrMetadataTab",components:{ZarrGroup:nt},props:["zarrMetadataUrl"],data:function(){return{loading:!0,errored:!1,error:null,group:{}}},mounted:function(){var t=this;ot()(this.zarrMetadataUrl).then((function(t){return t.json()})).then((function(e){return t.group=t.parseMeta(e.metadata)})).catch((function(e){console.error(e),t.errored=!0})).finally((function(){return t.loading=!1}))},methods:{parseMeta:function(t){var e={groups:{},arrays:{},attrs:t[".zattrs"]||{}},r=function(r){r.endsWith(".zattrs")||r.split("/").slice(0,-1).reduce((function(e,n,a,o){return a==o.length-1?r.endsWith(".zgroup")?e.groups[n]={groups:{},arrays:{},attrs:t[r.replace(".zgroup",".zattrs")]||{}}:e.arrays[n]={dtype:t[r].dtype,shape:t[r].shape,chunks:t[r].chunks,attrs:t[r.replace(".zarray",".zattrs")]||{}}:e.groups[n]}),e)};for(var n in t)r(n);return e}}},it=st,ct=Object(et["a"])(it,a,o,!1,null,null,null);e["default"]=ct.exports},"23db":function(t,e,r){(function(t,r){var n=9007199254740991,a="[object Arguments]",o="[object Function]",s="[object GeneratorFunction]",i="[object Map]",c="[object Object]",u="[object Promise]",l="[object Set]",h="[object WeakMap]",f="[object DataView]",p=/[\\^$.*+?()[\]{}|]/g,d=/^\[object .+?Constructor\]$/,b="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,g=b||v||Function("return this")(),y=e&&!e.nodeType&&e,j=y&&"object"==typeof r&&r&&!r.nodeType&&r,O=j&&j.exports===y;function m(t,e){return null==t?void 0:t[e]}function w(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(r){}return e}function _(t,e){return function(r){return t(e(r))}}var k=Function.prototype,E=Object.prototype,S=g["__core-js_shared__"],z=function(){var t=/[^.]+$/.exec(S&&S.keys&&S.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),A=k.toString,C=E.hasOwnProperty,x=E.toString,R=RegExp("^"+A.call(C).replace(p,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),N=O?g.Buffer:void 0,$=E.propertyIsEnumerable,I=N?N.isBuffer:void 0,D=_(Object.keys,Object),P=J(g,"DataView"),M=J(g,"Map"),T=J(g,"Promise"),W=J(g,"Set"),q=J(g,"WeakMap"),B=!$.call({valueOf:1},"valueOf"),G=X(P),L=X(M),Z=X(T),H=X(W),F=X(q);function V(t){return x.call(t)}function Y(t){if(!ct(t)||K(t))return!1;var e=st(t)||w(t)?R:d;return e.test(X(t))}function J(t,e){var r=m(t,e);return Y(r)?r:void 0}var U=V;function K(t){return!!z&&z in t}function Q(t){var e=t&&t.constructor,r="function"==typeof e&&e.prototype||E;return t===r}function X(t){if(null!=t){try{return A.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function tt(t){return nt(t)&&C.call(t,"callee")&&(!$.call(t,"callee")||x.call(t)==a)}(P&&U(new P(new ArrayBuffer(1)))!=f||M&&U(new M)!=i||T&&U(T.resolve())!=u||W&&U(new W)!=l||q&&U(new q)!=h)&&(U=function(t){var e=x.call(t),r=e==c?t.constructor:void 0,n=r?X(r):void 0;if(n)switch(n){case G:return f;case L:return i;case Z:return u;case H:return l;case F:return h}return e});var et=Array.isArray;function rt(t){return null!=t&&it(t.length)&&!st(t)}function nt(t){return ut(t)&&rt(t)}var at=I||lt;function ot(t){if(rt(t)&&(et(t)||"string"==typeof t||"function"==typeof t.splice||at(t)||tt(t)))return!t.length;var e=U(t);if(e==i||e==l)return!t.size;if(B||Q(t))return!D(t).length;for(var r in t)if(C.call(t,r))return!1;return!0}function st(t){var e=ct(t)?x.call(t):"";return e==o||e==s}function it(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}function ct(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function ut(t){return!!t&&"object"==typeof t}function lt(){return!1}r.exports=ot}).call(this,r("c8ba"),r("62e4")(t))},a18f:function(t,e,r){"use strict";var n=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof a)return a;throw new Error("unable to locate global object")},a=n();t.exports=e=a.fetch,a.fetch&&(e.default=a.fetch.bind(a)),e.Headers=a.Headers,e.Request=a.Request,e.Response=a.Response}}]);
//# sourceMappingURL=zarr-metadata-tab.b0cc8596.js.map