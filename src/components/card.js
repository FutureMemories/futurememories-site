import { Component } from 'preact'
import cx from 'classnames'
import s from './card.sass'

const ease = (target, current) => {
  const value = current + ((target - current) * 0.1)
  return value < 0.0001 ? 0 : value
}

export default class extends Component {
  state = {
    perspective: 0,
    translateZ: 0,
    rotateX: 0,
    rotateY: 0,
    shineDeg: 0
  }

  mouseOver = (ev) => {
    const { left, top, width, height } = ev.currentTarget.getBoundingClientRect()
    const mouseX = ev.clientX - left
    const mouseY = ev.clientY - top
    const x = (0.5 - (mouseX / width)) * 1
    const y = (0.5 - (mouseY / height)) * -1
    const deg = Math.atan2(-y, x) * 180 / Math.PI + 90

    const { rotateX, rotateY } = this.state

    this.setState({
      perspective: 20,
      translateZ: 0.1,
      rotateX: ease(y, rotateX),
      rotateY: ease(x, rotateY),
      shineDeg: deg
    })
  }

  mouseOut = () => {
    this.setState({
      perspective: 0,
      translateZ: 0,
      rotateX: 0,
      rotateY: 0,
      shineDeg: 0
    })
  }

  render ({ customClass, customStyle, children, to }, state) {
    const CurrentTag = to ? 'a' : 'div'

    return (
      <CurrentTag
        class={cx(s.card, customClass)}
        href={to}
        style={
          `transform:
          perspective(${state.perspective}rem)
          translateZ(${state.translateZ}rem)
          rotateX(${state.rotateX}deg)
          rotateY(${state.rotateY}deg);${customStyle ? ' ' + customStyle : ''}`
        }
        onMouseMove={this.mouseOver}
        onMouseLeave={this.mouseOut}
      >
        <div
          class={s.shine}
          style={
            state.shineDeg &&
          `background: linear-gradient(${state.shineDeg}deg,
          rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0))`
          }
        />
        {children}
      </CurrentTag>
    )
  }
}
