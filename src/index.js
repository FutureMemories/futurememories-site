
import { Router } from 'preact-router'

import Home from './routes/home'
import Work from './routes/work'
import Team from './routes/team'
import About from './routes/about'
import NotFound from './routes/404'

import './index.sass'

const App = () => {
  return (
    <Router>
      <Home path='/' />
      <Work path='/work' />
      <Team path='/team' />
      <About path='/about' />
      <NotFound default />
    </Router>
  )
}

export default () => (
  <App class='app' />
)
