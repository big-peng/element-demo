module.exports = {
    //axios域代理，解决axios跨域问题
    baseUrl: '/',
    devServer: {
        proxy: {
            '': {
                target: 'http://localhost:8999',
                changeOrigin: true,
                ws: true,
                pathRewrite: {

                }
            }
        }
    }
}