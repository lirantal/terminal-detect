#!/usr/bin/env node
'use strict'

const util = require('util')
const supportsColor = require('supports-color')
const hasUnicode = require('has-unicode')

const properties = {
  colors: {
    16: supportsColor.stdout.hasBasic,
    256: supportsColor.stdout.has256,
    '16m': supportsColor.stdout.has16m
  },
  charset: {
    unicode: !!hasUnicode()
  }
}

console.log(util.inspect(properties, false, null, false))
