import { Component } from 'preact'
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
      }, 300)
    }
  }

  componentWillUnmount () {
    window.clearInterval(this._frameId)
  }

  render (_, { lightLeft, lightTop }) {
    return (
      <Base>
        <div class={s.view}>
          <div class={s.inner}>

            <div class={s.welcome} ref={(el) => { this.welcomeBlock = el }}>
              <Moon ref={(el) => { this.hej = el }} size='normal' position='topRight' background='blue' customClass={s.moon} style={`margin-left: -${lightLeft}px; margin-top: -${lightTop}px;`} />
              <h1>
                <span>Future Memories</span> is a digital studio where strategic design and technology unite into products of tomorrow.
              </h1>
            </div>

            <div class={s.information}>
              <div class={s.foundationPillar}>
                <h2>UX</h2>
                <h2>Design</h2>
                <h2>Tech</h2>
              </div>
              <Moon size='medium' position='bottomLeft' background='red' customClass={s.moon} />
              <p>
                <strong>We are digital experts</strong> that combine our designers and developers brilliant minds to aid you in your project or product. We offer you help with User experience design, UI design, Branding and development for both iOS & web.
              </p>
            </div>

            <div class={s.work}>
              <Moon size='small' position='bottomLeft' background='red' customClass={s.moon} />
              <div class={s.text}>
                <h1>Some of our work</h1>
                <p>We work with exceptional companies tirelessly to create products that makes all of our lives better.</p>
              </div>
              <ProjectsBlock projects={frontCases} />
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
