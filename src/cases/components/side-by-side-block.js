import cx from 'classnames'
import s from './side-by-side-block.sass'

export default ({ blocks, title, text, background = '', color = '', backgroundLeft = '', modifier, align, inView }) => (
  <div
    class={cx(s.sideBySideBlock, s.inView, modifier && s[modifier])}
    style={{ background, color }}
  >
    {blocks.map((block, i) => (
      <div class={cx(s.block, inView)} style={{ background: i === 1 && backgroundLeft }} key={`side-by-side-block_${i}`}>
        {block.image && <img src={require(`../../images/${block.image}`)} alt={block.title} class={cx(block.align && s[block.align])} />}
        {block.title && <h2>{block.title}</h2>}
        {block.text && (
          <div class={s.textWrapper}>
            <h2>{block.text.title}</h2>
            <p>{block.text.p}</p>
          </div>
        )}
      </div>
    ))}

  </div>
)
