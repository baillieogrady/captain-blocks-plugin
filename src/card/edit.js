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
import { useBlockProps, MediaReplaceFlow, BlockControls, InnerBlocks } from '@wordpress/block-editor';

import placeholder from './placeholder.svg';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */


let TEMPLATE = [
	['core/paragraph', { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tincidunt elit. Morbi at libero sit amet dolor commodo imperdiet.' }],
];

let ALLOWED_BLOCKS = ['core/paragraph'];

export default function Edit({ attributes: { url }, setAttributes }) {

	const onSelectImage = (imageObject) => {
		setAttributes({ url: imageObject.sizes.card.url });
	};

	return (
		<>
			<BlockControls group="other">
				<MediaReplaceFlow
					mediaURL={url || placeholder}
					allowedTypes={['image']}
					onSelect={onSelectImage}
					accept="image/*"
					name={url.length != 0 ? 'Replace' : 'Add image'}
				/>
			</BlockControls>
			<div {...useBlockProps()}>
				<figure>
					<img src={url || placeholder} alt="" className={url.length != 0 ? 'mb-2 lg:mb-4' : ''} />
					<figcaption className='lg:w-7/12'>
						<InnerBlocks
							template={TEMPLATE}
							allowedBlocks={ALLOWED_BLOCKS}
						/>
					</figcaption>
				</figure>
			</div>
		</>
	);
}