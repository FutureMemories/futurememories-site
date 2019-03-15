import cx from 'classnames'
import Icon from './icon'
import { company } from '../data.json'
import s from './footer.sass'

export default ({ dark, links }) => (
  <footer class={cx(s.footer, dark && s.dark)}>
    <div class={s.inner}>

      <div class={s.first}>
        <div class={s.talkToUs}>
          <h2>Got something on your mind?</h2>
          <a href={`mailto:${company.email}`}>Get in touch with us!</a>
        </div>

        <div />

        <div class={s.menu}>
          {links.map(link => (
            <a href={link.to}>{link.label}</a>
          ))}
          <a href='https://goo.gl/maps/rWZkuD1fT8J2' target='_blank'>Find us</a>
        </div>

        <div class={s.contact}>
          <p>{company.name}</p>
          <p>{company.street}</p>
          <p>{company.zip}, {company.city}</p>

          <p>Business enquiries</p>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>

      <hr />

      <div class={s.second}>
        <a href='/' title='Home'><Icon id='logo' class={s.logo} /></a>
        <div class={s.social}>
          <a target='_blank' rel='nofollow' href='https://www.facebook.com/futurememoriesab/' aria-label='Futurememories on Facebook'>
            <Icon id='facebook' />
          </a>
          <a target='_blank' rel='nofollow' href='https://www.instagram.com/futurememoriesab/' aria-label='Futurememories on Instagram'>
            <Icon id='instagram' />
          </a>
          <a target='_blank' rel='nofollow' href='https://www.linkedin.com/company/5100963/' aria-label='Futurememories on Linkedin'>
            <Icon id='linkedin' />
          </a>
        </div>
      </div>

    </div>
  </footer>
)
