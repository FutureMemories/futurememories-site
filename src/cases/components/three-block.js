import cx from 'classnames'
import s from './three-block.sass'

export default ({ blocks, background, color }) => (
  <div class={s.threeBlock} style={cx(background && `background: ${background};`, color && `color:${color};`)}>
    <div class={s.inner}>
      <div class={s.blocks}>
        {blocks.map(block => (
          <div class={s.block}>
            {block.type === 'image' && (
              <img class={s[block.modifier]} src={require(`../../images/${block.image}`)} />
            )}
            {block.type === 'text' && ([
              block.title && (<h1>{block.title}</h1>),
              <p>{block.text}</p>,
              block.items && (
                <ul>
                  {block.items && block.items.map(item => (
                    <li>{item}</li>
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
