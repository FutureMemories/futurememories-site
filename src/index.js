import { Component } from 'preact'
import { Router, route } from 'preact-router'
import LanguageRoute from './language-route'
import './index.sass'

const getLanguageUrlPrefix = () => {
  const code = (navigator.language || navigator.userLanguage || '').substr(0, 2)
  return code === 'sv' ? '/sv' : '/en'
}

class RedirectToLanguage extends Component {
  componentDidMount () {
    const prefix = getLanguageUrlPrefix()
    route(prefix + this.props.url, true)
  }
}

export default class extends Component {
  componentDidMount () {
    const futureMemories = `Futur${Math.random() >= 0.5 ? 'e' : '3'} Mem${Math.random() >= 0.5 ? 'o' : '0'}r${Math.random() >= 0.5 ? 'i' : '1'}es`
    console.log(
      `%c🌑︎ Welcome to ${futureMemories}! 🚀`,
      'background:#070B13; color:#fff; display: block; padding:0.5em 1em; font-size:1em'
    )
  }

  render () {
    return (
      <div id='app'>
        <Router onChange={this.handleRoute}>
          <LanguageRoute path='/sv/:endpoint?' root='/sv' language='swedish' />
          <LanguageRoute path='/en/:endpoint?' root='/en' language='english' />
          <RedirectToLanguage default />
        </Router>
      </div>
    )
  }
}
