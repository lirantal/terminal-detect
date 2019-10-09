'use strict'

const Detectors = require('../src/Detectors')

describe('Detectors', () => {
  test('Colors should return a valid object with detected colors', () => {
    const detector = new Detectors()
    const colors = detector.getColors()
    expect(colors).toMatchObject({
      16: expect.any(Boolean),
      256: expect.any(Boolean),
      '16m': expect.any(Boolean)
    })
  })

  test('Charset should return a valid object with detected charset values', () => {
    const detector = new Detectors()
    const colors = detector.getCharset()
    expect(colors).toMatchObject({
      unicode: expect.any(Boolean)
    })
  })
})
