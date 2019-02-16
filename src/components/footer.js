import cx from 'classnames'
import Icon from './icon'
import s from './footer.sass'

export default ({ dark }) => (
  <footer class={cx(s.footer, dark && s.dark)}>
    <div class={s.inner}>

      <div class={s.first}>
        <div class={s.talkToUs}>
          <h2>Got something on your mind?</h2>
          <a href='#'>Talk with us!</a>
        </div>

        <div />

        <div class={s.menu}>
          <a href='#'>Home</a>
          <a href='#'>Work</a>
          <a href='#'>About</a>
          <a href='#'>Clients</a>
          <a href='#'>Contact</a>
        </div>

        <div class={s.contact}>
          <p>Future Memoires AB</p>
          <p>Vallgatan 25</p>
          <p>413 00, Gothenburg</p>

          <p>Call office</p>
          <p>0702 00 00 00</p>

          <p>Email office</p>
          <p>hello@futurememories.se</p>
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
