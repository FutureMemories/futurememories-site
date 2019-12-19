import cx from 'classnames'
import s from './bookmark-block.sass'

export default ({ title, text, items, image, alt = 'image', background, color, align, modifier, children, className, inView }) => (
  <div
    class={cx(s.bookmarkBlock, modifier && s[modifier], className)}
    style={{ background, color }}
  >
    <div class={cx(s.inner, align === 'left' && s.right)}>
      {children}
      {image && (<img alt={alt} src={require(`../../images/${image}`)} />)}
      <div class={cx(s.content, inView)}>
        <h1>{title}</h1>
        <p class={s.text}>{Array.isArray(text) ? text.join('\n\n') : text}</p>
        {items && items.map((item, i) => (
          <p key={'bookmark_block_' + i} class={cx(s.item)}>
            <img alt={item.alt} src={require(`../../images/${item.image}`)} />
            <span>{item.name}</span>
          </p>
        ))}
      </div>
    </div>
  </div>
)
