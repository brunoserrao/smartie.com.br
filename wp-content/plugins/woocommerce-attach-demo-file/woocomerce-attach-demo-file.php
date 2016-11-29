<?php
/*
	Plugin Name: Woocommerce Attach File
	Plugin URI: http://www.brunoserrao.com/woocommerce-attach-file
	Description: Attach a file in to a single product
	Version: 1.0.0
	Author: Bruno Serrao
	Author URI: http://www.brunoserrao.com
	License: GPL3
*/ 
class woocommerce_attach_demo_file {
	private $post_type = 'agenda';
	private $post_category = 'local';

	public function __construct() {
		add_action( 'admin_init', array($this, 'add_events_metaboxes'), 0 );
		add_action( 'save_post', array( $this, 'save_meta_boxes' ), 1, 2 );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_plugin_scripts' ),1, 3 );
	}


	/**
	 * Init Meta Box
	 *
	 * @param  int $post_id
	 * @param  object $post
	 */
	public function add_events_metaboxes(){
		add_meta_box( 'woocommerce_attach_file_form_html', __( 'Arquivo de Exemplo' ), array($this, 'woocommerce_attach_file_form_html'), 'product', 'normal', 'default');
	}

	/**
	 * Render Meta Box
	 *
	 */
	public function woocommerce_attach_file_form_html() {
		$woocommerce_attach_upload_file = get_post_meta($post->ID, 'woocommerce_attach_upload_file', true);

		echo '<div class="woocomemrce-attach-upload-file">';
			echo '<div id="wp-content-media-buttons" class="wp-media-buttons"><button type="button" id="insert-media-button" class="button add_media woocommerce_attach_upload_file_button" data-editor="content"><span class="wp-media-buttons-icon"></span>'. __('Add Media') .'</button></div>';
			echo '<input type="text" id="woocommerce_attach_upload_file" class="input-url" name="woocommerce_attach_upload_file" value="' . $woocommerce_attach_upload_file  . '"/>';
		echo '</div>';
	}


	/**
	 * Check if we're saving, the trigger an action based on the post type.
	 *
	 * @param  int $post_id
	 * @param  object $post
	 */
	public function save_meta_boxes( $post_id, $post ) {
		$woocommerce_attach_upload_file = sanitize_text_field($_POST['woocommerce_attach_upload_file']);

		if(get_post_meta($post->ID, 'woocommerce_attach_upload_file', false)) {
			update_post_meta($post->ID, 'woocommerce_attach_upload_file', $woocommerce_attach_upload_file);
		} else {
			add_post_meta($post->ID, 'woocommerce_attach_upload_file', $woocommerce_attach_upload_file);
		}

		if(!$woocommerce_attach_upload_file){
			delete_post_meta($post->ID, 'woocommerce_attach_upload_file'); 
		}
	}



	/** 
	* Criar Scripts css e js
	*
	* @param null
	* @return null
	*/	
	public function enqueue_plugin_scripts(){
		wp_enqueue_script( 'agenda-plugin-local-js', plugins_url('js/scripts.js', __FILE__ ), array('jquery'), false, true );
		wp_enqueue_style(  'agenda-plugin-local-css',  plugins_url('css/styles.css', __FILE__ ) );
	}
}

new woocommerce_attach_demo_file();