/* eslint-disable security/detect-child-process */
'use strict'

const {test} = require('node:test')
const assert = require('node:assert/strict')
const {execFileSync} = require('node:child_process')
const path = require('node:path')
const Detectors = require('../src/Detectors')

test('Colors returns boolean capability flags with the real supports-color dependency', () => {
  const colors = new Detectors().getColors()
  assert.deepEqual(Object.keys(colors).sort(), ['16', '16m', '256'])
  Object.values(colors).forEach(value => assert.equal(typeof value, 'boolean'))
})

test('Charset returns a boolean unicode capability', () => {
  assert.equal(typeof new Detectors().getCharset().unicode, 'boolean')
})

for (const [forceColor, supported] of [['0', false], ['3', true]]) {
  test(`FORCE_COLOR=${forceColor} works through the CommonJS entry point`, () => {
    const output = execFileSync(process.execPath, ['-e',
      "const Detectors = require('./src/Detectors'); process.stdout.write(JSON.stringify(new Detectors().getColors()))"
    ], {cwd: path.join(__dirname, '..'), env: Object.assign({}, process.env, {FORCE_COLOR: forceColor})})
    assert.deepEqual(JSON.parse(output.toString()), {16: supported, 256: supported, '16m': supported})
  })
}
