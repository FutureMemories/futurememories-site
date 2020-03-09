import { Component } from 'preact'
import cx from 'classnames'
import s from './filter-block.sass'
import { Match } from 'preact-router/match'

const Link = ({ href, children }) => (
  <Match path={href}>
    {({ path, matches }) => (
      <a
        href={href}
        class={cx(
          (
            // Special test for /en and /en/
            // To not match /en/ with /en/cloud
            /\/\w\w\/?$/.test(href)
              ? /\/\w\w\/?$/.test(path)
              : path.indexOf(href) === 0
          ) && s.active
        )}
      >{children}</a>
    )}
  </Match>
)

export default class extends Component {
  toggle = () => this.setState({ open: !this.state.open })

  render ({ items }, { open }) {
    return (
      <div class={cx(s.block, open && s.open)} onClick={this.toggle}>
        <span class={s.filter}>Filter by:</span>
        {items.map(item => <Link href={item.href}>{item.name}</Link>)}
        <svg width='24' height='24' viewBox='0 0 24 24' fill='#8d939e' xmlns='http://www.w3.org/2000/svg' class={s.chevron}>
          <path d='M7.41 8.57983L12 13.1698L16.59 8.57983L18 9.99983L12 15.9998L6 9.99983L7.41 8.57983Z' />
        </svg>
      </div>
    )
  }
}
