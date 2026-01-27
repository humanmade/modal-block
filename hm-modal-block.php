<?php
/**
 * HM Modal Block Plugin.
 **
 * @link              https://humanmade.com
 * @since             1.0.0
 * @package           hm-modal-block
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

require_once __DIR__ . '/blocks/src/modal-trigger/register.php';
require_once __DIR__ . '/blocks/src/modal-content/register.php';

// Setup custom blocks.
Blocks\Modal_Trigger\bootstrap();
Blocks\Modal_Content\bootstrap();
