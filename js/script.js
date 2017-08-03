$(function(){
	new WOW({
		offset: 100
	}).init();	
	
	$(document).ready(function(){



	  	$("#owl-demo").owlCarousel({		 
		    slideSpeed : 300,
		    paginationSpeed : 400,
		 
		    
		    animateIn: 'fadeInLeft',
		    items:1,
		    loop: true,
		    stagePadding:30,
    		smartSpeed:450,
    		itemsDesktop : false,
		    itemsDesktopSmall : false,
		    itemsTablet: false,
		    itemsMobile : false,
		    margin:30,
		    nav:true,
		    navText : ['<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40; width: 40px; border-radius: 50%" xml:space="preserve"> <style type="text/css"> .st0{fill:#FFFFFF;} </style> <g> <g><path class="st0" d="M20,40L20,40c-5.3,0-10.4-2.1-14.2-5.9c-7.8-7.8-7.8-20.5,0-28.3C9.6,2.1,14.7,0,20,0 c5.3,0,10.4,2.1,14.1,5.9C37.9,9.6,40,14.7,40,20s-2.1,10.4-5.9,14.1C30.4,37.9,25.3,40,20,40L20,40z M20,3.4 c-4.4,0-8.6,1.7-11.7,4.9c-6.5,6.5-6.5,17,0,23.5c3.1,3.1,7.3,4.9,11.7,4.9h0c4.4,0,8.6-1.7,11.7-4.9c3.1-3.1,4.9-7.3,4.9-11.7 s-1.7-8.6-4.9-11.7C28.6,5.1,24.4,3.4,20,3.4L20,3.4z"/></g><g><path class="st0" d="M22.4,29.9c-0.4,0-0.9-0.2-1.2-0.5L13,21.2c-0.3-0.3-0.5-0.8-0.5-1.2c0-0.5,0.2-0.9,0.5-1.2l8.2-8.2 c0.7-0.7,1.7-0.7,2.4,0c0.7,0.7,0.7,1.7,0,2.4l-7,7l7,7c0.7,0.7,0.7,1.7,0,2.4C23.3,29.8,22.8,29.9,22.4,29.9L22.4,29.9z"/></g></g></svg>'
,'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40; width: 40px; border-radius: 50%" xml:space="preserve"><style type="text/css">.st0{fill:#FFFFFF;}</style><g><g><path class="st0" d="M20,0L20,0c5.3,0,10.4,2.1,14.2,5.9c7.8,7.8,7.8,20.5,0,28.3C30.4,37.9,25.3,40,20,40 c-5.3,0-10.4-2.1-14.1-5.9C2.1,30.4,0,25.3,0,20S2.1,9.6,5.9,5.9C9.6,2.1,14.7,0,20,0L20,0z M20,36.6c4.4,0,8.6-1.7,11.7-4.9 c6.5-6.5,6.5-17,0-23.5C28.6,5.1,24.4,3.4,20,3.4h0c-4.4,0-8.6,1.7-11.7,4.9C5.1,11.4,3.4,15.6,3.4,20s1.7,8.6,4.9,11.7 C11.4,34.9,15.6,36.6,20,36.6L20,36.6z"/> </g><g><path class="st0" d="M17.6,10.1c0.4,0,0.9,0.2,1.2,0.5l8.2,8.2c0.3,0.3,0.5,0.8,0.5,1.2c0,0.5-0.2,0.9-0.5,1.2l-8.2,8.2 c-0.7,0.7-1.7,0.7-2.4,0c-0.7-0.7-0.7-1.7,0-2.4l7-7l-7-7c-0.7-0.7-0.7-1.7,0-2.4C16.7,10.2,17.2,10.1,17.6,10.1L17.6,10.1z"/></g></g></svg>']
		 
		});

		$("#owl-demo1").owlCarousel({		 
		    slideSpeed : 300,
		    paginationSpeed : 400,
		 
		    animateIn: 'fadeInLeft',
		    items:1,
		    loop: true,
		    stagePadding:30,
    		smartSpeed:450,
    		itemsDesktop : false,
		    itemsDesktopSmall : false,
		    itemsTablet: false,
		    itemsMobile : false,
		    margin:30,
		    nav:true,
		    navText : ['<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40; width: 40px; border-radius: 50%" xml:space="preserve"><style type="text/css"> .st0{fill:#989CA1;} </style> <g><g><path class="st0" d="M20,40L20,40c-5.3,0-10.4-2.1-14.2-5.9c-7.8-7.8-7.8-20.5,0-28.3C9.6,2.1,14.7,0,20,0 c5.3,0,10.4,2.1,14.1,5.9C37.9,9.6,40,14.7,40,20s-2.1,10.4-5.9,14.1C30.4,37.9,25.3,40,20,40L20,40z M20,3.4 c-4.4,0-8.6,1.7-11.7,4.9c-6.5,6.5-6.5,17,0,23.5c3.1,3.1,7.3,4.9,11.7,4.9h0c4.4,0,8.6-1.7,11.7-4.9c3.1-3.1,4.9-7.3,4.9-11.7 s-1.7-8.6-4.9-11.7C28.6,5.1,24.4,3.4,20,3.4L20,3.4z"/></g><g><path class="st0" d="M22.4,29.9c-0.4,0-0.9-0.2-1.2-0.5L13,21.2c-0.3-0.3-0.5-0.8-0.5-1.2c0-0.5,0.2-0.9,0.5-1.2l8.2-8.2 c0.7-0.7,1.7-0.7,2.4,0c0.7,0.7,0.7,1.7,0,2.4l-7,7l7,7c0.7,0.7,0.7,1.7,0,2.4C23.3,29.8,22.8,29.9,22.4,29.9L22.4,29.9z"/></g></g></svg>'
,'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40; width: 40px; border-radius: 50%" xml:space="preserve"> <style type="text/css"> .st0{fill:#989CA1;}</style><g><g><path class="st0" d="M20,0L20,0c5.3,0,10.4,2.1,14.2,5.9c7.8,7.8,7.8,20.5,0,28.3C30.4,37.9,25.3,40,20,40 c-5.3,0-10.4-2.1-14.1-5.9C2.1,30.4,0,25.3,0,20S2.1,9.6,5.9,5.9C9.6,2.1,14.7,0,20,0L20,0z M20,36.6c4.4,0,8.6-1.7,11.7-4.9 c6.5-6.5,6.5-17,0-23.5C28.6,5.1,24.4,3.4,20,3.4h0c-4.4,0-8.6,1.7-11.7,4.9C5.1,11.4,3.4,15.6,3.4,20s1.7,8.6,4.9,11.7 C11.4,34.9,15.6,36.6,20,36.6L20,36.6z"/> </g><g><path class="st0" d="M17.6,10.1c0.4,0,0.9,0.2,1.2,0.5l8.2,8.2c0.3,0.3,0.5,0.8,0.5,1.2c0,0.5-0.2,0.9-0.5,1.2l-8.2,8.2 c-0.7,0.7-1.7,0.7-2.4,0c-0.7-0.7-0.7-1.7,0-2.4l7-7l-7-7c-0.7-0.7-0.7-1.7,0-2.4C16.7,10.2,17.2,10.1,17.6,10.1L17.6,10.1z"/></g></g></svg>']
		 
		});

		$("#owl-demo2").owlCarousel({		 
		    slideSpeed : 300,
		    paginationSpeed : 400,
		 
		    animateIn: 'fadeInLeft',
		    items:1,
		    loop: true,
		    stagePadding:30,
    		smartSpeed:450,
    		itemsDesktop : false,
		    itemsDesktopSmall : false,
		    itemsTablet: false,
		    itemsMobile : false,
		    margin:30 
		});

		$('.popup .close_order, .overlay').click(function (){
        $('.popup, .overlay').css('opacity','0');
        $('.popup, .overlay').css('visibility','hidden');
    });

    $('.pop-up').click(function(){
     var modalId = $(this).attr('data-attr');
     $('.popup').css('visibility', 'hidden').css('opacity','0');
     $('#'+modalId).css('visibility', 'visible').css('opacity','1');
     $('.overlay').css('opacity','1').css('visibility','visible');
    });

	});
});

$(window).load(function () {
    var carouselCaptionWidth = $('.portfolio-item a img').width();
    $('.portfolio-item img').each(function () {
       $(this).attr('width', carouselCaptionWidth);
    });
    $('.portfolio-item .portfolio-image-block').css('max-width', carouselCaptionWidth + 'px');
    $('.portfolio-item .portfolio-image-block .portfolio-image-discription').css('max-width', carouselCaptionWidth + 'px');
});
    
$(".maskphone").mask("+7 (999) 999-99-99");

$(function() {
		$('.location').click(function() {
			var thisList = $(this).closest('.city-choice').find('.cities');
			thisList.toggle();
			var firstClick1=true;
		});
		$('.cities li a').click(function() {
			var contentLink = $(this).html();
			$(this).closest('body').find('.location').html(contentLink);
			$(this).closest('.city-choice').find('.cities li a').removeClass('active');
			$(this).addClass('active');
			return false;
		});
	});    