import cx from 'classnames'
import s from './backgroundimage-with-text-block.sass'
import Button from '../../components/button'

export default ({ title, text, link, src, alt = 'image', background = '', color = '', modifier, className, inView }) => (
  <div
    class={cx(s.backgroundImageWithTextBlock, modifier && s[modifier], className)}
    style={{ background, color }}
  >
    <div class={cx(s.inner)}>
      {src && (<img class={s.backgroundImage} alt={alt} src={require(`../../images/${src.path || src}`)} style={src.style} />)}
      <div class={cx(s.content, inView, 'content')}>
        <div class={cx(s.textBlock, text && s.center)}>
          {title && (<h2 class={s.title}>{title}</h2>)}
          {text && (<p class={s.text}>{text}</p>)}
          {link && (
            <Button to={link[1]} target='_blank' rel='noopener noreferrer' arrow transition='slide' customClass={s.link} label={link[0]} />
          )}
        </div>
      </div>
    </div>
  </div>
)
