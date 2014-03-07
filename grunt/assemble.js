module.exports = {
    options: {
        assets: 'assets',
        plugins: ['permalinks'],
        helpers: '<%= srcPath %>/helpers/helper-*.js',
        partials: ['<%= srcPath %>/partials/**/*.html'],
        layout: ['<%= srcPath %>/layouts/default.html'],
        data: ['<%= srcPath %>/data/*.{json,yml}']
    },
    all: {
        expand: true,
        cwd: '<%= srcPath %>/pages/',
        src: ['*.html'],
        dest: '<%= buildPath %>/'
    }
}