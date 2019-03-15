import { Component } from 'preact'
import Base from '../_base'
import ProjectsBlock from '../components/projects-block'
import Moon from '../components/moon'
import { allCases, company } from '../data.json'
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
                We team up with our clients to create <span>exceptional digital products and services</span> that make a difference.
              </h1>
            </div>

            <div class={s.work}>
              <div class={s.text}>
                <h1>What we’ve been up to</h1>
                <p>Some of the most noticeable digital productions we have accomplished together so far.</p>
              </div>
              <ProjectsBlock projects={allCases} />
            </div>

            <div class={s.partners}>
              <Moon position='topRight' size='extraSmall' background='blue' customClass={s.smallMoon} />
              <Moon position='topLeft' size='medium' background='blue' customClass={s.moon} style='opacity: 0.5;' />
              <div class={s.text}>
                <h1>Howdy, partner!</h1>
                <p>Say hi to some of our partners</p>
              </div>
              <div class={s.content}>
                {company.partners.map(partner => (
                  <div class={s.partner}>
                    <img alt={`${partner.name} logo`} src={require(`../images/${partner.logo}`)} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Base>
    )
  }
}
