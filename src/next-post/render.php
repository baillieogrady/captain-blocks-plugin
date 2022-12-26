<?php
	if($attributes["cursor"]){
		$link = get_next_post_link( '%link', '' );
	}
	
	$heading = get_next_post_link( '%link', '%title' );
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