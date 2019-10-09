'use strict'

const supportsColor = require('supports-color')
const hasUnicode = require('has-unicode')

module.exports = class Detectors {
  getColors() {
    return {
      16: !!supportsColor.stdout.hasBasic,
      256: !!supportsColor.stdout.has256,
      '16m': !!supportsColor.stdout.has16m
    }
  }

  getCharset() {
    return {
      unicode: !!hasUnicode()
    }
  }
}
