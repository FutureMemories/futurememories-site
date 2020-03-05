import s from './filter-block.sass'
import { Link } from 'preact-router/match'

export default ({ items }) => (
  <div class={s.block}>
    {items.map(item => (
      <Link href={item.href} activeClassName={s.active}>{item.name}</Link>
    ))}
  </div>
)
