(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-410de077"],{"1bf8":function(e,t,a){"use strict";a("a28c")},"5f99":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"recharge-methods"},e._l(e.payWay,(function(t){return a("div",{key:t.key,staticClass:"recharge-pay-item",class:{selected:t.key===e.curSelect},on:{click:function(a){return e.doSelect(t.key)}}},[a("div",{staticClass:"pay-logo",class:"logo-"+t.key},[a("i"),e._v(e._s(t.name))]),e._m(0,!0)])})),0),a("div",{staticClass:"recharge-btn"},[a("a",{class:{disable:e.paying},attrs:{href:"javascript:;"},on:{click:e.goPay}},[e.paying?a("span",[e._v("支付中...")]):a("span",[e.repay?a("span",[e._v("重新支付￥"+e._s(e._f("moneyFormate")(e.money)))]):a("span",[e._v("立即支付￥"+e._s(e._f("moneyFormate")(e.money)))])])]),e.hasCancel?a("a",{staticClass:"cancel-btn",attrs:{href:"javascript:;"},on:{click:e.deleteRecharge}},[e._v("取消充值订单")]):e._e()])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pay-selected"},[a("i")])}],o=a("fa7d"),s=a("bbc2"),r={name:"paymethod",props:{mobile:{default:""},orderSn:{default:""},money:{default:0},hasCancel:{default:!1},repay:{default:!1}},data:function(){return{curSelect:"alipay",paying:!1,payWay:[{key:"alipay",name:"支付宝支付"},{key:"weixin",name:"微信支付"}]}},filters:{moneyFormate:function(e){return o["a"].formatNumber(e)}},methods:{doSelect:function(e){this.curSelect=e},checkOrderInfo:function(){return this.$http.post(s["a"].RECHARGE_PHONE_SAVEORDER,{lifePayType:"mobile",payAmt:this.money,orderAmt:this.money,diamondCount:0,phoneConfigId:"",rechargeValue:this.money,billKey:this.mobile,version:1})},doPay:function(e,t){var a=this;"alipay"===this.curSelect?o["a"].openNewWindow("".concat(e,"?orderSn=").concat(t)):"weixin"===this.curSelect&&this.$http.get("".concat(e,"?orderSn=").concat(t)).then((function(e){var t=e.data;t.success?"SUCCESS"===t.data.returnCode&&"SUCCESS"===t.data.resultCode?o["a"].openNewWindow(t.data.mwebUrl,!0):a.$toast(t.data.returnMsg):a.$toast(t.message),a.paying=!1}))},goPay:function(){var e=this;if(!this.paying){this.paying=!0;var t="";"alipay"===this.curSelect?t=s["a"].PHONE_RECHARGE_ALIPAY:"weixin"===this.curSelect&&(t=s["a"].PHONE_RECHARGE_WEIXIN),this.hasCancel||this.repay?this.doPay(t,this.orderSn):this.checkOrderInfo().then((function(a){var n=a.data;if(n.success){var i=n.data.orderSn;e.doPay(t,i)}else{if("1100"===n.errorCode){e.$toast("请重新登录");var o=setTimeout((function(){clearTimeout(o),e.$store.dispatch("doLogin")}),2e3);return}if("您有未付款的充值订单，请优先处理!"===n.message)return e.$dialog.confirm({title:"充值提示",message:"您有未付款的充值订单，请优先处理!",confirmButtonText:"去处理"}).then((function(){e.$router.push("/rechargelist")}))["catch"]((function(){})),void(e.paying=!1);e.$toast(n.message),e.paying=!1}}))["catch"]((function(){e.paying=!1}))}},deleteRecharge:function(){var e=this;this.$dialog.confirm({title:"订单状态变更提醒",message:"确定取消当前充值订单吗？",confirmButtonText:"确定"}).then((function(){e.$http.get("".concat(s["a"].DELETE_RECHARGE,"?orderSn=").concat(e.orderSn)).then((function(t){var a=t.data;a.success?e.$router.replace("/rechargelist"):e.$toast(a.message)}))}))["catch"]((function(){}))}}},c=r,l=(a("1bf8"),a("2877")),u=Object(l["a"])(c,n,i,!1,null,"bbb3a36e",null);t["a"]=u.exports},"62f2":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"recharge-page"},[a("Header",[a("router-link",{attrs:{slot:"right",to:"/rechargelist"},slot:"right"},[e._v("充值记录")])],1),a("div",{staticClass:"recharge-info"},[a("div",{staticClass:"recharge-phone"},[a("p",[e._v("充值手机号")]),a("h2",[e._v(e._s(e._f("mobileFormate")(e.mobile)))]),e.areaStatus?a("small",[e._v(e._s(e.area))]):a("small",{staticClass:"notice-text"},[e._v("未知区域，请谨慎充值")])]),a("div",{staticClass:"recharge-money"},[a("span",[e._v("充值金额")]),50==e.money||100==e.money?a("span",[e._v("￥"+e._s(e._f("moneyFormate")(e.money)))]):a("span",[e._v("暂不支持的金额")])])]),a("payMethod",{attrs:{money:e.money,mobile:e.mobile}}),a("div",{staticClass:"recharge-tips"},[e._v("温馨提示：本业务不提供发票")])],1)},i=[],o=a("fa7d"),s=a("bbc2"),r=a("e725"),c=a("5f99"),l={name:"recharge",components:{Header:r["a"],payMethod:c["a"]},filters:{mobileFormate:function(e){if(!e)return"";var t=e.split(""),a="";return t.forEach((function(e,t){3!==t&&7!==t||(a+=" "),a+=e})),a},moneyFormate:function(e){return o["a"].formatNumber(e)}},data:function(){return{mobile:"",money:"",area:"默认号码",areaStatus:!1,paying:!1,payMethod:""}},mounted:function(){var e=this.$route.query,t=e.money,a=e.mobile;o["a"].isPhone(a)||this.$toast("手机号格式不正确,请重新输入"),this.mobile=a,this.money=t,this.getPhoneLocation()},methods:{getPhoneLocation:function(){var e=this;this.$http.get("".concat(s["a"].GET_PHONE_LOCATION,"?mobile=").concat(this.mobile)).then((function(t){var a=t.data;a.success?(e.area=a.data,e.areaStatus=!0):e.areaStatus=!1}))}}},u=l,h=(a("8ec1"),a("2877")),f=Object(h["a"])(u,n,i,!1,null,"22aa73c2",null);t["default"]=f.exports},"6ff1":function(e,t,a){},"8ec1":function(e,t,a){"use strict";a("6ff1")},a28c:function(e,t,a){}}]);
//# sourceMappingURL=chunk-410de077.28cd9baa.js.map