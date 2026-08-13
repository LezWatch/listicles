/**
 * Internal dependencies
 */
import { updateListicleCount } from '../update-count';

/**
 * Stand-in for the block-editor store.
 *
 * `innerBlocks` is deliberately derived from `childCount` because that is what
 * the real store does: `getBlock().innerBlocks` and `getBlockCount()` are both
 * projections of `state.blocks.order`, so they can never disagree.
 */
const mockStore = {
	blocks: {},
};

const mockUpdateBlockAttributes = jest.fn();

jest.mock( '@wordpress/data', () => ( {
	select: () => ( {
		getBlock: ( clientId ) => {
			const block = mockStore.blocks[ clientId ];
			if ( ! block ) {
				return null;
			}
			return {
				attributes: block.attributes,
				innerBlocks: new Array( block.childCount ).fill( {} ),
			};
		},
		getBlockAttributes: ( clientId ) =>
			mockStore.blocks[ clientId ]?.attributes ?? null,
		getBlockCount: ( clientId ) =>
			mockStore.blocks[ clientId ]?.childCount ?? 0,
	} ),
	dispatch: () => ( {
		updateBlockAttributes: mockUpdateBlockAttributes,
	} ),
} ) );

/**
 * Seed the mock store with a single listicle.
 *
 * @param {number} items      Value of the stored `items` attribute.
 * @param {number} childCount Number of live child blocks.
 */
function seedListicle( items, childCount ) {
	mockStore.blocks = {
		'listicle-1': { attributes: { items }, childCount },
	};
}

describe( 'updateListicleCount', () => {
	beforeEach( () => {
		mockUpdateBlockAttributes.mockClear();
	} );

	it( 'syncs the items attribute when a list item is added', () => {
		seedListicle( 2, 3 );

		updateListicleCount( 'listicle-1' );

		expect( mockUpdateBlockAttributes ).toHaveBeenCalledWith(
			'listicle-1',
			{ items: 3 }
		);
	} );

	it( 'syncs the items attribute when a list item is removed', () => {
		seedListicle( 5, 4 );

		updateListicleCount( 'listicle-1' );

		expect( mockUpdateBlockAttributes ).toHaveBeenCalledWith(
			'listicle-1',
			{ items: 4 }
		);
	} );

	it( 'does nothing when the stored count already matches', () => {
		seedListicle( 3, 3 );

		updateListicleCount( 'listicle-1' );

		expect( mockUpdateBlockAttributes ).not.toHaveBeenCalled();
	} );

	it( 'leaves the count alone while the block reports no children', () => {
		// Inner blocks read as empty during mount and while the block is being
		// removed. Writing 0 there would wipe the InnerBlocks template.
		seedListicle( 3, 0 );

		updateListicleCount( 'listicle-1' );

		expect( mockUpdateBlockAttributes ).not.toHaveBeenCalled();
	} );

	it( 'does nothing for a clientId that is not in the store', () => {
		mockStore.blocks = {};

		expect( () => updateListicleCount( 'nope' ) ).not.toThrow();
		expect( mockUpdateBlockAttributes ).not.toHaveBeenCalled();
	} );
} );
