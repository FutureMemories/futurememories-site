import cx from 'classnames'
import s from './hero-header.sass'

export default ({ title, subtitle, customClass }) => (
  <div class={cx(s.heroHeader, customClass)}>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
)
