(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65fab7c0"],{"0664":function(t,e,n){},"25e9":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{class:{"coupon-value-label":!0,"home-style":t.forHomePage},style:{color:t.textColor}},["FIXED_CASH_COUPON"===t.couponType||"REBATE_COUPON"===t.couponType?n("span",{staticClass:"symbol"},[t._v("￥")]):t._e(),n("span",{staticClass:"integer",style:{fontSize:t.fontSize}},[t._v(t._s(t._f("formatPriceInt")(t.couponDisplayValue)))]),t.withFloat?n("span",{staticClass:"float"},[t._v(t._s(t._f("formatPriceFloat")(t.couponDisplayValue)))]):t._e(),"DISCOUNT_COUPON"===t.couponType?n("span",{staticClass:"sales"},[t._v("折")]):t._e()])])},i=[],r={name:"couponValueLabel",props:{couponValue:{type:String,default:"0"},couponType:{type:String,default:"FIXED_CASH_COUPON"},forHomePage:{type:Boolean,default:!1},maxFontSize:{type:String,default:"0.64"},textColor:{type:String,default:"#ED2856"}},computed:{fontSize:function(){return this.forHomePage?String(this.couponDisplayValue).length<6?"0.40rem":6===String(this.couponDisplayValue).length?"0.38rem":String(this.couponDisplayValue).length>6?"0.32rem":this.maxFontSize+"rem":String(this.couponDisplayValue).length<6?this.maxFontSize+"rem":6===String(this.couponDisplayValue).length?.875*this.maxFontSize+"rem":String(this.couponDisplayValue).length>6?.68*this.maxFontSize+"rem":this.maxFontSize+"rem"},withFloat:function(){var t=this.couponDisplayValue.split(".");return!!(t&&t.length>1&&"00"!==t[1]&&"0"!==t[1])},couponDisplayValue:function(){return"DISCOUNT_COUPON"===this.couponType?String(Number(this.couponValue)/10):this.couponValue}}},c=r,u=(n("4ff6"),n("2877")),a=Object(u["a"])(c,o,i,!1,null,"5a48cfec",null);e["a"]=a.exports},"2ba5":function(t,e,n){},3900:function(t,e,n){},"4ff6":function(t,e,n){"use strict";n("0664")},6978:function(t,e,n){"use strict";n("3900")},"93e0":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",on:{click:function(e){return e.stopPropagation(),t.tooglePopup(!0)}}},[n("div",{staticClass:"title"},[t._v("领券")]),n("div",{staticClass:"center"},[n("ul",t._l(t.couponTitleList,(function(e,o){return n("li",{key:o,staticClass:"voucher-item"},["DISCOUNT_COUPON"===e.couponType?n("span",[t._v(t._s((Number(e.couponValue)/10).toFixed(1))+"折优惠券")]):n("span",[t._v(t._s(t._f("withFloat")(e.couponValue))+"元优惠券")]),n("div",{staticClass:"coupon-border-right"},[n("svg",{staticClass:"icon",attrs:{t:"1594361575575",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3209"}},[n("path",{attrs:{d:"M415.623529 975.811765h60.235295c72.282353 0 132.517647-60.235294 132.517647-132.517647v-204.8h-6.02353c-78.305882 0-138.541176-60.235294-138.541176-132.517647s60.235294-132.517647 132.517647-132.517647h12.047059V180.705882c0-72.282353-60.235294-132.517647-132.517647-132.517647h-60.235295v24.094118h60.235295c60.235294 0 108.423529 48.188235 108.423529 108.423529v162.635294C499.952941 349.364706 439.717647 421.647059 439.717647 505.976471s60.235294 150.588235 144.564706 162.635294V843.294118c0 60.235294-48.188235 108.423529-108.423529 108.423529h-60.235295v24.094118z",fill:"#2283E2","p-id":"3210"}})])]),n("div",{staticClass:"coupon-border-left"},[n("svg",{staticClass:"icon",attrs:{t:"1594263532124",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3312"}},[n("path",{attrs:{d:"M608.376471 951.717647h-60.235295c-60.235294 0-108.423529-48.188235-108.423529-108.423529v-168.658824c84.329412-6.023529 150.588235-78.305882 150.588235-162.635294 0-84.329412-66.258824-156.611765-150.588235-162.635294V180.705882c0-60.235294 48.188235-108.423529 108.423529-108.423529h60.235295V48.188235h-60.235295C475.858824 48.188235 415.623529 108.423529 415.623529 180.705882v192.752942h12.047059c72.282353 0 132.517647 60.235294 132.517647 132.517647 0 72.282353-60.235294 132.517647-138.541176 132.517647H415.623529V843.294118c0 72.282353 60.235294 132.517647 132.517647 132.517647h60.235295v-24.094118z",fill:"#2283E2","p-id":"3313"}})])])])})),0)]),n("div",{staticClass:"right"},[n("img",{staticClass:"more-img",attrs:{src:t.$cdnImageUrl+"/cart/icon-more.png"}})]),t.showCoupon?n("van-popup",{style:{height:"9.96rem",borderRadius:".24rem .24rem 0px 0px",display:"flex",flexDirection:"column",alignItems:"center"},attrs:{position:"bottom"},model:{value:t.showCoupon,callback:function(e){t.showCoupon=e},expression:"showCoupon"}},[n("div",{staticClass:"icon-close",on:{click:function(e){return e.stopPropagation(),t.tooglePopup(!1)}}}),n("div",{staticClass:"popup-title-row"},[n("img",{staticClass:"popup-img",attrs:{src:t.$cdnImageUrl+"/itSolution/icon_solution_title.png"}}),n("div",{staticClass:"popup-title"},[n("strong",{staticStyle:{"font-weight":"bold"}},[t._v("活动介绍：")]),t._v(t._s(t.couponDescription)+" ")])]),n("van-list",{attrs:{finished:t.finished,"finished-text":"","van-clearfix":""},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("van-row",t._l(t.couponList,(function(e,o){return n("van-col",{key:o},[n("coupon-item",{attrs:{"coupon-info":e},on:{updateCoupon:t.onLoad}})],1)})),1)],1)],1):t._e()],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"coupon-item-container"},[n("div",{staticClass:"left-row"},[n("div",{staticClass:"card-tag"}),n("coupon-value-label",{attrs:{textColor:"#fff",maxFontSize:"0.38",couponValue:String(t.couponInfo.couponValue),couponType:String(t.couponInfo.couponType)}}),n("div",{staticClass:"price-des"},[t._v(t._s(t.couponInfo.description||""))])],1),n("div",{staticClass:"right-row"},[n("div",{staticClass:"right-title"},[t._v(" "+t._s(t.couponInfo.couponTemplateName)+" ")]),n("div",{staticClass:"right-second"},[t._v(" "+t._s(("PRODUCT"===t.couponInfo.scope?"单品 ":"")+(t.couponInfo.description||""))+" ")]),n("div",{staticClass:"right-date"},[t.couponInfo.startTime?[t._v(" "+t._s(t._f("formatDateEndOfDay")(t.couponInfo.startTime))+"-"+t._s(t._f("formatDateEndOfDay")(t.couponInfo.endTime))+" ")]:[t._v(" "+t._s(t.couponInfo.validityPeriod)+" ")]],2),"2"===t.couponInfo.displayType||t.isReceived?n("div",{staticClass:"button-use",on:{click:t.useCoupon}},[t._v(" 去使用 ")]):n("div",{staticClass:"button-receive",on:{click:t.receiveCoupon}},[t._v(" 点击领取 ")]),"2"===t.couponInfo.displayType|t.isReceived?n("div",{staticClass:"icon-received"}):t._e()])])},c=[],u=n("c3f5"),a=n("25e9"),s={name:"coupon-item",components:{couponValueLabel:a["a"]},props:{couponInfo:{type:Object,default:function(){}}},data:function(){return{isReceived:!1}},methods:{receiveCoupon:function(){var t=this;Object(u["receiveCoupon"])({activityCode:this.couponInfo.activityCode,couponTemplateCode:this.couponInfo.couponTemplateCode,sourceChannel:this.couponInfo.sourceChannel,streetId:this.$store.getters["getlocationInfo"].townshipId}).then((function(e){e.success?(t.$emit("updateCoupon"),t.$toast("领取成功"),t.isReceived=!0):t.$toast(e.message)}))},useCoupon:function(){this.$router.push("/usablecouponlist?activityCode=".concat(this.couponInfo.activityCode,"&couponTemplateCode=").concat(this.couponInfo.couponTemplateCode,"&couponType=").concat(this.couponInfo.couponType,"&sourceChannel=").concat(this.couponInfo.sourceChannel))}}},l=s,p=(n("6978"),n("2877")),f=Object(p["a"])(l,r,c,!1,null,"5a2a7a70",null),d=f.exports,g=n("d3c8");function b(t){return C(t)||v(t)||h(t)||m()}function m(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(t,e){if(t){if("string"===typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(t,e):void 0}}function v(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function C(t){if(Array.isArray(t))return S(t)}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var O={name:"coupon",props:{soluteId:Number,planCode:{type:String,default:""},couponTitleList:{type:Array,default:function(){return[]}}},components:{couponItem:d},filters:{withFloat:function(t){var e=String(t),n=e.split(".");return n&&n.length>1&&"00"!==n[1]&&"0"!==n[1]?t:n[0]}},data:function(){return{couponList:[],showCoupon:!1,loading:!1,finished:!1,couponDescription:""}},mounted:function(){},methods:{tooglePopup:function(t){console.log("popup-show:",t),this.showCoupon=t},onLoad:function(){var t=this;g["a"].getSolutionCoupons({id:this.soluteId}).then((function(e){e.success&&(t.couponList=b(e.data),t.couponList.map((function(t){t.startTime=t.startTime?t.startTime.split(" ")[0]:"",t.endTime=t.endTime?t.endTime.split(" ")[0]:""})),t.couponList.length&&(t.couponDescription=t.couponList[0].activityDescription),t.loading=!1,t.finished=!0)}))}}},y=O,_=(n("df5e"),Object(p["a"])(y,o,i,!1,null,"fd1bd4f0",null));e["default"]=_.exports},c3f5:function(t,e,n){"use strict";n.r(e),n.d(e,"manage",(function(){return c})),n.d(e,"collectStore",(function(){return u})),n.d(e,"enterprise",(function(){return a})),n.d(e,"getNavigations",(function(){return s})),n.d(e,"getImgCaptcha",(function(){return l})),n.d(e,"getViewCouponCate",(function(){return p})),n.d(e,"getCouponsCenter",(function(){return f})),n.d(e,"receiveCoupon",(function(){return d})),n.d(e,"commonLoadItemNew",(function(){return g})),n.d(e,"getPriceByProductList",(function(){return b})),n.d(e,"wdMarketFiltrate",(function(){return m})),n.d(e,"getNearbyList",(function(){return h})),n.d(e,"getBusinessCustomer",(function(){return v})),n.d(e,"GET_BANNER",(function(){return C})),n.d(e,"getLiveByStoreId",(function(){return S})),n.d(e,"getStoreFlashSale",(function(){return O})),n.d(e,"getCate",(function(){return y})),n.d(e,"getStoreSign",(function(){return _})),n.d(e,"getSelectedModel",(function(){return w})),n.d(e,"getCustomPageModel",(function(){return T})),n.d(e,"getUserCases",(function(){return I})),n.d(e,"getRecommendList",(function(){return j})),n.d(e,"getVRPreviews",(function(){return P})),n.d(e,"getPreSales",(function(){return L})),n.d(e,"getStoreSceneTabs",(function(){return D})),n.d(e,"getStoreScene",(function(){return V})),n.d(e,"getStoreSceneNew",(function(){return N})),n.d(e,"getSubStoreList",(function(){return x})),n.d(e,"getShopPreview",(function(){return R})),n.d(e,"getCustomPagePreview",(function(){return E})),n.d(e,"getStoreSignPreview",(function(){return U})),n.d(e,"getStoreNewProducts",(function(){return F})),n.d(e,"checkPrivateDomain",(function(){return k})),n.d(e,"getSuitList",(function(){return H})),n.d(e,"getSuitImage",(function(){return A})),n.d(e,"getSuitDetail",(function(){return z})),n.d(e,"validateTabOrSpace",(function(){return B})),n.d(e,"checkIdentity",(function(){return $})),n.d(e,"getFindGoods",(function(){return M}));var o=n("bbc2"),i=n("1c03"),r=n("f121"),c=function(t){return Object(i["b"])(o["a"].manage,t)},u=function(t){return Object(i["b"])(o["a"].collectStore,t)},a=function(t){return Object(i["b"])(o["a"].enterprise,t)},s=function(t){return Object(i["b"])(o["a"].getNavigations,t)},l=function(t){return Object(i["b"])(o["a"].getImgCaptcha,t)},p=function(t){return Object(i["b"])(o["a"].getViewCouponCate,t)},f=function(t){return Object(i["b"])(o["a"].getCouponsCenter,t,{},!0)},d=function(t){return Object(i["b"])(o["a"].receiveCoupon,t)},g=function(t){return Object(i["b"])(o["a"].commonLoadItemNew,t,{baseURL:r["a"].SHOST},!0)},b=function(t){return Object(i["b"])(o["a"].getPriceByProductList,t,{baseURL:r["a"].SHOST},!0)},m=function(t){return Object(i["b"])(o["a"].wdMarketFiltrate,t,{baseURL:r["a"].SHOST})},h=function(t){return Object(i["b"])(o["a"].nearbyList,t,{})},v=function(t){return Object(i["b"])(o["a"].getBusinessCustomer,t,{baseURL:r["a"].HOST4})},C=function(t){return Object(i["b"])(o["a"].GET_BANNER,t)},S=function(t){return Object(i["b"])(o["a"].getLiveByStoreId,t)},O=function(t){return Object(i["b"])(o["a"].getStoreFlashSale,t)},y=function(t){return Object(i["b"])(o["a"].getCate,t)},_=function(t){return Object(i["b"])(o["a"].storeSign,t)},w=function(t){return Object(i["b"])(o["a"].storeSelectedModel,t)},T=function(t){return Object(i["b"])(o["a"].getCustomPage,t)},I=function(t){return Object(i["b"])(o["a"].GET_STORE_SCENE,t)},j=function(t){return Object(i["b"])(o["a"].recommendProducts,t)},P=function(t){return Object(i["b"])(o["a"].storeVRPreviewList,t)},L=function(t,e){return e?Object(i["b"])(o["a"].platformPreSale,t):Object(i["c"])("".concat(o["a"].preSaleList,"?storeId=").concat(t.storeId))},D=function(t){return Object(i["b"])(o["a"].sceneTabList,t)},V=function(t){return Object(i["c"])(o["a"].sceneList,t)},N=function(t){return Object(i["b"])(o["a"].sceneListNew,t,{baseURL:r["a"].DHOST})},x=function(t){return Object(i["b"])(o["a"].subStoreList,t)},R=function(t){return Object(i["c"])(o["a"].shopPreview,t,{baseURL:r["a"].STOREHOST})},E=function(t){return Object(i["c"])(o["a"].customPagePreview,t,{baseURL:r["a"].STOREHOST})},U=function(t){return Object(i["b"])(o["a"].storeSignPreview,t,{baseURL:r["a"].STOREHOST})},F=function(t){return Object(i["b"])(o["a"].storeNewProducts,t)},k=function(t){return Object(i["b"])(o["a"].checkPrivateDomain,t,{cancelRepeat:!0})},H=function(t){return Object(i["b"])(o["a"].getShopSuitList,t)},A=function(t){return Object(i["b"])(o["a"].getShopSuitImage,t)},z=function(t){return Object(i["c"])(o["a"].getShopSuitDetail,t,{cancelRepeat:!0})},B=function(t){return Object(i["c"])(o["a"].validateTabOrSpace,t)},$=function(t){return Object(i["b"])(o["a"].checkIdentity,t)},M=function(t){return Object(i["b"])(o["a"].storeFindGoods,t)}},df5e:function(t,e,n){"use strict";n("2ba5")}}]);
//# sourceMappingURL=chunk-65fab7c0.1dbea80b.js.map