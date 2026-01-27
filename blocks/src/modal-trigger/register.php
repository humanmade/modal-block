<?php
/**
 * Modal Trigger Block.
 */

namespace HM_Modal_Block\Blocks\Modal_Trigger;

function bootstrap() {
	add_action( 'init', __NAMESPACE__ . '\\register_block' );
	add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\enqueue_scripts' );
}

function register_block() {
	register_block_type( plugin_dir_path( dirname( __FILE__, 4 ) ) . '/blocks/build/modal-trigger/block.json' );
}

function enqueue_scripts() {
	wp_script_add_data( 'hm-modal-trigger-view-script', 'strategy', 'async' );
}
