(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5192cb00"],{2979:function(t,e,n){"use strict";n("a17b")},"55c1":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tableau_box"},[n("Header",[n("div",{staticClass:"goBackIcon",attrs:{slot:"left"},slot:"left"},[n("i",{staticClass:"icon-back"})]),n("div",{staticClass:"tab-bar",attrs:{slot:"title"},on:{click:t.toShow},slot:"title"},[n("div",{staticClass:"tableau_title"},[t._v(t._s(t.selectValue))]),n("span",{staticClass:"son"})]),n("div",{staticClass:"order-header-right",attrs:{slot:"right"},slot:"right"},[n("span",{on:{click:t.toShow}},[t._v("切换菜单")])])]),n("van-popup",{style:{height:"100vh",width:"calc(100% - 2.4rem)"},attrs:{position:"right"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},t._l(t.data,(function(e,a){return n("ul",{key:a},[n("Menu",{attrs:{data:e,nodeClick:t.nodeClick}})],1)})),0),n("div",{staticStyle:{marginTop:"0.93rem",height:"94vh"}},[n("iframe",{attrs:{src:t.ifranmSrc,frameborder:"0",height:"100%",width:"100%",marginheight:"0.93rem"}})])],1)},r=[],i=n("a34a"),o=n.n(i),s=n("1c03"),u=n("bbc2"),c=function(t){return s["a"].request({url:u["a"].tableauMenu,method:"get",params:t})},l=function(t){return s["a"].request({url:u["a"].getStoreMenuDefaultView,method:"get",params:t})},d=function(t){return s["a"].request({url:u["a"].getStoreTableauTicket,method:"get",params:t})},h=n("d354"),f=n("e725"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"tree-menu":!0}},[2!==t.data.menuType?n("li",{class:{"first-floor":1===t.data.level,"second-floor":2===t.data.level,"third-floor":3===t.data.level}},[n("span",{staticClass:"content-box",on:{click:function(e){return e.stopPropagation(),t.toggle.apply(null,arguments)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.data.menuName))]),t.hasChild?n("img",{class:{animation:t.open},attrs:{src:t.$cdnImageUrl+"/tableau/arrowShrink.png",alt:""}}):t._e(),t.hasChild?t._e():n("span",{staticClass:"icon file-text"})]),t.hasChild?n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}]},t._l(t.data.list,(function(e,a){return n("Tree-item",{key:a,ref:"children",refInFor:!0,attrs:{data:e,nodeClick:t.nodeClick}})})),1):t._e()]):n("li",[n("span",{staticClass:"view-menu",on:{click:function(e){return t.getRequest(t.data.menuLinks,t.data.menuName)}}},[t._v(t._s(t.data.menuName))])])])},p=[],g={name:"TreeItem",props:{data:{type:[Object,Array],required:!0},nodeClick:{type:Function,required:!0}},data:function(){return{open:!1}},created:function(){},mounted:function(){},computed:{hasChild:function(){return this.data.list&&this.data.list.length}},methods:{toggle:function(){this.hasChild&&(this.open=!this.open),this.$refs.children&&this.$refs.children.length>0&&this.$refs.children.forEach((function(t){t.open=!1}))},getRequest:function(t,e){this.nodeClick(t,e)}}},v=g,w=(n("2979"),n("2877")),b=Object(w["a"])(v,m,p,!1,null,"be8595a6",null),k=b.exports;function C(t,e,n,a,r,i,o){try{var s=t[i](o),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(a,r)}function S(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var i=t.apply(e,n);function o(t){C(i,a,r,o,s,"next",t)}function s(t){C(i,a,r,o,s,"throw",t)}o(void 0)}))}}var _={components:{Header:f["a"],Menu:k},data:function(){return{ifranmSrc:"",selectValue:"首页",show:!1,data:[],ticked:null,childeUrl:""}},created:function(){this.initialize()},mounted:function(){this.getMenu()},methods:{toShow:function(){this.show=!0},getMenu:function(){var t=this;c().then((function(e){e.data.success&&(t.data=e.data.data,t.data.sort((function(t,e){return t.menuSort-e.menuSort})))}))},initialize:function(){var t=this;l().then((function(e){t.rewrite(e.data.data.menuLinks).then((function(e){t.ifranmSrc=e,console.log("------初始化--------",e)})),t.selectValue=e.data.data.menuName}))["catch"]((function(e){t.$toast("获取看板数据异常，请稍后重试")}))},getStoreTableauTicket:function(){var t=this;return S(o.a.mark((function e(){var n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["g"])().then((function(e){return d({storeCode:e.data.data.storeCode}).then((function(t){if(t.data.success)return t.data.data}))["catch"]((function(e){t.$toast("获取票据异常")}))}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()},rewrite:function(t){var e=this;return S(o.a.mark((function n(){var a,r;return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=null,n.next=3,e.getStoreTableauTicket().then((function(e){a=e,console.log("-----ticked--------",e);var n=t.split("/"),r="",i=n.slice(3);return i.forEach((function(t){r+="/"+t})),n[0]+"//"+n[2]+"/trusted/"+a+r}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},nodeClick:function(t,e){var n=this;console.log("----nodeclick----",t,e),this.selectValue=e,this.rewrite(t).then((function(t){n.ifranmSrc=t,console.log("------菜单选择--------",t)}))}}},y=_,T=(n("81da"),Object(w["a"])(y,a,r,!1,null,"1f6c8afb",null));e["default"]=T.exports},"81da":function(t,e,n){"use strict";n("a5be")},a17b:function(t,e,n){},a5be:function(t,e,n){},d354:function(t,e,n){"use strict";n.d(e,"g",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"f",(function(){return s})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"e",(function(){return d}));var a=n("1c03"),r=n("bbc2"),i=function(t,e){return a["a"].request({url:r["a"].myManage,method:"get",params:{_t:Date.now()},noLogin:e})},o=function(t){return a["a"].request({url:r["a"].getOrderCount,method:"get",params:{chId:60}})},s=function(t){return a["a"].request({url:r["a"].wallet,method:"get",params:{}})},u=function(t){return a["a"].request({url:r["a"].checkBindByType,method:"get",params:t})},c=function(t){return a["a"].request({url:r["a"].getComminsionSumInfo,method:"POST",data:t,headers:{"Content-Type":"application/json"}})},l=function(t){return a["a"].request({url:r["a"].getGoodsAmountList,method:"POST",data:t,headers:{"Content-Type":"application/json"}})},d=function(t){return a["a"].request({url:r["a"].getServiceCharge,method:"get",params:t})}}}]);
//# sourceMappingURL=chunk-5192cb00.e4855a4a.js.map