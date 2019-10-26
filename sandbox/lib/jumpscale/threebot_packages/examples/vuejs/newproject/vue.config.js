

module.exports = {

  // if you need to serve at `/`
  publicPath: process.env.dev === '1'
    ? '/vuejs'
    : '/',
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    public: '0.0.0.0:8080',
    disableHostCheck: true,
  },
}
