import { Component } from 'preact'
import cx from 'classnames'
import Icon from './icon'
import s from './header.sass'

const links = [
  { label: 'Our work', to: '/work' },
  { label: 'About us', to: '/about' },
  { label: 'The team', to: '/team' },
  { label: 'Clients', to: '/clients' }
]

  export default class extends Component {

    handleOpener = () => {
      this.setState({ open: !this.state.open })
    }

    render ({ dark }, { open }) {
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

