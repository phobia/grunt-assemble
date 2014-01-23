module.exports = function(grunt) {

    grunt.initConfig({
        srcPath: 'src',
        buildPath: 'build',
        // ASSEMBLE
        assemble: {
          options: {
            assets: 'assets',
            plugins: ['permalinks'],
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
        //LESS
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
        clean: {
          all: ['<%= buildPath %>/**'],
          html: ['<%= buildPath %>/**/*.html']
        },
        copy: {
          main: {
            files: [
              // includes files within path
              {
                expand: true,
                cwd: '<%= srcPath %>/js/',
                src: ['**'],
                dest: '<%= buildPath %>/js/',
              },
              {
                expand: true,
                cwd: '<%= srcPath %>/img/',
                src: ['**'],
                dest: '<%= buildPath %>/img/',
              }
            ]
          }
        },
        watch: {
          options: {
            livereload: true,
            spawn: false
          },
          scripts: {
            files: ['<%= srcPath %>/js/**/*.js'],
            tasks: ['copy']
          },
          styles: {
            files: ['<%= srcPath %>/less/**/*.less'],
            tasks: ['less:dev']
          },
          templates: {
            files: [
              '<%= srcPath %>/partials/**/*.html',
              '<%= srcPath %>/layouts/**/*.html',
              '<%= srcPath %>/*.html'
            ],
            tasks: ['clean:html', 'assemble']
          },
        },
        connect: {
          server: {
            options: {
              port: 8000,
              livereload: true,
              base: '<%= buildPath %>/',
              // middleware: function (connect) {
              //   return [
              //     require('connect-livereload')(), // <--- here
              //     checkForDownload,
              //     mountFolder(connect, '.tmp'),
              //     mountFolder(connect, 'app')
              //   ];
              // }
            }
          }
        }
    });

    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('assemble-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('dev', ['clean', 'assemble', 'less:dev', 'copy', 'connect', 'watch']);

};
