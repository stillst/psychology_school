function countdown(e,t,a,o,n){theyear=e,themonth=t,theday=a,thehour=o,theminute=n;var r=new Date,i=r.getYear();1e3>i&&(i+=1900);var s=r.getMonth(),d=r.getDate(),l=r.getHours(),c=r.getMinutes(),m=r.getSeconds(),u=montharray[s]+" "+d+", "+i+" "+l+":"+c+":"+m,h=Date.parse(u)+1e3*tz*60*60,g=montharray[t-1]+" "+a+", "+e+" "+o+":"+n,v=Date.parse(g)-6e4*r.getTimezoneOffset(),p=v-h,y=Math.floor(p/864e5*1),f=Math.floor(p%864e5/36e5*1),_=Math.floor(p%864e5%36e5/6e4*1),w=Math.floor(p%864e5%36e5%6e4/1e3*1);return 0>=y&&0>=f&&0>=_&&0>=w?(document.getElementById("dday").style.display="none",document.getElementById("dhour").style.display="none",document.getElementById("dmin").style.display="none",void(document.getElementById("dsec").style.display="none")):(document.getElementById("dday").innerHTML=y,document.getElementById("dhour").innerHTML=f,document.getElementById("dmin").innerHTML=_,document.getElementById("dsec").innerHTML=w,setTimeout("countdown(theyear,themonth,theday,thehour,theminute)",1e3),void 0)}$(document).ready(function(){$(function(){$(document).on("mouseenter",".header__nav-item a",function(){$(this).next().slideToggle("slow")}),$(document).on("mouseleave",".header__sub-menu",function(){$(this).slideToggle("slow")}),$(document).on("mouseleave","header",function(){$(".header__sub-menu").hide("slow")})}),$(function(){$(document).on("click",".js-search-form__toogle",function(){var e=40;$(window).width()<="360"?290==$(".js-search-form form").width()?(e="40px",$(".js-search-form__toogle").css("background-image","url(../img/header/search_icon.png)")):(e="290px",$(".js-search-form__toogle").css("background-image","url(../img/header/close.png)")):450==$(".js-search-form form").width()?(e="40px",$(".js-search-form__toogle").css("background-image","url(../img/header/search_icon.png)")):(e="450px",$(".js-search-form__toogle").css("background-image","url(../img/header/close.png)")),$(".js-search-form form").animate({width:e})})}),$(function(){$(document).on("click",".contacts__link--msg, .popup__close",function(){$(".popup").slideToggle("fast")})})});var current="Winter is here!",year=2016,month=4,day=2,hour=0,minute=0,tz=3,montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");countdown(year,month,day,hour,minute),$(function(){ParallaxScroll.init()});var ParallaxScroll={showLogs:!1,round:1e3,init:function(){return this._log("init"),this._inited?(this._log("Already Inited"),void(this._inited=!0)):(this._requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){window.setTimeout(e,1e3/60)}}(),void this._onScroll(!0))},_inited:!1,_properties:["x","y","z","rotateX","rotateY","rotateZ","scaleX","scaleY","scaleZ","scale"],_requestAnimationFrame:null,_log:function(e){this.showLogs&&console.log("Parallax Scroll / "+e)},_onScroll:function(e){if($("body").width()>640){var t=$(document).scrollTop(),a=$(window).height();this._log("onScroll "+t),$("[data-parallax]").each($.proxy(function(o,n){var r=$(n),i=[],s=!1,d=r.data("style");void 0==d&&(d=r.attr("style")||"",r.data("style",d));var l,c=[r.data("parallax")];for(l=2;r.data("parallax"+l);l++)c.push(r.data("parallax-"+l));var m=c.length;for(l=0;m>l;l++){var u=c[l],h=u["from-scroll"];void 0==h&&(h=Math.max(0,$(n).offset().top-a)),h=0|h;var g=u.distance,v=u["to-scroll"];void 0==g&&void 0==v&&(g=a),g=Math.max(0|g,1);var p=u.easing,y=u["easing-return"];if(void 0!=p&&$.easing&&$.easing[p]||(p=null),void 0!=y&&$.easing&&$.easing[y]||(y=p),p){var f=u.duration;void 0==f&&(f=g),f=Math.max(0|f,1);var _=u["duration-return"];void 0==_&&(_=f),g=1;var w=r.data("current-time");void 0==w&&(w=0)}void 0==v&&(v=h+g),v=0|v;var x=u.smoothness;void 0==x&&(x=30),x=0|x,(e||0==x)&&(x=1),x=0|x;var M=t;M=Math.max(M,h),M=Math.min(M,v),p&&(void 0==r.data("sens")&&r.data("sens","back"),M>h&&("back"==r.data("sens")?(w=1,r.data("sens","go")):w++),v>M&&("go"==r.data("sens")?(w=1,r.data("sens","back")):w++),e&&(w=f),r.data("current-time",w)),this._properties.map($.proxy(function(e){var t=0,a=u[e];if(void 0!=a){"scale"==e||"scaleX"==e||"scaleY"==e||"scaleZ"==e?t=1:a=0|a;var o=r.data("_"+e);void 0==o&&(o=t);var n=(a-t)*((M-h)/(v-h))+t,d=o+(n-o)/x;if(p&&w>0&&f>=w){var l=t;"back"==r.data("sens")&&(l=a,a=-a,p=y,f=_),d=$.easing[p](null,w,l,a,f)}d=Math.ceil(d*this.round)/this.round,d==o&&n==a&&(d=a),i[e]||(i[e]=0),i[e]+=d,o!=i[e]&&(r.data("_"+e,i[e]),s=!0)}},this))}if(s){if(void 0!=i.z){var b=u.perspective;void 0==b&&(b=800);var k=r.parent();k.data("style")||k.data("style",k.attr("style")||""),k.attr("style","perspective:"+b+"px; -webkit-perspective:"+b+"px; "+k.data("style"))}void 0==i.scaleX&&(i.scaleX=1),void 0==i.scaleY&&(i.scaleY=1),void 0==i.scaleZ&&(i.scaleZ=1),void 0!=i.scale&&(i.scaleX*=i.scale,i.scaleY*=i.scale,i.scaleZ*=i.scale);var A="translate3d("+(i.x?i.x:0)+"px, "+(i.y?i.y:0)+"px, "+(i.z?i.z:0)+"px)",Y="rotateX("+(i.rotateX?i.rotateX:0)+"deg) rotateY("+(i.rotateY?i.rotateY:0)+"deg) rotateZ("+(i.rotateZ?i.rotateZ:0)+"deg)",F="scaleX("+i.scaleX+") scaleY("+i.scaleY+") scaleZ("+i.scaleZ+")",T=A+" "+Y+" "+F+";";this._log(T),r.attr("style","transform:"+T+" -webkit-transform:"+T+" "+d)}},this)),window.requestAnimationFrame?window.requestAnimationFrame($.proxy(this._onScroll,this,!1)):this._requestAnimationFrame($.proxy(this._onScroll,this,!1))}}};