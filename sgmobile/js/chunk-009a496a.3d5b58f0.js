(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-009a496a","chunk-1a8266b5"],{"082b":function(e,t,n){},"0980":function(e,t,n){"use strict";n("4b82")},1669:function(e,t,n){"use strict";var a=function(){return n.e("chunk-2b4715e4").then(n.bind(null,"c63d"))};t["a"]={components:{topFeedBack:a},data:function(){return{showToTopFlag:!1,scrollTarget:""}},mounted:function(){this.debouncedAction=this.$util.throttle(this.option,100)},methods:{handleScroll:function(e){this.debouncedAction()},option:function(){var e=this.$refs.toTop.scrollTop;this.showToTopFlag=e>200},hiddenFeedBack:function(){this.showToTopFlag=!1},fnScrollToTop:function(){this.scrollSmoothTo(0)},scrollSmoothTo:function(e){window.requestAnimationFrame||(window.requestAnimationFrame=function(e){return setTimeout(e,17)});var t=document.querySelector(this.scrollTarget),n=t.scrollTop,a=function a(){var r=e-n;n+=r/10,Math.abs(r)<1?t.scrollTo(0,e):(t.scrollTo(0,n),requestAnimationFrame(a))};a()}}}},"30d2":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"want-btn-container",class:{gray:"gray"===e.type,blue:"blue"===e.type,white:"white"===e.type}},[e.isHaierApp?n("div",{staticClass:"want-btn",on:{click:e.toFeedBack}},[n("span",{staticClass:"icon"}),n("span",{staticClass:"text"},[e._v("把你想要的告诉我们")])]):n("div",{staticClass:"want-text"},[n("span",[e._v("没有更多啦~")])])])},r=[],i={props:["type","classList"],data:function(){return{isHaierApp:!1}},created:function(){this.isHaierApp=this.$util.isUplus()},methods:{toFeedBack:function(){this.$store.getters.getLoginStatus?this.$util.openNewWindow("https://uplus.haier.com/uplusapp/problemFeedBack/feedback.html",!0,!1,!1):this.$store.dispatch("doLogin").then((function(e){400===e&&console.log("请求异常")}))}}},c=i,o=(n("eca0"),n("2877")),s=Object(o["a"])(c,a,r,!1,null,"f1f8e376",null);t["a"]=s.exports},"347c":function(e,t,n){},"4b82":function(e,t,n){},"58f3":function(e,t,n){"use strict";n("082b")},"80cc":function(e,t,n){"use strict";n("347c")},"84ba":function(e,t,n){},"8ab0":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"common-empty"},[n("div",{staticClass:"shop-empty"}),n("span",[e._v("暂无相关内容")]),e.isHaierApp?n("want-btn",{attrs:{type:"blue"}}):e._e()],1)},r=[],i=n("30d2"),c={name:"common-empty",components:{wantBtn:i["a"]},data:function(){return{isHaierApp:!1}},created:function(){this.isHaierApp=this.$util.isUplus()}},o=c,s=(n("58f3"),n("2877")),u=Object(s["a"])(o,a,r,!1,null,"48f37b06",null);t["default"]=u.exports},a73f:function(e,t,n){"use strict";var a=function(e,t){var n=t._c;return t.props.nums>0?n("div",{staticClass:"m-skeleton",style:{"z-index":t.props.zIndex||0}},[n("div",{style:{background:t.props.bgColor,height:t.props.fheight}}),t._l(t.props.nums-1,(function(e){return n("div",{key:e,style:{background:t.props.bgColor,height:t.props.iheight}})}))],2):t._e()},r=[],i=(n("80cc"),n("2877")),c={},o=Object(i["a"])(c,a,r,!0,null,null,null);t["a"]=o.exports},af51:function(e,t,n){"use strict";n("84ba")},c3f5:function(e,t,n){"use strict";n.r(t),n.d(t,"manage",(function(){return c})),n.d(t,"collectStore",(function(){return o})),n.d(t,"enterprise",(function(){return s})),n.d(t,"getNavigations",(function(){return u})),n.d(t,"getImgCaptcha",(function(){return d})),n.d(t,"getViewCouponCate",(function(){return l})),n.d(t,"getCouponsCenter",(function(){return b})),n.d(t,"receiveCoupon",(function(){return f})),n.d(t,"commonLoadItemNew",(function(){return p})),n.d(t,"getPriceByProductList",(function(){return h})),n.d(t,"wdMarketFiltrate",(function(){return g})),n.d(t,"getNearbyList",(function(){return m})),n.d(t,"getBusinessCustomer",(function(){return S})),n.d(t,"GET_BANNER",(function(){return v})),n.d(t,"getLiveByStoreId",(function(){return O})),n.d(t,"getStoreFlashSale",(function(){return I})),n.d(t,"getCate",(function(){return C})),n.d(t,"getStoreSign",(function(){return y})),n.d(t,"getSelectedModel",(function(){return w})),n.d(t,"getCustomPageModel",(function(){return T})),n.d(t,"getUserCases",(function(){return j})),n.d(t,"getRecommendList",(function(){return k})),n.d(t,"getVRPreviews",(function(){return L})),n.d(t,"getPreSales",(function(){return N})),n.d(t,"getStoreSceneTabs",(function(){return P})),n.d(t,"getStoreScene",(function(){return _})),n.d(t,"getStoreSceneNew",(function(){return x})),n.d(t,"getSubStoreList",(function(){return A})),n.d(t,"getShopPreview",(function(){return H})),n.d(t,"getCustomPagePreview",(function(){return $})),n.d(t,"getStoreSignPreview",(function(){return E})),n.d(t,"getStoreNewProducts",(function(){return F})),n.d(t,"checkPrivateDomain",(function(){return R})),n.d(t,"getSuitList",(function(){return B})),n.d(t,"getSuitImage",(function(){return U})),n.d(t,"getSuitDetail",(function(){return D})),n.d(t,"validateTabOrSpace",(function(){return M})),n.d(t,"checkIdentity",(function(){return q})),n.d(t,"getFindGoods",(function(){return G}));var a=n("bbc2"),r=n("1c03"),i=n("f121"),c=function(e){return Object(r["b"])(a["a"].manage,e)},o=function(e){return Object(r["b"])(a["a"].collectStore,e)},s=function(e){return Object(r["b"])(a["a"].enterprise,e)},u=function(e){return Object(r["b"])(a["a"].getNavigations,e)},d=function(e){return Object(r["b"])(a["a"].getImgCaptcha,e)},l=function(e){return Object(r["b"])(a["a"].getViewCouponCate,e)},b=function(e){return Object(r["b"])(a["a"].getCouponsCenter,e,{},!0)},f=function(e){return Object(r["b"])(a["a"].receiveCoupon,e)},p=function(e){return Object(r["b"])(a["a"].commonLoadItemNew,e,{baseURL:i["a"].SHOST},!0)},h=function(e){return Object(r["b"])(a["a"].getPriceByProductList,e,{baseURL:i["a"].SHOST},!0)},g=function(e){return Object(r["b"])(a["a"].wdMarketFiltrate,e,{baseURL:i["a"].SHOST})},m=function(e){return Object(r["b"])(a["a"].nearbyList,e,{})},S=function(e){return Object(r["b"])(a["a"].getBusinessCustomer,e,{baseURL:i["a"].HOST4})},v=function(e){return Object(r["b"])(a["a"].GET_BANNER,e)},O=function(e){return Object(r["b"])(a["a"].getLiveByStoreId,e)},I=function(e){return Object(r["b"])(a["a"].getStoreFlashSale,e)},C=function(e){return Object(r["b"])(a["a"].getCate,e)},y=function(e){return Object(r["b"])(a["a"].storeSign,e)},w=function(e){return Object(r["b"])(a["a"].storeSelectedModel,e)},T=function(e){return Object(r["b"])(a["a"].getCustomPage,e)},j=function(e){return Object(r["b"])(a["a"].GET_STORE_SCENE,e)},k=function(e){return Object(r["b"])(a["a"].recommendProducts,e)},L=function(e){return Object(r["b"])(a["a"].storeVRPreviewList,e)},N=function(e,t){return t?Object(r["b"])(a["a"].platformPreSale,e):Object(r["c"])("".concat(a["a"].preSaleList,"?storeId=").concat(e.storeId))},P=function(e){return Object(r["b"])(a["a"].sceneTabList,e)},_=function(e){return Object(r["c"])(a["a"].sceneList,e)},x=function(e){return Object(r["b"])(a["a"].sceneListNew,e,{baseURL:i["a"].DHOST})},A=function(e){return Object(r["b"])(a["a"].subStoreList,e)},H=function(e){return Object(r["c"])(a["a"].shopPreview,e,{baseURL:i["a"].STOREHOST})},$=function(e){return Object(r["c"])(a["a"].customPagePreview,e,{baseURL:i["a"].STOREHOST})},E=function(e){return Object(r["b"])(a["a"].storeSignPreview,e,{baseURL:i["a"].STOREHOST})},F=function(e){return Object(r["b"])(a["a"].storeNewProducts,e)},R=function(e){return Object(r["b"])(a["a"].checkPrivateDomain,e,{cancelRepeat:!0})},B=function(e){return Object(r["b"])(a["a"].getShopSuitList,e)},U=function(e){return Object(r["b"])(a["a"].getShopSuitImage,e)},D=function(e){return Object(r["c"])(a["a"].getShopSuitDetail,e,{cancelRepeat:!0})},M=function(e){return Object(r["c"])(a["a"].validateTabOrSpace,e)},q=function(e){return Object(r["b"])(a["a"].checkIdentity,e)},G=function(e){return Object(r["b"])(a["a"].storeFindGoods,e)}},d4fe:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"toTop",staticClass:"scene",attrs:{id:"scene"},on:{scroll:e.handleScroll}},[e.skeletonLoading?n("skeleton",{attrs:{nums:3}}):n("div",[n("Header",{attrs:{leftArrow:!e.$route.query.browerFirstIn}},[e.showShare?n("div",{staticClass:"share-btn",style:{backgroundImage:"url("+e.$globalIcon.blackShareIcon+")"},attrs:{slot:"right"},on:{click:e.doShare},slot:"right"}):e._e()]),n("div",{ref:"sceneComponent",staticClass:"scene-component"},[n("van-sticky",{attrs:{"offset-top":".92rem"}},[e.tabNeed.length?n("div",{staticClass:"program-tab",staticStyle:{"padding-left":".24rem"}},e._l(e.tabNeed,(function(t,a){return n("span",{key:t.tabId+a,class:{active:a==e.curNeedIndex,"program-tab--disable":!(!t.tabId||e.isSpace)&&!e.tabNeedCheck.includes(t.tabId)},on:{click:function(n){e.changeTab(t.tabId,a,1,!(!t.tabId||e.isSpace)&&!e.tabNeedCheck.includes(t.tabId))}}},[e._v(e._s(t.tabName))])})),0):e._e(),e.tabSpace.length?n("div",{staticClass:"program-tab",staticStyle:{"padding-left":".24rem"}},e._l(e.tabSpace,(function(t,a){return n("span",{key:t.spaceCode+a,class:{active:a==e.curSpaceIndex,"program-tab--disable":!(!t.spaceCode||e.isTab)&&!e.tabSpaceCheck.includes(t.spaceCode)},on:{click:function(n){e.changeTab(t.spaceCode,a,2,!(!t.spaceCode||e.isTab)&&!e.tabSpaceCheck.includes(t.spaceCode))}}},[e._v(e._s(t.spaceName))])})),0):e._e()]),n("div",{staticStyle:{height:".92rem"}}),n("van-list",{attrs:{"immediate-check":!1,finished:e.finished,offset:10,"van-clearfix":""},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[n("div",{staticClass:"sence-item-warp"},e._l(e.sceneList,(function(t,a){return n("div",{key:a,staticClass:"program-product-item",on:{click:function(n){return e.goPage(t.planDetailsRelativeUrl,!1,!0)}}},[n("div",{staticClass:"program-product-img"},[t.hasVideo?e._e():n("div",{staticClass:"program-play"},[n("span")]),n("vanImg",{attrs:{src:e._f("imageToHttps")(t.planThumbImg)}})],1),n("p",[e._v(e._s(t.salesHighlights))])])})),0)]),e.finished&&0!==e.sceneList.length?n("div",{staticClass:"no-more"},[e._v("没有更多啦~")]):e._e(),e.finished&&0===e.sceneList.length?n("common-empty"):e._e(),n("top-feedBack",{attrs:{isShow:e.showToTopFlag},on:{hiddenFeedBack:e.hiddenFeedBack,toTop:e.fnScrollToTop}})],1)],1)],1)},r=[],i=n("a73f"),c=n("e725"),o=n("2f62"),s=n("c3f5"),u=n("8ab0"),d=n("1669");function l(e){return h(e)||p(e)||f(e)||b()}function b(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){if(e){if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function p(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function h(e){if(Array.isArray(e))return g(e)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O={mixins:[d["a"]],components:{skeleton:i["a"],Header:c["a"],commonEmpty:u["default"]},data:function(){return{skeletonLoading:!0,isEdit:!1,active:0,detailList:[],data:{data:{tabs:[]}},testData:{},storeId:"",autoFold:!1,liveIds:[],liveInfo:{},showShare:this.$util.isHaierApp()||this.$util.isSgRn(),loading:!0,finished:!1,tabNeed:[],tabSpace:[],sceneList:[],curNeedIndex:0,curSpaceIndex:0,pageIndex:1,tabSpaceCheck:[],tabNeedCheck:[],isSpace:!0,isTab:!0,tabNeedCheckAll:[],tabSpaceCheckAll:[],scrollTarget:"#scene"}},created:function(){this.storeId=this.$route.query.storeId,this.storeId&&(this.$route.meta.title="推荐智慧场景",document.title="推荐智慧场景"),console.log(this.title),this.showShare=(this.$util.isHaierApp()||this.$util.isSgRn())&&this.storeId},mounted:function(){var e=this;this.getTabs(),this.$nextTick((function(t){var n=e.getBrowserInterfaceSize();document.getElementById("scene").style.height=n.pageHeight+1+"px"}))},computed:S({},Object(o["d"])(["mId"])),methods:{getBrowserInterfaceSize:function(){var e=window.innerWidth,t=window.innerHeight;return"number"!==typeof e&&("CSS1Compat"===document.compatMode?(e=document.documentElement.clientWidth,t=document.documentElement.clientHeight):(e=document.body.clientWidth,t=window.body.clientHeight)),{pageWidth:e,pageHeight:t}},programLiveInfo:function(){},doShare:function(){var e=-1!==location.href.indexOf("?")?location.href+"&shareId="+this.mId:location.href+"?shareId="+this.mId;console.log("分享Url:",e),this.$util.inAppShare({url:e})},onLoad:function(){this.pageIndex++,this.getSceneList()},changeTab:function(e,t,n,a){a||(1===n?(this.curNeedIndex!==t&&this.validateTabOrSpace({tabId:e,isTab:!e}),this.curNeedIndex=t):(this.curSpaceIndex!==t&&this.validateTabOrSpace({spaceCode:e,isSpace:!e}),this.curSpaceIndex=t),this.pageIndex=1,this.finished=!1,this.loading=!0,this.getSceneList())},getTabs:function(){var e=this;Object(s["getStoreSceneTabs"])({storeId:this.storeId}).then((function(t){t.success?(e.tabNeed=t.data.tab||[],e.tabSpace=t.data.space||[],e.tabNeed.length&&(e.tabNeed.unshift({tabId:"",tabName:"需求"}),e.tabNeedCheck=e.tabNeedCheckAll=e.tabNeed.map((function(e){return e.tabId}))),e.tabSpace.length&&(e.tabSpace.unshift({spaceCode:"",spaceName:"空间"}),e.tabSpaceCheck=e.tabSpaceCheckAll=e.tabSpace.map((function(e){return e.spaceCode}))),e.tabNeed.length||e.tabSpace.length?e.getSceneList():(e.loading=!1,e.finished=!0)):(e.loading=!1,e.finished=!0,e.$toast(t.message||"获取数据失败，请稍后重试"))}))},getSceneList:function(){var e=this,t={currentPage:this.pageIndex,pageNum:10,tabId:0===this.curNeedIndex?"":this.tabNeed[this.curNeedIndex].tabId,spaceCode:0===this.curSpaceIndex?"":this.tabSpace[this.curSpaceIndex].spaceCode,storeId:this.storeId};Object(s["getStoreScene"])(t).then((function(t){console.log("场景列表：",t),e.skeletonLoading=!1,e.loading=!1,t.success?(1===e.pageIndex&&(e.sceneList=[]),e.pageIndex>1?e.sceneList=[].concat(l(e.sceneList),l(t.data)):e.sceneList=t.data,t.data.length<10&&(e.loading=!1,e.finished=!0)):(e.finished=!0,e.$toast(t.message||"获取数据失败，请稍后重试"))}))},goPage:function(e){var t=this.storeId?"".concat(e,"&storeId=").concat(this.storeId):e;if(-1!==t.indexOf("http")){var n=t.split("/sgmobile")[1];console.log("url1:","".concat(n)),this.$router.push("".concat(n))}else this.$router.push("".concat(t)),console.log("url2:",t)},validateTabOrSpace:function(e){var t=this,n=e.spaceCode,a=e.tabId,r=e.isSpace,i=e.isTab;Object(s["validateTabOrSpace"])({storeId:this.storeId,spaceCode:n||"",tabId:a||""}).then((function(e){t.isSpace=!1,t.isTab=!1,n?t.tabNeedCheck=e.data.tabs:a?t.tabSpaceCheck=e.data.spaces:r?(t.isSpace=!0,t.tabNeedCheck=t.tabNeedCheckAll):i&&(t.isTab=!0,t.tabSpaceCheck=t.tabSpaceCheckAll)}))}}},I=O,C=(n("af51"),n("0980"),n("2877")),y=Object(C["a"])(I,a,r,!1,null,"39c9f72c",null);t["default"]=y.exports},da31:function(e,t,n){},eca0:function(e,t,n){"use strict";n("da31")}}]);
//# sourceMappingURL=chunk-009a496a.3d5b58f0.js.map