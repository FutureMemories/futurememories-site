
import { Router } from 'preact-router'

import Home from './routes/home'
import Work from './routes/work'
import Team from './routes/team'
import About from './routes/about'
import NotFound from './routes/404'

import Picular from './cases/picular'
import TennisWatch from './cases/tennis-watch'
import MatSe from './cases/mat-se'

import './index.sass'

const App = () => {
  return (
    <Router>
      <Home path='/' />
      <Work path='/work' />
      <Team path='/team' />
      <About path='/about' />

      <Picular path='/cases/picular' />
      <TennisWatch path='/cases/tennis-watch' />
      <MatSe path='/cases/mat-se' />

      <NotFound default />
    </Router>
  )
}

export default () => (
  <App class='app' />
)
