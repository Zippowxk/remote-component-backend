(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14d97454"],{"22d3":function(t,e,o){},"60fd":function(t,e,o){"use strict";o("22d3")},"65cb":function(t,e,o){"use strict";o.d(e,"d",(function(){return s})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return c})),o.d(e,"b",(function(){return u})),o.d(e,"f",(function(){return d})),o.d(e,"e",(function(){return l})),o.d(e,"g",(function(){return f}));var n=o("1c03"),r=o("bbc2"),a=o("f121"),s=function(t){return n["a"].request({url:r["a"].getProductsByCouponId,method:"get",params:t})},i=function(t){return n["a"].get(r["a"].getCartByCoupon,{params:t})},c=function(t){return n["a"].post(r["a"].addCartByCoupon,t)},u=function(t){var e=t.skus?r["a"].deleteBatch:r["a"].deleteCart;return n["a"].get(e,{params:t})},d=function(t){return n["a"].post(r["a"].updateCouponByNumber,t)},l=function(t){var e="".concat(r["a"].productDetailData).concat(t.productId,".json");return n["a"].get(e,{params:t,baseURL:a["a"].DHOST})},f=function(t){return n["a"].get("".concat(r["a"].getProductBasicInfo).concat(t.productId,".json"),{params:t,baseURL:a["a"].DHOST})}},"714b":function(t,e,o){"use strict";o("85ae")},"85ae":function(t,e,o){},"87e5":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ecard-list"},[!t.list.length&&t.finished?o("div",{staticClass:"list-empty"},[o("img",{attrs:{src:"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/order/card-empty.png",alt:""}}),o("p",[t._v("暂无适用商品")])]):t._e(),t.list.length?o("div",[o("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.fetchData},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e){return o("div",{key:e.id},[o("canUseProdList",{attrs:{canAdd:!t.readonly,prodInfo:e},on:{addCart:t.addCart}})],1)})),0)],1):t._e(),t.readonly?t._e():o("div",{staticClass:"ecard-fixed"},[o("div",{staticClass:"fixed-price"},[o("p",[t._v("总价："),o("strong",[t._v("¥"+t._s(t._f("formatPrice")(t.total)))])]),t.hasCartProducts.length?o("p",{class:{active:t.popshow},on:{click:t.toShowPop}},[t._v("已选"+t._s(t.hasCartProducts.length)+"件商品 "),o("span")]):t._e()]),o("div",[o("a",{attrs:{href:"javascript:;"},on:{click:t.goPage}},[t._v("去购物车")])])]),o("van-popup",{style:{maxHeight:"10rem"},attrs:{round:"","z-index":"200",closeable:"",position:"bottom"},model:{value:t.popshow,callback:function(e){t.popshow=e},expression:"popshow"}},[o("div",{staticClass:"cart-list"},t._l(t.hasCartProducts,(function(e){return o("div",{key:e.sku+e.skku,staticClass:"cart-item"},[o("div",{staticClass:"cart-img",on:{touchstart:function(e){return e.preventDefault(),t.touchstartFn.apply(null,arguments)},touchend:function(o){return o.preventDefault(),t.touchendFn(e)}}},[o("img",{attrs:{src:e.defaultImageUrl}})]),o("div",{staticClass:"cart-body",on:{touchstart:function(e){return e.preventDefault(),t.touchstartFn.apply(null,arguments)},touchend:function(o){return o.preventDefault(),t.touchendFn(e)}}},[o("div",[o("h5",[t._v(t._s(e.productFullName))]),o("p",[t._v(t._s(e.attrValueNames))]),o("h6",[o("small",[t._v("¥")]),t._v(t._s(e.defaultPrice))])])]),o("div",{staticClass:"cart-step"},[o("p",[t._v("最多可购买999件")]),o("van-stepper",{attrs:{integer:"",min:"1",max:e.limitNum||999},on:{change:function(o){return t.stepInput(e)}},model:{value:e.number,callback:function(o){t.$set(e,"number",o)},expression:"product.number"}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:e.delmask,expression:"product.delmask"}],staticClass:"del-mask",on:{click:function(o){return o.stopPropagation(),t.cancelDel(e)}}},[o("span",{on:{touchstart:function(o){return o.stopPropagation(),t.delCart(e)}}})])])})),0)]),o("van-popup",{attrs:{round:"","z-index":"500",position:"bottom"},model:{value:t.showInfoFlag,callback:function(e){t.showInfoFlag=e},expression:"showInfoFlag"}},[t.sgAttribute&&t.sgStoreAttribute?o("attr-modal",{attrs:{sgAttribute:t.sgAttribute,sgStockInfo:t.sgStockInfo,sgStoreAttribute:t.sgStoreAttribute,stepperNum:t.stepperNum,products:t.product,btnType:0,hasSubProduct:!0,activityInfo:t.activityInfo,baseInfo:t.baseInfo,priceInfo:t.priceInfo,storeInfo:t.storeInfo,originAttrs:t.originAttrs,attrLength:t.attrLen,ioucInfo:t.ioucInfo,limitSkku:t.product.skku},on:{attrConfirm:t.doSure,fnShowInfo:t.fnShowInfo,fnSelectAttribute:t.fnSelectAttribute,attrNameChange:t.attrNameChange,changeAttribute:t.changeCatetory}}):t._e()],1)],1)},r=[],a=o("a34a"),s=o.n(a),i=o("bbc2"),c=o("fa7d"),u=o("2f62"),d=o("65cb"),l=o("85e4"),f=o("5967"),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item-flex",on:{click:t.goPage}},[o("div",{staticClass:"item-img"},[o("img",{attrs:{src:t.prodInfo.defaultImageUrl,alt:""}})]),o("div",{staticClass:"item-body"},[o("div",{staticClass:"item-title"},[o("h4",[t._v(t._s(t.prodInfo.productFullName))]),o("p",[t._v(t._s(t.prodInfo.productTitle))]),t.prodInfo.sellPoint?o("p",t._l(t.prodInfo.sellPoint,(function(e,n){return o("span",{key:e},[n>0?o("small",[t._v("|")]):t._e(),t._v(t._s(e))])})),0):t._e(),o("div",{staticClass:"item-tags"},t._l(t.prodInfo.tags,(function(e){return o("div",{key:e.id},[1==e.tagType?o("img",{attrs:{src:e.tagUrl}}):1==e.tagFontStyle?o("van-tag",{attrs:{color:e.tagFontColour}},[t._v(t._s(e.tagName))]):o("van-tag",{attrs:{plain:!0,color:e.tagFontColour}},[t._v(t._s(e.tagName))])],1)})),0)]),o("div",{staticClass:"item-footer"},[o("div",{staticClass:"item-price"},[o("strong",[o("small",[t._v("￥")]),t._v(t._s(t._f("formatPriceInt")(t.prodInfo.defaultPrice))),o("small",[t._v(t._s(t._f("formatPriceFloat")(t.prodInfo.defaultPrice)))])]),o("p",[t._v(t._s(t.prodInfo.comments)+"条评价 "+t._s(t.prodInfo.goodRate)+"好评")])]),t.canAdd?o("div",{on:{click:function(e){return e.stopPropagation(),t.addCart.apply(null,arguments)}}},[o("img",{staticClass:"svg-icon",attrs:{src:"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/mine/ecard/cart_blue.png"}})]):t._e()])])])},h=[],g={name:"canUseProdList",props:{canAdd:{type:Boolean,default:function(){return!0}},prodInfo:{type:Object,default:function(){}}},methods:{addCart:function(){this.$util.strJSONParse(this.prodInfo.hasStock,!1)?this.$emit("addCart",this.prodInfo):this.$toast("当前商品无货")},goPage:function(){this.$router.push({path:"/goodsDetail?productId=".concat(this.prodInfo.productId)})}}},m=g,v=(o("714b"),o("2877")),I=Object(v["a"])(m,p,h,!1,null,"15a60d22",null),b=I.exports,y=o("f121");function k(t,e,o,n,r,a,s){try{var i=t[a](s),c=i.value}catch(u){return void o(u)}i.done?e(c):Promise.resolve(c).then(n,r)}function C(t){return function(){var e=this,o=arguments;return new Promise((function(n,r){var a=t.apply(e,o);function s(t){k(a,n,r,s,i,"next",t)}function i(t){k(a,n,r,s,i,"throw",t)}s(void 0)}))}}function P(t){return A(t)||_(t)||S(t)||w()}function w(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function S(t,e){if(t){if("string"===typeof t)return O(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?O(t,e):void 0}}function _(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function A(t){if(Array.isArray(t))return O(t)}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function N(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function j(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?N(Object(o),!0).forEach((function(e){x(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):N(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function x(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var $={components:{attrModal:f["a"],canUseProdList:b},data:function(){return{cardNo:"",readonly:!1,longtimeLog:"",curPage:1,pageSize:10,loading:!1,finished:!1,list:[],popshow:!1,hasCartProducts:[],provinceId:"",cityId:"",districtId:"",streetId:"",curCategoryProductInfo:{},categoryProdutconfig:{},curSelectCate:{},skku:"",stepperNum:1,showInfoFlag:!1,sgAttribute:null,sgStoreAttribute:null,activityInfo:null,baseInfo:null,priceInfo:null,sgStockInfo:null,storeInfo:null,originAttrs:null,product:{},attrLen:0,attrValueNames:"",ioucInfo:{feeInfo:"查看更多"}}},computed:j(j({},Object(u["d"])(["mId","accessToken","ucId"])),{},{total:function(){var t=0;return this.hasCartProducts.forEach((function(e){t+=e.defaultPrice*e.number})),t},location:function(){return this.$store.getters["getlocationInfo"]}}),activated:function(){},mounted:function(){var t=this;this.cardNo=this.$route.params.cardNo,this.$store.dispatch("doLocation").then((function(e){t.$store.dispatch("doLocationInfo",e).then((function(o){var n=400===e?t.$store.state:o;t.updateLocation(n)}))["catch"]((function(){var e=t.$store.state;t.updateLocation(e)}))}))["catch"]((function(){var e=t.$store.state;t.updateLocation(e)}))},methods:{updateLocation:function(t){this.provinceId=t.provinceId,this.cityId=t.cityId,this.districtId=t.districtId,this.streetId=t.townshipId,this.fetchData()},fetchData:function(){var t=this;this.loading=!0;var e={smartEcardBaseInfoId:this.cardNo,supportWa:!1,pageNo:this.curPage,pageSize:this.pageSize};this.$http.get(i["a"].getProductListBySmartEcard,{params:e,baseURL:y["a"].SHOST}).then((function(e){var o=e.data,n=o;n.success&&n.data&&n.data.productList&&n.data.productList.length?(t.curPage+=1,t.loading=!1,t.list=[].concat(P(t.list),P(n.data.productList)),t.finished=n.data.productList.length<t.pageSize):(t.loading=!1,t.finished=!0)}))["catch"]((function(){t.loading=!1,t.finished=!0,t.$toast("请求异常")}))},addCart:function(t){var e=this;return C(s.a.mark((function o(){return s.a.wrap((function(o){while(1)switch(o.prev=o.next){case 0:console.log("addCart",t),e.curCategoryProductInfo=j({},t),Object(d["e"])({productId:t.productId,channel:"",openId:"",storeId:t.visitStore}).then(function(){var o=C(s.a.mark((function o(n){var r,a;return s.a.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(r=n.data&&n.data.data,!r.sgAttribute){o.next=12;break}return e.categoryProdutconfig=r.sgAttribute,e.sgAttribute=r.sgAttribute,e.sgStoreAttribute=r.sgStoreAttribute,e.product=t,o.next=8,e.dynamic();case 8:e.fnShowInfo(),console.log(e.categoryProdutconfig,"categoryProdutconfig"),o.next=16;break;case 12:a=j(j({},t),{},{activityCode:e.activityCode,couponTemplateCode:e.couponTemplateCode,number:1,delmask:!1}),a.skku="",console.log("添加购物车"),Object(l["b"])(a).then((function(t){var o=t;if(console.log(o,"add cart"),o.data){var n=e.hasCartProducts.findIndex((function(t){return t.productId===a.productId}));-1!==n?e.hasCartProducts[n].number+=1:e.hasCartProducts.push(a),console.log(e.hasCartProducts),e.$toast("加入购物车成功")}else e.$toast(o.message)}));case 16:case"end":return o.stop()}}),o)})));return function(t){return o.apply(this,arguments)}}());case 3:case"end":return o.stop()}}),o)})))()},delCart:function(t){var e=this;console.log(t,"item del"),Object(d["b"])({skus:t.skku,sku:t.sku}).then((function(o){var n,r=o.data;r.success?(n=t.skku?e.hasCartProducts.findIndex((function(e){return e.skku===t.skku})):e.hasCartProducts.findIndex((function(e){return e.productId===t.productId})),-1!==n&&e.hasCartProducts.splice(n,1),e.hasCartProducts.length||(e.popshow=!1)):e.$toast(r.message)}))},cancelDel:function(t){t.delmask=!1},touchstartFn:function(){this.longtimeLog=(new Date).getTime()},touchendFn:function(t){this.hasCartProducts.forEach((function(t){t.delmask=!1})),(new Date).getTime()-this.longtimeLog>700&&(t.delmask=!t.delmask)},dynamic:function(){var t=this;return new Promise((function(e,o){Object(l["B"])({prodId:t.product.productId,memberStoreId:t.getShareId||"",number:1,provinceId:t.location.provinceId,cityId:t.location.cityId,regionId:t.location.districtId,streetId:t.location.townshipId,skku:t.skku||null,sku:t.product.sku}).then((function(o){o.success&&o.data?(t.activityInfo=o.data.activityInfo||null,t.baseInfo=j({},o.data.baseInfo),t.priceInfo=o.data.priceInfo||null,t.sgStockInfo=o.data.sgStockInfo?j({},o.data.sgStockInfo):null,t.storeInfo=o.data.storeInfo||null,t.calcAttr(),t.fetchIoucCost(),e()):t.$toast(o.message)}))}))},attrNameChange:function(t){this.attrValueNames=t,this.attrLen=0===this.attrValueNames.length?"":this.attrValueNames.split(",").length,this.attrValueNames=0===t.length?this.holdSelected:this.attrValueNames},calcAttr:function(){var t=[];for(var e in this.sgAttribute)t.push(this.sgAttribute[e][0].attrName);this.holdSelected=t.join(","),this.hasSubProduct&&(this.attrLen=0),this.originAttrs=this.sgStoreAttribute?this.sgStoreAttribute.filter((function(t,e){return t.num>=0})):[],this.sgStoreAttribute||(this.sgStoreAttributeItem=null)},fnSelectAttribute:function(t,e){console.log(t,"ssfafasdfasfsaddfsdfsd"),this.skku=t.skku,this.curCategoryProductInfo.defaultImageUrl=t.pic,this.curCategoryProductInfo.defaultPrice=t.price,this.$route.query.exclusiveId&&this.queryExclusivePrice(this.$route.query.exclusiveId),this.dynamic()},fetchIoucCost:function(){var t=this;if(c["a"].isNull(this.accessToken)||c["a"].isNull(this.ucId))console.log("fetchIoucCost");else{console.log("fetchIoucCostssss");var e=0;e=this.activityInfo?this.priceInfo.finalPrice:this.priceInfo.actualPrice,Object(l["M"])({payAmt:e,proGroup:this.product.department,sku:this.skku?this.skku:this.product.sku,token:this.accessToken}).then((function(e){e.success&&(t.ioucInfo=e.data)}))}},toShowPop:function(){this.popshow=!this.popshow},doSure:function(t){var e=this;console.log("添加购物车",this.curCategoryProductInfo);var o=j(j({},this.curCategoryProductInfo),{},{skku:this.skku,activityCode:this.activityCode,couponTemplateCode:this.couponTemplateCode,number:t,attrValueNames:this.attrValueNames,delmask:!1});Object(l["b"])(o).then((function(n){var r=n;if(console.log(r,"add cart"),r.data){var a=e.hasCartProducts.findIndex((function(t){return t.skku===e.skku}));-1!==a?e.hasCartProducts[a].number+=t:e.hasCartProducts.push(o),console.log(e.hasCartProducts),e.$toast("加入购物车成功"),e.fnShowInfo()}else e.$toast(r.message)}))},changeCatetory:function(t){},fnShowInfo:function(){this.showInfoFlag=!this.showInfoFlag},stepInput:function(t){var e=this;if(console.log(t.number,"product.number"),!this.isInputing){this.isInputing=!0;var o=t.limitNum||999;if(t.number>o)return t.number=o,t.limitNum&&this.$toast("为了您的购物体验，当前商品一次购买数量不超过".concat(t.limitNum)),void(this.isInputing=!1);var n=setTimeout((function(){clearTimeout(n),Object(d["f"])(j(j({},t),{},{number:t.number>o?o:t.number||1,updType:1})).then((function(t){e.isInputing=!1}))}),400)}},goPage:function(){this.$util.isSgRn()?window.postMessage({type:"goTCart"}):this.$router.push("/cart")}}},L=$,D=(o("60fd"),Object(v["a"])(L,n,r,!1,null,"786aaf30",null));e["default"]=D.exports}}]);
//# sourceMappingURL=chunk-14d97454.b79c6f29.js.map