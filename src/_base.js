import { Component } from 'preact'
import cx from 'classnames'
import Header from './components/header'
import Footer from './components/footer'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Our work', to: '/work' },
  { label: 'The team', to: '/team' },
  { label: 'Careers', to: '/careers' }
]

export default class extends Component {
  handleLocked = () => {
    this.setState({ locked: !this.state.locked })
  }

  render ({ children, dark, removeFooter, fadeInHeader, firstView }) {
    return (
      <div class={cx('app', this.state.locked && 'locked')}>
        <Header fadeIn={firstView} dark={dark} links={links} handleLocked={this.handleLocked} fadeInHeader={fadeInHeader} />
        {children}
        {!removeFooter && (
          <Footer dark={dark} links={links} />
        )}
      </div>
    )
  }
}
