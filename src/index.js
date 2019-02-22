
import { Router } from 'preact-router'
import Match from 'preact-router/match'
import Base from './_base'

import Home from './routes/home'
import Work from './routes/work'
import Team from './routes/team'
import About from './routes/about'
import NotFound from './routes/404'
// import Case from './routes/cases'
// import Clients from './routes/clients'

import './index.sass'

const App = () => {
  return (
    <Router>
      <Home path='/' />
      <Work path='/work' />
      <Team path='/team' />
      <About path='/about' />
      {/* <Case path='/work/:case' />
<Clients path='/clients' /> */}
      <NotFound default />
    </Router>
  )
}

export default () => (
  <Match>
    { ({ url }) => (
      <Base active={url}>
        <App class='app' />
      </Base>
    )}
  </Match>
)
