import { Component } from 'preact'
import cx from 'classnames'
import Base from '../_base'
import ProjectsBlock from '../components/projects-block'
import Button from '../components/button'
import Moon from '../components/moon'
import TeamPictures from '../components/team-pictures'
import { frontCases } from '../data.json'
import s from './home.sass'

export default class extends Component {
  state = { preActivePillar: [], activePillar: [] }
  componentDidMount () {
    // document.onmousemove = e => {
    //   this.clientX = e.clientX
    //   this.clientY = e.clientY
    // }

    // if (!this._frameId) {
    //   this._frameId = setInterval(() => {
    //     this.setState({ lightLeft: this.clientX / 30, lightTop: this.clientY / 30 })
    //   }, 100)
    // }

    // Move planet light if firstView is true
    if (this.props.firstView) {
      let x = 0
      this._planetShine = setInterval(() => {
        x++
        if (x > 16) { clearInterval(this._planetShine) }
        this.setState({ lightLeft: 3 * x, lightTop: 3 * x })
      }, 145)
    }

    // randomize glitch effect
    const foundationPillars = ['strategy', 'design', 'develop']
    const glitchColors = [s.red, s.blue, s.white]
    this.randomizer = setInterval(() => {
      const randomPillar = foundationPillars[Math.floor(Math.random() * foundationPillars.length)]
      const randomColor = glitchColors[Math.floor(Math.random() * glitchColors.length)]
      this.setState({
        preActivePillar: this.state.activePillar,
        activePillar: [randomPillar, randomColor]
      })
      // Remove old pillar after x milliseconds
      setTimeout(() => {
        this.setState({ preActivePillar: [] })
      }, Math.floor(Math.random() * 1000))
    }, Math.floor(Math.random() * 1000) + 1000)

    window.addEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    this.scrollPoint = window.pageYOffset + (window.innerHeight / 1.5)

    if (window.pageYOffset < (this.heroText.offsetTop + this.heroText.offsetHeight)) {
      this.heroText.style = `top: -${(window.pageYOffset / 5).toFixed(1)}px`
    }
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll)
    window.clearInterval(this._planetShine)
    window.clearInterval(this._randomizer)
  }

  render ({ firstView }, { lightLeft, lightTop, activePillar, preActivePillar }) {
    return (
      <Base firstView={firstView}>
        <div class={s.view}>
          <div class={s.inner}>

            <div class={s.welcome}>
              <Moon position={firstView ? 'middleRight' : 'topRight'} size='medium' background='blue' customClass={cx(s.moon, firstView && s.firstView)} style={{ left: lightLeft, top: lightTop }} />
              <h1 class={firstView && s.firstView} ref={(el) => { this.heroText = el }}>
                <span>Future Memories</span> is a digital studio where strategic design and technology unite into products of tomorrow.
              </h1>
            </div>

            <div class={cx(s.information, this.state.inViewInformationBlock && s.inView)} ref={(el) => { this.informationBlock = el }}>
              <div class={s.foundationPillar}>
                <h1>What we do</h1>
                <p>
                  <span
                    class={cx(
                      (activePillar[0] === 'strategy' || preActivePillar[0] === 'strategy') && s.glitch,
                      activePillar[0] === 'strategy' && activePillar[1],
                      preActivePillar[0] === 'strategy' && preActivePillar[1]
                    )}
                    data-text='Str4t3gy'
                  >
                    Strategy
                  </span>
                  {`, `}
                  <span
                    class={cx(
                      (activePillar[0] === 'design' || preActivePillar[0] === 'design') && s.glitch,
                      activePillar[0] === 'design' && activePillar[1],
                      preActivePillar[0] === 'design' && preActivePillar[1]
                    )}
                    data-text='Des1gn'
                  >
                    Design
                  </span>
                  {` & `}
                  <span
                    class={cx(
                      (activePillar[0] === 'develop' || preActivePillar[0] === 'develop') && s.glitch,
                      activePillar[0] === 'develop' && activePillar[1],
                      preActivePillar[0] === 'develop' && preActivePillar[1]
                    )}
                    data-text='Devel0pm3nt'
                  >
                    Development
                  </span>
                </p>
              </div>
              <Moon size='medium' position='bottomLeft' background='red' customClass={s.moon} />
              <Moon size='normal' position='topRight' background='blue' customClass={s.moonSmall} />
            </div>

            <div class={s.work}>
              <Moon size='small' position='bottomLeft' background='red' customClass={s.moon} />
              <div class={s.text}>
                <h1>Some of our work</h1>
                <p>Forward-thinking digital products that makes life easier and brings value to clients and consumers.</p>
              </div>
              <ProjectsBlock projects={frontCases} limit={3} />
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
