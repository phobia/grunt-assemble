module.exports = {
    dev: {
        options: {
            sourceMap: true
        },
        files: {
            '<%= buildPath %>/css/styles.css': ['<%= srcPath %>/less/styles.less']
        }
    },
    prod: {
        options: {
            sourceMap: false,
            compress: true
        },
        files: {
            '<%= buildPath %>/css/styles.css': ['<%= srcPath %>/less/styles.less']
        }
    }
}