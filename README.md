# Listicles by LezWatch.TV

Gutenberg Block for generating listicles.

## About This Project

The basic concept of Listicles is to generate lists of content in a correct HTML way using `<dl>` instead of `<ol>`. By taking advantage of CSS counters, we're able to automagically increment the content by adding more and more items to the list.

It was originally created for use on [LezWatch.TV](https://lezwatchtv.com).

* [WordPress.org Listing](https://wordpress.org/plugins/listicles)

## Development

This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

### Prerequisites

To use this project you will need Node.js and npm installed. If you don't already, please visit the [Node.js download page](https://nodejs.org/en/download/) and follow their directions.

### Installing

1. `git clone https://github.com/Ipstenu/listicles-gutenberg.git plugin-name`
2. `npm install`

This will install everything you need to build

### Extending

The source code is located in `/src/` - that's where most (if not all) of your work will happen.

* `blocks.js` - A list of all the separate JS files included
* `/block/listicle.js` - The main listicle file
* `/block/listitem.js` - Individual list items (this is only usable inside the Listicles block)
* `/block/listdt.js` - The list title
* `/block/listdd.js` - The list content (this allows you to add as many sub blocks as you can)

Once you've made your changes you'll rebuild the plugin using the following commands:

* `npm start` - Compile and run the block in development mode -- this runs continually as you save changes.
* `npm run build` - Build production code inside the `dist` folder.

## Deployment

This plugin exists on WordPress.org so you can install it by searching for Listicles.

### Example Images

![Add To Post](assets/screenshot-01.jpg?raw=true "Add to post")

![A Brand New Listicle](assets/screenshot-02.jpg?raw=true "Example of a new listicle")

![A Listicle with Content](assets/screenshot-03.jpg?raw=true "A Listicle with Content")

![A Listicle Reversed](assets/screenshot-04.jpg?raw=true "A Listicle Reversed")

## License

This project is licensed under the GPLv2 (or Later) License - see the [LICENSE.md](LICENSE.md) file for details
