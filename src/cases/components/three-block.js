import cx from 'classnames'
import s from './three-block.sass'

export default ({ blocks, background, color, inView }) => (
  <div
    class={s.threeBlock}
    style={{ background, color }}
  >
    <div class={cx(s.inner, inView)}>
      <div class={s.blocks}>
        {blocks.map((block, i) => (
          <div key={'three_block_' + i} class={s.block}>
            {block.type === 'image' && (
              <img class={s[block.modifier]} src={require(`../../images/${block.image}`)} />
            )}
            {block.type === 'text' && ([
              block.title && (<h1>{block.title}</h1>),
              <p key={'three_block_p_' + i}>{block.text}</p>,
              block.items && (
                <ul>
                  {block.items && block.items.map((item, i) => (
                    <li key={'three_block_li_' + i}>{item}</li>
                  ))}
                </ul>
              )
            ])}
          </div>
        ))}
      </div>
    </div>
  </div>
)
