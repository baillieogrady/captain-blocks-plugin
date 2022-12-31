/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then se	rialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

export default function save({ attributes : {content, level, border, button } }) {
	const TagName = 'h' + level;

	return (
		<div {...useBlockProps.save({
			className: `${border} flex justify-between items-center px-5 lg:px-8 sticky top-0 z-10 bg-grey py-4 lg:py-6`
		})}>
			<TagName>
				<RichText.Content value={content} />
			</TagName>
			{button && (
				<InnerBlocks.Content />
			)}
		</div>
	);
}
