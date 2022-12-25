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
import { useBlockProps, useInnerBlocksProps, InnerBlocks } from '@wordpress/block-editor';

const TEMPLATE = [
	['captain/grid-item', {}],
];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit() {
	const blockProps = useBlockProps({});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: TEMPLATE,
		allowedBlocks: ['captain/grid-item'],
	});

	return (
		<div { ...blockProps}>
			<div className="grid grid-cols-12 gap-x-5">
				{innerBlocksProps.children}
			</div>
		</div>
	);
}
