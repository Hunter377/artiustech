$( window ).on('load', function() {
  $('.display-page img').addClass('animated slideInDown');
  $('.display-page .header2').addClass('animated slideInUp');
  $('.display-page .links-container a').addClass('animated fadeInLeft');

  var height = $('.display-page').outerHeight();
  
  $( window ).scroll(function() {
  	if ($(window).scrollTop() > height - 1) {
  	  $('.menu-container').show();
  	  if ($('.menu-container').hasClass('animated bounceOutUp')) {
  		$('.menu-container').removeClass('animated bounceOutUp');
  	  }
  	  $('.menu-container').addClass('animated bounceInDown');
  	} else {
  	  if ($('.menu-container').hasClass('animated bounceInDown')) {
  		$('.menu-container').removeClass('animated bounceInDown');
  	  }
      $('.menu-container').addClass('animated bounceOutUp');
  	};

  });

  $(".menu-container a, .display-page a").click(function() {
    var $href = $(this).attr("href");
    var $anchor = $($href).offset();
    $("html, body").animate({ scrollTop: $anchor.top }, 500);
    return false;
  });

  $(".menu-container button").click(function() {
    $("html, body").animate({scrollTop: 0}, 500);
  })

});