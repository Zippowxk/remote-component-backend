(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45b10662","chunk-079cb250"],{"51a4":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"messageCenterBox"},[t.List.length>0?n("div",[n("van-pull-refresh",{on:{refresh:t.onRefresh},scopedSlots:t._u([{key:"pulling",fn:function(){return[n("refreshLoading",{attrs:{text:"下拉刷新"}})]},proxy:!0},{key:"loosing",fn:function(){return[n("refreshLoading",{attrs:{text:"下拉刷新"}})]},proxy:!0},{key:"loading",fn:function(){return[n("refreshLoading",{attrs:{text:"加载中"}})]},proxy:!0},{key:"success",fn:function(){return[n("refreshLoading",{attrs:{text:"加载完成"}})]},proxy:!0}],null,!1,11498023),model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[n("van-list",{attrs:{"immediate-check":!1,finished:t.finished,"finished-text":"没有更多啦~"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.List,(function(e,s){return n("div",{key:s,staticClass:"news",on:{click:function(n){return t.toHelpDetail(e.id,e.relationId,s)}}},[n("div",{staticClass:"news_top"},[n("div",{staticClass:"news_top_l"},[t._v(t._s(e.title))]),n("div",{staticClass:"news_top_r"},[n("div",{staticClass:"data"},[t._v(t._s(e.date))]),0===e.isRead?n("div",{staticClass:"circular"}):t._e()])]),n("div",{staticClass:"line"}),n("div",{staticClass:"news_bottom"},[t._v(t._s(e.content))])])})),0)],1)],1):n("div",{staticClass:"messageBox"},[n("img",{staticClass:"messageClass",attrs:{src:s("99f5"),alt:""}}),n("div",[t._v("暂无平台消息")])])])},a=[],i=(s("e7e5"),s("d399")),r=s("d7a6"),o=s("cf0f"),c=s("2b0e");c["a"].use(i["a"]);var u={components:{refreshLoading:r["default"]},data:function(){return{List:[],loading:!1,finished:!1,refreshing:!1,pageNo:1}},methods:{getList:function(){var t=this;Object(o["a"])({messageType:3,pageNo:this.pageNo,pageCount:10}).then((function(e){e.data.success?t.List=e.data.data:i["a"].fail({message:e.data.message,duration:2e3})}))},toHelpDetail:function(t,e,s){this.List[s].isRead=1,this.$router.push("/messageDetail/".concat(t,"/").concat(e))},onLoad:function(){var t=this;this.pageNo++,Object(o["a"])({messageType:3,pageNo:this.pageNo,pageCount:10}).then((function(e){var s=e.data.data;e.data.success&&(e.data.data.length<10&&(t.finished=!0),t.loading=!1,t.List=t.List.concat(s))}))},onRefresh:function(){var t=this;setTimeout((function(){t.pageNo=1,t.getList(),t.refreshing=!1}),1e3)}},created:function(){var t=this;this.$util.isHaierApp()?this.$store.dispatch("handleUpAuth").then((function(e){e?t.getList():t.$store.dispatch("doLogin")})):this.getList()},beforeRouteLeave:function(t,e,s){var n=this;"/messageDetail"===t.path?n.$route.meta.keepAlive=!0:n.$route.meta.keepAlive=!1,s()}},l=u,d=(s("8f7d"),s("2877")),f=Object(d["a"])(l,n,a,!1,null,"f6d84958",null);e["default"]=f.exports},6484:function(t,e,s){},8261:function(t,e,s){},"8f7d":function(t,e,s){"use strict";s("6484")},"99f5":function(t,e,s){t.exports=s.p+"img/noMessage.9685da16.png"},cf0f:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"c",(function(){return r})),s.d(e,"b",(function(){return o}));var n=s("1c03"),a=s("bbc2"),i=function(t){return n["a"].request({url:a["a"].messageCenter,method:"post",params:t})},r=function(t){return n["a"].request({url:a["a"].readNews,method:"post",params:t})},o=function(t){return n["a"].request({url:a["a"].messageCenterDetail,method:"post",params:t})}},d7a6:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"refresh-load"},[s("div",{staticClass:"spinner"},t._l(t.rectlist,(function(e){return s("div",{key:e,class:"rect"+e,style:{"background-color":t.color}})})),0),t.text?s("div",{staticClass:"spinner-text",style:{color:t.textColor}},[t._v(t._s(t.text))]):t._e()])},a=[],i={name:"refreshLoading",props:["text","color","textColor"],data:function(){return{rectlist:[1,2,3,4,5]}}},r=i,o=(s("ef69"),s("2877")),c=Object(o["a"])(r,n,a,!1,null,"9448457e",null);e["default"]=c.exports},ef69:function(t,e,s){"use strict";s("8261")}}]);
//# sourceMappingURL=chunk-45b10662.2dedb30c.js.map