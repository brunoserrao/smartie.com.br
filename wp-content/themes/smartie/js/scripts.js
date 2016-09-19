jQuery(function() {
	jQuery('#slides').slidesjs({
		width: 940,
		height: 300
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

	jQuery('.quantity').on('click', '.plus', function(e) {
		$input = jQuery(this).prev('input.qty');
		var val = parseInt($input.val());
		$input.val( val+1 ).change();
	});

	jQuery('.quantity').on('click', '.minus', function(e) {
		$input = jQuery(this).next('input.qty');
		var val = parseInt($input.val());
		if (val > 0) {
			$input.val( val-1 ).change();
		} 
	});

	jQuery('#woocommerce-product-select-category').on('change',function(e){
		e.preventDefault();
		select = jQuery(this);
		
		if (jQuery(select).val()) {
			window.location.href = jQuery(select).val();
		}
	});

	jQuery('.faq-pergunta-link').on('click', function(e){
		e.preventDefault();
		link = jQuery(this);

		if (!jQuery(link).next().is(':visible')) {
			jQuery('#faq-smart .resposta').css('display','none');
			jQuery(link).next().css('display','block');
		}
	});
});