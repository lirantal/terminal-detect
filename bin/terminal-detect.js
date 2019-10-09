#!/usr/bin/env node
'use strict'

const util = require('util')
const Detectors = require('../src/Detectors')

const detector = new Detectors()

const properties = {
  colors: detector.getColors(),
  charset: detector.getCharset()
}

console.log(util.inspect(properties, false, null, false))
