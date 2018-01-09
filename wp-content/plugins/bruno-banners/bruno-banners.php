<?php
/*
	Plugin Name: Banners
	Plugin URI: http://www.brunoserrao.com/bs-events
	Description: Criar banners para ser exibido na home
	Version: 1.0.1
	Author: Bruno Serrao
	Author URI: http://www.brunoserrao.com
	License: GPL3
*/ 
class brunoBanners {
	public function __construct() {
		add_action( 'init', array($this, 'register_post_type'), 0 );
	}

	/**
	 * Register post type banner
	 *
	 */
	public function register_post_type(){
		register_post_type( 'post_type_banners',
			apply_filters( 'bs_register_post_type_banner',
				array(
					'labels'              => array(
						'name'                  => 'Banners',
						'singular_name'         => 'Banner',
						'menu_name'             => 'Banner',
						'add_new'               => 'Novo banner',
						'add_new_item'          => 'Adicionar novo banner',
						'edit'                  => 'Editar',
						'edit_item'             => 'Editar banner',
						'new_item'              => 'Novo banner'
					),
					'description'         => 'Aqui você pode criar ou editar os banners',
					'public'              => true,
					'show_ui'             => true,
					'capability_type'     => 'post',
					'map_meta_cap'        => true,
					'publicly_queryable'  => true,
					'exclude_from_search' => true,
					'hierarchical'        => false,
					'rewrite'             => false,
					'query_var'           => true,
					'has_archive'         => false,
					'show_in_nav_menus'   => false,
					'menu_icon'           => 'dashicons-admin-links',
					'supports'           => array( 'title', 'thumbnail', 'excerpt' )
				)
			)
		);
	}

	/**
	 * Get post type banner
	 *
	 */
	public function get_banners(){
		$banners_query = new WP_Query(
			array(
				'post_type' => 'post_type_banners',
				'posts_per_page' => 5
			)
		);

		if (!empty($banners_query)) {
			foreach ($banners_query->posts as $key => $banner) {
				$thumbnail_id = get_post_thumbnail_id( $banner->ID );
				$thumbnail = wp_get_attachment_image_src( $thumbnail_id, 'full');
				$banners_query->posts[$key]->thumb = $thumbnail;
			}
		}
		
		return $banners_query->posts;	
	}
}

$brunoBanners =  new brunoBanners();