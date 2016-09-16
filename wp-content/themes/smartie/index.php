<?php get_header(); ?>

	<div id="primary" class="content-area">
		<div id="form-cadastro">
			<?php echo do_shortcode('[mc4wp_form]'); ?>
		</div>

		<div class="clear"></div>

		<?php
			$woo_products_featured = woo_products_featured();
		?>

		<?php if ($woo_products_featured) { ?>
			<div id="slides">
				<?php foreach ($woo_products_featured as $product) {?>
					<?php $woo_product = get_product( $product->ID ); $gallery = woo_gallery_images( $product->ID ); ?>
					<?php if (!empty($gallery)) { ?>
						<div class="slides-content">
							<a href="<?php echo get_permalink($woo_product->post->ID) ?>" title="<?php echo $woo_product->post->post_title; ?>">
								<img src="<?php echo $gallery[0]['full_url']; ?>" alt="<?php echo $woo_product->post->post_title; ?>">	
							</a>
						</div>
					<?php } ?>
				<?php } ?>
			</div>
		<?php }?>
		
		<main id="main" class="site-main" role="main">
			<?php $woo_categories = woo_categories(); ?>
			<?php foreach ($woo_categories as $category) { ?>
				<h1><?php echo $category->name; ?></h1>
				<?php echo do_shortcode('[product_category category="'.$category->slug.'" per_page="4" columns="4"]') ?>
			<?php } ?>
		</main>
	</div>

<?php do_action( 'storefront_sidebar' ); ?>
<?php get_footer(); ?>
