import { Component } from 'preact'
import inView from 'in-view'
import s from './bauer-university.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import ProjectsBlock from './components/projects-block'
import TextGridBlock from './components/text-grid-block'
import ThreeBlock from './components/three-block'
import CenterBlock from './components/center-block'

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child > div`,
  `${s.inner} > div:nth-child(4) > div:last-child > div`,
  `${s.inner} > div:nth-child(5) > div:first-child`
].join(',.')

export default class extends Component {
  componentDidMount () {
    inView.offset(200)
    inView(`.${inViewClasses}`).on('enter', el => {
      el.classList.add('inView')
    })
  }
  componentWillUnmount () {
    inView(`.${inViewClasses}`).off('enter')
  }

  render () {
    return (
      <Base title='Bauer University' dark>
        <div class={s.view} >
          <div class={s.inner}>

            <HeroHeader
              title='BAUER UNIVERSITY'
              subtitle='Better knowledge, better sales'
            />

            <LargeImage src='cases/bauer-university-1.jpg' alt='Bauer tablet mockup' />

            <CenterBlock
              inView='inViewBottom'
              title={`Train online,\nmore sales`}
              text='Gamification-based online training platform. Turns worldwide Bauer retailers into Bauer hockey gear experts'
            />

            <TextGridBlock
              blocks={[
                { inView: 'inViewLeft', image: 'cases/bauer-university-2.png', alt: 'Bauer University (Sales Training) tablet mockup' },
                { inView: 'inViewRight', title: 'Taking sales from Rookie to Pro.', desc: `Bauer University is a global teaching resource for Bauer representatives to make them even better at helping all hockey players find the right gear for their specific needs. The platform relies heavily on gamification.` },
                { inView: 'inViewRight', image: 'cases/bauer-university-3.png', alt: 'Bauer University (Product Category) tablet mockup' }, { inView: 'inViewLeft', image: 'cases/bauer-university-4.png', alt: 'Bauer University (Product Training) tablet mockup' }
              ]}
              background='#151D20'
              color='#ffffff'
            />

            <ThreeBlock
              inView='inViewBottom'
              background='#F9F9FA'
              blocks={[
                { type: 'image', image: 'cases/bauer-university-5.png', modifier: 'matSeIpad' },
                { type: 'text', title: 'Turbulence is so 2017', text: 'Because the pilots can get a weather report with current winds, they can plan their flight to avoid any turbulence and get a more fuel efficient, smoother journey.' }
              ]}
            />

            <ProjectsBlock current='bauer-university' background='#ffffff' />

          </div>
        </div>
      </Base>
    )
  }
}
