(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0ef677a"],{"35de":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.userAgent.showHeader?n("Header"):e._e(),n("div",{staticClass:"container",style:{"padding-top":e.userAgent.showHeader?"0.92rem":"0"},attrs:{id:"frameContainer"}},[e.userId?n("iframe",{staticClass:"activeiframe",attrs:{src:e.urlHost+"/#/zhijia?entranceId=jt&device="+e.userAgent.device+"&sceneId="+e.sceneId+"&pId="+e.userAgent.pId+"&userId="+e.userId+"&accountId="+e.accountId+"&sign="+e.sign+"&userName="+e.userName+"&fromPageUrl="+e.encodedURL(e.fromPageUrl)+"&sceneName="+e.sceneName+"&scenePhoto="+e.encodedURL(e.scenePhoto)+"&fromPageTitle="+e.fromPageTitle+"&p="+e.phone+"&e="+e.email+"&"+(e.userAgent.showHeader?"titleBar=hide":""),name:"ac",frameborder:"0",width:"100%",scrolling:"auto",id:"ActiveIframe"}}):n("div")])],1)},r=[],a=n("19e7"),s=n("fa7d"),o=n("d3c8"),c=n("e725"),d=n("0917"),u=function(e){var t={h5:{name:"h5",needUpAuth:!1,showHeader:!0,fromPageTitlePrefix:"sc_h5_",traceLogOrigin:"h5",device:"browser",defaultAccountId:"zhijiashop",pageTitle:"海尔智家商城在线客服",pId:"m"},SyBirdH5:{name:"SyBirdH5",showHeader:!0,needUpAuth:!1,fromPageTitlePrefix:"sc_syn_",traceLogOrigin:"synApp",defaultAccountId:"ThreeWingedBird",device:"browser",pageTitle:"三翼鸟在线客服",pId:"synapp"},SyBird:{name:"SyBird",showHeader:!0,needUpAuth:!0,fromPageTitlePrefix:"sc_syn_",traceLogOrigin:"synApp",defaultAccountId:"ThreeWingedBird",device:"browser",pageTitle:"三翼鸟在线客服",pId:"synapp"},Uplus:{name:"Uplus",showHeader:!1,needUpAuth:!0,fromPageTitlePrefix:"sc_zhijia_",traceLogOrigin:"haierApp",defaultAccountId:"zhijiashop",device:"app",pageTitle:"海尔智家商城在线客服",pId:"zjapp"},sgApp:{name:"sgApp",showHeader:!1,needUpAuth:!1,fromPageTitlePrefix:"sc_sg_",traceLogOrigin:"ehaierApp",defaultAccountId:"zhijiavip",device:"browser",pageTitle:"在线客服",pId:"sgapp"}},n="h5";return"synapp"===e?n="SyBirdH5":s["a"].isUplus()?n="Uplus":s["a"].isSyBird()?n="SyBird":s["a"].isSgRn()&&(n="sgApp"),t[n]},h={components:{Header:c["a"]},data:function(){return{urlHost:s["a"].isProdEnv()?"https://holcc.haier.net":"https://sip189.rrslexin.com",userAgent:null,userId:"",accountId:"",sign:"",userName:"",fromPageUrl:"",fromPageTitle:"",sceneId:"",phone:"",email:"",sceneName:"",scenePhoto:""}},created:function(){this.userAgent=u(this.$route.query.pid),this.$route.meta.title=this.userAgent.pageTitle,this.sceneName=this.$route.query.sceneName||"",this.scenePhoto=this.$route.query.scenePhoto||"",this.fromPageUrl=this.$route.query.fromPageUrl||"",this.accountId=this.$route.query.accountId||this.userAgent.defaultAccountId,this.sceneId=this.$route.query.sceneId,d["a"][this.sceneId]||(this.sceneId="cj090"),this.fromPageTitle="".concat(this.userAgent.fromPageTitlePrefix).concat(d["a"][this.sceneId])},mounted:function(){var e=this;this.$util.isAlipay()?this.$toast({message:"请拨打客服电话：400-828-7777",duration:0}):this.userAgent.needUpAuth?this.$store.dispatch("handleUpAuth").then((function(t){t&&e.initBase()})):this.initBase()},methods:{encodedURL:function(e){return e?window&&window.encodeURIComponent?window.encodeURIComponent(e):e:""},initBase:function(){var e=this;this.accountId!==this.userAgent.defaultAccountId?this.isCanGetCustomer(this.accountId).then((function(t){t||(e.accountId=e.userAgent.defaultAccountId),e.initService()})):this.initService()},initService:function(){var e=this,t=this.getMemberInfo();t&&t.then((function(t){if(t.success){if(e.phone=t.data.mobile,e.email=t.data.email,e.userName=t.data.userName,e.userId=t.data.ucMemberId,e.userId){e.sign=a["a"].hex_md5("accountId = ".concat(e.accountId," and userId = ")+e.userId);var n={userId:e.userId,accountId:e.accountId,sign:e.sign,userName:e.userName,fromPageUrl:e.fromPageUrl,fromPageTitle:e.fromPageTitle,origin:e.userAgent.traceLogOrigin};e.traceLog(n)}else e.$store.dispatch("doLogin");e.$nextTick((function(t){var n=e.getBrowserInterfaceSize(),i=document.getElementById("frameContainer");if(i){var r=46;e.userAgent.showHeader||(r=0),i.style.height=n.pageHeight-r+"px"}}))}else e.$toast(t.data.message)}))["catch"]((function(e){console.log(e)}))},isCanGetCustomer:function(e){return new Promise((function(t,n){var i={storeCode:e};o["a"].getCustomer(i).then((function(e){e.data.success&&t(e.data.result)}))}))},getMemberInfo:function(){if(localStorage.getItem("mId"))return new Promise((function(e,t){var n={memberId:localStorage.getItem("mId")};o["a"].getMemberInfo(n).then((function(t){e(t.data)}))}));this.$store.dispatch("doLogin")},traceLog:function(e){o["a"].traceLog(e).then((function(e){}))},getBrowserInterfaceSize:function(){var e=window.innerWidth,t=window.innerHeight;return"number"!==typeof e&&("CSS1Compat"===document.compatMode?(e=document.documentElement.clientWidth,t=document.documentElement.clientHeight):(e=document.body.clientWidth,t=window.body.clientHeight)),{pageWidth:e,pageHeight:t}}}},g=h,m=(n("fbfe"),n("2877")),p=Object(m["a"])(g,i,r,!1,null,"6b22936e",null);t["default"]=p.exports},"962c":function(e,t,n){},fbfe:function(e,t,n){"use strict";n("962c")}}]);
//# sourceMappingURL=chunk-b0ef677a.1cf6a349.js.map