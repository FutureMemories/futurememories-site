import { Component } from 'preact'
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
    const { left, top, width, height } = ev.srcElement.getBoundingClientRect()
    const mouseX = ev.clientX - left
    const mouseY = ev.clientY - top
    const x = (0.5 - (mouseX / width)) * 1
    const y = (0.5 - (mouseY / height)) * -1
    const deg = Math.atan2(-y, x) * 180 / Math.PI + 90

    const { rotateX, rotateY } = this.state

    this.setState({
      perspective: 20,
      translateZ: 0.1,
      rotateX: ease(x, rotateX && !isNaN(rotateX) ? rotateX : 0),
      rotateY: ease(y, rotateY && !isNaN(rotateY) ? rotateY : 0),
      shineDeg: deg
    })
  }

  mouseOut = () => {
    // TODO: bug: we get onMouseOut on block.
    this.setState({
      perspective: 0,
      translateZ: 0,
      rotateX: 0,
      rotateY: 0,
      shineDeg: 0
    })
  }

  render ({ customClass, customStyle, children }, state) {
    return (
      <div
        class={customClass}
        style={
          `transform:
          perspective(${state.perspective}rem)
          translateZ(${state.translateZ}rem)
          rotateX(${state.rotateX}deg)
          rotateY(${state.rotateY}deg);${customStyle ? ' ' + customStyle : ''}`
        }
        onMouseMove={(ev) => this.mouseOver(ev)}
        onMouseOut={this.mouseOut}
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
      </div>
    )
  }
}