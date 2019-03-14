import cx from 'classnames'
import s from './text-grid-block.sass'

export default ({ blocks, background, color }) => (
  <div class={s.textGridBlock} style={cx(background && `background: ${background};`, color && `color:${color};`)}>
    <div class={s.inner} />
    <div class={s.blocks}>
      {blocks.map(block => (
        <div class={cx(s.block, block.inView)}>
          {
            block.image && block.title ? (
              <h1>{block.title}</h1>
            ) : block.image ? (
              <img src={require(`../../images/${block.image}`)} />
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
