(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["searchComponent"],{1427:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"container",staticClass:"search-result-contenter",on:{touchmove:function(e){return e.stopPropagation(),t.blurSearch.apply(null,arguments)}}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"search_box"},[o("van-nav-bar",{attrs:{"left-arrow":""},on:{"click-left":t.goBack}},[t._t("left",(function(){return[o("i",{staticClass:"icon-back"})]}),{slot:"left"}),t._t("title",(function(){return[o("div",{staticStyle:{display:"flex","flex-direction":"row","align-items":"center",height:"0.92rem"}},[o("van-field",{directives:[{name:"show",rawName:"v-show",value:t.showInput,expression:"showInput"}],ref:"search",staticClass:"search-filed",attrs:{"left-icon":"search","show-action":"",shape:"round",maxlength:"20",inputmode:"search",placeholder:t.placeholder,clearable:!0},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doSearch.apply(null,arguments)},clear:t.doClear,input:t.doInput,focus:t.pauseAnimation,blur:t.showPlaceholders},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showHolders,expression:"showHolders"}],ref:"flip",staticClass:"flip-text",style:t.animationStatus,attrs:{slot:"right-icon"},on:{click:function(e){return t.clickPlaceholders()}},slot:"right-icon"},[o("div",[t._v(t._s(t.flipHolders[0]))]),o("div",[t._v(t._s(t.flipHolders[1]))])])]),o("div",{staticStyle:{padding:"0 0.23rem","font-size":"0.27rem"},on:{click:t.doSearch}},[t._v(" 搜索 ")])],1)]}),{slot:"title"})],2)],1),o("div",{staticClass:"search_content"},[[t.storeId?t._e():o("div",{staticClass:"hot-wrap"},[o("hot-search",{attrs:{hotSearchList:t.hotSearchList},on:{doSearch:t.doSearch}})],1),o("div",{class:{"history-wrap":!0}},[o("history-search",{attrs:{show:t.show},on:{doSearch:t.doSearch}})],1),t.storeId?t._e():o("div",[t.topSearchList&&t.topSearchList.length>0?o("top-search",{attrs:{topSearchList:t.topSearchList},on:{doSearch:t.doSearch}}):t._e()],1)],o("key-search",{directives:[{name:"show",rawName:"v-show",value:t.keySearchShowFlag,expression:"keySearchShowFlag"}],attrs:{keyword:t.keyword,keywordsList:t.keywordsList},on:{doSearch:t.doSearch}})],2)])},i=[],s=o("99fe"),r=function(){return o.e("chunk-3bb2aa26").then(o.bind(null,"a01a"))},a=function(){return o.e("chunk-bab4892a").then(o.bind(null,"1f00"))},c=function(){return o.e("chunk-084692b6").then(o.bind(null,"4ec2"))},h=function(){return o.e("chunk-2a7cb318").then(o.bind(null,"92f9"))},d={props:{show:{type:Boolean,default:!1},words:{type:String,default:""},defaultRoute:{type:Boolean,default:!1},storeId:{type:String,default:""},hiddenId:{type:String,default:""},from:{type:String,default:"normal"}},components:{hotSearch:r,historySearch:a,keySearch:h,topSearch:c},data:function(){return{showInput:!1,showHolders:!0,animationStatus:{},placeholder:"",placeholders:[],currentIndex:0,keySearchShowFlag:!1,hotSearchList:[],keywordsList:[],topSearchList:[],keyword:""}},computed:{location:function(){return this.$store.getters["getlocationInfo"]},flipHolders:function(){var t=this;return this.currentIndex===this.placeholders.length-1?[this.placeholders[this.currentIndex],this.placeholders[0]]:this.placeholders.filter((function(e,o,n){return o===t.currentIndex||o===t.currentIndex+1}))}},watch:{show:{handler:function(t,e){var o=this;this.keyword=this.words,this.showInput=!0,this.$nextTick((function(){o.$refs.search.focus(),o.showHolders=!1})),this.hiddenId&&document.querySelector("#".concat(this.hiddenId))&&(document.querySelector("#".concat(this.hiddenId)).style.display=t?"none":"")},immediate:!0}},methods:{blurSearch:function(){this.$refs.search.blur()},doSearch:function(t){var e=this;if(this.$refs.search.focus(),this.$refs.search.blur(),this.keySearchShowFlag=!1,t&&t.keyword&&"string"===typeof t.keyword&&("history"!==t.type&&"hot"!==t.type&&"key"!==t.type||(this.keyword=t.keyword),"alreayRoute"===t.type))return"goodsSearch"!==this.from?setTimeout((function(){e.$emit("search",{alreayRoute:!0})}),1e3):this.$emit("search",{alreayRoute:!0}),void("goodsSearch"!==this.from&&this.hiddenId&&document.querySelector("#".concat(this.hiddenId))&&(document.querySelector("#".concat(this.hiddenId)).style.display=""));this.keyword=this.keyword||this.placeholder||this.placeholders[this.currentIndex],this.showHolders=!1,this.showInput=!1,this.defaultRoute&&this.keyword&&(this.hiddenId&&document.querySelector("#".concat(this.hiddenId))&&(document.querySelector("#".concat(this.hiddenId)).style.display=""),this.$router.push({path:"/goodsSearch",query:{keyword:this.keyword,visitStore:this.storeId||""}})),this.$emit("search",this.keyword)},goBack:function(){this.$emit("go-back"),this.showInput=!1},listenerEventCallback:function(){this.currentIndex=this.currentIndex>=this.placeholders.length-1?0:this.currentIndex+1},pauseAnimation:function(){var t;this.animationStatus={"animation-play-state":"paused","-webkit-animation-play-state":"paused"},0===(null===(t=this.placeholder)||void 0===t?void 0:t.length)&&(this.placeholder=this.placeholders[this.currentIndex]),this.showHolders=!1},clickPlaceholders:function(){this.$refs.search.focus(),this.pauseAnimation()},resumeAnimation:function(){this.animationStatus={},this.placeholder="",this.showHolders=!0},showPlaceholders:function(){""===this.keyword&&(this.placeholders.length>1?(this.placeholder="",this.showHolders=!0,this.resumeAnimation()):1===this.placeholders.length&&(this.placeholder=this.placeholders[0]))},scrollList:function(t){this.showToTopFlag=t.target.scrollTop>150},changeAddr:function(){this.addrShow=!0},onHideAddr:function(){this.addrShow=!1},handleLocation:function(){this.locationshow=!1,this.addrShow=!1},otherLocationOption:function(){this.locationshow=!0},onHideLocation:function(){this.locationshow=!1},closeAndBack:function(){this.locationshow=!1},defaultSearch:function(){var t=this;Object(s["b"])({platform:3}).then((function(e){e.data.length>1?(t.placeholders=e.data,t.placeholder=e.data[0],t.showHolders=!1):1===e.data.length?(t.placeholder=e.data[0],t.showHolders=!1):(t.placeholder="请输入搜索内容",t.showHolders=!1)}))["catch"]((function(e){t.placeholder="请输入搜索内容",t.showHolders=!1}))},hotRecommend:function(){var t=this;Object(s["f"])({platform:3}).then((function(e){t.hotSearchList=e.data}))},doInput:function(t){t.length>0?(this.keySearchShowFlag=!0,this.keywordsList=[],this.searchDropdown()):(this.keySearchShowFlag=!1,this.searchFlag=!1)},searchDropdown:function(){var t=this;Object(s["g"])({key:this.keyword}).then((function(e){t.keywordsList=e.data}))},doClear:function(){this.keyword="",this.pauseAnimation()},topSearch:function(){var t=this;Object(s["c"])({provinceId:this.location.provinceId,cityId:this.location.cityId,regionId:this.location.districtId,streetId:this.location.townshipId}).then((function(e){e.success&&(t.topSearchList=e.data,console.log("热搜榜数据："),console.log(t.topSearchList))}))}},created:function(){var t=this;this.words&&(this.keyword=this.words),this.$nextTick((function(){t.$refs.flip.removeEventListener("webkitAnimationIteration",t.listenerEventCallback),t.$refs.flip.addEventListener("webkitAnimationIteration",t.listenerEventCallback)})),this.defaultSearch(),this.hotRecommend(),this.topSearch()},mounted:function(){var t=this;console.log(this.$refs.search),this.$nextTick((function(){t.$refs.search.focus()}))},activated:function(){var t=this;this.$nextTick((function(){t.$refs.search.focus()}))}},l=d,u=(o("39395"),o("2877")),f=Object(u["a"])(l,n,i,!1,null,"03391da6",null);e["default"]=f.exports},39395:function(t,e,o){"use strict";o("cea1")},"44af":function(t,e,o){},"59e4":function(t,e,o){"use strict";o("44af")},"99fe":function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"f",(function(){return a})),o.d(e,"d",(function(){return c})),o.d(e,"c",(function(){return h})),o.d(e,"g",(function(){return d})),o.d(e,"j",(function(){return l})),o.d(e,"e",(function(){return u})),o.d(e,"i",(function(){return f})),o.d(e,"h",(function(){return p})),o.d(e,"a",(function(){return w}));var n=o("bbc2"),i=o("1c03"),s=o("f121"),r=function(t){return Object(i["b"])(n["a"].defaultSearch,t,{baseURL:s["a"].SHOST})},a=function(t){return Object(i["b"])(n["a"].hotSearch,t,{baseURL:s["a"].SHOST})},c=function(t){return Object(i["b"])(n["a"].getSelectBoxTagList,t,{baseURL:s["a"].SHOST})},h=function(t){return Object(i["c"])(n["a"].topSearch,t,{baseURL:s["a"].SHOST})},d=function(t){return Object(i["b"])(n["a"].searchDropdown,t,{baseURL:s["a"].SHOST})},l=function(t){return Object(i["b"])(n["a"].wdCommonSearchNew,t,{baseURL:s["a"].SHOST},!0)},u=function(t){return Object(i["c"])(n["a"].getSkuLives,t,{baseURL:s["a"].HOST},!0)},f=function(t){return Object(i["b"])(n["a"].getStoreInformation,t,{baseURL:s["a"].SHOST},!0)},p=function(t){return Object(i["b"])(n["a"].getGuessYouLikeIt,t,{baseURL:s["a"].SHOST},!1)},w=function(t){return Object(i["b"])(n["a"].associatedSearchStore,t,{baseURL:s["a"].SHOST},!1)}},cea1:function(t,e,o){},f702:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-container"},[o("transition",{attrs:{name:"slide",mode:"out-in"}},[o("p",{key:t.text.id,staticClass:"text"},[t._v(t._s(t.text.val))])])],1)},i=[],s={name:"TextScroll",props:{dataList:{type:Array,default:function(){return[]}}},data:function(){return{count:0,intervalId:null,playTime:2e3}},computed:{text:function(){return{id:this.count,val:this.dataList[this.count]}}},created:function(){var t=this;this.intervalId=setInterval((function(){t.getText()}),this.playTime)},methods:{getText:function(){var t=this.dataList.length;0!==t&&(this.count===t-1?this.count=0:this.count++)}},destroyed:function(){clearInterval(this.intervalId)}},r=s,a=(o("59e4"),o("2877")),c=Object(a["a"])(r,n,i,!1,null,"0a51f4f8",null);e["default"]=c.exports}}]);
//# sourceMappingURL=searchComponent.97cabaeb.js.map