(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lazy-comment-info"],{"39a8":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",attrs:{id:"comment-container"}},[i("div",{staticClass:"comment"},[i("div",{staticClass:"title"},[i("div",{staticClass:"left"},[i("div",{staticClass:"before-left"}),t._v(" 商品评价 "),i("span",{staticClass:"left-number"},[t._v(t._s(t._f("formatNumber")(t.commentTotal)))])]),i("div",{staticClass:"right",on:{click:t.fnOpenCommentDetail}},[i("span",[i("span",{staticClass:"rate"},[t._v(t._s(t.positiveRate)+"%")]),t._v(" 好评")]),i("img",{attrs:{alt:"",src:t.$cdnImageUrl+"/goodsDetail/listmore.png"}})])]),t.praiseList&&t.praiseList.length>0&&Number(t.commentTotal)>0?i("div",{staticClass:"comment-hot-tips"},t._l(t.praiseList,(function(e){return i("div",{key:e.impressionName,staticClass:"comment-hot-btn"},[t._v(t._s(e.impressionName)+"("+t._s(e.labelNum)+")")])})),0):t._e(),t.commentList.length?i("comment-list",{attrs:{commentList:t.commentList,finished:!0,finishedText:t.finishedText,collapsible:!0,hidePic:!0},on:{fnShowCommentContent:t.fnShowCommentContent}}):t._e(),0===t.commentList.length?i("div",{staticClass:"nodata"},[t._v("暂时没有评价")]):t._e(),t.imgCommentList&&t.imgCommentList.length>0?i("div",{staticClass:"comment-imgs-container"},[i("div",{staticClass:"imgs-header",on:{click:t.toHotImgs}},[i("div",{staticClass:"header-title"},[i("div",{staticClass:"before-left"}),t._v("晒图评价"),i("div",{staticClass:"left-number"},[t._v(t._s(t.imgTotalCount))])]),i("div",{staticClass:"right-arrow"},[i("img",{attrs:{alt:"",src:t.$cdnImageUrl+"/goodsDetail/listmore.png"}})])]),i("div",{staticClass:"imgs-container"},t._l(t.imgCommentList,(function(e,s){return i("div",{key:e.commentId,staticClass:"img-item",on:{click:function(i){return t.fnPreviewImage(e,s)}}},[i("img",{staticClass:"img-thumb",attrs:{alt:"",src:t._f("imageToWebp")(t._f("imageThumb")(t._f("imageToHttps")(e.picList[0].picUrl),"300"),t.$webpSurpport)}}),i("div",{staticClass:"btm-right-num"},[t._v(t._s(e.picList.length)+"张")])])})),0)]):t._e(),i("div",{staticClass:"comment-all"},[i("div",{staticClass:"btn",on:{click:t.fnOpenCommentDetail}},[t._v("查看全部评价")])])],1),i("van-popup",{style:{height:"100%",width:"100%",zIndex:"2020",overflow:"hidden"},attrs:{id:"comment_detail_popup",position:"right"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t.show?i("comment-detail",{ref:"com-d",attrs:{show:t.show,proId:t.productId,posRate:t.positiveRate,storeId:t.storeId},on:{closeComment:t.closeComment,toggleShowStoreComment:t.toggleShowStoreComment}}):t._e()],1),i("van-image-preview",{staticStyle:{background:"#000"},attrs:{images:t.imgPreShowList,"show-index":!1,"get-container":"#app-warp"},on:{change:t.onChange,close:t.preClose},scopedSlots:t._u([{key:"cover",fn:function(){return[i("div",{staticClass:"pic-pre-idx"},[i("span",[t._v(t._s(t.imgPreShowIndex+1)+"/"+t._s(t.imgPreShowList.length))])]),i("div",{staticClass:"comment-text",class:{fold:!t.expandStatus}},[i("div",{staticClass:"text-left"},[t._v(t._s(t.commentContent))]),i("div",{staticClass:"text-right",on:{click:t.toggleExpand}},[t.expandStatus?i("div",{staticClass:"open"}):i("div",{staticClass:"close"})])]),i("div",{staticClass:"img-pre-back",on:{click:t.preClose}})]},proxy:!0}]),model:{value:t.imgPreShow,callback:function(e){t.imgPreShow=e},expression:"imgPreShow"}})],1)},o=[],n=(i("8a58"),i("e41f")),a=(i("4662"),i("28a2")),m=i("2b0e"),c=i("8caa"),r=i("e5b9"),l=i("85e4");m["a"].use(a["a"]),m["a"].use({Popup:n["a"]});var d={components:{commentList:c["a"],commentDetail:r["default"]},props:["productId","commentTotal","positiveRate","commentList","show","storeId"],data:function(){return{finishedText:"",praiseList:[],isShowStoreComment:!1,imgCommentList:[],imgTotalCount:0,prevInstance:null,imgPreShow:!1,imgPreShowList:[],imgPreShowIndex:0,commentContent:"",commentTextShowStatus:!1,expandStatus:!1}},created:function(){this.initImpressions(),this.getCommentsByCondition(),this.toAssessList()},filters:{formatNumber:function(t){return t<=999?t:t>=1e3?(t/1e3).toFixed(0)+"000+":void 0}},methods:{preClose:function(){this.imgPreShow=!1,this.expandStatus=!1},toggleExpand:function(){this.expandStatus=!this.expandStatus},onChange:function(t){this.imgPreShowIndex=t},toAssessList:function(){var t=this;Object(l["Pb"])({productId:this.productId}).then((function(e){e.success&&(t.imgTotalCount=e.data.hasPicNum)}))},fnPreviewImage:function(t,e){var i=[];t.picList.forEach((function(t){i.push(t.picUrl)})),this.imgPreShowList=i,this.imgPreShow=!1,this.imgPreShow=!0,this.commentContent=t.commentContent},toggleShowStoreComment:function(t){this.isShowStoreComment=t,this.initImpressions(),this.getCommentsByCondition()},initImpressions:function(){var t=this,e={productId:this.productId};this.isShowStoreComment&&(e.storeId=this.storeId),Object(l["Z"])(e).then((function(e){e.success&&(t.praiseList=e.data)}))},getCommentsByCondition:function(){var t=this;return new Promise((function(e,i){var s={commentType:"image",productId:t.productId,pageSize:10,pageIndex:1};t.isShowStoreComment&&(s.storeId=t.storeId),Object(l["I"])(s).then((function(i){i.success&&(t.imgCommentList=i.data,t.imgCommentList.forEach((function(t){t.picList=t.commentPics.concat(t.experiencePics)})),console.log("imgCommentList:"),console.log(t.imgCommentList),e())}))}))},closeComment:function(){this.$emit("toggleCommentHeader")},fnOpenCommentDetail:function(){this.$util.gioTrackWithVariable("MB15623"),this.$emit("toggleCommentHeader")},fnShowCommentContent:function(t){this.$emit("fnShowCommentContent",t)},toHotImgs:function(){this.$router.push({path:"/hotImgs",query:{productId:this.productId}})}}},h=d,p=(i("a739"),i("2877")),u=Object(p["a"])(h,s,o,!1,null,"7600a0d5",null);e["default"]=u.exports},"6b9d":function(t,e,i){},a739:function(t,e,i){"use strict";i("6b9d")}}]);
//# sourceMappingURL=lazy-comment-info.f0ab89e8.js.map