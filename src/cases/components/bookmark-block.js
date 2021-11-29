import cx from 'classnames'
import s from './bookmark-block.sass'
import Button from '../../components/button'

export default ({ title, text, items, image, alt = 'image', background = '', color = '', align, modifier, children, className, inView, link }) => (
  <div
    class={cx(s.bookmarkBlock, modifier && s[modifier], className)}
    style={{ background, color }}
  >
    <div class={cx(s.inner, align === 'left' && s.right)}>
      {children}
      {image && (<img alt={alt} src={require(`../../images/${image}`)} />)}
      {(title || text || items) && (
        <div class={cx(s.content, inView)}>
          {title && <h1>{title}</h1>}
          {text && <p class={s.text}>{Array.isArray(text) ? text.join('\n\n') : text}</p>}
          {items && items.map((item, i) => (
            <p key={'bookmark_block_' + i} class={cx(s.item)}>
              <img alt={item.alt} src={require(`../../images/${item.image}`)} />
              <span>{item.name}</span>
            </p>
          ))}
          {link && (
            <Button to={link[1]} target='_blank' rel='noopener noreferrer' arrow transition='slide' customClass={s.link} label={link[0]} />
          )}
        </div>
      )}
    </div>
  </div>
)
