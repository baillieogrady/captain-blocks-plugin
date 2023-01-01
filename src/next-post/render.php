<?php
	$link = get_next_post_link( '%link', '' );

	if(strlen($link) > 0) {
		$heading = get_next_post_link( '%link', '%title' );
	} else {
		// if no next post, link to the oldest post
		$args = array(
			'offset'           => 0,
			'category'         => '',
			'category_name'    => '',
			'orderby'          => 'ASC',
			'order'            => 'ASC',
			'include'          => '',
			'exclude'          => '',
			'meta_key'         => '',
			'meta_value'       => '',
			'post_type'        => 'post',
			'post_mime_type'   => '',
			'post_parent'      => '',
			'post_status'      => 'publish',
			'suppress_filters' => true 
		);

		$latest = get_posts($args);

		$title = get_the_title($latest[0]->ID);
		$permalink = get_the_permalink($latest[0]->ID);

		$heading = '<a href="' . $permalink . '" rel="next">' . $title . '</a>';
		$link = '<a href="' . $permalink . '" rel="next"></a>';
	}
?>

<div <?= get_block_wrapper_attributes()?>>
	<div class="py-40 lg:py-0 lg:h-screen flex flex-col justify-center items-center relative text-center">
		<?php if ($attributes["cursor"]): ?>
			<div class="wp-block-captain-next-post__link">
				<?= $link; ?>
			</div>
		<?php endif; ?>
		<?php if(strlen($attributes["label"]) > 0): ?>
			<p class="text-xs lg:text-sm mb-2"><?= $attributes["label"]; ?></p>
		<?php endif; ?>
		<h2 class="mb-6 md:mb-8 text-center underline lg:no-underline"><?= $heading ?></h2>
	</div>
</div>