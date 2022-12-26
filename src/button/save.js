/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const { text, url, target, rel } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<RichText.Content
				tagName="a"
				className="border-2 border-black text-black lg:hover:border-blue lg:hover:text-blue hover:no-underline rounded-full inline-block py-2 px-4 lg:px-6 lg:text-xl"
				value={text}
				href={url}	
				target={target}
				rel={rel}
			/>
		</div>
	);
}
