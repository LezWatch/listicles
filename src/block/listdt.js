import { registerBlockType } from '@wordpress/blocks';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InnerBlocks, RichText } = wp.blockEditor;
const { Fragment } = wp.element;

registerBlockType('lez-library/listdt', {
	title: __('Listicle Item Title', 'listicles'),
	parent: ['lez-library/listitem'],
	icon: 'migrate',
	category: 'layout',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'dt',
			default: __('Title', 'listicles'),
		},
		placeholder: {
			type: 'string',
			default: __('Title', 'listicles'),
		},
	},
	description: __('An individual list item title.', 'listicles'),

	edit({ attributes, setAttributes, isSelected, className }) {
		const { content } = attributes;

		return (
			<Fragment>
				<RichText
					tagName="dt"
					className={className}
					value={content}
					allowedFormats={[
						'core/bold',
						'core/link',
						'core/italic',
						'core/strikethrough',
						'core/text-color',
						'yoast-seo/link',
					]}
					onChange={(content) => setAttributes({ content })}
				/>
			</Fragment>
		);
	},

	save({ attributes, className }) {
		const { content } = attributes;

		return (
			<RichText.Content
				tagName="dt"
				className={className}
				value={content}
			/>
		);
	},
});
