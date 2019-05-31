import cx from 'classnames'
import s from './parallax-object-block.sass'
import ParallaxObject from './parallax-object'

export default ({ items, background, diagonal }) => (
  <div
    class={cx(s.parallaxObjectBlock, diagonal && s.diagonal)}
    style={{ background }}
  >
    <div class={s.inner}>
      <div class={s.content}>
        {items.map(item => (
          <ParallaxObject
            image={item.image}
            alt={item.alt}
            speed={item.speed}
            startPos={item.startPos}
            diagonal={diagonal}
          />
        ))}
      </div>
    </div>
  </div>
)
