/* global history */
import { Component } from 'preact'
import { route, subscribers, getCurrentUrl } from 'preact-router'

const getLanguageUrlPrefix = () => {
  const code = (navigator.language || navigator.userLanguage || '').substr(0, 2)
  return code === 'sv' ? '/sv' : '/en'
}

class RedirectToLanguage extends Component {
  componentDidMount () {
    const prefix = getLanguageUrlPrefix()
    const url = prefix + this.props.url

    // Route with both preact-router and history because
    // preact-router only updates history if preact-router Router component
    route(url, true)
    history.replaceState(null, null, url)
  }
}

export default class extends Component {
  onUrl = (url) => {
    this.setState({ url })
  }

  componentWillMount () {
    subscribers.push(this.onUrl)
    this.onUrl(getCurrentUrl())
  }

  render ({ children }, { url }) {
    const root = url.substr(0, 3)

    // Find language route
    const languageRoute = children.find(c => c.attributes && c.attributes.root === root)
    if (languageRoute) return languageRoute

    return <RedirectToLanguage url={url} />
  }
}
