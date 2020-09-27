const fs = require('fs-extra')
module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync('ssl/server.key'),
      cert: fs.readFileSync('ssl/server.crt')
    },
    proxy: {
      '/api': {
        target: 'https://rickandmortyapi.com',
        changeOrigin: true
      }
    }
  }
}
