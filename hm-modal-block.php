<?php
/**
 * HM Modal Block Plugin.
 **
 * @link              https://humanmade.com
 * @since             1.0.0
 * @package           modal-block
 *
 * Plugin Name:       HM Modal Block
 * Plugin URI:        https://humanmade.com
 * Description:       Simple modal block for WordPress block editor.
 * Version:           1.0.0
 * Author:            Human Made Limited
 * Author URI:        https://humanmade.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       hm-modal
 * Domain Path:       /languages
 */

namespace HM_Modal_Block;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// Check if build files exist.
if ( ! is_readable( __DIR__ . '/build/modal-content/block.json' ) ) {
	trigger_error( 'Build files missing', E_USER_WARNING );
	return;
}

// Setup custom blocks.
add_action( 'init', function() {
	register_block_type( __DIR__ . '/build/modal-trigger' );
	register_block_type( __DIR__ . '/build/modal-content' );
} );

add_action( 'wp_enqueue_scripts', function() {
	wp_script_add_data( 'hm-modal-trigger-view-script', 'strategy', 'async' );
} );
