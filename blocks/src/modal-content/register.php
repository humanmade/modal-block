<?php
/**
 * Modal Content Block.
 */

namespace HM_Modal_Block\Blocks\Modal_Content;

function bootstrap() {
	add_action( 'init', __NAMESPACE__ . '\\register_block' );
}

function register_block() {
	register_block_type( plugin_dir_path( dirname( __FILE__, 3 ) ) . 'blocks/build/modal-content' );
}
