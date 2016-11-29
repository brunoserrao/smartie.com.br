<!DOCTYPE html>
<html <?php language_attributes(); ?> <?php storefront_html_tag_schema(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); the_post(); ?>
</head>

<body <?php body_class(); ?>>
	<div id="primary">
		<?php the_content(); ?>
	</div>
	<?php wp_footer(); ?>
</body>
</html>