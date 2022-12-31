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
import { useBlockProps, InnerBlocks, BlockControls, RichText, InspectorControls } from '@wordpress/block-editor';

import HeadingLevelDropdown from './heading-level-dropdown';

import { PanelBody, SelectControl, ToggleControl} from '@wordpress/components';


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

const ALLOWED_BLOCKS = [
	'captain/button',
]

const TEMPLATE = [
	['captain/button', { placeholder: 'Add text...' }],
]


export default function Edit({ attributes: { level, content, border, button }, setAttributes }) {
	const tagName = 'h' + level;

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
					<ToggleControl
						label="Display a top border"
						help="Adds a top border to the block."
						checked={border}
						onChange={(border) => setAttributes({ border })}
					/>
					<ToggleControl
						label="Display a button"
						help="Enables a button to be displayed on the right side of the heading."
						checked={button}
						onChange={(button) => setAttributes({ button })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps({
				className: `${border ? 'border-t border-black' : '' } flex justify-between items-center px-5 lg:px-8 py-4 lg:py-6`,
			})}>
				<RichText
					identifier="content"
					tagName={tagName}
					value={content}
					onChange={(value) => setAttributes({ content: value })}
					placeholder={'Add text...'}
					allowedFormats={[]}
					className={`sticky top-0 z-10 bg-grey`}
				/>
				{button && (
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
						template={TEMPLATE}
						renderAppender={false}
					/>
				)}
			</div>
		</>
	);
}
