(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1de94714"],{"211f":function(t,e,s){"use strict";s("45a5")},"45a5":function(t,e,s){},8790:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"top",attrs:{id:"topData"}},[s("div",{staticClass:"top_left"}),t._l(t.flashSaleTop,(function(e,i){return s("div",{key:i,staticClass:"top_right_all"},[s("div",{class:e.titleShowColor?"top_right":"top_right_before",on:{click:function(e){return t.changeProduct(i)}}},[s("div",{staticClass:"top_right_top"},[t._v(t._s(e.date))]),s("div",{class:e.titleShowColor?"top_right_bottom":"top_right_bottom_all"},[t._v(" "+t._s(e.dateTip)+" "),s("span")])])])}))],2),t.saleList.length>0?s("div",{staticClass:"container"},[s("div",{staticClass:"navBar"},[t.$route.query.browerFirstIn?t._e():s("img",{staticClass:"navBarLeft",attrs:{src:t.$globalIcon.whiteBackIcon,alt:""},on:{click:t.back}}),s("div",{staticClass:"navBarText"},[t._v("限时抢购")]),t.isShare?s("div",{staticClass:"nav-share",style:{backgroundImage:"url("+t.$globalIcon.whiteShareIcon+")"},on:{click:t.doShare}}):t._e()]),s("div",{staticClass:"fixedTop"},[s("div",{staticClass:"sale-tab-row"},[s("div",{staticClass:"sale-scroll",attrs:{id:"scroll"}},t._l(t.saleList,(function(e,i){return s("div",{key:i},[s("div",{staticClass:"sale-tab-bg",class:{active:t.activeTab===i},on:{click:function(s){return t.changeTab(e,i)}}},[s("div",{staticClass:"sale-tab-top-text",class:{active:t.activeTab===i}},[t._v(t._s(e.timeStr))]),s("div",{staticClass:"sale-tab-bottom-text",class:{active:t.activeTab===i}},[t._v(t._s(e.timeTip))])])])})),0),t._l(t.saleList,(function(e,i){return s("div",{key:i,staticClass:"time"},[s("div",{staticClass:"time_left"},[t._v(t._s(t.isSalingText))]),t.startEndTime?s("div",{staticClass:"time_right_time"},[s("span",[t._v("距结束")]),s("span",{staticClass:"dateClass"},[t._v(t._s(t.h))]),t._v(": "),s("span",{staticClass:"dateClass"},[t._v(t._s(t.m))]),t._v(": "),s("span",{staticClass:"dateClass dateClass-last"},[t._v(t._s(t.s))])]):t._e(),t.startEndTime?t._e():s("div",{staticClass:"time_right_time"},[t._v(" 距开始 "),s("span",{staticClass:"dateClass"},[t._v(t._s(t.h))]),t._v(" : "),s("span",{staticClass:"dateClass"},[t._v(t._s(t.m))]),t._v(": "),s("span",{staticClass:"dateClass dateClass-last"},[t._v(t._s(t.s))])])])}))],2)]),s("div",{staticClass:"productList"},t._l(t.activeProductList,(function(e,i){return s("div",{key:i,on:{click:function(s){return t.toProductListNews(e)}}},[s("div",{staticClass:"product-container"},[t.imageToHttps(e.imageUrl)?s("img",{staticClass:"product-img",attrs:{src:t.imageToHttps(e.imageUrl)}}):t._e(),s("div",{staticClass:"product-right"},[s("div",{staticClass:"product-title"},[t._v(t._s(e.productName))]),s("div",{staticClass:"product-tips"},t._l(e.sellPoint,(function(e,i){return s("span",{key:i},[t._v(t._s(e))])})),0),s("div",{staticClass:"product-two"},[s("div",{staticClass:"product-two-left"},[s("div",{staticClass:"product-price"},[s("div",{staticClass:"product-sale-text"},[t._v("￥")]),s("div",{staticClass:"product-sale-price-text"},[t._v(t._s(t.toFixedTwo(e.flashsalePrice)))])]),s("div",{staticClass:"product-reward-row"},[s("div",{staticClass:"product-origin-price"},[s("span",[s("span",{staticClass:"yuan"},[t._v("￥")]),s("span",{staticClass:"price-num"},[t._v(t._s(t.toFixedTwo(e.miniPrice)))])])])])]),s("div",{staticClass:"product-two-right"},[s("div",{staticClass:"sale-btn"},[s("span",[t._v("已售"),s("span",{staticClass:"saleNum-text"},[t._v(t._s(e.saleNum))]),t._v("件")]),s("span",[t._v("去购买")])])])])])])])})),0),t._m(0)]):t._e()])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-row"},[s("div",{staticClass:"bottom-text"},[t._v("没有更多啦~")])])}],o=s("2f62"),n=s("1c03"),l=s("bbc2"),r=function(t){return n["a"].request({url:l["a"].flashSaleTitle,method:"get",params:t})};function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function d(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){h(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function h(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var m={name:"flashSale",data:function(){return{parentIndex:0,sonIndex:0,activeTab:0,flashSaleTop:[],activedIndex:0,isSalingText:"疯抢中，好价总在犹豫中错过",saleList:[],timeOut:null,streetId:this.$store.state.locationInfo.townshipId,provinceId:this.$store.state.locationInfo.provinceId,cityId:this.$store.state.locationInfo.cityId,districtId:this.$store.state.locationInfo.districtId,titleShowColor:!0,startEndTime:!0,endTime:"",getDay:"",systemTime:"",h:"",m:"",s:"",getTopIndex:"0",val:[],allList:[],showActiveStyle:"",topIndex:[0],isShare:this.$util.isHaierApp(),firstInit:!0}},activated:function(){this.firstInit||(this.keepGetTimegetAllProductNews(),this.changeProduct(0),this.changeTab(this.saleList[0],0))},computed:d(d({},Object(o["d"])(["mId"])),{},{activeProductList:function(){return this.saleList.length>this.activeTab?this.saleList[this.activeTab].products:[]}}),methods:{doShare:function(){this.$util.inAppShare({title:"今日爆款",url:-1!==location.href.indexOf("?")?location.href+"&shareId="+this.mId:location.href+"?shareId="+this.mId,desc:"爆款特价，限时直降，仅此一天，数量有限，抓紧抢购吧~"})},getAllProductNews:function(){var t=this;console.log("chufa");var e={provinceId:this.provinceId,cityId:this.cityId,districtId:this.districtId,streetId:this.streetId,from:2};r(e).then((function(e){if(t.firstInit=!1,e.data.success){var s=e.data.data.dates.filter((function(t){return Date.parse(t.date)>=(new Date).setHours(0,0,0,0)}));t.flashSaleTop=s.filter((function(t){return t.list.some((function(t){return t.products[0].preheatingTime<=t.systemTime}))}));for(var i=0;i<t.flashSaleTop.length;i++){t.flashSaleTop[i].titleShowColor=!1,"抢购中"===t.flashSaleTop[i].dateTip&&(t.flashSaleTop[i].dateTip="进行中",t.getTopIndex.length>0&&(t.topIndex=[],t.topIndex=t.topIndex.concat(i))),t.flashSaleTop[i].date=t.flashSaleTop[i].date.replace("/",""),t.flashSaleTop[i].date=t.flashSaleTop[i].date.replace("/",""),t.flashSaleTop[i].date=t.flashSaleTop[i].date.substring(t.flashSaleTop[i].date.length-4);var a=t.flashSaleTop[i].date.slice(0,2),o=t.flashSaleTop[i].date.slice(2,4);0===o.indexOf(0)&&(o=o.slice(1,2)),t.flashSaleTop[i].date=a+"月"+o+"日",new Date(t.flashSaleTop[i].startTime).getDate()<(new Date).getDate()||(new Date(t.flashSaleTop[i].startTime).getDate(),(new Date).getDate()),t.flashSaleTop[i].titleShowColor=!1}var n=t.topIndex[0];t.saleList=t.flashSaleTop[n].list.filter((function(t){return!Array.isArray(t.products)||!t.products.length||t.products[0].preheatingTime<=t.systemTime})),t.news(e.data.data.dates,n),t.saleList.length&&(t.saleList[t.activeTab].startTime>t.saleList[t.activeTab].systemTime?(console.log(7.2),t.isSalingText="即将开始，先下单先得",t.startEndTime=!1,console.log("即将开始")):t.saleList[t.activeTab].endTime>t.saleList[t.activeTab].systemTime?(console.log(7.3),t.isSalingText="疯抢中，好价总在犹豫中错过",t.startEndTime=!0,console.log("已经开始")):(console.log(7.4),t.isSalingText="",t.h="00",t.m="00",t.s="00")),t.flashSaleTop[n].titleShowColor=!0;var l=t.flashSaleTop[n].list[t.activeTab];setTimeout((function(){t.topIndex[0]>2&&(document.getElementById("topData").scrollLeft=90*(t.topIndex[0]+1))}),50),clearTimeout(t.timeOut),t.getTime(l.startTime,l.endTime,l.systemTime),setTimeout((function(){t.activeTab>3&&(t.showActiveStyle=t.activeTab-2,document.getElementById("scroll").scrollLeft=90*t.showActiveStyle)}),50)}}))["catch"]((function(e){t.$toast.loading("网络异常")}))},changeProduct:function(t){this.parentIndex=t,this.getDay="",this.h="00",this.m="00",this.s="00",clearTimeout(this.timeOut),this.getTopIndex=t,this.topIndex[0]=t,this.getAllProductNews();for(var e=0;e<this.flashSaleTop.length;e++)this.flashSaleTop[e].titleShowColor=!1;this.flashSaleTop[t].titleShowColor=!0},news:function(t,e){var s=this;t[e].list&&t[e].list.map((function(t,e){t.startTime<t.systemTime&&t.endTime>t.systemTime&&(s.activeTab=e,s.endTime=s.saleList[e].endTime,s.systemTime=s.saleList[e].systemTime,s.startTime=s.saleList[e].startTime)}))},back:function(){clearTimeout(this.timeOut),this.$store.dispatch("doHistoryBack")},toProductListNews:function(t){clearTimeout(this.timeOut),this.$router.push({path:"/goodsDetail",query:{productId:t.productId}})},getTime:function(t,e,s){var i=this;if(t>=s){s+=1e3;var a=t-s,o=new Date(a);this.h=parseInt(a/1e3/60/60),this.m=o.getMinutes(),this.s=o.getSeconds(),0===this.h&&0===this.m&&0===this.s&&(this.startEndTime=!this.startEndTime)}else if(t<s){s+=1e3;var n=e-s,l=new Date(n);this.h=parseInt(n/1e3/60/60).toString(),this.m=l.getMinutes().toString(),this.s=l.getSeconds().toString()}this.m<10?this.m="0".concat(this.m):this.m=this.m,this.s<10?this.s="0".concat(this.s):this.s=this.s,this.h<10?this.h="0".concat(this.h):this.h=this.h,"00"===this.h&&"00"===this.m&&"00"===this.s&&t<s?(clearTimeout(this.timeOut),window.location.href=""):this.timeOut=setTimeout((function(){i.getTime(t,e,s)}),1e3)},changeTab:function(t,e){var s=this;this.sonIndex=e,clearTimeout(this.timeOut),this.getDay="",this.h="00",this.m="00",this.s="00",this.saleList[e].products=[],window.scroll(0,0),r({provinceId:this.provinceId,cityId:this.cityId,districtId:this.districtId,streetId:this.streetId,from:2}).then((function(t){var i=t.data.data.dates.filter((function(t){return Date.parse(t.date)>=(new Date).setHours(0,0,0,0)}));s.saleList=i[s.getTopIndex].list.filter((function(t){return!Array.isArray(t.products)||!t.products.length||t.products[0].preheatingTime<=t.systemTime})),s.saleList[e].systemTime>s.saleList[e].endTime?(window.location.href="",s.isSalingText="",s.h="00",s.m="00",s.s="00"):s.saleList[e].systemTime<s.saleList[e].startTime?(console.log("即将开始"),s.startEndTime=!1,s.isSalingText="即将开始, 先下单先得"):(console.log("正在疯抢"),s.startEndTime=!0,s.isSalingText="疯抢中，好价总在犹豫中错过"),s.endTime=s.saleList[e].endTime,s.systemTime=s.saleList[e].systemTime,s.startTime=s.saleList[e].startTime,console.log(s.startTime,s.endTime,s.systemTime,"点击切换时间"),clearTimeout(s.timeOut),s.getTime(s.startTime,s.endTime,s.systemTime)})),this.activeTab=e},toFixedTwo:function(t){var e=t.toFixed(2);return e},imageToHttps:function(t){return null!==t&&t.indexOf("http:")>0&&(t=t.replace("http:","https:")),t},keepGetTimegetAllProductNews:function(){var t=this,e={provinceId:this.provinceId,cityId:this.cityId,districtId:this.districtId,streetId:this.streetId,from:2};r(e).then((function(e){t.activeTab>3&&(t.showActiveStyle=t.activeTab-2,document.getElementById("scroll").scrollLeft=90*t.showActiveStyle),e.data.success&&(t.getDay="",t.h="00",t.m="00",t.s="00",t.endTime=e.data.data.dates[t.parentIndex].list[t.sonIndex].endTime,t.systemTime=e.data.data.dates[t.parentIndex].list[t.sonIndex].systemTime,t.startTime=e.data.data.dates[t.parentIndex].list[t.sonIndex].startTime,clearTimeout(t.timeOut),t.getTime(t.startTime,t.endTime,t.systemTime))}))}},mounted:function(){this.getAllProductNews(),this.$store.dispatch("WeChatSecondShare",{title:"今日爆款",desc:"爆款特价，限时直降，仅此一天，数量有限，抓紧抢购吧~",thumImage:""})}},u=m,p=(s("211f"),s("2877")),T=Object(p["a"])(u,i,a,!1,null,"07db5222",null);e["default"]=T.exports}}]);
//# sourceMappingURL=chunk-1de94714.bc8f867f.js.map