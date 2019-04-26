import { Component } from 'preact'
import Base from '../_base'
import TeamBlock from '../components/team-block'
import Moon from '../components/moon'
import { astronauts } from '../data.json'
import s from './team.sass'

export default class extends Component {
  componentDidMount () {
    window.addEventListener('scroll', this.onScroll)
    this.heroText.style = undefined
    this.teamPlanetXL.base.style = undefined
  }

  onScroll = () => {
    if (window.pageYOffset < (this.heroText.offsetTop + (this.heroText.offsetHeight + 500))) {
      this.heroText.style.transform = `translateY(-${(window.pageYOffset / 5).toFixed(1)}px)`
      this.teamPlanetXL.base.style.transform = `scale(2.7) translateY(${(window.pageYOffset / 25).toFixed(1)}px`
    }
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }

  render () {
    return (
      <Base title='The team'>
        <div class={s.view}>
          <div class={s.inner}>

            <div class={s.text} >
              <Moon
                position='topRight'
                size='big'
                background='blue'
                customClass={s.moonDesktop}
                ref={(el) => { this.teamPlanetXL = el }}
              />
              <Moon
                size='normal'
                position='topRight'
                background='blue'
                customClass={s.moonMobile}
              />
              <h1 ref={(el) => { this.heroText = el }}>
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
