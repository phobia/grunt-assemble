# Grunt + Assemble base

## Installing

### Prerequisites

* Node
* NPM
* Grunt-cli

### Project

After the prerequisits are in place, go to the root of this project and run

    npm install

The you should be ready to run:

## Running

1. Run the dev task, usually from the project root:

    grunt dev

2. Open the browser to the url stated at the end, e.g. "Started connect web server on http://localhost:62251".

## Developing

All source code is found in the `src/` folder.

Templates are split into 3 parts, each as a subfolder of `src/`:

1. **Layouts** are the site foundation with html, head and body tags.
2. **Pages** are rendered into the layouts via `{{> body}}`, and results in actual html-pages. E.g. will src/pages/test.html result in build/test.html. 
3. **Partials** are for reusable fragments. E.g. will partials/teaser.html be usable within pages as `{{> teaser}}`.

The templating language currenly used is (Handlebars)[http://handlebarsjs.com/].