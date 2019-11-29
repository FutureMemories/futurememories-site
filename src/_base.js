import { Component } from 'preact'
import cx from 'classnames'
import Header from './components/header'
import Footer from './components/footer'
import prerenderUrls from '../prerender-urls.json'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Our work', to: '/work' },
  { label: 'The team', to: '/team' },
  { label: 'Careers', to: '/careers' }
]

export default class extends Component {
  componentWillMount () {
    let title = 'Future Memories'
    const routeData = prerenderUrls.find(r => r.url === this.props.route)
    if (routeData) title = routeData.title

    if (typeof document !== 'undefined') {
      document.title = title
      document.querySelector('title').innerText = title

      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) metaDescription.setAttribute('content', routeData.description)
    }
  }

  handleLocked = () => {
    this.setState({ locked: !this.state.locked })
  }

  render ({ children, dark, removeFooter, fadeInHeader, firstView, route }) {
    return (
      <div class={cx('app', this.state.locked && 'locked')}>
        <Header
          fadeIn={firstView}
          dark={dark}
          links={links}
          route={route}
          handleLocked={() => this.handleLocked()}
          fadeInHeader={fadeInHeader}
        />
        {children}
        {!removeFooter && (
          <Footer dark={dark} links={links} />
        )}
      </div>
    )
  }
}
