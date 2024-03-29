import cx from 'classnames'
import s from './slide-in-block.sass'

export default ({ image, mobileImage, alt = 'image', title, text, background = '', color = '', modifier, align, inView, className }) => (
  <div
    class={cx(s.slideInBlock, align && s[align], modifier && s[modifier], s.inView, !!mobileImage && s.hasMobileImage, className)}
    style={{ background, color }}
  >
    {image.positon !== 'inside' && (
      <div class={s.slider}>
        <img class={s.desktop} alt={alt} src={require(`../../images/${image}`)} />
        {mobileImage && <img class={s.mobile} alt={alt} src={require(`../../images/${mobileImage}`)} />}
      </div>
    )}
    <div class={cx(s.inner, modifier && modifier, inView)}>
      {image.positon === 'inside' && ([
        <img key='desktop-image' class={s.desktop} alt={alt} src={require(`../../images/${image.path}`)} width={image.width} height={image.height} />,
        mobileImage && <img key='mobile-image' class={s.mobile} alt={alt} src={require(`../../images/${image.path}`)} width={image.width} height={image.height} />
      ])}
      <div class={s.content}>
        <h1>{title}</h1>
        <p>{Array.isArray(text) ? text.join('\n\n') : text}</p>
      </div>
    </div>
  </div>
)
