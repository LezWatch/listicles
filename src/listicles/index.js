/**
 * The Listicles container block.
 *
 * Holds an ordered set of `lez-library/listitem` children and owns the
 * CSS counter that numbers them (forwards or in reverse).
 */

import { registerBlockType, createBlock } from '@wordpress/blocks';
import { useEffect, useMemo } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import { ToggleControl, PanelBody, Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import { updateListicleCount } from '../components/update-count';

import './style.scss'; // Front and back end CSS
import './editor.scss'; // Editor only CSS

const ITEM_BLOCK = 'lez-library/listitem';

/**
 * Work out the wrapper class and counter seed for a given item count.
 *
 * A reversed list counts down, so the counter has to start one above the
 * number of items and decrement on each `dt`.
 *
 * @param {number}  items    Number of list items.
 * @param {boolean} reversed Whether the list runs high to low.
 */
function getCounterSetup( items, reversed ) {
	return {
		reversai: reversed ? 'reversed' : '',
		counter: reversed ? parseInt( `${ items }` ) + 1 : 0,
	};
}

function Edit( { attributes, setAttributes, clientId } ) {
	const { items, reversed } = attributes;
	const { insertBlock } = useDispatch( 'core/block-editor' );

	useEffect( () => updateListicleCount( clientId ), [ clientId ] );

	const { reversai, counter } = getCounterSetup( items, reversed );

	// A stable template identity keeps InnerBlocks from re-syncing on every
	// render; it only needs to change when the item count does.
	const template = useMemo(
		() => Array.from( { length: items }, () => [ ITEM_BLOCK ] ),
		[ items ]
	);

	const blockProps = useBlockProps( {
		className: `${ reversai } listicle items-${ items }`,
		style: { counterReset: `listicle-counter ${ counter }` },
	} );

	const onAddItem = () => {
		insertBlock( createBlock( ITEM_BLOCK ), items, clientId );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Listicle Settings', 'listicles' ) }>
					<ToggleControl
						label={ __( 'Reversed', 'listicles' ) }
						help={ ( checked ) =>
							checked
								? __( 'Reversed order (10 – 1)', 'listicles' )
								: __( 'Numerical order (1 – 10)', 'listicles' )
						}
						checked={ reversed }
						onChange={ () =>
							setAttributes( { reversed: ! reversed } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<dl { ...blockProps }>
				<InnerBlocks
					template={ template }
					allowedBlocks={ [ ITEM_BLOCK ] }
					defaultBlock={ { name: ITEM_BLOCK } }
					directInsert
				/>
				<div className="listicles-buttons">
					<Button
						icon="insert"
						onClick={ onAddItem }
						className="editor-inserter__toggle"
					>
						{ __( 'Add List Item', 'listicles' ) }
					</Button>
					<Button
						icon="controls-repeat"
						onClick={ () =>
							setAttributes( { reversed: ! reversed } )
						}
						className="editor-inserter__toggle"
					>
						{ __( 'Toggle List Order', 'listicles' ) }
					</Button>
				</div>
			</dl>
		</>
	);
}

function save( { attributes } ) {
	const { items, reversed } = attributes;
	const { reversai, counter } = getCounterSetup( items, reversed );

	const blockProps = useBlockProps.save( {
		className: `${ reversai } listicle items-${ items }`,
		style: { counterReset: `listicle-counter ${ counter }` },
	} );

	return (
		<dl { ...blockProps }>
			<InnerBlocks.Content />
		</dl>
	);
}

/**
 * v1 (apiVersion 1) interpolated `attributes.className` straight into the class
 * list, so posts saved before this release carry a literal `undefined` class
 * token. Block validation compares class lists as sets, so that stray token has
 * to be reproduced here or existing listicles fail to validate.
 */
const v1 = {
	attributes: metadata.attributes,
	save( { attributes } ) {
		const { className, items, reversed } = attributes;
		const { reversai, counter } = getCounterSetup( items, reversed );

		return (
			<dl
				className={ `${ className } ${ reversai } listicle items-${ items }` }
				style={ { counterReset: `listicle-counter ${ counter }` } }
			>
				<InnerBlocks.Content />
			</dl>
		);
	},
};

registerBlockType( metadata, {
	edit: Edit,
	save,
	deprecated: [ v1 ],
} );
