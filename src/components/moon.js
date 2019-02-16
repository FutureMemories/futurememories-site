import cx from 'classnames'
import s from './moon.sass'

export default ({ size, position, background, customClass, style }) => (
  <div class={cx(customClass, s.space, background && s[background], position && s[position], size && s[size])}>
    <div class={cx(s.background, !style && s.animate)} style={style} />
    <div class={s.planet}>
      <div class={s.shine} style={style} />
    </div>
  </div>
)
