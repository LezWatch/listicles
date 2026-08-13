/**
 * A single listicle entry: a locked title (`listdt`) + content (`listdd`) pair.
 */

import { registerBlockType } from '@wordpress/blocks';
import { useEffect } from '@wordpress/element';
import { select } from '@wordpress/data';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import { updateListicleCount } from '../components/update-count';

const TEMPLATE = [ [ 'lez-library/listdt' ], [ 'lez-library/listdd' ] ];

function Edit( { clientId } ) {
	const blockProps = useBlockProps( { className: 'listicles-innerblocks' } );

	useEffect( () => {
		const parentClientId =
			select( 'core/block-editor' ).getBlockHierarchyRootClientId(
				clientId
			);

		updateListicleCount( parentClientId );
		return () => updateListicleCount( parentClientId );
	}, [ clientId ] );

	return (
		<div { ...blockProps }>
			<InnerBlocks template={ TEMPLATE } templateLock="all" />
		</div>
	);
}

registerBlockType( metadata, {
	edit: Edit,

	// No wrapper element, so there is nothing for useBlockProps.save() to
	// attach to. Saved markup is unchanged from v1.
	save: () => <InnerBlocks.Content />,
} );
