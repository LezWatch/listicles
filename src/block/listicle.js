import { registerBlockType } from '@wordpress/blocks';

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
const { dispatch } = wp.data;

/**
 * Some defaults
 */
const getItemsTemplate = memoize( ( items ) => {
	return times( items, () => [ 'lez-library/listitem' ] );
} );

/**
 * Internal dependencies
 */
import './style.scss';
import './editor.scss';

registerBlockType( 'lez-library/listicles', {

	title: __( 'Listicle', 'listicles' ),
	icon: 'excerpt-view',
	category: 'layout',
	attributes: {
		items: {
			type: 'number',
			default: 2,
		},
		reversed: {
			type: 'boolean',
			default: false
		}
	},
	description: __( 'A block for listicles. You can add items, remove them, and flip them in reverse.', 'listicles' ),

	edit: props => {

		const { attributes: { placeholder },
			 className, setAttributes, clientId } = props;
		const { items, reversed } = props.attributes;

		let reversai = '';
		let counter = '0';
		if ( reversed ) {
			reversai = 'reversed';
			counter = parseInt(`${ items }`)+1;
		}

		/**
		 * Add Item
		 */
		const onAddItem = () => {
			setAttributes( { items: parseInt(`${ items }`)+1 } )
			const block = wp.blocks.createBlock( 'lez-library/listitem' )
			wp.data.dispatch( 'core/block-editor' ).insertBlock( block, items, clientId )
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Listicle Settings', 'listicles' ) }>
						<ToggleControl
							label={ 'Reversed' }
							help={ ( checked ) => checked ? __( 'Reversed order (10 - 1)', 'listicles' ) : __( 'Numerical order (1 - 10)', 'listicles' ) }
							checked={ props.attributes.reversed }
							onChange={ () => props.setAttributes( { reversed: ! props.attributes.reversed } ) }
						/>
					</PanelBody>
				</InspectorControls>
				<dl
					className={ `${ className } ${ reversai } listicle items-${ items }` }
					style={ { counterReset: `listicle-counter ${ counter }` } }
				>
					<InnerBlocks
						template={ getItemsTemplate( items ) }
						allowedBlocks={ [
							[ 'lez-library/listitem' ]
						] }
						defaultBlock={ 'lez-library/listitem' }
					/>
					<div className='listicles-buttons'>
						<Button
							icon='insert'
							onClick={ onAddItem }
							className='editor-inserter__toggle'
						>Add List Item</Button>
						<Button
							icon='controls-repeat'
							onClick={ () => setAttributes( { reversed: ! reversed } ) }
							className='editor-inserter__toggle'
						>Toggle List Order</Button>
					</div>
				</dl>
			</Fragment>
		);
	},

	save: props => {
		const { attributes: { className } } = props;
		const { items, reversed } = props.attributes;

		let reversai = '';
		let counter = 0;
		if ( reversed ) {
			reversai = 'reversed';
			counter = parseInt(`${ items }`)+1;
		}

		return (
			<dl
				className={ `${ className } ${ reversai } listicle items-${ items }` }
				style={ { counterReset: `listicle-counter ${ counter }` } }
			>
				<InnerBlocks.Content />
			</dl>
		);
	},

} );
