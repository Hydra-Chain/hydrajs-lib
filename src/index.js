var locjs = require('bitcoinjs-lib')

Object.assign(locjs.networks, require('./networks'))

locjs.utils = require('./utils')

module.exports = locjs