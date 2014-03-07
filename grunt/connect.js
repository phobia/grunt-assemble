module.exports = {
    server: {
        options: {
            base: '<%= buildPath %>/',
            open: true,
            keepalive: true,
            useAvailablePort: true,
            port: 8080
        }
    }
}