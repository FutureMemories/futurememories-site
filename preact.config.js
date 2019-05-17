import CopyWebpackPlugin from 'copy-webpack-plugin'
const { generateSw } = require('preact-cli-workbox-plugin')
const path = require('path')

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
  config.plugins.push(new CopyWebpackPlugin([{
    context: `${__dirname}/src/assets`,
    from: `*`
  }]))

  config.module.loaders[4].include = [
    path.resolve(__dirname, '', 'src/components'),
    path.resolve(__dirname, '', 'src/cases'),
    path.resolve(__dirname, '', 'src/routes')
  ]

  config.module.loaders[5].exclude = [
    path.resolve(__dirname, '', 'src/components'),
    path.resolve(__dirname, '', 'src/cases'),
    path.resolve(__dirname, '', 'src/routes')
  ]

  // Always use file-loader instead of url-loader
  config.module.loaders[8].loader = 'file-loader'

  generateSw(config, helpers, {
    skipWaiting: true,
    clientsClaim: true
  })
}
