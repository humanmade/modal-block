/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

const TEMPLATE = [
	[ 'core/paragraph', { placeholder: 'Add trigger content (button, image, etc.)...', className: 'modal-trigger' } ],
	[ 'hm/modal-content' ]
];

export default function Edit() {
	const blockProps = useBlockProps( {
		className: 'hm-modal-trigger',
	} );

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		template: TEMPLATE,
		templateLock: false,
	} );

	return <div { ...innerBlocksProps } />;
}
