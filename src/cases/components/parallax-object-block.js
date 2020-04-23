import cx from 'classnames'
import s from './parallax-object-block.sass'
import ParallaxObject from './parallax-object'

export default ({ className, items, background = '', diagonal, horizontal }) => (
  <div
    class={cx(s.parallaxObjectBlock, diagonal && s.diagonal, horizontal && s.horizontal, className)}
    style={{ background }}
  >
    <div class={s.inner}>
      <div class={s.content}>
        {items.map((item, i) => (
          <ParallaxObject
            key={'parallax_object_' + i}
            image={item.image}
            alt={item.alt}
            speed={item.speed}
            startPos={item.startPos}
            diagonal={diagonal}
            horizontal={horizontal}
          />
        ))}
      </div>
    </div>
  </div>
)
