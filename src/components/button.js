import { route } from 'preact-router'
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
  arrow,
  ...props
}) => (
  <button
    type={type}
    class={cx(
      s.button,
      loading && s.loading,
      fullsize && s.fullsize
    )}
    disabled={loading || disabled}
    onClick={
      to ? () => route(to, true) : onClick
    }
    {...props}
  >
    {label && (<span>{label}</span>)}
    {arrow && (<Icon class={s.arrow} id='arrow' />)}
  </button>
)
