(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5944b4ae"],{"1f6b":function(t,e,a){"use strict";a("db1a")},db1a:function(t,e,a){},e752:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"phone-part"},[a("div",{staticClass:"phone-one"},[t._v("手机号码")]),a("div",{staticClass:"phone-two"},[a("div",{staticClass:"phone-area"},[t._v("中国大陆（+86)")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.telephone,expression:"telephone"}],staticClass:"phone-input",attrs:{type:"text"},domProps:{value:t.telephone},on:{input:function(e){e.target.composing||(t.telephone=e.target.value)}}})])]),a("div",{staticClass:"descript"},[a("div",{staticClass:"des-area"},[a("van-cell-group",[a("van-field",{attrs:{type:"textarea",maxlength:"500","show-word-limit":""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1)]),a("div",{staticClass:"up-photo-ready"},[a("div",{staticClass:"up-title"},[t._v("上传凭证")]),a("upload-img",{staticStyle:{"margin-top":"12px"},attrs:{multiple:!0,maxCount:6,cameraDes:"最多六张"},model:{value:t.images,callback:function(e){t.images=e},expression:"images"}})],1),a("div",{staticClass:"statement"},[t._v("• 申请提交后不可以修改，如信息不确定，请确认后再提交")]),a("div",{staticClass:"up"},[a("div",{staticClass:"up-btn",on:{click:t.submission}},[t._v("提交")])])])},r=[],s=a("d3c8"),n=function(){return a.e("chunk-e5c4f6f4").then(a.bind(null,"40cb"))},o={components:{UploadImg:n},mounted:function(){this.$route.query.repairSn&&(this.repairSn=this.$util.strJSONParse(this.$route.query.repairSn,""))},data:function(){return{loading:!1,showBar:!1,telephone:this.$store.state.userInfo.phone,totalNum:0,content:"",images:[],repairSn:""}},methods:{submission:function(){var t=this;this.$toast.loading({forbidClick:!0,message:"加载中...",duration:0});var e=/^[1][3,4,5,7,8][0-9]{9}$/;if(""===this.telephone)return this.$toast("请输入手机号"),!1;if(!this.telephone.includes("****")&&!e.test(this.telephone))return this.$toast.fail("请填写正确联系电话"),!1;var a=this;if(a.images.length>0)this.loading=!0,s["a"].uploadPictureBybase64({base64s:a.images.map((function(t){return t.content.split(",")[1]}))}).then((function(t){if(a.loading=!1,t.data.success){var e={repairSn:a.repairSn.repairSn,description:a.content,mobile:a.telephone,picUrl:t.data.data.fileList.map((function(t){return t.imgUrl})).join()};s["a"].requestXiaoer(e).then((function(t){t.data.success?(a.$toast.clear(),a.$dialog.confirm({message:"您的订单已邀请小二介入，请保持电话通畅，我们将48小时之内告知您处理结果",className:"dialog-custom"}).then((function(){a.$router.replace({path:"/details",query:{orderProductId:a.repairSn.orderProductId}}),a.$router.go(-1)}))["catch"]((function(){a.$router.replace({path:"/details",query:{orderProductId:a.repairSn.orderProductId}}),a.$router.go(-1)}))):a.$toast.fail(t.data.message)}))}else a.$toast(t.data.message)}))["catch"]((function(){t.loading=!1,a.$toast.fail("上传图片失败")}));else{var i={repairSn:a.repairSn.repairSn,description:a.content,mobile:a.telephone};s["a"].requestXiaoer(i).then((function(t){t.data.success?(a.$toast.clear(),a.$dialog.confirm({message:"您的订单已邀请小二介入，请保持电话通畅，我们将48小时之内告知您处理结果",className:"dialog-custom"}).then((function(){a.$router.replace({path:"/details",query:{orderProductId:a.repairSn.orderProductId}}),a.$router.go(-1)}))["catch"]((function(){a.$router.replace({path:"/details",query:{orderProductId:a.repairSn.orderProductId}}),a.$router.go(-1)}))):a.$toast.fail(t.data.message)}))}},onConfirm:function(){this.service=!1,this.$router.replace({path:"/details",query:{orderProductId:this.repairSn.orderProductId}}),this.$router.go(-1)},onCancel:function(){this.service=!1}}},c=o,u=(a("1f6b"),a("2877")),l=Object(u["a"])(c,i,r,!1,null,"4d8074c4",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-5944b4ae.c4ab4463.js.map