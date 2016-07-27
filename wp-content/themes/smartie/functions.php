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
* Remove Storefront Logo
*/
add_action( 'init', 'storefront_custom_logo' );
function storefront_custom_logo() {
	remove_action( 'storefront_header', 'storefront_site_branding', 20 );
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