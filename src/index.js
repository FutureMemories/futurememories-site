import { Component } from 'preact'
import LanguageRoute from './language-route'
import Router from './components/language-router'
import './index.sass'

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
        <Router>
          <LanguageRoute root='/sv' language='swedish' />
          <LanguageRoute root='/en' language='english' />
        </Router>
      </div>
    )
  }
}
