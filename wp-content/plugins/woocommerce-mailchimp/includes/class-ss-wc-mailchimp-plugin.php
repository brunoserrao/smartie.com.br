<?php 

/**
 * WooCommerce MailChimp plugin main class
 */
final class SS_WC_MailChimp_Plugin {

	private static $_instance;

	private static $version = '2.0.8';

	private static $text_domain = 'woocommerce-mailchimp';

	public static function version() {
		return self::$version;
		// $plugin_data = get_plugin_data( SS_WC_MAILCHIMP_FILE );
		// $plugin_version = $plugin_data['Version'];
		// return $plugin_version;
	}

	/**
	 * Singleton instance
	 *
	 * @return SS_WC_MailChimp_Plugin   SS_WC_MailChimp_Plugin object
	 */
	public static function get_instance() {

		if ( empty( self::$_instance ) ) {
			self::$_instance = new self;
		}

		return self::$_instance;
	}

	/**
	 * Constructor
	 *
	 * @access public
	 * @return void
	 */
	public function __construct() {

		$this->id         = 'mailchimp';
		$this->namespace  = 'ss_wc_' . $this->id;
		$this->label      = __( 'MailChimp', 'woocommerce-mailchimp' );

		$this->settings_url = admin_url( 'admin.php?page=wc-settings&tab=' . $this->id );

		$this->define_constants();

		$this->includes();

		$this->init();

		$this->add_hooks();

		do_action( 'ss_wc_mailchimp_loaded' );

		self::update();

	} //end function __construct

	/**
	 * Define Plugin Constants.
	 */
	private function define_constants() {
		
		global $woocommerce;

		$settings_url = admin_url( 'admin.php?page=woocommerce_settings&tab=integration&section=mailchimp' );

		if ( $woocommerce->version >= '2.1' ) {
			$settings_url = admin_url( 'admin.php?page=wc-settings&tab=integration&section=mailchimp' );
		}

		$this->define( 'SS_WC_MAILCHIMP_SETTINGS_URL', $this->settings_url );

		$this->define( 'SS_WC_MAILCHIMP_PLUGIN_VERSION', self::version() );

	}

	/**
	 * Define constant if not already set.
	 *
	 * @param  string $name
	 * @param  string|bool $value
	 */
	private function define( $name, $value ) {
		if ( ! defined( $name ) ) {
			define( $name, $value );
		}
	}

	/**
	 * Include required core plugin files
	 */
	public function includes() {

		if ( ! class_exists( 'SS_WC_MailChimp_Container' ) ) {
			require_once( 'class-ss-wc-mailchimp-container.php' );
		}

		if ( ! function_exists( 'ss_wc_mailchimp' ) ) {
			require_once( 'functions.php' );
		}

		require_once( 'lib/class-ss-system-info.php' );

		require_once( 'class-ss-wc-mailchimp-api.php' );

		require_once( 'class-ss-wc-mailchimp.php' );

		require_once( 'class-ss-wc-mailchimp-handler.php' );

	}

	/**
	 * Initialize the plugin
	 * @return void
	 */
	private function init() {

		if ( ! class_exists( 'WC_Integration' ) )
			return;
		
		global $ss_wc_mailchimp;

		/**
		 * @global SS_WC_MailChimp_Container $GLOBALS['ss_wc_mailchimp']
		 * @name $mc4wp
		 */
		$ss_wc_mailchimp = ss_wc_mailchimp();
		$ss_wc_mailchimp['mailchimp'] = 'ss_wc_mailchimp_get_mailchimp';
		$ss_wc_mailchimp['api'] = 'ss_wc_mailchimp_get_api';

		// Set up localization.
		$this->load_plugin_textdomain();

	}

	/**
	 * Load Localization files.
	 *
	 * Note: the first-loaded translation file overrides any following ones if the same translation is present.
	 *
	 * Locales found in:
	 *      - WP_LANG_DIR/woocommerce-mailchimp/woocommerce-mailchimp-LOCALE.mo
	 *      - WP_CONTENT_DIR/plugins/woocommerce-mailchimp/languages/woocommerce-mailchimp-LOCALE.mo
	 */
	public function load_plugin_textdomain() {
		$locale = apply_filters( 'plugin_locale', get_locale(), 'woocommerce-mailchimp' );

		load_textdomain( 'woocommerce-mailchimp', WP_LANG_DIR . '/woocommerce-mailchimp/woocommerce-mailchimp-' . $locale . '.mo' );
		load_plugin_textdomain( 'woocommerce-mailchimp', false, dirname( plugin_basename( SS_WC_MAILCHIMP_FILE ) ) . '/languages' );
	}

	/**
	 * Add plugin hooks
	 */
	private function add_hooks() {
		// Add the "Settings" links on the Plugins administration screen
		if ( is_admin() ) {
			add_filter( 'plugin_action_links_' . plugin_basename( SS_WC_MAILCHIMP_FILE ), array( $this, 'action_links' ) );
			add_filter( 'woocommerce_get_settings_pages', array( $this, 'add_mailchimp_settings' ) );

			add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts') );

		}

		SS_WC_MailChimp_Handler::get_instance();
	}

	/**
	 * Add Settings link to plugins list
	 *
	 * @param  array $links Plugin links
	 * @return array        Modified plugin links
	 */
	public function action_links( $links ) {
		$plugin_links = array(
			'<a href="' . SS_WC_MAILCHIMP_SETTINGS_URL . '">' . __( 'Settings', 'woocommerce-mailchimp' ) . '</a>',
		);

		return array_merge( $plugin_links, $links );
	}

	/**
	 * Add the MailChimp settings tab to WooCommerce
	 */
	function add_mailchimp_settings( $settings ) {

		$settings[] = require_once( 'class-ss-wc-settings-mailchimp.php' );

		return $settings;

	} //end function add_mailchimp_settings

	/**
     * Load scripts required for admin
     * 
     * @access public
     * @return void
     */
    public function enqueue_scripts() {

    	// Plugin scripts and styles
		wp_register_script( 'woocommerce-mailchimp-admin', SS_WC_MAILCHIMP_PLUGIN_URL . '/assets/js/woocommerce-mailchimp-admin.js', array( 'jquery' ), self::version() );
		wp_register_style( 'woocommerce-mailchimp', SS_WC_MAILCHIMP_PLUGIN_URL . '/assets/css/style.css', array(), self::version() );

		// Localize javascript messages
		$translation_array = array(
			'connecting_to_mailchimp' 		=> __( 'Connecting to MailChimp', 'woocommerce-mailchimp' ),
			'error_loading_lists' 			=> __( 'Error loading lists. Please check your api key.', 'woocommerce-mailchimp' ),
			'error_loading_groups' 			=> __( 'Error loading groups. Please check your MailChimp Interest Groups for the selected list.', 'woocommerce-mailchimp' ),
			'select_groups_placeholder'		=> __( 'Select one or more groups (optional)', 'woocommerce-mailchimp' ),
			'interest_groups_not_enabled' 	=> __( 'This list does not have interest groups enabled', 'woocommerce-mailchimp' ),
		);
		wp_localize_script( 'woocommerce-mailchimp-admin', 'SS_WC_MailChimp_Messages', $translation_array );

		// Scripts
		wp_enqueue_script( 'woocommerce-mailchimp-admin' );

		// Styles
		wp_enqueue_style( 'woocommerce-mailchimp' );

	} //end function enqueue_scripts

	public static function update() {
		require_once( 'class-ss-wc-mailchimp-migrator.php' );

		SS_WC_MailChimp_Migrator::migrate( self::version() );
	}

	/**
	 * Plugin activate function.
	 *
	 * @access public
	 * @static
	 * @param mixed $network_wide
	 * @return void
	 */
	public static function activate( $network_wide = false ) {

		self::update();

	} //end function activate

	/**
	 * Plugin deactivate function.
	 *
	 * @access public
	 * @static
	 * @param mixed $network_wide
	 * @return void
	 */
	public static function deactivate( $network_wide ) {

		

	} //end function deactivate

} //end final class SS_WC_MailChimp_Plugin