import { registerBlockType } from '@wordpress/blocks';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { createElement, Fragment } from '@wordpress/element';

registerBlockType( 'lez-library/listdt', {
	title: __( 'Listicle Item Title', 'listicles' ),
	parent: [ 'lez-library/listitem' ],
	icon: 'migrate',
	category: 'layout',
	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'dt',
			default: __( 'Title', 'listicles' ),
		},
	},
	description: __( 'An individual list item title.', 'listicles' ),

	edit: function (props) {
		const { attributes: className, focus, setFocus } = props;
		const { content } = props.attributes;

		function onChangeTitle( newContent ) {
			props.setAttributes( { content: newContent } );
		}

		const editTitle = createElement(
			RichText,
			{
				tagName: 'dt',
				className: className,
				onChange: onChangeTitle,
				value: content,
				focus: focus,
				onFocus: setFocus,
			}
		);

		return (
			<Fragment>
				<dt className={className}>
					{ editTitle }
				</dt>
			</Fragment>
		);
	},

	save: function (props) {
		const { attributes: { className } } = props;
		const { content } = props.attributes;
		return (
			<Fragment>
			<dt className={className}>
				{ content }
			</dt>
			</Fragment>
		);
	},
});
