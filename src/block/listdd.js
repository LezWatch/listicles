import { registerBlockType } from '@wordpress/blocks';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InnerBlocks } = wp.blockEditor;
const { Fragment } = wp.element;

const ALLOWED_BLOCKS = [];

registerBlockType('lez-library/listdd', {
	title: __('List Item Content', 'listicles'),
	parent: ['lez-library/listitem'],
	icon: 'migrate',
	category: 'layout',
	description: __('A list item description (aka content).', 'listicles'),

	edit: function (props) {
		const { className } = props;

		return (
			<Fragment>
				<dd className={className}>
					<InnerBlocks
						template={[
							[
								'core/paragraph',
								{ placeholder: 'List Content...' },
							],
						]}
						//allowedBlocks={ ALLOWED_BLOCKS }
						templateLock={false} // This doesn't work as described.
					/>
				</dd>
			</Fragment>
		);
	},

	save: function (props) {
		const {
			attributes: { className },
		} = props;
		return (
			<dd className={className}>
				<InnerBlocks.Content />
			</dd>
		);
	},
});
