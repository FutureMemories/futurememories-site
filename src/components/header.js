import { Component } from 'preact'
import cx from 'classnames'
import Icon from './icon'
import s from './header.sass'

export default class extends Component {
  componentWillMount () {
    window.addEventListener('keydown', this.onKey)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.onKey)
  }

  onKey = (e) => {
    if (e.keyCode === 27 && this.state.open) { this.handleOpener() }
  }

  handleOpener = () => {
    this.props.handleLocked()
    this.setState({ open: !this.state.open })
  }

  render ({ dark, links, fadeIn, route }, { open, disableClick }) {
    return (
      <header class={cx(s.header, dark && s.dark, fadeIn && s.fadeIn)}>
        <div class={s.inner}>

          <a href='/' title='Home'>
            <Icon id='logo' />
          </a>

          <button aria-label='Navigation Menu' class={cx(s.navMenu, open && s.open)} onClick={!disableClick && this.handleOpener} />

          <div onClick={!disableClick && this.handleOpener} class={cx(s.menuBlock, open && s.open)}>
            <ul
              class={s.menu}
              onMouseEnter={() => this.setState({ disableClick: true })}
              onMouseLeave={() => this.setState({ disableClick: false })}
            >
              {links.map(link => (
                <li>
                  <a
                    class={route === link.to && s.active}
                    href={link.to}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </header>
    )
  }
}
