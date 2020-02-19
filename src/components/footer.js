import cx from 'classnames'
import Icon from './icon'
import s from './footer.sass'
import getLanguageLink from '../utils/getLanguageLink'

export default ({ company, dark, background, links, content }) => (
  <footer class={cx(s.footer, dark && s.dark)} style={{ background }}>
    <div class={s.inner}>

      <div class={s.first}>
        <div class={s.talkToUs}>
          <h2>{content.somethingOnYourMind}</h2>
          <a href={`mailto:${company.email}`}>{content.getInTouch}</a>
        </div>

        <div />

        <div class={s.menu}>
          {links.map(link => (
            <a key={'footer_' + link.to} href={getLanguageLink(link.to)}>{link.label}</a>
          ))}
          <a href='https://goo.gl/maps/rWZkuD1fT8J2' target='_blank' rel='noopener noreferrer'>{content.findUs}</a>
        </div>

        <div class={s.contact}>
          <p>{company.name}</p>
          <p>{company.street}</p>
          <p>{company.zip}, {company.city}</p>

          <p>{content.businessEnquiries}</p>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>

      <hr />

      <div class={s.second}>
        <a href={getLanguageLink('/')} title='Home'>
          <Icon id='logo' class={s.logo} />
        </a>
        <div class={s.social}>
          <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/futurememoriesab/' aria-label={content.onFacebook}>
            <Icon id='facebook' />
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/futurememoriesab/' aria-label={content.onInstagram}>
            <Icon id='instagram' />
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/company/5100963/' aria-label={content.onLinkedIn}>
            <Icon id='linkedin' />
          </a>
        </div>
      </div>

    </div>
  </footer>
)
