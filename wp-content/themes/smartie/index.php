<?php get_header(); ?>

	<div id="primary" class="content-area">
		<div id="form-cadastro">
			<?php echo do_shortcode('[yikes-mailchimp description="1" form="1"]'); ?>
		</div>

		<div class="clear"></div>

		<?php
			$banners = $brunoBanners->get_banners();
		?>

		<?php if ($banners) { ?>
			<div id="slides">
				<?php foreach ($banners as $banner) {?>
					<div class="slides-content">
						<?php if(!empty($banner->post_excerpt)){ ?>
							<a href="<?php echo $banner->post_excerpt; ?>" title="<?php echo $banner->post_title; ?>">
						<?php } ?>
							<img src="<?php echo $banner->thumb[0]; ?>" alt="<?php echo $banner->post->post_title; ?>">	
						<?php if(!empty($banner->post_excerpt)){ ?>
							</a>
						<?php } ?>
					</div>
				<?php } ?>
			</div>
		<?php }?>
		
		<main id="main" class="site-main" role="main">
			<h1 class="page-title">
				Destaques
			</h1>
		
			<?php echo do_shortcode('[featured_products per_page="4" columns="4"]') ?>

			<?php $woo_categories = woo_categories(); ?>
			
			<?php foreach ($woo_categories as $category) { ?>
				<a href="<?php echo woocommerce_category_url($category->term_id); ?>" title="<?php echo $category->name ?>" class="">
					<h1>
						<?php echo $category->name; ?>
					</h1>
				</a>				
				<?php echo do_shortcode('[product_category category="'.$category->slug.'" per_page="4" columns="'.storefront_loop_columns().'"]'); ?>
			<?php } ?>
		</main>
	</div>

<?php do_action( 'storefront_sidebar' ); ?>
<?php get_footer(); ?>
