function countdown(e,t,a,o,n){theyear=e,themonth=t,theday=a,thehour=o,theminute=n;var r=new Date,i=r.getYear();1e3>i&&(i+=1900);var s=r.getMonth(),d=r.getDate(),l=r.getHours(),c=r.getMinutes(),u=r.getSeconds(),m=montharray[s]+" "+d+", "+i+" "+l+":"+c+":"+u,h=Date.parse(m)+1e3*tz*60*60,v=montharray[t-1]+" "+a+", "+e+" "+o+":"+n,p=Date.parse(v)-6e4*r.getTimezoneOffset(),y=p-h,g=Math.floor(y/864e5*1),f=Math.floor(y%864e5/36e5*1),_=Math.floor(y%864e5%36e5/6e4*1),w=Math.floor(y%864e5%36e5%6e4/1e3*1);return 0>=g&&0>=f&&0>=_&&0>=w?(document.getElementById("dday").style.display="none",document.getElementById("dhour").style.display="none",document.getElementById("dmin").style.display="none",void(document.getElementById("dsec").style.display="none")):(document.getElementById("dday").innerHTML=g,document.getElementById("dhour").innerHTML=f,document.getElementById("dmin").innerHTML=_,document.getElementById("dsec").innerHTML=w,setTimeout("countdown(theyear,themonth,theday,thehour,theminute)",1e3),void 0)}var current="Winter is here!",year=2016,month=4,day=2,hour=0,minute=0,tz=3,montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");countdown(year,month,day,hour,minute),$(function(){ParallaxScroll.init()});var ParallaxScroll={showLogs:!1,round:1e3,init:function(){return this._log("init"),this._inited?(this._log("Already Inited"),void(this._inited=!0)):(this._requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){window.setTimeout(e,1e3/60)}}(),void this._onScroll(!0))},_inited:!1,_properties:["x","y","z","rotateX","rotateY","rotateZ","scaleX","scaleY","scaleZ","scale"],_requestAnimationFrame:null,_log:function(e){this.showLogs&&console.log("Parallax Scroll / "+e)},_onScroll:function(e){if($("body").width()>640){var t=$(document).scrollTop(),a=$(window).height();this._log("onScroll "+t),$("[data-parallax]").each($.proxy(function(o,n){var r=$(n),i=[],s=!1,d=r.data("style");void 0==d&&(d=r.attr("style")||"",r.data("style",d));var l,c=[r.data("parallax")];for(l=2;r.data("parallax"+l);l++)c.push(r.data("parallax-"+l));var u=c.length;for(l=0;u>l;l++){var m=c[l],h=m["from-scroll"];void 0==h&&(h=Math.max(0,$(n).offset().top-a)),h=0|h;var v=m.distance,p=m["to-scroll"];void 0==v&&void 0==p&&(v=a),v=Math.max(0|v,1);var y=m.easing,g=m["easing-return"];if(void 0!=y&&$.easing&&$.easing[y]||(y=null),void 0!=g&&$.easing&&$.easing[g]||(g=y),y){var f=m.duration;void 0==f&&(f=v),f=Math.max(0|f,1);var _=m["duration-return"];void 0==_&&(_=f),v=1;var w=r.data("current-time");void 0==w&&(w=0)}void 0==p&&(p=h+v),p=0|p;var x=m.smoothness;void 0==x&&(x=30),x=0|x,(e||0==x)&&(x=1),x=0|x;var M=t;M=Math.max(M,h),M=Math.min(M,p),y&&(void 0==r.data("sens")&&r.data("sens","back"),M>h&&("back"==r.data("sens")?(w=1,r.data("sens","go")):w++),p>M&&("go"==r.data("sens")?(w=1,r.data("sens","back")):w++),e&&(w=f),r.data("current-time",w)),this._properties.map($.proxy(function(e){var t=0,a=m[e];if(void 0!=a){"scale"==e||"scaleX"==e||"scaleY"==e||"scaleZ"==e?t=1:a=0|a;var o=r.data("_"+e);void 0==o&&(o=t);var n=(a-t)*((M-h)/(p-h))+t,d=o+(n-o)/x;if(y&&w>0&&f>=w){var l=t;"back"==r.data("sens")&&(l=a,a=-a,y=g,f=_),d=$.easing[y](null,w,l,a,f)}d=Math.ceil(d*this.round)/this.round,d==o&&n==a&&(d=a),i[e]||(i[e]=0),i[e]+=d,o!=i[e]&&(r.data("_"+e,i[e]),s=!0)}},this))}if(s){if(void 0!=i.z){var A=m.perspective;void 0==A&&(A=800);var b=r.parent();b.data("style")||b.data("style",b.attr("style")||""),b.attr("style","perspective:"+A+"px; -webkit-perspective:"+A+"px; "+b.data("style"))}void 0==i.scaleX&&(i.scaleX=1),void 0==i.scaleY&&(i.scaleY=1),void 0==i.scaleZ&&(i.scaleZ=1),void 0!=i.scale&&(i.scaleX*=i.scale,i.scaleY*=i.scale,i.scaleZ*=i.scale);var k="translate3d("+(i.x?i.x:0)+"px, "+(i.y?i.y:0)+"px, "+(i.z?i.z:0)+"px)",Y="rotateX("+(i.rotateX?i.rotateX:0)+"deg) rotateY("+(i.rotateY?i.rotateY:0)+"deg) rotateZ("+(i.rotateZ?i.rotateZ:0)+"deg)",F="scaleX("+i.scaleX+") scaleY("+i.scaleY+") scaleZ("+i.scaleZ+")",X=k+" "+Y+" "+F+";";this._log(X),r.attr("style","transform:"+X+" -webkit-transform:"+X+" "+d)}},this)),window.requestAnimationFrame?window.requestAnimationFrame($.proxy(this._onScroll,this,!1)):this._requestAnimationFrame($.proxy(this._onScroll,this,!1))}}};$(document).ready(function(){$(function(){$(document).on("mouseenter",".header__nav-item",function(){$(this).children(".header__sub-menu").slideDown()}),$(document).on("mouseleave",".header__nav-item",function(){$(this).children(".header__sub-menu").slideUp()})}),$(function(){$(document).on("click",".js-search-form__open",function(){var e="290px";e=$(window).width()<="360"?"290px":"450px",$(".js-search-form__open").css("z-index","0"),$(".js-search-form form").animate({width:e})}),$(document).on("click",".js-search-form__close",function(){var e="40px";$(".js-search-form__open").css("z-index","2"),$(".js-search-form form").animate({width:e})})}),$(function(){$(document).on("click",".contacts__link--msg, .popup__close",function(){$(".popup").slideToggle("fast")})}),$(function(){$(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Загрузка изображения #%curr%...",tClose:"Закрыть (Esc)",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1],tPrev:"Предыдущая",tNext:"Следующая",tCounter:"Фото %curr% из %total%"},image:{tError:'<a href="%url%">Картинка #%curr%</a> не может быть загружена.'}})})});