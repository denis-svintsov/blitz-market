new Swiper('.image-slider', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,        
   },
});


$(document).ready(function () {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});