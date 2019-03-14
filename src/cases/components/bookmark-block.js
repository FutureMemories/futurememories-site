import cx from 'classnames'
import s from './bookmark-block.sass'

export default ({ title, text, items, image, background, color, align, modifier, children, inView }) => (
  <div class={cx(s.bookmarkBlock, modifier && s[modifier])} style={cx(background && `background: ${background};`, color && `color:${color};`)}>
    <div class={cx(s.inner, align === 'left' && s.right)}>
      {children}
      {image && (<img src={require(`../../images/${image}`)} />)}
      <div class={cx(s.content, inView)}>
        <h1>{title}</h1>
        <p class={s.text}>{Array.isArray(text) ? text.join('\n\n') : text}</p>
        {items && items.map(item => (
          <p class={cx(s.item)}>
            <img src={require(`../../images/${item.image}`)} />
            <span>{item.name}</span>
          </p>
        ))}
      </div>
    </div>
  </div>
)
