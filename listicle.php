<?php
/**
 * Plugin Name: Listicles by LezWatch.TV
 * Plugin URI: https://github.com/lezwatch/listicles
 * Description: Create listicle articles in posts.
 * Author: LezWatch.TV
 * Author URI: https://lezwatchtv.com
 * Version: 3.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register the blocks from their build-time metadata.
 *
 * Each block ships a block.json, which is what tells WordPress the title,
 * category, attributes and apiVersion, and which enqueues the editor script
 * and styles. Registering server side is also what gets the editor styles
 * into the iframed (apiVersion 3) editor.
 */
function listicles_register_blocks() {
	$blocks = array( 'listicles', 'listitem', 'listdt', 'listdd' );

	foreach ( $blocks as $block ) {
		register_block_type( __DIR__ . '/build/' . $block );
	}
}

add_action( 'init', 'listicles_register_blocks' );

/**
 * Make sure the LezWatch.TV block category exists.
 *
 * The main LezWatch.TV plugin normally registers this, but Listicles can run
 * standalone, and a block pointing at a category nobody registered gets its
 * category silently stripped by the editor.
 *
 * @param array $categories Registered block categories.
 */
function listicles_block_category( $categories ) {
	foreach ( $categories as $category ) {
		if ( 'lezwatch' === $category['slug'] ) {
			return $categories;
		}
	}

	$categories[] = array(
		'slug'  => 'lezwatch',
		'title' => __( 'LezWatch.TV Blocks', 'listicles' ),
		'icon'  => 'smiley',
	);

	return $categories;
}

add_filter( 'block_categories_all', 'listicles_block_category' );
