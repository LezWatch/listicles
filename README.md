# Listicles by LezWatch.TV

Gutenberg Block for generating listicles.

## About This Project

The basic concept of Listicles is to generate lists of content in a correct HTML way using `<dl>` instead of `<ol>`. By taking advantage of CSS counters, we're able to automagically increment the content by adding more and more items to the list.

It was originally created for use on [LezWatch.TV](https://lezwatchtv.com).

* [WordPress.org Listing](https://wordpress.org/plugins/listicles)

## Development

This project is managed by [the official WordPress create-block tool](https://developer.wordpress.org/block-editor/handbook/tutorials/create-block/wp-plugin/)

Originally it used [Create Guten Block](https://github.com/ahmadawais/create-guten-block) but was ported over.

### Prerequisites

To use this project you will need Node.js and npm installed. If you don't already, please visit the [Node.js download page](https://nodejs.org/en/download/) and follow their directions.

### Installing

1. `git clone https://github.com/Ipstenu/listicles-gutenberg.git plugin-name`
2. `npm install`
3. `npm run build`

That will install and build the JS and CSS needed to run the plugin.

### Extending

The source code is located in `/src/` - that's where most (if not all) of your work will happen.

* `index.js` - The main listicle file
* `/js/listitem.js` - Individual list items (this is only usable inside the Listicles block)
* `/js/listdt.js` - The list title
* `/js/listdd.js` - The list content (this allows you to add as many sub blocks as you can)

The basic CSS can be found in `/src/css/`.

Once you've made your changes you'll rebuild the plugin using the following commands:

* `$ npm start` - Starts the build for development.
* `$ npm run build` - Builds the code for production.
* `$ npm run format` - Formats files.
* `$ npm run lint:css` - Lints CSS files.
* `$ npm run lint:js` - Lints JavaScript files.
* `$ npm run packages-update` - Updates WordPress packages to the latest version.

You may need to run `npm update` in order to update the libraries before you update the packages.

## Deployment

This plugin exists on WordPress.org so you can install it by searching for Listicles.

### Example Images

![Add To Post](plugin-assets/screenshot-01.jpg?raw=true "Add to post")

![A Brand New Listicle](plugin-assets/screenshot-02.jpg?raw=true "Example of a new listicle")

![A Listicle with Content](plugin-assets/screenshot-03.jpg?raw=true "A Listicle with Content")

![A Listicle Reversed](plugin-assets/screenshot-04.jpg?raw=true "A Listicle Reversed")

## License

This project is licensed under the GPLv2 (or Later) License - see the [LICENSE.md](LICENSE.md) file for details
