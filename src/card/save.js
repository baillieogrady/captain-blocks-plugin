/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import placeholder from './placeholder.svg';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then se	rialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes: { url }}) {
	return (
		<div { ...useBlockProps.save() }>
			<figure>
				<img src={url || placeholder} alt="" className={url.length != 0 ? 'border-2 border-black mb-4' : ''} />
				<figcaption className='lg:w-7/12'>
					<InnerBlocks.Content />
				</figcaption>
			</figure>
		</div>
	);
}
