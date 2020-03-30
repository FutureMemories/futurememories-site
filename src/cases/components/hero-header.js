import cx from 'classnames'
import s from './hero-header.sass'

export default ({ title, subtitle, type, dark, customClass }) => (
  <div class={cx(s.heroHeader, customClass, dark && s.dark)}>
    <p class={s.type}>{type}</p>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
)
