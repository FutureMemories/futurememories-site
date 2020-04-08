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

  render ({ root, dark, links, fadeIn, route, content }, { disableClick }) {
    return (
      <header class={cx(s.header, dark && s.dark, fadeIn && s.fadeIn)}>
        <div class={s.inner}>

          <a href={getLanguageLink('/')} title='Home'>
            <Icon id='logo' />
          </a>

          <ul class={s.desktopNav}>
            {links.map((link, i) => {
              if (i > 0) {
                return (
                  <li key={'header_desktopnav_' + link.to}>
                    <a
                      class={route.replace(/\/$/, '') === link.to && s.active}
                      href={getLanguageLink(link.to)}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              }
            })}
          </ul>

          {
            root === '/sv'
              ? <a href={getCurrentUrlForLanguage('en')} title='Switch to english' class={s.languageToggle}>En</a>
              : <a href={getCurrentUrlForLanguage('sv')} title='Byt till svenska' class={s.languageToggle}>Sv</a>
          }

          <input class={s.navCheck} id='nav-check' type='checkbox' ref={(el) => { this.navCheck = el }} />
          <label onClick={this.props.handleLocked} aria-label='Navigation Menu' for='nav-check' class={s.navMenu} />

          <a
            class={s.contactUs}
            onClick={() => console.log("kontakta oss")}
          >
            {content.contactUs}
          </a>

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
