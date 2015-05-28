$(document).ready(function()
{
	//sub-menu
	$(function()
	{
	    $(document).on('mouseenter', '.header__nav-item', function()
	    { 	    	
	    	$(this).children('.header__sub-menu').slideDown(); 	    	                                                                 
	    });

	    $(document).on('mouseleave', '.header__nav-item', function()
	    { 
	    	$(this).children('.header__sub-menu').slideUp(); 	                                                                  
	    });
	});

	//search
	$(function()
	{
	    $(document).on('click', '.js-search-form__open', function()
	    { 
	    	var toggleWidth = "290px";
	    	if ($(window).width() <= '360')
	    	{
	    		toggleWidth = "290px"
	    	}
	    	else
	    	{
				toggleWidth = "450px"
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
	    $(document).on('click', '.contacts__link--msg, .popup__close', function()
	    { 	    	
	    	$(".popup").slideToggle("fast");                                                                    
	    });	
	});	

	//gallery
	$(function() 
	{
		  $('.popup-gallery').magnificPopup(
		  {
		    delegate: 'a',
		    type: 'image',
		    tLoading: 'Загрузка изображения #%curr%...',
		    tClose: 'Закрыть (Esc)',
		    gallery: 
		    {
		      enabled: true,
		      navigateByImgClick: true,
		      preload: [0,1], // Will preload 0 - before current, and 1 after the current image
		      tPrev: 'Предыдущая', 
		      tNext: 'Следующая', 
		      tCounter: 'Фото %curr% из %total%'
		    },
		    image: 
		    {
		      tError: '<a href="%url%">Картинка #%curr%</a> не может быть загружена.',	      
		    }
		  });
	}); 
}); 