# Grunt + Assemble + Browser Sync base

Grunt project for building static web pages using simple templates that supports the use of partials and iterating over data structures such as JSON.

It's configured with a built in web server, live reload and browser sync, which offers synced navigation, scroll, click and form filling.

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

Step 1: Run the dev task, usually from the project root:

    grunt serve:dev

This should start the webserver and open the url in your default browser.

## Developing

All source code is found in the `src/` folder.

Templates are split into 3 parts, each as a subfolder of `src/`:

1. **Layouts** are the site foundation with html, head and body tags.
2. **Pages** are rendered into the layouts via `{{> body}}`, and results in actual html-pages. E.g. will src/pages/test.html result in build/test.html. 
3. **Partials** are for reusable fragments. E.g. will partials/teaser.html be usable within pages as `{{> teaser}}`.

The templating language currenly used is [Handlebars](http://handlebarsjs.com/).

Pages also accepts meta data in form of YFM. Example of setting page title:

    ---
    title: Front page
    ---

[More on built in variables and YFM](http://assemble.io/docs/Built-in-Variables.html).