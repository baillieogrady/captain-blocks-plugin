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

import { useBlockProps, BlockControls, RichText, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';

import { useState, useEffect } from '@wordpress/element';

import { Icon, link, linkOff } from '@wordpress/icons';

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

export default function Edit({ setAttributes, attributes, isSelected }) {

	const [isEditingURL, setIsEditingURL] = useState(false);

	const { text, url, target, rel } = attributes;

	const isURLSet = !!url;
	const opensInNewTab = target === '_blank';
	const NEW_TAB_REL = 'noreferrer noopener';


	const blockProps = useBlockProps({
		className: 'btn',
	});

	function setButtonText(newText) {
		// Remove anchor tags from button text content.
		setAttributes({ text: newText.replace(/<\/?a[^>]*>/g, '') });
	}

	function startEditing(event) {
		event.preventDefault();
		setIsEditingURL(true);
	}

	function onToggleOpenInNewTab(value) {
		const newLinkTarget = value ? '_blank' : undefined;
		
		// Learn
		let updatedRel = rel;
		if (newLinkTarget && !rel) {
			updatedRel = NEW_TAB_REL;
		} else if (!newLinkTarget && rel === NEW_TAB_REL) {
			updatedRel = undefined;
		}

		setAttributes({
			target: newLinkTarget,
			rel: updatedRel,
		});
	}

	function unlink() {
		setAttributes({
			url: undefined,
			target: undefined,
			rel: undefined,
		});
		setIsEditingURL(false);
	}

	useEffect(() => {
		if (!isSelected) {
			setIsEditingURL(false);
		}
	}, [isSelected]);
	
	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					{!isURLSet && (
						<ToolbarButton
							name="link"
							icon={<Icon icon={link} />}
							title={__('Link', 'captainblocks')}
							onClick={startEditing}
						/>
					)}
					{isURLSet && (
						<ToolbarButton
							name="link"
							icon={<Icon icon={linkOff} />}
							title={__('Unlink', 'captainblocks')}
							onClick={unlink}
							isActive={true}
						/>
					)}
				</ToolbarGroup>
			</BlockControls>
			{isSelected && (isEditingURL || isURLSet) && (
				<Popover>
					<LinkControl
						value={{ url, opensInNewTab }}
						// Learn
						onChange={({
							url: newURL = '',
							opensInNewTab: newOpensInNewTab,
						}) => {
							setAttributes({ url: newURL });

							if (opensInNewTab !== newOpensInNewTab) {
								onToggleOpenInNewTab(newOpensInNewTab);
							}
						}}
					/>
				</Popover>
			)}
			<RichText
				{...blockProps}
				value={text}
				tagName='div'
				placeholder={__('Add text...')}
				allowedFormats={[]}
				onChange={(value) => setButtonText(value)}
			/>
		</>
		
	);
}