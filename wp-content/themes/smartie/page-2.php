<!DOCTYPE html>
<html <?php language_attributes(); ?> <?php storefront_html_tag_schema(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php
		wp_head(); 
		the_post();
	?>
</head>

<body <?php body_class(); ?>>
	<div id="primary">
		<div id="download-demo">
			<?php the_content(); ?>	
			<?php if (!empty($_POST)) { ?>
				<script>
					jQuery(function(){
						jQuery('.download-arquivo').attr('href', window.atob(window.parent.jQuery('#fhref').val()) );
					});
				</script>
				<a href="" title="<?php echo get_the_title() ?>" class="button download-arquivo">Clique aqui para baixar o arquivo.</a>
			<?php } ?>
		</div>
	</div>
	<?php wp_footer(); ?>
</body>
</html>