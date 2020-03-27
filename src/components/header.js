import { Component } from 'preact'
import cx from 'classnames'
import Icon from './icon'
import getLanguageLink from '../utils/getLanguageLink'
import getCurrentUrlForLanguage from '../utils/getCurrentUrlForLanguage'
import s from './header.sass'

export default class extends Component {
  componentDidMount () {
    window.addEventListener('keydown', this.onKey)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.onKey)
  }

  onKey = (e) => {
    if (e.keyCode === 27 && this.navCheck.checked) { this.closeMenu() }
  }

  closeMenu = () => {
    this.props.handleLocked()
    this.navCheck.checked = false
  }

  render ({ root, dark, links, fadeIn, route }, { disableClick }) {
    return (
      <header class={cx(s.header, dark && s.dark, fadeIn && s.fadeIn)}>
        <div class={s.inner}>

          <a href={getLanguageLink('/')} title='Home'>
            <Icon id='logo' />
          </a>

          {
            root === '/sv'
              ? <a href={getCurrentUrlForLanguage('en')} title='Switch to english' class={s.languageToggle}>En</a>
              : <a href={getCurrentUrlForLanguage('sv')} title='Byt till svenska' class={s.languageToggle}>Sv</a>
          }

          <input class={s.navCheck} id='nav-check' type='checkbox' ref={(el) => { this.navCheck = el }} />
          <label onClick={this.props.handleLocked} aria-label='Navigation Menu' for='nav-check' class={s.navMenu} />

          <div onClick={!disableClick && this.closeMenu} class={s.menuBlock}>
            <ul
              class={s.menu}
              onMouseEnter={() => this.setState({ disableClick: true })}
              onMouseLeave={() => this.setState({ disableClick: false })}
            >
              {links.map(link => (
                <li key={'header_' + link.to}>
                  <a
                    class={route === link.to && s.active}
                    onClick={() => this.closeMenu()}
                    href={getLanguageLink(link.to)}
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
