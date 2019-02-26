import cx from 'classnames'
import s from './large-image.sass'

export default ({ src, video, width, height, background, modifier, children }) => (
  <div class={cx(s.largeImage, background && !video && s.smallImage, modifier && s[modifier])} style={background && `background: ${background}`}>
    {video ? (
      <div class={s.videoBlock}>
        <video class='video' poster={require(`../../images/${src}`)} controls='controls' height='auto' width='100%' preload='metadata'>
          <source src={require(`../../videos/${video}`)} type='video/mp4' />
        </video>
      </div>
    ) : (
      <img src={require(`../../images/${src}`)} width={width} />
    )}
    {children}
  </div>
)