import { Component } from 'preact'
import { Router } from 'preact-router'

import Home from './routes/home'
import Work from './routes/work'
import Team from './routes/team'
import Careers from './routes/careers'
import NotFound from './routes/404'

import Picular from './cases/picular'
import TennisWatch from './cases/tennis-watch'
import MatSe from './cases/mat-se'
import Paykartan from './cases/paykartan'
import RettsPlus from './cases/retts-plus'
import ProFlight from './cases/proflight'
import AntiStress from './cases/antistress'
import BauerUniversity from './cases/bauer-university'

import './index.sass'

export default class extends Component {
  state = { firstView: true }

  componentDidMount () {
    const futureMemories = `Futur${Math.random() >= 0.5 ? 'e' : '3'} Mem${Math.random() >= 0.5 ? 'o' : '0'}r${Math.random() >= 0.5 ? 'i' : '1'}es`
    console.log(
      `%c🌑︎ Welcome to ${futureMemories}! 🚀`,
      'background:#070B13; color:#fff; display: block; padding:0.5em 1em; font-size:1em'
    )
  }

  handleRoute = () => {
    if (this.notOnFirstView) {
      this.setState({ firstView: false })
    }
    this.notOnFirstView = true

    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return (
      <div id='app'>
        <Router onChange={this.handleRoute}>
          <Home path='/' firstView={this.state.firstView} />
          <Work path='/work' />
          <Team path='/team' />
          <Careers path='/careers' />

          <Picular path='/cases/picular' />
          <TennisWatch path='/cases/tennis-watch' />
          <MatSe path='/cases/mat-se' />
          <Paykartan path='/cases/paykartan' />
          <RettsPlus path='/cases/retts-plus' />
          <ProFlight path='/cases/proflight' />
          <AntiStress path='/cases/antistress' />
          <BauerUniversity path='/cases/bauer-university' />

          <NotFound default />
        </Router>
      </div>
    )
  }
}
