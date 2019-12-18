import cx from 'classnames'
import s from './text-block.sass'

export default ({ title, text, image, link, background, color, modifier, inView }) => {
  const textIsAnArray = Array.isArray(text)

  return (
    <div
      class={s.textBlock}
      style={{ background, color }}
    >
      <div class={cx(s.inner, modifier && modifier, inView)}>
        <h1>{title}</h1>
        <div class={cx(s.content, textIsAnArray && s.fullWidth)}>
          {textIsAnArray ? (
            text.map(paragraf => (
              <p>{paragraf}</p>
            ))
          ) : (
            <p>{text}</p>
          )}
        </div>

        {image && (
          <img
            src={require(`../../images/${image[1]}`)}
            alt={image[0]}
            class={!image[2] && s.shadow}
            style={{ width: image[2] && `${image[2]}px` }}
          />
        )}

        {link && (
          <a href={link[1]} target='_blank' rel='noopener noreferrer'>{link[0]}</a>
        )}

      </div>
    </div>
  )
}
