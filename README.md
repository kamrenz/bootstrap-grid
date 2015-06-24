# bootstrap-grid
Who needs all of [Bootstrap](http://getbootstrap.com/)? A lot of times a project only needs its grid. Here is the grid available in CSS and Less.

## What is this?
Included is a breakdown of Bootstrap. The [Bootstrap mixins](https://github.com/twbs/bootstrap/tree/master/less/mixins) and [Bootstrap components](https://github.com/twbs/bootstrap/tree/master/less) have been extracted to simplify utilizing the Bootstrap grid.
 
## Transpiling Less
If you need to work with this in more depth the Less files are included along with a [Grunt file](http://gruntjs.com/). Running `grunt` from the a terminal will transpile all the Less files into CSS via [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less). 

Also included is a [Grunt watch](https://github.com/gruntjs/grunt-contrib-watch) task to make Less transpilation work on the fly. Running `grunt watch` from the a terminal will transpile all the Less files to CSS on the fly.

## Getting this to run
1) Install [NodeJS](https://nodejs.org/)
2) Run `npm start` from a terminal to get the application running on the web server
    * Packages need for this application will be installed (i.e. Express, Grunt, Bootstrap)
3) Globally install [grunt-cli](http://gruntjs.com/using-the-cli)
    * Type `npm install -g grunt-cli` from the terminal for installation
    * Now typing `grunt` from the terminal will run Grunt tasks