(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1601c6db"],{"0d8d":function(t,i,e){"use strict";e.d(i,"a",(function(){return n})),e.d(i,"b",(function(){return s}));var a=e("1c03"),o=e("bbc2"),n=function(t){return a["a"].request({url:o["a"].GET_PROVINCE_LIST,method:"get",params:t})},s=function(t){return a["a"].request({url:o["a"].GET_PROVINCE_LIST_BY_STOREOWNERID,method:"get",params:t})}},"0f95":function(t,i,e){"use strict";e("c1eb")},"67a4":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"box"},[e("div",{staticClass:"address",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"top",on:{touchmove:function(t){t.preventDefault()}}},[e("div",{staticClass:"title"},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.isShowBack,expression:"isShowBack"}],attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAx0lEQVRYR83XMQ5CIQzG8ZbrOHIKFydnr+ZJHJ2A6R3FCxiGl5gYH7T9WmQm+f+AgZRp8eLFfUIBUs751FrbpAdCAHr8TkTXlNKllPKQIKyAPX4johczn2utzyiAOd6h2huAxLUAWFwDgMalAHhcAnCJzwLc4jMA1/gI4B4/AoTEfwHC4n8L6LCwWzj6C0IQo8/IHTECuD/HDMAVMQtwQ0gALggpAI7QAKAILQCGsAAgCCvgE7FkMNlnkKWjmWQQ+tqLeAIT4A2X4aIh0K6d/wAAAABJRU5ErkJggg==",alt:""},on:{click:t.closeAndBack}}),t._v(" 选择地址 ")]),e("div",{staticClass:"change"},[t.province?e("span",{on:{click:t.provinceClick}},[t._v(t._s(t.provinceData.text))]):t._e(),t.city?e("span",{on:{click:t.cityClick}},[t._v(t._s(t.cityData.text))]):t._e(),t.area?e("span",{on:{click:t.areaClick}},[t._v(t._s(t.areaData.text))]):t._e(),e("span",{staticClass:"placeChange"},[t._v("请选择")])])]),t.list.length>6?e("div",{staticClass:"bottom"},[t.showLoading?e("van-loading",{staticClass:"loadingClass",attrs:{vertical:""}},[t._v("加载中...")]):t._e(),t._l(t.list,(function(i,a){return e("div",{key:a,staticClass:"address-item",on:{click:function(e){return t.cityListClick(i)}}},[t._v(t._s(i.text))])}))],2):e("div",{staticClass:"bottom",on:{touchmove:function(t){t.preventDefault()}}},[t.showLoading?e("van-loading",{staticClass:"loadingClass",attrs:{vertical:""}},[t._v("加载中...")]):t._e(),t._l(t.list,(function(i,a){return e("div",{key:a,staticClass:"address-item",on:{click:function(e){return t.cityListClick(i)}}},[t._v(t._s(i.text))])}))],2)])])},o=[],n=e("2f62"),s=e("0d8d");function c(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,a)}return e}function r(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?c(Object(e),!0).forEach((function(i){l(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}function l(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var d={props:["onlyread","isShowBack","storeId"],data:function(){return{showLoading:!1,location:null,show:!0,list:[],windowHeight:"",province:!1,provinceData:"",city:!1,cityData:"",area:!1,areaData:!1,clickNum:0,townData:"",firstValue:0,secondValue:0}},methods:r(r(r({},Object(n["e"])(["setLocationInfo","setLoaction"])),Object(n["c"])(["getLatLongByLocationInfo"])),{},{hideParent:function(t){},removeHidden:function(t){},chooseCurrent:function(){this.location?(this.onlyread||(localStorage.setItem("latitude",this.location.latitude),localStorage.setItem("longitude",this.location.longitude),localStorage.setItem("provinceId",this.location.provinceId),localStorage.setItem("cityId",this.location.cityId),localStorage.setItem("districtId",this.location.districtId),localStorage.setItem("townshipId",this.location.townshipId),localStorage.setItem("aId",""),this.setLocationInfo(this.location),this.setLoaction({latitude:this.location.latitude,longitude:this.location.longitude})),this.$emit("handleLocation",this.location)):(console.log("手动定位"),this.getLocation())},closeModal:function(){this.$emit("onHide")},closeAndBack:function(){this.initLocation(),this.$emit("closeAndBack")},provinceClick:function(){var t=this;this.showLoading=!0,this.list=[],Object(s["b"])({parentId:0,regionType:1,storeOwnerId:this.storeId}).then((function(i){t.province=!1,t.city=!1,t.area=!1,t.clickNum=0,t.showLoading=!1,200===i.status?t.list=i.data.data:t.$toast("请求失败，请重试")}))["catch"]((function(i){t.$toast("请求失败，请重试")}))},cityClick:function(){var t=this;this.showLoading=!0,this.list=[],Object(s["b"])({parentId:this.firstValue,regionType:2,storeOwnerId:this.storeId}).then((function(i){t.city=!1,t.area=!1,t.clickNum=1,t.showLoading=!1,200===i.status?t.list=i.data.data:t.$toast("请求失败，请重试")}))["catch"]((function(i){t.$toast("请求失败，请重试")}))},areaClick:function(){var t=this;this.showLoading=!0,this.list=[],Object(s["b"])({parentId:this.secondValue,regionType:3,storeOwnerId:this.storeId}).then((function(i){t.clickNum=2,t.area=!1,t.showLoading=!1,200===i.status?t.list=i.data.data:t.$toast("请求失败，请重试")}))["catch"]((function(i){t.$toast("请求失败，请重试")}))},cityListClick:function(t){var i=this;if(this.showLoading=!0,0===this.clickNum){this.provinceData=t,this.list=[];var e={parentId:t.value,regionType:2,storeOwnerId:this.storeId};this.firstValue=t.value,Object(s["b"])(e).then((function(t){i.showLoading=!1,200===t.status?i.list=t.data.data:i.$toast("请求失败，请重试")}))["catch"]((function(t){i.$toast("请求失败，请重试")})),this.province=!0,this.clickNum++}else 1===this.clickNum?(this.list=[],this.cityData=t,Object(s["b"])({parentId:t.value,regionType:3,storeOwnerId:this.storeId}).then((function(t){i.showLoading=!1,200===t.status?i.list=t.data.data:i.$toast("请求失败，请重试")}))["catch"]((function(t){i.$toast("请求失败，请重试")})),this.secondValue=t.value,this.city=!0,this.clickNum++):2===this.clickNum?(this.list=[],this.area=!0,this.areaData=t,Object(s["b"])({parentId:t.value,regionType:4,storeOwnerId:this.storeId}).then((function(t){i.showLoading=!1,200===t.status?i.list=t.data.data:i.$toast("请求失败，请重试"),0===t.data.data.length&&(i.clickNum=0,i.resetLocation())}))["catch"]((function(t){i.$toast("请求失败，请重试")})),this.clickNum++):3===this.clickNum&&(this.list=[],this.townData=t,this.clickNum=0,this.resetLocation())},resetLocation:function(){var t=this,i={region:"".concat(this.provinceData.text," ").concat(this.cityData.text," ").concat(this.areaData.text," ").concat(this.townData.text),provinceId:this.provinceData.value,province:this.provinceData.text,cityId:this.cityData.value,city:this.cityData.text,districtId:this.areaData.value,district:this.areaData.text,townshipId:this.townData.value,township:this.townData.text};this.getLatLongByLocationInfo(i).then((function(e){400===e?t.$toast("根据位置信息获取经纬度失败"):(i.latitude=e.latitude,i.longitude=e.longitude,t.onlyread||(localStorage.setItem("latitude",e.latitude),localStorage.setItem("longitude",e.longitude),localStorage.setItem("provinceId",i.provinceId),localStorage.setItem("cityId",i.cityId),localStorage.setItem("districtId",i.districtId),localStorage.setItem("townshipId",i.townshipId),localStorage.setItem("aId",""),t.setLocationInfo(i),t.setLoaction(e)),t.$emit("handleLocation",i))}))},getLocation:function(){var t=this;this.$store.dispatch("doLocation",!0).then((function(i){400===i?t.$toast("定位失败，请自行选择位置信息"):t.$store.dispatch("doLocationInfo",{latitude:i.latitude,longitude:i.longitude,noStore:!0,force:!0}).then((function(i){t.location=i}))}))},initLocation:function(){var t=this,i={parentId:0,regionType:1,storeOwnerId:this.storeId};Object(s["b"])(i).then((function(i){t.showLoading=!1,200===i.status?t.list=i.data.data:t.$toast("请求失败，请重试")}))["catch"]((function(i){t.$toast("请求失败，请重试")}))}}),mounted:function(){this.hideParent(),this.initLocation()},beforeDestroy:function(){this.removeHidden()}},h=d,u=(e("0f95"),e("2877")),g=Object(u["a"])(h,a,o,!1,null,"8c5e63dc",null);i["default"]=g.exports},c1eb:function(t,i,e){}}]);
//# sourceMappingURL=chunk-1601c6db.cd26f3da.js.map