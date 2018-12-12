/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InnerBlocks } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;

registerBlockType( 'lez-library/listdd', {

	title: __( 'List Item Content', 'listicles' ),
	parent: [ 'lez-library/listitem' ],
	icon: 'migrate',
	category: 'layout',
	description: __( 'A list item description (aka content).', 'listicles' ),

	edit: function( props ) {
		const { className } = props;

		return (
			<Fragment>
				<dd className={ className }>
					<InnerBlocks
						templateLock={ false }
					/>
				</dd>
			</Fragment>
		);
	},

	save: function( props ) {
		const { attributes: { className } } = props;
		return (
			<dd className={ className }>
				<InnerBlocks.Content />
			</dd>
		);
	},
} );
