/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InnerBlocks } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;

registerBlockType( 'lez-library/listitem', {

	title: 'List Item',
	parent: [ 'lez-library/listicles' ],
	icon: 'editor-rtl',
	category: 'lezwatch',

	description: 'An individual list item.',

	edit: function( props ) {
		const { className, clientId } = props;

		/**
		 * Add Item
		 */
		const onRemoveItem = () => {
			setAttributes( { items: parseInt(`${ items }`)-1 } )
			const block = createBlock( 'lez-library/listitem' )
			dispatch( 'core/editor' ).removeBlock( block, items, clientId )
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
