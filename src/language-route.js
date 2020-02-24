import { Component } from 'preact'
import { Router } from 'preact-router'
import merge from 'merge'
import memoize from 'memoize-one'

import Home from './routes/home'
import Work from './routes/work'
import Team from './routes/team'
import Careers from './routes/careers'
import NotFound from './routes/404'

import Picular from './cases/picular'
import Bandbond from './cases/bandbond'
import TennisWatch from './cases/tennis-watch'
import MatSe from './cases/mat-se'
import Paykartan from './cases/paykartan'
import RettsPlus from './cases/retts-plus'
import ProFlight from './cases/proflight'
import AntiStress from './cases/antistress'
import BauerUniversity from './cases/bauer-university'
import SleepCure from './cases/sleepcure'
import Stc from './cases/stc'
import CaseComponents from './cases/components'

const data = {
  english: require('./english.json'),
  swedish: require('./swedish.json')
}

const getLanguageData = memoize((language) => {
  const d = merge.recursive(true, data.english, data[language] || {})

  // Map cases with id
  d.allCases = Object.entries(d.allCases)
    .map(([id, value]) => ({ id, ...value }))

  return d
})

export default class extends Component {
  state = {
    firstView: true
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

  render ({ root, language }) {
    const languageData = getLanguageData(language)

    return (
      <div id='app'>
        <Router onChange={this.handleRoute}>
          <Home path={root + '/'} firstView={this.state.firstView} data={languageData} root={root} />
          <Work path={root + '/work'} data={languageData} root={root} />
          <Team path={root + '/team'} data={languageData} root={root} />
          <Careers path={root + '/careers'} data={languageData} root={root} />

          <Picular path={root + '/cases/picular'} data={languageData} root={root} />
          <Bandbond path={root + '/cases/bandbond'} data={languageData} root={root} />
          <TennisWatch path={root + '/cases/tennis-watch'} data={languageData} root={root} />
          <MatSe path={root + '/cases/mat-se'} data={languageData} root={root} />
          <Paykartan path={root + '/cases/paykartan'} data={languageData} root={root} />
          <RettsPlus path={root + '/cases/retts-plus'} data={languageData} root={root} />
          <ProFlight path={root + '/cases/proflight'} data={languageData} root={root} />
          <AntiStress path={root + '/cases/antistress'} data={languageData} root={root} />
          <BauerUniversity path={root + '/cases/bauer-university'} data={languageData} root={root} />
          <SleepCure path={root + '/cases/sleepcure'} data={languageData} root={root} />
          <Stc path={root + '/cases/stc'} data={languageData} root={root} />
          <CaseComponents path={root + '/cases/__components'} data={languageData} root={root} />

          <NotFound type='404' default data={languageData} root={root} />
        </Router>
      </div>
    )
  }
}
