(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79e35fe8"],{6224:function(t,i,s){"use strict";s.r(i);var n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("Header",[s("div",{staticClass:"title-right",attrs:{slot:"right",title:"订单支付"},on:{click:function(i){return t.goOrderList(0)}},slot:"right"},[t._v("订单中心")])]),s("div",{staticClass:"top-title"},[t._v(" 为了保证您的资产安全，请复制以下链接到电脑端连接U盾支付 ")]),s("div",{staticClass:"content"},[s("p",{staticClass:"content-text"},[t._v(" "+t._s(t.payUrl)),s("span",{staticClass:"symbol-text"},[t._v("***")])]),t.showCopy?s("div",{staticClass:"button",on:{click:t.copy}},[t._v("复制链接")]):s("div",{staticClass:"botton-check",on:{click:function(i){return t.goOrderList(0)}}},[t._v("查询支付状态")])]),t._m(0)],1)},e=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"bottom-tip"},[t._v(" 说明："),s("br"),s("span",{staticStyle:{visibility:"hidden"}},[t._v("说明")]),t._v("1、支付链接生成后10分钟内有效，若支付链接过期或丢失，请到订单列表对该订单重新发起支付；"),s("br"),s("span",{staticStyle:{visibility:"hidden"}},[t._v("说明")]),t._v("2、支付成功后，若订单支付状态未更新，可能因网络原因导致的支付结果延迟，请五分钟后重新刷新列表查询订单列表支付状态，若仍异常请联系客服处理。"),s("br"),s("span",{staticStyle:{visibility:"hidden"}},[t._v("说明")]),t._v("3、目前支持银行：工商银行、中国银行。 ")])}],o=s("e725"),a=s("b311"),r=s.n(a),c={name:"b2b-pay",components:{Header:o["a"]},data:function(){return{showCopy:!0,payUrl:"",originUrl:"",showDialog:!0}},mounted:function(){var t=this.$route.params.payUrl;this.originUrl=t,this.payUrl=t.substring(0,26)},methods:{goOrderList:function(t){this.$router.push({path:"/orderList?tagChecked=".concat(t)})},copy:function(){var t=this,i=this.originUrl,s=new r.a(".button",{text:function(t){return i}});s.on("success",(function(){t.$toast("复制链接成功！");var i=setTimeout((function(){clearTimeout(i),t.showCopy=!1}),12e4)})),s.on("error",(function(){t.$toast("复制失败")}))}}},l=c,u=(s("bde8"),s("2877")),v=Object(u["a"])(l,n,e,!1,null,"5af00424",null);i["default"]=v.exports},6815:function(t,i,s){},bde8:function(t,i,s){"use strict";s("6815")}}]);
//# sourceMappingURL=chunk-79e35fe8.2370f0b9.js.map