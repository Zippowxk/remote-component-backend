(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-647ac656"],{"223f":function(t,e,n){"use strict";n("858e")},"347c":function(t,e,n){},"3e10":function(t,e,n){"use strict";n("dd5f")},4662:function(t,e,n){"use strict";n("68ef"),n("a71a"),n("9d70"),n("3743"),n("09fe"),n("4d75"),n("e3b3"),n("8270"),n("786d"),n("504b")},"4fda":function(t,e,n){"use strict";n("d1aa")},"507e":function(t,e,n){},"56f8":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isSkeletonLoading?n("skeleton",{attrs:{nums:3}}):n("div",{staticClass:"content"},[n("Header",{attrs:{leftClick:t.doBack}},[n("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[n("div",{staticClass:"text"},[t._v("订单评价")]),n("span",[t._v("零售单 "+t._s(t.orderSn))])]),-1!==[1,2].indexOf(t.type)?n("div",{staticClass:"right-btn",attrs:{slot:"right"},on:{click:t.onSubmit},slot:"right"},[t._v(" 提交 ")]):t._e()]),n("div",{staticStyle:{height:".92rem"}}),n("evaluateTop",{attrs:{isLook:t.type>1,status:t.firstStatus,evaluateType:0,commentInfo:t.commentInfo},on:{choose:t.chooseType}}),t.type<=1&&t.firstStatus>=0?[n("tag-list",{attrs:{tagList:t.allTagInfo,evaluateType:0},on:{chooseTag:t.chooseTag}}),n("input-info",{attrs:{status:t.firstStatus,evaluateType:0},on:{updateInfo:t.updateInfo}})]:t._e(),2===t.type||3===t.type&&null!==t.secondCommentInfo?[n("evaluateTop",{attrs:{isLook:3===t.type,status:t.secondStatus,evaluateType:1,commentInfo:t.secondCommentInfo},on:{choose:t.chooseType}}),2===t.type&&t.secondStatus>=0?[n("tag-list",{attrs:{tagList:t.allTagInfo,evaluateType:1},on:{chooseTag:t.chooseTag}}),n("input-info",{attrs:{status:t.secondStatus,evaluateType:1},on:{updateInfo:t.updateInfo}})]:t._e()]:t._e()],2)],1)},a=[],i=n("a34a"),o=n.n(i),c=n("bbc2"),r=n("1c03"),u=function(t){return Object(r["b"])(c["a"].getEvaluateDetail,t)},l=function(t){return Object(r["b"])(c["a"].getTagList,t)},m=function(t){return Object(r["c"])(c["a"].saveEvaluate,t)},p=function(t){return Object(r["c"])(c["a"].saveEvaluateAppend,t)},f=n("a73f"),d=n("e725"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.allTagList.length?n("div",{staticClass:"content"},[t._l(t.allTagList,(function(e,s){return[e.commentImpressionVOList.length?n("div",{key:s},[n("div",{staticClass:"title"},[t._v(t._s(e.impressionTypeName))]),n("div",{staticClass:"tag-row"},[t._l(e.commentImpressionVOList,(function(e,a){return[n("div",{key:a,staticClass:"tag-normal",class:{active:e.isChecked},on:{click:function(e){return t.chooseTag(a,s)}}},[n("span",[t._v(t._s(e.impressionName))])])]}))],2)]):t._e()]}))],2):t._e()},g=[];function v(t){return C(t)||T(t)||b(t)||y()}function y(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(t,e){if(t){if("string"===typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(t,e):void 0}}function T(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function C(t){if(Array.isArray(t))return _(t)}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}var I={props:{evaluateType:{type:Number,default:0},tagList:{type:Array,default:function(){return[]}}},watch:{tagList:{handler:function(t){this.allTagList=t},immediate:!0}},data:function(){return{allTagList:[],chooseList:[]}},methods:{chooseTag:function(t,e){var n=this.allTagList;n[e].commentImpressionVOList.map((function(e,n){t===n&&(e.isChecked=!e.isChecked)})),this.allTagList=v(n),this.$emit("chooseTag",this.allTagList,this.evaluateType)}}},w=I,L=(n("223f"),n("2877")),k=Object(L["a"])(w,h,g,!1,null,"ad6b78f8",null),S=k.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content",style:{marginTop:1===t.evaluateType?".16rem":0,borderRadius:1===t.evaluateType?".24rem":"0 0 .24rem .24rem"}},[n("div",{staticClass:"title"},[t._v(" "+t._s(0===t.evaluateType?-1===t.status?"您对本次门店购物是否满意?":"首次评价":-1===t.status?"您对本次门店购物追加评价?":"追加评价")+" ")]),n("div",{staticClass:"row"},[n("div",{staticClass:"status-row",on:{click:function(e){return t.choose(1)}}},[n("img",{attrs:{src:"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/orders/good-"+(1===t.chooseType?"select":"normal")+".png"}}),n("span",[t._v("满意")])]),n("div",{staticClass:"status-row",on:{click:function(e){return t.choose(0)}}},[n("img",{attrs:{src:"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/orders/bad-"+(0===t.chooseType?"select":"normal")+".png"}}),n("span",[t._v("不满意")])])]),t.isExpand?n("tag-info",{attrs:{info:t.commentInfo}}):t._e(),t.isLook?n("div",{staticClass:"expand",on:{click:function(e){t.isExpand=!t.isExpand}}},[n("span",[t._v(t._s(t.isExpand?"折叠评价":"展开评价"))]),n("img",{attrs:{src:"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/orders/"+(t.isExpand?"order-info-expand-up":"order-info-expand-down")+".png"}})]):t._e()],1)},$=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t.info.commentImpressionTypeList?t._l(t.info.commentImpressionTypeList,(function(e,s){return n("div",{key:s,staticClass:"row"},[n("div",{staticClass:"tag-name"},[t._v(t._s(e.impressionTypeName))]),n("div",{staticClass:"tag-row"},t._l(e.commentImpressionVOList,(function(e,s){return n("div",{key:s,staticClass:"tag-content"},[t._v(" "+t._s(e.impressionName)+" ")])})),0)])})):t._e(),t.info.commentContent||t.imgList.length?n("div",{staticClass:"row"},[n("div",{staticClass:"tag-name"},[t._v("评价内容")]),n("div",[n("div",{staticClass:"tag-content evaluate-content"},[t._v(" "+t._s(t.info.commentContent||"")+" ")]),n("div",{staticClass:"img-row"},t._l(t.imgList,(function(e,s){return n("img",{key:s,attrs:{src:e},on:{click:function(e){return t.previewImg(s)}}})})),0)])]):t._e(),t.createDate?n("div",{staticClass:"row",staticStyle:{"margin-bottom":".28rem"}},[n("div",{staticClass:"tag-name"},[t._v("评价时间")]),n("div",{staticClass:"tag-row"},[n("div",{staticClass:"tag-content"},[t._v(" "+t._s(t.createDate)+" ")])])]):t._e()],2)},E=[],j=(n("4662"),n("28a2")),N=n("2b0e"),A=n("4191");N["a"].use(j["a"]);var H={props:{evaluateType:{type:Number,default:0},info:{type:Object,default:function(){}}},data:function(){return{imgList:[]}},watch:{info:{handler:function(t){if(t.cmtCommentSharePicsList&&t.cmtCommentSharePicsList.length){var e=[];t.cmtCommentSharePicsList.map((function(t){e.push(t.picFileUrl)})),this.imgList=[].concat(e)}},immediate:!0}},methods:{previewImg:function(t){Object(j["a"])({images:this.imgList,startPosition:t})}},computed:{createDate:function(){var t="";return this.info.createTime&&(t=A["a"].formatAllFullDate(new Date(this.info.createTime))),t}}},B=H,D=(n("fa4e"),Object(L["a"])(B,O,E,!1,null,"3b224872",null)),P=D.exports,z={props:{status:{type:Number,default:-1},isLook:{type:Boolean,default:!1},evaluateType:{type:Number,default:0},commentInfo:{type:Object,default:function(){}}},components:{tagInfo:P},data:function(){return{chooseType:-1,isExpand:!1,isInfo:!1}},watch:{status:{handler:function(t){this.chooseType=t},immediate:!0}},methods:{choose:function(t){this.isLook||(this.chooseType=t,this.$emit("choose",t,this.evaluateType))}}},V=z,F=(n("bb59"),Object(L["a"])(V,x,$,!1,null,"773ac66c",null)),U=F.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"input-row"},[t.isFocus?t._e():n("img",{attrs:{src:"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/orders/edit.png"}}),n("van-field",{attrs:{type:"textarea",maxlength:"500",size:"large",clearable:"",border:!1,placeholder:"可手动输入，标签不可描述的"+(0===t.status?"不":"")+"满意"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),n("div",{staticClass:"input-count"},[t._v(" 已写"),n("span",[t._v(t._s(t.inputNum))]),t._v("个字 ")]),n("upload-img",{staticStyle:{width:"100%","margin-top":"12px"},attrs:{multiple:!0,maxCount:9,imageFit:"fill",oversize:t.onOverSize,maxSize:5242880},on:{onImagesChange:t.updateInput},model:{value:t.images,callback:function(e){t.images=e},expression:"images"}})],1)},q=[],J=function(){return n.e("chunk-f8c24922").then(n.bind(null,"40cb"))},R={components:{UploadImg:J},props:{evaluateType:{type:Number,default:0},status:{type:Number,default:1}},data:function(){return{content:"",isFocus:!1,inputNum:0,isHaierApp:this.$util.isHaierApp(),images:[],imgPreview:[]}},watch:{content:function(t){this.inputNum=t.length,this.isFocus=this.inputNum>0,this.$emit("updateInfo",this.content,this.images,this.evaluateType)}},methods:{updateInput:function(){this.$emit("updateInfo",this.content,this.images,this.evaluateType)},onOverSize:function(){this.$toast("图片不可大于5M")}}},G=R,K=(n("3e10"),Object(L["a"])(G,M,q,!1,null,"528c2682",null)),Q=K.exports,W=n("d3c8"),X=n("21b1");function Y(t,e,n,s,a,i,o){try{var c=t[i](o),r=c.value}catch(u){return void n(u)}c.done?e(r):Promise.resolve(r).then(s,a)}function Z(t){return function(){var e=this,n=arguments;return new Promise((function(s,a){var i=t.apply(e,n);function o(t){Y(i,s,a,o,c,"next",t)}function c(t){Y(i,s,a,o,c,"throw",t)}o(void 0)}))}}var tt=new X["a"];tt.initDeviceReady();var et={components:{skeleton:f["a"],Header:d["a"],tagList:S,evaluateTop:U,inputInfo:Q},data:function(){return{isSkeletonLoading:!1,firstStatus:-1,secondStatus:-1,inputContent:"",imgList:[],tagInfo:"",orderSn:"",type:0,allTagInfo:[],commentInfo:{},secondCommentInfo:{}}},mounted:function(){this.orderSn=this.$route.query.orderSn,this.type=+this.$route.query.type,this.type>1&&this.getDetail()},methods:{doBack:function(){var t=this;this.inputContent.length||this.imgList.length?this.$dialog.confirm({message:"您编辑的内容尚未提交，是否退出？",confirmButtonText:"继续评价",cancelButtonText:"退出",cancelButtonColor:"#999"}).then((function(){t.onSubmit()}))["catch"]((function(){t.$store.dispatch("doHistoryBack")})):this.$store.dispatch("doHistoryBack")},getDetail:function(){var t=this,e={corderSn:this.orderSn,type:2===this.type?1:2};u(e).then((function(e){e.success&&(t.commentInfo=e.data.orgComment,t.firstStatus=5===t.commentInfo.star?1:0,3===t.type&&(t.secondCommentInfo=e.data.extComment||null,e.data.extComment&&(t.secondStatus=5===t.secondCommentInfo.star?1:0)))}))},getTagInfo:function(t){var e=this;l({ciType:0,score:t}).then((function(t){t.success&&(e.allTagInfo=t.data.commentImpressionTypeList)}))},chooseType:function(t,e){0===e?this.firstStatus=t:this.secondStatus=t,this.getTagInfo(1===t?5:0)},chooseTag:function(t,e){},updateInfo:function(t,e,n){this.inputContent=t,this.imgList=e},onSubmit:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0});var e=1===this.type?this.firstStatus:this.secondStatus,n=this.getCheckTag();if(-1!==e)if(n.length){var s={orderSn:this.orderSn,type:this.type,commentImpressionVOList:n,star:1===e?5:0,commentContent:this.inputContent,fieldIdList:[]};this.imgList.length?W["a"].uploadPictureBybase64({base64s:this.imgList.map((function(t){return t.content.split(",")[1]}))}).then((function(e){if(console.log(e),e.data.success){var n=e.data;console.log(n,"+++++ upload base64 ++++++");var a=[];n.data.fileList.map((function(t){a.push(t.imgUrl)})),s.fieldIdList=a,console.log(s.fieldIdList,"data.fileIds"),t.submitEvaluate(s)}else t.$toast.fail(e.data.message)})):this.submitEvaluate(s)}else this.$toast("请对此次评价进行详细评价");else this.$toast("请填写评价内容")},submitEvaluate:function(t){var e=this;return Z(o.a.mark((function n(){var s;return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(s={},1!==e.type){n.next=7;break}return n.next=4,m(t);case 4:s=n.sent,n.next=10;break;case 7:return n.next=9,p(t);case 9:s=n.sent;case 10:e.$toast.clear(),s.success?(e.$toast.success("提交成功"),setTimeout((function(){e.$store.dispatch("doHistoryBack")}),2e3)):"COM9999"===s.errorCode?(e.$toast.fail(s.message),setTimeout((function(){e.$store.dispatch("doHistoryBack")}),2e3)):e.$toast.fail(s.message);case 12:case"end":return n.stop()}}),n)})))()},getCheckTag:function(){var t=[];return this.allTagInfo.map((function(e){e.commentImpressionVOList&&e.commentImpressionVOList.map((function(e){e.isChecked&&t.push(e)}))})),t},exceptEmpty:function(t){for(var e in t)"commentContent"!==e&&(""!==t[e]&&0!==t[e]||delete t[e])}}},nt=et,st=(n("4fda"),Object(L["a"])(nt,s,a,!1,null,"0abc1157",null));e["default"]=st.exports},"80cc":function(t,e,n){"use strict";n("347c")},"858e":function(t,e,n){},a73f:function(t,e,n){"use strict";var s=function(t,e){var n=e._c;return e.props.nums>0?n("div",{staticClass:"m-skeleton",style:{"z-index":e.props.zIndex||0}},[n("div",{style:{background:e.props.bgColor,height:e.props.fheight}}),e._l(e.props.nums-1,(function(t){return n("div",{key:t,style:{background:e.props.bgColor,height:e.props.iheight}})}))],2):e._e()},a=[],i=(n("80cc"),n("2877")),o={},c=Object(i["a"])(o,s,a,!0,null,null,null);e["a"]=c.exports},ba9d:function(t,e,n){},bb59:function(t,e,n){"use strict";n("507e")},d1aa:function(t,e,n){},dd5f:function(t,e,n){},fa4e:function(t,e,n){"use strict";n("ba9d")}}]);
//# sourceMappingURL=chunk-647ac656.02b460b8.js.map