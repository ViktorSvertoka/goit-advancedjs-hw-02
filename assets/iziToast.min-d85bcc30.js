var C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function B(m){return m&&m.__esModule&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m}var x={exports:{}};(function(m,D){(function(E,u){m.exports=u(E)})(typeof C<"u"?C:window||C.window||C.global,function(E){var u={},s="iziToast";document.querySelector("body");var v=!!/Mobi/.test(navigator.userAgent),N=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),S=typeof InstallTrigger<"u",y="ontouchstart"in document.documentElement,I=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],M={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},h=568,b={};u.children={};var w={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var T=function(o,i){i=i||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(o,i.bubbles,i.cancelable,i.detail),e};T.prototype=window.Event.prototype,window.CustomEvent=T}var f=function(o,i,e){if(Object.prototype.toString.call(o)==="[object Object]")for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&i.call(e,o[t],t,o);else if(o)for(var a=0,l=o.length;a<l;a++)i.call(e,o[a],a,o)},p=function(o,i){var e={};return f(o,function(t,a){e[a]=o[a]}),f(i,function(t,a){e[a]=i[a]}),e},L=function(o){var i=document.createDocumentFragment(),e=document.createElement("div");for(e.innerHTML=o;e.firstChild;)i.appendChild(e.firstChild);return i},O=function(o){var i=btoa(encodeURIComponent(o));return i.replace(/=/g,"")},z=function(o){return o.substring(0,1)=="#"||o.substring(0,3)=="rgb"||o.substring(0,3)=="hsl"},R=function(o){try{return btoa(atob(o))==o}catch{return!1}},g=function(){return{move:function(o,i,e,t){var a,l=.3,n=180;t!==0&&(o.classList.add(s+"-dragged"),o.style.transform="translateX("+t+"px)",t>0?(a=(n-t)/n,a<l&&i.hide(p(e,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),o,"drag")):(a=(n+t)/n,a<l&&i.hide(p(e,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),o,"drag")),o.style.opacity=a,a<l&&((N||S)&&(o.style.left=t+"px"),o.parentNode.style.opacity=l,this.stopMoving(o,null)))},startMoving:function(o,i,e,t){t=t||window.event;var a=y?t.touches[0].clientX:t.clientX,l=o.style.transform.replace("px)","");l=l.replace("translateX(","");var n=a-l;e.transitionIn&&o.classList.remove(e.transitionIn),e.transitionInMobile&&o.classList.remove(e.transitionInMobile),o.style.transition="",y?document.ontouchmove=function(r){r.preventDefault(),r=r||window.event;var d=r.touches[0].clientX,c=d-n;g.move(o,i,e,c)}:document.onmousemove=function(r){r.preventDefault(),r=r||window.event;var d=r.clientX,c=d-n;g.move(o,i,e,c)}},stopMoving:function(o,i){y?document.ontouchmove=function(){}:document.onmousemove=function(){},o.style.opacity="",o.style.transform="",o.classList.contains(s+"-dragged")&&(o.classList.remove(s+"-dragged"),o.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){o.style.transition=""},400))}}}();return u.setSetting=function(o,i,e){u.children[o][i]=e},u.getSetting=function(o,i){return u.children[o][i]},u.destroy=function(){f(document.querySelectorAll("."+s+"-overlay"),function(o,i){o.remove()}),f(document.querySelectorAll("."+s+"-wrapper"),function(o,i){o.remove()}),f(document.querySelectorAll("."+s),function(o,i){o.remove()}),this.children={},document.removeEventListener(s+"-opened",{},!1),document.removeEventListener(s+"-opening",{},!1),document.removeEventListener(s+"-closing",{},!1),document.removeEventListener(s+"-closed",{},!1),document.removeEventListener("keyup",{},!1),b={}},u.settings=function(o){u.destroy(),b=o,w=p(w,o||{})},f(M,function(o,i){u[i]=function(e){var t=p(b,e||{});t=p(o,t||{}),this.show(t)}}),u.progress=function(o,i,e){var t=this,a=i.getAttribute("data-iziToast-ref"),l=p(this.children[a],o||{}),n=i.querySelector("."+s+"-progressbar div");return{start:function(){typeof l.time.REMAINING>"u"&&(i.classList.remove(s+"-reseted"),n!==null&&(n.style.transition="width "+l.timeout+"ms "+l.progressBarEasing,n.style.width="0%"),l.time.START=new Date().getTime(),l.time.END=l.time.START+l.timeout,l.time.TIMER=setTimeout(function(){clearTimeout(l.time.TIMER),i.classList.contains(s+"-closing")||(t.hide(l,i,"timeout"),typeof e=="function"&&e.apply(t))},l.timeout),t.setSetting(a,"time",l.time))},pause:function(){if(typeof l.time.START<"u"&&!i.classList.contains(s+"-paused")&&!i.classList.contains(s+"-reseted")){if(i.classList.add(s+"-paused"),l.time.REMAINING=l.time.END-new Date().getTime(),clearTimeout(l.time.TIMER),t.setSetting(a,"time",l.time),n!==null){var r=window.getComputedStyle(n),d=r.getPropertyValue("width");n.style.transition="none",n.style.width=d}typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}},resume:function(){typeof l.time.REMAINING<"u"?(i.classList.remove(s+"-paused"),n!==null&&(n.style.transition="width "+l.time.REMAINING+"ms "+l.progressBarEasing,n.style.width="0%"),l.time.END=new Date().getTime()+l.time.REMAINING,l.time.TIMER=setTimeout(function(){clearTimeout(l.time.TIMER),i.classList.contains(s+"-closing")||(t.hide(l,i,"timeout"),typeof e=="function"&&e.apply(t))},l.time.REMAINING),t.setSetting(a,"time",l.time)):this.start()},reset:function(){clearTimeout(l.time.TIMER),delete l.time.REMAINING,t.setSetting(a,"time",l.time),i.classList.add(s+"-reseted"),i.classList.remove(s+"-paused"),n!==null&&(n.style.transition="none",n.style.width="100%"),typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}}},u.hide=function(o,i,e){typeof i!="object"&&(i=document.querySelector(i));var t=this,a=p(this.children[i.getAttribute("data-iziToast-ref")],o||{});a.closedBy=e||null,delete a.time.REMAINING,i.classList.add(s+"-closing"),function(){var r=document.querySelector("."+s+"-overlay");if(r!==null){var d=r.getAttribute("data-iziToast-ref");d=d.split(",");var c=d.indexOf(String(a.ref));c!==-1&&d.splice(c,1),r.setAttribute("data-iziToast-ref",d.join()),d.length===0&&(r.classList.remove("fadeIn"),r.classList.add("fadeOut"),setTimeout(function(){r.remove()},700))}}(),a.transitionIn&&i.classList.remove(a.transitionIn),a.transitionInMobile&&i.classList.remove(a.transitionInMobile),v||window.innerWidth<=h?a.transitionOutMobile&&i.classList.add(a.transitionOutMobile):a.transitionOut&&i.classList.add(a.transitionOut);var l=i.parentNode.offsetHeight;i.parentNode.style.height=l+"px",i.style.pointerEvents="none",(!v||window.innerWidth>h)&&(i.parentNode.style.transitionDelay="0.2s");try{var n=new CustomEvent(s+"-closing",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(n)}catch(r){console.warn(r)}setTimeout(function(){i.parentNode.style.height="0px",i.parentNode.style.overflow="",setTimeout(function(){delete t.children[a.ref],i.parentNode.remove();try{var r=new CustomEvent(s+"-closed",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(r)}catch(d){console.warn(d)}typeof a.onClosed<"u"&&a.onClosed.apply(null,[a,i,e])},1e3)},200),typeof a.onClosing<"u"&&a.onClosing.apply(null,[a,i,e])},u.show=function(o){var i=this,e=p(b,o||{});if(e=p(w,e),e.time={},e.id===null&&(e.id=O(e.title+e.message+e.color)),e.displayMode===1||e.displayMode=="once")try{if(document.querySelectorAll("."+s+"#"+e.id).length>0)return!1}catch{console.warn("["+s+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}if(e.displayMode===2||e.displayMode=="replace")try{f(document.querySelectorAll("."+s+"#"+e.id),function(n,r){i.hide(e,n,"replaced")})}catch{console.warn("["+s+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}e.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),u.children[e.ref]=e;var t={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:e.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};t.toast.setAttribute("data-iziToast-ref",e.ref),t.toast.appendChild(t.toastBody),t.toastCapsule.appendChild(t.toast),function(){if(t.toast.classList.add(s),t.toast.classList.add(s+"-opening"),t.toastCapsule.classList.add(s+"-capsule"),t.toastBody.classList.add(s+"-body"),t.toastTexts.classList.add(s+"-texts"),v||window.innerWidth<=h?e.transitionInMobile&&t.toast.classList.add(e.transitionInMobile):e.transitionIn&&t.toast.classList.add(e.transitionIn),e.class){var n=e.class.split(" ");f(n,function(r,d){t.toast.classList.add(r)})}e.id&&(t.toast.id=e.id),e.rtl&&(t.toast.classList.add(s+"-rtl"),t.toast.setAttribute("dir","rtl")),e.layout>1&&t.toast.classList.add(s+"-layout"+e.layout),e.balloon&&t.toast.classList.add(s+"-balloon"),e.maxWidth&&(isNaN(e.maxWidth)?t.toast.style.maxWidth=e.maxWidth:t.toast.style.maxWidth=e.maxWidth+"px"),(e.theme!==""||e.theme!=="light")&&t.toast.classList.add(s+"-theme-"+e.theme),e.color&&(z(e.color)?t.toast.style.background=e.color:t.toast.classList.add(s+"-color-"+e.color)),e.backgroundColor&&(t.toast.style.background=e.backgroundColor,e.balloon&&(t.toast.style.borderColor=e.backgroundColor))}(),function(){e.image&&(t.cover.classList.add(s+"-cover"),t.cover.style.width=e.imageWidth+"px",R(e.image.replace(/ /g,""))?t.cover.style.backgroundImage="url(data:image/png;base64,"+e.image.replace(/ /g,"")+")":t.cover.style.backgroundImage="url("+e.image+")",e.rtl?t.toastBody.style.marginRight=e.imageWidth+10+"px":t.toastBody.style.marginLeft=e.imageWidth+10+"px",t.toast.appendChild(t.cover))}(),function(){e.close?(t.buttonClose=document.createElement("button"),t.buttonClose.type="button",t.buttonClose.classList.add(s+"-close"),t.buttonClose.addEventListener("click",function(n){n.target,i.hide(e,t.toast,"button")}),t.toast.appendChild(t.buttonClose)):e.rtl?t.toast.style.paddingLeft="18px":t.toast.style.paddingRight="18px"}(),function(){e.progressBar&&(t.progressBar=document.createElement("div"),t.progressBarDiv=document.createElement("div"),t.progressBar.classList.add(s+"-progressbar"),t.progressBarDiv.style.background=e.progressBarColor,t.progressBar.appendChild(t.progressBarDiv),t.toast.appendChild(t.progressBar)),e.timeout&&(e.pauseOnHover&&!e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(n){i.progress(e,t.toast).pause()}),t.toast.addEventListener("mouseleave",function(n){i.progress(e,t.toast).resume()})),e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(n){i.progress(e,t.toast).reset()}),t.toast.addEventListener("mouseleave",function(n){i.progress(e,t.toast).start()})))}(),function(){e.iconUrl?(t.icon.setAttribute("class",s+"-icon"),t.icon.setAttribute("src",e.iconUrl)):e.icon&&(t.icon.setAttribute("class",s+"-icon "+e.icon),e.iconText&&t.icon.appendChild(document.createTextNode(e.iconText)),e.iconColor&&(t.icon.style.color=e.iconColor)),(e.icon||e.iconUrl)&&(e.rtl?t.toastBody.style.paddingRight="33px":t.toastBody.style.paddingLeft="33px",t.toastBody.appendChild(t.icon))}(),function(){e.title.length>0&&(t.strong=document.createElement("strong"),t.strong.classList.add(s+"-title"),t.strong.appendChild(L(e.title)),t.toastTexts.appendChild(t.strong),e.titleColor&&(t.strong.style.color=e.titleColor),e.titleSize&&(isNaN(e.titleSize)?t.strong.style.fontSize=e.titleSize:t.strong.style.fontSize=e.titleSize+"px"),e.titleLineHeight&&(isNaN(e.titleSize)?t.strong.style.lineHeight=e.titleLineHeight:t.strong.style.lineHeight=e.titleLineHeight+"px")),e.message.length>0&&(t.p=document.createElement("p"),t.p.classList.add(s+"-message"),t.p.appendChild(L(e.message)),t.toastTexts.appendChild(t.p),e.messageColor&&(t.p.style.color=e.messageColor),e.messageSize&&(isNaN(e.titleSize)?t.p.style.fontSize=e.messageSize:t.p.style.fontSize=e.messageSize+"px"),e.messageLineHeight&&(isNaN(e.titleSize)?t.p.style.lineHeight=e.messageLineHeight:t.p.style.lineHeight=e.messageLineHeight+"px")),e.title.length>0&&e.message.length>0&&(e.rtl?t.strong.style.marginLeft="10px":e.layout!==2&&!e.rtl&&(t.strong.style.marginRight="10px"))}(),t.toastBody.appendChild(t.toastTexts);var a;(function(){e.inputs.length>0&&(t.inputs.classList.add(s+"-inputs"),f(e.inputs,function(n,r){t.inputs.appendChild(L(n[0])),a=t.inputs.childNodes,a[r].classList.add(s+"-inputs-child"),n[3]&&setTimeout(function(){a[r].focus()},300),a[r].addEventListener(n[1],function(d){var c=n[2];return c(i,t.toast,this,d)})}),t.toastBody.appendChild(t.inputs))})(),function(){e.buttons.length>0&&(t.buttons.classList.add(s+"-buttons"),f(e.buttons,function(n,r){t.buttons.appendChild(L(n[0]));var d=t.buttons.childNodes;d[r].classList.add(s+"-buttons-child"),n[2]&&setTimeout(function(){d[r].focus()},300),d[r].addEventListener("click",function(c){c.preventDefault();var A=n[1];return A(i,t.toast,this,c,a)})})),t.toastBody.appendChild(t.buttons)}(),e.message.length>0&&(e.inputs.length>0||e.buttons.length>0)&&(t.p.style.marginBottom="0"),(e.inputs.length>0||e.buttons.length>0)&&(e.rtl?t.toastTexts.style.marginLeft="10px":t.toastTexts.style.marginRight="10px",e.inputs.length>0&&e.buttons.length>0&&(e.rtl?t.inputs.style.marginLeft="8px":t.inputs.style.marginRight="8px")),function(){t.toastCapsule.style.visibility="hidden",setTimeout(function(){var n=t.toast.offsetHeight,r=t.toast.currentStyle||window.getComputedStyle(t.toast),d=r.marginTop;d=d.split("px"),d=parseInt(d[0]);var c=r.marginBottom;c=c.split("px"),c=parseInt(c[0]),t.toastCapsule.style.visibility="",t.toastCapsule.style.height=n+c+d+"px",setTimeout(function(){t.toastCapsule.style.height="auto",e.target&&(t.toastCapsule.style.overflow="visible")},500),e.timeout&&i.progress(e,t.toast).start()},100)}(),function(){var n=e.position;if(e.target)t.wrapper=document.querySelector(e.target),t.wrapper.classList.add(s+"-target"),e.targetFirst?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule);else{if(I.indexOf(e.position)==-1){console.warn("["+s+`] Incorrect position.
It can be › `+I);return}v||window.innerWidth<=h?e.position=="bottomLeft"||e.position=="bottomRight"||e.position=="bottomCenter"?n=s+"-wrapper-bottomCenter":e.position=="topLeft"||e.position=="topRight"||e.position=="topCenter"?n=s+"-wrapper-topCenter":n=s+"-wrapper-center":n=s+"-wrapper-"+n,t.wrapper=document.querySelector("."+s+"-wrapper."+n),t.wrapper||(t.wrapper=document.createElement("div"),t.wrapper.classList.add(s+"-wrapper"),t.wrapper.classList.add(n),document.body.appendChild(t.wrapper)),e.position=="topLeft"||e.position=="topCenter"||e.position=="topRight"?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule)}isNaN(e.zindex)?console.warn("["+s+"] Invalid zIndex."):t.wrapper.style.zIndex=e.zindex}(),function(){e.overlay&&(document.querySelector("."+s+"-overlay.fadeIn")!==null?(t.overlay=document.querySelector("."+s+"-overlay"),t.overlay.setAttribute("data-iziToast-ref",t.overlay.getAttribute("data-iziToast-ref")+","+e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1)):(t.overlay.classList.add(s+"-overlay"),t.overlay.classList.add("fadeIn"),t.overlay.style.background=e.overlayColor,t.overlay.setAttribute("data-iziToast-ref",e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1),document.querySelector("body").appendChild(t.overlay)),e.overlayClose?(t.overlay.removeEventListener("click",{}),t.overlay.addEventListener("click",function(n){i.hide(e,t.toast,"overlay")})):t.overlay.removeEventListener("click",{}))}(),function(){if(e.animateInside){t.toast.classList.add(s+"-animateInside");var n=[200,100,300];(e.transitionIn=="bounceInLeft"||e.transitionIn=="bounceInRight")&&(n=[400,200,400]),e.title.length>0&&setTimeout(function(){t.strong.classList.add("slideIn")},n[0]),e.message.length>0&&setTimeout(function(){t.p.classList.add("slideIn")},n[1]),(e.icon||e.iconUrl)&&setTimeout(function(){t.icon.classList.add("revealIn")},n[2]);var r=150;e.buttons.length>0&&t.buttons&&setTimeout(function(){f(t.buttons.childNodes,function(d,c){setTimeout(function(){d.classList.add("revealIn")},r),r=r+150})},e.inputs.length>0?150:0),e.inputs.length>0&&t.inputs&&(r=150,f(t.inputs.childNodes,function(d,c){setTimeout(function(){d.classList.add("revealIn")},r),r=r+150}))}}(),e.onOpening.apply(null,[e,t.toast]);try{var l=new CustomEvent(s+"-opening",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(l)}catch(n){console.warn(n)}setTimeout(function(){t.toast.classList.remove(s+"-opening"),t.toast.classList.add(s+"-opened");try{var n=new CustomEvent(s+"-opened",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(n)}catch(r){console.warn(r)}e.onOpened.apply(null,[e,t.toast])},1e3),e.drag&&(y?(t.toast.addEventListener("touchstart",function(n){g.startMoving(this,i,e,n)},!1),t.toast.addEventListener("touchend",function(n){g.stopMoving(this,n)},!1)):(t.toast.addEventListener("mousedown",function(n){n.preventDefault(),g.startMoving(this,i,e,n)},!1),t.toast.addEventListener("mouseup",function(n){n.preventDefault(),g.stopMoving(this,n)},!1))),e.closeOnEscape&&document.addEventListener("keyup",function(n){n=n||window.event,n.keyCode==27&&i.hide(e,t.toast,"esc")}),e.closeOnClick&&t.toast.addEventListener("click",function(n){i.hide(e,t.toast,"toast")}),i.toast=t.toast},u})})(x);var H=x.exports;const q=B(H);export{q as i};
