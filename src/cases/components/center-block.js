import cx from 'classnames'
import s from './center-block.sass'

export default ({ title, text, src, alt = 'image', background, color, children, modifer, inView }) => (
  <div class={cx(s.centerBlock, modifer && s[modifer])} style={cx(background && `background: ${background};`, color && `color:${color};`)}>
    <div class={cx(s.inner, !src && s.block, src && src.align && s[src.align])}>
      {src && (<img alt={alt} src={require(`../../images/${src.path || src}`)} style={src.style} />)}
      <div class={cx(s.content, inView)}>
        <div class={cx(s.block, text && s.center)}>
          {title && (<h1>{title}</h1>)}
          {text && (<p>{text}</p>)}
          {children}
        </div>
      </div>
    </div>
  </div>
)
