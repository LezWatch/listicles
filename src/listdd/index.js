/**
 * The content half of a listicle entry. Free-form inner blocks inside a `dd`.
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import metadata from './block.json';

const TEMPLATE = [ [ 'core/paragraph', { placeholder: 'List Content...' } ] ];

function Edit() {
	const blockProps = useBlockProps();

	return (
		<dd { ...blockProps }>
			<InnerBlocks template={ TEMPLATE } templateLock={ false } />
		</dd>
	);
}

registerBlockType( metadata, {
	edit: Edit,

	save: () => (
		<dd { ...useBlockProps.save() }>
			<InnerBlocks.Content />
		</dd>
	),
} );
