import { Component } from 'preact'
import g from './_global.sass'
// import s from './home.sass'

export default class extends Component {
  render () {
    return (
      <div class={g.view}>
        <div class={g.inner}>
          <h2>Welcome</h2>
        </div>
      </div>
    )
  }
}
