(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-166e51be"],{7048:function(e,t,a){},"7d30":function(e,t,a){"use strict";a("7048")},aa19:function(e,t,a){"use strict";var i=a("1c03"),s=a("bbc2"),o=function(e,t){return i["a"].request({url:s["a"].register,headers:{deviceId:t+"",Authorization:"open the gate"},method:"GET",params:e})},n=function(e,t){return i["a"].request({url:s["a"].login,method:"POST",params:e})},r=function(e){return i["a"].request({url:s["a"].password,method:"GET",params:e})},c=function(e){return i["a"].request({url:s["a"].needImg,method:"GET",params:e})},l=function(e){return i["a"].request({url:s["a"].getImg,method:"GET",params:e})},u=function(e){return i["a"].request({url:s["a"].retrieve,method:"GET",params:e})},h=function(e){return i["a"].request({url:s["a"].changePassword,method:"POST",params:e})},d=function(e,t){return i["a"].request({url:s["a"].registerAccount,method:"POST",params:e})};t["a"]={register:o,login:n,password:r,needImg:c,getImg:l,retrieve:u,changePassword:h,registerAccount:d}},c4d8:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),a("div",{staticClass:"info"},[e.show?a("div",[a("div",{staticStyle:{padding:"0.2rem 0.32rem 0.2rem 0",background:"#fff",position:"relative",height:"0.56rem"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.ordinaryAccount,expression:"ordinaryAccount"}],staticClass:"info-mm",attrs:{type:"tel",placeholder:"请输入手机号码/邮箱/用户名",required:""},domProps:{value:e.ordinaryAccount},on:{blur:e.count,input:[function(t){t.target.composing||(e.ordinaryAccount=t.target.value)},e.checkInputFn]}}),a("img",{staticClass:"editable-clear-x",attrs:{src:e.$cdnImageUrl+"/login/clear.png"},on:{click:e.clear}}),a("div",{staticClass:"line"})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.captchaShow,expression:"captchaShow"}],staticStyle:{padding:"0.2rem 0.32rem 0.2rem 0",background:"#fff",position:"relative",height:"0.56rem"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.captcha,expression:"captcha"}],staticClass:"info-mm",attrs:{type:"text",placeholder:"请输入图形验证码",maxlength:"6"},domProps:{value:e.captcha},on:{focus:e.verifyCount,input:[function(t){t.target.composing||(e.captcha=t.target.value)},e.checkInputFn]}}),a("img",{staticClass:"verify-two",attrs:{src:e.src,alt:""},on:{click:e.getPhoto}}),a("div",{staticClass:"line"})]),a("div",{staticStyle:{padding:"0.2rem 0.32rem 0.2rem 0",background:"#fff",position:"relative",height:"0.56rem"}},[a("input",{directives:[{name:"show",rawName:"v-show",value:e.passwordType,expression:"passwordType"},{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"info-mm",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.passwordLogin.apply(null,arguments)},focus:e.countM,input:[function(t){t.target.composing||(e.password=t.target.value)},e.checkInputFn]}}),a("input",{directives:[{name:"show",rawName:"v-show",value:!e.passwordType,expression:"!passwordType"},{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"info-mm",attrs:{type:"text",placeholder:"请输入密码"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.passwordLogin.apply(null,arguments)},focus:e.countM,input:[function(t){t.target.composing||(e.password=t.target.value)},e.checkInputFn]}}),a("img",{staticClass:"show",attrs:{src:e.passwordType?e.$cdnImageUrl+"/login/unvisible.png":e.$cdnImageUrl+"/login/visible.png",alt:""},on:{click:e.toggle}}),a("div",{staticClass:"line"})]),a("div",{staticClass:"forget-info"},[a("div",{on:{click:e.toRetrieve}},[e._v("忘记密码?")])])]):a("div",[a("div",{staticStyle:{padding:"0.2rem 0.32rem 0.2rem 0",background:"#fff",position:"relative",height:"0.56rem"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mobileAccount,expression:"mobileAccount"}],staticClass:"info-mm",attrs:{type:"tel",disabled:e.isIhaierApp,placeholder:"请输入手机号",maxlength:"13",required:""},domProps:{value:e.mobileAccount},on:{input:[function(t){t.target.composing||(e.mobileAccount=t.target.value)},e.keyup],blur:e.blurFn}}),a("img",{staticClass:"editable-clear-x",attrs:{src:e.$cdnImageUrl+"/login/clear.png"},on:{click:e.clear}}),a("div",{staticClass:"line"})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.captchaShow,expression:"captchaShow"}],staticStyle:{padding:"0.2rem 0.32rem 0.2rem 0",background:"#fff",position:"relative",height:"0.56rem"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.captcha,expression:"captcha"}],staticClass:"info-mm",attrs:{type:"text",placeholder:"请输入图形验证码",maxlength:"6"},domProps:{value:e.captcha},on:{focus:e.verifyCount,input:[function(t){t.target.composing||(e.captcha=t.target.value)},e.checkInputFn]}}),a("img",{staticClass:"verify-two",attrs:{src:e.src,alt:""},on:{click:e.getPhoto}}),a("div",{staticClass:"line"})]),a("div",{staticStyle:{padding:"0.2rem 0.32rem 0.2rem 0",background:"#fff",position:"relative",height:"0.56rem"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.messageMM,expression:"messageMM"}],staticClass:"info-mm",attrs:{type:"tel",placeholder:"请输入验证码",maxlength:"6"},domProps:{value:e.messageMM},on:{focus:e.safetyCount,input:[function(t){t.target.composing||(e.messageMM=t.target.value)},e.checkInputFn]}}),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.messageMMType,expression:"!messageMMType"}],staticClass:"verify",style:{color:"#ccc"}},[e._v(e._s(e.title))]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.messageMMType,expression:"messageMMType"}],staticClass:"verify",style:{color:e.allow?"#2979FF":"#333"},on:{click:e.getMessage}},[e._v(e._s(e.title))]),a("div",{staticClass:"line"})])]),a("div",{staticClass:"operation"},[e.show?a("button",{staticClass:"operation-btn",class:e.disabledOrdinary?"btn-disabled":"",attrs:{disabled:e.disabledOrdinary},on:{click:e.passwordLogin}},[e._v("登录")]):a("button",{staticClass:"operation-btn message-btn",class:e.disabled?"btn-disabled":"",attrs:{disabled:e.disabled},on:{click:e.passwordLogin}},[e._v("登录")])]),e.isIhaierApp?e._e():a("div",{staticClass:"bottom"},[a("div",{staticClass:"operation-btn-two",on:{click:e.change}},[e._v(e._s(e.text))]),a("div",{on:{click:e.onClickRight}},[e._v("注册")])])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"top"},[a("div",{staticClass:"sign"},[a("div",[e._v("登录智家商城")])])])}],o=(a("e17f"),a("2241")),n=a("aa19"),r=a("fa7d"),c=a("eb13"),l={beforeRouteEnter:function(e,t,a){a((function(e){"/add"===t.path&&(e.handRouter=!0,e.handPath=t.fullPath)}))},data:function(){return{ordinaryAccount:"",mobileAccount:"",password:"",messageMM:"",passwordType:!0,show:!0,title:"获取验证码",allow:!0,captcha:"",src:"",captchaShow:!1,phoneReg:/^1[3456789]\d{9}$/,toRouter:!1,routerName:"/",disabled:!0,disabledOrdinary:!0,messageMMType:!1,timer:null,replaceRouter:!1,handRouter:!1,handPath:"/",isIhaierApp:r["a"].isIhaierApp()}},computed:{callBackPath:function(){return this.$route.query.callBackPath||""},text:function(){return this.show?"短信验证码登录":"账号密码登录"}},created:function(){this.isIhaierApp&&this.ihaierPreLogic(),this.init(),this.$util.smMsgSdk(),gio("track","LoginNamepwdBtn")},watch:{ordinaryAccount:function(e,t){""===e||""===this.password?this.disabledOrdinary=!0:this.disabledOrdinary=!1},password:function(e,t){""===e||""===this.ordinaryAccount?this.disabledOrdinary=!0:this.disabledOrdinary=!1}},methods:{ihaierPreLogic:function(){var e=this,t=this;return this.show=!1,r["a"].loadScript("//i.haier.net/public/js/qing/latest/qing.js").then((function(){if(window.qing)try{window.qing.call("getPersonInfo",{success:function(e){if(t.isSkeletonLoading=!1,e&&e.data&&e.data.userName){if(t.employeeNumber=e.data.userName+"",0===t.employeeNumber.length)return t.$toast("暂未获取到员工信息，稍后重试"),void t.closeWebView(3e3);Object(c["e"])({employeeNumber:t.employeeNumber}).then((function(e){if(e.data.success&&e.data.data&&e.data.data.employee){var a=e.data.data,i=a.mobile,s=a.status;sessionStorage.setItem("employee_status",s),sessionStorage.setItem("employee_phone",i),t.ihaierLogic()}else t.$toast("暂未获取到员工信息，请稍后重试"),t.closeWebView(3e3)}))["catch"]((function(e){return console.log(e)}));var a=["A","Z","a","z"],i=function(e){return t.employeeNumber.startsWith(e)};(8===t.employeeNumber.length&&a.some(i)||10===t.employeeNumber.length)&&(t.$toast("暂不支持访问智家掌柜，可下载“智家掌柜”App"),t.closeWebView(3e3))}else t.$toast("暂未获取到员工信息，稍后重试")}})}catch(e){t.$toast("暂未获取到ihaier员工信息，稍后重试")}else t.$toast("暂未获取到ihaier信息，稍后重试")}))["catch"]((function(t){e.$toast("加载iHaier SDK失败，请更新版本后重试")}))},ihaierLogic:function(){var e=this,t=this;this.mobileAccount=sessionStorage.getItem("employee_phone");var a=sessionStorage.getItem("employee_status")+"";this.mobileAccount&&11===this.mobileAccount.length&&"1"===a?this.$nextTick((function(){e.keyup(),e.blurFn()})):"1"!==a?o["a"].alert({message:"非在职状态，暂时无法使用",beforeClose:function(e,a){"confirm"===e&&t.closeWebView(300),a()}}):o["a"].alert({message:"请先在E-HR人力资源信息网维护手机号",beforeClose:function(e,a){"confirm"===e&&t.closeWebView(300),a()}})},closeWebView:function(e){setTimeout((function(){r["a"].isIhaierApp()&&window.qing&&window.qing.call("closeWebView"),r["a"].isIMaker()&&(localStorage.clear(),location.href="mallLink://closeWindow")}),e)},keyup:function(){var e=this.mobileAccount;e=e.replace(/[^0-9]/g,"");var t=[];t[0]=e.slice(0,3),t[1]=e.slice(3,7),t[2]=e.slice(7),t[2].length>0?(t[1]+=" ",t[0]+=" "):t[1].length>0&&(t[0]+=" "),this.checkInputFn(),13===this.mobileAccount.length?(this.messageMMType=!0,this.verification()):this.messageMMType=!1,this.mobileAccount=t.join("")},blurFn:function(){this.checkInputFn(),13===this.mobileAccount.length?(this.messageMMType=!0,this.verification()):this.messageMMType=!1},checkInputFn:function(){this.show?!this.ordinaryAccount||!this.password||this.captchaShow&&!this.captcha?this.disabledOrdinary=!0:this.disabledOrdinary=!1:!this.mobileAccount||6!==this.messageMM.length||this.captchaShow&&!this.captcha?this.disabled=!0:this.disabled=!1},init:function(){this.replaceRouter=this.$store.state.needLogin,this.routerName=this.$store.state.pathName,"/mine"!==this.$store.state.pathName&&"/cart"!==this.$store.state.pathName||(this.password="",this.messageMM="",this.captchaShow=!1,""!==this.mobileAccount&&(this.allow=!0,clearInterval(this.timer),this.title="获取验证码"))},goBack:function(){this.handRouter?this.$router.replace(this.handPath):this.replaceRouter?this.$router.replace(this.routerName):this.$store.dispatch("doHistoryBack")},toggle:function(){this.passwordType=!this.passwordType},onClickRight:function(){gio("track","MSignUpEntranceBtn"),this.$router.push("/register")},passwordLogin:function(){var e=this,t=this.mobileAccount.replace(/\s/g,"");this.password=this.password.replace(/\s/g,"");var a,i=this;i.show?(gio("track","LnpLoginBtn"),this.$util.gioTrackWithVariable("mall_login_click_Login"),a={type:"pwd",userName:i.ordinaryAccount,password:encodeURIComponent(i.password),captcha:i.captcha,isNew:1,noLoading:!0,regSource:"MUc"}):(gio("track","LmLoginBtn"),this.$util.gioTrackWithVariable("mall_login_click_SMSLogin"),a={type:"mobile",mobile:t,regSource:"MSmslogin",captcha:i.messageMM}),this.$store.dispatch("doH5Login",a).then((function(t){400===t.code?("captcha_required"===t.errorCode&&(e.disabledOrdinary=!0,e.disabled=!0,e.captchaShow=!0,e.captcha=""),e.getPhoto(),e.$toast(t.message)):(sessionStorage.setItem("isRecordShareRelation",""),e.callBackPath?window.location.href=window.decodeURIComponent(e.callBackPath):e.goBack())}))},change:function(){this.captcha="",this.show=!this.show,this.show?gio("track","LoginNamepwdBtn"):gio("track","LoginMobileBtn"),this.checkInputFn(),this.captchaShow&&this.getPhoto()},getMessage:function(){var e=this,t=this.mobileAccount.replace(/\s/g,"");this.$util.dealSmDeviceId().then((function(a){var i={mobile:t};e.captchaShow&&(i.imgCaptcha=e.captcha),e.captchaShow&&""===e.captcha?e.$toast("请输入图片验证码"):e.phoneReg.test(t)&&e.allow&&n["a"].register(i,a).then((function(t){if(gio("track","LmSendSmsBtn"),!1===t.data.success)e.$toast(t.data.message);else{e.allow=!1,e.$toast("短信验证码发送成功，请及时验证！");var a=60;e.timer=setInterval((function(){0===a?(e.allow=!0,clearInterval(e.timer),e.title="重发验证码"):(e.title="重新发送("+a+"s)",e.allow=!1,a--)}),1e3)}}))}))},verification:function(){var e=this,t=this.mobileAccount.replace(/\s/g,"");if(this.phoneReg.test(t)){gio("track","LmMobileInput");var a={mobile:t};n["a"].needImg(a).then((function(t){t.data.data?(e.captchaShow=!0,e.getPhoto()):e.captchaShow=!1}))}else this.$toast("手机号格式不正确，请重新输入")},getPhoto:function(){var e=this.show?"/v3/platform/web/member/getImgCaptchafromUC.html":"/v3/platform/web/member/register/getImgCaptcha";this.src=this.$HOST+e+"?rnd="+Math.random()+"&flag="+localStorage.getItem("sessionValue")},toRetrieve:function(){gio("track","FindPwdBtn"),this.$router.push("/retrieve")},clear:function(){this.mobileAccount="",this.ordinaryAccount="",this.checkInputFn()},count:function(e){this.ordinaryAccount=this.ordinaryAccount.replace(/\s/g,""),gio("track","LnpInputName")},countM:function(){gio("track","LnpInputPwd")},verifyCount:function(){gio("track","LmPicInput")},safetyCount:function(){gio("track","LmSmsInput")}}},u=l,h=(a("7d30"),a("2877")),d=Object(h["a"])(u,i,s,!1,null,"7b23ea04",null);t["default"]=d.exports},eb13:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"g",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"f",(function(){return u})),a.d(t,"h",(function(){return h})),a.d(t,"e",(function(){return d}));var i=a("1c03"),s=a("bbc2"),o=function(){return i["a"].request({url:s["a"].GET_JOBS,method:"get"})},n=function(e){return i["a"].request({url:s["a"].submitApplyInfo,method:"POST",data:e,headers:{"Content-Type":"application/json"}})},r=function(e){return i["a"].request({url:s["a"].applyResult,method:"get",params:e})},c=function(){return i["a"].request({url:s["a"].queryApplyInfo,method:"get"})},l=function(e){return i["a"].request({url:s["a"].bindWxAccount,method:"get",params:e})},u=function(e){return i["a"].request({url:s["a"].queryMemberInfo,method:"get",params:e})},h=function(e){return i["a"].request({url:s["a"].submitStandardMemberInfo,method:"POST",data:e,headers:{"Content-Type":"application/json"}})},d=function(e){return i["a"].request({url:s["a"].queryEmployeeInfo,method:"POST",data:e,headers:{"Content-Type":"application/json"}})}}}]);
//# sourceMappingURL=chunk-166e51be.d07c7cb3.js.map