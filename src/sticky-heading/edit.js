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
import { useBlockProps, BlockControls, RichText, InspectorControls } from '@wordpress/block-editor';

import HeadingLevelDropdown from './heading-level-dropdown';

import { PanelBody, SelectControl } from '@wordpress/components';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.css';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes: { level, content, border }, setAttributes }) {
	const tagName = 'h' + level;

	function onChangeSelect(newValue) {
		setAttributes({ border: newValue });
	}

	return (
		<>
			<BlockControls group="block">
				<HeadingLevelDropdown
					selectedLevel={level}
					onChange={(newLevel) =>
						setAttributes({ level: newLevel })
					}
				/>
			</BlockControls>
			<InspectorControls key="settings">
				<PanelBody title={__('Settings')}>
					<SelectControl
						label={__('Top border')}
						value={border}
						options={[
							{ label: 'Yes', value: "border-t border-black" },
							{ label: 'No', value: "" },
						]}
						onChange={onChangeSelect}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps({
				className: border,
			})}>
				<RichText
					identifier="content"
					tagName={tagName}
					value={content}
					onChange={(value) => setAttributes({ content: value })}
					placeholder={'Sticky Heading'}
					allowedFormats={[]}
					className={`px-5 lg:px-8 sticky top-0 z-10 bg-grey py-4 lg:py-6`}
				/>
			</div>
		</>
	);
}
