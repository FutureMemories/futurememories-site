import cx from 'classnames'
import s from './three-block.sass'

export default ({ blocks, background, color, modifier, inView }) => (
  <div
    class={cx(s.threeBlock, modifier && s[modifier])}
    style={{ background, color }}
  >
    <div class={cx(s.inner, inView)}>
      <div class={s.blocks}>
        {blocks.map((block, i) => (
          <div key={'three_block_' + i} class={s.block}>
            {block.type === 'image' && modifier === 'nordish-kitchen' ? (
              <div class={cx(s.stackedImages, inView && s.inView)}>
                <img class={s[block.modifier]} src={require(`../../images/${block.image}`)} />
                <img class={s[block.modifier]} src={require('../../images/cases/nordish-kitchen-arrows.png')} />
              </div>
            ) : block.type === 'image' && (
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
            {block.type === 'text-array' && (
              <div class={s[block.modifier]}>
                {
                  block.array.map((textBlock, i) => (
                    <div key={'three_block_div' + i} class={s.arrayBlock}>
                      {textBlock.title && (<h1>{textBlock.title}</h1>)}
                      {<p>{textBlock.text}</p>}
                    </div>
                  ))
                }
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
)
