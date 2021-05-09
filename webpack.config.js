const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    watch: true,
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.svg/,
        }]
    },
    plugins: [
        new SVGSpritemapPlugin('src/**/*.svg')
    ]
}