(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02260549"],{7937:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.pageCount>0?e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"swiper-content"},[e("van-swipe",{staticClass:"swiper",attrs:{loop:!1},on:{change:t.onChange},scopedSlots:t._u([{key:"indicator",fn:function(){return[t.dataCount>6?e("div",{staticClass:"custom-indicator"},[e("span",{staticClass:"index-btn",style:{width:.64/t.pageCount+"rem","margin-left":t.indicatorLeft}})]):e("span")]},proxy:!0}],null,!1,1929860286)},t._l(t.pageCount,(function(a){return e("van-swipe-item",{key:"page"+a},[t.pageData[a-1]?e("div",{staticClass:"page",class:{"harf-page":t.dataCount<=3}},t._l(t.pageData[a-1],(function(a,n){return e("div",{key:a.sku,staticClass:"item",class:{"lr-margin":1===n||4===n},on:{click:function(e){return t.toDetail(a)}}},[e("div",{staticClass:"img-area"},[e("img",{attrs:{src:a.indexImageUrl}})]),e("div",{staticClass:"title-area"},[t._v(" "+t._s(a.productFullName)+" ")]),e("div",{staticClass:"price-area"},[e("span",{staticClass:"yuan"},[t._v("¥")]),e("span",{staticClass:"int"},[t._v(t._s(t._f("formatPriceInt")(t._f("formatPrice")(a.finalPrice))))]),e("span",{staticClass:"float"},[t._v(t._s(t._f("formatPriceFloat")(t._f("formatPrice")(a.finalPrice))))])])])})),0):t._e()])})),1)],1)]):t._e()},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("span",{staticClass:"title"},[t._v("商品推荐")])])}],s=e("85e4"),r={props:{productId:{type:Number}},data:function(){return{pageCount:0,dataCount:0,pageSize:6,pageData:[],currentIndex:0}},computed:{indicatorLeft:function(){var t=.64/this.pageCount;return this.currentIndex*t+"rem"},location:function(){return this.$store.getters["getlocationInfo"]}},filters:{formatPriceInt:function(t){return t.split(".")[0]+"."},formatPriceFloat:function(t){return t.split(".")[1]}},created:function(){this.getData(this.currentIndex+1)},methods:{onChange:function(t){this.currentIndex=t,this.pageData[t]&&!this.pageData[t+1]&&t<this.pageCount-1?this.getData(this.currentIndex+2):this.pageData[t]||this.getData(this.currentIndex+1)},getData:function(t){var a,e=this,n={productId:this.productId,channel:"1",pageSize:this.pageSize,pageNo:t,street:(null===(a=this.location)||void 0===a?void 0:a.townshipId)||"",shareId:this.$store.state.shareId||""};Object(s["bb"])(n).then((function(a){a.data.success&&(e.dataCount=a.data.totalCount,e.pageCount=Math.ceil(e.dataCount/6),e.$set(e.pageData,t-1,a.data.data),!e.pageData[t]&&e.getLocalDataCount()<e.dataCount&&t===e.currentIndex+1&&e.getData(t+1))}))},getLocalDataCount:function(){var t=0;return this.pageData.forEach((function(a){t+=a.length})),t},toDetail:function(t){this.$router.push({path:"goodsDetail",query:{productId:t.productId}})}}},o=r,c=(e("c935"),e("2877")),u=Object(c["a"])(o,n,i,!1,null,"67dff8d1",null);a["default"]=u.exports},c935:function(t,a,e){"use strict";e("d530")},d530:function(t,a,e){}}]);
//# sourceMappingURL=chunk-02260549.154d4da0.js.map