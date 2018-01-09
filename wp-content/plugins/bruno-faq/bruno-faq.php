<?php
/*
	Plugin Name: FAQ Smartie
	Plugin URI: http://www.brunoserrao.com/bs-faq
	Description: Criar perguntas para ser exibido nno FAQ
	Version: 1.0
	Author: Bruno Serrao
	Author URI: http://www.brunoserrao.com
	License: GPL3
*/ 
class brunoFaq {
	public function __construct() {
		add_action( 'init', array($this, 'register_post_type'), 0 );
		add_action( 'init', array($this, 'register_shortcode'), 0 );
	}

	/**
	 * Register shortcode
	 *
	 */
	public function register_shortcode(){
		add_shortcode( 'faq_perguntas', function(){
			$faq_query = new WP_Query(
				array(
					'post_type' => 'post_type_faq',
					'post_status' => 'publish', 
					'orderby' => 'menu_order', 
					'order' => 'ASC',
					'posts_per_page' => -1
				)
			);

			$list = '<ul id="faq-smart">';

			if (!empty($faq_query)) {
				foreach ($faq_query->posts as $key => $faq) {
					$list .= 
					'<li class="faq-pergunta">'
						.'<h3 class="faq-pergunta-link">'.$faq->post_title.'</h3>'
						.'<div class="resposta">'.apply_filters('the_content', $faq->post_content).'</div>'
					.'</li>';
				}
			}

			$list .= "</ul>";

			return $list;
		});
	}

	/**
	 * Register post type FAQ
	 *
	 */
	public function register_post_type(){
		register_post_type( 'post_type_faq',
			apply_filters( 'bs_register_post_type_faq',
				array(
					'labels'              => array(
						'name'                  => 'FAQ',
						'singular_name'         => 'FAQ',
						'menu_name'             => 'FAQ',
						'add_new'               => 'Nova pergunta',
						'add_new_item'          => 'Adicionar nova pergunta',
						'edit'                  => 'Editar',
						'edit_item'             => 'Editar pergunta',
						'new_item'              => 'Nova pergunta'
					),
					'description'         => 'Aqui você pode criar ou editar as perguntas',
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
					'menu_icon'           => 'dashicons-format-aside',
					'supports'           => array( 'title', 'editor', 'page-attributes' )

				)
			)
		);
	}
}

$brunoFaq =  new brunoFaq();