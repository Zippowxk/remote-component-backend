(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ed5c12d"],{"480b":function(t,s,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("9ee3")},"9ee3":function(t,s,i){},a37c:function(t,s,i){"use strict";var e=i("d282"),o=i("a142"),a=i("4598"),n=i("5fbe"),l=i("ad06"),c=Object(e["a"])("notice-bar"),r=c[0],d=c[1];s["a"]=r({mixins:[Object(n["a"])((function(t){t(window,"pageshow",this.start)}))],inject:{vanPopup:{default:null}},props:{text:String,mode:String,color:String,leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null},delay:{type:[Number,String],default:1},speed:{type:[Number,String],default:60}},data:function(){return{show:!0,offset:0,duration:0,wrapWidth:0,contentWidth:0}},watch:{scrollable:"start",text:{handler:"start",immediate:!0}},created:function(){var t=this;this.vanPopup&&this.vanPopup.onReopen((function(){t.start()}))},activated:function(){this.start()},methods:{onClickIcon:function(t){"closeable"===this.mode&&(this.show=!1,this.$emit("close",t))},onTransitionEnd:function(){var t=this;this.offset=this.wrapWidth,this.duration=0,Object(a["c"])((function(){Object(a["b"])((function(){t.offset=-t.contentWidth,t.duration=(t.contentWidth+t.wrapWidth)/t.speed,t.$emit("replay")}))}))},reset:function(){this.offset=0,this.duration=0,this.wrapWidth=0,this.contentWidth=0},start:function(){var t=this,s=Object(o["c"])(this.delay)?1e3*this.delay:0;this.reset(),clearTimeout(this.startTimer),this.startTimer=setTimeout((function(){var s=t.$refs,i=s.wrap,e=s.content;if(i&&e&&!1!==t.scrollable){var o=i.getBoundingClientRect().width,n=e.getBoundingClientRect().width;(t.scrollable||n>o)&&Object(a["b"])((function(){t.offset=-n,t.duration=n/t.speed,t.wrapWidth=o,t.contentWidth=n}))}}),s)}},render:function(){var t=this,s=arguments[0],i=this.slots,e=this.mode,o=this.leftIcon,a=this.onClickIcon,n={color:this.color,background:this.background},c={transform:this.offset?"translateX("+this.offset+"px)":"",transitionDuration:this.duration+"s"};function r(){var t=i("left-icon");return t||(o?s(l["a"],{class:d("left-icon"),attrs:{name:o}}):void 0)}function u(){var t,o=i("right-icon");return o||("closeable"===e?t="cross":"link"===e&&(t="arrow"),t?s(l["a"],{class:d("right-icon"),attrs:{name:t},on:{click:a}}):void 0)}return s("div",{attrs:{role:"alert"},directives:[{name:"show",value:this.show}],class:d({wrapable:this.wrapable}),style:n,on:{click:function(s){t.$emit("click",s)}}},[r(),s("div",{ref:"wrap",class:d("wrap"),attrs:{role:"marquee"}},[s("div",{ref:"content",class:[d("content"),{"van-ellipsis":!1===this.scrollable&&!this.wrapable}],style:c,on:{transitionend:this.onTransitionEnd}},[this.slots()||this.text])]),u()])}})},ad5f:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"invoice-express"},[i("Header",[i("div",{staticClass:"header-text",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.modifyFlag?"修改快递信息":"填写快递信息"))])]),t.expressPageInfo.consignee?[t._m(0),i("div",{staticClass:"common-row"},[i("div",{staticClass:"uni-list"},[i("div",{staticClass:"uni-list-cell"},[i("div",{staticClass:"uni-list-cell-left"},[t._v(" 收货人 ")]),i("div",{staticClass:"uni-list-cell-right"},[t._v(" "+t._s(t.expressPageInfo.consignee)+" ")])])])]),i("div",{staticClass:"common-row"},[i("div",{staticClass:"uni-list"},[i("div",{staticClass:"uni-list-cell"},[i("div",{staticClass:"uni-list-cell-left"},[t._v(" 联系方式 ")]),i("div",{staticClass:"uni-list-cell-right"},[t._v(" "+t._s(t.expressPageInfo.consigneeMobile)+" ")])])])]),i("div",{staticClass:"common-row"},[i("div",{staticClass:"uni-list"},[i("div",{staticClass:"uni-list-cell"},[i("div",{staticClass:"uni-list-cell-left"},[t._v(" 收货地址 ")]),i("div",{staticClass:"uni-list-cell-right",staticStyle:{"font-size":"12px"}},[t._v(" "+t._s(t.expressPageInfo.consigneeAddress)+" ")])])])])]:i("notice-bar",{attrs:{"left-icon":"bell",text:"当前店铺未维护收货信息，请咨询客服"}}),i("div",{staticClass:"empty-row"}),i("div",{staticClass:"common-row company"},[i("van-cell",{attrs:{"is-link":""},on:{click:function(s){t.showLogistics=!0}}},[i("div",{staticClass:"uni-list-cell-left"},[t._v(" 物流公司 ")]),i("div",{staticClass:"uni-list-cell-select"},[t.expressPageInfo.logisticsCode?i("div",{staticClass:"uni-input"},[t._v(t._s(t.expressPageInfo.logisticsName))]):i("div",{staticClass:"uni-input wait-select"},[t._v("请选择")])])])],1),i("div",{staticClass:"common-row order-number"},[i("div",{staticClass:"uni-list"},[i("div",{staticClass:"uni-list-cell"},[i("div",{staticClass:"uni-list-cell-left"},[t._v(" 物流单号 ")]),i("div",{staticClass:"uni-list-cell-db"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.expressPageInfo.logisticsNo,expression:"expressPageInfo.logisticsNo"}],attrs:{type:"text",align:"right",placeholder:"请输入物流单号"},domProps:{value:t.expressPageInfo.logisticsNo},on:{input:function(s){s.target.composing||t.$set(t.expressPageInfo,"logisticsNo",s.target.value)}}})])])])]),i("div",{staticClass:"empty-row"}),i("div",{staticClass:"common-row phone-part"},[i("div",{staticClass:"uni-list"},[i("div",{staticClass:"uni-list-cell"},[i("div",{staticClass:"uni-list-cell-left"},[t._v(" 联系电话 ")]),i("div",{staticClass:"uni-list-cell-db"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.expressPageInfo.mobile,expression:"expressPageInfo.mobile"}],attrs:{type:"text",align:"right",placeholder:"请输入联系电话"},domProps:{value:t.expressPageInfo.mobile},on:{input:function(s){s.target.composing||t.$set(t.expressPageInfo,"mobile",s.target.value)}}})])])])]),t._m(1),i("div",{staticClass:"btn-group"},[i("div",{staticClass:"btn-confirm",on:{click:t.submit}},[t._v("提交")])]),i("van-popup",{attrs:{position:"bottom"},model:{value:t.showLogistics,callback:function(s){t.showLogistics=s},expression:"showLogistics"}},[i("van-picker",{attrs:{"show-toolbar":"",title:"物流公司",columns:t.logisticsCompanyNameList},on:{cancel:function(s){t.showLogistics=!1},confirm:t.onConfirmType}})],1)],2)},o=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"common-row"},[i("div",{staticClass:"uni-list"},[i("div",{staticClass:"uni-list-cell"},[i("div",{staticClass:"uni-list-cell-left",staticStyle:{"font-weight":"500"}},[t._v(" 收货信息 ")])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"desc"},[i("div",{staticClass:"desc-title"},[t._v(" 一、户头以公司名称为单位 ")]),i("div",{staticClass:"desc-row"},[t._v(" 1、发票未抵扣 ")]),i("div",{staticClass:"desc-row"},[t._v(" ①增值税专用/普票发票原件。 ")]),i("div",{staticClass:"desc-row"},[t._v(" ②拒收证明（A4纸打印或者手写都可以，需要写清楚为什么退货，盖上和发票抬头一致的公章）。 ")]),i("div",{staticClass:"desc-row"},[t._v(" 2、发票已抵扣 ")]),i("div",{staticClass:"desc-row"},[t._v(" ①系统开一个红字增值税专用发票信息表、原发票复印件 ")]),i("div",{staticClass:"desc-row"},[t._v(" ②拒收证明（A4纸打印或者手写都可以，需要写清楚为什么退货，盖上和发票抬头一致的公章） 。 ")]),i("div",{staticClass:"desc-title",staticStyle:{"margin-top":"5px"}},[t._v(" 二、户头以个人为单位，发票原件。 ")])])}],a=(i("480b"),i("a37c")),n=i("85e4"),l=i("e725"),c={components:{Header:l["a"],NoticeBar:a["a"]},data:function(){return{logisticsCompanyList:[],showLogistics:!1,modifyFlag:!1,expressPageInfo:{logisticsCode:"",logisticsName:"",logisticsNo:"",mobile:"",consignee:"刘能",consigneeMobile:"18828823434",consigneeAddress:"山东省青岛市即墨区朝海街道黄河三路和顺花园8号楼3单元301"}}},created:function(){var t=this;Object(n["qb"])({orderProductSn:this.$route.query.orderNo}).then((function(s){s.success&&(t.logisticsCompanyList=s.data.logisticsCompanyList||[],t.expressPageInfo=s.data.invoicePost)}))},methods:{onConfirmType:function(t,s){this.showLogistics=!1,this.expressPageInfo.logisticsCode=this.logisticsCompanyList[s].logisticsCode,this.expressPageInfo.logisticsName=this.logisticsCompanyList[s].logisticsName},submit:function(){var t=this,s=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;return this.expressPageInfo.logisticsCode?""===this.expressPageInfo.logisticsNo?(this.$toast.fail("请填写物流单号"),!1):""===this.expressPageInfo.mobile?(this.$toast.fail("请填写联系电话"),!1):this.expressPageInfo.mobile&&s.test(this.expressPageInfo.mobile)?void Object(n["rb"])({logisticsCode:this.expressPageInfo.logisticsCode,logisticsName:this.expressPageInfo.logisticsName,logisticsNo:this.expressPageInfo.logisticsNo,mobile:this.expressPageInfo.mobile,orderProductSn:this.$route.query.orderNo}).then((function(s){s.success?2!==Number(t.$route.query.invoiceType)?t.$dialog.alert({title:"您的发票邮寄信息已提交成功！",message:"换开发票在商城收到原发票及拒收证明后，5个工作日后寄出。"}).then((function(s){t.$router.go(-1)})):(t.$toast.success("提交成功"),t.$router.go(-1)):"INV0009"===s.errorCode?t.$dialog.alert({message:"本次修改失败，发票邮寄仅可三次"}):t.$toast.fail(s.message)})):(this.$toast.fail("请填写正确联系电话"),!1):(this.$toast.fail("请选择物流公司"),!1)}},computed:{logisticsCompanyNameList:function(){return this.logisticsCompanyList.map((function(t){return t.logisticsName}))}}},r=c,d=(i("d49b"),i("2877")),u=Object(d["a"])(r,e,o,!1,null,"93553268",null);s["default"]=u.exports},d49b:function(t,s,i){"use strict";i("e523")},e523:function(t,s,i){}}]);
//# sourceMappingURL=chunk-7ed5c12d.e496bf07.js.map