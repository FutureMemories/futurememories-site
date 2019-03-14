import cx from 'classnames'
import s from './parallax-bump-block.sass'
import ParallaxObject from './parallax-object'

export default ({ title, text, items, align, background, color, inView }) => (
  <div class={s.parallaxBumpBlock} style={cx(background && `background: ${background};`, color && `color:${color};`)}>
    <div class={cx(s.inner, inView && inView)}>

      <div class={s.content}>
        <h1>{title}</h1>
        <p>{Array.isArray(text) ? text.join('\n\n') : text}</p>
      </div>

      <div class={cx(s.parallaxes, align && s[align])}>
        {items.map(item => (
          <ParallaxObject
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
