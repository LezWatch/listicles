/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */

import './block/listicle.js';    // Main Listicle (the dl)
import './block/listitem.js';    // List Items (includes dt and dd)
import './block/listdt.js';      // The title of the item
import './block/listdd.js';      // Free text!
