import { Component } from 'preact'
import cx from 'classnames'
import Header from './components/header'
import Footer from './components/footer'
import prerenderUrls from '../prerender-urls.json'

export default class extends Component {
  componentWillMount () {
    let title = 'Future Memories'
    const routeData = prerenderUrls.find(r => r.url === this.props.route)
    if (routeData) title = routeData.title

    if (typeof document !== 'undefined') {
      document.title = title
      document.querySelector('title').innerText = title

      const metaDescription = document.querySelector('meta[name="description"]')
      if (routeData && metaDescription) metaDescription.setAttribute('content', routeData.description)
    }
  }

  handleLocked = () => {
    this.setState({ locked: !this.state.locked })
  }

  render ({ root, data, children, dark, background, removeFooter, fadeInHeader, firstView, route }) {
    return (
      <div class={cx('app', this.state.locked && 'locked')}>
        <Header
          root={root}
          fadeIn={firstView}
          dark={dark}
          links={data.links}
          route={route}
          handleLocked={() => this.handleLocked()}
          fadeInHeader={fadeInHeader}
        />
        {children}
        {!removeFooter && (
          <Footer
            company={data.company}
            dark={dark}
            background={background}
            links={data.links}
            content={data.content.footer}
          />
        )}
      </div>
    )
  }
}
