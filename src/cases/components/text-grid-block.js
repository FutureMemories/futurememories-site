import cx from 'classnames'
import s from './text-grid-block.sass'

export default ({ blocks, background, color }) => (
  <div
    class={s.textGridBlock}
    style={{ background, color }}
  >
    <div class={s.inner} />
    <div class={s.blocks}>
      {blocks.map(block => (
        <div class={cx(s.block, block.inView, block.image && s.image)}>
          {
            block.image && block.title ? (
              <h1>{block.title}</h1>
            ) : block.image ? (
              <img alt={block.alt || 'Image'} src={require(`../../images/${block.image}`)} />
            ) : block.title && ([
              <h1>{block.title}</h1>,
              <p>{block.desc}</p>
            ])
          }
        </div>
      ))}
    </div>
  </div>
)
