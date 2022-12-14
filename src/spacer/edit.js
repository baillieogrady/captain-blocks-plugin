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
import { useBlockProps } from '@wordpress/block-editor';

import { InspectorControls } from '@wordpress/block-editor'

import { SelectControl, PanelBody } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit({ attributes: { height }, setAttributes }) {
	function onChangeSelect(newValue) {
		setAttributes({ height: newValue });
	}

	return (
		<>
			<InspectorControls key="settings">
				<PanelBody title={__('Settings')}>
					<SelectControl
						label={__('Height')}
						value={height}
						options={[
							{ label: 'Small', value: 'h-22 lg:h-36' },
							{ label: 'Large', value: 'h-32 lg:h-64' },
						]}
						onChange={onChangeSelect}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps({
				className: `border-dashed border-y-[1px] border-black ${height} alignfull`
			}) }></div>
		</>
		
	);
}
