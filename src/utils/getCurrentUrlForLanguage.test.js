/* eslint-env jest */
import getCurrentUrlForLanguage from './getCurrentUrlForLanguage'

test('changes language in link', () => {
  delete global.window.location
  global.window = Object.create(window)
  global.window.location = { pathname: '/sv/cases/retts-plus' }

  expect(getCurrentUrlForLanguage('en')).toBe('/en/cases/retts-plus')
})

test('add language in link if missing', () => {
  delete global.window.location
  global.window = Object.create(window)
  global.window.location = { pathname: '/cases/retts-plus' }

  expect(getCurrentUrlForLanguage('en')).toBe('/en/cases/retts-plus')
})

test('fallback to root if no pathname found', () => {
  delete global.window.location

  expect(getCurrentUrlForLanguage('en')).toBe('/en')
})
