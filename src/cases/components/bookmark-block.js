import cx from 'classnames'
import s from './bookmark-block.sass'

export default ({ title, text, items, type, background, color, align, children }) => (
  <div class={s.bookmarkBlock} style={(background && `background: ${background};`) || (color && `color:${color};`)}>
    <div class={cx(s.inner, align === 'left' && s.right)}>
      {children}
      <div class={s.content}>
        <h1>{title}</h1>
        <p>{Array.isArray(text) ? text.join('\n\n') : text}</p>
        {items.map(item => (
          <p class={cx(s.item)}>
            <img src={require(`../../images/${item.image}`)} />
            <span>{item.name}</span>
          </p>
        ))}
      </div>
    </div>
  </div>
)
