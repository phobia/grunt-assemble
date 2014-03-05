module.exports = {
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
    }
}