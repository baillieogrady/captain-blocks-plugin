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
import { ToolbarGroup, ToolbarButton, Popover} from '@wordpress/components';

import { useBlockProps, InnerBlocks, BlockControls } from '@wordpress/block-editor';

import { useState } from '@wordpress/element';

import { Icon, link } from '@wordpress/icons';

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

export default function Edit({ setAttributes, attributes }) {
	
	const { label, url, target, rel } = attributes;

	const [isVisible, setIsVisible] = useState(false);

	const handlePopover = () => {
		setIsVisible((state) => !state);
	};
	
	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						name="link"
						icon={<Icon icon={link} />}
						title={__('Link', 'captainblocks')}
						onClick={ handlePopover }
					/>
				</ToolbarGroup>
			</BlockControls>
			{isVisible && (
				<Popover>
					Popover is toggled!
				</Popover>
			)}
			<div {...useBlockProps()}>
				<InnerBlocks />
			</div>
		</>
		
	);
}