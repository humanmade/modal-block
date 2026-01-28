<?php
/**
 * Modal Content Block Template
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 */
?>
<div <?php echo get_block_wrapper_attributes( array( 'class' => 'modal-content', 'style' => 'display: none;' ) ); ?>>
	<div class="modal-dialog">
		<button class="modal-close" aria-label="<?php esc_attr_e( 'Close modal', 'hm-modal' ); ?>"></button>
		<div class="modal-body">
			<?php echo $content ?? ''; ?>
		</div>
	</div>
</div>
