!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="lVK7")}({"VU/8":function(e,t){e.exports=function(e,t,n,o,r,i){var s,u=e=e||{},f=typeof e.default;"object"!==f&&"function"!==f||(s=e,u=e.default);var c,l="function"==typeof u?u.options:u;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=c):o&&(c=o),c){var a=l.functional,d=a?l.render:l.beforeCreate;a?(l._injectStyles=c,l.render=function(e,t){return c.call(t),d(e,t)}):l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:s,exports:u,options:l}}},XUcg:function(e,t){},lVK7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v(this._s(this.msg))]),this._v(" "),t("p",[this._v("基于 webpack 打造的 Vue 组件开发工具。")])])},staticRenderFns:[]};var r=n("VU/8")({name:"Helloworld",data:function(){return{msg:"Vue component devtool"}}},o,!1,function(e){n("XUcg")},null,null).exports;r.install=function(e){};t.default=r}}).default});