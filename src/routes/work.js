import { Component } from 'preact'
import Base from '../_base'
import ProjectsBlock from '../components/projects-block'
import Moon from '../components/moon'
import { allCases, company } from '../data.json'
import s from './work.sass'

export default class extends Component {
  componentDidMount () {
    window.addEventListener('scroll', this.onScroll)
    this.heroText.style = undefined
    this.workPlanetM.base.style = undefined
    this.workPlanetXS.base.style = undefined
  }

  onScroll = () => {
    this.scrollPoint = window.pageYOffset + (window.innerHeight / 1.4)

    if (window.pageYOffset < (this.heroText.offsetTop + this.heroText.offsetHeight)) {
      this.heroText.style.transform = `translateY(-${(window.pageYOffset / 5).toFixed(1)}px)`
    }

    // Parallax effect on 'Partners' block
    const planetPartnersScroll = this.scrollPoint - (this.workPartnersBlock.offsetTop / 1.1)
    if (planetPartnersScroll > 0 && window.pageYOffset < (this.workPartnersBlock.offsetTop + this.workPartnersBlock.offsetHeight)) {
      this.workPlanetXSPosition = (planetPartnersScroll / 7).toFixed(1)
      this.workPlanetM.base.style.transform = `scale(1.56) translateY(${(planetPartnersScroll / 25).toFixed(1)}px`
      this.workPlanetXS.base.style.transform = `scale(0.40) translateY(${this.workPlanetXSPosition < 0 ? '' : '-'}${Math.abs(this.workPlanetXSPosition)}px`
    }
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }

  render () {
    return (
      <Base title='Our work' route='/work'>
        <div class={s.view}>
          <div class={s.inner}>

            <div class={s.welcome} >
              <Moon
                position='bottomLeft'
                size='medium'
                background='red'
                customClass={s.moon}
              />
              <h1 ref={(el) => { this.heroText = el }}>
                We team up to create exceptional digital <span>products and services</span> of tomorrow.
              </h1>
            </div>

            <div class={s.work}>
              <div class={s.text}>
                <h1>What we’ve been up to</h1>
                <p>Some of the most noticeable digital productions we have accomplished together so far.</p>
              </div>
              <ProjectsBlock allProjects={allCases} />
            </div>

            <div class={s.partners} ref={(el) => { this.workPartnersBlock = el }}>
              <Moon
                position='topRight'
                size='extraSmall'
                background='blue'
                customClass={s.smallMoon}
                ref={(el) => { this.workPlanetXS = el }}
              />
              <Moon
                position='topLeft'
                size='medium'
                background='blue'
                customClass={s.moon}
                style='opacity: 0.5;'
                ref={(el) => { this.workPlanetM = el }}
              />
              <div class={s.text}>
                <h1>Howdy, partner!</h1>
                <p>Say hi to some of our friends</p>
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
