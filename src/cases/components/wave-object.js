import { Component } from 'preact'
import SineWaves from 'sine-waves'

export default class extends Component {
  componentDidMount () {
    this.sineWaves = new SineWaves({
      el: this.canvas,
      speed: this.props.speed,
      width: () => (window.innerWidth),
      height: this.props.height,
      ease: this.props.ease,
      wavesWidth: this.props.wavesWidth,
      waves: this.props.waves
    })
  }

  componentWillUnmount () {
    this.sineWaves.clear()
  }

  render ({ customClass }) {
    return (
      <div class={customClass} ref={(el) => { this.wave = el }}>
        <canvas ref={(el) => { this.canvas = el }} />
      </div>
    )
  }
}
