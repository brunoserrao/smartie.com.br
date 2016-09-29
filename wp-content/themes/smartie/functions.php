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

/*
* Is Woocommerce page
*/
function is_woocommerce_page(){
	if (is_woocommerce() or is_home() or is_shop() or is_product_category() or is_product_tag() or is_product() or is_cart() or is_checkout() or is_account_page() or is_wc_endpoint_url()) {
		return true;
	} else {
		return false;
	}
}
/**
 * Code goes in functions.php or a custom plugin.
 */
add_action( 'woocommerce_email', 'unhook_those_pesky_emails', 99 );
function unhook_those_pesky_emails( $email_class ) {
	/**
	 * Hooks for sending emails during store events
	 **/
	// remove_action( 'woocommerce_low_stock_notification', array( $email_class, 'low_stock' ) );
	// remove_action( 'woocommerce_no_stock_notification', array( $email_class, 'no_stock' ) );
	// remove_action( 'woocommerce_product_on_backorder_notification', array( $email_class, 'backorder' ) );
	
	// New order emails
	remove_action( 'woocommerce_order_status_pending_to_processing_notification', array( $email_class->emails['WC_Email_New_Order'], 'trigger' ) );
	remove_action( 'woocommerce_order_status_pending_to_completed_notification', array( $email_class->emails['WC_Email_New_Order'], 'trigger' ) );
	remove_action( 'woocommerce_order_status_pending_to_on-hold_notification', array( $email_class->emails['WC_Email_New_Order'], 'trigger' ) );
	// remove_action( 'woocommerce_order_status_failed_to_processing_notification', array( $email_class->emails['WC_Email_New_Order'], 'trigger' ) );
	// remove_action( 'woocommerce_order_status_failed_to_completed_notification', array( $email_class->emails['WC_Email_New_Order'], 'trigger' ) );
	// remove_action( 'woocommerce_order_status_failed_to_on-hold_notification', array( $email_class->emails['WC_Email_New_Order'], 'trigger' ) );
	
	// Processing order emails
	remove_action( 'woocommerce_order_status_pending_to_processing_notification', array( $email_class->emails['WC_Email_Customer_Processing_Order'], 'trigger' ) );
	remove_action( 'woocommerce_order_status_pending_to_on-hold_notification', array( $email_class->emails['WC_Email_Customer_Processing_Order'], 'trigger' ) );
	
	// Completed order emails
	// remove_action( 'woocommerce_order_status_completed_notification', array( $email_class->emails['WC_Email_Customer_Completed_Order'], 'trigger' ) );
		
	// Note emails
	// remove_action( 'woocommerce_new_customer_note_notification', array( $email_class->emails['WC_Email_Customer_Note'], 'trigger' ) );

	return $$email_class;
}


/*
* Custom page title
*/
function bs_get_the_archive_title() {
	if ( is_category() ) {
		$title = single_cat_title( '', false );
	} elseif ( is_tag() ) {
		$title = sprintf( __( 'Tag: %s' ), single_tag_title( '', false ) );
	} elseif ( is_author() ) {
		$title = sprintf( __( 'Author: %s' ), '<span class="vcard">' . get_the_author() . '</span>' );
	} elseif ( is_year() ) {
		$title = sprintf( __( 'Year: %s' ), get_the_date( _x( 'Y', 'yearly archives date format' ) ) );
	} elseif ( is_month() ) {
		$title = sprintf( __( 'Month: %s' ), get_the_date( _x( 'F Y', 'monthly archives date format' ) ) );
	} elseif ( is_day() ) {
		$title = sprintf( __( 'Day: %s' ), get_the_date( _x( 'F j, Y', 'daily archives date format' ) ) );
	} elseif ( is_tax( 'post_format' ) ) {
		if ( is_tax( 'post_format', 'post-format-aside' ) ) {
			$title = _x( 'Asides', 'post format archive title' );
		} elseif ( is_tax( 'post_format', 'post-format-gallery' ) ) {
			$title = _x( 'Galleries', 'post format archive title' );
		} elseif ( is_tax( 'post_format', 'post-format-image' ) ) {
			$title = _x( 'Images', 'post format archive title' );
		} elseif ( is_tax( 'post_format', 'post-format-video' ) ) {
			$title = _x( 'Videos', 'post format archive title' );
		} elseif ( is_tax( 'post_format', 'post-format-quote' ) ) {
			$title = _x( 'Quotes', 'post format archive title' );
		} elseif ( is_tax( 'post_format', 'post-format-link' ) ) {
			$title = _x( 'Links', 'post format archive title' );
		} elseif ( is_tax( 'post_format', 'post-format-status' ) ) {
			$title = _x( 'Statuses', 'post format archive title' );
		} elseif ( is_tax( 'post_format', 'post-format-audio' ) ) {
			$title = _x( 'Audio', 'post format archive title' );
		} elseif ( is_tax( 'post_format', 'post-format-chat' ) ) {
			$title = _x( 'Chats', 'post format archive title' );
		}
	} elseif ( is_post_type_archive() ) {
		$title = sprintf( __( 'Archives: %s' ), post_type_archive_title( '', false ) );
	} elseif ( is_tax() ) {
		$tax = get_taxonomy( get_queried_object()->taxonomy );
		/* translators: 1: Taxonomy singular name, 2: Current taxonomy term */
		$title = sprintf( __( '%1$s: %2$s' ), $tax->labels->singular_name, single_term_title( '', false ) );
	} else {
		$title = __( 'Archives' );
	}

	return $title;
}