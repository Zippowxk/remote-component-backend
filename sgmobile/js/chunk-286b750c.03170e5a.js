(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-286b750c"],{"1a83":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("van-nav-bar",{attrs:{title:"test View","left-arrow":""},on:{"click-left":t.onClickLeft}}),o("div",{staticClass:"container",style:{"background-color":t.$route.query.color}},[o("lazy-title"),o("h1",{staticStyle:{color:"white"}},[t._v(t._s(t.$route.query.color))]),o("router-link",{attrs:{to:"/product?color="+t.nextColor}},[t._v(' Push to product "'+t._s(t.nextColor)+'" ')])],1)],1)},n=[],a=(o("5246"),o("6b41")),l=function(){return o.e("lazy-title").then(o.bind(null,"f13d"))},c={name:"Product",components:{VanNavBar:a["a"],lazyTitle:l},data:function(){return{nextColor:"",testArray:[]}},created:function(){for(var t=0;t<5e4;t++)this.testArray.push(new Date);var e=["Teal","DarkBlue","Turquoise","LightSalmon"];e.splice(e.indexOf(this.$route.query.color),1),this.nextColor=e[Math.floor(3*Math.random())]},beforeDestroy:function(){},destroyed:function(){},methods:{onClickLeft:function(){this.$router.back()}}},i=c,u=(o("4e8b"),o("2877")),s=Object(u["a"])(i,r,n,!1,null,"d10dd584",null);e["default"]=s.exports},"4e8b":function(t,e,o){"use strict";o("bf83")},bf83:function(t,e,o){}},0,["lazy-title"]]);
//# sourceMappingURL=chunk-286b750c.03170e5a.js.map