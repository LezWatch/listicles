import { registerBlockType } from '@wordpress/blocks';
import { useEffect } from 'react';
import { updateListicleCount } from './listicle';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InnerBlocks } = wp.blockEditor;
const { Fragment } = wp.element;
const { select } = wp.data;

registerBlockType( 'lez-library/listitem', {
	title: __( 'List Item', 'listicles' ),
	parent: [ 'lez-library/listicles' ],
	icon: 'editor-rtl',
	category: 'layout',

	description: __( 'An individual list item.', 'listicles' ),

	edit: function( props ) {
		const { className, clientId } = props;

		useEffect(() => {
			const parentClientId =
				select('core/block-editor').getBlockParents(clientId);

			updateListicleCount(parentClientId);

			return () => updateListicleCount(parentClientId);
		}, [clientId]);

		return (
			<Fragment>
				<div className="listicles-innerblocks">
					<InnerBlocks
						template={[
							['lez-library/listdt'],
							['lez-library/listdd'],
						]}
						allowedBlocks={[
							['lez-library/listdt'],
							['lez-library/listdd'],
						]}
						templateLock={'all'}
					/>
				</div>
			</Fragment>
		);
	},

	save: function (props) {
		const { attributes: { className } } = props;
		return (
			<InnerBlocks.Content />
		);
	},
} );
