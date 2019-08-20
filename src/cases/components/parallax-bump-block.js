import cx from 'classnames'
import s from './parallax-bump-block.sass'
import ParallaxObject from './parallax-object'

export default ({ title, text, items, align, background, color, inView }) => (
  <div
    class={s.parallaxBumpBlock}
    style={{ background, color }}
  >
    <div class={cx(s.inner, inView)}>

      <div class={s.content}>
        <h1>{title}</h1>
        <p>{Array.isArray(text) ? text.join('\n\n') : text}</p>
      </div>

      <div class={cx(s.parallaxes, align && s[align])}>
        {items.map((item, i) => (
          <ParallaxObject
            key={'parallax_bump_' + i}
            image={item.image}
            speed={item.speed}
            startPos={item.startPos}
            diagonal={item.diagonal}
            width={item.width}
            align={item - align}
          />
        ))}
      </div>

    </div>
  </div>
)
