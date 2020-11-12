var hydrajs = require('bitcoinjs-lib')

Object.assign(hydrajs.networks, require('./networks'))

hydrajs.utils = require('./utils')

module.exports = hydrajs