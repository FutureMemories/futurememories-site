import cx from 'classnames'
import s from './text-and-image.sass'

export default ({ textBlock, image, reverse, wideImage, background = '', color = '', modifier, inView }) => (
  <div
    class={cx(s.textAndImage, modifier && s[modifier])}
    style={{ background, color }}
  >
    <div class={cx(s.inner, inView)}>
      <div class={cx(s.columns, reverse && s.reverse)}>
        <div class={cx(s.column, s.imageBlock, wideImage && s.wide)}>
          <img src={require(`../../images/${image.src}`)} alt={image.alt} />
        </div>
        <div class={cx(s.column, s.textBlock)}>
          {textBlock.title && (<h2 class={s.title}>{textBlock.title}</h2>)}
          <p class={s.text}>{textBlock.text}</p>
        </div>
      </div>
    </div>
  </div>
)
