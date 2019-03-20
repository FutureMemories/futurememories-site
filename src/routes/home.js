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
      setTimeout(() => {
        this.setState({ lightLeft: 51, lightTop: 51 })
      }, 100)
    }

    window.addEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    this.scrollPoint = window.pageYOffset + (window.innerHeight / 1.5)

    if (window.pageYOffset < (this.heroText.offsetTop + this.heroText.offsetHeight)) {
      this.heroText.style = `top: -${(window.pageYOffset / 5).toFixed(1)}px`
    }

    if (this.scrollPoint > this.informationBlock.offsetTop && window.pageYOffset < (this.informationBlock.offsetTop + this.informationBlock.offsetHeight)) {
      const blockTop = this.scrollPoint - this.informationBlock.offsetTop
      const aThird = (window.innerHeight / 3 - 80)

      if (blockTop < aThird * 1) {
        this.setState({ InformationActive: 'strategy' })
      } else if (blockTop > aThird * 2 && blockTop < aThird * 3) {
        this.setState({ InformationActive: 'design' })
      } else if (blockTop > aThird * 3) {
        this.setState({ InformationActive: 'develop' })
      }
    }
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll)
    window.clearInterval(this._planetShine)
    // window.clearInterval(this._frameId)
  }

  render ({ firstView }, { lightLeft, lightTop }) {
    return (
      <Base firstView={firstView}>
        <div class={s.view}>
          <div class={s.inner}>

            <div class={s.welcome}>
              <Moon position={firstView ? 'middleRight' : 'bottomLeft'} size='medium' background='blue' customClass={cx(s.moon, firstView && s.firstView)} style={{ left: lightLeft, top: lightTop }} />
              <h1 class={firstView && s.firstView} ref={(el) => { this.heroText = el }}>
                <span>Future Memories</span> is a digital studio where strategic design and technology unite into products of tomorrow.
              </h1>
            </div>

            <div class={cx(s.information, this.state.inViewInformationBlock && s.inView)} ref={(el) => { this.informationBlock = el }}>
              <div class={s.foundationPillar}>
                <h1>What we do</h1>
                <p>
                  <span>Strategy</span>, <span>Design</span> & <span>Development</span>
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
