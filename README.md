# Listicles by LezWatch.TV

Gutenberg Block for generating listicles.

## About This Project

The basic concept of Listicles is to generate lists of content in a correct HTML way using `<dl>` instead of `<ol>`. By taking advantage of CSS counters, we're able to automagically increment the content by adding more and more items to the list.

## Development

### Prerequisites

To use this project you will need Node.js and npm installed. If you don't already, please visit the [Node.js download page](https://nodejs.org/en/download/) and follow their directions.

### Installing

1. `git clone https://github.com/Ipstenu/listicles-gutenberg.git plugin-name`
2. `npm install`

### Extending

The source code is located in `/src/` - that's where most (if not all) of your work will happen.

* `blocks.js` - A list of all the separate JS files included
* `/block/listicle.js` - The main listicle file
* `/block/listitem.js` - Individual list items (this is only usable inside the Listicles block)
* `/block/listdt.js` - The list title
* `/block/listdd.js` - The list content (this allows you to add as many sub blocks as you can)

Once you've made your changes you'll rebuild the plugin using the [CREATE_GUTEN_BLOCK.md](Create Guten Block) commands. Ex:

* `npm start` - Use to compile and run the block in development mode.
* `npm run build` - Use to build production code for your block inside `dist` folder.

## Deployment

If you just want to use this as a plugin, you can install it as-is and have a blast. You can do the same with your fork.

### Example Images

![Add To Post](assets/screenshot-01.jpg?raw=true "Add to post")

![A Brand New Listicle](assets/screenshot-02.jpg?raw=true "Example of a new listicle")

![A Listicle with Content](assets/screenshot-03.jpg?raw=true "A Listicle with Content")

![A Listicle Reversed](assets/screenshot-04.jpg?raw=true "A Listicle Reversed")

## Built With

* [Create Guten Block](https://github.com/ahmadawais/create-guten-block) - The framework used

## License

This project is licensed under the GPLv2 (or Later) License - see the [LICENSE.md](LICENSE.md) file for details
