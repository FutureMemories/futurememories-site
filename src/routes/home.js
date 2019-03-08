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
  componentDidMount () {
    document.onmousemove = e => {
      this.clientX = e.clientX
      this.clientY = e.clientY
    }

    if (!this._frameId) {
      this._frameId = setInterval(() => {
        this.setState({ lightLeft: this.clientX / 30, lightTop: this.clientY / 30 })
      }, 100)
    }

    document.onscroll = () => {
      this.scrollPoint = window.pageYOffset + (window.innerHeight / 1.5)

      if (this.scrollPoint > this.informationBlock.offsetTop && window.pageYOffset < (this.informationBlock.offsetTop + this.informationBlock.offsetHeight)) {
        const blockTop = this.scrollPoint - this.informationBlock.offsetTop
        const aThird = (window.innerHeight / 3 - 80)

        if (!this.state.inViewInformationBlock) {
          this.setState({ inViewInformationBlock: true })
        }
        if (blockTop < aThird * 1) {
          this.setState({ InformationActive: 'design' })
        } else if (blockTop > aThird * 2 && blockTop < aThird * 3) {
          this.setState({ InformationActive: 'develop' })
        } else if (blockTop > aThird * 3) {
          this.setState({ InformationActive: 'strategy' })
        }
      }
    }
  }

  componentWillUnmount () {
    window.clearInterval(this._frameId)
  }

  render (_, { lightLeft, lightTop, InformationActive }) {
    return (
      <Base>
        <div class={s.view}>
          <div class={s.inner}>

            <div class={s.welcome}>
              <Moon size='normal' position='topRight' background='blue' customClass={s.moon} style={`margin-left: -${lightLeft}px; margin-top: -${lightTop}px;`} />
              <h1>
                <span>Future Memories</span> is a digital studio where strategic design and technology unite into products of tomorrow.
              </h1>
            </div>

            <div class={cx(s.information, this.state.inViewInformationBlock && s.inView)} ref={(el) => { this.informationBlock = el }}>
              <div class={s.foundationPillar}>
                <h2 class={(!InformationActive || InformationActive) === 'design' && s.active}>Design</h2>
                <h2 class={InformationActive === 'develop' && s.active}>Develop</h2>
                <h2 class={InformationActive === 'strategy' && s.active}>Strategy</h2>
              </div>
              <Moon size='medium' position='bottomLeft' background='red' customClass={s.moon} />
              <p class={(!InformationActive || InformationActive) === 'design' && s.active}>
                <span>Design</span> means different things to different people. For us, design means everything. The way it look and feels doesn’t really matter unless the core is thoroughly built. We deliver thoughtful and beautiful solutions with the user in mind.
              </p>
              <p class={InformationActive === 'develop' && s.active}>
                <span>Our developers</span> are our thrustors behind every successful launch. Making advanced technology solutions feel like first grade matchs and having it run like clockwork. Never afraid of diving deep into the universe to find solutions, and the results speak for itself.
              </p>
              <p class={InformationActive === 'strategy' && s.active}>
                <span>We use strategy</span> in order to figure out who you are and where you wish to go. The path could be quirky but doesn’t have to be. We take on complex business challenges and turn them into waterproof, yet often simple solutions.
              </p>
            </div>

            <div class={s.work}>
              <Moon size='small' position='bottomLeft' background='red' customClass={s.moon} />
              <div class={s.text}>
                <h1>Some of our work</h1>
                <p>We work with exceptional companies tirelessly to create products that makes all of our lives better.</p>
              </div>
              <ProjectsBlock projects={frontCases} limit={9898} />
              <Button customClass={s.button} to='/work' label='See all projects' arrow transition='slide' />
            </div>

            <TeamPictures
              title='Behind the surface'
              text='Behind every project there’s faces, faces with a broad range of skills. Make sure to check us out.'
            />

          </div>
        </div>
      </Base>
    )
  }
}
