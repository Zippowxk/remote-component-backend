(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c39795b6"],{"0d3c":function(t,e,n){"use strict";n("bdfa")},"9a20":function(t,e,n){"use strict";var s=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t.split("."),s=e.split("."),c=Math.max(n.length,s.length),a=0,r=0;r<c;r++){var i=n.length>r?n[r]:0,o=isNaN(Number(i))?i.charCodeAt():Number(i),u=s.length>r?s[r]:0,d=isNaN(Number(u))?u.charCodeAt():Number(u);if(o<d){a=-1;break}if(o>d){a=1;break}}return a};e["a"]={gte:function(t,e){return s(t,e)>=0},gt:function(t,e){return s(t,e)>0},lte:function(t,e){return s(t,e)<=0},lt:function(t,e){return s(t,e)<0},eq:function(t,e){return 0===s(t,e)}}},bdfa:function(t,e,n){},f501:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"success-message"},[n("div",{staticClass:"success-photo"},[n("img",{staticClass:"success-icon",attrs:{src:t.$cdnImageUrl+"/pc/success.png"}})]),n("div",{staticClass:"success-sign"},[t._v("评价成功")]),n("div",{staticClass:"success-thanks"},[t._v("感谢您为其他小伙伴购物决策提供线索")]),n("div",{staticClass:"back-home",on:{click:function(e){return t.toHome()}}},[t._v("返回首页")])])])},c=[],a=n("21b1"),r=n("fa7d"),i=n("d3c8"),o=n("9a20"),u=new a["a"];u.initDeviceReady();var d={mounted:function(){this.$route.query.cOrderSn&&(this.cOrderSn=this.$route.query.cOrderSn),this.listData()},data:function(){return{shop:[{productName:"海尔 滚筒洗衣机",cOrderSn:"DSAG80628BKX1滚筒洗衣机 DSAG81",productImgUrl:"@/assets/imgs/pc/camera.png"},{productName:"海尔 滚筒洗衣机",cOrderSn:"DSAG80628BKX1滚筒洗衣机 DSAG82",productImgUrl:"@/assets/imgs/pc/camera.png"},{productName:"海尔 滚筒洗衣机",cOrderSn:"DSAG80628BKX1滚筒洗衣机 DSAG83",productImgUrl:"@/assets/imgs/pc/camera.png"}],cOrderSn:"WD192028706242"}},methods:{toEvaluate:function(t){this.$router.push({path:"/evaluate",query:{cOrderSn:t}})},toHome:function(){var t=this;r["a"].isHaierApp()?u.initDeviceReady().then((function(){u.upAppinfoModule.getAppInfo().then((function(e){var n=e.retData.appVersion;console.log(n,"appVersion"),n&&o["a"].gte(n,"6.20.0")?(console.log("111"),t.$util.openNewWindow("https://uplus.haier.com/uplusapp/customize/index.html?close_current_page=true",!0,!0)):(console.log("222"),u.initDeviceReady().then((function(){u.closeH5ContainerView()})))}))})):this.$router.push({path:"/"})},listData:function(){var t=this,e={cOrderSn:this.cOrderSn};i["a"].commentSuccessPage(e).then((function(e){e.data.success?t.shop=e.data.data.waitComments:t.$toast.fail(e.data.message)}))}}},l=d,p=(n("0d3c"),n("2877")),h=Object(p["a"])(l,s,c,!1,null,"1049a70c",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-c39795b6.dcc2baa3.js.map