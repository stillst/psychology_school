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
	});


	//search
	$(function()
	{
	    $(document).on('click', '.contacts__link--search', function()
	    { 
	    	var toggleWidth = $(".search-form").width() == 500 ? "40px" : "500px";
        	$('.search-form').animate({ width: toggleWidth });                                                                    
	    });	
	});

}); 