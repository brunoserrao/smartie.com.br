jQuery(function() {
	jQuery('#slides').slidesjs({
		width: 940,
		height: 528
	});

	var wrap = jQuery(window);
	var mastheadHeight = jQuery('#masthead').height();

	jQuery('#cart-count').addClass('display-cart-count');

	wrap.on('scroll', function(e) {
		if (this.scrollY > mastheadHeight + 25) {
			jQuery('.fixed-navigation').addClass('display-fixed-navigator');
			jQuery('#cart-count').addClass('display-cart-count');
		} else {
			jQuery('.fixed-navigation').removeClass('display-fixed-navigator');
			jQuery('#cart-count').removeClass('display-cart-count');
		}
	});
});