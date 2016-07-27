jQuery(function() {
	jQuery('#slides').slidesjs({
		width: 940,
		height: 528
	});

	var wrap = jQuery(window);
	var mastheadHeight = jQuery('#masthead').height();

	jQuery('#cart-count').addClass('display-cart-count');

	wrap.on('scroll', function(e) {
		if (this.scrollY > mastheadHeight) {
			jQuery('#cart-count').addClass('display-cart-count');
		} else {
			jQuery('#cart-count').removeClass('display-cart-count');
		}
	});
});