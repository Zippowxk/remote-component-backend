(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a7cb318"],{"61c8":function(t,e,n){"use strict";n("b751")},"92f9":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"key"},[n("ul",t._l(t.keywordsList,(function(e,i){return n("li",{key:i,on:{click:function(n){return t.doKeySearch(e)}}},[n("div",{staticClass:"left",domProps:{innerHTML:t._s(t.formatHtml(e.key))}}),e.tag.length?n("div",{staticClass:"right"},t._l(e.tag,(function(e,i){return n("div",{key:i,staticClass:"tag-item",on:{click:function(n){return n.stopPropagation(),t.doKeySearch(e)}}},[t._v(t._s(e.tsh))])})),0):t._e()])})),0)])},s=[],o={name:"key-search",props:["keyword","keywordsList"],data:function(){return{}},methods:{doKeySearch:function(t){t.key?this.$emit("doSearch",{keyword:t.key,type:"key"}):"1"===t.linkType?this.$router.push({path:"/goodsDetail",query:{productId:t.link.split("=")[1]}}):"4"===t.linkType?this.$router.push("/bannerSubject?id=".concat(t.link.split("&")[1].split("=")[1])):"5"===t.linkType?this.$router.push("/bannerCustom?id=".concat(t.link.split("/").slice(-1))):this.$emit("doSearch",{keyword:t.tse,type:"key"})},formatHtml:function(t){return t.split(this.keyword).join('<span style="color:#999">'.concat(this.keyword,"</span>"))}}},r=o,c=(n("61c8"),n("2877")),a=Object(c["a"])(r,i,s,!1,null,"063bdf1e",null);e["default"]=a.exports},b751:function(t,e,n){}}]);
//# sourceMappingURL=chunk-2a7cb318.55ee7672.js.map