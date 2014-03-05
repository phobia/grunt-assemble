module.exports = {
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
