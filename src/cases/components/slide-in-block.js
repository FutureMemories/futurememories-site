import cx from 'classnames'
import s from './slide-in-block.sass'

export default ({ image, alt = 'image', title, text, background = '', color = '', modifier, align, inView }) => (
  <div
    class={cx(s.slideInBlock, align && s[align], modifier && s[modifier], s.inView)}
    style={{ background, color }}
  >
    {image.positon !== 'inside' && (
      <div class={s.slider}>
        <img alt={alt} src={require(`../../images/${image}`)} />
      </div>
    )}
    <div class={cx(s.inner, modifier && modifier, inView)}>
      {image.positon === 'inside' && (
        <img alt={alt} src={require(`../../images/${image.path}`)} width={image.width} height={image.height} />
      )}
      <div class={s.content}>
        <h1>{title}</h1>
        <p>{Array.isArray(text) ? text.join('\n\n') : text}</p>
      </div>
    </div>
  </div>
)
