(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1330a486"],{"11f0":function(t,e,a){"use strict";var i=a("1c03"),o=a("f121"),n=function(t){var e=o["a"].ADMINEHOST+"/cmsadmin/homepage/activity/getHomeActivityById.json";return i["a"].get(e,{params:t})},s=function(){return i["a"].get("/v3/h5/scart/num.json")},r=function(){return i["a"].get("/sg/cms/homepage/getCurrentActivityBackgroundByCurrentTime.json")},c=function(t){return i["a"].get("/sg/cms/home/banner.json",{params:t})},u=function(){return i["a"].get("/sg/cms/homepage/getCurrentActivityNavigationByCurrentTime.json")},l=function(){return i["a"].get("/sg/cms/homepage/getCurrentActivityCategoryByCurrentTime.json?notSupportMPassFlag=1")},d=function(){return i["a"].get("/sg/cms/homepage/getCurrentActivityVajraByCurrentTime.json?notSupportMPassFlag=1")},g=function(t){return i["a"].get("/coupon/v1/carry/getCouponCenter.json",{params:t})},p=function(t){return i["a"].get("/coupon/v1/carry/receiveCoupon.json",{params:t})},f=function(){return i["a"].get("/sg/cms/homepage/getAllHomeProductRecommend.json")},m=function(){return i["a"].get("/sg/cms/home/uhome/getTabsByPageInfo.json")},h=function(){return i["a"].get("/sg/cms/homepage/getCurrentActivityAdvertByCurrentTime.json")},v=function(t){return i["a"].get("/sg/cms/live/getHotLive.json",{params:t})},y=function(t){return i["a"].get("/sg/cms/homepage/getCurrentActivityMarketingByCurrentTime.json",{params:t})},w=function(t){return i["a"].get("/sg/cms/homepage/getCurrentActivityCouponByCurrentTime.json",{params:t})},C=function(t){return i["a"].get("/sg/cms/flashSales/fourth/nearFlashSale.json",{params:t})},I=function(t){return i["a"].get("/v3/mstore/decorate/getMallNearMdStore.json",{params:t})},S=function(t){return i["a"].get("/sg/cms/chara/charaIndex.json",{params:t})},b=function(t){var e="/search/defaultSearchList.json?platform=3";return i["a"].get(e,{params:t,baseURL:o["a"].SHOST})},_=function(t){var e="/search/commonLoadItemNew.html";return i["a"].get(e,{params:t,baseURL:o["a"].SHOST})},k=function(t){var e="/search/getPriceByProductList.html";return i["a"].get(e,{params:t,baseURL:o["a"].SHOST})},x=function(t){return i["a"].get("/sg/cms/home/getCouponActivitys.json",{params:t})},L=function(t){return i["a"].get("/sg/cms/home/receiveCoupons.json",{params:t})},O=function(t){return i["a"].get("/sg/cms/home/closeCouponPop.json",{params:t})};e["a"]={getActivitidInfo:n,getCartNumber:s,getActivityBgInfo:r,getBanner:c,getTopSearchBar:u,getCategoryItems:l,getKingKongs:d,getCouponList:g,getCouponItem:p,getProductRecommend:f,getProgramData:m,getMiddleBanner:h,getHotLive:v,getFlexArea:y,getCouponStatus:w,getFlashSale:C,getNearbyShop:I,getelectricalGoods:S,getDefaultSearchWord:b,getCommonLoadItemNew:_,getPriceByProduct:k,couponActivitysInfo:x,receiveActivitysCoupons:L,closeCouponPop:O}},2108:function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return c})),a.d(e,"e",(function(){return u}));var i=a("bbc2"),o=a("1c03"),n=function(t){return Object(o["b"])(i["a"].getMainGroupBooking,t)},s=function(t){return Object(o["b"])(i["a"].getShopGroupList,t)},r=function(t){return Object(o["b"])(i["a"].getGoodsGroupList,t)},c=function(t){return Object(o["b"])(i["a"].getGroupBuyByOrderSn,t)},u=function(t){return Object(o["b"])(i["a"].isGroupBuyOrder,t)}},"4c20":function(t,e,a){"use strict";a("b8bd")},"7b82":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loadend?a("div",{staticClass:"pay-state"},[a("div",{staticClass:"head-line"},[a("span",{staticClass:"finish",on:{click:t.onComplete}},[t._v("完成")])]),a("div",{staticClass:"state-wrapper"},[a("div",{staticClass:"image-wrapper"},[t.success?a("img",{attrs:{src:t.$cdnImageUrl+"/pay-resault/pay-success3x.png"}}):"digiccy"===t.payType?a("img",{attrs:{src:t.$cdnImageUrl+"/pay-resault/pay-wait3x.png"}}):a("img",{attrs:{src:t.$cdnImageUrl+"/pay-resault/pay-fail3x.png"}})]),a("div",{staticClass:"text-wrapper"},[t._v(t._s(t.state))])]),1===t.originFlag?a("div",{staticClass:"btn-wrapper"},[a("div",{staticClass:"btn",on:{click:t.goHome}},[t._v("返回首页")]),a("div",{staticClass:"btn",on:{click:t.goOrder}},[t._v("查看订单")])]):a("div",{staticClass:"btn-wrapper"},[a("div",{staticClass:"btn",on:{click:t.newGoBack}},[t._v("返回")])]),1===t.originFlag?a("div",{staticClass:"wx-wrapper"},["支付成功"===t.state?a("div",{staticClass:"wx-account-wrapper"},[a("div",{staticClass:"avatar-wrapper"},[a("img",{staticClass:"avatar",attrs:{src:t.$cdnImageUrl+"/pay-resault/wx-logo3x.png",alt:""}})]),t._m(0),a("div",{staticClass:"btn-wrapper"},[a("div",{staticClass:"btn copy",on:{click:t.copy}},[t._v("复制")])])]):t._e(),"支付成功"===t.state?a("div",{staticClass:"wx-account-qrcode"},[a("div",{ref:"qrcode",staticClass:"qrcode-wrapper"},[a("img",{staticClass:"qrcode",attrs:{src:t.$cdnImageUrl+"/pay-resault/wx-qrcode.png",alt:""}})]),a("div",{staticClass:"qrcode-info"},[a("div",{staticClass:"title"},[t._v("微信扫一扫关注公众号")]),a("div",{staticClass:"btn download",on:{click:t.saveImage}},[a("img",{staticClass:"download-icon",attrs:{src:t.$cdnImageUrl+"/pay-resault/qr-download-icon3x.png",alt:""}}),a("div",{staticClass:"text"},[t._v("保存到相册")])])])]):t._e()]):t._e(),"支付成功"===t.state?a("couponActivitysDialog",{attrs:{source:"ZDSP",sourceId:t.originOrderId,show:!0}}):t._e()],1):t._e()},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info-wrapper"},[a("div",{staticClass:"title"},[t._v("海尔智家公众号")]),a("div",{staticClass:"content"},[t._v("实时推送物流、发票等信息")])])}],n=a("a34a"),s=a.n(n),r=a("c0e9"),c=a.n(r),u=a("b311"),l=a.n(u),d=a("fa7d"),g=a("bbc2"),p=a("21b1"),f=a("2108"),m=a("81ff");function h(t,e,a,i,o,n,s){try{var r=t[n](s),c=r.value}catch(u){return void a(u)}r.done?e(c):Promise.resolve(c).then(i,o)}function v(t){return function(){var e=this,a=arguments;return new Promise((function(i,o){var n=t.apply(e,a);function s(t){h(n,i,o,s,r,"next",t)}function r(t){h(n,i,o,s,r,"throw",t)}s(void 0)}))}}var y=new p["a"];y.initDeviceReady();var w={components:{couponActivitysDialog:m["a"]},data:function(){return{state:"",success:!1,queryData:null,orderSource:"",originFlag:null,originOrderId:null,originUrl:"",payType:"",loadend:!1,groupBuyOrderSn:""}},beforeRouteEnter:function(t,e,a){console.log("beforeRouteEnter history length: "+history.state),a()},beforeRouteLeave:function(t,e,a){console.log("beforeRouteLeave =========="),a()},mounted:function(){var t=this;return v(s.a.mark((function e(){var a,i;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.queryData=t.$util.strJSONParse(decodeURIComponent(t.$route.query.data),{}),console.log(t.$route.query.data,"queryData"),t.originOrderId=a.order_id||null,t.payType=a.payType,t.orderSource=sessionStorage.getItem("cur_order_from")||"",!t.originOrderId){e.next=12;break}return e.next=8,t.checkSynOrderExtend();case 8:if(i=e.sent,!i){e.next=12;break}return t.goSyBridSelfPayStatus(i),e.abrupt("return");case 12:"digiccy"===t.payType?(t.state="支付结果处理中",t.$http.post(g["a"].GET_GHDICCPAY_RESULT,{orderNo:a.orderNo}).then((function(e){var a=e.data;a.success?(t.success=!0,t.state="支付成功",gio("track","PayResult",{payStatus:"success",memberId:localStorage.getItem("mId")})):(t.success=!1,t.state="支付结果处理中",gio("track","PayResult",{payStatus:"failed",memberId:localStorage.getItem("mId")})),t.loadend=!0}))):(t.success=!("T"!==a.is_success&&"true"!==a.is_success),t.success?(t.state="支付成功",gio("track","PayResult",{payStatus:"success",memberId:localStorage.getItem("mId")})):(t.state="支付失败",gio("track","PayResult",{payStatus:"failed",memberId:localStorage.getItem("mId")})),t.loadend=!0),t.originOrderId||t.orderSource?(t.$http.get(g["a"].GetExtendInfoByOrderId,{params:{orderId:t.originOrderId,source:t.orderSource}}).then((function(e){var a=e.data;console.log(a),a.data&&a.data.returnUrl?(t.originFlag=2,t.originUrl=a.data.returnUrl):t.originFlag=1})),t.checkIsGroupBuy()):"epay"===t.payType&&t.$util.isHaierApp()?t.originFlag=3:t.originFlag=1,console.log(t.originFlag,"this.originFlag");case 15:case"end":return e.stop()}}),e)})))()},methods:{checkSynOrderExtend:function(){return this.$http.get(g["a"].GetExtendInfoByOrderId,{params:{orderId:this.originOrderId,source:this.orderSource}}).then((function(t){var e=t.data,a=e.data;return"SYN_BOOK"===(null===a||void 0===a?void 0:a.extendOrderType)&&{orderNum:a.orderSn,timestamp:Date.now(),fkcode:a.fkcode}}))},goSyBridSelfPayStatus:function(t){var e="https://syntest.haier.net/resourceTest/reserve/index.html?planCode=".concat(t.fkcode,"&orderNum=").concat(t.orderNum,"&timestamp=").concat(t.timestamp,"#/signupSuccess");location.replace(e)},newGoBack:function(){var t=this;if(d["a"].isHaierApp()&&this.originUrl)y.initDeviceReady().then((function(){y.closeH5ContainerView()}));else if(d["a"].isSgRn())window.postMessage(JSON.stringify({type:"goHome"}));else if(this.originUrl)var e=setTimeout((function(){clearTimeout(e),location.href=t.originUrl}),200);else this.$router.push("/");d["a"].isHaierApp()||d["a"].isSgRn()||window.parent&&(window.parent.location="haieruplus://jump/https://uplus.haier.com/uplusapp/customize/index.html")},goOrder:function(){var t=this;if(console.log("goOrder"),d["a"].isHaierApp()&&this.originUrl)y.initDeviceReady().then((function(){y.closeH5ContainerView()}));else if(d["a"].isSgRn())window.postMessage(JSON.stringify({type:"goOrderList"}));else if(this.originUrl)var e=setTimeout((function(){clearTimeout(e),location.href=t.originUrl}),200);else this.$router.push("/orderlist");d["a"].isHaierApp()||d["a"].isSgRn()||window.parent&&(window.parent.location="haieruplus://")},onClickLeft:function(){this.originUrl?d["a"].isUplus()?y.initDeviceReady().then((function(){y.closeH5ContainerView()})):location.href=this.originUrl:this.$router.go(-1)},goBack:function(){2!==this.originFlag?(console.log("goBack"),y.initDeviceReady().then((function(){y.closeH5ContainerView()})),d["a"].isHaierApp()||window.parent&&(window.parent.location="haieruplus://jump/https://uplus.haier.com/uplusapp/customize/index.html")):this.goOrder()},goHome:function(){d["a"].isUplus()?d["a"].openNewWindow("https://uplus.haier.com/uplusapp/customize/index.html",!0,!0):d["a"].isHaierApp()?y.initDeviceReady().then((function(){y.closeH5ContainerView()})):d["a"].isSgRn()?window.postMessage(JSON.stringify({type:"goHome"})):this.$router.push("/"),d["a"].isHaierApp()||d["a"].isSgRn()||window.parent&&(window.parent.location="haieruplus://jump/https://uplus.haier.com/uplusapp/customize/index.html")},copy:function(){var t=this;this.$util.gioTrackWithVariable("mall_payresult_copyOfficialAccount",{user_id:localStorage.getItem("ucId")?localStorage.getItem("ucId")+"":"null"}).then((function(){var e=new l.a(".pay-state .copy",{text:function(t){return"shunguang01"}});e.on("success",(function(){t.$toast("复制成功"),window.setTimeout((function(){t.createALink({href:"weixin://"})}),1e3)})),e.on("error",(function(){t.$toast("复制失败")}))}))},saveImage:function(){var t=this;return v(s.a.mark((function e(){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$util.gioTrackWithVariable("mall_payresult_saveToGallery",{user_id:localStorage.getItem("ucId")?localStorage.getItem("ucId")+"":"null"}).then(v(s.a.mark((function e(){var a;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t._html2canvas();case 2:a=e.sent,t.$util.isHaierApp()?t.$util.uplusSaveImage(a).then((function(e){e?t.$toast("保存成功"):t.$toast("保存失败")})):t.createALink({download:Date.now(),href:a});case 4:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})))()},_getPixelRatio:function(t){var e=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/e},_html2canvas:function(){var t=this;return new Promise((function(e,a){var i=t.$refs["qrcode"],o=i.offsetWidth,n=i.offsetHeight,r=document.createElement("canvas"),u=r.getContext("2d"),l=t._getPixelRatio(u),d=l;r.width=o*d,r.height=n*d,u.scale(d,d);var g={scale:1,canvas:r,width:o,height:n,allowTaint:!0,useCORS:!0};c()(i,g).then(function(){var t=v(s.a.mark((function t(a){var i,o;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=a.getContext("2d"),i.mozImageSmoothingEnabled=!1,i.webkitImageSmoothingEnabled=!1,i.msImageSmoothingEnabled=!1,i.imageSmoothingEnabled=!1,o=a.toDataURL("image/png"),console.log("screenUrl",o),e(o);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}))},createALink:function(t){for(var e=document.createElement("a"),a=new MouseEvent("click"),i=0,o=Object.keys(t);i<o.length;i++){var n=o[i];e[n]=t[n]}e.dispatchEvent(a)},onComplete:function(){this.groupBuyOrderSn?this.$router.replace("/groupBookingDetail?orderSn=".concat(this.groupBuyOrderSn)):this.goHome()},checkIsGroupBuy:function(){var t=this;Object(f["e"])({orderId:this.originOrderId}).then((function(e){e.data&&(t.groupBuyOrderSn=e.data)}))}}},C=w,I=(a("4c20"),a("2877")),S=Object(I["a"])(C,i,o,!1,null,"04dfb50c",null);e["default"]=S.exports},"81ff":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"activitys-dialog-warp"},[t.dialogInfoList.length>0?a("div",{ref:"dialogMask",staticClass:"dialog-mask",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[[a("van-swipe",{staticClass:"coupon-swipe",attrs:{loop:!1,"show-indicators":t.dialogInfoList.length>1,"indicator-color":"white"}},t._l(t.dialogInfoList,(function(e,i){return a("van-swipe-item",{key:i,staticClass:"coupon-swiper-item"},[a("div",{ref:"dialog",refInFor:!0,staticClass:"dialog",style:t.dialogStyle},[a("div",{staticClass:"dialog-warp"},[a("div",{staticClass:"dialog-body",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[a("div",{ref:"closeIcon",refInFor:!0,staticClass:"dialog-close",on:{click:function(e){return t.dialogCloseFn(i)}}}),a("span",{staticClass:"icon-tag"}),1==t.dialogInfoList[i].dialogStatus?a("div",{staticClass:"dialog-quan"},[a("div",{staticClass:"dialog-quan-list",on:{touchmove:function(e){return e.stopPropagation(),t.touchHandler(e,i)}}},t._l(t.dialogInfoList[i].coupons,(function(e,i){return a("div",{key:i,staticClass:"dialog-quan-item"},[a("div",{staticClass:"item-fl"},["ORDER"==e.couponUseType?a("span",[t._v("卡券")]):t._e(),"SHOP"==e.couponUseType?a("span",[t._v("店铺券")]):t._e(),"DISCOUNT_COUPON"==e.couponType?a("strong",[t._v(t._s(e.couponValue/10)),a("small",[t._v("折")])]):a("strong",[a("small",[t._v("￥")]),t._v(t._s(Number(e.couponValue).toFixed(0)))])]),a("div",{staticClass:"item-fr"},[a("h5",[t._v(t._s(e.activityName))]),a("p",[t._v(t._s(e.description))]),a("p",[t._v(t._s(e.startTime&&e.startTime.split(" ")[0].replace(/-/g,"."))+"—"+t._s(e.startTime&&e.endTime.split(" ")[0].replace(/-/g,".")))])])])})),0)]):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:2==t.dialogInfoList[i].dialogStatus,expression:"dialogInfoList[index].dialogStatus==2"}],staticClass:"dialog-text dialog-gpt"},[a("h4",[t._v("领取成功！")]),a("p",[t._v("优惠券已发放到您的账户"),a("br"),t._v("请到“我的优惠券”查看")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:3==t.dialogInfoList[i].dialogStatus,expression:"dialogInfoList[index].dialogStatus==3"}],staticClass:"dialog-text dialog-pt"},[a("p",[t._v("确定放弃领取优惠券吗？")])])]),a("div",{staticClass:"dialog-middle-img"}),a("div",{staticClass:"dialog-btns"},[a("a",{directives:[{name:"show",rawName:"v-show",value:3==t.dialogInfoList[i].dialogStatus,expression:"dialogInfoList[index].dialogStatus==3"}],staticClass:"btn btn-cancel",attrs:{href:"javascript:;"},on:{click:function(e){return t.doGiveUp(i)}}},[t._v("确定放弃")]),a("a",{directives:[{name:"show",rawName:"v-show",value:3==t.dialogInfoList[i].dialogStatus,expression:"dialogInfoList[index].dialogStatus==3"}],staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(e){return t.doGetQuan(i)}}},[t._v("立即领取")]),a("a",{directives:[{name:"show",rawName:"v-show",value:1==t.dialogInfoList[i].dialogStatus,expression:"dialogInfoList[index].dialogStatus==1"}],staticClass:"btn-big",attrs:{href:"javascript:;"},on:{click:function(e){return t.doGetQuan(i)}}},[t._v("立即领取")]),a("a",{directives:[{name:"show",rawName:"v-show",value:2==t.dialogInfoList[i].dialogStatus,expression:"dialogInfoList[index].dialogStatus==2"}],staticClass:"btn-big",attrs:{href:"javascript:;"},on:{click:function(e){return t.goLookQuan(i)}}},[t._v("去查看")])])])])])})),1)]],2):t._e()])},o=[],n=a("11f0"),s={name:"couponActivitysDialog",props:{source:{type:String,default:function(){return""}},sourceId:{type:String,default:function(){return""}},show:{type:Boolean,default:function(){return!1}}},data:function(){return{dialogStatus:0,dialogInfo:{},dialogInfoList:[],dialogStyle:{}}},computed:{dialogShow:function(){return this.dialogInfoList&&this.dialogInfoList.length>0}},created:function(){var t=this;n["a"].couponActivitysInfo({source:this.source,sourceId:this.sourceId}).then((function(e){var a=e.data;a.success&&a.data&&a.data.length>0&&a.data.forEach((function(e){e.coupons&&e.coupons.length&&([1,2,3].includes(+e.targetType)||t.$util.isIhaierApp()||t.$util.isIMaker()||t.$util.isSgRn()||t.$util.isUplus()||t.show)&&(e.dialogStatus=1,t.dialogInfoList.push(e))}))}))},watch:{dialogShow:function(t){var e=this;!0===t&&this.$nextTick((function(){if(e.$refs.dialogMask&&e.$refs.dialog&&e.$refs.dialog[0]){var t=e.$refs.dialogMask.getBoundingClientRect()||{},a=e.$refs.dialog[0].getBoundingClientRect()||{},i=e.$refs.dialog[0].firstElementChild&&e.$refs.dialog[0].firstElementChild.getBoundingClientRect()||{};t.bottom&&a.bottom&&t.bottom<a.bottom&&(e.dialogStyle={paddingTop:t.bottom-(i.height+30*i.height/234)+"px"})}}))}},methods:{touchHandler:function(t,e){return this.dialogInfoList[e].coupons.length<=2?(t.preventDefault(),t.returnValue=!1,!1):(t.returnValue=!0,!0)},dialogCloseFn:function(t){this.handleCloseCouponPop({activityId:this.dialogInfoList[t].id,endTime:this.dialogInfoList[t].endTime}),this.dialogInfoList.splice(t,1)},doGiveUp:function(t){this.handleCloseCouponPop({activityId:this.dialogInfoList[t].id,endTime:this.dialogInfoList[t].endTime}),this.dialogInfoList.splice(t,1)},handleCloseCouponPop:function(t){return new Promise((function(e,a){n["a"].closeCouponPop({activityId:t.activityId,endTime:t.endTime}).then((function(t){var a=t.data;a.success&&e()}))}))},doGetQuan:function(t){var e=this;n["a"].receiveActivitysCoupons({activityId:this.dialogInfoList[t].id}).then((function(a){var i=a.data;console.log(i,"doGetQuan result"),i.success&&(e.dialogInfoList[t].dialogStatus=2)}))},goLookQuan:function(t){this.dialogInfoList.splice(t,1),this.$router.push("/coupon")}}},r=s,c=(a("bd58"),a("2877")),u=Object(c["a"])(r,i,o,!1,null,"4204285e",null);e["a"]=u.exports},b8bd:function(t,e,a){},bd58:function(t,e,a){"use strict";a("e117")},e117:function(t,e,a){}}]);
//# sourceMappingURL=chunk-1330a486.23f9b67d.js.map