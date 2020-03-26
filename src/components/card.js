import { Component } from 'preact'
import cx from 'classnames'
import s from './card.sass'
import getLanguageLink from '../utils/getLanguageLink'

export default class extends Component {

  render ({ id, customClass, customStyle, children, to, transition, newTab }, state) {
    const CurrentTag = to ? 'a' : 'div'

    return (
      <CurrentTag
        id={id}
        class={cx(s.card, customClass, state.ease && s.ease, transition && s[transition])}
        href={getLanguageLink(to)}
        rel={to && 'noopener noreferrer'}
        target={newTab && '_blank'}
        style={customStyle}
      >
        {children}
      </CurrentTag>
    )
  }
}
