(function(e){function t(t){for(var a,o,i=t[0],c=t[1],l=t[2],g=0,u=[];g<i.length;g++)o=i[g],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);s&&s(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),A()}function A(){for(var e,t=0;t<r.length;t++){for(var A=r[t],a=!0,i=1;i<A.length;i++){var c=A[i];0!==n[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=A[0]))}return e}var a={},n={app:0},r=[];function o(t){if(a[t])return a[t].exports;var A=a[t]={i:t,l:!1,exports:{}};return e[t].call(A.exports,A,A.exports,o),A.l=!0,A.exports}o.m=e,o.c=a,o.d=function(e,t,A){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:A})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var A=Object.create(null);if(o.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(A,a,function(t){return e[t]}.bind(null,a));return A},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=c;r.push([0,"chunk-vendors"]),A()})({0:function(e,t,A){e.exports=A("56d7")},"56d7":function(e,t,A){"use strict";A.r(t);A("e260"),A("e6cf"),A("cca6"),A("a79d");var a=A("2b0e"),n=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("v-app",[A("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[A("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.showDrawer=!e.showDrawer}}}),A("v-toolbar-title",[e._v("Brick a Pic")]),A("v-spacer"),A("v-btn",{attrs:{text:"",href:"/"}},[e._v("About")]),A("v-btn",{attrs:{text:"",href:"https://github.com/brick-a-pic/brick-a-pic",target:"_blank"}},[e._v("Source")])],1),A("v-content",[A("Preview",{attrs:{imageUrl:e.imageUrl}}),A("v-container",{attrs:{fluid:""}},[e.showDrawer?A("Settings",{on:{imageLoaded:e.passImage}}):e._e()],1)],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{staticClass:"background-wrapper"},[A("ImageProcessor",{attrs:{imageUrl:e.imageUrl},on:{imageSampled:e.onImageSampled}}),A("svg",{staticClass:"preview-svg",attrs:{viewBox:"0 0 200 100"}},[A("rect",{attrs:{x:"0",y:"0",width:"200",height:"100",stroke:"gray",fill:"none"}}),A("rect",{attrs:{x:"10",y:"10",width:"50",height:"50",fill:"black"}})])],1)},i=[],c=(A("99af"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),l=[function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{staticClass:"offscreen"},[A("canvas",{attrs:{id:"processing-canvas"}})])}],s=(A("d3b7"),A("3ca3"),A("ddb0"),A("2b3d"),{name:"ImageProcessor",props:["imageUrl"],watch:{imageUrl:function(e){var t=[],A=document.getElementById("processing-canvas").getContext("2d"),a=new Image,n=this;a.onload=function(){var r=32,o=32;A.drawImage(a,0,0,r,o),t=A.getImageData(0,0,r,o),n.$emit("imageSampled",t),URL.revokeObjectURL(e)},a.src=e}}}),g=s,u=(A("79ff"),A("2877")),f=Object(u["a"])(g,c,l,!1,null,null,null),p=f.exports;function d(e,t,A,a){for(var n=[],r=[],o=[],i=0;i<e.data.length;i+=4)n.push(e.data[i]),r.push(e.data[i+1]),o.push(e.data[i+2]);for(var c,l,s,g=1,u=1,f="http://www.w3.org/2000/svg",p=0;p<e.height;p+=1)for(var d=0;d<e.width;d+=1)s=p*e.width+d,c=document.createElementNS(f,"rect"),l="fill: rgb(".concat(n[s],",").concat(r[s],",").concat(o[s],");"),c.setAttributeNS(null,"style",l),c.setAttributeNS(null,"height",g),c.setAttributeNS(null,"width",u),c.setAttributeNS(null,"x",String(A+d*u)),c.setAttributeNS(null,"y",String(a+p*g)),t.appendChild(c)}var m={name:"Preview",props:["imageUrl","imageData"],components:{ImageProcessor:p},methods:{onImageSampled:function(e){var t=document.getElementsByClassName("preview-svg")[0];d(e,t,80,40)}}},v=m,C=(A("773a"),Object(u["a"])(v,o,i,!1,null,null,null)),h=C.exports,I=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("v-card",{attrs:{"max-width":"20em"}},[A("v-card-title",[e._v("Options")]),A("v-card-text",[A("OpenImage",{on:{change:e.onImageOpen}})],1)],1)},b=[],w=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",[A("v-file-input",{attrs:{label:"Open image",accept:"image/*","prepend-icon":"mdi-image",clearable:!1,rules:e.rules},on:{change:e.onChange}}),A("div",{staticClass:"subtitle-1"},[e._v("Choose a sample")]),A("v-container",{attrs:{fluid:""}},[A("v-row",e._l(e.sampleImages,(function(t,a){return A("v-col",{key:a,attrs:{cols:"4"}},[A("v-card",{attrs:{flat:"",tile:"",link:""},on:{click:function(A){return e.$emit("change",t)}}},[A("v-img",{attrs:{src:t,"aspect-ratio":"1"}})],1)],1)})),1)],1)],1)},B=[],U=(A("2ca0"),A("7ca7")),y=A("7ca7"),S=A("7ca7"),V={name:"OpenImage",data:function(){return{rules:[function(e){return!e||e.type.startsWith("image/")||"Please select a valid image"}],sampleImages:[U,y,S]}},methods:{onChange:function(e){if(e){var t=URL.createObjectURL(e);this.$emit("change",t)}}}},O=V,k=A("6544"),G=A.n(k),j=A("b0af"),L=A("62ad"),N=A("a523"),P=A("23a7"),E=A("adda"),J=A("0fd9"),Q=Object(u["a"])(O,w,B,!1,null,null,null),H=Q.exports;G()(Q,{VCard:j["a"],VCol:L["a"],VContainer:N["a"],VFileInput:P["a"],VImg:E["a"],VRow:J["a"]});var K={name:"Settings",components:{OpenImage:H},methods:{onImageOpen:function(e){this.$emit("imageLoaded",e)}}},X=K,x=A("99d9"),D=Object(u["a"])(X,I,b,!1,null,null,null),Z=D.exports;G()(D,{VCard:j["a"],VCardText:x["a"],VCardTitle:x["b"]});var R={components:{Preview:h,Settings:Z},data:function(){return{showDrawer:!0,imageUrl:""}},methods:{passImage:function(e){this.imageUrl=e}}},T=R,W=A("7496"),F=A("40dc"),q=A("5bc1"),M=A("8336"),Y=A("a75b"),z=A("2fa4"),_=A("2a7f"),$=Object(u["a"])(T,n,r,!1,null,null,null),ee=$.exports;G()($,{VApp:W["a"],VAppBar:F["a"],VAppBarNavIcon:q["a"],VBtn:M["a"],VContainer:N["a"],VContent:Y["a"],VSpacer:z["a"],VToolbarTitle:_["a"]});var te=A("9483");Object(te["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Ae=A("f309");a["a"].use(Ae["a"]);var ae=new Ae["a"]({});A("d5e8"),A("5363");a["a"].config.productionTip=!1,new a["a"]({vuetify:ae,render:function(e){return e(ee)}}).$mount("#app")},"773a":function(e,t,A){"use strict";var a=A("968f"),n=A.n(a);n.a},"79ff":function(e,t,A){"use strict";var a=A("97f7"),n=A.n(a);n.a},"7ca7":function(e,t){e.exports="data:image/png;base64,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"},"968f":function(e,t,A){},"97f7":function(e,t,A){}});
//# sourceMappingURL=app.c3da2517.js.map