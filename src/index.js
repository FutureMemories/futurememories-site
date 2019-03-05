
import { Router } from 'preact-router'

import Home from './routes/home'
import Work from './routes/work'
import Team from './routes/team'
import About from './routes/about'
import Careers from './routes/careers'
import NotFound from './routes/404'

import Picular from './cases/picular'
import TennisWatch from './cases/tennis-watch'
import MatSe from './cases/mat-se'
import Paykartan from './cases/paykartan'
import RettsPlus from './cases/retts-plus'
import ProFlight from './cases/proflight'

import './index.sass'

export default () => (
  <div id='app'>
    <Router onChange={() => typeof window !== 'undefined' && window.scrollTo(0, 0)}>
      <Home path='/' />
      <Work path='/work' />
      <Team path='/team' />
      <About path='/about' />
      <Careers path='/careers' />

      <Picular path='/cases/picular' />
      <TennisWatch path='/cases/tennis-watch' />
      <MatSe path='/cases/mat-se' />
      <Paykartan path='/cases/paykartan' />
      <RettsPlus path='/cases/retts-plus' />
      <ProFlight path='/cases/proflight' />

      <NotFound default />
    </Router>
  </div>
)
