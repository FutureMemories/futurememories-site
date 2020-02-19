import { Component } from 'preact'
import { Router } from 'preact-router'
import merge from 'merge'

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
  english: require('./data.json'),
  swedish: require('./swedish.json')
}

export default class extends Component {
  state = {
    firstView: true,
    languageData: this.getLanguageData()
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

  getLanguageData () {
    return merge.recursive(true, data.english, data[this.props.language] || {})
  }

  render ({ root }, { languageData }) {
    return (
      <div id='app'>
        <Router onChange={this.handleRoute}>
          <Home path={root + '/'} firstView={this.state.firstView} data={languageData} />
          <Work path={root + '/work'} data={languageData} />
          <Team path={root + '/team'} data={languageData} />
          <Careers path={root + '/careers'} data={languageData} />

          <Picular path={root + '/cases/picular'} data={languageData} />
          <Bandbond path={root + '/cases/bandbond'} data={languageData} />
          <TennisWatch path={root + '/cases/tennis-watch'} data={languageData} />
          <MatSe path={root + '/cases/mat-se'} data={languageData} />
          <Paykartan path={root + '/cases/paykartan'} data={languageData} />
          <RettsPlus path={root + '/cases/retts-plus'} data={languageData} />
          <ProFlight path={root + '/cases/proflight'} data={languageData} />
          <AntiStress path={root + '/cases/antistress'} data={languageData} />
          <BauerUniversity path={root + '/cases/bauer-university'} data={languageData} />
          <SleepCure path={root + '/cases/sleepcure'} data={languageData} />
          <Stc path={root + '/cases/stc'} data={languageData} />
          <CaseComponents path={root + '/cases/__components'} data={languageData} />

          <NotFound type='404' default data={languageData} />
        </Router>
      </div>
    )
  }
}
