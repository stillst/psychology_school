$(document).ready(function()
{
	//sub-menu
	$(function()
	{
	    $(document).on('mouseenter', '.header__nav-item a', function()
	    { 
	    	$(this).next().slideToggle("slow");                                                                    
	    });

	    $(document).on('mouseleave', '.header__sub-menu', function()
	    { 
	    	$(this).slideToggle("slow");                                                                           
	    });

	    $(document).on('mouseleave', 'header', function()
	    { 
	    	$('.header__sub-menu').hide("slow");                                                                           
	    });
	});

	//search
	$(function()
	{
	    $(document).on('click', '.js-search-form__toogle', function()
	    { 
	    	var toggleWidth = 40;
	    	if ($(window).width() <= '360')
	    	{
	    		if ($(".js-search-form form").width() == 290)
	    		{
	    			toggleWidth = "40px"
	    			$(".js-search-form__toogle").css('background-image', "url(../img/header/search_icon.png)");  
	    		}

	    		else
	    		{
					toggleWidth = "290px"
					$(".js-search-form__toogle").css('background-image', "url(../img/header/close.png)");  
	    		}
	    	}
	    	else
	    	{
	    		if ($(".js-search-form form").width() == 450)
	    		{
	    			toggleWidth = "40px"
	    			$(".js-search-form__toogle").css('background-image', "url(../img/header/search_icon.png)");  
	    		}
	    		else
	    		{
					toggleWidth = "450px"
					$(".js-search-form__toogle").css('background-image', "url(../img/header/close.png)");  
	    		}
	    		
	    	}	    	
        	$('.js-search-form form').animate({ width: toggleWidth }); 
			
	    });	
	});	

	//popup
	$(function()
	{
	    $(document).on('click', '.contacts__link--msg, .popup__close', function()
	    { 	    	
	    	$(".popup").slideToggle("fast");                                                                    
	    });	
	});	

}); 