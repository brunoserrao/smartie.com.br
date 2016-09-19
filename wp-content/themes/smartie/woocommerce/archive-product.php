<?php
/**
 * The Template for displaying product archives, including the main shop page which is a post type archive
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

get_header( 'shop' ); ?>
	<main id="main" class="site-main" role="main">
		<?php if(is_search()){ ?>
			<section class="woocommerce-products-search">
				<header class="page-header">
					<h1 class="page-title"><?php woocommerce_page_title(); ?></h1>
				</header>

				<?php if ( have_posts() ) { ?>
					<?php
						$products_ids = array();
						while ( have_posts() ) { 
							the_post();
							array_push($products_ids, get_the_ID());
						}
					?>

					<?php  echo do_shortcode("[products ids='".implode(',',$products_ids)."' columns='4' order='asc' orderby='date']")?>

				<?php } else { ?>

					<p>
						Nenhum produto encontrado com a(s) palavra(s) <strong><?php echo get_search_query(); ?></strong>.
					</p>
					
					<?php get_product_search_form() ?>
					
				<?php } ?>
			</section>
		<?php } ?>
			
		<?php if (is_shop() and !is_search()) { ?>
			<section class="woocommerce-products-shop">
				<header class="page-header">
					<h1>
						<?php echo woocommerce_page_title();?>
					</h1>
				</header>

				<?php $woo_categories = woo_categories(); ?>
				
				<?php foreach ($woo_categories as $category) { ?>
					<h2>
						<?php echo $category->name; ?> (<?php echo $category->count;?>).
						<a href="<?php echo woocommerce_category_url($category->term_id); ?>" title="<?php echo $category->name ?>" class="">
							Ver todos
						</a>
					</h2>
					<?php echo do_shortcode('[product_category category="'.$category->slug.'" per_page="8" columns="'.storefront_loop_columns().'"]'); ?>

				<?php } ?>
			</section>
		<?php } ?>

		<?php if (is_product_category() and !is_search()) { ?>
			<section class="woocommerce-products-category">
				<?php $current_category = woocommerce_category_description() ?>

				<header class="page-header">
					<h1 class="page-title">
						<?php echo $current_category->name ?>
					</h1>
				</header>

				<?php echo do_shortcode('[product_category category="'.$current_category->slug.'" per_page="-1" columns="4"]')?>
			</section>
		<?php } ?>

		<section class="woocommerce-products-related-and-recents">
			<header class="page-header">
				<h1 class="page-title">
					Recentes
				</h1>
			</header>

			<?php echo do_shortcode('[recent_products per_page="4" columns="4"]') ?>

			<header class="page-header">
				<h1 class="page-title">
					Destaques
				</h1>
			</header>

			<?php echo do_shortcode('[featured_products per_page="4" columns="4"]') ?>
		</section>
	</main>

<?php get_footer( 'shop' ); ?>