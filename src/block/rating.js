import { registerBlockType } from '@wordpress/blocks';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InnerBlocks, InspectorControls } = wp.blockEditor;
const { PanelBody, TextControl } = wp.components;
const { Fragment } = wp.element;

registerBlockType('lez-library/rating', {
	title: __('Ratings', 'listicles'),
	//parent: ["lez-library/listicles"],
	icon: 'star',
	category: 'layout',
	attributes: {
		rating: {
			type: 'number',
			default: 1,
		},
	},
	description: __('A block indicating a rating for a product.', 'listicles'),

	edit: function (props) {
		const { className, clientId } = props;
		const { rating } = props.attributes;
		console.log(rating);

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__('Settings', 'listicles')}>
						<TextControl
							label="Rating (1 - 10)"
							type="number"
							help={__(
								'Enter the sporked rating (between 1 and 10).',
								'listicles'
							)}
							value={rating}
							onChange={(rating) =>
								props.setAttributes({ rating })
							}
						/>
					</PanelBody>
				</InspectorControls>
				<div className={`${className}`}>
					<p>
						<span>Rating</span>
						<span>2/10</span>
						<span>Sporks</span>
					</p>
				</div>
			</Fragment>
		);
	},

	save: function (props) {
		const {
			attributes: { className, rating },
		} = props;
		return (
			<div className={`${className}`}>
				<p>
					<span>Rating</span>
					<span>2/10</span>
					<span>Sporks</span>
				</p>
			</div>
		);
	},
});
