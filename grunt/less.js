module.exports = {
    dev: {
        options: {
            sourceMap: true,
            sourceMapRootpath: '../'
        },
        files: {
            '<%= buildPath %>/css/styles.css': ['<%= srcPath %>/less/styles.less']
        }
    },
    dist: {
        options: {
            sourceMap: false,
            compress: true,
            cleancss: true
        },
        files: {
            '<%= buildPath %>/css/styles.css': ['<%= srcPath %>/less/styles.less']
        }
    }
}