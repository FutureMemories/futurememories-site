import cx from 'classnames'
import s from './text-two-col.sass'
import Button from '../../components/button'

export default ({ title, text, link, background = '', titleColor = '', textColor = '', modifier, inView }) => (
  <div
    class={cx(s.textTwoCol, modifier && s[modifier])}
    style={{ background }}
  >
    <div class={cx(s.inner, inView)}>
      <h2 class={s.title} style={{ color: titleColor }}>{title}</h2>
      <p class={s.twoColText} style={{ color: textColor }}>{text}</p>
      {link && <Button to={link.url} target={link.targetBlank && '_blank'} rel={link.targetBlank && 'noopener noreferrer'} arrow transition='slide' customClass={s.link} label={link.label} />}
    </div>
  </div>
)
