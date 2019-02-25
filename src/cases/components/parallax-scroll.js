import { Component } from 'preact'
import cx from 'classnames'
import s from './parallax-scroll.sass'

export default class extends Component {
  componentDidMount () {
    if (!this._frameId) {
      this._frameId = setInterval(() => {
        window.requestAnimationFrame(this.parallaxMockup.bind(this))
      }, 100)
    }
  }

  componentWillUnmount () {
    window.clearInterval(this._frameId)
  }

  parallaxMockup () {
    this.scrollPoint = window.pageYOffset + (window.innerHeight / 2)
    if (this.scrollPoint > this.parallax.offsetTop && window.pageYOffset < (this.parallax.offsetTop + this.parallax.offsetHeight)) {
      const positon = (this.scrollPoint - this.parallax.offsetTop) / 5
      this.parallax.lastChild.style.transform = `translateY(-${positon.toFixed(1)}px)`
    }
  }

  render ({ frame, background }) {
    if (frame !== 'iphonex') return

    return (
      <div
        class={cx(s.parallaxScroll, frame && s[frame])}
        ref={(el) => { this.parallax = el }}
      >
        <img class={s.parallaxFrame} src={require(`../../images/frame-${frame}.png`)} />
        <div class={s.parallaxContent} style={`transform: translateY(-2px)`}>
          <img class={s.parallaxBackground} src={require(`../../images/${background}`)} />
        </div>
      </div>
    )
  }
}
