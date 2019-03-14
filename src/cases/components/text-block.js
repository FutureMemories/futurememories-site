import cx from 'classnames'
import s from './text-block.sass'

export default ({ title, text, image, link, background, color, modifier, inView }) => (
  <div class={s.textBlock} style={cx(background && `background: ${background};`, color && `color:${color};`)}>
    <div class={cx(s.inner, modifier && modifier, inView)}>
      <h1>{title}</h1>
      <p>{text}</p>

      {image && (
        <img
          src={require(`../../images/${image[1]}`)}
          alt={image[0]}
          class={!image[2] && s.shadow}
          style={image[2] && `width: ${image[2]}px`}
        />
      )}

      {link && (
        <a href={link[1]}>{link[0]}</a>
      )}

    </div>
  </div>
)
