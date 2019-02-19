
import { Router } from 'preact-router'
import Match from 'preact-router/match'
import Base from './_base'

import Home from './routes/home'
import NotFound from './routes/404'
import Work from './routes/work'
import Team from './routes/team'
// import Case from './routes/cases'
// import About from './routes/about'
// import Clients from './routes/clients'

import './index.sass'

const App = () => {
  return (
    <Router>
      <Home path='/' />
      <Work path='/work' />
      <Team path='/team' />
      {/* <Case path='/work/:case' />
<About path='/about' />
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
