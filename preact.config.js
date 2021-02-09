import CopyWebpackPlugin from 'copy-webpack-plugin'
import RemoveServiceWorkerPlugin from 'webpack-remove-serviceworker-plugin'
import path from 'path'

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
  if (env.ssr) {
    config.resolve.alias.codemirror$ = require.resolve('./__mocks__/codemirror.js')
    config.resolve.alias['codemirror/lib/codemirror.css$'] = require.resolve('./__mocks__/codemirror.js')
    config.resolve.alias['codemirror/mode/javascript/javascript.js$'] = require.resolve('./__mocks__/codemirror.js')
  }

  config.plugins.push(new CopyWebpackPlugin([{ context: `${__dirname}/src/assets`, from: '*' }]))
  config.plugins.push(new CopyWebpackPlugin([{ context: `${__dirname}/src/assets-root`, from: '*' }]))
  config.plugins.push(new RemoveServiceWorkerPlugin({ filename: 'sw.js' }))

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
}
