import Icon from '../../components/icon'
import cx from 'classnames'
import s from './device-block.sass'

export default ({ ios, andriod, customClass }) => (
  <div class={cx(s.deviceBlock, customClass && customClass)} >
    {ios && (
      <a class={s.device} href={ios} target='_blank'>
        <Icon class={s.logo} id='apple-logo' /> <span>App store</span> <Icon class={s.arrow} id='arrow' />
      </a>
    )}
    {andriod && (
      <a class={s.device} href={andriod} target='_blank'>
        <Icon class={s.logo} id='andriod-logo' /> <span>Google play</span> <Icon class={s.arrow} id='arrow' />
      </a>
    )}
  </div>
)
