module.exports = {
      devServer: {
        proxy: {
          "/api": {
            target: "http://localhost:5000",
            ws: false,
            changeOrigin: true
          }
        }
      }
    };