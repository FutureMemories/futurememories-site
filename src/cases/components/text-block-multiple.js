import cx from 'classnames'
import s from './text-block-multiple.sass'

export default ({ title, text, content = [], background = '', color = '', inView, centered, highlightLeftSide }) => (
  <div
    class={s.textBlockMultiple}
    style={{ background, color }}
  >
    <div class={cx(s.inner, inView, centered && s.centered, highlightLeftSide && s.highlightLeftSide)}>
      {content.map((content, i) => (
        <div class={s.content} key={`text-block-multiple-${i}`}>
          {content.title && <h1>{content.title}</h1>}
          {content.text && <p>{content.text}</p>}
        </div>
      ))}
    </div>
  </div>
)
