<?php
/**
 * The loop template file.
 *
 * Included on pages like index.php, archive.php and search.php to display a loop of posts
 * Learn more: http://codex.wordpress.org/The_Loop
 *
 * @package storefront
 */

do_action( 'storefront_loop_before' );
$loop = 0;
?>

<div id="loop-posts">
	<?php while ( have_posts() ) { the_post(); ?>
		<div class="loop-item loop-<?php echo ($loop % 2) ?>">
			<?php get_template_part( 'content', get_post_format() ); ?>	
		</div>
	<?php $loop++; } ?>
</div>

<?php
/**
 * @hooked storefront_paging_nav - 10
 */
do_action( 'storefront_loop_after' );