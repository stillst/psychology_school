$(document).ready(function(){$(function(){$(document).on("mouseenter",".header__nav-item",function(){$(this).children(".header__sub-menu").slideDown()}),$(document).on("mouseleave",".header__nav-item",function(){$(this).children(".header__sub-menu").slideUp()})}),$(function(){$(document).on("click",".js-search-form__open",function(){var n="290px";n=$(window).width()<="640"?"210px":"450px",$(".js-search-form__open").css("z-index","0"),$(".js-search-form form").animate({width:n})}),$(document).on("click",".js-search-form__close",function(){var n="40px";$(".js-search-form__open").css("z-index","2"),$(".js-search-form form").animate({width:n})})}),$(function(){$(document).on("click",".round-links__link--msg, .popup__close",function(){$(".popup").slideToggle("fast")})}),$(function(){$(document).on("click",".questions__question",function(){$(this).hasClass("questions__question--active")?$(this).removeClass("questions__question--active"):$(this).addClass("questions__question--active")})})});