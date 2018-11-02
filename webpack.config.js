const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const prod = process.env.NODE_ENV === 'production'

const extractHtml = new ExtractTextPlugin('[name]')
const extractStyle = new ExtractTextPlugin('style.css')

let entry = {
  'index.html': path.resolve(__dirname, 'src/index.pug'),
  '404.html': path.resolve(__dirname, 'src/404.pug'),
  'script.js': path.resolve(__dirname, 'src/index.js'),
  'cases.html': path.resolve(__dirname, 'src/cases.pug'),
  'cases/paykartan.html': path.resolve(__dirname, 'src/cases-paykartan.pug'),
  'cases/picular.html': path.resolve(__dirname, 'src/cases-picular.pug'),
  'cases/retts-plus.html': path.resolve(__dirname, 'src/cases-retts-plus.pug'),
  'cases/tennis-watch.html': path.resolve(__dirname, 'src/cases-tennis-watch.pug'),
  'cases/mat-se.html': path.resolve(__dirname, 'src/cases-mat-se.pug'),
  'cases/proflight.html': path.resolve(__dirname, 'src/cases-proflight.pug')
}

if (!prod) {
  Object.assign(entry, {
    'cases/antistress.html': path.resolve(__dirname, 'src/cases-antistress.pug')
  })
}

module.exports = {
  entry: entry,
  output: {
    filename: '[name]',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: extractHtml.extract([
          'html-loader?attrs=img:src source:src video:poster',
          {
            loader: 'pug-html-loader',
            options: {
              data: {
                prod,
                data: require('./src/data.json')
              }
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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|mp4)$/,
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
