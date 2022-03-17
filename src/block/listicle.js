import { registerBlockType } from '@wordpress/blocks';
import { useEffect } from 'react';

/**
 * External dependencies
 */
import classnames from 'classnames';
import memoize from 'memize';
import times from 'lodash/times';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { createBlock, InnerBlocks, InspectorControls } = wp.blockEditor;
const { PanelBody, ToggleControl, RangeControl, Button } = wp.components;
const { select, dispatch } = wp.data;

/**
 * Update the count by checking the number of child blocks.
 *
 * @param clientId
 */
export function updateListicleCount(clientId) {
	const listicle = select('core/block-editor').getBlock(clientId);
	const { items } = select('core/block-editor').getBlockAttributes(clientId);

	const length = listicle?.innerBlocks?.length;
	if (length > 0 && items !== length) {
		dispatch('core/block-editor').updateBlockAttributes(clientId, {
			items: length,
		});
	}
}

/**
 * Some defaults
 */
const getItemsTemplate = memoize((items) => {
	return times(items, () => ['lez-library/listitem']);
});

/**
 * Internal dependencies
 */
import './style.scss';
import './editor.scss';

registerBlockType('lez-library/listicles', {
	title: __('Listicle', 'listicles'),
	icon: 'excerpt-view',
	category: 'layout',
	attributes: {
		items: {
			type: 'number',
			default: 2,
		},
		reversed: {
			type: 'boolean',
			default: false,
		},
		ranked: {
			type: 'boolean',
			default: false,
		},
	},
	description: __(
		'A block for listicles. You can add items, remove them, and flip them in reverse.',
		'listicles'
	),

	edit: (props) => {
		const {
			attributes: { placeholder },
			className,
			setAttributes,
			clientId,
		} = props;
		let { items, reversed, ranked } = props.attributes;

		useEffect(() => updateListicleCount(clientId), [clientId]);

		let reversai = '';
		let counter = '0';
		let itemBlock = ranked
			? 'lez-library/rankeditem'
			: 'lez-library/listitem';
		if (reversed) {
			reversai = 'reversed';
			counter = parseInt(`${items}`) + 1;
		}

		/**
		 * Add Item
		 */
		const onAddItem = () => {
			const block = wp.blocks.createBlock(itemBlock);
			wp.data
				.dispatch('core/block-editor')
				.insertBlock(block, items, clientId);
		};

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__('Listicle Settings', 'listicles')}>
						<ToggleControl
							label={'Ranked'}
							help={(checked) =>
								checked
									? __('Listicle is ranked.', 'listicles')
									: __('Listicle is default.', 'listicles')
							}
							checked={props.attributes.ranked}
							onChange={() =>
								props.setAttributes({
									ranked: !props.attributes.ranked,
								})
							}
						/>
						<ToggleControl
							label={'Reversed'}
							help={(checked) =>
								checked
									? __('Reversed order (10 - 1)', 'listicles')
									: __(
											'Numerical order (1 - 10)',
											'listicles'
									  )
							}
							checked={props.attributes.reversed}
							onChange={() =>
								props.setAttributes({
									reversed: !props.attributes.reversed,
								})
							}
						/>
					</PanelBody>
				</InspectorControls>
				<dl
					className={`${className} ${reversai} listicle items-${items} ${
						ranked ? 'ranked' : ''
					}`}
					style={{ counterReset: `listicle-counter ${counter}` }}
				>
					<InnerBlocks
						template={getItemsTemplate(items)}
						allowedBlocks={[['lez-library/listitem']]}
						defaultBlock={'lez-library/listitem'}
						renderAppender={false}
					/>
					<div className="listicles-buttons">
						<Button
							icon="insert"
							onClick={onAddItem}
							className="editor-inserter__toggle"
						>
							Add List Item
						</Button>
						<Button
							icon="controls-repeat"
							onClick={() =>
								setAttributes({ reversed: !reversed })
							}
							className="editor-inserter__toggle"
						>
							Toggle List Order
						</Button>
					</div>
				</dl>
			</Fragment>
		);
	},

	save: (props) => {
		const {
			attributes: { className },
		} = props;
		let { items, reversed } = props.attributes;

		let reversai = '';
		let counter = 0;
		if (reversed) {
			reversai = 'reversed';
			counter = parseInt(`${items}`) + 1;
		}

		return (
			<dl
				className={`${className} ${reversai} listicle items-${items}`}
				style={{ counterReset: `listicle-counter ${counter}` }}
			>
				<InnerBlocks.Content />
			</dl>
		);
	},
});
