import cx from 'classnames'
import s from './large-image.sass'

export default ({ src, width, height, background, modifier, children }) => (
  <div class={cx(s.largeImage, background && s.smallImage, modifier && s[modifier])} style={background && `background: ${background}`}>
    <img src={require(`../../images/${src}`)} width={width} />
    {children}
  </div>
)
