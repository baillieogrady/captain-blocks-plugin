/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';

import { PanelBody, SelectControl } from '@wordpress/components';

const TEMPLATE = [
	['core/paragraph', { value: 'Enter side content...' }],
];


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit({ setAttributes, attributes }) {
	
	const blockProps = useBlockProps({
		className: `col-span-4 lg:col-span-7 ${attributes.align}`,
	});

	const onChangeAlign = (newAlignment) => {
		setAttributes({ align: newAlignment === undefined ? '' : newAlignment })
	}
	
	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody
					title={__('Alignment')}
				>
					<SelectControl
						label="Column"
						value={ attributes.align }
						options={ [
							{ label: 'Left', value: '' },
							{ label: 'Right', value: 'lg:col-start-6' },
						] }
						onChange={ ( newAlignment ) => onChangeAlign( newAlignment ) }
						// __nextHasNoMarginBottom
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks template={TEMPLATE} />
		</div>
	);
}
