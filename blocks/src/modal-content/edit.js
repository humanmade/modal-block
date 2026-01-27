/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

export default function Edit( { clientId } ) {
	// Check if parent modal block is selected
	const parentIsSelected = useSelect(
		( select ) => {
			const { getBlockParents, isBlockSelected, hasSelectedInnerBlock } =
				select( blockEditorStore );
			const parents = getBlockParents( clientId );
			const parentId = parents[ parents.length - 1 ];

			if ( ! parentId ) {
				return false;
			}

			return (
				isBlockSelected( parentId ) ||
				hasSelectedInnerBlock( parentId, true )
			);
		},
		[ clientId ]
	);

	const blockProps = useBlockProps( {
		className: 'modal-content',
		style: {
			display: parentIsSelected ? 'block' : 'none',
		},
	} );

	const innerBlocksProps = useInnerBlocksProps(
		{},
		{
			templateLock: false,
		}
	);

	return (
		<div { ...blockProps }>
			{ parentIsSelected && (
				<div className="modal-section-label">Modal Content:</div>
			) }
			<div className="modal-body">
				<div { ...innerBlocksProps } />
			</div>
		</div>
	);
}
