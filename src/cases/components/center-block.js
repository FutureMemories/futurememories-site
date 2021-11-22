import Button from '../../components/button'
import cx from 'classnames'
import s from './center-block.sass'

export default ({ title, text, link, component, src, alt = 'image', background = '', color = '', children, modifier, className, enableOrderChange, inView, customLinkStyle }) => (
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
            <Button
              arrow
              to={link[1]}
              target='_blank'
              rel='noopener noreferrer'
              transition='slide'
              customClass={cx(s.link, link[2])}
              label={link[0]}
            />
          )}
          {component && (component)}
          {children}
        </div>
      </div>
    </div>
  </div>
)
