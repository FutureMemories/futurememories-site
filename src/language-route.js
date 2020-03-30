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
    )
  }
}
