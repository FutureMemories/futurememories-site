import { Component } from 'preact'
import s from './frontend-challenge.sass'

export default class extends Component {
  state = { tests: [], result: '' }

  componentWillMount () {
    const title = 'Minns du vad du gjorde imorgon?'

    if (typeof document !== 'undefined') {
      document.title = title
      document.querySelector('title').innerText = title

      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) metaDescription.setAttribute('content', 'Rymden är en unik plats där oförutsedda problem kan dyka upp precis när som helst. Har du var som krävs?')

      window.addEventListener('keyup', this.onKeyboard)
    }
  }

  componentWillUnmount () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keyup', this.onKeyboard)
    }
  }

  onKeyboard = (ev) => {
    if (ev.code === 'Enter' && this.state.step !== 2) {
      this.setState({ step: 2 })
    }
  }

  render ({ data, root }, { step }) {
    return (
      <div class={s.view}>
        <div class={s.background}>
          <p class={s.topLeft}>
            TESTING FACILITY<br />
            57.703859834356635, 11.966230927675603
          </p>
          <p class={s.bottomRight}>
            FUTURE AERONAUTICS AND<br />
            MEMORIES ADMINISTRATION
          </p>
        </div>
        {
          step === 2
            ? (
              <div class={s.second}>
                <p>Påskharen har funnits ända sedan 1600-talet! På ålderns höst har påskharen försökt modernisera och leverera påskägg över en socket-server. Men haren är lite förvirrad över vilken emoji som kidsen använder idag för att representera ägg, så skickar för säkerhets skull ut lite alla möjliga tecken och symboler. Haren behöver nu din hjälp att räkna hur många korrekta äggemojis som skickas ut.</p>
                <p>Hur många ägg, räknat från första ägget, per 20 sekunder skickas från <strong>wss://count-the-eggs.futurememories.se</strong>?</p>
                <p>Koppla upp mot socket-servern, räkna äggen, och skicka tillbaka ditt svar så finns det en chans att påskharen svarar med något meddelande.</p>
              </div>
            )
            : (
              <div class={s.first}>
                <h1>Minns du vad du gjorde imorgon?</h1>
                <p><del>Rymden</del> Påsken är en unik <del>plats</del> tid där oförutsedda <del>problem</del> emojis kan dyka upp precis när som helst. Har du vad som krävs?</p>
                <a class={s.enterParagraph} onClick={() => this.setState({ step: 2 })}>Tryck <span class={s.enter}>{'{ enter }'}</span> för att anta utmaningen.</a>
              </div>
            )
        }
      </div>
    )
  }
}
