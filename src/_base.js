import { Component } from 'preact'
import cx from 'classnames'
import Header from './components/header'
import Footer from './components/footer'

export default class extends Component {

  handleLocked = () => {
    this.setState({ locked: !this.state.locked })
  }

  render ({ children, active }) {
    return (
      <div class={cx('app', this.state.locked && 'locked')}>
        <Header active={active} handleLocked={this.handleLocked} />
        {children}
        <Footer />
      </div>
    )
  }
}
