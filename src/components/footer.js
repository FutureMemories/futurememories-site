import cx from 'classnames'
import Icon from './icon'
import s from './footer.sass'
import getLanguageLink from '../utils/getLanguageLink'

export default ({ company, light, background, links, content }) => (
  <footer class={cx(s.footer, light && s.light)} style={{ background }}>
    <div class={s.inner}>
      <div class={s.row}>
        <a href={getLanguageLink('/')} title='Home' class={s.logo}>
          <Icon id='logo' />
        </a>

        <div class={s.menu}>
          {links.map(link => (
            <a key={'footer_' + link.to} href={getLanguageLink(link.to)}>{link.label}</a>
          ))}
        </div>

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

      <p class={s.contact}>
        <span class={s.name}>{company.name} -</span>{' '}
        {company.street} - {company.zip}, {company.city} {'//'} <a href={'mailto:' + company.email}>{company.email}</a>
      </p>
    </div>
  </footer>
)
