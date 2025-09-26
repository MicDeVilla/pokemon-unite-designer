module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'https://cdn.statically.io/gh/MicDeVilla/pokemon-unite-designer/tree/master/docs' : '/',
  devServer: {
    host: '127.0.0.1',
  }
}
