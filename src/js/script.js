$(document).ready(function() {

	//sub-menu
	$(".header__nav-item").mouseenter(function(){
	    clearTimeout($(this).data('timeoutId'));
	    $(this).find(".header__sub-menu").slideDown();
	}).mouseleave(function(){
	    var navItem = $(this),
	        timeoutId = setTimeout(function(){
	            navItem.find(".header__sub-menu").slideUp();
	        }, 350);    
	        //console.log(timeoutId);
	    navItem.data('timeoutId', timeoutId); 
	});


	//nav-toogle
	$(function()
	{
	    $(document).on('click', '.header__nav-toggle', function()
	    { 	    	
	    	$('.header__nav').toggle(); 	    	                                                                 
	    });
	});

	//search
	$(function()
	{
	    $(document).on('click', '.js-search-form__open', function()
	    { 
	    	var toggleWidth = "155px";
	    	if ($(window).width() <= '640')
	    	{
	    		toggleWidth = "155px"
	    	}
	    	else
	    	{
				toggleWidth = "420px"
	    	}
	    	$('.js-search-form__open').css('z-index','0');
	    	$('.js-search-form form').animate({ width: toggleWidth }); 	    		    	        			
	    });	

        $(document).on('click', '.js-search-form__close', function()
        { 
        	var toggleWidth = "40px";
        	$('.js-search-form__open').css('z-index','2');
        	$('.js-search-form form').animate({ width: toggleWidth }); 	    		    	        			
        });	
	});	

	//popup
	$(function()
	{
	    $(document).on('click', '.round-links__link--msg, .popup form > div > div', function()
	    { 	    	
	    	$(".popup").slideToggle("fast");                                                                    
	    });	

	    $(document).on('click', '.popup', function()
	    { 	    	
	    	if (!$('.popup form').is(':hover')){
	    		$(".popup").slideToggle("fast");                                                                    	
	    	}
	    	
	    });	

	});	

	//questions carusel
	$(function()
	{
	    $(document).on('click', '.questions__question', function()
	    { 	    	
	    	if($(this).hasClass("questions__question--active"))
	    	{
	    		$(this).removeClass("questions__question--active");
	    	}
	    	else
	    	{
	    		$(this).addClass("questions__question--active");
	    	}
	    });	
	});	

	//tabs
	$(function()
	{
	    $(document).on('click', '.page-nav__link', function()
	    { 	    	
	    	var index = $(this).index();            
	        $(".page-nav__link--active").removeClass("page-nav__link--active");   
	        $(".page-content__item--active").removeClass("page-content__item--active");       
	        $(this).addClass("page-nav__link--active");                       	              
	        $(".page-content__item").eq(index).addClass("page-content__item--active");
	    });	
	});	

	//link to correct tab from nav
	$(function()		
	{	
		url = window.location.href;
		var hash_tag_index = url.indexOf('#');
		if(hash_tag_index > 0)
		{
			var active_tab = url.substring(hash_tag_index);	
			switch (active_tab) 
			{				
				case "#presentation":			
				case "#school":								
			   		break;

		   		case "#video":	
		   		case "#us":		
		   			$(".page-nav__link--active").removeClass("page-nav__link--active");   
	        		$(".page-content__item--active").removeClass("page-content__item--active"); 
	        		$(".page-content__item").eq(1).addClass("page-content__item--active");
	        		$(".page-nav__link").eq(1).addClass("page-nav__link--active");
		   	   		break;
			   	
			    case "#journal":				   		
			   		$(".page-nav__link--active").removeClass("page-nav__link--active");   
	        		$(".page-content__item--active").removeClass("page-content__item--active"); 
	        		$(".page-content__item").eq(2).addClass("page-content__item--active");
	        		$(".page-nav__link").eq(2).addClass("page-nav__link--active");
			   		break;
			}		
		}


		$(function()
		{
		    $(document).on('click', '#link_about-school, #link_materials-presentation', function()
		    { 	    	
		    	$(".page-nav__link--active").removeClass("page-nav__link--active");   
        		$(".page-content__item--active").removeClass("page-content__item--active"); 
        		$(".page-content__item").eq(0).addClass("page-content__item--active");
        		$(".page-nav__link").eq(0).addClass("page-nav__link--active");
		    });	

		    $(document).on('click', '#link_about-us, #link_materials-video', function()
		    { 	    	
		    	$(".page-nav__link--active").removeClass("page-nav__link--active");   
        		$(".page-content__item--active").removeClass("page-content__item--active"); 
        		$(".page-content__item").eq(1).addClass("page-content__item--active");
        		$(".page-nav__link").eq(1).addClass("page-nav__link--active");
		    });	

		    $(document).on('click', '#link_materials-journal', function()
		    { 	    	
		    	$(".page-nav__link--active").removeClass("page-nav__link--active");   
        		$(".page-content__item--active").removeClass("page-content__item--active"); 
        		$(".page-content__item").eq(2).addClass("page-content__item--active");
        		$(".page-nav__link").eq(2).addClass("page-nav__link--active");
		    });	
		});	   
	});		
}); 