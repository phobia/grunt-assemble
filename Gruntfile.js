module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        config: {
            srcPath: 'src',
            buildPath: 'build'
        }
    });

    grunt.registerTask('dev', ['clean', 'assemble', 'less:dev', 'copy', 'browser_sync', 'watch']);

};