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

import { PanelBody, RangeControl } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit({ attributes: { columnStart, columnEnd }, setAttributes }) {	
	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Alignment')}
				>
					<RangeControl
						label={__('Column start', 'captain')}
						value={columnStart}
						onChange={(columnStart) => setAttributes({columnStart })}
						min={1}
						max={13}
						initialPosition={1}
						/>
					<RangeControl
						label={__('Column end', 'captain')}
						value={columnEnd}
						onChange={(columnEnd) => setAttributes({columnEnd })}
						min={1}
						max={13}
						initialPosition={13}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps({
				className: `col-start-1 col-end-13 lg:col-start-${columnStart} lg:col-end-${columnEnd}`
			})}>
				<InnerBlocks />
			</div>
		</>
	);
}
