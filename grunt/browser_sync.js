module.exports = {
    bsFiles: {
        src : '<%= buildPath %>/**/*'
    },
    options: {
        watchTask: true,
        server: {
            baseDir: '<%= buildPath %>/'
        }
    }
}
