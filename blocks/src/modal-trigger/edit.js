/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

const TEMPLATE = [ [ 'hm/modal-content' ] ];
const ALLOWED_BLOCKS = [ 'hm/modal-content' ];

export default function Edit() {
	const blockProps = useBlockProps( {
		className: 'hm-modal-trigger',
	} );

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		template: TEMPLATE,
		templateLock: 'all',
		allowedBlocks: ALLOWED_BLOCKS,
	} );

	return <div { ...innerBlocksProps } />;
}
