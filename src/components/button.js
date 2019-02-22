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
  mailto,
  fullsize,
  small,
  arrow,
  ...props
}) => (
  mailto ? (
    <a
      class={cx(
        s.button,
        loading && s.loading,
        fullsize && s.fullsize
      )}
      href={`mailto:${mailto}`}
    >
      {label && (<span>{label}</span>)}
      {arrow && (<Icon class={s.arrow} id='arrow' />)}
    </a>
  ) : (
    <button
      type={type}
      class={cx(
        s.button,
        loading && s.loading,
        fullsize && s.fullsize,
        small && s.small
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
)
