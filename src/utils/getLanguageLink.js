/* global location */

export default (href) => {
  if (href == null || href.match(/^(tel|mailto):/)) {
    return href
  }

  if (href.indexOf('http') === 0) {
    return href
  }

  if (typeof location !== 'undefined') {
    return location.pathname.substr(0, 3) + href
  }

  return href
}
