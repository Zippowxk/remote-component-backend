(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-342c61ab","chunk-0183282b","chunk-2b4715e4","productList","chunk-578a99a6"],{1439:function(t,e,i){"use strict";i("3c9b")},"1c43":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"guess-you-lick"},[t._m(0),i("div",{staticClass:"guess-box"},[i("public-product-list",{attrs:{productList:t.guessList,switchStyle:!0}})],1),t.isMore?i("div",{staticClass:"no-more"},[t._v(" 没有更多啦~ ")]):i("div",{staticClass:"station-more"})])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"guess-title"},[i("div",{staticClass:"line-left"}),i("span",{staticClass:"like-icon"}),t._v("猜你喜欢"),i("div",{staticClass:"line-right"})])}],c=i("99fe"),n=i("e569"),a={name:"guessYouLick",props:{more:{type:Boolean,default:!1}},components:{publicProductList:n["default"]},data:function(){return{isMore:this.more,guessList:[],activityTabs:[]}},filters:{toFixedTwo:function(t){var e=t?t.toFixed(2):"0.00";return e}},watch:{more:{handler:function(t,e){this.isMore=t}}},created:function(){this.getSelectBoxTagList()},mounted:function(){var t=this,e=this.$store.state.locationInfo;Object(c["h"])({provinceId:e.provinceId,cityId:e.cityId,districtId:e.districtId,streetId:e.townshipId,storeId:sessionStorage.getItem("shareUserId")||"",firstPage:"",productIds:""}).then((function(e){e.success?(console.log("guesslike",e),t.guessList=e.data.productList.slice("0","6"),t.guessList.forEach((function(e){e.finalPrice=e.lowestFlashPrice||e.finalPrice,e.isLowestFlash=!!e.lowestFlashPrice,t.activityTabs.forEach((function(t){t.id===e.actTagId&&(e.productAct=t.tagName,e.productActTerm=t.actDate)}))}))):t.$toast(e.message)}))},methods:{getSelectBoxTagList:function(){var t=this;Object(c["d"])().then((function(e){var i=e.data;t.activityTabs=i||[]}))},toGoodsDetail:function(t){var e=this;e.$router.push({path:"/goodsDetail?productId=".concat(t)})}}},l=a,r=(i("f2e9"),i("2877")),u=Object(r["a"])(l,s,o,!1,null,"7008c876",null);e["default"]=u.exports},"23d3":function(t,e,i){"use strict";var s=i("c63d");e["a"]={components:{topFeedBack:s["default"]},data:function(){return{showToTopFlag:!1}},activated:function(){this.fnScroll()},beforeRouteLeave:function(t,e,i){document.getElementById("app-warp").removeEventListener("scroll",this.addEventScrollFn),i()},beforeMount:function(){this.debouncedAction=this.$util.throttle(this.option,100)},methods:{fnScrollToTop:function(){this.scrollSmoothTo(0)},hiddenFeedBack:function(){this.showToTopFlag=!1},scrollSmoothTo:function(t){console.log("#app-warp scroll"),window.requestAnimationFrame||(window.requestAnimationFrame=function(t){return setTimeout(t,17)});var e=document.querySelector("#app-warp"),i=e.scrollTop;console.log(i,"scrollTop");var s=function s(){var o=t-i;i+=o/10,Math.abs(o)<1?e.scrollTo(0,t):(e.scrollTo(0,i),requestAnimationFrame(s))};s()},fnScroll:function(){document.getElementById("app-warp").addEventListener("scroll",this.addEventScrollFn)},addEventScrollFn:function(t){this.debouncedAction(t)},option:function(t){var e=t.target.scrollTop;this.showToTopFlag=e>200}}}},2880:function(t,e,i){},3237:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"toTop",staticClass:"content"},[i("Header",{scopedSlots:t._u([{key:"title",fn:function(){return[i("div",{staticClass:"tab-container"},[i("div",{staticClass:"goods",class:"0"===t.status&&"checked",attrs:{id:"0"},on:{click:t.switchTabChange}},[t._v("商品")]),i("div",{staticClass:"shops",class:"1"===t.status&&"checked",attrs:{id:"1"},on:{click:t.switchTabChange}},[t._v("店铺")])])]},proxy:!0},"0"===t.status&&t.data.commodityList.length>0?{key:"right",fn:function(){return[t.isEdit?i("div",{key:"finish",staticClass:"cert_right_btn",on:{click:function(e){t.isEdit=!1}}},[t._v("完成")]):i("div",{key:"edit",staticClass:"cert_right_btn",on:{click:function(e){t.isEdit=!0}}},[t._v("管理")])]},proxy:!0}:null],null,!0)}),"0"===t.status?i("commodity-filter",{attrs:{parentData:t.stockNumber},on:{layoutChange:t.layoutChange,chooseStock:t.chooseStock}}):t._e(),t.skeletonLoading?i("skeleton",{attrs:{nums:3}}):i("van-pull-refresh",{on:{refresh:t.onRefresh},scopedSlots:t._u([{key:"pulling",fn:function(){return[i("refreshLoading",{attrs:{text:"下拉刷新"}})]},proxy:!0},{key:"loosing",fn:function(){return[i("refreshLoading",{attrs:{text:"下拉刷新"}})]},proxy:!0},{key:"loading",fn:function(){return[i("refreshLoading",{attrs:{text:"加载中"}})]},proxy:!0},{key:"success",fn:function(){return[i("refreshLoading",{attrs:{text:"加载完成"}})]},proxy:!0}]),model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[i("commodity-list",{directives:[{name:"show",rawName:"v-show",value:"0"===t.status,expression:"status === '0'"}],attrs:{parentData:t.data,isNoData:!t.isLoading&&!t.loading,canCheck:t.isEdit,layout:t.layoutType},on:{cancelCollectionBack:t.cancelCollection}}),i("div",{directives:[{name:"show",rawName:"v-show",value:"1"===t.status,expression:"status === '1'"}],staticClass:"shop-content"},[i("van-list",{attrs:{finished:t.finished,finishedText:t.data.shopList.length>0?"没有更多啦~":"","van-clearfix":"","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("shop-list",{attrs:{parentData:t.data,isNoData:!t.isLoading&&!t.loading},on:{cancelShopBack:t.cancelShop}})],1)],1)],1),t.isEdit&&"0"===t.status?i("div",{staticClass:"bottom-option"},[i("div",{staticClass:"select-all"},[i("common-checkbox",{staticClass:"left",attrs:{width:"18px",height:"18px"},on:{toggleCheck:t.toggleSelectAll},model:{value:t.selectAllStatus,callback:function(e){t.selectAllStatus=e},expression:"selectAllStatus"}}),i("span",[t._v("全选")])],1),i("div",{staticClass:"delete-all"},[i("span",{staticClass:"delete-btn",on:{click:t.deleteMulti}},[t._v("删除")])])]):t._e(),i("top-feedBack",{attrs:{isShow:t.showToTopFlag},on:{hiddenFeedBack:t.hiddenFeedBack,toTop:t.fnScrollToTop}})],1)},o=[],c=(i("ab71"),i("58e6")),n=(i("2994"),i("2bdd")),a=(i("e7e5"),i("d399")),l=i("6d84"),r=i("a73f"),u=i("23d3"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"commodity-height"},[i("div",{staticClass:"commodity-block"},[i("public-product-list",{attrs:{productList:t.parentData.commodityList,switchStyle:t.layout,collection:!0,canCheck:t.canCheck},on:{deleteCollection:t.cancelCollections}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:0===t.parentData.commodityList.length&&t.isNoData,expression:"parentData.commodityList.length === 0 && isNoData"}],staticClass:"no-data"},[i("img",{attrs:{src:t._f("imageToHttps")(t.$cdnImageUrl+"/personalCenter/new_collect.png"),alt:""}}),i("div",[t._v(" 暂无收藏 ")])]),i("guess-you-lick",{attrs:{more:0!==t.parentData.commodityList.length}})],1)},h=[],p=(i("4467"),i("c36e")),f=i("2b0e"),m=i("1c43"),g=i("e569");f["a"].use({SwipeCell:p["a"]});var k={name:"collectionList",props:{parentData:{type:null,default:function(){return{}}},canCheck:{type:Boolean,default:!1},layout:{type:Boolean,default:!1},isNoData:{type:null,default:function(){return{}}}},data:function(){return{}},onLoad:function(){},components:{guessYouLick:m["default"],publicProductList:g["default"]},methods:{log:function(){console.log("parentData"),console.log(this.parentData)},cancelCollections:function(t){this.$emit("cancelCollectionBack",t)},toGoodsDetail:function(t){this.$router.push({path:"/goodsDetail?productId=".concat(t)})}}},v=k,b=(i("dee6"),i("2877")),y=Object(b["a"])(v,d,h,!1,null,"65ddb88a",null),S=y.exports,C=i("d3c8"),L=i("e725"),w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"filter-container",class:{radius:!t.dissountPop&&!t.stockPop}},[i("div",{staticClass:"left"},[i("ul",[i("li",{class:{"filter-active":!0},on:{click:function(e){return t.reset()}}},[i("div",{staticClass:"text"},[t._v("默认")]),i("div",{staticClass:"icon"})]),i("li",{class:{"filter-active":"stock"===t.currentFilter},on:{click:function(e){return t.changeFilter("stock")}}},[i("div",{staticClass:"text"},[t._v("库存")]),t._m(0)]),i("li",[i("div",{staticClass:"layoutImg",on:{click:t.layoutChange}},[t.layoutType?i("img",{attrs:{alt:"",src:t._f("imageToHttps")(t.$cdnImageUrl+"/search/layout_new.png")}}):i("img",{attrs:{alt:"",src:t._f("imageToHttps")(t.$cdnImageUrl+"/search/layoutSingle_new.png")}})])])])]),i("common-popup",{on:{bgClicked:t.bgClicked},model:{value:t.dissountPop,callback:function(e){t.dissountPop=e},expression:"dissountPop"}},[i("div",{staticClass:"filter-item-container"},[i("ul",[i("li",{class:{item:!0,"item-active":"全部"===t.dissountItemSelect},on:{click:function(e){return t.choosedissount("全部")}}},[i("span",{staticClass:"checked-icon"}),t._v("全部(139)")]),i("li",{class:{item:!0,"item-active":"有优惠券"===t.dissountItemSelect},on:{click:function(e){return t.choosedissount("有优惠券")}}},[i("span",{staticClass:"checked-icon"}),t._v("有优惠券(68)")]),i("li",{class:{item:!0,"item-active":"无优惠券"===t.dissountItemSelect},on:{click:function(e){return t.choosedissount("无优惠券")}}},[i("span",{staticClass:"checked-icon"}),t._v("无优惠券(71)")])])])]),i("common-popup",{on:{bgClicked:t.bgClicked},model:{value:t.stockPop,callback:function(e){t.stockPop=e},expression:"stockPop"}},[i("div",{staticClass:"filter-item-container"},[i("ul",[i("li",{class:{item:!0,"item-active":"全部"===t.stockItemSelect},on:{click:function(e){return t.chooseStock("全部")}}},[i("span",{staticClass:"checked-icon"}),t._v("全部("+t._s(t.parentData.allStockNum)+")")]),i("li",{class:{item:!0,"item-active":"有货"===t.stockItemSelect},on:{click:function(e){return t.chooseStock("有货")}}},[i("span",{staticClass:"checked-icon"}),t._v("有货("+t._s(t.parentData.hasStockNum)+")")]),i("li",{class:{item:!0,"item-active":"无货"===t.stockItemSelect},on:{click:function(e){return t.chooseStock("无货")}}},[i("span",{staticClass:"checked-icon"}),t._v("无货("+t._s(t.parentData.noStockNum)+")")]),i("li",{class:{item:!0,"item-active":"预订"===t.stockItemSelect},on:{click:function(e){return t.chooseStock("预订")}}},[i("span",{staticClass:"checked-icon"}),t._v("预订("+t._s(t.parentData.preStockNum)+")")])])])])],1)},T=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icon"},[i("span",{staticClass:"icon-down"})])}],_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"popup-container"},[i("div",{staticClass:"popup",on:{click:t.popupClick}},[i("div",{staticClass:"popup-content"},[t._t("default")],2)])])},I=[],x={name:"commonPopup",model:{prop:"isShow",event:"changeShow"},props:{isShow:{type:Boolean,default:!1}},data:function(){return{}},methods:{popupClick:function(t){"popup-content"!==t.target.className&&"item item-active"!==t.target.className&&"filter-item-container"!==t.target.className&&this.$emit("bgClicked")}}},O=x,N=(i("58cf"),Object(b["a"])(O,_,I,!1,null,"b3266116",null)),P=N.exports,F={name:"commodityFilter",components:{commonPopup:P},props:{parentData:{type:null,default:function(){return{}}}},data:function(){return{currentFilter:"default",layoutType:!1,dissountPop:!1,stockPop:!1,dissountItemSelect:"全部",stockItemSelect:"全部"}},methods:{layoutChange:function(){this.layoutType=!this.layoutType,this.stockPop=!1,this.$emit("layoutChange")},choosedissount:function(t){this.dissountItemSelect=t},chooseStock:function(t){this.stockItemSelect=t,this.stockPop=!1,this.$emit("chooseStock",t)},reset:function(){this.stockItemSelect="全部",this.stockPop=!1,this.$emit("chooseStock","全部")},changeFilter:function(t){switch(t){case"dissount":"dissount"===this.currentFilter?this.currentFilter="":this.currentFilter="dissount",this.stockPop=!1,this.dissountPop=!this.dissountPop;break;case"stock":"stock"===this.currentFilter?this.currentFilter="":this.currentFilter="stock",this.dissountPop=!1,this.stockPop=!this.stockPop;break}},bgClicked:function(){this.dissountPop=!1,this.stockPop=!1,this.currentFilter=""}}},$=F,j=(i("cdc6"),Object(b["a"])($,w,T,!1,null,"ca3cba3c",null)),E=j.exports,B=i("2f62");function D(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function A(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?D(Object(i),!0).forEach((function(e){H(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):D(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function H(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var U=function(){return i.e("chunk-14436282").then(i.bind(null,"5a10"))},R=function(){return i.e("chunk-079cb250").then(i.bind(null,"d7a6"))};f["a"].use({Toast:a["a"],List:n["a"],PullRefresh:c["a"]});var z={name:"myCollectionIndex",mixins:[u["a"]],components:{skeleton:r["a"],refreshLoading:R,shopList:U,Header:L["a"],commodityList:S,commonCheckbox:l["a"],commodityFilter:E},data:function(){return{skeletonLoading:!0,error:!1,loading:!1,finished:!1,status:"0",pageIndex:0,pageSize:10,isLoading:!1,isEdit:!1,selectAllStatus:!1,layoutType:!1,stockType:0,activityTabs:[],stockNumber:{hasStockNum:0,noStockNum:0,preStockNum:0,allStockNum:0},data:{channelId:1,commodityList:[],shopList:[]},windowHeight:0,windowWidth:0}},computed:A(A({},Object(B["d"])({location:"getlocationInfo"})),{},{shareId:function(){return sessionStorage.getItem("shareUserId")||""}}),watch:{"data.commodityList":{handler:function(t){this.selectAllStatus=this.data.commodityList.every((function(t){return!0===t.isCheckedGood}))},immediate:!0,deep:!0}},created:function(){},activated:function(){var t=this,e=this;e.pageIndex=0,e.$util.isHaierApp()?this.$store.state.isLogin?(e.isLoading=!0,e.data.commodityList=[],e.data.shopList=[],e.getList()):this.$store.dispatch("handleUpAuth").then((function(i){i?(e.isLoading=!0,e.data.commodityList=[],e.data.shopList=[],e.getList()):t.$store.dispatch("doLogin")})):(e.isLoading=!0,e.data.commodityList=[],e.data.shopList=[],e.getList())},methods:{layoutChange:function(){this.layoutType=!this.layoutType},chooseStock:function(t){switch(console.log("chooseStock:",t),t){case"全部":this.stockType=0;break;case"有货":this.stockType=1;break;case"无货":this.stockType=3;break;case"预订":this.stockType=2;break}this.getList()},toggleSelectAll:function(){var t=this;this.data.commodityList.forEach((function(e){t.$set(e,"isCheckedGood",t.selectAllStatus)}))},cancelCollection:function(t){var e=this,i={sku:t.sku};C["a"].cancelProductCollection(i).then((function(t){var i=t.data;i.success?(e.isLoading=!0,e.onRefresh()):a["a"].fail(i.message)}))},cancelShop:function(t){console.log("item",t);var e=this,i={collectId:t.collectId,type:1};C["a"].collectStore(i).then((function(t){var i=t.data;i.success?(e.isLoading=!0,e.onRefresh()):a["a"].fail(i.message)}))},onRefresh:function(){var t=this;t.pageIndex=0,t.onLoad()},onLoad:function(){var t=this;t.getList()},getList:function(){var t=this,e=this;if("0"===e.status){var i={shareId:this.shareId,channelId:e.data.channelId,cityId:e.location.cityId,provinceId:e.location.provinceId,districtId:e.location.districtId,streetId:e.location.townshipId,stockType:this.stockType};C["a"].myCollectionList(i).then((function(i){var s=i.data;t.skeletonLoading=!1,a["a"].clear(),s.success?(t.stockNumber.hasStockNum=s.data.hasStockNum,t.stockNumber.noStockNum=s.data.noStockNum,t.stockNumber.preStockNum=s.data.preStockNum,t.stockNumber.allStockNum=Number(t.stockNumber.hasStockNum)+Number(t.stockNumber.noStockNum)+Number(t.stockNumber.preStockNum),e.data.commodityList=s.data.productsList||[],e.data.commodityList.forEach((function(e){e.finalPrice=e.lowestFlashPrice||e.finalPrice,e.isLowestFlash=!!e.lowestFlashPrice,t.activityTabs.forEach((function(t){t.id===e.actTagId&&(e.productActNew=t.tagName,e.productActTerm="",e.hasTag=!0)}))})),e.finished=!1,e.loading=!1,e.isLoading&&(e.isLoading=!1)):a["a"].fail(s.message)}))}else{e.pageIndex=e.pageIndex+1;var s={page:e.pageIndex,pageSize:e.pageSize,type:1};C["a"].storeCollectionList(s).then((function(i){var s=i.data;t.skeletonLoading=!1,a["a"].clear(),s.success?(e.isLoading&&(e.data.shopList=[],e.isLoading=!1),e.data.shopList=e.data.shopList.concat(s.data),e.finished=!1,e.loading=!1,e.finished=!1,(0===s.data.length||s.totalCount<e.pageSize)&&(e.finished=!0),console.log(e.isLoading,e.finished)):a["a"].fail(s.message)}))}},switchTabChange:function(t){var e=t.target.id,i=this;i.status=e,i.isLoading=!0,"1"===e&&(this.isEdit=!1),i.onRefresh()},deleteMulti:function(){var t=this,e=this.data.commodityList.filter((function(t){return t.isCheckedGood})),i=[];e.forEach((function(t){i.push(t.sku)})),C["a"].cancelCollection({skus:i}).then((function(e){e.data.success&&(t.getList(),t.isEdit=!1)}))}}},G=z,M=(i("e8a7"),Object(b["a"])(G,s,o,!1,null,"7d5ffba5",null));e["default"]=M.exports},"347c":function(t,e,i){},"3c9b":function(t,e,i){},4717:function(t,e,i){},"4b7d":function(t,e,i){"use strict";i("7fdc")},"58cf":function(t,e,i){"use strict";i("8890")},"6d76":function(t,e,i){"use strict";i("7539")},"6d84":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"check-box-container",style:{width:t.width,height:t.height},on:{click:function(e){return t.toggleCheck()}}},[i("div",{staticClass:"checkbox-icon"},[t.checked&&!t.disabled?i("img",{key:"select",attrs:{alt:"",src:t.$cdnImageUrl+"/common/checked.svg",width:t.width,height:t.height}}):t._e(),t.checked||t.disabled?t._e():i("img",{key:"unselected",attrs:{alt:"",src:t.$cdnImageUrl+"/cart/icon-unselected.png",width:t.width,height:t.height}}),t.disabled&&!t.defaultSelect?i("img",{key:"unselected",staticClass:"disabled",attrs:{alt:"",src:t.$cdnImageUrl+"/cart/icon-unselected.png",width:t.width,height:t.height}}):t._e(),t.disabled&&t.defaultSelect?i("img",{key:"defaultSelected",staticClass:"disabled",attrs:{alt:"",src:t.$cdnImageUrl+"/common/checked.svg",width:t.width,height:t.height}}):t._e()]),t._t("default")],2)},o=[],c={name:"CommonCkeckBox",model:{prop:"checked",event:"changeCheck"},props:{checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},defaultSelect:{type:Boolean,default:!1},width:{type:String,default:"16px"},height:{type:String,default:"16px"}},created:function(){console.log("disabled",this.disabled)},data:function(){return{}},methods:{toggleCheck:function(){this.disabled||(this.$emit("changeCheck",!this.checked),this.$emit("toggleCheck"))}},watch:{checked:{handler:function(t,e){this.$emit("onChange")},deep:!0}}},n=c,a=(i("1439"),i("2877")),l=Object(a["a"])(n,s,o,!1,null,"52924c86",null);e["a"]=l.exports},"6ff3":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return"small"==t.size?i("div",{staticClass:"tag"},[i("img",{attrs:{src:"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/search/living.gif",alt:""}}),t._v(" 直播中 ")]):i("div",{staticClass:"tag-big"},[i("img",{attrs:{src:"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/search/live_big.gif",alt:""}})])},o=[],c={name:"LiveTag",props:["size"]},n=c,a=(i("6d76"),i("2877")),l=Object(a["a"])(n,s,o,!1,null,"3d20227a",null);e["a"]=l.exports},7539:function(t,e,i){},"7fdc":function(t,e,i){},8081:function(t,e,i){},"80cc":function(t,e,i){"use strict";i("347c")},8890:function(t,e,i){},9763:function(t,e,i){},"99fe":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"f",(function(){return a})),i.d(e,"d",(function(){return l})),i.d(e,"c",(function(){return r})),i.d(e,"g",(function(){return u})),i.d(e,"j",(function(){return d})),i.d(e,"e",(function(){return h})),i.d(e,"i",(function(){return p})),i.d(e,"h",(function(){return f})),i.d(e,"a",(function(){return m}));var s=i("bbc2"),o=i("1c03"),c=i("f121"),n=function(t){return Object(o["b"])(s["a"].defaultSearch,t,{baseURL:c["a"].SHOST})},a=function(t){return Object(o["b"])(s["a"].hotSearch,t,{baseURL:c["a"].SHOST})},l=function(t){return Object(o["b"])(s["a"].getSelectBoxTagList,t,{baseURL:c["a"].SHOST})},r=function(t){return Object(o["c"])(s["a"].topSearch,t,{baseURL:c["a"].SHOST})},u=function(t){return Object(o["b"])(s["a"].searchDropdown,t,{baseURL:c["a"].SHOST})},d=function(t){return Object(o["b"])(s["a"].wdCommonSearchNew,t,{baseURL:c["a"].SHOST},!0)},h=function(t){return Object(o["c"])(s["a"].getSkuLives,t,{baseURL:c["a"].HOST},!0)},p=function(t){return Object(o["b"])(s["a"].getStoreInformation,t,{baseURL:c["a"].SHOST},!0)},f=function(t){return Object(o["b"])(s["a"].getGuessYouLikeIt,t,{baseURL:c["a"].SHOST},!1)},m=function(t){return Object(o["b"])(s["a"].associatedSearchStore,t,{baseURL:c["a"].SHOST},!1)}},a73f:function(t,e,i){"use strict";var s=function(t,e){var i=e._c;return e.props.nums>0?i("div",{staticClass:"m-skeleton",style:{"z-index":e.props.zIndex||0}},[i("div",{style:{background:e.props.bgColor,height:e.props.fheight}}),e._l(e.props.nums-1,(function(t){return i("div",{key:t,style:{background:e.props.bgColor,height:e.props.iheight}})}))],2):e._e()},o=[],c=(i("80cc"),i("2877")),n={},a=Object(c["a"])(n,s,o,!0,null,null,null);e["a"]=a.exports},c63d:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShow?i("div",{staticClass:"go-top",class:t.classList},[i("div",{staticClass:"top",on:{click:t.toGotop}},[i("img",{attrs:{src:t.$cdnImageUrl+"/common/common-to-top-icon.png"}}),i("span",[t._v("顶部")])]),t.isHaierApp&&t.feedShow?i("div",{staticClass:"divider"}):t._e(),t.isHaierApp&&t.feedShow?i("div",{staticClass:"bottom",on:{click:function(e){return t.toFeedBack()}}},[i("img",{attrs:{src:t.$cdnImageUrl+"/common/common-edit-icon.png"}}),i("span",[t._v("反馈")])]):t._e()]):t._e()},o=[],c={props:{isShow:{type:Boolean,default:function(){return!1}},classList:{type:Object,default:function(){return{}}},feedShow:{type:Boolean,default:function(){return!0}},code:{type:Number,default:function(){return null}}},data:function(){return{isHaierApp:!1,timer:null}},created:function(){this.isHaierApp=this.$util.isUplus()},watch:{isShow:{handler:function(t){var e=this;console.log(t),console.log("this.timer:",this.timer),t?this.timer?(clearTimeout(this.timer),this.timer=null):this.timer=setTimeout((function(){e.hiddenFeedBack()}),4e3):(clearTimeout(this.timer),this.timer=null)}}},methods:{hiddenFeedBack:function(){console.log("hiddenFeedBack"),this.$emit("hiddenFeedBack")},toGotop:function(){this.$emit("toTop")},toFeedBack:function(){if(this.$store.getters.getLoginStatus){var t="https://uplus.haier.com/uplusapp/problemFeedBack/feedback.html";this.code&&(t="https://uplus.haier.com/uplusapp/problemFeedBack/feedback.html?code="+this.code),this.$util.openNewWindow(t,!0,!1,!1)}else this.$store.dispatch("doLogin").then((function(t){400===t&&console.log("请求异常")}))}}},n=c,a=(i("4b7d"),i("2877")),l=Object(a["a"])(n,s,o,!1,null,"7733b653",null);e["default"]=l.exports},cdc6:function(t,e,i){"use strict";i("2880")},dee6:function(t,e,i){"use strict";i("4717")},e8a7:function(t,e,i){"use strict";i("8081")},f2e9:function(t,e,i){"use strict";i("9763")}}]);
//# sourceMappingURL=chunk-342c61ab.500cc535.js.map