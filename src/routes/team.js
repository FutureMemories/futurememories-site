import { Component } from 'preact'
import Base from '../_base'
import TeamBlock from '../components/team-block'
import Moon from '../components/moon'
import { astronauts } from '../data.json'
import s from './team.sass'

export default class extends Component {
  render () {
    return (
      <Base>
        <div class={s.view}>
          <div class={s.inner}>

            <div class={s.text} >
              <Moon position='topRight' size='big' background='blue' customClass={s.moonDesktop} />
              <Moon size='normal' position='topRight' background='blue' customClass={s.moonMobile} />
              <h1>
                <span>We are</span> designers, developers, creators and inventors with different backgrounds and expertise merged into a company called Future Memories.
              </h1>
            </div>

            <div class={s.astronauts}>
              <div class={s.text}>
                <h1>The team</h1>
                <p>The whole squad.</p>
              </div>
              <TeamBlock astronauts={astronauts} />
            </div>

          </div>
        </div>
      </Base>
    )
  }
}
