(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9259158"],{2822:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"frame-page"},[s("iframe",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.src,frameborder:"0"}})])},n=[],o=s("21b1"),r=s("f121"),c=new o["a"];c.initDeviceReady();var a={components:{},data:function(){return{src:"",isIos:this.$util.isIos()}},mounted:function(){var e=this;if(this.$util.isIos()){var t=this.$route.query.orderSn;sessionStorage.setItem("orderSn",t),console.log(t,"orderSn")}this.src=r["a"].HOST+"/sgmobile/iframe",console.log(this.src,"iframe src"),this.$util.isAndroid()&&c.initDeviceReady().then((function(){c.androidPhysicalBtForBack({process:!0,deviceChangeListener:function(){console.log("process为true，android物理返回动作时触发,在此执行相应逻辑"),e.$router.back()},eventKey:"backEvent"})}))},methods:{back:function(){this.isIos||(console.log("back"),this.$router.back())}}},u=a,d=(s("89fb"),s("2877")),l=Object(d["a"])(u,i,n,!1,null,null,null);t["default"]=l.exports},"89fb":function(e,t,s){"use strict";s("d55b")},d55b:function(e,t,s){}}]);
//# sourceMappingURL=chunk-d9259158.e8cc7fc6.js.map