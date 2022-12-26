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
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';

import { ToggleControl, PanelBody } from '@wordpress/components';

import './editor.css'

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes: { label, cursor }, setAttributes }) {
	return (
		<>
			<InspectorControls>
				<PanelBody title="Settings" initialOpen={false}>
					<ToggleControl
						label="Display cursor as an arrow"
						help="Transforms the default cursor into a circular arrow SVG when hovering over the block."
						checked={cursor}
						onChange={(cursor) => setAttributes({ cursor })}
					/>
				</PanelBody>
		</InspectorControls>
		<div {...useBlockProps({
				className: 'py-40 lg:py-0 lg:h-screen flex flex-col justify-center items-center relative text-center'
		})}>
			<RichText
				tagName="p"
				className="text-xs lg:text-sm mb-2"
				value={label}
				onChange={(label) => setAttributes({ label })}
			/>
			<h2 className="mb-6 md:mb-8 text-center">Next Post Title</h2>
		</div>
		</>
	);
}
