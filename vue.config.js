module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://rickandmortyapi.com',
        changeOrigin: true
      }
    }
  }
}
