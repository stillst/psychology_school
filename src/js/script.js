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
}); 