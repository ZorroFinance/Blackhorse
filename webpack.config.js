module.exports = {
    // other config options...
    module: {
      rules: [
        // other rules...
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: true
              }
            }
          ]
        }
      ]
    }
  }  