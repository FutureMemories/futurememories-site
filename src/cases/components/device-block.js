import Icon from '../../components/icon'
import cx from 'classnames'
import s from './device-block.sass'

export default ({ ios, android, blackButtons, customClass }) => (
  <div class={cx(s.deviceBlock, blackButtons && s.black, customClass && customClass)}>
    {ios && (
      <a class={s.device} href={ios} target='_blank' rel='noopener noreferrer'>
        <Icon class={s.logo} id='apple-logo' /> <span>App store</span>
      </a>
    )}
    {android && (
      <a class={s.device} href={android} target='_blank' rel='noopener noreferrer'>
        <Icon class={s.logo} id='android-logo' /> <span>Google play</span>
      </a>
    )}
  </div>
)
