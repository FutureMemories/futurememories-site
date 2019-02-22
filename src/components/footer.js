import cx from 'classnames'
import Icon from './icon'
import { company } from '../data.json'
import s from './footer.sass'

export default ({ dark }) => (
  <footer class={cx(s.footer, dark && s.dark)}>
    <div class={s.inner}>

      <div class={s.first}>
        <div class={s.talkToUs}>
          <h2>Got something on your mind?</h2>
          <a href={`mailto:${company.email}`}>Talk with us!</a>
        </div>

        <div />

        <div class={s.menu}>
          <a href='/'>Home</a>
          <a href='/work'>Work</a>
          <a href='/about'>About</a>
          <a href='#'>Clients</a>
          <a href='#'>Contact</a>
        </div>

        <div class={s.contact}>
          <p>{company.name}</p>
          <p>{company.street}</p>
          <p>{company.zip}, {company.city}</p>

          <p>Call office</p>
          <a href={`tel:+46 (0)${company.phone.substr(1)}`}>{company.phone}</a>

          <p>Email office</p>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>

      <hr />

      <div class={s.second}>
        <a href='/'><Icon id='logo' class={s.logo} /></a>
        <div class={s.social}>
          <a target='_new' href='https://www.facebook.com/futurememoriesab/'>
            <Icon id='facebook' />
          </a>
          <a target='_new' href='https://www.instagram.com/futurememoriesab/'>
            <Icon id='instagram' />
          </a>
          <a target='_new' href='https://www.linkedin.com/company/5100963/'>
            <Icon id='linkedin' />
          </a>
        </div>
      </div>

    </div>
  </footer>
)
