const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const prod = process.env.NODE_ENV === 'production'

const extractHtml = new ExtractTextPlugin('[name]')
const extractStyle = new ExtractTextPlugin('style.css')

module.exports = {
  entry: {
    'index.html': path.resolve(__dirname, 'src/index.pug'),
    'cases.html': path.resolve(__dirname, 'src/cases.pug'),
    '404.html': path.resolve(__dirname, 'src/404.pug'),
    'script.js': path.resolve(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: extractHtml.extract([
          'html-loader',
          {
            loader: 'pug-html-loader',
            options: {
              data: { data: require('./src/data.json') }
            }
          }
        ])
      },
      {
        test: /\.sass$/,
        loader: extractStyle.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                outputStyle: prod ? 'compressed' : 'nested'
              }
            }
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [].concat(
    extractHtml,
    extractStyle,
    prod ? new CopyWebpackPlugin(['static']) : []
  )
}
