(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b9d4897","chunk-fc629cbc","chunk-2b4715e4"],{"0664":function(t,e,o){},"0f75":function(t,e,o){"use strict";o("f3c4")},"23d3":function(t,e,o){"use strict";var n=o("c63d");e["a"]={components:{topFeedBack:n["default"]},data:function(){return{showToTopFlag:!1}},activated:function(){this.fnScroll()},beforeRouteLeave:function(t,e,o){document.getElementById("app-warp").removeEventListener("scroll",this.addEventScrollFn),o()},beforeMount:function(){this.debouncedAction=this.$util.throttle(this.option,100)},methods:{fnScrollToTop:function(){this.scrollSmoothTo(0)},hiddenFeedBack:function(){this.showToTopFlag=!1},scrollSmoothTo:function(t){console.log("#app-warp scroll"),window.requestAnimationFrame||(window.requestAnimationFrame=function(t){return setTimeout(t,17)});var e=document.querySelector("#app-warp"),o=e.scrollTop;console.log(o,"scrollTop");var n=function n(){var i=t-o;o+=i/10,Math.abs(i)<1?e.scrollTo(0,t):(e.scrollTo(0,o),requestAnimationFrame(n))};n()},fnScroll:function(){document.getElementById("app-warp").addEventListener("scroll",this.addEventScrollFn)},addEventScrollFn:function(t){this.debouncedAction(t)},option:function(t){var e=t.target.scrollTop;this.showToTopFlag=e>200}}}},"25e9":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{class:{"coupon-value-label":!0,"home-style":t.forHomePage},style:{color:t.textColor}},["FIXED_CASH_COUPON"===t.couponType||"REBATE_COUPON"===t.couponType?o("span",{staticClass:"symbol"},[t._v("￥")]):t._e(),o("span",{staticClass:"integer",style:{fontSize:t.fontSize}},[t._v(t._s(t._f("formatPriceInt")(t.couponDisplayValue)))]),t.withFloat?o("span",{staticClass:"float"},[t._v(t._s(t._f("formatPriceFloat")(t.couponDisplayValue)))]):t._e(),"DISCOUNT_COUPON"===t.couponType?o("span",{staticClass:"sales"},[t._v("折")]):t._e()])])},i=[],r={name:"couponValueLabel",props:{couponValue:{type:String,default:"0"},couponType:{type:String,default:"FIXED_CASH_COUPON"},forHomePage:{type:Boolean,default:!1},maxFontSize:{type:String,default:"0.64"},textColor:{type:String,default:"#ED2856"}},computed:{fontSize:function(){return this.forHomePage?String(this.couponDisplayValue).length<6?"0.40rem":6===String(this.couponDisplayValue).length?"0.38rem":String(this.couponDisplayValue).length>6?"0.32rem":this.maxFontSize+"rem":String(this.couponDisplayValue).length<6?this.maxFontSize+"rem":6===String(this.couponDisplayValue).length?.875*this.maxFontSize+"rem":String(this.couponDisplayValue).length>6?.68*this.maxFontSize+"rem":this.maxFontSize+"rem"},withFloat:function(){var t=this.couponDisplayValue.split(".");return!!(t&&t.length>1&&"00"!==t[1]&&"0"!==t[1])},couponDisplayValue:function(){return"DISCOUNT_COUPON"===this.couponType?String(Number(this.couponValue)/10):this.couponValue}}},a=r,s=(o("4ff6"),o("2877")),c=Object(s["a"])(a,n,i,!1,null,"5a48cfec",null);e["a"]=c.exports},"347c":function(t,e,o){},"3bd1":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"toTop",staticClass:"voucher-detail"},[n("Header",{attrs:{leftArrow:!t.$route.query.browerFirstIn}},[n("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.cardVoucher.applyType?"场景列表":"商品列表"))]),t.isUplus?n("div",{staticClass:"share",attrs:{slot:"right"},on:{click:t.doShare},slot:"right"}):t._e()]),t.skeletonloading?n("Skeleton",{attrs:{nums:5}}):n("div",[n("div",{staticClass:"voucher-warp"},[n("div",{staticClass:"voucher-flex-info"},[n("div",{staticClass:"voucher-flex"},[n("Tag",{staticClass:"voucher-tag",attrs:{couponUseType:t.cardVoucher.applyType?"SCENE":t.cardVoucher.couponUseType}}),n("coupon-value-label",{attrs:{textColor:"#fff",couponValue:t.cardVoucher.couponValue,couponType:t.cardVoucher.couponType}}),"PRODUCT"===t.cardVoucher.scope?n("p",[t._v(t._s(t.cardVoucher.description))]):t._e()],1),n("div",{staticClass:"voucher-body"},[n("p",[t._v(t._s(t.cardVoucher.couponTemplateName))]),n("div",["PRODUCT"===t.cardVoucher.scope?n("span",[t._v("单品")]):t._e(),"ORDER"===t.cardVoucher.scope?n("span",[t._v("订单")]):t._e(),t._v(" "+t._s(t.cardVoucher.description)+" ")]),t.cardVoucher.startTime?n("div",[t._v(t._s(t._f("formatDateEndOfDay")(t.cardVoucher.startTime))+"—"+t._s(t._f("formatDateEndOfDay")(t.cardVoucher.endTime)))]):n("div",[t._v(t._s(t.cardVoucher.validityPeriod))])])])]),n("div",{staticClass:"voucher-tips"},[n("span"),"DISCOUNT_COUPON"===t.cardVoucher.couponType?[t._v("以下"+t._s(t.cardVoucher.applyType?"场景":"商品")+"可使用"+t._s((Number(t.cardVoucher.couponValue)/10).toFixed(1))+"折优惠券")]:[t._v("以下"+t._s(t.cardVoucher.applyType?"场景":"商品")+"可使用"+t._s(t._f("withFloat")(t.cardVoucher.couponValue))+"元优惠券")]],2),n("div",{staticClass:"devider"}),t.cardVoucher.applyType?[!t.sceneList.length&&t.finished?n("div",{staticClass:"voucher-empty"},[t.cardVoucher&&"SHOP"===t.cardVoucher.couponUseType?n("img",{attrs:{src:o("3f3b")}}):t._e(),t.cardVoucher&&"STORE"===t.cardVoucher.couponUseType?n("img",{attrs:{src:o("fd9b")}}):t._e(),n("p",{staticClass:"void-text"},[t._v("暂无适用场景信息")])]):n("van-list",{attrs:{"van-clearfix":"",finished:t.finished,"finished-text":"没有更多啦~"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("div",{staticClass:"sence-item-warp"},[n("div",{staticClass:"program-product-left"},t._l(t.sceneList.filter((function(t,e){return!(e%2)})),(function(e){return n("div",{key:e.sceneUrl,staticClass:"program-product-item",on:{click:function(o){return t.goSyn(e)}}},[n("div",{staticClass:"program-product-img"},[n("vanImg",{attrs:{src:t._f("imageToHttps")(e.sceneImage)}})],1),n("p",[t._v(t._s(e.sceneName))])])})),0),n("div",{staticClass:"program-product-right"},t._l(t.sceneList.filter((function(t,e){return e%2})),(function(e){return n("div",{key:e.sceneUrl,staticClass:"program-product-item",on:{click:function(o){return t.goSyn(e)}}},[n("div",{staticClass:"program-product-img"},[n("vanImg",{attrs:{src:t._f("imageToHttps")(e.sceneImage)}})],1),n("p",[t._v(t._s(e.sceneName))])])})),0)])])]:[!t.nearCouponInfo.length&&t.finished?n("div",{staticClass:"voucher-empty"},[t.cardVoucher&&"SHOP"===t.cardVoucher.couponUseType?n("img",{attrs:{src:o("3f3b")}}):t._e(),t.cardVoucher&&"STORE"===t.cardVoucher.couponUseType?n("img",{attrs:{src:o("fd9b")}}):t._e(),n("p",{staticClass:"void-text"},[t._v("暂无适用商品信息")])]):n("div",{staticClass:"voucher-list"},[n("van-list",{attrs:{"van-clearfix":"",finished:t.finished,"finished-text":"没有更多啦~"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.nearCouponInfo,(function(e){return n("div",{key:e.productId,staticClass:"voucher-item",on:{click:function(o){return t.toGoodDetail(e)}}},[n("div",{staticClass:"item-img"},[n("img",{attrs:{src:e.defaultImageUrl}})]),n("div",{staticClass:"item-body"},[n("h2",[t._v(t._s(e.productFullName))]),e.sellPoints?n("h4",t._l(e.sellPoints.split(","),(function(e,o){return n("p",{key:o},[o>0?n("span",[t._v("|")]):t._e(),t._v(t._s(e))])})),0):t._e(),n("div",{staticClass:"item-price"},[n("div",{staticClass:"item-tags",class:{"tags-bottom-margin":!e.sellPoints}},t._l(e.tags,(function(e){return n("div",{key:e.id},[1==e.tagType?n("img",{attrs:{src:e.tagUrl}}):1==e.tagFontStyle?n("van-tag",{attrs:{color:e.tagFontColour}},[t._v(t._s(e.tagName))]):n("van-tag",{attrs:{plain:!0,color:e.tagFontColour}},[t._v(t._s(e.tagName))])],1)})),0),e.finalPrice?n("h5",[n("small",[t._v("￥")]),t._v(t._s((parseFloat(e.finalPrice).toFixed(2)+"").split(".")[0])),n("small",[t._v("."+t._s((parseFloat(e.finalPrice).toFixed(2)+"").split(".")[1]))]),e.plusPrice?n("member-price",{attrs:{memberPrice:e.plusPrice,mStyle:{display:"inline-block","margin-left":"0.18rem"}}}):t._e()],1):t._e(),n("div",{staticClass:"item-tips"},[t._v(t._s("暂无评价"===e.comments?e.comments:e.comments+"条评价")+" "+t._s("暂无评价"===e.comments?"":e.goodRate+"好评"))])]),n("div",{staticClass:"item-cart",on:{click:function(o){return o.stopPropagation(),t.addCart(e)}}})])])})),0)],1)],n("van-popup",{style:{maxHeight:"10rem"},attrs:{round:"",closeable:"",position:"bottom"},model:{value:t.popshow,callback:function(e){t.popshow=e},expression:"popshow"}},[n("div",{staticClass:"cart-list"},t._l(t.hasCartProducts,(function(e){return n("div",{key:e.skku,staticClass:"cart-item"},[n("div",{staticClass:"cart-img",on:{touchstart:function(e){return e.preventDefault(),t.touchstartFn.apply(null,arguments)},touchend:function(o){return o.preventDefault(),t.touchendFn(e)}}},[n("img",{attrs:{src:e.imageId}})]),n("div",{staticClass:"cart-body",on:{touchstart:function(e){return e.preventDefault(),t.touchstartFn.apply(null,arguments)},touchend:function(o){return o.preventDefault(),t.touchendFn(e)}}},[n("div",[n("h5",[t._v(t._s(e.productName))]),n("p",[t._v(t._s(e.attrValueNames))]),n("h6",[n("small",[t._v("￥")]),t._v(t._s(e.price))])])]),n("div",{staticClass:"cart-step"},[n("p",[t._v("最多可购买999件")]),n("van-stepper",{attrs:{integer:"",min:"1",max:e.limitNum||999},on:{change:function(o){return t.stepInput(e)}},model:{value:e.number,callback:function(o){t.$set(e,"number",o)},expression:"product.number"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.delmask,expression:"product.delmask"}],staticClass:"del-mask",on:{click:function(o){return o.stopPropagation(),t.cancelDel(e)}}},[n("span",{on:{touchstart:function(o){return o.stopPropagation(),t.delCart(e)}}})])])})),0)]),n("van-popup",{style:{maxHeight:"10rem"},attrs:{round:"",closeable:"",position:"bottom"},model:{value:t.categoryshow,callback:function(e){t.categoryshow=e},expression:"categoryshow"}},[n("div",{staticClass:"prod-category"},[n("div",{staticClass:"category-body"},[n("div",{staticClass:"category-info"},[n("div",{staticClass:"category-img"},[n("img",{attrs:{src:t.curCategoryProductInfo.productPic||t.curCategoryProductInfo.defaultImageUrl}})]),n("div",{staticClass:"category-price"},[n("small",[t._v("￥")]),t._v(t._s(t._f("formatPrice")(t.curCategoryProductInfo.finalPrice)))])]),t._l(t.categoryProdutconfig,(function(e,o){return n("div",{key:o,staticClass:"prod-catetory"},[n("h4",[t._v(t._s(e[0].attrName))]),n("div",t._l(e,(function(e,i){return n("span",{key:i,class:{active:t.curSelectCate[o]==e.sgAttribute.attrValueName},on:{click:function(o){return t.changeCatetory(e)}}},[t._v(t._s(e.sgAttribute.attrValueName))])})),0)])}))],2),n("div",{staticClass:"fixed-btn",on:{click:t.doSure}},[t._v("确定")])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.categoryshow&&!t.cardVoucher.applyType,expression:"!categoryshow && !cardVoucher.applyType"}],staticClass:"voucher-fixed",class:{"low-fix-index":t.showInfoFlag}},[n("div",{staticClass:"prod-price"},[n("h5",[n("small",[t._v("总价：")]),t._v("￥"+t._s(t._f("formatPrice")(t.totalPrice)))]),n("p",[t._v(t._s(t.resultAfterRate))])]),n("div",{staticClass:"prod-btn"},[t.totalNums?n("p",{class:{active:t.popshow},on:{click:t.toShowPop}},[t._v("已选商品"+t._s(t.totalNums)+"件 "),n("span")]):t._e(),n("a",{attrs:{href:"javascript:;"},on:{click:t.goToCart}},[t._v("去购物车")])])])],2),n("van-popup",{staticStyle:{"border-radius":"12px 12px 0px 0px"},attrs:{position:"bottom","get-container":"#app-warp"},model:{value:t.showInfoFlag,callback:function(e){t.showInfoFlag=e},expression:"showInfoFlag"}},[t.sgAttribute&&t.sgStoreAttribute?n("attr-modal",{attrs:{sgAttribute:t.sgAttribute,sgStockInfo:t.sgStockInfo,sgStoreAttribute:t.sgStoreAttribute,stepperNum:t.stepperNum,btnType:0,hasSubProduct:!0,activityInfo:t.activityInfo,baseInfo:t.baseInfo,priceInfo:t.priceInfo,storeInfo:t.storeInfo,originAttrs:t.originAttrs,attrLength:t.attrLen,ioucInfo:t.ioucInfo,products:t.product,limitSkku:t.product.skku},on:{attrConfirm:t.doSure,fnShowInfo:t.fnShowInfo,fnSelectAttribute:t.fnSelectAttribute,attrNameChange:t.attrNameChange,changeAttribute:t.changeCatetory}}):t._e()],1),n("top-feedBack",{attrs:{isShow:t.showToTopFlag},on:{hiddenFeedBack:t.hiddenFeedBack,toTop:t.fnScrollToTop}})],1)},i=[],r=o("a34a"),a=o.n(r),s=o("e725"),c=o("a73f"),u=o("fc3c"),l=o("65cb"),d=o("25e9"),p=o("2f62"),h=o("5967"),f=o("fa7d"),m=o("23d3"),g=o("85e4");function v(t,e,o,n,i,r,a){try{var s=t[r](a),c=s.value}catch(u){return void o(u)}s.done?e(c):Promise.resolve(c).then(n,i)}function y(t){return function(){var e=this,o=arguments;return new Promise((function(n,i){var r=t.apply(e,o);function a(t){v(r,n,i,a,s,"next",t)}function s(t){v(r,n,i,a,s,"throw",t)}a(void 0)}))}}function C(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function I(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?C(Object(o),!0).forEach((function(e){b(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):C(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function b(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var _=function(){return o.e("chunk-62cbe172").then(o.bind(null,"5ef9"))},S="H5",k={H5:{val:5,urlKey:"sceneUrl"},WeChat:{val:22,urlKey:"weChat"},Flutter:{val:16,urlKey:"flutter"}}[S],T={name:"voucherdetail",mixins:[m["a"]],components:{Header:s["a"],Skeleton:c["a"],Tag:_,couponValueLabel:d["a"],attrModal:h["a"],memberPrice:u["default"]},filters:{withFloat:function(t){var e=String(t),o=e.split(".");return o&&o.length>1&&"00"!==o[1]&&"0"!==o[1]?t:o[0]}},data:function(){return{skeletonloading:!0,init:!0,isUplus:this.$util.isHaierApp(),popshow:!1,categoryshow:!1,totalPrice:0,totalNums:0,platformChannel:"",couponUsableCouponId:"",couponType:"",couponFrom:"",cardVoucher:{},loading:!1,finished:!1,pageIndex:1,pageSize:10,nearCouponInfo:[],hasCartProducts:[],provinceId:"",cityId:"",districtId:"",streetId:"",curCategoryProductInfo:{},categoryProdutconfig:{},curSelectCate:{},longtimeLog:"",activityCode:"",couponTemplateCode:"",sourceChannel:"",couponCode:"",isInputing:!1,stepperNum:1,showInfoFlag:!1,sgAttribute:null,sgStoreAttribute:null,activityInfo:null,baseInfo:null,priceInfo:null,sgStockInfo:null,storeInfo:null,originAttrs:null,product:null,attrLen:0,attrValueNames:"",ioucInfo:{feeInfo:"查看更多"},sceneList:[]}},computed:I(I({},Object(p["d"])(["mId","accessToken","ucId"])),{},{couponUsed:function(){var t=this.cardVoucher,e=t.couponType,o=t.couponValue,n=0;return n="DISCOUNT_COUPON"===e?this.totalPrice*((100-o)/100):Number(o),"预计可优惠"+n.toFixed(2)+"元"},location:function(){return this.$store.getters["getlocationInfo"]},getShareId:function(){return sessionStorage.getItem("shareUserId")||""},resultAfterRate:function(){var t=this.cardVoucher,e=t.limitAmount,o=t.limitQuantity;if(!e&&!o)return this.couponUsed;var n=!0,i=!0;return e&&e>this.totalPrice&&(n=!1),o&&o>this.totalNums&&(i=!1),n&&i?this.couponUsed:n&&!i?"还差".concat(o-this.totalNums,"件可使用"):!n&&i?"还差".concat(e-this.totalPrice,"元可使用"):"还差".concat(e-this.totalPrice,"元，").concat(o-this.totalNums,"件可使用")}}),mounted:function(){var t=this;this.couponType=this.$route.query.couponType,this.activityCode=this.$route.query.activityCode,this.couponTemplateCode=this.$route.query.couponTemplateCode,this.couponCode=this.$route.query.couponCode,this.platformChannel=this.$route.query.platformChannel||"",this.sourceChannel=this.$route.query.sourceChannel&&"undefined"!==this.$route.query.sourceChannel&&"0"!==this.$route.query.sourceChannel&&"null"!==this.$route.query.sourceChannel?this.$route.query.sourceChannel:null,this.getCartByCoupon(),this.$store.dispatch("doLocation").then((function(e){t.$store.dispatch("doLocationInfo",e).then((function(o){var n=400===e?t.$store.state:o;t.provinceId=n.provinceId,t.cityId=n.cityId,t.districtId=n.districtId,t.streetId=n.townshipId,t.getProductsByCouponId()}))["catch"]((function(){var e=t.$store.state;t.provinceId=e.provinceId,t.cityId=e.cityId,t.districtId=e.districtId,t.streetId=e.townshipId,t.getProductsByCouponId()}))}))["catch"]((function(){var e=t.$store.state;t.provinceId=e.provinceId,t.cityId=e.cityId,t.districtId=e.districtId,t.streetId=e.townshipId,t.getProductsByCouponId()})),this.$store.dispatch("WeChatSecondShare",{title:"智家商城领券频道，优惠券等您来抢",desc:"给您推荐智家商城领券频道，超值优惠券每日限量抢，不可错过哦！",thumImage:""}),this.$util.gioTrackWithVariable("mall_couponProList_view",{ad_coupon_id:this.couponTemplateCode?this.couponTemplateCode+"":"null"})},methods:{goSyn:function(t){var e=t[k.urlKey];e.includes("?")?e+="&":e+="?",e+="userId=".concat(this.$store.state.ucId?this.$store.state.ucId:"","&userAccessToken=").concat(this.$store.getters.getUserCenterToken),this.$store.dispatch("goPageByType",{type:k.val,params:this.$util.injectISOAddressCodeToURL(e,this.$store.getters.getlocationInfo)})},getProductsByCouponId:function(){var t=this;this.loading=!0;var e=this.couponCode?{couponCode:this.couponCode,activityCode:this.activityCode,couponTemplateCode:this.couponTemplateCode,sourceChannel:this.sourceChannel}:{activityCode:this.activityCode,couponTemplateCode:this.couponTemplateCode,sourceChannel:this.sourceChannel},o=I(I({},e),{},{storeId:this.$route.query.storeId||"",pageIndex:this.pageIndex,pageSize:this.pageSize,provinceId:this.provinceId,cityId:this.cityId,districtId:this.districtId,streetId:this.streetId});this.platformChannel&&(o.platformChannel=this.platformChannel),Object(l["d"])(o).then((function(e){t.skeletonloading=!1;var o=e.data;if(t.init=!1,t.loading=!1,o.success){var n=o.data,i=n.coupon,r=n.list,a=n.sceneList;t.cardVoucher=i,t.pageIndex+=1,i.applyType?(t.sceneList=t.sceneList.concat(a||[]),(!a||a&&a.length<t.pageSize)&&(t.finished=!0)):(t.nearCouponInfo=t.nearCouponInfo.concat(r||[]),(!r||r&&r.length<t.pageSize)&&(t.finished=!0))}else t.$toast(o.message),t.finished=!0}))},fnShowInfo:function(t){this.showInfoFlag=!this.showInfoFlag},getCartByCoupon:function(){var t=this;Object(l["c"])({activityCode:this.activityCode,couponTemplateCode:this.couponTemplateCode,purchasedIdentify:1}).then((function(e){var o=e.data.data;console.log(o,"cart in"),o?(t.totalNums=o.cartProducts.length,t.totalPrice=o.totalPrice,t.hasCartProducts=o.cartProducts.map((function(t){return I(I({},t),{},{delmask:!1})}))):(t.totalPrice=0,t.totalNums=0,t.hasCartProducts=[],t.popshow=!1)}))},addCart:function(t){var e=this;return y(a.a.mark((function o(){return a.a.wrap((function(o){while(1)switch(o.prev=o.next){case 0:console.log(t,"item"),e.curCategoryProductInfo=t,Object(l["e"])({productId:t.productId,channel:"",openId:"",storeId:t.visitStore}).then(function(){var o=y(a.a.mark((function o(n){var i,r;return a.a.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(i=n.data.data,!i.sgAttribute){o.next=12;break}return e.categoryProdutconfig=i.sgAttribute,e.sgAttribute=i.sgAttribute,e.sgStoreAttribute=i.sgStoreAttribute,e.product=t,o.next=8,e.dynamic();case 8:e.fnShowInfo(),console.log(e.categoryProdutconfig,"categoryProdutconfig"),o.next=16;break;case 12:e.$util.gioTrackWithVariable("MB15610",{ad_coupon_id:e.couponTemplateCode?e.couponTemplateCode+"":"null",productId_var:t.productId?t.productId+"":"null"}),r=I(I({},t),{},{activityCode:e.activityCode,couponTemplateCode:e.couponTemplateCode,purchasedIdentify:1,number:1}),r.skku="",Object(l["a"])(r).then((function(t){var o=t.data;console.log(o,"add cart"),o.data?e.getCartByCoupon():e.$toast(o.message)}));case 16:case"end":return o.stop()}}),o)})));return function(t){return o.apply(this,arguments)}}());case 3:case"end":return o.stop()}}),o)})))()},dynamic:function(){var t=this;return new Promise((function(e,o){Object(g["B"])({prodId:t.product.productId,memberStoreId:t.getShareId||"",number:1,provinceId:t.location.provinceId,cityId:t.location.cityId,regionId:t.location.districtId,streetId:t.location.townshipId,skku:t.skku||null,sku:t.product.sku}).then((function(o){o.success?(t.activityInfo=o.data.activityInfo||null,t.baseInfo=I({},o.data.baseInfo),t.priceInfo=o.data.priceInfo||null,t.sgStockInfo=o.data.sgStockInfo?I({},o.data.sgStockInfo):null,t.storeInfo=o.data.storeInfo||null,t.calcAttr(),t.fetchIoucCost(),e()):t.$toast(o.message)}))}))},attrNameChange:function(t){this.attrValueNames=t,this.attrLen=0===this.attrValueNames.length?"":this.attrValueNames.split(",").length,this.attrValueNames=0===t.length?this.holdSelected:this.attrValueNames},calcAttr:function(){var t=[];for(var e in this.sgAttribute)t.push(this.sgAttribute[e][0].attrName);this.holdSelected=t.join(","),this.hasSubProduct&&(this.attrLen=0),this.sgAttribute=this.sgAttribute,this.sgStoreAttribute=this.sgStoreAttribute,this.originAttrs=this.sgStoreAttribute?this.sgStoreAttribute.filter((function(t,e){return t.num>=0})):[],this.sgStoreAttribute||(this.sgStoreAttributeItem=null)},fnSelectAttribute:function(t,e){this.skku=t.skku,this.$route.query.exclusiveId&&this.queryExclusivePrice(this.$route.query.exclusiveId),this.dynamic()},fetchIoucCost:function(){var t=this;if(!f["a"].isNull(this.accessToken)&&!f["a"].isNull(this.ucId)){var e=0;e=this.activityInfo?this.priceInfo.finalPrice:this.priceInfo.actualPrice,Object(g["M"])({payAmt:e,proGroup:this.product.department,sku:this.skku?this.skku:this.product.sku,token:this.accessToken}).then((function(e){e.success&&(t.ioucInfo=e.data)}))}},doSure:function(t){var e=this;this.$util.gioTrackWithVariable("MB15610",{ad_coupon_id:this.couponTemplateCode?this.couponTemplateCode+"":"null",productId_var:this.curCategoryProductInfo.productId?this.curCategoryProductInfo.productId+"":"null"}),Object(l["a"])(I(I({},this.curCategoryProductInfo),{},{activityCode:this.activityCode,couponTemplateCode:this.couponTemplateCode,purchasedIdentify:1,attrValueNames:this.attrValueNames,number:t})).then((function(t){var o=t.data;console.log(o,"add cart"),o.data?(e.$toast("添加成功"),e.getCartByCoupon(),e.showInfoFlag=!1):e.$toast(o.message)}))},changeCatetory:function(t){var e=this,o=""+t.sgAttribute.id,n={productId:t.sgAttribute.productId};console.log(o,"+++changeCatetory+++",t),Object(l["g"])(n).then((function(t){var n=t.data.data;console.log(n.sgStoreAttribute,"aaaaa");var i=n.sgStoreAttribute.filter((function(t){return t.attrValueIds===o}))[0];e.curCategoryProductInfo.productPic=i.pic,e.curCategoryProductInfo.finalPrice=i.price,e.curCategoryProductInfo.skku=i.skku})),this.$set(this.curSelectCate,t.sgAttribute.attrCode,t.sgAttribute.attrValueName),console.log(this.curSelectCate,t.sgAttribute.attrValueName,"curSelectCate")},delCart:function(t){var e=this;console.log(t,"item del"),Object(l["b"])({skus:t.skku,sku:t.sku}).then((function(t){var o=t.data;o.success?e.getCartByCoupon():e.$toast(o.message)}))},cancelDel:function(t){t.delmask=!1},stepInput:function(t){var e=this;if(console.log(t.number,"product.number"),!this.isInputing){this.isInputing=!0;var o=t.limitNum||999;if(t.number>o)return t.number=o,t.limitNum&&this.$toast("为了您的购物体验，当前商品一次购买数量不超过".concat(t.limitNum)),void(this.isInputing=!1);var n=setTimeout((function(){clearTimeout(n),Object(l["f"])(I(I({},t),{},{number:t.number>o?o:t.number||1,couponId:e.couponUsableCouponId,updType:1})).then((function(t){e.isInputing=!1;var o=t.data;o.success&&e.getCartByCoupon()}))}),400)}},onLoad:function(){console.log("+++load+++"),this.init||this.getProductsByCouponId()},toShowPop:function(){this.popshow=!this.popshow},touchstartFn:function(){this.longtimeLog=(new Date).getTime()},touchendFn:function(t){this.hasCartProducts.forEach((function(t){t.delmask=!1})),(new Date).getTime()-this.longtimeLog>700&&(t.delmask=!t.delmask)},toGoodDetail:function(t){this.$util.gioTrackWithVariable("MB15612",{ad_coupon_id:this.couponTemplateCode?this.couponTemplateCode+"":"null",productId_var:t.productId?t.productId+"":"null"});var e={productId:t.productId,visitStore:t.visitStore||""};this.$router.push({path:"/goodsDetail",query:e})},goPage:function(t,e){this.$router.push({path:t,query:e})},goToCart:function(){var t=this;this.$util.gioTrackWithVariable("MB15611",{ad_coupon_id:this.couponTemplateCode?this.couponTemplateCode+"":"null"});var e=this.hasCartProducts.map((function(t){return t.productId}));this.$util.isHaierApp()?this.$store.dispatch("handleUpAuth").then((function(o){o?t.goPage("/cart",{fromCouponids:e.join(",")}):t.$store.dispatch("doLogin")})):this.goPage("/cart",{fromCouponids:e.join(",")})},doShare:function(){this.$util.gioTrackWithVariable("mall_couponProList_click_share",{ad_coupon_id:this.couponTemplateCode?this.couponTemplateCode+"":"null"}),this.$util.inAppShare({title:"智家商城领券频道，优惠券等您来抢",url:-1!==location.href.indexOf("?")?location.href+"&shareId="+this.mId:location.href+"?shareId="+this.mId,desc:"给您推荐智家商城领券频道，超值优惠券每日限量抢，不可错过哦！"})}}},P=T,w=(o("4f26"),o("0f75"),o("2877")),V=Object(w["a"])(P,n,i,!1,null,"1da2cbbf",null);e["default"]=V.exports},"3f3b":function(t,e,o){t.exports=o.p+"img/onListBlue.8ba51d9a.png"},"4b7d":function(t,e,o){"use strict";o("7fdc")},"4f26":function(t,e,o){"use strict";o("9c36")},"4ff6":function(t,e,o){"use strict";o("0664")},"65cb":function(t,e,o){"use strict";o.d(e,"d",(function(){return a})),o.d(e,"c",(function(){return s})),o.d(e,"a",(function(){return c})),o.d(e,"b",(function(){return u})),o.d(e,"f",(function(){return l})),o.d(e,"e",(function(){return d})),o.d(e,"g",(function(){return p}));var n=o("1c03"),i=o("bbc2"),r=o("f121"),a=function(t){return n["a"].request({url:i["a"].getProductsByCouponId,method:"get",params:t})},s=function(t){return n["a"].get(i["a"].getCartByCoupon,{params:t})},c=function(t){return n["a"].post(i["a"].addCartByCoupon,t)},u=function(t){var e=t.skus?i["a"].deleteBatch:i["a"].deleteCart;return n["a"].get(e,{params:t})},l=function(t){return n["a"].post(i["a"].updateCouponByNumber,t)},d=function(t){var e="".concat(i["a"].productDetailData).concat(t.productId,".json");return n["a"].get(e,{params:t,baseURL:r["a"].DHOST})},p=function(t){return n["a"].get("".concat(i["a"].getProductBasicInfo).concat(t.productId,".json"),{params:t,baseURL:r["a"].DHOST})}},"7fdc":function(t,e,o){},"80cc":function(t,e,o){"use strict";o("347c")},"9c36":function(t,e,o){},a73f:function(t,e,o){"use strict";var n=function(t,e){var o=e._c;return e.props.nums>0?o("div",{staticClass:"m-skeleton",style:{"z-index":e.props.zIndex||0}},[o("div",{style:{background:e.props.bgColor,height:e.props.fheight}}),e._l(e.props.nums-1,(function(t){return o("div",{key:t,style:{background:e.props.bgColor,height:e.props.iheight}})}))],2):e._e()},i=[],r=(o("80cc"),o("2877")),a={},s=Object(r["a"])(a,n,i,!0,null,null,null);e["a"]=s.exports},a9d4:function(t,e,o){"use strict";o("f2ee")},c63d:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isShow?o("div",{staticClass:"go-top",class:t.classList},[o("div",{staticClass:"top",on:{click:t.toGotop}},[o("img",{attrs:{src:t.$cdnImageUrl+"/common/common-to-top-icon.png"}}),o("span",[t._v("顶部")])]),t.isHaierApp&&t.feedShow?o("div",{staticClass:"divider"}):t._e(),t.isHaierApp&&t.feedShow?o("div",{staticClass:"bottom",on:{click:function(e){return t.toFeedBack()}}},[o("img",{attrs:{src:t.$cdnImageUrl+"/common/common-edit-icon.png"}}),o("span",[t._v("反馈")])]):t._e()]):t._e()},i=[],r={props:{isShow:{type:Boolean,default:function(){return!1}},classList:{type:Object,default:function(){return{}}},feedShow:{type:Boolean,default:function(){return!0}},code:{type:Number,default:function(){return null}}},data:function(){return{isHaierApp:!1,timer:null}},created:function(){this.isHaierApp=this.$util.isUplus()},watch:{isShow:{handler:function(t){var e=this;console.log(t),console.log("this.timer:",this.timer),t?this.timer?(clearTimeout(this.timer),this.timer=null):this.timer=setTimeout((function(){e.hiddenFeedBack()}),4e3):(clearTimeout(this.timer),this.timer=null)}}},methods:{hiddenFeedBack:function(){console.log("hiddenFeedBack"),this.$emit("hiddenFeedBack")},toGotop:function(){this.$emit("toTop")},toFeedBack:function(){if(this.$store.getters.getLoginStatus){var t="https://uplus.haier.com/uplusapp/problemFeedBack/feedback.html";this.code&&(t="https://uplus.haier.com/uplusapp/problemFeedBack/feedback.html?code="+this.code),this.$util.openNewWindow(t,!0,!1,!1)}else this.$store.dispatch("doLogin").then((function(t){400===t&&console.log("请求异常")}))}}},a=r,s=(o("4b7d"),o("2877")),c=Object(s["a"])(a,n,i,!1,null,"7733b653",null);e["default"]=c.exports},f2ee:function(t,e,o){},f3c4:function(t,e,o){},fc3c:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isShowMemberPrice&&t.memberPrice?o("div",{staticClass:"member-price",style:t.mStyle},[o("span",{staticClass:"symbol"},[t._v("￥")]),o("span",{staticClass:"member-price-int",style:{"font-size":t.isBig?".36rem":".28rem",top:t.isBig?".02rem":"0"}},[t._v(" "+t._s(t._f("formatPriceInt")(t._f("formatPrice")(t.memberPrice)))+" ")]),o("span",{staticClass:"member-price-float"},[t._v(" "+t._s(t._f("formatPriceFloat")(t._f("formatPrice")(t.memberPrice)))+t._s(t.hasMinPrice?"起":"")+" ")]),o("img",{attrs:{src:"//cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/plus.png"}})]):t._e()},i=[],r={props:["memberPrice","mStyle","isBig","hasMinPrice"],data:function(){return{isShowMemberPrice:this.$util.isShowMemberPrice()}}},a=r,s=(o("a9d4"),o("2877")),c=Object(s["a"])(a,n,i,!1,null,"0499ae71",null);e["default"]=c.exports},fd9b:function(t,e,o){t.exports=o.p+"img/onListRed.f83bedfd.png"}}]);
//# sourceMappingURL=chunk-7b9d4897.a873aaa8.js.map