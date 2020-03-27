/* global location */
export default (language) => {
  if (typeof location !== 'undefined' && location.pathname) {
    if (/\/\w\w\//.test(location.pathname)) {
      return '/' + language + location.pathname.substr(3)
    } else {
      return '/' + language + location.pathname
    }
  }

  return '/' + language
}
