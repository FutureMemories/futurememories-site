import { Component } from 'preact'
import Base from '../_base'
import TeamBlock from '../components/team-block'
import Moon from '../components/moon'
import MarkupCustomElement from '../components/markup-custom-element'
import s from './team.sass'

export default class extends Component {
  componentDidMount () {
    window.addEventListener('scroll', this.onScroll)
    this.heroText.base.style = undefined
    this.teamPlanetXL.base.style = undefined
  }

  onScroll = () => {
    if (window.pageYOffset < (this.heroText.base.offsetTop + (this.heroText.base.offsetHeight + 500))) {
      this.heroText.base.style.transform = `translateY(-${(window.pageYOffset / 5).toFixed(1)}px)`
      this.teamPlanetXL.base.style.transform = `scale(2.7) translateY(${(window.pageYOffset / 25).toFixed(1)}px`
    }
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }

  render ({ data }) {
    return (
      <Base title={data.content.team.title} route='/team' data={data}>
        <div class={s.view}>
          <div class={s.inner}>

            <div class={s.text}>
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
              <MarkupCustomElement
                ref={el => { this.heroText = el }}
                element='h1'
                markup={data.content.team.hero}
                trim={false}
              />
            </div>

            <div class={s.astronauts}>
              <div class={s.text}>
                <h1>{data.content.team.teamHeader}</h1>
                <p>{data.content.team.teamSubheader}</p>
              </div>
              <TeamBlock astronauts={data.astronauts} />
            </div>

          </div>
        </div>
      </Base>
    )
  }
}
