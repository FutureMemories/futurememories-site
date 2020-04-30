import cx from 'classnames'
import s from './text-block.sass'
import Button from '../../components/button'

export default ({ title, text, image, link, background = '', color = '', titleIcon, modifier, inView }) => {
  const textIsAnArray = Array.isArray(text)

  return (
    <div
      class={s.textBlock}
      style={{ background, color }}
    >
      <div class={cx(s.inner, modifier && modifier, inView)}>
        {titleIcon
          ? <span class={s.titleIcon}><img src={require(`../../images/${titleIcon}`)} /> <h1>{title}</h1></span>
          : <h1>{title}</h1>}

        <div class={cx(s.content, textIsAnArray && s.fullWidth)}>
          {textIsAnArray ? (
            text.map((paragraf, i) => (
              <p key={'text_bock_p_' + i}>{paragraf}</p>
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
          <Button to={link[1]} target='_blank' rel='noopener noreferrer' arrow transition='slide' customClass={s.link} label={link[0]} />
        )}

      </div>
    </div>
  )
}
