(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bace791"],{"027b":function(t,e,n){"use strict";n("2a6d")},"28ed":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("Header",[n("router-link",{attrs:{slot:"right",to:"/goodsAnswerMine"},slot:"right"},[t._v("我的问答")])],1),n("GoodsInfo",{attrs:{sku:t.getQuestionInfo.sku}}),n("div",{staticClass:"answer-detail"},[n("div",{staticClass:"answer-title"},[n("img",{attrs:{src:"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/goods/answer/question.png",alt:""}}),n("div",[n("h2",[t._v(t._s(t.getQuestionInfo.question))]),n("p",[t._v(t._s(t.getQuestionInfo.createTime))])])]),!t.list.length&&t.finished?n("div",{staticClass:"answer-body"},[t._m(0)]):t._e(),t.list.length?n("div",{staticClass:"answer-body"},[n("h5",[n("img",{attrs:{src:"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/goods/answer/answer.png",alt:""}}),t._v(" 共"+t._s(t.list.length)+"条回答")]),n("van-list",{staticClass:"answer-list",attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e){return n("div",{key:e.answerId,staticClass:"answer-item"},[n("img",{attrs:{src:e.headImg||"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/goods/answer/user_default.png",alt:""}}),n("div",{staticClass:"answer-item-body"},[n("div",{staticClass:"answer-user"},[t._v(t._s(e.nickName)+" "),n("span",{class:{invite:2==e.identity}},[t._v(t._s(t.userIdentity[e.identity]))])]),n("div",{staticClass:"answer-content"},[t._v(t._s(e.answer))]),n("div",{staticClass:"answer-other"},[n("p",[t._v(t._s(e.createTime))]),n("div",[n("span",{on:{click:function(n){return t.toReplay(e)}}},[n("i",{staticClass:"icon-comment"}),t._v(t._s(e.commentCount))]),n("span",{class:{active:e.recordId},on:{click:function(n){return t.doLike(e)}}},[n("i",{staticClass:"icon-zan"}),t._v(t._s(e.likeCount))])])])])])})),0)],1):t._e(),!t.list.length&&t.finished?n("AnswerEmpty",{attrs:{type:"1"}}):t._e()],1),t.isPurchase?n("div",{staticClass:"answer-add-btn"},[n("router-link",{attrs:{to:"/goodsToAnswer/"+t.getQuestionInfo.questionId}},[t._v("我来回答")])],1):t._e()],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"answer-item-no"},[n("img",{attrs:{src:"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/goods/answer/answer_disable.png",alt:""}}),n("p",[t._v("暂无回答")])])}],r=n("e725"),o=n("6e57"),a=n("791f"),c=n("85e4"),u=n("2f62");function l(t){return h(t)||g(t)||f(t)||d()}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t,e){if(t){if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}function g(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function h(t){if(Array.isArray(t))return p(t)}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b={name:"goodsanswerdetail",components:{Header:r["a"],GoodsInfo:o["a"],AnswerEmpty:a["a"]},data:function(){return{questionId:"",curPage:1,pageSize:20,questionInfo:{},list:[],loading:!1,finished:!1,isPurchase:!1,userIdentity:{1:"已买",2:"商家",3:"平台"}}},activated:function(){this.questionId=this.$route.params.id,console.log(this.getQuestionInfo,"getQuestionInfo"),this.init(),this.$store.state.isLogin&&this.getpurchasedGoods()},computed:w(w({},Object(u["d"])("answerArea",["getQuestionInfo"])),Object(u["d"])(["mId"])),methods:w(w({},Object(u["e"])("answerArea",["setReplayInfo"])),{},{init:function(){this.curPage=1,this.list=[],this.finished=!1,this.loading=!1,this.getPageProductAnswer()},onLoad:function(){this.getPageProductAnswer()},getpurchasedGoods:function(){var t=this;Object(c["jb"])({answerUserId:this.mId,sku:this.getQuestionInfo.sku}).then((function(e){var n=e.success;n&&(t.isPurchase=!0)}))},getPageProductAnswer:function(){var t=this;this.loading=!0;var e={start:this.curPage,offset:this.pageSize,questionId:this.questionId};Object(c["T"])(e).then((function(e){var n=e.result,s=e.success;s?(t.questionInfo=t.curPage+=1,t.loading=!1,t.list=[].concat(l(t.list),l(n)),t.finished=n.length<t.pageSize):(t.loading=!1,t.finished=!0)}))},toReplay:function(t){this.setReplayInfo(t),this.$router.push("/goodsToReplay/"+t.answerId)},doLike:function(t){Object(c["d"])({answerId:t.answerId}).then((function(e){var n=e.success;n&&(t.recordId?(t.recordId=!1,t.likeCount-=1):(t.recordId=!0,t.likeCount+=1))}))}})},y=b,_=(n("027b"),n("2877")),I=Object(_["a"])(y,s,i,!1,null,"22aba989",null);e["default"]=I.exports},"2a6d":function(t,e,n){},"507c":function(t,e,n){"use strict";n("7eb3")},"6e57":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail-info",on:{click:t.goDetail}},[n("img",{attrs:{src:t.info.defaultImageUrl,alt:""}}),n("div",[n("h4",[t._v(t._s(t.info.productFullName))]),n("p",[t._v("共"+t._s(t.info.questionCount)+"个问题")])])])},i=[],r=n("85e4"),o={name:"answerGoodsInfo",props:["sku"],data:function(){return{info:{}}},watch:{sku:{handler:function(){this.getProductQuestionInfo()},immediate:!0}},methods:{getProductQuestionInfo:function(){var t=this;this.sku&&Object(r["ab"])({sku:this.sku}).then((function(e){var n=e.result;t.info=n}))},goDetail:function(){this.$router.push({path:"/goodsDetail",query:{productId:this.info.productId}})}}},a=o,c=(n("916c"),n("2877")),u=Object(c["a"])(a,s,i,!1,null,"3b330227",null);e["a"]=u.exports},"791f":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return 1==t.type?n("div",{staticClass:"empty"},[n("img",{staticClass:"small",attrs:{src:"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/goods/answer/answer_empty.png",alt:""}}),n("p",[t._v("正在来回答的路上~")])]):n("div",{staticClass:"empty"},[n("img",{attrs:{src:"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/goods/tipImg.png",alt:""}}),n("p",[t._v("暂无问答")])])},i=[],r={name:"empty",props:["type"]},o=r,a=(n("507c"),n("2877")),c=Object(a["a"])(o,s,i,!1,null,"7ee40ae2",null);e["a"]=c.exports},"7eb3":function(t,e,n){},"835b":function(t,e,n){},"916c":function(t,e,n){"use strict";n("835b")}}]);
//# sourceMappingURL=chunk-4bace791.f0c88d5e.js.map