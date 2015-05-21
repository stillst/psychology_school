function countdown(e,t,a,o,n){theyear=e,themonth=t,theday=a,thehour=o,theminute=n;var r=new Date,i=r.getYear();1e3>i&&(i+=1900);var s=r.getMonth(),l=r.getDate(),d=r.getHours(),c=r.getMinutes(),u=r.getSeconds(),m=montharray[s]+" "+l+", "+i+" "+d+":"+c+":"+u,h=Date.parse(m)+1e3*tz*60*60,v=montharray[t-1]+" "+a+", "+e+" "+o+":"+n,y=Date.parse(v)-6e4*r.getTimezoneOffset(),g=y-h,p=Math.floor(g/864e5*1),f=Math.floor(g%864e5/36e5*1),w=Math.floor(g%864e5%36e5/6e4*1),x=Math.floor(g%864e5%36e5%6e4/1e3*1);return 0>=p&&0>=f&&0>=w&&0>=x?(document.getElementById("dday").style.display="none",document.getElementById("dhour").style.display="none",document.getElementById("dmin").style.display="none",void(document.getElementById("dsec").style.display="none")):(document.getElementById("dday").innerHTML=p,document.getElementById("dhour").innerHTML=f,document.getElementById("dmin").innerHTML=w,document.getElementById("dsec").innerHTML=x,setTimeout("countdown(theyear,themonth,theday,thehour,theminute)",1e3),void 0)}$(document).ready(function(){$(function(){$(document).on("mouseenter",".header__nav-item a",function(){$(this).next().slideToggle("slow")}),$(document).on("mouseleave",".header__sub-menu",function(){$(this).slideToggle("slow")})}),$(function(){$(document).on("click",".contacts__link--search",function(){var e=500==$(".search-form").width()?"40px":"500px";$(".search-form").animate({width:e})})})});var current="Winter is here!",year=2016,month=4,day=2,hour=0,minute=0,tz=3,montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");countdown(year,month,day,hour,minute),$(function(){ParallaxScroll.init()});var ParallaxScroll={showLogs:!1,round:1e3,init:function(){return this._log("init"),this._inited?(this._log("Already Inited"),void(this._inited=!0)):(this._requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){window.setTimeout(e,1e3/60)}}(),void this._onScroll(!0))},_inited:!1,_properties:["x","y","z","rotateX","rotateY","rotateZ","scaleX","scaleY","scaleZ","scale"],_requestAnimationFrame:null,_log:function(e){this.showLogs&&console.log("Parallax Scroll / "+e)},_onScroll:function(e){var t=$(document).scrollTop(),a=$(window).height();this._log("onScroll "+t),$("[data-parallax]").each($.proxy(function(o,n){var r=$(n),i=[],s=!1,l=r.data("style");void 0==l&&(l=r.attr("style")||"",r.data("style",l));var d,c=[r.data("parallax")];for(d=2;r.data("parallax"+d);d++)c.push(r.data("parallax-"+d));var u=c.length;for(d=0;u>d;d++){var m=c[d],h=m["from-scroll"];void 0==h&&(h=Math.max(0,$(n).offset().top-a)),h=0|h;var v=m.distance,y=m["to-scroll"];void 0==v&&void 0==y&&(v=a),v=Math.max(0|v,1);var g=m.easing,p=m["easing-return"];if(void 0!=g&&$.easing&&$.easing[g]||(g=null),void 0!=p&&$.easing&&$.easing[p]||(p=g),g){var f=m.duration;void 0==f&&(f=v),f=Math.max(0|f,1);var w=m["duration-return"];void 0==w&&(w=f),v=1;var x=r.data("current-time");void 0==x&&(x=0)}void 0==y&&(y=h+v),y=0|y;var _=m.smoothness;void 0==_&&(_=30),_=0|_,(e||0==_)&&(_=1),_=0|_;var M=t;M=Math.max(M,h),M=Math.min(M,y),g&&(void 0==r.data("sens")&&r.data("sens","back"),M>h&&("back"==r.data("sens")?(x=1,r.data("sens","go")):x++),y>M&&("go"==r.data("sens")?(x=1,r.data("sens","back")):x++),e&&(x=f),r.data("current-time",x)),this._properties.map($.proxy(function(e){var t=0,a=m[e];if(void 0!=a){"scale"==e||"scaleX"==e||"scaleY"==e||"scaleZ"==e?t=1:a=0|a;var o=r.data("_"+e);void 0==o&&(o=t);var n=(a-t)*((M-h)/(y-h))+t,l=o+(n-o)/_;if(g&&x>0&&f>=x){var d=t;"back"==r.data("sens")&&(d=a,a=-a,g=p,f=w),l=$.easing[g](null,x,d,a,f)}l=Math.ceil(l*this.round)/this.round,l==o&&n==a&&(l=a),i[e]||(i[e]=0),i[e]+=l,o!=i[e]&&(r.data("_"+e,i[e]),s=!0)}},this))}if(s){if(void 0!=i.z){var A=m.perspective;void 0==A&&(A=800);var Y=r.parent();Y.data("style")||Y.data("style",Y.attr("style")||""),Y.attr("style","perspective:"+A+"px; -webkit-perspective:"+A+"px; "+Y.data("style"))}void 0==i.scaleX&&(i.scaleX=1),void 0==i.scaleY&&(i.scaleY=1),void 0==i.scaleZ&&(i.scaleZ=1),void 0!=i.scale&&(i.scaleX*=i.scale,i.scaleY*=i.scale,i.scaleZ*=i.scale);var F="translate3d("+(i.x?i.x:0)+"px, "+(i.y?i.y:0)+"px, "+(i.z?i.z:0)+"px)",X="rotateX("+(i.rotateX?i.rotateX:0)+"deg) rotateY("+(i.rotateY?i.rotateY:0)+"deg) rotateZ("+(i.rotateZ?i.rotateZ:0)+"deg)",Z="scaleX("+i.scaleX+") scaleY("+i.scaleY+") scaleZ("+i.scaleZ+")",q=F+" "+X+" "+Z+";";this._log(q),r.attr("style","transform:"+q+" -webkit-transform:"+q+" "+l)}},this)),window.requestAnimationFrame?window.requestAnimationFrame($.proxy(this._onScroll,this,!1)):this._requestAnimationFrame($.proxy(this._onScroll,this,!1))}};