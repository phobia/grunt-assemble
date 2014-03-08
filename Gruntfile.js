module.exports = function (grunt) {

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        config: {
            srcPath: 'src',
            buildPath: null, //set by build task to one of targetPath
            targetPath: {
                dev: 'tmp',
                dist: 'build'
            }
        }
    });

    grunt.registerTask('serve:dev', ['build:dev', 'symlink:source', 'browser_sync', 'watch']);
    grunt.registerTask('serve:dist', ['build:dist', 'connect']);

    /**
     * Build
     *
     * Usage:
     * grunt build:dev
     * grunt build:dist
     *
     */
    grunt.registerTask('build', function(target) {
        if (!target) {
            return grunt.warn('Build target must be specified: build:dev or build:dist.');
        }
        grunt.config('buildPath', grunt.config('targetPath.' + target));
        grunt.task.run(['clean', 'assemble', 'less:' + target, 'copy']);
    });


};