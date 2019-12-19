import cx from 'classnames'
import s from './center-block.sass'

export default ({ title, text, component, src, alt = 'image', background, color, children, modifer, className, inView }) => (
  <div
    class={cx(s.centerBlock, modifer && s[modifer], className)}
    style={{ background, color }}
  >
    <div class={cx(s.inner, !src && s.block, src && src.align && s[src.align])}>
      {src && (<img alt={alt} src={require(`../../images/${src.path || src}`)} style={src.style} />)}
      <div class={cx(s.content, inView)}>
        <div class={cx(s.block, text && s.center)}>
          {title && (<h1 class={cx(!text && s.removePadding)}>{title}</h1>)}
          {text && (<p>{text}</p>)}
          {component && (component)}
          {children}
        </div>
      </div>
    </div>
  </div>
)
