import cx from 'classnames'
import s from './moon.sass'

export default ({ size, position, background, customClass, style }) => (
  <div class={cx(customClass, s.space, background && s[background], position && s[position], size && s[size])}>
    <div class={cx(s.background, !style && s.animate)} style={style && `margin-left: -${style.left}px; margin-top: -${style.top}px;`} />
    <div class={s.planet}>
      <div class={s.shine} style={style && `margin-left: -${style.left * 2}px; margin-bottom: ${style.top * 3}px;`} />
    </div>
  </div>
)
