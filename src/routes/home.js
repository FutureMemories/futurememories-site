import { Component } from 'preact'
import cx from 'classnames'
import Base from '../_base'
import ProjectsBlock from '../components/projects-block'
import Button from '../components/button'
import Moon from '../components/moon'
import TeamPictures from '../components/team-pictures'
import s from './home.sass'

export default class extends Component {
  state = { preActivePillar: '', activePillar: 'develop' }

  componentDidMount () {
    this.heroText.style = undefined
    this.homePlanetM.base.style = undefined
    this.homePlanetS.base.style = undefined
    this.homePlanetWorkS.base.style = undefined

    // Move planet light if firstView is true
    if (this.props.firstView) {
      let x = 0
      this._planetShine = setInterval(() => {
        x++
        if (x > 16) { clearInterval(this._planetShine) }
        this.setState({ lightLeft: 3 * x, lightTop: 3 * x })
      }, 145)
    }

    // randomize glitch effect, add extra empty block for pauses
    const foundationPillars = ['strategy', 'design', 'develop']
    this.randomizer = setInterval(() => {
      const randomPillar = foundationPillars[Math.floor(Math.random() * foundationPillars.length)]
      this.setState({
        // preActivePillar: this.state.activePillar,
        activePillar: randomPillar
      })

      // Remove old pillar after x milliseconds
      // setTimeout(() => {
      //   this.setState({ preActivePillar: [] })
      // }, Math.floor(Math.random() * 1000))
    }, Math.floor(Math.random() * 1000) + 1000)

    window.addEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    this.scrollPoint = window.pageYOffset + (window.innerHeight / 1.4)

    if (window.pageYOffset < (this.heroText.offsetTop + this.heroText.offsetHeight)) {
      this.heroText.style.transform = `translateY(-${(window.pageYOffset / 5).toFixed(1)}px)`
    }

    // Parallax effect on 'What We Do' block
    const planetWWDScroll = this.scrollPoint - this.informationBlock.offsetTop
    if (planetWWDScroll > 0 && window.pageYOffset < (this.informationBlock.offsetTop + this.informationBlock.offsetHeight)) {
      this.homePlanetSPosition = (planetWWDScroll / 11).toFixed(1)
      this.homePlanetM.base.style.transform = `scale(1.56) translateY(${(planetWWDScroll / 7).toFixed(1)}px`
      this.homePlanetS.base.style.transform = `translateY(${this.homePlanetSPosition < 0 ? '' : '-'}${Math.abs(this.homePlanetSPosition)}px`
    }

    // Parallax effect on 'Our work' block
    const planetWorkScroll = (this.scrollPoint - (this.homeWorkBlock.offsetTop * 1.3))
    if (planetWorkScroll > 0 && window.pageYOffset < (this.homeWorkBlock.offsetTop + this.homeWorkBlock.offsetHeight)) {
      this.homePlanetWorkS.base.style.transform = `scale(0.75) translateY(${(planetWorkScroll / 27).toFixed(1)}px)`
    }
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll)
    window.clearInterval(this._planetShine)
    window.clearInterval(this._randomizer)
  }

  render ({ data, firstView }, { lightLeft, lightTop, activePillar, preActivePillar }) {
    return (
      <Base firstView={firstView} route='/' data={data}>
        <div class={s.view}>
          <div class={s.inner}>

            <div class={s.welcome}>
              <Moon
                position={firstView ? 'middleRight' : 'topRight'}
                size='medium'
                background='blue'
                customClass={cx(s.moon, firstView && s.firstView)}
                style={{ left: lightLeft, top: lightTop }}
              />
              <h1 class={firstView && s.firstView} ref={(el) => { this.heroText = el }}>
                <span>Future Memories</span> {data.content.homeHeroEnding}
              </h1>
            </div>

            <div class={cx(s.information, this.state.inViewInformationBlock && s.inView)} ref={(el) => { this.informationBlock = el }}>
              <div class={s.foundationPillar}>
                <h1>What we do</h1>
                <p>
                  <span
                    class={cx(
                      (activePillar === 'strategy' || preActivePillar === 'strategy') && s.glitch,
                      activePillar === 'strategy' && activePillar,
                      preActivePillar === 'strategy' && preActivePillar
                    )}
                    data-text='Str4t3gy'
                  >
                    Strategy
                  </span>
                  {', '}
                  <span
                    class={cx(
                      (activePillar === 'design' || preActivePillar === 'design') && s.glitch,
                      activePillar === 'design' && activePillar,
                      preActivePillar === 'design' && preActivePillar
                    )}
                    data-text='Des1gn'
                  >
                    Design
                  </span>
                  {' & '}
                  <span
                    class={cx(
                      (activePillar === 'develop' || preActivePillar === 'develop') && s.glitch,
                      activePillar === 'develop' && activePillar,
                      preActivePillar === 'develop' && preActivePillar
                    )}
                    data-text='Devel0pm3nt'
                  >
                    Development
                  </span>
                </p>
              </div>
              <Moon
                size='medium'
                position='bottomLeft'
                background='red'
                customClass={s.moon}
                ref={(el) => { this.homePlanetM = el }}
              />
              <Moon
                size='normal'
                position='topMiddle'
                background='blue'
                customClass={s.moonSmall}
                ref={(el) => { this.homePlanetS = el }}
              />
            </div>

            <div class={s.work} ref={(el) => { this.homeWorkBlock = el }}>
              <Moon
                size='small'
                position='bottomLeft'
                background='red'
                customClass={s.moon}
                ref={(el) => { this.homePlanetWorkS = el }}
              />
              <div class={s.text}>
                <h1>Some of our work</h1>
                <p>Forward-thinking digital products that makes life easier and brings value to clients and consumers.</p>
              </div>
              <ProjectsBlock projects={data.frontCases} page='front' allCases={data.allCases} />
              <Button customClass={s.button} to='/work' label='See more projects' arrow transition='slide' />
            </div>

            <TeamPictures
              title='Behind the scenes'
              text='May we introduce ourselves? A well-attuned group of professionals enjoying working together.'
            />

          </div>
        </div>
      </Base>
    )
  }
}
