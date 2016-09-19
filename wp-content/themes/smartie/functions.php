<?php
/**
 * storefront engine room
 *
 * @package storefront
 */

/**
 * Initialize all the things.
 */
require get_template_directory() . '/inc/init.php';

/*
* Woocommerce Ctategories
*/
function woo_categories(){
	return get_terms( 'product_cat' );
}


/*
* Woocommerce Featured products
*/
function woo_products_featured($qty = 5){
	$args = array(  
		'post_type' => 'product',
		'meta_key' => '_featured',
		'meta_value' => 'yes',
		'posts_per_page' => $qty
	);  

	$featured_query = new WP_Query( $args );

	if (!$featured_query->have_posts()){
		return false;
	}

	return $featured_query->posts;
}

/*
* Get Woocommerce Product Gallery
*/
function woo_gallery_images($product_id){
	$product = new WC_product($product_id);
	$attachment_ids = $product->get_gallery_attachment_ids();

	if (empty($attachment_ids)) {
		return false;
	}

	$gallery = array();

	foreach( $attachment_ids as $attachment_id ) {
		array_push($gallery, array(
			'full_url' => wp_get_attachment_url( $attachment_id )
		));
	}

	return $gallery;
}

/*
* Remove Tab reviews
*/
add_filter( 'woocommerce_product_tabs', 'wcs_woo_remove_reviews_tab', 98 );
function wcs_woo_remove_reviews_tab($tabs) {
	unset($tabs['reviews']);
	return $tabs;
}

/*
* Remove Footer
*/
add_action( 'init', 'custom_remove_footer_credit', 10 );
function custom_remove_footer_credit () {
    remove_action( 'storefront_footer', 'storefront_credit', 20 );
}

/*
* Add back to store button after cart
*/
add_action('woocommerce_after_cart_totals', 'themeprefix_back_to_store');
function themeprefix_back_to_store() { 
	$shop_page_url = get_permalink( woocommerce_get_page_id( 'shop' ) );

	echo '<div class="wc-proceed-to-checkout">';
	echo ' <a href="'.$shop_page_url.'" class="checkout-button button alt wc-backward">'. __( 'Continue Shopping', 'woocommerce' ) .'</a>';
	echo '</div>';
}