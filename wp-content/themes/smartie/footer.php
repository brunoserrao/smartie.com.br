<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package storefront
 */
?>

		</div><!-- .col-full -->
	</div><!-- #content -->

	<?php if (!is_cart() and !is_checkout()) { ?>
		<?php $cart_count = WC()->cart->get_cart_contents_count(); ?>
		<?php if($cart_count) { ?>
			<div id="cart-count">
				<a href="<?php echo WC()->cart->get_cart_url(); ?>" title="<?php _e( 'View your shopping cart' ); ?>">
					<span class="icon"></span>
					<span class="itens-count">
						<?php echo  sprintf("%02d",$cart_count); ?>
					</span>
				</a>
			</div>
		<?php } ?>
	<?php }?>

	<?php do_action( 'storefront_before_footer' ); ?>

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="col-full">

			<?php
			/**
			 * @hooked storefront_footer_widgets - 10
			 * @hooked storefront_credit - 20
			 */
			// do_action( 'storefront_footer' ); ?>

		</div><!-- .col-full -->
	</footer><!-- #colophon -->

	<?php do_action( 'storefront_after_footer' ); ?>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
