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
                <h1>Påskharen behöver din hjälp!</h1>
                <p>Påskharen har byggt en äggmaskin. Maskinen producerar oändligt många ägg på löpande band. Det går väldigt fort och effektivt, men det verkar ske en hel del spill. Kan du hjälpa haren att räkna hur många ägg som klarar sig?</p>
                <p>Räknat från första okrossade ägget, hur många hela ägg per 20 sekunder skickas från <strong>wss://count-the-eggs.futurememories.se</strong>?</p>
                <p>Koppla upp dig mot ovanstående påskserver, samla in alla ägg och skicka tillbaka summan av de okrossade äggen efter 20 sekunder så finns det en chans att påskharen svarar med ett meddelande.</p>
              </div>
            )
            : (
              <div class={s.first}>
                <h1>Minns du vad du gjorde imorgon?</h1>
                <p>I år består inte bara påsken av harar och ägg utan även en utmaning. Som i och för sig består av en hare och oändligt många ägg.</p>
                <p>Har du vad som krävs för att lösa problemet?</p>
                <a class={s.enterParagraph} onClick={() => this.setState({ step: 2 })}>Tryck <span class={s.enter}>{'{ enter }'}</span> för att anta Påskutmaningen.</a>
              </div>
            )
        }
      </div>
    )
  }
}
