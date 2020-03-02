(function(e){function t(t){for(var n,i,o=t[0],c=t[1],l=t[2],g=0,u=[];g<o.length;g++)i=o[g],Object.prototype.hasOwnProperty.call(A,i)&&A[i]&&u.push(A[i][0]),A[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==A[c]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},A={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var s=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.showDrawer=!e.showDrawer}}}),a("v-toolbar-title",[e._v("Brick a Pic")]),a("v-spacer"),a("v-btn",{attrs:{text:"",href:"/"}},[e._v("About")]),a("v-btn",{attrs:{text:"",href:"https://github.com/brick-a-pic/brick-a-pic",target:"_blank"}},[e._v("Source")])],1),a("v-content",[a("Preview",{attrs:{imageData:e.imageData}}),a("v-container",{attrs:{fluid:""}},[e.showDrawer?a("Settings",{on:{imageLoaded:e.passImage}}):e._e()],1)],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"background-wrapper",attrs:{id:"background"}},[a("div",{attrs:{id:"draggable"}},[e.imageData?a("svg",{staticClass:"preview-svg",attrs:{viewBox:"0 0 "+e.imageData.width+" "+e.imageData.height}},[a("g",e._l(e.imageData.data,(function(t,n){return a("g",{key:n},e._l(t,(function(t,A){return a("rect",{key:A,attrs:{width:"1",height:"1",x:A,y:n,fill:e.getColor(t)}})})),0)})),0)]):e._e()])])},o=[],c=(a("99af"),a("3835")),l=a("7d05"),s=a.n(l),g={name:"Preview",props:["imageData"],components:{},methods:{getColor:function(e){var t=Object(c["a"])(e,4),a=t[0],n=t[1],A=t[2],r=t[3];return"rgba(".concat(a,", ").concat(n,", ").concat(A,", ").concat((r||256)/256,")")}},mounted:function(){var e=document.querySelector("#draggable");s()(e)}},u=g,f=(a("773a"),a("2877")),m=Object(f["a"])(u,i,o,!1,null,null,null),d=m.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{"max-width":"20em"}},[a("v-card-title",[e._v("Options")]),a("v-card-text",[a("OpenImage",{attrs:{ImageCheck:e.ImageCheck},on:{change:e.onImageOpen,delete:e.ImageDelete}}),a("ImageProcessor",{attrs:{imageUrl:e.imageUrl},on:{imageSampled:e.onImageSampled}}),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticStyle:{margin:"24px"},attrs:{xs3:""}},[a("v-text-field",{attrs:{label:"Width",id:"widthSetting",placeholder:"32",type:"number",value:"32",min:"0",max:"5000",oninput:"if(Number(this.value) > Number(this.max)) this.value = this.max;\n                     if(Number(this.value) < Number(this.min)) this.value = this.min;"},on:{change:e.onDimChange}})],1),a("v-flex",{staticStyle:{margin:"24px"},attrs:{xs3:""}},[a("v-text-field",{attrs:{label:"Height",id:"heightSetting",placeholder:"32",value:"32",type:"number",min:"0",max:"5000",oninput:"if(Number(this.value) > Number(this.max)) this.value = this.max;\n                     if(Number(this.value) < Number(this.min)) this.value = this.min;"},on:{change:e.onDimChange}})],1)],1)],1)],1)},h=[],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-file-input",{ref:"chosenFile",attrs:{label:"Open image",id:"imageInput",accept:"image/*","prepend-icon":"mdi-image",clearable:!1,rules:e.rules},on:{change:e.onChange}}),a("div",{staticClass:"subtitle-1"},[e._v("Choose a sample")]),a("v-container",{attrs:{fluid:""}},[a("v-row",e._l(e.sampleImages,(function(t,n){return a("v-col",{key:n,attrs:{cols:"4"}},[a("v-card",{attrs:{flat:"",tile:"",link:""},on:{click:function(a){return e.$emit("change",t)}}},[a("v-img",{attrs:{src:t,"aspect-ratio":"1"}})],1)],1)})),1)],1)],1)},C=[],b=(a("d3b7"),a("3ca3"),a("2ca0"),a("ddb0"),a("2b3d"),a("7ca7")),I=a("7ca7"),w=a("7ca7"),B={name:"OpenImage",props:["ImageCheck"],watch:{ImageCheck:function(){var e=URL.createObjectURL(this.fileUpload);this.$emit("change",e)}},data:function(){return{chosenFile:null,data:null,rules:[function(e){return!e||e.type.startsWith("image/")||"Please select a valid image"}],sampleImages:[b,I,w],fileUpload:null}},methods:{onChange:function(e){if(e){var t=URL.createObjectURL(e);this.fileUpload=e,this.$emit("change",t)}}}},y=B,U=a("6544"),k=a.n(U),V=a("b0af"),O=a("62ad"),S=a("a523"),j=a("23a7"),D=a("adda"),x=a("0fd9"),G=Object(f["a"])(y,v,C,!1,null,null,null),L=G.exports;k()(G,{VCard:V["a"],VCol:O["a"],VContainer:S["a"],VFileInput:j["a"],VImg:D["a"],VRow:x["a"]});var N=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"offscreen"},[a("canvas",{attrs:{id:"processing-canvas"}})])}],E=(a("d81d"),[[242,243,242],[161,165,162],[249,233,153],[215,197,153],[194,218,184],[232,186,199],[203,132,66],[204,142,104],[196,40,27],[196,112,160],[13,105,171],[245,205,47],[98,71,50],[27,42,52],[109,110,108],[40,127,70],[161,196,139],[243,207,155],[75,151,74],[160,95,52],[193,202,222],[180,210,227],[238,196,182],[218,134,121],[110,153,201],[199,193,183],[107,50,123],[226,155,63],[218,133,64],[0,143,155],[104,92,67],[67,84,147],[104,116,172],[199,210,60],[85,165,175],[183,215,213],[164,189,70],[217,228,167],[231,172,88],[211,111,76],[146,57,120],[234,184,145],[220,188,129],[174,122,89],[156,163,168],[116,134,156],[135,124,144],[224,152,100],[149,138,115],[32,58,86],[39,70,44],[121,136,161],[149,142,163],[147,135,103],[87,88,87],[22,29,50],[171,173,172],[120,144,129],[149,121,118],[123,46,47],[117,108,98],[215,169,75],[130,138,93],[249,214,46],[232,171,45],[105,64,39],[207,96,36],[163,162,164],[70,103,164],[35,71,139],[142,66,133],[99,95,97],[229,228,222],[176,142,68],[112,149,120],[121,181,181],[159,195,233],[108,129,183],[143,76,42],[124,92,69],[150,112,159],[107,98,155],[167,169,206],[205,98,152],[228,173,200],[220,144,149],[240,213,160],[235,184,127],[253,234,140],[125,187,221],[52,43,117],[236,236,236],[205,84,75],[193,223,240],[123,182,232],[247,241,141],[217,133,108],[132,182,141],[248,241,132],[236,232,222],[191,183,177],[228,173,200],[165,165,203],[213,115,61],[216,221,86],[207,226,247],[255,246,123],[225,164,194],[151,105,91],[180,132,85],[137,135,136]]),J=function(e){for(var t=1/0,a=0,n=e[0],A=e[1],r=e[2],i=0;i<E.length;i+=1){var o=E[i][0],c=E[i][1],l=E[i][2],s=Math.pow(o-n,2)+Math.pow(c-A,2)+Math.pow(l-r,2);s<t&&(t=s,a=i)}return E[a]},Q=function(e){return e.map((function(e){return e.map(J)}))},H=(a("fb6a"),a("d4ec"));function R(e,t){var a=[],n=0;while(n<e.length)a.push(e.slice(n,t+n)),n+=t;return a}var K=function e(t){var a=t.height,n=t.width,A=t.data;Object(H["a"])(this,e),this.height=a,this.width=n,this.data=R(R(A,4),n)},X={name:"ImageProcessor",props:["imageUrl"],watch:{imageUrl:function(e){var t=[],a=document.getElementById("processing-canvas").getContext("2d");a.clearRect(0,0,a.canvas.width,a.canvas.height);var n=new Image,A=this;n.onload=function(){var r=document.getElementById("widthSetting").value,i=document.getElementById("heightSetting").value;a.drawImage(n,0,0,r,i),t=a.getImageData(0,0,r,i);var o=new K(t);o.data=Q(o.data),A.$emit("imageSampled",o),URL.revokeObjectURL(e)},n.src=e}}},T=X,Z=(a("79ff"),Object(f["a"])(T,N,P,!1,null,null,null)),F=Z.exports,W={name:"Settings",components:{OpenImage:L,ImageProcessor:F},data:function(){return{ImageCheck:0,imageDelete:0,imageUrl:""}},methods:{onImageOpen:function(e){this.imageUrl=e},onImageSampled:function(e){this.imageData=e,this.$emit("imageLoaded",e)},onDimChange:function(){this.ImageCheck=this.ImageCheck+1},ImageDelete:function(){}}},q=W,M=a("99d9"),Y=a("0e8f"),z=a("a722"),_=a("8654"),$=Object(f["a"])(q,p,h,!1,null,null,null),ee=$.exports;k()($,{VCard:V["a"],VCardText:M["a"],VCardTitle:M["b"],VFlex:Y["a"],VLayout:z["a"],VTextField:_["a"]});var te={components:{Preview:d,Settings:ee},data:function(){return{showDrawer:!0,imageData:""}},methods:{passImage:function(e){this.imageData=e}}},ae=te,ne=a("7496"),Ae=a("40dc"),re=a("5bc1"),ie=a("8336"),oe=a("a75b"),ce=a("2fa4"),le=a("2a7f"),se=Object(f["a"])(ae,A,r,!1,null,null,null),ge=se.exports;k()(se,{VApp:ne["a"],VAppBar:Ae["a"],VAppBarNavIcon:re["a"],VBtn:ie["a"],VContainer:S["a"],VContent:oe["a"],VSpacer:ce["a"],VToolbarTitle:le["a"]});var ue=a("9483");Object(ue["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var fe=a("f309");n["a"].use(fe["a"]);var me=new fe["a"]({});a("d5e8"),a("5363");n["a"].config.productionTip=!1,new n["a"]({vuetify:me,render:function(e){return e(ge)}}).$mount("#app")},"773a":function(e,t,a){"use strict";var n=a("968f"),A=a.n(n);A.a},"79ff":function(e,t,a){"use strict";var n=a("97f7"),A=a.n(n);A.a},"7ca7":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAqmSURBVHja7J3rT55nGcAv3jKgBUqRM+WlB8Ae6IG0XcdqD3a6zBg/mLlO92HZJ2M0anSf9C/QRGOMGhOzuGQx+2C6LKvGxaUutWtT60RGD4xWoJRDWw4vYxRoLX0LXjcjYrLNdu17eO77+v0+EKANeZ/run7PfXju+35yJH5EAKwSIwSAAAAIAIAAAAgAgAAACACAAAAIAIAAAAgAgAAACACAAAAIAIAAAAgAgAAACACAAAAIAIAAAAgAgAAACACAAAAIAIAAAAgAgAAACACAAAAIAIAAAAgAgAAACACAAAAIAIAAAAgAgAAACACAAAAIAIAAAAgAgAAACACAAAAIAIAAgAAACACAAAAIAIAAAAgAEDy5hCATVF+XymmpmJa6ycUf85OL/1Q7KXl33Dezy+RqyeIvb+XK8Er3zVCJjBXJaNHij5BqciR+hCikmOJb0pCQxoQr9PIZqZ9IzZ8dKJVEoTOhp1x6y2Uqn0jTAkQGvYtvHpat12TTiKv7dKAi/a9LakJXlZyrkXerXesBtABZoHBWdgzKrkFX97lz2fkMyZgzoS0u7XGZySMnCJCBuYN5abki+3tlyzX3fUSYy5HzNXJyvbTXue8BAVJP+bR8tlf29bqOfmTR4cGJBjnWJOMryBgCpIh14/LEBdk94NNnfrte3tgofWVkDwEegIaEPHVGNoz6+vkvVsor293EESDAJ6N+Qg51SPNwCNfSWS2HW9xcKiDA3Vl+W548K5/7V2jX9ean5dVtcvMhMowAH8+ey/LV9kgPcx9wiPz7HXJqLXlGgA9ROynP/UOaxsK/0u4KeenhpcUXCGCd2Lx8+Zx8oStrz7Myz1yOvL5ZXttq+aEBAixQPi3fPOUmOg3SVya/eVRGi21mfpmUPGO9+ncPyPN/davWbFJ6U/ZdkvEiGVqFAPa6PU93yNfeMdTt+Uj08ncOSkFSuqplPgcBbFA4K98/Lo/00wFcpDHhHvZ11MltQ2tLre4IK7shP/yLxw9304QGRMOiwUGAkKmdlB8cdV/BfHDsCdCQsHaTu8/mUQPFGCA0tl2V7x2X5UmK/C7k3ZHWfrdwaCTw6VFLLUDLFfnuW4s70OFeHPj2CRc0BAiB5mH51skI7d7ygtw5F7QwFsOaFmDduHznLeuT/fftgIYu3GfkBgSonHL9fno+D9IX0gBqGBHAP4pvyfPHg13YTBgR4O5d2EBvXVloSHVMHFw3MmgBDnXwrDeVNI25kCKAH7T2y+MXKdoUoyFt7UcAH9rr596mXNOCBjagXmWIAmg/9Rt/Wzp+GVKLBlbDG8pgIEQBvtRpdG9XxtDwapARIIrUvS9ffJcSTTsaZA01AkSOZ9t44puhfqaGGgGiRWu/iRNNIoKG2v8ZoYAEKJx1p1lBJtGAa9gRIBI8eVZK/k1NZhQNuIYdAbJP/YQc6KEgs4CGPVUvQUOA++crZ1jrn6UKmnfBR4Bs0pBwb6eDbKHB93YDcRACeN4NJQUI8GC3/00jVGCW0RT42Qj4LwBLPkmEXQEqp9w7eiEKaCI8XCXquQAHe5j8iUwpzbt0IEDmyJ2TPX0UXoTQdPi2EMtnAVqusNs9Wmg6fDtIy2cB9l6i5EiKVQEKZ2ULD7+ihybFq+Vx3gqwY5Dhb0SHwjsGESD97Byi2EiNVQHy7shGnv5GFU2NPwdRxggxWL49+SnA9quUGQkyLACr30iQXQEKZ6X6OjUWaTRBnkyGeigA5z6QJtMCNCaoLtJkWID4BNVFmgwLEMSJfOHjSZp8E0CHVqU3qS4P0DT5MA72TQDmf0iWaQEqZqgrb6iaRoBUUz5NXZEsWgDwgbIbCJBqijn+lmSZFoBNwCTLsgCen0ZvC6ZBU89yBCBZlgVgHwzJMi0AG+FJlmkBeP01yTItAIBpAW7lkjOSZViAuRzqimQZFmB2GXVFsgwLcDOPuiJZhgWYQQCSZVmAqXzqimRZFqCAuiJZhgUYK6SuvGF8BQKkmvcQwB8SRQiQakaKqCuaa8MCjBZTV94wvBIBUj6uypeJ5ZSWB2iamAVKC0OrqC7SZFiAwVKqizQZFqCnnOoiTYYF6K6gujygFwHSxEyeF9MLptEEebJoxc8dYV1V1BgJMizAmVpqjAQZFuBCFTtjooum5gItACE2i1e3J29PhfhnHZUWUd5Z7dGH9VaA9jgb5KOIJqWtHgHSz0yenK+h3iKHJsWrbas+H4x1cj31RlIMC9Cxmi3C0ULT0bEaATJFMian1lF1EULTkYwhQAY51shQOELDX02Hb3guwGixtDMfGg3a4j7u1/P/dOg3NlJ7keDoBh8/tf8C9JbLxUrKL8toCnrLESBLvLaVCiQFhgXQ209nNUWYNTT43jbCobwh5nAL00HZQcOuwfeWUAQYKJXjjVRjFtCwD5QiQAR4dRuHp2caDbiG3WdiQSXj5V3UZEbRgHt+0wnrLZGn13BmRObQUGvAPSe416S+vJPRcIbGvhpq/wlOAB2Qvb6Z+kw7GuSBUgSIJH/YIn1llGga0fBqkIMgRAGSMXmhlVdqpwsNrIY3GUOACDO8Ul7aTa2mhd89HNLJfLFg83R6jafrEyONhvTU2pAuKBZytg63MCuaSjSYPq96sCeA9lN/tY+3KqUGDaMGMxlDAK+YypefHWDvPGG0KsAHt66fH+As0ftHQ/eL/aE2pDETKewrk1/uD6/5zlA3UkPXG+xbeczURGe1/HovqyQ+cfVr0ILebGTpptix2jXl9IXuveejo17fDrpCgP/L2Vr5yWNsG7g7GiIN1NnwX0Rir1us3dkffV7GV1DkH4sGR0PUa+JtnCbHhVdL5MePu6/wYYZXmgrOMil5xmKabz4kf18jTQkpu0HNL9FdIT99TCYL7FyxVQGU28vk9FopSErDOJXvOLpBXnjU2ipawwLIwram8zUyslK2XJPcObtx0KJ/sVX+vMngNDGL5hfWjV4ula+flnUmm4K+Mre+3+q7x223AP9lOt+dba+3v8aE2LkJ6v3+T83y21a5XmA28zkSP0L9L1H3vjzbJk1j4V/p0Cp58RG5/CnjCUeAj+Izl+TpDim+FWyP/4/NNnv8CHDPLL8tT52Rg92hXdeJBneW22QBGUaAe6B+Qg51SPNwCNfSWe32cwVxlgkCZBYdEmhr4O/AoLtCXtnO7lAEeDAaEvLEBdk16NNnbou7V0jZWNWDABmhckoO9sievkgPkacWZnWPNbIfGgHSQ+6ctFyRvZfcI+TYfFQ+1QcPtk+ud4v42f6GAJmgcFZ2DLp+kQ6Us2WC1r0OcLW30x5nqwMCZIn8pGwaka3XnAnaTcoA2r3Ruj9XI11VnAOJAFFChwdNY25VRfV1qZyW2snU/NmrJTJa5Bbt9JS7KR3OekEAb1AH1ISqKaleaBzWvLf4e+011U8s/beB0qWns/0LixSGi2Wk2NU923fSNJojBJlAy5cKjiTMFQACACAAAAIAIAAAAgAgAAACACAAAAIAIAAAAgAgAAACACAAAAIAIAAAAgAgAAACACAAAAIAIAAAAgAgAAACACAAAAIAIAAAAgAgAAACACAAAAIAIAAAAgAgAAACACAAAAIAIAAAAgAgAAACACAAAAIAIAAAAgAgAAACACAAAAKAdf4jwACKYb1jSnDeqgAAAABJRU5ErkJggg=="},"968f":function(e,t,a){},"97f7":function(e,t,a){}});
//# sourceMappingURL=app.1a7ccd09.js.map