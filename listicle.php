<?php
/**
 * Plugin Name: Listicles by LezWatch.TV
 * Plugin URI: https://github.com/lezwatch/listicles
 * Description: Create listicle articles in posts.
 * Author: LezWatch.TV
 * Author URI: https://lezwatchtv.com
 * Version: 1.0.7
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Listicles_LWTV {

	public function __construct() {
		add_action( 'init', array( $this, 'check_requirements' ) );
	}

	/**
	 * Test requirements
	 * We need to meet them before we can run. If they kick back false, we deactivate.
	 */
	public function check_requirements() {
		if ( ! function_exists( 'register_block_type' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
			deactivate_plugins( __FILE__ );
			wp_die(
				__( 'Listicles requires WordPress 5.0 or higher, or for the Gutenberg plugin to be installed.', 'listicles' ),
				'Plugin Activation Error',
				array(
					'response'  => 200,
					'back_link' => true,
				)
			); // WPCS: xss ok.
		}

		// Else we can call the code.
		require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

	}
}

new Listicles_LWTV();
