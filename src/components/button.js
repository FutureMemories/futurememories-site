import Icon from './icon'
import cx from 'classnames'
import s from './button.sass'
import getLanguageLink from '../utils/getLanguageLink'

export default ({
  type = 'button',
  label,
  background,
  onClick,
  loading,
  disabled,
  to,
  fullsize,
  small,
  center,
  width,
  arrow,
  reverse,
  transition,
  customClass,
  ...props
}) => {
  const CurrentTag = to ? 'a' : 'button'
  return (
    <CurrentTag
      type={!to && type}
      class={cx(
        s.button,
        background && s[background],
        loading && s.loading,
        fullsize && s.fullsize,
        small && s.small,
        center && s.center,
        transition && s[transition],
        customClass && customClass,
        reverse && s.reverse
      )}
      style={width && `width: ${width}px;`}
      disabled={loading || disabled}
      href={to.match(/^(tel|mailto):/) ? to : getLanguageLink(to)}
      onClick={onClick}
      {...props}
    >
      {/* {arrow && transition === 'slide' && (<Icon class={cx(s.arrow, s.first)} id='arrow' />)} */}
      {label && (<span class={s.label}>{label}</span>)}
      {arrow && transition === 'slideArrow' && (<Icon class={cx(s.arrow, s.fullsize, s.first)} id='arrow' />)}
      {arrow && fullsize ? (<Icon class={cx(s.arrow, s.fullsize, s.second)} id='arrow' />) : arrow && (<div class={cx(s.arrow, s.buttonArrow)}><Icon id='smallArrow' /></div>)}
    </CurrentTag>
  )
}
