import cx from 'classnames'
import s from './slide-in-block.sass'

export default ({ image, title, text, background, color, modifier, align }) => (
  <div class={cx(s.slideInBlock, align && s[align], modifier && s[modifier], s.inView)} style={cx(background && `background: ${background};`, color && `color:${color};`)}>
    {image.positon !== 'inside' && (
      <div class={s.slider}>
        <img src={require(`../../images/${image}`)} />
      </div>
    )}
    <div class={s.inner}>
      {image.positon === 'inside' && (
        <img src={require(`../../images/${image.path}`)} width={image.width} height={image.height} />
      )}
      <div class={s.content}>
        <h1>{title}</h1>
        <p>{Array.isArray(text) ? text.join('\n\n') : text}</p>
      </div>
    </div>
  </div>
)
