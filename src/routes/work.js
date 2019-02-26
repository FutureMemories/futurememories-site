import { Component } from 'preact'
import Base from '../_base'
import ProjectsBlock from '../components/projects-block'
import Moon from '../components/moon'
import { allCases } from '../data.json'
import s from './work.sass'

export default class extends Component {
  render (_, { lightLeft, lightTop }) {
    return (
      <Base>
        <div class={s.view}>
          <div class={s.inner}>

            <div class={s.welcome} >
              <Moon position='bottomLeft' size='medium' background='red' customClass={s.moon} style={`margin-left: -${lightLeft}px; margin-top: -${lightTop}px;`} />
              <h1>
                We do not have clients, <span>we have partners.</span> And together we create digital products and services of tomorrow.
              </h1>
            </div>

            <div class={s.work}>
              <div class={s.text}>
                <h1>What we’ve been up to</h1>
                <p>We work with exceptional companies tirelessly to create products that makes all of our lives better.</p>
              </div>
              <ProjectsBlock projects={allCases} />
            </div>

          </div>
        </div>
      </Base>
    )
  }
}
