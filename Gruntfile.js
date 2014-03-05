module.exports = function(grunt) {

    require('time-grunt')(grunt);

    require('jit-grunt')(grunt);

    grunt.initConfig({
        srcPath: 'src',
        buildPath: 'build',

        // ASSEMBLE
        assemble: {
          options: {
            assets: 'assets',
            plugins: ['permalinks'],
            helpers: '<%= srcPath %>/helpers/helper-*.js',
            partials: ['<%= srcPath %>/partials/**/*.html'],
            layout: ['<%= srcPath %>/layouts/default.html'],
            data: ['<%= srcPath %>/data/*.{json,yml}']
          },
          pages: {
            expand: true,
            cwd: '<%= srcPath %>/pages/',
            src: ['*.html'],
            dest: '<%= buildPath %>/'
          }
        },

        // LESS
        less: {
          dev: {
            options: {
              sourceMap: true,
            },
            files: {
              '<%= buildPath %>/css/styles.css': ['<%= srcPath %>/less/styles.less']
            }
          },
          prod: {
            options: {
              sourceMap: false,
              compress: true,
            },
            files: {
              '<%= buildPath %>/css/styles.css': ['<%= srcPath %>/less/styles.less']
            }
          }
        },

        // CLEAN
        clean: {
          all: ['<%= buildPath %>/**'],
          html: ['<%= buildPath %>/**/*.html']
        },

        // COPY
        copy: {
          scripts: {
            expand: true,
            cwd: '<%= srcPath %>/js/',
            src: ['**'],
            dest: '<%= buildPath %>/js/'
          },
          images: {
            expand: true,
            cwd: '<%= srcPath %>/img/',
            src: ['**'],
            dest: '<%= buildPath %>/img/',
          }
        },

        // WATCH
        watch: {
          options: {
            livereload: true,
            spawn: false
          },
          scripts: {
            files: ['<%= srcPath %>/js/**/*.js'],
            tasks: ['copy:scripts']
          },
          images: {
            files: ['<%= srcPath %>/img/**/*'],
            tasks: ['copy:images']
          },
          styles: {
            files: ['<%= srcPath %>/less/**/*.less'],
            tasks: ['less:dev']
          },
          templates: {
            files: [
              '<%= srcPath %>/data/**/*.{json,yml}',
              '<%= srcPath %>/partials/**/*.html',
              '<%= srcPath %>/layouts/**/*.html',
              '<%= srcPath %>/pages/*.html'
            ],
            tasks: ['clean:html', 'assemble']
          },
        },

        // BROWSER SYNC
        browser_sync: {
          bsFiles: {
              src : '<%= buildPath %>/**/*'
          },
          options: {
              watchTask: true,
              open: true,
              server: {
                baseDir: '<%= buildPath %>/'
              }
          }
        }        
    });

    // Default task(s).
    grunt.registerTask('dev', ['clean', 'assemble', 'less:dev', 'copy', 'browser_sync', 'watch']);

};