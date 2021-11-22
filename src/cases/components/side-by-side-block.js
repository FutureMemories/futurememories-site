import cx from 'classnames'
import s from './side-by-side-block.sass'

export default ({ blocks, title, text, background = '', color = '', modifier, align, inView }) => (
  <div
    class={cx(s.sideBySideBlock, s.inView)}
    style={{ background, color }}
  >
    {blocks.map((block, i) => (
      <div class={s.block} key={`side-by-side-block_${i}`}>
        {block.image && <img src={require(`../../images/${block.image}`)} />}
        {block.title && <h2>{block.title}</h2>}
      </div>
    ))}

  </div>
)
