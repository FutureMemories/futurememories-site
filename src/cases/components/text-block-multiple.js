import cx from 'classnames'
import s from './text-block-multiple.sass'

export default ({ title, text, content, background, color, inView }) => (
  <div class={s.textBlockMultiple} style={cx(background && `background: ${background};`, color && `color:${color};`)}>
    <div class={cx(s.inner, inView)}>
      <div class={s.leftBlock}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div class={s.rightBlock}>
        {content.map(paragraf => (
          <p>{paragraf}</p>
        ))}
      </div>
    </div>
  </div>
)
