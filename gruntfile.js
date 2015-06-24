/**
 * Grunt file for handling Less transpilation
 * @param grunt
 */
module.exports = function(grunt) {

    // Load Grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({
        //Grunt task configuration
        // Transpile our less code
        less: {
            /**
             * Transpiles each individual Less component.
             *   This isn't needed unless you want to see each component converted directly.
             **/
            components: {
                expand: true,
                src: 'src/css/less-component/**/*.less',
                ext: '.css'
            },
            /**
             * Minified grid to utilize
             */
            grid: {
                options: {
                    compress: true
                },
                files: {
                    'src/css/less-component/bootstrap-grid.min.css': 'src/css/less-component/bootstrap-grid.less'
                }
            },
            /**
             * Creates a finalized complete CSS for development.
             *   This brings in all the bootstrap components and generates one CSS file to work with.
             */
            main: {
                //Compress if you would like to
                //options: {
                //    compress: true
                //},
                files: {
                    'src/css/main.css': 'src/css/main.less'
                }
            }
        },

        //Live watching
        watch: {
            scripts: {
                files: [
                    'src/css/main.less'
                ],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Define the default task with array of Grunt tasks
    grunt.registerTask('default', ['less']);
};