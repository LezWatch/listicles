/**
 * The title half of a listicle entry. Rendered as the `dt` that carries the
 * CSS counter set up by the parent Listicles block.
 */

import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import metadata from './block.json';

const ALLOWED_FORMATS = [
	'core/bold',
	'core/link',
	'core/italic',
	'core/strikethrough',
	'core/text-color',
	'yoast-seo/link',
];

function Edit( { attributes, setAttributes } ) {
	const { content, placeholder } = attributes;
	const blockProps = useBlockProps();

	return (
		<RichText
			tagName="dt"
			{ ...blockProps }
			value={ content }
			placeholder={ placeholder }
			allowedFormats={ ALLOWED_FORMATS }
			onChange={ ( newContent ) =>
				setAttributes( { content: newContent } )
			}
		/>
	);
}

registerBlockType( metadata, {
	edit: Edit,

	save: ( { attributes } ) => (
		<RichText.Content
			tagName="dt"
			{ ...useBlockProps.save() }
			value={ attributes.content }
		/>
	),
} );
