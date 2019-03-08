import Icon from './icon'
import cx from 'classnames'
import s from './button.sass'

export default ({
  type = 'button',
  label,
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
      href={to}
      onClick={onClick}
      {...props}
    >
      {arrow && transition === 'slide' && (<Icon class={cx(s.arrow, s.first)} id='arrow' />)}
      {label && (<span class={s.label} >{label}</span>)}
      {arrow && transition === 'slideArrow' && (<Icon class={cx(s.arrow, s.first)} id='arrow' />)}
      {arrow && (<Icon class={cx(s.arrow, s.second)} id='arrow' />)}
    </CurrentTag>
  )
}
