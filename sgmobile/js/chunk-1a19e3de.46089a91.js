(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a19e3de"],{"38fd":function(t,e,a){"use strict";a("caff")},aa19:function(t,e,a){"use strict";var s=a("1c03"),i=a("bbc2"),o=function(t,e){return s["a"].request({url:i["a"].register,headers:{deviceId:e+"",Authorization:"open the gate"},method:"GET",params:t})},c=function(t,e){return s["a"].request({url:i["a"].login,method:"POST",params:t})},n=function(t){return s["a"].request({url:i["a"].password,method:"GET",params:t})},r=function(t){return s["a"].request({url:i["a"].needImg,method:"GET",params:t})},l=function(t){return s["a"].request({url:i["a"].getImg,method:"GET",params:t})},p=function(t){return s["a"].request({url:i["a"].retrieve,method:"GET",params:t})},u=function(t){return s["a"].request({url:i["a"].changePassword,method:"POST",params:t})},m=function(t,e){return s["a"].request({url:i["a"].registerAccount,method:"POST",params:t})};e["a"]={register:o,login:c,password:n,needImg:r,getImg:l,retrieve:p,changePassword:u,registerAccount:m}},caff:function(t,e,a){},f3b0:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("div",{staticClass:"info"},[a("div",{staticClass:"box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.mobileAccount,expression:"mobileAccount"}],staticClass:"info-mm",attrs:{type:"tel",placeholder:"请输入手机号",maxlength:"13",required:""},domProps:{value:t.mobileAccount},on:{keyup:t.keyup,input:function(e){e.target.composing||(t.mobileAccount=e.target.value)}}}),a("img",{staticClass:"editable-clear-x",attrs:{src:t.$cdnImageUrl+"/login/clear.png"},on:{click:t.clear}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.captchaShow,expression:"captchaShow"}],staticClass:"box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],staticClass:"info-mm",attrs:{type:"text",placeholder:"请输入图形验证码",maxlength:"6"},domProps:{value:t.captcha},on:{blur:t.verifyCount,input:function(e){e.target.composing||(t.captcha=e.target.value)}}}),a("img",{staticClass:"verify-two",attrs:{src:t.src,alt:""},on:{click:t.getPhoto}})]),a("div",{staticClass:"box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.messageMM,expression:"messageMM"}],staticClass:"info-mm",attrs:{type:"tel",placeholder:"请输入验证码",maxlength:"6"},domProps:{value:t.messageMM},on:{blur:t.safetyCount,input:function(e){e.target.composing||(t.messageMM=e.target.value)}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.messageMMType,expression:"!messageMMType"}],staticClass:"verify",style:{color:"#ccc"}},[t._v(t._s(t.title))]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.messageMMType,expression:"messageMMType"}],staticClass:"verify",style:{color:t.allow?"#2283E2":"#333333"},on:{click:t.find}},[t._v(t._s(t.title))])]),a("div",{staticClass:"box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"},{name:"show",rawName:"v-show",value:t.passwordType,expression:"passwordType"}],staticClass:"info-mm",attrs:{type:"password",placeholder:"请输入新密码"},domProps:{value:t.password},on:{blur:t.detection,input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"},{name:"show",rawName:"v-show",value:!t.passwordType,expression:"!passwordType"}],staticClass:"info-mm",attrs:{type:"text",placeholder:"请输入新密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("img",{staticClass:"show",attrs:{src:t.passwordType?t.$cdnImageUrl+"/login/unvisible.png":t.$cdnImageUrl+"/login/visible.png",alt:""},on:{click:t.toggle}})]),a("div",{staticClass:"hint"},[a("img",{attrs:{src:t.$cdnImageUrl+"/login/pwd.png",alt:""}}),t._v(" 密码为数字、字母(区分大小写)、特殊符号中的两种组合，长度为6位-20位 ")]),a("div",{staticClass:"btn",on:{click:t.changeMm}},[t._v("提交")])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top"},[a("div",{staticClass:"sign"},[a("div",[t._v("忘记密码")])])])}],o=a("aa19"),c={data:function(){return{mobileAccount:"",password:"",passwordType:!0,show:!0,title:"获取验证码",allow:!0,captcha:"",messageMM:"",src:"",captchaShow:!1,reg:/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/,phoneReg:/^1[3456789]\d{9}$/,messageMMType:!1}},created:function(){this.$util.smMsgSdk()},watch:{},methods:{keyup:function(){var t=this.mobileAccount;t=t.replace(/[^0-9]/g,"");var e=[];e[0]=t.slice(0,3),e[1]=t.slice(3,7),e[2]=t.slice(7),e[2].length>0?(e[1]+=" ",e[0]+=" "):e[1].length>0&&(e[0]+=" "),13===this.mobileAccount.length?(this.messageMMType=!0,this.verification()):this.messageMMType=!1,this.mobileAccount=e.join("")},toggle:function(){this.passwordType=!this.passwordType},getPhoto:function(){this.src=this.$HOST+"/v3/platform/web/member/register/getImgCaptcha.html?rnd="+Math.random()+"&flag="+localStorage.getItem("sessionValue")},find:function(){var t=this,e=this.mobileAccount.replace(/\s/g,"");if(this.allow){if(!this.phoneReg.test(e))return void this.$toast("手机号格式错误");if(this.captchaShow&&""===this.captcha)return void this.$toast("请输入图片验证码");var a={mobileNum:e};this.captchaShow?a.captcha=this.captcha:a.v=1,o["a"].retrieve(a).then((function(e){if(!1===e.data.success)t.$toast(e.data.message);else{gio("track","FpSendSmsBtn"),t.$toast("短信验证码发送成功，请及时验证！");var a=60,s=setInterval((function(){0===a?(t.allow=!0,clearInterval(s),t.title="重发验证码"):(t.title="重新发送("+a+"s)",t.allow=!1,a--)}),1e3)}}))}},changeMm:function(){var t=this,e=this.mobileAccount.replace(/\s/g,"");if(this.messageMM=this.messageMM.replace(/\s/g,""),""===this.mobileAccount&&this.$toast("请填写手机号"),this.phoneReg.test(e))if(this.captchaShow&&""===this.captcha)this.$toast("请输入图片验证码");else if(this.reg.test(this.password)){var a={captcha:this.messageMM,mobileNum:e,password:this.password};this.captchaShow?a.imgCaptcha=this.captcha:a.v=1,o["a"].changePassword(a).then((function(e){e.data.success?(gio("track","FpSubmitBtn"),t.$toast("找回密码成功!"),t.$router.push("/login")):t.$toast(e.data.message)}))}else this.$toast("密码为数字、字母(区分大小写)、特殊符号中的两种组合，长度为6位-20位");else this.$toast("手机号格式错误")},clear:function(){this.mobileAccount=""},verification:function(){var t=this;gio("track","FpMobileInput");var e=this.mobileAccount.replace(/\s/g,"");if(this.phoneReg.test(e)){var a={mobile:e};o["a"].needImg(a).then((function(e){e.data.data?(t.captchaShow=!0,t.getPhoto()):t.captchaShow=!1}))}else this.$toast("手机号格式不正确，请重新输入")},safetyCount:function(){gio("track","FpSmsInput")},verifyCount:function(){gio("track","FpPicInput")},detection:function(){gio("track","FpNpInput")}}},n=c,r=(a("38fd"),a("2877")),l=Object(r["a"])(n,s,i,!1,null,"510e529c",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-1a19e3de.46089a91.js.map