(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33299eac"],{5146:function(t,e,n){"use strict";n("5f8c")},"5ada":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shopSuitSearch"},[n("nav-header",{attrs:{leftArrow:!t.$route.query.browerFirstIn}},[t.shareShow?n("div",{staticClass:"share-btn",style:{backgroundImage:"url("+t.$globalIcon.blackShareIcon+")"},attrs:{slot:"right"},on:{click:t.doShare},slot:"right"}):t._e()]),n("div",{staticStyle:{height:".92rem"}}),n("van-search",{ref:"search",class:{"search-fixed":t.isSearch},attrs:{"show-action":t.isSearch,shape:"round",placeholder:"输入成套方案名称或商品名称"},on:{clear:t.clear,focus:t.searchFocus},scopedSlots:t._u([t.isSearch?{key:"left",fn:function(){return[n("div",{staticClass:"shopSuitSearch-search-left"},[n("van-icon",{attrs:{name:"arrow-left"},on:{click:t.back}})],1)]},proxy:!0}:null,t.isSearch?{key:"action",fn:function(){return[n("div",{on:{click:t.onSearch}},[t._v("搜索")])]},proxy:!0}:null],null,!0),model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}),t.shopInfo.titlePic&&!t.isSearch?n("img",{staticClass:"top-img",attrs:{src:t.shopInfo.titlePic}}):t._e(),n("van-list",{staticClass:"shopSuitSearch-list",attrs:{finished:t.finished,finishedText:"~暂无更多数据~","van-clearfix":"","immediate-check":!1},on:{load:t.nextPage},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[t.isSearch?n("div",{staticStyle:{height:".4rem"}}):t._e(),t.showEmpty?[n("div",{staticClass:"shopSuitSearch-empty"},[n("img",{attrs:{src:t.$cdnImageUrl+"/search/noWord.png"}}),n("span",[t._v("换个词试一下")])])]:t._e(),t._l(t.suitList,(function(e,i){return n("div",{key:i,staticClass:"suit-item",on:{click:function(n){return t.goDetail(e)}}},[n("div",{staticClass:"img-row"},t._l(e.detailList,(function(t,e){return n("img",{key:e,staticClass:"img-item",attrs:{src:t.picUrl}})})),0),n("span",{staticClass:"title"},[t._v(" "+t._s(e.packageName)+" ")]),n("div",{staticClass:"price-row"},[n("div",{staticClass:"price-box"},[n("div",{staticClass:"price"},[n("span",{staticClass:"symbol"},[t._v("￥")]),n("span",{staticClass:"price-int"},[t._v(t._s(t._f("formatPriceInt")(t._f("formatPrice")(e.totalPackagePrice))))]),n("span",{staticClass:"price-float"},[t._v(t._s(t._f("formatPriceFloat")(t._f("formatPrice")(e.totalPackagePrice))))])]),n("img",{staticClass:"price-img",attrs:{src:"//cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/shop/icon_pice_tag.png"}})]),n("div",{staticClass:"origin-price"},[n("span",{staticClass:"tag"},[t._v("原价总计:")]),n("span",{staticClass:"symbol"},[t._v("￥")]),n("span",{staticClass:"price-int"},[t._v(t._s(t._f("formatPriceInt")(t._f("formatPrice")(e.totalStorePrice))))]),n("span",{staticClass:"price-float"},[t._v(t._s(t._f("formatPriceFloat")(t._f("formatPrice")(e.totalStorePrice))))])])])])}))],2)],1)},r=[],c=n("e725"),a=n("c3f5"),s=n("f121"),o={name:"shopSuilSearch",components:{NavHeader:c["a"]},data:function(){return{pageNo:1,pageSize:20,finished:!1,loading:!1,suitList:[],searchText:"",showEmpty:!1,isSearch:!1,shareShow:this.$util.isSgRn()||this.$util.isHaierApp(),shopInfo:{titlePic:""}}},computed:{storeId:function(){return this.$route.query.storeId},mId:function(){return localStorage.getItem("mId")}},mounted:function(){var t=this;this.getSuitImage(),this.$globalLoading.open(),this.getSuitList("",1)["finally"]((function(){t.$globalLoading.close()})),this.WeChatSecondShare()},methods:{getSuitList:function(t,e){var n=this;this.pageNo=e;var i={pageNo:e,pageSize:this.pageSize,storeId:this.storeId,keyword:t};return Object(a["getSuitList"])(i).then((function(t){t.success?(n.showEmpty=!1,t.data&&t.data.length>0?1===n.pageNo?n.suitList=t.data:n.suitList=n.suitList.concat(t.data):1===n.pageNo?(n.suitList=[],n.showEmpty=!0):n.finished=!0):(n.suitList=[],n.showEmpty=!0,n.finished=!0)}))["finally"]((function(){n.loading=!1}))},onSearch:function(){var t=this;this.showEmpty=!1,this.pageNo=1,this.getSuitList(this.searchText,1).then((function(){t.finished=!1}))},nextPage:function(){this.searchText&&!this.showEmpty?this.getSuitList(this.searchText,this.pageNo+1):this.isSearch?this.loading=!1:this.getSuitList(this.searchText,this.pageNo+1)},goDetail:function(t){this.$util.isSgRn()?window.postMessage(JSON.stringify({type:"goNewWebview",data:{newUrl:"".concat(s["a"].HOST,"/sgmobile/shopSuitDetail?storeId=").concat(this.storeId,"&packageId=").concat(t.id)}})):this.$router.push("/shopSuitDetail?storeId=".concat(this.storeId,"&packageId=").concat(t.id))},back:function(){this.isSearch=!1,this.getSuitList("",1),this.finished=!1,this.searchText="",document.querySelector("#app-warp").scrollTo(0,0)},clear:function(){this.suitList=[],this.showEmpty=!1,this.pageNo=1,this.finished=!1},getSuitImage:function(){var t=this;Object(a["getSuitImage"])({storeId:this.storeId}).then((function(e){e.success&&e.data&&(t.shopInfo=e.data)}))},searchFocus:function(){this.$nextTick((function(){document.querySelectorAll("input[type='search']")[0].focus()})),this.searchText||(this.isSearch=!0,this.suitList=[],this.finished=!1,this.loading=!1,this.pageNo=1)},doShare:function(){var t=this.$route.query.shareId,e=location.href+"&shareId=".concat(t||this.mId);this.$util.inAppShare({title:"超值套购推荐",desc:"海尔智家商城，海尔家电正品保障",url:e})},WeChatSecondShare:function(){this.$store.dispatch("WeChatSecondShare",{title:"超值套购推荐",desc:"海尔智家商城，海尔家电正品保障"})}}},u=o,h=(n("5146"),n("2877")),f=Object(h["a"])(u,i,r,!1,null,"99d8e382",null);e["default"]=f.exports},"5f8c":function(t,e,n){},c3f5:function(t,e,n){"use strict";n.r(e),n.d(e,"manage",(function(){return a})),n.d(e,"collectStore",(function(){return s})),n.d(e,"enterprise",(function(){return o})),n.d(e,"getNavigations",(function(){return u})),n.d(e,"getImgCaptcha",(function(){return h})),n.d(e,"getViewCouponCate",(function(){return f})),n.d(e,"getCouponsCenter",(function(){return d})),n.d(e,"receiveCoupon",(function(){return l})),n.d(e,"commonLoadItemNew",(function(){return g})),n.d(e,"getPriceByProductList",(function(){return S})),n.d(e,"wdMarketFiltrate",(function(){return b})),n.d(e,"getNearbyList",(function(){return p})),n.d(e,"getBusinessCustomer",(function(){return m})),n.d(e,"GET_BANNER",(function(){return v})),n.d(e,"getLiveByStoreId",(function(){return O})),n.d(e,"getStoreFlashSale",(function(){return w})),n.d(e,"getCate",(function(){return C})),n.d(e,"getStoreSign",(function(){return L})),n.d(e,"getSelectedModel",(function(){return I})),n.d(e,"getCustomPageModel",(function(){return j})),n.d(e,"getUserCases",(function(){return P})),n.d(e,"getRecommendList",(function(){return y})),n.d(e,"getVRPreviews",(function(){return _})),n.d(e,"getPreSales",(function(){return T})),n.d(e,"getStoreSceneTabs",(function(){return k})),n.d(e,"getStoreScene",(function(){return N})),n.d(e,"getStoreSceneNew",(function(){return x})),n.d(e,"getSubStoreList",(function(){return R})),n.d(e,"getShopPreview",(function(){return E})),n.d(e,"getCustomPagePreview",(function(){return $})),n.d(e,"getStoreSignPreview",(function(){return H})),n.d(e,"getStoreNewProducts",(function(){return U})),n.d(e,"checkPrivateDomain",(function(){return F})),n.d(e,"getSuitList",(function(){return D})),n.d(e,"getSuitImage",(function(){return B})),n.d(e,"getSuitDetail",(function(){return A})),n.d(e,"validateTabOrSpace",(function(){return M})),n.d(e,"checkIdentity",(function(){return q})),n.d(e,"getFindGoods",(function(){return G}));var i=n("bbc2"),r=n("1c03"),c=n("f121"),a=function(t){return Object(r["b"])(i["a"].manage,t)},s=function(t){return Object(r["b"])(i["a"].collectStore,t)},o=function(t){return Object(r["b"])(i["a"].enterprise,t)},u=function(t){return Object(r["b"])(i["a"].getNavigations,t)},h=function(t){return Object(r["b"])(i["a"].getImgCaptcha,t)},f=function(t){return Object(r["b"])(i["a"].getViewCouponCate,t)},d=function(t){return Object(r["b"])(i["a"].getCouponsCenter,t,{},!0)},l=function(t){return Object(r["b"])(i["a"].receiveCoupon,t)},g=function(t){return Object(r["b"])(i["a"].commonLoadItemNew,t,{baseURL:c["a"].SHOST},!0)},S=function(t){return Object(r["b"])(i["a"].getPriceByProductList,t,{baseURL:c["a"].SHOST},!0)},b=function(t){return Object(r["b"])(i["a"].wdMarketFiltrate,t,{baseURL:c["a"].SHOST})},p=function(t){return Object(r["b"])(i["a"].nearbyList,t,{})},m=function(t){return Object(r["b"])(i["a"].getBusinessCustomer,t,{baseURL:c["a"].HOST4})},v=function(t){return Object(r["b"])(i["a"].GET_BANNER,t)},O=function(t){return Object(r["b"])(i["a"].getLiveByStoreId,t)},w=function(t){return Object(r["b"])(i["a"].getStoreFlashSale,t)},C=function(t){return Object(r["b"])(i["a"].getCate,t)},L=function(t){return Object(r["b"])(i["a"].storeSign,t)},I=function(t){return Object(r["b"])(i["a"].storeSelectedModel,t)},j=function(t){return Object(r["b"])(i["a"].getCustomPage,t)},P=function(t){return Object(r["b"])(i["a"].GET_STORE_SCENE,t)},y=function(t){return Object(r["b"])(i["a"].recommendProducts,t)},_=function(t){return Object(r["b"])(i["a"].storeVRPreviewList,t)},T=function(t,e){return e?Object(r["b"])(i["a"].platformPreSale,t):Object(r["c"])("".concat(i["a"].preSaleList,"?storeId=").concat(t.storeId))},k=function(t){return Object(r["b"])(i["a"].sceneTabList,t)},N=function(t){return Object(r["c"])(i["a"].sceneList,t)},x=function(t){return Object(r["b"])(i["a"].sceneListNew,t,{baseURL:c["a"].DHOST})},R=function(t){return Object(r["b"])(i["a"].subStoreList,t)},E=function(t){return Object(r["c"])(i["a"].shopPreview,t,{baseURL:c["a"].STOREHOST})},$=function(t){return Object(r["c"])(i["a"].customPagePreview,t,{baseURL:c["a"].STOREHOST})},H=function(t){return Object(r["b"])(i["a"].storeSignPreview,t,{baseURL:c["a"].STOREHOST})},U=function(t){return Object(r["b"])(i["a"].storeNewProducts,t)},F=function(t){return Object(r["b"])(i["a"].checkPrivateDomain,t,{cancelRepeat:!0})},D=function(t){return Object(r["b"])(i["a"].getShopSuitList,t)},B=function(t){return Object(r["b"])(i["a"].getShopSuitImage,t)},A=function(t){return Object(r["c"])(i["a"].getShopSuitDetail,t,{cancelRepeat:!0})},M=function(t){return Object(r["c"])(i["a"].validateTabOrSpace,t)},q=function(t){return Object(r["b"])(i["a"].checkIdentity,t)},G=function(t){return Object(r["b"])(i["a"].storeFindGoods,t)}}}]);
//# sourceMappingURL=chunk-33299eac.579d2207.js.map