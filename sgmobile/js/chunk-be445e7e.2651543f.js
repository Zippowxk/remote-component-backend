(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be445e7e"],{"0bfc":function(e,t,n){e.exports=n.p+"img/avatar.8c853469.png"},1439:function(e,t,n){"use strict";n("3c9b")},1669:function(e,t,n){"use strict";var i=function(){return n.e("chunk-2b4715e4").then(n.bind(null,"c63d"))};t["a"]={components:{topFeedBack:i},data:function(){return{showToTopFlag:!1,scrollTarget:""}},mounted:function(){this.debouncedAction=this.$util.throttle(this.option,100)},methods:{handleScroll:function(e){this.debouncedAction()},option:function(){var e=this.$refs.toTop.scrollTop;this.showToTopFlag=e>200},hiddenFeedBack:function(){this.showToTopFlag=!1},fnScrollToTop:function(){this.scrollSmoothTo(0)},scrollSmoothTo:function(e){window.requestAnimationFrame||(window.requestAnimationFrame=function(e){return setTimeout(e,17)});var t=document.querySelector(this.scrollTarget),n=t.scrollTop,i=function i(){var s=e-n;n+=s/10,Math.abs(s)<1?t.scrollTo(0,e):(t.scrollTo(0,n),requestAnimationFrame(i))};i()}}}},3073:function(e,t,n){},"3c9b":function(e,t,n){},4590:function(e,t,n){"use strict";n("3073")},4662:function(e,t,n){"use strict";n("68ef"),n("a71a"),n("9d70"),n("3743"),n("09fe"),n("4d75"),n("e3b3"),n("8270"),n("786d"),n("504b")},"6d84":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"check-box-container",style:{width:e.width,height:e.height},on:{click:function(t){return e.toggleCheck()}}},[n("div",{staticClass:"checkbox-icon"},[e.checked&&!e.disabled?n("img",{key:"select",attrs:{alt:"",src:e.$cdnImageUrl+"/common/checked.svg",width:e.width,height:e.height}}):e._e(),e.checked||e.disabled?e._e():n("img",{key:"unselected",attrs:{alt:"",src:e.$cdnImageUrl+"/cart/icon-unselected.png",width:e.width,height:e.height}}),e.disabled&&!e.defaultSelect?n("img",{key:"unselected",staticClass:"disabled",attrs:{alt:"",src:e.$cdnImageUrl+"/cart/icon-unselected.png",width:e.width,height:e.height}}):e._e(),e.disabled&&e.defaultSelect?n("img",{key:"defaultSelected",staticClass:"disabled",attrs:{alt:"",src:e.$cdnImageUrl+"/common/checked.svg",width:e.width,height:e.height}}):e._e()]),e._t("default")],2)},s=[],o={name:"CommonCkeckBox",model:{prop:"checked",event:"changeCheck"},props:{checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},defaultSelect:{type:Boolean,default:!1},width:{type:String,default:"16px"},height:{type:String,default:"16px"}},created:function(){console.log("disabled",this.disabled)},data:function(){return{}},methods:{toggleCheck:function(){this.disabled||(this.$emit("changeCheck",!this.checked),this.$emit("toggleCheck"))}},watch:{checked:{handler:function(e,t){this.$emit("onChange")},deep:!0}}},a=o,c=(n("1439"),n("2877")),l=Object(c["a"])(a,i,s,!1,null,"52924c86",null);t["a"]=l.exports},"77d2":function(e,t,n){},"7f1d":function(e,t,n){"use strict";n("b87f")},"8caa":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"comment-list"},[i("van-list",{attrs:{finished:e.finished,"finished-text":e.finishedText,"immediate-check":!1},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.commentList,(function(t,s){return i("div",{key:t.commentId+s,staticClass:"li comment-list-item"},[i("div",{staticClass:"comment-list-title"},[i("div",{staticClass:"left"},[i("img",{attrs:{alt:"",src:n("0bfc")}}),i("div",{staticClass:"title"},[i("span",[e._v(e._s(t.memberName))]),i("span",{staticClass:"time"},[e._v(e._s(e._f("formatTime")(t.createTime)))])])])]),i("div",{staticClass:"comment-list-info"},[i("div",{staticClass:"comment-list-desc"},[t.longContent?i("span",{staticClass:"tow-line"},[e._v(e._s(t.miniContent))]):i("span",[e._v(e._s(t.commentContent))]),t.longContentBtn?i("div",{staticClass:"btn expand",class:{expandactive:t.longContent},on:{click:function(t){return e.fnShowCommentContent("commentContent",s)}}},[e._v(e._s(t.longContent?"展开":"收起")+" "),i("i")]):e._e()]),t.commentPics&&t.commentPics.length&&!e.hidePic?i("div",{staticClass:"comment-list-pic"},[e._l(t.commentPics.length>3&&e.collapsible?t.commentPics.slice(0,3):t.commentPics,(function(n,s){return i("div",{key:s,staticClass:"img-box"},[i("img",{attrs:{src:e._f("imageToWebp")(e._f("imageThumb")(e._f("imageToHttps")(n.picUrl),"300"),e.$webpSurpport),alt:""},on:{click:function(n){return e.fnPreviewImage(t.commentPics,t.commentContent,s)}}})])})),e.collapsible&&t.commentPics.length>3?i("div",{staticClass:"float-number"},[i("div",{staticClass:"number"},[e._v(e._s(t.commentPics.length))]),i("img",{attrs:{width:"10px",height:"10px",src:"//cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/goodsDetail/tupian.png"}})]):e._e()],2):e._e()]),t.experienceContent?i("div",{staticClass:"comment-list-review"},[i("ul",[i("li",{staticClass:"comment-list-review-item"},[i("div",{staticClass:"comment-list-review-item-tit"},[i("div",{staticClass:"left"},[e._v(e._s(e._f("formatTime")(t.experienceTime))+"追评")])]),i("div",{staticClass:"comment-list-info"},[i("div",{staticClass:"comment-list-desc"},[t.longExperience?i("span",[e._v(e._s(t.miniExperienceContent))]):i("span",[e._v(e._s(t.experienceContent))]),t.longExperienceBtn?i("div",{staticClass:"btn expand",class:{expandactive:t.longExperience},on:{click:function(t){return e.fnShowCommentContent("experienceContent",s)}}},[e._v(e._s(t.longExperience?"展开":"收起")+" "),i("i")]):e._e()]),t.experiencePics&&t.experiencePics.length>0&&!e.hidePic?i("div",{staticClass:"comment-list-pic"},[e._l(t.experiencePics.length>3&&e.collapsible?t.experiencePics.slice(0,3):t.experiencePics,(function(n,s){return i("div",{key:s,staticClass:"img-box",on:{click:function(n){return e.fnPreviewImage(t.experiencePics,t.commentContent,s)}}},[i("img",{attrs:{src:e._f("imageToWebp")(e._f("imageThumb")(e._f("imageToHttps")(n.picUrl),"300"),e.$webpSurpport),alt:""}})])})),e.collapsible&&t.experiencePics.length>3?i("div",{staticClass:"float-number"},[i("div",{staticClass:"number"},[e._v(e._s(t.experiencePics.length))]),i("img",{attrs:{width:"10px",height:"10px",src:"//cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/goodsDetail/tupian.png"}})]):e._e()],2):e._e()])])])]):e._e(),i("div",{staticClass:"comment-list-info"},[t.serviceCommentReplies&&t.serviceCommentReplies.length>0?i("div",{staticClass:"comment-list-reply"},[e.show?i("ul",e._l(t.serviceCommentReplies,(function(t,n){return i("li",{key:n},[i("div",{staticClass:"comment-list-desc"},[t.longService?i("span",[e._v("小海回复："+e._s(t.miniServiceContent))]):i("span",[e._v("小海回复："+e._s(t.replyContent))]),t.longServiceBtn?i("div",{staticClass:"btn expand",class:{expandactive:t.longService},on:{click:function(t){return e.fnShowCommentContent("serviceReplyContent",s,n)}}},[e._v(e._s(t.longService?"展开":"收起")+" "),i("i")]):e._e()])])})),0):i("ul",e._l(t.serviceCommentReplies,(function(t,n){return i("li",{key:n,class:{"comment-list-li-short":!e.show}},[i("div",{staticClass:"comment-list-desc"},[i("span",[e._v("小海回复："+e._s(t.replyContent))])])])})),0)]):e._e(),t.storeCommentReplies&&t.storeCommentReplies.length>0?i("div",{staticClass:"comment-list-reply"},[e.show?i("ul",e._l(t.storeCommentReplies,(function(t,n){return i("li",{key:n},[i("div",{staticClass:"comment-list-desc"},[t.long?i("span",[e._v("商家回复："+e._s(t.miniReply))]):i("span",[e._v("商家回复："+e._s(t.replyContent))]),t.longBtn?i("div",{staticClass:"btn expand",class:{expandactive:t.long},on:{click:function(t){return e.fnShowCommentContent("replyContent",s,n)}}},[e._v(e._s(t.long?"展开":"收起")+" "),i("i")]):e._e()])])})),0):i("ul",e._l(t.storeCommentReplies,(function(t,n){return i("li",{key:n,class:{"comment-list-li-short":!e.show}},[n?e._e():i("div",{staticClass:"comment-list-desc"},[i("span",[e._v("商家回复："+e._s(t.replyContent))])])])})),0)]):e._e()])])})),0)],1),i("van-image-preview",{staticStyle:{background:"#000"},attrs:{images:e.imgPreShowList,"show-index":!1,"get-container":"#app-warp"},on:{change:e.onChange,close:e.preClose},scopedSlots:e._u([{key:"cover",fn:function(){return[i("div",{staticClass:"pic-pre-idx"},[i("span",[e._v(e._s(e.imgPreShowIndex+1)+"/"+e._s(e.imgPreShowList.length))])]),i("div",{staticClass:"comment-text",class:{fold:!e.expandStatus}},[i("div",{staticClass:"text-left"},[e._v(e._s(e.commentContent))]),i("div",{staticClass:"text-right",on:{click:e.toggleExpand}},[e.expandStatus?i("div",{staticClass:"open"}):i("div",{staticClass:"close"})])]),i("div",{staticClass:"img-pre-back",on:{click:e.preClose}})]},proxy:!0}]),model:{value:e.imgPreShow,callback:function(t){e.imgPreShow=t},expression:"imgPreShow"}})],1)},s=[],o=(n("4662"),n("28a2")),a=n("2b0e");a["a"].use(o["a"]);var c={props:["commentList","finished","vantLoading","finishedText","collapsible","hidePic","show"],data:function(){return{loading:!1,prevInstance:null,imgPreShow:!1,imgPreShowList:[],imgPreShowIndex:0,commentContent:"",commentTextShowStatus:!1,expandStatus:!1}},watch:{vantLoading:function(e){!1===e&&(this.loading=e)}},methods:{preClose:function(){this.imgPreShow=!1,this.expandStatus=!1},toggleExpand:function(){this.expandStatus=!this.expandStatus},onChange:function(e){this.imgPreShowIndex=e},fnShowCommentContent:function(e,t,n){this.$emit("fnShowCommentContent",{type:e,index:t,subIndex:n})},fnPreviewImage:function(e,t,n){var i=[];e.forEach((function(e){i.push(e.picUrl)})),this.imgPreShowList=i,this.imgPreShow=!0,this.commentContent=t},onLoad:function(){this.$emit("onLoad")}},beforeDestroy:function(){this.prevInstance&&this.prevInstance.close()}},l=c,m=(n("e6db"),n("4590"),n("2877")),r=Object(m["a"])(l,i,s,!1,null,"56f67b1d",null);t["a"]=r.exports},b87f:function(e,t,n){},e5b9:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"toTop",staticClass:"container",class:{"forbid-scroll":e.filterShow},attrs:{id:"commentInfo"},on:{scroll:e.handleScroll}},[n("div",{ref:"wrap",staticClass:"comment-wrap"},[n("div",{staticClass:"head"},[n("div",{staticClass:"divider"}),n("div",{staticClass:"title"},[n("span",{staticClass:"title-left"},[n("common-checkbox",{staticClass:"left",attrs:{width:"14px",height:"14px"},on:{onChange:e.toggleShopComment},model:{value:e.showGoodsComment,callback:function(t){e.showGoodsComment=t},expression:"showGoodsComment"}}),n("span",{staticClass:"filter-label label-left"},[e._v("只看当前商品")]),e.storeId?n("common-checkbox",{staticClass:"left",attrs:{width:"14px",height:"14px"},on:{onChange:e.toggleShopComment},model:{value:e.showShopComment,callback:function(t){e.showShopComment=t},expression:"showShopComment"}}):e._e(),e.storeId?n("span",{staticClass:"filter-label"},[e._v("只看当前店铺")]):e._e()],1),n("span",{staticClass:"title-right"},[e._v(" 好评度 "+e._s(e.positiveRate)+"% ")])]),n("ul",{class:{expand:e.expandFlag}},e._l(e.praiseList,(function(t,i){return n("li",{key:i,class:{active:t.selected},on:{click:function(n){return e.fnChangeCommentType(t,i)}}},[e._v(e._s(t.impressionName)+"（"+e._s(t.labelNum)+"）")])})),0),e.showExpand?n("div",{staticClass:"expand"},[e.expandFlag?e._e():n("img",{attrs:{alt:"",src:e.$cdnImageUrl+"/cart/icon-arrow-down1.png"},on:{click:e.fnExpandPraise}}),e.expandFlag?n("img",{attrs:{alt:"",src:e.$cdnImageUrl+"/cart/icon-arrow-up1.png"},on:{click:e.fnExpandPraise}}):e._e()]):e._e()]),e.commentList.length?n("comment-list",{attrs:{show:e.show,commentList:e.commentList,finished:e.finished,finishedText:e.finishedText,vantLoading:e.vantLoading,hidePic:!1},on:{fnShowCommentContent:e.fnShowCommentContent,onLoad:e.onLoad}}):e._e(),0===e.commentList.length?n("div",{staticClass:"nodata"},[e._v("暂时没有评价")]):e._e()],1),n("top-feedBack",{attrs:{isShow:e.showToTopFlag},on:{hiddenFeedBack:e.hiddenFeedBack,toTop:e.fnScrollToTop}})],1)},s=[],o=n("a34a"),a=n.n(o),c=n("8caa"),l=n("6d84"),m=n("1669"),r=n("85e4");function d(e,t,n,i,s,o,a){try{var c=e[o](a),l=c.value}catch(m){return void n(m)}c.done?t(l):Promise.resolve(l).then(i,s)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var o=e.apply(t,n);function a(e){d(o,i,s,a,c,"next",e)}function c(e){d(o,i,s,a,c,"throw",e)}a(void 0)}))}}var p={mixins:[m["a"]],components:{commentList:c["a"],commonCheckbox:l["a"]},props:["proId","posRate","storeId","show"],data:function(){return{praiseList:[{labelNum:0,impressionName:"全部",commentType:"all"},{labelNum:0,impressionName:"好评",commentType:"praise"},{labelNum:0,impressionName:"中评",commentType:"neutral"},{labelNum:0,impressionName:"差评",commentType:"poor"},{labelNum:0,impressionName:"有图",commentType:"image"},{labelNum:0,impressionName:""}],praiseListBak:[],expandFlag:!1,showExpand:!1,productId:"",positiveRate:0,commentList:[],commentType:"all",pageSize:20,pageIndex:1,finished:!1,finishedText:"没有更多啦~",vantLoading:!1,isShowStoreComment:!1,commentChangeDisable:!1,filterShow:!1,showGoodsComment:!1,showShopComment:!1,scrollTarget:"#commentInfo"}},created:function(){this.praiseListBak=this.praiseList,this.productId=this.proId,this.positiveRate=this.posRate,this.toAssessList(),this.getCommentsByCondition(),this.initImpressions()},methods:{goodsComment:function(){this.showGoodsComment=!this.showGoodsComment,this.toggleShopComment()},shopComment:function(){this.showShopComment=!this.showShopComment,this.toggleShopComment()},toggleFilter:function(){this.filterShow=!this.filterShow},bgClicked:function(){this.filterShow=!1},initImpressions:function(){var e=this;this.getProductImpressions().then((function(t){e.praiseList=t?e.praiseListBak.concat(t):e.praiseListBak,e.praiseList.forEach((function(e,t){t<5&&(e.selected=!1,0===t&&(e.selected=!0))})),e.praiseList.length>6?e.showExpand=!0:e.showExpand=!1}))},toAssessList:function(){var e=this;Object(r["Pb"])({productId:this.productId}).then((function(t){t.success?(e.praiseList[0].labelNum=t.data.totalNum,e.praiseList[1].labelNum=t.data.positiveNum,e.praiseList[2].labelNum=t.data.neutralNum,e.praiseList[3].labelNum=t.data.negativeNum,e.praiseList[4].labelNum=t.data.hasPicNum):e.$toast(t.message)}))},toggleAssessList:function(){var e=this,t={productId:this.productId};this.showGoodsComment&&(t.onlyQueryProductId=!0),this.showShopComment&&(t.storeId=this.storeId),Object(r["Pb"])(t).then((function(t){t.success?(e.praiseList[0].labelNum=t.data.totalNum,e.praiseList[1].labelNum=t.data.positiveNum,e.praiseList[2].labelNum=t.data.neutralNum,e.praiseList[3].labelNum=t.data.negativeNum,e.praiseList[4].labelNum=t.data.hasPicNum):e.$toast(t.message)}))},getProductImpressions:function(){var e=this;return new Promise((function(t,n){var i={productId:e.productId};e.showGoodsComment&&(i.onlyQueryProductId=!0),e.showShopComment&&(i.storeId=e.storeId),Object(r["Z"])(i).then((function(n){n.success?t(n.data):(t(null),e.$toast(n.message))}))}))},getCommentsByCondition:function(){var e=this;return new Promise((function(t,n){var i={commentType:e.commentType,productId:e.productId,pageSize:e.pageSize,pageIndex:e.pageIndex};e.showGoodsComment&&(i.onlyQueryProductId=!0),e.showShopComment&&(i.storeId=e.storeId),Object(r["I"])(i).then((function(n){n.success?(e.commentList=e.commentList.concat(e.fnFormatComment(n.data)),e.finished=n.data.length!==e.pageSize,t()):e.$toast(n.message)}))}))},toggleShopComment:function(){var e=this;this.toggleAssessList(),this.initImpressions(),this.$emit("toggleShowStoreComment",this.isShowStoreComment);var t={commentType:"all",productId:this.productId,pageSize:this.pageSize,pageIndex:this.pageIndex};return this.showGoodsComment&&(t.onlyQueryProductId=!0),this.showShopComment&&(t.storeId=this.storeId),new Promise((function(n,i){Object(r["I"])(t).then((function(t){t.success?(e.commentList=e.fnFormatComment(t.data),e.finished=t.data.length!==e.pageSize,n()):e.$toast(t.message)}))}))},fnFormatComment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return 0===e.length?[]:(e.forEach((function(e){if(e.commentContent.length>71?(e.longContentBtn=!0,e.longContent=!0,e.miniContent=e.commentContent.substring(0,71)+"..."):e.miniContent=e.commentContent,e.storeCommentReplies&&e.storeCommentReplies.length){var t=e.storeCommentReplies;t.forEach((function(e){e.replyContent.length>71?(e.longBtn=!0,e["long"]=!0,e.miniReply=e.replyContent.substring(0,71)+"..."):e.miniReply=e.replyContent}))}if(e.experienceContent&&e.experienceContent.length){var n=e.experienceContent;n.length>71?(e.longExperienceBtn=!0,e.longExperience=!0,e.miniExperienceContent=e.experienceContent.substring(0,71)+"..."):(e.longExperience=!1,e.miniExperienceContent=e.experienceContent)}if(e.serviceCommentReplies&&e.serviceCommentReplies.length){var i=e.serviceCommentReplies;i.forEach((function(e){e.replyContent.length>71?(e.longServiceBtn=!0,e.longService=!0,e.miniServiceContent=e.replyContent.substring(0,71)+"..."):(e.longService=!1,e.miniServiceContent=e.replyContent)}))}})),e)},fnChangeCommentType:function(e,t){t>4||(this.praiseList.forEach((function(e){e.selected=!1})),this.praiseList[t].selected=!0,this.commentType=e.commentType,this.pageIndex=1,this.commentList=[],this.finished=!1,this.getCommentsByCondition())},fnExpandPraise:function(){this.expandFlag=!this.expandFlag},fnShowCommentContent:function(e){"commentContent"===e.type?this.commentList[e.index].longContent=!this.commentList[e.index].longContent:"experienceContent"===e.type?this.commentList[e.index].longExperience=!this.commentList[e.index].longExperience:"serviceReplyContent"===e.type?this.commentList[e.index].serviceCommentReplies[e.subIndex].longService=!this.commentList[e.index].serviceCommentReplies[e.subIndex].longService:"replyContent"===e.type&&(this.commentList[e.index].storeCommentReplies[e.subIndex]["long"]=!this.commentList[e.index].storeCommentReplies[e.subIndex]["long"])},onLoad:function(){var e=this;return h(a.a.mark((function t(){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.pageIndex++,e.vantLoading=!0,t.next=4,e.getCommentsByCondition();case 4:e.vantLoading=!1;case 5:case"end":return t.stop()}}),t)})))()},closeModel:function(){this.$emit("closeComment")}}},u=p,g=(n("7f1d"),n("2877")),f=Object(g["a"])(u,i,s,!1,null,"6b29babe",null);t["default"]=f.exports},e6db:function(e,t,n){"use strict";n("77d2")}}]);
//# sourceMappingURL=chunk-be445e7e.2651543f.js.map