(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45539e86"],{1371:function(t,e,s){"use strict";s("1e3c")},"1e3c":function(t,e,s){},"3b26":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order-more-page"},[t.$route.meta.hideHeader?t._e():s("Header"),s("newOrder",{attrs:{reverse:t.list}})],1)},a=[],i=s("e725"),n=s("ea6b"),o={data:function(){return{list:[]}},components:{Header:i["a"],newOrder:n["default"]},beforeRouteEnter:function(t,e,s){s((function(e){"orderMore"===t.name&&(e.list=e.$util.strJSONParse(t.query.list,[]))}))},activated:function(){document.documentElement.scrollTop=0},methods:{}},c=o,d=(s("1371"),s("2877")),l=Object(d["a"])(c,r,a,!1,null,null,null);e["default"]=l.exports},"66de":function(t,e,s){},ea6b:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"new-order-parts"},t._l(t.reverse||[],(function(e,r){return s("div",{key:r,staticClass:"box",on:{click:function(s){return t.goOrder(e)}}},[s("div",{staticClass:"header-img"},[s("van-image",{staticClass:"order-img",attrs:{height:"3.6rem",width:"100%",fit:"cover","lazy-load":"",src:t._f("imageToWebp")(t._f("imageToHttps")(e.imageUrl),t.$webpSurpport)}}),s("div",{staticClass:"count-down-tag"},[s("van-icon",{attrs:{name:"clock-o",color:"#fff"}}),s("van-count-down",{staticClass:"time",attrs:{time:e.reserveEndTime-Date.parse(new Date),format:"DD天HH:mm:ss"}})],1)],1),s("div",{staticClass:"order-details"},[s("p",{staticClass:"title"},[t._v(t._s(e.productName))]),s("p",{staticClass:"detail"},[t._v(t._s(e.productTitle))]),s("div",{staticClass:"detail-bottom"},[s("div",{staticClass:"de-l"},[s("div",{staticClass:"price"},[s("p",{staticClass:"btm-title"},[t._v("预约价：")]),s("p",{staticClass:"symbol"},[t._v("￥"+t._s(t._f("formatPrice")(e.price)))])]),s("div",{staticClass:"ordered"},[s("p",{staticClass:"btm-title"},[t._v("已预约：")]),s("p",{staticClass:"men"},[t._v(t._s(e.reserveNum)+"人")])])]),s("div",{staticClass:"order-btn"},[t._v("立即预约")])])])])})),0)},a=[],i={props:{reverse:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goOrder:function(t){this.$util.isSgRn()?window.postMessage(JSON.stringify({type:"goProduct",data:{id:t.productId}})):this.$router.push("/goodsDetail?productId=".concat(t.productId))}}},n=i,o=(s("f476"),s("2877")),c=Object(o["a"])(n,r,a,!1,null,null,null);e["default"]=c.exports},f476:function(t,e,s){"use strict";s("66de")}}]);
//# sourceMappingURL=chunk-45539e86.4328af9a.js.map