(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-492f2e5e"],{"0ca7":function(e,t,i){"use strict";i("bffc")},"5afc":function(e,t,i){},"85d4":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"swiper-wrap"},[i("div",{staticClass:"swiper"},[i("div",{staticClass:"banner-swiper",attrs:{id:"bannerSwiper"}},[i("van-swipe",{ref:"swiper",staticClass:"swiper-banner",attrs:{"indicator-color":"#333",loop:!1,"show-indicators":e.showIndicator},on:{change:e.onChange}},e._l(e.swiperImg,(function(t,s){return i("van-swipe-item",{key:t.id,staticClass:"swiper-item"},[t.baseImage?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.baseImage,expression:"image.baseImage"}],staticClass:"swiper-img",on:{click:function(t){return e.fnPreviewImage(s)}}}):t.video?i("div",{attrs:{id:"swiperVideo"},on:{click:function(t){return e.videoClick(s)}}},[i("video",{staticClass:"video-js",attrs:{id:"my-player",preload:"auto",controls:"",playsinline:"true","webkit-playsinline":"","x5-playsinline":"","x-webkit-airplay":"allow","x5-video-player-type":"h5","x5-video-orientation":"portraint","x5-video-player-fullscreen":"",poster:e.playerOptions.poster}},[i("source",{attrs:{src:e.playerOptions.sources[0].src,type:"video/mp4"}}),i("p",{staticClass:"vjs-no-js"},[e._v(" To view this video please enable JavaScript, and consider upgrading to a web browser that "),i("a",{attrs:{href:"https://videojs.com/html5-video-support/",target:"_blank"}},[e._v(" supports HTML5 video ")])])])]):i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"image"}],staticClass:"swiper-img",on:{click:function(t){return e.fnPreviewImage(s)}}})])})),1)],1),i("div",{class:{"small-video":e.smallVideoShow},attrs:{id:"playVideo"},on:{touchstart:e.touchstart,touchmove:function(t){return t.stopPropagation(),t.preventDefault(),e.touchmove.apply(null,arguments)},touchend:e.touchend}},[i("span",{staticClass:"small-icon",on:{touchend:function(t){return t.stopPropagation(),t.preventDefault(),e.changeVoince.apply(null,arguments)}}},[i("img",{directives:[{name:"show",rawName:"v-show",value:e.isMuted,expression:"isMuted"}],attrs:{src:"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/goodsDetail/novioce.png",alt:""}}),i("img",{directives:[{name:"show",rawName:"v-show",value:!e.isMuted,expression:"!isMuted"}],attrs:{src:"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/goodsDetail/vioce.png",alt:""}})]),i("span",{staticClass:"small-icon small-close",on:{touchend:function(t){return t.stopPropagation(),t.preventDefault(),e.closeSmallVideo.apply(null,arguments)}}},[i("img",{attrs:{src:"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/goodsDetail/close.png",alt:""}})]),i("span",{staticClass:"small-icon small-full",on:{touchend:function(t){return t.stopPropagation(),t.preventDefault(),e.smallVideoClick.apply(null,arguments)}}},[i("img",{attrs:{src:"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/goodsDetail/allsceen.png",alt:""}})]),i("div",{attrs:{id:"smallVideoWarp"}})]),i("div",{staticClass:"custom-indicator"},[i("span",[e._v(e._s(e.current+1))]),e._v(" / "+e._s(e.swiperImg.length)+" ")])]),i("div",{attrs:{id:"swiper-line"}})])},l=[],o=(i("fda2"),i("3d33")),n=i.n(o),a=i("1619"),r=!1,c={inject:["getCurScrollTop"],props:["images","products"],data:function(){return{startX:"",offsetX:"",offsetY:"",oldX:-1,oldY:-1,player:null,prevInstance:null,current:0,swiperImg:[],smallVideoShow:"",fullSceen:!1,isCancelSmallVideo:!1,isMuted:!0,showIndicator:!0,interval:2e3,playerOptions:{playbackRates:[.7,1,1.5,2],autoplay:!1,muted:!0,loop:!1,preload:this.$util.isIos()?"auto":"none",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"",src:""}],poster:"",notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!1,volumePanel:{inline:!1}}}}},computed:{scrollTop:function(){return this.getCurScrollTop()}},mounted:function(){},watch:{scrollTop:function(e){if(this.scrollWatchFn(e),this.player&&null!==this.player){var t,i=null===(t=document.getElementById("swiper-line"))||void 0===t?void 0:t.offsetTop,s=document.getElementById("swiperVideo"),l=document.getElementById("smallVideoWarp"),o=!1;o=!(!this.player||null===this.player||!this.player.paused()),console.log(o,"====ispaused===="),this.isMuted=this.player.muted(),e>i&&!this.isCancelSmallVideo?(this.smallVideoShow=!0,l.append(s.firstElementChild),!o&&this.player.play()):(this.smallVideoShow=!1,s.append(l.firstElementChild),!o&&this.player.play())}},images:{handler:function(e){var t=this;this.checkHasVideo()&&(this.showIndicator=!1),console.log(e,"newValue"),this.current=0,this.swiperImg=e.map((function(e,i){var s=Object(a["imageToHttps"])(e.img?e.img:e.baseImage||e);s=Object(a["imageThumb"])(s,500),s=Object(a["imageToWebp"])(s,t.$webpSurpport);var l={};return e.img?(t.swiperVideo=e.video,t.playerOptions.poster=e.img.replace("http:","https:"),t.playerOptions.sources[0].src=e.video.replace("http:","https:"),t.player=null,t.videoPlugins(),l={id:Math.random(),img:s,video:e.video}):l={id:Math.random(),src:s,loading:"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/img_bg.png",error:"https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/img_bg.png"},l}))},immediate:!0,deep:!0}},methods:{videoClick:function(e){this.$util.gioTrackWithVariable("MB15620",{site_number:e+1+"",material_type:"视频"})},scrollWatchFn:function(e){if(this.player){var t,i=null===(t=document.getElementById("swiper-line"))||void 0===t?void 0:t.offsetTop,s=document.getElementById("swiperVideo"),l=document.getElementById("smallVideoWarp"),o=!1;o=!!this.player.paused(),this.isMuted=this.player.muted(),e>i&&!this.isCancelSmallVideo?(this.smallVideoShow=!0,l.append(s.firstElementChild),!o&&this.player.play()):(this.smallVideoShow=!1,s.append(l.firstElementChild),!o&&this.player.play())}},touchstart:function(e){if(this.smallVideoShow){var t=e.touches[0].pageX,i=e.touches[0].pageY,s=document.getElementById("playVideo").offsetLeft,l=document.getElementById("playVideo").offsetTop;this.offsetX=t-s,this.offsetY=i-l}},touchmove:function(e){if(r=!0,this.smallVideoShow){var t,i,s=e.touches[0].pageX,l=e.touches[0].pageY,o=window.innerWidth,n=window.innerHeight,a=document.getElementById("playVideo").offsetHeight,c=document.getElementById("playVideo").offsetWidth;t=s-this.offsetX>o-c?o-c:s-this.offsetX<0?0:s-this.offsetX,i=l-this.offsetY<0?50:l-this.offsetY>n-a?n-a-100:l-this.offsetY,this.oldX=t,this.oldY=i,document.getElementById("playVideo").style.left=t+"px",document.getElementById("playVideo").style.top=i+"px"}},touchend:function(){if(r){r=!1;var e=window.innerHeight,t=window.innerWidth,i=document.getElementById("playVideo").offsetWidth,s=document.getElementById("playVideo").offsetHeight;this.offsetX="",this.offsetY="",this.startX="",this.oldX>(t-i)/2?document.getElementById("playVideo").style.left=t-i+"px":document.getElementById("playVideo").style.left="0px",this.oldY<50?document.getElementById("playVideo").style.top="50px":this.oldY>e-s-100&&(document.getElementById("playVideo").style.top=e-s-100+"px")}},onChange:function(e){this.current=e,console.log(this.current,"index+++++++"),this.checkHasVideo()&&0===e?this.showIndicator=!1:this.showIndicator=!0,this.$emit("swiperChange",e)},checkHasVideo:function(){var e=!1;return this.products.videoUrl&&(e=!0),e},fnPreviewImage:function(e){this.$util.gioTrackWithVariable("MB15620",{site_number:e+1+"",material_type:"图片"}),this.fullSceen=!this.fullSceen;var t=!1;if(t=!(!this.player||!this.player.paused()),console.log(t,"====ispaused===="),this.fullSceen){var i=document.getElementById("maskVideo"),s=document.getElementById("bannerSwiper");console.log(i,"maskVideo"),i.append(s.firstElementChild),i.classList.add("active"),this.$emit("sceenChange",this.fullSceen),!t&&this.player&&this.player.play()}else{var l=document.getElementById("maskVideo"),o=document.getElementById("bannerSwiper");console.log(o,"bannerSwiper"),o.append(l.firstElementChild),l.classList.remove("active"),this.$emit("sceenChange",this.fullSceen),!t&&this.player&&this.player.play()}},videoPlugins:function(){var e=this,t=this,i=n.a.getComponent("Button"),s=n.a.extend(i,{constructor:function(e,t){i.call(this,e,t),this.setAttribute("id","fullBtn")},handleClick:function(e){console.log(e),t.fullSceen=!t.fullSceen;var i=!1;if(i=!(!t.player||!t.player.paused()),console.log(i,"====ispaused===="),t.fullSceen){var s=document.getElementById("maskVideo"),l=document.getElementById("bannerSwiper");console.log(s,"maskVideo"),s.append(l.firstElementChild),s.classList.add("active"),t.$emit("sceenChange",t.fullSceen),!i&&t.player.play()}else{var o=document.getElementById("maskVideo"),n=document.getElementById("bannerSwiper");console.log(n,"bannerSwiper"),n.append(o.firstElementChild),o.classList.remove("active"),t.$emit("sceenChange",t.fullSceen),!i&&t.player.play(),t.scrollWatchFn(t.getCurScrollTop())}},buildCSSClass:function(){return"vjs-custom-control vjs-control vjs-button-full"}});n.a.registerComponent("fullBtn",s),this.$nextTick((function(){e.player=n()("my-player",e.playerOptions,(function(){console.log(e.player,"videoplayer"),e.player.getChild("controlBar").addChild("fullBtn",{},10)})),e.player.on("play",(function(){console.log("playing"),e.$util.gioTrackWithVariable("MB15620",{site_number:"1",material_type:"视频"}),e.$util.isWifi().then((function(t){t||e.$toast("当前非Wifi播放，请注意流量消耗")})),e.isCancelSmallVideo=!1})),e.$util.isWifi().then((function(t){t?(console.log("isWifi"),e.player.muted(e.isMuted),e.player.play()):console.log("not isWifi")}))}))},changeVoince:function(){this.isMuted=!this.isMuted,this.player.muted(this.isMuted)},closeSmallVideo:function(){var e=document.getElementById("swiperVideo"),t=document.getElementById("smallVideoWarp");this.smallVideoShow=!1,this.isCancelSmallVideo=!0,e.append(t.firstElementChild),this.player&&!this.player.paused()&&this.player.pause()},smallVideoClick:function(){console.log("smallVideoClick");var e=!1;e=!(!this.player||!this.player.paused()),console.log(e,"====ispaused===="),this.closeSmallVideo(),this.isCancelSmallVideo=!1;var t=document.getElementById("maskVideo"),i=document.getElementById("bannerSwiper");console.log(t,"maskVideo"),t.append(i.firstElementChild),t.classList.add("active"),this.fullSceen=!0,this.$emit("sceenChange",!0),!e&&this.player.play()}},beforeDestroy:function(){this.prevInstance&&this.prevInstance.close()}},d=c,p=(i("0ca7"),i("e463"),i("2877")),u=Object(p["a"])(d,s,l,!1,null,"3c3b020a",null);t["default"]=u.exports},bffc:function(e,t,i){},e463:function(e,t,i){"use strict";i("5afc")}}]);
//# sourceMappingURL=chunk-492f2e5e.3a074e99.js.map