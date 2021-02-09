import { Component } from 'preact'
import safeEval from 'safe-eval'
import { throttle } from 'throttle-debounce'
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import s from './frontend-challenge.sass'

class Editor extends Component {
  componentDidMount () {
    this.setupCodeMirror()
  }

  shouldComponentUpdate () {
    return false
  }

  setupCodeMirror = () => {
    const editor = CodeMirror(this.base, {
      mode: { name: 'javascript' },
      value: 'return ""',
      lineWrapping: true
    })

    editor.on('change', editor => {
      this.props.onUpdate(editor.getValue())
    })
  }

  render () {
    return <div class={s.editor} />
  }
}

export default class extends Component {
  state = { tests: [] }

  componentWillMount () {
    const title = 'Minns du vad du gjorde imorgon?'

    if (typeof document !== 'undefined') {
      document.title = title
      document.querySelector('title').innerText = title

      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) metaDescription.setAttribute('content', 'Rymden är en unik plats där oförutsedda problem kan dyka upp precis när som helst. Har du var som krävs?')
    }

    window.addEventListener('keyup', this.onKeyboard)

    this.updateTests('return ""')
  }

  componentWillUnmount () {
    window.removeEventListener('keyup', this.onKeyboard)
  }

  onKeyboard = (ev) => {
    if (ev.code && this.state.step !== 2) {
      this.setState({ step: 2 })
    }
  }

  runCode = (code, input) => {
    try {
      return safeEval(`(function(input){${code}})("${input}")`)
    } catch (err) {
      console.log(err.message)
    }
  }

  updateTests = (input) => {
    this.setState({
      tests: [
        { text: "expect(decipher('Bcd')).toBe('Abc')", value: this.runCode(input, 'Bcd'), expected: 'Abc' },
        { text: "expect(decipher('234')).toBe('123')", value: this.runCode(input, '234'), expected: '123' },
        { text: "expect(decipher('Ibmmæ!eås')).toBe('Hallå där')", value: this.runCode(input, 'Ibmmæ!eås'), expected: 'Hallå där' }
      ]
    })
  }

  handleUpdate = throttle(1000, this.updateTests)

  renderValue = (value) => {
    const v = JSON.stringify(value)
    if (value === null) return 'null'
    if (value === undefined) return 'undefined'
    return v
  }

  render ({ data, root }, { step, tests }) {
    const allTestsPassed = tests.reduce((res, t) => res && t.value === t.expected, true)

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
                <p>Vi har hittat den här textsträngen som innehåller ett hemligt meddelande som vi behöver din hjälp att tyda:</p>
                <code><span class={s.message}>Csb!kpccbu"!Wj!mfubs!kvtu!ov!fgufs!oæhpo!tpn!ejh/!Cbsb!buu!ev!cmfw!ozgjlfo!qæ!efuub!h÷s!ptt!åoov!nfs!jousfttfsbef!bw!ejh/!Nbjmb!cbsb!#Ifk#!ujmm!mjoebAgvuvsfnfnpsjft/tf!tæ!i÷s!wj!bw!ptt"</span></code>
                <p>Vi kan se att varje teckens <strong>char code</strong> är precis 1 kodvärde för högt. Vi har påbörjat en funktion och skrivit några enhetstester men vi behöver din hjälp att slutföra funktionen för att få ut meddelandet.</p>
                <code class={s.codeInput}>
                  {'function decipher(input) {\n'}
                  <Editor onUpdate={this.handleUpdate} />
                  {'}'}
                </code>
                <h2>Enhetstester:</h2>
                <code>
                  {tests
                    .map((t, i) => (
                      <span key={i}>
                        {t.text}
                        {t.value === t.expected
                          // eslint-disable-next-line
                          ? <span class={s.correctComment}>{' // Rätt'}</span>
                          : <span class={s.wrongComment}>{` // Fel (fick: ${this.renderValue(t.value)} istället för "${t.expected}")`}</span>}
                        {'\n'}
                      </span>
                    ))}
                </code>
                {allTestsPassed && <p>Utmärkt! Alla tester går igenom, nu är det fritt fram att testa funktionen med det hemliga meddelandet för att få fram en översättning.</p>}
              </div>
            )
            : (
              <div class={s.first}>
                <h1>Minns du vad du gjorde imorgon?</h1>
                <p>Rymden är en unik plats där oförutsedda problem kan dyka upp precis när som helst. Har du var som krävs?</p>
                <a class={s.enterParagraph} onClick={() => this.setState({ step: 2 })}>Tryck <span class={s.enter}>{'{ enter }'}</span> för att anta utmaningen.</a>
              </div>
            )
        }
      </div>
    )
  }
}
