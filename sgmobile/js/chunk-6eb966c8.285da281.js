(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6eb966c8"],{"03f4":function(t,e,i){"use strict";i("073c")},"073c":function(t,e,i){},"1d82":function(t,e,i){},2098:function(t,e,i){},2622:function(t,e,i){"use strict";i("bc6c")},"27ef":function(t,e,i){},"347c":function(t,e,i){},"36a4":function(t,e,i){},4552:function(t,e,i){"use strict";i("2098")},"702b":function(t,e,i){},"80cc":function(t,e,i){"use strict";i("347c")},8229:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"apply-wrap"},[i("van-nav-bar",{directives:[{name:"show",rawName:"v-show",value:!t.invisiableBack,expression:"!invisiableBack"}],staticClass:"apply-wrap-header",attrs:{"left-arrow":""},on:{"click-left":t.fnBack}}),t.isSkeletonLoading?i("skeleton",{attrs:{nums:4,fheight:"4rem",iheight:"2rem"}}):i("div",{staticClass:"container"},[i("div",{staticClass:"top"},[i("div",{staticClass:"title"},[i("div",{staticClass:"big"},[t._v("欢迎加入"+t._s(t.interfaceTitle)+"合伙人！")]),i("div",{staticClass:"normal"},[t._v("完成以下资料并通过认证，即可成为"+t._s(t.interfaceTitle)+"合伙人")])]),i("div",{staticClass:"progress"},[i("van-steps",{staticStyle:{width:"auto"},attrs:{active:t.progressIndex}},t._l(t.progressInfo,(function(e,n){return i("van-step",{key:n},[i("template",{slot:"active-icon"},[i("img",{staticClass:"active-icon",attrs:{src:t.$cdnImageUrl+"/partner/active-h.png"}})]),i("template",{slot:"inactive-icon"},[i("img",{staticClass:"inactive-icon",attrs:{src:t.progressIndex<n?t.$cdnImageUrl+"/partner/inactive-h.png":t.$cdnImageUrl+"/partner/done.png"}})]),i("p",{staticClass:"title",style:{opacity:t.progressIndex<n?"0.7":"1"}},[t._v(t._s(e.title))])],2)})),1)],1)]),i("div",{staticClass:"bottom"},[i("div",{staticClass:"in-top"},[t.stage<=1?i("div",[i("stage-0",{attrs:{documentId:t.documentId,name:t.name,identify:t.identify,mobile:t.displayMobile,checked:t.checked,readOnly:t.readOnly,canEditMobile:t.canEditMobile,isSyn:t.isSyn},on:{idChange:t.fnIdChange,nameChange:t.fnNameChange,mobileChange:t.fnMobileChange,licenseChecked:t.fnLicenseChecked}})],1):2===t.stage?i("div",[i("stage-1",{attrs:{info:t.info,userIdentify:t.userIdentify,monthExpectSaleAmount:t.monthExpectSaleAmount,showCommunity:t.showCommunity,showPeople:t.showPeople},on:{nicknameChange:t.fnNicknameChange,jobChange:t.fnJobChange,communityChange:t.fnCommunityChange,communityAdd:t.fnCommunityAdd,communityClose:t.fnCommunityClose,timeChange:t.fnDateChange,locationChange:t.fnlocationChange,monthExpectSaleAmountChange:t.fnMonthExpectSaleAmountChange,peopleChange:t.fnPeopleChange,peopleAdd:t.fnPeopleAdd,peopleClose:t.fnPeopleClose}})],1):3===t.stage?i("div",[i("stage-2",{attrs:{info:t.verifyInfo,index:t.verifyIndex,cdn:t.$cdnImageUrl},on:{reApply:t.fnReApply}})],1):t._e()]),3!==t.stage?i("div",{staticClass:"button",on:{click:t.fnNextStep}},[t._v(t._s(2===t.stage?"提交":"下一步"))]):t._e()])]),i("van-popup",{style:{height:"40%"},attrs:{round:"",position:"bottom"},model:{value:t.showDateChange,callback:function(e){t.showDateChange=e},expression:"showDateChange"}},[i("van-datetime-picker",{attrs:{type:"year-month",title:"选择年月","min-date":t.minDate,"max-date":t.maxDate,formatter:t._formatter},on:{confirm:t.fnConfirmDate,cancel:function(e){t.showDateChange=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),i("van-popup",{style:{height:"9.6rem","border-radius":"12px 12px 0 0"},attrs:{position:"bottom","get-container":"#app-warp"},on:{close:t.fnOnHide,click:t.fnOnHide},model:{value:t.showChooseLoaction,callback:function(e){t.showChooseLoaction=e},expression:"showChooseLoaction"}},[t.showChooseLoaction?i("lazy-change-geographic-location",{attrs:{isShowBack:!1,title:"选择地址"},on:{onHide:t.fnOnHide,handleLocation:t.fnConfirmLocation}}):t._e()],1),i("van-popup",{style:{height:"100%"},attrs:{"close-on-click-overlay":!1,position:"bottom","get-container":"#app-warp"},model:{value:t.showJobs,callback:function(e){t.showJobs=e},expression:"showJobs"}},[t.showJobs?i("jobs",{on:{confirm:t.fnConfirmJobChange,cancel:t.fnOnHide}}):t._e()],1),i("van-dialog",{attrs:{"show-cancel-button":""},model:{value:t.showFailDialog,callback:function(e){t.showFailDialog=e},expression:"showFailDialog"}},[i("span",[t._v("实名认证不通过，")]),i("span",[t._v("可联系"),i("router-link",{attrs:{to:"/mine"}},[t._v("在线客服")]),t._v("!")],1)])],1)},o=[],s=(i("e17f"),i("2241")),a=(i("68ef"),i("1d82"),i("d282")),r=i("9884"),c=Object(a["a"])("steps"),l=c[0],u=c[1],h=l({mixins:[Object(r["b"])("vanSteps")],props:{iconPrefix:String,finishIcon:String,activeColor:String,inactiveIcon:String,inactiveColor:String,active:{type:[Number,String],default:0},direction:{type:String,default:"horizontal"},activeIcon:{type:String,default:"checked"}},render:function(){var t=arguments[0];return t("div",{class:u([this.direction])},[t("div",{class:u("items")},[this.slots()])])}}),d=(i("9d70"),i("3743"),i("ae39"),i("b1d2")),p=i("ad06"),f=Object(a["a"])("step"),m=f[0],v=f[1],g=m({mixins:[Object(r["a"])("vanSteps")],computed:{status:function(){return this.index<this.parent.active?"finish":this.index===+this.parent.active?"process":void 0},active:function(){return"process"===this.status},lineStyle:function(){return"finish"===this.status?{background:this.parent.activeColor}:{background:this.parent.inactiveColor}},titleStyle:function(){return this.active?{color:this.parent.activeColor}:this.status?void 0:{color:this.parent.inactiveColor}}},methods:{genCircle:function(){var t=this.$createElement,e=this.parent,i=e.activeIcon,n=e.iconPrefix,o=e.activeColor,s=e.finishIcon,a=e.inactiveIcon;if(this.active)return this.slots("active-icon")||t(p["a"],{class:v("icon","active"),attrs:{name:i,color:o,classPrefix:n}});var r=this.slots("finish-icon");if("finish"===this.status&&(s||r))return r||t(p["a"],{class:v("icon","finish"),attrs:{name:s,color:o,classPrefix:n}});var c=this.slots("inactive-icon");return a||c?c||t(p["a"],{class:v("icon"),attrs:{name:a,classPrefix:n}}):t("i",{class:v("circle"),style:this.lineStyle})},onClickStep:function(){this.parent.$emit("click-step",this.index)}},render:function(){var t,e=arguments[0],i=this.status,n=this.active,o=this.parent.direction;return e("div",{class:[d["a"],v([o,(t={},t[i]=i,t)])]},[e("div",{class:v("title",{active:n}),style:this.titleStyle,on:{click:this.onClickStep}},[this.slots()]),e("div",{class:v("circle-container"),on:{click:this.onClickStep}},[this.genCircle()]),e("div",{class:v("line"),style:this.lineStyle})])}}),y=i("a73f"),C=function(t,e){var i=e._c;return i("div",{staticClass:"stage"},[i("item",{attrs:{title:"姓名"}},[i("input",{attrs:{readonly:e.props.readOnly,placeholder:"请输入姓名",type:"text"},domProps:{value:e.props.name},on:{change:e.listeners.nameChange}})]),i("item",{attrs:{title:"身份证号"}},[i("input",{attrs:{readonly:e.props.readOnly,placeholder:"请输入身份证号",type:"text"},domProps:{value:e.props.identify},on:{change:e.listeners.idChange}})]),i("item",{attrs:{title:"手机号"}},[i("input",{attrs:{readonly:!e.props.canEditMobile,placeholder:"请输入手机号",type:"text"},domProps:{value:e.props.mobile},on:{change:e.listeners.mobileChange}})]),i("div",{staticClass:"stage-bottom",staticStyle:{"margin-top":"0.32rem",display:"flex","align-items":"center"}},[i("van-checkbox",{attrs:{value:e.props.checked},on:{click:e.listeners.licenseChecked}}),e.props.isSyn?i("span",{staticClass:"text"},[e._v("同意"),i("router-link",{attrs:{to:"/documentInfo?id="+e.props.documentId+"&title=%E5%B9%B3%E5%8F%B0%E5%90%88%E4%BC%99%E4%BA%BA%E5%8D%8F%E8%AE%AE"}},[e._v("《平台合伙人协议》")]),e._v(" 及"),i("router-link",{attrs:{to:"/documentInfo?id=1623&title=三翼鸟平台合伙人声明"}},[e._v("《平台合伙人声明》")])],1):i("span",{staticClass:"text"},[e._v("同意"),i("router-link",{attrs:{to:"/documentInfo?id="+e.props.documentId+"&title=%E5%B9%B3%E5%8F%B0%E5%90%88%E4%BC%99%E4%BA%BA%E5%8D%8F%E8%AE%AE"}},[e._v("《平台合伙人协议》")])],1)],1)],1)},b=[],_=function(t,e){var i=e._c;return i("div",{staticClass:"item-wrap"},[i("div",{staticClass:"title"},[e._v(e._s(e.props.title))]),i("div",{staticClass:"interactive"},[e._t("default")],2)])},S=[],x={props:["title"]},I=x,k=(i("2622"),i("2877")),w=Object(k["a"])(I,_,S,!0,null,"4c98df26",null),$=w.exports,A={props:["name","identify","checked","readOnly","mobile","canEditMobile","documentId","isSyn"],components:{item:$}},E=A,B=(i("ddda"),Object(k["a"])(E,C,b,!0,null,"af043390",null)),D=B.exports,O=function(t,e){var i=e._c;return i("div",{staticClass:"stage"},[i("item",{attrs:{title:"昵称"}},[i("input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入合伙人昵称",type:"text"},domProps:{value:e.props.info.nickname?e.props.info.nickname:""},on:{change:e.listeners.nicknameChange}})]),i("item",{attrs:{title:"从事职业"}},[i("div",{attrs:{type:"text"},on:{click:e.listeners.jobChange}},[e._v(e._s(e.props.info.job&&e.props.info.job.name?e.props.info.job.name:"请选择从事职业"))])]),i("item",{attrs:{title:"工作时间"}},[i("div",{attrs:{type:"text"},on:{click:e.listeners.timeChange}},[e._v(e._s(e.props.info.date?e.props.info.date:"请选择工作时间"))])]),i("item",{attrs:{title:"所在地"}},[i("div",{attrs:{type:"text"},on:{click:e.listeners.locationChange}},[e._v(e._s(e.props.info.location&&e.props.info.location.region?e.props.info.location.region:"请选择常住地址"))])]),i("item",{attrs:{title:"可覆盖社区"}},[[e._l(e.props.info.community,(function(t,n){return i("van-tag",{key:n,staticClass:"tag",attrs:{closeable:"",size:"medium",type:"primary"},on:{close:function(i){return e.listeners.communityClose(t)}}},[e._v(" "+e._s(t)+" ")])})),i("input",{directives:[{name:"show",rawName:"v-show",value:e.props.showCommunity,expression:"props.showCommunity"}],attrs:{placeholder:"请填写所覆盖的社区",type:"text"},on:{blur:e.listeners.communityChange}}),i("div",{staticClass:"add",on:{click:e.listeners.communityAdd}},[e._v("+ 添加")])]],2),i("item",{attrs:{title:"所接触的人群"}},[[e._l(e.props.info.people,(function(t,n){return i("van-tag",{key:n,staticClass:"tag",attrs:{closeable:"",size:"medium",type:"primary"},on:{close:function(i){return e.listeners.peopleClose(t)}}},[e._v(" "+e._s(t)+" ")])})),i("input",{directives:[{name:"show",rawName:"v-show",value:e.props.showPeople,expression:"props.showPeople"}],attrs:{placeholder:"请填写所接触的人群",type:"text"},on:{blur:e.listeners.peopleChange}}),i("div",{staticClass:"add",on:{click:e.listeners.peopleAdd}},[e._v("+ 添加")])]],2),0!==e.props.userIdentify?i("item",{attrs:{title:"有效销售时间"}},[i("div",[e._v(e._s(e.props.info.validSaleStartDate?e.props.info.validSaleStartDate:"无数据")+"-"+e._s(e.props.info.validSaleEndDate?e.props.info.validSaleEndDate:"无数据"))])]):e._e(),0!==e.props.userIdentify?i("item",{attrs:{title:"历史总销额(万元)"}},[i("div",[e._v(e._s(e.props.info.historySaleAmount?(e.props.info.historySaleAmount/1e4).toFixed(2):0))])]):i("item",{attrs:{title:"预计月销额(万元)"}},[i("input",{attrs:{placeholder:"请填写预计月销额",type:"text"},domProps:{value:e.props.monthExpectSaleAmount?e.props.monthExpectSaleAmount:""},on:{change:e.listeners.monthExpectSaleAmountChange}})]),0!==e.props.userIdentify?i("item",{attrs:{title:"历史总销量"}},[i("div",[e._v(e._s(e.props.info.historySaleCount?e.props.info.historySaleCount:"无数据"))])]):e._e(),0!==e.props.userIdentify?i("item",{attrs:{title:"历史挂靠店铺"}},[void 0===e.props.info.historyRelyStoreList?i("div",[e._v("无数据")]):i("div",e._l(e.props.info.historyRelyStoreList,(function(t,n){return i("div",{key:n},[i("div",{staticClass:"time"},[e._v(e._s(t.start.split(" ")[0])+"至"+e._s(t.end.split(" ")[0]))]),i("div",{staticClass:"store"},[i("span",[e._v(e._s(t.storeCode))]),i("span",{staticClass:"right"},[e._v(e._s(t.name))])])])})),0)]):e._e()],1)},P=[],T={props:{info:{type:Object,default:function(){return{}}},showCommunity:{type:Boolean,default:!1},showPeople:{type:Boolean,default:!1},monthExpectSaleAmount:{type:String,default:""},userIdentify:{type:Number,default:0}},components:{item:$}},j=T,q=(i("db84"),Object(k["a"])(j,O,P,!0,null,"9473cb6e",null)),L=q.exports,N=function(t,e){var i=e._c;return i("div",{staticClass:"stage"},[i("van-steps",{attrs:{direction:"vertical",active:e.props.index}},e._l(e.props.info,(function(t,n){return i("van-step",{key:n},[i("template",{slot:"active-icon"},[i("img",{staticClass:"active-icon",attrs:{src:e.props.cdn+"/partner/active.png"}})]),i("template",{slot:"inactive-icon"},[i("img",{staticClass:"inactive-icon",attrs:{src:e.props.index<n?e.props.cdn+"/partner/inactive.png":e.props.cdn+"/partner/active.png"}})]),i("div",{staticClass:"content"},[i("h3",{staticClass:"title",style:{color:e.props.index<n?"#999":"#333"}},[e._v(e._s(t.name))]),i("p",{staticClass:"time"},[!1===t.reviewResult?i("span",{staticStyle:{"margin-right":"0.4rem"}},[e._v("审核结果:驳回")]):e._e(),e._v(e._s(t.time))]),i("p",{staticClass:"time"},[e._v(e._s(t.content))]),!1===t.reviewResult?i("p",{staticClass:"review",on:{click:e.listeners.reApply}},[e._v("重新提交")]):e._e()])],2)})),1)],1)},M=[],W={props:["cdn","info","index"],components:{VanStep:g,VanSteps:h}},R=W,J=(i("4552"),i("d693"),Object(k["a"])(R,N,M,!0,null,"54c8c024",null)),F=J.exports,U=i("fa7d"),H=i("eb13"),z=i("d354"),G=i("bbc2"),Q=function(){return i.e("jobs").then(i.bind(null,"19cd"))},V=function(){return i.e("chunk-20178db3").then(i.bind(null,"5aa7"))},Y=function(t){return void 0!==t&&null!==t},Z=function(t){if(Y(t)){var e=new RegExp("^[0-9]*(\\.\\d*)?$");return e.test(t)}return!1},X=function(t){if(Y(t)){var e=new RegExp("^[0-9]{1,9}(\\.[0-9]{0,2})?$");return e.test(t)&&0!==Number(t)}return!1},K=function(t,e,i){return!!Y(t)&&("string"===typeof t&&t.length>0&&tt(t,e,i)||"string"!==typeof t)},tt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,n=/^[a-zA-Z0-9_\-\u4e00-\u9fa5]+$/;return n.test(t)&&t.length>=e&&t.length<=i},et=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,n=/^[\u4e00-\u9fa5·•]+$/;return n.test(t)&&t.length>=e&&t.length<=i},it=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:40,n=new RegExp("^[a-zA-Z0-9_\\-\\u4e00-\\u9fa5//.&()]{".concat(e,",").concat(i,"}$"));return n.test(t)},nt={name:"apply-partner",components:{skeleton:y["a"],item:$,"stage-0":D,"stage-1":L,"stage-2":F,lazyChangeGeographicLocation:V,jobs:Q,VanStep:g,VanSteps:h},data:function(){return{isSyn:U["a"].isSyBird()||U["a"].isSyBirdMP(),documentId:"1481",isSkeletonLoading:!0,stage:0,checked:!1,name:"",monthExpectSaleAmount:"",identify:"",mobile:"",canEditMobile:!0,showDateChange:!1,showChooseLoaction:!1,showJobs:!1,showFailDialog:!1,info:{people:[],community:[],historyRelyStoreList:[]},submitInfo:{},userIdentify:0,date:new Date,maxDate:new Date,minDate:new Date(1970,0,1),progressInfo:[{title:"实名认证"},{title:"填写信息"},{title:"审核"}],verifyInfo:[],communityTarget:null,peopleTarget:null,showCommunity:!1,showPeople:!1,unionId:void 0,isBindWx:!1,realNameAuthInfo:null}},computed:{interfaceTitle:function(){return U["a"].isSyBird()||U["a"].isSyBirdMP()?"三翼鸟":"海尔智家"},invisiableBack:function(){return U["a"].isSyBirdMP()},needBindWx:function(){return this.$route.query.activityId&&this.$route.query.inviteStoreId&&!this.isBindWx},displayMobile:function(){return this.mobile.replace(/^(\d{3})\d+(\d{4})$/,"$1****$2")},readOnly:function(){return 0!==this.stage},progressIndex:function(){var t=this.stage<=1?0:this.stage-1;return console.log("当前进度：",t),this.stage<=1?0:3===this.stage&&2===this.verifyIndex?4:this.stage-1},verifyIndex:function(){if(this.verifyInfo){var t=0;return this.verifyInfo.some((function(e,i){if(!Y(e.time))return t=i-1,!0;t=i})),t}return 0}},methods:{_fetchInit:function(){var t=this;Object(z["g"])(null,!0).then((function(e){var i=e.data;if(t.isSkeletonLoading=!1,t.isBindWx=i.data.bindWx,t.needBindWx&&t._avoidCheat(),i.success&&i.data)if(t.userIdentify=0===i.data.identifyFlag&&2===i.data.normalMicroUser?-1:i.data.identifyFlag,Y(i.data.mobile)&&(t.mobile=i.data.mobile,t.canEditMobile=!1),t.userIdentify>0){var n="您已是";switch(t.userIdentify){case 21:case 22:n+="店铺合伙人";break;case 31:n+="平台合伙人";break;default:n+="商家身份";break}t.$toast(n),setTimeout((function(){t.$store.dispatch("doHistoryBack")}),1e3)}else t._fetchSubmitData();else t.$toast(i.message)}))},_fetchSubmitData:function(){var t=this;Object(H["a"])({time:Date.now()}).then((function(e){t._fetchBindData()}))},_fetchQueryApplyInfo:function(){var t=this;return Object(H["d"])().then((function(e){var i=e.data,n=i.data,o=i.code,s=i.msg;200===o?(t.info=Object.assign(t.info,n),t.stage=2):t.$toast(s)}))["catch"]((function(e){t.$toast(e.message)}))},_fetchBindData:function(){var t=this;this.$http.get(G["a"].TRUE_REALNAMEAUTH).then((function(e){var i=e.data.data;console.log(i),t.stage=0,i&&i.isAuth&&i.identity&&i.identity.identityNo&&i.identity.realName&&(t.realNameAuthInfo=i.identity,U["a"].isSyBird()||U["a"].isSyBirdMP()||(t.stage=1,t.name=i.identity.realName.replace(/^([\u4e00-\u9fa5]{1})[\u4e00-\u9fa5]+([\u4e00-\u9fa5]{1})$/,"$1*$2"),t.identify=i.identity.identityNo.replace(/^(\d{3})\d+([\dX]{4})$/,"$1********$2")),t.mobile=i.identity.mobile,t.canEditMobile=!1),t.isSkeletonLoading=!1}))["catch"]((function(e){t.$toast(e.message)}))},_submitBindData:function(){var t=this;return et(this.name,2,50)?K(this.identify)?K(this.mobile)?new Promise((function(e,i){var n="".concat(G["a"].POST_USERDATAANDID,"?realName=").concat(t.name,"&identityNo=").concat(t.identify,"&mobile=").concat(t.mobile,"&channal=PARTNER");t.$http.post(n).then((function(i){var n=i.data;n.data?(t.$toast("认证成功"),e(!0)):(t.$toast(n.message),e(!1))}))["catch"]((function(t){i(t)}))})):(this.$toast("请输入正确的手机号"),Promise.resolve(!1)):(this.$toast("请输入正确的身份证号"),Promise.resolve(!1)):(this.$toast("请按规则输入您的中文姓名（2-50 个汉字，支持·）"),Promise.resolve(!1))},_submitApplyInfo:function(){var t=this;if(Y(this.info.nickname)&&0!==this.info.nickname.length)if(K(this.info.nickname,2,20))if(Z(this.info.nickname))this.$toast("昵称不能为纯数字");else if(K(this.info.job))if(K(this.info.date))if(K(this.info.location)){if(0===this.userIdentify){if(0===this.monthExpectSaleAmount.length)return void this.$toast("请填写预计月销额");if(!Z(this.monthExpectSaleAmount))return void this.$toast("请填写正确的预计月销额");if(!X(this.monthExpectSaleAmount))return void this.$toast("请填写0.01-999999999.99预计月销额，最多支持两位小数")}var e=this.info.historyRelyStoreList.map((function(t){return{storeId:t.storeId}}));this.submitInfo={nickname:this.info.nickname,occupation:this.info.job.code,workBeginTime:"".concat(this.date.getFullYear(),"-").concat(this.date.getMonth()+1,"-1"),residentAddress:{province:this.info.location.provinceId,city:this.info.location.cityId,region:this.info.location.districtId,street:this.info.location.townshipId,fullAddress:this.info.location.region},community:this.info.community?this.info.community.join(","):"",contactCrowd:this.info.people?this.info.people.join(","):"",validSaleStartDate:this.info.validSaleStartDate,validSaleEndDate:this.info.validSaleEndDate,monthExpectSaleAmount:this.monthExpectSaleAmount,historySaleCount:this.info.historySaleCount,historySaleAmount:this.info.historySaleAmount,agreement:!0,historyRelyStoreList:e,activityId:this.$route.query.activityId?this.$route.query.activityId:void 0,inviteStoreId:this.$route.query.inviteStoreId?this.$route.query.inviteStoreId:void 0},Object(H["g"])(this.submitInfo).then((function(e){var i=e.data,n=i.msg,o=i.code;200!==o?t.$toast(n):(t.$toast("平台合伙人申请成功"),setTimeout((function(){t.$store.dispatch("doHistoryBack")}),1e3))}))["catch"]((function(e){t.$toast("提交失败，请稍后重试:"+e.message)}))}else this.$toast("请选择所在地");else this.$toast("请选择工作时间");else this.$toast("请选择从事职业");else this.$toast("请填写正确的昵称，2-20个中文、英文、数字、_、-的组合");else this.$toast("请填写昵称")},_diaConfirm:function(){var t=this;s["a"].confirm({message:"确定对当前账号进行实名认证吗",beforeClose:function(e,i){if("confirm"===e){var n,o,s=t.realNameAuthInfo;if((U["a"].isSyBirdMP()||U["a"].isSyBird())&&s&&s.realName&&s.identityNo&&s.mobile)i(),s.realName===t.name&&(null===(n=s.identityNo)||void 0===n?void 0:n.toLocaleLowerCase())===(null===(o=t.identify)||void 0===o?void 0:o.toLocaleLowerCase())&&s.mobile===t.mobile?t.stage=2:t.$toast("您当前账号已认证其他身份证信息");else t._submitBindData().then((function(e){e?(i(),t._fetchQueryApplyInfo().then((function(){t.stage=2}))):i()}))}else i()}})},fnNextStep:function(){var t=this;this.stage<=1&&!this.checked?this.$toast("请阅读平台合伙人协议，并勾选"):0===this.stage?this.needBindWx?this.unionId?this._bindWxAccount():this._doGetWxCode():this._diaConfirm():1===this.stage?this.needBindWx?this.unionId?this._bindWxAccount():this._doGetWxCode():this._fetchQueryApplyInfo().then((function(){t.stage=2})):2===this.stage&&this._submitApplyInfo()},fnNicknameChange:function(t){var e=t.target.value?t.target.value.trim():"";this.info.nickname=e},fnCommunityChange:function(t){if(this.communityTarget=t.target,Y(this.info.community)||(this.info.community=[]),Y(this.communityTarget)){var e=this.communityTarget.value?this.communityTarget.value.trim():"";if(0===e.length)return;if(!it(e,2,20))return void this.$toast("请输入正确的社区名称，支持4-40个字符!");this.info.community.indexOf(e)<0&&this.info.community.push(e)}this.communityTarget.value="",this.showCommunity=!1},fnCommunityAdd:function(){Y(this.info.community)||(this.info.community=[]),this.info.community.length>=15?this.$toast("只支持15个自定义社区！"):this.showCommunity=!0},fnCommunityClose:function(t){Y(this.info.community)&&this.info.community.indexOf(t)>=0&&this.info.community.splice(this.info.community.indexOf(t),1)},fnPeopleChange:function(t){if(this.peopleTarget=t.target,Y(this.info.people)||(this.info.people=[]),Y(this.peopleTarget)){var e=this.peopleTarget.value?this.peopleTarget.value.trim():"";if(0===e.length)return;if(!it(e,1,20))return void this.$toast("请输入正确的人群名称，支持2-40个字符！");this.info.people.indexOf(e)<0&&this.info.people.push(e)}this.peopleTarget.value="",this.showPeople=!1},fnPeopleAdd:function(){Y(this.info.people)||(this.info.people=[]),this.info.people.length>=15?this.$toast("只支持15个自定义人群!"):this.showPeople=!0},fnPeopleClose:function(t){Y(this.info.people)&&this.info.people.indexOf(t)>=0&&this.info.people.splice(this.info.people.indexOf(t),1)},fnDateChange:function(){this.showDateChange=!0},fnConfirmDate:function(){var t=parseInt(this.date.getMonth())+1;this.info.date="".concat(this.date.getFullYear(),"年").concat(t,"月"),this.showDateChange=!1},fnJobChange:function(){this.showJobs=!0},fnMonthExpectSaleAmountChange:function(t){var e=t.target.value?t.target.value.trim():"";this.monthExpectSaleAmount=e},fnConfirmJobChange:function(t){console.log(t),this.info.job=t,this.showJobs=!1},fnlocationChange:function(){this.showChooseLoaction=!0},fnOnHide:function(){this.showChooseLoaction=!1,this.showJobs=!1,this.showJobs=!1},fnConfirmLocation:function(t){console.log(t),this.showChooseLoaction=!1,this.info.location=t},fnIdChange:function(t){var e=t.target.value?t.target.value.trim():"";this.identify=e},fnNameChange:function(t){var e=t.target.value?t.target.value.trim():"";this.name=e},fnMobileChange:function(t){this.mobile=t.target.value?t.target.value.trim():""},fnLicenseChecked:function(t){this.checked=!this.checked},fnReApply:function(){var t=this;this._fetchQueryApplyInfo().then((function(){t.stage=2}))},fnBack:function(){2===this.stage?this._fetchBindData():this.$store.dispatch("doHistoryBack")},_formatter:function(t,e){return"year"===t?"".concat(e,"年"):"month"===t?"".concat(e,"月"):e},_doGetWxCode:function(){var t=location.href;U["a"].getWxUserInfoCode("wxb03a523baf487993",t)},_avoidCheat:function(){var t=this,e=this.$route.query.code;if(e){var i=this.$route.query,n=this;i.activityId&&i.inviteStoreId&&n.$http.get(G["a"].getWechatUserInfo,{params:{code:i.code}}).then((function(e){var i=e.data;i.success?(n.unionId=i.data.unionid,i.data.unionid?n._bindWxAccount():t.$toast({message:"获取UnionId失败，请刷新页面",duration:0})):t.$toast({message:i.message,duration:0})}))}else this._doGetWxCode()},_logout:function(){this.$store.dispatch("logout",{path:"/partners",query:{activityId:this.$route.query.activityId||"",share:this.$route.query.inviteStoreId||"",sg_rn_app:this.$route.query.sg_rn_app||""}})},_bindWxAccount:function(){var t=this;Object(H["b"])({unionId:this.unionId,bindType:7}).then((function(e){var i=e.data,n=i.message,o=i.success;o?t._fetchInit():t.$toast({message:n,duration:3e3,onClose:function(){t._logout()}})}))["catch"]((function(e){t.$toast({message:e.message,duration:3e3})}))}},mounted:function(){var t=this;U["a"].isSyBird()&&(this.documentId="1485"),this.$route.query.activityId&&this.$route.query.inviteStoreId&&!U["a"].isWeixin()?this.$toast({message:"请在微信环境打开邀请链接",duration:0}):setTimeout((function(){t._fetchInit()}),600)}},ot=nt,st=(i("03f4"),Object(k["a"])(ot,n,o,!1,null,"11e4a3c8",null));e["default"]=st.exports},a73f:function(t,e,i){"use strict";var n=function(t,e){var i=e._c;return e.props.nums>0?i("div",{staticClass:"m-skeleton",style:{"z-index":e.props.zIndex||0}},[i("div",{style:{background:e.props.bgColor,height:e.props.fheight}}),e._l(e.props.nums-1,(function(t){return i("div",{key:t,style:{background:e.props.bgColor,height:e.props.iheight}})}))],2):e._e()},o=[],s=(i("80cc"),i("2877")),a={},r=Object(s["a"])(a,n,o,!0,null,null,null);e["a"]=r.exports},ae39:function(t,e,i){},bc6c:function(t,e,i){},d354:function(t,e,i){"use strict";i.d(e,"g",(function(){return s})),i.d(e,"d",(function(){return a})),i.d(e,"f",(function(){return r})),i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return l})),i.d(e,"c",(function(){return u})),i.d(e,"e",(function(){return h}));var n=i("1c03"),o=i("bbc2"),s=function(t,e){return n["a"].request({url:o["a"].myManage,method:"get",params:{_t:Date.now()},noLogin:e})},a=function(t){return n["a"].request({url:o["a"].getOrderCount,method:"get",params:{chId:60}})},r=function(t){return n["a"].request({url:o["a"].wallet,method:"get",params:{}})},c=function(t){return n["a"].request({url:o["a"].checkBindByType,method:"get",params:t})},l=function(t){return n["a"].request({url:o["a"].getComminsionSumInfo,method:"POST",data:t,headers:{"Content-Type":"application/json"}})},u=function(t){return n["a"].request({url:o["a"].getGoodsAmountList,method:"POST",data:t,headers:{"Content-Type":"application/json"}})},h=function(t){return n["a"].request({url:o["a"].getServiceCharge,method:"get",params:t})}},d693:function(t,e,i){"use strict";i("36a4")},db84:function(t,e,i){"use strict";i("702b")},ddda:function(t,e,i){"use strict";i("27ef")},eb13:function(t,e,i){"use strict";i.d(e,"c",(function(){return s})),i.d(e,"g",(function(){return a})),i.d(e,"a",(function(){return r})),i.d(e,"d",(function(){return c})),i.d(e,"b",(function(){return l})),i.d(e,"f",(function(){return u})),i.d(e,"h",(function(){return h})),i.d(e,"e",(function(){return d}));var n=i("1c03"),o=i("bbc2"),s=function(){return n["a"].request({url:o["a"].GET_JOBS,method:"get"})},a=function(t){return n["a"].request({url:o["a"].submitApplyInfo,method:"POST",data:t,headers:{"Content-Type":"application/json"}})},r=function(t){return n["a"].request({url:o["a"].applyResult,method:"get",params:t})},c=function(){return n["a"].request({url:o["a"].queryApplyInfo,method:"get"})},l=function(t){return n["a"].request({url:o["a"].bindWxAccount,method:"get",params:t})},u=function(t){return n["a"].request({url:o["a"].queryMemberInfo,method:"get",params:t})},h=function(t){return n["a"].request({url:o["a"].submitStandardMemberInfo,method:"POST",data:t,headers:{"Content-Type":"application/json"}})},d=function(t){return n["a"].request({url:o["a"].queryEmployeeInfo,method:"POST",data:t,headers:{"Content-Type":"application/json"}})}}}]);
//# sourceMappingURL=chunk-6eb966c8.285da281.js.map