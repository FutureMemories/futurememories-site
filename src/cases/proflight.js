import { Component } from 'preact'
import inView from 'in-view'
import s from './proflight.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import ProjectsBlock from './components/projects-block'
import TextGridBlock from './components/text-grid-block'
import TextBlock from './components/text-block'
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
      <Base>
        <div class={s.view} >
          <div class={s.inner}>

            <HeroHeader
              title='proFLIGHT'
              subtitle='Pilot Decision support'
            />

            <LargeImage src='cases/proflight-1.jpg' />

            <CenterBlock
              inView='inViewBottom'
              title='Flightmode on'
              text={`Presents in real time all required weather related information to the pilot in a nice and clear interface. The pilot can access everything from significant weather charts, SIGMETS and station information to tailored high resolution weather such as turbulence and winds along the flight plan route.`}
              background='#1A2132'
              color='#ffffff'
            />

            <TextGridBlock
              blocks={[
                { inView: 'inViewLeft', image: 'cases/proflight-2.png' },
                { inView: 'inViewRight', title: 'The sky’s the limit.', desc: `Developed in close cooperation with professional airline pilots to achieve a user friendly interface and a clear view of the weather and warnings/hazards along the planned flight route. The combination of the synchronized horizontal- and vertical view improves the pilot ́s situational awareness.` },
                { inView: 'inViewRight', image: 'cases/proflight-3.png' }, { inView: 'inViewLeft', image: 'cases/proflight-4.png' }
              ]}
              background='#161D2B'
            />

            <TextBlock
              inView='inViewBottom'
              title={`One flight ahead`}
              text={`Combining the real time access to high resolution weather and flight path optimization, assists the pilot in making better pre- and in-flight decisions leading to a safer and more efficient flight.`}
              image={['Paykartan Screenshoot - gothenburg', 'cases/proflight-5.png', 882]}
              background='#1A2132'
            />

            <ProjectsBlock current='proflight' background='#161D2B' />

          </div>
        </div>
      </Base>
    )
  }
}
