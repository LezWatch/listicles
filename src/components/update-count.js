import { select, dispatch } from '@wordpress/data';

/**
 * Sync a listicle's stored `items` attribute with its live child count.
 *
 * The comparison has to be stored-attribute vs. live-count. Comparing
 * `getBlockCount()` against `getBlock().innerBlocks.length` — as this used to —
 * compares a number with itself, because both are projections of
 * `state.blocks.order`, so the update never fired.
 *
 * @param {string} clientId Client ID of the Listicles container block.
 */
export function updateListicleCount( clientId ) {
	const store = select( 'core/block-editor' );

	const storedItems = store.getBlockAttributes( clientId )?.items;
	const childCount = store.getBlockCount( clientId );

	// A count of 0 shows up during mount and while the block is being removed.
	// Writing it back would wipe the InnerBlocks template, so leave it alone.
	if ( childCount > 0 && storedItems !== childCount ) {
		dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, {
			items: childCount,
		} );
	}
}
