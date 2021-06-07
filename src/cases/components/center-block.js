import cx from 'classnames'
import s from './center-block.sass'
import Button from '../../components/button'

export default ({ title, text, link, component, src, alt = 'image', background = '', color = '', children, modifier, className, enableOrderChange, inView }) => (
  <div
    class={cx(s.centerBlock, modifier && s[modifier], className)}
    style={{ background, color }}
  >
    <div class={cx(s.inner, !src && s.block, src && src.align && s[src.align])}>
      {src && (<img alt={alt} src={require(`../../images/${src.path || src}`)} style={src.style} />)}
      <div class={cx(s.content, inView, 'content')}>
        <div class={cx(s.block, text && s.center, enableOrderChange && s.enableOrderChange)}>
          {title && (<h2 class={cx(!text && s.removePadding)}>{title}</h2>)}
          {text && (<p>{text}</p>)}
          {link && (
            <Button to={link[1]} target='_blank' rel='noopener noreferrer' arrow transition='slide' customClass={s.link} label={link[0]} />
          )}
          {component && (component)}
          {children}
        </div>
      </div>
    </div>
  </div>
)
