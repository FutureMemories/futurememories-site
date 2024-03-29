import { Component } from 'preact'
import { Router } from 'preact-router'
import merge from 'merge'
import memoize from 'memoize-one'

import Home from './routes/home'
import Work from './routes/work'
import Team from './routes/team'
// import Careers from './routes/careers'
import NotFound from './routes/404'
import FrontendChallenge from './routes/frontend-challenge'
import CountTheEggsChallenge from './routes/count-the-eggs-challenge'

import Annotell from './cases/annotell'
import AntiStress from './cases/antistress'
import Bandbond from './cases/bandbond'
import Barseback from './cases/barseback'
import BauerUniversity from './cases/bauer-university'
import CaseComponents from './cases/components'
import CentralPadelNordic from './cases/central-padel-nordic'
import Eyescanner from './cases/eyescanner'
import Kludd from './cases/kludd'
import MatSe from './cases/mat-se'
import NordishMarket from './cases/nordish-market'
import Nyctea from './cases/nyctea'
import Paykartan from './cases/paykartan'
import Picadeli from './cases/picadeli'
import Picular from './cases/picular'
import ProFlight from './cases/proflight'
import RettsPlus from './cases/retts-plus'
import SleepCure from './cases/sleepcure'
import Stc from './cases/stc'
import TennisWatch from './cases/tennis-watch'
import WakeUpProblem from './cases/wake-up-problem'
import WeAreVoice from './cases/wearevoice'
import WeeklyRevolt from './cases/weekly-revolt'

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

const travelledInHomeRoutes = (url, prev) => {
  if (!url || !prev) return false

  const homeRoutes = [''].concat(Object.keys(data.english.caseCategories))
  let extractRegex

  if (url.substring(3, 8) === '/work' && prev.substring(3, 8) === '/work') {
    // extract path from /en/work/:PATH:/subpath
    extractRegex = /\/\w\/\w\w\/([^/]+)/
  } else {
    // extract path from /en/:PATH:/subpath
    extractRegex = /\/\w\w\/([^/]+)/
  }

  url = (url.match(extractRegex) || ['', ''])[1]
  prev = (prev.match(extractRegex) || ['', ''])[1]

  return (
    homeRoutes.includes(url) &&
    homeRoutes.includes(prev)
  )
}

export default class extends Component {
  state = {
    firstView: true,
    categoryChange: false
  }

  handleRoute = (ev) => {
    if (this.notOnFirstView) {
      this.setState({ firstView: false })
    }

    this.notOnFirstView = true

    if (typeof window !== 'undefined') {
      if (!travelledInHomeRoutes(ev.url, ev.previous)) {
        this.setState({ categoryChange: false })
        window.scrollTo(0, 0)
      } else {
        this.setState({ categoryChange: true })
      }
    }
  }

  render ({ root, language }) {
    const languageData = getLanguageData(language)

    return (
      <Router onChange={this.handleRoute}>
        <Home path={root + '/'} firstView={this.state.firstView} categoryChange={this.state.categoryChange} data={languageData} root={root} />

        {Object.keys(data.english.caseCategories).map(key => (
          <Home path={`${root}/${key}/:subpath?`} firstView={this.state.firstView} categoryChange={this.state.categoryChange} data={languageData} root={root} caseCategory={key} key={key} />
        ))}

        <Work path={root + '/work'} firstView={this.state.firstView} categoryChange={this.state.categoryChange} data={languageData} root={root} />

        {Object.keys(data.english.caseCategories).map(key => (
          <Work path={`${root}/work/${key}`} firstView={this.state.firstView} categoryChange={this.state.categoryChange} data={languageData} root={root} caseCategory={key} key={key} />
        ))}

        <Team path={root + '/team'} data={languageData} root={root} />
        {/* <Careers path={root + '/careers'} data={languageData} root={root} /> */}
        <Annotell path={root + '/cases/annotell'} data={languageData} root={root} />
        <AntiStress path={root + '/cases/antistress'} data={languageData} root={root} />
        <Bandbond path={root + '/cases/bandbond'} data={languageData} root={root} />
        <Barseback path={root + '/cases/barseback'} data={languageData} root={root} />
        <BauerUniversity path={root + '/cases/bauer-university'} data={languageData} root={root} />
        <CaseComponents path={root + '/cases/__components'} data={languageData} root={root} />
        <CentralPadelNordic path={root + '/cases/central-padel-nordic'} data={languageData} root={root} />
        <CountTheEggsChallenge path={root + '/count-the-eggs'} data={languageData} root={root} />
        <Eyescanner path={root + '/cases/eyescanner'} data={languageData} root={root} />
        <FrontendChallenge path={root + '/frontend-challenge'} data={languageData} root={root} />
        <Kludd path={root + '/cases/kludd'} data={languageData} root={root} />
        <MatSe path={root + '/cases/mat-se'} data={languageData} root={root} />
        <NordishMarket path={root + '/cases/nordish-market'} data={languageData} root={root} />
        <Nyctea path={root + '/cases/nyctea'} data={languageData} root={root} />
        <Paykartan path={root + '/cases/paykartan'} data={languageData} root={root} />
        <Picadeli path={root + '/cases/picadeli'} data={languageData} root={root} />
        <Picular path={root + '/cases/picular'} data={languageData} root={root} />
        <ProFlight path={root + '/cases/proflight'} data={languageData} root={root} />
        <RettsPlus path={root + '/cases/retts-plus'} data={languageData} root={root} />
        <SleepCure path={root + '/cases/sleepcure'} data={languageData} root={root} />
        <Stc path={root + '/cases/stc'} data={languageData} root={root} />
        <TennisWatch path={root + '/cases/tennis-watch'} data={languageData} root={root} />
        <WakeUpProblem path={root + '/cases/wake-up-problem'} data={languageData} root={root} />
        <WeAreVoice path={root + '/cases/we-are-voice'} data={languageData} root={root} />
        <WeeklyRevolt path={root + '/cases/weekly-revolt'} data={languageData} root={root} />

        <NotFound type='404' default data={languageData} root={root} />
      </Router>
    )
  }
}
