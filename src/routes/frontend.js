import { Component } from 'preact'
import s from './frontend.sass'

export default class extends Component {
  render ({ data, root }) {
    return (
      <div class={s.view}>
        <h1>något om frontend</h1>
      </div>
    )
  }
}
