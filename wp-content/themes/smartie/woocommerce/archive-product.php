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

$woo_categories = woo_categories();

$woo_categories_by_name = array();

foreach ($woo_categories as $category) {
	$woo_categories_by_name[$category->name] = array(
		'term_id' => $category->term_id,
		'name' => $category->name,
	);
}

if (is_product_category()) {
	$current_category = woocommerce_category_description();
}
get_header( 'shop' ); ?>
	<main id="main" class="site-main" role="main">
		<header class="page-header">
			<h1>
				<?php echo woocommerce_page_title();?>
			</h1>
		</header>


		<section class="woocommerce-products-shop">
			<div class="woocommerce-FormRow form-row form-row-first">
				<header class="page-header">
					<h4 class="page-title">Categorias</h4>
				</header>

				<form id="woocommerce-product-archive-select" action="">
					<div class="select-style">
						<select name="" id="woocommerce-product-select-category">
							<option value="">Selecione uma categoria</option>
							<?php foreach ($woo_categories_by_name as $category) { ?>
								<option <?php echo $current_category->term_id == $category['term_id'] ? 'selected' : '' ?>  value="<?php echo get_term_link($category['term_id'],'product_cat'); ?>"><?php echo $category['name'];?></option>
							<?php } ?>
						</select>
					</div> 
				</form>
			</div>
			
			<div id="form-search" class="woocommerce-FormRow form-row form-row-last">
				<header class="page-header">
					<h4 class="page-title">Pesquisar planilhas</h4>
				</header>

				<?php get_product_search_form() ?>
			</div>
		</section>

		<?php if(is_search()){ ?>
			<section class="woocommerce-products-search">
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
				
				<?php } ?>
			</section>
		<?php } ?>
			
		<?php if (is_shop() and !is_search()) { ?>
			<section class="woocommerce-products-shop">
				<?php foreach ($woo_categories as $category) { ?>
					<h2>
						<?php echo $category->name; ?> (<?php echo $category->count;?>).
						<a href="<?php echo woocommerce_category_url($category->term_id); ?>" title="<?php echo $category->name ?>" class="">
							Ver todos
						</a>
					</h2>
					<?php echo do_shortcode('[product_category category="'.$category->slug.'" per_page="4" columns="'.storefront_loop_columns().'"]'); ?>

				<?php } ?>
			</section>
		<?php } ?>

		<?php if (is_product_category() and !is_search()) { ?>
			<section class="woocommerce-products-category">
				<?php echo do_shortcode('[product_category category="'.$current_category->slug.'" per_page="-1" columns="4"]')?>
			</section>
		<?php } ?>

		<section class="woocommerce-products-related-and-recents">
			<h1 class="page-title">
				Destaques
			</h1>
			
			<?php echo do_shortcode('[featured_products per_page="4" columns="4"]') ?>
		</section>
	</main>

<?php get_footer( 'shop' ); ?>