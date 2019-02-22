import { Component } from 'preact'
import cx from 'classnames'
import Header from './components/header'
import Footer from './components/footer'

const links = [
  { label: 'Our work', to: '/work' },
  { label: 'About us', to: '/about' },
  { label: 'The team', to: '/team' },
  { label: 'Careers', to: '/careers' }
]

export default class extends Component {
  handleLocked = () => {
    this.setState({ locked: !this.state.locked })
  }

  render ({ children, removeFooter }) {

    return (
      <div class={cx('app', this.state.locked && 'locked')}>
        <Header links={links} handleLocked={this.handleLocked} />
        {children}
        {!removeFooter && (
          <Footer links={links} />
        )}
      </div>
    )
  }
}
