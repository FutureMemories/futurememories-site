import cx from 'classnames'
import s from './center-block.sass'

export default ({ title, text, src, icon, devices, background, color, waves, children }) => (
  <div class={s.centerBlock} style={cx(background && `background: ${background};`, color && `color:${color};`)}>
    <div class={cx(s.inner, !src && s.block, src && src.align && s[src.align])}>
      {src && (<img src={require(`../../images/${src.path || src}`)} />)}
      <div class={s.content}>
        {devices && (<img src={require(`../../images/${icon}`)} />)}
        <div class={cx(s.block, text && s.center)}>
          {title && (<h1>{title}</h1>)}
          {children}
          {text && (<p>{text}</p>)}
          {devices && (
            devices.ios && (
              <a href={devices.ios} target='_blank'>
                <img src={require(`../../images/icons/app-store.svg`)} />
              </a>
            ),
            devices.andriod && (
              <a href={devices.andriod} target='_blank'>
                <img src={require(`../../images/icons/google-play.svg`)} />
              </a>
            )
          )}
        </div>
      </div>
    </div>
  </div>
)
