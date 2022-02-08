import cx from 'classnames'
import s from './large-image.sass'

export default ({ src, mobileSrc, alt = 'image', video, width, height, background = '', modifier, className, inView, children }) => (
  <div
    class={cx(s.largeImage, background && !video && s.smallImage, modifier && s[modifier], className, mobileSrc && s.noPaddingMobile)}
    style={{ background }}
  >
    {video ? (
      <div class={s.videoBlock} key={`video_${video}`}>
        <video class='video' poster={src ? require(`../../images/${src}`) : ''} controls='controls' height='auto' width='100%' preload='metadata'>
          <source src={require(`../../videos/${video}`)} type='video/mp4' />
        </video>
      </div>
    ) : (
      <img alt={alt} src={require(`../../images/${src}`)} width={width} class={cx(inView, s.img, mobileSrc && s.hiddenOnMobile)} />
    )}
    {mobileSrc && <img alt={alt} src={require(`../../images/${mobileSrc}`)} width={width} class={cx(inView, s.img, s.mobileImage)} />}
    {children}
  </div>
)
