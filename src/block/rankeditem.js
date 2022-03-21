import { registerBlockType } from '@wordpress/blocks';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InnerBlocks } = wp.blockEditor;
const { Fragment } = wp.element;

registerBlockType('lez-library/rankeditem', {
	title: __('Ranked Item', 'listicles'),
	parent: ['lez-library/listicles'],
	icon: 'editor-rtl',
	category: 'layout',

	description: __('An individual ranked item.', 'listicles'),

	edit: function (props) {
		const { className, clientId } = props;

		/**
		 * Add Item
		 */
		const onRemoveItem = () => {
			setAttributes({ items: parseInt(`${items}`) - 1 });
			removeBlock(clientId);
		};

		return (
			<div className={`${className} listicles-innerblocks`}>
				<InnerBlocks
					template={[
						['core/cover'],
						['lez-library/listdt'],
						['core/buttons'],
						['lez-library/listdd'],
					]}
					allowedBlocks={[
						['core/cover'],
						['lez-library/listdt'],
						['core/buttons'],
						['core/button'],
						['lez-library/listdd'],
					]}
				/>
			</div>
		);
	},

	save: function (props) {
		const {
			attributes: { className },
		} = props;
		return (
			<div className={className}>
				<InnerBlocks.Content />
			</div>
		);
	},
});
