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
				<a href="<?php echo base64_decode(sanitize_text_field($_GET['href'])); ?>" title="<?php echo get_the_title() ?>" class="button download-arquivo">Clique aqui para baixar o arquivo.</a>
			<?php } ?>
		</div>
	</div>
	<?php wp_footer(); ?>
</body>
</html>