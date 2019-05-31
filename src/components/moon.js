import cx from 'classnames'
import s from './moon.sass'

export default ({ size, position, background, customClass, style }) => (
  <div class={cx(customClass, s.space, background && s[background], position && s[position], size && s[size])}>
    <div
      class={cx(s.background, !style && s.animate)}
      style={style && {
        marginLeft: `-${style.left}px`,
        marginTop: `-${style.top}px`
      }}
    />
    <div class={s.planet}>
      <div
        class={s.shine}
        style={style && {
          marginLeft: `-${style.left * 2}px`,
          marginBottom: `${style.top * 3}px`
        }}
      />
    </div>
  </div>
)
