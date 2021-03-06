import { registerBlockType } from '@wordpress/blocks';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InnerBlocks } = wp.blockEditor;
const { Fragment } = wp.element;

registerBlockType( 'lez-library/listitem', {

	title: __( 'List Item', 'listicles' ),
	parent: [ 'lez-library/listicles' ],
	icon: 'editor-rtl',
	category: 'layout',

	description: __( 'An individual list item.', 'listicles' ),

	edit: function( props ) {
		const { className, clientId } = props;

		/**
		 * Add Item
		 */
		const onRemoveItem = () => {
			setAttributes( { items: parseInt(`${ items }`)-1 } )
			removeBlock( clientId )
		}

		return (
			<Fragment>
				<div className='listicles-innerblocks' >
					<InnerBlocks
					template={ [
						[ 'lez-library/listdt' ],
						[ 'lez-library/listdd' ],
					] }
					allowedBlocks={ [
						[ 'lez-library/listdt' ], [ 'lez-library/listdd' ]
					] }
					templateLock={ 'all' }
					/>
				</div>
			</Fragment>
		);
	},

	save: function( props ) {
		const { attributes: { className } } = props;
		return (
			<InnerBlocks.Content />
		);
	},
} );
