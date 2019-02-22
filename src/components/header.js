import { Component } from 'preact'
import cx from 'classnames'
import Icon from './icon'
import s from './header.sass'

export default class extends Component {
  handleOpener = () => {
    this.props.handleLocked()
    this.setState({ open: !this.state.open })
  }

  render ({ dark, links }, { open }) {
    return (
      <header class={cx(s.header, dark && s.dark)}>
        <div class={s.inner}>

          <a href='/'>
            <Icon id='logo' />
          </a>

          <button class={cx(s.navMenu, open && s.open)} onClick={this.handleOpener}>
            <ul class={s.menu}>
              {links.map(link => (
                <li>
                  <a href={link.to}>{link.label}</a>
                </li>
              ))}
            </ul>
          </button>

        </div>
      </header>
    )
  }
}
