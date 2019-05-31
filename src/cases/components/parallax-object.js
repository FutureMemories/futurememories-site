import { Component } from 'preact'
import cx from 'classnames'
import s from './parallax-object.sass'

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
    this.scrollPoint = window.pageYOffset + window.innerHeight
    this.greatGrandParent = this.parallax.parentElement.parentElement.parentElement

    if (this.scrollPoint > this.greatGrandParent.offsetTop && window.pageYOffset < (this.greatGrandParent.offsetTop + this.greatGrandParent.offsetHeight)) {
      const positon = (this.scrollPoint - this.greatGrandParent.offsetTop) / this.speed
      this.parallax.style.transform = `translateY(${positon.toFixed(1)}px)`
    }
  }

  render ({ image, alt = 'image', speed, startPos, diagonal, width }) {
    return (
      <div
        class={cx(s.parallaxObject)}
        style={{ transform: 'translateY(-12px)' }}
        ref={(el) => {
          this.parallax = el
          this.speed = speed
        }}
      >
        <img
          class={cx(s.parallaxBackground, diagonal && s.diagonal)}
          style={{ top: `${startPos}%`, maxWidth: width }}
          src={require(`../../images/${image}`)}
          alt={alt}
        />
      </div>
    )
  }
}
